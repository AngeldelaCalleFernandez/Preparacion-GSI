# GSI A2 - PRACTICA ACTIVA 10

## Mineria de datos, OLAP, Big Data, Hadoop y NoSQL - CUADERNO DE EJERCICIOS

**Ambito:** III.15 - Mineria de datos, OLAP, Big Data, Hadoop o similares y bases de datos NoSQL.

**Metodo:** empieza por problema y SLA. Despues decide modelo de datos, consistencia, batch/stream y tecnologia. No uses Hadoop, Spark o NoSQL como sinonimos de 'moderno'.

# Mapa maestro de decision

| Problema dominante | Opcion que debes considerar | Pregunta de control |
| --- | --- | --- |
| Transacciones estructuradas, integridad y joins | Relacional / OLTP | ¿Realmente necesito abandonar ACID/modelo relacional? |
| Analisis historico curado y BI | Data warehouse / OLAP | ¿Necesito dimensiones, medidas, historico y consultas analiticas? |
| Datos heterogeneos en formatos flexibles | Data lake | ¿Existe gobierno, catalogo, linaje y control de calidad? |
| Lookup muy simple por clave | Key-value | ¿El patron dominante es clave -> valor? |
| Agregados JSON-like / esquema flexible | Documental | ¿Las consultas siguen el agregado/documento? |
| Gran escala distribuida por claves | Wide-column | ¿La clave de particion evita hot spots? |
| Relaciones y recorridos complejos | Grafo | ¿La consulta dominante navega relaciones? |
| Batch distribuido clasico | Hadoop/HDFS + YARN + MapReduce | ¿El problema justifica distribucion y procesamiento batch? |
| Procesamiento distribuido general | Spark u otros motores | ¿Necesito batch/SQL/streaming/ML distribuido? |
| Eventos continuos | Streaming/event processing | ¿Importan event time, ventanas, late events y semantica extremo a extremo? |

# PARTE A - Mineria de datos, tareas y proceso

1 - Mineria de datos

Define mineria de datos segun III.15.

2 - Clasificacion

Se quiere predecir si un expediente sera 'riesgo alto' o 'riesgo bajo'. ¿Que tarea es?

3 - Regresion

Se quiere estimar el numero de llamadas que recibira un servicio manana. ¿Que tarea?

4 - Clustering

Se quieren descubrir grupos de ciudadanos con patrones similares sin etiquetas previas. ¿Que tarea?

5 - Asociacion

Se quieren descubrir reglas del tipo 'quien consulta A tambien suele consultar B'. ¿Que tarea?

6 - Anomalias

Se quieren detectar operaciones muy distintas del comportamiento habitual. ¿Que tarea?

7 - Reduccion dimensional

¿Para que sirve conceptualmente la reduccion dimensional?

8 - CRISP-DM

Ordena el proceso que recoge III.15.

9 - Negocio primero

¿Por que no se debe empezar por elegir algoritmo?

10 - Preparacion

Cita tareas de preparacion que aparecen en los apuntes.

11 - Leakage

Un campo contiene informacion generada despues del resultado que se quiere predecir y se usa para entrenar. ¿Problema?

12 - Train/validation/test

¿Por que separar conjuntos?

13 - Despliegue

¿El trabajo termina cuando la metrica de validacion es buena?

14 - Modelo no es decision

¿Por que una prediccion no debe confundirse con una decision administrativa automatica?

15 - Algoritmo adecuado

¿Que criterio manda sobre 'usar el algoritmo mas moderno'?

16 - No todo es ML

¿Todo problema de datos requiere machine learning?

17 - Calidad de datos

¿Por que la calidad de datos es arquitectonica y no solo 'limpieza previa'?

18 - Gobernanza

Cita elementos de gobierno que III.15 exige contemplar.

# PARTE B - Algoritmos y metricas de mineria

19 - Clasificacion: algoritmos

Cita algoritmos/conceptos que III.15 asocia a clasificacion.

20 - Regresion: algoritmos

Cita opciones recogidas para regresion.

21 - Clustering

¿Que algoritmos de clustering aparecen?

22 - Asociacion

¿Que algoritmos aparecen para reglas de asociacion?

23 - Anomalias

¿Que familias cita el apunte?

24 - Precision

