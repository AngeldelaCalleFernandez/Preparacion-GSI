# GSI A2 — PRÁCTICA ACTIVA 05

## Solucionario razonado — Seguridad y ciberseguridad aplicada

**Criterio de corrección:** en seguridad rara vez basta con nombrar un producto. La respuesta de calidad conecta riesgo → control → evidencia → operación → riesgo residual. Las soluciones siguientes son modelos de razonamiento; en mini-supuestos pueden existir alternativas válidas si están justificadas.

1 - Activo, amenaza y vulnerabilidad

Activo: portal/servidor/datos/servicio. Amenaza: explotación de vulnerabilidad por actor externo o malware. Vulnerabilidad: falta de parches/exposición innecesaria. El activo es lo que se protege; la amenaza puede causar daño; la vulnerabilidad es una debilidad explotable.

2 - Dimensiones de seguridad

Confidencialidad si hay datos sensibles; integridad para que registros no se alteren; disponibilidad por servicio público; autenticidad para confiar en sujetos/origen; trazabilidad para reconstruir actuaciones. La criticidad de cada dimensión depende del proceso.

3 - Impacto vs probabilidad

No puede decidirse solo con una frase. Riesgo combina impacto y probabilidad y además obligaciones, exposición, detectabilidad, dependencia y tolerancia. Un impacto catastrófico puede exigir tratamiento aunque sea improbable.

4 - Riesgo inherente y residual

Inherente: nivel antes de salvaguardas consideradas. Residual: el que permanece tras controles. El objetivo realista es reducirlo a un nivel aceptado, no afirmar riesgo cero.

5 - Tratamiento del riesgo

Evitar: retirar un servicio innecesario expuesto. Mitigar: MFA + hardening. Transferir/compartir: seguro/contrato que reparte consecuencias, sin borrar responsabilidad. Aceptar: documentar que el residual está dentro de tolerancia y aprobar por autoridad competente.

6 - Salvaguarda y eficacia

No. Un control instalado pero no gobernado puede degradarse. Hay que comprobar configuración, cobertura, alertas, mantenimiento y eficacia. El residual se estima considerando la salvaguarda efectiva, no su mera existencia.

7 - MAGERIT como método

Inventariar/valorar activos y dependencias; identificar amenazas y vulnerabilidades; estimar impacto y probabilidad/frecuencia; estimar riesgo; identificar salvaguardas; estimar residual; decidir tratamiento y seguimiento.

8 - PILAR

MAGERIT es método/marco de análisis y gestión; PILAR es una herramienta que puede apoyar su aplicación, modelado y evaluación. Confundirlos sería como llamar 'Excel' a la contabilidad.

9 - Dependencias entre activos

Los activos de negocio dependen de soportes. Si falla DNS o identidad, la aplicación puede quedar inutilizable aunque su servidor esté sano. Por eso se modelan dependencias y propagación de impacto.

10 - Matriz de riesgo

Ejemplo 3×3 con combinaciones de probabilidad e impacto y categorías bajo/medio/alto. La matriz ayuda a homogeneizar, pero no representa por sí sola obligaciones legales, dependencias, incertidumbre o calidad de estimaciones.

11 - Riesgo tecnológico vs riesgo de proyecto

El retraso del proveedor es riesgo de proyecto/gestión; la vulnerabilidad es riesgo de seguridad. Pueden interactuar, pero requieren tratamientos y responsables distintos.

12 - Plan de tratamiento

Medidas: MFA resistente, PAM/bastión, cuentas nominativas, mínimo privilegio, rotación de secretos, alertas. Responsable: seguridad/operación. Plazo: definido por criticidad. Indicador: % cuentas cubiertas, accesos fuera de ventana, alertas. Aceptación: residual aprobado por propietario del riesgo.

13 - Auditoría vs operación

La auditoría exige independencia suficiente para evaluar sin autojustificación. Operación aporta evidencia y conocimiento, pero la función auditora debe poder cuestionar diseño y cumplimiento sin conflicto de interés.

14 - Objetivo y alcance

