# GSI A2 - PRACTICA ACTIVA 07

## Programacion y paradigmas - CUADERNO DE PREGUNTAS

**Ambito:** II.03 - Caracteristicas tecnicas de los lenguajes y paradigmas actuales de programacion.

**Metodo:** responde primero sin mirar soluciones. Para cada pregunta intenta clasificar por cinco ejes: ejecucion, tipado, paradigma, memoria y concurrencia. En mini-supuestos anade criterios de mantenimiento/soporte.

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

2 - Compilacion nativa

Define compilacion nativa en una frase y senala que produce antes de ejecutar.

3 - Bytecode / IL

Java y .NET generan normalmente una representacion intermedia. ¿Que ventaja conceptual aporta respecto a compilar solo a una CPU concreta?

4 - JIT

¿Que caracteriza a un compilador JIT?

5 - AOT

¿Que significa AOT y por que puede existir incluso en una plataforma que tambien admite JIT?

6 - Tipado estatico

Explica tipado estatico sin decir simplemente 'el tipo nunca cambia'.

7 - Tipado dinamico

¿Por que 'dinamico' no significa 'sin tipos'?

8 - Fuerte/debil

¿Por que conviene ser prudente con la etiqueta 'tipado fuerte/debil'?

9 - Inferencia de tipos

¿La inferencia de tipos convierte necesariamente un lenguaje estatico en dinamico?

10 - Genericos

¿Que problema resuelven los genericos?

11 - Nulabilidad

¿Que aporta tratar la nulabilidad como parte del sistema de tipos?

12 - Tipos algebraicos

¿Por que aparecen los tipos algebraicos en una lista moderna de conceptos de tipado aunque no haya que dominar su sintaxis?

13 - Conversion implicita

¿Que riesgo introduce un sistema con muchas conversiones implicitas?

14 - Bajo vs alto nivel

Compara bajo y alto nivel segun los apuntes.

15 - Portabilidad

¿Un lenguaje de alto nivel es automaticamente portable en cualquier sistema?

16 - TypeScript

Clasifica TypeScript segun los apuntes: relacion con JavaScript, tipado y resultado de compilacion/transpilacion.

17 - Compilado != nativo

Da un ejemplo del propio temario que demuestre que 'compilado' no implica necesariamente codigo maquina nativo inmediato.

18 - JIT != interprete puro

Una pregunta de test afirma: 'Si hay JIT, el programa se interpreta siempre instruccion a instruccion'. ¿Correcto?

19 - Estatico vs dinamico

¿Que afirmacion es mas correcta: 'estatico = seguro' o 'estatico = muchas comprobaciones antes de ejecutar'?

20 - Clasificacion multiple

Clasifica conceptualmente Java por ejecucion, tipado, memoria y paradigma, sin convertir ninguna etiqueta en exclusiva.

# PARTE C - Paradigmas

21 - Imperativo

¿Que expresa fundamentalmente el paradigma imperativo?

22 - Procedimental

¿Como se relaciona programacion procedimental con imperativa?

23 - Orientacion a objetos

Enumera los conceptos OO nucleares que recoge II.03.

24 - Composicion vs herencia

¿Por que los apuntes recomiendan no abusar de jerarquias de herencia profundas?

25 - Funcion de primera clase

¿Que significa que las funciones sean valores de primera clase?

26 - Funcion pura

Define funcion pura.

27 - Inmutabilidad

¿Por que la programacion funcional favorece inmutabilidad?

28 - map/filter/reduce

¿Que representan map, filter y reduce en el temario?

29 - Closure

¿Que concepto funcional permite a una funcion conservar/acceder al entorno lexico donde fue creada?

30 - Declarativo

¿Que diferencia esencial establecen los apuntes entre declarativo e imperativo?

31 - SQL

¿Por que SQL es el ejemplo esencial de declarativo?

32 - Programacion logica

¿Como se representa el conocimiento en programacion logica segun el ejemplo de los apuntes?

33 - Multiparadigma

