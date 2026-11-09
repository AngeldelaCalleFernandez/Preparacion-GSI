# GSI-EDITORIAL-070 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `491e816a8c49c0e0e7a961769a76990e21214a46973737ecac2bbe462733e112`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T15-005

Decisión: pending_review · acción: revise.

Motivo: Conservar función de HDFS y clave A; comparar responsabilidades próximas del ecosistema en lugar de productos sin relación.

### Antes

¿Qué función cumple HDFS?

- A. Almacenamiento distribuido **(correcta)**
- B. Un lenguaje de consultas
- C. Gestión exclusiva de recursos de CPU
- D. Una base relacional mononodo

Explicación: HDFS almacena bloques; YARN gestiona recursos y MapReduce procesa batch.

### Propuesta

¿Cuál es la función principal de HDFS en el ecosistema Hadoop?

- A. Mantener archivos distribuidos en bloques y coordinar su almacenamiento en nodos. **(correcta)**
- B. Planificar recursos y contenedores para la ejecución de aplicaciones del clúster.
- C. Transformar pares clave-valor mediante tareas map y reduce de un trabajo.
- D. Interpretar consultas SQL y optimizar su plan de ejecución sobre tablas analíticas.

Explicación: HDFS es un sistema de archivos distribuido: organiza archivos en bloques almacenados por DataNodes y mantiene namespace y metadatos mediante NameNode. No es el motor de consulta ni el gestor de recursos. YARN gestiona recursos/ejecución y MapReduce proporciona un modelo de procesamiento; son funciones complementarias del ecosistema, no nombres equivalentes.

- Error B: La asignación de recursos y contenedores corresponde a YARN; no describe la función principal de HDFS.
- Error C: Map y reduce son operaciones del modelo MapReduce; HDFS aporta almacenamiento para datos que ese u otros motores pueden utilizar.
- Error D: Un motor SQL puede consultar datos en distintos almacenamientos, pero HDFS no es por sí mismo un optimizador de consultas.

