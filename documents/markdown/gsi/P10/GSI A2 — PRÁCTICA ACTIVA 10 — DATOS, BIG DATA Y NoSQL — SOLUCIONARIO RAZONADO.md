# GSI A2 - PRACTICA ACTIVA 10

## Mineria de datos, OLAP, Big Data, Hadoop y NoSQL - SOLUCIONARIO RAZONADO

**Criterio:** las respuestas siguen III.15 V2.1. Cuando una tecnologia es solo un ejemplo moderno del apunte, se trata como ejemplo y no como obligacion. La respuesta correcta puede ser mantener una arquitectura relacional/convencional si satisface mejor los requisitos.

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

**Respuesta modelo:** Descubrir patrones o modelos utiles a partir de datos para apoyar una necesidad o decision.

2 - Clasificacion

Se quiere predecir si un expediente sera 'riesgo alto' o 'riesgo bajo'. ¿Que tarea es?

**Respuesta modelo:** Clasificacion supervisada.

3 - Regresion

Se quiere estimar el numero de llamadas que recibira un servicio manana. ¿Que tarea?

**Respuesta modelo:** Regresion si el objetivo es un valor numerico continuo.

4 - Clustering

Se quieren descubrir grupos de ciudadanos con patrones similares sin etiquetas previas. ¿Que tarea?

**Respuesta modelo:** Clustering/no supervisado.

5 - Asociacion

Se quieren descubrir reglas del tipo 'quien consulta A tambien suele consultar B'. ¿Que tarea?

**Respuesta modelo:** Reglas de asociacion.

6 - Anomalias

Se quieren detectar operaciones muy distintas del comportamiento habitual. ¿Que tarea?

**Respuesta modelo:** Deteccion de anomalias.

7 - Reduccion dimensional

¿Para que sirve conceptualmente la reduccion dimensional?

**Respuesta modelo:** Reducir numero de variables conservando informacion relevante, facilitando modelado, visualizacion o eficiencia segun el caso.

8 - CRISP-DM

Ordena el proceso que recoge III.15.

**Respuesta modelo:** Entender negocio -> entender datos -> preparar -> modelar -> evaluar -> desplegar/monitorizar.

9 - Negocio primero

¿Por que no se debe empezar por elegir algoritmo?

**Respuesta modelo:** Porque primero hay que definir objetivo, decision, datos, restricciones y metrica; un algoritmo sin problema claro no aporta valor.

10 - Preparacion

Cita tareas de preparacion que aparecen en los apuntes.

**Respuesta modelo:** Limpieza, missing values, outliers, codificacion, escalado, seleccion/creacion de features y particion train/validation/test.

11 - Leakage

Un campo contiene informacion generada despues del resultado que se quiere predecir y se usa para entrenar. ¿Problema?

**Respuesta modelo:** Data leakage: informacion futura o del conjunto de test influye en entrenamiento/preprocesamiento.

12 - Train/validation/test

¿Por que separar conjuntos?

**Respuesta modelo:** Entrenamiento ajusta el modelo; validacion ayuda a seleccionar/ajustar; test estima rendimiento final sobre datos no usados en esas decisiones.

13 - Despliegue

¿El trabajo termina cuando la metrica de validacion es buena?

**Respuesta modelo:** No. Hay que desplegar, monitorizar calidad, sesgo/drift cuando proceda, coste, seguridad y adecuacion de negocio.

14 - Modelo no es decision

¿Por que una prediccion no debe confundirse con una decision administrativa automatica?

**Respuesta modelo:** Porque el modelo produce una estimacion; la decision requiere reglas, contexto, gobernanza y, cuando afecta derechos, supervision humana y garantias.

15 - Algoritmo adecuado

¿Que criterio manda sobre 'usar el algoritmo mas moderno'?

**Respuesta modelo:** La tarea, los datos, la metrica, interpretabilidad, coste, operacion y riesgo.

16 - No todo es ML

¿Todo problema de datos requiere machine learning?

**Respuesta modelo:** No. Reglas, SQL, estadistica o agregacion pueden resolver mejor problemas simples y mas explicables.

17 - Calidad de datos

¿Por que la calidad de datos es arquitectonica y no solo 'limpieza previa'?

**Respuesta modelo:** Porque afecta ingestión, linaje, validaciones, propiedad y confiabilidad continua de los resultados.

