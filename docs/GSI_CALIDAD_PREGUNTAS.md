# Calidad editorial del banco de preguntas GSI

Este informe se genera de forma determinista desde los tres bancos JSON. Es una **criba heurística no mutante**: señala preguntas que merecen revisión, pero no declara errores, no cambia respuestas y no modifica estados editoriales.

Versión del análisis: `1.0.0`. Preguntas examinadas: **1964**.

## Resultado

| Banco | Preguntas | Con algún indicio | Respuesta correcta ≥2× distractor más largo | Distractores absolutos | Redacción dependiente de la fuente |
| --- | ---: | ---: | ---: | ---: | ---: |
| Oficiales INAP | 202 | 6 | 5 | 1 | 0 |
| Manuales/curadas | 959 | 509 | 491 | 52 | 1 |
| Generadas por IA | 803 | 128 | 30 | 99 | 6 |

La primera cola editorial contiene **491 preguntas manuales/curadas** en las que la respuesta correcta tiene al menos 40 caracteres y duplica la longitud del distractor más extenso. Es una señal de posible pista formal, no una prueba de incorrección.

El detalle completo y ordenado está en [`logs/gsi-question-quality.json`](../logs/gsi-question-quality.json).

## Prioridad inicial

Las primeras candidatas de la cola manual, ordenadas por la relación de longitudes, son:

| ID | Tema | Longitud correcta | Máximo distractor | Relación |
| --- | --- | ---: | ---: | ---: |
| `MAN-GSI-P19-107` | B4-T16 | 129 | 23 | 5.61× |
| `MAN-GSI-P19-105` | B4-T16 | 134 | 24 | 5.58× |
| `MAN-GSI-P18-081` | B2-T16 | 130 | 24 | 5.42× |
| `MAN-GSI-P19-106` | B4-T16 | 124 | 23 | 5.39× |
| `MAN-GSI-P15-105` | B3-T11 | 121 | 23 | 5.26× |
| `MAN-GSI-P19-081` | B4-T15 | 129 | 25 | 5.16× |
| `MAN-GSI-P18-084` | B2-T16 | 124 | 25 | 4.96× |
| `MAN-GSI-P18-077` | B2-T09 | 111 | 23 | 4.83× |
| `MAN-GSI-P16-142` | B2-T14 | 168 | 36 | 4.67× |
| `MAN-GSI-P16-135` | B2-T14 | 112 | 24 | 4.67× |
| `MAN-GSI-P18-111` | B2-T16 | 79 | 17 | 4.65× |
| `MAN-GSI-P19-091` | B4-T15 | 102 | 22 | 4.64× |
| `MAN-GSI-P19-073` | B4-T15 | 125 | 27 | 4.63× |
| `MAN-GSI-P16-148` | B2-T14 | 129 | 28 | 4.61× |
| `MAN-GSI-P15-034` | B3-T11 | 123 | 27 | 4.56× |
| `MAN-GSI-P19-009` | B4-T14 | 141 | 31 | 4.55× |
| `MAN-GSI-P18-029` | B2-T09 | 126 | 28 | 4.50× |
| `MAN-GSI-P15-114` | B3-T11 | 99 | 22 | 4.50× |
| `MAN-GSI-P19-119` | B4-T16 | 99 | 22 | 4.50× |
| `MAN-GSI-P18-146` | B2-T16 | 94 | 21 | 4.48× |

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
