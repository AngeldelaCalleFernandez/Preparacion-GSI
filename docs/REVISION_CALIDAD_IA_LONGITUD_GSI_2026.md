# Revisión semántica de las 129 alertas de longitud IA — 23/09/2026

## Alcance y decisiones

Esta pasada se limita a los 129 identificadores de origen `ai` que seguían
marcados en `logs/gsi-question-quality-audit.json` al comenzar. No se
repitió la auditoría integral del repositorio ni se editaron preguntas
oficiales o manuales, el temario o los borradores originales `.txt`.

Cada identificador tiene una decisión y un motivo individual en los cinco
manifiestos `content/question-drafts/ai-length-review-*.json`. La lectura
de las cuatro opciones, la explicación y la evidencia del tema mostró una
pista estructural real en los 129: alternativas manifiestamente ajenas a la
categoría preguntada, absolutos fáciles de descartar, listas incompletas
obvias o una opción correcta singularmente precisa. No hubo un caso
legítimo que mereciera conservarse sin cambio, ni uno imposible de reparar
sin doctrina nueva.

| Bloque | Revisadas | Modificadas | Conservadas sin cambio | Eliminadas |
| --- | ---: | ---: | ---: | ---: |
| B1 | 2 | 2 | 0 | 0 |
| B2 | 23 | 23 | 0 | 0 |
| B3 | 58 | 58 | 0 | 0 |
| B4 | 46 | 46 | 0 | 0 |
| **Total** | **129** | **129** | **0** | **0** |

Se redactaron 387 distractores de la misma familia conceptual, se
reformularon cinco enunciados que contribuían a la pista y se precisaron
ocho formulaciones de la respuesta correcta sin cambiar su letra ni
concepto. Los distractores no se alargaron para alcanzar una cifra: una
segunda lectura acortó los que habían quedado innecesariamente extensos.
Como ejemplos, ahora se contraponen dimensiones ENS y ENI en
`B1-T09-009`, formas normales en `B3-T04-008`, cocientes energéticos
en `B4-T06-004` y protocolos de IoT en `B4-T13-017`.

## Procedencia y comprobación de alcance

El compilador aplica los cambios como capa editorial sobre los borradores
IA y su revisión humana original. La evidencia se obtiene de la instantánea
histórica V2.1 registrada por la fuente, no de páginas de estudio ampliadas
después. El validador comprueba borrador, hash de evidencia, clave original,
contenido revisado y manifiesto. Cada pregunta nueva conserva la aceptación
humana del borrador base y registra aparte
`source.editorial_revision.reviewer_type = ai_assistant`; no se atribuye
al propietario una nueva aprobación humana de las redacciones de esta
pasada.

La comparación pregunta por pregunta con `HEAD` antes de esta pasada
verificó: 803 preguntas IA antes y después; exactamente las 129 objetivo
con cambios materiales; ninguna modificación de contenido fuera de ellas;
cero claves, feedback, estados de actividad o hashes de evidencia cambiados.
Los bancos oficial y manual permanecen sin cambios. Se releyó una muestra
final de los cuatro bloques, incluidos `B1-T09-005`, `B2-T12-009`,
`B3-T06-015` y `B4-T12-008`.

## Resultado de calidad y validación

La auditoría mantiene intacto el detector original de correcta ≥ 1,5 veces
el distractor más largo. Entre las 129 revisadas, las señales brutas
pasaron de 129 a 0. Se añadió solo para ese conjunto un control de pista
inversa: ninguna correcta es ≥ 1,5 veces más corta que todos los
distractores. En ese conjunto, 1 correcta es única más corta y 15 son
únicas más largas, sin alertas fuertes en ninguno de los dos sentidos.
Estos recuentos no sustituyen el juicio semántico documentado por pregunta.

`python scripts/audit_question_quality.py`: **código 0**; 1.677 preguntas,
0 errores objetivos, 0 pares similares sin revisar, 2 explicaciones
breves previamente revisadas y 7 distribuciones temáticas señaladas.
Quedan 146 señales brutas de correcta larga fuera de este alcance:
127 manuales ya cerradas y 19 oficiales inmutables; ninguna de IA.

`python scripts/run_gsi_suite.py`: **código 0**; 18.455 controles de
integridad correctos, 20 archivos de datos y 18 esquemas válidos,
1.677 preguntas estructuralmente válidas, 88 pruebas unitarias aprobadas
sin fallos, regresión de navegador y recorrido HTTP correctos.
`git diff --check`: **código 0**.

No se instalaron dependencias ni se convirtieron documentos. La siguiente
decisión editorial opcional es que el propietario confirme una muestra de
las nuevas formulaciones de IA; la revisión del borrador original y esta
revisión asistida permanecen atribuidas por separado.
