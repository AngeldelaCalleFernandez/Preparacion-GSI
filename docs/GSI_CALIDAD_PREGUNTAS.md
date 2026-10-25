# Calidad editorial del banco de preguntas GSI

Este informe se genera de forma determinista desde los tres bancos JSON. Es una **criba heurística no mutante**: señala preguntas que merecen revisión, pero no declara errores, no cambia respuestas y no modifica estados editoriales.

Versión del análisis: `1.0.0`. Preguntas examinadas: **1964**.

## Resultado

| Banco | Preguntas | Con algún indicio | Respuesta correcta ≥2× distractor más largo | Distractores absolutos | Redacción dependiente de la fuente |
| --- | ---: | ---: | ---: | ---: | ---: |
| Oficiales INAP | 202 | 6 | 5 | 1 | 0 |
| Manuales/curadas | 959 | 414 | 396 | 45 | 1 |
| Generadas por IA | 803 | 128 | 30 | 99 | 6 |

La primera cola editorial contiene **396 preguntas manuales/curadas** en las que la respuesta correcta tiene al menos 40 caracteres y duplica la longitud del distractor más extenso. Es una señal de posible pista formal, no una prueba de incorrección.

El detalle completo y ordenado está en [`logs/gsi-question-quality.json`](../logs/gsi-question-quality.json).

## Prioridad inicial

Las primeras candidatas de la cola manual, ordenadas por la relación de longitudes, son:

| ID | Tema | Longitud correcta | Máximo distractor | Relación |
| --- | --- | ---: | ---: | ---: |
| `MAN-GSI-P19-139` | B4-T16 | 108 | 32 | 3.38× |
| `MAN-GSI-P18-056` | B2-T09 | 91 | 27 | 3.37× |
| `MAN-GSI-P19-054` | B4-T15 | 111 | 33 | 3.36× |
| `MAN-GSI-P19-080` | B4-T15 | 104 | 31 | 3.35× |
| `MAN-GSI-P19-012` | B4-T14 | 77 | 23 | 3.35× |
| `MAN-GSI-P19-130` | B4-T16 | 117 | 35 | 3.34× |
| `MAN-GSI-P19-159` | B4-T16 | 120 | 36 | 3.33× |
| `MAN-GSI-P18-091` | B2-T16 | 110 | 33 | 3.33× |
| `MAN-GSI-P18-152` | B2-T16 | 100 | 30 | 3.33× |
| `MAN-GSI-P15-083` | B3-T11 | 113 | 34 | 3.32× |
| `MAN-GSI-P16-146` | B2-T14 | 129 | 39 | 3.31× |
| `MAN-GSI-P15-159` | B3-T11 | 142 | 43 | 3.30× |
| `MAN-GSI-P17-133` | B2-T02 | 102 | 31 | 3.29× |
| `MAN-GSI-P14-100` | B1-T08 | 92 | 28 | 3.29× |
| `MAN-GSI-P17-160` | B2-T02 | 187 | 57 | 3.28× |
| `MAN-GSI-P18-122` | B2-T16 | 82 | 25 | 3.28× |
| `MAN-GSI-P14-064` | B1-T04 | 72 | 22 | 3.27× |
| `MAN-GSI-P18-071` | B2-T09 | 94 | 29 | 3.24× |
| `MAN-GSI-P18-089` | B2-T16 | 97 | 30 | 3.23× |
| `MAN-GSI-P16-064` | B2-T14 | 116 | 36 | 3.22× |

## Rúbrica de revisión

| Nivel | Qué acredita | Estado actual |
| --- | --- | --- |
| L1 · Estructura | ID único, cuatro opciones, una clave y campos obligatorios. | Automatizado por esquemas y validadores. |
| L2 · Trazabilidad | Fuente, localizador, explicación, versión y hashes coherentes. | Automatizado; las oficiales y las generadas tienen controles adicionales. |
| L3 · Calidad editorial | Enunciado inequívoco, distractores plausibles y paralelos, ausencia de pistas formales y explicación suficiente. | Requiere revisión humana; este informe solo prioriza candidatos. |
| L4 · Calibración | Dificultad y poder discriminativo respaldados por resultados reales. | No disponible: los tres bancos declaran actualmente dificultad `medium`. |

Una pregunta no debe presentarse como L3 o L4 únicamente porque supere comprobaciones automáticas.

## Garantía editorial del lote IA

El registro conserva la confirmación del propietario, las decisiones aceptadas y los hashes exactos de 803 preguntas. No consta en los datos un método de revisión independiente pregunta por pregunta; por eso el informe deriva `independent_item_review: not_recorded` sin alterar `validation_status` ni `is_active`.

## Equilibrio del banco

Los temas contienen entre **21** y **163** preguntas, con mediana **24**. El máximo corresponde a B2-T14; los mínimos, a B2-T07, B4-T01, B4-T08. Este desequilibrio se debe considerar al definir una selección general de entrenamiento.

## Procedimiento de revisión

1. Abrir `review.html` mediante servidor HTTP y localizar el ID de la cola.
2. Contrastar enunciado, cuatro alternativas, explicación, fuente, localizador y vigencia.
3. Corregir solo con evidencia y registrar la decisión y el motivo; una sugerencia automática no es aprobación.
4. Regenerar los derivados y ejecutar `python scripts/analyze_question_quality.py --write`.
5. Ejecutar `python scripts/run_gsi_suite.py`; solo un código 0 permite cerrar el cambio.

## Reglas automáticas

- `correct-length-dominance`: correcta de 40 o más caracteres y al menos dos veces más larga que el distractor más extenso.
- `absolute-wording-cluster`: dos o más distractores empiezan por términos absolutos como «solo», «siempre» o «nunca», mientras la correcta no.
- `meta-source-wording`: el enunciado depende de expresiones como «según los apuntes».
- `duplicate-option`: alternativas textualmente duplicadas tras normalización; tendría prioridad P1.
- Los enunciados idénticos se agrupan como candidatos, no como duplicados confirmados, porque pueden proceder de convocatorias oficiales diferentes.

Para comprobar que el informe coincide con los bancos actuales: `python scripts/analyze_question_quality.py --check`.
