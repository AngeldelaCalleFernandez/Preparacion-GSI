# Preparación de GSI-EDITORIAL-007

Fecha: 26 de octubre de 2026. Base de trabajo: `e3e20ab879518c899806a70575eead28b3b35e6f`.

## Alcance y estado

Se preparan las posiciones 121–140 de `review_order`: las 13 incidencias IA originales aún sin propuesta y 7 manuales de Constitución. No se repiten IDs de los lotes anteriores. La [ficha antes/después](GSI_REVISION_LOTE_007.md) y la [propuesta JSON](../content/question-reviews/lote-007.json) reúnen las instantáneas, claves, razones, fuentes y hashes individuales.

Hash canónico: `5d1b4794a830cb8d15a910659fce5352509222fa045d74dd46ecb0b5594c250d`.

**20 propuestas pendientes; 0 aceptadas, 0 aplicadas y 0 retiradas.** La rúbrica representa la evaluación del asistente preparador, sin atribuirla al propietario ni a una revisión humana independiente. `after` es un destino propuesto, no una actualización del banco activo. Las aceptaciones históricas y la aprobación del piloto se conservan, sin aplicarlas a contenido nuevo.

Se conservan conceptos, IDs, claves, temas, dificultad orientativa y procedencia. Los bancos mantienen 959 manuales, 803 IA y 202 oficiales. Los lotes 002–006 conservan sus hashes y sus fichas e informes no se modifican.

## Criterio editorial y conservación

Hay 14 preguntas conceptuales y 6 aplicaciones: recuperación de configuración, degradación de interfaz, comparación de ofertas WAN, selección SD-WAN por SLA, survey WLAN y autorización Zero Trust. Son situaciones hipotéticas útiles para distinguir conocimientos próximos. La distribución no se impone como cuota ni acredita una clasificación global del banco.

Las siete manuales mantienen un enfoque conceptual. Cuatro conservan literalmente el enunciado y las cuatro alternativas: `MAN-GSI-P14-003`, `MAN-GSI-P14-007`, `MAN-GSI-P14-009` y `MAN-GSI-P14-010`. Su acción es `revise` porque reciben feedback y referencias nuevos que requieren aceptación propia; no se reescriben sus preguntas por obligación.

En `MAN-GSI-P14-001` se conservan enunciado y correcta, haciendo paralelos los distractores mediante notas de teoría del Estado. En `MAN-GSI-P14-004` se conserva Monarquía parlamentaria y se sustituye la combinación confusa «constitucional presidencialista» por una alternativa de monarquía ejecutiva. En `MAN-GSI-P14-008` se precisa desarrollo directo y se retira «en todo caso» de la alternativa de ley ordinaria.

Cada propuesta explica la correcta y cada uno de sus tres distractores. Las 60 explicaciones se vinculan a los IDs originales y mencionan contenido, sin depender del orden ni de las letras visibles de la sesión.

Precisiones destacadas:

- Un inventario operativo no se reduce a compra o IP; identifica activo, versión, ubicación, interfaces, gestión, dependencias y soporte. Recuperar configuración exige copias del estado aprobado y control de versiones, no una imagen de firmware o logs como sustitutos.
- Interfaz activa no equivale a interfaz sin degradación. Se distinguen contadores y estado operativo de configuración e inventario; los acumulados deben interpretarse por intervalos y con sus discontinuidades.
- Igual velocidad WAN no garantiza igual calidad o continuidad. Diversidad comercial no prueba independencia de rutas y dependencias físicas.
- Una WAN puede combinar underlays heterogéneos sin sumar automáticamente toda su capacidad para cada flujo. Las rutas estáticas facilitan control explícito, pero su mantenimiento crece con la topología; pueden usar tracking o automatización sin convertirse en aprendizaje dinámico.
- En el microcaso SD-WAN, B cumple los límites de 50 ms de latencia, 10 ms de jitter y 1 % de pérdida. A supera jitter. El coste solo desempata entre caminos admisibles según la política expresamente definida; no se presenta esa política como predeterminada universal.
- En 6 GHz se verifican reglas del país y compatibilidad real de AP y clientes. Wi-Fi 6 no garantiza soporte de 6 GHz. La Decisión 2021/1067 se lee junto a su modificación de 2025, sin trasladar a España toda la banda mundial ni datos regulatorios antiguos de un fabricante.
- Un survey debe estudiar capacidad, interferencias y ocupación, además de señal y cobertura. La proximidad al AP y un RSSI alto no descartan degradación.
- Zero Trust distingue autenticación, conectividad y autorización contextual con mínimo privilegio. LAN, VPN y MFA pueden aportar controles, pero no autorizan por sí solos acceso amplio.
- Defensa en profundidad combina capas y operación; duplicar un mismo producto mejora redundancia sin cubrir necesariamente sus mismos puntos ciegos. NAT no equivale a cifrado.
- PKI gestiona políticas, claves y ciclo de vida. Expiración no sustituye revocación, y emitir certificados no exige que la CA posea todas las claves privadas de usuarios.
- IPsec protege tráfico IP seleccionado por política en transporte o túnel; no es TLS, cifrado de almacenamiento ni protección Ethernet local. No se afirma que instalarlo cifre todo el tráfico.
- En Constitución se distingue titularidad de soberanía de representación y funciones de órganos, forma política de organización territorial, alcance del amparo de otras vías de tutela y desarrollo orgánico directo de cualquier mera afectación a un derecho.
- La objeción de conciencia del artículo 30.2 se incluye en el amparo en los términos del artículo 53.2, sin extender por ello todas las vías de tutela a todo el título I. Los principios rectores tienen la eficacia del artículo 53.3 y no se equiparan a normas sin efecto jurídico.

## Fuentes y límites de consulta

Se incluyen fuentes primarias con URL, localizador, versión o fecha comprobada y fecha real de consulta. Los respaldos finales se abrieron en NIST, IETF/RFC Editor, AWS, Cisco y BOE.

- **6 GHz:** la consulta del análisis de la Decisión 2021/1067 identificó la modificación **2025/913**, posterior a 2024/3157. Se abrieron ambas normas pertinentes en BOE y se comprobó la sustitución del artículo 4 y del anexo en 2025. EUR-Lex exigió JavaScript en una ruta explorada; no se declara lectura de esa página bloqueada.
- **Zero Trust:** el PDF final de NIST SP 800-207 dio timeout. Un borrador explorado estaba retirado y no se cita como vigente. El respaldo final es el documento oficial **NIST SP 1800-35, final de junio de 2025**, en formato web: *Executive Summary* y *Architecture and Builds*, figura 13 y política contextual/postura de dispositivo. Los productos de ese ejemplo no se convierten en requisitos de implementación.
- **PKI:** RFC 3647 en `.html` devolvió 429; el texto completo se abrió en la ruta oficial `/info/rfc3647/`. Los localizadores 4.4, 4.6 y 4.7 corresponden a apartados principales, distinguiéndolos de la numeración de la plantilla incluida en el RFC. No se recomiendan algoritmos criptográficos históricos.
- **Reserva orgánica:** se comprobó el **fundamento jurídico 7 de la STC 173/1998**, publicada en BOE el 18 de agosto de 1998. Se diferencia del contenido de las alegaciones y del voto particular. La Constitución se contrastó en el texto consolidado disponible, cuya ficha registra última actualización de 20 de mayo de 2026; cada pregunta señala los artículos concretos.
- Las guías Cisco incluyen versiones y fechas comprobadas. La FAQ de site survey de 2007 respalda principios de cobertura, capacidad e interferencia y se complementa con la guía RF de 18 de abril de 2024. No se recomiendan herramientas antiguas ni sus tablas de clientes como inventario actual.
- El documento de redes híbridas AWS aporta criterios de calidad, coste, seguridad y redundancia; no se convierten sus soluciones concretas en la única arquitectura WAN posible. Los valores del caso SD-WAN son inventados como supuesto didáctico explícito, no como metadatos o especificaciones de un producto real.