Ejemplo: 'evaluar durante el último trimestre la gestión de accesos privilegiados de los sistemas X/Y frente a política interna, ENS aplicable y procedimientos aprobados'. Así se hace verificable.

15 - Criterio de auditoría

Criterio es la referencia contra la que se compara: norma, control ENS, política, contrato, baseline, procedimiento. Sin criterio, el hallazgo se convierte en preferencia del auditor.

16 - Evidencia suficiente y adecuada

Suficiencia = cantidad/cobertura razonable; adecuación = relevancia y fiabilidad. Registros + configuración + procedimiento suelen ser evidencia más fuerte que una entrevista aislada, aunque las entrevistas complementan.

17 - Muestreo

No. Puede usarse muestreo basado en riesgo/estadístico/dirigido. Debe documentarse población, selección, tamaño, periodo y limitaciones para que la conclusión no se sobreextienda.

18 - Hallazgo

Condición: cuentas siguen activas 30 días. Criterio: procedimiento exige baja inmediata/24 h. Riesgo: acceso no autorizado. Causa posible: proceso HR-IAM no integrado. Recomendación: automatizar baja, alertas y revisión. Evidencia: muestra y logs.

19 - Auditoría vs pentest

Pentest busca vulnerabilidades explotables bajo un alcance técnico; auditoría evalúa cumplimiento, diseño, proceso, gobierno y evidencia. Se complementan.

20 - Auditoría ENS / privacidad / física

Ejemplos: aprobación de riesgos, segregación de funciones, formación, contratos, continuidad, inventario, evidencias de revisión, controles físicos, gestión de cambios, retención de logs.

21 - CAATs / herramientas

Extracción de configuraciones, análisis de logs, búsqueda de cuentas huérfanas, comparación con baseline, muestreo masivo, detección de duplicados/anomalías, correlación de evidencias. La herramienta no interpreta sola materialidad ni contexto.

22 - Seguimiento

No. Ticket creado prueba intención. Para cerrar: cambio implementado, evidencia técnica/procedimental, prueba de eficacia, muestra posterior y aceptación de cualquier residual.

23 - Defensa en profundidad

Ejemplo: CDN/anti-DDoS o filtrado perimetral; WAF; segmentación/DMZ; identidad/MFA; hardening/patch; cifrado; EDR; logging/SIEM; backup. La defensa en profundidad evita que un único fallo comprometa todo.

24 - DMZ

Separa servicios expuestos de redes internas y limita movimientos. Sigue necesitando hardening, patching, firewalling, identidad, logging y controles de aplicación.

25 - Stateless vs stateful

Stateless evalúa paquetes según reglas sin recordar sesión; stateful mantiene estado y puede permitir tráfico de retorno asociado a conexión legítima. Sigue necesitando reglas correctas.

26 - Firewall vs WAF

El firewall L3/L4 ve principalmente red/transporte; un WAF entiende HTTP y contexto de aplicación, pudiendo aplicar reglas sobre parámetros, rutas y patrones. HTTPS exige terminación/inspección donde corresponda.

27 - IDS vs IPS

IDS alerta; IPS está inline/capaz de bloquear. Un falso positivo de IPS puede causar indisponibilidad, por eso requiere pruebas, tuning y modo de despliegue adecuado.

28 - Segmentación

Separar usuarios, servidores, administración y backup en zonas/VLAN/subredes; controlar flujos con firewall/ACL, negar por defecto lo no necesario, proteger red de gestión y repositorio de backup.

29 - Zero Trust

Es un modelo de confianza mínima y verificación continua: identidad, dispositivo, contexto, mínimo privilegio, segmentación y señales. No es un producto ni una única medida.

30 - AAA

Authentication: demostrar identidad; Authorization: qué puede hacer; Accounting: registrar uso/acciones. Ej.: admin se autentica con MFA, recibe rol de solo lectura y sus comandos/sesiones quedan registrados.

31 - RADIUS vs TACACS+

RADIUS es típico para acceso de red/802.1X/VPN; TACACS+ es frecuente en administración de dispositivos. Pueden coexistir y la elección depende de integración/política.

