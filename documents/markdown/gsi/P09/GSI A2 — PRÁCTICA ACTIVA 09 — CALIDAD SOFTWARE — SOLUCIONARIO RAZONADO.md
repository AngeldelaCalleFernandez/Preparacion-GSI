# GSI A2 - PRACTICA ACTIVA 09

## Calidad del software, ISO/IEC 25010:2023, SQuaRE y metricas - SOLUCIONARIO RAZONADO

**Criterio:** las respuestas nucleares siguen III.13 V2.1. La actualizacion externa solo confirma la vigencia de ISO/IEC 25010:2023 y de la guia SQuaRE. Las traducciones de algunos nombres pueden variar; para evitar ambiguedad se conservan los nombres ingleses del modelo 2023.

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

**Respuesta modelo:** Nueve.

2 - Edicion vigente

¿Que edicion debe usarse como referencia principal en los apuntes?

**Respuesta modelo:** ISO/IEC 25010:2023, edicion 2. El tema advierte que pueden aparecer materiales/preguntas basados en 2011.

3 - Nueva caracteristica

¿Que caracteristica de primer nivel se anade en 2023?

**Respuesta modelo:** Safety.

4 - Usability

¿Como se denomina en 2023 la caracteristica que en 2011 aparecia como Usability?

**Respuesta modelo:** Interaction capability.

5 - Portability

¿Como se denomina en 2023 la caracteristica que en 2011 aparecia como Portability?

**Respuesta modelo:** Flexibility.

6 - Functional suitability

Una funcion devuelve resultados incorrectos aunque cubre todos los casos previstos. ¿Que caracteristica principal esta afectada?

**Respuesta modelo:** Functional suitability, especialmente functional correctness.

7 - Performance efficiency

p95 supera el objetivo y el consumo CPU es excesivo. ¿Que caracteristica principal?

**Respuesta modelo:** Performance efficiency.

8 - Compatibility

Dos sistemas no pueden intercambiar correctamente informacion. ¿Que caracteristica?

**Respuesta modelo:** Compatibility, especialmente interoperability.

9 - Interaction capability

Los usuarios no comprenden como operar la interfaz. ¿Que caracteristica?

**Respuesta modelo:** Interaction capability.

10 - Reliability

El servicio se cae con frecuencia y tarda demasiado en recuperarse. ¿Que caracteristica?

**Respuesta modelo:** Reliability, con impacto en availability/recoverability.

11 - Security

Una cuenta accede a datos para los que no tiene autorizacion. ¿Que caracteristica?

**Respuesta modelo:** Security, por confidencialidad/control de acceso.

12 - Maintainability

Un cambio pequeno obliga a modificar diez modulos acoplados. ¿Que caracteristica?

**Respuesta modelo:** Maintainability, especialmente modularity/modifiability.

13 - Flexibility

El sistema no puede escalar cuando crece la carga. ¿Que caracteristica 2023 incluye ese problema?

**Respuesta modelo:** Flexibility, mediante scalability.

14 - Safety

Un sistema de control puede entrar en un estado que pone en peligro personas ante un fallo. ¿Que caracteristica?

**Respuesta modelo:** Safety.

15 - Modelo no es metrica

¿ISO/IEC 25010:2023 proporciona por si sola el valor numerico de calidad de tu aplicacion?

**Respuesta modelo:** No. Proporciona un modelo de caracteristicas/subcaracteristicas que sirve para especificar, medir y evaluar; las medidas y objetivos deben definirse.

16 - Modelo durante ciclo

¿El modelo solo se usa al final para aceptar el producto?

**Respuesta modelo:** No. Puede apoyar requisitos, diseno, objetivos de prueba, control de calidad y criterios de aceptacion durante el ciclo.

17 - Pregunta 2011

Si una pregunta dice expresamente 'ISO/IEC 25010:2011', ¿es correcto contestar que tiene 9 caracteristicas?

**Respuesta modelo:** No. Hay que identificar la edicion preguntada; la V2.1 avisa de la transicion.

18 - Pregunta 2023

Si una opcion llama 'Portability' a una de las 9 caracteristicas de primer nivel de 2023, ¿es correcta?

**Respuesta modelo:** No. En 2023 el nombre de primer nivel es Flexibility.

# PARTE B - Caracteristicas y subcaracteristicas

19 - Functional completeness

