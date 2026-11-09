# GSI-EDITORIAL-028 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `b40fbb8e3973092929dd34f3586ed293f6720277411a15a7c97d34482ff55771`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T05-005

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas, suficientes para distinguir concesión de privilegios; completar alcance y tres explicaciones sin alargar opciones.

### Antes

¿Qué función corresponde conceptualmente a GRANT?

- A. Crear índices
- B. Conceder privilegios **(correcta)**
- C. Agrupar filas
- D. Confirmar transacciones

Explicación: GRANT pertenece al control de privilegios; no agrupa datos ni confirma unidades de trabajo.

### Propuesta

¿Qué función corresponde conceptualmente a GRANT?

- A. Crear índices
- B. Conceder privilegios **(correcta)**
- C. Agrupar filas
- D. Confirmar transacciones

Explicación: GRANT concede privilegios sobre objetos; también puede conceder pertenencia a roles según la variante. El concepto preguntado es autorización de acceso. Conceder un privilegio no crea un índice, no agrupa resultados ni sustituye la confirmación de una transacción.

- Error A: La creación de índices define estructuras de acceso mediante CREATE INDEX. Tener permiso para hacerlo no crea el índice.
- Error C: GROUP BY agrupa filas para una consulta. GRANT determina autorizaciones, no la organización del resultado.
- Error D: COMMIT confirma la transacción actual. Ejecutar GRANT no sustituye esa operación de control transaccional.

