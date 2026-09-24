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

Son **preguntas IA no oficiales**. La revisión humana del propietario en conversación del 24/09/2026 aprobó seis sin cambios y cuatro tras correcciones concretas: `AI-GSI-P1-B2-T02-003` (feedback incorrecto), `AI-GSI-P1-B2-T11-002` (opciones y feedback correcto), `AI-GSI-P1-B3-T12-003` (feedback correcto) y `AI-GSI-P1-B4-T09-001` (opción B y feedback correcto). Ninguna clave cambió ni se eliminó pregunta. Las otras seis conservan íntegro su contenido. Las diez están ahora `validation_status=validated` e `is_active=true`, sin heredar la confirmación del lote anterior de 803.

La aceptación se registra en `data/gsi-p1-editorial-reviews.json` con el mismo esquema editorial de revisión humana, pero como lote independiente: cada decisión liga el borrador corregido y la evidencia canónica mediante hashes. El compilador solo activa una versión coincidente; el validador coteja el manifiesto, su confirmación de diez registros, los borradores y la procedencia IA.

## Reproducción y validación

```powershell
python scripts/build_gsi_authored_questions.py
python scripts/audit_question_quality.py
python scripts/run_gsi_suite.py
git diff --check
```

No se modificaron preguntas de otros temas, preguntas oficiales, umbrales, ni respuestas existentes. Las diez P1 pasan al entrenamiento activo tras la aprobación humana de esta versión; no se presenta ninguna como pregunta oficial.

El resultado de la nueva ejecución de auditoría y suite, y el recuento final de activas, se consignan en los informes generados `logs/gsi-question-quality-audit.json`, `logs/gsi-suite.json` y `data/gsi-coverage-report.json`. La prueba de navegador comprueba expresamente que una propuesta P1 se muestra como «validada · activa».
