# GSI A2 - PRACTICA ACTIVA 11

## Supuestos integradores de desarrollo - SOLUCIONARIO Y GUIA DE CORRECCION

**Base:** III.03, III.06, III.07, III.09, III.12 y III.14; se integran III.04, III.08 y III.13 cuando el caso lo exige.

**Formato de entrenamiento:** cada supuesto tiene 5 preguntas. Practica primero en 90 minutos y despues en 180 minutos para los simulacros 9 y 10. La convocatoria vigente establece un supuesto a elegir entre dos, 5 preguntas y un maximo de 180 minutos; se valora aplicacion tecnica, analisis, sistematica y expresion escrita.

**Como corregirte:** 1) responde exactamente a lo preguntado; 2) justifica decisiones por requisito/riesgo; 3) separa arquitectura, datos, seguridad, pruebas y operacion; 4) evita listas de productos; 5) utiliza terminologia de los V2.1; 6) indica supuestos y alternativas cuando no haya una unica solucion.

# Mapa de cobertura

| Supuesto | Foco | Dificultad |
| --- | --- | --- |
| 1. Modernizacion de un portal de ayudas | III.03 + III.06 + III.07 + III.08 + III.09 + III.12 + III.14 | Alta |
| 2. Sustitucion de un sistema legado de expedientes | III.03 + III.04 + III.07 + III.08 + III.09 | Alta |
| 3. Portal de cita previa con alta demanda | III.04 + III.07 + III.12 + III.13 + III.14 | Alta |
| 4. API interadministrativa segura | III.06 + III.07 + III.09 + III.12 | Alta |
| 5. Servicio publico multidispositivo y accesible | III.07 + III.12 + III.14 | Alta |
| 6. Cadena CI/CD y software supply chain | III.06 + III.07 + III.13 | Alta |
| 7. Workflow de expedientes y patrones de diseno | III.09 + III.07 + III.13 | Alta |
| 8. Recepcion de una solucion de proveedor | III.06 + III.07 + III.08 + III.13 + III.14 | Alta |
| 9. SIMULACRO A - Plataforma de tramitacion integral | SIMULACRO integral III.03/04/06/07/08/09/12/13/14 | Simulacro completo |
| 10. SIMULACRO B - Aplicacion de inspecciones de campo | SIMULACRO integral III.03/07/08/09/12/14 | Simulacro completo |

# SUPUESTO 1 - Modernizacion de un portal de ayudas

**Enunciado:** Un organismo sustituira un portal antiguo de solicitud de ayudas. El sistema actual tiene formularios web, una base de datos relacional, intercambio nocturno de ficheros con otros organismos y numerosas reglas de negocio no documentadas. El nuevo servicio debe ser multidispositivo, accesible, trazable, seguro y permitir evolucion continua sin perder los hitos formales de aceptacion.

Pregunta 1

Plantee una estrategia para obtener y especificar requisitos, incluyendo la derivacion del sistema existente y requisitos no funcionales verificables.

**Respuesta modelo / puntos que deben aparecer:**

Inventariar procesos, pantallas, datos, interfaces, roles, informes, reglas y excepciones del legado; combinar observacion, entrevistas/talleres, analisis documental/codigo/logs, modelo de datos y prototipos. Diferenciar requisito real de limitacion heredada. Especificar SRS/ERS con funcionales, reglas, interfaces, datos, NFR, restricciones, criterios de aceptacion y trazabilidad. Ejemplos NFR: p95 <2 s bajo carga definida, disponibilidad mensual acordada, MFA a privilegiados, conformidad de accesibilidad aplicable y RTO/RPO por proceso.

Pregunta 2

Proponga una arquitectura logica de alto nivel para la nueva aplicacion web e indique que diagramas/modelos utilizaria para comunicarla.

**Respuesta modelo / puntos que deben aparecer:**

Arquitectura por capas/componentes: frontend web responsive/PWA si aporta valor -> API/servicios de aplicacion -> dominio -> persistencia relacional -> integraciones con otros organismos; identidad, logs/trazas y configuracion como transversales. No imponer microservicios. UML: casos de uso para objetivos, clases/modelo de dominio, secuencia para integraciones, componentes para arquitectura y despliegue para nodos/artefactos. Los modelos se usan solo donde aclaran una decision.

