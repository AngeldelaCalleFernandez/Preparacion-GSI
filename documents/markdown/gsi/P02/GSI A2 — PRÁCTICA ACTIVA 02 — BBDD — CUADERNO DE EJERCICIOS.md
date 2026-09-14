# GSI A2 — PRÁCTICA ACTIVA 02

## Bases de datos: modelo, normalización, SQL, índices y concurrencia

**Ámbito:** III.04 como tema principal, con apoyo conceptual de II.05 y operativo de IV.02.

**Cómo usarlo:** resuelve primero sin mirar el solucionario. En modelado escribe siempre entidades, PK, FK, cardinalidades y restricciones. En normalización identifica dependencias funcionales antes de descomponer. En concurrencia dibuja T1/T2 por pasos y nombra exactamente la anomalía.

**Objetivo:** que puedas pasar de un enunciado a un modelo de datos defendible y razonar qué ocurre cuando varias transacciones acceden simultáneamente.

# PARTE A — Modelo conceptual y paso a relacional

Ejercicio 1 — Alumnos y asignaturas

Un alumno puede matricularse en muchas asignaturas y una asignatura puede tener muchos alumnos. De cada matrícula interesa fecha y nota final. Diseña el modelo E/R y su paso a relacional.

Ejercicio 2 — Departamentos y empleados

Cada empleado pertenece a un único departamento; un departamento puede tener muchos empleados. Un empleado puede ser jefe de, como máximo, un departamento. Diseña entidades, relaciones, cardinalidades y claves.

Ejercicio 3 — Pedidos

Un cliente realiza pedidos. Cada pedido contiene uno o más productos y debe conservar cantidad y precio unitario aplicado en el momento de la compra. Propón tablas y claves.

Ejercicio 4 — Biblioteca

Un libro puede tener varios autores y un autor varios libros. Existen varios ejemplares físicos de cada libro. Los usuarios toman prestados ejemplares, registrándose fecha de préstamo y devolución. Modela el sistema.

Ejercicio 5 — Citas médicas

Un médico atiende muchas citas y un paciente puede tener muchas citas. Una cita se identifica por médico, fecha y hora y no puede duplicarse el mismo hueco del médico. Diseña el modelo y una restricción que evite doble reserva.

Ejercicio 6 — Equipos y técnicos

Un técnico puede pertenecer a varios equipos y un equipo tiene varios técnicos. En cada pertenencia se guarda rol y fecha de incorporación. ¿Dónde deben almacenarse esos atributos?

Ejercicio 7 — Generalización

Una organización maneja personas. Algunas son empleados y otras proveedores autónomos. Todas comparten nombre, NIF y contacto; los empleados tienen salario y los proveedores tarifa. Propón dos formas relacionales de representar la especialización e indica un compromiso de cada una.

Ejercicio 8 — Relación ternaria

Una empresa registra qué proveedor suministra qué producto a qué almacén y a qué precio. Explica por qué tres relaciones binarias pueden no conservar toda la semántica y propone una tabla relacional.

# PARTE B — Dependencias y normalización

Ejercicio 9 — ¿Cumple 1FN?

CLIENTE(id\_cliente, nombre, telefonos), donde *telefonos* almacena "600111111,600222222". ¿Qué problema existe y cómo lo rediseñarías?

Ejercicio 10 — Matrícula y 2FN/3FN

Se parte de:

MATRICULA(alumno\_id, alumno\_nombre, asignatura\_id, asignatura\_nombre, profesor\_id, profesor\_nombre, nota)PK = (alumno\_id, asignatura\_id)Supón: asignatura\_id → asignatura\_nombre, profesor\_id profesor\_id → profesor\_nombre alumno\_id → alumno\_nombre

Identifica dependencias parciales/transitivas y normaliza hasta 3FN.

Ejercicio 11 — Pedido desnormalizado

DETALLE(pedido\_id, fecha\_pedido, cliente\_id, cliente\_nombre, producto\_id, producto\_nombre, precio\_catalogo, cantidad)PK = (pedido\_id, producto\_id)

Indica anomalías y descompón hasta 3FN.

Ejercicio 12 — Empleado y departamento

EMPLEADO(emp\_id, emp\_nombre, dept\_id, dept\_nombre, dept\_sede)

Si emp\_id → emp\_nombre, dept\_id y dept\_id → dept\_nombre, dept\_sede, ¿está en 3FN? Justifica y corrige.

Ejercicio 13 — Clave compuesta

INSCRIPCION(alumno\_id, curso\_id, alumno\_email, curso\_titulo, fecha, resultado)PK = (alumno\_id, curso\_id)

¿Qué atributos dependen parcialmente de la clave? ¿Qué tablas crearías?

Ejercicio 14 — BCNF

