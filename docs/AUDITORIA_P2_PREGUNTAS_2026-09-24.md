# Auditoría P2 del banco de preguntas GSI A2 — 24-09-2026

## Alcance y criterio

Se revisaron semánticamente las **350 preguntas activas** de los 11 temas P2: 156 de B2, 122 de B3 y 72 de B4. El banco de partida y de cierre permanece en **1.687 preguntas, todas activas**. La lectura incluyó los enunciados y claves de las 350 y las opciones y el feedback de las preguntas relacionadas con los conceptos P2. Se contrastó con los once temas ya parcheados y sus suplementos de `content/enhancements/`; no se reabrió la auditoría del resto del repositorio.

Una mención en un distractor no se contabiliza como entrenamiento. «Suficientemente entrenado» exige poder reconocer y distinguir el concepto frente a una trampa plausible; «insuficientemente entrenado» señala cobertura indirecta, superficial o ambigua. El diagnóstico no obliga a crear una pregunta por término: se proponen 16 borradores que agrupan conceptos donde tiene sentido.

| Tema | Activas revisadas | Origen |
| --- | ---: | --- |
| B2-T01 | 82 | 4 oficiales, 78 manuales |
| B2-T13 | 26 | 6 oficiales, 20 IA |
| B2-T16 | 48 | 4 oficiales, 44 manuales |
| B3-T01 | 26 | 6 oficiales, 20 IA |
| B3-T02 | 24 | 4 oficiales, 20 IA |
| B3-T09 | 24 | 4 oficiales, 20 IA |
| B3-T13 | 24 | 4 oficiales, 20 IA |
| B3-T14 | 24 | 4 oficiales, 20 IA |
| B4-T05 | 25 | 5 oficiales, 20 IA |
| B4-T07 | 22 | 2 oficiales, 20 IA |
| B4-T10 | 25 | 5 oficiales, 20 IA |

## Cobertura conceptual antes de los borradores

Los IDs citados son preguntas **ya activas**; «—» significa que no se encontró una que entrenase el concepto. Los borradores aún no cuentan como cobertura del banco.