18 - Gobernanza

Cita elementos de gobierno que III.15 exige contemplar.

**Respuesta modelo:** Catalogo, linaje, calidad, privacidad, retencion, seguridad, costes y ownership.

# PARTE B - Algoritmos y metricas de mineria

19 - Clasificacion: algoritmos

Cita algoritmos/conceptos que III.15 asocia a clasificacion.

**Respuesta modelo:** Arboles, regresion logistica, SVM, k-NN y redes, entre otros.

20 - Regresion: algoritmos

Cita opciones recogidas para regresion.

**Respuesta modelo:** Regresion lineal y arboles/ensembles, entre otros.

21 - Clustering

¿Que algoritmos de clustering aparecen?

**Respuesta modelo:** k-means, jerarquico y DBSCAN.

22 - Asociacion

¿Que algoritmos aparecen para reglas de asociacion?

**Respuesta modelo:** Apriori y FP-Growth.

23 - Anomalias

¿Que familias cita el apunte?

**Respuesta modelo:** Metodos estadisticos, isolation forest y metodos basados en densidad, entre otros.

24 - Precision

Con TP=80 y FP=20, calcula precision.

**Respuesta modelo:** 80/(80+20)=0,80 = 80%.

25 - Recall

Con TP=80 y FN=40, calcula recall.

**Respuesta modelo:** 80/(80+40)=0,6667, aproximadamente 66,7%.

26 - F1

Si precision=0,80 y recall=0,667, calcula F1 aproximado.

**Respuesta modelo:** 2\*0,80\*0,667/(0,80+0,667) ≈ 0,727, es decir, 72,7%.

27 - Desbalance

En fraude, 99,9% de operaciones son normales. Un modelo que siempre predice 'normal' tiene gran accuracy. ¿Por que no basta?

**Respuesta modelo:** Porque el desbalance hace que accuracy sea engañosa; interesan precision/recall/F1 y coste de errores segun caso.

28 - Recall prioritario

Si es muy costoso dejar escapar un fraude real, ¿que metrica suele cobrar especial importancia?

**Respuesta modelo:** Recall/sensibilidad de la clase fraude, sin ignorar precision y coste de falsos positivos.

29 - Precision prioritaria

Si una alerta provoca una investigacion humana muy cara, ¿que metrica conviene vigilar especialmente?

**Respuesta modelo:** Precision de las alertas, junto a recall para no optimizar de forma miope.

30 - Regresion: MAE

¿Que interpreta MAE?

**Respuesta modelo:** Error absoluto medio en las unidades del objetivo, facilitando una interpretacion directa.

31 - RMSE

¿Que diferencia conceptual tiene RMSE frente a MAE?

**Respuesta modelo:** Penaliza mas los errores grandes al elevar al cuadrado antes de promediar; luego vuelve a las unidades originales.

32 - R2

¿R2 por si solo demuestra que un modelo es util?

**Respuesta modelo:** No. Debe interpretarse con datos, baseline, error, validacion y objetivo de negocio.

33 - Silhouette

¿Que combina silhouette en clustering?

**Respuesta modelo:** Cohesion dentro del cluster y separacion respecto a otros; aun asi III.15 exige validacion de negocio.

34 - Support

En 1.000 transacciones, A y B aparecen juntos en 120. ¿Support(A∩B)?

**Respuesta modelo:** 120/1000=12%.

35 - Confidence

A aparece en 200 transacciones y A+B juntos en 120. ¿Confidence A->B?

**Respuesta modelo:** 120/200=60%.

36 - Lift

Si support(B)=30% y confidence(A->B)=60%, ¿lift?

**Respuesta modelo:** 0,60/0,30=2. Un lift >1 indica asociacion positiva bajo esas definiciones; no implica causalidad.

# PARTE C - OLAP, warehouse, lake y lakehouse

37 - OLAP

¿Que caracteriza OLAP?

**Respuesta modelo:** Analitica multidimensional con medidas, dimensiones y jerarquias.

38 - Medida

Ventas totales, numero de expedientes o coste son ejemplos de que elemento OLAP?

**Respuesta modelo:** Medidas.

39 - Dimension

Tiempo, territorio y tipo de tramite son ejemplos de que elemento?

