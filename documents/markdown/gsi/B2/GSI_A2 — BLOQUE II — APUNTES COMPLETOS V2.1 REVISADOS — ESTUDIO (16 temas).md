# GSI A2 — BLOQUE II

## APUNTES COMPLETOS V2 — Tecnología básica (16 temas)

**Edición de estudio — agosto de 2026**

Método de elaboración: **programa oficial vigente de GSI A2 → selección del material PreparaTIC/A1 útil → eliminación de profundidad A1 ajena al epígrafe → actualización de lo desfasado → cobertura de huecos → tema GSI completo → datos de test → aplicación al supuesto → resumen final.**

Este documento es el material principal de estudio del Bloque II. El documento «Resumen maestro de repaso» se mantiene separado: sirve para segundas vueltas, memoria activa y repasos rápidos, no sustituye a estos apuntes.

**Regla de autoridad:** ante discrepancias prevalecen el BOE vigente, los estándares y la documentación oficial actual. El material A1 se usa como banco de conocimiento y se depura; no se copia de forma indiscriminada.

## 0. Control de fuentes y criterio de depuración

| Tema | Base A1 / apoyo | Estado observado | Criterio V2 |
| --- | --- | --- | --- |
| II.01 | 052 + 053 + 054 + 055 | 052 es histórico (2019); 053 actualizado en 2024 | Rescatar Flynn, HPC, clúster, servidores y hardware; actualizar cloud/escalabilidad. |
| II.02 | 059 + 060 + 061 + 062 | 059 v31.1, 10/03/2026 | Usar como núcleo y seleccionar administración Windows/Linux/Unix/móvil. |
| II.03 | Sin correspondencia A1 suficiente | Hueco real del banco A1 | Redacción específica GSI: paradigmas, tipado, ejecución, memoria y concurrencia. |
| II.04 | 075 + 033 + apoyo 072 | 075 actualizado 16/05/2023 | Priorizar BI, DSS/EIS, DW, OLTP/OLAP; datos modernos solo como contexto. |
| II.05 | 063 + 064 | 063 01/02/2022; 064 23/04/2023 | Recuperar ANSI/SPARC, transacciones, aislamiento, SQL e interoperabilidad. |
| II.06 | 058 + 065 | 058 2019; 065 2023 | Conservar cliente-servidor/SOA/SOAP; añadir APIs REST/eventos actuales. |
| II.07 | 065 + 097 + 100 + 132 | CI 097 2022; web 065 2023 | Unir contenedores, microservicios, despliegue, observabilidad y escalado; Kubernetes actualizado. |
| II.08 | 109 + 111 + 115 | Banco de redes sólido | Reconstruir OSI/TCP-IP, direccionamiento, subnetting y routing. |
| II.09 | 077 | 13/04/2023 | Conservar SGML/HTML/XML/XSD/XPath/XSLT y scripts; corregir formulaciones antiguas de HTML/XML. |
| II.10 | 047 + MAGERIT/PILAR | 047 2023; MAGERIT v3 sigue en producción | Distinguir riesgo, análisis, tratamiento, residual y herramientas AGE. |
| II.11 | 038 + 047 + 048 | 038 2022; ENS 048 actualizado 05/03/2026 | Auditoría por ciclo, evidencia, técnicas; ENS, datos y seguridad física. |
| II.12 | 072 + 077 + complemento específico | Cobertura A1 parcial | Completar ACD, CTI, IVR, ASR/TTS, VoiceXML, multicanal/omnicanal y KPI. |
| II.13 | 125 + 126 + 127 | 125 09/09/2024; 126 disponible P31 | Integrar seguridad física/lógica, herramientas, incidentes y forense. |
| II.14 | 069 + 043 | 069 07/05/2023; 043 23/01/2022 | Licencias + propiedad intelectual + DRM; evitar catálogos de productos. |
| II.15 | 040 + 035 + 036 + 041 + 099 | 040 2019, contenido metodológico estable | Decisión multicriterio, viabilidad, planificación, presupuesto y costes. |
| II.16 | 104 + 105 + RELEASE | 104 12/05/2023 | DMS/CMS, sindicación, workflow/BPM, búsqueda, SEO y colaboración. |

La fecha de control de actualidad de esta edición es **21/08/2026**.

# II.01 — Tecnologías actuales de ordenadores, arquitecturas escalables, altas prestaciones y computación en la nube

## 1. Alcance del BOE

El tema une dos escalas: desde los dispositivos móviles y ordenadores de propósito general hasta servidores, clústeres, superordenadores y cloud. Para estudiarlo bien hay que dominar la **base tecnológica** —procesador, memoria, E/S, almacenamiento e interconexión— y después entender cómo se obtienen capacidad, paralelismo, escalabilidad, disponibilidad y elasticidad.

**Depuración A1:** el A1 052 aporta taxonomía de Flynn, UMA/NUMA, clúster y grid, pero es de 2019. Se conserva esa teoría estable; se eliminan afirmaciones coyunturales sobre la madurez del grid. A1 053 aporta servidores, virtualización e infraestructura más reciente.

## 2. Componentes básicos de un sistema de cómputo

Un computador ejecuta instrucciones sobre datos mediante la cooperación de procesador, memoria, subsistema de entrada/salida, almacenamiento e interconexiones. La CPU contiene unidades de control y ejecución, registros y varios niveles de caché. En procesadores modernos es habitual disponer de varios **núcleos**, y cada núcleo puede exponer uno o más **hilos hardware**. No deben confundirse CPU física, socket, núcleo e hilo.

La jerarquía de memoria busca equilibrar velocidad, capacidad y coste: registros → cachés L1/L2/L3 → memoria principal → almacenamiento persistente. Cuanto más cerca de la CPU, menor latencia y normalmente menor capacidad. Las cachés explotan localidad temporal y espacial. En sistemas multiprocesador cobran importancia la coherencia de caché y la topología de memoria.

El almacenamiento puede apoyarse en HDD, SSD/NVMe y sistemas externos o distribuidos. La E/S se gestiona mediante controladores, buses e interfaces. En cargas especializadas aparecen **aceleradores**: GPU para procesamiento masivamente paralelo, FPGA para lógica reconfigurable y otros ASIC orientados a cargas concretas.

## 3. Paralelismo y taxonomía de Flynn

La clasificación clásica distingue el número de flujos de instrucciones y de datos:

* **SISD**: una instrucción y un flujo de datos; modelo secuencial clásico.
* **SIMD**: una misma instrucción se aplica a múltiples datos. Es característico del procesamiento vectorial y de muchas operaciones de GPU.
* **MISD**: múltiples instrucciones sobre un flujo de datos; poco común como arquitectura general.
* **MIMD**: múltiples instrucciones sobre múltiples datos; modelo típico de multiprocesadores y sistemas distribuidos.

En MIMD interesa distinguir memoria compartida y distribuida. En **UMA** los procesadores presentan tiempos de acceso aproximadamente uniformes a memoria; en **NUMA** el acceso a memoria local es más rápido que a memoria asociada a otros procesadores. El software debe considerar afinidad, localidad y sincronización para aprovechar el hardware.

## 4. Mainframe, supercomputación, clúster y grid

**Mainframe** y **supercomputador** no son sinónimos. El mainframe prioriza enorme capacidad transaccional, E/S, disponibilidad, aislamiento de cargas y continuidad de servicio; el supercomputador se orienta a maximizar capacidad de cálculo para problemas científicos o técnicos. Ambos pueden ser multiprocesador y altamente redundantes, pero sus cargas y objetivos difieren.

Un **clúster** agrupa nodos independientes conectados por una red y coordinados mediante software para prestar una capacidad conjunta. Puede buscar alto rendimiento, alta disponibilidad, balanceo o una combinación. El A1 052 destaca tres piezas: nodos de computación, interconexión de altas prestaciones y middleware que coordina el conjunto.

**Grid computing** agrega recursos autónomos y geográficamente distribuidos, incluso pertenecientes a dominios distintos. La idea estable es compartir y seleccionar recursos de manera dinámica; no debe estudiarse como si sustituyera al cloud moderno.

## 5. Escalabilidad, elasticidad y disponibilidad

**Escalabilidad vertical (scale up)** aumenta CPU, RAM o capacidad de un nodo. Es simple, pero tiene techo físico y puede mantener un punto único de fallo. **Escalabilidad horizontal (scale out)** añade nodos y exige que la aplicación y los datos toleren distribución. En sistemas web suele facilitarse manteniendo servicios sin estado o externalizando el estado.

**Elasticidad** es la capacidad de ajustar recursos a la demanda, idealmente de forma automática. Un sistema puede ser escalable sin ser elástico. **Alta disponibilidad** reduce interrupciones mediante redundancia y failover; **tolerancia a fallos** busca seguir funcionando a pesar de fallos; **recuperación ante desastres** contempla la restauración del servicio ante eventos graves y se relaciona con RTO y RPO.

## 6. Virtualización

La virtualización abstrae recursos físicos para crear entornos lógicos. Un **hipervisor tipo 1** se ejecuta directamente sobre el hardware; uno **tipo 2** sobre un sistema operativo anfitrión. Una máquina virtual incluye un sistema operativo invitado y recursos virtuales; esto proporciona aislamiento y flexibilidad, aunque introduce sobrecarga y exige gestión del hipervisor, imágenes, redes y almacenamiento.

No confundas virtualización con contenedores: el contenedor comparte el kernel del host y virtualiza a nivel de sistema operativo; se estudia en II.07.

## 7. Computación en la nube

Cloud computing ofrece recursos TIC bajo demanda mediante acceso de red, aprovisionamiento rápido, compartición de recursos, medición de consumo y elasticidad. Las características conceptuales importan más que memorizar proveedores.

### 7.1 Modelos de servicio

* **IaaS**: el proveedor entrega capacidad de cómputo, red y almacenamiento; el cliente gestiona SO, middleware y aplicaciones.
* **PaaS**: el proveedor gestiona además plataforma/runtime y servicios de soporte; el cliente despliega aplicaciones y datos.
* **SaaS**: el usuario consume una aplicación completa gestionada por el proveedor.
* Otros modelos especializados —funciones, bases de datos gestionadas, contenedores gestionados— pueden entenderse como evoluciones dentro del continuo de responsabilidad.

### 7.2 Modelos de despliegue

* **Nube pública**: infraestructura ofrecida por un proveedor a múltiples clientes.
* **Nube privada**: dedicada a una organización, alojada interna o externamente.
* **Híbrida**: integra recursos privados y públicos con mecanismos de interoperabilidad y operación.
* **Multicloud**: uso de más de un proveedor; no implica por sí mismo integración transparente.

### 7.3 Componentes y capacidades

Una plataforma cloud combina cómputo, redes virtuales, balanceo, almacenamiento de bloque/fichero/objeto, IAM, gestión de claves y secretos, observabilidad, autoscaling, copias, imágenes, APIs de gestión y automatización. La infraestructura se organiza frecuentemente en regiones y zonas de disponibilidad para aislar fallos.

## 8. Riesgos y criterios de elección

Cloud no elimina la administración: cambia el reparto de responsabilidades. Deben valorarse protección del dato, ENS cuando proceda, ubicación y transferencias, identidad y privilegios, cifrado, logging, dependencia del proveedor, portabilidad, costes variables, salida/reversibilidad, disponibilidad y continuidad.

El dimensionamiento debe distinguir **capacidad** y **rendimiento**. Métricas típicas: CPU, RAM, IOPS, throughput, latencia, concurrencia y tiempos de respuesta. Sobredimensionar encarece; infradimensionar compromete servicio.

## 9. Datos y trampas de test

* SISD/SIMD/MISD/MIMD clasifican por flujos de instrucciones y datos.
* UMA ≠ NUMA.
* Mainframe ≠ supercomputador.
* Clúster ≠ grid ≠ cloud.
* Scale up = más recursos en un nodo; scale out = más nodos.
* Escalabilidad ≠ elasticidad.
* HA ≠ backup ≠ disaster recovery.
* IaaS/PaaS/SaaS implican distinta distribución de responsabilidades.
* Hipervisor tipo 1 ≠ tipo 2.
* CPU/socket/núcleo/hilo no son equivalentes.

## 10. Aplicación al supuesto

Ante una carga nueva, describe volumen y picos, requisitos de latencia, disponibilidad y datos; estima recursos; plantea escalado vertical/horizontal; distribuye por zonas; añade balanceo, observabilidad, backups y DR; y compara on-premise/cloud con TCO y riesgos. Una respuesta madura justifica por qué la arquitectura elegida satisface los requisitos y cómo crecerá.

## 11. Resumen II.01

Estudia la cadena completa: hardware → paralelismo → clúster/HPC → virtualización → escalabilidad → cloud. Las preguntas de examen suelen explotar diferencias conceptuales; en supuesto, la clave es dimensionar, eliminar puntos únicos de fallo y justificar coste, seguridad y crecimiento.

# II.02 — Fundamentos de sistemas operativos. Windows, Linux, Unix y sistemas móviles

## 1. Alcance y fuente

El A1 059, actualizado en marzo de 2026, es una base especialmente útil. Se complementa con los temas A1 específicos de Windows, Unix/Linux y móviles. El objetivo GSI no es memorizar comandos aislados, sino comprender funciones del SO y reconocer cómo se administran las plataformas principales.

## 2. Funciones de un sistema operativo

El sistema operativo administra hardware y ofrece abstracciones a los programas: procesos e hilos, memoria, E/S, ficheros, usuarios, protección, comunicaciones y servicios. El **kernel** ejecuta operaciones privilegiadas; las aplicaciones trabajan normalmente en modo usuario y solicitan servicios mediante llamadas al sistema.

## 3. Procesos, hilos y planificación

Un **proceso** es un programa en ejecución con espacio de direcciones, estado y recursos. Un **hilo** es una unidad de ejecución dentro de un proceso y comparte gran parte de sus recursos con otros hilos del mismo proceso. Los hilos facilitan concurrencia, pero exigen sincronización.

Estados clásicos: nuevo, preparado, ejecución, bloqueado/espera y terminado, con variantes según SO. El planificador decide qué tarea usa CPU. Algoritmos que conviene reconocer: FIFO/FCFS, Round Robin, prioridades, Shortest Job First y Shortest Remaining Time. En tiempo compartido importa combinar respuesta, equidad y utilización.

Concurrencia introduce condiciones de carrera. Mecanismos: mutex, semáforos, monitores, variables de condición y operaciones atómicas. Un **deadlock** puede aparecer cuando concurren exclusión mutua, retención y espera, no apropiación y espera circular.

## 4. Memoria

La memoria virtual proporciona a cada proceso un espacio lógico y permite usar almacenamiento secundario como respaldo. La **paginación** divide memoria en páginas/marcos de tamaño fijo; la **segmentación** usa unidades lógicas de tamaño variable. La MMU traduce direcciones y la TLB acelera traducciones.

Ante falta de marcos, el SO aplica algoritmos de reemplazo, como FIFO o aproximaciones a LRU. Un exceso de fallos de página puede provocar **thrashing**. No confundas memoria virtual con «tener más RAM»: es una abstracción de direccionamiento y gestión.

## 5. Entrada/salida y dispositivos

Los drivers encapsulan detalles del hardware. Hay dispositivos orientados a bloque y a carácter. DMA permite transferencias entre dispositivos y memoria con menor intervención de CPU. Interrupciones notifican eventos y evitan sondeo continuo en muchos casos.

## 6. Sistemas de archivos

El sistema de archivos organiza nombres, directorios, metadatos, permisos y asignación de bloques. Debes reconocer conceptos de journaling, enlaces, cuotas, montajes y permisos.

* **Windows**: NTFS es el sistema de ficheros corporativo habitual, con ACL, journaling y características avanzadas; FAT/exFAT siguen siendo relevantes en intercambio y medios extraíbles.
* **Linux/Unix**: ext4, XFS y otros; árbol único desde /, montajes, permisos rwx para propietario/grupo/otros y ACL cuando se usan.
* **macOS**: APFS es el formato moderno principal, con snapshots y cifrado entre sus capacidades.

## 7. Estructuras de SO

Según diseño pueden hablarse de kernels monolíticos, microkernels e híbridos. Un kernel monolítico concentra muchos servicios en espacio privilegiado; microkernel minimiza el núcleo y desplaza servicios; los sistemas reales combinan ideas. También se distinguen sistemas monousuario/multiusuario, monotarea/multitarea, uniprocesador/multiprocesador, de red y distribuidos.

## 8. Windows