Pregunta 3

Defina una estrategia de construccion, control de versiones, CI/CD y despliegue que mantenga trazabilidad y permita cambios frecuentes.

**Respuesta modelo / puntos que deben aparecer:**

Repositorio Git con cambios pequenos, revisiones y trazabilidad. Build reproducible con dependencias fijadas y artefactos inmutables. Pipeline: checkout -> dependencias -> build -> analisis estatico -> unitarias -> integracion -> seguridad -> empaquetado -> artefacto. Promover el mismo artefacto entre entornos con configuracion externa. Continuous Delivery con aprobacion para produccion si el gobierno lo exige; canary/blue-green/rolling solo si ayudan y con rollback compatible con migraciones de BD.

Pregunta 4

Disene una estrategia de pruebas que cubra software, datos, procedimientos, seguridad, rendimiento y accesibilidad.

**Respuesta modelo / puntos que deben aparecer:**

Plan por riesgos: unitarias, integracion, sistema y aceptacion; caja negra con particiones/limites/decisiones/estados y caja blanca donde compense. Datos sinteticos/anonimizados y datasets versionados. Probar migracion con conteos, reconciliacion, claves y excepciones. Procedimientos: backup/restauracion, alta/baja, cutover, rollback y contingencia. No funcionales: carga/estres, seguridad, accesibilidad automatica + manual/teclado y compatibilidad multidispositivo. Trazabilidad requisito->prueba->evidencia.

Pregunta 5

Explique como prepararia la implantacion, migracion, rollback, formacion, documentacion y evaluacion postimplantacion.

**Respuesta modelo / puntos que deben aparecer:**

Elegir estrategia de sustitucion segun riesgo: piloto/fases/paralelo si conviene; big bang solo con justificacion y rollback probado. Plan de cutover: congelacion, backup, exportacion, migracion, validacion, cambio de rutas/DNS si aplica, arranque, smoke tests y go/no-go. Manuales de usuario, instalacion, explotacion/runbook, administracion y arquitectura. Formacion por perfiles con practica y evaluacion. Hypercare y postimplantacion comparando disponibilidad, rendimiento, incidencias, adopcion, costes y beneficios.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 2 - Sustitucion de un sistema legado de expedientes

**Enunciado:** Una aplicacion cliente-servidor de 18 anos gestiona expedientes. Parte de la logica esta en la aplicacion, parte en procedimientos de base de datos y parte en instrucciones informales de los usuarios. Debe migrarse a una aplicacion web sin perder historico ni reglas de negocio, y durante la transicion no se admite perdida de expedientes.

Pregunta 1

Describa como obtendria requisitos fiables a partir del sistema existente y como evitaria copiar deuda del legado.

**Respuesta modelo / puntos que deben aparecer:**

Ingenieria inversa funcional: inventario de procesos, interfaces, datos, reglas, roles, informes y excepciones; observacion de usuarios, analisis de pantallas, documentacion, codigo, logs y BD, mas talleres as-is/to-be. Cada comportamiento heredado debe clasificarse como requisito, restriccion temporal, error o deuda. Versionar requisitos y mantener matriz de trazabilidad.

Pregunta 2

Proponga un modelo de dominio y de datos a alto nivel y explique la trazabilidad entre requisito, diseno, codigo y prueba.

**Respuesta modelo / puntos que deben aparecer:**

Modelo de dominio con entidades, responsabilidades y relaciones sin contaminarlo con tecnologia; paso a relacional con PK/FK/restricciones y normalizacion apropiada. Trazabilidad necesidad -> requisito -> componente/clase/modelo de datos -> implementacion -> caso de prueba -> version desplegada. UML de clases para dominio y secuencia para operaciones criticas/integraciones.

Pregunta 3

Compare big bang, paralelo, piloto y migracion por fases para este caso y elija una estrategia razonada.

**Respuesta modelo / puntos que deben aparecer:**