**Respuesta modelo:** Dimensiones.

40 - Jerarquia

Año -> trimestre -> mes -> dia es que concepto?

**Respuesta modelo:** Jerarquia dentro de una dimension.

41 - Slice

¿Que hace slice conceptualmente?

**Respuesta modelo:** Fija un valor de una dimension para obtener una porcion del cubo.

42 - Dice

¿Que hace dice?

**Respuesta modelo:** Selecciona un subconjunto mediante varios valores/rangos de dimensiones.

43 - Drill-down

¿Que hace drill-down?

**Respuesta modelo:** Baja a mayor nivel de detalle en una jerarquia.

44 - Roll-up

¿Que hace roll-up?

**Respuesta modelo:** Agrega hacia niveles mas resumidos.

45 - Pivot

¿Que hace pivot?

**Respuesta modelo:** Reorienta dimensiones para cambiar la perspectiva de analisis.

46 - OLAP vs OLTP

¿Por que no conviene ejecutar reporting pesado indiscriminadamente sobre OLTP?

**Respuesta modelo:** Porque OLTP prioriza transacciones operativas; analitica pesada puede competir por recursos. Un DW/replica/arquitectura analitica puede aislar cargas.

47 - Data warehouse

Define warehouse segun el apunte.

**Respuesta modelo:** Almacen de datos curados/modelados para analitica y BI.

48 - Data lake

Define data lake.

**Respuesta modelo:** Almacen de datos heterogeneos en formatos flexibles; requiere gobierno para no convertirse en acumulacion sin control.

49 - Lakehouse

¿Que intenta combinar un lakehouse?

**Respuesta modelo:** Almacenamiento abierto/flexible de lake con capacidades de gestion, tablas y SQL mas propias de warehouse.

50 - Lake no sustituye gobierno

¿Por que 'guardar todo por si acaso' no es una buena arquitectura?

**Respuesta modelo:** Por costes, privacidad, retencion, calidad, linaje y dificultad de uso. El gobierno es requisito.

51 - Eleccion

Para informes financieros curados con dimensiones estables, ¿warehouse o lake como primera opcion?

**Respuesta modelo:** Warehouse/OLAP suele ser mas natural, salvo requisitos adicionales que justifiquen otra arquitectura.

52 - Raw heterogeneo

Para conservar eventos, ficheros y datos semiestructurados a gran escala antes de usos diversos, ¿que opcion considerar?

**Respuesta modelo:** Data lake con catalogo, seguridad, retencion, calidad y ownership.

# PARTE D - Big Data, Hadoop y Spark

53 - 5V

Enumera las 5V del marco habitual recogido.

**Respuesta modelo:** Volumen, velocidad, variedad, veracidad y valor.

54 - Big Data no es volumen solo

¿Tener una tabla de 2 TB obliga a usar Hadoop?

**Respuesta modelo:** No. Hay que valorar volumen, velocidad, variedad, SLA, patrones de acceso y si una BD/warehouse convencional resuelve mejor.

55 - Hadoop

¿Hadoop equivale a HDFS?

**Respuesta modelo:** No. HDFS es almacenamiento distribuido dentro del ecosistema clasico; Hadoop incluye otros componentes.

56 - HDFS

¿Que funcion cumple HDFS?

**Respuesta modelo:** Almacenamiento distribuido por bloques, con replicacion para tolerancia a fallos.

57 - NameNode

¿Que gestiona NameNode?

**Respuesta modelo:** Namespace y metadatos del sistema de ficheros HDFS.

58 - DataNode

¿Que hace DataNode?

**Respuesta modelo:** Almacena bloques de datos de HDFS.

59 - YARN

¿Que papel cumple YARN?

**Respuesta modelo:** Gestion de recursos y ejecucion en el cluster.

60 - MapReduce

Resume sus fases principales.

**Respuesta modelo:** Map -> shuffle/sort -> reduce, orientado al procesamiento batch distribuido clasico.

61 - Data locality

¿Que idea expresa data locality?

**Respuesta modelo:** Mover computo hacia donde estan los datos para reducir transferencias costosas cuando la arquitectura lo permite.

62 - Replicacion HDFS

¿La replicacion HDFS convierte HDFS en backup?

