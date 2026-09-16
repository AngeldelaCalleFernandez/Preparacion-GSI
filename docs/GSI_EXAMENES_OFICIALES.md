# Exámenes oficiales GSI del INAP

Importación local del 16 de septiembre de 2026. Son exámenes de **ingreso libre**, separados físicamente del material curado y generado. Los años son los de las convocatorias, no necesariamente los de celebración del examen.

| Convocatoria | Banco activo | Examen interactivo | Anuladas | Reservas usadas |
| --- | ---: | ---: | --- | --- |
| [2022](https://sede.inap.gob.es/gsil-oep-2020-2021-2022) | 101 | 100 preguntas / 90 minutos | 15, 21, 53, 91 | 1, 2, 3, 4 |
| [2024](https://sede.inap.gob.es/gsil-2024) | 101 | 100 preguntas / 90 minutos | 17, 27, 86, 90 | 1, 2, 3, 4 |
| [2025](https://sede.inap.gob.es/es/procedimientos-y-servicios/seleccion/procesos-selectivos-de-cuerpos-y-escalas-generales/cuerpo-de-gestion-de-sistemas-e-informatica-de-la-administracion-del-estado-ingreso-libre-convocatoria-2025) | 0 | Solo consulta: plantilla provisional | Sin resolución definitiva incorporada | Ninguna |

Cada banco histórico conserva 96 preguntas ordinarias válidas y las cinco reservas. En cada examen interactivo se utilizan las primeras cuatro reservas, insertadas en las posiciones anuladas. La quinta queda disponible para entrenamiento. La puntuación es directa: aciertos menos errores divididos entre tres, sin aplicar la transformación ni el corte del tribunal.

## Cómo estudiar

1. Abre **Examen → Exámenes oficiales INAP**.
2. Despliega una convocatoria para consultar sus cuatro PDF: cuestionario, plantilla, segundo ejercicio y criterios.
3. En 2022 o 2024, pulsa **Preparar este examen** y después **Iniciar examen**. El reloj solo empieza con este último botón.
4. Responde, marca las dudas y finaliza para ver la corrección y la procedencia.
5. Para sesiones cortas, selecciona **Solo preguntas oficiales → Mezclar preguntas oficiales**, cantidad y duración.

Los supuestos oficiales del segundo ejercicio se ofrecen en PDF para resolver por escrito. No se han inventado soluciones ni añadido una corrección automática del texto. La sección **Práctica escrita** conserva sus ocho casos y cuatro simulacros del corpus de estudio.

## Fidelidad y límites

- Se conservan enunciados, cuatro alternativas y letras de la plantilla definitiva. Se unen los saltos de línea del PDF para facilitar la lectura. La pregunta 12 de 2024 usa **D**, modificada en la plantilla definitiva.
- El feedback identifica la clave oficial y su documento. El INAP no publica en estas plantillas una justificación razonada de cada respuesta; la aplicación no inventa esa justificación.
- Las preguntas históricas no certifican vigencia actual. La interfaz muestra convocatoria y advertencia antes de responder en entrenamiento, examen y refuerzo. En la pregunta 87 de 2024 se conserva D y se señala expresamente que la descripción de la licencia de Nessus requiere contraste.
- La asignación de bloque/tema es editorial, no oficial; se guarda en `data/gsi-official-topic-map.json`. La dificultad es orientativa y no calibrada.
- Las ocho preguntas anuladas se conservan en la extracción y en el catálogo para auditoría, excluidas del banco activo. No tienen una respuesta correcta inventada.
- La convocatoria 2025 queda pendiente de localizar y verificar una plantilla definitiva. No se actualiza automáticamente ni se presenta la provisional como definitiva.
- El detector de duplicados exactos compara enunciado y alternativas normalizados. Las preguntas 40 de 2022 y 48 de 2024 comparten enunciado, pero tienen alternativas distintas; se conservan ambas con su procedencia.

## Archivos y reproducción

Los 12 originales se conservan localmente en `documents/originals/gsi-official/`, ignorados por Git. Sus enlaces públicos y SHA-256 figuran en `data/gsi-official-exams.json`; la web abre los PDF del INAP. Las 12 conversiones normales de MarkItDown están en `documents/markdown/gsi-official/`, con los nombres y estructura relativa originales. `logs/gsi-official-conversions.json` registra los intentos, incluidos los fallidos; no se utilizó OCR.

La extracción estructurada de los cuestionarios y claves definitivas está en `documents/sources/gsi-official/extracted.json`. Se obtuvo del texto con posiciones del PDF mediante pdfplumber, comprobando 105 preguntas por examen, sus cuatro opciones, todas las claves y las anulaciones. Las respuestas se cotejaron con las plantillas definitivas; no se dedujeron por IA.

Para regenerar el banco desde esa extracción conservada:

```powershell
.\.venv\Scripts\python.exe scripts/import_gsi_official.py
.\.venv\Scripts\python.exe scripts/run_gsi_suite.py
```

El importador produce `data/questions-official.json`, el catálogo y las fuentes. Los validadores contrastan texto, opciones, clave, hashes, procedencia, integridad de conversiones, reservas y exclusión de provisionales. Las pruebas comprueban puntuación, orden de opciones, recuperación y exportación/importación. Una nueva convocatoria requiere extracción y revisión explícitas antes de incorporarla.