Paralelo reduce riesgo de perdida y permite comparar, pero duplica operacion y exige sincronizacion. Piloto limita impacto pero debe ser representativo. Fases reducen impacto progresivo pero crean coexistencia/interfaces temporales. Big bang es rapido pero maximiza riesgo. Para un historico critico sin perdida, elegiria piloto/fases o paralelo segun posibilidad de doble operacion, con criterios de reconciliacion y punto de no retorno.

Pregunta 4

Defina pruebas especificas para la migracion de datos y para los procedimientos operativos de cambio.

**Respuesta modelo / puntos que deben aparecer:**

Pruebas de datos: conteos origen/destino, totales de control, claves/referencias, formatos, duplicados, reglas, muestreo y trazabilidad de transformaciones. Ensayar varias migraciones. Pruebas de procedimientos: backup/restauracion, congelacion, exportacion, carga, validacion, rollback, escalado de incidencias y contingencia. El rollback debe estar probado, no solo documentado.

Pregunta 5

Explique como organizaria la recepcion tecnica y los criterios de aceptacion del nuevo sistema.

**Respuesta modelo / puntos que deben aparecer:**

Recepcion: comprobar software/artefactos, codigo y licencias, configuracion, documentacion, formacion, resultados de pruebas, vulnerabilidades, inventario y condiciones contractuales. Criterios de aceptacion ligados a requisitos medibles, migracion reconciliada, defectos criticos, rendimiento, seguridad, accesibilidad y operacion. Registrar defectos/condiciones pendientes y evidencia de aceptacion.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 3 - Portal de cita previa con alta demanda

**Enunciado:** Un servicio de cita previa se satura en aperturas de campana. Debe funcionar desde movil y escritorio, soportar grandes picos, evitar reservas dobles, proteger datos personales y mantener una experiencia accesible. El organismo quiere una solucion mantenible y observable.

Pregunta 1

Formule requisitos no funcionales verificables para rendimiento, disponibilidad, seguridad y accesibilidad.

**Respuesta modelo / puntos que deben aparecer:**

Convertir adjetivos en medidas: p95/p99 bajo carga y patron definidos, throughput, capacidad maxima, disponibilidad mensual con convencion, RTO/RPO, MFA/controles cuando aplique, cifrado en transito y requisitos de accesibilidad aplicables con pruebas manuales. Cada NFR debe tener condicion, umbral y criterio de aceptacion.

Pregunta 2

Proponga una arquitectura web de alto nivel y explique donde colocaria cache, CDN, persistencia y controles de concurrencia.

**Respuesta modelo / puntos que deben aparecer:**

Cliente web responsive -> CDN para estaticos/cache cuando proceda -> frontend/API -> servicios -> BD relacional. Cache solo para datos compatibles con consistencia; no para saltarse reglas de reserva. Persistencia con restriccion de integridad y transaccion corta. Observabilidad con logs, metricas y trazas. HTTPS/TLS no sustituye controles de aplicacion.

Pregunta 3

Explique como impediria dobles reservas y como probaria ese comportamiento bajo concurrencia.

**Respuesta modelo / puntos que deben aparecer:**

La regla universal debe apoyarse en BD: UNIQUE sobre slot discreto o mecanismo equivalente; transaccion corta que intenta reservar y maneja conflicto. Para intervalos, usar mecanismo de exclusión/serializacion/control transaccional segun SGBD. Evitar patron 'leer libre y luego insertar' sin proteccion. Probar carreras concurrentes y verificar que solo una transaccion logra la reserva.

Pregunta 4

Disene la estrategia de pruebas de rendimiento, recuperacion y accesibilidad.

**Respuesta modelo / puntos que deben aparecer:**

Carga: volumen normal y pico; estres para limites; endurance si procede; capacidad y p95/p99. Recuperacion: fallo y restauracion real, RTO/RPO. Accesibilidad: automatizacion + teclado, foco, reflow/zoom, contraste, formularios/errores y lector de pantalla cuando proceda. Compatibilidad multidispositivo/navegadores segun alcance.

Pregunta 5

Indique que metricas operativas y de calidad usaria tras el despliegue y como evitaria optimizar una sola metrica.

**Respuesta modelo / puntos que deben aparecer:**

