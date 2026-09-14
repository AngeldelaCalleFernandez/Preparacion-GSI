# GSI A2 - PRACTICA ACTIVA 08

## Contact center, CRM, IVR, VoiceXML y KPI - SOLUCIONARIO RAZONADO

**Criterio de correccion:** usa la terminologia de II.12 V2.1. En calculos de KPI se explicita que son derivaciones directas de las definiciones del tema; no se incorporan formulas avanzadas de dimensionamiento que los apuntes no exigen.

# Mapa maestro de componentes

| Familia | Elemento | Funcion que debes reconocer |
| --- | --- | --- |
| Voz | PBX / IP-PBX | Centralita: gestiona extensiones y llamadas. |
| Voz | SIP | Protocolo de senalizacion habitual en VoIP. |
| Voz | SBC | Protege/controla el borde de sesiones VoIP. |
| Routing | ACD | Distribuye llamadas a colas/agentes. |
| Integracion | CTI | Integra telefonia con aplicaciones/CRM. |
| Autoservicio | IVR | Dialogo automatizado por DTMF y/o voz. |
| Voz | ASR / TTS | Reconocimiento automatico de voz / sintesis de voz. |
| Planificacion | WFM | Predice carga y planifica agentes. |
| Datos | CRM / case management | Contexto, historial, actividades, casos/tickets e integraciones. |
| Dialogo | VoiceXML | Lenguaje XML para describir dialogos de voz. |

# PARTE A - Conceptos y diferencias de examen

1 - Call center vs contact center

Diferencia ambos conceptos en una frase.

**Respuesta modelo:** Call center se centra principalmente en voz. Contact center integra varios canales y busca gestionar interacciones con routing, contexto, trazabilidad y niveles de servicio.

2 - Multicanal

Define multicanal.

**Respuesta modelo:** Existen varios canales, pero pueden funcionar como silos.

3 - Omnicanal

Define omnicanal y su requisito principal.

**Respuesta modelo:** Busca conservar contexto, identidad e historial al cambiar de canal; requiere modelo comun de interaccion y CRM/case management.

4 - ACD

¿Que hace un ACD y que no hace por si solo?

**Respuesta modelo:** Distribuye llamadas a colas/agentes. No equivale a CRM ni a CTI.

5 - CTI

¿Que aporta CTI?

**Respuesta modelo:** Integra telefonia y aplicaciones/CRM: identificacion contextual, screen-pop, registro de llamada, click-to-call, transferencias y clasificacion.

6 - IVR

¿Que es un IVR?

**Respuesta modelo:** Un sistema de respuesta de voz interactiva que presenta opciones y recoge entrada mediante DTMF y/o voz.

7 - IVR vs ASR

¿Por que IVR y ASR no son sinonimos?

**Respuesta modelo:** Porque un IVR puede funcionar solo con tonos DTMF. ASR es reconocimiento automatico de voz.

8 - TTS

¿Que funcion cumple TTS?

**Respuesta modelo:** Sintesis de voz: generar salida hablada a partir de texto.

9 - DTMF

¿Que papel tiene DTMF en un IVR?

**Respuesta modelo:** Permite introducir opciones mediante tonos del teclado telefonico; no es reconocimiento de voz.

10 - VoiceXML

¿Que es VoiceXML para II.12?

**Respuesta modelo:** Un lenguaje XML para describir dialogos de voz, prompts, gramaticas, captura y flujo mediante una plataforma/interprete de voz.

11 - PBX/IP-PBX

¿Que componente gestiona extensiones y llamadas?

**Respuesta modelo:** PBX/IP-PBX.

12 - SIP

¿Que funcion tiene SIP dentro del alcance de II.12?

**Respuesta modelo:** Es un protocolo de senalizacion habitual en VoIP.

13 - SBC

¿Que papel conceptual cumple un SBC?

**Respuesta modelo:** Protege y controla el borde de las sesiones VoIP.

14 - WFM

¿Que hace Workforce Management?

**Respuesta modelo:** Predice carga y planifica agentes.

15 - CRM

¿Por que CRM no es una simple agenda?

**Respuesta modelo:** Porque gestiona ficha, contactos, historial, actividades, casos/tickets, comunicaciones, base de conocimiento, reporting e integraciones.

16 - Screen-pop

¿Que es screen-pop y que error de seguridad debes evitar?

**Respuesta modelo:** Muestra informacion contextual al agente al entrar la interaccion. No equivale a autenticacion ni justifica mostrar datos innecesarios.

17 - Identificar vs autenticar

El sistema reconoce el numero llamante. ¿Ha autenticado al ciudadano?

