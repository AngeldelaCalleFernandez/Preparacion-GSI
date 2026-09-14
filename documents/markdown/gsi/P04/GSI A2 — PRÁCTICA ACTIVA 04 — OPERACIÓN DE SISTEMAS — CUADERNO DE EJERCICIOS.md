# GSI A2 - PRÁCTICA ACTIVA 04

## Operación de sistemas: administración, backup, almacenamiento, HA y DR

**Ámbito:** IV.01 a IV.06 del Bloque IV V2.1.

**Objetivo:** entrenar operación real y segundo ejercicio. No basta con reconocer una definición: debes decidir qué medir, qué aislar, qué restaurar, qué cambiar y cómo justificarlo. Intenta cada ejercicio sin mirar el solucionario y escribe siempre el razonamiento, no solo la palabra final.

**Cálculos derivados:** algunos problemas de RAID, crecimiento, PUE, reparto de carga e IOPS/throughput aplican aritmética directa a los conceptos de tus apuntes. Cuando se simplifica un escenario se indican las hipótesis (discos iguales, sin hot spare ni overhead, crecimiento compuesto, etc.).

# PARTE A - Administración del sistema operativo y software de base (IV.01)

1 - Servicio caído: orden de diagnóstico

Una aplicación deja de responder tras un reinicio nocturno. Enumera un orden de comprobación que permita distinguir proceso detenido, dependencia fallida, puerto ocupado, DNS/red, permisos, certificado, almacenamiento lleno o saturación.

2 - Proceso vs servicio

Explica por qué “el proceso existe” no demuestra que el servicio esté sano. Da tres comprobaciones adicionales.

3 - Disco lleno

El volumen de sistema está al 100 %. Los usuarios informan de errores y algunos logs han dejado de escribirse. Explica los riesgos inmediatos y qué harías antes de borrar ficheros indiscriminadamente.

4 - Identidad y privilegios

Un administrador usa diariamente la misma cuenta con privilegios máximos para correo, navegación y administración. Identifica los problemas y diseña una alternativa operativa más segura.

5 - POSIX y ACL

Un fichero Linux tiene permisos rwx para propietario/grupo/otros y además una ACL específica. ¿Por qué no son conceptos equivalentes y qué riesgo existe al revisar solo los bits rwx?

6 - Secuencia de arranque Linux

Ordena conceptualmente: systemd/servicios, firmware, kernel/initramfs, cargador de arranque. Explica qué tipo de fallo buscarías en cada etapa.

7 - Patch management

Ordena y justifica: verificar, inventariar, desplegar, probar, priorizar, documentar, evaluar compatibilidad/criticidad, preparar rollback.

8 - Parche urgente

Aparece una vulnerabilidad crítica, pero el parche puede romper un middleware esencial. ¿Por qué “instalar inmediatamente en todos los servidores” no siempre es la mejor respuesta? Propón un proceso acelerado pero controlado.

9 - Idempotencia

Un script “crea el usuario backup, añade una línea a un fichero y reinicia un servicio” cada vez que se ejecuta. ¿Qué parte puede no ser idempotente? Reescribe el comportamiento deseado en términos de estado objetivo.

10 - Rendimiento

CPU=92 %, RAM=60 %, disco con latencia baja y usuarios sin degradación. ¿Debes abrir una incidencia de capacidad solo por la CPU? Explica qué otras métricas/relaciones revisarías.

# PARTE B - Administración de SGBD (IV.02)

11 - Base de datos vs instancia

Distingue conceptualmente datos/estructuras de los procesos, memoria y endpoints que prestan el servicio. ¿Por qué esta distinción importa al diagnosticar “la base de datos está caída”?

12 - Autenticación y autorización

Una cuenta puede iniciar sesión correctamente, pero no puede leer una tabla. ¿Qué capa ha funcionado y cuál está fallando?

13 - Privilegios mínimos

Una aplicación recibe privilegios administrativos globales “para evitar errores”. Rediseña el acceso usando roles y privilegios sobre objetos.

14 - Consulta lenta

