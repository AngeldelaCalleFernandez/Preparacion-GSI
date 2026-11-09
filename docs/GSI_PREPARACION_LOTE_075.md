# Preparación de GSI-EDITORIAL-075

Fecha: 3 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `6b2df8f4b25ebb1088a84fe8266dde8c1c9d85cde1195c6088b06cf6c0c76a13`.

## Alcance y criterio

Posiciones 1481–1500 de la cola: ocho IA B4-T06 (010–016 y 018), once B4-T07 (003–008, 010, 012, 016–017 y 001) y una B4-T08 (001). Se respeta el orden de la cola, incluido T07-001 después de 017. IDs, conceptos, claves, dificultad orientativa, estados y procedencia se conservan.

Catorce son conceptuales y seis aplicaciones: T06-013/014/016 y T07-005/012/016. La distribución es descriptiva. Se mantienen **nueve enunciados** y la formulación completa de **AI-GSI-B4-T07-001**, adecuada para distinguir relación logarítmica de distancia, recuento o frecuencia. El enunciado HTTP de T06-014 también funciona: se conserva y se abrevian las cuatro capas a igual notación para resolver su desequilibrio de longitud.

Todas incluyen explicación de la correcta y tres justificaciones individuales asociadas a los IDs originales y al contenido, compatibles con barajado. Se concretan partición y recurso compartido, recuentos de conexiones, sustitución parcial de cable, reconexiones ópticas y entrega sin ensayos cuando aportan contexto útil.

[Ficha antes/después](GSI_REVISION_LOTE_075.md) · [Propuesta JSON](../content/question-reviews/lote-075.json) · [Registro](../logs/gsi-editorial-075-preparation.json).

La rúbrica expresa juicio del preparador apoyado en fuentes, pendiente de revisión del propietario. No acredita aceptación humana independiente, calibración o cierre editorial. Las veinte aceptaciones IA históricas se preservan para sus versiones exactas, sin extenderlas a las propuestas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Decisión |
| --- | :---: | --- | :---: | --- |
| AI-GSI-B4-T06-010 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-011 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-012 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-013 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T06-014 | B | Aplicación | Sí | Pendiente del propietario |
| AI-GSI-B4-T06-015 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T06-016 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T06-018 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T07-003 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T07-004 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T07-005 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T07-006 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T07-007 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T07-008 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T07-010 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T07-012 | C | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T07-016 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T07-017 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T07-001 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T08-001 | A | Conceptual | Sí | Pendiente del propietario |

La ficha presenta antes/después, motivos, fuentes con URL/localizador/versión/fecha y hashes por versión. No se identifican claves incorrectas nuevas confirmadas o cambios de concepto que requieran reemplazo o retirada.

## Fuentes y vigencia

**23 URLs primarias comprobadas el 03-11-2026**, conservando también procedencia original.

- Las 23 URLs primarias se abren y contrastan el 03-11-2026. Se preservan también procedencia y aceptaciones históricas, sin trasladarlas a las propuestas.

- Live migration conserva ejecución entre hosts compatibles con mínima pausa, pero no crea backup o DR. La redundancia necesita capacidad y dependencias evaluadas. Activo/pasivo se distingue por papel de servicio o reserva, no por ubicación o modelo de datos; no se adopta cero downtime como garantía automática.

- Quorum decide continuidad según reglas de participación; fencing impide acceso incompatible al recurso. Se consulta RHEL9 §1.2.1–1.2.2, sin generalizar a todos los clusters el número simple de votos o el método físico.

- El enunciado HTTP L7 ya es preciso y se conserva; se abrevian las cuatro capas con igual notación tras detectar una proporción de longitudes15,5 entre el distractor explicado y L7. Los health checks se acotan a destinos alternativos sanos y se declara el fail-open de ALB si todos fallan; no son prueba de toda función del servicio.

- Least connections cuenta conexiones activas, con peso igual en el caso, frente a turno, hash o tiempo de respuesta. No acredita menor uso de CPU o menor latencia. No se instala o configura un balanceador.

- Los glosarios NIST respaldan cold/warm/hot por preparación. Hot no implica estar sirviendo tráfico activo-activo; RTO sigue siendo un objetivo de negocio. Solo se leen definiciones HTML, no SP800-34 completo.