Faltan funciones obligatorias del pliego. ¿Que subcaracteristica?

**Respuesta modelo:** Functional completeness.

20 - Functional correctness

La funcion existe pero calcula mal una tasa. ¿Que subcaracteristica?

**Respuesta modelo:** Functional correctness.

21 - Functional appropriateness

La funcion es correcta pero obliga a pasos innecesarios que dificultan completar la tarea. ¿Que subcaracteristica dentro de functional suitability?

**Respuesta modelo:** Functional appropriateness.

22 - Time behaviour

Tiempo de respuesta y throughput incumplen requisitos. ¿Que subcaracteristica?

**Respuesta modelo:** Time behaviour, dentro de performance efficiency.

23 - Resource utilization

El sistema cumple latencia pero consume memoria muy por encima de lo previsto. ¿Que subcaracteristica?

**Respuesta modelo:** Resource utilization.

24 - Capacity

El sistema no soporta el maximo de usuarios concurrentes requerido. ¿Que subcaracteristica?

**Respuesta modelo:** Capacity.

25 - Co-existence

Una aplicacion degrada a otra al compartir recursos del mismo entorno. ¿Que subcaracteristica?

**Respuesta modelo:** Co-existence.

26 - Interoperability

Dos sistemas intercambian mensajes pero no pueden usar correctamente la informacion recibida. ¿Que subcaracteristica?

**Respuesta modelo:** Interoperability.

27 - Learnability

Usuarios nuevos necesitan demasiado tiempo para aprender tareas basicas. ¿Que subcaracteristica?

**Respuesta modelo:** Learnability, dentro de interaction capability.

28 - User error protection

La interfaz permite borrar sin advertencia ni posibilidad razonable de prevenir errores. ¿Que subcaracteristica?

**Respuesta modelo:** User error protection.

29 - Inclusivity

¿Que subcaracteristica 2023 amplia la atencion a usuarios de diversos contextos/capacidades?

**Respuesta modelo:** Inclusivity.

30 - Availability

El sistema no esta operativo cuando debe usarse. ¿Que subcaracteristica?

**Respuesta modelo:** Availability.

31 - Fault tolerance

Un nodo falla y el servicio deja de funcionar pese a que el requisito era seguir operando. ¿Que subcaracteristica?

**Respuesta modelo:** Fault tolerance.

32 - Recoverability

Tras una interrupcion no se recuperan datos/estado en el tiempo previsto. ¿Que subcaracteristica?

**Respuesta modelo:** Recoverability.

33 - Authenticity

¿Que subcaracteristica de seguridad busca demostrar que una identidad es la que afirma ser?

**Respuesta modelo:** Authenticity.

34 - Accountability

¿Que subcaracteristica permite atribuir acciones de forma trazable a una entidad?

**Respuesta modelo:** Accountability.

35 - Resistance

El producto debe mantener operacion bajo condiciones de ataque. ¿Que subcaracteristica 2023?

**Respuesta modelo:** Resistance.

36 - Modularity

Cambiar un componente afecta a muchos otros. ¿Que subcaracteristica de maintainability?

**Respuesta modelo:** Modularity.

37 - Analysability

Cuesta diagnosticar la causa de un fallo y localizar que debe modificarse. ¿Que subcaracteristica?

**Respuesta modelo:** Analysability.

38 - Testability

Es muy dificil establecer criterios y ejecutar pruebas tras cada cambio. ¿Que subcaracteristica?

**Respuesta modelo:** Testability.

# PARTE C - QA, QC, calidad de producto y proceso

39 - QA

Define QA segun III.13.

**Respuesta modelo:** Quality Assurance se orienta a procesos preventivos para favorecer calidad: estandares, revisiones, formacion, pipeline, auditoria, etc.

40 - QC

Define QC segun III.13.

**Respuesta modelo:** Quality Control evalua el producto mediante pruebas, inspecciones y mediciones.

41 - QA vs testing

¿Testing es sinonimo de QA?

**Respuesta modelo:** No. Testing es una actividad de evaluacion/QC; QA es mas amplio y preventivo.

42 - Revision de proceso

Crear una guia de coding, formar al equipo y automatizar gates. ¿QA o QC?

**Respuesta modelo:** Principalmente QA.

43 - Prueba de carga

Ejecutar una prueba de carga contra una version candidata. ¿QA o QC?

**Respuesta modelo:** Principalmente QC, porque evalua el producto.

