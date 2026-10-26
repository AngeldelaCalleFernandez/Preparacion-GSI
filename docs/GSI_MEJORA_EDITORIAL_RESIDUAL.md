# Mejora editorial residual del banco manual GSI

Fecha de aplicación: 26 de octubre de 2026.

## Alcance

Esta revisión cierra los 18 hallazgos manuales que permanecían después de completar los lotes 01 a 25. La instrucción expresa «haz la mejora editorial» autoriza este bloque separado.

Se revisaron 17 preguntas señaladas por `absolute-wording-cluster` y una por `meta-source-wording`. Las claves se contrastaron con los solucionarios Markdown conservados de las prácticas P14 a P19 antes de modificar el banco.

## Decisiones aplicadas

| ID | Clave conservada | Hallazgo inicial | Cambio aplicado |
| --- | :---: | --- | --- |
| `MAN-GSI-P14-038` | D | `absolute-wording-cluster` | Tres distractores reformulados como recursos o procesos constitucionales plausibles. |
| `MAN-GSI-P14-059` | C | `absolute-wording-cluster` | Tres requisitos falsos reformulados sin aperturas absolutas. |
| `MAN-GSI-P14-076` | B | `absolute-wording-cluster` | Tres conceptos alternativos equilibrados frente al acoso por razón de sexo. |
| `MAN-GSI-P14-080` | B | `absolute-wording-cluster` | Tres categorías incorrectas reformuladas frente a la discriminación por asociación. |
| `MAN-GSI-P14-095` | C | `absolute-wording-cluster` | Tres supuestos personales incorrectos redactados como reglas plausibles. |
| `MAN-GSI-P14-108` | B | `absolute-wording-cluster` | Tres clases de actos o disposiciones contrastadas con el criterio de fin de vía. |
| `MAN-GSI-P14-153` | A | `absolute-wording-cluster` | Tres supuestas excepciones a la relación electrónica reformuladas. |
| `MAN-GSI-P15-009` | A | `absolute-wording-cluster` | Tres dependencias falsas de IIS, Windows Server o Visual Studio reformuladas. |
| `MAN-GSI-P16-082` | C | `absolute-wording-cluster` | Tres objetos de protección incorrectos contrastados con la expresión del programa. |
| `MAN-GSI-P16-086` | D | `absolute-wording-cluster` | Tres derechos ajenos al artículo 99 redactados de forma homogénea. |
| `MAN-GSI-P16-097` | A | `absolute-wording-cluster` | Tres consecuencias contractuales falsas reformuladas con longitud comparable. |
| `MAN-GSI-P16-125` | D | `absolute-wording-cluster` | Tres relaciones falsas entre DRM, dominio público, GPL y licencia reformuladas. |
| `MAN-GSI-P17-030` | C | `absolute-wording-cluster` | Tres objetivos o propiedades incorrectas de un clúster reformulados. |
| `MAN-GSI-P17-052` | A | `absolute-wording-cluster` | Tres alternativas diferenciadas de VM, proceso aislado y VLAN. |
| `MAN-GSI-P17-066` | D | `absolute-wording-cluster` | Tres servicios de capas distintas contrastados con IaaS. |
| `MAN-GSI-P18-085` | B | `absolute-wording-cluster` | Tres descripciones parciales o incorrectas de metadatos reformuladas. |
| `MAN-GSI-P19-121` | D | `absolute-wording-cluster` | Tres criterios insuficientes de dimensionamiento reformulados. |
| `MAN-GSI-P14-068` | B | `meta-source-wording` | Enunciado formulado directamente y feedback desvinculado de la referencia «V2.1». |

## Invariantes

- 18 de 18 IDs localizados una sola vez en el banco manual.
- 18 de 18 claves coincidentes con sus solucionarios conservados.
- 51 textos de distractor, un enunciado y dos campos de feedback modificados.
- Cero cambios en respuestas correctas, claves, procedencia, dificultad, etiquetas, validación o estado activo.
- `data/questions-official.json` y `data/questions-ai.json` permanecen intactos.

## Resultado

- Preguntas manuales con hallazgos heurísticos: de 18 a 0.
- Cola `correct-length-dominance`: permanece en 0.
- Alertas `absolute-wording-cluster`: de 17 a 0.
- Alertas `meta-source-wording`: de 1 a 0.
- SHA-256 de partida de `data/questions-manual.json`: `08261968fde52c7180db82a973eee507cf83251f1f99f7cb188e6047ac286491`.
- SHA-256 resultante: `711309c37abb1dfcb280dcaf03054cb783a81f8f60260be14cc4194ee80cfbdb`.

La criba automática no conserva hallazgos sobre el banco manual. Este resultado indica que no se activan sus reglas actuales; no sustituye una futura revisión pedagógica o jurídica del contenido.
