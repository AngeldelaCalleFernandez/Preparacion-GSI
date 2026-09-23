# Cierre editorial del banco de preguntas GSI A2 — 23/09/2026

## Alcance y decisión

Esta continuación se hizo en `audit-gsi-2026`, sin repetir la auditoría
integral ni fusionar `gsi-only-final`. Se cotejaron las claves con los
solucionarios originales y se revisaron semánticamente las 406 preguntas
manuales que la auditoría anterior señalaba con relación de longitud ≥ 1,5.
Se contrastaron también las 27 explicaciones breves. Una muestra estratificada
por bloques y temas de las 297 preguntas retiradas reveló falsos positivos;
por ello se repasó el conjunto de 297 antes de decidir restauraciones.
Se leyeron `AGENTS.md` y el informe previo. El archivo externo
`C:\Users\Usuario\Documents\orden.txt` no estaba disponible; se usó la
copia de instrucciones aportada como texto adjunto en la conversación.

La longitud aislada no decide la calidad. Se conservaron claves y posiciones
correctas, se trabajaron alternativas de la misma categoría y distractores
plausibles por confusión conceptual, y se retiró una pregunta cuya utilidad no
justificaba duplicar contenido. Las 202 preguntas oficiales INAP y sus
respuestas permanecen idénticas. Los originales de los seis cuadernos y
solucionarios tampoco se modificaron.

| Resultado de las 406 candidatas manuales | Preguntas |
| --- | ---: |
| Revisadas semánticamente | 406 |
| Conservadas sin cambio de enunciado u opciones | 0 |
| Reescritas materialmente y activas | 405 |
| Eliminadas | 1 |

La eliminada es `MAN-GSI-P14-158`, sobre la CSAE: el enunciado era genérico,
los tres distractores pertenecían a categorías manifiestamente ajenas y el
feedback no justificaba la competencia preguntada. Construir alternativas
próximas y unívocas habría exigido incorporar detalles doctrinales no
acreditados por su solucionario. Su retirada queda explícita en el manifiesto,
sin que un cociente de caracteres pueda volver a decidirla.

De las 27 explicaciones de menos de 40 caracteres, 25 manuales se ampliaron
con fundamento y contraste conceptual. Se conservan dos de IA:
`AI-GSI-B3-T13-009` muestra la sustitución y resultado de su cálculo, y
`AI-GSI-B4-T06-005` muestra directamente el cociente del PUE. Siguen
visibles en la auditoría como excepciones revisadas, no como alertas ocultas.
Además se aclararon explicaciones de otras preguntas cuando la revisión
semántica lo exigió.

## Retiradas anteriores y falsos positivos

El criterio anterior retiraba automáticamente la pregunta si la respuesta
correcta superaba 2,5 veces la longitud de cualquier distractor, salvo
excepciones de cobertura. Este criterio confundía a veces una definición
necesariamente explicativa con una pista resoluble sin conocimiento. Ocurre,
por ejemplo, cuando las tres alternativas breves nombran componentes de una
misma familia o cuando la respuesta correcta expresa una distinción entre
conceptos que exige una frase. El detector de longitud es útil para priorizar
lectura, no para cambiar el estado editorial.

Se identificaron 11 falsos positivos restaurables, tras mejorar sus opciones
y, cuando procedía, el enunciado o el feedback:

- B1: `P14-064`, `P14-100`, `P14-114`, `P14-137`.
- B2: `P16-016`, `P17-017`, `P18-128`.
- B3: `P15-004`, `P15-119`.
- B4: `P19-066`, `P19-117`.

No se restauraron en bloque las demás 286 retiradas. La incorporación de
`P14-158` deja 287 retiradas explícitas en total. El importador ya no
retira automáticamente por longitud; lee los identificadores editoriales
fijados en `manual-question-retirements.json` y las revisiones trazadas en
`manual-question-quality-review.json` y
`manual-question-revisions-p*.json`. Conserva el mínimo de 20 preguntas
activas por tema y rechaza identificadores desconocidos o revisiones
malformadas. El detector sigue utilizando el umbral 1,5, cuenta todos los
casos y añade estado editorial; no se rebajó ni desactivó ningún control.

## Comprobación manual

Se releía una muestra de las modificaciones en cada bloque y se corrigieron
otros distractores evidentes encontrados durante esa comprobación:

- B1: `P14-015`, `P14-062`, `P14-114`; títulos constitucionales,
  plazo de acceso y encomienda frente a delegación, suplencia y avocación.
- B2: `P16-104`, `P16-118`, `P17-017`; condiciones de descompilación,
  límites de confidencialidad y distinción ISA/microarquitectura.
- B3: `P15-004`, `P15-102`, `P15-110`; CLR, envío de credenciales y
  alcance de TLS.
- B4: `P19-026`, `P19-110`, `P19-117`, `P19-154`; SIP/RTP,
  STUN/TURN, MCU/SFU y margen de capacidad.

Las claves correctas se conservaron. No se alteró el banco oficial. Los
casos de explicación jurídica se comprobaron frente a los temas existentes y
fuentes primarias pertinentes, entre ellas la
[Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565),
la [Ley 40/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566),
la [Ley 19/2013](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887)
y el [texto refundido de la Ley de Propiedad Intelectual](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930).

## Banco y alertas finales

| Bloque | Oficial | IA revisada | Manual curado | Total |
| --- | ---: | ---: | ---: | ---: |
| B1 | 29 | 63 | 141 | 233 |
| B2 | 60 | 220 | 347 | 627 |
| B3 | 60 | 260 | 111 | 431 |
| B4 | 53 | 260 | 73 | 386 |
| **Total** | **202** | **803** | **672** | **1.677** |

La auditoría `python scripts/audit_question_quality.py` devolvió código 0:
1.677 preguntas, 0 errores objetivos, 0 pares similares sin revisar,
2 explicaciones breves revisadas y 7 desequilibrios locales de posición.
Hay 275 señales brutas de longitud ≥ 1,5: 127 manuales ya reescritas,
19 oficiales documentadas como excepciones inmutables y 129 de IA aún
pendientes de otro trabajo editorial. Al inicio había 406 señales manuales.
El 76,79 % de las manuales conserva la correcta como única opción más larga;
esto no demuestra por sí mismo una pista, pero impide declarar agotada toda
mejora posible del banco. El JSON conserva cada identificador y su estado.

La suite `python scripts/run_gsi_suite.py` devolvió **código 0**:
17.523 controles de integridad sin errores técnicos ni bloqueos;
20 archivos de datos y 18 esquemas válidos; 4 bloques y 57 temas con
referencias válidas; 1.677 preguntas estructuralmente válidas; 88 unitarias
aprobadas y 0 fallidas; regresión de navegador y recorrido funcional HTTP
aprobados, incluidos filtros de los 57 temas y exámenes oficiales.
`git diff --check` devolvió código 0.

No se han creado ni convertido documentos originales. Las alertas de IA,
los dos cálculos breves y los siete desequilibrios locales quedan
expresamente visibles para revisión futura. Ninguno se ha suprimido para
obtener verde.
