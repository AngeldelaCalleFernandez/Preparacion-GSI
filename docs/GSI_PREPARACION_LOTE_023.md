# Preparación del lote GSI-EDITORIAL-023

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`8bc2874397a71c6b44d65fa8b73274667037ca6c1045c71984a8ea9e699c9e65`

La [ficha antes/después](GSI_REVISION_LOTE_023.md) contiene las 20 preguntas y sus explicaciones. El [JSON](../content/question-reviews/lote-023.json) conserva instantáneas, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-023-preparation.json) distingue preparación, revisión humana y aplicación. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **441–460** de `review_order`: **20 manuales B2-T02**. No incluye IA ni oficiales. Se mantienen conceptos, IDs, claves, procedencia, campos de fuente histórica y dificultad orientativa. Todas las decisiones nuevas permanecen `pending_review`.

Se conservan íntegramente enunciado y alternativas de **MAN-GSI-P17-096, 103 y 107**. En **105, 110 y 115** también se conservan enunciado y correcta, abreviando distractores para mejorar comparabilidad sin relleno. Hay **15 conceptuales y cinco aplicaciones**, sin cuotas por lote. Los casos de espera de E/S, dirección virtual, reemplazo de páginas, journal y permisos de fichero mantienen el concepto original.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| MAN-GSI-P17-096 | Conceptual | Conservar literalmente enunciado y alternativas ya bien diferenciados; completar explicación del monitor frente a mutex, semáforo y condición. |
| MAN-GSI-P17-098 | Conceptual | Conservar syscall y clave B; comparar biblioteca, excepción y API remota sin distractores de licencia o electricidad. |
| MAN-GSI-P17-099 | Conceptual | Conservar separación de privilegios y clave A; distinguir prioridad, identidad y traducción de direcciones. |
| MAN-GSI-P17-100 | Aplicación | Conservar el microcaso y clave A; sustituir recetas absolutas por confusiones sobre estado bloqueado, CPU y concurrencia. |
| MAN-GSI-P17-101 | Conceptual | Conservar abstracción protegida y clave D; distinguir espacio virtual, intercambio, persistencia y acceso sin permisos. |
| MAN-GSI-P17-102 | Aplicación | Conservar traducción virtual/física y clave D; microcaso que distingue identidad numérica de mapeo y compartición. |
| MAN-GSI-P17-103 | Conceptual | Conservar literalmente concepto, enunciado y alternativas; completar no contigüidad y coexistencia de tamaños de página sin modificar la clave A. |
| MAN-GSI-P17-104 | Conceptual | Conservar segmentación clásica y clave A; paralelizar redacción y contrastar tres técnicas reales de memoria. |
| MAN-GSI-P17-105 | Conceptual | Conservar enunciado, correcta y clave C; abreviar distractores de caché de contenido, tabla completa y predictor de saltos para compararlos sin explicaciones superfluas dentro de las alternativas. |
| MAN-GSI-P17-107 | Conceptual | Conservar literalmente definición y distractores próximos; completar presión, conjunto de trabajo y diferencia de paginación normal, con clave B. |
| MAN-GSI-P17-108 | Aplicación | Conservar selección de víctima y clave A; microcaso de falta de marcos con distractores de funciones cercanas del SO. |
| MAN-GSI-P17-109 | Conceptual | Conservar ventaja conceptual de LRU y clave C; comparar FIFO, LFU y óptimo con criterios paralelos y sin promesas de eliminar fallos. |
| MAN-GSI-P17-110 | Conceptual | Conservar enunciado, correcta y clave D; abreviar los tres mecanismos alternativos manteniendo causa y función, y explicar sus diferencias en el feedback. |
| MAN-GSI-P17-111 | Conceptual | Conservar contraste interrupción/polling y clave C; introducir errores próximos y explicar costes y combinaciones sin superioridad universal. |
| MAN-GSI-P17-113 | Conceptual | Conservar interfaz bloque/carácter y clave C; no universalizar secuencialidad, tamaño de transferencia, velocidad o persistencia. |
| MAN-GSI-P17-114 | Aplicación | Conservar journaling y clave C; microcaso de reinicio con contraste entre consistencia, historial, reglas de negocio y buffers. |
| MAN-GSI-P17-115 | Conceptual | Conservar enunciado, correcta y clave B; eliminar longitud superflua de distractores de ficheros abiertos, hashes y montajes sin alterar el concepto. |
| MAN-GSI-P17-116 | Aplicación | Conservar significado de rwx y clave A; caso mínimo de fichero ordinario para evitar ambigüedad con directorios y sustituir siglas arbitrarias. |
| MAN-GSI-P17-117 | Conceptual | Conservar núcleo monolítico y clave B; distinguir ubicación de servicios, módulos y virtualización sin atribuir falta de drivers o multitarea. |
| MAN-GSI-P17-118 | Conceptual | Conservar objetivo microkernel y clave B; contrastar tamaño, módulos en núcleo y virtualización, precisando IPC y ausencia de garantías absolutas. |

