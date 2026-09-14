# GSI A2 - PRACTICA ACTIVA 09

## Calidad del software, ISO/IEC 25010:2023, SQuaRE y metricas - CUADERNO DE EJERCICIOS

**Ambito:** III.13 - Calidad del software y su medida: modelos, metricas, normas y estandares.

**Metodo:** primero identifica la caracteristica de calidad, despues la metrica, luego la condicion/umbral y finalmente la evidencia. No confundas modelo, metrica, objetivo y criterio de aceptacion.

# FICHA DE PRECISION - ISO/IEC 25010:2023

| ISO/IEC 25010:2023 | Idea de examen | Subcaracteristicas de referencia |
| --- | --- | --- |
| Functional suitability | Las funciones cubren y resuelven correctamente las necesidades. | Functional completeness, correctness, appropriateness. |
| Performance efficiency | Tiempo/throughput, recursos y limites de capacidad. | Time behaviour, resource utilization, capacity. |
| Compatibility | Coexistir e intercambiar/usar informacion con otros sistemas. | Co-existence, interoperability. |
| Interaction capability | Interaccion efectiva con usuarios en distintos contextos. | Appropriateness recognizability, learnability, operability, user error protection, user engagement, inclusivity, user assistance, self-descriptiveness. |
| Reliability | Funcionamiento correcto y continuidad bajo condiciones/tiempo definidos. | Faultlessness, availability, fault tolerance, recoverability. |
| Security | Proteccion frente a acceso/alteracion/ataques y trazabilidad de acciones. | Confidentiality, integrity, non-repudiation, accountability, authenticity, resistance. |
| Maintainability | Facilidad/eficiencia de analizar, cambiar, probar y reutilizar. | Modularity, reusability, analysability, modifiability, testability. |
| Flexibility | Adaptacion a requisitos, contexto o entorno. | Adaptability, scalability, installability, replaceability. |
| Safety | Evitar estados que pongan en peligro personas, salud, propiedad o entorno. | Operational constraint, risk identification, fail safe, hazard warning, safe integration. |

## Transicion que puede generar trampas de test

| Edicion 2011 | Edicion 2023 | Clave |
| --- | --- | --- |
| 8 caracteristicas | 9 caracteristicas | Se incorpora Safety. |
| Usability | Interaction capability | No responder "usability" si preguntan expresamente por el modelo 2023. |
| Portability | Flexibility | Flexibility incorpora una vision mas amplia y, entre otras, scalability. |
| Quality in use dentro de 25010:2011 | 25010:2023 se centra en product quality | Para III.13, priorizar el modelo de calidad de producto que recogen los apuntes. |

# PARTE A - Modelo ISO/IEC 25010:2023 y transicion

1 - Numero de caracteristicas

¿Cuantas caracteristicas tiene el modelo de calidad de producto ISO/IEC 25010:2023?

2 - Edicion vigente

¿Que edicion debe usarse como referencia principal en los apuntes?

3 - Nueva caracteristica

¿Que caracteristica de primer nivel se anade en 2023?

4 - Usability

¿Como se denomina en 2023 la caracteristica que en 2011 aparecia como Usability?

5 - Portability

¿Como se denomina en 2023 la caracteristica que en 2011 aparecia como Portability?

6 - Functional suitability

Una funcion devuelve resultados incorrectos aunque cubre todos los casos previstos. ¿Que caracteristica principal esta afectada?

7 - Performance efficiency

p95 supera el objetivo y el consumo CPU es excesivo. ¿Que caracteristica principal?

8 - Compatibility

Dos sistemas no pueden intercambiar correctamente informacion. ¿Que caracteristica?

9 - Interaction capability

Los usuarios no comprenden como operar la interfaz. ¿Que caracteristica?

10 - Reliability

El servicio se cae con frecuencia y tarda demasiado en recuperarse. ¿Que caracteristica?

11 - Security

Una cuenta accede a datos para los que no tiene autorizacion. ¿Que caracteristica?

12 - Maintainability

Un cambio pequeno obliga a modificar diez modulos acoplados. ¿Que caracteristica?

13 - Flexibility

El sistema no puede escalar cuando crece la carga. ¿Que caracteristica 2023 incluye ese problema?

14 - Safety

Un sistema de control puede entrar en un estado que pone en peligro personas ante un fallo. ¿Que caracteristica?

15 - Modelo no es metrica

¿ISO/IEC 25010:2023 proporciona por si sola el valor numerico de calidad de tu aplicacion?

16 - Modelo durante ciclo

¿El modelo solo se usa al final para aceptar el producto?

17 - Pregunta 2011

Si una pregunta dice expresamente 'ISO/IEC 25010:2011', ¿es correcto contestar que tiene 9 caracteristicas?

