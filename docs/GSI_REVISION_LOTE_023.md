# GSI-EDITORIAL-023 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `8bc2874397a71c6b44d65fa8b73274667037ca6c1045c71984a8ea9e699c9e65`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P17-096

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya bien diferenciados; completar explicación del monitor frente a mutex, semáforo y condición.

### Antes

¿Qué es un monitor en concurrencia?

- A. Un mecanismo de exclusión mutua que permite a un único hilo poseer el bloqueo asociado a una sección crítica.
- B. Un contador sincronizado que limita cuántos hilos pueden acceder simultáneamente a un recurso compartido.
- C. Una abstracción que encapsula estado y sincronización, normalmente con exclusión mutua y condiciones. **(correcta)**
- D. Un mecanismo que permite esperar y ser notificado cuando cambia una condición protegida por sincronización.

Explicación: Monitor es un concepto de sincronización, no un dispositivo de visualización.

### Propuesta

¿Qué es un monitor en concurrencia?

- A. Un mecanismo de exclusión mutua que permite a un único hilo poseer el bloqueo asociado a una sección crítica.
- B. Un contador sincronizado que limita cuántos hilos pueden acceder simultáneamente a un recurso compartido.
- C. Una abstracción que encapsula estado y sincronización, normalmente con exclusión mutua y condiciones. **(correcta)**
- D. Un mecanismo que permite esperar y ser notificado cuando cambia una condición protegida por sincronización.

Explicación: Un monitor reúne estado compartido, operaciones que lo manipulan y reglas de sincronización. La exclusión mutua protege la entrada y las condiciones permiten esperar a que sea posible continuar. No es únicamente el bloqueo ni una variable de condición aislada. Mesa y Java son ejemplos con reglas concretas de espera y notificación; la abstracción no garantiza por sí sola ausencia de deadlock, inanición o errores del protocolo de uso.

- Error A: Describe un mutex o bloqueo de exclusión. Es un ingrediente posible, pero no integra por sí solo estado, operaciones y condiciones como el monitor.
- Error B: Describe un semáforo contador. Controlar un número de permisos no constituye la abstracción que encapsula datos y operaciones.
- Error D: Describe una variable de condición y su notificación. Es una parte de la coordinación, no el conjunto encapsulado del monitor.

