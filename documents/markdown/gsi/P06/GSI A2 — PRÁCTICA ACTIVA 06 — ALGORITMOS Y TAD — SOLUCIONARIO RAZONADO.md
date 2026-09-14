# GSI A2 — PRÁCTICA ACTIVA 06

## Algoritmos, TAD y complejidad — SOLUCIONARIO RAZONADO

**Criterio de corrección:** una respuesta excelente indica **estructura/algoritmo + por qué + complejidad aproximada + limitación**. Hay varios problemas con más de una solución válida; el solucionario muestra una respuesta modelo coherente con III.05 V2.1.

# PARTE A - TAD y estructuras de datos

1 - TAD vs implementación

El TAD define comportamiento observable y operaciones, no representación interna. Pila = push/pop/top con semántica LIFO. Un array y una lista pueden implementar esas operaciones; cambia coste/gestión interna, no el contrato abstracto.

2 - Pila para deshacer

**Pila**. La última acción realizada es la primera que se deshace: LIFO.

3 - Cola de impresión

**Cola**. Primer trabajo en entrar, primero en salir: FIFO.

4 - Urgencias con prioridad

**Cola de prioridad**. Extrae según prioridad, no solo por orden de llegada. Para desempatar puede combinarse prioridad con timestamp/secuencia.

5 - Búsqueda por identificador

Hash: búsqueda promedio cercana a O(1) si distribución y factor de carga son adecuados. Lineal: O(n). Para millones de búsquedas exactas, hash suele ser más apropiado si no necesitas orden/rangos.

6 - Acceso posicional

**Array**: acceso por índice O(1). Lista enlazada: para llegar a la posición i normalmente recorres nodos, O(n).

7 - Inserción conocida

Con referencia al nodo, ajustar punteros puede ser O(1). Si antes debes localizar la posición, ese recorrido puede costar O(n); por tanto la operación completa ya no es O(1).

8 - Deque

**Deque / double-ended queue**: inserción/extracción por ambos extremos.

9 - Top de prioridades

**Heap** es una implementación clásica de cola de prioridad: acceso al mínimo/máximo y actualización eficiente.

10 - BST balanceado

Balanceado: altura O(log n), búsqueda O(log n). Degenerado como lista: altura O(n), búsqueda O(n).

11 - Grafo: matriz o lista

**Lista de adyacencia**: O(V+E) de memoria aproximada y adecuada a pocos vecinos por vértice. Matriz O(V²) sería enorme para 100.000 vértices.

12 - B-tree / B+ tree

Tienen alto factor de ramificación, reducen altura y número de accesos a bloques/páginas. Eso encaja con almacenamiento secundario, donde una E/S es mucho más costosa que comparaciones en memoria.

13 - Traza de pila

pop devuelve **C**, después **D**, después **B**. Queda A en la pila.

14 - Traza de cola

Primer dequeue: **A**. Segundo: **B**. Quedan C,D en ese orden.

15 - Colisiones hash

No necesariamente es un error: colisiones son posibles. Se resuelven con técnicas como encadenamiento o direccionamiento abierto, además de buena función hash y gestión del factor de carga.

# PARTE B - Complejidad temporal y espacial

16 - Un bucle

**O(n)**: trabajo constante repetido n veces.

17 - Dos bucles anidados

**O(n²)**: n × n iteraciones.

18 - Bucle logarítmico

**O(log n)**: i se duplica; el número de pasos es aproximadamente log₂ n.

19 - Lineal por logarítmico

**O(n log n)**: por cada una de n iteraciones se ejecuta un bucle logarítmico.

20 - Secuenciales, no anidados

O(n)+O(n)=O(2n)=**O(n)**. Big-O elimina constantes multiplicativas.

21 - Triangular

0+1+...+(n-1)=n(n-1)/2, por tanto **O(n²)**.

22 - Constantes y términos dominantes

Domina n²; constantes y términos inferiores no cambian crecimiento asintótico. Resultado: **O(n²)**.

23 - Búsqueda binaria

**O(log n)**. Requisito clave: la colección debe estar ordenada según el criterio de búsqueda y permitir acceso adecuado al punto medio.

24 - Hash promedio vs peor caso