¿Por que Java, C#, JavaScript o Python no deben clasificarse como 'solo OO' o 'solo funcional'?

34 - OO no garantiza buen diseno

Una aplicacion usa clases, herencia e interfaces. ¿Eso demuestra por si solo buen diseno?

35 - Efecto lateral

Da un ejemplo conceptual de efecto lateral observable.

36 - Recursividad

¿En que paradigma aparece como concepto frecuente en tus apuntes sin ser exclusiva de el?

37 - Dirigido por eventos

¿Que elementos caracterizan un modelo dirigido por eventos?

38 - Reactiva

¿Que modela principalmente la programacion reactiva?

39 - Backpressure

¿Que problema intenta resolver el backpressure?

40 - Elegir paradigma

Un sistema transforma una coleccion sin modificarla, encadenando filter y map. ¿Que estilo domina? ¿Significa que el lenguaje deba ser puramente funcional?

# PARTE D - Concurrencia y memoria

41 - Concurrencia vs paralelismo

Define ambos conceptos de forma que no puedan confundirse.

42 - Hilos y memoria compartida

¿Que ventaja y que dificultad general introduce el modelo de hilos con memoria compartida?

43 - Paso de mensajes / actores

¿Que idea diferencia el paso de mensajes de la memoria compartida?

44 - async/await

¿async/await implica necesariamente que dos tareas usen dos nucleos a la vez?

45 - Event loop

¿Que modelo citado en II.03 es caracteristico de JavaScript?

46 - Procesos

¿Por que procesos aparecen tambien como modelo de concurrencia?

47 - Modelo adecuado

Un consumidor recibe eventos mas lentamente que el productor. ¿Que concepto de la parte reactiva deberias mencionar?

48 - Asincronia en E/S

Una operacion espera red y no necesita CPU durante gran parte del tiempo. ¿Por que un modelo asincrono puede ser apropiado conceptualmente?

49 - CPU-bound

Una tarea realiza calculo intensivo puro. ¿Es correcto afirmar que añadir async/await por si solo la hara mas rapida?

50 - Concurrencia y efectos laterales

¿Por que mutabilidad y efectos laterales complican sistemas concurrentes segun el tema?

51 - Memoria manual

¿Que lenguajes cita II.03 como ejemplo de control explicito de memoria y que riesgos asocia?

52 - Garbage collection

¿Que lenguajes del tema se citan como ejemplos con GC?

53 - Fuga logica con GC

¿Como puede existir una fuga de memoria aunque haya garbage collector?

54 - Rust

¿Que mecanismo destaca II.03 en Rust para seguridad de memoria sin GC general?

55 - GC no lo arregla todo

Verdadero o falso: 'Con GC desaparecen todos los problemas de memoria'. Justifica.

56 - Manual vs GC vs ownership

Compara los tres enfoques en una frase cada uno.

57 - JavaScript

Clasifica JavaScript por tipado, paradigma y modelo de concurrencia citado.

58 - Go

¿Que elementos de concurrencia se destacan de Go en la tabla del tema?

59 - C#

¿Que mecanismo de concurrencia aparece destacado para C# en la tabla de lenguajes?

60 - Criterio de seleccion

¿Por que el modelo de concurrencia debe formar parte de la seleccion de lenguaje/runtime?

# PARTE E - Comparacion de lenguajes actuales

61 - C

Resume C en cuatro rasgos de la tabla.

62 - C++

¿Que diferencia principal anaden los apuntes respecto a C?

63 - Java

¿Que cuatro rasgos principales debes asociar a Java?

64 - C#

¿Que cuatro rasgos principales debes asociar a C#?

65 - Python

¿Que rasgos resalta el tema?

66 - JavaScript

¿Que rasgos resalta el tema?

67 - TypeScript

¿Que aporta respecto a JavaScript segun II.03?

68 - Go

¿Que rasgos resalta II.03?

69 - Rust

¿Que rasgos resalta II.03?

70 - SQL

¿Como se clasifica SQL en este tema?

71 - Java vs JavaScript