En R(Alumno, Asignatura, Profesor), cada pareja (Alumno, Asignatura) determina Profesor y cada Profesor imparte una única Asignatura. Determina claves candidatas y razona si puede estar en 3FN pero no en BCNF.

Ejercicio 15 — Anomalía de actualización

Una tabla guarda en cada factura los campos cliente\_id, cliente\_nombre y cliente\_direccion. ¿Qué anomalía aparece cuando el cliente cambia de dirección? ¿Qué principio de diseño la reduce?

Ejercicio 16 — Desnormalización razonada

Una consulta analítica tarda mucho por numerosos JOIN y se ejecuta miles de veces al día. ¿Desnormalizarías? Enumera al menos cuatro condiciones/controles que deberías valorar antes.

Ejercicio 17 — Dependencia derivada

En una tabla se almacenan cantidad, precio\_unitario y total\_linea = cantidad × precio\_unitario. ¿Qué riesgos genera almacenar total\_linea? ¿Cuándo podría justificarse?

Ejercicio 18 — Natural o sustituta

Una persona tiene NIF único. ¿Debe usarse necesariamente NIF como PK? Compara clave natural y clave sustituta y propone una solución práctica.

# PARTE C — SQL relacional

Usa este esquema para los ejercicios 19–30:

CLIENTE(id\_cliente PK, nombre, email UNIQUE, provincia)PEDIDO(id\_pedido PK, id\_cliente FK, fecha, estado)PRODUCTO(id\_producto PK, nombre, categoria, precio)LINEA\_PEDIDO(id\_pedido FK, id\_producto FK, cantidad, precio\_unitario, PK(id\_pedido,id\_producto))

Ejercicio 19 — JOIN

Escribe una consulta que muestre id\_pedido, fecha y nombre del cliente para pedidos en estado 'PENDIENTE'.

Ejercicio 20 — Agregación

Obtén el importe total de cada pedido como SUM(cantidad × precio\_unitario).

Ejercicio 21 — HAVING

Muestra clientes cuyo gasto total histórico sea superior a 1.000 €.

Ejercicio 22 — Clientes sin pedidos

Resuelve con LEFT JOIN o NOT EXISTS.

Ejercicio 23 — Productos nunca vendidos

Escribe una consulta que devuelva productos que no aparecen en LINEA\_PEDIDO.

Ejercicio 24 — WHERE frente a HAVING

Explica la diferencia y da un ejemplo usando el esquema anterior.

Ejercicio 25 — UNION frente a UNION ALL

¿Qué diferencia semántica y de coste suele existir?

Ejercicio 26 — UPDATE seguro

Quieres incrementar un 5 % el precio de productos de categoría 'RED'. Escribe la sentencia y explica qué comprobación harías antes en producción.

Ejercicio 27 — Restricciones

Propón restricciones para que cantidad sea positiva, estado solo pueda tomar PENDIENTE/PAGADO/CANCELADO y email no se repita.

Ejercicio 28 — Ranking por cliente

Explica cómo usarías una función de ventana para numerar pedidos de cada cliente del más reciente al más antiguo.

Ejercicio 29 — DELETE vs DROP

Explica la diferencia entre DELETE FROM PEDIDO WHERE..., TRUNCATE TABLE y DROP TABLE a nivel conceptual.

Ejercicio 30 — Inyección SQL

¿Por qué concatenar texto recibido del usuario en una consulta es peligroso? Indica el control principal.

# PARTE D — Índices y diseño físico

Ejercicio 31 — Índice por búsqueda

Se consulta continuamente CLIENTE por email y el campo es UNIQUE. ¿Qué índice esperarías y por qué?

Ejercicio 32 — Índice compuesto

Consulta frecuente: WHERE id\_cliente = ? AND fecha BETWEEN ? AND ? ORDER BY fecha. Propón un índice razonable sobre PEDIDO y explica el orden.

Ejercicio 33 — Índice que sobra

Una tabla recibe 20.000 INSERT/s y tiene 18 índices. Explica por qué “más índices” puede empeorar el sistema.

Ejercicio 34 — Baja selectividad

¿Por qué un índice aislado sobre un booleano activo=true/false puede ser poco útil en una tabla donde el 99 % está activo?

Ejercicio 35 — SARGabilidad

Compara WHERE fecha >= '2026-01-01' AND fecha < '2027-01-01' con aplicar una función sobre la columna fecha. ¿Cuál suele favorecer el uso de índice y por qué?

# PARTE E — Transacciones, anomalías y aislamiento

Ejercicio 36 — ACID

Define Atomicidad, Consistencia, Aislamiento y Durabilidad con una frase y un ejemplo breve.

Ejercicio 37 — Dirty read