Servicio: disponibilidad, p95/p99, error rate, throughput, saturacion y SLO. Producto: defectos escapados, vulnerabilidades, cobertura contextual y mantenibilidad. UX: exito de tarea/errores/satisfaccion. No usar una 'metrica reina': un AHT equivalente o una latencia baja no compensa fallos, errores o inaccesibilidad.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 4 - API interadministrativa segura

**Enunciado:** Varios organismos necesitan consultar y actualizar informacion mediante una API HTTP. Hay consumidores internos y externos, diferentes niveles de autorizacion y necesidad de versionado, trazabilidad y alta disponibilidad. Debe existir documentacion de contrato y pruebas automatizadas.

Pregunta 1

Defina el contrato de la API y sus elementos operativos basicos.

**Respuesta modelo / puntos que deben aparecer:**

Definir recursos/operaciones, metodos HTTP, codigos, formatos, errores, paginacion, idempotencia, versionado, limites, timeouts y contrato OpenAPI. Si hubiera mensajeria, AsyncAPI puede documentar contratos. El contrato debe incluir expectativas operativas, no solo JSON feliz.

Pregunta 2

Diferencie autenticacion y autorizacion y explique OAuth 2.0, OIDC y JWT al nivel de los apuntes.

**Respuesta modelo / puntos que deben aparecer:**

Autenticacion responde quien es; autorizacion que puede hacer. OAuth 2.0 delega autorizacion; OIDC anade identidad/autenticacion. JWT es formato de token, no protocolo; validar firma, issuer, audience, expiracion y claims. No se cifra por defecto.

Pregunta 3

Proponga controles de seguridad y trazabilidad para la API.

**Respuesta modelo / puntos que deben aparecer:**

TLS, validacion de entrada, control de acceso server-side, minimo privilegio, rate limiting, secretos fuera de codigo, logging sin datos sensibles, correlacion/trazas y monitorizacion. Registrar acciones relevantes con identidad y resultado; no confiar en CORS como autenticacion.

Pregunta 4

Explique como versionaria, probaria y desplegaria cambios sin romper consumidores.

**Respuesta modelo / puntos que deben aparecer:**

Cambios compatibles cuando sea posible; versionado explicito para roturas. Tests de contrato, unitarias, integracion, seguridad y regresion. CI con build reproducible, analisis, pruebas y artefacto inmutable. Canary/blue-green solo si reduce riesgo; rollback compatible con datos. Mantener consumidores y contratos en trazabilidad.

Pregunta 5

Indique que diagramas UML o artefactos documentales aportarian valor y por que.

**Respuesta modelo / puntos que deben aparecer:**

UML de secuencia para interacciones entre consumidor, API, identidad y backend; componentes para modulos/servicios; despliegue para runtime/nodos. OpenAPI es artefacto contractual. ADR para decisiones relevantes y runbook para operacion/incidencias.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 5 - Servicio publico multidispositivo y accesible

**Enunciado:** Se construira un portal para tramites ciudadanos. Debe funcionar en escritorio y movil, admitir varios idiomas, ser accesible, mantener sesion de forma segura y permitir que determinados tramites continuen desde otro dispositivo.

Pregunta 1

Explique responsive web, PWA y aplicaciones nativas/hibridas al nivel necesario para decidir arquitectura.

**Respuesta modelo / puntos que deben aparecer:**

Responsive adapta presentacion. PWA puede anadir service worker, instalacion y capacidades offline. Apps nativas/hibridas pueden consumir las mismas APIs. Elegir por requisitos de capacidades, distribucion, mantenimiento y experiencia; no por moda. Backend valida siempre seguridad/reglas, no confiar en cliente.

Pregunta 2

Defina medidas de accesibilidad y usabilidad desde requisitos hasta aceptacion.

**Respuesta modelo / puntos que deben aparecer:**

Accesibilidad desde requisitos y componentes: HTML semantico, teclado, foco, alternativas textuales, contraste, labels/errores, reflow, multimedia y ARIA solo cuando nativo no basta. Evaluar automatica + manualmente y con usuarios cuando proceda. Usabilidad: eficacia, eficiencia y satisfaccion en contexto; accesibilidad y usabilidad no son sinonimos.