Una consulta antes tardaba 200 ms y ahora 9 s. Plantea un diagnóstico que incluya plan de ejecución, estadísticas, cardinalidades, índices, waits/locks, CPU, I/O y concurrencia.

15 - Índice: ventaja y coste

Un equipo propone crear índices sobre todas las columnas usadas en filtros. Explica por qué puede mejorar unas lecturas y empeorar otras partes del sistema.

16 - Deadlock

Dos transacciones se bloquean mutuamente. Explica qué puede hacer el SGBD, qué debe hacer la aplicación y qué revisarías para reducir recurrencia.

17 - Réplica no es backup

Un operador afirma: “tenemos una réplica asíncrona, así que no necesitamos copias”. Refuta la afirmación con al menos tres fallos que pueden propagarse a la réplica.

18 - PITR

Un usuario borra datos a las 10:17 y se detecta a las 10:40. Describe qué aporta una copia base más logs/WAL si se dispone de recuperación point-in-time.

19 - Replicación síncrona vs asíncrona

Compara pérdida potencial de datos, latencia y separación de dominios de fallo. ¿Cuál elegirías para una réplica remota con enlace de alta latencia? Justifica, sin asumir que existe una respuesta universal.

20 - Upgrade mayor del motor

Diseña el plan mínimo para actualizar una versión mayor de SGBD: compatibilidad, pruebas, réplica/piloto, backups, ventana, rollback, monitorización y validación.

# PARTE C - Mantenimiento, incidencias, backup y recuperación (IV.03)

21 - Tipos de mantenimiento

Clasifica: a) sustituir una batería UPS por degradación medida; b) reparar un ventilador tras avería; c) limpieza programada; d) actualizar software para adaptarlo a una nueva plataforma.

22 - Incidente, problema, petición y cambio

Clasifica: a) impresora caída; b) investigar por qué se repite la caída; c) alta estándar de un usuario; d) modificar la VLAN de un servidor.

23 - Impacto y urgencia

Compara: A) 800 usuarios sin acceso al sistema de nómina durante cierre mensual; B) 1 usuario sin acceso a una aplicación no crítica. ¿Cuál debe tener mayor prioridad y por qué?

24 - Escalado funcional y jerárquico

Un técnico no sabe resolver un fallo de almacenamiento y el SLA está a punto de incumplirse. Distingue qué justificaría escalado funcional y qué justificaría escalado jerárquico.

25 - Incidente mayor

Un CPD pierde conectividad externa. Diseña un flujo de las primeras actuaciones: mando, comunicaciones, diagnóstico, recuperación, evidencia y revisión posterior.

26 - Full, incremental y diferencial

Define las tres y explica qué información necesita cada restauración. ¿Cuál suele reducir la ventana diaria y cuál simplifica más la cadena de restore?

27 - Cadena incremental

Domingo: full. Lunes, martes y miércoles: incrementales. El miércoles por la noche se pierde el servidor. ¿Qué conjuntos de copia necesitas restaurar para llegar al punto del miércoles?

28 - Cadena diferencial

Domingo: full. Lunes, martes y miércoles: diferenciales respecto a la full. El miércoles por la noche se pierde el servidor. ¿Qué conjuntos necesitas?

29 - 3-2-1-1-0

Explica el significado operativo de la regla y por qué “0 errores” exige verificación/pruebas, no solo que el job aparezca en verde.

30 - Ransomware y backup

El malware compromete el dominio administrativo y cifra producción y repositorio de backup montado permanentemente. ¿Qué controles de tus apuntes habrían reducido el impacto?

31 - RPO y frecuencia

Un servicio tiene RPO=15 minutos. ¿Es coherente hacer una única copia diaria sin logs/replicación adicional? Explica la relación entre objetivo y mecanismo.

32 - RTO y automatización

Dos servicios tienen la misma copia diaria. S1 exige RTO de 30 min; S2, 24 h. ¿Por qué pueden necesitar arquitecturas de recuperación muy diferentes aunque el backup sea igual?

33 - Prueba de restore

