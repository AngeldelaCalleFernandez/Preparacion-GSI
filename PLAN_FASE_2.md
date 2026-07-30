# Plan de la Fase 2 - datos y validación

## Alcance aprobado

La Fase 2 prepara la estructura de datos del proyecto TAI. Incluye el temario
oficial, el catálogo de fuentes y Markdown, conjuntos de preguntas separados,
actualizaciones, esquemas, plantillas y validadores.

Queda fuera de alcance cualquier componente de la Fase 3: no se crean HTML,
CSS, JavaScript de aplicación, interfaz, estadísticas ni motor de test.

## Entregables

- `data/syllabus.json`: cuatro bloques y 33 temas oficiales del Anexo V de la
  convocatoria de 2025.
- `data/sources.json`: relación entre fuentes, documentos Markdown y temas.
- `data/questions-official.json`, `data/questions-ai.json` y
  `data/questions-manual.json`: bancos físicamente separados y vacíos.
- `data/updates.json`: registro estructurado inicialmente vacío.
- `schemas/`: contratos JSON Schema Draft 2020-12.
- `templates/`: plantillas manuales de tema y pregunta, más CSV con cabeceras.
- `scripts/`: validación de JSON, preguntas, referencias y cobertura del
  catálogo Markdown.

## Reglas de datos

- IDs estables: `B1` a `B4`, temas `B1-T01` a `B4-T10`, fuentes `SRC-*`,
  documentos `DOC-*`, preguntas `OFF-*`, `AI-*` y `MAN-*`, y actualizaciones
  `UPD-AAAA-NNN`.
- Las rutas deben ser relativas, usar `/` y comenzar en
  `documents/markdown/` cuando apunten a contenido convertido.
- Los 31 Markdown convertidos deben aparecer exactamente una vez en el
  catálogo de fuentes.
- No se importan ni generan preguntas y no se extraen respuestas de exámenes.
- Los documentos de examen no se asignan automáticamente a temas; permanecen
  en `pending_review` hasta revisión manual.

## Criterios de finalización

La Fase 2 queda completa cuando los validadores confirman cuatro bloques, 33
temas, 31 Markdown catalogados, referencias e IDs válidos, bancos de preguntas
vacíos y ausencia de rutas absolutas.

```powershell
.\.venv\Scripts\python scripts\validate_phase2.py
```
