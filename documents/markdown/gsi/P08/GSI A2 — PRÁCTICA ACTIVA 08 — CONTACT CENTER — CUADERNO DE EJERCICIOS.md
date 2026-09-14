# GSI A2 - PRACTICA ACTIVA 08

## Contact center, CRM, IVR, VoiceXML y KPI - CUADERNO DE EJERCICIOS

**Ambito:** II.12 - Gestion de la atencion a clientes y usuarios: centros de contacto, CRM, arquitectura multicanal, IVR y VoiceXML.

**Metodo:** contesta primero sin mirar. En escenarios usa siempre la secuencia canal -> routing/IVR -> agente -> CRM/caso -> backoffice, y despues anade identidad, privacidad, accesibilidad, KPI y continuidad.

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

2 - Multicanal

Define multicanal.

3 - Omnicanal

Define omnicanal y su requisito principal.

4 - ACD

¿Que hace un ACD y que no hace por si solo?

5 - CTI

¿Que aporta CTI?

6 - IVR

¿Que es un IVR?

7 - IVR vs ASR

¿Por que IVR y ASR no son sinonimos?

8 - TTS

¿Que funcion cumple TTS?

9 - DTMF

¿Que papel tiene DTMF en un IVR?

10 - VoiceXML

¿Que es VoiceXML para II.12?

11 - PBX/IP-PBX

¿Que componente gestiona extensiones y llamadas?

12 - SIP

¿Que funcion tiene SIP dentro del alcance de II.12?

13 - SBC

¿Que papel conceptual cumple un SBC?

14 - WFM

¿Que hace Workforce Management?

15 - CRM

¿Por que CRM no es una simple agenda?

16 - Screen-pop

¿Que es screen-pop y que error de seguridad debes evitar?

17 - Identificar vs autenticar

El sistema reconoce el numero llamante. ¿Ha autenticado al ciudadano?

18 - Grabacion

¿Que cuatro elementos minimos debes definir si se graban llamadas?

# PARTE B - Arquitectura, routing y experiencia

19 - Cadena arquitectonica

Ordena conceptualmente: agentes, canales, backoffice, ACD/router, CRM, IVR.

20 - Servicios transversales

Cita los servicios transversales que II.12 coloca sobre la arquitectura.

21 - Skills-based routing

¿Que criterio de routing asigna una interaccion segun competencias del agente?

22 - Prioridad

Una incidencia critica debe pasar delante de consultas generales. ¿Que mecanismo de routing aplica?

23 - Idioma

¿Puede el idioma formar parte del routing?

24 - Agente mas libre

¿Que estrategia busca asignar al agente con mayor disponibilidad?

25 - Round-robin

¿Que idea expresa round-robin?

26 - Callback

¿Para que sirve ofrecer callback en una cola?

27 - Desbordamiento

¿Que debe ocurrir si una cola supera umbrales definidos?

28 - Evitar loops

¿Que fallo de diseno menciona II.12 en colas y routing?

29 - Omnicanal real

Un usuario pasa de chat a telefono y debe repetir todos sus datos. ¿Es una experiencia omnicanal madura?

30 - Backoffice

¿Por que el contact center debe integrarse con backoffice?

31 - Base de conocimiento

¿Que aporta una base de conocimiento a agentes y autoservicio?

32 - Canales alternativos

¿Por que un organismo publico no deberia forzar la voz como unico canal?

33 - IVR corto

¿Que recomendacion de diseno da II.12 para menus IVR?

34 - CRM y minimizacion

¿Por que 'copiar todo al CRM' es mala practica?

# PARTE C - Identidad, privacidad y accesibilidad

35 - Numero llamante

¿El numero llamante puede usarse como contexto? ¿Como credencial fuerte unica?

36 - Factor adicional

¿Cuando puede requerirse un factor adicional de autenticacion?

37 - Preguntas debiles

¿Que dice II.12 sobre preguntas debiles como unico mecanismo de autenticacion?

38 - Minimo privilegio

Una llamada entra y el agente ve toda la historia medica, fiscal y administrativa. ¿Que principio se esta vulnerando?

39 - Grabaciones y credenciales

¿Que dato deberia evitarse grabar si no es necesario?

40 - Exportacion de grabaciones

¿Deben quedar sin control las exportaciones de grabaciones?

41 - Accesibilidad auditiva

Da una alternativa de canal coherente para personas con discapacidad auditiva.

42 - Accesibilidad cognitiva

¿Que principio de comunicacion ayuda especialmente?

43 - IVR inaccesible

¿Se soluciona un IVR inaccesible diciendo 'tambien tenemos web'?

44 - Tecnologias de apoyo

¿Que debe buscar la arquitectura multicanal respecto a tecnologias de apoyo?

45 - Privacidad por canal

¿Cambiar de canal elimina las obligaciones de privacidad?

46 - Retencion

¿Por que debe existir una politica de retencion para grabaciones/interacciones?

47 - Roles y logs

¿Que controles necesitan los agentes segun II.12?

48 - Autenticacion proporcional

¿Que significa que la autenticacion sea proporcional?

# PARTE D - KPI, interpretacion y calculos derivados

49 - ASA

¿Que mide ASA?

50 - AHT