**Respuesta modelo:** No necesariamente. Identificacion contextual y autenticacion con garantia suficiente son conceptos distintos.

18 - Grabacion

¿Que cuatro elementos minimos debes definir si se graban llamadas?

**Respuesta modelo:** Finalidad/base, informacion al interesado, acceso/seguridad y retencion; ademas derechos y control de exportaciones cuando proceda.

# PARTE B - Arquitectura, routing y experiencia

19 - Cadena arquitectonica

Ordena conceptualmente: agentes, canales, backoffice, ACD/router, CRM, IVR.

**Respuesta modelo:** Canales -> gateway/telefonia/chat/email -> router/ACD -> IVR/bots cuando proceda -> agentes -> CRM/case management -> conocimiento -> backoffice.

20 - Servicios transversales

Cita los servicios transversales que II.12 coloca sobre la arquitectura.

**Respuesta modelo:** Identidad, grabacion, analitica, supervision, reporting y observabilidad.

21 - Skills-based routing

¿Que criterio de routing asigna una interaccion segun competencias del agente?

**Respuesta modelo:** Skills-based routing.

22 - Prioridad

Una incidencia critica debe pasar delante de consultas generales. ¿Que mecanismo de routing aplica?

**Respuesta modelo:** Priorizacion de cola/reglas de routing por urgencia.

23 - Idioma

¿Puede el idioma formar parte del routing?

**Respuesta modelo:** Si. El tema cita idioma como criterio de enrutamiento.

24 - Agente mas libre

¿Que estrategia busca asignar al agente con mayor disponibilidad?

**Respuesta modelo:** Enrutamiento al agente mas libre.

25 - Round-robin

¿Que idea expresa round-robin?

**Respuesta modelo:** Distribuir de forma rotatoria entre agentes/recursos elegibles.

26 - Callback

¿Para que sirve ofrecer callback en una cola?

**Respuesta modelo:** Permite evitar espera continua y devolver la llamada conforme a reglas, mejorando experiencia y gestion de picos.

27 - Desbordamiento

¿Que debe ocurrir si una cola supera umbrales definidos?

**Respuesta modelo:** Aplicar reglas de desbordamiento/fallback hacia otras colas, agentes o canales segun diseno.

28 - Evitar loops

¿Que fallo de diseno menciona II.12 en colas y routing?

**Respuesta modelo:** Bucles de enrutamiento y perdida de contexto.

29 - Omnicanal real

Un usuario pasa de chat a telefono y debe repetir todos sus datos. ¿Es una experiencia omnicanal madura?

**Respuesta modelo:** No. La omnicanalidad intenta conservar contexto, identidad e historial entre canales.

30 - Backoffice

¿Por que el contact center debe integrarse con backoffice?

**Respuesta modelo:** Porque muchas interacciones necesitan ejecutar/resolver procesos fuera del propio canal; el contexto y el estado del caso deben mantenerse.

31 - Base de conocimiento

¿Que aporta una base de conocimiento a agentes y autoservicio?

**Respuesta modelo:** Informacion coherente para resolver consultas y apoyar respuestas; debe integrarse con proceso/CRM.

32 - Canales alternativos

¿Por que un organismo publico no deberia forzar la voz como unico canal?

**Respuesta modelo:** Por accesibilidad, diversidad de necesidades y adecuacion del tramite; el propio supuesto de II.12 pide no forzar voz para todos los tramites.

33 - IVR corto

¿Que recomendacion de diseno da II.12 para menus IVR?

**Respuesta modelo:** Menus cortos, salida a agente, repeticion, accesibilidad, deteccion de errores y cuidado con datos sensibles.

34 - CRM y minimizacion

¿Por que 'copiar todo al CRM' es mala practica?

**Respuesta modelo:** Porque CRM debe respetar minimizacion, calidad, finalidad, retencion y permisos.

# PARTE C - Identidad, privacidad y accesibilidad

35 - Numero llamante

¿El numero llamante puede usarse como contexto? ¿Como credencial fuerte unica?

**Respuesta modelo:** Como contexto, si. Como unica autenticacion fuerte para tramites sensibles, no deberia asumirse suficiente.

36 - Factor adicional

¿Cuando puede requerirse un factor adicional de autenticacion?

**Respuesta modelo:** En tramites sensibles o cuando el riesgo exija mayor garantia.

37 - Preguntas debiles

¿Que dice II.12 sobre preguntas debiles como unico mecanismo de autenticacion?

**Respuesta modelo:** No deben usarse como unico mecanismo si el riesgo es alto.

38 - Minimo privilegio