18 - Pregunta 2023

Si una opcion llama 'Portability' a una de las 9 caracteristicas de primer nivel de 2023, ¿es correcta?

# PARTE B - Caracteristicas y subcaracteristicas

19 - Functional completeness

Faltan funciones obligatorias del pliego. ¿Que subcaracteristica?

20 - Functional correctness

La funcion existe pero calcula mal una tasa. ¿Que subcaracteristica?

21 - Functional appropriateness

La funcion es correcta pero obliga a pasos innecesarios que dificultan completar la tarea. ¿Que subcaracteristica dentro de functional suitability?

22 - Time behaviour

Tiempo de respuesta y throughput incumplen requisitos. ¿Que subcaracteristica?

23 - Resource utilization

El sistema cumple latencia pero consume memoria muy por encima de lo previsto. ¿Que subcaracteristica?

24 - Capacity

El sistema no soporta el maximo de usuarios concurrentes requerido. ¿Que subcaracteristica?

25 - Co-existence

Una aplicacion degrada a otra al compartir recursos del mismo entorno. ¿Que subcaracteristica?

26 - Interoperability

Dos sistemas intercambian mensajes pero no pueden usar correctamente la informacion recibida. ¿Que subcaracteristica?

27 - Learnability

Usuarios nuevos necesitan demasiado tiempo para aprender tareas basicas. ¿Que subcaracteristica?

28 - User error protection

La interfaz permite borrar sin advertencia ni posibilidad razonable de prevenir errores. ¿Que subcaracteristica?

29 - Inclusivity

¿Que subcaracteristica 2023 amplia la atencion a usuarios de diversos contextos/capacidades?

30 - Availability

El sistema no esta operativo cuando debe usarse. ¿Que subcaracteristica?

31 - Fault tolerance

Un nodo falla y el servicio deja de funcionar pese a que el requisito era seguir operando. ¿Que subcaracteristica?

32 - Recoverability

Tras una interrupcion no se recuperan datos/estado en el tiempo previsto. ¿Que subcaracteristica?

33 - Authenticity

¿Que subcaracteristica de seguridad busca demostrar que una identidad es la que afirma ser?

34 - Accountability

¿Que subcaracteristica permite atribuir acciones de forma trazable a una entidad?

35 - Resistance

El producto debe mantener operacion bajo condiciones de ataque. ¿Que subcaracteristica 2023?

36 - Modularity

Cambiar un componente afecta a muchos otros. ¿Que subcaracteristica de maintainability?

37 - Analysability

Cuesta diagnosticar la causa de un fallo y localizar que debe modificarse. ¿Que subcaracteristica?

38 - Testability

Es muy dificil establecer criterios y ejecutar pruebas tras cada cambio. ¿Que subcaracteristica?

# PARTE C - QA, QC, calidad de producto y proceso

39 - QA

Define QA segun III.13.

40 - QC

Define QC segun III.13.

41 - QA vs testing

¿Testing es sinonimo de QA?

42 - Revision de proceso

Crear una guia de coding, formar al equipo y automatizar gates. ¿QA o QC?

43 - Prueba de carga

Ejecutar una prueba de carga contra una version candidata. ¿QA o QC?

44 - RCA

¿Que papel tiene RCA en la calidad?

45 - Definition of Done

¿Por que aparece DoD en calidad de proceso?

46 - Quality gate

¿Un quality gate debe existir por acumular herramientas?

47 - Deuda tecnica

¿Es una metrica unica y objetiva por si misma?

48 - EFQM/ISO 900x

¿Deben dominar III.13 como si fuera un tema de calidad organizativa?

49 - Cobertura

¿100% de cobertura de lineas demuestra software sin defectos?

50 - Complejidad

¿Una complejidad ciclomática baja garantiza calidad?

51 - Metrica sin objetivo

¿Por que una metrica sin objetivo/contexto puede ser perjudicial?

52 - Calidad medible

Convierte 'el sistema sera rapido y fiable' en dos ejemplos verificables.

# PARTE D - Metricas y calculos

53 - Cinco datos de una metrica

¿Que debe acompanar a una metrica segun III.13?

54 - Densidad de defectos

Proyecto A tiene 30 defectos en 60 KLOC; B tiene 20 en 20 KLOC. Calcula defectos/KLOC con esa convencion.

55 - Cobertura simple

Si 180 de 200 ramas definidas por la herramienta estan cubiertas, ¿cobertura de ramas?

56 - Error rate

Si 2.500 de 5.000.000 peticiones terminan en error segun la definicion operativa, ¿tasa?

57 - Disponibilidad

