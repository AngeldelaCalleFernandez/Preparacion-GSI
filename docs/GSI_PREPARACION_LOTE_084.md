# Preparación de GSI-EDITORIAL-084

Fecha: 4 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `05c6f0c1caeaebef2f022a55f810911cc5c7d7170fcbd4fedf526777dc7bf5e6`.

## Alcance y decisiones

Posiciones 1661–1680 de la cola: veinte manuales B4-T15, práctica 19 (056–059,061–074,077–078). Se mantienen IDs, conceptos, claves, dificultad orientativa, estados y procedencia original. No hay sustituciones o retiradas por cambio de significado o clave. Las preguntas oficiales y los bancos activos permanecen al margen de estas propuestas.

Catorce conceptuales y seis aplicaciones: 057/058/066/070/074/078. Los casos permiten interpretar latencia de aplicación remota, evaluar respaldo, reconocer dos despliegues SA/NSA, identificar transferencia de conexión, comprobar cobertura interior y valorar proximidad de procesamiento. La distribución describe el resultado; no se impone cuota por lote.

Se conservan **once enunciados**, **doce textos de correcta** y **cuatro preguntas con sus alternativas completas**: 067 (slicing), 071 (roaming), 072 (handover frente a roaming) y 073 (núcleo móvil). Se aprovechan sus distinciones sólidas y se amplía feedback. En las más débiles se sustituyen opciones ajenas al concepto por arquitecturas, mecanismos o evaluaciones próximas, sin relleno para equilibrar longitudes.

Cada ítem incluye explicación de la correcta y tres justificaciones por contenido e ID original. Funcionan con cualquier orden visible. Se conserva la clave de todas las preguntas; no se redistribuyen letras para aparentar azar.

[Ficha antes/después](GSI_REVISION_LOTE_084.md) · [Propuesta JSON](../content/question-reviews/lote-084.json) · [Registro](../logs/gsi-editorial-084-preparation.json).

La rúbrica expresa juicio documental del preparador y sigue pendiente de aceptación del propietario. No es revisión humana independiente ni calibración estadística. No hay nuevas preguntas IA o cambios en sus aceptaciones históricas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Enunciado y opciones conservados |
| --- | :---: | --- | :---: | :---: |
| MAN-GSI-P19-056 | B | Conceptual | Sí | No |
| MAN-GSI-P19-057 | B | Aplicación | No | No |
| MAN-GSI-P19-058 | C | Aplicación | No | No |
| MAN-GSI-P19-059 | A | Conceptual | Sí | No |
| MAN-GSI-P19-061 | A | Conceptual | Sí | No |
| MAN-GSI-P19-062 | C | Conceptual | Sí | No |
| MAN-GSI-P19-063 | C | Conceptual | Sí | No |
| MAN-GSI-P19-064 | A | Conceptual | No | No |
| MAN-GSI-P19-065 | B | Conceptual | No | No |
| MAN-GSI-P19-066 | C | Aplicación | No | No |
| MAN-GSI-P19-067 | D | Conceptual | Sí | Sí |
| MAN-GSI-P19-068 | A | Conceptual | No | No |
| MAN-GSI-P19-069 | C | Conceptual | Sí | No |
| MAN-GSI-P19-070 | B | Aplicación | No | No |
| MAN-GSI-P19-071 | B | Conceptual | Sí | Sí |
| MAN-GSI-P19-072 | B | Conceptual | Sí | Sí |
| MAN-GSI-P19-073 | D | Conceptual | Sí | Sí |
| MAN-GSI-P19-074 | A | Aplicación | No | No |
| MAN-GSI-P19-077 | D | Conceptual | Sí | No |
| MAN-GSI-P19-078 | D | Aplicación | No | No |

Todas las decisiones son pending_review. No se identifican nuevos errores confirmados de clave. Se precisan los límites de NSA EN-DC con EPC en 064–066, sin generalizar esa dependencia a todas las opciones de conectividad dual. Se retira la afirmación no respaldada sobre importancia de examen en 066. Se distingue en 070 conexión activa de reselección en reposo; 071–072 no exigen cambio de país y permiten handover dentro de la red visitada. Slicing y SBA se explican sin prometer aislamiento físico, autorización abierta o resolución automática de fallos.

