# GSI A2 — PRÁCTICA ACTIVA 05

## Seguridad y ciberseguridad aplicada: riesgos, auditoría, arquitectura, incidentes y forense

**Ámbito principal:** II.10 (análisis y gestión de riesgos), II.11 (auditoría), II.13 (ciberseguridad, incidentes y forense) e IV.12 (seguridad en redes, criptografía, VPN y puesto de usuario).

**Método:** responde sin consultar el solucionario. En riesgo: activo → amenaza → vulnerabilidad → impacto/probabilidad → riesgo → salvaguarda → riesgo residual. En auditoría: objetivo → alcance → criterio → evidencia → hallazgo → recomendación. En incidentes: preservar servicio y evidencia sin saltarse contención/erradicación/recuperación. En arquitectura: cada control debe mitigar un riesgo concreto.

**Objetivo:** pasar de memorizar siglas a justificar controles, priorizar riesgos, distinguir auditoría de operación y construir respuestas defendibles para el segundo ejercicio.

# PARTE A — Riesgo, MAGERIT/PILAR y tratamiento

1 - Activo, amenaza y vulnerabilidad **II.10**

Un portal ciudadano depende de un servidor sin parches expuesto a Internet. Identifica al menos un activo, una amenaza y una vulnerabilidad. Explica por qué no son sinónimos.

2 - Dimensiones de seguridad **II.10**

Para un servicio de registro electrónico, valora qué dimensiones de seguridad pueden ser especialmente relevantes entre confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad. Justifica sin afirmar que solo exista una.

3 - Impacto vs probabilidad **II.10**

Un incidente tendría impacto catastrófico pero probabilidad muy baja. Otro tendría impacto moderado y probabilidad muy alta. ¿Cuál es necesariamente más prioritario? Explica.

4 - Riesgo inherente y residual **II.10**

Un riesgo inicial se reduce con MFA, segmentación y monitorización, pero no desaparece. Define riesgo inherente y residual.

5 - Tratamiento del riesgo **II.10**

Da un ejemplo práctico de evitar, mitigar/reducir, transferir/compartir y aceptar un riesgo de seguridad.

6 - Salvaguarda y eficacia **II.10**

Se despliega un WAF pero nunca se revisan reglas ni alertas. ¿Puedes considerar el riesgo plenamente tratado? Razona.

7 - MAGERIT como método **II.10**

Explica la secuencia conceptual de un análisis MAGERIT sin enumerar una versión concreta del método ni una herramienta.

8 - PILAR **II.10**

¿Qué papel cumple PILAR respecto de MAGERIT? ¿Por qué no deben confundirse método y herramienta?

9 - Dependencias entre activos **II.10**

Una aplicación depende de BD, DNS, identidad corporativa y red. ¿Por qué el impacto de un fallo en un activo de soporte puede propagarse al activo de negocio?

10 - Matriz de riesgo **II.10**

Diseña una matriz cualitativa 3×3 con probabilidad baja/media/alta e impacto bajo/medio/alto. Explica por qué el color resultante no sustituye al juicio profesional.

11 - Riesgo tecnológico vs riesgo de proyecto **II.10**

Una migración puede fallar por retraso del proveedor y, además, por una vulnerabilidad crítica en el sistema destino. ¿Son el mismo tipo de riesgo? Distingue.

12 - Plan de tratamiento **II.10**

Para un riesgo 'credenciales administrativas comprometidas', redacta un mini plan: medidas, responsable, plazo, indicador y criterio de riesgo residual aceptable.

# PARTE B — Auditoría de TI, evidencia y hallazgos

13 - Auditoría vs operación **II.11**

¿Por qué quien administra diariamente un sistema no debería ser la única persona que audita su propio trabajo? Relaciónalo con independencia/objetividad.

14 - Objetivo y alcance **II.11**

Una auditoría pretende revisar 'la seguridad de la organización'. Reformula ese objetivo para que sea auditable: alcance, periodo y sistemas.

15 - Criterio de auditoría **II.11**

