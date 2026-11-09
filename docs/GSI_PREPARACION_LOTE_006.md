# Preparación de GSI-EDITORIAL-006

Fecha: 26 de octubre de 2026. Base de trabajo: `e3e20ab879518c899806a70575eead28b3b35e6f`.

## Alcance y estado

Se preparan las posiciones 101–120 de `review_order`: 20 preguntas IA entre las 128 incidencias originales, sin repetir IDs de los lotes anteriores. La [ficha antes/después](GSI_REVISION_LOTE_006.md) y la [propuesta JSON](../content/question-reviews/lote-006.json) conservan las instantáneas, razones, fuentes y hashes individuales.

Hash canónico: `9065eb3b901d847ac95da07b88cb5edbd9b25315b8fbeacb6ec3bc7aaeda800d`.

**20 propuestas pendientes; 0 aceptadas, 0 aplicadas y 0 retiradas.** La rúbrica expresa la evaluación del asistente preparador, sin presentarla como revisión humana independiente ni calibración. `after` describe una versión propuesta, sin cambiar el banco activo. Las aceptaciones históricas y la aprobación del piloto no se trasladan a las propuestas nuevas.

Se conservan conceptos, IDs, claves, temas, dificultad orientativa y procedencia original. Los bancos continúan con 959 manuales, 803 IA y 202 oficiales. Los lotes 002–005 y sus artefactos conservan sus hashes.

## Decisiones editoriales

Hay 14 preguntas conceptuales y 6 aplicaciones: capacidad de almacenamiento, pérdida del CPD, dependencias durante un ensayo DR, caudal TCP, presupuesto PoE y selección del medio para AP. Los datos numéricos son supuestos explícitos, sin atribuir especificaciones ficticias a equipos reales. La proporción describe el resultado editorial, sin imponer cuotas al lote ni dar por clasificado todo el banco.

Se conserva el enunciado directo sobre cableado estructurado y el concepto de las preguntas que ya estaban bien orientadas. Se sustituyen opciones ajenas al tema por errores cercanos al conocimiento evaluado. Las cuatro alternativas de observabilidad utilizan forma verbal paralela. Cada pregunta explica la correcta y el error concreto de sus tres distractores mediante sus IDs originales; el feedback no depende de letras visibles ni del orden de presentación.

Precisiones destacadas:

- La observabilidad requiere proteger datos y gestionar retención, coste y disponibilidad de colectores y repositorios. Un dashboard protegido no cubre toda la cadena; vigilar un nodo desde sí mismo no elimina su fallo común.
- NAS, SAN y objetos se distinguen por la interfaz presentada al cliente. Una cabina multiprotocolo puede ofrecer varios modelos. No se exige que toda SAN utilice Fibre Channel ni una red físicamente exclusiva, ni se prohíben pasarelas de archivos sobre objetos.
- La capacidad del supuesto parte de 80 TB después de RAID y reservas básicas. Los 10 TB de snapshots y 15 TB de crecimiento son adicionales y no se solapan: quedan 55 TB para datos actuales. Se distingue el presupuesto de planificación de la capacidad física útil.
- El dimensionamiento del CPD incluye restricciones eléctricas, térmicas, mecánicas y de espacio y conectividad. No se trasladan valores de un servidor histórico a cualquier instalación.
- Los escenarios de agua, climatización y energía se distinguen de amenazas lógicas. Se respetan las condiciones de aplicación de cada medida ENS; el refuerzo contra agua no se impone por igual a todos los niveles.
- La recuperación ante pérdida de sitio necesita un dominio no afectado y sus dependencias. Esto no limita DR a desastres físicos. Si la estrategia prevé volver al entorno habitual, debe ensayarse el failback con datos coherentes; no se exige retorno inmediato o automático.
- Arrancar aplicación y base de datos no acredita recuperación de DNS, conectividad, identidad, certificados o servicios externos. El ensayo debe probar acceso y operación de usuarios.
- Un caudal TCP menor que la velocidad nominal no confirma por sí solo la causa. Deben considerarse sobrecarga, retransmisiones, ventanas, latencia y límites de equipos.
- Multimodo es habitual en corto alcance, sin una distancia universal ni exclusividad frente a monomodo. La compatibilidad óptica incluye fibra, longitudes de onda y límites de recepción; no basta encajar un conector. Se evita afirmar daño físico por sobrecarga sin un límite de daño comprobado.
- La propagación satelital se distingue de serialización, colas y procesamiento. Órbita, geometría y saltos afectan a la distancia; la etiqueta GEO/LEO no determina por sí sola toda la latencia de un servicio.
- Microondas requiere estudiar obstáculos, línea de vista y Fresnel. Se usa P.530-19, sin convertir un porcentaje de despeje en regla universal.
- En PoE se contrastan límite individual y presupuesto global. Cuatro asignaciones de 20 W en la salida PSE suman 80 W y no caben en 60 W, aunque cada puerto admita 30 W. No se confunde potencia asignada con consumo final del dispositivo.
- La categoría del cable no determina por sí sola el comportamiento térmico: importan conductores, corriente, mazo y ambiente. La fibra por sí sola no aporta alimentación PoE; seleccionar el medio requiere considerar cómo alimentar el extremo.
- Un switch multicapa puede combinar conmutación MAC L2 y encaminamiento IP L3 según configuración. Una VLAN o troncal no crea por sí misma routing, y NAT no aparece automáticamente.

