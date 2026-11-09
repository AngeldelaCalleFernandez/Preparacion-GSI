# GSI-EDITORIAL-054 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `6fe38eadb1b10b25e57a639122d14ac0d5743f49a31c093275297ae0ea28ccb5`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T03-018

Decisión: pending_review · acción: revise.

Motivo: Conservar selección por utilidad analítica y clave A; criterios de elección cercanos, sin convertir una notación en solución universal.

### Antes

¿Cómo debe elegirse un modelo de requisitos?

- A. Por la duda o aspecto que ayuda a resolver **(correcta)**
- B. Por usar siempre el mismo diagrama para cualquier aspecto
- C. Por sustituir toda validación con interesados
- D. Por maximizar diagramas aunque no resuelvan dudas

Explicación: Casos de uso, estados y procesos aportan perspectivas; se eligen por su utilidad analítica.

### Propuesta

¿Cómo debe elegirse un modelo de requisitos?

- A. Por el aspecto o incertidumbre que ayuda a analizar y contrastar. **(correcta)**
- B. Por mantener una plantilla idéntica aunque cambie la pregunta de análisis.
- C. Por su popularidad sin comprobar qué información necesita el interesado.
- D. Por la cantidad de diagramas producidos aunque no apoyen decisiones.

Explicación: El modelo debe ayudar a comprender el aspecto relevante del problema y a contrastarlo con quienes lo conocen. Su alcance, detalle y notación se eligen según la pregunta, los interesados y la evidencia necesaria. Distintas representaciones destacan relaciones, funciones, comportamiento o tiempo; pueden complementarse. La descomposición lógica de NASA ilustra modelos orientados a necesidades y restricciones. Producir diagramas no sustituye validar sus supuestos o resolver dudas.

- Error B: Una plantilla consistente puede ayudar a comunicar, pero imponerla sin atender a la pregunta puede ocultar la perspectiva necesaria.
- Error C: La popularidad de la notación no demuestra que represente la información o incertidumbre que se quiere analizar.
- Error D: El número de diagramas mide producción de artefactos, no si mejoran comprensión o fundamentan decisiones.

