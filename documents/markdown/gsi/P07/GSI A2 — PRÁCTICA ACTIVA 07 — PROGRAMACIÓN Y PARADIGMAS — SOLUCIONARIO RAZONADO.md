# GSI A2 - PRACTICA ACTIVA 07

## Programacion y paradigmas - SOLUCIONARIO RAZONADO

**Criterio:** la respuesta correcta debe conservar la terminologia y el nivel de II.03 V2.1. Cuando haya varias implementaciones posibles, evita convertir una implementacion en propiedad absoluta del lenguaje.

# PARTE A - Tabla maestra de contraste

| Eje | Contraste principal | Idea que debes dominar |
| --- | --- | --- |
| Ejecucion | nativo / interprete / bytecode-IL / JIT / AOT | Son mecanismos de implementacion; no conviertas "compilado" e "interpretado" en categorias rigidas del lenguaje. |
| Tipado | estatico / dinamico | Estatico: muchas comprobaciones antes de ejecutar. Dinamico: principalmente en ejecucion. Dinamico no significa "sin tipos". |
| Paradigma | imperativo / OO / funcional / declarativo / eventos-reactivo | Un lenguaje moderno puede ser multiparadigma. |
| Memoria | manual / GC / ownership-borrowing | Manual ofrece control con riesgos; GC reduce gestion manual pero no evita fugas logicas; Rust usa ownership/borrowing sin GC general. |
| Concurrencia | hilos / mensajes-actores / async-await / event loop / procesos | Concurrencia no implica paralelismo. |
| Seleccion | requisitos / ecosistema / soporte / operacion | No elegir por moda: justificar rendimiento, seguridad, mantenibilidad, personal, soporte, integracion, pruebas y despliegue. |

Esta tabla resume exactamente los ejes que II.03 V2.1 prioriza. No sustituye el tema; sirve para segunda vuelta y memoria activa.

# PARTE B - Ejecucion, abstraccion y tipado

1 - Lenguaje vs implementacion

¿Por que es incorrecto afirmar que un lenguaje es de forma absoluta 'compilado' o 'interpretado'?

**Respuesta modelo:** La frontera no es absoluta: un lenguaje puede tener varias implementaciones. Lo correcto es describir el mecanismo concreto: compilacion nativa, interpretacion, bytecode/IL, JIT o AOT.

2 - Compilacion nativa

Define compilacion nativa en una frase y senala que produce antes de ejecutar.

**Respuesta modelo:** Transforma codigo fuente en instrucciones nativas de una arquitectura antes de la ejecucion.

3 - Bytecode / IL

Java y .NET generan normalmente una representacion intermedia. ¿Que ventaja conceptual aporta respecto a compilar solo a una CPU concreta?

**Respuesta modelo:** Permite que un runtime/maquina virtual ejecute la representacion intermedia y pueda realizar gestion, verificacion y compilacion posterior. La portabilidad depende del runtime disponible.

4 - JIT

¿Que caracteriza a un compilador JIT?

**Respuesta modelo:** Compila durante la ejecucion partes del programa a codigo nativo. Por eso JIT no equivale a interprete puro.

5 - AOT

¿Que significa AOT y por que puede existir incluso en una plataforma que tambien admite JIT?

**Respuesta modelo:** Ahead Of Time: compila anticipadamente. Un runtime puede ofrecer ambos caminos; no son categorias mutuamente excluyentes.

6 - Tipado estatico

Explica tipado estatico sin decir simplemente 'el tipo nunca cambia'.

**Respuesta modelo:** Muchas comprobaciones de tipos se realizan antes de ejecutar. Eso no impide inferencia de tipos, genericos o conversiones controladas.

7 - Tipado dinamico

¿Por que 'dinamico' no significa 'sin tipos'?

**Respuesta modelo:** Porque los valores siguen teniendo tipos y las comprobaciones se realizan principalmente durante la ejecucion.

8 - Fuerte/debil