Windows moderno deriva de la familia NT. Conceptos administrativos: servicios, procesos, registro, Event Log, NTFS, usuarios/grupos, ACL, políticas, PowerShell, actualización y protección del puesto. En entornos corporativos, Active Directory proporciona directorio, autenticación y políticas; no debe confundirse con el sistema operativo en sí.

La administración segura implica mínimo privilegio, separación de cuentas administrativas, parcheo, firewall, protección de credenciales, cifrado, logging, EDR y gestión centralizada.

## 9. Unix y Linux

Unix define una tradición de diseño multiusuario con procesos, ficheros y herramientas composables. Linux es un kernel de tipo Unix usado en múltiples distribuciones. Conceptos clave: shell, procesos y señales, demonios/servicios, usuarios/grupos, permisos, sudo, paquetes, /proc y /sys, montaje de sistemas de archivos, logs y automatización.

En sistemas con systemd, unidades y servicios se gestionan de forma centralizada. El examen no debería prepararse como una lista de comandos, pero sí conviene saber qué problemas resuelven herramientas de procesos, red, almacenamiento, permisos y logs.

## 10. Sistemas móviles

**Android** utiliza kernel Linux y un modelo por aplicaciones con UID/sandbox, permisos y firma. **iOS** deriva de Darwin/XNU y usa sandbox, firma de código y una distribución más controlada. En ambos importan cifrado, permisos, actualización, aislamiento, biometría y administración empresarial mediante soluciones MDM/UEM.

## 11. Administración y operación

Tareas comunes: instalación, configuración, usuarios y permisos, almacenamiento, red, servicios, actualización, hardening, copias, monitorización y resolución de incidencias. Deben automatizarse cuando sea razonable, manteniendo configuración versionada, trazabilidad y separación de entornos.

## 12. Test

* Proceso ≠ hilo.
* Concurrencia ≠ paralelismo.
* Modo kernel ≠ modo usuario.
* Paginación ≠ segmentación.
* Memoria física ≠ virtual.
* Driver ≠ firmware.
* Servicio Windows ≈ daemon Unix en función, no en implementación.
* NTFS ≠ FAT/exFAT.
* Permisos rwx y ACL no son exactamente lo mismo.
* Android usa kernel Linux; iOS se basa en Darwin/XNU.
* Un SO multitarea no implica que todas las tareas ejecuten simultáneamente en CPU.

## 13. Aplicación al supuesto

Define plataforma por compatibilidad y soporte. Explica hardening, actualización, cuentas privilegiadas, directorio/SSO, cifrado, logging, EDR, backups, monitorización, automatización y HA. No elijas Windows o Linux por preferencia personal: vincula la decisión a requisitos, competencias, licenciamiento, integración y operación.

## 14. Resumen II.02

Domina procesos/hilos, planificación, memoria, E/S, ficheros y seguridad; después aprende las diferencias operativas de Windows, Unix/Linux y móvil. Para GSI tiene más valor comprender mecanismos que memorizar comandos o versiones.

# II.03 — Características técnicas de los lenguajes y paradigmas actuales de programación

## 1. Situación de las fuentes

Este es uno de los huecos reales del banco A1: no existe un tema que cubra exactamente el epígrafe GSI. Por tanto, la V2 distingue claramente **complemento GSI** de contenido heredado. El objetivo es clasificar lenguajes y comprender decisiones técnicas, no aprender la sintaxis completa de cada uno.

## 2. Formas de clasificar un lenguaje

### 2.1 Nivel de abstracción

Los lenguajes de bajo nivel exponen detalles cercanos a la máquina; los de alto nivel proporcionan abstracciones de datos, control, memoria y bibliotecas. Un mayor nivel de abstracción suele mejorar productividad y portabilidad, aunque puede ocultar costes de ejecución.

### 2.2 Compilación, interpretación, JIT y AOT

* **Compilación nativa**: transforma código fuente a instrucciones de una arquitectura antes de ejecutar.
* **Interpretación**: un intérprete ejecuta representaciones del programa durante la ejecución.
* **Bytecode/intermediate language**: Java y .NET generan representaciones intermedias ejecutadas por una máquina virtual/runtime.
* **JIT**: compila durante ejecución partes del programa a código nativo.
* **AOT**: compila anticipadamente, incluso en plataformas que también admiten JIT.

La frontera no es absoluta: un lenguaje puede disponer de varias implementaciones. Por eso «lenguaje compilado» y «lenguaje interpretado» no deben tratarse como categorías rígidas.

### 2.3 Tipado

**Tipado estático**: muchas comprobaciones se realizan antes de ejecutar; **dinámico**: los tipos se asocian y comprueban principalmente en ejecución. «Dinámico» no significa «sin tipos». La distinción fuerte/débil es menos formal y alude al grado de conversiones implícitas y restricciones.

Otros conceptos: inferencia de tipos, genéricos, nulabilidad, tipos algebraicos, conversión explícita e implícita.

## 3. Paradigma imperativo y procedimental

Describe **cómo** modificar el estado mediante secuencias de instrucciones, asignaciones, condiciones, bucles y procedimientos. C es un ejemplo clásico. Ventajas: modelo cercano a la máquina y control explícito. Riesgos: mutabilidad y efectos laterales pueden complicar sistemas grandes y concurrentes.

## 4. Orientación a objetos

Organiza software alrededor de objetos que combinan estado y comportamiento. Conceptos: clase, objeto, encapsulación, abstracción, herencia, polimorfismo, composición e interfaces. Java, C#, C++ y muchos lenguajes modernos son multiparadigma y ofrecen OO.

La composición suele permitir menor acoplamiento que jerarquías de herencia profundas. La OO no garantiza por sí sola buen diseño: importan cohesión, interfaces y responsabilidades.

## 5. Programación funcional

Trata funciones como valores de primera clase y favorece expresiones, composición, funciones puras e inmutabilidad. Una función pura depende solo de sus entradas y no produce efectos laterales observables. Esto facilita razonamiento, pruebas y paralelismo. Haskell es funcional por diseño; Java, C#, JavaScript, Python y otros incorporan lambdas, funciones de orden superior y operaciones funcionales.

Conceptos a reconocer: map/filter/reduce, closures, recursividad, evaluación perezosa en algunos lenguajes e inmutabilidad.

## 6. Lógico y declarativo

En programación declarativa se expresa **qué resultado** se desea y el motor decide gran parte de cómo obtenerlo. SQL es el ejemplo esencial: la consulta describe el conjunto deseado y el optimizador elige un plan. En programación lógica se expresan hechos y reglas, como en Prolog.

## 7. Eventos, reactividad y concurrencia

En el modelo **dirigido por eventos**, callbacks, listeners o manejadores responden a eventos. Es habitual en GUI, navegador y sistemas distribuidos. La programación **reactiva** modela flujos asíncronos y propagación de cambios; suele incorporar backpressure o mecanismos para regular productores y consumidores.

**Concurrencia** significa progresar en varias tareas potencialmente solapadas; **paralelismo**, ejecutar realmente tareas a la vez. Modelos: hilos y memoria compartida, paso de mensajes/actores, async/await, event loop y procesos.

## 8. Gestión de memoria

C/C++ permiten control explícito de memoria, con potencia y riesgo de fugas, use-after-free y corrupción. Java, .NET, Python o JavaScript incorporan recolección automática de basura, aunque siguen existiendo fugas lógicas y presión de memoria. Rust emplea ownership y borrowing para imponer gran parte de la seguridad de memoria en compilación sin GC general.

## 9. Ejemplos de lenguajes actuales

| Lenguaje | Rasgos útiles para comparar |
| --- | --- |
| C | Compilado, procedimental, control de memoria, sistemas y rendimiento. |
| C++ | Nativo, multiparadigma, OO/genéricos, alto control y complejidad. |
| Java | Tipado estático, JVM, GC, OO + funcional, ecosistema empresarial. |
| C# | Tipado estático, .NET/CLR, multiparadigma, async/await, ecosistema empresarial. |
| Python | Dinámico, alto nivel, multiparadigma, scripting, datos y automatización. |
| JavaScript/ECMAScript | Dinámico, web, event loop, funciones de primera clase; cliente y servidor. |
| TypeScript | Superset de JavaScript con sistema de tipos estático gradual; transpila a JavaScript. |
| Go | Compilado, tipado estático, goroutines/channels, servicios e infraestructura. |
| Rust | Compilado, tipado estático, ownership, seguridad de memoria sin GC general. |
| SQL | Declarativo, orientado a consulta/manipulación relacional. |

## 10. Módulos, paquetes, excepciones y genéricos

Los sistemas modernos estructuran código en módulos/paquetes y gestionan dependencias con repositorios y versiones. Las excepciones separan flujo normal y manejo de errores, aunque algunos lenguajes emplean tipos de resultado. Los genéricos permiten reutilizar algoritmos manteniendo información de tipos.

## 11. Criterios de selección

Lenguaje y runtime deben evaluarse por requisitos funcionales/no funcionales, rendimiento, seguridad, ecosistema, disponibilidad de profesionales, soporte, ciclo de vida, portabilidad, integración, observabilidad, herramientas de pruebas, despliegue y coste de mantenimiento. La moda o preferencia del equipo no es criterio suficiente.

## 12. Test

* Compilado ≠ necesariamente código nativo.
* JIT ≠ intérprete puro.
* Tipado dinámico ≠ ausencia de tipos.
* Paradigma OO ≠ lenguaje exclusivamente OO.
* Funcional: funciones de primera clase e inmutabilidad son ideas centrales.
* Declarativo expresa principalmente qué; imperativo, cómo.
* Concurrencia ≠ paralelismo.
* Garbage collector reduce gestión manual, pero no elimina todos los problemas de memoria.
* SQL es declarativo.
* Java y C# se apoyan en runtime/máquina virtual y pueden usar JIT/AOT.

## 13. Supuesto

Cuando el caso exija escoger tecnología, presenta una matriz corta: requisitos → alternativas → criterios → decisión. Indica runtime, modelo de concurrencia, bibliotecas, mantenibilidad, seguridad, pruebas, soporte y despliegue. En aplicaciones públicas la continuidad del mantenimiento pesa más que elegir el lenguaje con mayor tendencia.

## 14. Resumen II.03

Clasifica por ejecución, tipado, memoria y paradigma; domina imperativo, OO, funcional, declarativo, eventos y concurrencia; y aprende a justificar un lenguaje por requisitos.

# II.04 — Inteligencia de negocio: CMI, DSS, EIS, Data Warehouse, OLTP y OLAP

## 1. Alcance y depuración

A1 075 es la fuente técnica principal: desarrolla BI, Data Warehouse, DSS/EIS, ETL, datamarts y explotación multidimensional. También trata Data Lake, Lakehouse, Fabric y Mesh; estos conceptos se mantienen únicamente como comparación porque el BOE centra II.04 en BI, cuadros de mando, sistemas de decisión, almacenes y OLTP/OLAP.

## 2. De datos a decisión

**Business Intelligence (BI)** agrupa métodos, procesos y tecnologías para transformar datos en información analítica útil para la toma de decisiones. Un ecosistema típico tiene fuentes operacionales → integración/ETL → almacén analítico → modelo semántico/OLAP → reporting, dashboards, alertas y análisis.

BI no es solo visualización. Si los datos son inconsistentes, no hay gobierno, o las métricas tienen definiciones diferentes, un dashboard únicamente presenta errores con mejor formato.

## 3. Sistemas de soporte

* **DSS (Decision Support System)**: apoya decisiones semiestructuradas mediante datos, modelos y análisis.
* **EIS (Executive Information System)**: orientado a alta dirección, con información agregada, tendencias, excepciones y KPI.
* **MIS**: categoría amplia de información para gestión operativa, táctica y estratégica.
* **Cuadro de mando**: visualiza indicadores y objetivos; puede ser operativo, analítico o estratégico.
* **Cuadro de Mando Integral (CMI/Balanced Scorecard)**: vincula indicadores con estrategia y objetivos, tradicionalmente desde perspectivas financiera, cliente/usuario, procesos internos y aprendizaje/crecimiento, adaptables al sector público.

## 4. Data Warehouse

Un Data Warehouse integra información de múltiples fuentes para análisis histórico. La formulación clásica de Inmon lo caracteriza como **orientado a temas, integrado, variable en el tiempo y no volátil**. El objetivo no es procesar transacciones de negocio en tiempo real, sino facilitar análisis coherente.

**Data Mart** es un subconjunto especializado por área o materia. En enfoque top-down se construye primero un DW corporativo y después datamarts; en enfoque bottom-up se crean datamarts conformados y se integran progresivamente.

## 5. Aprovisionamiento: ETL/ELT, staging y ODS

**ETL**: extraer de fuentes, transformar/depurar/homogeneizar y cargar en destino. **ELT**: carga primero en una plataforma capaz y transforma posteriormente. No son dogmas: la elección depende de arquitectura, volumen, gobierno y herramientas.

* **Staging area**: zona temporal de recepción/preparación.
* **ODS (Operational Data Store)**: almacén integrado de datos operacionales recientes, habitualmente más normalizado y con menor profundidad histórica que el DW.
* **Metadatos**: describen significado, origen, estructura y transformación.
* **Linaje**: permite saber de dónde procede un dato y qué transformaciones ha sufrido.
* **Calidad**: exactitud, completitud, consistencia, unicidad, validez, oportunidad, etc.

## 6. Modelo dimensional

La **tabla de hechos** representa eventos o procesos medibles y contiene medidas y claves hacia dimensiones. Las **dimensiones** aportan ejes descriptivos como tiempo, organización, producto, territorio o usuario. Una decisión fundamental es el **grano** del hecho: qué representa exactamente una fila.

Esquema **estrella**: hecho central con dimensiones normalmente desnormalizadas. **Copo de nieve**: dimensiones más normalizadas. El modelo dimensional favorece comprensión y consultas analíticas.

## 7. OLTP vs OLAP

| Aspecto | OLTP | OLAP |
| --- | --- | --- |
| Objetivo | Registrar operaciones | Analizar información |
| Carga | Muchas transacciones cortas | Consultas complejas/agregaciones |
| Datos | Actuales, detalle | Históricos e integrados |
| Modelo | Normalizado con frecuencia | Dimensional/multidimensional frecuente |
| Escritura | Continua | Cargas planificadas/streaming según arquitectura |
| Prioridad | Integridad y latencia transaccional | Rendimiento analítico |

OLAP ofrece operaciones clásicas: **roll-up** (agregar), **drill-down** (más detalle), **slice** (seleccionar una dimensión/valor), **dice** (subcubo), **pivot** (reorientar ejes). Puede implementarse como MOLAP, ROLAP o HOLAP según almacenamiento y motor.

## 8. KPI, KGI y cuadro de mando

Un indicador útil debe tener definición, fórmula, fuente, periodicidad, responsable, objetivo/umbral y contexto. Diferencia métrica de **KPI**: no toda cifra es clave. El cuadro debe mostrar evolución, desviaciones y capacidad de profundizar, no solo valores absolutos.

## 9. Conceptos modernos, sin desplazar el epígrafe

A1 075 incluye **Data Lake** —almacenamiento flexible de datos brutos, schema-on-read—, **Lakehouse**, **Data Fabric** y **Data Mesh**. Para II.04 conviene saber diferenciarlos del DW, pero no convertirlos en el núcleo. Un Data Lake sin catálogo, calidad y gobierno puede degenerar en un *data swamp*.

## 10. Gobierno, seguridad y privacidad

BI requiere catálogo, propietarios, calidad, linaje y control de acceso. Las capas de presentación deben respetar minimización y finalidad. Técnicas como agregación, seudonimización y control por filas/columnas reducen exposición. Los entornos de análisis también deben auditar accesos y exportaciones.

## 11. Test

* DW: orientado a temas, integrado, histórico/variable en tiempo y no volátil.
* Data Mart ≠ Data Warehouse completo.
* ETL: transformación antes de la carga; ELT: transformación principal después de cargar.
* Hecho ≠ dimensión.
* Grano define qué representa una fila de hechos.
* OLTP ≠ OLAP.
* Roll-up ≠ drill-down.
* DSS ≠ EIS, aunque están relacionados.
* KPI ≠ cualquier métrica.
* Data Lake ≠ DW.

## 12. Supuesto

Define fuentes, frecuencia y volumen; plantea ingestión/ETL, calidad y linaje; diseña un modelo con grano, hechos y dimensiones; separa OLTP de carga analítica; añade BI, roles, auditoría y protección de datos. Incluye KPI concretos con fórmula y frecuencia.

## 13. Resumen II.04