Da ejemplos de criterios contra los que podría evaluarse un sistema: normativa, política interna, contrato/SLA, baseline técnica o estándar. ¿Por qué una opinión del auditor no basta?

16 - Evidencia suficiente y adecuada **II.11**

Diferencia suficiencia y adecuación de la evidencia. ¿Qué sería más sólido: una entrevista o una muestra de registros acompañada de configuración y procedimiento?

17 - Muestreo **II.11**

Hay 20.000 altas de usuario. ¿Es imprescindible revisar las 20.000? Explica cómo usarías muestreo y por qué debes documentar el criterio.

18 - Hallazgo **II.11**

Redacta la estructura de un hallazgo para: 'cuentas de ex-empleados permanecen activas 30 días después de la baja'. Incluye condición, criterio, riesgo/impacto y recomendación.

19 - Auditoría vs pentest **II.11**

¿Por qué una prueba de penetración no equivale a una auditoría completa y una auditoría no sustituye necesariamente a un pentest?

20 - Auditoría ENS / privacidad / física **II.11**

Un sistema puede cumplir controles técnicos de red y aun fallar una auditoría de seguridad. Da tres familias de evidencia no puramente técnica que podrían faltar.

21 - CAATs / herramientas **II.11**

¿Qué tipo de tareas pueden automatizar herramientas de auditoría sin sustituir el juicio del auditor? Pon cuatro ejemplos.

22 - Seguimiento **II.11**

Después del informe, la organización marca un hallazgo 'cerrado' porque 'se ha creado un ticket'. ¿Es suficiente? Explica qué evidencia esperarías.

# PARTE C — Arquitectura de seguridad, AAA y criptografía

23 - Defensa en profundidad **IV.12**

Diseña cinco capas de control para proteger una aplicación web pública sin confiar en un único producto.

24 - DMZ **IV.12**

¿Qué problema resuelve una DMZ? ¿Por qué poner un servidor en DMZ no lo hace 'seguro por definición'?

25 - Stateless vs stateful **IV.12**

Distingue firewall stateless y stateful mediante un ejemplo de tráfico de retorno.

26 - Firewall vs WAF **IV.12**

Un organismo quiere bloquear SQL injection en una aplicación HTTPS. ¿Por qué un firewall de red tradicional no sustituye al WAF?

27 - IDS vs IPS **IV.12**

Explica la diferencia entre detectar y bloquear. ¿Qué riesgo operativo añade un IPS mal afinado?

28 - Segmentación **IV.12**

Usuarios, servidores, administración y copias están en la misma VLAN. Propón una segmentación mínima y justifica el control interzona.

29 - Zero Trust **IV.12**

Explica por qué Zero Trust no significa 'eliminar la red interna' ni 'poner MFA a todo y ya está'.

30 - AAA **IV.12**

Expande AAA y da un ejemplo de autenticación, autorización y accounting en administración de red.

31 - RADIUS vs TACACS+ **IV.12**

¿En qué escenarios son típicos RADIUS y TACACS+ según tus apuntes? Evita presentarlos como mutuamente exclusivos.

32 - 802.1X **IV.12**

Identifica supplicant, authenticator y servidor AAA en un empleado que conecta un portátil corporativo a un switch.

33 - NAC **IV.12**

¿Qué añade NAC respecto de una autenticación 802.1X básica?

34 - Simétrica vs asimétrica **IV.12**

Compara AES con RSA/ECC a nivel conceptual: claves, rendimiento y usos.

35 - Hash vs cifrado **IV.12**

¿Por qué SHA-256 no sirve para 'descifrar' un dato? ¿Qué propiedades buscamos en un hash criptográfico?

36 - HMAC **IV.12**

¿Qué aporta un HMAC respecto de un hash simple cuando emisor y receptor comparten un secreto?

37 - Firma digital **IV.12**

Explica el flujo conceptual de firma y verificación. ¿Qué clave usa el firmante y cuál el verificador?

38 - PKI **IV.12**

Sitúa CA, certificado, clave privada, CRL/OCSP y ciclo de vida dentro de una PKI.

