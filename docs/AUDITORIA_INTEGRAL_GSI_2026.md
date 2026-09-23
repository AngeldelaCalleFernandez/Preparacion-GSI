# Auditoría integral de Preparación GSI A2 — 23/09/2026

## Resultado ejecutivo

La aplicación sigue siendo técnicamente utilizable y cubre los 57 temas del programa de GSI A2 de ingreso libre. La auditoría no encontró un error P0 demostrado en las normas y conceptos temporales contrastados, pero sí un P1 editorial grave en el banco curado: la respuesta correcta era la alternativa más larga en el 87,8 % de sus 959 preguntas, frente al 33,7 % de las 202 preguntas oficiales.

Se retiraron 297 preguntas curadas con la pista más fuerte: respuesta correcta al menos 2,5 veces más larga que cualquier distractor. Se conservaron tres excepciones identificadas para no reducir B1-T04 o B3-T10 por debajo del mínimo de 20 preguntas activas. El banco resultante contiene 1.667 preguntas activas: 202 oficiales, 803 generadas revisadas y 662 curadas. Los 57 temas mantienen al menos 20.

La retirada no equivale a afirmar que las 1.667 preguntas restantes sean semánticamente perfectas. El lote curado conserva un sesgo de longitud apreciable y requiere reescritura humana progresiva. La mejora aplicada elimina los casos más explotables sin inventar respuestas ni alterar enunciados oficiales.

## Alcance y método

- Punto de partida: rama `gsi-only-final`, commit `4434437d811e34ce2d4cab260c2694c9dfc9ddbc`, árbol limpio.
- Rama de trabajo: `audit-gsi-2026`.
- Se inspeccionaron los catálogos, 57 Markdown, 57 HTML, tres bancos, esquemas, importadores, validadores, pruebas, práctica escrita, persistencia y documentación.
- `scripts/verify_gsi_sync.py` contrastó los 57 temas con las cuatro instantáneas revisadas: B1 10/10, B2 16/16, B3 15/15 y B4 16/16; cero fallos.
- La auditoría automática recorrió las 1.964 preguntas iniciales y separó defectos objetivos de candidatos heurísticos. No cambia estados editoriales automáticamente.
- Se compararon métricas de longitud, posición y explicación por origen con las preguntas oficiales conservadas.
- Se revisaron individualmente los seis pares detectados por similitud. Son contrastes pedagógicos deliberados —LPAC/LRJSP, `/proc`/`/sys`, SOA/REST/PATCH e I-CSCF/S-CSCF— y se conservan con justificación.
- Se contrastaron puntos temporales en fuentes primarias: textos consolidados del BOE para LPAC, LRJSP, TREBEP, LOPDGDD, ENS y ENI; EUR-Lex para el marco eIDAS/EUDI Wallet.
- Las comprobaciones visuales recorrieron los 57 temas a 1365×900 y 390×844 sin desbordamientos.

Esta pasada comprueba exhaustivamente estructura, sincronía, referencias y señales editoriales medibles. No se presenta como una revisión jurídica línea por línea de todo el corpus ni como validación humana individual de las 1.667 preguntas restantes.

## Hallazgos priorizados

### P0

No se confirmó ningún P0. Las fechas de consolidación y referencias sensibles revisadas son coherentes con las fuentes oficiales consultadas. Las 202 preguntas oficiales se conservaron sin reescritura.

### P1

1. **Pista sistemática por longitud en preguntas curadas.** Estado inicial: correcta más larga en 89,7 % y única más larga en 87,8 %. Se retiraron 297 casos con relación ≥2,5 respecto del distractor más largo. El lote curado queda en 662 preguntas; la correcta sigue siendo única más larga en 82,3 %, por lo que la reescritura gradual continúa siendo necesaria.
2. **Ausencia de control reproducible de calidad editorial.** El validador previo comprobaba estructura, no señales de examen. Se añadió `scripts/audit_question_quality.py` a la suite.
3. **Dependencia de cobertura.** La retirada se protege con un mínimo de 20 preguntas activas por tema, calculado sobre los tres bancos; el importador falla si una futura regeneración rompe ese umbral.

### P2

1. **Vigencia eIDAS/EUDI Wallet.** Se incorporó un aviso separado para el Reglamento de Ejecución (UE) 2026/1731, en vigor desde el 11/08/2026. Actualiza especificaciones técnicas de cuatro actos de ejecución de 2024. No se sobrescribe el corpus ni se convierte el detalle de anexos en doctrina estable.
2. **Duplicados aproximados.** Se documentaron seis pares como diferencias intencionadas. No quedan candidatos sin revisar con el umbral aplicado.
3. **Explicaciones breves.** Quedan 27 candidatas por debajo de 40 caracteres. La longitud por sí sola no justifica reescribir cálculos o definiciones autocontenidas; permanecen señaladas para revisión humana.
4. **Distribución por posición.** La distribución global A/B/C/D es razonablemente equilibrada. Siete temas presentan desequilibrios locales y quedan registrados como señal no bloqueante.

## Temario y vigencia

- Programa: 57 temas, distribución 10/16/15/16, títulos derivados del Anexo IX de BOE-A-2025-26262.
- Cobertura técnica: 57/57 temas sincronizados, con fuente, Markdown y HTML válidos.
- No se modificó el texto doctrinal de los 57 temas en esta pasada.
- Se verificaron especialmente LPAC, LRJSP, TREBEP, LOPDGDD, ENS y ENI. No se halló una discrepancia demostrable que justificase alterar los apuntes.
- B1-T06 recibe el aviso `UPD-2026-002` y una fuente oficial de control de vigencia.
- Queda pendiente una revisión jurídica humana completa, artículo por artículo, antes de atribuir al corpus una garantía de exactitud normativa exhaustiva.