**Respuesta modelo:** No. Aporta tolerancia a fallos del almacenamiento distribuido; no sustituye una estrategia de backup/retencion/recuperacion.

63 - MapReduce no tiempo real

¿Por que no debe presentarse MapReduce clasico como solucion natural para baja latencia interactiva?

**Respuesta modelo:** Porque esta orientado principalmente a procesamiento batch; la necesidad de baja latencia puede requerir otros motores/arquitecturas.

64 - Spark

¿Como caracteriza III.15 a Spark?

**Respuesta modelo:** Motor distribuido general con procesamiento en memoria cuando es posible y APIs para batch, streaming, SQL y ML.

65 - Spark y HDFS

¿Spark requiere HDFS obligatoriamente?

**Respuesta modelo:** No. Puede usar HDFS u otros almacenamientos.

66 - Hadoop vigente en examen

¿Debe eliminarse Hadoop de los apuntes porque existan tecnologias mas modernas?

**Respuesta modelo:** No. El BOE lo menciona expresamente; hay que dominar su nucleo clasico y contextualizar alternativas actuales.

67 - Objeto vs HDFS

¿El apunte dice que almacenamiento de objetos sustituye conceptualmente a HDFS en el temario?

**Respuesta modelo:** No. Lo presenta como ejemplo actual del ecosistema 'o similares'; HDFS sigue siendo materia propia.

68 - Parquet/ORC

¿Que papel tienen Parquet/ORC en los apuntes?

**Respuesta modelo:** Ejemplos de formatos columnares comunes en plataformas de datos actuales; no sustituyen los conceptos Hadoop.

69 - Kafka

¿Como aparece Kafka en III.15?

**Respuesta modelo:** Como ejemplo de log/broker usado para ingestion/event streaming; no como sustituto universal de Hadoop o Spark.

70 - Arquitectura minima

Antes de proponer cluster distribuido, ¿que debes justificar?

**Respuesta modelo:** Volumen/velocidad/variedad, SLA, procesamiento, coste, operacion, resiliencia, seguridad y que una solucion mas simple no sea suficiente.

# PARTE E - NoSQL, CAP, consistencia, sharding y replicacion

71 - NoSQL

¿NoSQL significa necesariamente 'sin SQL'?

**Respuesta modelo:** No. En el tema se usa como familia de modelos no relacionales; algunos productos pueden ofrecer lenguajes tipo SQL.

72 - Key-value

Caso natural para key-value.

**Respuesta modelo:** Sesiones, cache o lookup simple por clave.

73 - Documental

Caso natural para documental.

**Respuesta modelo:** Agregados JSON-like con estructura flexible y acceso centrado en el documento.

74 - Wide-column

Caso natural para wide-column.

**Respuesta modelo:** Gran escala distribuida organizada por claves/column families.

75 - Grafo

Caso natural para grafo.

**Respuesta modelo:** Relaciones complejas y recorridos entre entidades.

76 - Relacional sigue valido

Sistema contable con transacciones, restricciones y joins complejos. ¿Migrarias a NoSQL solo por volumen?

**Respuesta modelo:** No. Primero evaluar escalado/particionado del relacional; el modelo de acceso e integridad puede favorecer mantener relacional.

77 - CAP

Formula correctamente CAP segun III.15.

**Respuesta modelo:** Ante una particion de red, un sistema distribuido debe decidir como prioriza consistencia o disponibilidad en ese contexto; no es el lema simplista 'elige siempre dos de tres'.

78 - Partition tolerance

¿Por que la discusion C/A aparece especialmente cuando existe particion?

**Respuesta modelo:** Porque CAP trata el comportamiento del sistema distribuido cuando la comunicacion entre nodos se particiona.

79 - Consistencia fuerte

Define conceptualmente consistencia fuerte.

**Respuesta modelo:** Lecturas observan un estado coherente/actual segun las garantias del sistema, a costa potencial de disponibilidad/latencia en ciertos fallos.

80 - Eventual

Define consistencia eventual.

**Respuesta modelo:** Si cesan actualizaciones, las replicas convergen con el tiempo; pueden existir lecturas temporalmente desactualizadas segun garantia.

81 - BASE vs ACID

¿Son mutuamente excluyentes de forma absoluta?

**Respuesta modelo:** No. El apunte advierte que es un contraste conceptual, no dos normas incompatibles en todo sistema.