Con TP=80 y FP=20, calcula precision.

25 - Recall

Con TP=80 y FN=40, calcula recall.

26 - F1

Si precision=0,80 y recall=0,667, calcula F1 aproximado.

27 - Desbalance

En fraude, 99,9% de operaciones son normales. Un modelo que siempre predice 'normal' tiene gran accuracy. ¿Por que no basta?

28 - Recall prioritario

Si es muy costoso dejar escapar un fraude real, ¿que metrica suele cobrar especial importancia?

29 - Precision prioritaria

Si una alerta provoca una investigacion humana muy cara, ¿que metrica conviene vigilar especialmente?

30 - Regresion: MAE

¿Que interpreta MAE?

31 - RMSE

¿Que diferencia conceptual tiene RMSE frente a MAE?

32 - R2

¿R2 por si solo demuestra que un modelo es util?

33 - Silhouette

¿Que combina silhouette en clustering?

34 - Support

En 1.000 transacciones, A y B aparecen juntos en 120. ¿Support(A∩B)?

35 - Confidence

A aparece en 200 transacciones y A+B juntos en 120. ¿Confidence A->B?

36 - Lift

Si support(B)=30% y confidence(A->B)=60%, ¿lift?

# PARTE C - OLAP, warehouse, lake y lakehouse

37 - OLAP

¿Que caracteriza OLAP?

38 - Medida

Ventas totales, numero de expedientes o coste son ejemplos de que elemento OLAP?

39 - Dimension

Tiempo, territorio y tipo de tramite son ejemplos de que elemento?

40 - Jerarquia

Año -> trimestre -> mes -> dia es que concepto?

41 - Slice

¿Que hace slice conceptualmente?

42 - Dice

¿Que hace dice?

43 - Drill-down

¿Que hace drill-down?

44 - Roll-up

¿Que hace roll-up?

45 - Pivot

¿Que hace pivot?

46 - OLAP vs OLTP

¿Por que no conviene ejecutar reporting pesado indiscriminadamente sobre OLTP?

47 - Data warehouse

Define warehouse segun el apunte.

48 - Data lake

Define data lake.

49 - Lakehouse

¿Que intenta combinar un lakehouse?

50 - Lake no sustituye gobierno

¿Por que 'guardar todo por si acaso' no es una buena arquitectura?

51 - Eleccion

Para informes financieros curados con dimensiones estables, ¿warehouse o lake como primera opcion?

52 - Raw heterogeneo

Para conservar eventos, ficheros y datos semiestructurados a gran escala antes de usos diversos, ¿que opcion considerar?

# PARTE D - Big Data, Hadoop y Spark

53 - 5V

Enumera las 5V del marco habitual recogido.

54 - Big Data no es volumen solo

¿Tener una tabla de 2 TB obliga a usar Hadoop?

55 - Hadoop

¿Hadoop equivale a HDFS?

56 - HDFS

¿Que funcion cumple HDFS?

57 - NameNode

¿Que gestiona NameNode?

58 - DataNode

¿Que hace DataNode?

59 - YARN

¿Que papel cumple YARN?

60 - MapReduce

Resume sus fases principales.

61 - Data locality

¿Que idea expresa data locality?

62 - Replicacion HDFS

¿La replicacion HDFS convierte HDFS en backup?

63 - MapReduce no tiempo real

¿Por que no debe presentarse MapReduce clasico como solucion natural para baja latencia interactiva?

64 - Spark

¿Como caracteriza III.15 a Spark?

65 - Spark y HDFS

¿Spark requiere HDFS obligatoriamente?

66 - Hadoop vigente en examen

¿Debe eliminarse Hadoop de los apuntes porque existan tecnologias mas modernas?

67 - Objeto vs HDFS

¿El apunte dice que almacenamiento de objetos sustituye conceptualmente a HDFS en el temario?

68 - Parquet/ORC

¿Que papel tienen Parquet/ORC en los apuntes?

69 - Kafka

¿Como aparece Kafka en III.15?

70 - Arquitectura minima

Antes de proponer cluster distribuido, ¿que debes justificar?

# PARTE E - NoSQL, CAP, consistencia, sharding y replicacion

71 - NoSQL

¿NoSQL significa necesariamente 'sin SQL'?

72 - Key-value

Caso natural para key-value.