¿Por que conviene ser prudente con la etiqueta 'tipado fuerte/debil'?

**Respuesta modelo:** Porque es una distincion menos formal y suele aludir al grado de conversiones implicitas y restricciones. No debe tratarse como una taxonomia universal con fronteras exactas.

9 - Inferencia de tipos

¿La inferencia de tipos convierte necesariamente un lenguaje estatico en dinamico?

**Respuesta modelo:** No. Un compilador puede inferir tipos y seguir realizando comprobaciones estaticas.

10 - Genericos

¿Que problema resuelven los genericos?

**Respuesta modelo:** Permiten reutilizar algoritmos/estructuras manteniendo informacion de tipos, evitando duplicacion y conversiones innecesarias.

11 - Nulabilidad

¿Que aporta tratar la nulabilidad como parte del sistema de tipos?

**Respuesta modelo:** Permite expresar y comprobar mejor cuando una referencia/valor puede estar ausente, reduciendo errores y haciendo explicitos contratos.

12 - Tipos algebraicos

¿Por que aparecen los tipos algebraicos en una lista moderna de conceptos de tipado aunque no haya que dominar su sintaxis?

**Respuesta modelo:** Porque permiten modelar combinaciones/alternativas de valores de forma expresiva y verificable. Para GSI basta reconocerlos como capacidad del sistema de tipos.

13 - Conversion implicita

¿Que riesgo introduce un sistema con muchas conversiones implicitas?

**Respuesta modelo:** Puede ocultar errores y hacer menos predecible el comportamiento. La conversion explicita hace visible la intencion; la permisividad depende del lenguaje.

14 - Bajo vs alto nivel

Compara bajo y alto nivel segun los apuntes.

**Respuesta modelo:** Bajo nivel expone mas detalles cercanos a la maquina. Alto nivel ofrece mas abstracciones de datos, control, memoria y bibliotecas. Mas abstraccion suele mejorar productividad/portabilidad, aunque puede ocultar costes.

15 - Portabilidad

¿Un lenguaje de alto nivel es automaticamente portable en cualquier sistema?

**Respuesta modelo:** No. La abstraccion favorece portabilidad, pero depende de implementacion, runtime, bibliotecas, SO, arquitectura y dependencias.

16 - TypeScript

Clasifica TypeScript segun los apuntes: relacion con JavaScript, tipado y resultado de compilacion/transpilacion.

**Respuesta modelo:** Es un superset de JavaScript con sistema de tipos estatico gradual y transpila a JavaScript.

17 - Compilado != nativo

Da un ejemplo del propio temario que demuestre que 'compilado' no implica necesariamente codigo maquina nativo inmediato.

**Respuesta modelo:** Java o C#: compilan a bytecode/IL y se ejecutan sobre JVM/CLR, pudiendo usar JIT/AOT.

18 - JIT != interprete puro

Una pregunta de test afirma: 'Si hay JIT, el programa se interpreta siempre instruccion a instruccion'. ¿Correcto?

**Respuesta modelo:** No. JIT precisamente compila durante la ejecucion partes del programa a codigo nativo.

19 - Estatico vs dinamico

¿Que afirmacion es mas correcta: 'estatico = seguro' o 'estatico = muchas comprobaciones antes de ejecutar'?

**Respuesta modelo:** La segunda. El tipado estatico puede prevenir determinadas clases de errores, pero no garantiza seguridad ni correccion total.

20 - Clasificacion multiple

Clasifica conceptualmente Java por ejecucion, tipado, memoria y paradigma, sin convertir ninguna etiqueta en exclusiva.

**Respuesta modelo:** Tipado estatico; bytecode/JVM con JIT/AOT segun runtime; GC; OO y multiparadigma con capacidades funcionales.

# PARTE C - Paradigmas

21 - Imperativo

¿Que expresa fundamentalmente el paradigma imperativo?

**Respuesta modelo:** Como cambia el estado mediante secuencias de instrucciones, asignaciones, condiciones, bucles y procedimientos.