- Se distinguen magnitudes físicas y de calidad de configuraciones IP/TCP/HTTP. Fluke documenta pérdidas, diafonía y retardo; FOA aporta relación entre pérdidas, rango óptico, ruido y BER. No se presume que aumentar ancho de banda nominal elimine todos los límites.

- UTP y pantallas usan nomenclatura U/UTP, F/UTP y S/FTP. La fuente Fluke cita un anexo informativo histórico, no se presenta como lectura o actualización de ISO/IEC11801. Conector, cordones, instalación y alcance de ensayo influyen en el canal.

- 90m permanente más10m combinados de latiguillos es el modelo convencional citado, no permiso universal para toda categoría, temperatura, calibre o aplicación. Ensayo de componente, enlace permanente y canal no son equivalentes.

- La ficha coaxial Belden 9141 está descatalogada: se usa construcción, no recomendación comercial. Monomodo suele permitir mayor alcance con ópticas compatibles, sin ancho de banda infinito o confundir diámetro del núcleo/campo modal.

- La inmunidad EMI se refiere a la señal óptica; puede haber metal en el cable. Suciedad, pérdidas y daño mecánico siguen siendo relevantes. Las guías de limpieza son respaldo, no instrucciones para manipular equipos, mirar una fibra activa o elegir un disolvente.

- Etiquetas, planos y resultados trazables acompañan certificación. Fluke cita 606A históricamente; no se afirma que sea edición vigente. FOA respalda reserva y diversidad física real, sin asegurar ausencia de fallos por dos rutas nominales.

- Se conserva la formulación completa de decibelio. NIST SP811 §8.7 HTML respalda relación logarítmica y necesidad de referencia; no se afirma lectura íntegra del PDF o IEC60027-3. IEEE se consulta para identificación de familias, no como lectura completa de normas.

## Límites de acceso y verificación

- La ruta inicial Hyper-V manage-live-migration no fue accesible; se usó la guía pública de diagnóstico de migración en vivo de Microsoft.

- La ruta NIST que añadía el título largo del capítulo 8 devolvió404; se localizó el capítulo 8 HTML real y se leyó §8.7. La página general de unidades no se usa como respaldo de la definición específica.

- La ruta separada RHEL9 de quorum agotó el tiempo de recuperación; se leyeron los apartados 1.2.1–1.2.2 en la edición HTML unificada.

- Dos rutas FOA propuestas, basic/intro.html e install/installation.html, no fueron accesibles. Se usaron sus páginas de fibra, cable, FAQ, limpieza y restauración con cuerpo público.

- RFC1242 devolvió429. No se cita como leído: el retardo de propagación y los parámetros físicos quedan respaldados por Fluke/FOA. No se repite agresivamente la solicitud.

- Las fuentes incluyen publicidad, navegación, login o ejemplos de comandos. Se lee texto público sin iniciar sesión, eludir controles o ejecutar procedimientos ajenos. No se convierten documentos del proyecto o PDF, ni se usa OCR.

- Revisión documental y de alternativas. Sin simular particiones reales, forzar fencing, migrar VMs, certificar cableado físico o manipular ópticas. Chrome comprueba la ficha, no la operación real o calibración pedagógica.

Se lee HTML público, incluidos apartados pertinentes tras índices o avisos. No se convierte ningún documento original o PDF, no se usa OCR ni se instalan dependencias. Los ejemplos y procedimientos externos son respaldo, no instrucciones para operar el proyecto.

## Métricas y revisión de forma

| Señal en estas 20 preguntas | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 5 | 7 |
| Acierto primera máxima (%) | 25.0 | 35.0 |
| Ratio 1,5–menos de 2 | 1 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 19 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera mínima es correcta en 4/20 (20 %); hay cuatro empates máximos. **La correcta única más larga sube de 5 a 7 y la primera máxima de 25 a 35 %**. Las siete diferencias son de 1–6 caracteres y sus ratios no superan 1,10; se revisan individualmente y se conservan en el registro. No se da por mejorada toda señal: se evita añadir relleno, cambiar claves o perseguir una cuota para ocultar el dato.