## Fuentes y vigencia

**15 URLs primarias comprobadas el 04-11-2026: trece HTML y dos PDF de lectura seleccionada.** Se reutilizan tres consultas pertinentes de 083 del mismo día: radio NR/movilidad, VoLTE/SA-NSA y perfiles eSIM. Las otras doce fuentes se consultan para este lote. Se conservan los localizadores, versiones y fechas reales en cada propuesta, además de la procedencia original.

- Se reutilizan consultas pertinentes del04-11 de083: perfiles eSIM de Samsung, VoLTE/SA-NSA de Ericsson y TS38.300V18.8.0 para RAN y movilidad. No se atribuye nueva lectura íntegra ni nueva captura de esa norma.

- TS23.501V18.12.0 (2026-01): portada, índice y apartados seleccionados de funciones, arquitectura basada en servicios, roaming, edge y slicing; PDF1/10/34/42–45/47–48/53/251–254. Tres renders44/48/252 inspeccionados. No se atribuye lectura completa de723 páginas ni edición más reciente.

- La comparación NSA se acota a EN-DC con EPC, evitando identificar todas las opciones de conectividad dual con ese núcleo. SA se describe con NR/5GC y admite coexistencia o interfuncionamiento.

- SBA modulariza interacciones de funciones de control; no convierte cada flujo de usuario en una llamada de servicio, ni elimina autorización, supervisión o dependencias.

- Una slice es red lógica de capacidades específicas; puede compartir funciones e infraestructura y no es lo mismo que DNN, una VLAN o un conjunto exclusivo de antenas/SIM. Los identificadores S-NSSAI no son etiquetas VLAN.

- Handover transfiere una conexión; roaming diferencia red visitada y doméstica, con acuerdos y funciones de ambas. Pueden coexistir sin que itinerancia exija cambio de país o portabilidad.

- AT&T y Cisco aportan arquitectura histórica LTE/E-UTRAN/EPC; se excluyen cifras, previsiones de despliegue, posición de mercado y recomendaciones de configuración antiguas. Ericsson respalda VoLTE/IMS.

- BOE Ley11/2022: artículo85, no84, sobre dominio público;88.1 distingue regímenes. La consolidación indica actualización27-12-2025 y se comprueba04-11-2026. Solo contexto conceptual, sin bandas, competencias o títulos concretos inventados.

- El párrafo16 del código británico respalda influencia de frecuencias y densidad sobre cobertura/capacidad, sin trasladar normas de instalación. Ofcom respalda materiales y carácter predictivo del mapa, excluidas reglas británicas sobre repetidores.

- NCSC B5 aporta capacidad, diversidad y dependencias; RFC6598 ámbito de direcciones CGN. Ninguno demuestra continuidad de una sede, soporte de toda VPN o causa concreta de fallo; hay que probar el servicio requerido.

- ETSI MEC y TS23.501§5.13 describen proximidad y acceso local; latencia cero o ubicación en cada antena no se deducen. Microsoft define RTT y medición entre regiones, sin usar esos valores o P50 como latencia de aplicación o SLA móvil.

Dos originales auxiliares: TS38.300 procede de 083 y TS23.501 se descarga para 084. Cinco renders registrados: NR 26/90 reutilizados; núcleo 44/48/252 nuevos e inspeccionados visualmente. Las figuras de arquitectura, roaming y slicing delimitan funciones y compartición de recursos; no se atribuye lectura de las 723 páginas del núcleo o condición de última edición.

| Original auxiliar | Páginas | Páginas PDF leídas | SHA256 |
| --- | ---: | --- | --- |
| tmp/pdfs/gsi-editorial-083-etsi-138300-v180800.pdf | 274 | 1, 25, 26, 27, 31, 75, 77, 78, 89, 90, 91 | `ba5532ad3cf005b7d7267a1925b2f41160eb09d5d60eda78df223e4c53320711` |
| tmp/pdfs/gsi-editorial-084-etsi-123501-v181200.pdf | 723 | 1, 10, 34, 42, 43, 44, 45, 47, 48, 53, 251, 252, 253, 254 | `2ef71f81a87c86967dc623741b5a3479338844661067a3bb13089fffe6fed2ac` |

