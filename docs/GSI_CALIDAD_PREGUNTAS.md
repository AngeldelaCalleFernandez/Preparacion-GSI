# Calidad editorial del banco de preguntas GSI

Este informe se genera de forma determinista desde los tres bancos JSON. Es una **criba heurística no mutante**: señala preguntas que merecen revisión, pero no declara errores, no cambia respuestas y no modifica estados editoriales.

Versión del análisis: `1.0.0`. Preguntas examinadas: **1964**.

## Resultado

| Banco | Preguntas | Con algún indicio | Respuesta correcta ≥2× distractor más largo | Distractores absolutos | Redacción dependiente de la fuente |
| --- | ---: | ---: | ---: | ---: | ---: |
| Oficiales INAP | 202 | 6 | 5 | 1 | 0 |
| Manuales/curadas | 959 | 434 | 416 | 45 | 1 |
| Generadas por IA | 803 | 128 | 30 | 99 | 6 |

La primera cola editorial contiene **416 preguntas manuales/curadas** en las que la respuesta correcta tiene al menos 40 caracteres y duplica la longitud del distractor más extenso. Es una señal de posible pista formal, no una prueba de incorrección.

El detalle completo y ordenado está en [`logs/gsi-question-quality.json`](../logs/gsi-question-quality.json).

## Prioridad inicial

Las primeras candidatas de la cola manual, ordenadas por la relación de longitudes, son:

| ID | Tema | Longitud correcta | Máximo distractor | Relación |
| --- | --- | ---: | ---: | ---: |
| `MAN-GSI-P19-145` | B4-T15 | 154 | 44 | 3.50× |
| `MAN-GSI-P15-082` | B3-T11 | 112 | 32 | 3.50× |
| `MAN-GSI-P15-131` | B3-T10 | 105 | 30 | 3.50× |
| `MAN-GSI-P15-132` | B3-T10 | 98 | 28 | 3.50× |
| `MAN-GSI-P15-152` | B3-T11 | 91 | 26 | 3.50× |
| `MAN-GSI-P17-122` | B2-T02 | 108 | 31 | 3.48× |
| `MAN-GSI-P16-068` | B2-T14 | 94 | 27 | 3.48× |
| `MAN-GSI-P18-098` | B2-T16 | 87 | 25 | 3.48× |
| `MAN-GSI-P18-150` | B2-T16 | 125 | 36 | 3.47× |
| `MAN-GSI-P16-149` | B2-T14 | 128 | 37 | 3.46× |
| `MAN-GSI-P19-090` | B4-T15 | 121 | 35 | 3.46× |
| `MAN-GSI-P19-051` | B4-T15 | 117 | 34 | 3.44× |
| `MAN-GSI-P18-113` | B2-T16 | 93 | 27 | 3.44× |
| `MAN-GSI-P15-146` | B3-T11 | 120 | 35 | 3.43× |
| `MAN-GSI-P15-090` | B3-T11 | 123 | 36 | 3.42× |
| `MAN-GSI-P19-124` | B4-T16 | 143 | 42 | 3.40× |
| `MAN-GSI-P16-060` | B2-T14 | 136 | 40 | 3.40× |
| `MAN-GSI-P18-057` | B2-T09 | 85 | 25 | 3.40× |
| `MAN-GSI-P19-047` | B4-T15 | 112 | 33 | 3.39× |
| `MAN-GSI-P16-136` | B2-T14 | 115 | 34 | 3.38× |

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