Pregunta 3

Explique i18n y l10n y los problemas de fechas, numeros, Unicode, pluralizacion y zonas horarias.

**Respuesta modelo / puntos que deben aparecer:**

i18n prepara el software; l10n adapta a locale. Unicode/UTF-8, formatos de fecha/numero/moneda, pluralizacion, collation, RTL y zonas horarias. Guardar instantes en UTC es habitual, pero eventos futuros ligados a zona local pueden requerir conservar zona/regla, no solo offset.

Pregunta 4

Proponga un modelo de sesion/identidad web seguro y explique cookies, CORS, CSP y CSRF sin confundirlos.

**Respuesta modelo / puntos que deben aparecer:**

HTTP es stateless; estado mediante cookies/tokens/servidor. Cookies Secure/HttpOnly/SameSite segun modelo. CORS declara origenes permitidos al navegador, no autentica. CSP restringe fuentes y reduce XSS. CSRF afecta especialmente sesiones basadas en cookies y se mitiga con SameSite/tokens/diseno. OIDC para identidad si arquitectura lo requiere.

Pregunta 5

Disene una estrategia de pruebas multidispositivo, accesibilidad, internacionalizacion y seguridad.

**Respuesta modelo / puntos que deben aparecer:**

Matriz de navegadores/dispositivos, pruebas responsive y orientacion/zoom; accesibilidad automatizada + teclado/foco/lector; locales, formatos, pluralizacion, RTL si aplica y timezone; seguridad de sesion, CSRF, control de acceso, expiracion y recuperacion. Automatizar regresion razonable, manteniendo pruebas manuales donde son necesarias.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 6 - Cadena CI/CD y software supply chain

**Enunciado:** Un equipo despliega semanalmente una aplicacion web. Se han detectado dependencias vulnerables, secretos en repositorio, builds no reproducibles y diferencias entre preproduccion y produccion. La direccion pide aumentar velocidad sin perder control.

Pregunta 1

Disene un pipeline CI/CD completo y explique la diferencia entre CI, Continuous Delivery y Continuous Deployment.

**Respuesta modelo / puntos que deben aparecer:**

CI integra cambios frecuentes con build/pruebas automaticas. Pipeline: checkout -> dependencias -> build -> analisis estatico -> unitarias -> empaquetado -> SAST/SCA/secretos/IaC segun riesgo -> pruebas integracion -> artefacto. Delivery mantiene desplegable y puede requerir aprobacion; Deployment despliega automaticamente al superar controles.

Pregunta 2

Indique como conseguir builds reproducibles y artefactos trazables.

**Respuesta modelo / puntos que deben aparecer:**

Dependencias fijadas/lockfiles, repositorios controlados, entorno reproducible, versionado, checksums/SBOM cuando proceda y artefactos inmutables. Promover el mismo artefacto entre entornos, con configuracion externa. Evitar 'reconstruir para produccion'.

Pregunta 3

Defina quality gates vinculados a riesgo y controles de supply chain.

**Respuesta modelo / puntos que deben aparecer:**

Gates ligados a riesgo: compilacion, tests, cobertura razonada, analisis estatico, SAST, SCA, secretos, imagen/IaC/licencias. Supply chain: repositorios, firmas/provenance, secretos, runners y dependencias. Un gate sin capacidad de corregir genera ruido.

Pregunta 4

Compare rolling, blue-green y canary, e indique el papel de feature flags y rollback.

**Respuesta modelo / puntos que deben aparecer:**

Rolling sustituye gradualmente; blue-green mantiene dos entornos y conmuta; canary expone gradualmente a parte del trafico. Feature flags desacoplan exposicion funcional de despliegue. Rollback debe considerar compatibilidad de esquemas/migraciones; a veces roll-forward es mas seguro.

Pregunta 5

Explique que documentacion y formacion son necesarias para que la entrega sea operable.

**Respuesta modelo / puntos que deben aparecer:**