- [Lampson y Redell: Experience with Processes and Monitors in Mesa](https://people.eecs.berkeley.edu/~brewer/cs262/Mesa.pdf) · Secciones 3 Monitors y 3.1 Monitor modules, PDF p. 6; 4 Condition variables, PDF pp. 10–11: estado, operaciones, exclusión y espera · versión: Artículo publicado en CACM 23(2), febrero 1980, pp. 105–117; copia de 23 páginas con aviso de OCR histórico y posibles errores. No se ejecuta conversión/OCR ni se trasladan detalles de planificación de Mesa a otros monitores · comprobado: 2026-10-27
- [Oracle: Java Language Specification, Threads and Locks](https://docs.oracle.com/javase/specs/jls/se25/html/jls-17.html) · 17.1 Synchronization y 17.2 Wait Sets and Notification: monitor asociado al objeto, exclusión y conjunto de espera · versión: Java SE 25, edición identificada de la especificación; ejemplo de implementación, sin afirmar que sea la última edición ni universalizar semántica a todo monitor · comprobado: 2026-10-27

Partida: `c64a9a274ffaa1b2488affc214eec7d4409d9e272d83bf8b94948469a66ebe76` · propuesta: `3a112776c9d2aafcf6a3702e60a5b3afd49c23d79c0b5ef5cc858a789e18b9d4`

## MAN-GSI-P17-098

Decisión: pending_review · acción: revise.

Motivo: Conservar syscall y clave B; comparar biblioteca, excepción y API remota sin distractores de licencia o electricidad.

### Antes

¿Qué es una llamada al sistema (system call)?

- A. Una llamada HTTP a un SaaS necesariamente.
- B. Un mecanismo por el que un programa solicita un servicio al kernel. **(correcta)**
- C. Una interrupción eléctrica.
- D. Un cambio de licencia.

Explicación: Las aplicaciones usan syscalls para operaciones privilegiadas gestionadas por el SO.

### Propuesta

¿Qué es una llamada al sistema (system call)?

- A. Una llamada a una rutina de biblioteca que se resuelve en modo usuario.
- B. Una interfaz para que un programa solicite al núcleo un servicio del sistema. **(correcta)**
- C. Una excepción provocada al ejecutar una instrucción inválida para la CPU.
- D. Una petición de red a una aplicación que expone una API de servicio.

Explicación: La llamada al sistema es la interfaz mediante la que una aplicación solicita servicios al núcleo, por ejemplo gestionar archivos, procesos o memoria. Suele invocarse a través de una biblioteca, pero no toda función de biblioteca realiza una syscall ni existe correspondencia obligatoria uno-a-uno. El núcleo comprueba las condiciones y permisos correspondientes; entrar mediante esa interfaz no convierte al programa en código privilegiado permanente.

- Error A: Una rutina resuelta íntegramente en modo usuario no solicita por ese hecho un servicio al núcleo. Biblioteca e interfaz de sistema son capas distintas.
- Error C: Una excepción por instrucción inválida comunica un fallo de ejecución. No equivale a la petición intencional de un servicio mediante syscall.
- Error D: Una API de una aplicación remota no es la interfaz aplicación/kernel. Su implementación puede usar syscalls, pero son niveles diferentes.

- [Linux man-pages: syscalls(2)](https://man7.org/linux/man-pages/man2/syscalls.2.html) · DESCRIPTION y System calls and library wrapper functions: interfaz aplicación/kernel y envolturas de biblioteca · versión: Página primaria del proyecto Linux man-pages consultada; sin deducir correspondencia uno-a-uno entre funciones de biblioteca y syscalls · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Mechanism: Limited Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) · Capítulo 6: 6.2 Problem #1: Restricted Operations, pp. 2–7; 6.3 Problem #2: Switching Between Processes, Saving and Restoring Context, pp. 7–10: trap, decisión y cambio de contexto · versión: PDF de autores, versión 1.10; no toda entrada al núcleo cambia de tarea · comprobado: 2026-10-27

Partida: `4238fa9eb49053a58e69d16f5daa6dabeb392c3c33d74d75f7677d6c4d14af93` · propuesta: `6f452ac8aaf59db3b5a96c055eb7ac83c042e23de0dfebc993705ac6b3c34ef4`

## MAN-GSI-P17-099

Decisión: pending_review · acción: revise.

Motivo: Conservar separación de privilegios y clave A; distinguir prioridad, identidad y traducción de direcciones.

### Antes

¿Qué diferencia hay entre modo usuario y modo kernel?

- A. El modo kernel tiene privilegios superiores; el modo usuario restringe operaciones directas sobre recursos críticos. **(correcta)**
- B. Ejecutar siempre más rápido en modo usuario por definición, aunque una operación requiera servicios privilegiados o produzca cambios de contexto.
- C. Ser el modo kernel una cuenta especial de Active Directory que recibe permisos administrativos al iniciar sesión en un equipo del dominio.
- D. No existir separación de privilegios en sistemas modernos, porque todos los procesos acceden directamente al hardware con las mismas facultades.

Explicación: La separación protege el sistema frente a fallos o acciones no autorizadas de aplicaciones.

### Propuesta

¿Qué diferencia hay entre modo usuario y modo kernel?

- A. El núcleo dispone de privilegios que limitan el acceso directo desde modo usuario a recursos protegidos. **(correcta)**
- B. La diferencia consiste en prioridad de CPU: el modo kernel es una clase de planificación más alta.
- C. El modo kernel corresponde a la cuenta administradora y el modo usuario a las cuentas sin esa función.
- D. La diferencia está en la dirección usada: las aplicaciones emplean físicas y el núcleo solo virtuales.

Explicación: La separación de modos limita las operaciones privilegiadas y el acceso a recursos del sistema. El código de usuario solicita servicios a través de interfaces controladas. El modo del procesador no es una cuenta ni una prioridad de planificación, y no se define por física frente a virtual. La separación contribuye a protección y aislamiento, sin implicar que todo fallo de aplicación sea inocuo o que exista una ventaja fija de velocidad.

- Error B: Prioridad de planificación y nivel de privilegio son conceptos distintos. Una tarea prioritaria no adquiere por ello facultades de núcleo.
- Error C: Una identidad administradora puede ejecutar aplicaciones en modo usuario. Las credenciales no son el modo de privilegio de la CPU.
- Error D: El uso de direcciones físicas o virtuales no define esa separación. En sistemas con memoria virtual, ambos modos pueden utilizar direcciones virtuales.

- [Microsoft: User mode and kernel mode](https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/user-mode-and-kernel-mode) · Introducción; User mode; Kernel mode: privilegios, direcciones protegidas y controladores · versión: Actualización 29-10-2025; ejemplo Windows, sin convertir aislamiento en garantía absoluta frente a todo fallo o explotación · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Mechanism: Limited Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) · Capítulo 6: 6.2 Problem #1: Restricted Operations, pp. 2–7; 6.3 Problem #2: Switching Between Processes, Saving and Restoring Context, pp. 7–10: trap, decisión y cambio de contexto · versión: PDF de autores, versión 1.10; no toda entrada al núcleo cambia de tarea · comprobado: 2026-10-27

Partida: `0a103c3a4670c4ba25194f037897305709a2e7faff331b702957a023fdb7bc19` · propuesta: `b1c2900575c67057524fd39bbe1c83ac691e4ef698c2ed38973a1cb1afc21376`

## MAN-GSI-P17-100

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso y clave A; sustituir recetas absolutas por confusiones sobre estado bloqueado, CPU y concurrencia.

### Antes

Si un servicio tiene muchos hilos bloqueados esperando E/S, ¿qué conclusión es más razonable?

- A. La carga puede estar limitada por E/S; añadir CPU no garantiza resolver el cuello de botella. **(correcta)**
- B. La solución es siempre duplicar la frecuencia de CPU.
- C. La espera de E/S demuestra que no hay concurrencia.
- D. Hay que desactivar interrupciones.

Explicación: Primero se debe identificar el recurso limitante: CPU, disco, red, bloqueo, etc.

### Propuesta

Si un servicio tiene muchos hilos bloqueados esperando E/S, ¿qué conclusión es más razonable?

- A. La E/S puede limitar el avance; conviene medir antes de ampliar CPU. **(correcta)**
- B. La CPU es el recurso limitante, pues esperar E/S indica saturación de cálculo.
- C. Los hilos bloqueados compiten por CPU de forma continua mientras esperan E/S.
- D. Añadir hilos reduce la latencia propia de cada operación del dispositivo.

Explicación: La espera de E/S puede limitar el servicio, por lo que añadir CPU no garantiza resolver el problema. Conviene medir latencia, colas, actividad del dispositivo o red y capacidad efectiva de cómputo. Un hilo bloqueado no ejecuta espera activa; el SO puede dar CPU a otros preparados. Muchos hilos esperando tampoco prueban por sí solos saturación del dispositivo: el diagnóstico debe confirmar el recurso limitante.

- Error B: El estado de espera no acredita consumo de CPU elevado. Puede haber capacidad de cómputo ociosa mientras el servicio espera al recurso de E/S.
- Error C: Bloqueado y espera activa son distintos. El planificador no trata al hilo bloqueado como preparado hasta que pueda continuar.
- Error D: Más concurrencia puede solapar trabajo, pero no reduce por definición la latencia de cada operación y puede aumentar colas o presión.

- [Arpaci-Dusseau: OSTEP, The Abstraction: The Process](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) · Capítulo 4: 4.1 The Abstraction: A Process, pp. 2–3; 4.4 Process States, pp. 5–7; separación de política/mecanismo p. 3 · versión: PDF de autores, versión 1.10 impresa; modelo didáctico simplificado · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf) · Capítulo 36: 36.3 The Canonical Protocol, p. 4; 36.4 Lowering CPU Overhead With Interrupts, pp. 5–6; figura 36.4, p. 9: polling, interrupciones, solapamiento y capa de bloques · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `561b097c70307884d37af9f84c0a547ffc90f36d97f393068723145e26a77633` · propuesta: `f35c89b0ea807344eff9e1ff7680fbf249be4e40dcf0b16d381801db807b2a26`

## MAN-GSI-P17-101

Decisión: pending_review · acción: revise.

Motivo: Conservar abstracción protegida y clave D; distinguir espacio virtual, intercambio, persistencia y acceso sin permisos.

### Antes

¿Qué proporciona la memoria virtual a un proceso?

- A. Acceso directo a toda la RAM de otros procesos.
- B. Persistencia garantizada tras apagar el equipo.
- C. Una copia de seguridad automática de archivos.
- D. Un espacio de direcciones lógico protegido y abstraído de la memoria física concreta. **(correcta)**

Explicación: Cada proceso trabaja con direcciones virtuales que el sistema traduce y protege.

### Propuesta

¿Qué proporciona la memoria virtual a un proceso?

- A. Un área de disco que conserva automáticamente el estado de ejecución tras apagar.
- B. Acceso a toda la RAM física, con independencia de los permisos de sus páginas.
- C. Una zona de intercambio que sustituye todas las páginas residentes en memoria.
- D. Un espacio de direcciones lógico, con traducción y protección respecto a memoria física. **(correcta)**

Explicación: La memoria virtual presenta al proceso un espacio de direcciones y traduce sus accesos hacia recursos físicos con comprobaciones de protección. Facilita aislamiento y colocación flexible, además de mecanismos de compartición controlada. No se reduce al archivo de intercambio ni exige que todas las páginas estén en disco. Tampoco conserva automáticamente una ejecución después de apagar ni autoriza acceder a cualquier memoria de otro proceso.

- Error A: Persistir una ejecución requiere mecanismos específicos. La abstracción de direcciones virtuales no equivale a una imagen recuperable tras apagar.
- Error B: La traducción incorpora protección. Disponer de un espacio virtual no concede acceso indiscriminado a toda RAM física.
- Error C: Intercambio y residencia son mecanismos posibles dentro de la gestión de memoria. La memoria virtual no es exclusivamente swap ni desplaza toda página de RAM.

- [Arpaci-Dusseau: OSTEP, The Abstraction: Address Spaces](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) · Capítulo 13: 13.3 The Address Space, pp. 3–5, y 13.4 Goals, pp. 5–6: abstracción, traducción y protección · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Paging: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) · Capítulo 18, introducción y 18.1 A Simple Example And Overview, pp. 1–4: páginas, marcos y tabla de traducción · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `c485b2545a8bcdf7600d8d481e92aa1bef4c86c408bc1e47e7952d4392394149` · propuesta: `fb85f71471bb2492b60b39a002387151ce6f37b956c6891d43a078e42e0e164d`