- [Apache Hadoop: HDFS Architecture](https://hadoop.apache.org/docs/r3.4.2/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) · Moving Computation is Cheaper than Moving Data; NameNode and DataNodes; The File System Namespace; Data Replication · versión: Hadoop 3.4.2, documentación publicada 20-08-2025, edición fija comprobada 03-11-2026. Roles de almacenamiento y metadatos; no se impone nodo único sin HA o replicación como única protección posible. · comprobado: 2026-11-03
- [Apache Hadoop: MapReduce Tutorial](https://hadoop.apache.org/docs/r3.4.2/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) · Overview; Inputs and Outputs; Reducer: Shuffle, Sort y Reduce; ResourceManager/NodeManager/MRAppMaster · versión: Hadoop 3.4.2, edición fija comprobada 03-11-2026. Se distingue función de gestión y ejecución; fases lógicas, sin prohibir trabajos sin reducers o combiners opcionales. · comprobado: 2026-11-03

Partida: `578560225ba00bf01f87984204e02bf6cac1f060d078a76d298ebe6fa92b98bd` · propuesta: `d6bf960c3d042b5a6a31e866d4f5ed9a766c7ec6098b3353950a5684d54ad013`

## AI-GSI-B3-T15-006

Decisión: pending_review · acción: revise.

Motivo: Conservar cómputo próximo a datos y clave C; microcaso de planificación sin prometer ausencia total de tráfico.

### Antes

¿Qué busca la localidad de datos en Hadoop?

- A. Mover siempre todo a un único cliente
- B. Prohibir nodos de almacenamiento
- C. Acercar cómputo a los datos **(correcta)**
- D. Eliminar toda replicación

Explicación: La localidad reduce movimientos innecesarios al procesar datos distribuidos.

### Propuesta

Un trabajo Hadoop lee archivos grandes repartidos en DataNodes. ¿Qué decisión aprovecha la localidad de datos?

- A. Concentrar todos los archivos en el cliente antes de ejecutar cualquier tarea distribuida.
- B. Separar deliberadamente las tareas de los nodos con bloques para repartir el tráfico de red.
- C. Programar tareas cerca de los bloques que necesitan, cuando la ubicación y recursos lo permitan. **(correcta)**
- D. Suprimir las copias de los bloques para que cada tarea tenga que consultar una única máquina.

Explicación: La localidad intenta ejecutar el cómputo en el nodo que tiene los datos o cerca de él para reducir transferencias y congestión. Es una preferencia de planificación condicionada por recursos y ubicaciones, no una garantía de que todo procesamiento sea local. Siguen existiendo lecturas remotas, coordinación y transferencias como el shuffle.

- Error A: Traer todo al cliente centraliza movimiento y procesamiento; no acerca las tareas distribuidas a las ubicaciones de los datos.
- Error B: Separar a propósito tareas y bloques aumenta transferencias que la localidad intenta evitar.
- Error D: La localidad aprovecha ubicaciones disponibles y no requiere eliminar réplicas, que pueden ofrecer más opciones de ejecución cercana.

- [Apache Hadoop: HDFS Architecture](https://hadoop.apache.org/docs/r3.4.2/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) · Moving Computation is Cheaper than Moving Data; NameNode and DataNodes; The File System Namespace; Data Replication · versión: Hadoop 3.4.2, documentación publicada 20-08-2025, edición fija comprobada 03-11-2026. Roles de almacenamiento y metadatos; no se impone nodo único sin HA o replicación como única protección posible. · comprobado: 2026-11-03
- [Apache Hadoop: MapReduce Tutorial](https://hadoop.apache.org/docs/r3.4.2/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) · Overview; Inputs and Outputs; Reducer: Shuffle, Sort y Reduce; ResourceManager/NodeManager/MRAppMaster · versión: Hadoop 3.4.2, edición fija comprobada 03-11-2026. Se distingue función de gestión y ejecución; fases lógicas, sin prohibir trabajos sin reducers o combiners opcionales. · comprobado: 2026-11-03

Partida: `85f1583926faaf3afa47b180b6ed022a58ae6a46a4c4e67e76a53c918c59bddd` · propuesta: `9e0db4b36da9e6bea7ecf036a938040fe7909e1c2923dc168d39f16da2ba6cc8`

## AI-GSI-B3-T15-007

Decisión: pending_review · acción: revise.

Motivo: Conservar carácter general de Spark y clave B; precisar almacenamiento externo y memoria sin una garantía universal de capacidad.

### Antes

¿Qué afirmación sobre Spark es correcta?

- A. Exige que todos los datos quepan siempre en memoria
- B. Puede procesar batch, SQL, streaming y ML usando distintos almacenamientos **(correcta)**
- C. Solo puede leer HDFS
- D. Es únicamente un sistema de archivos

Explicación: Spark es un motor distribuido general, no un único almacén.

### Propuesta

¿Qué afirmación describe correctamente Apache Spark?

- A. Es un sistema de archivos cuyo papel consiste en almacenar los bloques del clúster.
- B. Es un motor de procesamiento para batch, SQL, streaming y ML con distintos orígenes de datos. **(correcta)**
- C. Es un gestor de recursos que sustituye la lógica de procesamiento por reservar CPU y memoria.
- D. Es un motor que requiere mantener el conjunto completo de entrada en RAM para cualquier trabajo.

Explicación: Spark es un motor de procesamiento con distintas bibliotecas y APIs; puede leer HDFS y otros orígenes. Puede reutilizar datos en memoria, pero dispone de persistencia en disco o combinada y de recomputación según el caso. No equivale a un sistema de archivos o gestor de recursos ni exige que todo el conjunto quepa siempre en RAM.

- Error A: El almacenamiento distribuido es una función distinta; Spark procesa datos y puede apoyarse en sistemas de archivos externos.
- Error C: Un gestor de clúster proporciona recursos, pero no sustituye los cálculos y transformaciones de Spark.
- Error D: Los niveles de persistencia y ejecución no imponen mantener todo el conjunto en memoria; capacidad y estrategia afectan al rendimiento.

- [Apache Spark: Overview](https://spark.apache.org/docs/latest/) · Programming Guides; Downloading; conjunto de SQL, streaming y MLlib · versión: Documentación servida como Spark 4.3.0 al consultar el 03-11-2026. Se registra la versión mostrada, sin inferir estado de lanzamiento o exigirla a este proyecto. · comprobado: 2026-11-03
- [Apache Spark: RDD Programming Guide](https://spark.apache.org/docs/latest/rdd-programming-guide.html) · External Datasets; RDD Persistence: MEMORY\_AND\_DISK, DISK\_ONLY y recomputación · versión: Documentación servida como 4.3.0, comprobada 03-11-2026. No se instala Spark ni se afirma que toda carga quepa en memoria o todo origen sea HDFS. · comprobado: 2026-11-03

Partida: `ee01a71f6b6bcc4642e3c7bae49a1dcc99ee1bbba669d39c89f51c5bfa15bbfc` · propuesta: `4fa7005e537e3ab133096af1dc400e944b515b356ccbca40744afd55b15ef9c2`

## AI-GSI-B3-T15-008

Decisión: pending_review · acción: revise.

Motivo: Conservar familia orientada a recorridos y clave B; distractores de otras familias NoSQL reales sin exclusividades falsas.

### Antes

¿Qué familia NoSQL encaja con recorridos intensivos de relaciones?

- A. Clave-valor exclusivamente
- B. Grafos **(correcta)**
- C. Fichero de registros planos exclusivamente
- D. Documental como única opción

Explicación: Los modelos de grafos representan relaciones y recorridos como elementos centrales.

### Propuesta

¿Qué familia NoSQL se orienta especialmente a consultas con recorridos de relaciones y caminos entre entidades?

- A. Clave-valor, cuyo acceso principal recupera un valor conocido su identificador.
- B. Grafos, que hacen centrales las relaciones y los recorridos entre entidades. **(correcta)**
- C. Documental, que organiza agregados de datos en documentos con campos.
- D. Wide-column, que distribuye filas y familias de columnas según claves.

Explicación: Un modelo de grafo representa nodos y relaciones y permite expresar recorridos como operaciones centrales. Por eso encaja conceptualmente cuando la consulta se centra en conexiones y caminos. Otros modelos también pueden representar relaciones; la elección final requiere valorar consultas, volumen y operación, sin garantizar que un grafo sea siempre la solución más rápida.

- Error A: El acceso por clave es adecuado para búsquedas directas, pero no hace de los recorridos entre entidades su abstracción principal.
- Error C: El documento organiza campos y agregados; recorrer conexiones entre muchos documentos no es la misma abstracción que los caminos del grafo.
- Error D: Wide-column organiza acceso por claves y columnas; no centra su modelo en relaciones navegables como elementos de primer nivel.

- [Neo4j: Graph database concepts](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/) · Nodes; Relationships; Traversals and paths · versión: Documentación conceptual primaria comprobada 03-11-2026. Ejemplo de modelo de grafo, no exclusividad para representar relaciones ni garantía de rendimiento universal. · comprobado: 2026-11-03
- [Redis: Strings](https://redis.io/docs/latest/develop/data-types/strings/) · Introducción y operación básica SET/GET por clave · versión: Texto primario comprobado 03-11-2026. Se usa acceso por clave como ejemplo; no se reduce todo Redis a valores sin estructura ni se ejecutan comandos. · comprobado: 2026-11-03

Partida: `5409ff62341166d9cd38bfe9bd2c4ad239ed59d98f88099fc28451244d65810a` · propuesta: `483d076bbb5524611d9f78776f7160c9155d852db54c8dd7629fed75670cdc14`

## AI-GSI-B3-T15-009

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso clave-valor y clave A; distinguir patrón central de la existencia de identificadores en otros modelos.

### Antes

¿Qué familia se orienta al acceso simple mediante clave?

- A. Clave-valor **(correcta)**
- B. OLAP
- C. Grafo exclusivamente
- D. Tabla de hechos como única definición

Explicación: Key-value organiza recuperación por clave, frecuente en cachés y sesiones.

### Propuesta

¿Qué familia NoSQL tiene como patrón central asociar una clave a un valor para recuperarlo o actualizarlo?

- A. Clave-valor: recuperar o actualizar un valor mediante su clave. **(correcta)**
- B. Documental: consultar agregados por campos y estructura de documentos.
- C. Grafos: navegar relaciones y caminos entre nodos conectados.
- D. Wide-column: organizar filas por clave y columnas en familias.

Explicación: El patrón característico de clave-valor es acceder al valor asociado a un identificador, como ilustran SET y GET de Redis. Cachés y sesiones pueden utilizarlo. La pregunta identifica el modelo, no afirma que otros almacenes carezcan de claves o que un producto clave-valor no ofrezca operaciones y estructuras adicionales.

- Error B: Una base documental puede localizar por identificador, pero su abstracción incluye campos y documentos; no es el modelo solicitado de asociación clave-valor.
- Error C: Un grafo puede identificar nodos por claves, pero su foco está en relaciones y recorridos, no en la asociación simple preguntada.
- Error D: Wide-column incorpora claves de fila y familias de columnas; comparte el uso de claves sin ser la misma familia.

- [Redis: Strings](https://redis.io/docs/latest/develop/data-types/strings/) · Introducción y operación básica SET/GET por clave · versión: Texto primario comprobado 03-11-2026. Se usa acceso por clave como ejemplo; no se reduce todo Redis a valores sin estructura ni se ejecutan comandos. · comprobado: 2026-11-03
- [Neo4j: Graph database concepts](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/) · Nodes; Relationships; Traversals and paths · versión: Documentación conceptual primaria comprobada 03-11-2026. Ejemplo de modelo de grafo, no exclusividad para representar relaciones ni garantía de rendimiento universal. · comprobado: 2026-11-03

Partida: `10bebf2c5a8660ac365fcf29cc34f793fa2cbdc191fb4390efbc6d93e7a54db9` · propuesta: `60a527ef8b77a65990798127cbaba1eaeaa24514c5687b151338fe9a2bc17a33`

## AI-GSI-B3-T15-010

Decisión: pending_review · acción: revise.

Motivo: Conservar partición de red y clave B; sustituir distractores ajenos sobre lakes por confusiones propias de CAP y precisar el modelo.

### Antes

¿En qué situación se plantea la tensión de CAP descrita?

- A. Warehouse almacena solo datos sin curar y lake solo datos normalizados
- B. Durante una partición de red **(correcta)**
- C. Lake exige ausencia de catálogo
- D. Warehouse se limita a transacciones actuales sin historia

Explicación: CAP debe analizarse en el contexto de partición, no como lema permanente sin matices.

### Propuesta

¿En qué situación se manifiesta la tensión de CAP entre consistencia fuerte y disponibilidad en un sistema replicado?

- A. Cuando se divide lógicamente una tabla en rangos, aunque todos los nodos puedan comunicarse.
- B. Cuando una partición impide comunicar grupos de réplicas y se pretenden ambas garantías. **(correcta)**
- C. Cuando aumenta el número de clientes, aunque no haya fallos o aislamiento de comunicación.
- D. Cuando se crea una réplica local de lectura sin alterar las condiciones de comunicación.

Explicación: CAP limita garantizar a la vez consistencia atómica o linealizable y respuesta a todas las peticiones en el modelo que admite particiones de comunicación. No es el particionado lógico de tablas ni un menú permanente de dos propiedades. En el modelo, disponibilidad significa respuesta eventual, no latencia nula; la consistencia no es la C de ACID. Los retardos asíncronos también dificultan distinguir aislamiento de lentitud.

- Error A: Dividir datos en shards es particionado lógico; no implica que grupos de servidores hayan perdido comunicación.
- Error C: Más concurrencia puede afectar rendimiento, pero no es por sí sola la partición de comunicación del supuesto.
- Error D: Una copia local no introduce por sí sola aislamiento entre grupos; deben examinarse el modelo y las garantías.

- [Gilbert/Lynch: Perspectives on the CAP Theorem](https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf) · §2, pp.2–3 del manuscrito: modelo, atomicidad, disponibilidad, partición y argumento de indistinguibilidad · versión: Manuscrito público de los autores, 10 páginas; artículo de 2012, no el original de 2002. PDF leído y páginas 2–3 inspeccionadas visualmente el 03-11-2026. Consistencia atómica/linealizable y respuesta eventual, no consistencia ACID o plazo fijo. · comprobado: 2026-11-03
- [MIT: ficha de Perspectives on the CAP Theorem](https://dspace.mit.edu/entities/publication/dfcb6512-af44-4fc9-8e8b-1a8f28f1b53a) · Authors; Date issued; Citation · versión: Registro institucional de autores y publicación comprobado 03-11-2026. Respalda identidad bibliográfica del manuscrito; no se atribuye lectura a otra edición de pago. · comprobado: 2026-11-03

Partida: `bd9f5ddbd48bf9453f0080d2969bc73e31568f0ece5d9aa896a31887e0a4eef7` · propuesta: `d9e964f3ef4b5e645d770be37aa9d1a36a1030ea837e254d64fa8715c0cfe8c5`

## AI-GSI-B3-T15-011

Decisión: pending_review · acción: revise.

Motivo: Conservar organización/finalidad y clave B; evitar límites absolutos de formato, historia o ausencia de gobierno.

### Antes

¿Qué diferencia warehouse y data lake?

- A. Ambos son exclusivamente cachés volátiles
- B. Warehouse usa datos curados para BI; lake admite datos heterogéneos flexibles **(correcta)**
- C. Warehouse no permite historia
- D. Lake significa ausencia obligatoria de gobierno

Explicación: El modelo y finalidad de almacenamiento difieren, y ambos necesitan gobierno.

### Propuesta

¿Qué contraste describe mejor un data warehouse y un data lake?

- A. Warehouse y lake se distinguen por usar proveedores diferentes, no por organización o finalidad.
- B. Warehouse organiza datos preparados para análisis; lake admite datos heterogéneos con mayor flexibilidad. **(correcta)**
- C. Warehouse almacena el dato de origen sin modelo y lake exige un esquema analítico único antes de ingresar.
- D. Warehouse se orienta al histórico y por ello el lake debe prescindir de catálogo, calidad y control de acceso.

Explicación: Un warehouse suele estructurar datos preparados e integrados para consulta analítica; un lake admite formatos y grados de preparación diversos para distintos usos. Las fronteras dependen de la arquitectura y han evolucionado, pero ninguno elimina la necesidad de calidad, seguridad, catálogo y gobierno. No son simplemente marcas ni una prohibición de guardar historia o datos semiestructurados.

- Error A: La distinción no la fija el proveedor: una misma plataforma puede ofrecer patrones de warehouse, lake u otros.
- Error C: Invierte la orientación habitual de preparación para consulta analítica y flexibilidad de almacenamiento del lake.
- Error D: Un lake también necesita gobierno para que sus datos sean localizables, comprensibles y utilizables con los permisos pertinentes.

- [Microsoft: Big Data Architectures](https://learn.microsoft.com/en-us/azure/architecture/databases/guide/big-data-architectures) · Lakehouse architecture: párrafos de definición de data lake y data warehouse · versión: Texto público comprobado 03-11-2026. Contraste de organización y finalidad; ambos requieren gobierno, sin afirmar que todo warehouse excluya datos semiestructurados. · comprobado: 2026-11-03

Partida: `43ad1bcd0953a9f57832c2c055cb1435cf0496b520bbd43f6c77d1f3f6d8daaf` · propuesta: `a2850c5abc7da5b0c6ea9f2180e0d979011ec742bc76a6fb17b5829ff75fdb5b`

## AI-GSI-B3-T15-013

Decisión: pending_review · acción: revise.

Motivo: Conservar métricas de regresión y clave D; reemplazar opciones ajenas por pares de otras tareas de minería y distinguir RMSE de MSE.

### Antes

¿Qué métricas se asocian a regresión en la tabla?

- A. Número de particiones
- B. Solo duración de CPU
- C. Support y lift exclusivamente
- D. MAE y RMSE **(correcta)**

Explicación: MAE y RMSE miden error de predicción numérica; asociación usa otras medidas.

### Propuesta

¿Qué par de métricas evalúa directamente magnitudes del error en predicciones de regresión?

- A. Precisión y recall.
- B. Silhouette y Calinski–Harabasz.
- C. Support y lift.
- D. MAE y RMSE. **(correcta)**

Explicación: MAE promedia magnitudes de errores de predicción y RMSE es la raíz del promedio de sus cuadrados. Se usan para objetivos numéricos y se expresan en la escala de la variable objetivo; RMSE da mayor peso a errores grandes. No son porcentajes por definición ni deben compararse sin atender a escala, datos y protocolo de evaluación.

- Error A: Precisión y recall evalúan aciertos y recuperaciones de clases, no directamente la magnitud del error de una predicción numérica.
- Error B: Silhouette y Calinski–Harabasz son indicadores de estructura de agrupaciones; no el par de errores de regresión solicitado.
- Error C: Support y lift describen frecuencia y relación en patrones de asociación, no magnitud de errores numéricos.

- [scikit-learn: Metrics and scoring](https://scikit-learn.org/stable/modules/model_evaluation.html) · Regression metrics: Mean absolute error y Mean squared error; root\_mean\_squared\_error · versión: Documentación estable servida como 1.9.1, comprobada 03-11-2026. Se distingue RMSE de MSE y del uso de porcentajes; comparación bajo objetivo, escala y protocolo comunes. · comprobado: 2026-11-03
- [Apache Spark: Frequent Pattern Mining](https://spark.apache.org/docs/latest/ml-frequent-pattern-mining.html) · FP-Growth; freqItemsets y associationRules; minSupport/minConfidence · versión: Documentación servida como 4.3.0, comprobada 03-11-2026. Se distingue descubrimiento de conjuntos y derivación de reglas; no ejecución de modelos. · comprobado: 2026-11-03

Partida: `63f49ad9d01e4bf3ff8eae749658a57002693a0345bfbde150bd525a97c163d0` · propuesta: `ba6dc757922b9a00af31732a72d9a9346dc9cf1083c8b0c341393febef96ebe1`

## AI-GSI-B3-T15-014

Decisión: pending_review · acción: revise.

Motivo: Conservar algoritmos asociados a reglas y clave A; distractores de minería próximos y distinción entre conjuntos frecuentes y reglas derivadas.

### Antes

¿Qué algoritmos se asocian a reglas de asociación?

- A. Apriori y FP-Growth **(correcta)**
- B. ARP y NDP
- C. Quicksort y heapsort
- D. Dijkstra y BFS

Explicación: Apriori y FP-Growth buscan patrones frecuentes y asociaciones.

### Propuesta

¿Qué par de algoritmos se utiliza para descubrir conjuntos frecuentes a partir de los que derivar reglas de asociación?

- A. Apriori y FP-Growth. **(correcta)**
- B. K-means y DBSCAN.
- C. Regresión lineal y regresión logística.
- D. Máquinas de vectores soporte y árboles de clasificación.

Explicación: Apriori y FP-Growth descubren conjuntos de elementos frecuentes; a partir de ellos pueden derivarse reglas de asociación según medidas como soporte y confianza. No demuestran causalidad y no son la misma tarea que asignar una clase, estimar un número o formar grupos de observaciones. Se conserva la relación con asociación, precisando el paso de patrones frecuentes a reglas.

- Error B: K-means y DBSCAN son métodos de clustering: agrupan observaciones según su estructura, no enumeran conjuntos frecuentes para reglas de asociación.
- Error C: Las regresiones indicadas se emplean para predicción supervisada numérica o de clases/probabilidades; no son esos algoritmos de patrones frecuentes.
- Error D: SVM y árboles de clasificación aprenden decisiones supervisadas de clase; no constituyen el par asociado al descubrimiento de conjuntos frecuentes.

- [mlxtend: Apriori](https://rasbt.github.io/mlxtend/user_guide/frequent_patterns/apriori/) · Overview; Example 1: Generating Frequent Itemsets; soporte mínimo · versión: Documentación de los autores comprobada 03-11-2026. Apriori produce conjuntos frecuentes para derivar reglas; no confundir frecuencia con causalidad. · comprobado: 2026-11-03
- [Apache Spark: Frequent Pattern Mining](https://spark.apache.org/docs/latest/ml-frequent-pattern-mining.html) · FP-Growth; freqItemsets y associationRules; minSupport/minConfidence · versión: Documentación servida como 4.3.0, comprobada 03-11-2026. Se distingue descubrimiento de conjuntos y derivación de reglas; no ejecución de modelos. · comprobado: 2026-11-03

Partida: `fc8717b2d7eb4c6f74cc49813f5659cb4bf1639386a897b62163cfbc365b73c7` · propuesta: `df84289324d4315687089d00af0b149c974f595ab86c90572d840199a32f2c0c`

## AI-GSI-B3-T15-015

Decisión: pending_review · acción: revise.

Motivo: Conservar fuga por preprocesamiento y clave D; microcaso de escalado con train/test y explicación de ajuste frente a transformación.

### Antes

Información del conjunto de prueba influye en el preprocesamiento del entrenamiento. ¿Qué problema aparece?

- A. Encapsulación
- B. Replicación transparente
- C. Compresión columnar
- D. Data leakage **(correcta)**

Explicación: La fuga de información contamina evaluación y puede inflar resultados.

### Propuesta

Antes de dividir entrenamiento y prueba se calcula la media de todas las observaciones para escalar los datos. ¿Qué problema puede introducir?

- A. Una validación independiente, porque no se han utilizado las etiquetas del conjunto de prueba.
- B. Una transformación ajena al ajuste, porque el modelo predictivo aún no se ha entrenado.
- C. Una mejora de la muestra de evaluación, al estimar el preprocesado con un mayor volumen de datos.
- D. Una fuga de información que puede sesgar la estimación del rendimiento fuera del entrenamiento. **(correcta)**

Explicación: La media de escalado se ha aprendido también de los datos reservados para evaluar. Eso es fuga de información aunque no se hayan usado sus etiquetas. Debe separarse entrenamiento y prueba antes de ajustar las transformaciones: se aprende la media con entrenamiento y se aplica la misma transformación aprendida a prueba. En validación cruzada, el ajuste debe respetar cada partición; un pipeline ayuda a hacerlo.

- Error A: La fuga no requiere usar etiquetas; estadísticas o selección de variables obtenidas de prueba también pueden influir en lo aprendido.
- Error B: El escalado forma parte del procedimiento aprendido aunque se ajuste antes del predictor; puede afectar al modelo y a la estimación.
- Error C: Aprovechar información reservada para evaluar destruye la independencia de esa evaluación y puede dar resultados demasiado optimistas.

- [scikit-learn: Common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html) · §12.2 Data leakage; How to avoid data leakage; Data leakage during pre-processing · versión: Documentación estable servida como 1.9.1, comprobada 03-11-2026. Ajustar transformaciones sobre entrenamiento y aplicar las aprendidas a prueba; pipelines y separación de particiones sin usar prueba para ajustar. · comprobado: 2026-11-03

Partida: `142de4e41921300fd37fa61c28e3278532837245c670e07990ec35dba426be3c` · propuesta: `409c4ae32fa1d866b34ea77763d0ba218560fbff4fbed100e7c4dcae6a7f5277`

## AI-GSI-B3-T15-016

Decisión: pending_review · acción: revise.

Motivo: Conservar NameNode y clave A; comparar plano de metadatos, datos, recursos y cálculo sin una arquitectura única obligatoria.

### Antes

¿Qué función cumple el NameNode de HDFS?

- A. Gestionar namespace y metadatos **(correcta)**
- B. Almacenar necesariamente todos los bloques de datos de usuario
- C. Traducir texto a voz
- D. Ejecutar exclusivamente cada reduce

Explicación: Los DataNodes almacenan bloques; NameNode mantiene metadatos del sistema de archivos.

### Propuesta

¿Qué función cumple el NameNode en HDFS?

- A. Gestionar el namespace y metadatos que describen archivos y ubicación de sus bloques. **(correcta)**
- B. Guardar los bloques de usuario como función principal del componente de metadatos.
- C. Asignar contenedores de CPU y memoria a todas las aplicaciones del clúster.
- D. Agrupar y ejecutar cada función reduce sobre los resultados de los mappers.

Explicación: NameNode mantiene el namespace del sistema de archivos y metadatos como la correspondencia entre archivos, bloques y sus ubicaciones. Los DataNodes almacenan los bloques de usuario. No debe confundirse ese plano de metadatos con los recursos de YARN o las tareas MapReduce. Esta descripción de roles no impide despliegues HDFS con alta disponibilidad o federación.

- Error B: Los DataNodes proporcionan el almacenamiento de bloques de usuario; el NameNode mantiene la información necesaria para localizarlos y gestionar archivos.
- Error C: La gestión de recursos pertenece a YARN, no a la función del NameNode dentro de HDFS.
- Error D: Las tareas reduce son procesamiento de trabajos; gestionar el namespace no equivale a ejecutar esas funciones.

- [Apache Hadoop: HDFS Architecture](https://hadoop.apache.org/docs/r3.4.2/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) · Moving Computation is Cheaper than Moving Data; NameNode and DataNodes; The File System Namespace; Data Replication · versión: Hadoop 3.4.2, documentación publicada 20-08-2025, edición fija comprobada 03-11-2026. Roles de almacenamiento y metadatos; no se impone nodo único sin HA o replicación como única protección posible. · comprobado: 2026-11-03
- [Apache Hadoop: MapReduce Tutorial](https://hadoop.apache.org/docs/r3.4.2/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) · Overview; Inputs and Outputs; Reducer: Shuffle, Sort y Reduce; ResourceManager/NodeManager/MRAppMaster · versión: Hadoop 3.4.2, edición fija comprobada 03-11-2026. Se distingue función de gestión y ejecución; fases lógicas, sin prohibir trabajos sin reducers o combiners opcionales. · comprobado: 2026-11-03

Partida: `c44f73698a9d2c06bf26ac9e15be9118404223446f948d018c6a6d32e54453ec` · propuesta: `b40cf0f019183ba337825bba8919de072f6b2d089dbe7b6bb15379843aaa5c6d`

## AI-GSI-B3-T15-017

Decisión: pending_review · acción: revise.

Motivo: Conservar fases MapReduce y clave C; usar permutaciones de sus fases reales y acotar trabajo con reducers.

### Antes

¿Qué secuencia corresponde a MapReduce?

- A. Discover, offer y request
- B. Read, lock y commit exclusivamente
- C. Map, shuffle/sort y reduce **(correcta)**
- D. Train, validation y test

Explicación: La fase intermedia agrupa y ordena datos para la reducción.

### Propuesta

En un trabajo MapReduce que utiliza reducers, ¿qué secuencia lógica sigue el procesamiento de las salidas de map?

- A. Shuffle/sort, map y reduce.
- B. Map, reduce y shuffle/sort.
- C. Map, shuffle/sort y reduce. **(correcta)**
- D. Reduce, shuffle/sort y map.

Explicación: Los mappers producen pares intermedios; shuffle y sort reúnen y ordenan las salidas por clave para que los reducers reciban los grupos que procesarán. Es la secuencia lógica para el trabajo con reducers indicado. Puede haber solapamiento de copia y ordenación, combiners opcionales y trabajos sin reducers; esas variantes no convierten reduce en una fase previa a producir y agrupar sus entradas.

- Error A: El shuffle de resultados de map necesita que esos resultados se produzcan; no es la fase lógica anterior a map.
- Error B: Reduce necesita recibir sus grupos de claves y valores; no se pospone toda su preparación hasta después de reducir.
- Error D: La reducción de resultados intermedios no puede preceder lógicamente a su producción por map y su agrupación.

- [Apache Hadoop: MapReduce Tutorial](https://hadoop.apache.org/docs/r3.4.2/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) · Overview; Inputs and Outputs; Reducer: Shuffle, Sort y Reduce; ResourceManager/NodeManager/MRAppMaster · versión: Hadoop 3.4.2, edición fija comprobada 03-11-2026. Se distingue función de gestión y ejecución; fases lógicas, sin prohibir trabajos sin reducers o combiners opcionales. · comprobado: 2026-11-03

Partida: `1c336eda93a5e3836c0f80daf16fb7b212c213dae3f3ed1841b2bfc709f8a645` · propuesta: `23bdd5e12b60d5afa22ddd1ca6b805ff6fddd9f8164188ffefa6a15d56a0c552`

## AI-GSI-B3-T15-018

Decisión: pending_review · acción: revise.

Motivo: Conservar hot spots y clave D; caso de carga concentrada y límites de nodos o hash como solución automática.

### Antes

Una clave de sharding concentra peticiones en pocos nodos. ¿Qué problema provoca?

- A. Ausencia de latencia
- B. Balanceo perfecto
- C. Normalización automática
- D. Hot spots **(correcta)**

Explicación: La distribución de claves condiciona equilibrio de almacenamiento y carga.

### Propuesta

Tras elegir una clave de sharding, casi todas las peticiones llegan a unos pocos shards mientras otros quedan ociosos. ¿Qué problema describe?

- A. Retraso de replicación: la concentración de peticiones demuestra que las copias están desactualizadas.
- B. Equilibrio de carga: basta que haya varios shards con un número parecido de registros.
- C. Un bloqueo global: la distribución observada demuestra que todas las operaciones comparten un candado.
- D. Puntos calientes: unos shards soportan mucha más carga que otros. **(correcta)**

Explicación: Una distribución que concentra operaciones en pocos shards crea puntos calientes o hot spots, aunque haya otros con recursos libres. La clave y los patrones de acceso condicionan el reparto; hay que observar cardinalidad, frecuencias, crecimiento y consultas. Añadir nodos o aplicar hash no garantiza resolver una única clave excesivamente frecuente ni cualquier desigualdad.

- Error A: Un retraso de réplicas podría coexistir, pero la distribución de peticiones no demuestra desfase entre copias. El síntoma descrito es desequilibrio de carga.
- Error B: Un reparto similar de registros no garantiza operaciones repartidas: unas claves pueden recibir muchas más peticiones que otras.
- Error C: No se ha observado un mecanismo de bloqueo; atribuir un candado global a esa distribución de carga es una inferencia no justificada.

- [MongoDB: Choose a Shard Key](https://www.mongodb.com/docs/manual/core/sharding-choose-a-shard-key/) · Shard Key Cardinality; Shard Key Frequency; Monotonically Changing Shard Keys; Query Patterns · versión: Manual público comprobado 03-11-2026. Distribución de carga según claves y patrones; hash no garantiza resolver una clave muy frecuente ni toda desigualdad. · comprobado: 2026-11-03

Partida: `05a7ccf1c5f56916794cdc2156527e5fa615e82d5218b8e91d8c3b6be96b403d` · propuesta: `1e8e7febfbc62fc9c047ea0c4b8049fc45b92b7c381bcb8fa8d917c45eb191db`

## AI-GSI-B3-T15-019

Decisión: pending_review · acción: revise.

Motivo: Conservar costes y consistencia de replicación y clave A; distinguir asincronía posible, confirmación y respaldo sin prometer garantías gratuitas.

### Antes

¿Qué coste puede acompañar a la replicación?

- A. Lag y decisiones de consistencia **(correcta)**
- B. Garantía de escritura simultánea idéntica sin coste
- C. Ausencia de coordinación
- D. Eliminación universal de fallos

Explicación: Las réplicas aportan disponibilidad o lectura, pero requieren gestionar retrasos y fallos.

### Propuesta

¿Qué coste o decisión puede acompañar a la replicación de datos?

- A. Coordinación entre copias y, según el esquema, retrasos y decisiones de consistencia. **(correcta)**
- B. Confirmación simultánea de todas las copias sin intercambiar información entre ellas.
- C. Sustitución de la gestión de fallos por el hecho de mantener varios nodos con una copia.
- D. Eliminar copias históricas independientes por disponer de réplicas del estado actual.

Explicación: Mantener copias exige recursos y gestionar fallos, lecturas y confirmación de escrituras. En replicación asíncrona puede haber retraso y lecturas desactualizadas; esperar confirmaciones puede aumentar latencia o afectar disponibilidad. La estrategia determina las garantías. Replicar tampoco sustituye una copia recuperable independiente frente a borrados o errores propagados.

- Error B: Las garantías de copia no aparecen sin comunicación o coordinación; confirmar varias réplicas implica condiciones y costes.
- Error C: Las réplicas pueden mejorar tolerancia a ciertos fallos, pero no eliminan todos los modos de fallo o errores de aplicación.
- Error D: Propagar un borrado o error a varias copias no proporciona por sí solo una versión anterior recuperable.

- [MongoDB: Replication](https://www.mongodb.com/docs/manual/replication/) · Redundancy and Data Availability; Asynchronous Replication; Read Operations · versión: Manual público comprobado 03-11-2026. Ejemplo de réplicas asíncronas y decisiones de lectura/escritura, sin afirmar que toda replicación sea asíncrona o sustituya copia de seguridad. · comprobado: 2026-11-03

Partida: `5a286457611f371591555ccdd27d774c23fd7f51c977e945f1123ea39073b9d6` · propuesta: `995968cda6f59d1a0475ca229a446e0791517d6049b9875b1bea86979a311a00`

## AI-GSI-B3-T15-020

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción batch/streaming y clave B; caso con lote cerrado y flujo, sin equiparar microbatch con lote global o prometer exactly-once.

### Antes

¿Qué distingue batch y streaming?

- A. Batch exige tiempo real siempre
- B. Batch procesa conjuntos finitos; streaming eventos continuos **(correcta)**
- C. Ambos son únicamente formatos de archivo
- D. Streaming no tiene ventanas ni eventos tardíos

Explicación: El flujo continuo exige atender tiempo de evento, ventanas y llegadas tardías.

### Propuesta

Una carga analiza cada noche un conjunto cerrado y otra actualiza resultados mientras llegan eventos. ¿Qué distinción de modelos corresponde?

- A. Batch exige respuesta instantánea; streaming prohíbe usar ventanas para agrupar resultados.
- B. Batch trabaja sobre conjuntos acotados; streaming procesa llegadas incrementales de un flujo. **(correcta)**
- C. Batch y streaming designan formatos de archivo, sin relación con el modelo de procesamiento.
- D. Streaming requiere que el flujo termine antes de actualizar resultados; batch no usa límites de entrada.

Explicación: El lote parte de un conjunto acotado; el streaming permite actualizar resultados a medida que llegan eventos de un flujo potencialmente no acotado. Eso no garantiza latencia cero: puede implementarse con microbatches. Si se agrega por tiempo de evento hay que considerar ventanas y llegadas tardías; las garantías de entrega o efecto dependen del procesamiento y del destino, no solo del nombre streaming.

- Error A: El procesamiento batch no exige inmediatez y el streaming puede utilizar ventanas; confunde latencia con modelo de entrada.
- Error C: Los mismos formatos pueden alimentar distintos modelos; batch y streaming describen organización del procesamiento, no extensiones de archivo.
- Error D: El streaming no necesita esperar el fin global de un flujo para producir actualizaciones; un lote sí tiene un conjunto de entrada delimitado.

- [Apache Spark: Structured Streaming Programming Guide](https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html) · API using Datasets and DataFrames; Event-time Aggregations and Watermarking; Output Sinks · versión: Documentación servida como 4.3.0, comprobada 03-11-2026. Datos estáticos acotados frente a flujos no acotados, ventanas y eventos tardíos. Microbatch no elimina el carácter de flujo ni garantiza latencia nula o exactly-once para cualquier destino. · comprobado: 2026-11-03

Partida: `51759c8f043c67dcadbfe3e08702bc197702a6b0bf454246c5e695fcab279e1b` · propuesta: `dfc44ffe42abbe5cdfe8d84e1e07feb29e2151dbcb5d7ed0045d439f0f9c477e`

## AI-GSI-B4-T01-002

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave B; explicar la frontera contextual sin inventar una clasificación normativa universal.

### Antes

¿Cuál pertenece al software de base descrito?

- A. Contenido transaccional gestionado por las aplicaciones
- B. Runtime y bibliotecas que soportan aplicaciones **(correcta)**
- C. Documentos funcionales de los usuarios
- D. Informes de negocio sin componentes de ejecución

Explicación: El software de base sostiene ejecución y servicios de aplicaciones.

### Propuesta

¿Cuál pertenece al software de base descrito?

- A. Contenido transaccional gestionado por las aplicaciones
- B. Runtime y bibliotecas que soportan aplicaciones **(correcta)**
- C. Documentos funcionales de los usuarios
- D. Informes de negocio sin componentes de ejecución

Explicación: Un runtime ejecuta programas y las bibliotecas aportan servicios que utilizan las aplicaciones; son componentes que sostienen su ejecución. El término software de base tiene una frontera dependiente de la arquitectura, pero aquí se contraponen componentes ejecutables de soporte con datos y documentos de negocio. Como ejemplo, la documentación .NET distingue runtime, bibliotecas y capas de aplicación.

- Error A: El contenido transaccional son datos gestionados por las aplicaciones; no es por sí mismo el runtime o biblioteca que las ejecuta.
- Error C: Los documentos funcionales describen necesidades o información de usuarios; no constituyen esos componentes de ejecución.
- Error D: Un informe de negocio sin componente ejecutable es contenido o resultado, no la plataforma que soporta ejecutar aplicaciones.

- [Microsoft: Introduction to .NET](https://learn.microsoft.com/en-us/dotnet/core/introduction) · Components: Runtime, Libraries y capas superiores · versión: Texto público comprobado 03-11-2026. Ejemplo verificable de runtime/bibliotecas que soportan aplicaciones, no definición jurídica universal de software de base. · comprobado: 2026-11-03

Partida: `03e382b252c25c89fcf2002d7755244e6b25ad81df561988ae78529725cac0df` · propuesta: `1fb760a32be108236f891e810f999302ed9fa61e5a7cf7a207a0977a6dbd0c81`

## AI-GSI-B4-T01-003

Decisión: pending_review · acción: revise.

Motivo: Conservar referencia controlada y clave C; distinguir baseline de imagen inmutable sin mantenimiento o garantía de seguridad.

### Antes

¿Qué aporta una baseline conocida al instalar?

- A. Ausencia de necesidad de parches
- B. Riesgo cero garantizado
- C. Un punto de configuración controlado y reproducible **(correcta)**
- D. Eliminación de toda documentación

Explicación: La baseline facilita identificar y mantener el estado esperado.

### Propuesta

¿Qué aporta una baseline conocida y controlada al instalar y administrar un sistema?

- A. Una configuración que deja de necesitar mantenimiento por haber sido probada al instalar.
- B. Un estado de riesgo nulo que elimina la revisión de permisos, versiones y servicios.
- C. Una referencia de configuración documentada y controlada para reproducir y comparar el estado. **(correcta)**
- D. Una instantánea sin control posterior que sustituye registrar y autorizar cambios futuros.

Explicación: Una baseline documentada y acordada identifica un estado de referencia. Ayuda a reproducir una instalación, comparar desviaciones y controlar cambios, manteniendo versiones y decisiones conocidas. No garantiza ausencia de defectos o vulnerabilidades: debe revisarse y actualizarse mediante el control de cambios pertinente, conservando el historial.

- Error A: Probar un estado inicial no elimina nuevos parches, cambios de requisitos o revisión de configuración.
- Error B: Una referencia conocida no equivale a riesgo cero ni sustituye comprobar servicios, permisos o versiones.
- Error D: Una instantánea sin control de cambios puede quedar obsoleta y perder su valor como estado esperado y autorizado.

- [NIST CSRC: baseline configuration](https://csrc.nist.gov/glossary/term/baseline_configuration) · Definitions: especificaciones documentadas, revisadas/acordadas y control de cambios · versión: Glosario público con sus referencias NIST, comprobado 03-11-2026. Una referencia controlada no garantiza ausencia de vulnerabilidades o necesidad de actualizaciones. · comprobado: 2026-11-03

Partida: `9818b8ffc7a482f8f7a3a3c02a24c4216a3452a886b59279891332f05727df25` · propuesta: `e8e693ee86e3329338c746d4f26e9265113562d8f99228b435af3ab41bb02ca5`

## AI-GSI-B4-T01-004

Decisión: pending_review · acción: revise.

Motivo: Conservar cadena de arranque y clave A; alternativas con las mismas etapas y contexto de cargador/initramfs explícito, admitiendo otros esquemas.

### Antes

¿Qué secuencia de arranque Linux es coherente con el tema?

- A. Firmware, cargador, kernel/initramfs, init y servicios **(correcta)**
- B. Aplicación, disco y después cargador
- C. Kernel, servicios y después firmware
- D. Servicios, firmware, kernel y cargador

Explicación: El arranque encadena componentes hasta iniciar servicios del sistema.

### Propuesta

En un arranque Linux con cargador separado e initramfs, ¿qué orden general de etapas es coherente?

- A. Firmware → cargador → kernel/initramfs → init → servicios. **(correcta)**
- B. Firmware → kernel/initramfs → cargador → init → servicios.
- C. Firmware → cargador → init → kernel/initramfs → servicios.
- D. Firmware → cargador → kernel/initramfs → servicios → init.

Explicación: En el esquema indicado, el firmware cede control al cargador, que carga kernel e initramfs; el kernel inicia el espacio de usuario y el proceso init o gestor del sistema organiza el arranque de servicios. Es un orden de etapas, no una secuencia rígida de todos los servicios, que pueden iniciarse según dependencias. Otros esquemas permiten carga directa del kernel por firmware u omitir initramfs; el enunciado no los excluye del conjunto de sistemas Linux.

- Error B: En el esquema con cargador separado, este carga kernel e imágenes necesarias; no se coloca después de ellos.
- Error C: El init del espacio de usuario necesita que el kernel haya arrancado; no lo precede en esa cadena.
- Error D: El gestor init organiza el arranque de servicios del sistema; no se sitúa después de los servicios que debe gestionar.

- [systemd: bootup](https://www.freedesktop.org/software/systemd/man/latest/bootup.html) · Description; Bootup in the Initial RAM Disk; System Manager Bootup · versión: Manual primario en ruta latest comprobado 03-11-2026. Incluye carga directa del kernel por firmware; el supuesto fija cargador separado e initramfs, sin imponerlos a todo Linux. · comprobado: 2026-11-03

Partida: `aee0b8b04a081c7d260e6c17ffa90653708d87dd779a2bb306645c4e52a844bd` · propuesta: `a2f1e72670eb883ecc15587d8f47684116cbb8099c1ba9d2234181468f1aa8d0`

## AI-GSI-B4-T01-005

Decisión: pending_review · acción: revise.

Motivo: Conservar configuración separada y dependencias y clave C; caso de mismo ejecutable en varios entornos sin prescribir variables de entorno como solución universal.

### Antes

¿Qué práctica facilita administrar producción?

- A. Usar repositorios desconocidos
- B. Incluir secretos en cada ejecutable
- C. Separar configuración del binario y documentar dependencias **(correcta)**
- D. Omitir sincronización horaria

Explicación: Separación y documentación reducen cambios opacos y facilitan operación.

### Propuesta

Se quiere desplegar el mismo ejecutable en pruebas y producción y poder reproducir sus requisitos. ¿Qué práctica lo facilita?

- A. Recompilar el ejecutable con cada dirección de servicio y mantener implícitas sus dependencias.
- B. Copiar dependencias desde la máquina del administrador sin registrar versiones o configuración.
- C. Separar la configuración variable del código y declarar las dependencias y versiones necesarias. **(correcta)**
- D. Modificar el binario desplegado para cada entorno y conservar la configuración solo en notas personales.

Explicación: Separar la configuración que varía entre despliegues permite cambiar el entorno sin mezclar esos valores con la lógica del ejecutable. Declarar dependencias y versiones ayuda a reproducir y entender la instalación. Configuración también requiere control y protección según su contenido; separación no significa publicar secretos ni impone un único mecanismo de almacenamiento.

- Error A: Incrustar valores variables obliga a cambiar el artefacto por entorno y las dependencias implícitas dificultan reproducirlo.
- Error B: Una copia no registrada deja sin una especificación verificable de componentes y configuración necesarios.
- Error D: Alterar binarios y depender de notas personales crea estados difíciles de reproducir o contrastar con el despliegue previsto.

- [Adam Wiggins: Twelve-Factor App, Config](https://12factor.net/config) · III. Config: separación de configuración variable por despliegue y código · versión: Texto de autor, última actualización indicada 2017, comprobado 03-11-2026. Se usa separación de responsabilidades, sin imponer variables de entorno como almacén universal de secretos. · comprobado: 2026-11-03
- [Adam Wiggins: Twelve-Factor App, Dependencies](https://12factor.net/dependencies) · II. Dependencies: declarar y aislar dependencias · versión: Texto de autor comprobado 03-11-2026. Declaración y reproducibilidad, sin exigir contenedores o arquitectura nueva al proyecto. · comprobado: 2026-11-03

Partida: `aafacb317232f1f933099544c3c4af13bc278f1d53ecd2dbe1c67a738ea107df` · propuesta: `42ff76cc6e122329f8372c530444ae57c67a65e9665524f1830870833b1c1563`

## AI-GSI-B4-T01-006

Decisión: pending_review · acción: revise.

Motivo: Conservar identidad, separación y trazabilidad y clave C; caso de actividad habitual sin confundirlo con prohibición universal de cuentas de emergencia.

### Antes

¿Qué organización de cuentas favorece trazabilidad?

- A. Cuentas anónimas con todos los permisos
- B. Una cuenta root compartida para toda actividad
- C. Identidades individuales y cuentas administrativas diferenciadas **(correcta)**
- D. Contraseñas públicas en scripts

Explicación: Identidad individual y elevación controlada permiten atribuir acciones y limitar privilegios.

### Propuesta

Varios administradores necesitan que sus cambios habituales queden atribuibles en la auditoría. ¿Qué organización de cuentas lo favorece?

- A. Usar una identidad compartida y reconstruir después el autor de cada acción preguntando al equipo.
- B. Mantener privilegios administrativos en la cuenta cotidiana para evitar registrar elevaciones.
- C. Usar identidades individuales, cuentas administrativas diferenciadas y elevación registrada. **(correcta)**
- D. Dar a todos la misma cuenta de servicio interactiva y atribuir cambios por el horario de conexión.

Explicación: La identidad individual permite relacionar las acciones con una persona autenticada; diferenciar el uso administrativo y registrar elevaciones ayuda a limitar privilegios y reconstruir actuaciones. La trazabilidad también depende de autenticación y registros fiables: una cuenta nominal por sí sola no garantiza atribución infalible. El caso trata actividad habitual, no niega mecanismos de emergencia controlados con responsabilidad individual.

- Error A: Una identidad compartida sin atribución técnica individual deja el registro sin el autor concreto; reconstruirlo de memoria es débil.
- Error B: Mantener privilegios en la actividad cotidiana aumenta exposición y omitir elevaciones registradas dificulta distinguir operaciones privilegiadas.
- Error D: La coincidencia de horario no acredita quién realizó una acción bajo la cuenta compartida; una cuenta de servicio no es sustituto de identidades personales.

- [GSA/CIO Council/CISA: Privileged Identity Playbook](https://www.idmanagement.gov/playbooks/pam/) · Step 1: Develop a Privileged User Policy; identificación individual, auditoría; Step 2 · versión: Versión 1.2 de 29-12-2022, texto público comprobado 03-11-2026. Principios operativos, no obligaciones normativas de la AGE ni exclusión de mecanismos de emergencia controlados. · comprobado: 2026-11-03
- [Gobierno de Canadá: Account Management Configuration Requirements](https://www.canada.ca/en/government/system/digital-government/policies-standards/enterprise-it-service-common-configurations/account.html) · §4 Privileged account management, en especial 4.3; §6 Monitoring · versión: Texto institucional comprobado 03-11-2026. Fuente primaria de separación de cuentas y seguimiento; no se presenta como política obligatoria de este proyecto o de la AGE. · comprobado: 2026-11-03

Partida: `c3dcc33682d0c83403c2564f19243aaee25e98dc6902f2141136e138bcb0b03d` · propuesta: `f7fc9fb5402b5974e41766ddb2c843061b0c440efa9e088192ce7a5080da859d`