Memoriza la arquitectura BI de extremo a extremo y las diferencias OLTP/OLAP, hecho/dimensión, DW/Data Mart y ETL/ELT. En caso práctico, la calidad y definición de indicadores son tan importantes como la herramienta.

# II.05 — Arquitectura ANSI/SPARC. SGBD relacionales. SQL e interoperabilidad

## 1. Por qué este tema debe ser amplio

El A1 063 contiene bastante más detalle útil de lo que reflejaba el resumen maestro: lenguajes de SGBD, ACID, anomalías, aislamiento, 2PL, componentes internos y ANSI/SPARC. El A1 064 añade modelo relacional, SQL e interoperabilidad. La V2 recupera ese contenido porque coincide directamente con el BOE.

## 2. Base de datos, metadatos y SGBD

Una base de datos es un conjunto persistente de datos estructurados e interrelacionados conforme a un modelo. El **diccionario de datos** almacena metadatos sobre objetos, atributos, restricciones, privilegios, estructuras y otras propiedades. Puede hablarse de diccionario activo cuando su definición participa directamente en las herramientas del SGBD.

Un **SGBD** proporciona servicios para definir, almacenar, consultar y modificar datos, manteniendo concurrencia, integridad, recuperación, seguridad y administración. Entre sus funciones: catálogo, optimización, transacciones, bloqueos/versionado, logs, backup/recovery, autorización y utilidades de explotación.

## 3. Lenguajes

* **DDL**: CREATE, ALTER, DROP y otras sentencias de definición de esquemas/objetos.
* **DML**: SELECT, INSERT, UPDATE, DELETE y manipulación de datos.
* **DCL**: control de privilegios, por ejemplo GRANT/REVOKE según SGBD.
* **TCL**: control transaccional, como COMMIT, ROLLBACK y SAVEPOINT.

La clasificación exacta de determinadas sentencias puede variar entre productos/documentación; para examen interesa la función conceptual.

## 4. Arquitectura ANSI/X3/SPARC

La arquitectura de tres niveles busca independencia entre vistas, modelo global y almacenamiento:

* **Nivel externo**: vistas o esquemas externos adaptados a usuarios/aplicaciones.
* **Nivel conceptual**: descripción lógica global de entidades, relaciones y restricciones, independiente del almacenamiento concreto.
* **Nivel interno**: representación física, organización de ficheros, páginas, índices y estrategias de almacenamiento.

**Independencia física**: cambiar estructuras internas sin obligar a modificar esquema conceptual/aplicaciones. **Independencia lógica**: modificar el esquema conceptual preservando en lo posible vistas externas y aplicaciones. La independencia lógica suele ser más difícil de alcanzar.

## 5. Modelo relacional

E. F. Codd propuso representar datos mediante relaciones. Una **relación** puede visualizarse como tabla; sus filas son tuplas y columnas atributos. Un dominio define valores admisibles. El orden de filas no forma parte del significado relacional.

* **Clave candidata**: conjunto mínimo de atributos que identifica de forma única una tupla.
* **Clave primaria**: candidata elegida como identificador principal.
* **Clave alternativa**: candidata no elegida.
* **Clave foránea**: referencia una clave de otra relación y materializa integridad referencial.
* **NULL**: ausencia/desconocimiento/no aplicabilidad según contexto; introduce lógica de tres valores.

Restricciones: dominio, clave/entidad, integridad referencial y reglas de negocio. El diseño y normalización se profundizan en Bloque III, pero aquí hay que reconocer que el SGBD las aplica.

## 6. Álgebra relacional: conceptos

Operaciones básicas a reconocer: selección (filas), proyección (columnas), unión, diferencia, producto cartesiano y renombrado; join combina relaciones según condición. SQL no es una transcripción exacta del álgebra relacional, pero comparte su fundamento de operación sobre conjuntos/multiconjuntos.

## 7. SQL de consulta

Orden lógico aproximado de una consulta: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY, con matices del optimizador. De ahí una trampa clásica: **WHERE** filtra filas antes de agrupar y **HAVING** filtra grupos.

### 7.1 Joins

* **INNER JOIN**: filas con coincidencia.
* **LEFT OUTER JOIN**: conserva todas las filas izquierdas y completa con NULL cuando no hay coincidencia.
* **RIGHT OUTER JOIN**: simétrico.
* **FULL OUTER JOIN**: conserva ambos lados.
* **CROSS JOIN**: producto cartesiano.

Un join mal especificado puede multiplicar filas. Las cardinalidades del modelo deben entenderse antes de interpretar agregaciones.

### 7.2 Agregación y subconsultas

COUNT, SUM, AVG, MIN y MAX operan sobre conjuntos. GROUP BY crea grupos. Subconsultas pueden ser escalares, devolver conjuntos o estar correlacionadas. EXISTS comprueba existencia. UNION combina resultados eliminando duplicados; UNION ALL los conserva.

## 8. Vistas, índices y objetos

**Vista**: consulta con nombre que presenta una representación lógica; no equivale necesariamente a materialización. Una vista materializada persiste resultados según mecanismos del motor.

**Índice**: estructura auxiliar que acelera determinadas búsquedas/ordenaciones a costa de espacio, mantenimiento y mayor coste de escritura. Conceptos habituales: B/B+ tree, hash, índices compuestos, selectividad y cobertura. La elección depende del patrón de consultas.

Otros objetos frecuentes: secuencias/identidades, procedimientos/funciones almacenadas, triggers y constraints; no todos son parte estricta del estándar con idéntico comportamiento en productos.

## 9. Transacciones y ACID

* **Atomicidad**: todas las operaciones de la transacción tienen efecto o ninguna.
* **Consistencia**: la transacción lleva la BD de un estado válido a otro respetando reglas.
* **Aislamiento**: las transacciones concurrentes no deben producir resultados incompatibles con el nivel establecido.
* **Durabilidad**: tras commit, el resultado persiste frente a fallos contemplados.

COMMIT confirma; ROLLBACK deshace según alcance. El log de transacciones, buffers y mecanismos de recuperación ayudan a garantizar atomicidad/durabilidad.

## 10. Anomalías de concurrencia

* **Lectura sucia**: una transacción lee datos no confirmados por otra.
* **Lectura no repetible**: la misma fila leída dos veces ofrece valores distintos porque otra transacción confirmó una modificación.
* **Lectura fantasma**: repetir una consulta por condición devuelve un conjunto distinto por inserciones/borrados concurrentes.

| Nivel clásico | Lectura sucia | No repetible | Fantasma |
| --- | --- | --- | --- |
| Read Uncommitted | Puede | Puede | Puede |
| Read Committed | Evita | Puede | Puede |
| Repeatable Read | Evita | Evita | Puede en modelo estándar |
| Serializable | Evita | Evita | Evita |

Los motores implementan aislamiento mediante bloqueos, MVCC o combinaciones, por lo que ciertos comportamientos prácticos pueden diferir del cuadro teórico estándar.

## 11. Bloqueos, 2PL y deadlock

El **two-phase locking (2PL)** separa una fase de adquisición de bloqueos y otra de liberación para lograr serializabilidad en variantes adecuadas. Pueden existir bloqueos compartidos/exclusivos y granularidad de fila, página, tabla, etc. Dos transacciones pueden formar un **deadlock**; el SGBD detecta/previene y aborta una de ellas.

## 12. Arquitectura interna del SGBD

El A1 063 diferencia componentes conceptuales:

* **Procesador/optimizador de consultas**: parsea, valida y elige plan de ejecución.
* **Gestor de transacciones**: coordina unidades de trabajo.
* **Scheduler/Lock Manager**: ordena acceso concurrente y bloqueos.
* **Gestor de buffers**: mueve páginas entre disco y memoria.
* **Gestor de recuperación**: log, commit/rollback y restauración de consistencia.
* **Gestor de almacenamiento**: organiza páginas, ficheros, índices y acceso físico.

## 13. Optimización

El optimizador elige planes en función de estadísticas, cardinalidades, índices, costes estimados y operadores. Problemas típicos: estadísticas obsoletas, índices inadecuados, scans masivos, joins costosos, funciones que impiden usar índice, N+1 desde aplicaciones y falta de particionado cuando procede.

## 14. Interoperabilidad entre SGBD relacionales

La interoperabilidad puede darse en varios niveles:

* **SQL estándar**: lenguaje común, aunque cada producto introduce dialectos/extensiones.
* **ODBC**: interfaz/driver estandarizado de acceso a datos, ampliamente usado en múltiples lenguajes.
* **JDBC**: API Java para conexión a SGBD mediante drivers.
* **ORM**: capa de mapeo objeto-relacional; mejora portabilidad parcial, pero no elimina diferencias de SQL, tipos ni transacciones.
* **APIs y servicios**: encapsulan datos evitando acoplar consumidores al motor.
* **ETL/ELT, replicación y CDC**: integración y sincronización entre plataformas.
* **Formatos**: CSV, JSON, XML, Parquet, etc., útiles para intercambio, no equivalentes a interoperabilidad transaccional.

El objetivo realista no es que dos motores sean idénticos, sino reducir dependencia de extensiones y definir contratos de datos, tipos, codificación, transacciones y errores.

## 15. CAP: dónde encaja

El A1 063 menciona CAP. Conviene conocerlo como teoría de **sistemas de datos distribuidos**: ante partición de red, no puede garantizarse simultáneamente consistencia fuerte y disponibilidad para todas las operaciones. No es una regla para elegir un SGBD relacional mononodo ni sustituye a ACID.

## 16. Seguridad

Principio de mínimo privilegio, cuentas separadas, roles, autenticación robusta, cifrado en tránsito y reposo, gestión de secretos, auditoría, parcheo, hardening y copias. Las aplicaciones deben usar consultas parametrizadas para prevenir inyección SQL.

## 17. Test

* ANSI/SPARC: externo → conceptual → interno.
* Independencia física ≠ lógica.
* DDL/DML/DCL/TCL.
* PK ≠ FK.
* WHERE ≠ HAVING.
* INNER ≠ LEFT/FULL JOIN.
* Vista ≠ tabla física necesariamente.
* Índice acelera lecturas concretas pero penaliza almacenamiento/escrituras.
* ACID: atomicidad, consistencia, aislamiento, durabilidad.
* Dirty/non-repeatable/phantom son anomalías distintas.
* Read committed evita dirty reads; serializable es el aislamiento más fuerte del esquema clásico.
* CAP ≠ ACID.
* ODBC ≠ JDBC.

## 18. Supuesto

Diseña esquema y claves; identifica transacciones críticas; define aislamiento; selecciona índices con base en consultas; plantea pooling de conexiones, roles, cifrado, logs, backup y HA; y documenta interoperabilidad mediante estándar SQL/driver/API. Justifica cuándo usar funciones nativas y el coste de lock-in.

## 19. Resumen II.05

Tema nuclear: ANSI/SPARC + relacional + SQL + transacciones/concurrencia + arquitectura interna + interoperabilidad. Practica consultas y anomalías; son mucho más examinables que memorizar marcas de SGBD.

# II.06 — Arquitectura cliente-servidor, multicapas, multidispositivo e interoperabilidad. Servicios web

## 1. Alcance y fuentes

A1 058 aporta procesamiento cooperativo, cliente-servidor, SOA, orquestación/coreografía, SOAP/WSDL y ESB. Aunque es de 2019, esos fundamentos siguen siendo examinables. A1 065 permite incorporar el desarrollo web y componentes más actuales. La V2 añade REST, APIs, mensajería y observabilidad sin borrar la arquitectura clásica.

## 2. Centralizado, distribuido y procesamiento cooperativo

En un sistema centralizado, la mayor parte del procesamiento y datos reside en un host. En un sistema distribuido, componentes autónomos en nodos distintos cooperan mediante red. Objetivos clásicos: transparencia, fiabilidad, rendimiento, escalabilidad, flexibilidad e interoperabilidad. El precio es mayor complejidad: fallos parciales, latencia, consistencia, coordinación y seguridad.

## 3. Cliente-servidor

El cliente solicita una función mediante una interfaz/protocolo y el servidor la presta. Los roles son lógicos: un proceso puede actuar como servidor para unos componentes y cliente de otros.

### 3.1 Dos capas

Presentación/lógica pueden residir en cliente y datos en servidor. Ventajas: simplicidad inicial y respuesta local. Inconvenientes: clientes pesados, despliegue complejo, acoplamiento a BD y menor control central.

### 3.2 Tres o N capas

* **Presentación**: interacción y validaciones de interfaz.
* **Lógica de aplicación/dominio**: reglas de negocio y casos de uso.
* **Persistencia/acceso a datos**: repositorios, SGBD y almacenamiento.

Añadir capas lógicas no obliga a usar servidores físicos distintos. La separación mejora mantenibilidad, seguridad, pruebas y escalado, aunque incrementa llamadas y arquitectura.

## 4. Multidispositivo

Un mismo sistema puede atender web de escritorio, móvil, apps nativas, integraciones máquina-máquina y accesibilidad asistida. Es preferible desacoplar la interfaz mediante APIs y contratos estables. Técnicas: diseño responsive/adaptativo, BFF cuando distintas experiencias justifican una API específica, caché, CDN para recursos públicos y capacidades offline cuando proceda.

## 5. SOA

**Service-Oriented Architecture** organiza capacidades como servicios con contrato. Los principios recogidos por el material A1 incluyen contrato, bajo acoplamiento, abstracción, reutilización, autonomía, ausencia de estado cuando sea posible, descubrimiento y composición.

**Orquestación**: un coordinador controla el flujo entre servicios. **Coreografía**: los participantes siguen un protocolo de interacción distribuido sin un único controlador de todo el proceso. No son sinónimos.

## 6. ESB

El Enterprise Service Bus es una infraestructura de integración asociada a SOA: enrutado, transformación de mensajes, mediación de protocolos, seguridad, validación, logging y políticas. Su uso centraliza capacidades, pero un ESB mal diseñado puede convertirse en cuello de botella y concentrar lógica de negocio.

## 7. Servicios web clásicos

**SOAP** define mensajería XML estructurada; **WSDL** describe contratos de servicio; **XML Schema** define estructuras/tipos. El ecosistema WS-\* incluye seguridad, políticas y otros aspectos empresariales. SOAP puede operar sobre HTTP y otros transportes; SOAP no es «HTTP con XML».

**WS-Security** añade mecanismos de seguridad a mensajes SOAP, incluyendo firma/cifrado y tokens según perfil. En entornos con requisitos formales o integraciones heredadas estos estándares siguen siendo relevantes.

## 8. REST y HTTP

**REST** es un estilo arquitectónico centrado en recursos, identificadores, representaciones, interfaz uniforme, stateless y caché cuando procede. HTTP aporta métodos y códigos de estado. No existe obligación de que una API HTTP sea RESTful.

* GET: recuperación, seguro e idempotente conceptualmente.
* PUT: reemplazo/actualización idempotente según semántica.
* DELETE: idempotente en efecto deseado.
* POST: procesamiento/creación, no necesariamente idempotente.
* PATCH: modificación parcial; su idempotencia depende del formato/operación.

Diseña URIs estables, errores estructurados, paginación, filtros, idempotency keys cuando proceda, versionado y límites de tasa.

## 9. Sincronía y asincronía

Una llamada síncrona mantiene dependencia temporal entre consumidor y proveedor. La integración asíncrona mediante colas o eventos desacopla disponibilidad y facilita absorción de picos, pero introduce consistencia eventual, duplicados y necesidad de reintentos.

Conceptos: **at-least-once**, **at-most-once**, orden, deduplicación, idempotencia, dead-letter queue y outbox. «Exactly once» extremo a extremo suele ser una propiedad costosa y dependiente del contexto.

## 10. API Gateway, balanceo y caché

Un API Gateway puede centralizar autenticación, routing, rate limiting, políticas, transformación y observabilidad. El balanceador reparte tráfico entre instancias. La caché reduce latencia/carga, pero exige estrategia de invalidación y no debe servir datos sensibles sin controles.

## 11. Estado, sesión y escalabilidad

HTTP es sin estado a nivel de protocolo; una aplicación puede mantener sesión. Para escalar horizontalmente conviene evitar que una sesión solo exista en memoria de una instancia, o utilizar afinidad con conocimiento de sus límites. Alternativas: tokens, session store compartido o diseño stateless.

## 12. Interoperabilidad y contratos

Define formatos, codificación, versiones, autenticación, errores, límites, tiempos, SLA/SLO y compatibilidad. OpenAPI puede documentar APIs HTTP; AsyncAPI puede describir eventos/mensajería. Contract testing ayuda a evitar roturas entre consumidores y productores.