32 - 802.1X

Supplicant: software del portátil. Authenticator: switch/puerto que controla acceso. Servidor AAA: normalmente RADIUS que valida credenciales/certificado y devuelve política.

33 - NAC

NAC puede añadir postura del dispositivo, cumplimiento, perfilado, cuarentena, asignación dinámica de red/políticas y acceso condicional.

34 - Simétrica vs asimétrica

Simétrica: misma clave, rápida para volumen; AES típico. Asimétrica: par pública/privada, más costosa, útil en firma, intercambio/autenticación; RSA/ECC típicos.

35 - Hash vs cifrado

Hash es función unidireccional, no cifrado reversible. Se buscan resistencia a preimagen/segunda preimagen y colisiones, además de comportamiento uniforme.

36 - HMAC

Añade autenticidad/integridad basada en secreto compartido: alguien sin el secreto no debería poder generar un HMAC válido aunque conozca el mensaje.

37 - Firma digital

El firmante usa su clave privada según el esquema; el verificador usa la pública/certificado. Se firma un hash/estructura definida, no 'se cifra todo con la privada' como regla simplista.

38 - PKI

CA emite/gestiona confianza; certificado vincula identidad/clave pública; clave privada debe protegerse; CRL/OCSP informan estado/revocación; ciclo de vida incluye emisión, renovación, revocación y expiración.

39 - TLS vs SSH vs IPsec

TLS protege protocolos de aplicación/sesiones; SSH administración remota/túneles seguros; IPsec tráfico IP, común en VPN. Operan en capas y modelos distintos.

40 - VPN site-to-site vs acceso remoto

Site-to-site: gateways conectan redes y protegen tráfico entre subredes. Acceso remoto: usuario/dispositivo individual se autentica y recibe acceso controlado; la postura del endpoint importa más.

41 - Split tunneling

Ventaja: tráfico Internet puede salir localmente y reducir latencia/coste. Riesgo: endpoint se convierte en puente potencial y parte del tráfico no pasa por controles centrales. Debe decidirse por política, postura y arquitectura.

42 - Endpoint comprometido

La VPN protege canal/autentica acceso, pero malware ya dentro del endpoint puede usar la sesión. Complementos: EDR, hardening, patching, mínimo privilegio, NAC/postura, MFA, aislamiento y monitorización.

43 - SIEM, SOAR y EDR

SIEM centraliza/correlaciona eventos; SOAR automatiza/orquesta flujos de respuesta; EDR observa y responde en endpoints. Pueden integrarse pero no son equivalentes.

44 - Alerta vs incidente

No. Triage: validar señal, contexto de cuenta/origen, éxito posterior, MFA, geografía, dispositivo, patrón histórico, criticidad, inteligencia adicional y alcance. Solo después se clasifica incidente.

45 - Preparación

Inventario, contactos/on-call, clasificación, roles, logs sincronizados, retención, SIEM/EDR, backups probados, playbooks, acceso de emergencia, comunicaciones, capacidades forenses y criterios de escalado.

46 - Detección y análisis

Logs de autenticación, MFA, dispositivos/sesiones, cambios de reglas, IP/origen, actividad posterior, correo enviado, tokens, privilegios, EDR del endpoint y timeline. No atribuir solo por geolocalización.

47 - Contención

Aislar corta riesgo rápido pero puede afectar servicio/evidencia. Segmentación temporal limita movimiento. Monitorización reforzada puede usarse si el impacto de desconectar es crítico y el riesgo está controlado. Decidir por severidad.

48 - Erradicación

Persistencia, credenciales robadas, tareas programadas, cuentas creadas, cambios de configuración, vulnerabilidad inicial y movimiento lateral pueden quedar. Hay que eliminar causa y mecanismos de persistencia.

49 - Recuperación

Causa/controlada, sistemas reconstruidos o saneados, credenciales rotadas, vulnerabilidades corregidas, datos restaurados y validados, monitorización reforzada, criterio de negocio y plan de reversión si reaparece.

50 - Lecciones aprendidas