## MAN-GSI-P17-102

Decisión: pending_review · acción: revise.

Motivo: Conservar traducción virtual/física y clave D; microcaso que distingue identidad numérica de mapeo y compartición.

### Antes

¿Qué diferencia básica hay entre dirección virtual y física?

- A. Ambas identifican siempre la misma posición en RAM y se exponen sin traducción a todos los procesos del sistema.
- B. La física forma parte del espacio privado de cada proceso, mientras la virtual es una dirección global compartida por el hardware.
- C. La virtual es un nombre almacenado en DNS que el sistema resuelve antes de localizar la memoria física del equipo.
- D. La virtual pertenece al espacio lógico del proceso y se traduce a una ubicación física mediante hardware/SO. **(correcta)**

Explicación: La traducción permite aislamiento y gestión flexible de memoria.

### Propuesta

Dos procesos usan el mismo valor numérico de dirección virtual. En un sistema con espacios separados y memoria paginada, ¿qué afirmación es correcta?

- A. Ambos accesos identifican necesariamente la misma celda de RAM del equipo.
- B. Solo un proceso puede usar ese valor, porque las direcciones virtuales son globalmente únicas.
- C. Los valores leídos deben coincidir, aunque cada acceso llegue a una ubicación física distinta.
- D. Cada dirección se interpreta en su espacio virtual y puede traducirse a una ubicación física distinta. **(correcta)**

Explicación: El valor numérico de una dirección virtual se interpreta dentro del espacio del proceso y su traducción. Dos procesos pueden usar el mismo valor y acceder a marcos distintos con contenidos diferentes. También pueden mapear memoria compartida si se configura expresamente. Por tanto, ni igualdad ni diferencia física se deducen solo de comparar los números virtuales; hay que conocer el mapeo y los permisos.

- Error A: La coincidencia numérica virtual no determina la traducción física. Cada proceso puede tener un mapeo diferente.
- Error B: Las direcciones virtuales no han de ser únicas entre todos los procesos. La separación de espacios permite reutilizar valores.
- Error C: El contenido depende de la memoria mapeada. Dos ubicaciones diferentes no deben contener el mismo dato por compartir el número virtual.

- [Arpaci-Dusseau: OSTEP, The Abstraction: Address Spaces](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) · Capítulo 13: 13.3 The Address Space, pp. 3–5, y 13.4 Goals, pp. 5–6: abstracción, traducción y protección · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Paging: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) · Capítulo 18, introducción y 18.1 A Simple Example And Overview, pp. 1–4: páginas, marcos y tabla de traducción · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `93f6e839806c48ca280bf363636420dbc22248b4dd6166669a6fd7205e2a6b4b` · propuesta: `de756dc378b1725e547d14b0c38cfeb0eac02053d002f8458a0d693db59e00e0`

## MAN-GSI-P17-103

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente concepto, enunciado y alternativas; completar no contigüidad y coexistencia de tamaños de página sin modificar la clave A.

### Antes

¿Qué es paginación?

- A. Dividir memoria virtual y física en unidades de tamaño fijo llamadas páginas/marcos. **(correcta)**
- B. Dividir el espacio de direcciones en segmentos lógicos de tamaño variable asociados a código, datos o pila.
- C. Trasladar un proceso completo entre memoria principal y almacenamiento secundario para liberar capacidad física.
- D. Copiar bloques usados con frecuencia a líneas de memoria caché para reducir el tiempo medio de acceso del procesador.

Explicación: Paginación usa unidades de tamaño fijo para mapear memoria virtual y física.

### Propuesta

¿Qué es paginación?

- A. Dividir memoria virtual y física en unidades de tamaño fijo llamadas páginas/marcos. **(correcta)**
- B. Dividir el espacio de direcciones en segmentos lógicos de tamaño variable asociados a código, datos o pila.
- C. Trasladar un proceso completo entre memoria principal y almacenamiento secundario para liberar capacidad física.
- D. Copiar bloques usados con frecuencia a líneas de memoria caché para reducir el tiempo medio de acceso del procesador.

Explicación: La paginación divide el espacio virtual en páginas y la memoria física en marcos que permiten alojarlas. Las tablas relacionan ambas unidades sin exigir que todas las páginas del proceso ocupen marcos contiguos. Tamaño fijo se refiere a las unidades del esquema de traducción: una arquitectura puede admitir varios tamaños de página. No es segmentación lógica variable, intercambio de un proceso completo ni caché de datos.

- Error B: Describe segmentación clásica por regiones lógicas de longitud variable. No la división en páginas y marcos del modelo paginado.
- Error C: Describe intercambio de un proceso completo. Paginación organiza y traduce unidades de memoria con granularidad distinta.
- Error D: Describe almacenamiento de datos en caché. Aunque usa unidades de transferencia, no define el mapeo entre páginas virtuales y marcos físicos.

- [Arpaci-Dusseau: OSTEP, Paging: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) · Capítulo 18, introducción y 18.1 A Simple Example And Overview, pp. 1–4: páginas, marcos y tabla de traducción · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Segmentation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf) · Capítulo 16, 16.1 Segmentation: Generalized Base/Bounds, pp. 1–4: segmentos lógicos, base y límites · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `be1e2993cceecdf6f59b53da368a975813343a276aaacbd1e2a7c2780ad8c3a7` · propuesta: `f017069f13c9742fc2ef11d06cd345a923a3150fc32f110465ec4fdbcc7c11d8`

## MAN-GSI-P17-104

Decisión: pending_review · acción: revise.

Motivo: Conservar segmentación clásica y clave A; paralelizar redacción y contrastar tres técnicas reales de memoria.

### Antes

¿Qué caracteriza a la segmentación clásica?

- A. Usa unidades lógicas de tamaño variable asociadas a partes del programa/datos. **(correcta)**
- B. Dividir memoria virtual y física en páginas y marcos de tamaño fijo que se relacionan mediante tablas de páginas.
- C. Reservar dinámicamente objetos en el heap sin estructura lógica visible ni asociación con código, datos o pila del programa.
- D. Organizar almacenamiento en bloques físicos de tamaño fijo utilizados por el sistema de archivos para ubicar contenido.

Explicación: Paginación y segmentación son técnicas distintas de gestión de memoria.

### Propuesta

¿Qué caracteriza a la segmentación clásica?

- A. Dividir el espacio en regiones lógicas de longitud variable, como código, datos o pila. **(correcta)**
- B. Dividir los espacios virtual y físico en páginas y marcos de un tamaño fijo.
- C. Guardar líneas de datos recientes en caché para reducir accesos a memoria principal.
- D. Intercambiar un proceso completo con almacenamiento para liberar memoria principal.