Promedio O(1) con distribución razonable. Si muchas claves colisionan en la misma zona/estructura, una búsqueda puede degenerar a recorrer O(n) elementos.

25 - Árbol balanceado

Balanceado: **O(log n)**. Degenerado: **O(n)**.

26 - BFS con lista de adyacencia

**O(V+E)**: cada vértice se visita una vez y cada arista se examina un número constante de veces.

27 - Matriz de adyacencia

Para cada uno de V vértices puedes tener que inspeccionar V posiciones para descubrir vecinos, total **O(V²)** aunque existan pocas aristas reales.

28 - Merge sort

**O(n log n)**. Divide en mitades log n niveles y combina O(n) trabajo por nivel.

29 - Espacio de búsqueda binaria

Iterativa: O(1) espacio auxiliar. Recursiva: típicamente O(log n) por pila de llamadas. El tiempo sigue siendo O(log n).

# PARTE C - Ordenación y búsqueda

30 - Búsqueda lineal

Con una sola búsqueda, ordenar primero O(n log n) puede costar más que recorrer una vez O(n). Si no habrá reutilización, lineal puede ser razonable.

31 - Traza de búsqueda binaria

Índices 0..6. Medio=3 -> 9; buscamos mayor. Subrango 4..6, medio=5 -> 15; buscamos menor. Subrango 4..4 -> **12**. Comparaciones: 9,15,12.

32 - Insertion sort

En listas casi ordenadas realiza pocos desplazamientos y tiene bajo overhead; aunque su cota general sea O(n²), puede ser muy competitivo en tamaños pequeños o baja inversión.

33 - Merge sort

Tiempo **O(n log n)**, es **estable** y normalmente requiere **espacio auxiliar O(n)** para combinar en arrays.

34 - Quicksort

Promedio **O(n log n)**; peor **O(n²)**. Un pivote que produce particiones muy desequilibradas acerca al peor caso; estrategias de pivote ayudan a evitarlo en práctica.

35 - Heapsort

**O(n log n)** incluso en peor caso. Frente a quicksort clásico, ofrece una cota peor-caso más fuerte, normalmente con operación in-place.

36 - Estabilidad

Un algoritmo estable mantiene el orden relativo de elementos con clave igual. Si previamente estaban ordenados por antigüedad, al ordenar por departamento se conserva ese orden dentro de cada departamento.

37 - Elegir ordenación

**Heapsort**: O(n log n) en peor caso y espacio auxiliar bajo/in-place típico. Merge garantiza O(n log n) pero suele necesitar O(n) adicional; quick puede caer a O(n²).

38 - Top-k

Un **min-heap de tamaño 100** permite mantener los 100 mayores: cada nuevo valor se compara con el mínimo del top y, si entra, se reemplaza con coste O(log k).

39 - Ordenar antes de buscar

Sin ordenar: 1.000.000 búsquedas × O(n). Ordenar una vez O(n log n) + búsquedas O(log n) cada una puede ser enormemente mejor. Hash podría dar O(1) promedio si solo hay igualdad; influyen memoria, necesidad de rangos/orden, actualizaciones y coste de construcción.

# PARTE D - Árboles y grafos

40 - BFS

Con vecinos alfabéticos: **A, B, C, D, E, F**.

41 - DFS

Visitando alfabéticamente y profundizando: **A, B, D, E, F, C**. Otras órdenes son posibles si cambia el orden de vecinos; por eso el enunciado lo fija.

42 - Camino mínimo no ponderado

**BFS**, porque explora por niveles y el primer alcance de un nodo da el menor número de aristas desde el origen.

43 - Dijkstra

A->C=1; C->B añade 2, total 3; B->D añade 1, total **4**. Camino: **A-C-B-D**.

44 - Pesos negativos

Dijkstra asume que una distancia fijada no será mejorada mediante una arista negativa posterior. Con pesos negativos puede fallar. **Bellman-Ford** admite aristas negativas y además puede detectar ciclos negativos alcanzables.

45 - Floyd-Warshall

Es apropiado cuando necesitas distancias/caminos entre **todos los pares** de vértices. Para un único origen suele ser innecesariamente costoso.

46 - Dirigido vs no dirigido

Dirigido: 'usuario A sigue a B' o flujo de una carretera de sentido único. No dirigido: enlace físico bidireccional o relación 'son vecinos' cuando es simétrica.

