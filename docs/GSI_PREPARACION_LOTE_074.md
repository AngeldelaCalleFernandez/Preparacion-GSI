# Preparación de GSI-EDITORIAL-074

Fecha: 3 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `7e695db6b220072ba44c244927af82e8950140d4232a12dfaf0b982ee75d1e57`.

## Alcance y criterio

Posiciones 1461–1480 de la cola: trece IA B4-T05 (007–018 y 020) y siete B4-T06 (002–006, 008–009). Se conservan IDs, conceptos, claves, dificultad orientativa, estados y procedencia.

Catorce son conceptuales y seis aplicaciones: T05-010/012/016 y T06-002/005/008. La distribución describe las preguntas, sin imponer cuotas. Se conservan **14 enunciados** y **tres formulaciones completas**: T05-018 (IOPS/throughput), T06-005 (cálculo PUE) y T06-006 (contención de aire). Sus alternativas ya comparan magnitudes, operaciones o funciones próximas y no se reescriben para homogeneizar el lote.

Se perfecciona el resto con cuatro alternativas plausibles, explicación de la correcta y tres justificaciones individuales vinculadas a los IDs originales y al contenido. El caso de LUN distingue llegar al destino de ver sus volúmenes; thin provisioning contrapone tamaño lógico y consumo físico; N+1 explicita la reserva modular, y el host común hace visible el dominio de fallo.

[Ficha antes/después](GSI_REVISION_LOTE_074.md) · [Propuesta JSON](../content/question-reviews/lote-074.json) · [Registro](../logs/gsi-editorial-074-preparation.json).

La rúbrica expresa juicio del preparador apoyado en fuentes, pendiente de revisión del propietario. No acredita aceptación humana independiente, calibración o cierre editorial. Las veinte aceptaciones IA históricas se preservan para sus versiones exactas, sin extenderlas a las propuestas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Decisión |
| --- | :---: | --- | :---: | --- |
| AI-GSI-B4-T05-007 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-008 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T05-009 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T05-010 | C | Aplicación | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-011 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-012 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T05-013 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-014 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-015 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-016 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T05-017 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-018 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T05-020 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-002 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T06-003 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-004 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-005 | A | Aplicación | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-006 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-008 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T06-009 | B | Conceptual | Sí | Pendiente del propietario |

La ficha presenta antes/después, motivos, fuentes con URL/localizador/versión/fecha y hashes por versión. No se identifican claves incorrectas nuevas confirmadas o cambios de concepto que requieran reemplazo o retirada.

## Fuentes y vigencia

**22 URLs primarias comprobadas el 03-11-2026**, conservando también la procedencia original.

- Las 22 URLs primarias se abren y contrastan el 03-11-2026. Se conservan además procedencia y aceptaciones históricas, sin extenderlas a los textos nuevos.

- RAID1 usa espejo; RAID6 permite dos pérdidas completas bajo las condiciones expresas y RAID1+0 habitual distribuye sobre espejos. Se evita imponer un mínimo universal de discos o tolerar cualquier combinación de fallos. RAID no conserva por sí mismo versiones anteriores a un borrado aplicado.

- Zoning delimita comunicación entre puertos de fabric; mapeo/enmascaramiento decide qué LUN se presenta al iniciador. Se usa el cuerpo público de NetApp pese a un aviso de artículo no disponible en su plantilla. Los requisitos específicos WWPN y límites de igroups no se universalizan.

- Multipathing ofrece rutas al dispositivo, failover y reparto según soporte. Varias rutas pueden seguir dependiendo de una misma cabina; no generan historial de datos.

- RFC7143 y8881 se leen como HTML en sus apartados pertinentes y se comprueban sus fichas: Proposed Standard, no equivalencia con cualquier implementación o extensión. Se distinguen bloques SCSI/NVMe y ficheros NFS/SMB; no se declara lectura íntegra de las especificaciones enlazadas por NVM Express.

- Thin provisioning separa tamaño lógico de asignación física y exige vigilancia del pool. La respuesta al agotamiento depende de la plataforma. El ejemplo es didáctico y no describe capacidad real del proyecto.

