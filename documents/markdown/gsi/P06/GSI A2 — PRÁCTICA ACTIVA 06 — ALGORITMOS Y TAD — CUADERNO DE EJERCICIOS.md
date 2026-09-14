# GSI A2 — PRÁCTICA ACTIVA 06

## Algoritmos, TAD y complejidad — CUADERNO DE EJERCICIOS

**Ámbito:** III.05 - Tipos abstractos de datos, estructuras de datos, organización de ficheros, estrategias de diseño de algoritmos, ordenación/búsqueda e IA básica.

**Método:** antes de responder, identifica qué operación domina: acceso, inserción, extracción por prioridad, recorrido, búsqueda, ordenación o camino mínimo. En complejidad, cuenta iteraciones y conserva el término dominante. En grafos, fija representación y si existen pesos. En IA, no confundas una buena métrica de entrenamiento con generalización.

**Objetivo:** convertir III.05 en una competencia práctica: elegir estructura/algoritmo y justificar coste, no memorizar una lista de nombres.

# PARTE A - TAD y estructuras de datos

1 - TAD vs implementación

Define un TAD y explica por qué una pila puede implementarse tanto con array como con lista enlazada sin dejar de ser el mismo TAD.

2 - Pila para deshacer

Una aplicación debe implementar Undo para las últimas acciones del usuario. ¿Qué estructura usarías y qué propiedad la hace adecuada?

3 - Cola de impresión

Los trabajos deben procesarse en el orden de llegada. ¿Qué estructura corresponde y qué propiedad aplica?

4 - Urgencias con prioridad

Las incidencias críticas deben atenderse antes que las normales, aunque hayan llegado después. ¿Qué estructura abstracta encaja mejor?

5 - Búsqueda por identificador

Debes localizar usuarios por un identificador único millones de veces al día. Compara tabla hash y búsqueda lineal.

6 - Acceso posicional

Necesitas acceder continuamente al elemento i de una colección por posición. ¿Array o lista enlazada? Justifica con complejidad.

7 - Inserción conocida

Tienes ya una referencia a un nodo de una lista enlazada y quieres insertar justo después. ¿Por qué puede ser O(1)? ¿Qué cambia si primero debes localizar la posición?

8 - Deque

Un buffer necesita insertar y extraer por ambos extremos. ¿Qué TAD utilizarías?

9 - Top de prioridades

Quieres obtener repetidamente el elemento con mayor prioridad. ¿Qué estructura concreta es una implementación habitual de una cola de prioridad?

10 - BST balanceado

Compara un árbol binario de búsqueda balanceado con uno degenerado respecto a búsqueda.

11 - Grafo: matriz o lista

Una red tiene 100.000 vértices y cada vértice conecta con unos 4 vecinos. ¿Matriz o lista de adyacencia? Justifica.

12 - B-tree / B+ tree

¿Por qué árboles B/B+ son adecuados para índices sobre almacenamiento secundario en comparación con árboles binarios simples?

13 - Traza de pila

Ejecuta: push(A), push(B), push(C), pop(), push(D), pop(), pop(). ¿Qué valores devuelven los tres pop y qué queda en la pila?

14 - Traza de cola

Ejecuta: enqueue(A), enqueue(B), dequeue(), enqueue(C), enqueue(D), dequeue(). ¿Qué valores se extraen y qué elementos quedan?

15 - Colisiones hash

Dos claves producen la misma posición hash. ¿Significa que la tabla hash está mal diseñada? Explica cómo puede resolverse conceptualmente.

# PARTE B - Complejidad temporal y espacial

16 - Un bucle

for i in range(n): trabajo\_constante()

Determina Big-O.

17 - Dos bucles anidados

for i in range(n): for j in range(n): trabajo\_constante()

Determina Big-O.

18 - Bucle logarítmico

i = 1while i < n: i \*= 2

Determina Big-O.

19 - Lineal por logarítmico

for i in range(n): j = 1 while j < n: j \*= 2

Determina Big-O.

20 - Secuenciales, no anidados

for i in range(n): passfor j in range(n): pass

¿O(2n), O(n) u O(n²)? Explica.

21 - Triangular

for i in range(n): for j in range(i): trabajo\_constante()

Determina Big-O.

22 - Constantes y términos dominantes

Ordena y simplifica: 7n² + 50n + 1000. ¿Qué Big-O tiene?

23 - Búsqueda binaria

¿Cuál es la complejidad temporal de búsqueda binaria sobre un array ordenado? ¿Qué requisito previo es esencial?

24 - Hash promedio vs peor caso

Explica por qué una tabla hash puede tener O(1) promedio para búsqueda pero O(n) en un peor caso.

25 - Árbol balanceado

¿Qué complejidad de búsqueda esperas en un BST balanceado con n elementos? ¿Y en uno completamente degenerado?

26 - BFS con lista de adyacencia

Indica la complejidad típica de BFS en términos de V y E cuando el grafo se representa mediante listas de adyacencia.

27 - Matriz de adyacencia