Causa raíz y contribuyentes, gaps de detección/respuesta, acciones con propietario/plazo, cambios de control, métricas y actualización de playbooks/riesgos.

51 - Phishing con cuenta comprometida

Revocar sesiones/tokens, cambiar credenciales de forma segura, exigir MFA/revisar factores, buscar reglas/reenvíos y actividad anómala, revisar otros sistemas, analizar endpoint, preservar logs y avisar según proceso.

52 - Ransomware

Contener propagación y cuentas, aislar dominios afectados, preservar evidencias, entender alcance, proteger backups, erradicar acceso, priorizar servicios, restaurar desde copias verificadas y comunicar según plan. No precipitar restore sobre entorno aún comprometido.

53 - DDoS

Capacidad/elasticidad absorbe volumen; rate limiting limita abusos por origen/patrón; CDN/anti-DDoS distribuye/filtra aguas arriba; operadores pueden filtrar antes del enlace. Debe preservarse servicio legítimo.

54 - Credential stuffing

MFA, rate limiting, detección de IP/dispositivo/velocidad, bloqueo adaptativo, contraseñas no reutilizadas/comprometidas, alertas y análisis de éxitos tras múltiples fallos.

55 - Playbook

Disparadores: login anómalo/cambio privilegiado. Triage: identidad/sesiones/acciones. Contención: revocar, deshabilitar o limitar. Erradicación: reset/rotación, limpiar persistencia. Recuperación: reactivar con MFA y validar. Cierre: RCA, acciones y evidencias.

56 - Objetivo forense

Respuesta busca contener y recuperar; forense busca preservar/explicar evidencia. Apagar un sistema puede frenar daño pero destruir datos volátiles; mantenerlo puede conservar RAM pero permitir propagación. La decisión debe documentarse.

57 - Volatilidad

Típicamente RAM/procesos/conexiones son muy volátiles; disco apagado menos; copia archivada más estable. Principio: capturar primero lo más volátil cuando sea seguro y necesario.

58 - Adquisición

Imagen forense intenta reproducir medio a nivel adecuado preservando estructura/metadatos/espacio no asignado según técnica. Copiar archivos puede perder timestamps, ACL, artefactos borrados, slack y estructura.

59 - Hash de evidencia

Permite comprobar integridad: que la evidencia analizada coincide con la adquirida. No prueba autoría ni contexto por sí sola.

60 - Cadena de custodia

Quién, qué evidencia, identificador, origen, fecha/hora, método de adquisición, hash, embalaje/almacenamiento, cada transferencia/acceso, finalidad y firma/registro.

61 - Live vs dead acquisition

Live permite memoria, procesos, claves/sesiones y conexiones; modifica inevitablemente algo del sistema. Dead/offline reduce cambios y facilita imagen estable, pero pierde volatilidad. Elegir según pregunta, riesgo y procedimiento.

62 - Timeline

Ayuda a reconstruir secuencia, correlacionar eventos y validar/refutar hipótesis. Debe considerar zona horaria, deriva de reloj y fiabilidad de cada fuente.

63 - Preservación de logs

Sin tiempo común no se correlacionan eventos; si atacante/admin puede modificarlos sin trazabilidad, su integridad es débil. Centralización, protección y retención mejoran valor.

64 - Conclusiones forenses

No. Un IOC indica similitud/actividad, no autoría. Hace falta contexto, múltiples evidencias, cadena causal y reconocer limitaciones.

65 - Portal público con ENS

Respuesta: valorar datos/servicios y ENS aplicable; separar Internet/DMZ/app/datos/admin; WAF+firewall y protección DDoS; IAM/MFA/PAM; TLS y cifrado; hardening/EDR; logs/SIEM; backup independiente y DR; análisis de riesgos y auditoría. Cada control debe referir amenaza y residual.

66 - Acceso administrativo remoto

Cuenta nominativa temporal, MFA, alta/baja con fechas, bastión/PAM, acceso solo a destinos/puertos necesarios, ventanas aprobadas, grabación/logs, secretos gestionados, prohibir cuentas compartidas, revisión periódica y revocación al terminar.