Cada pregunta tiene explicación de la correcta y tres justificaciones individuales vinculadas a los IDs originales de las opciones. El feedback describe el contenido, sin depender de letras visibles u orden. La acción `revise` de las tres formulaciones conservadas responde a los nuevos feedback y referencias: esa versión requiere aceptación propia. Ninguna clave cambia y no se proponen reemplazos ni retiradas.

## Fuentes y alcance de la comprobación

Las **23 URLs primarias distintas se abrieron**. Veintiuna se contrastaron durante esta preparación; las dos de OSTEP sobre procesos y mecanismos conservan el contraste directo del mismo día del lote 022. Cada referencia registra URL, localizador, versión o alcance y fecha real **27-10-2026**. No se atribuye revisión humana independiente.

| Fuente primaria | Localizador y versión o alcance |
| --- | --- |
| [Lampson y Redell: Experience with Processes and Monitors in Mesa](https://people.eecs.berkeley.edu/~brewer/cs262/Mesa.pdf) | Secciones 3 Monitors y 3.1 Monitor modules, PDF p. 6; 4 Condition variables, PDF pp. 10–11: estado, operaciones, exclusión y espera. Artículo publicado en CACM 23(2), febrero 1980, pp. 105–117; copia de 23 páginas con aviso de OCR histórico y posibles errores. No se ejecuta conversión/OCR ni se trasladan detalles de planificación de Mesa a otros monitores. |
| [Oracle: Java Language Specification, Threads and Locks](https://docs.oracle.com/javase/specs/jls/se25/html/jls-17.html) | 17.1 Synchronization y 17.2 Wait Sets and Notification: monitor asociado al objeto, exclusión y conjunto de espera. Java SE 25, edición identificada de la especificación; ejemplo de implementación, sin afirmar que sea la última edición ni universalizar semántica a todo monitor. |
| [Linux man-pages: syscalls(2)](https://man7.org/linux/man-pages/man2/syscalls.2.html) | DESCRIPTION y System calls and library wrapper functions: interfaz aplicación/kernel y envolturas de biblioteca. Página primaria del proyecto Linux man-pages consultada; sin deducir correspondencia uno-a-uno entre funciones de biblioteca y syscalls. |
| [Arpaci-Dusseau: OSTEP, Mechanism: Limited Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) | Capítulo 6: 6.2 Problem #1: Restricted Operations, pp. 2–7; 6.3 Problem #2: Switching Between Processes, Saving and Restoring Context, pp. 7–10: trap, decisión y cambio de contexto. PDF de autores, versión 1.10; no toda entrada al núcleo cambia de tarea. |
| [Microsoft: User mode and kernel mode](https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/user-mode-and-kernel-mode) | Introducción; User mode; Kernel mode: privilegios, direcciones protegidas y controladores. Actualización 29-10-2025; ejemplo Windows, sin convertir aislamiento en garantía absoluta frente a todo fallo o explotación. |
| [Arpaci-Dusseau: OSTEP, The Abstraction: The Process](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | Capítulo 4: 4.1 The Abstraction: A Process, pp. 2–3; 4.4 Process States, pp. 5–7; separación de política/mecanismo p. 3. PDF de autores, versión 1.10 impresa; modelo didáctico simplificado. |
| [Arpaci-Dusseau: OSTEP, I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf) | Capítulo 36: 36.3 The Canonical Protocol, p. 4; 36.4 Lowering CPU Overhead With Interrupts, pp. 5–6; figura 36.4, p. 9: polling, interrupciones, solapamiento y capa de bloques. PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright. |
| [Arpaci-Dusseau: OSTEP, The Abstraction: Address Spaces](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) | Capítulo 13: 13.3 The Address Space, pp. 3–5, y 13.4 Goals, pp. 5–6: abstracción, traducción y protección. PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright. |
| [Arpaci-Dusseau: OSTEP, Paging: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) | Capítulo 18, introducción y 18.1 A Simple Example And Overview, pp. 1–4: páginas, marcos y tabla de traducción. PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright. |
| [Arpaci-Dusseau: OSTEP, Segmentation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf) | Capítulo 16, 16.1 Segmentation: Generalized Base/Bounds, pp. 1–4: segmentos lógicos, base y límites. PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright. |
| [Arpaci-Dusseau: OSTEP, Paging: Faster Translations (TLBs)](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-tlbs.pdf) | Capítulo 19, introducción y 19.1 TLB Basic Algorithm, pp. 1–3: caché de traducciones y fallo de TLB frente a acceso a tabla. PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright. |
| [Arpaci-Dusseau: OSTEP, Beyond Physical Memory: Policies](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf) | Capítulo 22: introducción p. 1; 22.5 Using History: LRU, pp. 7–8; 22.7–22.8, pp. 11–12; 22.11 Thrashing, p. 14: víctima, localidad, aproximaciones y presión de memoria. PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright. |
| [Linux Kernel Labs: Block Device Drivers](https://linux-kernel-labs.github.io/refs/heads/master/labs/block_device_drivers.html) | Overview, primeros dos párrafos: bloques direccionables y contraste con interfaz de carácter. Material de autores de Linux Kernel Labs, cabecera 5.10.14; solo conceptos de interfaz, sin adoptar comparaciones universales de velocidad, límites de bloque o API vigente. |
| [Arpaci-Dusseau: OSTEP, Crash Consistency: FSCK and Journaling](https://pages.cs.wisc.edu/~remzi/OSTEP/file-journaling.pdf) | Capítulo 42, introducción pp. 1–2 y 42.3 Solution #2: Journaling (or Write-Ahead Logging), desde p. 7: registro previo y recuperación de consistencia. PDF de autores, versión impresa 1.10; modelo didáctico, sin inferir fecha de publicación del copyright. |
| [Linux Kernel: Journal (jbd2)](https://docs.kernel.org/filesystems/ext4/journal.html) | 3.6, párrafos iniciales y 3.6.1 Layout: metadatos, commit, replay y modos data=ordered/journal/writeback. Documentación de ext4 consultada; ejemplo de implementación, sin generalizar garantías de datos de todos los journals ni fijar una versión de kernel. |
| [Proyecto acl: acl(5)](https://man7.org/linux/man-pages/man5/acl.5.html) | DESCRIPTION; ACL TYPES; ACL ENTRIES; ACCESS CHECK ALGORITHM; STANDARDS: permisos de usuarios/grupos, máscara y comprobación. Manual primario de Andreas Gruenbacher, procedente del repositorio upstream del proyecto acl; modelo Linux basado en borrador POSIX.1e, no estándar final universal ni ACL con deny de Windows. |
| [Microsoft: Access control lists](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists) | Introducción y DACLs and SACLs: entradas ACE, identidades, permisos y diferencia entre autorización y auditoría. Actualización 10-07-2025; ejemplo Windows, sin universalizar orden de ACE, herencia, lista nula o lista vacía a otros modelos. |
| [Linux man-pages: unlink(2)](https://man7.org/linux/man-pages/man2/unlink.2.html) | DESCRIPTION; ERRORS, EACCES y EPERM: eliminar un nombre, permisos del directorio, búsqueda y restricciones adicionales. Linux man-pages 6.19, fecha de página 08-02-2026; solo distinción entre escribir contenido y borrar una entrada, sin ejecutar operaciones. |
| [Linux man-pages: inode(7)](https://man7.org/linux/man-pages/man7/inode.7.html) | File type and mode: S_IRUSR/S_IWUSR/S_IXUSR y equivalentes de grupo/otros. Página primaria Linux man-pages consultada; se distinguen bits de permiso y bits especiales, sin reglas de bloqueo obligatorio históricas. |
| [Linux man-pages: path_resolution(7)](https://man7.org/linux/man-pages/man7/path_resolution.7.html) | Step 2: walk along the path y Permissions: permiso de búsqueda en directorios y distinción fichero/directorio. Linux man-pages 6.19, fecha de página 08-02-2026; sin usar límites actuales de enlaces, namespaces o API. |
| [QNX: Microkernel architecture](https://qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.sys_arch/topic/intro_MICROKERNELARCH.html) | Cuerpo principal: definición de servicios mínimos y procesos cooperantes; modularidad; IPC; comparación gráfica monolítico/microkernel. QNX SDP 8.0 System Architecture; no se adoptan afirmaciones comerciales de protección completa, ausencia de impacto o fiabilidad garantizada. |
| [QNX: A small microkernel and message passing](https://qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.getting_started/topic/s1_msg_Microkernel_and_messages.html) | Cuerpo principal: servicios opcionales, drivers como procesos de usuario y message passing entre módulos. QNX SDP 8.0, página actualizada 11-06-2026 según consulta; ejemplo concreto, no conjunto idéntico de servicios para todos los microkernels. |
| [Linux Kernel: Building External Modules](https://docs.kernel.org/kbuild/modules.html) | Introduction y How to Build External Modules, primer párrafo: soporte de módulos y configuración. Documentación kbuild consultada; solo modularidad de construcción/carga, sin introducir compilación o instalación en esta aplicación ni recomendar API o comandos. |

Matices y decisiones de fuente:

- Consulta real 27-10-2026. Se abrieron las fuentes nuevas citadas; PROCESS y MECHANISM conservan contraste directo del mismo día del lote 022. No se atribuye aceptación humana o nueva revisión independiente.
- Mesa: artículo primario de Lampson y Redell, CACM febrero 1980, copia académica con aviso de OCR histórico. Se verificaron secciones 3/3.1 y 4. No se ejecuta OCR ni conversión; no se generalizan reglas de señalización de Mesa o Java a todos los monitores.
- JLS Java SE 25 es edición expresa consultada, no se declara última versión. La abstracción monitor integra datos/operaciones/sincronización, frente a mutex, contador y condición aislados.
- Syscalls: interfaz con el núcleo y wrappers no uno-a-uno; modo de CPU no es identidad administradora ni prioridad. Los hilos bloqueados no hacen espera activa y su número no demuestra por sí solo saturación de E/S.
- Memoria virtual: números iguales de espacios distintos no determinan identidad de marco o contenido; puede haber compartición explícita. Paginación clásica permite tamaños de página múltiples; segmentación se acota al modelo clásico. No se afirma que todos los equipos actuales usen segmentación igual.
- TLB es caché limitada de traducciones con atributos; fallo de TLB no implica fallo de página ni lectura de disco. Thrashing requiere presión y pérdida de progreso, no simplemente algún page fault. Víctima de reemplazo se distingue de dirección solicitada, permisos y planificador.
- LRU usa recencia, no frecuencia, llegada o conocimiento del futuro; puede fallar según carga y suele aproximarse por coste. Interrupciones y polling tienen costes y esquemas híbridos; notificación no es DMA ni implica cambio de proceso o atención instantánea.
- Bloque/carácter: interfaz, no velocidad, persistencia, unidad de CPU o existencia física. Linux Kernel Labs muestra cabecera 5.10.14; solo se usan conceptos del Overview, sin adoptar límites de bloque/API o ausencia universal de seek en carácter.
- Journal: consistencia de estructuras, alcance datos/metadatos y commit, no backup histórico ni durabilidad de buffers de aplicación o reglas de negocio. Ext4 ilustra modos sin convertirlos en garantía universal de cualquier sistema de archivos.
- acl(5) es manual primario del proyecto acl (Andreas Gruenbacher), basado en borrador POSIX.1e, no un estándar final universal. Se distingue máscara Linux y DACL/SACL Windows sin trasladar deny, orden, herencia o listas nulas entre modelos.
- rwx: fichero ordinario frente a búsqueda en directorio; permiso de ejecución no acredita formato válido ni escritura concede borrar por sí sola. inode(7), path_resolution(7) y unlink(2) respaldan esa distinción. Ubuntu fue leído pero se excluye por su resumen impreciso que asocia w a borrar; tampoco se adoptan umask como resta general ni 777 como garantía total.
- Monolítico/microkernel: distribución de servicios y espacios, no tamaño comprimido o prohibición de módulos. QNX es un ejemplo; no se adoptan promesas comerciales de seguridad completa o ausencia de impacto. kbuild confirma modularidad sin instalar o compilar nada en esta aplicación.
- Tres formulaciones completas conservadas: 096, 103 y 107. En 105, 110 y 115 también se conservan enunciado y correcta, abreviando distractores. Quince conceptuales y cinco aplicaciones sin cuota por lote; rúbrica del preparador pendiente del propietario y sin calibración.

Límites externos y fuentes descartadas:

- Rutas de Mesa en Wisconsin y sitio personal no accesibles; se leyó copia académica Berkeley del artículo original. La ruta ensayada de Microsoft Research redirigió al portal y no se usa como respaldo del artículo.
- GNU Coreutils Mode Structure (dos rutas) y Symbolic Modes: timeouts; no se citan como leídos. GNU Hurd: rutas no accesibles/timeout, no usadas. Sustitutos primarios abiertos: Ubuntu, man-pages, QNX y kernel.
- Microsoft muestra aviso genérico de autorización junto con cuerpo público legible; no se accede a cuentas o material privado.
- Ubuntu se leyó y se descartó como respaldo final de rwx por la imprecisión escribir/borrar; unlink(2) y otras páginas primarias man-pages se abrieron y verificaron.

La revisión final registra dos refinamientos y conserva sus hashes anteriores: abreviación de distractores de TLB, interrupción y ACL; y sustitución de Ubuntu por `unlink(2)` al comprobar el matiz entre escribir contenido y borrar una entrada. La copia original de Mesa ya contiene OCR histórico según su nota editorial; no se ha ejecutado OCR, conversión ni modificación del documento.

## Métricas antes y propuesta

Análisis 2.0.0 de las 20 preguntas en simulación, sin modificar bancos activos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 9 | 8 |
| Aciertos por primera alternativa de longitud máxima | 9 | 8 |
| Ratio correcta/distractor máximo de 1,5–<2 | 7 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 2 |
| Explicación individual de tres distractores | 0 | 20 |

La heurística de primera alternativa de longitud máxima pasa del **45 % al 40 %**; la de longitud mínima acierta **6/20 (30 %)** en la propuesta. Ocho correctas continúan siendo únicas más largas, con extensión ajustada al contenido y distractores comparables. Se han eliminado las siete alertas graduales de longitud y completado veinte feedback breves. La concisión del refinamiento eleva el recuento de correctas más largas respecto al primer borrador y reduce la asimetría inversa; no se persigue minimizar una sola métrica. No se añaden palabras ni se cambian claves para ajustar proporciones. Cero alertas no certifica calidad pedagógica, aceptación o calibración.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-023.json --render docs/GSI_REVISION_LOTE_023.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultado: **17 pruebas editoriales superadas**, **45 JSON y 21 esquemas validados**, **1.964 estructuras de pregunta válidas** y **19.251 controles de integridad correctos**, sin errores técnicos. Documentación sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown del catálogo; una comprobación adicional verificó **53 enlaces locales** entre ficha, informe y plan.

La simulación confirmó exactamente **20 cambios manuales**, cero IA y cero oficiales, sin escrituras activas. Se verificaron 60 explicaciones individuales, las tres formulaciones conservadas, los otros tres enunciados y correctas conservados, todos los IDs y claves, procedencia, campos históricos de fuente y reproducción de ficha. Los **92 archivos protegidos** de bancos, base, aceptación y entregas anteriores conservan sus hashes. Las oficiales son idénticas byte a byte al commit actual y a la base auditada; manuales e IA mantienen el contenido del commit actual. Los tres informes derivados conservan contenido y fecha existentes al iniciar la preparación.

Se rechazaron una aceptación vacía y el recibo real del piloto frente al lote 023. No hay aceptaciones nuevas para 002–023 y el historial conserva un único lote aplicado. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. El cierre editorial completo continúa pendiente; un resultado técnico correcto no acredita aprobación humana ni calibración.

Todos los validadores del proyecto ejecutados para el lote terminaron con código 0. Dos comprobaciones auxiliares buscaban literalmente «no prueban» y «no se deducen», mientras los feedback dicen «tampoco prueban» y «ni igualdad ni diferencia física se deducen». Se ajustaron las comprobaciones a las redacciones reales sin modificar contenido editorial y después pasaron. El registro conserva esas incidencias, los dos refinamientos y los límites de fuentes. No se alteraron preguntas para satisfacer pruebas.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas, ni se atribuye al lote una nueva ejecución del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo continúan consumiendo las versiones activas. Para revisar este hito, abrir la ficha y contrastar cada alternativa y explicación con sus fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-023.json`, `docs/GSI_REVISION_LOTE_023.md`, este informe y `logs/gsi-editorial-023-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando su contenido y fecha existentes del 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 440 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.302** aún no tienen propuesta. Los lotes 002–023 reúnen 113 incidencias IA originales, otras 54 IA y 273 manuales. Las 128 incidencias originales conservan 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni conversiones nuevas pendientes. Originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continúa por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs y comprobación de versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