El [registro de preparación](../logs/gsi-editorial-007-preparation.json) conserva estas limitaciones. La extracción inicial de preguntas falló por salida cp1252 ante un carácter no representable; se repitió en UTF-8, sin modificar los bancos.

## Métricas antes y propuesta

Análisis 2.0.0 sobre estas 20 preguntas, con simulación en memoria.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 9 | 4 |
| Acierto al escoger primera alternativa de longitud máxima | 9/20 (45 %) | 4/20 (20 %) |
| Ratio 1,5–<2 entre correcta y distractor máximo | 2 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 20 | 0 |
| Feedback idéntico para acierto y error | 13 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de formulaciones absolutas en distractores | 13 | 0 |
| Preguntas con explicación individual de tres distractores | 0 | 20 |

Las señales orientan revisión, sin certificar calidad pedagógica ni calibración. No se cambia ninguna clave para ajustar letras o métricas. Se conserva la longitud desigual natural de las preguntas manuales ya adecuadas; no se rellenan opciones para fabricar simetría.

## Validación y reproducción

Se comprueban esquemas, hashes, claves, cuatro alternativas distintas, 60 explicaciones, referencias completas y reproducción de la ficha. La simulación debe producir exactamente 13 cambios IA y 7 manuales, cero oficiales, manteniendo todos los IDs y claves. Se verifica que no existen aceptaciones nuevas y que los archivos protegidos conservan sus hashes.

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-007.json --render docs/GSI_REVISION_LOTE_007.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

No se modifica código ni bancos activos. Se conserva la evidencia de la suite HTTP completa del piloto; no se presenta como una ejecución sobre estas propuestas. Para revisar, abrir la ficha y contrastar cada alternativa con su fuente. Las versiones pendientes no se incorporan a Entrenamiento ni Simulacros.

Resultado: **17 pruebas editoriales superadas**, 29 JSON y 21 esquemas validados, 1.964 estructuras de pregunta válidas y 19.251 comprobaciones de integridad sin errores técnicos. La documentación de la aplicación sigue sincronizada. El validador de referencias cubre cuatro bloques, 57 temas y los 37 Markdown del catálogo documental; una comprobación adicional verificó los 21 enlaces locales de la ficha, este informe y el plan.

La simulación confirmó exactamente 13 cambios IA y siete manuales, sin escribir en los bancos; conservó todos los IDs y claves. Las 60 explicaciones de distractores están presentes, la ficha se reproduce desde el JSON y los archivos protegidos mantienen sus hashes. Se rechazó una aceptación vacía y se confirmó que solo existe la aceptación histórica del lote 001. Las 202 oficiales siguen idénticas byte a byte tanto al commit actual como a la base de auditoría. La suite HTTP completa no se repitió porque este hito solo añade propuestas pendientes y documentación.

## Archivos, progreso y siguiente paso

Creados: `content/question-reviews/lote-007.json`, `docs/GSI_REVISION_LOTE_007.md`, este informe y `logs/gsi-editorial-007-preparation.json`.

Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los lotes anteriores, bancos activos, originales documentales, borradores IA y revisiones históricas se conservan. No se convierten documentos y no hay conversiones nuevas pendientes de este hito.

El progreso conjunto es **20 preguntas aceptadas y 120 propuestas pendientes**, con 1.742 decisiones pendientes de aceptación en total; 1.622 todavía no tienen propuesta de esta revisión. Las **128 incidencias IA originales tienen ahora propuesta**: 15 se aplicaron en el piloto y 113 siguen pendientes de aprobación. Tener propuesta no significa que estén resueltas o aceptadas.

Después se continúa por bloque y tema en la cola restante, priorizada por feedback y señales de longitud. Los lotes 002–007 requieren aprobación expresa por su hash antes de aplicarse. Ninguna propuesta nueva se aplica, activa, publica ni fusiona.