67 - Riesgo de proveedor SaaS

Activos/datos y criticidad; disponibilidad/SLA y dependencia de Internet/proveedor; RGPD/subencargados si aplica; cifrado/identidad/logs; continuidad y copias/exportación; reversibilidad/formatos; evidencia/auditoría; riesgo residual y plan de salida.

68 - Auditoría de cuentas privilegiadas

Objetivo: comprobar autorización/uso/ciclo de vida. Población: todas las cuentas privilegiadas. Muestra basada en riesgo + altas/bajas/cambios. Criterios: política/ENS/procedimiento. Evidencias: IAM/PAM, tickets, logs, owners, MFA. Hallazgos y retest posterior.

69 - Incidente de exfiltración

Validar si tráfico es esperado, destino/proceso/cuenta, logs de red/host/app, volumen y ventana histórica. Contener de forma proporcional, preservar evidencias, revisar credenciales y otros hosts. No declarar exfiltración hasta corroborar datos y contexto.

70 - Ransomware con backups

Separar dominio de backup, MFA/PAM, repositorio inmutable/offline, credenciales distintas, red segmentada, retención/versiones, pruebas de restore, priorización de servicios por RPO/RTO, reconstrucción limpia antes de restaurar datos.

71 - Certificado expirado

Incidente: servicio indisponible. Causa contribuyente: gestión de certificados. Mejoras: inventario/ciclo de vida, responsables, alertas previas, renovación automática donde proceda, pruebas, configuración versionada y procedimiento de emergencia.

72 - WAF bloquea usuarios legítimos

Medir falsos positivos y rutas afectadas; revisar regla/evidencia; usar modo monitor/canary si es viable; excepción mínima temporal; aprobación de cambio; rollback; mantener protección alternativa; ajustar y validar antes de cerrar.

73 - Compromiso de identidad cloud

Revocar sesiones/tokens, bloquear o elevar controles de cuenta, reset/rotar credenciales y factores, revisar cambios/roles/apps OAuth, preservar logs, buscar persistencia y otras identidades, restaurar configuración, reactivar con controles reforzados.

74 - Nueva sede

Segmentar corporativo/invitados/IoT/admin; 802.1X/RADIUS y NAC; WPA enterprise; VLAN/ACL/firewall; red de gestión; VPN segura a central; EDR/UEM; logs/SIEM; hardening de switches/AP; inventario y backups de configuración.

75 - Comité de riesgos

Priorizar por riesgo residual esperado, obligación legal/contractual, impacto sistémico y dependencias, explotación/exposición, eficacia y coste del control, quick wins y riesgo de no actuar. Documentar lo diferido y su aceptación.

76 - Supuesto completo de 20 minutos

Una página: 1 requisitos/datos/ENS y riesgos; 2 zonas/flujo y segmentación; 3 IAM/MFA/PAM; 4 WAF/firewall/EDR/cifrado/PKI; 5 logs/SIEM/alertas; 6 backup/RPO/RTO/DR; 7 auditoría/evidencias; 8 playbooks/CSIRT; 9 pruebas y aceptación del residual.

# Patrón mental para el segundo ejercicio

* **Riesgo:** qué activo/proceso protejo y de qué amenaza.
* **Arquitectura:** zonas y flujos permitidos; evitar controles sin propósito.
* **Identidad:** MFA, mínimo privilegio, PAM y ciclo de vida.
* **Protección:** hardening, patch, firewall/WAF/NAC, cifrado, endpoint.
* **Detección:** logs sincronizados, SIEM/EDR, casos de uso y alertas accionables.
* **Respuesta:** triage → contención → erradicación → recuperación → lecciones.
* **Evidencia:** preservar lo necesario y documentar cadena de custodia.
* **Gobierno:** riesgo residual, auditoría, cambios, responsables y aceptación.

Soluciones construidas sobre los temas II.10, II.11, II.13 e IV.12 de los apuntes V2.1. Se evita convertir la práctica en catálogo ofensivo o en memorización de versiones concretas.
