# GSI A2 — PRÁCTICA ACTIVA 02

## Solucionario razonado — Bases de datos

**No memorices las respuestas como recetas.** En modelado puede haber variantes correctas si preservan semántica e integridad. En SQL puede existir más de una consulta equivalente. En concurrencia importa explicar el fenómeno y la garantía requerida.

# PARTE A — Modelo conceptual y paso a relacional

1 — Alumnos y asignaturas

ALUMNO(id\_alumno PK,...), ASIGNATURA(id\_asignatura PK,...), MATRICULA(id\_alumno FK, id\_asignatura FK, fecha, nota, PK(id\_alumno,id\_asignatura)). La relación N:M se materializa en MATRICULA porque además contiene atributos propios.

2 — Departamentos y empleados

DEPARTAMENTO(id\_departamento PK, nombre, id\_jefe FK nullable UNIQUE) y EMPLEADO(id\_empleado PK, ..., id\_departamento FK). La FK de pertenencia expresa 1:N. El UNIQUE sobre id\_jefe impide que una misma persona dirija varios departamentos si ésa es la regla. También puede modelarse una relación JEFATURA separada.

3 — Pedidos

CLIENTE 1:N PEDIDO; PEDIDO N:M PRODUCTO mediante LINEA\_PEDIDO. El precio\_unitario debe guardarse en la línea si se quiere conservar el precio histórico aplicado aunque cambie el catálogo.

4 — Biblioteca

AUTOR N:M LIBRO mediante LIBRO\_AUTOR. LIBRO 1:N EJEMPLAR. USUARIO 1:N PRESTAMO y EJEMPLAR 1:N PRESTAMO históricamente. PRESTAMO incluye fecha\_prestamo y fecha\_devolucion. Para impedir dos préstamos activos simultáneos del mismo ejemplar puede usarse una restricción/índice condicionado si el SGBD lo soporta o control transaccional.

5 — Citas médicas

MEDICO 1:N CITA y PACIENTE 1:N CITA. Una restricción UNIQUE(id\_medico, fecha, hora) evita dos citas en el mismo hueco discreto. Si las citas tienen intervalos arbitrarios, la prevención de solapamientos requiere lógica adicional o mecanismos específicos del SGBD.

6 — Equipos y técnicos

ROL y fecha\_incorporacion pertenecen a la relación N:M, por tanto a TECNICO\_EQUIPO(id\_tecnico,id\_equipo,rol,fecha\_incorporacion,...).

7 — Generalización

Opción A: PERSONA común + EMPLEADO(id\_persona PK/FK,salario) + PROVEEDOR(id\_persona PK/FK,tarifa). Evita nulos y refleja subtipos claramente. Opción B: tabla única PERSONA con tipo y columnas específicas nullable; simplifica consultas pero introduce nulos y restricciones más complejas.

8 — Relación ternaria

SUMINISTRO(id\_proveedor FK,id\_producto FK,id\_almacen FK,precio, PK según reglas). Tres relaciones binarias pueden indicar qué proveedor sirve qué producto, qué producto existe en qué almacén y qué proveedor opera en qué almacén, pero no necesariamente qué combinación exacta proveedor-producto-almacén tiene ese precio.

# PARTE B — Dependencias y normalización

9 — 1FN

Una lista separada por comas no es un valor atómico útil para el modelo relacional y dificulta integridad/búsqueda. Crear TELEFONO\_CLIENTE(id\_cliente FK, telefono, tipo..., PK apropiada).

10 — Matrícula

Hay dependencias parciales desde alumno\_id y asignatura\_id respecto de la PK compuesta, y profesor\_nombre depende transitivamente de profesor\_id. Resultado típico: ALUMNO(alumno\_id,alumno\_nombre); PROFESOR(profesor\_id,profesor\_nombre); ASIGNATURA(asignatura\_id,asignatura\_nombre,profesor\_id FK); MATRICULA(alumno\_id,asignatura\_id,nota). Si una asignatura puede tener varios profesores, la regla de negocio cambia y debe modelarse otra relación.

11 — Pedido

PEDIDO(pedido\_id,fecha\_pedido,cliente\_id); CLIENTE(cliente\_id,cliente\_nombre); PRODUCTO(producto\_id,producto\_nombre,precio\_catalogo); LINEA\_PEDIDO(pedido\_id,producto\_id,cantidad). Los datos de pedido dependen solo de pedido\_id; los de producto solo de producto\_id; cliente\_nombre depende de cliente\_id. Si se requiere precio histórico de venta, debe almacenarse precio\_unitario en LINEA\_PEDIDO, no depender del precio de catálogo actual.