¿Por qué recorrer vecinos de todos los vértices con una matriz de adyacencia puede llevar O(V²), aunque el grafo sea disperso?

28 - Merge sort

La recurrencia aproximada es T(n)=2T(n/2)+O(n). ¿Qué orden temporal resulta?

29 - Espacio de búsqueda binaria

Compara la búsqueda binaria iterativa y una versión recursiva respecto a espacio auxiliar.

# PARTE C - Ordenación y búsqueda

30 - Búsqueda lineal

Tienes una colección no ordenada de 50.000 elementos y realizarás una sola búsqueda. ¿Por qué la búsqueda lineal puede ser razonable?

31 - Traza de búsqueda binaria

Busca 12 en [1,4,7,9,12,15,20] usando índice medio entero. Escribe los valores comparados hasta encontrarlo.

32 - Insertion sort

¿Por qué insertion sort puede comportarse bien en colecciones pequeñas o casi ordenadas aunque sea O(n²) en caso general?

33 - Merge sort

Indica complejidad temporal típica, estabilidad y principal coste de memoria de merge sort según tus apuntes.

34 - Quicksort

Indica complejidad media y peor caso. ¿Qué papel juega la elección del pivote?

35 - Heapsort

Indica complejidad temporal y una ventaja frente a quicksort respecto al peor caso.

36 - Estabilidad

Ordenas empleados por departamento manteniendo el orden previo por antigüedad dentro de cada departamento. ¿Por qué importa que el algoritmo sea estable?

37 - Elegir ordenación

Necesitas O(n log n) garantizado en peor caso y poco espacio auxiliar. Entre merge, quick y heap, ¿cuál encaja mejor de forma clásica?

38 - Top-k

De un flujo grande quieres mantener los 100 valores más altos sin ordenar todo continuamente. ¿Qué estructura puede ser útil y por qué?

39 - Ordenar antes de buscar

Vas a realizar 1.000.000 de búsquedas sobre una colección estática inicialmente desordenada. Compara mantenerla desordenada con ordenar una vez y luego usar búsqueda binaria.

# PARTE D - Árboles y grafos

40 - BFS

Grafo no dirigido con vecinos en orden alfabético: A:{B,C}; B:{A,D,E}; C:{A,F}; D:{B}; E:{B,F}; F:{C,E}. Recorre BFS desde A.

41 - DFS

Sobre el mismo grafo y visitando vecinos en orden alfabético, realiza DFS desde A.

42 - Camino mínimo no ponderado

¿Qué algoritmo usarías para hallar el menor número de aristas entre dos nodos en un grafo no ponderado?

43 - Dijkstra

Grafo dirigido/ponderado: A-B=4, A-C=1, C-B=2, B-D=1, C-D=5. Calcula el coste mínimo de A a D y el camino.

44 - Pesos negativos

¿Por qué Dijkstra no debe asumirse correcto con aristas negativas? ¿Qué algoritmo de tus apuntes admite pesos negativos?

45 - Floyd-Warshall

¿Cuándo es conceptualmente adecuado Floyd-Warshall frente a ejecutar una búsqueda desde un único origen?

46 - Dirigido vs no dirigido

Da un ejemplo de relación que modelarías como grafo dirigido y otra como no dirigida.

47 - Heap máximo

¿Es [9,7,8,2,5,3] una representación válida de max-heap en array? Justifica comparando padres e hijos.

48 - BST

Inserta conceptualmente 8,3,10,1,6,14,4,7,13 en un BST sin balanceo. ¿Qué camino sigues para buscar 7?

49 - Representación de grafo

¿Qué estructura ocupa normalmente menos memoria para un grafo muy disperso: matriz o lista de adyacencia? ¿Y cuál permite comprobar una arista (u,v) en O(1) directo con la representación básica?

50 - MST y greedy

¿Qué dos algoritmos citados en tus apuntes son ejemplos clásicos de enfoque voraz para árbol de expansión mínima?

51 - BFS vs DFS

Necesitas encontrar la solución más cercana en número de pasos en un espacio no ponderado. ¿BFS o DFS? ¿Y si solo quieres explorar profundamente con memoria limitada en anchura?

# PARTE E - Estrategias de diseño de algoritmos

52 - Divide y vencerás

Explica las tres ideas: dividir, resolver subproblemas y combinar. Da dos ejemplos de tus apuntes.

53 - Greedy que falla

Monedas {1,3,4}, objetivo 6. Aplica greedy tomando siempre la moneda mayor posible. ¿Cuántas monedas usa? ¿Cuál es la solución óptima? ¿Qué demuestra?

54 - Programación dinámica

¿Qué dos propiedades suelen justificar programación dinámica: subproblemas solapados y subestructura óptima? Explica con una frase.

55 - Memoization vs tabulation

Distingue enfoque top-down con memoization y bottom-up con tabulation.

56 - Backtracking

En N reinas, ¿por qué backtracking puede podar una rama antes de colocar todas las reinas?

57 - Branch and bound

¿Qué añade branch and bound respecto a una búsqueda exhaustiva en problemas de optimización?

58 - Fibonacci