## Fuentes y límites de consulta

Cada propuesta incluye URL primaria, localizador, versión o fecha identificable y fecha real de comprobación. Los respaldos finales se abrieron en OpenTelemetry, AWS, Seagate, NetApp, Lenovo, BOE, Microsoft, IETF, Cisco, Panduit, ESA y UIT.

Se registran los recursos explorados que no pudieron leerse y el respaldo final elegido:

- IBM devolvió 403 en documentación de preparación física y en el PDF POWER7. El PDF HPE dio *cache miss* y su ruta abreviada, 404. No se usan como respaldo final. El PDF Lenovo SR950 de 31 de enero de 2019, capítulo 4, aporta dimensiones, peso, energía y refrigeración; CPwE aporta conectividad y crecimiento. Se usan como principios de planificación, sin recomendar equipo o umbrales de 2019.
- Un PDF Panduit de cableado devolvió 404 y otro excedió el límite web con 11.856.616 bytes. No se utilizan. Los apartados pertinentes se contrastaron en la guía primaria abierta Cisco/Panduit/Rockwell *Physical Infrastructure for CPwE*, febrero de 2023.
- La ruta HTML NetApp explorada no fue accesible. El PDF primario ONTAP 9 *Manage the snapshot reserve*, generado el 19 de mayo de 2026, abrió y permitió comprobar reserva y consumo, pp.1–2. No se impone su porcentaje predeterminado a otros productos.
- Para microondas se exploró el informe marítimo ITU-R M.2202 de 2010. El respaldo final es la recomendación vigente **UIT-R P.530-19**, septiembre de 2025, con modificaciones formales en 2026; se abrió el PDF español y se contrastó el anexo, §2.2, difracción y despeje.
- El PDF ESA *Advancing Automotive Connectivity* excedió el límite web con 12.741.911 bytes, y CEPT ECC Report 280 devolvió 502. No se depende de ellos. Se abrieron ESA *Types of orbits* y RFC 2488, §2, que respalda la explicación física de propagación. No se reutilizan las recomendaciones TCP de 1999 como configuración actual.
- Panduit COTB05 de octubre de 2018 respalda principios térmicos, sin universalizar sus ensayos ni tablas. La ficha Cisco de ópticas, actualizada en junio de 2024, ofrece parámetros de sensibilidad y sobrecarga sin recomendar un módulo concreto.
- CPwE contiene predicciones antiguas sobre Wi-Fi que no se utilizan. Se citan selección de medios, infraestructura física y alimentación. Las guías de recuperación de fabricantes apoyan conceptos y dependencias; no se convierten en normas españolas ni en objetivos universales de RTO/RPO.

