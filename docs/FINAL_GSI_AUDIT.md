# Auditoría de la conversión a GSI A2

Fecha: **15 de septiembre de 2026**. Rama: `gsi-only-final`.

**Estado: implementación técnica utilizable; cierre editorial bloqueado.** Los 57 temas tienen apuntes completos y procedencia. Hay 959 preguntas activas, pero 40 temas no tienen ninguna activa y B1-T03 tiene 17. Las 803 preguntas generadas continúan pendientes. No se declara versión estable, publicación ni PR terminada.

Commit de referencia del código: `57ede4b3200cfc2f7e03501741852001373a3d13`. El informe se guarda en un commit posterior para poder citar una revisión existente; el identificador del commit que contiene esta auditoría se obtiene con `git log -1 --format=%H -- docs/FINAL_GSI_AUDIT.md`.

## Fuentes y documentos

Única raíz didáctica: [Drive autorizado](https://drive.google.com/drive/folders/1bmBgrybIUDyT1owpnooU8Oq5FH4wLrp2). El inventario contiene 139 registros de la estructura principal y 2338 elementos auxiliares (1906 archivos y 432 carpetas). El recorrido auxiliar registró 436 carpetas, incluidas sus raíces, y cero errores de listado. Inventariar un archivo no significa que se haya leído su contenido; se consumieron 50 documentos nativos de la estructura principal y se consultaron seis muestras auxiliares de índices/apoyo. No se identificó un banco de preguntas oficiales importable en lo consultado.

Control externo: [BOE-A-2025-26262, Anexo IX](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262). Los títulos y el orden de los 57 temas se comparan automáticamente contra su XML conservado. Distribución: bloque I 10, II 16, III 15 y IV 16. Las discrepancias del mapa auxiliar y el anterior catálogo de 55 temas están registradas en `data/gsi-map-review.json`.

| Fuente canónica | Documento | Revisión de origen |
| --- | --- | --- |
| SRC-GSI-B1-V21 | [GSI_A2 — BLOQUE I — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (10 temas)](https://docs.google.com/document/d/1G4Gpao0ou7tGmBQ1iTLtC2pWcljbIEezmsh5ZHFPXYg/edit) | 2026-08-24 |
| SRC-GSI-B1-REPASO | [GSI_A2 — BLOQUE I — RESUMEN MAESTRO DE REPASO (10 temas)](https://docs.google.com/document/d/1aa9J2Ilhwcn0K-Z_9yQ2QD12DCEbiSWaYZc3upXorWQ/edit) | 2026-08-21 |
| SRC-GSI-B2-V21 | [GSI_A2 — BLOQUE II — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (16 temas)](https://docs.google.com/document/d/12jkpwzH8m5VoljIVPRi_Ofvqr7I_VBpVNGV0wmHfOFk/edit) | 2026-08-21 |
| SRC-GSI-B2-REPASO | [GSI_A2 — BLOQUE II — RESUMEN MAESTRO DE REPASO (16 temas)](https://docs.google.com/document/d/1h7n4dFYafS_3VMuL55TnEuVKhqaTheUoL-thDFQSr9w/edit) | 2026-08-21 |
| SRC-GSI-B3-V21 | [GSI_A2 — BLOQUE III — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (15 temas)](https://docs.google.com/document/d/1eUTbZtV2Jj1Y8P_pjOP7Tk86chx1r9lPyLwuz3vBCec/edit) | 2026-08-21 |
| SRC-GSI-B3-REPASO | [GSI_A2 — BLOQUE III — RESUMEN MAESTRO DE REPASO (15 temas)](https://docs.google.com/document/d/1l0nl4fc451Tl3XB9XZ4LRLZGLZEJxUueQvaMZoF8gcA/edit) | 2026-08-21 |
| SRC-GSI-B4-V21 | [GSI_A2 — BLOQUE IV — APUNTES COMPLETOS V2.1 REVISADOS — ESTUDIO (16 temas)](https://docs.google.com/document/d/1FMunz530TBBQnal_ttMprrZVGQ19wLAFksnJgEpd1os/edit) | 2026-08-21 |
| SRC-GSI-B4-REPASO | [GSI_A2 — BLOQUE IV — RESUMEN MAESTRO DE REPASO (16 temas)](https://docs.google.com/document/d/1PRbZRedDj9j2D4jPlDODZUKkmbCqPWxMM4hhGhjcZIo/edit) | 2026-08-21 |

Se convirtieron **50 documentos**: ocho manuales/resúmenes, 38 cuadernos/solucionarios y cuatro guías. Se conservan nombres y estructura relativa. Los Google Docs originales permanecen en Drive; las capturas nativas JSON y el HTML estructural intermedio están en `documents/originals/gsi/`, fuera de Git. Se usó MarkItDown 0.1.7 sin plugins ni OCR. La exportación DOCX no estuvo disponible por el conector; se utilizó el contenido nativo con tablas y estilos de párrafo, sin inventar texto.

El registro conserva 99 intentos de conversión, incluidos reintentos. El último estado de los 50 documentos utilizados es convertido; ninguno de ellos queda pendiente de OCR. Las salidas diferentes existentes se rechazan para evitar sobrescrituras. Se comprueban los hashes de los 50 Markdown, de las 57 secciones de estudio completas y de sus HTML. No se afirma haber convertido los 1906 archivos auxiliares.

## Banco y cobertura

| Origen | Total | Activas | Pendientes |
| --- | ---: | ---: | ---: |
| Oficial identificable | 0 | 0 | 0 |
| Manual/curado del corpus | 959 | 959 | 0 |
| Generado a partir del corpus | 803 | 0 | 803 |
| **Total** | **1762** | **959** | **803** |

Se importaron 960 preguntas de los packs P14–P19 y se descartó una duplicada exacta, conservando ambos identificadores en el log. Las preguntas curadas conservan las claves de sus solucionarios; todas se cotejan automáticamente. La autoría generada tiene cuatro opciones distintas, una clave, explicación y sección íntegra de respaldo con SHA-256. No se presenta contenido generado ni curado como oficial.

| Bloque | Total | Activas | Pendientes |
| --- | ---: | ---: | ---: |
| B1 | 223 | 160 | 63 |
| B2 | 700 | 480 | 220 |
| B3 | 419 | 159 | 260 |
| B4 | 420 | 160 | 260 |

| Tema | Caracteres de apuntes | Fuente | Preguntas | Activas | Pendientes |
| --- | ---: | --- | ---: | ---: | ---: |
| [B1-T01](../content/topics/B1-T01.md) | 8459 | Sí | 22 | 22 | 0 |
| [B1-T02](../content/topics/B1-T02.md) | 4420 | Sí | 21 | 21 | 0 |
| [B1-T03](../content/topics/B1-T03.md) | 3011 | Sí | 20 | 17 | 3 |
| [B1-T04](../content/topics/B1-T04.md) | 5450 | Sí | 20 | 20 | 0 |
| [B1-T05](../content/topics/B1-T05.md) | 4010 | Sí | 23 | 23 | 0 |
| [B1-T06](../content/topics/B1-T06.md) | 4214 | Sí | 20 | 0 | 20 |
| [B1-T07](../content/topics/B1-T07.md) | 4801 | Sí | 20 | 0 | 20 |
| [B1-T08](../content/topics/B1-T08.md) | 17377 | Sí | 33 | 33 | 0 |
| [B1-T09](../content/topics/B1-T09.md) | 11258 | Sí | 20 | 0 | 20 |
| [B1-T10](../content/topics/B1-T10.md) | 10862 | Sí | 24 | 24 | 0 |
| [B2-T01](../content/topics/B2-T01.md) | 8495 | Sí | 80 | 80 | 0 |
| [B2-T02](../content/topics/B2-T02.md) | 6413 | Sí | 80 | 80 | 0 |
| [B2-T03](../content/topics/B2-T03.md) | 7239 | Sí | 20 | 0 | 20 |
| [B2-T04](../content/topics/B2-T04.md) | 6135 | Sí | 20 | 0 | 20 |
| [B2-T05](../content/topics/B2-T05.md) | 10372 | Sí | 20 | 0 | 20 |
| [B2-T06](../content/topics/B2-T06.md) | 6846 | Sí | 20 | 0 | 20 |
| [B2-T07](../content/topics/B2-T07.md) | 8204 | Sí | 20 | 0 | 20 |
| [B2-T08](../content/topics/B2-T08.md) | 6703 | Sí | 20 | 0 | 20 |
| [B2-T09](../content/topics/B2-T09.md) | 5679 | Sí | 80 | 80 | 0 |
| [B2-T10](../content/topics/B2-T10.md) | 5425 | Sí | 20 | 0 | 20 |
| [B2-T11](../content/topics/B2-T11.md) | 7154 | Sí | 20 | 0 | 20 |
| [B2-T12](../content/topics/B2-T12.md) | 6672 | Sí | 20 | 0 | 20 |
| [B2-T13](../content/topics/B2-T13.md) | 9389 | Sí | 20 | 0 | 20 |
| [B2-T14](../content/topics/B2-T14.md) | 6792 | Sí | 160 | 160 | 0 |
| [B2-T15](../content/topics/B2-T15.md) | 7423 | Sí | 20 | 0 | 20 |
| [B2-T16](../content/topics/B2-T16.md) | 13458 | Sí | 80 | 80 | 0 |
| [B3-T01](../content/topics/B3-T01.md) | 4159 | Sí | 20 | 0 | 20 |
| [B3-T02](../content/topics/B3-T02.md) | 4790 | Sí | 20 | 0 | 20 |
| [B3-T03](../content/topics/B3-T03.md) | 4088 | Sí | 20 | 0 | 20 |
| [B3-T04](../content/topics/B3-T04.md) | 4473 | Sí | 20 | 0 | 20 |
| [B3-T05](../content/topics/B3-T05.md) | 5196 | Sí | 20 | 0 | 20 |
| [B3-T06](../content/topics/B3-T06.md) | 4989 | Sí | 20 | 0 | 20 |
| [B3-T07](../content/topics/B3-T07.md) | 6007 | Sí | 20 | 0 | 20 |
| [B3-T08](../content/topics/B3-T08.md) | 3393 | Sí | 20 | 0 | 20 |
| [B3-T09](../content/topics/B3-T09.md) | 3950 | Sí | 20 | 0 | 20 |
| [B3-T10](../content/topics/B3-T10.md) | 4656 | Sí | 20 | 20 | 0 |
| [B3-T11](../content/topics/B3-T11.md) | 4459 | Sí | 139 | 139 | 0 |
| [B3-T12](../content/topics/B3-T12.md) | 4637 | Sí | 20 | 0 | 20 |
| [B3-T13](../content/topics/B3-T13.md) | 4254 | Sí | 20 | 0 | 20 |
| [B3-T14](../content/topics/B3-T14.md) | 4938 | Sí | 20 | 0 | 20 |
| [B3-T15](../content/topics/B3-T15.md) | 7459 | Sí | 20 | 0 | 20 |
| [B4-T01](../content/topics/B4-T01.md) | 5772 | Sí | 20 | 0 | 20 |
| [B4-T02](../content/topics/B4-T02.md) | 4898 | Sí | 20 | 0 | 20 |
| [B4-T03](../content/topics/B4-T03.md) | 4266 | Sí | 20 | 0 | 20 |
| [B4-T04](../content/topics/B4-T04.md) | 5167 | Sí | 20 | 0 | 20 |
| [B4-T05](../content/topics/B4-T05.md) | 4392 | Sí | 20 | 0 | 20 |
| [B4-T06](../content/topics/B4-T06.md) | 4096 | Sí | 20 | 0 | 20 |
| [B4-T07](../content/topics/B4-T07.md) | 3751 | Sí | 20 | 0 | 20 |
| [B4-T08](../content/topics/B4-T08.md) | 3587 | Sí | 20 | 0 | 20 |
| [B4-T09](../content/topics/B4-T09.md) | 3689 | Sí | 20 | 0 | 20 |
| [B4-T10](../content/topics/B4-T10.md) | 3191 | Sí | 20 | 0 | 20 |
| [B4-T11](../content/topics/B4-T11.md) | 3540 | Sí | 20 | 0 | 20 |
| [B4-T12](../content/topics/B4-T12.md) | 4868 | Sí | 20 | 0 | 20 |
| [B4-T13](../content/topics/B4-T13.md) | 3821 | Sí | 20 | 0 | 20 |
| [B4-T14](../content/topics/B4-T14.md) | 3576 | Sí | 44 | 44 | 0 |
| [B4-T15](../content/topics/B4-T15.md) | 3712 | Sí | 64 | 64 | 0 |
| [B4-T16](../content/topics/B4-T16.md) | 8436 | Sí | 52 | 52 | 0 |

Los 41 temas deficitarios alcanzan al menos 20 solo al contar sus borradores. **No se utilizan esos borradores para afirmar cobertura validada.** El reporte JSON distingue cantidades activas y pendientes, texto de estudio, fuente y `minimum_met`.

## Calidad editorial

Se revisó una muestra estratificada de 58 preguntas de los cuatro bloques: 41 generadas y 17 curadas, con identificadores en `data/gsi-editorial-reviews.json`. Se registraron 120 correcciones individualizadas de distractores, redundancias y formulaciones; entre ellas, dos preguntas redundantes del bloque I, una afirmación de Java/.NET que necesitaba apoyo explícito y una formulación sobre UTC.

Se revisaron los 13 pares candidatos de los dos detectores de similitud. Se conservan las distinciones SOA/REST/PATCH, evento/artefacto Scrum, producto/servicio, diferencial/incremental, SLI/SLO, NAS/SAN, FEC/LSP, OSPF/BGP, Wi-Fi 6/7, autenticación general/biométrica y HDFS/NameNode. La justificación por par está en `logs/gsi-semantic-review.json`. No quedan enunciados idénticos normalizados; la detección semántica sigue siendo heurística.

El control de vigencia de normativa y tecnología está en [GSI_VIGENCIA.md](GSI_VIGENCIA.md). Kubernetes 1.37 requería un aviso de publicación posterior a la revisión del manual; se añadió sin sobrescribir el original. La dificultad de las preguntas generadas es orientativa, no calibrada con resultados de opositores. Las comprobaciones automáticas de formato, clave y hash no equivalen a una revisión humana de todo el banco.

## Funcionalidad y persistencia

Primer ejercicio: selección de 100 preguntas elegibles, 90 minutos, +1 / −1/3 / 0, corrección con aciertos, errores, blancos y porcentajes. La selección distribuye por temas disponibles; no afirma una cuota oficial por bloque. No hay reservas ni transformación a la nota del tribunal. La cobertura incompleta del banco limita su representatividad actual.

Segundo ejercicio: cuatro simulacros y ocho supuestos A/B, cinco preguntas, 180 minutos, esquema, guardado y autocorrección con rúbrica 30/10/5/5. Ocho solucionarios trazados. Biblioteca de 42 entradas: 38 documentos locales y cuatro carpetas A1 etiquetadas como apoyo, no como simulacros GSI. La rúbrica es autoevaluación; no hay calificación automática del texto libre.

Entrenamiento por tema/bloque/mixto, errores y no vistas; refuerzo e historial GSI. El temporizador guarda plazos absolutos y resiste recargas. La práctica escrita conserva una sesión actual: se debe exportar antes de sustituirla.

Identidad única `OPP-GSI / SYL-GSI-2025`. Las claves lógicas `gsi.*` usan almacenamiento versionado `oposiciones.OPP-GSI.SYL-GSI-2025.*.v2`; la práctica usa `gsi.OPP-GSI.SYL-GSI-2025.written.v1`. No se copian claves TAI ni datos sin identidad GSI. Exportación/importación valida identidades, preguntas, referencias, opciones, sesiones, plazos y rúbrica; el reinicio afecta exclusivamente al progreso GSI. Se admite el estado nulo de una sesión borrada y se intenta revertir cualquier escritura parcial que falle.

## Exclusión del producto anterior

`archive/tai-before-gsi/` conserva datos, contenidos, pruebas, instrucciones y scripts de la aplicación anterior. `archive/gsi-migration-scripts/` conserva herramientas de migración de una sola ejecución. No se ejecutan desde sus ubicaciones archivadas. Los planes `PLAN_*`, los informes antiguos de fases/M0–M3, `data/protected-artifacts.json`, `data/conversion_report.json`, documentos anteriores y fuentes técnicas históricas permanecen como evidencia fuera del runtime.

La búsqueda global `rg -i "\bTAI\b|33 temas"` se registra con archivo, línea, texto y clasificación en `logs/gsi-legacy-review.json`: 399 líneas encontradas en esta ejecución, 0 sin clasificar. Las coincidencias corresponden a historia conservada, pruebas de rechazo/aislamiento o controles de exclusión. Los activos `index.html`, `review.html`, `assets/`, los 57 temas y sus HTML no contienen TAI ni marcadores TODO/FIXME. No se han borrado originales para limpiar búsquedas. El inventario no enumera archivos ignorados ni se escanea recursivamente su propio log.

## Validación reproducible

Comando único: `python scripts/run_gsi_suite.py`. Requisitos y alternativa para Playwright en [README](../README.md). La suite ejecuta las pruebas actuales; los validadores archivados con programas congelados anteriores se conservan como historia, no se hacen pasar por pruebas de esta versión.

| Comprobación | Resultado |
| --- | --- |
| JSON contra esquemas | 18 archivos, 16 esquemas; 0 errores |
| Referencias | 4 bloques, 57 temas, 21 documentos del catálogo de fuentes; 0 errores |
| Integridad de preguntas | 1762 preguntas; 0 errores de estructura |
| Validador final | 16607 controles correctos; 0 errores técnicos; 1 bloqueo editorial; código 2 |
| Sintaxis JavaScript | 37 módulos/archivos comprobados; 0 errores |
| Unitarias GSI | 76 aprobadas; 0 fallidas |
| Regresión en navegador | 288 aprobadas; 0 fallidas |
| Recorrido funcional HTTP | 72 comprobaciones aprobadas; 0 fallidas; 0 errores de consola o rutas HTTP rotas |
| Suite completa | `technical_pass: true`, `release_ready: false`, código 2 |

| Regresión mantenida | Aprobadas | Fallidas |
| --- | ---: | ---: |
| phase4 | 9 | 0 |
| phase5 | 24 | 0 |
| phase6 | 64 | 0 |
| phase7 | 45 | 0 |
| phase7b2 | 50 | 0 |
| m2 | 35 | 0 |
| m3 | 61 | 0 |

Las unitarias verifican, entre otros casos, 50 aciertos + 30 errores + 20 blancos = 40 puntos, todo correcto = 100 y todo incorrecto = −100/3; exclusión de preguntas pendientes, inactivas, ficticias y de otra oposición; los 57 filtros; recuperación del progreso y rúbrica sin claves extra.

El recorrido se ejecutó con Chrome sin interfaz, bajo `/gsi-test/`, en escritorio 1365×900 y móvil 390×844. Abrió los 57 apuntes, probó los 57 filtros (17 temas con respuesta y 40 con indisponibilidad explícita), cuatro bloques, mixto, errores, no vistas, simulacro completo, corrección, estadísticas/refuerzo, expiración y recarga de los dos temporizadores, autoevaluación escrita, exportación/reinicio/importación, navegación por teclado y la vista editorial sin mutaciones. Se inspeccionaron capturas de escritorio y móvil. No equivale a ejecutar test de contenido en los 40 temas todavía bloqueados.

## Incidencias corregidas y límites

- Se corrigieron el catálogo antiguo de 55 temas, rótulos auxiliares imprecisos y referencias a la aplicación previa.
- Se unificaron las versiones de importación de módulos para evitar instancias distintas del adaptador de persistencia.
- Se sustituyó una comprobación textual de HTML que confundía texto legítimo con URLs peligrosas por el análisis estructural seguro existente.
- Se corrigieron restauración de sesiones borradas, referencias inválidas importadas, aceptación de puntuaciones extra, caducidad y cronología de sesiones.
- Las primeras regresiones fallaron por contratos congelados (33 temas, GSI inactivo y claves antiguas). Se adaptaron a los contratos GSI conservando pruebas de puntuación, aislamiento y seguridad. El log inicial se conserva en `logs/gsi-regression-initial.json`.
- Se corrigió una expectativa del recorrido que buscaba un número donde la interfaz muestra «No hay preguntas activas». El estado vacío se prueba sin introducir preguntas pendientes.
- La descarga DOCX y el lanzador de MarkItDown no fueron utilizables; se completaron las conversiones con contenido nativo y la API Python de MarkItDown, sin OCR.
- La revisión automática de permisos rechazó la activación masiva sin revisión humana independiente. Los 803 borradores permanecen inactivos y se ha dejado la decisión pendiente al propietario; no se ha simulado una autorización.
- No hay publicación GitHub Pages ni PR de cierre porque la condición exigida por el usuario —todas las comprobaciones verdes— todavía no se cumple. La compatibilidad HTTP estática y con subruta sí está probada localmente.

## Archivos entregados y siguiente paso

Principales archivos creados: `scripts/validate_gsi_final.py`, `scripts/run_gsi_suite.py`, importadores/compiladores GSI, `assets/js/written-practice.js`, `assets/js/progress-backup.js`, `assets/js/training-engine.js`, `assets/js/editorial-review.js`, `review.html`, los manifiestos `data/gsi-*`, los tres tests `tests/gsi-*.mjs`, 50 conversiones, 57 Markdown/HTML y la documentación actual. Se modificaron `index.html`, estilos, módulos existentes, catálogos, fuentes, bancos, esquemas, pruebas de regresión y `AGENTS.md`. El detalle de Git se obtiene comparando con `a8e2471`.

Fase técnica completada: conversión, datos, aplicación, exámenes, refuerzo y documentación verificable. **Fase de versión estable pendiente:** resolver la revisión editorial del lote, regenerar solo aceptaciones válidas, repetir la suite y publicar/preparar PR únicamente con código 0. No faltan documentos canónicos por convertir; la limitación pendiente es la cobertura validada del banco.

Comprobación adicional de conservación: los 20 scripts trasladados coinciden con su revisión anterior (normalizando finales de línea), sin pérdidas; cero coincidencias de los patrones de credenciales comprobados entre archivos versionados y no ignorados. Evidencia en `logs/gsi-preservation-check.json`. Se retiró una línea vacía sobrante al final de la copia histórica de instrucciones; el original permanece en el historial Git.