44 - RCA

¿Que papel tiene RCA en la calidad?

**Respuesta modelo:** Analizar causas raiz para evitar recurrencia y alimentar mejora continua.

45 - Definition of Done

¿Por que aparece DoD en calidad de proceso?

**Respuesta modelo:** Porque explicita condiciones que deben cumplirse para considerar trabajo terminado y ayuda a incorporar controles de calidad de forma repetible.

46 - Quality gate

¿Un quality gate debe existir por acumular herramientas?

**Respuesta modelo:** No. Debe vincularse a riesgo/criterios y tener capacidad de actuar sobre hallazgos; de lo contrario genera ruido.

47 - Deuda tecnica

¿Es una metrica unica y objetiva por si misma?

**Respuesta modelo:** No necesariamente. Debe definirse como indicador/criterio con contexto; III.13 la incluye entre posibles metricas de producto/proceso de mejora.

48 - EFQM/ISO 900x

¿Deben dominar III.13 como si fuera un tema de calidad organizativa?

**Respuesta modelo:** No. Los apuntes los dejan solo como contexto porque el epigrafe se centra en software y medicion.

49 - Cobertura

¿100% de cobertura de lineas demuestra software sin defectos?

**Respuesta modelo:** No. Cobertura no equivale a ausencia de defectos ni a calidad total.

50 - Complejidad

¿Una complejidad ciclomática baja garantiza calidad?

**Respuesta modelo:** No. Es una medida util para mantenibilidad/prueba, pero no representa por si sola la calidad total.

51 - Metrica sin objetivo

¿Por que una metrica sin objetivo/contexto puede ser perjudicial?

**Respuesta modelo:** Porque puede inducir interpretaciones o comportamientos perversos; debe definirse y relacionarse con una decision.

52 - Calidad medible

Convierte 'el sistema sera rapido y fiable' en dos ejemplos verificables.

**Respuesta modelo:** Ejemplo: p95 < 2 s bajo carga definida; disponibilidad mensual >= 99,9% bajo una convencion de medida explicitada.

# PARTE D - Metricas y calculos

53 - Cinco datos de una metrica

¿Que debe acompanar a una metrica segun III.13?

**Respuesta modelo:** Definicion, unidad, poblacion, periodo y objetivo.

54 - Densidad de defectos

Proyecto A tiene 30 defectos en 60 KLOC; B tiene 20 en 20 KLOC. Calcula defectos/KLOC con esa convencion.

**Respuesta modelo:** A=0,5 defectos/KLOC; B=1 defecto/KLOC. B presenta mayor densidad bajo ese denominador; comparar KLOC entre lenguajes/proyectos exige cautela.

55 - Cobertura simple

Si 180 de 200 ramas definidas por la herramienta estan cubiertas, ¿cobertura de ramas?

**Respuesta modelo:** 90%, bajo esa definicion de herramienta.

56 - Error rate

Si 2.500 de 5.000.000 peticiones terminan en error segun la definicion operativa, ¿tasa?

**Respuesta modelo:** 0,05%.

57 - Disponibilidad

Servicio medido 43.200 min en un mes, con 21,6 min de indisponibilidad contabilizable. Calcula disponibilidad simple.

**Respuesta modelo:** (43.200-21,6)/43.200 x 100 = 99,95%, bajo la convencion indicada.

58 - Throughput

Se completan 120.000 operaciones en 10 minutos. ¿Throughput medio por segundo?

**Respuesta modelo:** 120.000 / 600 = 200 operaciones/s.

59 - Lead time

Un cambio se solicita el lunes 09:00 y queda disponible el jueves 09:00. ¿Lead time calendario simple?

**Respuesta modelo:** 3 dias, si esa es la convencion adoptada. Debe definirse el inicio/fin exactos de la metrica.

60 - Cycle time

¿Por que lead time y cycle time no deben usarse sin definicion?

**Respuesta modelo:** Porque equipos/herramientas pueden definir puntos de inicio/fin distintos; la metrica necesita convencion comun.

61 - Defect escape

¿Que idea mide defect escape rate?

**Respuesta modelo:** Defectos que escapan a etapas previas y se detectan posteriormente/produccion respecto al conjunto definido. La formula exacta debe documentarse.

62 - Change failure rate

¿Que idea pretende medir change failure rate?