39 - TLS vs SSH vs IPsec **IV.12**

Asocia cada tecnología con su uso más característico y explica por qué no son intercambiables.

40 - VPN site-to-site vs acceso remoto **IV.12**

Diseña a alto nivel ambos escenarios y señala una diferencia de identidad/endpoint.

41 - Split tunneling **IV.12**

¿Qué ventaja operativa tiene y qué riesgo modifica? ¿Por qué la decisión debe ser política, no dogma?

42 - Endpoint comprometido **IV.12**

Un portátil con malware establece una VPN válida. ¿Por qué la VPN no resuelve el compromiso? Indica controles complementarios.

# PARTE D — Ciberseguridad operativa, SOC e incidentes

43 - SIEM, SOAR y EDR **II.13**

Distingue SIEM, SOAR y EDR. Para cada uno indica qué problema resuelve principalmente.

44 - Alerta vs incidente **II.13**

Un SIEM genera una alerta por 30 fallos de login. ¿Es automáticamente un incidente? Describe el proceso de triage.

45 - Preparación **II.13**

Enumera elementos que deberían existir antes de un incidente: contactos, logs, backups, playbooks, capacidades forenses, comunicaciones, etc.

46 - Detección y análisis **II.13**

Se detecta acceso desde una geolocalización anómala y creación de reglas de reenvío de correo. ¿Qué evidencias revisarías antes de concluir causa y alcance?

47 - Contención **II.13**

Un equipo crítico parece comprometido. Compara aislamiento inmediato, segmentación temporal y monitorización reforzada. ¿Por qué la contención depende del impacto de negocio?

48 - Erradicación **II.13**

Después de eliminar un malware, ¿por qué no basta con borrar el ejecutable detectado?

49 - Recuperación **II.13**

¿Qué condiciones deben cumplirse para volver a producción tras un incidente? Incluye validación, monitorización y riesgo de recurrencia.

50 - Lecciones aprendidas **II.13**

¿Qué debe producir una revisión post-incidente además de una cronología?

51 - Phishing con cuenta comprometida **II.13**

Un usuario introduce credenciales en una web falsa. Diseña las primeras acciones defensivas sin entrar en técnicas ofensivas.

52 - Ransomware **II.13**

Los archivos compartidos empiezan a cifrarse. Ordena prioridades: contención, identidad, evidencias, backups, recuperación y comunicación.

53 - DDoS **II.13**

Un servicio público recibe tráfico masivo. ¿Qué controles/actores pueden intervenir y qué diferencia hay entre capacidad, rate limiting, CDN/anti-DDoS y filtrado?

54 - Credential stuffing **II.13**

¿Qué señales y controles defensivos aplicarías: MFA, rate limiting, detección de anomalías, bloqueo, passwords comprometidas?

55 - Playbook **II.13**

Construye un playbook mínimo para 'cuenta privilegiada sospechosa': disparadores, triage, contención, erradicación, recuperación y cierre.

# PARTE E — Informática forense y cadena de custodia

56 - Objetivo forense **II.13**

Distingue respuesta operativa a incidente e investigación forense. ¿Por qué a veces entran en tensión rapidez y preservación de evidencia?

57 - Volatilidad **II.13**

Ordena conceptualmente qué puede ser más volátil: memoria RAM, conexiones/procesos en ejecución, disco apagado y copia archivada. ¿Qué principio deriva de ello?

58 - Adquisición **II.13**

Diferencia una imagen forense de un simple copiado de archivos. ¿Qué metadatos/evidencias puede perder un copy ordinario?

59 - Hash de evidencia **II.13**

¿Para qué se calcula un hash de una imagen forense? ¿Demuestra por sí solo quién cometió un hecho?

60 - Cadena de custodia **II.13**

Enumera la información mínima que documentarías desde recogida hasta análisis y almacenamiento.

61 - Live vs dead acquisition **II.13**

Explica el compromiso entre adquirir un sistema encendido y analizarlo apagado. No hay una respuesta universal: justifica según objetivo.