73 - Documental

Caso natural para documental.

74 - Wide-column

Caso natural para wide-column.

75 - Grafo

Caso natural para grafo.

76 - Relacional sigue valido

Sistema contable con transacciones, restricciones y joins complejos. ¿Migrarias a NoSQL solo por volumen?

77 - CAP

Formula correctamente CAP segun III.15.

78 - Partition tolerance

¿Por que la discusion C/A aparece especialmente cuando existe particion?

79 - Consistencia fuerte

Define conceptualmente consistencia fuerte.

80 - Eventual

Define consistencia eventual.

81 - BASE vs ACID

¿Son mutuamente excluyentes de forma absoluta?

82 - Sharding

¿Que es sharding?

83 - Hot spot

¿Que causa una mala clave de sharding?

84 - Replicacion

¿Que aporta replicacion?

85 - Replica no es backup

¿Una replica actualizada sustituye backups?

86 - Patron de acceso

¿Por que el modelo de acceso debe decidir el tipo de NoSQL?

87 - Join complejo

Necesitas numerosos joins ad hoc y consistencia transaccional amplia. ¿Que advertencia?

88 - Grafo vs documental

Un caso consulta 'amigos de amigos', rutas y conexiones repetidamente. ¿Documental o grafo?

# PARTE F - Batch, streaming y tiempo de eventos

89 - Batch

Define batch.

90 - Streaming

Define streaming.

91 - Event time

¿Que es event time?

92 - Processing time

¿Que es processing time?

93 - Late event

¿Que es un late event?

94 - Ventanas

¿Para que sirven las ventanas en streaming?

95 - Orden de llegada

¿Por que arrival order no siempre coincide con event time?

96 - Exactly-once

¿Por que III.15 dice que exactly-once no es una casilla magica?

97 - Batch vs streaming

Informe nocturno de cierre mensual vs deteccion de fraude en segundos. ¿Que enfoque encaja mejor en cada uno?

98 - Lambda/Kappa

¿III.15 exige memorizar arquitecturas Lambda/Kappa?

# PARTE G - Mini-supuestos integradores

99 - Expedientes transaccionales

Sistema de expedientes: 200.000 expedientes/año, relaciones claras, transacciones, integridad y reporting moderado. Un proveedor propone Hadoop+NoSQL. ¿Que respondes?

100 - Sesiones web

Necesitas millones de sesiones con acceso casi exclusivo por identificador. ¿Que familia considerar?

101 - Documentos variables

Cada organismo envia documentos JSON con campos diferentes, se consultan por atributos y por id. ¿Que familia considerar?

102 - Relaciones antifraude

Necesitas recorrer rapidamente relaciones entre cuentas, empresas, personas y transferencias. ¿Que familia considerar?

103 - BI ministerial

Se quieren indicadores historicos por año, territorio, tramite y organismo con drill-down. ¿Arquitectura base?

104 - Lake sin catalogo

Un data lake contiene 8 PB sin catalogo, propietario ni retencion. ¿Que problema central?

105 - Fraude streaming

Operaciones llegan continuamente y hay que puntuar riesgo en menos de 2 s. Estructura la solucion sin marcas.

106 - Pipeline batch

Cada noche se procesan 20 TB de logs para estadisticas agregadas; la latencia de horas es aceptable. ¿Que enfoque?

107 - CAP en practica

Durante una particion, un servicio de consulta publica prefiere seguir respondiendo aunque temporalmente pueda servir una replica algo atrasada. ¿Que prioridad refleja?

108 - Consistencia prioritaria

Durante una particion, una operacion de saldo no debe aceptar decisiones contradictorias entre replicas. ¿Que prioridad?

109 - Supuesto de arquitectura

Un organismo pide 'plataforma Big Data'. ¿Que preguntas haces antes de dibujar tecnologia?

110 - Supuesto de 20 minutos

Disena en una pagina una plataforma de datos publica con OLTP, BI historico y eventos en tiempo casi real.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A Mineria/proceso |  |  |  |
| B Algoritmos/metricas |  |  |  |
| C OLAP/lake |  |  |  |
| D Hadoop/Spark |  |  |  |
| E NoSQL/CAP |  |  |  |
| F Streaming |  |  |  |
| G Supuestos |  |  |  |