12 — Empleado/departamento

No está en 3FN porque emp\_id → dept\_id y dept\_id → dept\_nombre,dept\_sede, creando dependencia transitiva desde emp\_id. Separar DEPARTAMENTO(dept\_id,dept\_nombre,dept\_sede) y EMPLEADO(emp\_id,emp\_nombre,dept\_id FK).

13 — Clave compuesta

alumno\_email depende solo de alumno\_id y curso\_titulo solo de curso\_id: dependencias parciales. ALUMNO, CURSO e INSCRIPCION(alumno\_id,curso\_id,fecha,resultado).

14 — BCNF

Dependencias: (Alumno,Asignatura)→Profesor y Profesor→Asignatura. Claves candidatas: (Alumno,Asignatura) y (Alumno,Profesor). Profesor no es superclave, pero Asignatura es atributo primo al pertenecer a una clave candidata; por eso la relación puede satisfacer 3FN y violar BCNF. Una descomposición posible separa PROFESOR\_ASIGNATURA(Profesor,Asignatura) y ALUMNO\_PROFESOR(Alumno,Profesor), revisando preservación de dependencias según el caso.

15 — Actualización

Si la dirección se repite en muchas facturas, cambiarla exige múltiples actualizaciones y puede dejar valores inconsistentes. Normalizar CLIENTE y referenciarlo reduce la anomalía. Si la factura debe conservar legalmente la dirección histórica, entonces esa repetición puede ser deliberada como snapshot documental.

16 — Desnormalización

Solo tras medir. Valorar patrón de consultas, coste de JOIN, volumen, frecuencia de escritura, mecanismo de sincronización, consistencia aceptable, espacio, complejidad de mantenimiento y posibilidad de resolver con índices/materialized views/cache/DW. Debe existir propietario y mecanismo de reconstrucción.

17 — Atributo derivado

Puede quedar inconsistente si cambia cantidad/precio sin recalcular total. Normalmente se calcula al consultar. Puede justificarse por auditoría histórica, rendimiento o documento cerrado, pero entonces debe definirse una única forma transaccional de mantenerlo.

18 — Natural vs sustituta

NIF es candidato natural si es estable y siempre disponible, pero expone semántica, puede tener reglas especiales y afectar FKs. Una práctica frecuente es id\_persona sustituto como PK y NIF con UNIQUE NOT NULL cuando corresponda. La unicidad de negocio no debe perderse por usar surrogate key.

# PARTE C — SQL

19 — JOIN

SELECT p.id\_pedido, p.fecha, c.nombreFROM PEDIDO pJOIN CLIENTE c ON c.id\_cliente = p.id\_clienteWHERE p.estado = 'PENDIENTE';

20 — Total por pedido

SELECT id\_pedido, SUM(cantidad \* precio\_unitario) AS totalFROM LINEA\_PEDIDOGROUP BY id\_pedido;

21 — Clientes con gasto > 1000

SELECT c.id\_cliente, c.nombre, SUM(l.cantidad \* l.precio\_unitario) AS gastoFROM CLIENTE cJOIN PEDIDO p ON p.id\_cliente = c.id\_clienteJOIN LINEA\_PEDIDO l ON l.id\_pedido = p.id\_pedidoGROUP BY c.id\_cliente, c.nombreHAVING SUM(l.cantidad \* l.precio\_unitario) > 1000;

22 — Sin pedidos

SELECT c.\*FROM CLIENTE cWHERE NOT EXISTS ( SELECT 1 FROM PEDIDO p WHERE p.id\_cliente = c.id\_cliente);

LEFT JOIN ... WHERE p.id\_pedido IS NULL es otra solución válida.

23 — Productos nunca vendidos

SELECT pr.\*FROM PRODUCTO prWHERE NOT EXISTS ( SELECT 1 FROM LINEA\_PEDIDO l WHERE l.id\_producto = pr.id\_producto);

24 — WHERE vs HAVING

WHERE filtra filas antes de agrupar; HAVING filtra grupos después del GROUP BY. Ejemplo: WHERE p.fecha >= ... limita pedidos; HAVING SUM(...) > 1000 selecciona grupos por agregado.

25 — UNION