Una copia se restaura y el fichero “abre”, pero la aplicación no arranca por certificados y configuración ausentes. ¿Qué demuestra este fallo sobre cómo debe probarse la recuperación?

# PARTE D - Configuración, cambios, automatización, observabilidad y capacidad (IV.04)

34 - CI y CMDB

Da cinco ejemplos de Configuration Item y explica por qué una CMDB no debe confundirse con “una lista de servidores”.

35 - Baseline y configuration drift

La baseline indica TLS habilitado y un puerto de administración cerrado. Meses después el puerto aparece abierto manualmente. ¿Cómo clasificarías la situación y qué controles ayudarían a detectarla/corregirla?

36 - Tipos de cambio

Clasifica y justifica: a) rotación mensual preaprobada de logs; b) actualización planificada de firmware con riesgo medio; c) cambio urgente para contener una brecha activa.

37 - RFC bien formada

Enumera la información mínima que exigirías antes de autorizar un cambio relevante: impacto, riesgo, dependencias, pruebas, ventana, responsable, comunicaciones y rollback.

38 - Versiones vs configuración

Git contiene el código y la IaC. ¿Por qué eso no significa que la gestión de configuración esté resuelta?

39 - Imperativo vs declarativo

Distingue “ejecuta estos 12 pasos” de “el estado deseado es 3 réplicas y este firewall”. ¿Qué ventaja operativa aporta el enfoque declarativo cuando existe un reconciliador?

40 - Idempotencia operativa

Un playbook debe poder ejecutarse 20 veces sin crear 20 usuarios, duplicar reglas ni corromper ficheros. Explica la propiedad buscada.

41 - Monitorización vs observabilidad

Un dashboard dice “latencia alta”, pero no permite correlacionar petición, servicio y base de datos. ¿Qué señales añadirías para acercarte a observabilidad?

42 - SLI, SLO y SLA

Clasifica: “99,93 % de disponibilidad medida este mes”, “objetivo interno 99,95 %”, “contrato con el proveedor 99,9 % y penalización”.

43 - CPU alta sin problema

Un servicio mantiene SLO con CPU al 90 %. Otro incumple SLO con CPU al 35 %. Explica por qué la utilización aislada no identifica el cuello.

44 - Bottleneck

Latencia sube, CPU estable, memoria estable, IOPS similares, pero la latencia de disco pasa de 2 ms a 35 ms y la cola crece. ¿Cuál es tu hipótesis inicial y cómo la validarías?

45 - Crecimiento y headroom - cálculo derivado

Un pool usa 12 TB hoy. Crece un 25 % anual compuesto. Se desea capacidad para 3 años y además 20 % de headroom sobre la demanda esperada. Calcula la capacidad objetivo aproximada.

46 - Autoscaling vs capacity planning

Una plataforma escala automáticamente pods, pero el cluster tiene un límite físico y la base de datos no escala igual. Explica por qué autoscaling no sustituye a la gestión de capacidad.

# PARTE E - Almacenamiento de datos (IV.05)

47 - DAS, NAS, SAN y objeto

Asocia: a) ficheros compartidos por SMB; b) LUN de bloques por Fibre Channel; c) disco NVMe local; d) repositorio masivo accedido por API de objetos.

48 - NAS vs SAN

Refuta: “NAS es almacenamiento en red y SAN no”. Explica la diferencia por abstracción expuesta.

49 - RAID: identificar

Relaciona: striping sin redundancia; espejo; paridad distribuida de un fallo; doble paridad; stripe sobre espejos.

50 - RAID: capacidad útil - cálculo derivado

Supón 8 discos iguales de 4 TB, sin hot spare ni overhead de metadatos. Calcula la capacidad teórica aproximada de RAID 5, RAID 6 y RAID 10.

51 - RAID no es backup

Un RAID 6 sobrevive a dos fallos de disco. ¿Por qué sigue sin proteger frente a borrado lógico, ransomware, incendio o error administrativo?

52 - Zoning y LUN masking

Explica qué controla cada mecanismo y por qué no son sinónimos.

53 - Multipathing