## Banco de preguntas

| Origen | Inicial | Retiradas | Final activo |
| --- | ---: | ---: | ---: |
| Oficial INAP | 202 | 0 | 202 |
| Generado revisado | 803 | 0 | 803 |
| Curado | 959 | 297 | 662 |
| **Total** | **1.964** | **297** | **1.667** |

Las retiradas se definen en `content/question-drafts/manual-question-retirements.json` y se aplican en el importador, no mediante edición manual del JSON generado. `logs/gsi-question-import.json` conserva los identificadores exactos y las tres excepciones. No se añadieron preguntas nuevas ni se cambiaron claves oficiales.

## Nivel de oposición

La comparación cuantitativa con el banco oficial muestra:

- enunciado mediano oficial: 97 caracteres; generado: 54; curado final: 57;
- correcta única más larga: oficial 33,7 %; generado 45,5 %; curado final 82,3 %;
- posiciones correctas globales del banco final: equilibradas por construcción y por origen, salvo variaciones locales documentadas.

La longitud no mide por sí sola dificultad, pero la diferencia del banco curado es suficientemente grande para constituir una pista. La prioridad editorial siguiente debe ser reescribir distractores curados, empezando por los casos de relación 1,5–2,5 y por preguntas de definición con alternativas de categorías evidentemente ajenas.

## Segundo ejercicio

La aplicación ofrece cuatro simulacros, ocho casos A/B, cinco respuestas y 180 minutos, con rúbrica 30/10/5/5 y biblioteca de 42 entradas. Cubre desarrollo, arquitectura, datos, sistemas, redes, seguridad, diagnóstico y justificación técnica. La respuesta sigue siendo autoevaluada; no existe corrección semántica automática del texto libre. No se añadió funcionalidad nueva porque la arquitectura actual ya soporta la práctica y no se identificó una carencia P0/P1 segura de corregir sin inventar contenido.

## Experiencia de estudio y calidad técnica

- Navegación, entrenamiento mixto, repetición de fallos, refuerzo, estadísticas, exportación/importación y exámenes oficiales están cubiertos por pruebas.
- Los 57 temas pasaron las pruebas visuales en escritorio y móvil.
- La aplicación permanece estática, sin framework, backend ni nuevas dependencias.
- La primera ejecución aislada de las pruebas visuales no encontró `playwright`; al indicar el runtime ya incluido mediante `PLAYWRIGHT_MODULE`, las cuatro pasaron. No fue necesario instalar nada.
- Ejecutar la suite con el Python global devuelve código 2 si falta `jsonschema`. El comando reproducible documentado usa `.venv\Scripts\python.exe`.

## Archivos principales

### Creados

- `scripts/audit_question_quality.py`
- `content/question-drafts/manual-question-retirements.json`
- `logs/gsi-question-quality-audit.json`
- `docs/AUDITORIA_INTEGRAL_GSI_2026.md`

### Modificados

- Importador y suite: `scripts/import_gsi_questions.py`, `scripts/run_gsi_suite.py`
- Banco y cobertura: `data/questions-manual.json`, `data/gsi-coverage-report.json`
- Vigencia: `data/updates.json`, `data/sources.json`, `docs/GSI_VIGENCIA.md`
- Evidencias y documentación: `logs/gsi-question-import.json`, `README.md`, `docs/FINAL_GSI_AUDIT.md`

No se convirtieron documentos ni se modificaron originales.

## Valoración cualitativa

| Área | Estado | Valoración |
| --- | --- | --- |
| Cobertura del programa | Buena | Los 57 temas están presentes, sincronizados y con un mínimo de 20 preguntas activas. |
| Vigencia | Buena con vigilancia | Las normas sensibles revisadas son coherentes; se añadió el cambio EUDI Wallet de 2026. La vigilancia temporal sigue siendo necesaria. |
| Temario | Bueno | Completo, trazado y orientado a A2; no se justificaron cambios doctrinales en esta pasada. |
| Banco de preguntas | Mejorado, aún desigual | Se eliminaron 297 ítems con la pista más fuerte. Persiste sesgo de longitud en el lote curado y hay 27 explicaciones breves candidatas. |
| Preparación práctica | Buena | Cubre los dominios principales y fuerza decisión, mecanismo y evidencia; la corrección es autoevaluada. |
| Experiencia de estudio | Buena | Flujos principales, móvil y escritorio validados; no se detectó una fricción crítica. |
| Calidad técnica | Buena | Arquitectura simple, pruebas amplias, datos separados y nueva auditoría integrada en la suite. |

## Pendientes manuales

1. Reescribir progresivamente las 406 preguntas restantes donde la correcta supera 1,5 veces al distractor más largo, empezando por las de mayor relación y por los temas con mayor dependencia del banco curado.
2. Revisar las 27 explicaciones breves en contexto; no ampliarlas solo para superar un umbral.
3. Calibrar dificultad con resultados reales de opositores; las etiquetas actuales siguen siendo orientativas.
4. Repetir vigilancia normativa antes de la convocatoria efectiva y cuando cambien textos consolidados o especificaciones técnicas.