Respaldo adicional de portabilidad: Ley11/2022, artículo33.1, comprobado04-11-2026. La conservación del número al cambiar de proveedor es distinta de transferir la conexión entre celdas o de usar una red visitada. Se conserva también la procedencia original.

## Límites y preparación

- La búsqueda indexada con número de versión no localizó TS23.501 pertinente. Se navega por el directorio público de ETSI y se abre la edición18.12, sin inferirla de resultados no relacionados o citar éstos como fuente.

- Microsoft muestra un aviso genérico de autorización, pero los apartados públicos de RTT y medición se leen en HTML. No se accede a contenido protegido ni se usan valores de la tabla como garantía de servicio.

- La nota de Northern Ireland sobre redes contiene una generalización de frecuencias5G frente a4G; no se utiliza. Se selecciona el párrafo16 del código británico y la explicación Ofcom de materiales/mapas para el alcance físico comprobado.

- Sin nuevas incidencias de descarga: original público ETSI obtenido correctamente con red autorizada, tras constatar en081 que el DNS restringido no permitía consultas equivalentes. Sin revisión de permisos rechazada.

- No hay medidas reales WAN/radio, llamadas, cambios de operador, configuración móvil, simulación de fallos, calibración o revisión humana independiente. Lectura de fuentes sin conversiones a Markdown, OCR o dependencias nuevas.

Una búsqueda auxiliar con rg y comodín literal de PowerShell terminó con error de ruta; se repitió correctamente con el filtro -g. Se registra como incidencia de inspección, sin confundirla con una prueba del proyecto. No hubo fallos de descarga o rechazo de revisión de permisos en este lote. Los apartados públicos y las fuentes seleccionadas se distinguen de candidatos o previsiones no utilizados.

No se convierten documentos, no hay conversiones nuevas pendientes, OCR, instalaciones o dependencias añadidas. Se conservan originales y doce borradores previos. No se realizan mediciones reales de cobertura, cambios de operador o instalación de equipos.

## Métricas antes/después

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 11 | 9 |
| Acierto primera máxima (%) | 55.0 | 50.0 |
| Ratio 1,5 a menos de 2 | 4 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 20 | 0 |
| Feedback correcto/incorrecto idéntico | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera máxima pasa 55→50% y la correcta única más larga 11→9. Los cuatro ratios 1,5–menos de 2 pasan a cero y el feedback breve 20→0. Esto no acredita ausencia de pistas o calidad pedagógica automática: la primera máxima continúa por encima del azar teórico de cuatro alternativas. Se registra un empate de máxima, en 068, donde A y D miden 91 caracteres. Primera mínima correcta: 5/20, también contando empates; el máximo ratio inverso es 58/46 en 063.

Las nueve correctas únicas más largas difieren de su distractor máximo en 1–25 caracteres; el mayor ratio es 125/100 en 073, conservada completa por su distinción entre funciones del núcleo, acceso, transporte y aplicación. Las cuatro preguntas completas conservadas se justifican por contenido, sin alterar su clave o alargar distractores. El registro recoge todas las dimensiones exactas. La dificultad sigue orientativa; la calibración permanece pendiente.

Una revisión interna añade exclusivamente respaldo BOE artículo33.1 a los distractores de portabilidad de070/071. Hash inicial `8bbfe71cd8ae757efa30a12d65d28687b7e671c08914f85dc4308e761c4288d8`, conservado junto con los dos ítems anteriores para reconstruir esa versión. No cambian enunciados, alternativas, feedback, claves o decisiones, y no existía aprobación de la versión inicial. El hash vigente figura al inicio. Las primeras comprobaciones técnicas se conservan como preliminares y se han repetido sobre esta versión final. Cualquier cambio posterior de textos, feedback o respaldo debe regenerar hashes y obtener su aceptación específica. Ninguna aceptación de otro lote autoriza éste.