## 13. Seguridad

TLS, OAuth2/OIDC cuando aplique, autenticación de servicio a servicio, autorización, validación de entradas, límites de tamaño/rate, gestión de secretos, protección frente a SSRF/inyección, logging sin datos sensibles y trazabilidad distribuida.

## 14. Test

* 2 capas ≠ 3/N capas.
* Capa lógica ≠ servidor físico.
* SOA ≠ SOAP; SOA puede usar distintas tecnologías.
* SOAP = protocolo/mensajería; REST = estilo arquitectónico.
* WSDL describe servicios; XSD estructura XML.
* Orquestación ≠ coreografía.
* ESB ≠ API Gateway aunque se solapen funciones.
* HTTP stateless ≠ aplicación sin sesión.
* Síncrono ≠ asíncrono.
* Idempotencia ≠ ausencia de efectos.

## 15. Supuesto

Dibuja presentación → API/gateway → servicios → persistencia, con integraciones externas. Define contratos, autenticación/autorización, errores, reintentos, timeouts, circuit breaker cuando proceda, observabilidad y HA. Justifica SOAP si existe contrato/legado específico, REST para recursos o mensajería/eventos cuando desacoplar sea necesario.

## 16. Resumen II.06

Comprende la evolución cliente-servidor → capas → SOA/servicios → APIs/eventos. El examen puede preguntar tecnología clásica; el supuesto exige además resiliencia, contratos, seguridad y operación.

# II.07 — Contenedores y microservicios: arquitectura, despliegue, monitorización y escalado

## 1. Alcance y actualización

El BOE pide expresamente modelo de desarrollo basado en contenedores y microservicios, arquitectura/soluciones, despliegue, monitorización y escalado. Las fuentes A1 aportan desarrollo web, integración continua y gestión/configuración; se completan con conceptos actuales de OCI y Kubernetes.

**Actualización 21/08/2026:** Kubernetes mantiene oficialmente las tres ramas menores 1.36, 1.35 y 1.34. La 1.37 está prevista para el 26/08/2026, por lo que no se estudia como versión estable en esta edición. La V2 prioriza objetos y arquitectura estables, no números de parche.

## 2. Contenedores

Un contenedor empaqueta aplicación, bibliotecas y configuración de ejecución, aislando procesos mediante mecanismos del sistema operativo. Comparte el kernel del host y por ello suele iniciar más rápido y consumir menos que una VM completa. El aislamiento no es idéntico al de una VM: host/kernel y configuración de runtime son parte de la superficie de seguridad.

**Imagen** es una plantilla inmutable por capas; **contenedor** es una instancia en ejecución. Un **registry** almacena y distribuye imágenes. OCI define especificaciones interoperables para imágenes y runtimes.

## 3. Construcción de imágenes

Buenas prácticas: imágenes mínimas, versiones fijadas, multi-stage builds, usuario no root, dependencias verificadas, no incluir secretos, SBOM, escaneo de vulnerabilidades y firma/procedencia cuando la cadena de suministro lo requiera. El principio es «build once, deploy many»: promover el mismo artefacto entre entornos.

## 4. Contenedor vs máquina virtual

| Aspecto | Contenedor | VM |
| --- | --- | --- |
| Virtualiza | SO/procesos | Hardware |
| Kernel | Comparte host | SO invitado propio |
| Arranque | Rápido | Más pesado |
| Aislamiento | Alto, dependiente del kernel/runtime | Fuerte frontera de virtualización |
| Densidad | Mayor normalmente | Menor normalmente |
| Uso | Empaquetado y despliegue de apps | Aislamiento de SO/cargas completas |

No son tecnologías excluyentes: es frecuente ejecutar contenedores dentro de máquinas virtuales.

## 5. Microservicios

Una arquitectura de microservicios divide un sistema en servicios desplegables de forma independiente, alineados con capacidades de negocio y responsables de sus datos/lógica en la medida apropiada. La frontera debe responder al dominio; dividir por tablas, capas técnicas o equipos sin cohesión genera un monolito distribuido.

Ventajas potenciales: despliegue independiente, escalado selectivo, autonomía tecnológica y aislamiento de fallos. Costes: red, consistencia distribuida, observabilidad, más artefactos, automatización, seguridad este-oeste, gobernanza de APIs y operación.

## 6. Monolito modular vs microservicios

Un **monolito modular** puede ser una mejor solución si el equipo es pequeño, el dominio aún cambia y no existen necesidades de escalado independiente. Los microservicios se justifican cuando hay fronteras de dominio claras, equipos con autonomía y beneficios operativos reales. No se puntúa mejor un supuesto por escribir «microservicios» sin justificar.

## 7. Datos y consistencia

Evita una base de datos compartida usada directamente por todos los servicios porque acopla esquemas y despliegues. Patrones: database-per-service, APIs/eventos, Saga para transacciones distribuidas, outbox para publicación fiable, CQRS en casos justificados. La consistencia eventual requiere diseñar estados intermedios, compensaciones y experiencia de usuario.

## 8. Kubernetes: arquitectura

Kubernetes es un orquestador declarativo. En el **control plane** destacan API Server, scheduler, controller manager y almacenamiento de estado del clúster. En los nodos se ejecutan kubelet, runtime de contenedores y componentes de red/proxy según implementación.

## 9. Objetos principales

* **Pod**: unidad mínima de despliegue; uno o varios contenedores que comparten red y volúmenes.
* **Deployment**: gestiona despliegues declarativos de cargas normalmente stateless y ReplicaSets.
* **ReplicaSet**: mantiene el número deseado de réplicas.
* **StatefulSet**: identidades estables y patrones adecuados para determinadas cargas con estado.
* **DaemonSet**: una instancia por nodo seleccionado, típico para agentes.
* **Job/CronJob**: trabajo finito/periódico.
* **Service**: identidad/acceso de red estable a un conjunto de pods.
* **Ingress/Gateway**: entrada HTTP/otros según controlador/API.
* **ConfigMap**: configuración no secreta.
* **Secret**: objeto para datos sensibles; debe protegerse adicionalmente con políticas, cifrado y gestión de secretos.
* **Namespace**: partición lógica y ámbito de nombres/políticas.

Un **Service de Kubernetes** no es un microservicio de negocio. Un Pod tampoco equivale necesariamente a un contenedor.

## 10. Recursos, scheduling y salud

Los **requests** expresan recursos necesarios para planificación; los **limits** restringen consumo según recurso/runtime. Un dimensionamiento incorrecto produce infrautilización, throttling u OOM. El scheduler considera recursos, afinidades, taints/tolerations y otras restricciones.

Probes: **startup** para inicio lento, **readiness** para decidir si recibe tráfico y **liveness** para detectar necesidad de reinicio. Una liveness mal diseñada puede empeorar una incidencia.

## 11. Despliegue

Estrategias: rolling update, recreate, blue/green y canary. Rolling reduce interrupción progresivamente; blue/green facilita conmutación entre dos entornos; canary expone una parte del tráfico a la nueva versión. Debe existir rollback y compatibilidad de cambios de esquema.

La CI crea/valida artefactos; la entrega/despliegue automatiza promoción. GitOps utiliza un repositorio declarativo como fuente de estado deseado y un reconciliador aplica cambios.

## 12. Escalado

* **Horizontal Pod Autoscaler**: ajusta réplicas según métricas.
* **Vertical**: ajusta recursos por pod mediante mecanismos apropiados.
* **Cluster autoscaling**: ajusta capacidad de nodos.
* **Escalado de aplicación**: requiere stateless o externalización/partición adecuada del estado.

Escalar una capa no resuelve cuellos de botella en BD, colas, terceros o almacenamiento. Se debe medir la cadena completa.

## 13. Observabilidad

Tres señales clásicas: **logs, métricas y trazas**. Añade eventos y perfiles cuando sean útiles. En microservicios es esencial correlacionar peticiones con trace/request IDs. Métricas: latencia, tráfico, errores, saturación, CPU/memoria, cola, disponibilidad y objetivos SLI/SLO.

Monitorización indica estado conocido; observabilidad busca poder inferir causas internas a partir de señales. Alertas deben orientarse a impacto/SLI y evitar ruido.

## 14. Resiliencia

Timeouts, retries con backoff/jitter, circuit breaker, bulkheads, rate limiting e idempotencia. Reintentar sin límites puede amplificar una caída. Un retry solo es seguro si la operación es idempotente o se implementa deduplicación.

## 15. Seguridad

RBAC de mínimo privilegio, aislamiento por namespaces/políticas de red, protección del API, imágenes verificadas, escaneo, secrets externos cuando proceda, admission policies, runtime security, logs y actualizaciones. Proteger la cadena de suministro desde repositorio hasta registry y clúster.

## 16. Test

* Imagen ≠ contenedor.
* Contenedor ≠ VM.
* Microservicio ≠ API pequeña.
* Pod ≠ contenedor.
* Service Kubernetes ≠ microservicio.
* Deployment gestiona ReplicaSets; ReplicaSet mantiene réplicas.
* Readiness ≠ liveness ≠ startup.
* Request ≠ limit.
* Stateless facilita escalado, pero no significa «sin datos».
* Autoscaling no elimina cuellos de botella externos.
* Rolling/blue-green/canary son estrategias distintas.

## 17. Supuesto

Primero decide si microservicios aportan valor. Después: registry, pipeline, despliegue declarativo, recursos, probes, redes, secrets, persistencia, HA, autoscaling, logs/métricas/trazas, backups y DR. Añade compatibilidad de versiones, estrategia de datos, rollback y controles de supply chain.

## 18. Resumen II.07

Domina contenedor/imagen/registry, ventajas y costes de microservicios, objetos Kubernetes, despliegue, probes, escalado, observabilidad y resiliencia. No memorices parches: razona arquitectura.

# II.08 — Modelos OSI y TCP/IP: capas, protocolos, direccionamiento y encaminamiento

## 1. Alcance

El tema exige arquitectura de comunicaciones, capas/interfaces/protocolos, direccionamiento y routing. El banco A1 109/111/115 proporciona una base sólida; la V2 reorganiza el material para que puedas resolver preguntas de capas, subnetting y protocolos.

## 2. Conceptos de red

Una red interconecta nodos para intercambiar datos mediante protocolos. Un **protocolo** define reglas entre entidades del mismo nivel; una **interfaz** delimita servicios entre capas adyacentes. La encapsulación añade cabeceras —y a veces trailers— a medida que los datos bajan por la pila; el receptor desencapsula.

## 3. Modelo OSI

| Capa | Función esencial | Ejemplos/conceptos |
| --- | --- | --- |
| 7 Aplicación | Servicios a aplicaciones | HTTP, DNS, SMTP, SNMP |
| 6 Presentación | Representación, codificación, transformación | formatos, serialización, cifrado conceptualmente |
| 5 Sesión | Diálogo/sesiones | control de sesión, checkpoints conceptuales |
| 4 Transporte | Comunicación extremo a extremo, puertos | TCP, UDP |
| 3 Red | Direccionamiento y routing | IPv4/IPv6, ICMP, routers |
| 2 Enlace | Tramas, MAC, acceso al medio | Ethernet, Wi‑Fi, switches, VLAN |
| 1 Física | Señal y medio | cobre, fibra, radio |

Las implementaciones reales no siempre separan literalmente sesión/presentación; OSI sigue siendo un modelo de referencia útil.

## 4. TCP/IP

La pila TCP/IP se representa habitualmente como acceso a red/enlace, Internet, transporte y aplicación. Mapeo aproximado: OSI 1-2 → acceso; OSI 3 → Internet; OSI 4 → transporte; OSI 5-7 → aplicación.

## 5. Ethernet, MAC, ARP y NDP

Una dirección MAC identifica una interfaz en un dominio de enlace. Ethernet transporta tramas. Los switches aprenden asociaciones MAC↔puerto y reenvían tramas. Una **VLAN** crea dominios de broadcast lógicos separados.

En IPv4, **ARP** resuelve dirección IPv4 a MAC en el enlace local. En IPv6, **Neighbor Discovery (NDP)** cumple funciones de descubrimiento sobre ICMPv6. ARP no atraviesa routers.

## 6. IPv4

Dirección de 32 bits. CIDR expresa prefijo /n. La máscara separa red y host. Ejemplos:

| Prefijo | Máscara | Direcciones totales |
| --- | --- | --- |
| /24 | 255.255.255.0 | 256 |
| /25 | 255.255.255.128 | 128 |
| /26 | 255.255.255.192 | 64 |
| /27 | 255.255.255.224 | 32 |
| /28 | 255.255.255.240 | 16 |

En una subred IPv4 tradicional, red y broadcast no se asignan a hosts; por eso suele usarse 2^(bits host)−2, con excepciones especiales /31 y /32. Debes ser capaz de calcular rango, red, broadcast y número de hosts.

Rangos privados RFC1918: 10.0.0.0/8; 172.16.0.0/12; 192.168.0.0/16. NAT traduce direcciones y, con PAT, también puertos. NAT no es por sí mismo un firewall ni una medida suficiente de seguridad.

## 7. IPv6

Direcciones de 128 bits en hexadecimal. Elimina la necesidad estructural de NAT para conservar direcciones, aunque pueden existir traducciones por otros motivos. Tipos: unicast, multicast y anycast; no existe broadcast IPv6. Link-local usa FE80::/10. NDP y SLAAC son conceptos esenciales.

La abreviación permite omitir ceros iniciales y comprimir una secuencia continua de grupos cero una sola vez con ::.

## 8. TCP y UDP

| Característica | TCP | UDP |
| --- | --- | --- |
| Conexión | Orientado a conexión | No orientado |
| Fiabilidad | Sí, ACK/retransmisión/orden | No garantizada por protocolo |
| Control flujo/congestión | Sí | No equivalente |
| Unidad | Segmento | Datagrama |
| Overhead | Mayor | Menor |
| Casos | web, SSH, correo, BBDD | DNS frecuente, streaming/tiempo real, QUIC sobre UDP |

TCP usa handshake, números de secuencia, ACK, ventanas y mecanismos de congestión. UDP no significa «malo» o «inseguro»: permite que protocolos superiores implementen fiabilidad o seguridad de otra manera; QUIC es el ejemplo actual más visible.

## 9. Puertos y sockets

Los puertos identifican extremos lógicos de transporte. Un socket puede entenderse como combinación de protocolo, IP y puerto. Valores a reconocer: SSH 22/TCP; DNS 53 UDP/TCP; HTTP 80/TCP; HTTPS 443 (TCP y QUIC/UDP según HTTP/3); SMTP 25; NTP 123/UDP; SNMP 161/162 UDP típicamente. No memorices cientos de puertos sin prioridad.

## 10. DNS, DHCP e ICMP

**DNS** resuelve nombres y otros registros. Registros: A, AAAA, CNAME, MX, NS, TXT, PTR, SRV. Hay resolución recursiva e iterativa; caching y TTL afectan propagación.

**DHCP** asigna parámetros como dirección, máscara/prefijo, gateway y DNS. En IPv4 el flujo clásico se resume DORA: Discover, Offer, Request, Acknowledge.

**ICMP** transporta mensajes de control/error; ping usa eco. En IPv6, ICMPv6 es aún más esencial por NDP y otras funciones.

## 11. Routing

Un router decide el siguiente salto utilizando tabla de rutas y la coincidencia de prefijo más específica. Rutas pueden ser conectadas, estáticas o aprendidas dinámicamente. La **ruta por defecto** se usa cuando no existe una más específica.

* **IGP**: dentro de un sistema autónomo. OSPF es protocolo de estado de enlace; calcula rutas con coste.
* **EGP**: entre sistemas autónomos. BGP es el protocolo interdominio de Internet y selecciona rutas con políticas y atributos, no solo «camino más corto».
* **RIP**: vector distancia histórico, métrica por saltos; útil conceptualmente.

## 12. Encapsulación y PDU

PDU orientativa: datos en capas altas, segmento/datagrama en transporte, paquete/datagrama IP en red, trama en enlace y bits/señales en física. Preguntas de examen pueden asociar switch con L2 y router con L3, aunque equipos modernos implementen varias capas.

## 13. MTU y fragmentación

MTU es el máximo tamaño de unidad de una interfaz/enlace. En IPv4 puede existir fragmentación; en IPv6 los routers no fragmentan paquetes en tránsito. Path MTU Discovery evita fragmentación innecesaria. Problemas de MTU pueden manifestarse como conexiones que «funcionan parcialmente».

## 14. Test