Arquitectura/ADR, API/contratos, instalacion/despliegue, runbooks de operacion/backup/incidencias, administracion y manual de usuario cuando proceda. Formacion por perfiles, entorno de practica, evaluacion y soporte inicial. La aceptacion operativa incluye conocimiento, no solo binarios.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 7 - Workflow de expedientes y patrones de diseno

**Enunciado:** Se va a desarrollar un sistema de expedientes con estados, tareas, notificaciones y reglas configurables. Se desea evitar un gran bloque condicional dificil de mantener. Tambien se integrara con un servicio externo de notificaciones con una interfaz incompatible con el modelo interno.

Pregunta 1

Modele conceptualmente el dominio y proponga diagramas UML utiles.

**Respuesta modelo / puntos que deben aparecer:**

Analisis OO: Expediente, Estado, Tarea, Regla, Notificacion, Usuario/Rol y relaciones/responsabilidades. UML de clases para estructura, estados para ciclo de vida del expediente, secuencia para transiciones/integraciones y componentes para modulos. No usar diagramas decorativos.

Pregunta 2

Explique que patron aplicaria al comportamiento dependiente del estado y por que.

**Respuesta modelo / puntos que deben aparecer:**

State: encapsula comportamiento que varia con el estado y permite cambiarlo al transicionar, evitando grandes condicionales. No confundir con Strategy: ambos pueden parecerse estructuralmente, pero State representa comportamiento condicionado por estado interno.

Pregunta 3

Explique que patron aplicaria para integrar una interfaz externa incompatible.

**Respuesta modelo / puntos que deben aparecer:**

Adapter: hace compatibles interfaces sin cambiar el nucleo. Facade solo simplificaria una interfaz compleja; no resuelve por si sola incompatibilidad semantica.

Pregunta 4

Proponga como desacoplar notificaciones del nucleo y que riesgos debe gestionar.

**Respuesta modelo / puntos que deben aparecer:**

Observer/event-driven puede notificar cambios a interesados/handlers; Command puede encapsular solicitudes. Si se usa mensajeria, definir idempotencia, retries, errores y trazabilidad. El patron debe resolver un problema concreto; no es obligatorio introducir broker.

Pregunta 5

Defina pruebas y criterios de mantenibilidad para evitar que el diseno se degrade.

**Respuesta modelo / puntos que deben aparecer:**

Pruebas de transiciones validas/invalidas, reglas, integracion externa y regresion. Mantenibilidad: modularidad, bajo acoplamiento, alta cohesion, analizabilidad, modificabilidad y testabilidad. Quality gates con complejidad/duplicacion contextualizadas, revisiones y tests, sin convertir una metrica en objetivo absoluto.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 8 - Recepcion de una solucion de proveedor

**Enunciado:** Un proveedor entrega una nueva plataforma web a una Administracion. La documentacion es incompleta, existen dudas sobre licencias y componentes, las pruebas realizadas por el proveedor no cubren recuperacion ni accesibilidad y el personal de operacion no ha recibido formacion.

Pregunta 1

Defina que debe incluir una recepcion tecnica completa.

**Respuesta modelo / puntos que deben aparecer:**

Comprobar entregables contractuales: software, codigo/artefactos, versiones/configuracion, licencias, SBOM/terceros si se exige, documentacion, formacion, pruebas, vulnerabilidades, inventario e infraestructura. Mantener evidencia de aceptacion.

Pregunta 2

Proponga una estrategia de pruebas de aceptacion y cierre antes de pasar a produccion.

**Respuesta modelo / puntos que deben aparecer:**

Cobertura de requisitos y defectos criticos, funcionales e integracion; rendimiento, seguridad, accesibilidad; pruebas de recuperacion, instalacion y procedimientos; datos si hay migracion. Criterios de entrada/salida y riesgo residual. 'Todos los tests del proveedor pasan' no basta si faltan objetos/tipos de prueba.

Pregunta 3

Indique que documentacion debe exigirse y para que destinatario.

**Respuesta modelo / puntos que deben aparecer:**

Arquitectura/ADR, contratos/API, instalacion/despliegue, manual de explotacion/runbook, administracion, usuario, seguridad/configuracion e inventario. Cada documento debe responder a un destinatario y mantenerse versionado.

Pregunta 4