¿Que mide AHT?

51 - Abandon rate

¿Que mide abandon rate?

52 - FCR

¿Que mide FCR?

53 - Service level

¿Que mide service level?

54 - Occupancy

¿Que mide occupancy?

55 - CSAT/NPS

¿Como deben interpretarse CSAT y NPS?

56 - AHT trampa

¿Por que reducir AHT de forma aislada puede ser contraproducente?

57 - KPI equilibrados

¿Que combinacion conceptual es mejor: solo AHT o eficiencia + calidad?

58 - Calculo abandon rate

Calculo derivado: entran 1.000 llamadas y 80 abandonan antes de ser atendidas. ¿Abandon rate?

59 - Calculo FCR

Calculo derivado: 720 de 900 casos se resuelven en primer contacto. ¿FCR?

60 - Calculo service level

Calculo derivado: 850 de 1.000 llamadas atendidas cumplen el umbral de 30 s. ¿Service level?

61 - Calculo AHT

Calculo derivado: tres gestiones duran 4, 6 y 8 min. ¿AHT simple?

62 - Calculo ASA

Calculo derivado: tres llamadas esperan 20, 30 y 70 s hasta respuesta. ¿ASA simple?

63 - Calculo occupancy

Calculo derivado: un agente tiene 360 min disponibles y 270 min productivos segun la definicion usada. ¿Occupancy?

64 - KPI sin contexto

Un informe dice 'AHT=4 min'. ¿Por que no basta para juzgar el servicio?

65 - Umbral service level

¿Service level tiene sentido sin definir umbral?

66 - KPI por canal

¿Debe compararse AHT de chat y voz sin mas?

# PARTE E - Dimensionamiento, capacidad y continuidad

67 - Datos de dimensionamiento

Enumera las entradas que II.12 exige considerar para dimensionar.

68 - Shrinkage

¿Que ejemplos da II.12 de shrinkage?

69 - Promedio no basta

¿Por que 'llamadas medias/agentes' no es dimensionamiento suficiente?

70 - Erlang C

¿Que debes saber de Erlang C para GSI segun los apuntes?

71 - Pico horario

Un centro recibe 10.000 llamadas diarias, pero el 40% llega en una hora. ¿Que error seria dimensionar solo con media diaria?

72 - Multicanal y capacidad

¿Por que la concurrencia cambia segun canal?

73 - Fallo del CRM

¿Que principio de continuidad plantea II.12 si el CRM falla?

74 - Redundancia

Cita medidas de continuidad recogidas en el tema.

75 - Backup de configuracion

¿Por que importa en contact center?

76 - Monitorizacion

¿Que debe monitorizarse ademas de 'el servidor esta encendido'?

# PARTE F - VoiceXML y trampas tecnicas

77 - VoiceXML no es audio

¿VoiceXML contiene necesariamente el audio grabado?

78 - VoiceXML y XML

¿Por que importa recordar que VoiceXML es XML?

79 - VoiceXML vs IVR

¿Son sinonimos VoiceXML e IVR?

80 - CTI vs ACD

El sistema reparte llamadas pero no abre ficha ni registra contexto. ¿Que componente funciona y cual falta integrar?

81 - ASR vs TTS

El usuario habla y el sistema convierte voz en entrada; luego lee una respuesta. ¿Que dos capacidades hay?

82 - SBC vs ACD

¿Que diferencia esencial hay?

# PARTE G - Mini-supuestos integradores

83 - Organismo multicanal

Un organismo atiende telefono, email y chat, pero cada canal crea un expediente independiente. ¿Que problema ves y que arquitectura propones a alto nivel?

84 - IVR de prestaciones

El IVR ofrece 9 menus, no permite volver atras ni hablar con agente y pide datos sensibles en voz abierta. Identifica al menos cuatro mejoras.

85 - Ciudadano sensible

Una llamada sobre un tramite sensible se identifica solo por numero de telefono y el agente ve toda la ficha. ¿Que controles faltan?

86 - KPI contradictorios

AHT baja 25%, pero FCR cae y abandonos posteriores/subidas de contactos aumentan. ¿Es una mejora?

87 - Pico extraordinario

Una campana publica multiplicara llamadas durante dos semanas. Estructura una respuesta de capacidad sin calcular Erlang C.

88 - Continuidad

Cae el CRM central pero la telefonia funciona. ¿Que deberia existir si el servicio es critico?

89 - Arquitectura de segundo ejercicio

En maximo 12 lineas, ¿que bloques deberia contener una respuesta sobre un nuevo contact center publico?

90 - Supuesto completo 20 min

Debes disenar atencion publica por telefono, chat y email con tramites generales y sensibles. Estructura una respuesta completa sin elegir producto.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A Conceptos |  |  |  |
| B Arquitectura/routing |  |  |  |
| C Identidad/privacidad |  |  |  |
| D KPI |  |  |  |
| E Dimensionamiento/continuidad |  |  |  |
| F VoiceXML/trampas |  |  |  |
| G Supuestos |  |  |  |

Base nuclear: GSI A2 Bloque II V2.1, tema II.12. No se anaden productos ni profundidad de telefonia avanzada. Los calculos sencillos de KPI son aplicaciones directas de sus definiciones.