T1: UPDATE CUENTA SET saldo=0 WHERE id=1; -- no COMMITT2: SELECT saldo FROM CUENTA WHERE id=1; -- lee 0T1: ROLLBACK;

Nombra la anomalía y explica el problema.

Ejercicio 38 — Non-repeatable read

T1: SELECT saldo FROM CUENTA WHERE id=1; -- 100T2: UPDATE ... saldo=80; COMMIT;T1: SELECT saldo FROM CUENTA WHERE id=1; -- 80

Nombra la anomalía.

Ejercicio 39 — Phantom

T1: SELECT COUNT(\*) FROM PEDIDO WHERE estado='PENDIENTE'; -- 10T2: INSERT nuevo PENDIENTE; COMMIT;T1: SELECT COUNT(\*) ...; -- 11

Nombra la anomalía y distingue de la anterior.

Ejercicio 40 — Lost update

T1 lee stock=10T2 lee stock=10T1 guarda stock=9T2 guarda stock=9

¿Qué se ha perdido? Da dos estrategias para evitarlo.

Ejercicio 41 — Nivel mínimo

Según el modelo SQL clásico, ¿qué nivel mínimo evita dirty reads? ¿Cuál evita non-repeatable reads? ¿Cuál evita también phantoms?

Ejercicio 42 — MVCC

Explica por qué MVCC puede permitir lecturas consistentes sin bloquear a los escritores en muchos escenarios, y por qué eso no significa “ausencia de conflictos”.

Ejercicio 43 — Optimista vs pesimista

Compara control optimista y bloqueo pesimista. ¿Cuál preferirías para editar un registro con baja contención? ¿Y para reservar la última plaza disponible?

Ejercicio 44 — Transacción demasiado larga

Una aplicación abre transacción, solicita al usuario que confirme en pantalla y mantiene la transacción abierta 90 segundos. Explica los riesgos y rediseña.

# PARTE F — Deadlocks y concurrencia aplicada

Ejercicio 45 — Deadlock clásico

T1 bloquea fila AT2 bloquea fila BT1 solicita B y esperaT2 solicita A y espera

Explica por qué existe deadlock y cómo suele reaccionar un SGBD.

Ejercicio 46 — Prevención

Da cuatro prácticas que reduzcan deadlocks sin afirmar que puedan eliminarse siempre al 100 %.

Ejercicio 47 — Reintento

El SGBD aborta una transacción víctima por deadlock. ¿Por qué la aplicación debe diseñar reintentos con cuidado? Relaciónalo con idempotencia.

Ejercicio 48 — Reserva de asiento

Dos usuarios intentan reservar simultáneamente el mismo asiento. Diseña una protección robusta combinando restricción de integridad y control transaccional.

# PARTE G — Mini-supuestos integradores

Ejercicio 49 — Sistema de avisos

Diseña el modelo mínimo para clientes, avisos, técnicos y asignaciones, teniendo en cuenta que un aviso puede reasignarse y se quiere conservar historial. Incluye restricciones e índices.

Ejercicio 50 — Stock bajo alta concurrencia

Una tienda vende las últimas unidades de un producto durante una campaña. Debes impedir stock negativo y lost updates. Propón transacción, condición de actualización y estrategia de concurrencia.

Ejercicio 51 — Migración de legado

Un sistema antiguo tiene una tabla CLIENTES con cinco teléfonos en columnas telefono1...telefono5 y direcciones duplicadas en cada pedido. Propón modelo destino, pasos de migración y verificaciones de integridad.

Ejercicio 52 — OLTP y reporting

Los informes mensuales complejos degradan la BD transaccional. Propón alternativas: índices, réplica de lectura, ETL/DW u otras, indicando cuándo usarías cada una.

Ejercicio 53 — Agenda sin dobles reservas

Diseña una agenda de recursos (sala, fecha\_inicio, fecha\_fin). Una UNIQUE simple no evita todos los solapamientos temporales. Explica cómo abordarías integridad y concurrencia, distinguiendo lo que depende del SGBD.

Ejercicio 54 — Incidencia de rendimiento

Una consulta que antes tardaba 100 ms tarda ahora 12 s. La tabla ha pasado de 2 a 80 millones de filas. Describe un diagnóstico ordenado: plan, estadísticas, índices, cardinalidad, I/O, bloqueos, cambios y capacidad.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| A Modelo |  |  |  |
| B Normalización |  |  |  |
| C SQL |  |  |  |
| D Índices |  |  |  |
| E Aislamiento |  |  |  |
| F Deadlocks |  |  |  |
| G Supuestos |  |  |  |

Fuentes de estudio: GSI A2 Bloque III V2.1, tema III.04; apoyo de Bloque II V2.1, II.05, y Bloque IV V2.1, IV.02. El cuaderno no sustituye los apuntes: los transforma en práctica activa.