Explicación: La segmentación clásica trata regiones lógicas del espacio de direcciones con base y límites propios, y tamaños que pueden diferir. Permite organizar código, datos o pila y comprobar accesos dentro del segmento. Se distingue de la granularidad fija del modelo de paginación. Existen combinaciones de técnicas y arquitecturas con otros modelos; el término clásico evita atribuir segmentación activa idéntica a todo equipo moderno.

- Error B: Describe paginación. Páginas y marcos de tamaño fijo no expresan la división por regiones lógicas variables.
- Error C: Describe una caché de datos. Su objetivo de latencia no define segmentos con base y límites.
- Error D: Describe intercambio de una instancia completa. No define la estructura lógica ni la traducción por segmentos del espacio virtual.

- [Arpaci-Dusseau: OSTEP, Segmentation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf) · Capítulo 16, 16.1 Segmentation: Generalized Base/Bounds, pp. 1–4: segmentos lógicos, base y límites · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Paging: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) · Capítulo 18, introducción y 18.1 A Simple Example And Overview, pp. 1–4: páginas, marcos y tabla de traducción · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `7cc4237ef000074d4be5de2d15698485d3b7fbbd775208bdb0f2dfd0597e7e2d` · propuesta: `0e38a16c8185d46b75b8693bc6be0d4cfe86ce0957f600f4ec72558514382ca7`

## MAN-GSI-P17-105

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, correcta y clave C; abreviar distractores de caché de contenido, tabla completa y predictor de saltos para compararlos sin explicaciones superfluas dentro de las alternativas.

### Antes

¿Qué almacena conceptualmente una TLB?

- A. Líneas recientes de datos e instrucciones leídas de memoria principal para evitar repetir accesos al mismo contenido.
- B. La tabla completa de páginas de cada proceso, incluida su jerarquía y todas las entradas residentes en memoria.
- C. Traducciones recientes de direcciones virtuales a físicas para acelerar acceso. **(correcta)**
- D. El historial de saltos tomados y destinos previstos que utiliza la CPU para anticipar el flujo de instrucciones.

Explicación: La TLB es una caché de traducciones de memoria.

### Propuesta

¿Qué almacena conceptualmente una TLB?

- A. Líneas de datos e instrucciones para evitar acceder al mismo contenido en RAM.
- B. La tabla de páginas completa del proceso, con todas sus entradas residentes.
- C. Traducciones recientes de direcciones virtuales a físicas para acelerar acceso. **(correcta)**
- D. Destinos de saltos previstos para anticipar el flujo de instrucciones de CPU.

Explicación: La TLB guarda un conjunto limitado de traducciones virtuales a físicas, junto con atributos relevantes de acceso según la arquitectura. Un acierto evita consultar la estructura de traducción en memoria. Un fallo de TLB puede resolverse consultando una tabla válida para una página residente: no implica necesariamente un fallo de página ni lectura de disco. No es una caché de contenido ni la copia completa de las tablas.

- Error A: Describe cachés de datos o instrucciones. La TLB almacena información de traducción, no el contenido general de las líneas de memoria.
- Error B: La capacidad de TLB es limitada y no contiene por definición todas las traducciones de cada proceso. Las tablas son estructuras diferentes.
- Error D: Describe predicción de saltos. Anticipar control de ejecución y traducir direcciones tienen funciones y entradas distintas.

- [Arpaci-Dusseau: OSTEP, Paging: Faster Translations (TLBs)](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-tlbs.pdf) · Capítulo 19, introducción y 19.1 TLB Basic Algorithm, pp. 1–3: caché de traducciones y fallo de TLB frente a acceso a tabla · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `0dfeeed9b23bcead2345e90558331d73a8be6124f0740c815c75e7cd7776dd95` · propuesta: `5e1ffd5331b7fc75d70a24ef7c3de3f8c6940c51b76015f140708cf5e66961c2`

## MAN-GSI-P17-107

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente definición y distractores próximos; completar presión, conjunto de trabajo y diferencia de paginación normal, con clave B.

### Antes

¿Qué es thrashing?

- A. Aprovechar localidad temporal y espacial para aumentar aciertos de caché y reducir el tiempo medio de acceso a memoria.
- B. Exceso de fallos de página y movimiento de memoria que deja poco tiempo para trabajo útil. **(correcta)**
- C. Mantener tareas bloqueadas circularmente porque cada una espera un recurso que otra conserva y ninguna puede continuar.
- D. Trasladar de forma planificada un proceso completo a almacenamiento secundario para liberar memoria durante un periodo.

Explicación: Thrashing ocurre cuando la presión de memoria provoca paginación intensa.

### Propuesta

¿Qué es thrashing?

- A. Aprovechar localidad temporal y espacial para aumentar aciertos de caché y reducir el tiempo medio de acceso a memoria.
- B. Exceso de fallos de página y movimiento de memoria que deja poco tiempo para trabajo útil. **(correcta)**
- C. Mantener tareas bloqueadas circularmente porque cada una espera un recurso que otra conserva y ninguna puede continuar.
- D. Trasladar de forma planificada un proceso completo a almacenamiento secundario para liberar memoria durante un periodo.

Explicación: Thrashing describe paginación tan intensa que gran parte del esfuerzo se dedica a traer y expulsar páginas, con escaso progreso útil. Puede aparecer si los conjuntos de trabajo activos desbordan la memoria disponible. No basta observar algún fallo de página: debe valorarse la presión y su efecto sostenido. Reducir carga concurrente, revisar localidad o ampliar capacidad son decisiones que requieren diagnóstico, no una receta única de CPU.

- Error A: La localidad aprovechada mejora aciertos. Thrashing describe el efecto contrario: movimiento intenso y poco trabajo útil bajo presión de memoria.
- Error C: Describe deadlock por espera circular. Thrashing puede ocurrir con tareas que progresan lentamente por la actividad de paginación.
- Error D: Una decisión planificada de intercambio completo no es por sí misma thrashing. El problema es la actividad repetida que domina la ejecución útil.

- [Arpaci-Dusseau: OSTEP, Beyond Physical Memory: Policies](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf) · Capítulo 22: introducción p. 1; 22.5 Using History: LRU, pp. 7–8; 22.7–22.8, pp. 11–12; 22.11 Thrashing, p. 14: víctima, localidad, aproximaciones y presión de memoria · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `9b26a9d9dbd67c105aa4b34526dac08e4b4f168d790b5f5df1bbdd587a1ed01a` · propuesta: `3e21382de954f6761404ea3e861b1cf1da446beffea98874737ac1f6ffd6b626`

## MAN-GSI-P17-108

Decisión: pending_review · acción: revise.

Motivo: Conservar selección de víctima y clave A; microcaso de falta de marcos con distractores de funciones cercanas del SO.

### Antes

¿Qué intenta un algoritmo de reemplazo de páginas?

- A. Elegir qué página retirar de memoria cuando se necesita liberar un marco. **(correcta)**
- B. Seleccionar el siguiente router al que debe enviarse cada paquete cuando varias rutas de red presentan el mismo coste administrativo.
- C. Elegir qué usuario puede iniciar sesión cuando coinciden varias credenciales válidas para una misma cuenta del sistema operativo.
- D. Decidir qué licencia de software debe instalarse cuando una aplicación admite ediciones con condiciones de uso diferentes.

Explicación: FIFO, LRU/aproximaciones y otros algoritmos gestionan sustitución de páginas.

### Propuesta