* OSI tiene 7 capas.
* TCP/IP suele agrupar 4 capas conceptuales.
* Switch principalmente L2; router L3.
* IPv4 = 32 bits; IPv6 = 128 bits.
* ARP es IPv4/enlace; NDP es IPv6.
* IPv6 no usa broadcast.
* TCP ≠ UDP.
* DNS ≠ DHCP.
* NAT ≠ firewall.
* Ruta más específica gana frente a ruta por defecto.
* OSPF es IGP; BGP es interdominio.
* Puerto ≠ dirección IP.

## 15. Supuesto

Segmenta por VLAN/subred, calcula CIDR, define gateways, routing redundante, DNS/DHCP/NTP, firewalls y balanceo. Separa usuarios, servidores, administración y DMZ cuando corresponda. Incluye IPv6 si procede, alta disponibilidad, monitorización y direccionamiento documentado.

## 16. Resumen II.08

Aprende capas por función, no solo de memoria; domina TCP/UDP, IPv4/IPv6, CIDR, DNS/DHCP/ICMP y routing. Practica subnetting: es una habilidad que no se consolida leyendo.

# II.09 — Lenguajes de marca: SGML, HTML, XML y derivaciones. Lenguajes de script

## 1. Alcance y corrección de fuente

A1 077, de 2023, aporta HTML, CSS, XML, XSD, XPath, XSLT, HTTP y estándares web. La V2 corrige una formulación importante: **HTML moderno no debe describirse como «basado en XML»**. HTML tiene su propia sintaxis; XHTML es la serialización XML de HTML y exige reglas de documento XML bien formado.

## 2. Lenguajes de marcas y SGML

Un lenguaje de marcas incorpora etiquetas/metadatos al contenido para representar estructura, semántica o presentación. **SGML** es un metalenguaje ISO histórico para definir lenguajes de marcado mediante reglas/DTD. Influyó en HTML y XML. Para GSI importa su relación histórica/conceptual, no memorizar toda la norma SGML.

## 3. HTML

**HTML** define estructura y semántica de documentos web. El documento moderno comienza con <!doctype html> y contiene los elementos html, head y body. La presentación se delega principalmente en CSS y el comportamiento en JavaScript.

### 3.1 Semántica

Elementos como header, nav, main, article, section, aside y footer describen función del contenido. Usar semántica nativa mejora accesibilidad, mantenimiento, indexación y capacidad de las tecnologías de apoyo.

### 3.2 Formularios y multimedia

Form, label, input, select, textarea y button permiten interacción. La asociación label-control y la validación accesible son fundamentales. HTML incluye audio, video, canvas y SVG integrado. El atributo alt proporciona alternativa textual a imágenes cuando procede.

### 3.3 Metadatos

title, meta charset, viewport, description y lenguaje del documento. Los metadatos ayudan a interpretación, responsive y SEO, pero no sustituyen contenido de calidad.

## 4. CSS

Aunque el título del BOE no lo menciona expresamente, A1 077 lo usa para entender la web. CSS separa presentación de estructura. Conceptos: cascada, especificidad, herencia, box model, media queries, Flexbox y Grid. Responsive design adapta el layout al espacio disponible.

## 5. XML

**XML** es un metalenguaje/sintaxis extensible para representar documentos y datos estructurados. Las etiquetas las define la aplicación. Un documento **bien formado** cumple reglas sintácticas XML; uno **válido** además cumple el vocabulario/esquema declarado.

* Un único elemento raíz.
* Etiquetas correctamente anidadas y cerradas.
* XML distingue mayúsculas/minúsculas.
* Atributos entre comillas.
* Entidades para caracteres especiales cuando proceda.

## 6. DTD y XSD

**DTD** describe estructura mediante sintaxis heredada de SGML. **XML Schema (XSD)** usa XML y define tipos de datos, cardinalidades, restricciones y estructuras más ricas. XSD no es lo mismo que un documento XML de negocio: es su esquema.

## 7. Namespaces

Evitan colisiones de nombres al combinar vocabularios XML. Se declaran mediante URI y prefijos. El prefijo es una abreviatura local; la identidad se asocia al namespace, no al texto del prefijo.

## 8. XPath y XSLT

**XPath** selecciona nodos/valores dentro de XML mediante expresiones de rutas. **XSLT** transforma documentos XML a XML, HTML, texto u otros resultados, utilizando XPath para seleccionar partes. XPath consulta; XSLT transforma.

## 9. XHTML

XHTML aplica reglas XML al vocabulario HTML. Requiere documento bien formado, minúsculas según versión, elementos cerrados y atributos citados. No debe confundirse con HTML5 servido con sintaxis HTML.

## 10. JSON frente a XML

JSON no está en el título, pero es útil como comparación: modelo sencillo de objetos, arrays, strings, números, booleanos y null, muy habitual en APIs. XML destaca en documentos con namespaces, esquemas y ecosistemas de firma/transformación. La elección depende del contrato y no de que uno sea universalmente «mejor».

## 11. Lenguajes de script

Un script automatiza tareas o añade comportamiento con un ciclo de desarrollo generalmente ligero. Ejemplos: JavaScript, Python, shell/Bash, PowerShell. El término no implica necesariamente tipado dinámico ni interpretación pura.

En navegador, JavaScript usa DOM y APIs web; puede gestionar eventos y peticiones. En servidor y automatización, los scripts administran sistemas, transforman datos y orquestan procesos.

## 12. JavaScript y seguridad web

JavaScript ≠ Java. Riesgos típicos: XSS si se inyecta contenido no confiable en DOM/HTML, CSRF cuando una aplicación acepta acciones autenticadas sin protección adecuada y dependencias de terceros comprometidas. Medidas: escaping contextual, APIs seguras de DOM, CSP, cookies seguras/SameSite, tokens CSRF cuando proceda y control de dependencias.

## 13. HTTP como contexto

HTTP es protocolo de aplicación sin estado. HTTP/2 multiplexa flujos sobre conexión; HTTP/3 utiliza QUIC sobre UDP con TLS integrado en QUIC. No es necesario memorizar cada RFC, pero sí comprender que HTML/XML son formatos y HTTP es protocolo de transporte de aplicación.

## 14. Test

* SGML = metalenguaje histórico.
* HTML ≠ XML; XHTML sí usa sintaxis XML.
* HTML estructura; CSS presenta; JavaScript programa comportamiento.
* XML bien formado ≠ válido.
* XSD ≠ XML de datos.
* Namespace evita colisiones.
* XPath selecciona; XSLT transforma.
* JavaScript ≠ Java.
* JSON ≠ XML.
* HTTP ≠ HTML.

## 15. Supuesto

Usa HTML semántico y accesible; CSS responsive; scripts sin mezclar secretos; APIs con JSON o XML según contrato; XSD si una integración exige validación; sanitiza/valida entradas y protege XSS/CSRF. Si hay intercambio administrativo XML, documenta namespaces, esquemas, firma y versiones.

## 16. Resumen II.09

Domina la jerarquía SGML→influencia en HTML/XML, diferencias HTML/XHTML/XML, XSD, XPath/XSLT y papel de scripts. La trampa principal es confundir lenguaje de marcas, programación y protocolo.

# II.10 — Análisis y gestión de riesgos de sistemas de información. Herramientas

## 1. Alcance y fuentes

A1 047 aporta el proceso general y MAGERIT. La documentación oficial del PAe confirma en 2026 que **MAGERIT v3** sigue siendo la metodología pública mantenida para análisis/gestión de riesgos y que **PILAR** se encuentra en producción como herramienta asociada.

## 2. Vocabulario esencial

* **Activo**: elemento que tiene valor para la organización y cuya degradación afecta objetivos.
* **Amenaza**: causa potencial de incidente o daño.
* **Vulnerabilidad**: debilidad que una amenaza puede explotar.
* **Salvaguarda/control**: medida que reduce probabilidad, impacto o facilita prevención/detección/respuesta.
* **Impacto**: consecuencia de materialización.
* **Probabilidad/frecuencia**: posibilidad de ocurrencia según método.
* **Riesgo**: combinación de probabilidad y consecuencias sobre objetivos/activos.
* **Riesgo inherente/potencial**: antes de considerar controles.
* **Riesgo residual**: el que permanece tras salvaguardas.

Amenaza y vulnerabilidad no son intercambiables. Un servidor sin parche tiene una vulnerabilidad; un atacante o malware puede ser amenaza; el riesgo surge al combinar contexto, exposición y consecuencias.

## 3. Ciclo de gestión de riesgos

* Establecer contexto, alcance, criterios y responsables.
* Inventariar activos y dependencias.
* Valorar activos/servicios e impacto por dimensiones relevantes.
* Identificar amenazas y vulnerabilidades.
* Identificar salvaguardas existentes y su madurez.
* Estimar impacto y probabilidad/frecuencia.
* Calcular/valorar riesgos.
* Compararlos con criterios de aceptación.
* Seleccionar tratamiento.
* Aprobar riesgo residual por responsable competente.
* Revisar de forma continua ante cambios, incidentes y nuevas amenazas.

## 4. Análisis cualitativo y cuantitativo

**Cualitativo**: escalas como bajo/medio/alto y matrices; rápido y comprensible, pero menos preciso. **Cuantitativo**: intenta expresar frecuencias/pérdidas en magnitudes, útil cuando hay datos fiables. En la práctica existen enfoques semicuantitativos.

No conviertas números arbitrarios en falsa precisión. Lo importante es que escalas y criterios estén definidos y sean consistentes.

## 5. Tratamiento

* **Evitar**: eliminar actividad/causa que genera riesgo.
* **Reducir/mitigar**: aplicar controles.
* **Compartir/transferir**: seguros, contratos, externalización; no transfiere toda responsabilidad.
* **Aceptar**: decisión consciente cuando residual es tolerable o tratamiento desproporcionado.

Un plan de tratamiento define acción, responsable, prioridad, recursos, fecha y riesgo objetivo. La aceptación debe ser explícita según gobernanza.

## 6. MAGERIT v3

MAGERIT estructura el análisis de riesgos de sistemas de información dentro de un marco de gestión. Está especialmente alineada con el ámbito de las AAPP y el ENS. Trabaja con activos, dimensiones/valoración, amenazas, salvaguardas, impacto y riesgo. No es una herramienta: es una **metodología**.

El material oficial la relaciona con ISO 31000 y con la exigencia del ENS de gestionar seguridad basada en riesgos.

## 7. PILAR

PILAR implementa análisis y gestión según MAGERIT/ISO 27005. Permite modelar activos y dependencias, amenazas y salvaguardas, estimar impacto/riesgo potencial y residual, producir mapa de riesgos y apoyar un plan de mejora. La herramienta no sustituye al juicio ni a la aprobación de responsables.

## 8. Riesgo de seguridad vs riesgo de proyecto

No mezcles: riesgo de seguridad (pérdida de C/I/D/A/T, etc.) con riesgos de proyecto como retraso, sobrecoste o falta de recursos. Pueden relacionarse, pero usan objetivos y tratamientos distintos.

## 9. Relación con ENS

El ENS exige gestión de seguridad basada en riesgos y análisis/gestión proporcionados. Categorizar un sistema y analizar riesgos son procesos relacionados pero distintos: la categoría deriva del impacto en dimensiones según ENS; el análisis profundiza en amenazas, controles y residual.

## 10. Continuidad

RTO es tiempo objetivo de recuperación; RPO es pérdida máxima de datos medida temporalmente. Ayudan a traducir impacto/disponibilidad a requisitos de continuidad. No son probabilidades ni «niveles de riesgo».

## 11. Riesgos de terceros

Cloud, SaaS, telecomunicaciones y subcontratación introducen dependencia de terceros. Evalúa SLA, seguridad, ubicación del dato, cadena de suministro, continuidad, notificación de incidentes, subencargados/subcontratistas y reversibilidad. Transferir un servicio no elimina el riesgo para la organización.

## 12. Test

* Amenaza ≠ vulnerabilidad.
* Impacto ≠ probabilidad.
* Riesgo inherente/potencial ≠ residual.
* Control ≠ riesgo.
* MAGERIT = metodología; PILAR = herramienta.
* Evitar/reducir/transferir- compartir/aceptar son tratamientos.
* Aceptar riesgo no significa ignorarlo.
* ENS categoriza y exige gestión de riesgos; no sustituye el análisis.
* RPO ≠ RTO.
* Riesgo de proyecto ≠ riesgo de seguridad.

## 13. Supuesto

Incluye una tabla: activo/servicio → amenaza → vulnerabilidad → impacto → controles → residual → tratamiento/owner. Prioriza riesgos altos, vincula medidas ENS y continuidad, y señala qué riesgos requieren aceptación. Con pocos elementos bien elegidos se demuestra más análisis que con listas genéricas.

## 14. Resumen II.10

Aprende vocabulario, ciclo, tratamiento y relación MAGERIT/PILAR/ENS. En supuesto, el valor está en conectar cada medida con un riesgo concreto y mostrar riesgo residual.

# II.11 — Auditoría informática: objetivos, metodología, técnicas, estándares, ENS, datos y seguridad física

## 1. Concepto y objetivo

La auditoría informática es un proceso sistemático de obtención y evaluación de evidencias para determinar si los sistemas, controles y procesos protegen activos, mantienen integridad/seguridad, cumplen criterios y apoyan eficazmente los objetivos. El A1 038 es la fuente específica y se complementa con A1 047 para riesgos y A1 048 para ENS.

Auditar no es «buscar fallos» sin criterio. Debe existir **alcance**, **criterios**, **evidencia**, **hallazgos**, conclusión y seguimiento.

## 2. Objetivos

* Evaluar eficacia y diseño de controles.
* Comprobar cumplimiento legal, normativo, contractual y de políticas.
* Identificar riesgos y debilidades relevantes.
* Evaluar protección de confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad.
* Revisar gobierno, operación, continuidad, cambios y seguridad.
* Proponer acciones correctivas y comprobar su cierre.

## 3. Principios de auditoría

Independencia y objetividad; competencia profesional; planificación basada en riesgos; evidencia suficiente, pertinente y fiable; confidencialidad; trazabilidad; debido cuidado profesional. El auditor no debería evaluar de forma acrítica controles que él mismo diseñó/operó cuando ello comprometa independencia.

## 4. Ciclo de auditoría

* **Mandato y alcance**: sistema, procesos, periodo, ubicaciones, exclusiones.
* **Criterios**: ENS, políticas, RGPD/LOPDGDD, ISO, contrato, procedimientos, etc.
* **Análisis preliminar de riesgos** y plan de trabajo.
* **Trabajo de campo**: entrevistas, documentación, observación, configuración, logs, muestreo y pruebas.
* **Contraste de evidencia** y elaboración de hallazgos.
* **Informe**: condición, criterio, causa, riesgo/efecto y recomendación.
* **Plan de acciones**: responsable, prioridad y fecha.
* **Seguimiento** y verificación de cierre.

## 5. Evidencia

Tipos: documental, observacional, testimonial y técnica/digital. Debe poder ser reproducida o contrastada. Capturas aisladas o declaraciones sin corroboración pueden no ser suficientes. Es importante conservar fecha, fuente, consulta realizada y contexto.

El muestreo permite obtener conclusión razonable sin revisar el 100%, pero debe definirse población, método y riesgo de muestreo.

## 6. Técnicas y herramientas

* Entrevistas y cuestionarios.
* Revisión de políticas, procedimientos, arquitectura e inventarios.
* Revisión de configuración y hardening.
* Análisis de usuarios, roles, privilegios y segregación de funciones.
* Consulta de logs y SIEM.
* Escáneres de vulnerabilidades y cumplimiento.
* Análisis de red/configuración de firewalls.
* Muestreo de transacciones y pruebas de controles.
* Revisión de backups/restauraciones.
* Pruebas físicas de acceso/energía/ambiente.
* Scripts de auditoría para correlacionar inventario, cuentas, parches o eventos.

Una auditoría puede utilizar resultados de pentest, pero **auditoría ≠ pentest**. El pentest busca explotar vulnerabilidades dentro de reglas de compromiso; la auditoría evalúa un conjunto más amplio de controles y criterios.

## 7. Tipos

Interna/primera parte, de proveedor/segunda parte y externa/tercera parte; de cumplimiento, financiera con componente TI, operativa, seguridad, desarrollo, continuidad, datos, etc. El BOE exige específicamente ENS, protección de datos y seguridad física.

## 8. Normas y marcos