El [registro de preparación](../logs/gsi-editorial-006-preparation.json) documenta los límites de consulta. No se declara lectura íntegra de los recursos bloqueados. La revisión del propietario debe incluir fuentes, localizadores y vigencia.

## Métricas antes y propuesta

Análisis 2.0.0 sobre estas 20 preguntas, simuladas en memoria.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 11 | 6 |
| Acierto al escoger primera alternativa de longitud máxima | 12/20 (60 %) | 7/20 (35 %) |
| Ratio 1,5–<2 entre correcta y distractor máximo | 3 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback idéntico para acierto y error | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de formulaciones absolutas en distractores | 20 | 0 |
| Preguntas con explicación de los tres distractores | 0 | 20 |

Las señales no acreditan calidad pedagógica ni dificultad calibrada. El 35 % no es un objetivo conseguido moviendo claves; todas las claves se conservan. El barajado del producto mantiene los IDs originales y asigna letras según la sesión.

## Validación y reproducción

Se valida el lote contra los esquemas y contra su contenido de partida; la simulación debe producir exactamente 20 cambios IA en memoria, cero manuales y cero oficiales. Se comprueban claves, opciones distintas, 60 explicaciones, fuentes completas, hashes, reproducción de la ficha, ausencia de nuevas aceptaciones y conservación byte a byte de los archivos protegidos.

Resultado: **17 pruebas editoriales, 28 JSON contra 21 esquemas, 1.964 preguntas estructuralmente válidas y 19.251 controles de integridad correctos**. Pasan también sincronización de documentación y referencias del catálogo (37 Markdown). Se comprueban aparte los 19 enlaces relativos de las fichas nuevas y el plan, porque el validador de catálogo no cubre por sí solo esos informes.

La comparación adicional confirma exactamente 20 cambios IA en la simulación, cero cambios activos y conservación de todos los IDs y claves. El banco oficial coincide byte a byte con Git y con el hash auditado. Manuales e IA mantienen sus hashes del inicio del hito; su comparación con Git normaliza CRLF/LF únicamente en memoria. La aceptación ausente se rechaza y no existen aprobaciones de los lotes 002–006.

```powershell
.\.venv\Scripts\python.exe -B scripts/editorial_batches.py --batch content/question-reviews/lote-006.json --render docs/GSI_REVISION_LOTE_006.md
.\.venv\Scripts\python.exe -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -B scripts/validate_json.py
.\.venv\Scripts\python.exe -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -B scripts/validate_references.py
git diff --check
```

No se modifica código ni banco activo. Se conserva la evidencia de la suite HTTP completa al aplicar el piloto; no se la presenta como una prueba sobre estas versiones pendientes. Para revisar el lote, abrir la ficha y contrastar cada alternativa con su fuente. Las propuestas no aparecen en Entrenamiento ni Simulacros.

## Archivos, progreso y siguiente paso

Creados: `content/question-reviews/lote-006.json`, `docs/GSI_REVISION_LOTE_006.md`, este informe y `logs/gsi-editorial-006-preparation.json`.

Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. No se alteran los artefactos de los lotes 001–005, los bancos, originales documentales, borradores IA ni aceptaciones históricas. No se convierten documentos y no hay conversiones nuevas pendientes de este hito.

El progreso conjunto es **20 decisiones aceptadas y 100 propuestas pendientes**, con 1.742 decisiones pendientes de aceptación en total; 1.642 todavía no tienen propuesta de esta revisión. Quedan 13 incidencias de la cola IA original sin propuesta, además de las preguntas posteriores. La revisión de las 1.762 no está completa ni calibrada.

Los lotes 002–006 requieren aprobación expresa por hash antes de aplicarse. Ninguna propuesta nueva se aplica, activa, publica ni fusiona.