Disene un plan de formacion y transferencia de conocimiento.

**Respuesta modelo / puntos que deben aparecer:**

Perfiles (operacion, soporte, administracion, usuarios clave, desarrollo), objetivos, material, sesiones practicas/sandbox, evaluacion y soporte inicial. Medir competencia/adopcion y dudas, no solo asistencia.

Pregunta 5

Explique que riesgos justifican retrasar la aceptacion y como documentaria condiciones pendientes.

**Respuesta modelo / puntos que deben aparecer:**

Ausencia de recuperacion probada, defectos graves, vulnerabilidades criticas, incumplimiento de accesibilidad/requisitos, licencias inciertas, falta de rollback/runbook o imposibilidad de operar justifican no aceptar. Registrar defectos, severidad, responsable, fecha, condicion de cierre y riesgo aceptado formalmente.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 9 - SIMULACRO A - Plataforma de tramitacion integral

**Enunciado:** Una Administracion quiere una plataforma unica para iniciar tramites, aportar documentos, consultar estado y recibir notificaciones. Se integrara con servicios corporativos de identidad y con varios sistemas existentes. El servicio debe ser accesible, seguro, auditable y evolucionar mediante entregas frecuentes. Parte de los datos historicos deben migrarse.

Pregunta 1

Elabore la estrategia de requisitos, trazabilidad y priorizacion, incluyendo derivacion de sistemas existentes.

**Respuesta modelo / puntos que deben aparecer:**

Respuesta esperada con estructura: stakeholders -> elicitacion -> as-is/to-be y legado -> RF/NFR/restricciones -> SRS/criterios -> priorizacion -> trazabilidad y cambio. NFR medibles de rendimiento, disponibilidad, seguridad, accesibilidad y continuidad. No copiar deuda heredada.

Pregunta 2

Proponga arquitectura, modelo de datos e integraciones. Justifique los diagramas de diseno que emplearia.

**Respuesta modelo / puntos que deben aparecer:**

Frontend web multidispositivo -> API/servicios -> dominio -> BD relacional normalizada -> integraciones con identidad/notificaciones/sistemas legado. Contratos/versionado, idempotencia en operaciones criticas y logs/trazas. Modelo de datos con integridad universal en BD. UML: casos de uso, clases, secuencia, componentes y despliegue segun duda.

Pregunta 3

Defina construccion, CI/CD, seguridad de la cadena y estrategia de despliegue.

**Respuesta modelo / puntos que deben aparecer:**

Git/review -> build reproducible -> quality gates -> artefacto inmutable -> promocion por entornos. SAST/SCA/secretos/IaC segun riesgo, gestion externa de secretos y provenance/SBOM si se exige. Delivery con aprobacion; despliegue progresivo y rollback/roll-forward compatible con BD.

Pregunta 4

Defina el plan de pruebas y aceptacion, incluyendo datos, accesibilidad, seguridad y rendimiento.

**Respuesta modelo / puntos que deben aparecer:**

Plan por riesgo: unitarias/integracion/sistema/aceptacion; caja negra/limites/estados; contrato; performance; seguridad; accesibilidad automatica+manual; migracion con reconciliacion; procedimientos de restauracion/cutover. Datos sinteticos/anonimizados. Criterios de salida: cobertura requisitos, defectos criticos, NFR y riesgo residual.

Pregunta 5

Prepare el plan de implantacion, continuidad, documentacion, formacion y postimplantacion.

**Respuesta modelo / puntos que deben aparecer:**

Estrategia piloto/fases segun riesgo; cutover con backup, migracion, validacion, go/no-go y rollback. Continuidad y RTO/RPO por proceso. Manuales/runbooks/ADR/API. Formacion por perfiles. Hypercare con disponibilidad, p95, errores, incidencias, adopcion, satisfaccion, costes y revision postimplantacion.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# SUPUESTO 10 - SIMULACRO B - Aplicacion de inspecciones de campo

**Enunciado:** Un organismo necesita una aplicacion para inspectores que trabajan desde portatiles y moviles. Deben consultar expedientes, registrar actuaciones, adjuntar evidencias y sincronizar informacion con el sistema central. Algunas zonas tienen conectividad inestable. Se requiere accesibilidad, trazabilidad, seguridad y una implantacion progresiva por regiones.