**ISO 19011** ofrece directrices para auditoría de sistemas de gestión. **ISO/IEC 27001** contiene requisitos de un SGSI certificable; **ISO/IEC 27002** sirve de guía de controles. COBIT e ISACA aportan gobierno/control y prácticas de auditoría. No debe asumirse que una certificación ISO implica cumplimiento automático del ENS o RGPD.

## 9. Auditoría ENS

El ENS (RD 311/2022) establece auditorías de seguridad en los casos y periodicidad aplicables. La fuente A1 048 actualizada en marzo de 2026 recuerda que los sistemas de categoría básica se apoyan en autoevaluación para la declaración de conformidad, mientras media/alta requieren los mecanismos de auditoría/certificación previstos. También procede auditoría extraordinaria ante modificaciones sustanciales que puedan repercutir en seguridad.

La guía CCN-STIC 802 desarrolla auditoría ENS. Debes distinguir:

* **Categoría del sistema**: deriva de valoración ENS.
* **Auditoría de seguridad**: evaluación periódica y ante cambios relevantes.
* **Conformidad ENS**: declaración/certificación conforme al régimen.
* **ISO 27001**: certificación de SGSI, relacionada pero no equivalente.

En auditoría ENS se revisan política, roles, análisis de riesgos, Declaración de Aplicabilidad, medidas del marco organizativo/operacional/protección, evidencias, incidentes, continuidad, terceros y mejora.

## 10. Auditoría de protección de datos

RGPD no establece una «auditoría bienal general» como la antigua LOPD española. El enfoque actual es **responsabilidad proactiva**: poder demostrar licitud, transparencia, minimización, contratos de encargado, seguridad, gestión de derechos, EIPD cuando proceda, brechas, transferencias, retención y privacidad desde diseño.

Una auditoría puede revisar: registro de actividades, bases jurídicas, información a interesados, medidas, roles, DPD, contratos, subencargados, evidencias de consentimiento cuando sea base, derechos, supresión/retención, pruebas y datos en no producción.

## 11. Auditoría de seguridad física

Áreas: perímetro, control de acceso, visitantes, CCTV si procede, cerramientos, racks, energía, UPS/grupos, climatización, detección/extinción de incendios, agua, cableado, inventario, destrucción de soportes, mantenimiento y continuidad. Debe verificarse evidencia: registros de acceso, pruebas de generadores, mantenimientos, sensores, simulacros y restauraciones.

## 12. Hallazgos y criticidad

Un buen hallazgo relaciona **criterio** incumplido, **condición** observada, **causa**, **impacto/riesgo** y recomendación. Clasificar como crítica/alta/media/baja debe basarse en criterios definidos, no en dramatismo.

Distingue no conformidad, observación/oportunidad de mejora y riesgo aceptado. Una recomendación debe ser accionable y proporcional.

## 13. Test

* Auditoría ≠ pentest.
* Evidencia ≠ opinión.
* Hallazgo debe referenciar criterio.
* Independencia y trazabilidad son principios clave.
* Auditoría ENS ≠ certificación ISO 27001.
* RGPD se basa en responsabilidad proactiva; no memorices la antigua auditoría bienal de LOPD como regla RGPD.
* Seguridad física incluye energía, clima y acceso, no solo puertas.
* Riesgo determina prioridad del plan de acciones.
* Cerrar una acción requiere verificar efectividad, no solo «marcarla hecha».

## 14. Supuesto

Define alcance y criterios; selecciona pruebas por riesgo; solicita evidencias; presenta 4–6 hallazgos con riesgo; prioriza remediación; fija responsables/fechas y seguimiento. Si el caso es ENS, añade categoría, análisis de riesgos, DoA, roles y conformidad. Si es datos, añade EIPD, contratos, derechos y brechas.

## 15. Resumen II.11

Estudia auditoría como método: alcance → criterio → evidencia → hallazgo → informe → remediación → seguimiento. Luego aplica ese ciclo a ENS, protección de datos y seguridad física.

# II.12 — Atención a clientes y usuarios: contact center, CRM, multicanal, IVR y VoiceXML

## 1. Alcance y hueco A1

El mapa A1 cubre parcialmente CRM y XML, pero no desarrolla con suficiente profundidad la arquitectura de contact center. Por eso esta sección es una **ampliación específica GSI**, siguiendo los conceptos ya identificados en la auditoría: PBX/SBC/VoIP, colas/enrutado, CTI, IVR, ASR/TTS, VoiceXML, privacidad, accesibilidad, KPI y dimensionamiento.

## 2. De call center a contact center

Un **call center** se centra principalmente en voz. Un **contact center** integra varios canales: telefonía, email, chat, web, mensajería, videollamada y redes sociales cuando proceda. El objetivo es gestionar interacciones con enrutamiento, contexto, trazabilidad y niveles de servicio.

## 3. Multicanal vs omnicanal

**Multicanal**: existen varios canales, pero pueden funcionar como silos. **Omnicanal**: se intenta conservar contexto, identidad e historial al cambiar de canal. La omnicanalidad requiere un modelo común de interacción, CRM/case management y reglas de privacidad.

## 4. Componentes de voz

* **PBX/IP-PBX**: centralita que gestiona extensiones y llamadas.
* **SIP**: protocolo de señalización habitual en VoIP.
* **SBC**: Session Border Controller, protege/controla el borde de sesiones VoIP.
* **ACD**: Automatic Call Distributor, enruta llamadas a colas/agentes.
* **CTI**: Computer Telephony Integration, integra telefonía y aplicaciones/CRM.
* **IVR**: Interactive Voice Response, diálogo automatizado por teclado DTMF y/o voz.
* **Grabación**: registra llamadas cuando existe finalidad/base y controles apropiados.
* **WFM**: Workforce Management, predice carga y planifica agentes.

## 5. Enrutamiento y colas

Estrategias: round-robin, agente más libre, skills-based routing, prioridad, idioma, servicio, valor o urgencia. Las colas necesitan mensajes, tiempo estimado, callback y reglas de desbordamiento. El diseño debe evitar loops y pérdida de contexto.

## 6. CRM

Customer Relationship Management gestiona información e interacciones de una relación. En sector público puede ser más apropiado hablar de ciudadano/usuario y gestión de casos. Componentes: ficha, contactos, historial, actividades, casos/tickets, comunicaciones, segmentación autorizada, base de conocimiento, reporting e integraciones.

CRM no debe convertirse en «base de datos donde copiar todo». Minimización, calidad, finalidad, retención y permisos son esenciales.

## 7. CTI y screen-pop

CTI enlaza llamada y aplicación: identificar número/usuario, abrir ficha o caso, registrar inicio/fin, permitir click-to-call, transferencias y clasificación. El **screen pop** muestra información contextual al agente. Debe aplicarse mínimo privilegio: que llegue una llamada no justifica mostrar datos innecesarios.

## 8. IVR

Un IVR presenta opciones y recoge entrada. Puede usar DTMF, reconocimiento automático de voz (**ASR**) y síntesis (**TTS**). Diseña menús cortos, salida a agente, repetición, accesibilidad, detección de errores y tratamiento de datos sensibles.

IVR no equivale a reconocimiento de voz: un IVR puede funcionar solo con tonos DTMF.

## 9. VoiceXML

**VoiceXML** es un lenguaje XML para describir diálogos de voz. Separa lógica de aplicación y presentación de voz y puede controlar prompts, gramáticas, captura y flujo del diálogo mediante un intérprete/plataforma de voz. Para examen importa su naturaleza XML y su uso en aplicaciones de voz, no aprender sintaxis extensa.

## 10. Arquitectura multicanal

Canales → gateway/telefonía/chat/email → router/ACD → IVR/bots cuando proceda → agentes → CRM/case management → conocimiento → backoffice. Servicios transversales: identidad, grabación, analítica, supervisión, reporting y observabilidad.

## 11. Identificación y autenticación

Distingue identificar por contexto (número, cookie, correo) de autenticar con garantía suficiente. Para trámites sensibles pueden requerirse factores adicionales. No uses preguntas débiles como único mecanismo si el riesgo es alto. La autenticación debe ser proporcional y no bloquear innecesariamente la atención general.

## 12. Privacidad y grabación

Si se graban llamadas, define finalidad/base, información, acceso, retención, seguridad y ejercicio de derechos. Evita registrar credenciales o datos de pago/sensibles innecesarios. Los agentes necesitan roles, logs y formación; las exportaciones de grabaciones deben estar controladas.

## 13. Accesibilidad

Canales alternativos para personas con discapacidad auditiva, visual, del habla o cognitiva; compatibilidad con tecnologías de apoyo; lenguaje claro; tiempos razonables; chat/texto; subtítulos/interpretación cuando el servicio lo exija. Un IVR inaccesible no se corrige únicamente «añadiendo web».

## 14. KPI

* **ASA**: tiempo medio de respuesta.
* **AHT**: tiempo medio de gestión.
* **Abandon rate**: porcentaje de abandonos.
* **FCR**: resolución en primer contacto.
* **Service level**: porcentaje atendido dentro de umbral.
* **Occupancy**: tiempo productivo respecto a disponible.
* **CSAT/NPS**: satisfacción/recomendación, interpretados con cautela.

Optimizar AHT de forma aislada puede empeorar FCR y satisfacción. Los KPI deben equilibrar eficiencia y calidad.

## 15. Dimensionamiento

Se parte de volumen por franja, duración media, patrón de llegada, objetivo de servicio, shrinkage (pausas/formación/ausencias), canales y concurrencia. En telefonía se emplean modelos de colas como Erlang C en escenarios adecuados. Para GSI basta comprender que «número medio de llamadas / agentes» no es dimensionamiento suficiente.

## 16. Continuidad

Redundancia de enlaces/telefonía, sedes o agentes remotos, colas, fallback, backup de configuración, capacidad de desbordamiento, monitorización y planes de contingencia. Un fallo del CRM no debería dejar sin mecanismo básico de atención si el servicio es crítico.

## 17. Test

* Call center ≠ contact center.
* Multicanal ≠ omnicanal.
* ACD distribuye; CTI integra telefonía e informática.
* IVR ≠ ASR.
* DTMF ≠ reconocimiento de voz.
* VoiceXML es XML orientado a diálogos de voz.
* CRM ≠ simple agenda.
* Screen-pop ≠ autenticación fuerte.
* AHT bajo no implica mejor calidad.
* Grabación requiere finalidad y controles.

## 18. Supuesto

Dibuja canales y voz → ACD/IVR → agentes → CRM/casos → backoffice. Define reglas de routing, identificación, escalado a agente, grabación, privacidad, accesibilidad, SLA/KPI, continuidad y monitorización. Para un organismo público, incluye trazabilidad y no fuerces a usar voz para todos los trámites.

## 19. Resumen II.12

Domina los componentes y sus funciones: ACD, CTI, IVR, CRM, VoiceXML y canales. En supuesto, la diferencia está en privacidad, accesibilidad, routing y métricas.

# II.13 — Seguridad física y lógica. Herramientas de ciberseguridad. Incidentes e informática forense

## 1. Alcance y fuentes

A1 125 desarrolla seguridad en redes y ataques; A1 126, disponible en versión P31, actualiza el marco de ciberseguridad e incidentes; A1 127 aporta informática forense. Para GSI deben integrarse, no estudiarse como tres listas separadas.

## 2. Objetivos de seguridad

Los objetivos clásicos son **confidencialidad, integridad y disponibilidad**. En el contexto ENS se añaden de forma expresa **autenticidad y trazabilidad**. La seguridad es un proceso integral: personas, procesos, tecnología, instalaciones, proveedores y ciclo de vida.

## 3. Seguridad física

Protege instalaciones, personas, equipos y soportes frente a acceso no autorizado, incendio, agua, fallo eléctrico, temperatura, sabotaje y otros eventos. Medidas:

* zonificación y perímetros;
* control de acceso e identificación;
* registro/acompañamiento de visitas;
* racks y salas restringidas;
* UPS, grupos electrógenos y distribución eléctrica redundante;
* climatización y monitorización ambiental;
* detección y extinción de incendios adecuada al entorno;
* protección frente a agua e inundación;
* inventario, custodia y destrucción segura de soportes;
* mantenimiento y pruebas periódicas.

La continuidad física no consiste solo en tener un SAI: requiere capacidad, autonomía, mantenimiento, pruebas y escenarios de fallo.

## 4. Seguridad lógica

Controles de identidad, autenticación, autorización, mínimo privilegio, segregación de funciones, hardening, parcheo, EDR/antimalware, cifrado, segmentación, backups, logging y monitorización. El enfoque de **defensa en profundidad** evita depender de una única barrera.

Zero Trust puede resumirse como no confiar implícitamente por ubicación de red: verificar explícitamente, limitar privilegios y asumir compromiso. No significa «bloquear todo» ni un producto concreto.

## 5. Tipos de ataque

El A1 125 utiliza la clasificación interrupción/interceptación/modificación/fabricación y categorías de incidentes de CCN-STIC. Debes reconocer:

* **Malware**: virus, gusano, troyano, ransomware, spyware, rootkit, RAT.
* **DoS/DDoS**: agotamiento de capacidad o recursos.
* **Reconocimiento**: scanning, enumeración, fingerprinting.
* **Sniffing/MitM**: captura o intermediación del tráfico.
* **Spoofing**: suplantación de IP, ARP, DNS, correo, etc.
* **Phishing/spear phishing**: ingeniería social para credenciales/acción.
* **Explotación**: vulnerabilidades de software/hardware/configuración.
* **Aplicación web**: inyección, XSS, CSRF, subida/inclusión insegura, SSRF, etc.
* **Credenciales**: fuerza bruta, password spraying, credential stuffing.
* **Exfiltración**: extracción no autorizada de información.
* **Supply chain**: compromiso de dependencias, build, proveedor o actualización.

## 6. Vulnerabilidad, exploit e incidente

Una vulnerabilidad es debilidad; un exploit es técnica/código que aprovecha una vulnerabilidad; un incidente es un evento que compromete o amenaza operaciones/seguridad y requiere respuesta según criterios. No todo evento del SIEM es incidente.

## 7. Herramientas preventivas y de protección

* **Firewall**: aplica política de filtrado; puede ser stateless/stateful y de aplicación según producto.
* **WAF**: protege aplicaciones HTTP frente a patrones/ataques de capa aplicación; no sustituye desarrollo seguro.
* **IDS**: detecta y alerta; **IPS**: puede bloquear en línea.
* **EDR/XDR**: telemetría y respuesta en endpoints/varios dominios.
* **Antimalware**: detección por firmas, comportamiento y otras técnicas.
* **SIEM**: centraliza/correlaciona logs y genera detecciones.
* **SOAR**: automatiza/orquesta flujos de respuesta.
* **Escáner de vulnerabilidades**: identifica exposiciones conocidas/configuración.
* **SAST/DAST/SCA**: análisis de código, aplicación ejecutándose y dependencias.
* **DLP**: políticas para detectar/controlar salida de datos sensibles.
* **PAM**: gestión de accesos privilegiados.
* **MFA**: reduce riesgo de credenciales robadas, aunque no elimina phishing avanzado.

## 8. Criptografía aplicada

Cifrado simétrico: misma clave para cifrar/descifrar, eficiente para volumen. Asimétrico: par pública/privada, útil para intercambio, firma y autenticación. Hash: función unidireccional para integridad/derivaciones; no cifra. MAC/HMAC autentica integridad con clave compartida.

TLS protege comunicaciones mediante negociación criptográfica, autenticación del servidor con certificados y establecimiento de claves de sesión. Una firma digital proporciona autenticidad/integridad y evidencia en contexto; no confidencialidad por sí sola.

## 9. Gestión de vulnerabilidades

* Inventario de activos y versiones.
* Fuentes de vulnerabilidades/avisos.
* Escaneo y evaluación contextual.
* Priorización por criticidad, exposición y explotación real, no solo CVSS.
* Parche/mitigación o aceptación justificada.
* Validación de remediación.
* Métricas y excepciones.

Un CVE no implica que el activo sea explotable en tu contexto; y una configuración insegura puede ser crítica sin CVE.

## 10. Gestión de incidentes

Ciclo práctico: preparación → detección/análisis → contención → erradicación → recuperación → lecciones aprendidas. Algunas guías agrupan fases de otra forma, pero la lógica es estable.

### 10.1 Preparación

Roles, contactos, playbooks, herramientas, logging, sincronización de tiempo, backups, canales alternativos, formación, ejercicios y criterios de severidad.

### 10.2 Detección y análisis

Validar alerta, determinar alcance, activos/usuarios, vector, IoC, cronología, impacto y necesidad de notificaciones. Preservar evidencia desde el inicio.

