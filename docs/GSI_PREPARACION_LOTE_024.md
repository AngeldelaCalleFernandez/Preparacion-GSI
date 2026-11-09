# Preparación del lote GSI-EDITORIAL-024

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`eb837fa4518e6621e59d5c8ef05aa54c6a76ce5eb5cf392ee72f962b294bab6c`

La [ficha antes/después](GSI_REVISION_LOTE_024.md) contiene las 20 preguntas y sus explicaciones. El [JSON](../content/question-reviews/lote-024.json) conserva instantáneas, hashes, motivos, fuentes y rúbrica del preparador. El [registro técnico](../logs/gsi-editorial-024-preparation.json) distingue preparación, revisión humana y aplicación. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **461–480** de `review_order`: **20 manuales B2-T02**. No incluye IA ni oficiales. Se mantienen conceptos, IDs, claves, procedencia, campos de fuente histórica y dificultad orientativa. Todas las decisiones nuevas permanecen `pending_review`.

Se conservan íntegramente enunciado y alternativas de **MAN-GSI-P17-125, 128 y 133**. En **122** se mantienen las alternativas y se precisa servicio de aplicación; en **129** se mantienen enunciado y distractores, ajustando la correcta para no exigir un instalador universal. Hay **15 conceptuales y cinco aplicaciones**, sin cuotas por lote. Los casos de E/S, Registro, eventos, sudo y hardening mantienen el concepto original.

| ID | Modalidad | Motivo individual |
| --- | --- | --- |
| MAN-GSI-P17-119 | Conceptual | Conservar combinación arquitectónica y clave A; sustituir hardware/alternancia absurdos por confusiones con módulos, virtualización y distribución de servicios. |
| MAN-GSI-P17-120 | Aplicación | Conservar microcaso de CPU baja/E/S lenta y clave D; medir antes de prescribir compra o alteraciones que distorsionen la línea base. |
| MAN-GSI-P17-121 | Conceptual | Conservar familia NT y clave C; acotar Windows 10/11 y separar linaje, compatibilidad y número de versión. |
| MAN-GSI-P17-122 | Conceptual | Conservar cuatro alternativas y clave B; acotar servicio de aplicación ante la ambigüedad potencial de driver services también administrados por SCM. |
| MAN-GSI-P17-123 | Aplicación | Conservar función de configuración y clave A; microcaso mínimo que compara herramientas administrativas próximas. |
| MAN-GSI-P17-124 | Aplicación | Conservar registro de eventos y clave D; caso de diagnóstico que distingue sucesos, contadores, tareas y mantenimiento. |
| MAN-GSI-P17-125 | Conceptual | Conservar literalmente formulación y alternativas ya diferenciadas; completar pipeline, objetos y alcance multiplataforma sin generalizar salidas externas. |
| MAN-GSI-P17-126 | Conceptual | Conservar directorio e identidad y clave A; precisar AD DS para distinguir cuentas locales, DNS e identidad cloud. |
| MAN-GSI-P17-127 | Conceptual | Conservar ACL/journaling de NTFS y clave B; sustituir falsas clasificaciones FAT/NFS/SMB por confusiones sobre funciones y garantías. |
| MAN-GSI-P17-128 | Conceptual | Conservar literalmente distinción ya bien construida y clave C; completar variabilidad del userland sin convertir GNU o un escritorio en requisito universal. |
| MAN-GSI-P17-129 | Conceptual | Conservar integración y clave D; mantener alternativas próximas y precisar que instalador interactivo o escritorio no son requisitos universales. |
| MAN-GSI-P17-130 | Conceptual | Conservar daemon y clave B; evitar que el gestor de servicios, que también puede ser un proceso, sea distractor ambiguo; comparar módulo, unidad e identidad. |
| MAN-GSI-P17-131 | Conceptual | Conservar gestor de sistema/servicios y clave A; comparar responsabilidades reales y matizar instancias y tipos de unidad. |
| MAN-GSI-P17-132 | Conceptual | Conservar procfs y clave B; comparar jerarquías reales y no presentar todo /proc como exclusivamente informativo o escribible sin permisos. |
| MAN-GSI-P17-133 | Conceptual | Conservar literalmente enunciado y alternativas ya próximas y clave C; precisar objetos, atributos y permisos sin prescribir APIs internas. |
| MAN-GSI-P17-134 | Aplicación | Conservar uso controlado de sudo y clave D; microcaso de autorización limitada, con autenticación condicional y usuario de destino no necesariamente root. |
| MAN-GSI-P17-135 | Conceptual | Conservar práctica transversal y clave B; comparar estrategias administrativas plausibles sin recetas destructivas o garantías de seguridad absoluta. |
| MAN-GSI-P17-136 | Aplicación | Conservar reducción de superficie y clave D; microcaso que diferencia prevención por configuración, evaluación, observación y recuperación. |
| MAN-GSI-P17-137 | Conceptual | Conservar paquete/repositorio y clave C; comparar artefacto, índice, gestor y firma sin exigir binarios o fuentes exclusivos. |
| MAN-GSI-P17-138 | Conceptual | Conservar distinción conceptual y clave A; separar familia, núcleo, especificación y certificación sin afirmar listados actuales ni imposibilidad de certificar productos Linux. |