22 - Procedimental

¿Como se relaciona programacion procedimental con imperativa?

**Respuesta modelo:** Es una forma de organizar programacion imperativa alrededor de procedimientos/subrutinas. C es ejemplo clasico en los apuntes.

23 - Orientacion a objetos

Enumera los conceptos OO nucleares que recoge II.03.

**Respuesta modelo:** Clase, objeto, encapsulacion, abstraccion, herencia, polimorfismo, composicion e interfaces.

24 - Composicion vs herencia

¿Por que los apuntes recomiendan no abusar de jerarquias de herencia profundas?

**Respuesta modelo:** Porque la composicion suele permitir menor acoplamiento. La OO no garantiza buen diseno: importan cohesión, interfaces y responsabilidades.

25 - Funcion de primera clase

¿Que significa que las funciones sean valores de primera clase?

**Respuesta modelo:** Que pueden tratarse como valores: almacenarse, pasarse como argumentos, devolverse y componerse segun capacidades del lenguaje.

26 - Funcion pura

Define funcion pura.

**Respuesta modelo:** Depende solo de sus entradas y no produce efectos laterales observables.

27 - Inmutabilidad

¿Por que la programacion funcional favorece inmutabilidad?

**Respuesta modelo:** Reduce cambios de estado y efectos laterales, facilitando razonamiento, pruebas y ciertos escenarios de paralelismo.

28 - map/filter/reduce

¿Que representan map, filter y reduce en el temario?

**Respuesta modelo:** Operaciones funcionales habituales: transformar elementos, seleccionar por predicado y combinar una coleccion en un resultado.

29 - Closure

¿Que concepto funcional permite a una funcion conservar/acceder al entorno lexico donde fue creada?

**Respuesta modelo:** Closure/cierre.

30 - Declarativo

¿Que diferencia esencial establecen los apuntes entre declarativo e imperativo?

**Respuesta modelo:** Declarativo expresa principalmente que resultado se desea; imperativo detalla mas como obtenerlo.

31 - SQL

¿Por que SQL es el ejemplo esencial de declarativo?

**Respuesta modelo:** Porque la consulta describe el conjunto/resultado deseado y el optimizador decide gran parte del plan de ejecucion.

32 - Programacion logica

¿Como se representa el conocimiento en programacion logica segun el ejemplo de los apuntes?

**Respuesta modelo:** Mediante hechos y reglas; Prolog es el ejemplo citado.

33 - Multiparadigma

¿Por que Java, C#, JavaScript o Python no deben clasificarse como 'solo OO' o 'solo funcional'?

**Respuesta modelo:** Porque incorporan capacidades de varios paradigmas. El temario insiste en que muchos lenguajes actuales son multiparadigma.

34 - OO no garantiza buen diseno

Una aplicacion usa clases, herencia e interfaces. ¿Eso demuestra por si solo buen diseno?

**Respuesta modelo:** No. Importan cohesión, acoplamiento, responsabilidades, composicion y calidad de interfaces.

35 - Efecto lateral

Da un ejemplo conceptual de efecto lateral observable.

**Respuesta modelo:** Modificar estado externo/global, escribir en fichero/BD, enviar una peticion o cambiar un objeto compartido. Una funcion pura evitaria esos efectos.

36 - Recursividad

¿En que paradigma aparece como concepto frecuente en tus apuntes sin ser exclusiva de el?

**Respuesta modelo:** En funcional, aunque la recursividad puede usarse en multiples paradigmas.

37 - Dirigido por eventos

¿Que elementos caracterizan un modelo dirigido por eventos?

**Respuesta modelo:** Eventos y callbacks/listeners/manejadores que reaccionan cuando ocurre algo. Es habitual en GUI, navegador y sistemas distribuidos.

38 - Reactiva

¿Que modela principalmente la programacion reactiva?

**Respuesta modelo:** Flujos asincronos y propagacion de cambios.

39 - Backpressure