Servicio medido 43.200 min en un mes, con 21,6 min de indisponibilidad contabilizable. Calcula disponibilidad simple.

58 - Throughput

Se completan 120.000 operaciones en 10 minutos. ¿Throughput medio por segundo?

59 - Lead time

Un cambio se solicita el lunes 09:00 y queda disponible el jueves 09:00. ¿Lead time calendario simple?

60 - Cycle time

¿Por que lead time y cycle time no deben usarse sin definicion?

61 - Defect escape

¿Que idea mide defect escape rate?

62 - Change failure rate

¿Que idea pretende medir change failure rate?

63 - MTTR

¿Que cautela introduce III.13 al usar mean time to restore?

64 - Complejidad ciclomática: decisiones

Un componente simple tiene 4 nodos de decision independientes en el grafo. Con la aproximacion decisiones+1, ¿V(G)?

65 - Complejidad: E-N+2P

Grafo con E=14, N=11 y P=1. Calcula V(G).

66 - Consistencia de formulas

Si para un componente simple el conteo de decisiones da 5 decisiones, ¿que V(G) esperas con decisiones+1?

67 - Interpretar complejidad

Un modulo pasa de V(G)=8 a V(G)=22. ¿Puedes concluir que es defectuoso?

68 - Duplicacion

¿Por que duplicacion puede ser una metrica de producto relevante?

69 - Acoplamiento/cohesion

¿Que direccion suele ser deseable en diseno mantenible?

70 - Vulnerabilidades

¿Por que 'numero de vulnerabilidades' sin severidad/edad no basta?

71 - Comparacion LOC

Dos proyectos usan tecnologias distintas. ¿Es correcto concluir que el de menos lineas es de mayor calidad?

72 - Cuadro equilibrado

Propón un conjunto minimo de metricas para una API publica sin usar una sola 'metrica reina'.

# PARTE E - SQuaRE, requisitos y evaluacion

73 - SQuaRE

¿Que significa SQuaRE?

74 - Familia 25000

¿Que debes memorizar de la familia SQuaRE segun tus apuntes?

75 - Modelo a requisito

Convierte performance efficiency en un requisito medible.

76 - Modelo a seguridad

Convierte security en dos criterios medibles/aceptables.

77 - Modelo a mantenibilidad

Convierte maintainability en evidencias, no en adjetivos.

78 - Requisito vs metrica

¿Es 'p95' un requisito por si solo?

79 - Aceptacion

¿Puede una metrica formar parte del criterio de aceptacion?

80 - Calidad continua

¿Por que SQuaRE/25010 no deben usarse solo al final?

# PARTE F - Mini-supuestos de calidad

81 - Portal publico

Portal con 99,95% de disponibilidad, p95<2s, interoperabilidad con tres organismos, WCAG y MFA. Clasifica los atributos principales.

82 - Release con 100% coverage

Una release tiene 100% line coverage pero una vulnerabilidad critica conocida. ¿Aprobar?

83 - Equipo gamifica LOC

Un equipo es premiado por lineas de codigo producidas y comienza a generar mas codigo. ¿Que problema ilustra?

84 - Refactor

Un sistema es funcionalmente correcto pero cada cambio tarda semanas por fuerte acoplamiento. ¿Que caracteristica priorizas y que evidencias usarias?

85 - Nuevo hardware

El software funciona en un entorno pero no puede instalarse ni adaptarse al nuevo. ¿Caracteristica 2023?

86 - Sistema con riesgo fisico

Una aplicacion controla una barrera automatica. Ante fallo debe pasar a estado seguro y advertir. ¿Que caracteristica anadida en 2023?

87 - Plan de calidad

Estructura un plan de calidad para una API de tramitacion en 10 lineas.

88 - Comparar proveedores

Dos proveedores presentan 'calidad 9/10' sin metodo. ¿Que pedirias?

89 - Pregunta antigua

Un test afirma 'ISO/IEC 25010 tiene como caracteristicas Usability y Portability'. ¿Como respondes?

90 - Supuesto de 20 minutos

Una Administracion licita un nuevo sistema. Da la estructura de una respuesta de calidad que puntue bien.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A 25010/transicion |  |  |  |
| B Caracteristicas |  |  |  |
| C QA/QC |  |  |  |
| D Metricas |  |  |  |
| E SQuaRE |  |  |  |
| F Supuestos |  |  |  |

Base: GSI A2 Bloque III V2.1, III.13. Verificacion de actualidad: ISO/IEC 25010:2023 sigue publicado como edicion 2 con nueve caracteristicas; ISO/IEC 25000:2014 figura como guia SQuaRE vigente/confirmada en 2026. No se exige memorizar toda la numeracion secundaria 250xx.