**Respuesta modelo:** La proporcion de cambios/despliegues que provocan fallo o requieren remediacion segun definicion adoptada.

63 - MTTR

¿Que cautela introduce III.13 al usar mean time to restore?

**Respuesta modelo:** Definir claramente que evento inicia/finaliza la medida y no asumir que todos los equipos miden lo mismo.

64 - Complejidad ciclomática: decisiones

Un componente simple tiene 4 nodos de decision independientes en el grafo. Con la aproximacion decisiones+1, ¿V(G)?

**Respuesta modelo:** 5.

65 - Complejidad: E-N+2P

Grafo con E=14, N=11 y P=1. Calcula V(G).

**Respuesta modelo:** 14-11+2=5.

66 - Consistencia de formulas

Si para un componente simple el conteo de decisiones da 5 decisiones, ¿que V(G) esperas con decisiones+1?

**Respuesta modelo:** 6.

67 - Interpretar complejidad

Un modulo pasa de V(G)=8 a V(G)=22. ¿Puedes concluir que es defectuoso?

**Respuesta modelo:** No. Indica mayor complejidad de control y potencial mayor dificultad de prueba/mantenimiento; requiere contexto.

68 - Duplicacion

¿Por que duplicacion puede ser una metrica de producto relevante?

**Respuesta modelo:** Porque repeticion de logica puede aumentar coste y riesgo de cambios inconsistentes; no debe interpretarse aislada.

69 - Acoplamiento/cohesion

¿Que direccion suele ser deseable en diseno mantenible?

**Respuesta modelo:** Menor acoplamiento y mayor cohesion, sin convertirlos en numeros aislados fuera de contexto.

70 - Vulnerabilidades

¿Por que 'numero de vulnerabilidades' sin severidad/edad no basta?

**Respuesta modelo:** III.13 propone vulnerabilidades por severidad/edad; el riesgo de una critica explotable no equivale al de varias menores.

71 - Comparacion LOC

Dos proyectos usan tecnologias distintas. ¿Es correcto concluir que el de menos lineas es de mayor calidad?

**Respuesta modelo:** No. Los apuntes advierten expresamente contra comparar proyectos con LOC sin contexto.

72 - Cuadro equilibrado

Propón un conjunto minimo de metricas para una API publica sin usar una sola 'metrica reina'.

**Respuesta modelo:** Ej.: p95/throughput, error rate, disponibilidad/SLO, vulnerabilidades, defectos escapados, cobertura contextual y metricas de entrega/mantenibilidad.

# PARTE E - SQuaRE, requisitos y evaluacion

73 - SQuaRE

¿Que significa SQuaRE?

**Respuesta modelo:** Systems and software Quality Requirements and Evaluation.

74 - Familia 25000

¿Que debes memorizar de la familia SQuaRE segun tus apuntes?

**Respuesta modelo:** La finalidad y cadena de uso, no todas las partes: definir modelo/requisitos -> seleccionar medidas -> evaluar -> aceptar/mejorar.

75 - Modelo a requisito

Convierte performance efficiency en un requisito medible.

**Respuesta modelo:** Ej.: p95 de respuesta < 2 s con 1.000 usuarios concurrentes y carga definida.

76 - Modelo a seguridad

Convierte security en dos criterios medibles/aceptables.

**Respuesta modelo:** Ej.: 0 vulnerabilidades criticas abiertas en release y MFA para perfiles privilegiados; el criterio concreto depende del riesgo.

77 - Modelo a mantenibilidad

Convierte maintainability en evidencias, no en adjetivos.

**Respuesta modelo:** Ej.: complejidad/duplicacion bajo umbrales acordados, tests suficientes para cambios, analisis estatico y tiempo de resolucion/impacto medido.

78 - Requisito vs metrica

¿Es 'p95' un requisito por si solo?

**Respuesta modelo:** No. Es una metrica/estadistico. El requisito necesita umbral, condicion de carga, periodo/contexto y criterio de aceptacion.

79 - Aceptacion

¿Puede una metrica formar parte del criterio de aceptacion?

**Respuesta modelo:** Si, cuando su definicion, metodo de medida, condiciones y umbral estan acordados.

80 - Calidad continua

¿Por que SQuaRE/25010 no deben usarse solo al final?

**Respuesta modelo:** Porque sirven desde definicion de requisitos hasta diseno, pruebas, control y aceptacion, cerrando mejora.