¿Que problema intenta resolver el backpressure?

**Respuesta modelo:** Regular productores y consumidores cuando el productor genera datos/eventos mas rapido de lo que el consumidor puede procesar.

40 - Elegir paradigma

Un sistema transforma una coleccion sin modificarla, encadenando filter y map. ¿Que estilo domina? ¿Significa que el lenguaje deba ser puramente funcional?

**Respuesta modelo:** Domina estilo funcional. No: un lenguaje multiparadigma puede usar operaciones funcionales sin ser puramente funcional.

# PARTE D - Concurrencia y memoria

41 - Concurrencia vs paralelismo

Define ambos conceptos de forma que no puedan confundirse.

**Respuesta modelo:** Concurrencia: progreso de varias tareas potencialmente solapado. Paralelismo: ejecucion real simultanea de tareas.

42 - Hilos y memoria compartida

¿Que ventaja y que dificultad general introduce el modelo de hilos con memoria compartida?

**Respuesta modelo:** Compartir datos puede ser eficiente, pero obliga a coordinar acceso y sincronizacion para evitar interferencias.

43 - Paso de mensajes / actores

¿Que idea diferencia el paso de mensajes de la memoria compartida?

**Respuesta modelo:** Los componentes coordinan enviando mensajes en lugar de depender de acceso directo al mismo estado compartido.

44 - async/await

¿async/await implica necesariamente que dos tareas usen dos nucleos a la vez?

**Respuesta modelo:** No. Es un modelo para expresar asincronia/concurrencia; no equivale por si solo a paralelismo.

45 - Event loop

¿Que modelo citado en II.03 es caracteristico de JavaScript?

**Respuesta modelo:** Event loop, combinado con eventos/callbacks/promesas segun entorno. La idea de examen es modelo dirigido por eventos, no detalles de una implementacion concreta.

46 - Procesos

¿Por que procesos aparecen tambien como modelo de concurrencia?

**Respuesta modelo:** Porque permiten ejecutar unidades separadas con aislamiento de memoria mayor que hilos, coordinandose mediante mecanismos de comunicacion.

47 - Modelo adecuado

Un consumidor recibe eventos mas lentamente que el productor. ¿Que concepto de la parte reactiva deberias mencionar?

**Respuesta modelo:** Backpressure o mecanismo equivalente de regulacion de flujo.

48 - Asincronia en E/S

Una operacion espera red y no necesita CPU durante gran parte del tiempo. ¿Por que un modelo asincrono puede ser apropiado conceptualmente?

**Respuesta modelo:** Porque permite que el hilo/loop progrese con otras tareas mientras espera E/S. Esto no significa que la operacion se vuelva paralela automaticamente.

49 - CPU-bound

Una tarea realiza calculo intensivo puro. ¿Es correcto afirmar que añadir async/await por si solo la hara mas rapida?

**Respuesta modelo:** No. Asincronia y paralelismo son conceptos distintos.

50 - Concurrencia y efectos laterales

¿Por que mutabilidad y efectos laterales complican sistemas concurrentes segun el tema?

**Respuesta modelo:** Porque varias tareas pueden observar/modificar estado y necesitan coordinacion. Menos estado mutable facilita razonamiento.

51 - Memoria manual

¿Que lenguajes cita II.03 como ejemplo de control explicito de memoria y que riesgos asocia?

**Respuesta modelo:** C/C++. Riesgos: fugas, use-after-free y corrupcion de memoria.

52 - Garbage collection

¿Que lenguajes del tema se citan como ejemplos con GC?

**Respuesta modelo:** Java, .NET/C#, Python y JavaScript, entre otros.

53 - Fuga logica con GC

¿Como puede existir una fuga de memoria aunque haya garbage collector?

**Respuesta modelo:** Si el programa mantiene referencias a objetos que ya no necesita, siguen siendo alcanzables y el GC no puede liberarlos.

54 - Rust

¿Que mecanismo destaca II.03 en Rust para seguridad de memoria sin GC general?