UNION combina conjuntos eliminando duplicados; UNION ALL conserva duplicados y suele evitar el coste adicional de deduplicación. Deben ser compatibles en número/tipos de columnas.

26 — UPDATE

UPDATE PRODUCTOSET precio = precio \* 1.05WHERE categoria = 'RED';

Antes: SELECT con el mismo WHERE, contar filas, revisar copia/rollback y ejecutar bajo control transaccional/procedimiento de cambio según criticidad.

27 — Restricciones

CHECK (cantidad > 0)CHECK (estado IN ('PENDIENTE','PAGADO','CANCELADO'))UNIQUE (email)

El soporte exacto y sintaxis puede variar por SGBD.

28 — Ventana

SELECT p.\*, ROW\_NUMBER() OVER ( PARTITION BY id\_cliente ORDER BY fecha DESC, id\_pedido DESC ) AS nFROM PEDIDO p;

29 — DELETE/TRUNCATE/DROP

DELETE elimina filas y puede filtrar. TRUNCATE elimina todas las filas con semántica DDL/optimizada dependiente del SGBD y sin WHERE. DROP elimina el objeto tabla y su definición. Transaccionalidad/identidades/bloqueos de TRUNCATE dependen del producto, por lo que no conviene memorizar una regla universal adicional.

30 — Inyección SQL

Concatenar entrada permite alterar la estructura de la sentencia. Control principal: consultas parametrizadas/prepared statements, además de validación y mínimo privilegio.

# PARTE D — Índices

31 — Email

UNIQUE(email) suele apoyarse en un índice único para comprobar unicidad y acelerar búsquedas exactas, aunque la implementación concreta corresponde al SGBD.

32 — Compuesto

Un índice (id\_cliente, fecha) es razonable: igualdad por cliente primero y después rango/orden por fecha. El mejor índice depende de selectividad, columnas seleccionadas y plan real.

33 — Muchos índices

Cada INSERT/UPDATE/DELETE debe mantener índices, aumentando CPU, I/O, espacio, WAL/log y contención. Hay que justificar cada índice por una carga concreta.

34 — Baja selectividad

Si casi todas las filas tienen activo=true, el índice discrimina poco y el optimizador puede preferir scan. Puede ser útil combinado con otras columnas o con índices parciales/filtrados si el SGBD los soporta.

35 — SARGabilidad

El rango directo sobre fecha suele permitir navegación por índice. Aplicar YEAR(fecha)=2026 u otra función sobre la columna puede impedir o dificultar ese uso salvo índices funcionales. La idea es formular predicados aprovechables por el índice.

# PARTE E — Transacciones y aislamiento

36 — ACID

**Atomicidad:** todo o nada. **Consistencia:** la transacción válida conserva invariantes. **Aislamiento:** concurrencia no debe producir efectos no permitidos por el nivel elegido. **Durabilidad:** tras COMMIT, el resultado sobrevive a fallos cubiertos por el diseño.

37 — Dirty read

T2 lee un cambio no confirmado que finalmente se revierte. Es lectura sucia.

38 — Non-repeatable read

T1 lee dos veces la misma fila y obtiene valores distintos debido a un UPDATE confirmado por T2: lectura no repetible.

39 — Phantom

Cambia el conjunto de filas que satisface un predicado porque T2 inserta/elimina filas. En non-repeatable cambia una fila ya leída; en phantom cambia el conjunto resultante del predicado.

40 — Lost update

Se pretendían dos decrementos (stock final 8), pero el segundo guardado sobrescribe el primero y queda 9. Evitar mediante UPDATE atómico condicionado, bloqueo pesimista/SELECT FOR UPDATE según SGBD, o versión/control optimista con detección de conflicto.

41 — Niveles SQL clásicos

READ COMMITTED evita dirty reads; REPEATABLE READ evita además non-repeatable reads; SERIALIZABLE evita también phantoms en el modelo estándar. Las implementaciones reales pueden ofrecer MVCC/snapshot y garantías adicionales/diferentes.

42 — MVCC

Mantiene versiones para que lectores vean un snapshot consistente mientras escritores crean nuevas versiones. Aun así pueden existir conflictos escritor-escritor, write skew u otras anomalías según aislamiento; MVCC no equivale a serialización total.

43 — Optimista/pesimista

Optimista deja trabajar y valida versión al guardar: adecuado con baja contención. Pesimista bloquea antes para evitar conflicto: puede ser razonable en un recurso escaso/última plaza, aunque una restricción de integridad sigue siendo la defensa definitiva.