Un servidor tiene dos HBA y dos caminos hacia la cabina. ¿Qué problema resuelve multipathing y qué no garantiza por sí solo?

54 - Protocolos

Asocia: iSCSI, NFS, SMB, Fibre Channel y NVMe-oF con bloque/fichero y transporte/fabric apropiados.

55 - Thin provisioning - cálculo derivado

Pool físico 24 TB; capacidad lógica presentada 40 TB; uso real 18 TB; crecimiento 1,5 TB/mes. a) ¿Cuánto falta para llegar al 80 % físico? b) ¿Cuántos meses para agotar el pool si nada cambia?

56 - Snapshot

El equipo hace snapshots diarios en la misma cabina y elimina el backup externo. Explica por qué el snapshot puede depender del mismo dominio de fallo.

57 - IOPS y throughput - cálculo derivado

Una carga realiza 20.000 IOPS con bloques medios de 8 KiB. Ignorando overhead, calcula throughput aproximado en MiB/s. Explica por qué dos cargas con mismos IOPS pueden requerir throughput diferente.

58 - Perfil de carga

Compara una base OLTP aleatoria de bloques pequeños con un backup secuencial de bloques grandes. ¿Qué métricas priorizarías en cada caso?

59 - Capacidad útil

Enumera qué debes descontar o reservar antes de afirmar “la cabina tiene 100 TB útiles”: RAID, snapshots, reservas, crecimiento y otros factores operativos.

60 - Seguridad de storage

Diseña controles para administración, segmentación de la red de storage, cifrado cuando proceda, firmware, alertas, inmutabilidad/WORM de backup y borrado seguro.

# PARTE F - CPD, virtualización, alta disponibilidad, balanceo y DR (IV.06)

61 - N, N+1 y 2N - cálculo derivado

Una carga requiere 600 kW y cada módulo aporta 200 kW. En este modelo simplificado, ¿cuántos módulos representan N, N+1 y 2N?

62 - PUE - cálculo derivado

El CPD consume 420 kW totales y los equipos TI 280 kW. Calcula PUE e interprétalo.

63 - PUE no es disponibilidad

Dos CPD tienen PUE 1,35 y 1,60. ¿Puedes concluir solo con ese dato cuál tiene mayor disponibilidad? Justifica.

64 - Consolidación y blast radius

Se migran 30 servidores físicos a 3 hosts potentes. ¿Qué mejora y qué riesgo nuevo aparece? Enumera controles de capacidad/HA/anti-affinity.

65 - Live migration

Una VM puede moverse en vivo entre hosts del mismo CPD. ¿Por qué eso facilita mantenimiento pero no constituye backup ni DR?

66 - SPOF

Arquitectura: 4 hosts redundantes, storage redundante, pero un único switch de acceso a storage y un único balanceador. Identifica los SPOF y corrige el diseño conceptualmente.

67 - Activo-activo vs activo-pasivo

Compara uso de capacidad, complejidad de estado/consistencia y failover. ¿Por qué activo-activo no es automáticamente “mejor”?

68 - Balanceo L4/L7 y DR - mini caso

Una aplicación HTTP tiene 3 nodos. El balanceador debe enrutar /api a un pool y /static a otro, retirar nodos enfermos y repartir 900 req/s con pesos 2:1:1. a) ¿Necesitas capacidad L4 o L7 para el routing por path? b) ¿Qué reparto teórico recibe cada nodo del pool ponderado? c) Explica por qué todo ello sigue siendo HA local y no DR si está en un único CPD.

# Registro de progreso

| Bloque | Intento 1 | Intento 2 | Errores recurrentes / regla correcta |
| --- | --- | --- | --- |
| A SO |  |  |  |
| B DBA |  |  |  |
| C Incidentes/backup |  |  |  |
| D Config/observabilidad |  |  |  |
| E Storage |  |  |  |
| F CPD/HA/DR |  |  |  |

Fuente principal: GSI A2 - Bloque IV - Apuntes completos V2.1 revisados - IV.01 a IV.06. Los cálculos señalados como “derivados” aplican aritmética sobre conceptos del tema y declaran sus hipótesis.