82 - Sharding

¿Que es sharding?

**Respuesta modelo:** Distribuir datos entre nodos/particiones segun una clave, rango, hash u otra estrategia.

83 - Hot spot

¿Que causa una mala clave de sharding?

**Respuesta modelo:** Distribucion desigual de carga/datos, creando particiones calientes.

84 - Replicacion

¿Que aporta replicacion?

**Respuesta modelo:** Puede mejorar disponibilidad y lectura, pero introduce lag, consistencia y complejidad de failover/conflictos.

85 - Replica no es backup

¿Una replica actualizada sustituye backups?

**Respuesta modelo:** No. Puede replicar borrados, corrupcion o errores; continuidad y recuperacion historica requieren estrategia propia.

86 - Patron de acceso

¿Por que el modelo de acceso debe decidir el tipo de NoSQL?

**Respuesta modelo:** Porque cada familia optimiza operaciones distintas; elegir por moda genera modelos y consultas ineficientes.

87 - Join complejo

Necesitas numerosos joins ad hoc y consistencia transaccional amplia. ¿Que advertencia?

**Respuesta modelo:** Puede ser una señal de que un relacional/warehouse sea mas apropiado que forzar un modelo NoSQL.

88 - Grafo vs documental

Un caso consulta 'amigos de amigos', rutas y conexiones repetidamente. ¿Documental o grafo?

**Respuesta modelo:** Grafo es mas natural porque la operacion dominante es recorrer relaciones.

# PARTE F - Batch, streaming y tiempo de eventos

89 - Batch

Define batch.

**Respuesta modelo:** Procesa conjuntos finitos de datos.

90 - Streaming

Define streaming.

**Respuesta modelo:** Procesa eventos continuos a medida que llegan, con semantica temporal y de estado.

91 - Event time

¿Que es event time?

**Respuesta modelo:** Momento en que el evento ocurrio en el dominio/origen.

92 - Processing time

¿Que es processing time?

**Respuesta modelo:** Momento en que el sistema procesa el evento.

93 - Late event

¿Que es un late event?

**Respuesta modelo:** Evento que llega despues de la ventana/umbral temporal esperado segun politica.

94 - Ventanas

¿Para que sirven las ventanas en streaming?

**Respuesta modelo:** Agrupar eventos por intervalos/criterios temporales para calcular agregados sobre flujo continuo.

95 - Orden de llegada

¿Por que arrival order no siempre coincide con event time?

**Respuesta modelo:** Por retrasos de red, buffers, reintentos, fuentes desconectadas o procesamiento distribuido.

96 - Exactly-once

¿Por que III.15 dice que exactly-once no es una casilla magica?

**Respuesta modelo:** Porque la garantia depende de extremo a extremo: fuente, procesamiento, estado, sink, reintentos e idempotencia/transacciones.

97 - Batch vs streaming

Informe nocturno de cierre mensual vs deteccion de fraude en segundos. ¿Que enfoque encaja mejor en cada uno?

**Respuesta modelo:** Cierre mensual: batch. Fraude con baja latencia: streaming/event processing, si el requisito lo justifica.

98 - Lambda/Kappa

¿III.15 exige memorizar arquitecturas Lambda/Kappa?

**Respuesta modelo:** No en los apuntes V2.1 citados. El foco es batch vs streaming, tiempo, ventanas, eventos tardios y semantica extremo a extremo.

# PARTE G - Mini-supuestos integradores

99 - Expedientes transaccionales

Sistema de expedientes: 200.000 expedientes/año, relaciones claras, transacciones, integridad y reporting moderado. Un proveedor propone Hadoop+NoSQL. ¿Que respondes?

**Respuesta modelo:** No esta justificado por defecto. Empezaria por relacional/OLTP, indices y reporting separado si hace falta. Exigir evidencia de necesidad distribuida.

100 - Sesiones web

Necesitas millones de sesiones con acceso casi exclusivo por identificador. ¿Que familia considerar?

**Respuesta modelo:** Key-value, evaluando TTL, consistencia, replicacion y seguridad.

101 - Documentos variables

Cada organismo envia documentos JSON con campos diferentes, se consultan por atributos y por id. ¿Que familia considerar?

**Respuesta modelo:** Documental, si el patron de acceso sigue los agregados y la flexibilidad de esquema aporta valor.