**Respuesta modelo:** Ownership y borrowing, con muchas garantias impuestas en compilacion.

55 - GC no lo arregla todo

Verdadero o falso: 'Con GC desaparecen todos los problemas de memoria'. Justifica.

**Respuesta modelo:** Falso. Reduce gestion manual, pero siguen existiendo fugas logicas, presion de memoria y problemas de ciclo de vida de otros recursos.

56 - Manual vs GC vs ownership

Compara los tres enfoques en una frase cada uno.

**Respuesta modelo:** Manual: maximo control y responsabilidad explicita. GC: recoleccion automatica de objetos no alcanzables. Ownership/borrowing: reglas de propiedad/uso verificadas en gran parte en compilacion sin GC general.

57 - JavaScript

Clasifica JavaScript por tipado, paradigma y modelo de concurrencia citado.

**Respuesta modelo:** Tipado dinamico, multiparadigma con funciones de primera clase, web; modelo dirigido por eventos/event loop.

58 - Go

¿Que elementos de concurrencia se destacan de Go en la tabla del tema?

**Respuesta modelo:** Goroutines y channels.

59 - C#

¿Que mecanismo de concurrencia aparece destacado para C# en la tabla de lenguajes?

**Respuesta modelo:** async/await, dentro del ecosistema .NET.

60 - Criterio de seleccion

¿Por que el modelo de concurrencia debe formar parte de la seleccion de lenguaje/runtime?

**Respuesta modelo:** Porque afecta capacidad de manejar carga, complejidad, mantenibilidad, bibliotecas, operacion y competencias del equipo.

# PARTE E - Comparacion de lenguajes actuales

61 - C

Resume C en cuatro rasgos de la tabla.

**Respuesta modelo:** Compilado, procedimental, control de memoria, sistemas/rendimiento.

62 - C++

¿Que diferencia principal anaden los apuntes respecto a C?

**Respuesta modelo:** Multiparadigma, OO y genericos, manteniendo compilacion nativa y alto control con mayor complejidad.

63 - Java

¿Que cuatro rasgos principales debes asociar a Java?

**Respuesta modelo:** Tipado estatico, JVM, GC, OO + funcional/multiparadigma y ecosistema empresarial.

64 - C#

¿Que cuatro rasgos principales debes asociar a C#?

**Respuesta modelo:** Tipado estatico, .NET/CLR, multiparadigma, async/await y ecosistema empresarial.

65 - Python

¿Que rasgos resalta el tema?

**Respuesta modelo:** Tipado dinamico, alto nivel, multiparadigma, scripting, datos y automatizacion.

66 - JavaScript

¿Que rasgos resalta el tema?

**Respuesta modelo:** Tipado dinamico, web, event loop, funciones de primera clase; cliente y servidor.

67 - TypeScript

¿Que aporta respecto a JavaScript segun II.03?

**Respuesta modelo:** Un sistema de tipos estatico gradual; transpila a JavaScript.

68 - Go

¿Que rasgos resalta II.03?

**Respuesta modelo:** Compilado, tipado estatico, goroutines/channels, servicios e infraestructura.

69 - Rust

¿Que rasgos resalta II.03?

**Respuesta modelo:** Compilado, tipado estatico, ownership y seguridad de memoria sin GC general.

70 - SQL

¿Como se clasifica SQL en este tema?

**Respuesta modelo:** Declarativo y orientado a consulta/manipulacion relacional.

71 - Java vs JavaScript

¿Por que no debes inferir relacion tecnica directa por el nombre?

**Respuesta modelo:** Son lenguajes distintos. Java se asocia a JVM, tipado estatico y ecosistema empresarial; JavaScript a tipado dinamico, web y event loop.

72 - Java vs C#

¿Que similitudes de alto nivel reconoce el temario?

**Respuesta modelo:** Tipado estatico, runtime/maquina virtual (JVM/CLR), GC, OO/multiparadigma y ecosistemas empresariales.

