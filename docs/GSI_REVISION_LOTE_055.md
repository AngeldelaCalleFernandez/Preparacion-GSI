# GSI-EDITORIAL-055 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `f04d5383ed71916eb4da48c8fd224bc1ac541b4b8fddef0e3ed5449d1a603673`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T04-018

Decisión: pending_review · acción: revise.

Motivo: Conservar recuperación segura y clave C; precisar reintento completo, estado del cliente y efectos externos.

### Antes

El gestor aborta una transacción víctima de deadlock. ¿Qué debe prever la aplicación?

- A. Ocultar siempre el error sin recuperación
- B. Repetir efectos externos sin control
- C. Rollback y reintento seguro cuando proceda **(correcta)**
- D. Dar por confirmados todos sus cambios

Explicación: El reintento debe respetar idempotencia y estado; no implica que la transacción abortada se completara.

### Propuesta

El gestor aborta una transacción víctima de deadlock. ¿Qué debe prever la aplicación?

- A. Repetir únicamente la última sentencia dentro de la transacción abortada.
- B. Reenviar los efectos externos suponiendo que el aborto también los deshizo.
- C. Gestionar el aborto y reintentar la transacción completa si puede hacerse con seguridad. **(correcta)**
- D. Confirmar las operaciones anteriores al conflicto como si hubieran persistido.

Explicación: El aborto de la víctima no equivale a commit. La aplicación debe gestionar el error y el estado transaccional, y reiniciar la transacción completa cuando el reintento sea apropiado y seguro, con lecturas y decisiones actualizadas. No basta repetir la sentencia que falló. El rollback del SGBD no revierte por sí solo correos, cobros u otros efectos externos: hay que coordinarlos o evitar duplicarlos. La recuperación depende del gestor y del protocolo de aplicación.

- Error A: Repetir una sentencia no reconstruye las lecturas y decisiones de la transacción abortada ni garantiza un estado utilizable.
- Error B: Los efectos externos no pertenecen automáticamente al rollback de la base de datos; reenviarlos sin control puede duplicarlos.
- Error D: Una transacción abortada no confirma sus cambios previos. Hay que recuperar el estado y decidir el reintento.