### 10.3 Contención

Aislar endpoints, bloquear indicadores, revocar credenciales/tokens, segmentar, limitar servicios. Distingue contención inmediata de solución definitiva.

### 10.4 Erradicación y recuperación

Eliminar persistencia, corregir vulnerabilidad, reconstruir desde fuentes confiables, restaurar, rotar secretos y monitorizar recaídas. Recovery debe tener criterios de aceptación.

### 10.5 Lecciones aprendidas

Causa raíz, fallos de detección/control, tiempos, evidencia, cambios a playbooks y controles. El objetivo no es buscar culpables sino reducir recurrencia.

## 11. CSIRT/SOC y ámbito público

**SOC** monitoriza/detecta/coordina operaciones de seguridad; **CSIRT/CERT** se centra en respuesta/coordinación ante incidentes. Sus funciones pueden solaparse. En AAPP, CCN-CERT tiene un papel central conforme al ENS y normativa aplicable; otros equipos nacionales actúan según sector/ámbito.

## 12. Informática forense

Busca identificar, adquirir, preservar, analizar y presentar evidencias digitales de manera técnicamente fiable y con trazabilidad. Principio esencial: **preservar el original** y trabajar sobre copias cuando sea posible.

### 12.1 Fases

* Identificación de fuentes de evidencia.
* Preservación y aislamiento.
* Adquisición forense.
* Verificación mediante hashes.
* Examen y recuperación de artefactos.
* Análisis y correlación temporal.
* Documentación e informe/presentación.

### 12.2 Orden de volatilidad

Los datos más volátiles se pierden antes: registros CPU/cache, memoria RAM, conexiones/procesos, discos, logs remotos/copias, etc. El orden real depende del incidente y del riesgo de alterar evidencia. Apagar una máquina puede destruir evidencia de memoria; mantenerla encendida también puede permitir daño: se decide según procedimiento.

### 12.3 Imagen y hash

Una adquisición bit a bit intenta capturar el medio de forma completa, incluyendo áreas no asignadas según caso. Se calculan hashes del original/copia para demostrar integridad. El hash no «certifica quién creó el fichero»; demuestra coincidencia/integridad respecto a la muestra.

### 12.4 Cadena de custodia

Documenta quién recoge, cuándo, dónde, cómo, identificadores, transferencias, almacenamiento y acceso. Una evidencia técnicamente interesante sin cadena/documentación puede perder valor probatorio.

## 13. Forense por fuente

* **Disco**: sistema de archivos, borrados, metadatos, artefactos.
* **Memoria**: procesos, conexiones, claves/tokens y malware residente.
* **Red**: PCAP, NetFlow y logs de equipos.
* **Logs**: sistema, aplicación, IAM, cloud, proxy, EDR, SIEM.
* **Móvil**: adquisición lógica/física según dispositivo y autorización.
* **Cloud**: snapshots, logs de control plane, auditoría, objetos y proveedor; exige preparación previa.

## 14. Test

* CIA ≠ conjunto completo ENS: ENS añade autenticidad y trazabilidad.
* Amenaza ≠ vulnerabilidad ≠ exploit.
* Firewall ≠ WAF.
* IDS detecta; IPS puede bloquear.
* SIEM ≠ SOAR.
* SAST ≠ DAST ≠ SCA.
* Hash ≠ cifrado.
* SOC ≠ CSIRT aunque se solapen.
* Contención ≠ erradicación.
* Backup ≠ prevención de ransomware por sí solo.
* Forense: preservar, adquirir, verificar, analizar.
* Cadena de custodia ≠ hash; ambos son importantes.

## 15. Supuesto

Propón controles preventivos, detectivos y correctivos; centraliza logs; define SOC/SIEM/EDR, gestión de vulnerabilidades e incidentes; y si hay compromiso, describe preservación forense, aislamiento, evidencia, recuperación y notificaciones. Une seguridad lógica con CPD, terceros y continuidad.

## 16. Resumen II.13

Estudia seguridad como ciclo: proteger → detectar → responder → recuperar → aprender. En forense, la prioridad es evidencia íntegra y trazable. Las herramientas tienen funciones distintas; evita presentarlas como una lista intercambiable.

# II.14 — Software libre y propietario. Licencias, protección jurídica y DRM

## 1. Alcance y fuentes

A1 069 desarrolla software libre/código abierto y licencias; A1 043, la protección jurídica de programas. Se combinan con el epígrafe GSI y se elimina información de productos ofimáticos/servidores que no aporta a licencias o derecho.

## 2. Software propietario

El titular conserva derechos y concede uso conforme a licencia. El usuario normalmente no recibe libertades de estudiar/modificar/redistribuir el código salvo lo que autorice el contrato/ley. Propietario no significa necesariamente de pago, y gratuito no significa libre.

## 3. Software libre

La Free Software Foundation formula cuatro libertades: ejecutar el programa para cualquier propósito; estudiar cómo funciona y modificarlo; redistribuir copias; distribuir versiones modificadas. El acceso al código fuente es condición necesaria para estudiar/modificar.

**Free software** se refiere a libertad, no a precio. Una distribución libre puede ser comercial.

## 4. Open Source

Open Source Initiative define criterios de licencia orientados a acceso al código, redistribución y no discriminación, entre otros. En la práctica hay gran solapamiento con software libre, aunque las comunidades ponen énfasis filosófico distinto.

## 5. Licencias permisivas

Ejemplos: MIT, BSD, Apache-2.0. Permiten reutilización amplia, incluso en software propietario, conservando avisos/condiciones. Apache-2.0 incluye además una concesión de patentes explícita y reglas asociadas.

## 6. Copyleft

**GPL** exige que determinados trabajos derivados/distribuidos mantengan licencia compatible y código fuente según términos. **LGPL** permite ciertos usos/enlaces con software no LGPL bajo condiciones. **AGPL** extiende obligaciones al uso del programa modificado para prestar servicio a través de red en los supuestos definidos.

«Copyleft» no significa dominio público ni prohibición comercial. El detalle de obligaciones depende de la licencia y de cómo se combine/distribuya el software.

## 6.1 EUPL y reutilización en el sector público

## La European Union Public Licence (EUPL) es una licencia de software libre promovida por la Comisión Europea y especialmente relevante en Administraciones Públicas europeas. Es copyleft, está disponible en múltiples lenguas oficiales y fue diseñada teniendo en cuenta el marco jurídico de la UE. Para GSI conviene reconocer su finalidad, su relación con la reutilización de software público y que la compatibilidad con otras licencias debe comprobarse conforme a la versión y apéndice de compatibilidad aplicables.

## 7. Compatibilidad de licencias

Combinar dependencias exige comprobar compatibilidad, obligaciones de atribución, aviso, código fuente, patentes y distribución. Una organización debe mantener inventario/SBOM y política de aprobación; copiar código de Internet sin revisar licencia crea riesgo jurídico.

## 8. Dominio público y Creative Commons

Dominio público implica ausencia/extinción/renuncia posible de derechos según ordenamiento y no equivale a open source. Creative Commons está orientado principalmente a obras culturales/contenidos; no es la opción habitual recomendada para licenciar software.

## 9. Protección jurídica del software en España/UE

Los programas de ordenador se protegen por propiedad intelectual en el marco del Texto Refundido de la Ley de Propiedad Intelectual y normativa europea/internacional aplicable. La protección recae sobre la **expresión** del programa, no sobre ideas/principios subyacentes en abstracto.

Pueden protegerse código fuente/objeto y documentación preparatoria en términos legales. El titular dispone de derechos de reproducción, transformación y distribución con límites/excepciones específicas para el usuario legítimo.

## 10. Titularidad laboral

En programas creados por un trabajador en ejercicio de sus funciones o siguiendo instrucciones, la titularidad de derechos de explotación se determina por las reglas legales y contrato aplicable. En contratación pública/externa, la cesión/licencia debe quedar expresamente regulada: código, documentación, derechos de modificación, reutilización y entregables.

## 11. Descompilación e interoperabilidad

La normativa contempla supuestos limitados en los que el usuario legítimo puede realizar actos necesarios para uso, corrección o interoperabilidad, sujetos a condiciones. No debe resumirse como «se puede descompilar cualquier software».

## 12. Patentes, marcas y secretos

Propiedad intelectual del código no agota todos los derechos: marcas identifican productos/servicios; secretos empresariales pueden proteger know-how; patentes tienen un régimen específico y límites sobre patentabilidad de programas «como tales» en Europa. Una licencia de copyright no siempre concede todos los derechos de patente salvo que lo diga.

## 13. DRM

**Digital Rights Management** agrupa tecnologías para controlar acceso, uso, copia o distribución de contenido/software: cifrado, licencias, activación, servidores de autorización, marcas de agua y entornos protegidos. No confundir DRM con una licencia jurídica: el DRM es mecanismo técnico; la licencia define derechos/condiciones.

## 14. Riesgos de DRM

Dependencia de servidores/proveedor, disponibilidad, privacidad/telemetría, accesibilidad, interoperabilidad, preservación, bloqueo de usuarios legítimos y dificultad de migración. En AAPP debe valorarse especialmente continuidad y reversibilidad.

## 15. Gestión de software en una organización

* inventario de software y licencias;
* SBOM y dependencias;
* política de licencias open source;
* control de vulnerabilidades y fin de soporte;
* conservación de avisos/NOTICE;
* evidencia de compras/suscripciones;
* evitar software no autorizado;
* revisión de contratos y derecho de salida;
* gestión de activos SAM.

## 16. Test

* Software libre ≠ gratuito.
* Open source ≠ dominio público.
* Permisiva ≠ copyleft.
* GPL ≠ AGPL.
* Licencia ≠ DRM.
* Código fuente accesible no implica automáticamente licencia libre.
* Copyright protege expresión del programa, no la idea abstracta.
* Creative Commons no es la familia típica para software.
* Una dependencia open source puede imponer obligaciones al distribuir.
* Tener binario legítimo no autoriza cualquier descompilación.

## 17. Supuesto

Inventaría componentes/licencias, exige SBOM, comprueba compatibilidad y vulnerabilidades, fija derechos de uso/modificación/reutilización, y analiza lock-in. Si se compara libre vs propietario, evalúa TCO, soporte, comunidad, interoperabilidad, seguridad, roadmap y reversibilidad; no uses «libre = gratis» como argumento.

## 18. Resumen II.14

Diferencia filosofía/licencia/propiedad y mecanismo técnico. Domina permisivas vs copyleft y las bases jurídicas de protección. En proyecto, la gobernanza de dependencias y derechos de salida es esencial.

# II.15 — Evaluación de alternativas, viabilidad, planificación, presupuestación y control de costes

## 1. Alcance

El A1 040 aporta métodos multicriterio; otros temas de gestión aportan estimación, planificación y costes. Para GSI importa ser capaz de justificar una alternativa y convertirla en un plan viable, no memorizar todos los algoritmos de decisión existentes.

## 2. Estudio de alternativas

* Definir problema y objetivos.
* Identificar requisitos obligatorios y restricciones.
* Generar alternativas realistas, incluida opción de no actuar cuando tenga sentido.
* Definir criterios y pesos antes de conocer/ajustar interesadamente el resultado.
* Obtener datos/evidencia y puntuar.
* Normalizar cuando las escalas difieran.
* Realizar análisis de sensibilidad.
* Seleccionar y documentar decisión/riesgos.

## 3. Criterios

Técnicos: funcionalidad, rendimiento, escalabilidad, seguridad, interoperabilidad, mantenibilidad, soporte, accesibilidad. Económicos: inversión, operación, licencias, personal, energía, migración y salida. Organizativos: competencias, cambio, dependencia, gobernanza. Jurídicos: protección de datos, ENS, licencias, contratación y conservación.

Distingue **requisito eliminatorio** de criterio ponderable. Una alternativa que incumple una restricción legal no debería «compensarla» con una puntuación económica alta.

## 4. Asignación de pesos

A1 040 incluye Delphi, AHP/Saaty, utilidades relativas y entropía. Para GSI:

* **Delphi**: rondas de expertos con realimentación para aproximar consenso.
* **AHP**: comparaciones por pares y jerarquía de criterios; permite analizar consistencia.
* **Entropía**: enfoque más objetivo basado en capacidad discriminante de datos, según método.
* **Ponderación directa**: simple y transparente si se documenta.

## 5. Normalización y puntuación

Cuando los criterios usan unidades distintas (euros, ms, %), se normalizan. El A1 040 incluye fracción del máximo, del ideal y de la suma. En decisiones reales hay que distinguir criterios a maximizar/minimizar, umbrales de satisfacción y **umbral de saciedad**: mejoras por encima de cierto punto pueden no aportar valor.

## 6. Métodos de decisión

**Ponderación lineal**: suma puntuaciones normalizadas × pesos. Sencilla y explicable, pero compensatoria. **AHP** estructura decisión por jerarquías. **TOPSIS** elige cercanía a ideal positivo y lejanía del negativo. **ELECTRE/PROMETHEE** pertenecen a métodos de superación. Para GSI conviene entender la idea, no memorizar derivaciones matemáticas exhaustivas.

## 7. Análisis de sensibilidad

Cambia pesos y supuestos razonables. Si una variación pequeña invierte la decisión, el resultado es frágil y debe comunicarse. La sensibilidad ayuda a detectar «falsa objetividad» de una matriz.

## 8. Viabilidad

| Dimensión | Preguntas |
| --- | --- |
| Técnica | ¿Tecnología madura? ¿integra? ¿escala? ¿hay PoC? |
| Económica | ¿TCO asumible? ¿beneficios/ahorros? ¿financiación? |
| Operativa | ¿Puede explotarse y soportarse? ¿cambio organizativo? |
| Legal | ¿RGPD/ENS/licencias/contratación/accesibilidad? |
| Temporal | ¿Cabe en plazo y dependencias? |
| Recursos | ¿equipo, proveedores, infraestructura y competencias? |

Una prueba de concepto valida incertidumbres técnicas; un piloto valida además operación y usuarios a pequeña escala. No son equivalentes a producción.

## 9. Costes: CAPEX, OPEX y TCO

**CAPEX** suele asociarse a inversión/capitalización; **OPEX** a gasto operativo recurrente, según contabilidad aplicable. **TCO** suma coste total de propiedad/uso: compra, licencias, cloud, personal, soporte, energía, instalaciones, seguridad, formación, migración, downtime y retirada.

Una solución «barata de comprar» puede tener TCO alto por operación o dependencia.

## 10. Evaluación económica

* **ROI**: relación entre beneficio neto y inversión, con definición explícita.
* **Payback**: tiempo para recuperar inversión.
* **VAN/NPV**: valor presente de flujos descontados; positivo indica creación de valor según supuestos.
* **TIR/IRR**: tasa que hace VAN cero; se interpreta comparándola con tasa exigida y considerando limitaciones.

En AAPP los beneficios pueden ser no monetarios —calidad, tiempo ciudadano, cumplimiento, resiliencia—; deben medirse con indicadores y no inventarse como euros sin método.

## 11. Estimación de proyecto

Técnicas: juicio experto, analogía, paramétrica, bottom-up, tres puntos y métodos basados en tamaño (puntos función/story points con usos distintos). **Estimación ≠ compromiso**: debe incluir rango e incertidumbre.

Estimación de tres puntos puede usar optimista, más probable y pesimista; PERT clásico pondera (O + 4M + P)/6.

## 12. WBS/EDT

La Estructura de Desglose del Trabajo divide entregables/alcance en paquetes gestionables. Ayuda a estimar, asignar responsables y controlar cambios. No es un organigrama ni necesariamente un cronograma.

## 13. Gantt y dependencias

Gantt representa tareas en el tiempo. Dependencias clásicas: fin-inicio, inicio-inicio, fin-fin, inicio-fin. Hitos tienen duración cero y marcan eventos. Las holguras indican margen.

## 14. PERT/CPM y camino crítico

Una red de actividades permite calcular secuencia crítica: actividades con holgura total cero determinan duración mínima del proyecto bajo estimaciones. Retrasar una actividad crítica retrasa el proyecto si no se recupera tiempo. Camino crítico puede cambiar al actualizar duraciones.

## 15. Presupuesto y línea base

Presupuesto agrega costes por recursos/paquetes y reservas según gestión. Una **línea base de costes** permite comparar plan y real. Control no es «recalcular presupuesto» sin gobernanza: los cambios aprobados actualizan la baseline conforme al proceso.

## 16. Valor ganado

Conceptos: PV (valor planificado), EV (valor ganado) y AC (coste real). Indicadores:

* **CV = EV − AC**: negativo = sobrecoste.
* **SV = EV − PV**: negativo = retraso respecto a plan en valor.
* **CPI = EV / AC**: <1, ineficiencia de coste.
* **SPI = EV / PV**: <1, avance inferior al plan.

El valor ganado exige una línea base y reglas de medición coherentes.

## 17. Riesgo y reservas

Distingue reserva de contingencia para riesgos identificados de reserva de gestión para incertidumbre no asignada según marco usado. El presupuesto debe relacionarse con registro de riesgos y no incluir «colchones» opacos.

## 18. Control de cambios

Toda solicitud relevante se evalúa por impacto en alcance, plazo, coste, calidad, seguridad y contratos; se aprueba/rechaza por autoridad definida y se actualizan baselines/documentación. El scope creep es crecimiento no controlado.

## 19. Test

* Criterio obligatorio ≠ ponderable.
* Peso ≠ puntuación.
* Delphi ≠ AHP.
* Ponderación lineal es compensatoria.
* TCO ≠ precio de compra.
* CAPEX ≠ OPEX.
* VAN ≠ TIR ≠ payback.
* WBS ≠ Gantt.
* Hito tiene duración cero.
* Camino crítico = holgura total cero en modelo clásico.
* CPI < 1 indica coste desfavorable.
* SPI < 1 indica avance desfavorable.
* Estimación ≠ compromiso.

## 20. Supuesto

Matriz de alternativas con criterios y pesos; TCO a 3–5 años según contexto; riesgos; decisión y sensibilidad. Después WBS, hitos, dependencias, recursos, presupuesto, contingencia y KPI de control. Una respuesta excelente explica por qué descartó alternativas, no solo la elegida.

## 21. Resumen II.15

Decide con criterios transparentes, comprueba viabilidad, estima con incertidumbre y controla contra líneas base. Practica camino crítico y valor ganado: son conceptos fáciles de preguntar con datos.

# II.16 — Gestión documental y contenidos. Sindicación, workflow, búsqueda, SEO y colaboración

## 1. Alcance

A1 104 desarrolla gestión documental, CMS/DMS y sindicación. El resto se completa con material de workflow, búsqueda y colaboración. El BOE mezcla varias familias, por lo que el tema debe estructurarse por función y no por productos.

## 2. Gestión documental

Un **DMS/gestor documental** administra documentos y su ciclo de vida: captura, clasificación, metadatos, versiones, permisos, búsqueda, retención, archivo y disposición. En el sector público se relaciona con documento/expediente electrónico, ENI/NTI y política de gestión documental, tratados más jurídicamente en Bloque I.

### 2.1 Metadatos

Describen contenido, contexto, estructura y gestión. Ejemplos: título, autor/unidad, fecha, tipo documental, estado, versión, clasificación, expediente, seguridad, retención y relaciones. Un buen modelo evita campos ambiguos y permite búsquedas.

### 2.2 Versionado y check-in/check-out

Versionado conserva evolución. Check-out puede bloquear o reservar edición; check-in incorpora versión. En colaboración moderna también existe edición concurrente y resolución de conflictos. Versionar ≠ backup: un borrado o corrupción puede afectar al repositorio completo.

### 2.3 Retención

Políticas definen conservación y eliminación por valor legal/administrativo/histórico. Deben existir bloqueos de conservación («legal hold») cuando proceda. Borrar porque «el disco está lleno» no es política documental.

## 3. CMS

**Content Management System** gestiona contenidos de publicación: páginas, componentes, multimedia, flujos editoriales, plantillas, taxonomías y permisos. Un CMS se orienta más a publicación/experiencia; un DMS a documentos y expediente, aunque productos se solapan.

## 4. ECM

**Enterprise Content Management** integra captura, gestión documental, contenidos, workflow, records, colaboración y preservación. El término es paraguas; no equivale a una tecnología concreta.

## 5. Taxonomías, ontologías y etiquetado

Taxonomía organiza categorías jerárquicas o facetas. Folksonomía surge de etiquetas libres de usuarios. Ontología modela conceptos y relaciones con mayor formalidad. La clasificación controlada mejora precisión; etiquetas libres favorecen flexibilidad pero requieren gobierno.

## 6. Sindicación

**RSS** y **Atom** permiten publicar feeds de novedades para suscripción y agregación. Un feed contiene entradas con título, enlace, fecha, identificador y contenido/resumen según formato. Sindicación ≠ scraping: el productor ofrece un canal estructurado.

## 7. Workflow

Un sistema de workflow define tareas, estados, reglas, participantes y transiciones. Patrones: secuencia, decisión, paralelismo, sincronización, bucles, escalado y temporizadores. Los motores pueden apoyarse en BPMN u otros modelos.

Distingue **workflow** de **orquestación técnica**: un workflow puede representar proceso de negocio con personas y tareas; una orquestación coordina servicios.

## 8. BPM y BPMN

**BPM** gestiona procesos de extremo a extremo: descubrir/modelar, ejecutar, medir y mejorar. **BPMN** es una notación con eventos, actividades, gateways, flujos y pools/lanes. Automatizar un proceso ineficiente puede consolidar la ineficiencia; primero se analiza.

## 9. Búsqueda e indexación

Un motor de búsqueda suele realizar crawling/captura → parsing → normalización → indexación → consulta → ranking. Un **crawler/robot/spider** descubre y descarga recursos. El **índice invertido** mapea términos a documentos y permite búsqueda eficiente.

## 10. Recuperación de información

Conceptos:

* **Precision**: proporción de resultados recuperados que son relevantes.
* **Recall**: proporción de documentos relevantes que han sido recuperados.
* **F1**: media armónica de precision y recall.
* **Tokenización**: separación en unidades.
* **Stemming/lemmatization**: reducción de variantes.
* **Stop words**: términos frecuentes que pueden tratarse de forma especial.
* **TF-IDF/BM25**: familias de ponderación/ranking textual.

Búsqueda semántica/vectorial puede complementar la búsqueda léxica, pero para GSI primero domina índice, crawling, ranking y métricas.

## 11. Robots.txt y sitemaps

**robots.txt** comunica preferencias de crawling a robots que deciden respetarlo; no es un control de acceso. Un recurso sensible debe protegerse con autenticación/autorización. **sitemap** ayuda a descubrir URLs.

## 12. SEO

Search Engine Optimization busca mejorar descubrimiento/ranking legítimo. Factores técnicos: HTML semántico, títulos/metadescripciones, URLs claras, enlaces internos, rendimiento/Core Web Vitals según contexto, mobile, datos estructurados, sitemap, canonical y accesibilidad. Factores de contenido: calidad, relevancia, autoridad y actualización.

**SEO ≠ SEM**: SEO es optimización orgánica; SEM suele referirse a marketing/pago en buscadores.

## 13. SEO público e interno

En una Administración, además del buscador externo interesa la búsqueda del propio portal: sinónimos, filtros/facetas, corrector, ranking, accesibilidad, analítica de consultas sin resultados y contenidos oficiales. Optimizar «clics» no puede degradar claridad jurídica.

## 14. Colaboración

Herramientas: coedición, wikis, repositorios, chat/canales, videoconferencia, foros, gestión de tareas, pizarras y control de versiones. Deben gobernarse: identidad, permisos, ciclo de vida de espacios, clasificación, retención, invitados, exportaciones y búsqueda.

## 15. Redes sociales

Permiten difusión, interacción y escucha, pero deben existir cuentas oficiales, roles, archivo/retención según política, moderación, respuesta ante suplantación, accesibilidad y protección de datos. No deben utilizarse como único canal para trámites o información que requiera garantías.

## 16. Integración DMS/CMS/workflow

Un patrón: entrada/creación → metadatos → repositorio DMS → workflow de revisión/aprobación → publicación CMS → sindicación → indexación/búsqueda → archivo/retención. Servicios transversales: IAM, firma, auditoría, antivirus, OCR, conversión de formatos y API.

## 17. Seguridad

RBAC/ABAC según necesidad, clasificación, cifrado, antivirus/sandbox de ficheros, DLP, logs, control de enlaces públicos, revisión de invitados, backups, versionado y retención. Los metadatos también pueden contener información sensible.

## 18. Test

* DMS ≠ CMS.
* Versionado ≠ backup.
* Taxonomía ≠ folksonomía.
* RSS/Atom = sindicación.
* Crawler/robot/spider = captura/descubrimiento, no ranking completo.
* robots.txt ≠ mecanismo de seguridad.
* Precision ≠ recall.
* Workflow ≠ BPM, aunque se relacionan.
* SEO ≠ SEM.
* Red social ≠ canal administrativo con garantías por defecto.

## 19. Supuesto

Define repositorio y metadatos, clasificación, workflow, firma si procede, retención, permisos y búsqueda. Si hay portal, añade CMS, publicación, RSS/Atom, SEO, sitemap y buscador interno. Para colaboración, incluye gobierno de espacios/invitados y conservación.

## 20. Resumen II.16

Piensa en el ciclo de vida del contenido: crear/capturar → clasificar → colaborar → aprobar → publicar → encontrar → conservar/eliminar. Cada familia —DMS, CMS, workflow, buscador— resuelve una parte distinta.

# ANEXO A — Tabla de memorización rápida

| Concepto | Dato clave |
| --- | --- |
| Flynn | SISD / SIMD / MISD / MIMD |
| Escalado | Vertical = recursos por nodo; horizontal = más nodos |
| Cloud | IaaS / PaaS / SaaS |
| Hipervisor | Tipo 1 sobre hardware; tipo 2 sobre SO host |
| Proceso/hilo | Hilos comparten recursos del proceso |
| Paradigmas | Imperativo, OO, funcional, declarativo, eventos/reactivo |
| DW clásico | Orientado a temas, integrado, variable temporal, no volátil |
| OLTP/OLAP | Operación transaccional / análisis |
| ANSI/SPARC | Externo / conceptual / interno |
| ACID | Atomicidad / Consistencia / Aislamiento / Durabilidad |
| Aislamiento | RU / RC / RR / Serializable |
| SOA | Servicios + contrato + bajo acoplamiento |
| Orquestación/coreografía | Coordinador único / interacción distribuida |
| Contenedores | Imagen → registry → contenedor |
| Kubernetes | Pod, Deployment, Service, StatefulSet, ConfigMap, Secret |
| Probes | startup / readiness / liveness |
| OSI | 7 capas |
| IPv4/IPv6 | 32 / 128 bits |
| Rangos privados IPv4 | 10/8, 172.16/12, 192.168/16 |
| XML | bien formado ≠ válido |
| XPath/XSLT | seleccionar / transformar |
| Riesgos AGE | MAGERIT v3 + PILAR |
| Tratamiento riesgo | evitar / reducir / compartir-transferir / aceptar |
| Auditoría | criterio + evidencia + hallazgo + remediación |
| Contact center | ACD / CTI / IVR / CRM |
| Forense | preservar / adquirir / hash / analizar / cadena custodia |
| Licencias | permisivas vs copyleft |
| Costes | CAPEX / OPEX / TCO |
| Valor ganado | CPI=EV/AC; SPI=EV/PV |
| Gestión contenidos | DMS / CMS / workflow / búsqueda / sindicación |

# ANEXO B — Trampas transversales de test

* Escalabilidad no es lo mismo que elasticidad ni alta disponibilidad.
* Virtualización no es contenedorización.
* Lenguaje no tiene por qué ser exclusivamente compilado o interpretado.
* Concurrencia no implica paralelismo.
* Data Warehouse no es una base OLTP grande.
* CAP no sustituye ACID.
* WHERE y HAVING no son intercambiables.
* SOA no implica necesariamente SOAP; REST no es un protocolo.
* Un Pod no es siempre un único contenedor y un Service de Kubernetes no es un microservicio.
* NAT no es firewall.
* HTML moderno no es XML; XHTML sí sigue reglas XML.
* MAGERIT es metodología; PILAR herramienta.
* Auditoría no es pentest.
* IVR no es reconocimiento de voz.
* Hash no es cifrado.
* Software libre no significa gratis.
* TCO no es precio de compra.
* robots.txt no protege información confidencial.

# ANEXO C — Método de estudio del Bloque II

## Primera vuelta: comprensión

Estudia cada tema con un mapa de conceptos y explica en voz alta las diferencias. Para II.05, II.07, II.08, II.10, II.11, II.13 y II.15 realiza ejercicios desde la primera vuelta; son temas que no se consolidan solo leyendo.

## Segunda vuelta: tablas de contraste

* scale-up / scale-out / elasticidad / HA;
* proceso / hilo / concurrencia / paralelismo;
* imperativo / OO / funcional / declarativo;
* OLTP / OLAP; DW / lake;
* externo / conceptual / interno;
* dirty / non-repeatable / phantom;
* SOAP / REST / mensajería;
* VM / contenedor; pod / deployment / service;
* TCP / UDP; IPv4 / IPv6;
* HTML / XML / XHTML;
* amenaza / vulnerabilidad / impacto / riesgo;
* auditoría / pentest;
* ACD / CTI / IVR;
* SOC / CSIRT; SIEM / SOAR;
* permisiva / copyleft;
* CAPEX / OPEX / TCO; VAN / TIR / payback;
* DMS / CMS / workflow.

## Práctica de test

Tras cada tema, responde preguntas cerradas sin mirar y registra errores con cuatro campos: tema → regla correcta → por qué fallaste → fuente. Vuelve a los errores 24–72 horas después.

## Práctica de supuesto

Practica respuestas de 15–25 minutos con plantillas: **requisitos → arquitectura/proceso → seguridad → operación → riesgos → métricas → justificación**. El examen práctico premia aplicar conocimientos, no recitar definiciones.

# Fuentes y control de actualidad

## Programa oficial

Resolución de 18 de diciembre de 2025, BOE-A-2025-26262, Anexo IX, programa GSI A2. Para este Bloque II se han usado literalmente los epígrafes 1–16 de «Tecnología básica».

## Fuentes PreparaTIC/A1 verificadas en esta reconstrucción

* A1 052 — Sistemas de altas prestaciones / grid / mainframe — resumen 10/05/2019.
* A1 053 — Equipos departamentales, servidores e infraestructura — v30.2, 12/09/2024.
* A1 059 — Fundamentos de sistemas operativos — v31.1, 10/03/2026.
* A1 063 — SGBD y ANSI/SPARC — 01/02/2022.
* A1 064 — Modelo relacional, SQL e interoperabilidad — 23/04/2023.
* A1 058 — Cliente-servidor y SOA — 13/01/2019.
* A1 065 — Arquitectura/desarrollo web — 13/04/2023.
* A1 097 — Integración continua y DevOps — 23/01/2022.
* A1 077 — HTML, CSS, XML y estándares web — 13/04/2023.
* A1 047 — Análisis y gestión de riesgos.
* A1 038 — Auditoría informática — 20/01/2022.
* A1 048 — ENS — material actualizado 05/03/2026.
* A1 075 — Tecnologías y explotación de datos / DW — 16/05/2023.
* A1 072 — CRM/ERP — apoyo parcial.
* A1 125 — Seguridad en redes — v30.1, 09/09/2024.
* A1 126 — Seguridad/incidentes — versión P31 disponible.
* A1 127 — Informática forense — material A1 específico.
* A1 069 — Software libre/código abierto — 07/05/2023.
* A1 043 — Protección jurídica del software — 23/01/2022.
* A1 040 — Evaluación multicriterio de alternativas — 23/04/2019.
* A1 104 — Gestión documental/CMS/DMS — 12/05/2023.

## Actualización oficial complementaria

* Kubernetes — documentación oficial de versiones: ramas soportadas verificadas el 21/08/2026.
* Portal de Administración Electrónica/CTT — MAGERIT v3 y PILAR: metodología y herramienta en producción verificadas en agosto de 2026.
* ENS — RD 311/2022 y material CCN/PreparaTIC actualizado utilizado para auditoría y seguridad.

**Control de versiones:** las versiones concretas de software cambian con rapidez. Se incluyen solo cuando ayudan a detectar que un apunte ha quedado obsoleto. Para examen se priorizan conceptos, estándares, arquitectura y normativa.

# CIERRE DEL BLOQUE II

El Bloque II debe dejarte capaz de explicar un sistema técnico desde la máquina hasta la operación: hardware/cloud → SO → lenguajes → datos → integración → contenedores → red → formatos → riesgos → auditoría → atención → ciberseguridad → licencias → proyecto → contenidos. Esa conexión entre temas es especialmente útil para el segundo ejercicio.