| Tema | Concepto | Cobertura actual | IDs relevantes | Diagnóstico | Acción propuesta |
| --- | --- | --- | --- | --- | --- |
| B2-T01 | SSI / Single System Image | AUSENTE | MAN-GSI-P17-030, -032, -038 (clúster/grid, no SSI) | Se trabaja el entorno de clúster, no la vista de un único sistema lógico ni sus límites. | AI-GSI-P2-B2-T01-001 |
| B2-T13 | FAR | AUSENTE | — | No se distingue la falsa aceptación biométrica. | AI-GSI-P2-B2-T13-001 |
| B2-T13 | FRR | AUSENTE | — | No se distingue el falso rechazo biométrico. | AI-GSI-P2-B2-T13-001 |
| B2-T13 | EER | AUSENTE | — | No se enseña el punto de igualdad ni que no garantiza seguridad absoluta. | AI-GSI-P2-B2-T13-001 |
| B2-T13 | Vishing | AUSENTE | — | Falta el contraste con smishing por canal de voz/texto. | AI-GSI-P2-B2-T13-002 |
| B2-T16 | Cuadro de clasificación documental | INSUFICIENTEMENTE ENTRENADO | MAN-GSI-P18-094, -099 | Hay categorías/series y taxonomía, pero no se discrimina la estructura archivística funcional frente a carpetas o etiquetas libres. | AI-GSI-P2-B2-T16-001 |
| B3-T01 | RAD | AUSENTE | AI-GSI-B3-T01-003, -006, -007, -011, -019 (aspectos parciales) | Iteración, prototipos y agilidad aparecen por separado; no se reconoce RAD ni su combinación distintiva. | AI-GSI-P2-B3-T01-001 |
| B3-T02 | Timeboxing | AUSENTE | OFF-GSI-INAP-2024-Q051 (planificación) | PERT/CPM no entrena el límite temporal fijo con ajuste de alcance. | AI-GSI-P2-B3-T02-001 |
| B3-T02 | COCOMO II | AUSENTE | AI-GSI-B3-T02-002, -015 (estimación/PERT) | Se rozan esfuerzo y planificación, no el modelo paramétrico ni su diferencia con PERT/CPM. | AI-GSI-P2-B3-T02-002 |
| B3-T09 | UML Profile | AUSENTE | OFF-GSI-INAP-2024-R002 (MOF) | No se prueba la extensión de UML sin metamodelo independiente. | AI-GSI-P2-B3-T09-001 |
| B3-T09 | Stereotype / estereotipo | AUSENTE | — | No se usa como mecanismo de un Profile. | AI-GSI-P2-B3-T09-001 |
| B3-T09 | Tagged values / properties | AUSENTE | — | No se relacionan propiedades del estereotipo con el término histórico. | AI-GSI-P2-B3-T09-001 |
| B3-T09 | Constraints | AUSENTE | — | No se reconoce su papel de restricción en el perfil. | AI-GSI-P2-B3-T09-001 |
| B3-T09 | MOF | INSUFICIENTEMENTE ENTRENADO | OFF-GSI-INAP-2024-R002 | Solo una oficial aborda MOF; presenta una posible segunda opción falsa por «OML», por lo que no se usa como único apoyo didáctico. | Contraste Profile/MOF en AI-GSI-P2-B3-T09-001; conservar la oficial. |
| B3-T13 | McCall | AUSENTE | AI-GSI-B3-T13-004 (calidad genérica) | No se distingue su modelo histórico de factores de calidad del producto. | AI-GSI-P2-B3-T13-001 |
| B3-T13 | SPICE | AUSENTE | OFF-GSI-INAP-2022-Q063 (solo distractor) | El distractor frente a SQuaRE no enseña evaluación de procesos. | AI-GSI-P2-B3-T13-001 |
| B3-T13 | ISO/IEC 15504 histórica | AUSENTE | — | No consta la relación histórica con SPICE ni su retirada. | AI-GSI-P2-B3-T13-001 |
| B3-T13 | ISO/IEC 330xx actual | AUSENTE | — | Falta el contexto sucesor de evaluación de procesos. | AI-GSI-P2-B3-T13-001 |
| B3-T14 | Diez heurísticas de Nielsen | INSUFICIENTEMENTE ENTRENADO | AI-GSI-B3-T14-006, -007, -012, -016 | Varias preguntas rozan errores, consistencia o claridad, pero no obligan a reconocer y aplicar el marco de Nielsen frente a principios WCAG. | AI-GSI-P2-B3-T14-001 y -002 |
| B4-T05 | HBA | AUSENTE | — | No se pregunta por el adaptador host–almacenamiento. | AI-GSI-P2-B4-T05-001 |
| B4-T05 | JBOD | AUSENTE | AI-GSI-B4-T05-007 (solo distractor) | «JBOD como espejo obligatorio» es distractor, no entrenamiento de JBOD. | AI-GSI-P2-B4-T05-001 |
| B4-T05 | JBOD frente a RAID | AUSENTE | OFF-GSI-INAP-2022-Q077; AI-GSI-B4-T05-006, -007 (RAID) | RAID se trata, pero no se distingue presentación de discos, bandas y redundancia. | AI-GSI-P2-B4-T05-001 |
| B4-T07 | IEEE 802.3af | AUSENTE | AI-GSI-B4-T07-018, -019, -020 (PoE genérico) | Potencia/presupuesto PoE no identifica la generación af. | AI-GSI-P2-B4-T07-001 |
| B4-T07 | IEEE 802.3at | AUSENTE | AI-GSI-B4-T07-018, -019, -020 | No se distingue PoE+ de af. | AI-GSI-P2-B4-T07-001 |
| B4-T07 | IEEE 802.3bt | AUSENTE | AI-GSI-B4-T07-018, -019, -020 | No se reconoce la ampliación de potencia y posible uso de cuatro pares. | AI-GSI-P2-B4-T07-001 |
| B4-T07 | PSE | AUSENTE | AI-GSI-B4-T07-018, -019, -020 | No se identifica quién suministra alimentación. | AI-GSI-P2-B4-T07-002 |
| B4-T07 | PD | AUSENTE | AI-GSI-B4-T07-018, -019, -020 | No se identifica quién la recibe. | AI-GSI-P2-B4-T07-002 |
| B4-T10 | OSPFv2 Hello | AUSENTE | OFF-GSI-INAP-2022-Q089; AI-GSI-B4-T10-017 (OSPF genérico) | No se entrenan tipos de paquete ni funciones. | AI-GSI-P2-B4-T10-001 |
| B4-T10 | OSPFv2 Database Description | AUSENTE | Mismos IDs | No se distingue el resumen de base de estado de enlace. | AI-GSI-P2-B4-T10-001 |
| B4-T10 | OSPFv2 Link State Request | AUSENTE | Mismos IDs | No se reconoce la solicitud de información. | AI-GSI-P2-B4-T10-001 |
| B4-T10 | OSPFv2 Link State Update | AUSENTE | Mismos IDs | No se reconoce el transporte de LSA. | AI-GSI-P2-B4-T10-001 |
| B4-T10 | OSPFv2 Link State Acknowledgment | AUSENTE | Mismos IDs | No se reconoce la confirmación de recepción. | AI-GSI-P2-B4-T10-001 |
| B4-T10 | BGP-4 OPEN | AUSENTE | AI-GSI-B4-T10-018 (BGP genérico) | No se entrenan tipos básicos de mensaje BGP-4. | AI-GSI-P2-B4-T10-002 |
| B4-T10 | BGP-4 UPDATE | AUSENTE | Mismo ID | No se distingue el anuncio de rutas. | AI-GSI-P2-B4-T10-002 |
| B4-T10 | BGP-4 NOTIFICATION | AUSENTE | Mismo ID | No se distingue la comunicación de error. | AI-GSI-P2-B4-T10-002 |
| B4-T10 | BGP-4 KEEPALIVE | AUSENTE | Mismo ID | No se distingue el mantenimiento de la sesión. | AI-GSI-P2-B4-T10-002 |