- [PostgreSQL 18: Explicit Locking](https://www.postgresql.org/docs/18/explicit-locking.html) · 13.3.4 Deadlocks: aborto de víctima y reintento de transacciones; 13.3.1 efectos de rollback · versión: Documentación de versión 18, leída el 29-10-2026; no se instala ni se consulta un servidor. Los efectos externos requieren control adicional · comprobado: 2026-10-29

Partida: `921d884cb8d1848683b97c7e7cad7faf1a6becd4ca7eb2077afebad4066bd6ac` · propuesta: `0dc9139e3c75627cd7b4edf4ccf4b689709f767c17ed19bb8a2b429a1c0f900c`

## AI-GSI-B3-T05-001

Decisión: pending_review · acción: revise.

Motivo: Conservar valores/operaciones y clave D; distinguir contrato observable de representación, código e instrucciones.

### Antes

¿Qué define un TAD?

- A. Un lenguaje máquina
- B. Una tabla SQL concreta
- C. Una distribución física obligatoria
- D. Valores y operaciones independientes de implementación **(correcta)**

Explicación: Una pila puede implementarse con array o lista manteniendo sus operaciones observables.

### Propuesta

¿Qué define un TAD?

- A. El formato concreto de memoria usado para almacenar cada elemento.
- B. La secuencia de instrucciones máquina que ejecuta cada operación.
- C. El código fuente de una clase en un lenguaje de programación determinado.
- D. Los valores y operaciones observables, con su comportamiento especificado. **(correcta)**

Explicación: Un TAD especifica qué valores admite y qué hacen sus operaciones, sin fijar una representación concreta. Una pila implementada con array y otra con nodos pueden cumplir el mismo contrato LIFO. Cambiar la representación no debe cambiar ese comportamiento observable. El coste o los detalles de memoria se analizan al escoger una implementación; no sustituyen la especificación abstracta.

- Error A: El formato de memoria es una decisión de representación; distintas representaciones pueden realizar el mismo TAD.
- Error B: Las instrucciones son implementación de operaciones, no su significado abstracto.
- Error C: Una clase concreta puede implementar un TAD, pero su código no define por sí solo la abstracción independiente del lenguaje.

- [NIST DADS: abstract data type](https://xlinux.nist.gov/dads/HTML/abstractDataType.html) · Definition; especificación de valores/operaciones y axiomas de pila · versión: Entrada modificada 10-02-2005; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `7fed32099da0c8212b1f7f69508490a78a711e83a07662f5e363f4d08cc0936d` · propuesta: `d41c935fcd077e69fc7696147871cb3def0f38fbfa18c0784ca22b1e6d41565e`

## AI-GSI-B3-T05-002

Decisión: pending_review · acción: revise.

Motivo: Conservar complejidad asintótica y clave C; corregir la imprecisión de equiparar O(n) a crecimiento necesariamente lineal.

### Antes

¿Qué expresa O(n)?

- A. Exactamente n segundos
- B. Memoria siempre constante
- C. Crecimiento asintótico lineal **(correcta)**
- D. Ausencia de coste

Explicación: Big-O describe cómo crece el coste, no una duración absoluta.

### Propuesta

Para un coste no negativo T(n), ¿qué afirma T(n)∈O(n) en sentido formal?

- A. Una cota inferior asintótica lineal.
- B. Una cota ajustada asintótica lineal.
- C. Una cota superior asintótica lineal. **(correcta)**
- D. Una duración exacta de n segundos.

Explicación: T(n) pertenece a O(n) si existen constantes positivas c y n₀ tales que 0≤T(n)≤c·n para todo n≥n₀. Es una cota superior, que puede no ser ajustada: un coste constante también pertenece a O(n). Θ(n) expresa cota superior e inferior lineales; Ω(n), una inferior. No se indica una duración exacta en segundos ni se exige crecimiento exactamente lineal.

- Error A: Una cota inferior se expresa con Ω; O limita por arriba para tamaños suficientemente grandes.
- Error B: Una cota ajustada lineal exige ambas direcciones, Θ(n). O(n) por sí sola no obliga a ello.
- Error D: La notación asintótica relaciona el coste con el tamaño y un modelo; no fija segundos o una máquina concreta.

- [NIST DADS: big-O notation](https://xlinux.nist.gov/dads/HTML/bigOnotation.html) · Formal Definition; Note: cota superior frente a Θ y cotas no ajustadas · versión: Entrada modificada 06-09-2019; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `dae965d1b842c948a8c3d37b186b9bdfebc96fa879bc60f38c2db349b7e9f5de` · propuesta: `fd52233ae2462b5a92e2a5cf8abbe936f13768d5d174835635c5bd26988e5012`

## AI-GSI-B3-T05-003

Decisión: pending_review · acción: revise.

Motivo: Conservar LIFO y clave C; microsecuencia que evalúa el orden de extracción, con distractores de TAD próximos.

### Antes

¿Qué estructura sigue LIFO?

- A. Árbol de búsqueda
- B. Fichero secuencial
- C. Pila **(correcta)**
- D. Cola FIFO

Explicación: La pila extrae primero el último elemento introducido.

### Propuesta

Se introducen A, B y C, en ese orden y sin extracciones intermedias. Se exige retirar C, después B y después A. ¿Qué TAD ofrece esa disciplina?

- A. Cola FIFO.
- B. Cola de prioridad por menor valor.
- C. Pila LIFO. **(correcta)**
- D. Diccionario de claves únicas.

Explicación: La pila retira primero lo último añadido. Tras introducir A, B y C, C queda en la cima y sale antes que B y A. Las operaciones push y pop materializan ese contrato. Se supone que no hay extracciones intermedias; el orden no depende de la representación como array o lista.

- Error A: FIFO retiraría A, el primero que entró, no C.
- Error B: Una prioridad numérica requiere ese criterio; no equivale a invertir el orden de inserción.
- Error D: La unicidad de claves no establece una disciplina de extracción LIFO.

- [NIST DADS: stack](https://xlinux.nist.gov/dads/HTML/stack.html) · Definition y Formal Definition: LIFO, push, pop y top · versión: Entrada modificada 01-10-2019; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [NIST DADS: abstract data type](https://xlinux.nist.gov/dads/HTML/abstractDataType.html) · Definition; especificación de valores/operaciones y axiomas de pila · versión: Entrada modificada 10-02-2005; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `e816bc4287bb41c6baf31046ad3d29ef526a15ef078e56199ffcc916109aa94e` · propuesta: `a8769d09618d3258365e35ce4dcc57c67901d3ea0f3412d58cf5f638abf9b6c2`

## AI-GSI-B3-T05-004

Decisión: pending_review · acción: revise.

Motivo: Conservar FIFO y clave C; llegada de trabajos sin prioridades ni cancelación para fijar una única disciplina.

### Antes

¿Qué estructura atiende primero el elemento más antiguo de los insertados?

- A. Árbol binario
- B. Pila
- C. Cola FIFO **(correcta)**
- D. Heap de prioridad sin criterio temporal

Explicación: FIFO mantiene el orden de llegada; prioridad y LIFO usan otros criterios.

### Propuesta

Llegan trabajos A, B y C y deben atenderse por llegada, sin prioridades ni cancelaciones. ¿Qué estructura mantiene esa disciplina?

- A. Pila con inserción y extracción por la cima.
- B. Cola de prioridad según urgencia asignada.
- C. Cola FIFO por orden de llegada. **(correcta)**
- D. Conjunto sin disciplina de extracción temporal.

Explicación: FIFO conserva el orden de llegada: el primero pendiente en entrar sale primero. Si A, B y C llegan en ese orden y no hay cancelaciones ni prioridades, se atienden A, B y C. Una implementación circular o enlazada puede cumplir el mismo contrato; la representación no define la prioridad.

- Error A: La pila atiende primero el último introducido: produciría el orden inverso.
- Error B: La urgencia puede alterar el orden de llegada. El caso exige antigüedad sin ese criterio adicional.
- Error D: La pertenencia a un conjunto no determina qué elemento debe salir primero.

- [NIST DADS: queue](https://xlinux.nist.gov/dads/HTML/queue.html) · Definition y Formal Definition: FIFO, enqueue y dequeue · versión: Entrada modificada 14-12-2020; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [NIST DADS: stack](https://xlinux.nist.gov/dads/HTML/stack.html) · Definition y Formal Definition: LIFO, push, pop y top · versión: Entrada modificada 01-10-2019; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `0c99c56a642b83ac5abcba54775be1809db79eed15f7de8d9fdea312b024a08e` · propuesta: `f593412200e9cf01205d9356163cd565868fd06c6365f79ce30f4ee9d38fd01c`

## AI-GSI-B3-T05-005

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso constante y clave D; explicitar RAM/índice válido y usar Θ para evitar varias cotas O verdaderas.

### Antes

¿Qué coste tiene el acceso por índice a un array?

- A. O(2^n)
- B. O(n²)
- C. O(n) necesariamente
- D. O(1) **(correcta)**

Explicación: El acceso indexado es constante; insertar en medio puede requerir desplazamientos.

### Propuesta

En un array de n elementos de tamaño fijo, bajo el modelo RAM, ¿qué coste temporal ajustado tiene acceder a un índice válido ya conocido?

- A. Θ(log n).
- B. Θ(n).
- C. Θ(n log n).
- D. Θ(1). **(correcta)**

Explicación: En el modelo RAM con elementos de tamaño fijo y un índice válido conocido, la dirección se calcula desde la base y el desplazamiento; acceder a ese elemento tiene coste ajustado constante. No se busca una clave ni se desplazan elementos. Insertar en medio, redimensionar o encontrar el índice son operaciones distintas. Constante asintótico no significa idénticos nanosegundos en todos los accesos reales.

- Error A: El coste logarítmico aparece en búsquedas por comparación u otras estructuras; aquí el índice ya está disponible.
- Error B: Un recorrido lineal no es necesario para calcular la posición en el array bajo las condiciones indicadas.
- Error C: n log n es típico de ciertas ordenaciones, no de un solo acceso indexado directo.

- [Andrea Vedaldi, Oxford: B16 Algorithms and Data Structures 1](https://www.robots.ox.ac.uk/~vedaldi/assets/teach/2025/b16/notes/3-elementary-data-structures.html) · Capítulo 3, §3.2 Arrays: acceso, cálculo de dirección, modelo de memoria y desplazamientos al insertar · versión: Notas primarias del curso 2025 según ruta, leídas el 29-10-2026. Se delimita modelo RAM y tamaño de elemento; no tiempo físico idéntico en todo hardware · comprobado: 2026-10-29

Partida: `433ff5e88754d0e804c6df10966639d2276cd0e2cb68dc8fdaa12355af4c04f5` · propuesta: `dc9daca9b194885a38d959480115f1f4431f32d91d7d86da0f3bacf3866b4264`

## AI-GSI-B3-T05-007

Decisión: pending_review · acción: revise.

Motivo: Conservar colisiones y clave D; microcaso modular que separa hash igual, clave duplicada y tabla llena.

### Antes

¿Qué debe resolver una tabla hash cuando dos claves coinciden en ubicación?

- A. Fragmentación de paquetes
- B. Interbloqueos de CPU necesariamente
- C. Errores de sintaxis
- D. Colisiones **(correcta)**

Explicación: Las colisiones requieren una estrategia; el coste promedio depende de función y distribución.

### Propuesta

Una tabla usa h(k)=k mod 7. Al insertar las claves 10 y 17 ambas señalan la posición 3. ¿Qué situación debe resolver?

- A. La inserción repetida de una misma clave.
- B. El agotamiento de todas las posiciones de la tabla.
- C. La pérdida del orden relativo entre claves iguales.
- D. Una colisión entre claves distintas. **(correcta)**

Explicación: 10 y 17 son claves diferentes, pero h(10)=h(17)=3. Esa coincidencia de ubicación es una colisión y necesita una estrategia de resolución, como encadenamiento o direccionamiento abierto. Puede ocurrir con posiciones libres: no demuestra que la tabla esté llena ni que las claves sean iguales. La política de duplicados es una cuestión distinta.

- Error A: Los valores 10 y 17 no son la misma clave; compartir hash no los convierte en duplicados.
- Error B: Una coincidencia en una posición puede ocurrir aunque otras estén libres.
- Error C: Estabilidad se refiere al orden de empates en una ordenación, no a compartir una ubicación hash.

- [NIST DADS: collision](https://xlinux.nist.gov/dads/HTML/collision.html) · Definition: claves distintas con el mismo resultado de hash · versión: Entrada modificada el 17-12-2004; la fecha de formato HTML no identifica una nueva edición conceptual. · comprobado: 2026-11-05
- [NIST DADS: collision resolution scheme](https://xlinux.nist.gov/dads/HTML/collisionres.html) · Definition: direccionamiento abierto, encadenamiento y área de desbordamiento · versión: Entrada modificada 01-12-2004; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `d374740372f33ef9361134e489f42e406065f81a1a4f32f227ed237db7c1ec5f` · propuesta: `2ca162308c3abd97775118f23a297d7d0549fa841ad84600c424cbdda5577568`

## AI-GSI-B3-T05-008

Decisión: pending_review · acción: revise.

Motivo: Conservar heap y clave A; concretar invariante y distractores operativos, sin proclamar optimalidad universal.

### Antes

¿Qué estructura es especialmente útil para una cola de prioridad?

- A. Heap **(correcta)**
- B. Array siempre desordenado como solución óptima universal
- C. Pila sin ordenación adicional
- D. Lista de revocación

Explicación: El heap permite organizar extracción según prioridad.

### Propuesta

¿Qué estructura mantiene eficientemente una prioridad extrema accesible y se utiliza habitualmente para implementar una cola de prioridad?

- A. Heap binario con invariante de prioridad. **(correcta)**
- B. Pila con extracción del último insertado.
- C. Cola FIFO sin comparar prioridades.
- D. Tabla hash sin orden adicional por prioridad.

Explicación: Un heap organiza una prioridad extrema en la raíz y permite restaurar su invariante tras insertar o extraer. No necesita mantener todo el contenedor totalmente ordenado. Es una implementación habitual de cola de prioridad, no la única posible. Si dos prioridades coinciden, conservar FIFO requiere un desempate adicional; no se deduce del heap por sí solo.

- Error B: La cima de una pila sigue antigüedad inversa, sin comparar la prioridad de todos los elementos.
- Error C: Una cola FIFO atiende llegada; no selecciona la prioridad extrema cuando los criterios difieren.
- Error D: El hash facilita localizar una clave, pero no mantiene por sí solo un extremo ordenado de prioridad.

- [Python: heapq, Heap queue algorithm](https://docs.python.org/3.14/library/heapq.html) · Introducción, invariante min-heap; Priority Queue Implementation Notes; Theory: restauración logarítmica · versión: Documentación 3.14.10, actualizada 28-10-2026 según pie y leída el 29-10-2026; no implica versión local. Un heap no garantiza FIFO en empates sin criterio adicional · comprobado: 2026-10-29

Partida: `cfa828ec86c0e37cece75c2a09b24ddbdde7eaec2071ca552725d92f141705ef` · propuesta: `f2946541396352f572f2653be94ae1100b2123329241abcad6f43a8413db477e`

## AI-GSI-B3-T05-009

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave B; las alternativas ya separan orden, tamaño, unicidad y medio. Ampliar comparación y acceso.

### Antes

¿Qué precondición necesita la búsqueda binaria?

- A. Tamaño exactamente potencia de dos
- B. Colección ordenada **(correcta)**
- C. Elementos siempre distintos
- D. Almacenamiento en disco obligatorio

Explicación: El orden permite descartar una mitad; no exige valores únicos ni tamaño especial.

### Propuesta

¿Qué precondición necesita la búsqueda binaria?

- A. Tamaño exactamente potencia de dos
- B. Colección ordenada **(correcta)**
- C. Elementos siempre distintos
- D. Almacenamiento en disco obligatorio

Explicación: La búsqueda binaria necesita que la colección esté ordenada conforme al criterio de comparación usado. Comparar con el elemento medio permite descartar la mitad incompatible. No exige tamaño potencia de dos ni claves distintas. Para tiempo O(log n) sobre un array se presupone acceso eficiente al elemento medio; en una lista enlazada el número de comparaciones y el tiempo de recorrido no coinciden.

- Error A: El intervalo puede dividirse con tamaños impares o no potencias de dos; el redondeo no invalida la búsqueda.
- Error C: Los duplicados son compatibles con buscar una coincidencia. Hallar primera o última aparición requiere tratar los límites adecuadamente.
- Error D: El orden es una condición lógica; no exige disco como medio de almacenamiento.

- [NIST DADS: binary search](https://xlinux.nist.gov/dads/HTML/binarySearch.html) · Definition y Note: array ordenado, división del intervalo y comparación frente a recorrido en lista enlazada · versión: Entrada modificada 21-04-2022; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `e56f40139c7405c2191ae511cfc46441e6f01e78400fa5bc5b79c5424f953266` · propuesta: `4fdd4664dfffad78c2a3e36d13eb3547106d2e470ea2e2ec5afd96a9d5780e04`

## AI-GSI-B3-T05-010

Decisión: pending_review · acción: revise.

Motivo: Conservar BFS y clave A; especificar origen, alcanzabilidad y mínimo por número de aristas, con algoritmos próximos.

### Antes

¿Qué recorrido encuentra caminos mínimos en un grafo no ponderado?

- A. BFS **(correcta)**
- B. DFS en todos los casos
- C. Quicksort
- D. Búsqueda binaria

Explicación: BFS explora por niveles; DFS no garantiza el camino mínimo.

### Propuesta

En un grafo no ponderado, ¿qué algoritmo calcula desde un origen caminos con el menor número de aristas a los vértices alcanzables?

- A. Búsqueda en anchura (BFS). **(correcta)**
- B. Búsqueda en profundidad (DFS).
- C. Ordenación topológica (Kahn).
- D. Árbol de expansión mínima (Prim).

Explicación: BFS desde un origen descubre vértices por número creciente de aristas y permite reconstruir caminos mínimos a los alcanzables en un grafo no ponderado. El coste de una arista es uniforme; no se minimizan pesos heterogéneos. DFS alcanza vértices, pero su primer camino depende del recorrido y puede ser más largo. Una ordenación topológica y un árbol de expansión resuelven objetivos distintos.

- Error B: Profundizar primero puede llegar por un camino largo antes de examinar otro de menos aristas; no garantiza distancia mínima desde el origen.
- Error C: Kahn produce una ordenación de un DAG, sin calcular por sí solo distancias mínimas desde un origen.
- Error D: Prim minimiza el peso total de un árbol de expansión; no garantiza distancias mínimas desde una raíz concreta.

- [MIT 6.006: Lecture 13, Graphs I, Breadth First Search](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/1208e162775f6f5cedfbb9f2b694ede0_MIT6_006F11_lec13.pdf) · Páginas impresas 4–6: niveles desde s, algoritmo y Shortest Paths por número de aristas · versión: Fall 2011, PDF de 7 páginas leído textualmente el 29-10-2026; no se inspeccionan figuras ni se atribuye vídeo visto · comprobado: 2026-10-29

Partida: `af7b0e5a7c87958597737a869030fb4cb64d637285de44c38084f60a2ddd116f` · propuesta: `0a4883aad3d44bbf7d00d10a478d3fec2df20864b8b230988437f8c5eda6410f`

## AI-GSI-B3-T05-011

Decisión: pending_review · acción: revise.

Motivo: Conservar pesos no negativos y clave D; eliminar referencia a un caso ausente y distinguir garantía general de coincidencia en alguna instancia.

### Antes

¿Qué condición sobre pesos requiere Dijkstra en el caso descrito?

- A. Todos negativos
- B. Ausencia de aristas
- C. Todos idénticos obligatoriamente
- D. Pesos no negativos **(correcta)**

Explicación: Dijkstra no es adecuado con aristas negativas; Bellman-Ford las admite con sus condiciones.

### Propuesta

¿Qué condición sobre pesos sustenta la garantía general del Dijkstra estándar que da por definitiva cada distancia mínima extraída?

- A. Pesos de cualquier signo si el grafo no tiene ciclos.
- B. Pesos cuya suma total en el grafo sea no negativa.
- C. Pesos negativos si cada vértice tiene pocos vecinos.
- D. Pesos no negativos en las aristas consideradas. **(correcta)**

Explicación: La garantía usual del Dijkstra estándar, que da por definitiva la distancia mínima extraída, presupone pesos no negativos. Se admite cero. Una arista negativa puede mejorar después un vértice ya cerrado y romper ese razonamiento; la ausencia de ciclos negativos no basta para la garantía de esta versión. Algunas instancias negativas pueden salir bien por casualidad, pero eso no establece corrección general.

- Error A: Un DAG aún puede tener una arista negativa que mejore un vértice ya cerrado. Para DAG existen otros procedimientos basados en su orden.
- Error B: La suma agregada no impide que una arista particular reduzca más tarde una distancia que se dio por definitiva.
- Error C: El número de vecinos no elimina el efecto de una arista de peso negativo sobre esa decisión.

- [NIST DADS: Dijkstra's algorithm](https://xlinux.nist.gov/dads/HTML/dijkstraalgo.html) · Definition: caminos desde un origen y pesos no negativos; Note: implementación de prioridad · versión: Entrada modificada 15-05-2024; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `0866128fb30b8cbce2d69047fb6d9cf777e3941c186f77cc2b3ba20bed4d20ff` · propuesta: `08421b5d5702603ef78099733107964c0fd09d9312386b2de685f3e12e771a69`

## AI-GSI-B3-T05-013

Decisión: pending_review · acción: revise.

Motivo: Conservar dividir/resolver/combinar y clave D; diferenciar estrategias por su mecanismo en lugar de opciones ajenas al tema.

### Antes

¿Qué estrategia divide un problema, resuelve partes y combina resultados?

- A. Búsqueda exhaustiva sin división
- B. Voraz exclusivamente
- C. Encapsulación OO
- D. Divide y vencerás **(correcta)**

Explicación: Merge sort es un ejemplo de división y combinación.

### Propuesta

¿Qué estrategia divide una instancia en subproblemas menores independientes, los resuelve recursivamente y combina los resultados?

- A. Programación dinámica con reutilización de subproblemas solapados.
- B. Estrategia voraz que fija en cada paso una decisión local.
- C. Backtracking que explora y deshace decisiones parciales.
- D. Divide y vencerás con resolución recursiva y combinación. **(correcta)**

Explicación: Divide y vencerás separa una instancia en otras menores, las resuelve y combina sus respuestas. En merge sort se ordenan las mitades y se fusionan. No equivale a cualquier uso de recursión: debe considerarse la descomposición y cómo se obtiene la solución completa. La reutilización de subproblemas repetidos caracteriza el enfoque dinámico; una decisión local irreversible caracteriza el voraz.

- Error A: La característica específica de programación dinámica es aprovechar subproblemas repetidos. No define la descomposición independiente planteada.
- Error B: Fijar una opción local no describe resolver recursivamente las partes y combinar sus respuestas.
- Error C: Explorar y deshacer decisiones busca alternativas; no caracteriza la descomposición en partes independientes descrita.

- [NIST DADS: divide and conquer](https://xlinux.nist.gov/dads/HTML/divideAndConquer.html) · Definition y ejemplos merge sort/quicksort: dividir, resolver recursivamente y combinar · versión: Entrada modificada 14-06-2010; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [NIST DADS: dynamic programming](https://xlinux.nist.gov/dads/HTML/dynamicprog.html) · Definition: reutilizar soluciones de subproblemas; referencia al principio de optimalidad · versión: Entrada modificada 20-04-2022; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [NIST DADS: greedy algorithm](https://xlinux.nist.gov/dads/HTML/greedyalgo.html) · Definition y Note: elección local, garantía global según problema, ejemplos MST · versión: Entrada modificada 02-02-2005; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `4a296ea125e15181454d878d4667b634c0a99c963a988bad63daf755ce4880a7` · propuesta: `78caec6d4b218ef908dbe679940c4e34f0f9af4f0a1dc9159d4e5b219f81c024`

## AI-GSI-B3-T05-014

Decisión: pending_review · acción: revise.

Motivo: Conservar solapamiento/subestructura y clave D; delimitar optimización y contrastar mecanismos cercanos.

### Antes

¿Qué condición justifica programación dinámica?

- A. Una única decisión sin alternativas
- B. Ausencia de repetición de subproblemas obligatoria
- C. Todos los datos ordenados
- D. Subproblemas solapados y subestructura óptima **(correcta)**

Explicación: Memoización o tabulación reutiliza soluciones de subproblemas.

### Propuesta

Al resolver un problema de optimización, ¿qué propiedades permiten aprovechar la programación dinámica reutilizando soluciones de estados?

- A. Poda mediante cotas respecto a una solución incumbente.
- B. Subproblemas independientes que se resuelven una sola vez.
- C. Decisiones locales irrevocables justificadas por una regla voraz.
- D. Subproblemas solapados y subestructura óptima aprovechable. **(correcta)**

Explicación: Para optimización, la programación dinámica aprovecha una formulación con subestructura óptima y subproblemas repetidos cuyos resultados se reutilizan. Memoizar almacena bajo demanda y tabular organiza un cálculo de estados; ambos evitan repetir trabajo si el estado y las dependencias están bien definidos. Ordenar datos o tener recursión no basta. Hay aplicaciones de programación dinámica fuera de optimización; aquí se pregunta por ese ámbito.

- Error A: Las cotas frente a un incumbente caracterizan branch and bound, no la reutilización de estados que se pregunta.
- Error B: Si las partes no se repiten, almacenarlas para evitar repetición no aporta la ventaja específica del solapamiento.
- Error C: La elección local necesita su propia prueba de corrección; no sustituye las dependencias entre estados y su reutilización.

- [NIST DADS: dynamic programming](https://xlinux.nist.gov/dads/HTML/dynamicprog.html) · Definition: reutilizar soluciones de subproblemas; referencia al principio de optimalidad · versión: Entrada modificada 20-04-2022; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [NIST DADS: principle of optimality](https://xlinux.nist.gov/dads/HTML/principle.html) · Definition: componentes óptimos en ciertos problemas de optimización · versión: Entrada modificada 17-12-2004; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `e59b4eb32f5834927251e9ba98ba2ba313d912921649acba059e639ba2578914` · propuesta: `6818409bd9d03289d1f96f5e3228666ec151c7369f1ad6f865764d1527ed0728`

## AI-GSI-B3-T05-015

Decisión: pending_review · acción: revise.

Motivo: Conservar límite de la elección voraz y clave D; contraejemplo mínimo y verificable, sin afirmar que todo método voraz falla.

### Antes

¿Por qué una elección voraz no garantiza siempre el óptimo global?

- A. Porque exige explorar siempre todo el árbol
- B. Porque nunca produce soluciones válidas
- C. Porque prohíbe prioridades
- D. La corrección depende de propiedades del problema **(correcta)**

Explicación: Elegir lo mejor localmente solo es correcto en problemas con propiedades adecuadas.

### Propuesta

Con monedas de valores 1, 3 y 4 y disponibilidad ilimitada, elegir primero la mayor usa 4+1+1 para sumar 6, aunque existe 3+3. ¿Por qué esa regla no garantiza el mínimo número de monedas?

- A. Porque contar decisiones locales equivale a demostrar el mínimo global.
- B. Porque reutilizar resultados elimina la necesidad de probar la elección local.
- C. Porque ordenar las monedas convierte cualquier sistema en canónico.
- D. Porque la elección local necesita propiedades que garanticen el óptimo global. **(correcta)**

Explicación: Elegir la moneda mayor disponible es una regla local. Para 6 con monedas 1, 3 y 4 produce 4+1+1, tres monedas, mientras 3+3 usa dos y es mejor. El contraejemplo basta para negar la garantía universal de esa regla, aunque funcione en otros sistemas de monedas. La corrección voraz requiere propiedades y una demostración apropiadas al problema.

- Error A: Contar pasos de la solución obtenida no demuestra que ninguna alternativa use menos; 3+3 la mejora.
- Error B: Guardar resultados puede servir a otra estrategia, pero no prueba que escoger primero 4 sea seguro.
- Error C: El orden de las denominaciones no cambia este contraejemplo. Un sistema canónico es una propiedad, no el efecto de ordenarlo.

- [NIST DADS: greedy algorithm](https://xlinux.nist.gov/dads/HTML/greedyalgo.html) · Definition y Note: elección local, garantía global según problema, ejemplos MST · versión: Entrada modificada 02-02-2005; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `7a462b31e8174173878c90d41fe31493f0df4e315cc02e9e75852f8b7f5deaf6` · propuesta: `0c6504f441d778af380b5060dd286466f56958bd0e45d27b9ca4e2e4fe3791f7`

## AI-GSI-B3-T05-016

Decisión: pending_review · acción: revise.

Motivo: Conservar poda por cotas y clave A; precisar validez, incumbente y política de empates en optimización.

### Antes

¿Qué utiliza branch and bound para descartar ramas?

- A. Cotas que no permiten superar la mejor solución **(correcta)**
- B. El orden de visita sin estimar soluciones posibles
- C. Una poda basada únicamente en profundidad fija
- D. Elegir siempre la primera solución sin comparar su valor

Explicación: Las cotas permiten podar ramas en problemas de optimización.

### Propuesta

¿Qué utiliza branch and bound para descartar ramas?

- A. Cotas válidas que muestran que una rama no puede mejorar al incumbente. **(correcta)**
- B. El primer valor encontrado en la rama sin acotar sus posibles extensiones.
- C. La profundidad alcanzada por la rama sin relacionarla con el objetivo.
- D. La probabilidad de visitar la rama antes que otra sin comparar sus cotas.

Explicación: Branch and bound conserva la mejor solución factible conocida y usa cotas válidas de lo que una rama podría alcanzar. En minimización, una cota inferior no menor que el valor del incumbente permite podar si solo se necesita un óptimo. Por ejemplo, incumbente 40 y cota inferior 45 no permiten mejora. Si se buscan todos los óptimos, los empates requieren otra política. No basta una estimación sin garantía.

- Error B: Una primera solución parcial no acota necesariamente las mejores extensiones; descartarlas podría perder el óptimo.
- Error C: La profundidad sola no relaciona el valor alcanzable con la mejor solución y no justifica esa poda.
- Error D: El orden de exploración afecta al trabajo y a cuándo se mejora el incumbente; no prueba que una rama no pueda mejorarlo.

- [NIST DADS: branch and bound](https://xlinux.nist.gov/dads/HTML/branchNbound.html) · Definition y Note: incumbente, cotas y descarte de ramas que no pueden mejorar · versión: Entrada modificada 10-02-2020; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `b28748a127dcb78e09062902091ed38cd1f1af584bd358fa7aa1eea389f11e75` · propuesta: `ba5b3518c43c4428260445cc04c98b3d5158602e9656fb3a7e6746016b0115d6`

## AI-GSI-B3-T05-017

Decisión: pending_review · acción: revise.

Motivo: Conservar organización secuencial y clave D; precisar falta de índice/posiciones y evitar confundir acceso del SO con localización lógica.

### Antes

¿Qué organización es adecuada para recorridos completos pero pobre para acceso aleatorio?

- A. Directa/hash
- B. Secuencial indexada como garantía de acceso puramente secuencial
- C. Árbol equilibrado en memoria
- D. Secuencial **(correcta)**

Explicación: El acceso secuencial favorece recorrer registros; índices y acceso directo mejoran localización por clave.

### Propuesta

Un fichero de registros de longitud variable carece de índice y tabla de posiciones. ¿Qué organización favorece recorrerlo completo, pero exige examinar registros para localizar uno por clave?

- A. Organización directa mediante hash de la clave.
- B. Organización secuencial con índice por clave.
- C. Organización relativa por número de registro.
- D. Organización secuencial sin índice de localización. **(correcta)**

Explicación: La organización secuencial permite recorrer los registros en su secuencia, pero sin índice o posiciones auxiliares localizar uno por clave exige examinar registros hasta encontrarlo o agotar el fichero. Se precisan registros de longitud variable para no confundirlo con calcular un desplazamiento fijo conocido. Que un sistema operativo permita seek no proporciona por sí solo un índice lógico por clave. Las otras organizaciones añaden mecanismos de localización.

- Error A: El hash usa la clave para determinar una ubicación y resolver colisiones; no es la ausencia de mecanismo de localización descrita.
- Error B: El índice añade un camino para localizar por clave y cambia la limitación planteada.
- Error C: La organización relativa identifica registros por número y permite acceso directo según su formato; no es un recorrido por clave sin posiciones.

- [Micro Focus: File Organizations](https://www.microfocus.com/documentation/reuze/60d/fhorgs.htm) · Chapter 2: Overview y tabla de acceso; Sequential Files; Relative Files; Indexed Files e Indexed File Access · versión: Documentación histórica ReUZE 6.0, copyright 2009 según pie; texto público leído el 29-10-2026. Se usa para organización lógica, no como recomendación de producto vigente o regla universal del sistema operativo · comprobado: 2026-10-29

Partida: `0aa6d1c792d3e9aae98d539bca1070177112b9f15b62b16c1b5dd4ce21929f0d` · propuesta: `5865e195522dd8db011d59c159dc8026ec3c5d97c056cd653966a1fd97e51ba3`

## AI-GSI-B3-T05-018

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave C: distingue correctamente estabilidad, tiempo y memoria. Añadir explicación por distractor.

### Antes

¿Qué significa que una ordenación sea estable?

- A. Su tiempo siempre está acotado por O(n)
- B. Opera sin memoria auxiliar en todos los casos
- C. Conserva el orden relativo de elementos de igual clave **(correcta)**
- D. Su complejidad no depende del orden inicial de la entrada

Explicación: Estabilidad es una propiedad del orden de empates, distinta de complejidad y fiabilidad operativa.

### Propuesta

¿Qué significa que una ordenación sea estable?

- A. Su tiempo siempre está acotado por O(n)
- B. Opera sin memoria auxiliar en todos los casos
- C. Conserva el orden relativo de elementos de igual clave **(correcta)**
- D. Su complejidad no depende del orden inicial de la entrada

Explicación: La estabilidad conserva en la salida el orden relativo de entrada de los elementos con la misma clave de ordenación. No fija tiempo de ejecución, uso de memoria o sensibilidad a la entrada. Si dos registros empatan por fecha, uno que precedía al otro debe seguir precediéndolo tras una ordenación estable por esa fecha. Los registros con claves distintas se ordenan por el criterio elegido.

- Error A: Un algoritmo estable puede tener coste cuadrático u otro orden; estabilidad no impone cota temporal lineal.
- Error B: La memoria auxiliar es una propiedad distinta: usarla o evitarla no define el orden de los empates.
- Error D: La adaptación al orden inicial afecta al coste. La estabilidad se define por el orden relativo de claves iguales.

- [NIST DADS: stable](https://xlinux.nist.gov/dads/HTML/stable.html) · Definition y ejemplo de claves iguales: conservación de orden relativo · versión: Entrada modificada 17-12-2004; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `4cf3affa440a30cdfd5d756fb04d07f90c2ecbaeea76c143519fe5d88ed55bc6` · propuesta: `c476bbc576cf80f2102e57d385311b292dd9628e791b92e8ee8ce5693ca0124c`

## AI-GSI-B3-T05-019

Decisión: pending_review · acción: revise.

Motivo: Conservar peor caso cuadrático y clave C; sustituir tabla no visible por mecanismo explícito y usar orden ajustado Θ.

### Antes

¿Qué peor caso presenta quicksort según la tabla?

- A. O(n) siempre
- B. O(log n)
- C. O(n²) **(correcta)**
- D. O(1)

Explicación: Su promedio es O(n log n), pero una partición desfavorable puede llevar a O(n²).

### Propuesta

En quicksort clásico, con partición lineal y divisiones reiteradas de tamaños 0 y n−1, ¿cuál es el orden ajustado del peor coste temporal?

- A. Θ(log n).
- B. Θ(n log n).
- C. Θ(n²). **(correcta)**
- D. Θ(n).

Explicación: Con partición lineal y divisiones repetidas en tamaños 0 y n−1, el trabajo se suma como n+(n−1)+…+1 y tiene orden ajustado cuadrático. Ese es el peor caso del quicksort clásico bajo dichas condiciones. El promedio puede ser n log n con supuestos adecuados; aleatorizar no convierte cada ejecución en garantía de ese peor coste. Variantes con pivotes garantizados o introspección modifican el análisis.

- Error A: El logaritmo no incluye el trabajo de particionar los elementos; ni siquiera expresa el coste de una partición lineal grande.
- Error B: n log n corresponde al reparto equilibrado y al promedio habitual bajo sus supuestos, no a esta cadena de particiones extremas.
- Error D: Una partición es lineal, pero aquí hay una sucesión de tamaños decrecientes cuyo trabajo se acumula.

- [NIST DADS: quicksort](https://xlinux.nist.gov/dads/HTML/quicksort.html) · Definition y Note: peor caso Θ(n²), comportamiento habitual y variantes con pivotes garantizados · versión: Entrada modificada 06-04-2023; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [NIST DADS: big-O notation](https://xlinux.nist.gov/dads/HTML/bigOnotation.html) · Formal Definition; Note: cota superior frente a Θ y cotas no ajustadas · versión: Entrada modificada 06-09-2019; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29

Partida: `cca09b0dc85b7d18b507baed020dbfad711cbfb3f8177badbe0951c1892c5a4a` · propuesta: `4af1d34c3a80f3afa5188edcf9945b8555675c8c3e925e37796e3b9a1c2aa33d`

## AI-GSI-B3-T05-020

Decisión: pending_review · acción: revise.

Motivo: Conservar sobreajuste y clave C; precisar evaluación independiente y comparable con distractores de aprendizaje próximos.

### Antes

Un modelo ajusta muy bien entrenamiento y generaliza mal. ¿Qué fenómeno indica?

- A. Ordenación estable
- B. Normalización relacional
- C. Overfitting **(correcta)**
- D. Compilación AOT

Explicación: El sobreajuste describe aprendizaje demasiado específico del conjunto de entrenamiento.

### Propuesta

Un modelo ajusta muy bien entrenamiento y rinde mal en datos independientes de la misma distribución, sin fuga de evaluación. ¿Qué fenómeno describe este patrón?

- A. Subajuste por incapacidad para aprender la estructura de entrenamiento.
- B. Cambio de distribución confirmado entre los dos conjuntos evaluados.
- C. Sobreajuste del modelo a particularidades del entrenamiento. **(correcta)**
- D. Fuga del conjunto de evaluación hacia el proceso de entrenamiento.

Explicación: Un ajuste muy bueno al entrenamiento y malo a datos independientes de la misma distribución es el patrón descrito de sobreajuste: el modelo captura particularidades que no generalizan. El diagnóstico no significa que la causa única sea la complejidad ni demuestra por sí solo qué remedio funcionará. Se revisan curvas y procedimiento de evaluación; aquí se descartan cambio de distribución y fuga para no confundir fenómenos.

- Error A: El subajuste suele impedir un buen ajuste incluso al entrenamiento; contradice la diferencia descrita.
- Error B: El caso fija la misma distribución; no aporta evidencia de un cambio de distribución confirmado.
- Error D: Se excluye fuga de evaluación. Esta puede invalidar la medición, pero no es el fenómeno especificado.

- [Google Machine Learning Crash Course: Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting) · Definición; Fitting, overfitting, and underfitting; Detecting overfitting; Generalization conditions · versión: Página actualizada 03-12-2025 según pie, leída el 29-10-2026. Texto, sin inspección visual de figuras o entrenamiento de modelos; se controlan distribución y evaluación para interpretar el diagnóstico · comprobado: 2026-10-29

Partida: `43496478cc2268fc16c09f4767cf76304dd75dd0d9a846dab1d5ca6bf898c457` · propuesta: `d3bd653d8b53432367fb5ce9f4d24fd4ec8929a5685c2747b23d054ae07bfaea`

## AI-GSI-B3-T05-012

Decisión: pending_review · acción: revise.

Motivo: Conservar Bellman-Ford y clave D; eliminar referencia al tema y explicitar origen, finitud y ciclos alcanzables.

### Antes

¿Qué algoritmo del tema admite aristas de peso negativo?

- A. Búsqueda lineal de arrays
- B. Dijkstra estándar
- C. Heap sort
- D. Bellman-Ford **(correcta)**

Explicación: Bellman-Ford aborda pesos negativos; no implica que todo problema con ciclos negativos tenga solución finita.

### Propuesta

Para caminos mínimos desde un origen en un grafo dirigido con aristas negativas y sin ciclos negativos alcanzables, ¿qué algoritmo ofrece la garantía habitual?

- A. Dijkstra estándar con distancias cerradas al extraer el mínimo.
- B. BFS sin considerar los pesos de las aristas.
- C. Prim para obtener un árbol de expansión mínima.
- D. Bellman-Ford con relajaciones sucesivas de aristas. **(correcta)**

Explicación: Bellman-Ford calcula distancias desde un origen admitiendo aristas negativas y puede detectar ciclos negativos alcanzables. Si un ciclo negativo es alcanzable y permite llegar a un destino, no existe un mínimo finito para ese destino: se puede reducir el coste repitiendo el ciclo. No basta sumar pesos ignorando esa condición. Dijkstra estándar exige no negatividad para su garantía; BFS y Prim resuelven otros problemas.

- Error A: La garantía del Dijkstra estándar con cierre definitivo no cubre pesos negativos; una mejora posterior puede invalidar un vértice cerrado.
- Error B: BFS minimiza número de aristas cuando el coste es uniforme, no la suma de pesos negativos y positivos.
- Error C: Prim busca un árbol de expansión de peso total mínimo en el contexto apropiado; no distancias desde un origen.

- [NIST DADS: Bellman-Ford algorithm](https://xlinux.nist.gov/dads/HTML/bellmanford.html) · Definition: relajaciones, pesos negativos y detección de ciclos negativos; coste O(VE) · versión: Entrada modificada 11-02-2019; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [NIST DADS: Dijkstra's algorithm](https://xlinux.nist.gov/dads/HTML/dijkstraalgo.html) · Definition: caminos desde un origen y pesos no negativos; Note: implementación de prioridad · versión: Entrada modificada 15-05-2024; texto primario público leído el 29-10-2026. La fecha de formato HTML no se convierte en nueva edición conceptual · comprobado: 2026-10-29
- [MIT 6.006: Lecture 13, Graphs I, Breadth First Search](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/1208e162775f6f5cedfbb9f2b694ede0_MIT6_006F11_lec13.pdf) · Páginas impresas 4–6: niveles desde s, algoritmo y Shortest Paths por número de aristas · versión: Fall 2011, PDF de 7 páginas leído textualmente el 29-10-2026; no se inspeccionan figuras ni se atribuye vídeo visto · comprobado: 2026-10-29

Partida: `25b789f02bc99a66f74aab2877aeb498699fc88782a3303fee1c77b882b723e5` · propuesta: `7211b402e92f710824ce68d58a7186682790d761ee5269a25753eb9c0ab08d41`