Pregunta 1

Defina requisitos funcionales/no funcionales y una estrategia de prototipado con usuarios de campo.

**Respuesta modelo / puntos que deben aparecer:**

Entrevistas/observacion en campo, talleres y prototipos para flujos reales. RF: consulta, captura, evidencias, estados, sincronizacion. NFR verificables: respuesta local/remota, seguridad, disponibilidad central, accesibilidad, limites de almacenamiento, trazabilidad y RTO/RPO. Criterios de aceptacion por tarea.

Pregunta 2

Proponga arquitectura multidispositivo y tratamiento de la conectividad inestable, indicando decisiones que requieren especial control de datos.

**Respuesta modelo / puntos que deben aparecer:**

Responsive/PWA o app nativa/hibrida segun capacidades/offline; APIs centrales; almacenamiento local controlado solo si se justifica, cifrado/proteccion y sincronizacion posterior. El backend sigue siendo autoridad para reglas. Diseñar identificadores, versionado y politica de conflictos; no asumir que 'offline' se resuelve solo con cache.

Pregunta 3

Modele el flujo de una inspeccion y las principales entidades/estados usando UML donde aporte valor.

**Respuesta modelo / puntos que deben aparecer:**

UML de actividad para flujo de inspeccion, estados para ciclo de vida, clases para entidades (Expediente, Inspeccion, Actuacion, Evidencia, Inspector), secuencia para sincronizacion/conflictos y componentes para arquitectura. Mantener trazabilidad entre requisito y flujo.

Pregunta 4

Disene pruebas para sincronizacion, conflictos, dispositivos, accesibilidad, seguridad y procedimientos de contingencia.

**Respuesta modelo / puntos que deben aparecer:**

Pruebas con perdida/reanudacion de red, reintentos e idempotencia, conflictos de versiones, duplicados, cargas parciales, dispositivos/navegadores, almacenamiento local y recuperacion. Accesibilidad manual+automatica; seguridad de identidad/sesion/datos locales; procedimiento de contingencia y reconciliacion posterior.

Pregunta 5

Proponga estrategia de despliegue regional, formacion, soporte, metricas y evaluacion postimplantacion.

**Respuesta modelo / puntos que deben aparecer:**

Piloto en region representativa -> fases por regiones; criteria go/no-go, rollback y soporte reforzado. Formacion practica por perfiles y formadores locales. Monitorizar adopcion, sync errors, incidentes, p95, defectos, satisfaccion y calidad de datos. Revision postimplantacion antes de ampliar siguiente ola.

**Autocorreccion del supuesto:** ¿He conectado las cinco respuestas entre si? ¿Las decisiones tecnicas responden a requisitos concretos? ¿He incluido controles, pruebas y operacion? ¿He evitado contradicciones entre seguridad, datos, despliegue y rollback?

# Patron de respuesta que puntua

* No empieces por tecnologia: empieza por requisitos, riesgos y restricciones.
* Distingue claramente requisito, arquitectura, dato, control, prueba y operacion.
* Justifica UML/diagramas por la duda que resuelven; no dibujes por decorar.
* En CI/CD: build reproducible, artefacto inmutable, gates por riesgo y rollback compatible con datos.
* En pruebas: objeto + nivel + tipo + tecnica + datos/entorno + criterio de salida + evidencia.
* En web: HTTP/estado, identidad, contratos, seguridad server-side, rendimiento, i18n y multidispositivo.
* En accesibilidad: desde requisitos hasta pruebas; automatizacion no basta.
* En implantacion: cutover, backup, reconciliacion, go/no-go, rollback, formacion, hypercare y metricas.
* Si una solucion simple satisface el caso, no la compliques con patrones o tecnologias innecesarias.

Contenido tecnico derivado de los apuntes GSI A2 Bloque III V2.1. El unico dato externo incorporado es el formato vigente del segundo ejercicio (5 preguntas, 180 minutos y criterios generales de valoracion), verificado contra BOE-A-2025-26262.