102 - Relaciones antifraude

Necesitas recorrer rapidamente relaciones entre cuentas, empresas, personas y transferencias. ¿Que familia considerar?

**Respuesta modelo:** Grafo, por consultas de relaciones/recorridos; podria coexistir con otras BBDD para otros patrones.

103 - BI ministerial

Se quieren indicadores historicos por año, territorio, tramite y organismo con drill-down. ¿Arquitectura base?

**Respuesta modelo:** Warehouse/OLAP con dimensiones, jerarquias y medidas, alimentado por procesos de integracion/gobierno.

104 - Lake sin catalogo

Un data lake contiene 8 PB sin catalogo, propietario ni retencion. ¿Que problema central?

**Respuesta modelo:** Gobierno: datos dificiles de descubrir/confiar, costes, privacidad, seguridad y retencion. Mas almacenamiento no resuelve calidad.

105 - Fraude streaming

Operaciones llegan continuamente y hay que puntuar riesgo en menos de 2 s. Estructura la solucion sin marcas.

**Respuesta modelo:** Ingestion de eventos -> procesamiento streaming -> features/estado -> modelo/reglas -> decision/alerta -> almacenamiento analitico -> monitorizacion; definir event time, late events, idempotencia, privacidad y metrica.

106 - Pipeline batch

Cada noche se procesan 20 TB de logs para estadisticas agregadas; la latencia de horas es aceptable. ¿Que enfoque?

**Respuesta modelo:** Batch distribuido puede ser razonable; Hadoop/MapReduce o motores similares segun ecosistema, coste y operacion.

107 - CAP en practica

Durante una particion, un servicio de consulta publica prefiere seguir respondiendo aunque temporalmente pueda servir una replica algo atrasada. ¿Que prioridad refleja?

**Respuesta modelo:** Favorece disponibilidad durante la particion aceptando menor consistencia temporal, segun garantias exactas.

108 - Consistencia prioritaria

Durante una particion, una operacion de saldo no debe aceptar decisiones contradictorias entre replicas. ¿Que prioridad?

**Respuesta modelo:** Favorecer consistencia, pudiendo rechazar/demorar operaciones si no puede garantizarse.

109 - Supuesto de arquitectura

Un organismo pide 'plataforma Big Data'. ¿Que preguntas haces antes de dibujar tecnologia?

**Respuesta modelo:** Casos de uso, volumen/velocidad/variedad, SLA/latencia, fuentes, calidad, retencion, seguridad/RGPD, consumidores, batch/stream, consultas, consistencia, crecimiento, operacion, costes y skills.

110 - Supuesto de 20 minutos

Disena en una pagina una plataforma de datos publica con OLTP, BI historico y eventos en tiempo casi real.

**Respuesta modelo:** Separar OLTP relacional; ingestion batch/stream; lake/warehouse segun usos; motor distribuido solo donde aporte; catalogo/linaje/calidad; IAM/cifrado/retencion; NoSQL por patron concreto; observabilidad y costes; justificar SLA y consistencia. No hacer una 'sopa de productos'.

# Patron mental de examen

* Define el problema: clasificacion, regresion, clustering, asociacion, anomalias o analitica.
* Empieza por negocio/datos; evita data leakage y elige metrica por coste de error.
* OLTP != OLAP; warehouse != lake; lakehouse intenta combinar capacidades.
* Hadoop clasico: HDFS + YARN + MapReduce. Spark es motor distribuido general y no exige HDFS.
* NoSQL se elige por patron de acceso: key-value, documental, wide-column o grafo.
* CAP se razona durante una particion; no repitas 'dos de tres' sin contexto.
* Sharding distribuye; replicacion copia. Ninguno sustituye por si solo backup/gobierno.
* Batch procesa conjuntos finitos; streaming exige pensar en event time, ventanas, late events e idempotencia.
* En supuesto, justifica cada tecnologia por requisito y explica gobierno, seguridad, calidad, coste y observabilidad.

Base nuclear: GSI A2 Bloque III V2.1, tema III.15. Se conserva Hadoop porque el BOE lo exige. Spark, Kafka, almacenamiento de objetos y formatos columnares se tratan solo como ejemplos actuales ya incluidos en los apuntes, no como sustitutos del temario.