Una llamada entra y el agente ve toda la historia medica, fiscal y administrativa. ¿Que principio se esta vulnerando?

**Respuesta modelo:** Minimo privilegio/minimizacion de la informacion mostrada.

39 - Grabaciones y credenciales

¿Que dato deberia evitarse grabar si no es necesario?

**Respuesta modelo:** Credenciales y otros datos sensibles innecesarios.

40 - Exportacion de grabaciones

¿Deben quedar sin control las exportaciones de grabaciones?

**Respuesta modelo:** No. Deben estar controladas y trazadas.

41 - Accesibilidad auditiva

Da una alternativa de canal coherente para personas con discapacidad auditiva.

**Respuesta modelo:** Chat/texto u otros canales accesibles; segun servicio, subtitulos/interpretacion.

42 - Accesibilidad cognitiva

¿Que principio de comunicacion ayuda especialmente?

**Respuesta modelo:** Lenguaje claro, tiempos razonables y flujos comprensibles.

43 - IVR inaccesible

¿Se soluciona un IVR inaccesible diciendo 'tambien tenemos web'?

**Respuesta modelo:** No. II.12 indica que un IVR inaccesible no se corrige unicamente anadiendo web.

44 - Tecnologias de apoyo

¿Que debe buscar la arquitectura multicanal respecto a tecnologias de apoyo?

**Respuesta modelo:** Compatibilidad y canales que permitan acceso efectivo a personas con distintas discapacidades.

45 - Privacidad por canal

¿Cambiar de canal elimina las obligaciones de privacidad?

**Respuesta modelo:** No. La omnicanalidad exige reglas comunes de identidad, contexto y privacidad.

46 - Retencion

¿Por que debe existir una politica de retencion para grabaciones/interacciones?

**Respuesta modelo:** Para limitar conservacion conforme a finalidad, requisitos y riesgo, evitando acumulacion indefinida.

47 - Roles y logs

¿Que controles necesitan los agentes segun II.12?

**Respuesta modelo:** Roles/permisos, logs/trazabilidad y formacion.

48 - Autenticacion proporcional

¿Que significa que la autenticacion sea proporcional?

**Respuesta modelo:** Ajustar la garantia al riesgo del tramite, evitando tanto insuficiencia como friccion innecesaria en atencion general.

# PARTE D - KPI, interpretacion y calculos derivados

49 - ASA

¿Que mide ASA?

**Respuesta modelo:** Tiempo medio de respuesta.

50 - AHT

¿Que mide AHT?

**Respuesta modelo:** Tiempo medio de gestion.

51 - Abandon rate

¿Que mide abandon rate?

**Respuesta modelo:** Porcentaje de interacciones/llamadas que abandonan antes de ser atendidas segun definicion operativa.

52 - FCR

¿Que mide FCR?

**Respuesta modelo:** Resolucion en primer contacto.

53 - Service level

¿Que mide service level?

**Respuesta modelo:** Porcentaje atendido dentro de un umbral de tiempo definido.

54 - Occupancy

¿Que mide occupancy?

**Respuesta modelo:** Tiempo productivo respecto al tiempo disponible, segun definicion operativa.

55 - CSAT/NPS

¿Como deben interpretarse CSAT y NPS?

**Respuesta modelo:** Como metricas de satisfaccion/recomendacion, con cautela y en contexto; no sustituyen indicadores operativos.

56 - AHT trampa

¿Por que reducir AHT de forma aislada puede ser contraproducente?

**Respuesta modelo:** Puede empeorar FCR, calidad y satisfaccion si se fuerza a cerrar contactos demasiado rapido.

57 - KPI equilibrados

¿Que combinacion conceptual es mejor: solo AHT o eficiencia + calidad?

**Respuesta modelo:** Eficiencia + calidad: por ejemplo AHT junto a FCR, service level, abandono y satisfaccion.

58 - Calculo abandon rate

Calculo derivado: entran 1.000 llamadas y 80 abandonan antes de ser atendidas. ¿Abandon rate?

**Respuesta modelo:** 80/1000 x 100 = 8%. El calculo deriva de la definicion del KPI; la definicion operativa exacta debe fijarse.

59 - Calculo FCR

Calculo derivado: 720 de 900 casos se resuelven en primer contacto. ¿FCR?

**Respuesta modelo:** 720/900 x 100 = 80%.

60 - Calculo service level

Calculo derivado: 850 de 1.000 llamadas atendidas cumplen el umbral de 30 s. ¿Service level?

**Respuesta modelo:** 850/1000 x 100 = 85%, para ese umbral y definicion.