Cada pregunta tiene explicación de la correcta y tres justificaciones individuales vinculadas a los IDs originales de las opciones. El feedback describe el contenido, sin depender de letras visibles u orden. La acción `revise` de las tres formulaciones conservadas responde a los nuevos feedback y referencias: esa versión requiere aceptación propia. Ninguna clave cambia y no se proponen reemplazos ni retiradas.

## Fuentes y alcance de la comprobación

Se consultaron **23 URLs primarias distintas**: **22 abiertas en web** y **una leída mediante el conector GitHub**. El README de XNU identifica el blob Git leído y su localizador. Todas se contrastaron durante esta preparación; no se presenta como lectura nueva una referencia heredada. Cada referencia registra URL, localizador, versión o alcance y fecha real **27-10-2026**. No se atribuye revisión humana independiente.

| Fuente primaria | Localizador y versión o alcance |
| --- | --- |
| [Apple Open Source: XNU README](https://github.com/apple-oss-distributions/xnu/blob/main/README.md) | What is XNU?, líneas 1–5: núcleo híbrido que combina Mach, componentes FreeBSD e IOKit. Leído con conector GitHub; blob Git 99c8db7e568ee00d37557598bd0e73414611e45b. Solo ejemplo de combinación de diseños, sin adoptar compatibilidad de hardware o instrucciones de compilación. |
| [Microsoft: Troubleshoot slow SQL Server performance caused by I/O issues](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/performance/troubleshoot-sql-io-performance) | Define slow I/O performance; Methodology to isolate I/O bottlenecks, Step 3: Is the I/O subsystem overwhelmed beyond capacity?: latencia, Disk Bytes/sec, carga y diagnóstico. Actualización 05-08-2026; ejemplo SQL Server/Windows. Solo principios de medida y aislamiento, sin universalizar umbral 10–15 ms, máximos de hardware, recomendaciones de consultas o tiempos de otros servicios.. |
| [Microsoft: INF Manufacturer section](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/inf-manufacturer-section) | Remarks, campos NT y OSMajorVersion/OSMinorVersion: destinos basados en NT y tablas para Windows 10/11. Actualización 21-05-2025; se acota a Windows 10/11, sin extender la frase cronológica Windows 2000 y posteriores a Windows Me ni confundir versión interna con nombre comercial. |
| [Microsoft: Services (Services)](https://learn.microsoft.com/en-us/windows/win32/services/services) | Introducción: contrato de la aplicación de servicio con SCM, modalidades de inicio y ejecución sin usuario conectado; distinción de driver service. Actualización 07-01-2021; término service de la página acotado a aplicación de servicio. |
| [Microsoft: Service control manager](https://learn.microsoft.com/en-us/windows/win32/services/service-control-manager) | Introducción y lista de tareas: base de servicios, inicio/enumeración/estado de servicios y driver services, solicitudes de control. Actualización 08-02-2022; no se afirma que SCM excluya los servicios de controlador. |
| [Microsoft: Registry](https://learn.microsoft.com/en-us/windows/win32/sysinfo/registry) | Párrafos iniciales: almacén definido por el sistema para datos de configuración de aplicaciones y componentes. Actualización 07-01-2021; solo finalidad conceptual, sin editar configuración real. |
| [Microsoft: Windows Event Log](https://learn.microsoft.com/en-us/windows/win32/wes/windows-event-log) | Purpose y Run-time requirements: proveedores, manifiestos, escritura y lectura/representación de eventos; API que sucede a Event Logging desde Vista. Actualización 19-08-2020; no se recomienda API histórica sustituida ni se presupone que toda acción o auditoría se registre automáticamente. |
| [NIST SP 800-123: Guide to General Server Security](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-123.pdf) | 2.4, p. 2-4; 4.1, pp. 4-1–4-2; 4.2.1–4.2.3, pp. 4-2–4-6; 6.1, pp. 6-1–6-3; Appendix A, p. A-1: mínimo privilegio, cuentas, parches, funciones necesarias, logs y hardening. Julio 2008; se usan fundamentos y alcance, no guía operativa completa de 2026, algoritmos/passwords/protocolos históricos o obligaciones federales estadounidenses para España. |
| [Microsoft: What is PowerShell?](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.5) | Introducción, Command-line Shell y Scripting language: shell, lenguaje, automatización y objetos .NET. Rama documental PowerShell 7.5; actualización 12-08-2026; no se equipara toda instalación con Windows PowerShell 5.1. |
| [Microsoft: about_Pipelines](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipelines?view=powershell-7.5) | Long description, Using pipelines y How pipelines work: objetos y enlace a parámetros; ejemplo de salida de comandos nativos. Rama documental PowerShell 7.5; no se promete que toda herramienta externa produzca objetos estructurados del dominio ni que todo parámetro acepte pipeline. |
| [Microsoft: Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview) | Introducción y lista de componentes: objetos, directorio jerárquico, cuentas, autenticación, control y administración basada en políticas. Actualización 11-03-2025; AD DS, no cualquier producto con marca Active Directory ni formato de almacenamiento de contraseñas. |
| [Microsoft: Compare Active Directory to Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/compare) | Introducción y tabla: directorio de Windows Server frente a identidad cloud, administración, aplicaciones y dispositivos. Actualización 08-03-2024; distinción conceptual, sin adoptar promesas comerciales de ahorro o mejor seguridad universal ni equivalencia con Entra Domain Services. |
| [Microsoft: NTFS overview](https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview) | Increased reliability e Increased security: registro basado en transacciones, restauración de consistencia y permisos detallados mediante ACL. Actualización 18-06-2025; no se usan tamaños máximos, garantías absolutas de conservación de datos, disponibilidad continua o recuperación de toda corrupción. |
| [Linux Kernel Organization: About Linux Kernel](https://www.kernel.org/linux.html) | What is Linux? y New to Linux?: origen tipo Unix, objetivos POSIX/SUS y kernel como componente de una distribución. Página fechada 06-08-2024; solo distinción conceptual, sin adoptar recomendaciones históricas de CD-ROM, recuentos o estado de archivos de correo. |
| [Debian: About Debian](https://www.debian.org/intro/about) | WHAT is Debian?: kernel en el núcleo del sistema, herramientas, paquetes y organización conjunta de componentes. Página del proyecto consultada; ejemplo de integración, sin inferir soporte actual de puertos/kernel, números de paquetes o herramientas GNU obligatorias en toda distribución. |
| [systemd: daemon(7)](https://www.freedesktop.org/software/systemd/man/latest/daemon.html) | Description, SysV Daemons y New-Style Daemons: proceso de servicio y diferencia entre daemonización clásica y supervisión moderna. Cabecera systemd 262; no se prescribe double-fork o proceso root como requisito universal de daemon. |
| [systemd(1): system and service manager](https://www.freedesktop.org/software/systemd/man/latest/systemd.html) | Description y Units: PID 1 de sistema, instancias de usuario, unidades y gestión de servicios/dependencias. Cabecera systemd 262; no se presupone presente en toda distribución, unidad igual a proceso o todo servicio residente permanentemente. |
| [Debian Reference, Chapter 2: Debian package management](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html) | 2.1.1 Debian package management system; 2.1.5 Debian archive basics; 2.5.1–2.5.4 sobre metadatos, Release e índices. Referencia en línea consultada, ejemplos trixie; solo paquetes, repositorios y metadatos, sin adoptar recomendación de versión, número de paquetes o política para otras distribuciones. |
| [Linux Kernel: The /proc Filesystem](https://docs.kernel.org/filesystems/proc.html) | Chapter 1, introducción; 1.1 Process-Specific Subdirectories; introducción a /proc/sys: interfaz a estructuras internas e información/control. Documentación del kernel consultada; solo conceptos, sin adoptar restricciones de permisos o entradas históricas como invariantes actuales. |
| [Linux Kernel: sysfs - The filesystem for exporting kernel objects](https://docs.kernel.org/filesystems/sysfs.html) | What it is; Using sysfs; Directory Creation y Attributes: objetos, jerarquía, atributos y acceso desde usuario. Revisión indicada 16-08-2011, original 10-01-2003; documento mantenido en kernel docs, sin usar firmas o detalles internos como API vigente. |
| [Proyecto Sudo: sudo(8)](https://man7.org/linux/man-pages/man8/sudo.8.html) | NAME y DESCRIPTION: ejecución como superusuario u otro usuario conforme a política, autenticación condicional y plugins de auditoría. Manual primario Sudo 1.9.18, fecha de página 07-06-2025; copia upstream identificada por colofón. sudo.ws bloqueó rastreo, se leyó el espejo man7; sin alterar sudoers ni pedir credenciales. |
| [CIS Control 4: Secure Configuration of Enterprise Assets and Software](https://www.cisecurity.org/controls/secure-configuration-of-enterprise-assets-and-software) | Overview: establecer y mantener configuración segura de activos, sistemas operativos y aplicaciones. Página enlazada a CIS Controls v8.1; solo overview público leído, sin atribuir comprobación del PDF completo o todos sus salvaguardas. |
| [The Open Group: The UNIX Brand and Certification](https://www.unix.org/the_brand.html) | The Three Pillars of Certification y Evolution of the Brand: especificaciones, productos y verificación, con versión de especificación. Página primaria de The Open Group; no se afirma qué productos están actualmente certificados ni garantía comercial universal; opengroup.org/certifications/unix devolvió 403 y se leyó unix.org. |

Matices y decisiones de fuente:

- Consulta real 27-10-2026: 22 URLs primarias abiertas en web y un README primario leído mediante conector GitHub. No se atribuye revisión humana independiente ni se fabrica aceptación.
- XNU: README de autores leído con GitHub, blob Git 99c8db7e568ee00d37557598bd0e73414611e45b; combinación Mach/FreeBSD/IOKit. El archivo de Apple Kernel Programming se consultó como contexto histórico pero no se usa para límites o compatibilidad actuales.
- Diagnóstico de E/S: fuente Microsoft SQL/Windows como ejemplo de correlación de latencia, colas, tráfico y carga. No se universaliza el umbral 10–15 ms ni su ejemplo de capacidad y unidades; no se diagnostica disco físico defectuoso solo por CPU baja.
- Familia NT acotada a Windows 10/11, según destinos NT y tablas de la documentación INF. La frase general desde Windows 2000 no se extiende a Windows Me; nombre comercial y versión interna se distinguen.
- Servicio de aplicación acotado explícitamente. SCM también mantiene e inicia driver services; no se usa la negación falsa de que SCM nunca administre controladores. La formulación original general se precisa por posible ambigüedad terminológica, conservando concepto y clave B.
- Registro es configuración, no todo dato o toda configuración. Windows Event Log requiere proveedores, políticas y conservación adecuados; no se afirma captura automática de cada acción. No se recomienda API histórica Event Logging sustituida.
- PowerShell: documentación 7.5, overview actualizado 12-08-2026. Se mantiene modelo de objetos y se distingue terminal, cmd.exe y tareas. Los programas externos no devuelven por ello objetos estructurados de su dominio y cada comando debe admitir el enlace por pipeline.
- AD se precisa como AD DS, separado de cuentas locales, DNS y Entra ID. Se conserva la distinción servicio/SO, sin promesas comerciales ni detalle no verificado de almacenamiento de credenciales.
- NTFS: ACL de autorización y registro para recuperar consistencia. No se adoptan garantías absolutas de conservar todo dato, disponibilidad continua o recuperación de toda corrupción, tamaños máximos o equivalencia con TxF.
- Linux en sentido estricto es kernel; distribución integra componentes y mantenimiento. No se exige escritorio, instalador interactivo, todo userland GNU ni idéntico formato de paquetes. Debian About es ejemplo de integración, sin usar recuentos o estado actual de puertos alternativos.
- systemd y daemon: cabeceras systemd 262; instancias de sistema/usuario y unidades diversas. No se exige root, double-fork, residencia permanente ni systemd en toda distribución. Se evita usar el propio gestor, que también puede ser un proceso de servicio, como distractor ambiguo de daemon.
- procfs y sysfs: interfaces virtuales, no configuración persistente general o nodos de /dev. Algunos atributos permiten cambios con permisos; no se presupone todo solo lectura ni todo escribible. Se usan conceptos de kernel docs, no APIs internas o entradas históricas como reglas actuales.
- sudo.ws bloqueó rastreo; se leyó manual primario del proyecto en man7, Sudo 1.9.18. Ejecuta como superusuario u otro usuario según política; contraseña por invocación y registro completo no son garantías universales. No se modifica configuración real ni se solicitan credenciales.
- NIST SP 800-123 julio 2008: solo principios de 2.4, 4.1, 4.2, 6.1 y definición de hardening, contrastados con overview público CIS Control 4 enlazado a v8.1. No se aplica como guía operativa completa de 2026 ni se copian protocolos, políticas de contraseña, reglas de instalación automática antiguas u obligaciones legales federales estadounidenses.
- Debian Reference: paquetes binarios y de fuentes, repositorios/índices y metadatos; ejemplo trixie. No se recomienda instalar o mezclar repositorios, ni se adoptan números de paquetes o versiones como requisito del concepto.
- Unix: The Open Group en unix.org distingue especificaciones, productos y verificación. opengroup.org/certifications/unix devolvió 403; no se cita como lectura directa. No se afirma listado actual de productos, certificación automática de distribuciones Linux ni imposibilidad de certificar un producto basado en Linux.
- Tres formulaciones completas conservadas: 125, 128 y 133. En 122 se mantienen alternativas con alcance de servicio de aplicación; en 129 se mantienen enunciado y distractores, precisando integración sin instalador universal. Quince conceptuales y cinco aplicaciones justificadas, sin cuota por lote.

Límites externos y fuentes descartadas:

- sudo.ws: robots.txt denegó acceso; espejo primario man7 leído y colofón upstream verificado.
- opengroup.org/certifications/unix: 403; unix.org/the_brand.html de The Open Group se abrió. Ruta ensayada what_is_unix.html: 404, no usada.
- Microsoft Operating system version: error de acceso; se leyó INF Manufacturer section. Rutas ensayadas NTFS file system y event-schema-elements: 404/no accesible, no incorporadas.
- Microsoft muestra aviso genérico de autorización junto a cuerpo público legible; no se accedió a cuentas o documentación privada.
- CIS: solo overview público Control 4. La página de Account Management se consultó pero no se incorpora como respaldo específico de separación de cuentas; ese detalle se cotejó en NIST 4.2.2.

La revisión final conserva el hash anterior y los dos IDs afectados por el refinamiento: fecha y título exacto de la fuente de diagnóstico de E/S y mayor fluidez de la alternativa NT, con el mismo significado y clave. El registro también distingue la lectura mediante GitHub. No se ha ejecutado conversión ni modificado ningún documento original.

## Métricas antes y propuesta

Análisis 2.0.0 de las 20 preguntas en simulación, sin modificar bancos activos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 6 | 6 |
| Aciertos por primera alternativa de longitud máxima | 6 | 6 |
| Ratio correcta/distractor máximo de 1,5–<2 | 4 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback correcto e incorrecto idénticos | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Empates de longitud máxima | 1 | 3 |
| Explicación individual de tres distractores | 0 | 20 |

La heurística de primera alternativa de longitud máxima permanece en **6/20 (30 %)**; la de longitud mínima acierta **7/20 (35 %)** en la propuesta. Seis correctas continúan siendo únicas más largas, con extensión ajustada al contenido y distractores comparables. Se han eliminado las cuatro alertas graduales de longitud y completado veinte feedback breves. No se añaden palabras ni se cambian claves para ajustar proporciones. Cero alertas no certifica calidad pedagógica, aceptación o calibración.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-024.json --render docs/GSI_REVISION_LOTE_024.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

Resultado: **17 pruebas editoriales superadas**, **46 JSON y 21 esquemas validados**, **1.964 estructuras de pregunta válidas** y **19.251 controles de integridad correctos**, sin errores técnicos. Documentación sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown del catálogo; una comprobación adicional verificó **55 enlaces locales** entre ficha, informe y plan.

La simulación confirmó exactamente **20 cambios manuales**, cero IA y cero oficiales, sin escrituras activas. Se verificaron 60 explicaciones individuales, las tres formulaciones conservadas, las alternativas de la pregunta de servicios, el enunciado y distractores de distribución, todos los IDs y claves, procedencia, campos históricos de fuente y reproducción de ficha. Los **96 archivos protegidos** de bancos, base, aceptación y entregas anteriores conservan sus hashes. Las oficiales son idénticas byte a byte al commit actual y a la base auditada; manuales e IA mantienen el contenido del commit actual. Los tres informes derivados conservan contenido y fecha existentes al iniciar la preparación.

Se rechazaron una aceptación vacía y el recibo real del piloto frente al lote 024. No hay aceptaciones nuevas para 002–024 y el historial conserva un único lote aplicado. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. El cierre editorial completo continúa pendiente; la revisión de concepto y clave registrada por ID es del preparador, no aceptación del propietario ni prueba semántica automatizada.

Todos los validadores del proyecto ejecutados para el lote terminaron con código 0. El generador temporal del informe tuvo una aserción fallida por dos sustituciones textuales redundantes antes de crear sus salidas; se eliminó la sustitución duplicada y pasó. El registro conserva esa incidencia auxiliar, el refinamiento y los límites de fuentes. No se modificaron preguntas para satisfacer comprobaciones.

No cambian código ni bancos activos. No se repite la suite HTTP completa para propuestas inactivas, ni se atribuye al lote una nueva ejecución del piloto. Entrenamiento, Simulacros, estadísticas y Refuerzo continúan consumiendo las versiones activas. Para revisar este hito, abrir la ficha y contrastar cada alternativa y explicación con sus fuentes antes de aprobar expresamente el hash.

## Entrega y continuidad

Creados: `content/question-reviews/lote-024.json`, `docs/GSI_REVISION_LOTE_024.md`, este informe y `logs/gsi-editorial-024-preparation.json`. Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran contrastando su contenido y fecha existentes del 27-10-2026.

El lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. Acumulado: **20 aceptadas y 460 propuestas pendientes**; **1.742 decisiones pendientes de aceptación**, de las que **1.282** aún no tienen propuesta. Los lotes 002–024 reúnen 113 incidencias IA originales, otras 54 IA y 293 manuales. Las 128 incidencias originales conservan 15 aplicadas y 113 propuestas pendientes; preparar no equivale a resolver editorialmente.

Sin conversiones documentales ni conversiones nuevas pendientes. Originales, oficiales y entregas anteriores permanecen protegidos. No se crea commit, publicación o fusión de propuestas pendientes. El siguiente lote continúa por bloque y tema. El cierre exige decisión individual del propietario sobre los 1.762 IDs y comprobación de versiones activas, distinguiendo preparación, aceptación humana y calibración todavía no realizada.