¿Por que no debes inferir relacion tecnica directa por el nombre?

72 - Java vs C#

¿Que similitudes de alto nivel reconoce el temario?

73 - Python vs TypeScript

¿Que contraste de tipado es mas relevante para el examen?

74 - Go vs Rust

Sin entrar en sintaxis, ¿que diferencia de enfoque destaca la tabla?

75 - No elegir por moda

Una tecnologia es tendencia pero el equipo no tiene experiencia y el soporte es incierto. ¿Que dice II.03?

# PARTE F - Fragmentos y reconocimiento

76 - Imperativo

Identifica el estilo dominante:

x = 0for n in datos: if n > 0: x = x + n

77 - Funcional

Identifica el estilo dominante:

resultado = reduce(sumar, map(f, filter(pred, datos)))

78 - Declarativo

SELECT departamento, COUNT(\*)

FROM empleadoGROUP BY departamento;

79 - OO

class Cuenta {

saldo ingresar(cantidad) { ... }}

80 - Evento

boton.onClick(() => guardar());

81 - Async

async function cargar() {

const r = await peticion(); return r;}

82 - Funcion pura

f(x) = x \* x

83 - Funcion con efecto

f(x):

contador\_global++ return x\*x

84 - Closure

crearContador():

n = 0 return () => { n = n + 1; return n }

85 - Tipado dinamico

x = 10

x = "diez"

86 - Generico

func max<T>(a:T, b:T) -> T

87 - Backpressure

Productor emite 100.000 eventos/s y consumidor procesa 20.000/s. ¿Que problema arquitectonico debes reconocer antes de hablar de lenguajes?

88 - Runtime

Un programa se distribuye como representacion intermedia y necesita un entorno de ejecucion que puede JIT-compilar. ¿Que familia conceptual describe?

# PARTE G - Modulos, errores y mini-supuestos

89 - Modulos y paquetes

¿Que objetivo general tienen modulos/paquetes en sistemas modernos?

90 - Excepciones vs tipos de resultado

¿Que idea comun resuelve el manejo de excepciones o los tipos de resultado?

91 - Servicio empresarial

Debes elegir lenguaje/runtime para una aplicacion publica empresarial con 10 anos de mantenimiento previsto. ¿Que criterios de II.03 pondrias antes que 'es el lenguaje mas popular hoy'?

92 - Sistema embebido de alto control

El requisito dominante es control fino de recursos y rendimiento, aceptando mayor responsabilidad de memoria. ¿Que familia de lenguajes del cuadro es coherente considerar?

93 - Backend con mucha E/S

Servicio con miles de operaciones de red concurrentes y poco calculo por peticion. ¿Que aspecto del lenguaje/runtime debes evaluar especialmente?

94 - Migracion JavaScript

Un gran frontend JavaScript sufre muchos errores de contratos de tipos en equipos numerosos. ¿Que alternativa del propio cuadro puede aportar tipado estatico gradual sin cambiar el ecosistema de ejecucion final?

95 - Seguridad de memoria

Un componente de sistemas requiere rendimiento nativo y se quiere reducir una parte importante de errores de memoria sin GC general. ¿Que lenguaje del cuadro merece evaluarse y que concepto debes citar?

96 - Supuesto de 20 minutos

Un organismo debe elegir tecnologia para: API empresarial mantenible, procesamiento de trabajos asincronos y una herramienta de sistemas de alto rendimiento. Estructura una respuesta sin elegir por moda.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes |
| --- | --- | --- | --- |
| B Ejecucion/tipado |  |  |  |
| C Paradigmas |  |  |  |
| D Concurrencia/memoria |  |  |  |
| E Lenguajes |  |  |  |
| F Fragmentos |  |  |  |
| G Supuestos |  |  |  |

Base exclusiva de contenido nuclear: GSI A2 Bloque II V2.1, tema II.03. Se usan fragmentos de pseudocodigo solo para reconocer conceptos; no se exige sintaxis de un lenguaje no contemplada por los apuntes.