61 - Calculo AHT

Calculo derivado: tres gestiones duran 4, 6 y 8 min. ¿AHT simple?

**Respuesta modelo:** (4+6+8)/3 = 6 minutos.

62 - Calculo ASA

Calculo derivado: tres llamadas esperan 20, 30 y 70 s hasta respuesta. ¿ASA simple?

**Respuesta modelo:** (20+30+70)/3 = 40 s.

63 - Calculo occupancy

Calculo derivado: un agente tiene 360 min disponibles y 270 min productivos segun la definicion usada. ¿Occupancy?

**Respuesta modelo:** 270/360 x 100 = 75%.

64 - KPI sin contexto

Un informe dice 'AHT=4 min'. ¿Por que no basta para juzgar el servicio?

**Respuesta modelo:** Falta objetivo, periodo, canal, tipo de caso y metricas de calidad como FCR/satisfaccion/abandono.

65 - Umbral service level

¿Service level tiene sentido sin definir umbral?

**Respuesta modelo:** No. Debe expresarse como porcentaje atendido dentro de un umbral definido.

66 - KPI por canal

¿Debe compararse AHT de chat y voz sin mas?

**Respuesta modelo:** No necesariamente. Los canales y tipos de interaccion pueden tener dinamicas distintas; los KPI deben contextualizarse.

# PARTE E - Dimensionamiento, capacidad y continuidad

67 - Datos de dimensionamiento

Enumera las entradas que II.12 exige considerar para dimensionar.

**Respuesta modelo:** Volumen por franja, duracion media, patron de llegada, objetivo de servicio, shrinkage, canales y concurrencia.

68 - Shrinkage

¿Que ejemplos da II.12 de shrinkage?

**Respuesta modelo:** Pausas, formacion y ausencias.

69 - Promedio no basta

¿Por que 'llamadas medias/agentes' no es dimensionamiento suficiente?

**Respuesta modelo:** Porque ignora patron de llegada, variabilidad, duracion, objetivo de servicio, shrinkage y concurrencia.

70 - Erlang C

¿Que debes saber de Erlang C para GSI segun los apuntes?

**Respuesta modelo:** Que es un modelo de colas utilizado en telefonia en escenarios adecuados. No es necesario convertir II.12 en ejercicios matematicos avanzados.

71 - Pico horario

Un centro recibe 10.000 llamadas diarias, pero el 40% llega en una hora. ¿Que error seria dimensionar solo con media diaria?

**Respuesta modelo:** Ignorar picos y patron de llegada; la capacidad debe analizarse por franja.

72 - Multicanal y capacidad

¿Por que la concurrencia cambia segun canal?

**Respuesta modelo:** Porque voz, chat, email u otros canales pueden requerir distinta dedicacion y simultaneidad; el dimensionamiento debe considerarlo.

73 - Fallo del CRM

¿Que principio de continuidad plantea II.12 si el CRM falla?

**Respuesta modelo:** Si el servicio es critico, no deberia desaparecer todo mecanismo basico de atencion.

74 - Redundancia

Cita medidas de continuidad recogidas en el tema.

**Respuesta modelo:** Redundancia de enlaces/telefonia, sedes o agentes remotos, colas, fallback, backup de configuracion, desbordamiento, monitorizacion y planes de contingencia.

75 - Backup de configuracion

¿Por que importa en contact center?

**Respuesta modelo:** Permite recuperar reglas, IVR, routing y otros elementos de configuracion tras fallo/cambio.

76 - Monitorizacion

¿Que debe monitorizarse ademas de 'el servidor esta encendido'?

**Respuesta modelo:** Disponibilidad de canales, colas, tiempos, errores, integraciones, telefonia/CRM y KPI de servicio segun arquitectura.

# PARTE F - VoiceXML y trampas tecnicas

77 - VoiceXML no es audio

¿VoiceXML contiene necesariamente el audio grabado?

**Respuesta modelo:** No. Es un lenguaje XML para describir dialogos y flujo; puede referenciar prompts/recursos segun plataforma.

78 - VoiceXML y XML

¿Por que importa recordar que VoiceXML es XML?

**Respuesta modelo:** Porque su naturaleza es de lenguaje XML estructurado para dialogos de voz, no un protocolo de telefonia.

79 - VoiceXML vs IVR

¿Son sinonimos VoiceXML e IVR?

**Respuesta modelo:** No. IVR es el sistema/funcion de dialogo; VoiceXML puede ser una tecnologia para describir ese dialogo.

80 - CTI vs ACD

El sistema reparte llamadas pero no abre ficha ni registra contexto. ¿Que componente funciona y cual falta integrar?