- Los checkpoints Hyper-V muestran dependencia de ficheros y ubicación; consistencia y copia independiente no son equivalentes. No se afirma que cualquier snapshot de cualquier producto sea idéntico, ni se descarta su uso dentro de una solución de backup que copie o replique fuera.

- Se conserva la formulación IOPS/throughput. Tamaño, combinación y punto de medición influyen en su relación; cifras EBS no se adoptan como límites de todo dispositivo.

- SP800-209 se consulta en ficha y abstract HTML, sin atribuir lectura íntegra del PDF. GSA respalda mínimo privilegio y seguimiento; no se convierten guías estadounidenses en obligación de la AGE.

- N+1 se aplica al conjunto modular del caso; 2N a sistemas capaces cada uno de soportar la carga. Componentes comunes pueden seguir existiendo: ninguna etiqueta certifica disponibilidad o Tier. No se prescriben actuaciones eléctricas, tiempos de autonomía o porcentajes de ahorro.

- The Green Grid marca su glosario como legacy; su cociente total/TI se contrasta con la explicación actual de Google. Se conservan el cálculo 150/100 y sus distractores, comprobando cociente, inversa, suma y diferencia. No se afirma lectura de ISO/IEC30134-2 ni se usa PUE como disponibilidad, trabajo útil o huella ambiental total.

- ENERGY STAR respalda separar flujos de aire por disposición y contención; no garantiza un ahorro fijo. La pregunta está bien construida y se conserva completa.

- El host físico y sus recursos son dominio común de las VMs. Anti-afinidad puede ser estricta o preferente y tiene ámbito concreto; OpenStack advierte que grupos de servidores no bastan para HA. Su documentación latest servida es de desarrollo, declarada como tal, no una release propuesta para instalar.

## Límites de acceso y verificación

- La ruta Microsoft storage-spaces/thin-provisioning no fue recuperable; se utilizó la guía pública RHEL8 con sobreaprovisionamiento y agotamiento físico.

- Las dos páginas IBM Linux-on-Systems sobre zoning y LUN masking devolvieron403. Se usaron cuerpos HTML NetApp de zoning e igroups, sin credenciales o eludir acceso.

- La guía Schneider UPS system redundancy types redirigió a product-help.se.com y no fue accesible. Se contrastaron la FAQ modular actualizada 07-10-2026 y el artículo público de diseño 2N del fabricante.

- La ruta dedicada NVMe/TCP no fue accesible. La introducción oficial de transportes enumera PCIe/RDMA/TCP; la diferenciación se usa junto con la especificación iSCSI y las de ficheros.

- Las plantillas muestran avisos de disponibilidad, login, JavaScript o generación de PDF junto al cuerpo público. Se lee ese cuerpo; no se activa una generación, inicio de sesión, descarga de software o instrucción de configuración.

- Contraste documental y una comprobación aritmética del ejemplo PUE. Sin restauraciones reales, cambios de cabina, pruebas de fallo físico, maniobras eléctricas, migraciones o despliegue de VMs. Chrome comprueba la ficha, no rendimiento operativo o calibración pedagógica.

Se lee HTML público, incluido el cuerpo relevante tras índices o avisos. No se convierte ningún documento original o PDF, no se usa OCR ni se instalan dependencias. Los ejemplos de fuentes externas son respaldo, no instrucciones para ejecutar procedimientos en el proyecto.

## Métricas y revisión de forma

| Señal en estas 20 preguntas | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 10 | 2 |
| Acierto primera máxima (%) | 50.0 | 10.0 |
| Ratio 1,5–menos de 2 | 3 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera mínima es correcta en 4/20 (20 %); hay ocho empates máximos. Se registran las proporciones de las correctas cortas. Las dos correctas únicas más largas, empates y mínimos se revisan como señales. Los códigos N/N+1/2N/2(N+1) y las cantidades conservan su notación natural, sin rellenarlos para igualar caracteres. No se cambian claves o persigue una distribución de letras. Barajar conserva los IDs originales; las métricas no acreditan calidad pedagógica o dificultad calibrada.

## Validación

