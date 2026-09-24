# Cobertura de preguntas de los cuatro parches P1 — 24/09/2026

## Alcance y criterio

Se revisaron exclusivamente las preguntas asignadas a B2-T02, B2-T11, B3-T12 y B4-T09: 139 activas antes de esta pasada (18 oficiales INAP, 61 manuales y 60 IA). Se comparó enunciado, alternativas, respuesta y explicación con los cuatro pasajes P1 incorporados a los apuntes, no solo coincidencias de palabras. Las preguntas oficiales se conservaron intactas. Se tomó su estilo de reconocimiento técnico como referencia, sin atribuir carácter oficial a las propuestas nuevas.

| Tema | Concepto P1 | Cobertura activa previa | Evidencia y decisión |
| --- | --- | --- | --- |
| B2-T02 | `/etc/passwd`, `/etc/shadow` y `passwd` | Ausente | Ninguna de las 69 preguntas del tema distingue datos de cuenta, hashes/caducidad y comando. Nueva P1-001. |
| B2-T02 | `cron` y `crontab` | Ausente | No se pregunta ejecución frente a planificación. Nueva P1-002. |
| B2-T02 | `ps` y `vmstat` | Ausente | Hay preguntas sobre procesos y métricas generales, pero ninguna identifica la función de estas herramientas. Nueva P1-003. |
| B2-T11 | Common Criteria / ISO/IEC 15408, TOE y contraste con ISO/IEC 27001 | Ausente | AI-GSI-B2-T11-013/014 tratan ISO/IEC 27001, pero no la evaluación de un producto/TOE. Nueva P1-001. |
| B2-T11 | PP, ST y EAL1–EAL7 | Ausente | Ninguna de las 23 preguntas del tema distingue perfil reutilizable, especificación concreta y garantía. Nueva P1-002. |
| B3-T12 | WS-Security como protección a nivel de mensaje | Insuficientemente entrenado | OFF-GSI-INAP-2024-R005 y OFF-GSI-INAP-2022-R005 preguntan por nombres de tokens; no por función ni distinción respecto a TLS. Nueva P1-001. |
| B3-T12 | MTOM y XOP | Ausente | Ninguna pregunta trata la relación entre optimización binaria y empaquetado XML-binario. Nueva P1-002. |
| B3-T12 | XML Binding y JAXB/Jakarta XML Binding | Ausente | Ninguna pregunta trata la vinculación XML–objetos. Nueva P1-003. |
| B4-T09 | SMI/SMIv2 y ASN.1 | Ausente | La función de las reglas de definición y de la notación formal no aparece en las 22 preguntas. Nueva P1-001. |
| B4-T09 | MIB y OID | Suficientemente entrenado | AI-GSI-B4-T09-008/009 distinguen estructura de información e identificación de objetos; la nueva P1-001 los relaciona con SMIv2 sin duplicar esas preguntas. |
| B4-T09 | RMON | Ausente | No se pregunta la monitorización remota clásica con sondas/MIB ni su diferencia funcional con flujos o telemetría. Nueva P1-002. |

No se halló en las preguntas existentes una afirmación P1 errónea que requiriese corregirla: **0 preguntas existentes modificadas o eliminadas**. Las dos preguntas oficiales sobre tokens WS-Security y las dos IA sobre MIB/OID se conservan.

## Diez preguntas nuevas y límite de validación

Las diez propuestas están en `content/question-drafts/p1-questions-2026-09-24.json` y se compilan al banco IA como `AI-GSI-P1-...`: tres para B2-T02, dos para B2-T11, tres para B3-T12 y dos para B4-T09. Cada una tiene cuatro alternativas, clave única, feedback conceptual y evidencia exacta de uno de los cuatro suplementos P1, vinculada al documento canónico de Drive por ID y localizador. Una primera redacción de WS-Security tenía una pista de longitud por usar solo siglas en los distractores; se corrigió usando los nombres técnicos completos de las cuatro especificaciones. También se afinaron distractores Unix/Linux para contraponer funciones cercanas en lugar de alternativas ajenas al supuesto.

Son **borradores IA no oficiales**, con `validation_status=pending_review` e `is_active=false`. No existe aprobación humana de sus enunciados y no se hereda la confirmación de las 803 preguntas antiguas. Por tanto, la cobertura activa previa sigue siendo la indicada en la tabla hasta que el propietario las revise; no aparecen en entrenamiento ni examen. El compilador y el validador comprueban que las diez propuestas coinciden con su borrador y evidencia y que no puedan activarse automáticamente.

## Reproducción y validación

```powershell
python scripts/build_gsi_authored_questions.py
python scripts/audit_question_quality.py
python scripts/run_gsi_suite.py
git diff --check
```

No se modificaron preguntas de otros temas, preguntas oficiales, umbrales, ni respuestas existentes. La siguiente decisión editorial es la revisión humana de las diez propuestas; solo tras ella se podrá contabilizar como entrenamiento activo la cobertura nueva.

Resultado de esta pasada: compilador **813 IA (803 activas, 10 pendientes)**; auditoría objetiva **1.687 preguntas, código 0, 0 errores, 0 pares similares sin revisar y 0 pistas brutas de longitud en las diez nuevas**. Siguen figurando dos explicaciones breves ya documentadas y ocho avisos de distribución de letras por tema; no se alteraron preguntas para hacer desaparecer esos avisos. La suite `run_gsi_suite.py` terminó con **código 0**: 18.526 controles de integridad, 20 JSON y 18 esquemas válidos, 88 pruebas unitarias y recorrido funcional HTTP correctos. La prueba de navegador comprueba expresamente que una propuesta P1 se muestra como «pendiente de validación · inactiva».