73 - Python vs TypeScript

¿Que contraste de tipado es mas relevante para el examen?

**Respuesta modelo:** Python se presenta como dinamico; TypeScript como estatico gradual sobre JavaScript.

74 - Go vs Rust

Sin entrar en sintaxis, ¿que diferencia de enfoque destaca la tabla?

**Respuesta modelo:** Go enfatiza goroutines/channels para servicios e infraestructura; Rust ownership/borrowing y seguridad de memoria sin GC general.

75 - No elegir por moda

Una tecnologia es tendencia pero el equipo no tiene experiencia y el soporte es incierto. ¿Que dice II.03?

**Respuesta modelo:** La moda/preferencia no basta. Deben evaluarse requisitos, rendimiento, seguridad, ecosistema, profesionales, soporte, ciclo de vida, portabilidad, integracion, observabilidad, pruebas, despliegue y mantenimiento.

# PARTE F - Fragmentos y reconocimiento

76 - Imperativo

Identifica el estilo dominante:

x = 0for n in datos: if n > 0: x = x + n

**Respuesta modelo:** Imperativo/procedimental: estado mutable, asignaciones, bucle y condicion.

77 - Funcional

Identifica el estilo dominante:

resultado = reduce(sumar, map(f, filter(pred, datos)))

**Respuesta modelo:** Funcional: composicion y operaciones de orden superior sobre coleccion.

78 - Declarativo

SELECT departamento, COUNT(\*)

FROM empleadoGROUP BY departamento;

**Respuesta modelo:** Declarativo: se expresa el resultado deseado; el SGBD decide el plan.

79 - OO

class Cuenta {

saldo ingresar(cantidad) { ... }}

**Respuesta modelo:** Orientacion a objetos: estado y comportamiento agrupados en un objeto/clase.

80 - Evento

boton.onClick(() => guardar());

**Respuesta modelo:** Modelo dirigido por eventos: un manejador reacciona al evento click.

81 - Async

async function cargar() {

const r = await peticion(); return r;}

**Respuesta modelo:** Programacion asincrona con async/await. No demuestra paralelismo.

82 - Funcion pura

f(x) = x \* x

**Respuesta modelo:** Puede ser pura si depende solo de x y no altera/consulta estado externo observable.

83 - Funcion con efecto

f(x):

contador\_global++ return x\*x

**Respuesta modelo:** No es pura por modificar estado global: tiene efecto lateral.

84 - Closure

crearContador():

n = 0 return () => { n = n + 1; return n }

**Respuesta modelo:** Closure: la funcion devuelta conserva/accede al entorno donde fue creada (n).

85 - Tipado dinamico

x = 10

x = "diez"

**Respuesta modelo:** El fragmento sugiere una variable que puede referenciar valores de tipos distintos en ejecucion. Es compatible con tipado dinamico, pero el codigo aislado no identifica de forma universal el lenguaje.

86 - Generico

func max<T>(a:T, b:T) -> T

**Respuesta modelo:** Representa una operacion parametrizada por tipo: idea de genericos. La sintaxis es pseudocodigo, no una pregunta sobre lenguaje concreto.

87 - Backpressure

Productor emite 100.000 eventos/s y consumidor procesa 20.000/s. ¿Que problema arquitectonico debes reconocer antes de hablar de lenguajes?

**Respuesta modelo:** Desajuste productor-consumidor; se necesita regulacion/backpressure, buffering limitado u otra politica. El temario usa backpressure como concepto reactivo.

88 - Runtime

Un programa se distribuye como representacion intermedia y necesita un entorno de ejecucion que puede JIT-compilar. ¿Que familia conceptual describe?

**Respuesta modelo:** Modelo bytecode/IL + runtime/maquina virtual con JIT posible, como Java/.NET en los apuntes.

# PARTE G - Modulos, errores y mini-supuestos

89 - Modulos y paquetes

¿Que objetivo general tienen modulos/paquetes en sistemas modernos?