- [PostgreSQL 18: GRANT](https://www.postgresql.org/docs/18/sql-grant.html) · Description; GRANT on Database Objects: privilegios y variante de pertenencia a roles · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `57b346507523f962bb97406c6c9727d3d2407d65171f51a332140568188547e5` · propuesta: `4c720f900cdbdd06a48bd8e291a5c2fbfb655fc0c6a4d3aab2eb4c76c14fd7a8`

## AI-GSI-B2-T05-006

Decisión: pending_review · acción: revise.

Motivo: Conservar definición y clave D; precisar minimalidad por inclusión frente a superclave y mínimo global de atributos.

### Antes

¿Qué propiedad define una clave candidata?

- A. Cualquier conjunto que contenga la clave más atributos redundantes
- B. Cualquier referencia a otra tabla
- C. Toda columna que admita NULL
- D. Identificación única con un conjunto mínimo de atributos **(correcta)**

Explicación: La minimalidad distingue una candidata de un superconjunto redundante de atributos identificadores.

### Propuesta

En el modelo relacional, ¿qué caracteriza a una clave candidata?

- A. Identificar filas de forma única aunque sobren atributos.
- B. Vincular filas mediante una referencia a otra relación.
- C. Contener menos atributos que cualquier otra clave posible.
- D. Identificar filas sin que sobre ninguno de sus atributos. **(correcta)**

Explicación: En el modelo relacional, una candidata es una superclave mínima por inclusión: identifica de forma única y ningún subconjunto propio conserva esa propiedad. Mínima no significa tener menos atributos que todas las demás candidatas. Puede haber una candidata simple y otra compuesta mínima. La unicidad debe derivarse de las restricciones del dominio, no de una coincidencia en la muestra de datos.

- Error A: La unicidad con atributos redundantes define una superclave que no es mínima. Al quitar el atributo sobrante seguiría identificando.
- Error B: Una referencia entre relaciones corresponde a una clave foránea. Por sí sola no exige identificar cada fila de la relación que referencia.
- Error C: Puede haber candidatas de distinto tamaño. Se exige que no sobre un atributo dentro de la candidata, no que sea la de menor cardinalidad entre todas.

- [Adrienne Watt: Database Design, second edition, Chapter 8 The Entity Relationship Data Model](https://opentextbc.ca/dbdesign01/chapter/chapter-8-entity-relationship-model/) · Types of Keys, Candidate key: unicidad y necesidad de cada atributo; Primary key y Alternate key · versión: Segunda edición; solo definición de candidata. No se adopta la restricción simplificada del apartado Foreign key a referencias a la primaria · comprobado: 2026-10-28

Partida: `2904414639d53e7238d79bf4a47d90baac1255a46fce7334a4c84d7af08f6851` · propuesta: `db0c95c85ce7918450bac7fe1c2e972ff35a287afbc2798caeb384c9bcc51999`

## AI-GSI-B2-T05-007

Decisión: pending_review · acción: revise.

Motivo: Conservar integridad referencial y clave A; comparar restricciones cercanas y distinguir relación consultada de referencia exigida.

### Antes

¿Qué mecanismo expresa una referencia entre relaciones para preservar integridad referencial?

- A. Clave foránea **(correcta)**
- B. Índice de texto libre por sí solo
- C. Alias de consulta
- D. Orden físico de filas

Explicación: La clave foránea materializa referencias; orden e índices no sustituyen esa restricción.

### Propuesta

¿Qué mecanismo expresa una referencia entre relaciones para preservar integridad referencial?

- A. Una restricción FOREIGN KEY sobre columnas relacionadas. **(correcta)**
- B. Una restricción UNIQUE sobre columnas de la tabla hija.
- C. Una restricción NOT NULL sobre las columnas de enlace.
- D. Una condición de JOIN escrita en las consultas de lectura.

Explicación: FOREIGN KEY expresa y hace cumplir una referencia entre filas: los valores sujetos a la comprobación deben encontrar una clave referenciada admisible. No se limita necesariamente a la clave primaria; PostgreSQL admite determinadas claves únicas. El tratamiento de NULL depende de la nulabilidad y del modo de correspondencia. La referencia puede apuntar a la misma tabla y no obliga a crear automáticamente un índice en las columnas hijas.

- Error B: UNIQUE impide duplicados según sus reglas en la propia tabla. No exige que los valores existan en otra relación.
- Error C: NOT NULL evita la ausencia de valor. Un valor no nulo todavía podría referirse a una fila inexistente.
- Error D: Un JOIN relaciona datos al consultar. Sin una restricción referencial, no impide que una escritura introduzca una referencia inválida.

- [PostgreSQL 18: 5.5 Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) · 5.5.3 Unique Constraints; 5.5.4 Primary Keys; 5.5.5 Foreign Keys: referencias, claves únicas y tratamiento de nulos · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `32c03462e2ae2a22fa72921e2b9d68bf7905135b4118d4dfc7f1856ccd551718` · propuesta: `fe5b2027f973acc335bae04cc9c9a0679c0456d33466b576b9475459c98f90cf`

## AI-GSI-B2-T05-008

Decisión: pending_review · acción: revise.

Motivo: Conservar filtrado de agregados y clave A; microcaso de ventas y nivel de consulta explícito, sin el distractor absoluto WHERE exclusivamente.

### Antes

Para filtrar grupos según una agregación, ¿qué cláusula corresponde?

- A. HAVING **(correcta)**
- B. FROM
- C. ORDER BY
- D. WHERE exclusivamente

Explicación: WHERE filtra filas antes de agrupar; HAVING filtra grupos.

### Propuesta

Una consulta agrupa ventas por departamento y calcula SUM(importe). En ese mismo nivel, ¿qué cláusula conserva los grupos cuyo total supera 10.000?

- A. HAVING. **(correcta)**
- B. FROM.
- C. ORDER BY.
- D. WHERE.

Explicación: HAVING filtra los grupos usando su total agregado, por ejemplo HAVING SUM(importe) > 10000. WHERE filtra las filas de entrada antes de esa agrupación, FROM determina las fuentes y ORDER BY ordena el resultado. Es una explicación de la semántica de la consulta, no una imposición del orden físico de ejecución del optimizador.

- Error B: FROM establece tablas o relaciones de entrada. No aplica el predicado al total agregado de cada grupo.
- Error C: ORDER BY decide el orden de presentación. Ordenar por el total no elimina los grupos que incumplen el umbral.
- Error D: WHERE filtra filas antes de la agrupación del mismo nivel. No admite ahí SUM(importe) como filtro del grupo; una consulta exterior sería otro nivel.

- [PostgreSQL 18: 7.2 Table Expressions](https://www.postgresql.org/docs/18/queries-table-expressions.html) · 7.2.1.1 Joined Tables, tipos y ejemplos; 7.2.2 WHERE; 7.2.3 GROUP BY y HAVING · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `2688f6e01c42c9c6b2bc55b1da56d3fab995e6010261176185c03fb26adcd7ac` · propuesta: `d0ec331f2120a1763ee9200ef661ce0d34d44f174dfe8acdac7d3754c0d2cd8f`

## AI-GSI-B2-T05-009

Decisión: pending_review · acción: revise.

Motivo: Conservar LEFT JOIN y clave C; definir lados, condición ON y exclusión de huérfanos de la derecha para evitar que FULL sea también defendible.

### Antes

Se necesitan todos los clientes, incluidos los que carecen de pedidos. Con clientes a la izquierda, ¿qué join corresponde?

- A. INNER JOIN
- B. RIGHT JOIN que conserve solo pedidos
- C. LEFT OUTER JOIN **(correcta)**
- D. CROSS JOIN

Explicación: LEFT conserva todas las filas izquierdas y completa con NULL cuando no hay coincidencia.

### Propuesta

Clientes está a la izquierda y pedidos a la derecha. Con ON pedidos.cliente_id = clientes.id y sin filtros posteriores, se quieren todos los clientes y sus pedidos coincidentes, pero no pedidos sin cliente. ¿Qué JOIN corresponde?

- A. INNER JOIN.
- B. RIGHT OUTER JOIN.
- C. LEFT OUTER JOIN. **(correcta)**
- D. FULL OUTER JOIN.

Explicación: LEFT OUTER JOIN conserva todos los clientes de la izquierda y añade los pedidos coincidentes según ON. Si un cliente no tiene pedidos, las columnas de la derecha se completan con NULL. No incorpora filas de pedidos sin cliente coincidente. Un cliente con varios pedidos puede producir varias filas: conservar todos los clientes no significa devolver exactamente una fila por cliente.

- Error A: INNER JOIN conserva coincidencias. Eliminaría los clientes sin pedidos y no satisface la conservación de la izquierda.
- Error B: RIGHT OUTER JOIN conserva todos los pedidos de la derecha. No garantiza incluir clientes sin pedidos.
- Error D: FULL OUTER JOIN conserva ambos lados. También incluiría pedidos sin cliente coincidente, que el caso excluye expresamente.

- [PostgreSQL 18: 7.2 Table Expressions](https://www.postgresql.org/docs/18/queries-table-expressions.html) · 7.2.1.1 Joined Tables, tipos y ejemplos; 7.2.2 WHERE; 7.2.3 GROUP BY y HAVING · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `7d45f73a335ba72d86e63033b726c41466d4b3c8728ac8ff5d4ae5f6c6f6bc53` · propuesta: `f7787402f038ea55e4a80dfd8088fd1f780a9789cedd8c0e997cd72547cbb54d`

## AI-GSI-B2-T05-010

Decisión: pending_review · acción: revise.

Motivo: Conservar multiplicidad y clave D; sustituir distractores ajenos por errores sobre duplicados y orden, sin promesa de rendimiento.

### Antes

¿Qué diferencia UNION ALL de UNION?

- A. Exige confirmar la transacción
- B. Elimina siempre todos los duplicados
- C. Ordena obligatoriamente por todas las columnas
- D. Conserva duplicados **(correcta)**

Explicación: UNION elimina duplicados; UNION ALL los conserva.

### Propuesta

¿Qué diferencia UNION ALL de UNION?

- A. Elimina las filas que se repiten en un mismo resultado.
- B. Elimina las filas coincidentes entre ambos resultados.
- C. Ordena las filas por todas las columnas proyectadas.
- D. Conserva la multiplicidad de filas de ambos resultados. **(correcta)**

Explicación: UNION ALL combina resultados compatibles sin la eliminación de duplicados propia de UNION. Una misma fila puede aparecer varias veces tanto dentro de una entrada como entre ambas. La compatibilidad exige igual número de columnas y tipos compatibles en posiciones correspondientes. Ninguna variante garantiza por sí sola el orden de presentación; para pedirlo se usa ORDER BY.

- Error A: UNION ALL no elimina duplicados internos de cada entrada. Esas repeticiones también forman parte del resultado combinado.
- Error B: Eliminar duplicados entre entradas corresponde al comportamiento de UNION sin ALL. ALL conserva sus apariciones.
- Error C: Un plan concreto puede ordenar internamente por diversos motivos, pero eso no es la diferencia semántica ni una garantía de orden.

- [PostgreSQL 18: 7.4 Combining Queries](https://www.postgresql.org/docs/18/queries-union.html) · UNION y UNION ALL; compatibilidad de columnas, duplicados y ausencia de orden garantizado · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `113599b258575325d9eff70c370b78c076d6ccc3e87c468f9f9bce0fa3a738b9` · propuesta: `7ea924a573121588800f690fa937ec434ca0b89c2ea75f36866f8db5c042c104`

## AI-GSI-B2-T05-011

Decisión: pending_review · acción: revise.

Motivo: Conservar existencia de filas y clave C; discriminar cardinalidad, nulos y unicidad sin reducirlo a un detalle de implementación.

### Antes

¿Qué comprueba EXISTS en una subconsulta?

- A. La confirmación de la transacción
- B. El número exacto de columnas de una tabla física
- C. La existencia de filas **(correcta)**
- D. La unicidad global de todas las claves

Explicación: EXISTS comprueba existencia; no implica un recuento exacto ni una restricción de unicidad.

### Propuesta

¿Qué comprueba EXISTS en una subconsulta?

- A. Que la subconsulta devuelva exactamente una fila.
- B. Que alguna columna de salida contenga un valor no nulo.
- C. Que la subconsulta produzca al menos una fila. **(correcta)**
- D. Que todas las filas de salida tengan valores distintos.

Explicación: EXISTS evalúa si la subconsulta produce alguna fila: da verdadero con una o más y falso con cero. No compara el número de filas con uno ni exige valores no nulos en la proyección. Por ejemplo, una fila que proyecte NULL sigue siendo una fila. No se debe depender de que la subconsulta se evalúe por completo ni usar efectos laterales como contrato de evaluación.

- Error A: EXISTS también es verdadero con varias filas. No expresa la cardinalidad exacta que exigiría una subconsulta escalar.
- Error B: El predicado comprueba presencia de filas. Una fila con NULL en su salida basta; no comprueba la ausencia de nulos.
- Error D: Los valores repetidos no hacen falso EXISTS. Unicidad y presencia son condiciones diferentes.

- [PostgreSQL 18: 9.24 Subquery Expressions](https://www.postgresql.org/docs/18/functions-subquery.html) · 9.24.1 EXISTS: al menos una fila frente a conjunto vacío y límites de evaluación de la subconsulta · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `a0497778c994bd16f4292fd99735452530d2ff61262050881d0ac5cce67869ed` · propuesta: `02471bcc0786a190f58190f8cb0a232bd10e5b0a33519918d2a11d69a835027f`

## AI-GSI-B2-T05-012

Decisión: pending_review · acción: revise.

Motivo: Conservar coste de escritura y clave C; acotar datos afectados y evitar afirmar mantenimiento idéntico en toda actualización.

### Antes

¿Qué coste puede introducir un índice además del espacio?

- A. Pérdida obligatoria de durabilidad
- B. Prohibición de joins
- C. Mantenimiento adicional en escrituras **(correcta)**
- D. Eliminación de todas las restricciones

Explicación: Los índices favorecen determinadas lecturas, pero deben mantenerse al modificar datos.

### Propuesta

¿Qué coste puede introducir un índice además del espacio?

- A. Ordenar físicamente la tabla tras cada modificación.
- B. Forzar que las consultas recorran el índice añadido.
- C. Mantener el índice cuando cambian sus datos asociados. **(correcta)**
- D. Recalcular una vista agregada por cada fila modificada.

Explicación: El índice debe mantenerse coherente con los datos que representa. Insertar, borrar o modificar valores que afectan a él puede añadir trabajo de escritura, además del espacio ocupado. La magnitud depende del índice, del motor y del cambio: no toda actualización exige el mismo mantenimiento. Su existencia tampoco obliga al optimizador a usarlo ni garantiza que compense su coste.

- Error A: Añadir un índice no implica reordenar físicamente toda la tabla en cada escritura. Confunde estructura de acceso con una política universal de organización.
- Error B: El optimizador puede preferir otro acceso, incluido un recorrido secuencial. El índice disponible no impone su uso.
- Error D: Una vista agregada materializada es otro objeto. Añadir un índice no implica crearla ni recalcularla para cada cambio.

- [PostgreSQL 18: 11.1 Introduction](https://www.postgresql.org/docs/18/indexes-intro.html) · Búsqueda mediante índices, elección del plan y párrafo final sobre sincronización y coste de modificaciones · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `ed82e18df436f4fa32b932645d694c34a7504c52e571843d48e89961c2d93f72` · propuesta: `1d9619fe42b3d6231203e6a292e320d269533750b8001c46cf3bb3f04134bec1`

## AI-GSI-B2-T05-014

Decisión: pending_review · acción: revise.

Motivo: Conservar transferencia, concepto y clave C; las cuatro propiedades ACID son alternativas plausibles y el alcance es una misma transacción.

### Antes

Una transferencia debe aplicar ambos movimientos o ninguno. ¿Qué propiedad ACID expresa?

- A. Aislamiento exclusivamente
- B. Selectividad
- C. Atomicidad **(correcta)**
- D. Durabilidad

Explicación: La atomicidad evita resultados parciales dentro de una transacción.

### Propuesta

Una transferencia incluye cargo y abono en una misma transacción. Deben aplicarse ambos movimientos o ninguno. ¿Qué propiedad ACID expresa esa exigencia?

- A. Aislamiento.
- B. Consistencia.
- C. Atomicidad. **(correcta)**
- D. Durabilidad.

Explicación: La atomicidad exige que los movimientos incluidos en una misma transacción se apliquen en conjunto o se deshagan si no puede completarse. Así se evita conservar solo el cargo o solo el abono. El caso pregunta por la unidad de ejecución; no afirma que una transacción local revierta cualquier efecto externo o varias transacciones independientes.

- Error A: El aislamiento regula la interferencia y visibilidad entre transacciones concurrentes. No es el nombre de la garantía todo o nada.
- Error B: La consistencia se refiere a preservar las reglas o invariantes al pasar entre estados válidos. El mecanismo concreto preguntado es la unidad indivisible de ambos movimientos.
- Error D: La durabilidad protege los efectos ya confirmados frente a los fallos contemplados. No identifica la indivisibilidad previa de los movimientos.

- [PostgreSQL 18: 3.4 Transactions](https://www.postgresql.org/docs/18/tutorial-transactions.html) · Ejemplo de transferencia: todo o nada; persistencia tras confirmación; BEGIN, COMMIT y ROLLBACK · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `c01bc29c1cb2429276148d4588704abacbdfcf48e1b42a96c9074e13d0cb0025` · propuesta: `26f8343f5b4ce7343f1ca5f3a070d2439a08b880a06dac659108fc6e6d03dfbb`

## AI-GSI-B2-T05-015

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas, que ya acotan fallos contemplados; completar condiciones reales de durabilidad y distractores.

### Antes

Tras COMMIT, los cambios sobreviven a los fallos contemplados. ¿Qué propiedad es?

- A. Atomicidad
- B. Aislamiento
- C. Consistencia
- D. Durabilidad **(correcta)**

Explicación: La durabilidad garantiza persistencia tras confirmación; la atomicidad regula el todo o nada.

### Propuesta

Tras COMMIT, los cambios sobreviven a los fallos contemplados. ¿Qué propiedad es?

- A. Atomicidad
- B. Aislamiento
- C. Consistencia
- D. Durabilidad **(correcta)**

Explicación: La durabilidad protege la persistencia de los cambios una vez confirmada la transacción frente a los fallos incluidos en el modelo y la configuración de garantía. No es inmunidad a cualquier desastre ni sustituye copias de seguridad. La fiabilidad del almacenamiento y las opciones de sincronización importan para que la garantía se cumpla realmente.

- Error A: La atomicidad trata la unidad todo o nada de la transacción. Persistir tras la confirmación es una propiedad distinta.
- Error B: El aislamiento regula interacciones de operaciones concurrentes. No define cuánto sobreviven los resultados confirmados.
- Error C: La consistencia relaciona estados válidos con reglas e invariantes. No nombra la permanencia de efectos tras un fallo contemplado.

- [PostgreSQL 18: 3.4 Transactions](https://www.postgresql.org/docs/18/tutorial-transactions.html) · Ejemplo de transferencia: todo o nada; persistencia tras confirmación; BEGIN, COMMIT y ROLLBACK · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28
- [PostgreSQL 18: 28.1 Reliability](https://www.postgresql.org/docs/18/wal-reliability.html) · Introducción y capas de caché: persistencia real dependiente de configuración y almacenamiento fiable · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `dce8d69f7c5ea72e757cfd22e5fb0f99280f0a377fa62b4e9d0c9ee6b33a02d5` · propuesta: `043f5cf85558ab4d654d9bc0e9444f79c63a02d3e18a64a2789728e2279dab5e`

## AI-GSI-B2-T05-017

Decisión: pending_review · acción: revise.

Motivo: Conservar Read Committed y clave A; comparar cuatro niveles reales y separar estándar mínimo de mapeos de motor.

### Antes

En el modelo clásico, ¿qué nivel evita lecturas sucias pero puede permitir no repetibles?

- A. Read Committed **(correcta)**
- B. Serializable
- C. Ausencia total de transacciones
- D. Read Uncommitted

Explicación: Read Committed exige datos confirmados, pero no garantiza estabilidad de una fila entre lecturas.

### Propuesta

Según las garantías mínimas de los niveles del estándar SQL, ¿cuál impide lecturas sucias, pero permite lecturas no repetibles?

- A. Read Committed. **(correcta)**
- B. Serializable.
- C. Repeatable Read.
- D. Read Uncommitted.

Explicación: En las garantías mínimas del estándar, Read Committed impide leer cambios de otras transacciones aún no confirmados, pero permite que una lectura posterior observe modificaciones confirmadas entre ambas. Repeatable Read prohíbe también las lecturas no repetibles. Un motor puede ofrecer garantías más fuertes: PostgreSQL hace que Read Uncommitted se comporte como Read Committed. Por eso el enunciado fija el modelo mínimo, no cualquier implementación.

- Error B: Serializable exige un efecto equivalente a algún orden serial y prohíbe las anomalías indicadas. Es más fuerte que el nivel descrito.
- Error C: Repeatable Read prohíbe lecturas no repetibles en la tabla del estándar. No coincide con permitirlas.
- Error D: Las garantías mínimas de Read Uncommitted permiten lecturas sucias. Que un motor lo implemente con garantías superiores no cambia esa clasificación.

- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones de dirty read, nonrepeatable read y phantom read; tabla 13.1 y párrafos sobre garantías mínimas y mapeo de niveles · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `f249b44eb2aa7e71764225d98897d0d0e44e1fe7b0d6bbcee8a768a999609f65` · propuesta: `f86a1fc90b6bec8d9df346ac8b0b0fab3411bcded88a385c958517e60a0d03be`

## AI-GSI-B2-T05-001

Decisión: pending_review · acción: revise.

Motivo: Conservar nivel externo y clave A; preguntar por su descripción y eliminar la duplicación de interno/físico entre distractores.

### Antes

¿Qué nivel ANSI/SPARC representa las vistas particulares de usuarios y aplicaciones?

- A. Externo **(correcta)**
- B. Conceptual
- C. Interno
- D. Físico de páginas

Explicación: El nivel externo adapta vistas; el conceptual describe el modelo global y el interno el almacenamiento.

### Propuesta

En la arquitectura de tres niveles ANSI/SPARC, ¿qué describe el nivel externo?

- A. Las vistas de datos propias de usuarios o aplicaciones. **(correcta)**
- B. La descripción global de datos y restricciones comunes.
- C. Las estructuras de almacenamiento y caminos de acceso.
- D. La secuencia de operaciones de las reglas de negocio.

Explicación: El nivel externo representa las vistas particulares de usuarios o aplicaciones y se relaciona con el esquema conceptual. Puede haber varios esquemas externos y pueden contener datos derivados, no solo subconjuntos de columnas. El conceptual describe globalmente los datos y el interno su almacenamiento. La lógica de negocio de una aplicación no constituye un cuarto nivel de esta arquitectura.

- Error B: La descripción global corresponde al nivel conceptual. No es una vista particular adaptada a un usuario o aplicación.
- Error C: El almacenamiento y los caminos de acceso corresponden al nivel interno. No describen la vista externa.
- Error D: La secuencia de operaciones pertenece al comportamiento de la aplicación. ANSI/SPARC organiza esquemas de datos, no define un cuarto nivel de lógica de negocio.

- [University of Cape Town: Database Systems, Chapter 1](https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html) · ANSI/SPARC three-level architecture; The external schema; The conceptual schema; The internal schema; Logical data independence · versión: Material docente primario de la universidad, sin versión visible. Para independencia física se usa The internal schema: cambio de almacenamiento sin cambiar conceptual/externo. Se excluye la frase contradictoria de Physical data independence que dice not transparent · comprobado: 2026-10-28

Partida: `e59f3fc09571109a30556f6b0979bc5130bfb929581cde5c39ba8772e4581736` · propuesta: `f50b04faff9f04588ba63cdea05e16cba4f086f4a2b618c3dc42cd637f89a596`

## AI-GSI-B2-T05-002

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente el microcaso de índices y las cuatro alternativas; completar mapeos y diferencia con independencia lógica.

### Antes

Cambiar índices sin modificar el esquema conceptual ilustra independencia…

- A. Referencial
- B. Transaccional
- C. Lógica
- D. Física **(correcta)**

Explicación: La independencia física separa almacenamiento y modelo conceptual; la lógica separa este de las vistas externas.

### Propuesta

Cambiar índices sin modificar el esquema conceptual ilustra independencia…

- A. Referencial
- B. Transaccional
- C. Lógica
- D. Física **(correcta)**

Explicación: La independencia física permite modificar el almacenamiento o los caminos de acceso, como índices, manteniendo estable el esquema conceptual. Los mapeos entre niveles pueden tener que adaptarse. Independencia no significa ausencia de trabajo técnico ni rendimiento invariable. La independencia lógica se refiere a cambios conceptuales que no obligan a alterar las vistas externas o las aplicaciones afectadas por esos mapeos.

- Error A: La integridad referencial trata referencias válidas entre relaciones. No es el desacoplamiento entre almacenamiento y esquema conceptual.
- Error B: Las propiedades transaccionales se refieren a la ejecución de operaciones. No denominan la independencia entre esos niveles de esquema.
- Error C: La independencia lógica afecta al vínculo entre esquema conceptual y vistas externas. El caso mantiene el conceptual y cambia el acceso físico.

- [University of Cape Town: Database Systems, Chapter 1](https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html) · ANSI/SPARC three-level architecture; The external schema; The conceptual schema; The internal schema; Logical data independence · versión: Material docente primario de la universidad, sin versión visible. Para independencia física se usa The internal schema: cambio de almacenamiento sin cambiar conceptual/externo. Se excluye la frase contradictoria de Physical data independence que dice not transparent · comprobado: 2026-10-28
- [PostgreSQL 18: 11.1 Introduction](https://www.postgresql.org/docs/18/indexes-intro.html) · Búsqueda mediante índices, elección del plan y párrafo final sobre sincronización y coste de modificaciones · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `d98edc55626cf9c0066c51788b71cc04b04361323644c6d9c3e2f7e67a22aec0` · propuesta: `3be2c909c4318793fcc6df17178940730aaba217f5d8c4bd2891ab3041a45793`

## AI-GSI-B2-T05-013

Decisión: pending_review · acción: revise.

Motivo: Conservar persistencia de resultados y clave B; comparar plan, vista ordinaria e índice y explicitar refresco dependiente del motor.

### Antes

¿Qué distingue una vista materializada?

- A. Equivale a cualquier índice hash
- B. Persiste resultados según los mecanismos del motor **(correcta)**
- C. Siempre contiene solo el texto de la consulta sin resultados
- D. Es necesariamente una clave foránea

Explicación: Una vista ordinaria es una consulta con nombre; materializar persiste sus resultados bajo un mecanismo de actualización.

### Propuesta

¿Qué distingue una vista materializada?

- A. Guardar el plan de ejecución de una consulta reutilizable.
- B. Guardar resultados de una consulta para su lectura posterior. **(correcta)**
- C. Guardar la definición de una consulta sin persistir su resultado.
- D. Guardar claves de búsqueda para localizar filas de una tabla.

Explicación: Una vista materializada persiste resultados de la consulta, de modo que puede consultarse ese contenido almacenado. Debe existir algún mecanismo de actualización o refresco, cuyo comportamiento depende del motor y de su configuración. En PostgreSQL se documenta REFRESH MATERIALIZED VIEW y los datos pueden estar desactualizados. Persistir resultados no garantiza actualización inmediata ni mejor rendimiento para cualquier carga.

- Error A: Un plan describe cómo ejecutar una consulta. Guardarlo no equivale a conservar las filas calculadas por ella.
- Error C: Describe la distinción habitual de una vista ordinaria: definición consultable sin persistencia propia del conjunto de resultados. No caracteriza la materialización.
- Error D: Un índice conserva una estructura de acceso. Puede añadirse a ciertos objetos, pero no es por sí solo una vista de resultados materializados.

- [PostgreSQL 18: 39.3 Materialized Views](https://www.postgresql.org/docs/18/rules-materializedviews.html) · Introducción y ejemplo REFRESH MATERIALIZED VIEW: resultados persistidos, consulta y posible desactualización · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `6dd92f6d39e0392c70faf3de7f0fe00ccb743e0e8645d30b4d0dc094c9b92503` · propuesta: `4b1c7996c72ae43ddfc916cdbcbad8d61740dddff3bbe5d47faee9e29ea50ca2`

## AI-GSI-B2-T05-016

Decisión: pending_review · acción: revise.

Motivo: Conservar anomalía y clave A; ejemplo breve con otra transacción sin COMMIT y cuatro fenómenos de concurrencia próximos.

### Antes

Leer cambios de otra transacción todavía no confirmada es…

- A. Lectura sucia **(correcta)**
- B. Una proyección
- C. Un bloqueo exclusivo
- D. Lectura fantasma exclusivamente

Explicación: La lectura sucia accede a datos no confirmados, a diferencia de cambios ya confirmados entre lecturas.

### Propuesta

T1 modifica un saldo y aún no confirma. T2 lee ese saldo modificado antes del COMMIT de T1. ¿Qué anomalía describe la observación?

- A. Una lectura sucia. **(correcta)**
- B. Una lectura no repetible.
- C. Una lectura fantasma.
- D. Una actualización perdida.

Explicación: La lectura sucia ocurre cuando una transacción lee cambios de otra transacción que todavía no ha confirmado. Esos cambios podrían deshacerse y nunca formar parte del estado confirmado. Leer los propios cambios sin confirmar no constituye esta anomalía. El caso describe una observación posible bajo ciertas garantías, no afirma que cualquier motor o nivel la permita.

- Error B: La lectura no repetible compara dos lecturas de un dato entre las que otra transacción confirma una modificación. Aquí lo decisivo es leer un cambio ajeno sin confirmar.
- Error C: La lectura fantasma compara conjuntos que cumplen una condición entre consultas repetidas. No es la lectura de un valor ajeno aún no confirmado.
- Error D: La actualización perdida implica que una escritura sobrescribe o pierde el efecto de otra actualización. El caso describe una lectura.

- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones de dirty read, nonrepeatable read y phantom read; tabla 13.1 y párrafos sobre garantías mínimas y mapeo de niveles · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `fa429de12d8f718819f21697a490694cfd7a4881e07e3f1d8fe5179914c2ca0b` · propuesta: `facce80847a146873f48b3da92d66f1e96973a5ea76edf2918bd9cb553cd3ccc`

## AI-GSI-B2-T05-018

Decisión: pending_review · acción: revise.

Motivo: Conservar phantom y clave A; explicitar mismo predicado, inserción confirmada y ausencia de cambios en filas previas para distinguir anomalías.

### Antes

Al repetir una consulta por condición aparecen nuevas filas por concurrencia. ¿Qué anomalía describe?

- A. Lectura fantasma **(correcta)**
- B. Interbloqueo
- C. Lectura sucia necesariamente
- D. Clave primaria duplicada necesariamente

Explicación: Los fantasmas afectan al conjunto resultante de una condición, no solo al valor de una misma fila.

### Propuesta

Una transacción repite la misma consulta por condición. Las filas previas siguen iguales, pero ahora ve otra fila que una transacción concurrente insertó y confirmó. ¿Qué anomalía describe?

- A. Lectura fantasma. **(correcta)**
- B. Lectura no repetible de una misma fila.
- C. Lectura sucia de cambios ajenos sin confirmar.
- D. Actualización perdida por sobrescritura de un dato.

Explicación: La lectura fantasma se refiere al cambio del conjunto de filas que cumple una condición al repetir la consulta por efecto de otra transacción confirmada. En el ejemplo aparece una fila nueva que satisface el predicado. Algunos niveles o implementaciones evitan observar este fenómeno; clasificar la observación descrita no implica que ocurra siempre bajo concurrencia.

- Error B: La alternativa se centra en volver a leer una misma fila cuyo dato cambia. El ejemplo mantiene las filas previas y añade otra que cumple el predicado.
- Error C: La inserción ajena ya está confirmada cuando se observa. No es la lectura de un cambio sin confirmar.
- Error D: No hay sobrescritura de una actualización previa. Cambia el conjunto observado por una inserción confirmada.

- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones de dirty read, nonrepeatable read y phantom read; tabla 13.1 y párrafos sobre garantías mínimas y mapeo de niveles · versión: PostgreSQL 18; se distingue la implementación documentada de las garantías del estándar y de otros motores · comprobado: 2026-10-28

Partida: `b0ceb14a9c52426ed4dcafe3b70da44a8e43d16d7d787885d6b394d0c0118ae5` · propuesta: `4e1e21ab9ed124a08b1911f957b92960a113d8f20f71f8aa8c2c235a85901db9`

## AI-GSI-B2-T05-019

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso Java mediante drivers y clave A; precisar interfaces para que otras APIs Java de persistencia no sean otra respuesta defendible.

### Antes

¿Qué interfaz se asocia específicamente al acceso a SGBD desde Java mediante drivers?

- A. JDBC **(correcta)**
- B. DNS
- C. ODBC como API exclusiva de Java
- D. HTML

Explicación: JDBC es la API Java; ODBC es una interfaz de acceso ampliamente utilizada desde distintos lenguajes.

### Propuesta

¿Qué API de acceso a datos de Java define interfaces como java.sql.Connection y java.sql.PreparedStatement para trabajar mediante controladores?

- A. JDBC. **(correcta)**
- B. ODBC.
- C. Jakarta Persistence.
- D. ADO.NET.

Explicación: JDBC es la API de acceso de Java cuyo núcleo incluye java.sql.Connection y java.sql.PreparedStatement y que se integra con controladores para las fuentes de datos. Las alternativas pertenecen a familias próximas de acceso o persistencia, pero no identifican esas interfaces. Un proveedor de persistencia puede utilizar JDBC internamente sin que ambos niveles sean la misma API.

- Error B: ODBC es una API de acceso mediante controladores independiente de un único lenguaje. No define las interfaces java.sql citadas.
- Error C: Jakarta Persistence define persistencia y mapeo de entidades Java. Puede apoyarse en JDBC, pero no es la API que declara Connection y PreparedStatement.
- Error D: ADO.NET pertenece al entorno .NET y sus proveedores de datos. No es la familia de interfaces java.sql.

- [Oracle Java SE 25: Package java.sql](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/package-summary.html) · Introducción, JDBC API y lista de interfaces Connection, Statement y PreparedStatement · versión: Java SE 25; se usa la identidad de la API, sin adoptar la cronología histórica inconsistente del párrafo sobre Java SE 7 · comprobado: 2026-10-28
- [Microsoft ODBC API Reference: What Is ODBC?](https://learn.microsoft.com/en-us/sql/odbc/reference/what-is-odbc?view=sql-server-ver17) · Definición inicial: API independiente del lenguaje y del SGBD, drivers y Driver Manager · versión: Rama sql-server-ver17; solo identidad de la API. No se adoptan plataformas históricas del SDK como recomendaciones actuales · comprobado: 2026-10-28
- [Jakarta Persistence 3.2](https://jakarta.ee/specifications/persistence/3.2/jakarta-persistence-spec-3.2.html) · 1 Introduction y 2 Entities: persistencia y mapeo objeto/relacional de entidades Java · versión: Versión 3.2, 10-04-2024; se distingue el nivel de abstracción de JDBC, sin negar que una implementación pueda usarlo · comprobado: 2026-10-28
- [Microsoft: ADO.NET Overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview) · Introducción y párrafos sobre proveedores .NET y clases System.Data · versión: Documentación .NET Framework; solo identificación de familia de acceso, sin recomendar proveedores antiguos · comprobado: 2026-10-28

Partida: `87551eb6ca001dec74dba52e251717123e27d471ab1a7bd7d61ea9c8979b126f` · propuesta: `fff6e92bf81a4c3c27da71434b72e7b7a21349918d517d432c4ab582b23fa45c`

## AI-GSI-B2-T05-020

Decisión: pending_review · acción: revise.

Motivo: Conservar prevención de inyección y clave A; centrar la pregunta en separación dato/sintaxis para no negar otras defensas complementarias.

### Antes

¿Qué medida de aplicación ayuda a prevenir inyección SQL?

- A. Consultas parametrizadas **(correcta)**
- B. Confiar únicamente en que el formulario esté oculto
- C. Concatenar directamente entradas en la consulta
- D. Usar una cuenta administradora para todo

Explicación: La parametrización separa datos de instrucciones; ocultar formularios o elevar privilegios no corrige la inyección.

### Propuesta

Una aplicación recibe un nombre que debe usarse como valor de búsqueda en SQL. ¿Qué medida evita que ese valor se interprete como parte de la sintaxis de la consulta?

- A. Enlazar el valor recibido a un parámetro de la consulta. **(correcta)**
- B. Comprobar la longitud y concatenar el valor en el SQL.
- C. Cifrar la conexión y concatenar el valor en el SQL.
- D. Restringir permisos y concatenar el valor en el SQL.

Explicación: El enlace de parámetros mantiene separados la estructura SQL y los valores externos: el valor se trata como dato, no como sintaxis de la consulta. Preparar un texto al que ya se concatenó la entrada no ofrece esa separación. La validación, el cifrado y el mínimo privilegio son controles útiles con otros fines, pero no sustituyen el enlace de valores. Los parámetros no representan nombres de tablas, columnas o palabras clave; para estructura dinámica se usan decisiones de código o listas permitidas.

- Error B: Limitar longitud puede ser una validación útil, pero no impide que el texto concatenado se interprete como SQL. Debe seguir enlazándose como valor.
- Error C: El cifrado protege el transporte. Una vez recibido el texto, el servidor todavía puede interpretar la concatenación como sintaxis SQL.
- Error D: Menos permisos limita el daño, pero no separa datos y código. Una consulta concatenada puede seguir siendo vulnerable dentro de esos permisos.

- [OWASP: SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) · Defense Option 1: Prepared Statements (with Parameterized Queries); Allow-List Input Validation; Escaping All Dynamic Inputs; Least Privilege · versión: Versión web consultada; parámetros para valores, lista permitida para estructura dinámica y controles complementarios · comprobado: 2026-10-28
- [Oracle Java SE 25: PreparedStatement](https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/java/sql/PreparedStatement.html) · Descripción inicial y ejemplo con setInt/setString; métodos de enlace de valores a parámetros · versión: Java SE 25; preparar SQL ya concatenado no equivale a enlazar los valores externos · comprobado: 2026-10-28

Partida: `60aae2abc0ee73f1d8a6a7e2a8e02ae7a2116c926bc4d268ea508acb20978209` · propuesta: `527630b9cdfd0767e913bf000b4bf19112f294c57ec967b542f3c52edb6a3b30`

## AI-GSI-B2-T06-001

Decisión: pending_review · acción: revise.

Motivo: Conservar fallos parciales y latencia y clave C; microcaso de timeout que evalúa incertidumbre sin derivar conclusiones remotas falsas.

### Antes

¿Qué dificultad es característica de distribuir componentes entre nodos?

- A. Ausencia garantizada de fallos
- B. Eliminación de toda coordinación
- C. Fallos parciales y latencia de red **(correcta)**
- D. Consistencia automática sin coste

Explicación: La distribución aporta ventajas, pero exige gestionar fallos parciales, latencia y coordinación.

### Propuesta

Un cliente llama a un componente de otro nodo. El plazo de espera vence sin respuesta, mientras otros componentes siguen operativos. ¿Qué conclusión está justificada?

- A. Se ha demostrado la caída del servidor remoto.
- B. Se ha demostrado que la operación no llegó a ejecutarse.
- C. Hay incertidumbre por latencia o posibles fallos parciales. **(correcta)**
- D. Se ha garantizado cancelar los efectos de la petición.

Explicación: No recibir respuesta antes del plazo deja incertidumbre sobre el estado remoto. Puede haber retrasos, pérdida de comunicación o un fallo parcial, aunque otros componentes sigan operativos. La operación incluso podría haberse ejecutado y haberse perdido su respuesta. El timeout limita la espera del cliente; no demuestra por sí solo caída, ausencia de efectos o cancelación. Por eso un reintento requiere considerar duplicación de efectos e idempotencia.

- Error A: La falta de respuesta dentro del plazo no identifica la causa. Un servidor vivo o una respuesta retrasada también pueden producirla.
- Error B: La operación puede haber producido efectos antes de perderse o retrasarse la respuesta. El timeout no prueba que no se ejecutó.
- Error D: Dejar de esperar no implica un protocolo de cancelación confirmado. Los efectos remotos podrían mantenerse o completarse.

- [AWS Builders Library: Challenges with distributed systems](https://builder.aws.com/content/3F08f7GPFiZMCgXD8gny6OjxR0Z/challenges-with-distributed-systems) · Introducción: fallos parciales, comunicaciones, latencia y dificultad para conocer el estado remoto · versión: URL final tras redirección de Builders Library; solo principios de distribución, sin adoptar arquitectura AWS · comprobado: 2026-10-28
- [AWS Builders Library: Timeouts, retries, and backoff with jitter](https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter) · Introducción, timeouts y side effects: expirar la espera no demuestra ausencia de efectos; reintentos e idempotencia · versión: URL final tras redirección; no se afirma que un timeout cancele necesariamente la ejecución remota · comprobado: 2026-10-28

Partida: `10ffeb673fa643525db482dfc7f77e341490ea51fe7f21c4c406744f329a2270` · propuesta: `de1d624f45d7d6baf75f1e5e086c06e138510beeee459acfa92b3f410ef9fd6e`

## AI-GSI-B2-T06-003

Decisión: pending_review · acción: revise.

Motivo: Conservar separación lógica y clave B; distractores sobre despliegue y réplicas, sin imponer servidores o procesos por capa.

### Antes

Separar presentación, dominio y persistencia obliga a…

- A. Eliminar las reglas de negocio
- B. Separar responsabilidades lógicas, sin exigir tres servidores físicos **(correcta)**
- C. Conectar todos los clientes directamente a la base de datos
- D. Usar exactamente tres máquinas

Explicación: Las capas lógicas no equivalen necesariamente a niveles de despliegue físicos.

### Propuesta

Separar presentación, dominio y persistencia en capas exige, por sí mismo…

- A. Asignar una máquina física distinta a cada capa.
- B. Separar responsabilidades, pudiendo compartir despliegue. **(correcta)**
- C. Impedir que una capa tenga varias réplicas de ejecución.
- D. Asignar un proceso de sistema operativo a cada capa.

Explicación: Separar presentación, dominio y persistencia establece responsabilidades y dependencias lógicas. No fija una correspondencia uno a uno entre capas, procesos y máquinas. Varias capas pueden compartir un proceso o servidor, y una responsabilidad puede distribuirse o replicarse según el diseño. El despliegue debe elegirse por requisitos concretos, no deducirse del número de capas.

- Error A: Confunde capas lógicas con tiers físicos. La separación de responsabilidades no exige una máquina dedicada para cada una.
- Error C: El número de instancias de ejecución es una decisión de despliegue y escalado. La división lógica no prohíbe réplicas.
- Error D: Un límite de responsabilidad no impone un límite de proceso del sistema operativo. Puede haber varias capas en el mismo proceso.

- [Microsoft Azure Architecture Center: N-tier architecture style](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) · Introducción: capas lógicas, responsabilidades y tiers físicos; párrafo que permite varias capas en el mismo tier · versión: Alcance conceptual: separación lógica y despliegue son decisiones distintas, sin exigir tres máquinas o un proceso por capa · comprobado: 2026-10-28

Partida: `d74e0125dcbd001c6debf3272d9b77ab9e110a2f91e78cb9a3cb5057957ad54f` · propuesta: `3132cdd60e93c741c99b64305fa943203ac6abae3be0eb216bb38c6ca6c7b359`