- [NASA Systems Engineering Handbook: 4.3 Logical Decomposition](https://www.nasa.gov/reference/4-3-logical-decomposition/) · 4.3.1.2.1 modelos y objetivos; 4.3.1.2.2 análisis funcional, relaciones, comportamientos y restricciones; contraste iterativo con interesados · versión: Capítulo web público leído el 29-10-2026. Ejemplo de análisis orientado a necesidades y preguntas, sin imponer el proceso NASA ni atribuirle una taxonomía UML normativa · comprobado: 2026-10-29
- [NASA: Appendix C, How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/) · C.4 Performance, Correctness y Verifiability/Testability: criterios, precisión y verificación por prueba, demostración, inspección o análisis · versión: Página actualizada 26-07-2023 según pie, leída el 29-10-2026. Verificabilidad no equivale a seguridad perfecta ni a que toda comprobación deba automatizarse · comprobado: 2026-10-29

Partida: `b4b21b1f8764ebc8e26059d697a819e6e4cabb8bbe54ceedc58fbfd5af744746` · propuesta: `440dde744e5d80f473a26949eb7a4fe179d5e9bc074a1c834926cd70d57f70dd`

## AI-GSI-B3-T03-019

Decisión: pending_review · acción: revise.

Motivo: Conservar verificabilidad del 99,9 % y clave D; precisar cómputo y ventanas sin imponer una exclusión o periodo universal.

### Antes

¿Qué precisión necesita un objetivo de disponibilidad como 99,9 %?

- A. Solo declarar que estará casi siempre disponible
- B. Omitir el periodo para evitar restricciones
- C. Usar cualquier exclusión decidida después de medir
- D. Periodo de medición y tratamiento de ventanas acordadas **(correcta)**

Explicación: La disponibilidad debe especificar condiciones de cómputo para ser verificable.

### Propuesta

¿Qué precisión necesita un objetivo de disponibilidad como 99,9 %?

- A. El número de servidores, sin definir la base de cálculo del porcentaje.
- B. La herramienta de monitorización, dejando sin acordar el periodo observado.
- C. La elección de exclusiones después de ver qué fallos alteran el resultado.
- D. El periodo de medida y las reglas previas de cómputo y ventanas acordadas. **(correcta)**

Explicación: Un 99,9 % necesita indicar qué se mide, dónde, sobre qué periodo y con qué reglas se computan éxito, fallos y posibles exclusiones. Debe saberse si la ventana es móvil o de calendario y cómo se tratan mantenimientos u otras ventanas acordadas. Excluirlos no es obligatorio universalmente; lo necesario es acordarlo antes de medir. Disponibilidad por peticiones y por tiempo pueden producir resultados distintos, por lo que la cifra aislada no es suficientemente verificable.

- Error A: La topología puede influir en disponibilidad, pero no define numerador, denominador, periodo o exclusiones del objetivo.
- Error B: Elegir herramienta concreta no sustituye acordar el periodo y las reglas que esa medición debe representar.
- Error C: Seleccionar exclusiones a posteriori cambia el criterio según el resultado e impide comparar con el objetivo acordado.

- [Google: The Site Reliability Workbook, Implementing SLOs](https://sre.google/workbook/implementing-slos/) · What to Measure, SLI specification/implementation; Choosing an Appropriate Time Window: ventana móvil/calendario, numerador, denominador y objetivo · versión: Libro de 2018, texto público leído el 29-10-2026. Se definen reglas de cómputo y exclusiones por adelantado; ni excluir mantenimiento ni un periodo concreto son reglas universales · comprobado: 2026-10-29
- [NASA: Appendix C, How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/) · C.4 Performance, Correctness y Verifiability/Testability: criterios, precisión y verificación por prueba, demostración, inspección o análisis · versión: Página actualizada 26-07-2023 según pie, leída el 29-10-2026. Verificabilidad no equivale a seguridad perfecta ni a que toda comprobación deba automatizarse · comprobado: 2026-10-29

Partida: `04fa4042ddaeaf3a3a15d8bcf0c98c3d3ab940cbce9e1a48445f1ad2ff9973bd` · propuesta: `836eef0408a15069b03daaf78718ab2b29cef39bb83578beff28786a1b18ddca`

## AI-GSI-B3-T03-020

Decisión: pending_review · acción: revise.

Motivo: Conservar requisito verificable de MFA y clave A; distractores de autenticación y protección plausibles pero sin criterios, sin prometer seguridad absoluta.

### Antes

¿Cuál es un requisito de seguridad verificable del ejemplo?

- A. MFA para perfiles privilegiados **(correcta)**
- B. Seguridad perfecta sin definición
- C. Cero riesgo por declaración
- D. Confianza total en toda la red

Explicación: MFA para un conjunto definido puede comprobarse; las formulaciones absolutas y vagas no bastan.

### Propuesta

¿Cuál de estas formulaciones expresa un requisito de autenticación verificable?

- A. Exigir MFA al autenticar los perfiles privilegiados definidos en la política. **(correcta)**
- B. Aplicar medidas de autenticación adecuadas sin identificar perfiles o condiciones.
- C. Reducir al mínimo los accesos indebidos sin criterio para comprobar la reducción.
- D. Proporcionar una experiencia de acceso segura sin definir qué significa segura.

Explicación: Exigir autenticación multifactor a un conjunto definido de perfiles especifica una condición que puede verificarse mediante configuración y pruebas de acceso. Deben concretarse alcance, excepciones y evidencia pertinente. MFA utiliza factores distintos; dos comprobaciones del mismo factor no bastan por sí solas. NIST define niveles y requisitos de autenticación, pero aquí se evalúa la verificabilidad del ejemplo, no una obligación legal general o una garantía de riesgo cero.

- Error B: Adecuadas sin perfiles o condiciones deja abierta la decisión sobre qué comprobar y cuándo se cumple.
- Error C: Mínimo sin referencia o umbral no permite demostrar que se haya alcanzado el resultado exigido.
- Error D: Segura sin criterio deja sin definir las propiedades y pruebas necesarias para aceptar la experiencia de acceso.

- [NIST SP 800-63B-4: Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) · Introduction; §2 Authentication Assurance Levels y AAL2; dos factores distintos y tipos de autenticadores · versión: Revisión 4 final de 31-07-2025, fecha contrastada con ficha CSRC; HTML leído el 29-10-2026. El ejemplo de perfiles privilegiados no se convierte en obligación legal española universal; MFA no garantiza ausencia de phishing o de todo riesgo · comprobado: 2026-10-29
- [NASA: Appendix C, How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/) · C.4 Performance, Correctness y Verifiability/Testability: criterios, precisión y verificación por prueba, demostración, inspección o análisis · versión: Página actualizada 26-07-2023 según pie, leída el 29-10-2026. Verificabilidad no equivale a seguridad perfecta ni a que toda comprobación deba automatizarse · comprobado: 2026-10-29

Partida: `4642fd7ab0d7d171d11d77051f7a8f001f6f52085da9fad1441372d0739d789f` · propuesta: `1348732d7c51d1de9a827dfe195119878a374c77e48907d984fb9e6a5306f39b`

## AI-GSI-B3-T04-002

Decisión: pending_review · acción: revise.

Motivo: Conservar FK en lado N y clave C; microcaso Departamento/Empleado para distinguir dirección, unicidad y participación sin añadir otro concepto principal.

### Antes

¿Cómo se transforma habitualmente una relación 1:N al modelo relacional?

- A. Eliminar la relación
- B. Una columna con listas concatenadas siempre
- C. Clave foránea en el lado N **(correcta)**
- D. Clave foránea únicamente en el lado 1 en todos los casos

Explicación: El lado N referencia la entidad del lado 1 mediante clave foránea.

### Propuesta

Un departamento puede tener varios empleados y cada empleado pertenece a un departamento. ¿Cómo se representa habitualmente la relación 1:N?

- A. Una FK de Departamento hacia cada empleado, agrupando sus identificadores en un campo.
- B. Una FK de Empleado a Departamento que además sea UNIQUE para todo el personal.
- C. Una FK de Empleado hacia la clave de Departamento, sin unicidad global en esa FK. **(correcta)**
- D. Una lista de empleados dentro de Departamento sin referencias desde Empleado.

Explicación: En la transformación habitual 1:N, cada fila del lado N referencia la clave del lado 1. Aquí Empleado contiene la FK a Departamento; varias filas pueden tener el mismo departamento. UNIQUE sobre esa FK impediría varios empleados en el mismo departamento y restringiría el diseño a 1:1. Si cada empleado debe pertenecer a uno, se añade la obligatoriedad adecuada, normalmente NOT NULL. La FK por sí sola no obliga a que todo departamento tenga empleados.

- Error A: Colocar una lista de identificadores en el lado 1 no representa la FK habitual por cada fila del lado N y complica mantener cada asociación.
- Error B: La FK apunta al lado correcto, pero UNIQUE impediría repetir un departamento entre empleados y perdería la cardinalidad 1:N.
- Error D: Una lista sin referencia desde cada empleado no implementa la integridad referencial de la transformación habitual planteada.

- [PostgreSQL 18: 5.5 Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) · 5.5.1 CHECK y NULL; 5.5.2 NOT NULL; 5.5.3 UNIQUE; 5.5.4 PK; 5.5.5 FK, ejemplos products/orders/order\_items y asociación N:M · versión: Documentación de versión 18 leída el 29-10-2026; ejemplo de SGBD, sin inferir instalación local. FK no exige por sí sola que cada padre tenga un hijo; CHECK verdadero o desconocido admite NULL si no hay otra restricción · comprobado: 2026-10-29

Partida: `dd1284d92f660edecf5e977fe18e3a4fd5df4996fbcf76a3e39d98137be7b406` · propuesta: `72b3e78d0b1d9293857566e46bce54dcf4aa056f73798ad4e515a810cfc1a214`

## AI-GSI-B3-T04-003

Decisión: pending_review · acción: revise.

Motivo: Conservar tabla asociativa y clave B; microcaso Alumno/Curso con multiplicidad y semántica de claves explícitas.

### Antes

¿Cómo se representa habitualmente una relación N:M?

- A. Dos columnas de texto sin restricciones como única solución
- B. Tabla asociativa **(correcta)**
- C. Una única clave en una tabla sin relación
- D. Orden físico de filas

Explicación: La tabla intermedia relaciona participantes y puede contener atributos de la asociación.

### Propuesta

Un alumno puede cursar varios cursos y cada curso admitir varios alumnos. ¿Qué diseño relacional representa habitualmente la relación N:M?

- A. Una FK de Alumno a Curso con UNIQUE para que no se repitan valores.
- B. Una tabla Matrícula que referencie a Alumno y a Curso y guarde sus asociaciones. **(correcta)**
- C. Una FK de Curso a Alumno que limite cada curso a un único alumno.
- D. Una columna de texto con cursos concatenados sin restricciones de referencia.

Explicación: Una relación N:M se representa habitualmente mediante una tabla asociativa cuyas filas vinculan participantes de ambos lados. Matrícula puede guardar sus FKs y atributos propios de la asociación. La clave o unicidad debe corresponder a la semántica: el par sirve si solo se admite una asociación por par; si hay ediciones o repeticiones deben modelarse. No se obtiene N:M con una única FK que permita un solo participante en uno de los lados.

- Error A: Una única FK por alumno permite un solo curso en esa fila y UNIQUE añade otra restricción; no representa varios cursos y varios alumnos por curso.
- Error C: La FK del curso a un alumno limita el número de participantes del curso y no expresa las múltiples asociaciones.
- Error D: Concatenar texto dificulta validar cada referencia y guardar atributos de cada asociación; no es la tabla asociativa del modelo relacional habitual.

- [PostgreSQL 18: 5.5 Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) · 5.5.1 CHECK y NULL; 5.5.2 NOT NULL; 5.5.3 UNIQUE; 5.5.4 PK; 5.5.5 FK, ejemplos products/orders/order\_items y asociación N:M · versión: Documentación de versión 18 leída el 29-10-2026; ejemplo de SGBD, sin inferir instalación local. FK no exige por sí sola que cada padre tenga un hijo; CHECK verdadero o desconocido admite NULL si no hay otra restricción · comprobado: 2026-10-29

Partida: `c52dbdb2b1d113f716b45649d81e60af5826f1827385c86a3f150e88999eca6a` · propuesta: `ab08972598a090390088755841b5ef2fb92e89a1341fd0ce439f85760a9f7064`

## AI-GSI-B3-T04-004

Decisión: pending_review · acción: revise.

Motivo: Conservar reducción de redundancia/anomalías y clave B; corregir la generalización de preservación automática de dependencias sin alterar el concepto evaluado.

### Antes

¿Qué objetivo persigue la normalización?

- A. Convertir todas las tablas en una sola
- B. Reducir redundancia y anomalías **(correcta)**
- C. Eliminar todas las relaciones
- D. Acelerar siempre cualquier consulta sin coste

Explicación: Normalizar preserva dependencias e integridad; rendimiento requiere evaluar patrones de uso.

### Propuesta

¿Qué objetivo persigue la normalización?

- A. Agrupar hechos distintos para reducir el número de tablas con independencia de sus dependencias.
- B. Reducir redundancia y anomalías de inserción, modificación y borrado según dependencias. **(correcta)**
- C. Elegir índices físicos antes de identificar las dependencias entre atributos del modelo.
- D. Garantizar que todas las consultas sean más rápidas al aumentar el nivel de forma normal.

Explicación: La normalización estudia dependencias para reducir redundancia y anomalías de modificación, inserción y borrado. La descomposición debe analizar reunión sin pérdida y preservación de dependencias: alcanzar BCNF no garantiza conservar todas ellas para su comprobación local. Existe una descomposición a 3FN sin pérdida y preservadora de dependencias, bajo el marco de dependencias funcionales. El rendimiento y los demás requisitos de integridad requieren diseño y evaluación adicionales; normalizar no acelera universalmente cualquier consulta.

- Error A: Reducir tablas sin atender a dependencias puede aumentar repetición y anomalías; el número de tablas no es el objetivo que define la normalización.
- Error C: Elegir índices es diseño físico. No sustituye analizar dependencias y redundancia del esquema lógico.
- Error D: Las formas normales no garantizan mejor tiempo para toda consulta; pueden aumentar reuniones y requieren evaluar la carga de uso.

- [Silberschatz, Korth y Sudarshan: Database System Concepts, Normalization](https://db-book.com/slides-dir/PDF-dir/ch7.pdf) · 7.23–7.28: BCNF, descomposición y dependencias; 7.65–7.73: 3FN, reunión sin pérdida y preservación; 7.90 Denormalization for Performance · versión: Diapositivas de los autores, 7.ª edición, PDF de 93 páginas leído textualmente el 29-10-2026. Se usan números de diapositiva impresos, distintos del índice físico del PDF; alcanzar BCNF no garantiza preservar todas las dependencias · comprobado: 2026-10-29

Partida: `b10d51329589621b47bec50dd691792137009210f5facd26be9ab81efe841eb5` · propuesta: `debe6d8ff0f38d379e7d23fdc180599b02778be7de5aef127a363a0710284b8a`

## AI-GSI-B3-T04-005

Decisión: pending_review · acción: revise.

Motivo: Conservar condición de dominio y clave D; microcaso que separa CHECK y nulidad con restricciones próximas.

### Antes

¿Qué restricción expresa que un valor debe cumplir una condición de dominio?

- A. ROLLBACK
- B. ORDER BY
- C. JOIN
- D. CHECK **(correcta)**

Explicación: CHECK impone condiciones de integridad; ordenar, combinar o deshacer son funciones distintas.

### Propuesta

Una columna numérica permite NULL, pero sus valores presentes deben ser no negativos. ¿Qué restricción expresa esa condición?

- A. NOT NULL.
- B. UNIQUE.
- C. FOREIGN KEY.
- D. CHECK. **(correcta)**

Explicación: CHECK permite imponer una condición booleana como CHECK (valor &gt;= 0). En el ejemplo se rechazan los valores negativos y se permiten los nulos: una condición desconocida por NULL no se rechaza como falsa. Si también se exigiera presencia habría que añadir NOT NULL. UNIQUE controla repetición y FK referencia a datos relacionados. El soporte y alcance de las expresiones dependen del SGBD; no se usa un CHECK de fila para prometer cualquier regla entre tablas.

- Error A: NOT NULL obligaría a que exista valor, pero no impediría que fuera negativo; además contradice que el caso permite nulos.
- Error B: UNIQUE impide determinados duplicados, no expresa que los valores presentes deban ser no negativos.
- Error C: Una FK exige referencia válida a otra clave. No expresa por sí misma la comparación numérica de dominio solicitada.

- [PostgreSQL 18: 5.5 Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) · 5.5.1 CHECK y NULL; 5.5.2 NOT NULL; 5.5.3 UNIQUE; 5.5.4 PK; 5.5.5 FK, ejemplos products/orders/order\_items y asociación N:M · versión: Documentación de versión 18 leída el 29-10-2026; ejemplo de SGBD, sin inferir instalación local. FK no exige por sí sola que cada padre tenga un hijo; CHECK verdadero o desconocido admite NULL si no hay otra restricción · comprobado: 2026-10-29

Partida: `753b230e79e27b852b80e83762e68afa2e519b38363349e46d55a4d6b30847fa` · propuesta: `f27a02da03acb3a24228a30d247d82b5a622b9916a508e96a623aa8badf7a4f0`

## AI-GSI-B3-T04-006

Decisión: pending_review · acción: revise.

Motivo: Conservar integridad coherente entre accesos y clave D; delimitar reglas expresables en el gestor y complementar validación de aplicación.

### Antes

¿Por qué ubicar una regla universal y estable cerca del dato?

- A. Para eliminar transacciones
- B. Para sustituir copias de seguridad
- C. Para evitar toda validación de integridad
- D. Para aplicarla de forma coherente a distintos accesos **(correcta)**

Explicación: Las restricciones del SGBD pueden proteger reglas comunes aunque existan varios consumidores.

### Propuesta

¿Por qué ubicar una regla universal y estable cerca del dato?

- A. Para que solo el formulario principal compruebe la regla antes de guardar.
- B. Para que cada aplicación pueda interpretar de forma distinta la misma regla común.
- C. Para que la regla dependa del orden en que cada cliente realice sus validaciones.
- D. Para que el SGBD aplique la restricción común a las distintas vías de escritura. **(correcta)**

Explicación: Una regla universal y estable que puede expresarse correctamente como restricción del SGBD se comprueba de forma común en las escrituras que este controla. Así no depende de que todos los consumidores dupliquen la misma validación sin errores. La aplicación puede validar antes para dar buen feedback y tratar reglas propias de su contexto. No toda regla de negocio se expresa con CHECK; hay que escoger restricción, transacción y controles adecuados a su alcance.

- Error A: Limitar la comprobación al formulario deja sin esa protección otros clientes, importaciones o servicios que escriban en el mismo dato.
- Error B: Una regla común no se mantiene coherente si cada consumidor puede asignarle una interpretación incompatible.
- Error C: Depender del orden de validación de los clientes conserva divergencias y ventanas de error; no centraliza la invariancia en el dato.

- [PostgreSQL 18: 5.5 Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) · 5.5.1 CHECK y NULL; 5.5.2 NOT NULL; 5.5.3 UNIQUE; 5.5.4 PK; 5.5.5 FK, ejemplos products/orders/order\_items y asociación N:M · versión: Documentación de versión 18 leída el 29-10-2026; ejemplo de SGBD, sin inferir instalación local. FK no exige por sí sola que cada padre tenga un hijo; CHECK verdadero o desconocido admite NULL si no hay otra restricción · comprobado: 2026-10-29
- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones dirty read, nonrepeatable read, phantom read; 13.2.1 Read Committed y actualizaciones; 13.2.2–3 snapshots y serialización · versión: Documentación de versión 18 leída el 29-10-2026. Se distinguen fenómenos del estándar y comportamiento concreto de PostgreSQL; MVCC no elimina toda anomalía o necesidad de reintento · comprobado: 2026-10-29

Partida: `f37ded292edbb68685c05b148aa199f159ff2c496c389b4aa348f20571e6542f` · propuesta: `e77e9f6b2a8b42a2aeb2eae766076cb93ab265ac97f0e0bd73515c4904f541df`

## AI-GSI-B3-T04-007

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave C: alternativas ya comparan análisis, concepto y mecanismo físico con precisión; ampliar límites de rendimiento.

### Antes

¿Qué decisión pertenece principalmente al diseño físico?

- A. Identificación inicial de actores del negocio
- B. Descripción de necesidades del usuario
- C. Índices y particiones específicos del SGBD **(correcta)**
- D. Definición abstracta de una entidad

Explicación: El diseño físico concreta almacenamiento y mecanismos dependientes del gestor.

### Propuesta

¿Qué decisión pertenece principalmente al diseño físico?

- A. Identificación inicial de actores del negocio
- B. Descripción de necesidades del usuario
- C. Índices y particiones específicos del SGBD **(correcta)**
- D. Definición abstracta de una entidad

Explicación: El diseño físico elige mecanismos concretos de acceso y almacenamiento, como índices, particiones y parámetros del gestor, atendiendo a la carga prevista. Identificar actores y necesidades pertenece al análisis, y definir abstractamente una entidad al modelo conceptual. Una misma tabla lógica puede tener varias estrategias físicas. No se promete que particionar o indexar mejore siempre: hay costes de escritura y mantenimiento y deben medirse las consultas reales.

- Error A: Identificar actores describe el contexto y las interacciones del negocio; no elige estructuras de acceso o almacenamiento de un gestor.
- Error B: Describir necesidades fundamenta requisitos. No concreta índices o particiones para ejecutarlos.
- Error D: La entidad abstracta expresa el concepto y sus relaciones, sin decidir cómo se almacena o accede físicamente.

- [PostgreSQL 18: 11.2 Index Types](https://www.postgresql.org/docs/18/indexes-types.html) · 11.2.1 B-tree: igualdad, rangos y orden; 11.2.2 hash: igualdad; familias GIN/GiST/BRIN y sus operadores · versión: Documentación de versión 18 leída el 29-10-2026. B-tree/B+tree es la familia ordenada del concepto; no se promete que cualquier rango use índice o sea siempre más rápido que escanear · comprobado: 2026-10-29
- [PostgreSQL 18: 5.12 Table Partitioning](https://www.postgresql.org/docs/18/ddl-partitioning.html) · 5.12.1 Overview: una tabla lógica en piezas físicas; 5.12.2 particiones y decisiones de almacenamiento; beneficios según patrón de uso · versión: Documentación de versión 18 leída el 29-10-2026. Particionar no altera por sí mismo el concepto de entidad ni sustituye todos los índices o la evaluación del diseño · comprobado: 2026-10-29
- [PostgreSQL 18: 14.1 Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html) · Introducción; EXPLAIN Basics, costes y planes; EXPLAIN ANALYZE y Caveats: medición y ejecución real de consultas · versión: Documentación de versión 18 leída el 29-10-2026. Los costes estimados no son directamente milisegundos ni garantía de rendimiento; no se ejecutan consultas de los ejemplos ni se instala un SGBD · comprobado: 2026-10-29

Partida: `1b97e3422641e860b282468cdc0c7caeddc46e7b377035b11a045820e6c25b92` · propuesta: `4d365f0d7eca6d5ab003f56baf2400fd612e8cf2a0c94545d330059c23b793dd`

## AI-GSI-B3-T04-008

Decisión: pending_review · acción: revise.

Motivo: Conservar dependencias parciales y clave A; precisar atributos no primos y todas las claves candidatas, con un ejemplo de apoyo sin cambiar la definición preguntada.

### Antes

¿Qué trata de eliminar la segunda forma normal?

- A. Dependencias parciales respecto a claves compuestas **(correcta)**
- B. Cualquier relación entre entidades
- C. Toda clave foránea
- D. Todo atributo numérico

Explicación: 2FN trata dependencias parciales; 3FN aborda dependencias transitivas indebidas.

### Propuesta

¿Qué trata de eliminar la segunda forma normal?

- A. Dependencias de atributos no primos respecto a parte propia de una clave candidata. **(correcta)**
- B. Dependencias transitivas no permitidas por 3FN entre atributos del esquema.
- C. Dependencias multivaluadas independientes que se estudian para alcanzar 4FN.
- D. Dependencias de reunión no implicadas por claves que se estudian para alcanzar 5FN.

Explicación: La 2FN exige 1FN y que ningún atributo no primo dependa funcionalmente de una parte propia de una clave candidata. No basta revisar solo la clave elegida como primaria si existen otras candidatas. Por ejemplo, en R(A,B,C) con única clave candidata (A,B) y A→C, C es no primo y depende de una parte de la clave. La 3FN, 4FN y 5FN añaden condiciones distintas; tampoco se eliminan por ello las FKs o las claves compuestas.

- Error B: Las dependencias transitivas indebidas se abordan en 3FN; la condición específica de 2FN es la ausencia de dependencia parcial de atributos no primos.
- Error C: Las dependencias multivaluadas independientes son el ámbito de 4FN; no definen la condición de 2FN.
- Error D: Las dependencias de reunión corresponden a formas posteriores como 5FN; la pregunta se refiere a dependencia funcional parcial.

- [UT Austin, A. Mitra: The Process of Normalization](https://www.cs.utexas.edu/~mitra/csSpring2012/cs327/lectures/normal.html) · Functional Dependencies: dependencia plena/parcial; Second Normal Form: 1FN y ningún atributo no primo dependiente de parte de una clave candidata · versión: Notas docentes primarias del curso CS327, primavera de 2012 según ruta; cuerpo público leído el 29-10-2026. Se utiliza la definición explícita de 2FN, sin atribuir una nueva edición al documento histórico · comprobado: 2026-10-29
- [Silberschatz, Korth y Sudarshan: Database System Concepts, Normalization](https://db-book.com/slides-dir/PDF-dir/ch7.pdf) · 7.23–7.28: BCNF, descomposición y dependencias; 7.65–7.73: 3FN, reunión sin pérdida y preservación; 7.90 Denormalization for Performance · versión: Diapositivas de los autores, 7.ª edición, PDF de 93 páginas leído textualmente el 29-10-2026. Se usan números de diapositiva impresos, distintos del índice físico del PDF; alcanzar BCNF no garantiza preservar todas las dependencias · comprobado: 2026-10-29

Partida: `d8d467908f6b7e13a4dd8ba8d32c4a02bab4c3cf87c797ef825b05cd1af986ab` · propuesta: `fc128bd983aec77b632d3774b14b110fba8b93c9fea12d1314ac9d1a9cf3b209`

## AI-GSI-B3-T04-009

Decisión: pending_review · acción: revise.

Motivo: Conservar determinantes superclave y clave A; formulación formal con cierre y distractores de formas normales próximas.

### Antes

¿Qué condición caracteriza a BCNF?

- A. Todo determinante no trivial es superclave **(correcta)**
- B. Se prohíben restricciones de unicidad
- C. No puede existir clave compuesta
- D. Toda tabla tiene exactamente dos columnas

Explicación: BCNF impone una condición sobre determinantes funcionales, no sobre número de columnas.

### Propuesta

¿Qué condición caracteriza a BCNF?

- A. Toda dependencia funcional no trivial X→Y tiene como determinante X una superclave. **(correcta)**
- B. Toda dependencia funcional no trivial X→Y permite que X no sea superclave si Y es primo.
- C. Todo atributo no primo depende de la clave completa, sin exigir condiciones adicionales.
- D. Toda dependencia de reunión se deduce de las claves, sin imponer condición sobre X→Y.

Explicación: BCNF exige que en cada dependencia funcional no trivial X→Y del cierre de dependencias, X sea superclave. No exige que toda superclave sea mínima ni prohíbe claves compuestas. Permitir un atributo dependiente primo con determinante no superclave es la relajación que puede hacer que un esquema esté en 3FN y no en BCNF. La descomposición a BCNF puede perder preservación de dependencias, por lo que esa propiedad debe comprobarse aparte.

- Error B: La excepción por atributo primo corresponde a la definición de 3FN; BCNF no la admite si el determinante de una dependencia no trivial no es superclave.
- Error C: La dependencia plena de no primos caracteriza 2FN, que es más débil y no comprueba todos los determinantes exigidos por BCNF.
- Error D: Esa condición trata dependencias de reunión y formas como 5FN; no sustituye la condición funcional que define BCNF.

- [Silberschatz, Korth y Sudarshan: Database System Concepts, Normalization](https://db-book.com/slides-dir/PDF-dir/ch7.pdf) · 7.23–7.28: BCNF, descomposición y dependencias; 7.65–7.73: 3FN, reunión sin pérdida y preservación; 7.90 Denormalization for Performance · versión: Diapositivas de los autores, 7.ª edición, PDF de 93 páginas leído textualmente el 29-10-2026. Se usan números de diapositiva impresos, distintos del índice físico del PDF; alcanzar BCNF no garantiza preservar todas las dependencias · comprobado: 2026-10-29

Partida: `aef886b4d3a13202813f2951835a44725e3fde4177c76b04821ebb0fc25a97a1` · propuesta: `31f8f57b4b47315df7e795e1fc4aa0fcf48dfc4d0fd9e8261cffd6c57507ee0f`

## AI-GSI-B3-T04-010

Decisión: pending_review · acción: revise.

Motivo: Conservar medición y coherencia y clave C; analizar beneficios y costes sin simplificar desnormalización a duplicar o eliminar controles.

### Antes

¿Qué exige una desnormalización deliberada?

- A. Asumir mejora universal sin pruebas
- B. Suprimir claves primarias
- C. Medición y controles que mantengan coherencia **(correcta)**
- D. Duplicar sin reglas todos los datos

Explicación: Desnormalizar puede favorecer lecturas concretas, pero introduce obligaciones de coherencia.

### Propuesta

¿Qué exige una desnormalización deliberada?

- A. Dar por mejoradas las lecturas sin comparar tiempos o costes con la carga prevista.
- B. Replicar atributos y delegar su actualización en cada cliente sin una regla común.
- C. Medir el beneficio y mantener reglas de actualización que conserven la coherencia. **(correcta)**
- D. Eliminar restricciones de integridad para reducir el coste de toda escritura.

Explicación: Desnormalizar puede reducir reuniones o acelerar patrones de lectura concretos, a cambio de datos derivados o repetidos y más trabajo de actualización. La decisión requiere medir bajo una carga representativa y definir cómo se mantiene, comprueba o reconstruye la coherencia. También deben evaluarse almacenamiento y coste de escritura. Una vista materializada puede ser alternativa, con su política de refresco y consistencia. No sirve como garantía universal ni justifica suprimir integridad por defecto.

- Error A: Sin medición no se conoce si se resuelve el cuello de botella o se traslada el coste a otras operaciones.
- Error B: Duplicar sin una regla coordinada puede dejar valores divergentes cuando se actualizan por vías distintas.
- Error D: Quitar restricciones no forma parte necesaria de desnormalizar y puede permitir estados inválidos; la coherencia sigue siendo un requisito.

- [Silberschatz, Korth y Sudarshan: Database System Concepts, Normalization](https://db-book.com/slides-dir/PDF-dir/ch7.pdf) · 7.23–7.28: BCNF, descomposición y dependencias; 7.65–7.73: 3FN, reunión sin pérdida y preservación; 7.90 Denormalization for Performance · versión: Diapositivas de los autores, 7.ª edición, PDF de 93 páginas leído textualmente el 29-10-2026. Se usan números de diapositiva impresos, distintos del índice físico del PDF; alcanzar BCNF no garantiza preservar todas las dependencias · comprobado: 2026-10-29
- [PostgreSQL 18: 14.1 Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html) · Introducción; EXPLAIN Basics, costes y planes; EXPLAIN ANALYZE y Caveats: medición y ejecución real de consultas · versión: Documentación de versión 18 leída el 29-10-2026. Los costes estimados no son directamente milisegundos ni garantía de rendimiento; no se ejecutan consultas de los ejemplos ni se instala un SGBD · comprobado: 2026-10-29

Partida: `799ebde666a8d9348cab7a5a4346600f13fcb3aa50798c3c55587710ead4427b` · propuesta: `ad3fb5b04241203d43a60303f0c4390671b60416d2f8e7d92a7b5ae36f62c91f`

## AI-GSI-B3-T04-011

Decisión: pending_review · acción: revise.

Motivo: Conservar actualización perdida y clave C; microcaso aritmético explícito para distinguir escritura de valor calculado y actualización atómica.

### Antes

Dos usuarios leen la misma versión y el segundo sobrescribe el cambio del primero sin detectarlo. ¿Qué anomalía ocurre?

- A. Fragmentación de índices
- B. Lectura sucia necesariamente
- C. Actualización perdida **(correcta)**
- D. Normalización excesiva

Explicación: La actualización perdida sobrescribe una escritura concurrente sin controlar el conflicto.

### Propuesta

Dos transacciones leen contador=100. Una guarda 110 y después la otra guarda 120, calculados desde el valor inicial, sin validar cambios ajenos. Ambas confirman. ¿Qué anomalía aparece?

- A. Lectura sucia.
- B. Lectura no repetible.
- C. Actualización perdida. **(correcta)**
- D. Lectura fantasma.

Explicación: Ambas transacciones calculan desde el mismo valor antiguo y la segunda escritura sustituye el resultado de la primera sin detectar el conflicto: se pierde una actualización. Si los incrementos se aplicaran acumulativamente, el contador sería 130; el caso termina en 120. No se afirma que toda sentencia UPDATE de un SGBD produzca ese efecto: una operación atómica adecuada, bloqueo o validación de versión puede impedirlo. La anomalía depende de cómo se lee, calcula y escribe bajo la concurrencia.

- Error A: La lectura sucia exige leer cambios no confirmados. Aquí las transacciones leen el valor inicial y la anomalía descrita es la sobrescritura de una actualización.
- Error B: La lectura no repetible compara lecturas sucesivas de una fila. El caso describe escrituras calculadas desde una lectura antigua que se pisan.
- Error D: La lectura fantasma afecta al conjunto de filas de un predicado. Aquí se pierde un cambio sobre el mismo contador.

- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones dirty read, nonrepeatable read, phantom read; 13.2.1 Read Committed y actualizaciones; 13.2.2–3 snapshots y serialización · versión: Documentación de versión 18 leída el 29-10-2026. Se distinguen fenómenos del estándar y comportamiento concreto de PostgreSQL; MVCC no elimina toda anomalía o necesidad de reintento · comprobado: 2026-10-29
- [Silberschatz, Korth y Sudarshan: Database System Concepts, Concurrency Control](https://www.db-book.com/slides-dir/PDF-dir/ch18.pdf) · 18.9–18.13: 2PL básico, estricto y conversiones; 18.22–18.24: prevención de deadlock; 18.48–18.50: validación optimista; 18.54: multiversión · versión: Diapositivas de los autores, 7.ª edición, PDF de 90 páginas leído textualmente el 29-10-2026. Números impresos de diapositiva; 2PL es control por bloqueos, distinto de 2PC, y no elimina por sí solo interbloqueos · comprobado: 2026-10-29

Partida: `dd62898703b5374bd6d68a54cfd7e7df8ff05c5fc60e53e9c6bbc90044c4fd24` · propuesta: `e0157bb12f13108f39dd85ee93dda4ac6efbdd2bda9ccbd563eabc37fb05676f`

## AI-GSI-B3-T04-012

Decisión: pending_review · acción: revise.

Motivo: Conservar fantasmas y clave C; precisar misma transacción, predicado repetido e inserciones confirmadas para evitar confundir consultas independientes.

### Antes

Una consulta por condición devuelve un conjunto diferente tras inserciones concurrentes. ¿Qué fenómeno debe controlarse?

- A. Lectura sucia de cambios no confirmados
- B. Actualización perdida al sobrescribir una escritura
- C. Fantasmas **(correcta)**
- D. Interbloqueo entre transacciones que esperan recursos

Explicación: La anomalía afecta al conjunto seleccionado por el predicado.

### Propuesta

Dentro de una transacción se repite la misma consulta por condición y aparecen filas nuevas por inserciones concurrentes confirmadas. ¿Qué fenómeno se observa?

- A. Lectura sucia.
- B. Lectura no repetible de una fila ya leída.
- C. Lectura fantasma. **(correcta)**
- D. Interbloqueo.

Explicación: La transacción repite el mismo predicado y obtiene filas adicionales por inserciones concurrentes confirmadas: es el fenómeno de fantasmas. Se distingue de observar otro valor en una fila ya leída, leer datos no confirmados o quedar en un ciclo de espera. Los niveles de aislamiento y los motores pueden impedir fenómenos adicionales a los mínimos del estándar; por ejemplo, no debe trasladarse sin matiz una tabla genérica a cada implementación de Repeatable Read.

- Error A: Las inserciones del caso ya están confirmadas; no se está leyendo información no confirmada de otra transacción.
- Error B: La no repetibilidad de fila trata cambios de valores en una fila reconsultada. Aquí se añaden filas al conjunto definido por el predicado.
- Error D: Un interbloqueo es un ciclo de espera por recursos. Cambiar el conjunto devuelto no demuestra ese ciclo.

- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones dirty read, nonrepeatable read, phantom read; 13.2.1 Read Committed y actualizaciones; 13.2.2–3 snapshots y serialización · versión: Documentación de versión 18 leída el 29-10-2026. Se distinguen fenómenos del estándar y comportamiento concreto de PostgreSQL; MVCC no elimina toda anomalía o necesidad de reintento · comprobado: 2026-10-29

Partida: `b6fc733c76d4122d295a703c5c358e65180bc57be1e78c98861552c35b882cd1` · propuesta: `2fcc00dabacb11597bf18496946d9f96fc257ac79d68d7a1e3d68e0d9eaf89bc`

## AI-GSI-B3-T04-014

Decisión: pending_review · acción: revise.

Motivo: Conservar multiversión/visibilidad y clave A; distinguirla de bloqueo exclusivo, última escritura y ejecución secuencial, sin prometer cero conflictos.

### Antes

¿Qué caracteriza a MVCC?

- A. Mantener versiones con reglas de visibilidad para lecturas concurrentes **(correcta)**
- B. Eliminar toda transacción
- C. Garantizar ausencia de cualquier conflicto
- D. Crear una única copia sin historia

Explicación: MVCC facilita concurrencia mediante versiones; sigue necesitando aislamiento y reglas de visibilidad.

### Propuesta

¿Qué caracteriza a MVCC?

- A. Mantener versiones y aplicar reglas de visibilidad para las lecturas concurrentes. **(correcta)**
- B. Coordinar todo acceso usando únicamente bloqueos exclusivos sobre las filas.
- C. Reemplazar cada valor y conservar solo la última escritura sin versiones visibles.
- D. Ordenar la ejecución de todas las transacciones en un único turno sin solapamiento.

Explicación: MVCC mantiene versiones y determina cuáles son visibles según transacción, instante y aislamiento de la implementación. Permite que lectores consulten una versión apropiada mientras hay actividad concurrente. No equivale a conservar una copia sin reglas, ejecutar todo secuencialmente o prescindir de transacciones. Puede coexistir con bloqueos y con conflictos que requieran espera, aborto o reintento; una instantánea por sí sola no garantiza serialización de cualquier patrón de negocio.

- Error B: Los bloqueos exclusivos coordinan incompatibilidades, pero no describen el mantenimiento de versiones y visibilidad que caracteriza a MVCC.
- Error C: Conservar solo la última escritura elimina la base multiversión que permite elegir una versión visible para la lectura.
- Error D: Ejecutar sin solapamiento es serializar físicamente el trabajo, distinto de permitir concurrencia mediante versiones.

- [PostgreSQL 18: 13.1 Concurrency Control, Introduction](https://www.postgresql.org/docs/18/mvcc-intro.html) · Modelo multiversión, instantáneas, lecturas/escrituras y coexistencia de bloqueos explícitos · versión: Documentación de versión 18 leída el 29-10-2026. La regla de visibilidad depende del aislamiento y la implementación; no se universaliza ausencia de bloqueos entre cualquier par de operaciones · comprobado: 2026-10-29
- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones dirty read, nonrepeatable read, phantom read; 13.2.1 Read Committed y actualizaciones; 13.2.2–3 snapshots y serialización · versión: Documentación de versión 18 leída el 29-10-2026. Se distinguen fenómenos del estándar y comportamiento concreto de PostgreSQL; MVCC no elimina toda anomalía o necesidad de reintento · comprobado: 2026-10-29
- [Silberschatz, Korth y Sudarshan: Database System Concepts, Concurrency Control](https://www.db-book.com/slides-dir/PDF-dir/ch18.pdf) · 18.9–18.13: 2PL básico, estricto y conversiones; 18.22–18.24: prevención de deadlock; 18.48–18.50: validación optimista; 18.54: multiversión · versión: Diapositivas de los autores, 7.ª edición, PDF de 90 páginas leído textualmente el 29-10-2026. Números impresos de diapositiva; 2PL es control por bloqueos, distinto de 2PC, y no elimina por sí solo interbloqueos · comprobado: 2026-10-29

Partida: `1a2be1036041a8b8195340a92acfe6722b02639aadd0f85cfb83908c17224859` · propuesta: `7a615d35d3bc86fcd83ce1d4e2d437ef794376540f2a968d33671c1a7db5652e`

## AI-GSI-B3-T04-015

Decisión: pending_review · acción: revise.

Motivo: Conservar bloqueo pesimista y clave D; mecanismos reales de concurrencia como distractores, con alcance del acceso conflictivo explícito.

### Antes

¿Qué enfoque previene conflictos tomando bloqueos antes de operar?

- A. Compresión
- B. Control optimista sin bloqueos
- C. Particionado por hash exclusivamente
- D. Control pesimista **(correcta)**

Explicación: El pesimista coordina mediante bloqueos; el optimista valida conflictos posteriormente.

### Propuesta

¿Qué enfoque coordina un acceso en conflicto adquiriendo de antemano un bloqueo incompatible para otras transacciones?

- A. MVCC con elección de una instantánea de lectura.
- B. Control optimista con validación posterior de conflictos.
- C. Ordenación por marcas temporales sin bloqueo previo del dato.
- D. Control pesimista mediante bloqueo previo incompatible. **(correcta)**

Explicación: El control pesimista coordina un acceso potencialmente conflictivo adquiriendo el bloqueo adecuado antes de operar. Si hay un bloqueo incompatible, la operación espera o se trata según la política del sistema. Evita esa interferencia bajo el protocolo elegido, pero puede generar espera e interbloqueo y requiere aislamiento y tratamiento de errores apropiados. El optimista permite trabajo provisional y comprueba después, mientras MVCC usa versiones; las técnicas pueden combinarse en un gestor.

- Error A: MVCC describe versiones y su visibilidad. Puede usar bloqueos para ciertas operaciones, pero elegir instantánea no es el bloqueo previo que pregunta el enunciado.
- Error B: El optimista comprueba conflictos después del trabajo provisional, en lugar de reservar de antemano el acceso incompatible descrito.
- Error C: Una ordenación por timestamps sin bloquear antes es otro mecanismo de control; no adquiere el bloqueo previo del supuesto.

- [PostgreSQL 18: 13.3 Explicit Locking](https://www.postgresql.org/docs/18/explicit-locking.html) · 13.3.2 bloqueo de filas; 13.3.4 deadlocks: orden consistente, transacciones abiertas, víctima y reintentos · versión: Documentación de versión 18 leída el 29-10-2026. Bloqueos pesimistas pueden producir espera/interbloqueo; reducir riesgo no acredita cero deadlocks o autoriza repetir efectos externos sin control · comprobado: 2026-10-29
- [Silberschatz, Korth y Sudarshan: Database System Concepts, Concurrency Control](https://www.db-book.com/slides-dir/PDF-dir/ch18.pdf) · 18.9–18.13: 2PL básico, estricto y conversiones; 18.22–18.24: prevención de deadlock; 18.48–18.50: validación optimista; 18.54: multiversión · versión: Diapositivas de los autores, 7.ª edición, PDF de 90 páginas leído textualmente el 29-10-2026. Números impresos de diapositiva; 2PL es control por bloqueos, distinto de 2PC, y no elimina por sí solo interbloqueos · comprobado: 2026-10-29

Partida: `31966d8712eea1c4b1300d7656fde7587f46c1e7e4bd320b3b678c8ea8a56e2a` · propuesta: `f9dfeea47e2e4b476c59c6180221fe475ba0e2c366fb00583922e61f7da8a15e`

## AI-GSI-B3-T04-016

Decisión: pending_review · acción: revise.

Motivo: Conservar fases de 2PL y clave B; distinguir conceptos cercanos, incluido 2PC, sin afirmar ausencia de interbloqueos.

### Antes

¿Qué separación define 2PL?

- A. Cifrado simétrico y asimétrico
- B. Fase de adquisición y fase de liberación de bloqueos **(correcta)**
- C. Copia local y publicación
- D. Lectura de código y compilación

Explicación: El protocolo de dos fases regula bloqueos y puede producir interbloqueos que requieren tratamiento.

### Propuesta

¿Qué separación define 2PL?

- A. Preparación y decisión global de confirmación de una transacción distribuida.
- B. Adquisición sin liberar, seguida de liberación sin adquirir nuevos bloqueos. **(correcta)**
- C. Lectura de versiones, seguida de limpieza de las versiones que ya no se necesitan.
- D. Trabajo provisional, seguido de validación de conflictos antes de confirmar.

Explicación: 2PL divide la gestión de bloqueos en crecimiento y decrecimiento: primero pueden adquirirse sin liberarlos; después pueden liberarse sin adquirir nuevos. Bajo sus condiciones produce planificaciones serializables por conflictos, pero puede sufrir deadlocks. Sus variantes estrictas añaden condiciones de retención hasta commit o aborto. No debe confundirse con 2PC, que coordina confirmación distribuida, ni con las fases de un protocolo optimista o de mantenimiento de versiones.

- Error A: Preparar y decidir la confirmación distribuida corresponde a 2PC. Comparte la expresión dos fases, pero no es el protocolo de adquisición/liberación de bloqueos.
- Error C: Elegir y limpiar versiones pertenece al mecanismo multiversión y su mantenimiento; no define las fases de 2PL.
- Error D: Trabajo provisional y validación posterior describen control optimista, no crecimiento y decrecimiento de los bloqueos.

- [Silberschatz, Korth y Sudarshan: Database System Concepts, Concurrency Control](https://www.db-book.com/slides-dir/PDF-dir/ch18.pdf) · 18.9–18.13: 2PL básico, estricto y conversiones; 18.22–18.24: prevención de deadlock; 18.48–18.50: validación optimista; 18.54: multiversión · versión: Diapositivas de los autores, 7.ª edición, PDF de 90 páginas leído textualmente el 29-10-2026. Números impresos de diapositiva; 2PL es control por bloqueos, distinto de 2PC, y no elimina por sí solo interbloqueos · comprobado: 2026-10-29

Partida: `e4e6b47bf1271cabd6c117d2ae94f0f44e41e43dfc8ba50e05904928aca1e421` · propuesta: `d7c75be5abf8cc75f608167738dbeeb460447a79e75b5abddcdc9ed60eb7b7cd`

## AI-GSI-B3-T04-017

Decisión: pending_review · acción: revise.

Motivo: Conservar orden y transacciones cortas y clave A; contrastar errores plausibles de orden, interfaz y timeout, sin confundir reducción con garantía total.

### Antes

¿Qué práctica reduce riesgo de deadlock?

- A. Orden consistente de adquisición y transacciones cortas **(correcta)**
- B. Mantener transacciones abiertas indefinidamente
- C. Suprimir toda gestión de errores
- D. Tomar bloqueos en orden aleatorio

Explicación: El orden y duración de bloqueos reducen ciclos de espera y su impacto.

### Propuesta

¿Qué práctica reduce riesgo de deadlock?

- A. Adquirir recursos en un orden coherente y mantener cortas las transacciones. **(correcta)**
- B. Usar órdenes de adquisición distintos en cada ruta aunque accedan a los mismos recursos.
- C. Mantener bloqueos mientras se espera a que el usuario confirme los pasos de la interfaz.
- D. Ampliar los timeouts sin revisar el orden de adquisición o el tiempo de los bloqueos.

Explicación: Un orden coherente de adquisición evita ciclos entre los recursos cubiertos por ese orden y mantener cortas las transacciones reduce solapamiento y tiempo de retención. La práctica reduce riesgo, sin garantizar ausencia de todo deadlock en una aplicación completa. Deben tratarse los abortos del gestor y planificar reintentos de la transacción cuando sean seguros, teniendo en cuenta efectos externos e idempotencia. Un timeout limita espera, pero no demuestra por sí mismo que exista un interbloqueo.

- Error B: Órdenes opuestos sobre recursos comunes pueden formar el ciclo de espera que se quiere evitar.
- Error C: Esperar interacción humana con bloqueos prolonga retención y contención, aumentando oportunidades de interferencia.
- Error D: Un timeout mayor puede prolongar la espera; no corrige un ciclo ni el patrón de adquisición que lo origina.

- [PostgreSQL 18: 13.3 Explicit Locking](https://www.postgresql.org/docs/18/explicit-locking.html) · 13.3.2 bloqueo de filas; 13.3.4 deadlocks: orden consistente, transacciones abiertas, víctima y reintentos · versión: Documentación de versión 18 leída el 29-10-2026. Bloqueos pesimistas pueden producir espera/interbloqueo; reducir riesgo no acredita cero deadlocks o autoriza repetir efectos externos sin control · comprobado: 2026-10-29
- [Silberschatz, Korth y Sudarshan: Database System Concepts, Concurrency Control](https://www.db-book.com/slides-dir/PDF-dir/ch18.pdf) · 18.9–18.13: 2PL básico, estricto y conversiones; 18.22–18.24: prevención de deadlock; 18.48–18.50: validación optimista; 18.54: multiversión · versión: Diapositivas de los autores, 7.ª edición, PDF de 90 páginas leído textualmente el 29-10-2026. Números impresos de diapositiva; 2PL es control por bloqueos, distinto de 2PC, y no elimina por sí solo interbloqueos · comprobado: 2026-10-29

Partida: `bf325b7c941f891742200c84b48186d1765860c5dfe0d493620d6fa35f6334ff` · propuesta: `20fd12e68a93e11f70aec57cdae5ec2200e92faf8e9cb9bea83940e8333872ac`

## AI-GSI-B3-T04-019

Decisión: pending_review · acción: revise.

Motivo: Conservar árbol ordenado para rangos y clave D; aclarar navegación por clave escalar para no negar que otras estructuras puedan apoyar algunos rangos.

### Antes

¿Qué estructura se asocia a búsquedas por rango?

- A. Hash como garantía universal de rangos ordenados
- B. Lista de revocación
- C. Cola de impresión
- D. B-tree/B+tree **(correcta)**

Explicación: Los árboles ordenados son adecuados para rangos; hash se orienta a igualdad según motor.

### Propuesta

Para navegar por claves escalares ordenables y resolver comparaciones &lt;, &lt;=, &gt; y &gt;= por intervalos, ¿qué estructura es la habitual?

- A. Un índice hash que organiza valores mediante códigos de dispersión.
- B. Un índice invertido orientado a recuperar términos y sus listas de apariciones.
- C. Un mapa de bits que codifica pertenencia a categorías de valores.
- D. Un B-tree/B+tree que mantiene las claves en un orden de búsqueda. **(correcta)**

Explicación: Los árboles de búsqueda ordenados, como B-tree y B+tree, permiten localizar límites y recorrer claves para comparaciones por intervalo. PostgreSQL documenta B-tree para igualdad y rangos y hash para igualdad. Otros índices tienen operadores y usos propios, por lo que no se generaliza su comportamiento a cualquier motor. La elección real depende de selectividad, distribución, escrituras y plan: que exista un árbol apropiado no obliga al optimizador a usarlo ni garantiza mejor tiempo siempre.

- Error A: La dispersión hash favorece localizar igualdad; no conserva el orden de claves para navegar directamente entre límites de un intervalo.
- Error B: Un índice invertido recupera listas por términos u operadores de su clase; no es el árbol ordenado escalar que describe la pregunta.
- Error C: Los mapas de bits pueden combinar selecciones y apoyar ciertas consultas, pero no son la estructura de navegación ordenada por claves preguntada.

- [PostgreSQL 18: 11.2 Index Types](https://www.postgresql.org/docs/18/indexes-types.html) · 11.2.1 B-tree: igualdad, rangos y orden; 11.2.2 hash: igualdad; familias GIN/GiST/BRIN y sus operadores · versión: Documentación de versión 18 leída el 29-10-2026. B-tree/B+tree es la familia ordenada del concepto; no se promete que cualquier rango use índice o sea siempre más rápido que escanear · comprobado: 2026-10-29
- [PostgreSQL 18: 14.1 Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html) · Introducción; EXPLAIN Basics, costes y planes; EXPLAIN ANALYZE y Caveats: medición y ejecución real de consultas · versión: Documentación de versión 18 leída el 29-10-2026. Los costes estimados no son directamente milisegundos ni garantía de rendimiento; no se ejecutan consultas de los ejemplos ni se instala un SGBD · comprobado: 2026-10-29

Partida: `94398c6c03b8b4698eab4b48f355f2d4b029424263409d2fff6df3012dbb8259` · propuesta: `dcf051e78036039e4698295554e84c8cc534e417a7680625f27a88adec1de174`

## AI-GSI-B3-T04-013

Decisión: pending_review · acción: revise.

Motivo: Conservar validación optimista y clave D; precisar coordinación atómica de comprobación/escritura y tratamiento del conflicto, sin imponer un solo algoritmo.

### Antes

¿Qué caracteriza al control optimista?

- A. Eliminar el control transaccional
- B. Bloquear siempre toda la base de datos desde el inicio
- C. No detectar conflictos nunca
- D. Trabajar y validar versión o timestamp antes de confirmar **(correcta)**

Explicación: El optimista detecta cambios al validar y resulta útil cuando las colisiones son poco frecuentes.

### Propuesta

¿Qué caracteriza al control optimista?

- A. Adquirir bloqueos incompatibles antes de trabajar sobre el dato.
- B. Aplicar toda escritura sin comprobar si cambió el estado que se había leído.
- C. Comprobar solo que la espera no superó un timeout, sin validar cambios del dato.
- D. Trabajar sobre una lectura previa y validar versión o conflictos antes de confirmar. **(correcta)**

Explicación: El control optimista permite trabajo provisional y comprueba si el estado leído sigue siendo válido antes de aceptar la escritura. La comprobación puede usar versión, timestamps o conjuntos de lectura/escritura según el protocolo. Validar y aplicar deben coordinarse correctamente para no abrir otra carrera entre ambos pasos. Si hay conflicto se rechaza o reintenta con información actualizada; suele resultar útil cuando las colisiones son poco frecuentes. No significa ausencia absoluta de bloqueos internos o de control transaccional.

- Error A: Reservar acceso incompatible por adelantado es el enfoque pesimista, distinto de validar después del trabajo provisional.
- Error B: Aceptar sin comprobar cambios permite sobrescrituras no detectadas y elimina la validación que define el enfoque optimista.
- Error C: No exceder tiempo de espera no prueba que la versión o las dependencias leídas sigan válidas; tiempo y conflicto semántico son distintos.

- [Silberschatz, Korth y Sudarshan: Database System Concepts, Concurrency Control](https://www.db-book.com/slides-dir/PDF-dir/ch18.pdf) · 18.9–18.13: 2PL básico, estricto y conversiones; 18.22–18.24: prevención de deadlock; 18.48–18.50: validación optimista; 18.54: multiversión · versión: Diapositivas de los autores, 7.ª edición, PDF de 90 páginas leído textualmente el 29-10-2026. Números impresos de diapositiva; 2PL es control por bloqueos, distinto de 2PC, y no elimina por sí solo interbloqueos · comprobado: 2026-10-29
- [PostgreSQL 18: 13.2 Transaction Isolation](https://www.postgresql.org/docs/18/transaction-iso.html) · Definiciones dirty read, nonrepeatable read, phantom read; 13.2.1 Read Committed y actualizaciones; 13.2.2–3 snapshots y serialización · versión: Documentación de versión 18 leída el 29-10-2026. Se distinguen fenómenos del estándar y comportamiento concreto de PostgreSQL; MVCC no elimina toda anomalía o necesidad de reintento · comprobado: 2026-10-29

Partida: `f1cdd30c041bae936e8bf8fc78435b7ee3dc05b8e2caf7d21b713602b83b30e2` · propuesta: `8a34748af3cdb10516312e2acb744aec2bb829baf8f79c418c002efda68fb62f`
