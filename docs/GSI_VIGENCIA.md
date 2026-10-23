# Control de alcance y vigencia

Control externo iniciado el 14 de septiembre de 2026 y actualizado con los avisos revisados hasta el **5 de octubre de 2026**. Estas fuentes primarias verifican alcance, reglas y puntos sensibles de los materiales. No sustituyen el corpus Drive como origen de apuntes o preguntas y no constituyen una revisión exhaustiva de toda la normativa. El registro estructurado vigente es [`data/updates.json`](../data/updates.json).

| Materia | Comprobación y decisión | Fuente primaria |
| --- | --- | --- |
| Programa y ejercicios | Anexo IX: 57 temas, 10/16/15/16; primer ejercicio 100 preguntas y 90 minutos, penalización de un tercio; segundo ejercicio escrito, elección entre dos supuestos, cinco preguntas, 180 minutos y rúbrica 30/10/5/5. La aplicación ofrece puntuación directa, sin reservas ni transformación del tribunal. | [BOE-A-2025-26262](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262) |
| Constitución | Control de las reglas constitucionales citadas en la muestra del bloque I, incluidas relaciones entre Gobierno y Cortes. | [Texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229) |
| Protección de datos | Contraste de los puntos RGPD de la muestra; las explicaciones siguen procediendo del corpus. | [Reglamento 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) |
| Identidad y firma | Artículo 25: equivalencia de firma electrónica cualificada y manuscrita; no se extiende esa equivalencia a cualquier firma. | [eIDAS](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) |
| ENS, ENI y administración electrónica | Referencias vigentes de control: RD 311/2022, RD 4/2010 y RD 203/2021. | [ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191), [ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331), [RD 203/2021](https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032) |
| Kubernetes · `UPD-2026-001` | La fuente del 21 de agosto anticipaba 1.37. La versión 1.37.0 se publicó el 26 de agosto de 2026 y, en la revisión del 5 de octubre, las ramas mantenidas eran 1.37, 1.36 y 1.35. El aviso de B2-T07 conserva el texto original y actualiza el resumen de repaso. | [Lanzamiento 1.37](https://kubernetes.io/releases/1.37/), [ramas mantenidas](https://kubernetes.io/releases/) |
| Reglamento de Ciberresiliencia (CRA) · `UPD-2026-002` | El artículo 14 y las obligaciones de notificación del Reglamento (UE) 2024/2847 son aplicables desde el 11 de septiembre de 2026; la aplicación general está prevista para el 11 de diciembre de 2027. El aviso de B2-T13 explica el régimen escalonado. | [Reglamento (UE) 2024/2847](https://eur-lex.europa.eu/eli/reg/2024/2847/oj?locale=es) |
| OWASP Top 10 · `UPD-2026-003` | La edición 2025 sustituye a 2021 como referencia vigente. El aviso de B3-T12 actualiza las categorías y conserva 2021 como referencia histórica. | [OWASP Top 10:2025](https://top10.owasp.org/2025/es/0x00_2025-Introduction/) |
| TLS 1.3 | RFC 9846, julio de 2026, sustituye RFC 8446. No se corrige el corpus a una referencia anterior. | [RFC Editor](https://www.rfc-editor.org/info/rfc9846/) |
| .NET | La política consultada, actualizada el 8 de septiembre, mantiene .NET 10 como LTS con soporte hasta el 14 de noviembre de 2028. No se trata .NET 11 RC como versión final. | [Política de soporte](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) |
| Jakarta EE 11 | Java SE 17 como mínimo; perfiles Core, Web y Platform; Jakarta Data 1.0. | [Especificación oficial](https://jakarta.ee/specifications/platform/11/) |
| Licencias | Referencia EUPL 1.2. | [Texto de la Comisión Europea](https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12) |
| Calidad | ISO/IEC 25010:2023: modelo de calidad del producto con nueve características. | [Ficha ISO](https://www.iso.org/standard/78176.html) |
| Accesibilidad | WCAG 2.2 añade nueve criterios y elimina 4.1.1; se contrasta la mención del corpus. | [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [Cambios de 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) |

El mapa auxiliar abrevia algunos rótulos: B1-T03 amplía el nombre a «Gobierno y Administración» y B1-T04 menciona gobierno abierto. Se utilizan los títulos íntegros del BOE y se registran las diferencias en `data/gsi-map-review.json`. El catálogo anterior de 55 temas GSI se sustituye por los 57 oficiales.

La revisión de vigencia no activa por sí sola preguntas generadas. Cualquier cambio de versión, norma o explicación exige revisar las preguntas afectadas y renovar sus registros editoriales asociados a los hashes exactos. Los tres avisos vigentes declaran actualmente `affected_question_ids` vacío: informan y actualizan los temas, pero no certifican una revisión semántica adicional del banco.

## Flujo de actualización trazable

Cuando una fuente primaria cambie, la actualización debe recorrer esta cadena antes de publicarse:

1. **Fuente y aviso:** registrar la fuente, fecha de revisión, alcance y decisión en `data/updates.json`, sin sobrescribir el texto histórico del corpus.
2. **Tema afectado:** identificar los temas concretos, incorporar el aviso o ajuste mediante el generador canónico y renovar los hashes de los derivados.
3. **Preguntas afectadas:** declarar los identificadores en `affected_question_ids` y revisar individualmente enunciado, respuesta, distractores, explicación y evidencia. Un aviso sin identificadores no certifica el banco.
4. **Decisión editorial:** conservar responsable, fecha, versión y huellas de la evidencia; una validación previa no se hereda automáticamente tras cambiar la fuente o el registro.
5. **Verificación:** ejecutar `scripts/run_gsi_suite.py`, comprobar sincronización, jerarquía, referencias y exclusión de contenido no validado, y conservar los logs resultantes.

Este flujo separa una noticia de vigencia de una corrección editorial confirmada y permite reconstruir por qué cambió cada tema o pregunta.

Comprobación adicional del 15 de septiembre: una ficha de vigilancia del corpus aprobado internamente para publicación confirma el aviso UPD-2026-001 ya incorporado. Esta aprobación interna no acredita permisos de terceros. Se contrastaron de nuevo el [anuncio de publicación](https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/) y las [ramas mantenidas](https://kubernetes.io/releases/). No se añade un aviso duplicado ni se modifica el manual V2.1. El [resumen público](../logs/gsi-source-recheck-2026-09-15.json) omite los metadatos privados, que se conservan localmente fuera de Git.