Resultado previo a propuestas: **0 conceptos suficientemente entrenados, 3 insuficientes y 33 ausentes**. Esto no significa que los 11 temas carezcan de preguntas: las 350 activas trabajan otras partes del temario.

## Calidad de las preguntas existentes relacionadas

No se halló un error objetivo inequívoco de clave o feedback que justificase cambiar una pregunta activa en esta fase: **0 corregidas**, **0 eliminadas**. Hay distractores débiles en algunas preguntas, por ejemplo MAN-GSI-P17-030/-038, MAN-GSI-P18-094/-099, AI-GSI-B4-T05-007 y AI-GSI-B4-T07-019/-020; se dejan intactos por la instrucción de no reescribir preguntas correctas solo por estilo. No se encontraron afirmaciones obsoletas en las claves P2 revisadas.

**Posible ambigüedad oficial a revisión humana, sin alteración:** OFF-GSI-INAP-2024-R002 pregunta qué opción NO caracteriza a MOF y marca D. La opción C dice «modelos OML» donde el cuestionario original extraído también dice «OML»; si no es una sigla deliberada, esa opción puede leerse igualmente falsa. Se conserva íntegra la pregunta y su clave oficial. No se presenta como error definitivo de la fuente ni se cuenta como cobertura suficiente de MOF.

## Propuesta mínima e inactiva

Se proponen **16 preguntas IA no oficiales**, todas `validation_status=pending_human_review` e `is_active=false`, en `content/question-drafts/p2-questions-2026-09-24.json`. Distribución: B2-T01 1; B2-T13 2; B2-T16 1; B3-T01 1; B3-T02 2; B3-T09 1; B3-T13 1; B3-T14 2; B4-T05 1; B4-T07 2; B4-T10 2. Se agrupan FAR/FRR/EER, Profile/estereotipos/propiedades/restricciones/MOF, McCall/SPICE/15504/330xx, HBA/JBOD/RAID, generaciones PoE, roles PSE/PD y cada familia de mensajes de routing. Las dos aplicaciones de Nielsen contrastan seis heurísticas directamente y otras mediante distractores; no pretenden sustituir el repaso de la lista completa.

Cada borrador indica suplemento doctrinal y párrafo; el validador comprueba que ese texto está también en el tema ya actualizado. Las preguntas propuestas no se han incorporado a `data/questions-*.json` ni al modo examen. La revisión humana debe confirmar contenido y estilo antes de cualquier activación posterior.

## Validación y reproducibilidad

- `python scripts/audit_question_quality.py`: banco activo, 1.687 preguntas, 0 errores objetivos, 0 pares similares sin revisar, 2 feedback breves ya aceptados como excepción editorial y 8 distribuciones temáticas a revisar.
- `python scripts/audit_p2_question_drafts.py`: reutiliza el auditor existente con banco + borradores, 1.703 elementos, 0 errores objetivos, 0 pares similares sin revisar; en los 16 borradores, 0 pares similares nuevos, 0 pistas fuertes directas y 0 inversas de longitud. Se mantienen las 2 explicaciones breves y 8 avisos de distribución del banco anterior. El informe detallado queda en `logs/gsi-p2-draft-quality-audit.json`.
- `python scripts/run_gsi_suite.py`: **código 0**. Los 18.526 controles de integridad, 21 JSON y 18 esquemas, 1.687 preguntas, 88 pruebas unitarias, regresiones de navegador y recorrido HTTP de los 57 temas terminaron sin fallos. Se restauraron los logs versionados que esta ejecución solo modificó por marcas de tiempo, duraciones u orden de salida.
- `git diff --check` y `git diff --cached --check`: **código 0**.

La auditoría de calidad es estructural y heurística, no una validación humana automática. Los 146 avisos brutos de longitud del conjunto (127 ya revisados editorialmente y 19 excepciones oficiales) preexistían; ninguno procede de los borradores P2. No se cambió ningún umbral ni se desactivó ningún control.

## Archivos y siguiente fase

Se crean este informe, el JSON de borradores, el validador específico y su log. No se modifican temas, preguntas activas, generadores ni dependencias. No hay documentos originales convertidos o pendientes en esta fase. La siguiente fase, **solo tras revisión humana**, sería decidir si activar alguno de los 16; esta auditoría se detiene aquí y no inicia P3 ni realiza merge.