Un sistema paginado necesita cargar otra página y no dispone de marcos libres. ¿Qué debe decidir su política de reemplazo?

- A. Qué página residente candidata retirar para reutilizar un marco físico. **(correcta)**
- B. Qué página virtual se solicita al descomponer la dirección del acceso.
- C. Qué tarea preparada recibirá CPU en el siguiente turno de ejecución.
- D. Qué permisos de acceso deben concederse a la página que se solicita.

Explicación: La política de reemplazo selecciona una página residente candidata a expulsión cuando hace falta reutilizar un marco. La selección debe respetar restricciones de gestión; no toda página tiene por qué ser expulsable. Si se ha modificado y su estado debe conservarse, puede requerir escritura previa. Identificar la dirección, comprobar permisos o planificar CPU son decisiones diferentes que cooperan con la gestión de memoria.

- Error B: Identificar la página solicitada forma parte de interpretar y traducir el acceso. La política de reemplazo decide qué residente cede un marco.
- Error C: Describe planificación de CPU. El problema del caso es disponibilidad de un marco físico, no selección del siguiente hilo.
- Error D: La autorización del acceso no es la elección de víctima. Tener permiso no determina qué página puede dejar la memoria.

- [Arpaci-Dusseau: OSTEP, Beyond Physical Memory: Policies](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf) · Capítulo 22: introducción p. 1; 22.5 Using History: LRU, pp. 7–8; 22.7–22.8, pp. 11–12; 22.11 Thrashing, p. 14: víctima, localidad, aproximaciones y presión de memoria · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Paging: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) · Capítulo 18, introducción y 18.1 A Simple Example And Overview, pp. 1–4: páginas, marcos y tabla de traducción · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `31af88d1a9562d5f9d9b192fc8f85a83cca61d90e125bb24f1e4383893f9eb71` · propuesta: `755e3d6d4b00503ce60581bef9578e735df59006d1fcde18e667fee87bc4171f`

## MAN-GSI-P17-109

Decisión: pending_review · acción: revise.

Motivo: Conservar ventaja conceptual de LRU y clave C; comparar FIFO, LFU y óptimo con criterios paralelos y sin promesas de eliminar fallos.

### Antes

¿Qué ventaja conceptual busca LRU?

- A. Eliminar cualquier page fault futuro.
- B. Evitar el uso de memoria virtual.
- C. Retirar páginas no usadas recientemente, aprovechando localidad temporal. **(correcta)**
- D. Ordenar procesos por prioridad.

Explicación: LRU se basa en la hipótesis de que uso reciente predice reutilización.

### Propuesta

¿Qué criterio utiliza LRU y qué propiedad del acceso intenta aprovechar?

- A. Retirar la página que entró primero en memoria, atendiendo al orden de llegada.
- B. Retirar la página con menor número de accesos, atendiendo a frecuencia acumulada.
- C. Retirar la página menos recientemente referenciada, aprovechando localidad temporal. **(correcta)**
- D. Retirar la página cuyo próximo acceso será más lejano, conociendo las referencias futuras.

Explicación: LRU utiliza la antigüedad de la última referencia: expulsa la página que lleva más tiempo sin usarse. Se apoya en localidad temporal, la expectativa de reutilizar lo reciente. No equivale a menor frecuencia, mayor tiempo de residencia o conocimiento del futuro. Es una heurística que puede fallar según la carga; una implementación exacta tiene coste y los sistemas pueden recurrir a aproximaciones.

- Error A: Describe FIFO por llegada a memoria. Una página antigua puede haber sido usada muy recientemente y conservarse bajo LRU.
- Error B: Describe LFU por frecuencia. Muchas referencias antiguas no equivalen a una referencia reciente.
- Error D: Describe la política óptima ideal que necesita conocer el futuro. LRU utiliza historial reciente, no información futura exacta.

- [Arpaci-Dusseau: OSTEP, Beyond Physical Memory: Policies](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf) · Capítulo 22: introducción p. 1; 22.5 Using History: LRU, pp. 7–8; 22.7–22.8, pp. 11–12; 22.11 Thrashing, p. 14: víctima, localidad, aproximaciones y presión de memoria · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `5a99dbb7525090f4557eb3fb2164f4e30c5edba281511e4db92ed219a1237102` · propuesta: `b12a5ce346ead362f7f9b31f8199f79e6f4e7043958ca211d70ce12a73bbf086`

## MAN-GSI-P17-110

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, correcta y clave D; abreviar los tres mecanismos alternativos manteniendo causa y función, y explicar sus diferencias en el feedback.

### Antes

¿Qué es una interrupción de hardware?

- A. Una instrucción ejecutada por un proceso para solicitar voluntariamente un servicio protegido al núcleo del sistema.
- B. Una comprobación repetitiva en la que la CPU consulta el estado del periférico hasta detectar que está preparado.
- C. El procedimiento de guardar y restaurar registros cuando el planificador cambia la ejecución de un proceso a otro.
- D. Una señal que notifica a la CPU un evento que requiere atención. **(correcta)**

Explicación: Las interrupciones permiten reaccionar a dispositivos sin sondeo constante.

### Propuesta

¿Qué es una interrupción de hardware?

- A. Una instrucción software que solicita un servicio al núcleo.
- B. Un sondeo repetido del estado de un dispositivo por la CPU.
- C. El guardado y restauración de estado para cambiar de tarea.
- D. Una señal que notifica a la CPU un evento que requiere atención. **(correcta)**

Explicación: Una interrupción de hardware comunica a la CPU un evento de un dispositivo o temporizador mediante el mecanismo previsto por la arquitectura. El sistema puede atenderlo con una rutina y reanudar o planificar trabajo. No es una syscall voluntaria ni el sondeo del registro de estado. Su atención puede depender de máscaras, prioridades y otros factores; no obliga a cambiar de proceso ni garantiza respuesta instantánea.

- Error A: Describe una solicitud software de servicio al núcleo. Aunque ambas transfieran control a código del sistema, la causa es distinta.
- Error B: Describe polling: la CPU consulta el estado repetidamente. Una interrupción notifica un evento en lugar de requerir ese sondeo continuo.
- Error C: Describe cambio de contexto entre tareas. Puede relacionarse con atender un evento, pero no es la notificación de hardware en sí.

- [Arpaci-Dusseau: OSTEP, I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf) · Capítulo 36: 36.3 The Canonical Protocol, p. 4; 36.4 Lowering CPU Overhead With Interrupts, pp. 5–6; figura 36.4, p. 9: polling, interrupciones, solapamiento y capa de bloques · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, Mechanism: Limited Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) · Capítulo 6: 6.2 Problem #1: Restricted Operations, pp. 2–7; 6.3 Problem #2: Switching Between Processes, Saving and Restoring Context, pp. 7–10: trap, decisión y cambio de contexto · versión: PDF de autores, versión 1.10; no toda entrada al núcleo cambia de tarea · comprobado: 2026-10-27

Partida: `3a1b70d65ca8ee8e0414e814d4f22582b9557d21eaf53462f671cff85c49b587` · propuesta: `c9ec9561fd1572a22de09f61367c8163b8f134c7e87ca68ed2688ed28287790f`

## MAN-GSI-P17-111

Decisión: pending_review · acción: revise.