**Respuesta modelo:** Estructurar codigo y fronteras, organizar dependencias y facilitar mantenimiento/reutilizacion. Se complementan con gestion de versiones/repositorios.

90 - Excepciones vs tipos de resultado

¿Que idea comun resuelve el manejo de excepciones o los tipos de resultado?

**Respuesta modelo:** Separar/representar el flujo normal y las condiciones de error de forma controlada. El mecanismo concreto depende del lenguaje.

91 - Servicio empresarial

Debes elegir lenguaje/runtime para una aplicacion publica empresarial con 10 anos de mantenimiento previsto. ¿Que criterios de II.03 pondrias antes que 'es el lenguaje mas popular hoy'?

**Respuesta modelo:** Soporte/ciclo de vida, disponibilidad de profesionales, seguridad, ecosistema, integracion, mantenibilidad, pruebas, observabilidad, despliegue, rendimiento y coste de operacion.

92 - Sistema embebido de alto control

El requisito dominante es control fino de recursos y rendimiento, aceptando mayor responsabilidad de memoria. ¿Que familia de lenguajes del cuadro es coherente considerar?

**Respuesta modelo:** C/C++ como candidatos por control explicito y rendimiento. La respuesta debe reconocer a cambio riesgos de gestion manual de memoria.

93 - Backend con mucha E/S

Servicio con miles de operaciones de red concurrentes y poco calculo por peticion. ¿Que aspecto del lenguaje/runtime debes evaluar especialmente?

**Respuesta modelo:** Modelo de concurrencia/asincronia: async/await, event loop, hilos o mensajes, junto a bibliotecas, operacion y mantenibilidad. No basta decir 'usar X lenguaje'.

94 - Migracion JavaScript

Un gran frontend JavaScript sufre muchos errores de contratos de tipos en equipos numerosos. ¿Que alternativa del propio cuadro puede aportar tipado estatico gradual sin cambiar el ecosistema de ejecucion final?

**Respuesta modelo:** TypeScript, que anade sistema de tipos estatico gradual y transpila a JavaScript.

95 - Seguridad de memoria

Un componente de sistemas requiere rendimiento nativo y se quiere reducir una parte importante de errores de memoria sin GC general. ¿Que lenguaje del cuadro merece evaluarse y que concepto debes citar?

**Respuesta modelo:** Rust; ownership y borrowing para imponer gran parte de la seguridad de memoria en compilacion.

96 - Supuesto de 20 minutos

Un organismo debe elegir tecnologia para: API empresarial mantenible, procesamiento de trabajos asincronos y una herramienta de sistemas de alto rendimiento. Estructura una respuesta sin elegir por moda.

**Respuesta modelo:** Separar requisitos por componente. Evaluar 2-3 alternativas por ejecucion/runtime, tipado, memoria, paradigma/concurrencia, ecosistema, seguridad, profesionales, soporte, pruebas, despliegue y operacion. Es razonable que no todos los componentes usen el mismo lenguaje. Documentar riesgos de heterogeneidad y mantenimiento.

# Patron mental de examen

* ¿Como se ejecuta? nativo, interpretacion, intermedio, JIT/AOT.
* ¿Como tipa? estatico/dinamico; inferencia/genericos no cambian automaticamente esa categoria.
* ¿Que paradigma domina? imperativo, OO, funcional, declarativo, eventos/reactivo.
* ¿Como gestiona memoria? manual, GC, ownership/borrowing.
* ¿Como expresa concurrencia? hilos, mensajes, async/await, event loop o procesos.
* ¿Por que lo elegiria en un proyecto? soporte, seguridad, equipo, integracion, pruebas, despliegue y coste de mantenimiento.

Base exclusiva de contenido nuclear: GSI A2 Bloque II V2.1, tema II.03. Se usan fragmentos de pseudocodigo solo para reconocer conceptos; no se exige sintaxis de un lenguaje no contemplada por los apuntes.