**Respuesta modelo:** ACD funciona para distribucion; falta CTI/CRM para integracion contextual.

81 - ASR vs TTS

El usuario habla y el sistema convierte voz en entrada; luego lee una respuesta. ¿Que dos capacidades hay?

**Respuesta modelo:** ASR para reconocer voz y TTS para sintetizar la respuesta.

82 - SBC vs ACD

¿Que diferencia esencial hay?

**Respuesta modelo:** SBC protege/controla borde de sesiones VoIP; ACD distribuye llamadas entre colas/agentes.

# PARTE G - Mini-supuestos integradores

83 - Organismo multicanal

Un organismo atiende telefono, email y chat, pero cada canal crea un expediente independiente. ¿Que problema ves y que arquitectura propones a alto nivel?

**Respuesta modelo:** Es multicanal en silos, no omnicanal maduro. Proponer modelo comun de interaccion, identidad y CRM/case management compartido, con routing por canal y trazabilidad.

84 - IVR de prestaciones

El IVR ofrece 9 menus, no permite volver atras ni hablar con agente y pide datos sensibles en voz abierta. Identifica al menos cuatro mejoras.

**Respuesta modelo:** Menus mas cortos, repeticion/errores, salida a agente, accesibilidad y evitar capturar/grabar datos sensibles innecesarios.

85 - Ciudadano sensible

Una llamada sobre un tramite sensible se identifica solo por numero de telefono y el agente ve toda la ficha. ¿Que controles faltan?

**Respuesta modelo:** Autenticacion proporcional adicional, minimo privilegio, datos necesarios solamente, roles y trazabilidad.

86 - KPI contradictorios

AHT baja 25%, pero FCR cae y abandonos posteriores/subidas de contactos aumentan. ¿Es una mejora?

**Respuesta modelo:** No puede afirmarse. Optimizar AHT aislado puede degradar calidad; hay que analizar FCR, abandono, satisfaccion y objetivos.

87 - Pico extraordinario

Una campana publica multiplicara llamadas durante dos semanas. Estructura una respuesta de capacidad sin calcular Erlang C.

**Respuesta modelo:** Prever volumen por franja, duracion, objetivo de servicio, shrinkage, skills, canales y concurrencia; ampliar agentes/colas/callback/desbordamiento, monitorizar KPI y preparar contingencia.

88 - Continuidad

Cae el CRM central pero la telefonia funciona. ¿Que deberia existir si el servicio es critico?

**Respuesta modelo:** Mecanismo basico de atencion/fallback, registro temporal controlado, recuperacion de contexto posterior, procedimientos y monitorizacion; no dejar el servicio totalmente inutilizable.

89 - Arquitectura de segundo ejercicio

En maximo 12 lineas, ¿que bloques deberia contener una respuesta sobre un nuevo contact center publico?

**Respuesta modelo:** Canales y voz -> ACD/IVR -> agentes -> CRM/casos -> backoffice; routing; identificacion/autenticacion; privacidad/grabacion; accesibilidad; SLA/KPI; continuidad; monitorizacion/observabilidad.

90 - Supuesto completo 20 min

Debes disenar atencion publica por telefono, chat y email con tramites generales y sensibles. Estructura una respuesta completa sin elegir producto.

**Respuesta modelo:** Requisitos/canales; arquitectura multicanal/omnicanal; ACD/routing/IVR; CTI+CRM/casos; autenticacion proporcional; minimo privilegio y grabacion; accesibilidad; KPI/SL; dimensionamiento por franja; continuidad/fallback; monitorizacion y trazabilidad; integracion con backoffice.

# Patron mental de examen

* ¿Es call center, contact center, multicanal u omnicanal?
* ¿Que hace cada pieza? ACD distribuye; CTI integra; IVR dialoga; CRM conserva contexto/caso.
* ¿Como enruto? skill, prioridad, idioma, disponibilidad, callback y desbordamiento.
* ¿Como identifico/autentico sin exponer datos de mas?
* ¿Que KPI equilibran eficiencia y calidad? ASA, AHT, abandono, FCR, service level, occupancy y satisfaccion.
* ¿Como dimensiono? volumen por franja, duracion, llegadas, objetivo, shrinkage, canales y concurrencia.
* ¿Que pasa si falla CRM/telefonia/sede? continuidad, fallback y monitorizacion.

Base nuclear: GSI A2 Bloque II V2.1, tema II.12. No se anaden productos ni profundidad de telefonia avanzada. Los calculos sencillos de KPI son aplicaciones directas de sus definiciones.