## Validación y archivos

Resultados de la versión final: **19 pruebas editoriales, 106 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Ocho comandos finales con código 0, separados de los ocho preliminares de la versión inicial. Documentación, referencias y progreso sincronizados. Simulación en memoria de **20 manuales**, conservando IDs, claves, estados y procedencia; **60 explicaciones de distractores** comprobadas. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración verificadas. **351 archivos protegidos intactos**, doce borradores conservados y **180 enlaces locales existentes**.

**Diez comprobaciones Chrome correctas**, sin desbordamiento a 1280/390 px; captura de handover inspeccionada. Once enunciados, doce textos correctos y cuatro preguntas completas conservados. Quince referencias con métodos y fechas declarados; dos originales PDF con hash comprobado y cinco renders registrados, tres nuevos y dos reutilizados. Hash inicial reconstruido exactamente: las únicas modificaciones internas son dos listas de referencias y sus hashes de contenido. Sin fallos de la suite mantenida o reparaciones de verificadores; la incidencia de búsqueda auxiliar se documenta aparte.

Derivados con contenido y fecha 04-11 iguales al inicio; frente a HEAD solo cambia fecha 26-10→04-11. Bancos activos iguales a HEAD y 202 oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, publicación, fusión o commit. No se repite el recorrido HTTP de producto o un laboratorio móvil/WAN real. Las tres incidencias anteriores y las decisiones pendientes mantienen abierto el cierre editorial.

Archivos creados: content/question-reviews/lote-084.json; docs/GSI_REVISION_LOTE_084.md; este informe; logs/gsi-editorial-084-preparation.json. Auxiliares de edición, preparación, consulta, comprobación y ficha en tmp/. Se actualizan docs/GSI_MEJORA_TESTS.md y logs/gsi-editorial-progress.json; los validadores regeneran sus informes derivados. No se modifica código de aplicación, bancos publicados, borradores IA o aceptaciones históricas. La aplicación de las propuestas se simula exclusivamente en memoria.

Para reproducir: `.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py`; con el mismo intérprete, `scripts/validate_json.py`, `scripts/validate_questions.py`, `scripts/validate_documentation.py`, `scripts/validate_references.py`, `scripts/editorial_progress.py` y `scripts/validate_gsi_final.py`. Ficha: `& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_084_browser.mjs`. Comprobación específica: tmp/validate_editorial_084.py. No reejecutar generadores que protegen salidas existentes.

Chrome ha comprobado la ficha a 1280 y 390 px con conexiones externas bloqueadas; no es una prueba semántica o recorrido HTTP nuevo de Entrenamiento, Simulacros, estadísticas o Refuerzo. Las pruebas de aplicación del piloto siguen registradas en [revalidación del 30-10](../logs/gsi-editorial-001-revalidation-2026-10-30.json). No se presentan resultados de laboratorio móvil o de medidas que no se han realizado.

## Progreso y siguiente paso

20 aceptadas y aplicadas; **1660 propuestas pendientes**, **82 sin propuesta** y **1742 decisiones humanas pendientes**. Los lotes 002–084 cubren 113 incidencias IA originales, otras 674 IA y 873 manuales. Incluido el piloto, 1680 IDs tienen ficha; tener propuesta no equivale a aceptación o resolución en el banco activo.

Siguen abiertas las tres incidencias confirmadas en versiones activas anteriores: MAN-GSI-P18-026 (032), AI-GSI-B3-T04-004 (054) y AI-GSI-B3-T05-002 (055). Sus correcciones esperan aprobación y aplicación; impiden cierre editorial y no se alteran sin autorización.

Siguiente fase: revisión del propietario sobre este hash y preparación de las próximas preguntas de la cola con la misma rúbrica. Aplicar, activar o publicar requiere aprobación expresa vinculada al contenido exacto. No se crea commit, publicación o fusión para estas propuestas pendientes.