Resultados: **19 pruebas editoriales, 96 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho comandos de validación con código 0. Simulación limitada a **20 IA**, con claves, IDs, procedencia y estados conservados y **60 explicaciones individuales de distractores**. Veinte hashes históricos de procedencia IA preservados sin aceptar textos nuevos. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración comprobadas. **311 archivos protegidos intactos** y **160 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha**, con captura del PUE inspeccionada y sin desbordamiento a 1280/390 px. Una comprobación aritmética local verifica exactamente 150/100=3/2, la correcta A, la suma 250, la inversa 2/3 redondeada a 0,67, la diferencia 50 y la proporción auxiliar 1/2. Se verifican las fechas de las 22 referencias y las cuatro proporciones inversas registradas, sin convertirlas en garantía pedagógica. No se realizan operaciones de cabina, restauración, fallos físicos, maniobras eléctricas o despliegue de VMs ni se repite la suite HTTP del producto sin cambios. Los derivados mantienen contenido y fecha 03-11 del inicio; respecto de HEAD solo cambia la fecha 26-10→03-11. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Se conserva la evidencia del fallo inicial de escritura de progreso y su recuperación. Las tres incidencias anteriores y aceptaciones pendientes mantienen abierto el cierre editorial.

Comandos desde la raíz, con Chrome/Playwright/marked ya disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_074_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_074.py
```

Chrome ha comprobado la ficha literal a 1280/390 px. Se ha comprobado la aritmética del ejemplo PUE; no se realizan operaciones de cabina, restauración, fallos físicos, maniobras eléctricas o despliegue de VMs. La aplicación y los bancos no cambian; no se repite la [suite HTTP completa previa del 001 aplicado](../logs/gsi-editorial-001-revalidation-2026-10-30.json) para propuestas inactivas. La validación técnica no acepta textos ni calibra dificultad.

La primera invocación de `editorial_progress.py --write` falló al abrir el archivo de progreso: `OSError [Errno 22] Invalid argument`. Se comprobó que el registro anterior seguía siendo JSON íntegro (20 aceptadas, 1.440 propuestas) y un reintento ordinario del mismo comando terminó con código 0 y actualizó las propuestas a 1.460. El registro conserva los identificadores de salida, hash del archivo anterior y resultado del reintento. Este incidente de escritura no se presenta como una prueba mantenida satisfactoria.

## Incidencias y cierre

Se conservan las tres incidencias activas anteriores, con correcciones propuestas pendientes de aprobación y aplicación: lotes 032 (XML), 054 (dependencias en normalización) y 055 (cota O(n)). Mantienen evidencia e impedimento de cierre; no se dan por corregidas en el banco activo.

Tras preparar 074: **20 aceptadas, 1.460 propuestas pendientes, 282 sin propuesta y 1.742 decisiones pendientes del propietario**. Se cubren 1.480/1.762 IDs sin duplicar. Las 128 incidencias IA originales mantienen propuesta: 15 aplicadas y 113 pendientes; no es resolución editorial. La cola preparada pendiente comprende 113 IA originales, 552 IA restantes y 795 manuales.

## Entrega y revisión manual

Creados: propuesta JSON, ficha, este informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen contenido y fecha del inicio. Auxiliares y captura quedan en tmp. No hay conversiones nuevas o pendientes, OCR o dependencias nuevas.

Abre la ficha y contrasta pérdida de disco frente a borrado (T05-007–010), zoning/LUN/multipath (011–013), bloques y ficheros (014–015), thin/snapshot (016–017), la distinción IOPS/throughput conservada (018), redundancia modular y de sistemas (T06-002–003), PUE (004–005), contención de aire (006) y host común/anti-afinidad (008–009), junto con cada distractor. La aprobación debe identificar el hash exacto; las versiones y aceptaciones históricas no la sustituyen.

Ninguna propuesta se acepta, aplica, activa, retira, publica o fusiona; no se crea commit. Las 202 oficiales, los bancos activos y documentos originales se preservan. Siguiente paso: revisión expresa y preparación de las 282 preguntas restantes manteniendo el estándar acordado.