44 — Transacción larga

Mantenerla durante interacción humana retiene locks/versiones/recursos, aumenta deadlocks y bloquea limpieza. Leer fuera de transacción larga, presentar datos y al confirmar ejecutar una transacción corta que revalide versión/estado y escriba.

# PARTE F — Deadlocks

45 — Deadlock

Existe espera circular: T1 posee A y espera B; T2 posee B y espera A. El SGBD suele detectar el ciclo/timeout y abortar una transacción víctima para liberar recursos.

46 — Reducción

Acceder a recursos en orden consistente; transacciones cortas; índices/consultas eficientes para bloquear menos; evitar interacción humana dentro de transacción; lotes pequeños; aislamiento apropiado; reintentos controlados.

47 — Reintento

La operación puede haber ejecutado pasos externos o repetirse varias veces. El reintento debe ser seguro: operación idempotente o clave idempotency/outbox según arquitectura, límites y backoff. En una transacción DB abortada por completo, se vuelve a ejecutar desde un estado conocido.

48 — Asiento

Defensa robusta: UNIQUE(evento\_id,asiento\_id) en RESERVA, más transacción corta que intenta insertar/actualizar. Si dos compiten, una gana y otra recibe violación de unicidad/conflicto. Puede añadirse bloqueo sobre la fila de asiento, pero no sustituir la restricción.

# PARTE G — Mini-supuestos

49 — Avisos

CLIENTE, AVISO, TECNICO y ASIGNACION\_AVISO(id\_asignacion,id\_aviso,id\_tecnico,desde,hasta,motivo...). AVISO puede guardar asignación actual por conveniencia, pero el histórico se conserva en ASIGNACION\_AVISO. Índices: estado/fecha, técnico activo, cliente/fecha; FKs e integridad temporal según reglas. Evitar sobrescribir el técnico sin auditar.

50 — Stock

Una opción robusta es:

UPDATE PRODUCTOSET stock = stock - :cantidadWHERE id\_producto = :id AND stock >= :cantidad;

Comprobar filas afectadas dentro de transacción. Así la condición y decremento son atómicos. Alternativamente bloqueo de fila. Nunca hacer leer-stock y después escribir sin control.

51 — Legado

Separar TELEFONO\_CLIENTE 1:N y CLIENTE de PEDIDO. ETL: perfilar datos, limpiar/deduplicar, mapear IDs, cargar maestros, cargar hijos, validar conteos, FKs, nulos, duplicados, totales y muestras; conservar snapshot/rollback y reconciliación.

52 — OLTP/reporting

Primero medir consultas e índices. Si carga analítica es pesada, réplica de lectura puede aislar consultas con tolerancia a retraso. Para histórico/transformaciones, ETL/ELT a DW es más apropiado. Materialized views/preagregados también pueden servir. La decisión depende de frescura, complejidad, volumen y RPO.

53 — Agenda con intervalos

Hay que impedir solapamiento del mismo recurso. Algunos SGBD ofrecen exclusion constraints/range types; otros requieren transacción con bloqueo/serializable y consulta de solapamiento, o modelar slots discretos con UNIQUE. La solución debe ser atómica: comprobar y reservar por separado sin aislamiento adecuado tiene carrera.

54 — Rendimiento

Comparar plan actual/anterior; estadísticas y cardinalidad; cambios de volumen/distribución; índices útiles/ausentes; waits, locks y transacciones largas; I/O/CPU/memoria; particionado si procede; parámetros/cambios de versión; capacidad. Cambiar una hipótesis, medir y validar, no “crear índices al azar”.

# Patrón mental para ejercicios de BBDD

* Identifica reglas de negocio e invariantes.
* Modela entidades y relaciones antes de pensar en tablas.
* Define PK/FK/UNIQUE/CHECK.
* Normaliza hasta donde reduzca anomalías sin perder semántica.
* Diseña consultas e índices desde patrones reales.
* En concurrencia dibuja T1/T2 y pregunta: ¿qué garantía necesito?
* La integridad debe apoyarse en la BD cuando la regla es universal.
* En rendimiento: medir → hipótesis → cambio → comparación.

Soluciones elaboradas a partir de III.04, II.05 e IV.02 de los apuntes V2.1. La sintaxis exacta puede variar entre SGBD; se priorizan conceptos relacionales y SQL ampliamente interoperable.