47 - Heap máximo

Sí. 9>=7,8; 7>=2,5; 8>=3. Cada padre es mayor o igual que sus hijos.

48 - BST

Buscar 7: **8 -> 3 -> 6 -> 7**. En cada paso comparas y eliges izquierda/derecha.

49 - Representación de grafo

Lista de adyacencia usa menos memoria en dispersos. Matriz permite comprobar una arista (u,v) en **O(1)** directo con acceso a la celda; en lista depende del grado/estructura usada.

50 - MST y greedy

**Kruskal y Prim**.

51 - BFS vs DFS

Para solución más cercana en pasos no ponderados: **BFS**. Para explorar profundidad y evitar mantener una frontera ancha, **DFS** puede ser más apropiado, aunque no garantiza la solución más corta.

# PARTE E - Estrategias de diseño de algoritmos

52 - Divide y vencerás

1) dividir problema; 2) resolver subproblemas; 3) combinar resultados. Ejemplos de tus apuntes: **merge sort** y **búsqueda binaria**.

53 - Greedy que falla

Greedy: 4+1+1 = **3 monedas**. Óptimo: 3+3 = **2 monedas**. Demuestra que una elección localmente mejor no siempre produce óptimo global.

54 - Programación dinámica

**Subproblemas solapados**: los mismos estados se recalculan muchas veces. **Subestructura óptima**: una solución óptima puede construirse a partir de soluciones óptimas de subproblemas.

55 - Memoization vs tabulation

Memoization: top-down, recursivo o dirigido por demanda, guarda resultados cuando se necesitan. Tabulation: bottom-up, rellena una tabla desde casos base en orden definido.

56 - Backtracking

Si dos reinas ya se atacan, añadir más reinas nunca hará válida esa solución parcial. Se poda la rama inmediatamente.

57 - Branch and bound

Usa una **cota** para estimar el mejor resultado posible de una rama; si no puede superar la mejor solución conocida, se descarta sin explorarla completa.

58 - Fibonacci

Recursivo ingenuo repite masivamente subproblemas y crece aproximadamente exponencial, **O(2^n)** como cota conceptual habitual. DP calcula cada estado una vez: **O(n)** tiempo, con espacio O(n) o incluso O(1) si solo mantienes los dos últimos.

59 - Elegir estrategia

a) merge sort -> divide y vencerás; b) mochila 0/1 -> programación dinámica; c) N reinas -> backtracking; d) Kruskal -> greedy.

60 - No todo greedy vale

Hace falta demostrar propiedades del problema, como elección voraz segura y subestructura adecuada. Un contraejemplo basta para mostrar que la regla local no garantiza optimalidad global.

# PARTE F - Organización de ficheros

61 - Fichero secuencial

**Secuencial**: simple y eficiente para recorridos completos de principio a fin.

62 - Acceso directo/hash

**Directo/hash**: calcula ubicación lógica desde la clave. Debe gestionar **colisiones** y crecimiento/rehashing según diseño.

63 - Secuencial indexado

El índice permite localizar más rápido una zona/registro sin recorrer todo el fichero, manteniendo además una organización secuencial útil para recorridos.

64 - Registros fijos vs variables

Fijos: tamaño conocido, cálculo de posición y acceso más sencillo, posible desperdicio de espacio. Variables: aprovechan espacio y flexibilidad, pero requieren metadatos/offsets y gestión más compleja.

65 - Buffering

La E/S física tiene alto coste fijo. Agrupar registros en bloques reduce número de operaciones, aprovecha transferencia secuencial/cachés y mejora throughput.

66 - Elección combinada

Una organización **secuencial indexada** puede equilibrar recorrido completo y búsquedas por clave. También podría existir fichero secuencial más un índice separado. La elección depende de frecuencia de consultas, actualizaciones y volumen.

# PARTE G - IA básica dentro de III.05

67 - Supervisado, no supervisado, refuerzo

a) **supervisado**; b) **no supervisado/clustering**; c) **aprendizaje por refuerzo**.

68 - Train/validation/test

Train ajusta parámetros; validation ayuda a seleccionar hiperparámetros/modelo; test estima rendimiento final no visto. Si ajustas repetidamente con el test, deja de ser una evaluación independiente y se produce fuga de información hacia decisiones de modelado.