Compara Fibonacci recursivo ingenuo con una solución de programación dinámica en crecimiento temporal.

59 - Elegir estrategia

Asocia: a) merge sort; b) mochila 0/1; c) N reinas; d) Kruskal. Opciones: divide y vencerás, programación dinámica, backtracking, greedy.

60 - No todo greedy vale

¿Por qué demostrar que una decisión local parece buena no basta para garantizar optimalidad global?

# PARTE F - Organización de ficheros

61 - Fichero secuencial

Un proceso nocturno recorre todos los registros de principio a fin. ¿Qué organización puede ser simple y eficiente?

62 - Acceso directo/hash

Se consulta principalmente por una clave exacta. ¿Qué organización de fichero descrita en tus apuntes puede ser apropiada y qué problema debe gestionar?

63 - Secuencial indexado

¿Qué ventaja aporta añadir un índice a una organización secuencial?

64 - Registros fijos vs variables

Compara facilidad de cálculo de posición/gestión entre registros de longitud fija y variable.

65 - Buffering

¿Por qué leer/escribir en bloques o buffers suele ser más eficiente que realizar una operación física por cada registro?

66 - Elección combinada

Un archivo se procesa completo cada noche, pero también recibe algunas consultas por clave durante el día. ¿Qué compromiso de organización podrías plantear?

# PARTE G - IA básica dentro de III.05

67 - Supervisado, no supervisado, refuerzo

Clasifica: a) predecir si una solicitud será fraude usando ejemplos etiquetados; b) agrupar expedientes sin etiquetas; c) agente que aprende por recompensa.

68 - Train/validation/test

Explica el papel de cada subconjunto y por qué no debes usar el test para ajustar continuamente el modelo.

69 - Overfitting

Un modelo obtiene 99% en entrenamiento y 72% en test. ¿Qué sospechas y qué significa generalización?

70 - Precision vs recall

En detección de fraude, ¿qué significa priorizar recall? ¿Qué coste puede aumentar?

71 - F1

¿Por qué F1 puede ser útil cuando quieres equilibrar precision y recall, especialmente con clases desbalanceadas?

72 - Data leakage

Durante entrenamiento se usa accidentalmente una variable que solo existe después de resolver el expediente. ¿Qué problema existe?

73 - Tipo de tarea

Asocia: predecir importe futuro; clasificar correo como spam/no spam; agrupar usuarios similares; detectar casos atípicos. Opciones: regresión, clasificación, clustering, anomalías.

# PARTE H - Mini-supuestos integradores

74 - Centro de incidencias

Diseña las estructuras principales para: registrar incidencias por id, atender primero las críticas y conservar orden de llegada dentro de la misma prioridad. Justifica hash + estructura de prioridad/colas.

75 - Búsqueda documental

Tienes 10 millones de documentos estáticos ordenables por id y realizarás millones de búsquedas. Compara búsqueda lineal, ordenar+búsqueda binaria y hash. ¿Qué factores adicionales decidirían?

76 - Rutas administrativas

Modela sedes como vértices y enlaces con latencia positiva como aristas ponderadas. ¿Qué algoritmo usarías para ruta mínima desde una sede a todas las demás? ¿Qué cambiaría si hubiera pesos negativos teóricos?

77 - Procesamiento casi ordenado

Cada hora recibes una lista pequeña que suele venir casi ordenada y debe quedar ordenada rápidamente. ¿Qué algoritmo clásico de tus apuntes puede ser razonable? Justifica.

78 - Asignación con decisiones

Un problema de combinaciones tiene muchas ramas; una solución parcial que viola una restricción ya nunca podrá ser válida. ¿Qué estrategia usarías? ¿Qué diferencia habría si además dispusieras de una cota para descartar soluciones que no superarán la mejor?

79 - Clasificador público

Diseñas un clasificador para priorizar expedientes. Estructura una respuesta breve con datos, train/validation/test, métrica, overfitting, sesgo, explicabilidad y supervisión humana.

80 - Supuesto completo de 20 minutos

Un organismo necesita procesar millones de registros, ofrecer búsquedas rápidas, priorizar tareas, calcular rutas entre sedes y añadir un modelo de detección de anomalías. En máximo una página, justifica estructuras, algoritmos, complejidad aproximada y controles de IA. No elijas tecnología de producto concreta.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A TAD/estructuras |  |  |  |
| B Big-O |  |  |  |
| C Ordenación/búsqueda |  |  |  |
| D Árboles/grafos |  |  |  |
| E Estrategias |  |  |  |
| F Ficheros |  |  |  |
| G IA |  |  |  |
| H Supuestos |  |  |  |

Base: apuntes GSI A2 V2.1, tema III.05. Se prioriza el alcance expresamente recogido en esos apuntes: TAD, Big-O, arrays/listas/pilas/colas/hash/árboles/grafos, búsqueda/ordenación, BFS/DFS/Dijkstra/Bellman-Ford/Floyd-Warshall, divide y vencerás, greedy, programación dinámica, backtracking, branch and bound, organizaciones de ficheros e IA básica.