La revisión previa a generar el lote detectó que L7 tenía 2 caracteres y el distractor L4 explicado 31. Se mantienen el caso y las capas, abreviando las cuatro alternativas de forma paralela. La definición de decibelio se conserva íntegra por su precisión. Las alertas automáticas son prioridades, no certificados pedagógicos; no se ha calibrado dificultad.

La lectura final elimina de dos explicaciones notas sobre la conservación editorial del caso. El feedback se centra en el aprendizaje de L7 y decibelios. El registro conserva los dos ítems y el hash anteriores; enunciados, alternativas, fuentes y claves permanecen. No existía aprobación o aplicación.

## Validación

Resultados: **19 pruebas editoriales, 97 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho comandos con código 0. Simulación limitada a **20 IA**, con claves, IDs, procedencia y estados conservados y **60 explicaciones individuales de distractores**. Veinte hashes históricos de procedencia IA preservados sin aceptar textos nuevos. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración comprobadas. **315 archivos protegidos intactos** y **162 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha final**, con captura del caso HTTP L7 inspeccionada y sin desbordamiento a 1280/390 px. El hash anterior se reconstruye exactamente con los dos ítems guardados; solo cambia su explicación de la correcta y su hash de contenido. Se repiten pruebas editoriales, JSON, Chrome e integridad tras el ajuste, conservando resultados anteriores. Se comprueban las fechas de las 23 referencias, las cuatro proporciones inversas y las siete diferencias de 1–6 caracteres registradas. La subida de 5→7 correctas únicas más largas y 25→35 % de primera máxima permanece declarada. No se convierte una alerta ausente en garantía pedagógica. No se fuerzan particiones/fencing, migran VMs o prueban enlaces físicos, ni se repite la suite HTTP del producto sin cambios. Los derivados mantienen contenido y fecha 03-11 del inicio; respecto de HEAD solo cambia fecha 26-10→03-11. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Las tres incidencias anteriores y aceptaciones pendientes mantienen abierto el cierre editorial.

Comandos desde la raíz, con Chrome/Playwright/marked ya disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_075_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_075.py
```

Chrome ha comprobado la ficha literal a 1280/390 px. No se fuerzan particiones/fencing, migran VMs, manipulan ópticas o certifica cableado físico. Aplicación y bancos no cambian; no se repite la [suite HTTP completa previa del 001 aplicado](../logs/gsi-editorial-001-revalidation-2026-10-30.json) para propuestas inactivas. La validación técnica no acepta textos ni calibra dificultad.

## Incidencias y cierre

Se conservan las tres incidencias activas anteriores, con correcciones propuestas pendientes de aprobación y aplicación: lotes 032 (XML), 054 (dependencias en normalización) y 055 (cota O(n)). Mantienen evidencia e impedimento de cierre; no se dan por corregidas en el banco activo.

Tras preparar 075: **20 aceptadas, 1.480 propuestas pendientes, 262 sin propuesta y 1.742 decisiones pendientes del propietario**. Se cubren 1.500/1.762 IDs sin duplicar. Las 128 incidencias IA originales mantienen propuesta: 15 aplicadas y 113 pendientes; no es resolución editorial. La cola preparada pendiente comprende 113 IA originales, 572 IA restantes y 795 manuales.

## Entrega y revisión manual

Creados: propuesta JSON, ficha, este informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados; se ha comprobado que mantienen contenido y fecha del inicio. Auxiliares y captura quedan en tmp. No hay conversiones nuevas o pendientes, OCR o dependencias nuevas.

Abre la ficha y contrasta migración/HA (T06-010–012), quorum/fencing (013), L7 y salud/reparto (014–016), sitios de recuperación (018), calidad/categoría/longitudes (T07-003–006), coaxial/fibra (007–012), certificación/reserva (016–017), decibelios (001) y familia Ethernet (T08-001), junto con cada distractor. La aprobación debe identificar el hash exacto; versiones y aceptaciones históricas no la sustituyen.

Ninguna propuesta se acepta, aplica, activa, retira, publica o fusiona; no se crea commit. Las 202 oficiales, bancos activos y documentos originales se preservan. Siguiente paso: revisión expresa y preparación de las 262 preguntas restantes manteniendo el estándar acordado.