# PARTE F - Mini-supuestos de calidad

81 - Portal publico

Portal con 99,95% de disponibilidad, p95<2s, interoperabilidad con tres organismos, WCAG y MFA. Clasifica los atributos principales.

**Respuesta modelo:** Reliability (availability), performance efficiency (time behaviour/capacity), compatibility (interoperability), interaction capability/accesibilidad relacionada y security. En supuesto, convertir cada uno en medida/criterio.

82 - Release con 100% coverage

Una release tiene 100% line coverage pero una vulnerabilidad critica conocida. ¿Aprobar?

**Respuesta modelo:** No por la cobertura. Un gate debe considerar riesgo/seguridad; cobertura no equivale a calidad ni ausencia de defectos.

83 - Equipo gamifica LOC

Un equipo es premiado por lineas de codigo producidas y comienza a generar mas codigo. ¿Que problema ilustra?

**Respuesta modelo:** Metrica sin objetivo/contexto que induce comportamiento perverso. Medir valor/calidad con varias dimensiones.

84 - Refactor

Un sistema es funcionalmente correcto pero cada cambio tarda semanas por fuerte acoplamiento. ¿Que caracteristica priorizas y que evidencias usarias?

**Respuesta modelo:** Maintainability: modularity, analysability, modifiability, testability; usar metricas contextualizadas de complejidad, acoplamiento, duplicacion, defectos y tiempos.

85 - Nuevo hardware

El software funciona en un entorno pero no puede instalarse ni adaptarse al nuevo. ¿Caracteristica 2023?

**Respuesta modelo:** Flexibility, especialmente adaptability/installability.

86 - Sistema con riesgo fisico

Una aplicacion controla una barrera automatica. Ante fallo debe pasar a estado seguro y advertir. ¿Que caracteristica anadida en 2023?

**Respuesta modelo:** Safety; aparecen ideas como fail safe y hazard warning.

87 - Plan de calidad

Estructura un plan de calidad para una API de tramitacion en 10 lineas.

**Respuesta modelo:** Requisitos de calidad por modelo 25010 -> metricas/umbrales -> QA (estandares/reviews/pipeline) -> QC (tests/mediciones) -> quality gates -> seguridad/rendimiento -> observabilidad/SLO -> defectos/RCA -> criterios de aceptacion -> mejora continua.

88 - Comparar proveedores

Dos proveedores presentan 'calidad 9/10' sin metodo. ¿Que pedirias?

**Respuesta modelo:** Modelo de calidad usado, caracteristicas, metricas, definiciones, unidades, poblacion, periodo, evidencia, umbrales y metodo de evaluacion.

89 - Pregunta antigua

Un test afirma 'ISO/IEC 25010 tiene como caracteristicas Usability y Portability'. ¿Como respondes?

**Respuesta modelo:** Depende de la edicion. Es compatible con 2011; para 2023 los nombres de primer nivel son Interaction capability y Flexibility, y existen 9 con Safety.

90 - Supuesto de 20 minutos

Una Administracion licita un nuevo sistema. Da la estructura de una respuesta de calidad que puntue bien.

**Respuesta modelo:** Derivar NFR del modelo; fijar metricas y umbrales; QA preventivo; QC/pruebas; quality gates CI/CD; rendimiento, seguridad, fiabilidad, mantenibilidad e interaccion; trazabilidad requisito->medida->prueba; SLO/operacion; criterios de aceptacion; RCA/mejora.

# Patron mental de examen

* Identifica la edicion: 2011 o 2023.
* 2023 = 9 caracteristicas; Safety nueva; Usability -> Interaction capability; Portability -> Flexibility.
* Clasifica el requisito en caracteristica/subcaracteristica.
* Convierte el adjetivo en metrica: definicion, unidad, poblacion, periodo y objetivo.
* Distingue QA preventivo de QC evaluativo.
* No confundas cobertura/complejidad con calidad total.
* En supuesto: requisito -> metrica -> prueba/evidencia -> gate/aceptacion -> operacion/mejora.

Base: GSI A2 Bloque III V2.1, III.13. Verificacion de actualidad: ISO/IEC 25010:2023 sigue publicado como edicion 2 con nueve caracteristicas; ISO/IEC 25000:2014 figura como guia SQuaRE vigente/confirmada en 2026. No se exige memorizar toda la numeracion secundaria 250xx.