Motivo: Conservar contraste interrupción/polling y clave C; introducir errores próximos y explicar costes y combinaciones sin superioridad universal.

### Antes

¿Qué diferencia hay entre interrupción y polling?

- A. Son exactamente lo mismo.
- B. Polling siempre consume cero CPU.
- C. La interrupción notifica eventos; polling consulta repetidamente el estado. **(correcta)**
- D. Las interrupciones solo existen en almacenamiento cloud.

Explicación: Cada técnica tiene costes; muchos dispositivos usan interrupciones para evitar sondeo continuo.

### Propuesta

¿Qué diferencia hay entre interrupción y polling?

- A. La interrupción consulta el estado periódicamente; polling recibe una notificación del dispositivo.
- B. Ambos consultan el registro de estado; se distinguen por usar periodos de sondeo diferentes.
- C. La interrupción notifica un evento; polling comprueba repetidamente el estado del dispositivo. **(correcta)**
- D. La interrupción transfiere el contenido por DMA; polling almacena el contenido en caché de CPU.

Explicación: La interrupción permite notificar un evento al procesador, mientras polling comprueba estado de forma repetida. El sondeo puede consumir CPU y la atención de interrupciones también tiene coste. Ninguna técnica es mejor para toda carga: latencia del dispositivo, frecuencia de eventos y objetivos influyen. Existen esquemas híbridos y agrupación de eventos; notificación y movimiento de datos mediante DMA son funciones distintas.

- Error A: Invierte los mecanismos. En polling el software consulta; la notificación de evento es la característica de la interrupción.
- Error B: Reducir ambos a periodos de consulta elimina la diferencia de quién inicia la notificación y cómo se detecta el evento.
- Error D: DMA trata movimiento de datos y no define la diferencia de detección del estado. Puede combinarse con notificaciones o sondeo.

- [Arpaci-Dusseau: OSTEP, I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf) · Capítulo 36: 36.3 The Canonical Protocol, p. 4; 36.4 Lowering CPU Overhead With Interrupts, pp. 5–6; figura 36.4, p. 9: polling, interrupciones, solapamiento y capa de bloques · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `cd87c630dcbf8b3f0a5b0a36cdb43f2edfffdd29095f514d950a357c49c00372` · propuesta: `95f41b74982ff6e00c686cb165d93aaf1a3675132bebaa3ad39652d5fce210a1`

## MAN-GSI-P17-113

Decisión: pending_review · acción: revise.

Motivo: Conservar interfaz bloque/carácter y clave C; no universalizar secuencialidad, tamaño de transferencia, velocidad o persistencia.

### Antes

¿Qué diferencia conceptual hay entre dispositivo de bloque y de carácter?

- A. El de bloque siempre es una GPU y el de carácter una CPU.
- B. No existe ninguna diferencia en sistemas operativos.
- C. El de bloque trabaja con unidades direccionables de datos; el de carácter expone típicamente un flujo secuencial. **(correcta)**
- D. El de carácter solo se usa en cloud.

Explicación: Es una clasificación clásica de interfaces de E/S.

### Propuesta

¿Qué diferencia conceptual hay entre dispositivo de bloque y de carácter?

- A. El de bloque expone un flujo sin posiciones; el de carácter utiliza bloques direccionables.
- B. La unidad de bloque es una palabra de CPU; la de carácter coincide con el tamaño de la caché.
- C. El de bloque ofrece bloques direccionables; el de carácter suele ofrecer un flujo de bytes. **(correcta)**
- D. El de bloque implica persistencia de los datos; el de carácter implica perderlos al cerrar.

Explicación: La clasificación distingue interfaces: bloque ofrece unidades direccionables, y carácter suele exponer un flujo de bytes, como un terminal. No determina si el soporte es mecánico, electrónico, físico o virtual, ni su persistencia. Tampoco significa que toda operación de carácter transfiera un solo byte o que todo dispositivo de carácter prohíba posicionamiento: la semántica concreta la define cada interfaz.

- Error A: Invierte el contraste clásico. El acceso por bloques direccionables se asocia a la interfaz de bloque.
- Error B: El tamaño de una palabra o línea de caché no define esas clases de dispositivo. Son conceptos de interfaz de E/S diferentes.
- Error D: Persistencia y tipo de interfaz son ejes distintos. Hay dispositivos de bloque en RAM y la clasificación no impone perder datos al cerrar.