69 - Overfitting

Sospecha **sobreajuste**: memoriza/personaliza demasiado el entrenamiento y generaliza peor a datos nuevos. Generalización es mantener rendimiento adecuado fuera de la muestra de entrenamiento.

70 - Precision vs recall

Priorizar recall busca detectar mayor proporción de fraudes reales, reduciendo falsos negativos. Puede aumentar **falsos positivos** y carga de revisión.

71 - F1

F1 es media armónica de precision y recall; penaliza que una de las dos sea muy baja. Puede ser útil con desbalance cuando ambas importan, aunque no sustituye entender costes de errores.

72 - Data leakage

**Fuga de datos**: el modelo recibe información que no estaría disponible en el momento real de predicción, produciendo métricas artificialmente buenas.

73 - Tipo de tarea

Importe futuro -> **regresión**; spam/no spam -> **clasificación**; agrupar similares -> **clustering**; casos atípicos -> **detección de anomalías**.

# PARTE H - Mini-supuestos integradores

74 - Centro de incidencias

Hash por id para acceso promedio O(1). Para atención, cola de prioridad; para conservar FIFO dentro de misma prioridad, la clave de prioridad puede combinar severidad y secuencia de llegada o mantener una cola FIFO por nivel. Justifica complejidad y reglas de desempate.

75 - Búsqueda documental

Una única búsqueda: lineal O(n). Millones de búsquedas estáticas: ordenar O(n log n) y luego O(log n) por búsqueda amortiza bien. Hash puede dar O(1) promedio si solo buscas igualdad. Deciden memoria, necesidad de rangos/orden, actualizaciones, persistencia y construcción del índice.

76 - Rutas administrativas

Con latencias no negativas: **Dijkstra** desde un origen a todos los destinos. Si aparecieran pesos negativos teóricos, usar **Bellman-Ford**; si necesitas todos los pares, Floyd-Warshall es otra opción según tamaño.

77 - Procesamiento casi ordenado

**Insertion sort** puede ser razonable: bajo overhead y buen comportamiento cuando hay pocos elementos fuera de posición.

78 - Asignación con decisiones

**Backtracking** si puedes podar por inviabilidad. Si además existe una cota optimista/pesimista para descartar ramas que no superarán la mejor solución, **branch and bound**.

79 - Clasificador público

Definir objetivo y etiqueta; calidad/representatividad de datos; separar train/validation/test; seleccionar métricas según costes de FP/FN; vigilar overfitting y leakage; evaluar sesgo por grupos pertinentes; exigir explicabilidad proporcional al impacto; supervisión humana, logging, monitorización y revisión del modelo.

80 - Supuesto completo de 20 minutos

Una respuesta sólida: 1) hash/índices para lookup; 2) cola de prioridad para tareas; 3) listas de adyacencia para red dispersa; 4) Dijkstra para latencias positivas; 5) complejidades aproximadas O(1) promedio, O(log k) para heap, O(V+E) para BFS y O((V+E)logV) conceptual con heap para Dijkstra; 6) si hay ordenación, elegir según estabilidad/memoria/peor caso; 7) IA: objetivo, datos, splits, métrica, leakage/overfitting, sesgo, explicabilidad y supervisión. No hace falta elegir producto concreto.

# Patrón mental de examen

* **¿Qué operación domina?** acceso por índice, lookup por clave, FIFO/LIFO, prioridad, rango, vecino, camino.
* **¿Qué estructura encaja?** array, lista, pila, cola, heap, hash, árbol, grafo.
* **¿Qué coste?** O(1), O(log n), O(n), O(n log n), O(n²)... y si es promedio o peor caso.
* **¿Qué precondición?** datos ordenados, pesos no negativos, grafo disperso, baja contención, etc.
* **¿Qué estrategia?** divide/conquer, greedy, DP, backtracking o branch and bound.
* **IA:** objetivo -> datos -> train/validation/test -> métrica -> generalización -> sesgo/explicabilidad.

Soluciones construidas sobre III.05 V2.1. Cuando se añade una complejidad derivada (p.ej. Dijkstra con heap), se usa como razonamiento estándar de apoyo y no como nueva obligación literal de memorización si no figura en el apunte.