62 - Timeline **II.13**

¿Qué utilidad tiene correlacionar logs, timestamps, autenticaciones, procesos y eventos de red en una línea temporal?

63 - Preservación de logs **II.13**

¿Por qué logs locales sin sincronización horaria ni protección pueden ser evidencia débil?

64 - Conclusiones forenses **II.13**

Un indicador coincide con malware conocido. ¿Puedes concluir automáticamente autoría o causa raíz? Explica límites e inferencia.

# PARTE F — Mini-supuestos integradores

65 - Portal público con ENS **INTEGRADOR**

Diseña una arquitectura defensiva para un portal ciudadano con datos personales: zonas, WAF/firewall, identidad, cifrado, logs, endpoint, backups, riesgo y controles ENS. Cada componente debe justificar un riesgo.

66 - Acceso administrativo remoto **INTEGRADOR**

Un proveedor debe administrar servidores durante 6 meses. Diseña acceso remoto seguro con identidad nominativa, MFA, bastión/PAM, segmentación, mínimos privilegios, ventanas, logging y revocación.

67 - Riesgo de proveedor SaaS **INTEGRADOR**

Un servicio crítico se externaliza. Construye un análisis de riesgo centrado en disponibilidad, confidencialidad, dependencia, reversibilidad, subencargados, evidencias y continuidad.

68 - Auditoría de cuentas privilegiadas **INTEGRADOR**

Planifica una auditoría de cuentas admin: objetivo, alcance, población, muestra, criterios, evidencias, hallazgos potenciales y seguimiento.

69 - Incidente de exfiltración **INTEGRADOR**

Se observan 40 GB de salida nocturna desde un servidor sensible. Propón triage, contención y evidencias sin asumir automáticamente brecha confirmada.

70 - Ransomware con backups **INTEGRADOR**

La organización tiene copias diarias pero el repositorio está unido al mismo dominio. Diseña mejoras de arquitectura y un orden de recuperación compatible con RPO/RTO.

71 - Certificado expirado **INTEGRADOR**

Un servicio deja de funcionar por expiración de certificado. Clasifica el problema como incidente operativo y extrae acciones preventivas de configuración, inventario, alertas y PKI.

72 - WAF bloquea usuarios legítimos **INTEGRADOR**

Tras activar reglas estrictas, aumenta el 403 y cae la conversión. ¿Cómo equilibras seguridad, falso positivo, evidencia, cambio controlado y rollback?

73 - Compromiso de identidad cloud **INTEGRADOR**

Un administrador detecta inicio de sesión anómalo, token activo y cambios de configuración. Diseña respuesta centrada en identidad, sesiones/tokens, credenciales, logs, alcance y recuperación.

74 - Nueva sede **INTEGRADOR**

Diseña controles de seguridad para una nueva sede: LAN/Wi-Fi, 802.1X/NAC, VLAN, administración, VPN, endpoint, logs y acceso a sistemas centrales.

75 - Comité de riesgos **INTEGRADOR**

Tienes 8 riesgos 'altos' y presupuesto para tratar 3 este trimestre. Explica cómo priorizarías usando impacto, probabilidad, obligaciones, exposición, dependencias, coste/eficacia de salvaguardas y riesgo residual.

76 - Supuesto completo de 20 minutos **INTEGRADOR**

Un organismo migra una aplicación crítica a una nueva plataforma. Estructura una respuesta de seguridad de máximo una página: requisitos/riesgos → arquitectura → identidad → protección → observabilidad → continuidad → auditoría → incidentes → aceptación.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A Riesgo |  |  |  |
| B Auditoría |  |  |  |
| C Arquitectura/cripto |  |  |  |
| D Incidentes |  |  |  |
| E Forense |  |  |  |
| F Supuestos |  |  |  |

Base: apuntes GSI A2 V2.1, temas II.10, II.11, II.13 e IV.12. No se pretende enseñar técnicas ofensivas: el enfoque es evaluación, arquitectura defensiva, operación, auditoría, respuesta y preservación de evidencia.