- [Linux Kernel Labs: Block Device Drivers](https://linux-kernel-labs.github.io/refs/heads/master/labs/block_device_drivers.html) · Overview, primeros dos párrafos: bloques direccionables y contraste con interfaz de carácter · versión: Material de autores de Linux Kernel Labs, cabecera 5.10.14; solo conceptos de interfaz, sin adoptar comparaciones universales de velocidad, límites de bloque o API vigente · comprobado: 2026-10-27
- [Arpaci-Dusseau: OSTEP, I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf) · Capítulo 36: 36.3 The Canonical Protocol, p. 4; 36.4 Lowering CPU Overhead With Interrupts, pp. 5–6; figura 36.4, p. 9: polling, interrupciones, solapamiento y capa de bloques · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27

Partida: `006bb3e1564386c849d559225cd9613e578f59e37a630aab08c9f295617ac35d` · propuesta: `f5c9c0f5f5223518c1edc505aa34510ffefc2c39dc2aa0813fa46ce385418f23`

## MAN-GSI-P17-114

Decisión: pending_review · acción: revise.

Motivo: Conservar journaling y clave C; microcaso de reinicio con contraste entre consistencia, historial, reglas de negocio y buffers.

### Antes

¿Qué aporta journaling a un sistema de archivos?

- A. Cifrar obligatoriamente todo el disco y registrar las claves dentro del propio journal para recuperarlas después de cualquier reinicio.
- B. Eliminar la necesidad de copias de seguridad porque el registro conserva permanentemente todas las versiones y contenidos de cada archivo.
- C. Registrar cambios/operaciones para facilitar recuperación de consistencia tras fallos. **(correcta)**
- D. Convertir cualquier archivo en ejecutable al registrar sus cambios, aunque sus permisos y su formato no permitan cargarlo como programa.

Explicación: Journaling mejora recuperación del sistema de archivos, pero no sustituye backup.

### Propuesta

Tras un apagado inesperado, un sistema de archivos necesita recuperar la consistencia de sus estructuras. ¿Qué aporta el journaling a esa recuperación?

- A. Comprobar la validez funcional de todas las operaciones de negocio realizadas.
- B. Conservar versiones históricas de cada fichero para recuperar cualquier borrado.
- C. Registrar cambios para recuperar consistencia de las estructuras tras el fallo. **(correcta)**
- D. Garantizar persistencia de todo dato aún almacenado en buffers de la aplicación.

Explicación: El journal registra actualizaciones con un protocolo que permite recuperar consistencia del sistema de archivos después de una interrupción. El alcance puede ser metadatos o incluir datos, según implementación y configuración; ext4 ilustra esa diferencia. No conserva por definición todo historial de ficheros, no verifica reglas de negocio ni persiste automáticamente buffers de la aplicación. Por ello no sustituye copias de seguridad o requisitos explícitos de durabilidad.

- Error A: La consistencia estructural del sistema de archivos no acredita que la aplicación haya respetado todas sus reglas de negocio.
- Error B: Un registro de recuperación no es por definición un backup de versiones ni permite restaurar cualquier borrado histórico.
- Error D: Un buffer que la aplicación no ha enviado al sistema de almacenamiento queda fuera de esa garantía. Journal no convierte todo estado en persistente.

- [Arpaci-Dusseau: OSTEP, Crash Consistency: FSCK and Journaling](https://pages.cs.wisc.edu/~remzi/OSTEP/file-journaling.pdf) · Capítulo 42, introducción pp. 1–2 y 42.3 Solution #2: Journaling (or Write-Ahead Logging), desde p. 7: registro previo y recuperación de consistencia · versión: PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright · comprobado: 2026-10-27
- [Linux Kernel: Journal (jbd2)](https://docs.kernel.org/filesystems/ext4/journal.html) · 3.6, párrafos iniciales y 3.6.1 Layout: metadatos, commit, replay y modos data=ordered/journal/writeback · versión: Documentación de ext4 consultada; ejemplo de implementación, sin generalizar garantías de datos de todos los journals ni fijar una versión de kernel · comprobado: 2026-10-27

Partida: `9035b6b5b7e326c8e267a81d0fe5ff2b61f5d2b4a66b4e91f32053666698d2cd` · propuesta: `d6ea7cb82f1393a33f9967a03fb6a352d11c1e7eaf6a07db4dc48fa83389aa78`

## MAN-GSI-P17-115

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, correcta y clave B; eliminar longitud superflua de distractores de ficheros abiertos, hashes y montajes sin alterar el concepto.

### Antes

¿Qué es una ACL de fichero?

- A. Una lista de sesiones que mantienen abierto el fichero y los desplazamientos actuales de lectura o escritura de cada proceso.
- B. Una lista de control de acceso que asigna permisos a identidades o grupos. **(correcta)**
- C. Un conjunto de hashes utilizado para comprobar integridad del contenido, sin expresar permisos para usuarios o grupos.
- D. La tabla de sistemas de archivos montados, sus puntos de montaje y opciones generales aplicadas al volumen completo.

Explicación: ACL permite permisos más expresivos que modelos simples propietario/grupo/otros.

### Propuesta

¿Qué es una ACL de fichero?

- A. Una lista de ficheros abiertos y sus posiciones actuales de lectura o escritura.
- B. Una lista de control de acceso que asigna permisos a identidades o grupos. **(correcta)**
- C. Un conjunto de hashes que permite comprobar el contenido de un fichero.
- D. Una tabla de volúmenes montados, puntos de montaje y opciones de cada volumen.

Explicación: Una ACL de control de acceso reúne entradas que relacionan identidades o grupos con permisos sobre un objeto. Permite expresar autorizaciones más específicas que las tres clases básicas de propietario, grupo y otros. El detalle depende del modelo: las ACL Linux descritas en acl(5) incluyen máscara; en Windows se distinguen DACL de autorización y SACL de auditoría. No son una lista de archivos abiertos, hashes o montajes.

- Error A: Describe información de sesiones o descriptores abiertos y sus posiciones. No establece los permisos concedidos a identidades.
- Error C: Los hashes permiten comprobar contenido, pero no constituyen reglas de autorización para sujetos y operaciones.
- Error D: Describe configuración de montajes de volúmenes. No las entradas de acceso a un fichero para usuarios o grupos.

- [Proyecto acl: acl(5)](https://man7.org/linux/man-pages/man5/acl.5.html) · DESCRIPTION; ACL TYPES; ACL ENTRIES; ACCESS CHECK ALGORITHM; STANDARDS: permisos de usuarios/grupos, máscara y comprobación · versión: Manual primario de Andreas Gruenbacher, procedente del repositorio upstream del proyecto acl; modelo Linux basado en borrador POSIX.1e, no estándar final universal ni ACL con deny de Windows · comprobado: 2026-10-27
- [Microsoft: Access control lists](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists) · Introducción y DACLs and SACLs: entradas ACE, identidades, permisos y diferencia entre autorización y auditoría · versión: Actualización 10-07-2025; ejemplo Windows, sin universalizar orden de ACE, herencia, lista nula o lista vacía a otros modelos · comprobado: 2026-10-27

Partida: `110b7de8fe2076b83ccb34f51b9ebadcce9de3b707f5cfd0e4206cddf1586102` · propuesta: `03d11a79940dc6afcd373db1a752acc6aa15b566d08a5dae9a4970193b480cd5`

## MAN-GSI-P17-116

Decisión: pending_review · acción: revise.

Motivo: Conservar significado de rwx y clave A; caso mínimo de fichero ordinario para evitar ambigüedad con directorios y sustituir siglas arbitrarias.

### Antes

En Unix/Linux, ¿qué representan rwx?

- A. Permisos de lectura, escritura y ejecución. **(correcta)**
- B. Reinicio, warning y XML.
- C. Ruta, web y extensión.
- D. RAM, workspace y XFS.

Explicación: El modelo clásico usa r/w/x para propietario, grupo y otros.

### Propuesta

Al inspeccionar los permisos de un fichero ordinario en Unix/Linux aparecen r, w y x. ¿Qué operaciones representan, respectivamente?

- A. Leer el contenido, modificarlo y ejecutarlo. **(correcta)**
- B. Listar nombres, crear entradas y recorrer directorios.
- C. Cambiar propietario, grupo y permisos del fichero.
- D. Bloquear el fichero, sincronizarlo y copiarlo.

Explicación: En un fichero ordinario, r, w y x representan lectura, escritura y ejecución. Se expresan para las clases de propietario, grupo y otros, con posibles controles adicionales. En directorios, lectura y escritura se refieren a entradas y x a búsqueda o recorrido; por eso el caso acota el objeto. El bit x no acredita un formato ejecutable válido, y escribir el fichero no concede por sí mismo borrarlo del directorio.

- Error B: Describe operaciones de directorio y sus entradas. El caso pregunta por el significado de los permisos sobre un fichero ordinario.
- Error C: Propiedad, grupo y cambios de modo requieren reglas de autorización propias. No son la traducción de r, w y x.
- Error D: Bloqueo y sincronización son mecanismos diferentes. Copiar combina operaciones de lectura y escritura, pero no es el significado de x.

- [Linux man-pages: unlink(2)](https://man7.org/linux/man-pages/man2/unlink.2.html) · DESCRIPTION; ERRORS, EACCES y EPERM: eliminar un nombre, permisos del directorio, búsqueda y restricciones adicionales · versión: Linux man-pages 6.19, fecha de página 08-02-2026; solo distinción entre escribir contenido y borrar una entrada, sin ejecutar operaciones · comprobado: 2026-10-27
- [Linux man-pages: inode(7)](https://man7.org/linux/man-pages/man7/inode.7.html) · File type and mode: S_IRUSR/S_IWUSR/S_IXUSR y equivalentes de grupo/otros · versión: Página primaria Linux man-pages consultada; se distinguen bits de permiso y bits especiales, sin reglas de bloqueo obligatorio históricas · comprobado: 2026-10-27
- [Linux man-pages: path_resolution(7)](https://man7.org/linux/man-pages/man7/path_resolution.7.html) · Step 2: walk along the path y Permissions: permiso de búsqueda en directorios y distinción fichero/directorio · versión: Linux man-pages 6.19, fecha de página 08-02-2026; sin usar límites actuales de enlaces, namespaces o API · comprobado: 2026-10-27

Partida: `de0ae27ac139df4183bd78da9e7f1e72750020c3d9ee8ed8558bfa957a74441e` · propuesta: `45a003f749b1631b25717790e35fe42824edbf54ce1ba60f722ad2d26cbd4ee5`

## MAN-GSI-P17-117

Decisión: pending_review · acción: revise.

Motivo: Conservar núcleo monolítico y clave B; distinguir ubicación de servicios, módulos y virtualización sin atribuir falta de drivers o multitarea.

### Antes

¿Qué caracteriza a un kernel monolítico?

- A. Todo servicio se ejecuta obligatoriamente fuera del kernel.
- B. Muchos servicios del sistema se ejecutan en espacio privilegiado del kernel. **(correcta)**
- C. No puede cargar drivers.
- D. No soporta multitarea.

Explicación: Linux suele describirse como monolítico modular; los diseños reales pueden combinar técnicas.

### Propuesta

¿Qué caracteriza a un kernel monolítico?

- A. Mantener servicios esenciales en el núcleo y ofrecer otros desde procesos de usuario separados.
- B. Integrar muchos servicios del sistema en el espacio privilegiado del núcleo. **(correcta)**
- C. Situar los servicios del SO en máquinas virtuales, cada una con su propio sistema invitado.
- D. Ejecutar los servicios como bibliotecas de usuario sin una capa privilegiada que los proteja.

Explicación: El diseño monolítico integra muchos servicios del SO, como controladores o sistemas de archivos, dentro del espacio privilegiado del núcleo. Eso no equivale a carecer de estructura interna o prohibir módulos cargables: modularidad del código y separación por espacios son decisiones distintas. Se distingue del microkernel que desplaza más servicios a procesos separados. Las arquitecturas reales combinan técnicas y no se clasifican solo por tamaño del binario.

- Error A: Describe el principio microkernel de núcleo esencial y servicios externos, en vez de la integración privilegiada monolítica.
- Error C: Describe aislamiento mediante virtualización de sistemas invitados. No define por sí mismo la organización interna de cada núcleo.
- Error D: Eliminar una capa privilegiada no caracteriza el monolítico. Sus servicios se integran precisamente en el núcleo protegido.

- [QNX: Microkernel architecture](https://qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.sys_arch/topic/intro_MICROKERNELARCH.html) · Cuerpo principal: definición de servicios mínimos y procesos cooperantes; modularidad; IPC; comparación gráfica monolítico/microkernel · versión: QNX SDP 8.0 System Architecture; no se adoptan afirmaciones comerciales de protección completa, ausencia de impacto o fiabilidad garantizada · comprobado: 2026-10-27
- [QNX: A small microkernel and message passing](https://qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.getting_started/topic/s1_msg_Microkernel_and_messages.html) · Cuerpo principal: servicios opcionales, drivers como procesos de usuario y message passing entre módulos · versión: QNX SDP 8.0, página actualizada 11-06-2026 según consulta; ejemplo concreto, no conjunto idéntico de servicios para todos los microkernels · comprobado: 2026-10-27
- [Linux Kernel: Building External Modules](https://docs.kernel.org/kbuild/modules.html) · Introduction y How to Build External Modules, primer párrafo: soporte de módulos y configuración · versión: Documentación kbuild consultada; solo modularidad de construcción/carga, sin introducir compilación o instalación en esta aplicación ni recomendar API o comandos · comprobado: 2026-10-27

Partida: `f3320558b1b972102856fe9200a3fed673ae9978e66742a9d94cb86192a1635b` · propuesta: `ffd6c19bdab897fd2ae248ab69da7a849d055c060323ebccfc6fe706df521814`

## MAN-GSI-P17-118

Decisión: pending_review · acción: revise.

Motivo: Conservar objetivo microkernel y clave B; contrastar tamaño, módulos en núcleo y virtualización, precisando IPC y ausencia de garantías absolutas.

### Antes

¿Qué idea busca un microkernel?

- A. Ejecutar todas las aplicaciones en modo kernel.
- B. Mantener en el núcleo mínimo funciones esenciales y mover más servicios a espacios separados. **(correcta)**
- C. Eliminar comunicación entre componentes.
- D. Usar una sola tarea para todo el sistema.

Explicación: El microkernel reduce funciones privilegiadas, a costa de más comunicación entre componentes.

### Propuesta

¿Qué idea busca un microkernel?

- A. Reducir el tamaño del binario comprimido, conservando todos los servicios en un único espacio privilegiado.
- B. Conservar funciones esenciales en el núcleo y desplazar más servicios a procesos separados. **(correcta)**
- C. Mantener todos los servicios en el núcleo, organizándolos en módulos que puedan cargarse.
- D. Ejecutar cada servicio en un invitado virtual completo sobre una capa de hipervisor.

Explicación: El microkernel conserva funciones esenciales y utiliza procesos separados para ofrecer más servicios mediante interfaces e IPC. QNX ilustra esa organización, aunque el conjunto preciso de funciones varía entre diseños. El objetivo es estructura modular y separación de responsabilidades, no simplemente comprimir un binario. IPC introduce costes y decisiones de diseño; la arquitectura no garantiza por sí sola seguridad perfecta, mayor rendimiento o ausencia de fallos.

- Error A: Reducir bytes sin cambiar el reparto de servicios no establece una arquitectura microkernel. Tamaño y ubicación de responsabilidades no son equivalentes.
- Error C: Módulos dentro del mismo espacio privilegiado permiten modularidad, pero no aportan la separación de servicios a procesos que busca el microkernel.
- Error D: Un invitado completo por servicio describe virtualización. El microkernel coordina procesos de servicio y no requiere un SO invitado para cada uno.

- [QNX: Microkernel architecture](https://qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.sys_arch/topic/intro_MICROKERNELARCH.html) · Cuerpo principal: definición de servicios mínimos y procesos cooperantes; modularidad; IPC; comparación gráfica monolítico/microkernel · versión: QNX SDP 8.0 System Architecture; no se adoptan afirmaciones comerciales de protección completa, ausencia de impacto o fiabilidad garantizada · comprobado: 2026-10-27
- [QNX: A small microkernel and message passing](https://qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.getting_started/topic/s1_msg_Microkernel_and_messages.html) · Cuerpo principal: servicios opcionales, drivers como procesos de usuario y message passing entre módulos · versión: QNX SDP 8.0, página actualizada 11-06-2026 según consulta; ejemplo concreto, no conjunto idéntico de servicios para todos los microkernels · comprobado: 2026-10-27
- [Linux Kernel: Building External Modules](https://docs.kernel.org/kbuild/modules.html) · Introduction y How to Build External Modules, primer párrafo: soporte de módulos y configuración · versión: Documentación kbuild consultada; solo modularidad de construcción/carga, sin introducir compilación o instalación en esta aplicación ni recomendar API o comandos · comprobado: 2026-10-27

Partida: `aacb16bbcafe0d9f28ab8b20a610602b85f557a1e4f354a16d04f9f9ab8da5e2` · propuesta: `5f4464dcfb4a32a2fe49c1ed6d2c864ac650d4d9ea16e7c8e83935b9e7e52f42`
