# Preparación de GSI-EDITORIAL-066

Fecha: 30 de octubre de 2026. **20 propuestas pendientes de revisión y aprobación del propietario; ninguna aceptada, aplicada, retirada o activada.**

Hash canónico: `540b92903e0202c73f22e093f70de2d6b32db160c1f90d0097b225589cd4644f`.

## Alcance y criterio

Posiciones 1301–1320 de la cola original: veinte manuales B3-T11, IDs MAN-GSI-P15-117 a 120 y 141 a 156. Se conservan conceptos, IDs, claves, dificultad orientativa y procedencia. Catorce son conceptuales y seis plantean decisiones de aplicación: 119, 147, 148, 149, 153, 155. Las preguntas 151/152 evalúan conceptos de migración; mencionar una organización no las convierte por sí solo en microcasos. La proporción es descriptiva y no una cuota.

Se conservan íntegros enunciado y alternativas de 117, 144, 149, 150. En 156 se conservan las alternativas y se concreta que la comparación requiere trazas, métricas y logs interoperables. Todas reciben explicación de la correcta y justificación individual de tres distractores, asociadas a sus IDs originales y al contenido de la alternativa para funcionar con cualquier barajado.

[Ficha antes/después](GSI_REVISION_LOTE_066.md) · [JSON propuesto](../content/question-reviews/lote-066.json) · [Registro](../logs/gsi-editorial-066-preparation.json).

La rúbrica registrada es juicio del preparador con respaldo documental; no se presenta como revisión humana independiente, aceptación efectiva o calibración estadística.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado y alternativas íntegros | Decisión |
| --- | :---: | --- | :---: | --- |
| MAN-GSI-P15-117 | A | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-118 | D | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-119 | D | Aplicación | No | Pendiente del propietario |
| MAN-GSI-P15-120 | A | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-141 | B | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-142 | D | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-143 | A | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-144 | C | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-145 | A | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-146 | C | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-147 | D | Aplicación | No | Pendiente del propietario |
| MAN-GSI-P15-148 | B | Aplicación | No | Pendiente del propietario |
| MAN-GSI-P15-149 | B | Aplicación | Sí | Pendiente del propietario |
| MAN-GSI-P15-150 | C | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-151 | D | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-152 | A | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-153 | C | Aplicación | No | Pendiente del propietario |
| MAN-GSI-P15-154 | B | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-155 | D | Aplicación | No | Pendiente del propietario |
| MAN-GSI-P15-156 | C | Conceptual | No | Pendiente del propietario |

Cada registro incluye antes/después, motivos, localizador y versión de fuentes, fecha real de comprobación, hashes y decisión pendiente. No se identifica un cambio de clave o concepto que exija reemplazo de ID.

## Fuentes y vigencia

- Fuentes primarias de Microsoft, Jakarta/Eclipse, Oracle, NIST, Apache Maven, Gradle, Hibernate, OpenTelemetry y OWASP comprobadas el 30-10-2026. Se preservan procedencia y fuentes originales.
- Single-file es empaquetado y puede ser framework-dependent o self-contained. Native AOT cambia compilación y límites de técnicas dinámicas; ni toda reflexión queda prohibida ni todo binario es portable a cualquier plataforma.
- Cabeceras reenviadas se vinculan a una topología y proxies de confianza. Autenticación y permisos son responsabilidades distintas en ambos entornos; el contenedor Jakarta no equivale al contenedor de sistema operativo.
- Las equivalencias de DI, ORM y REST son conceptuales: Jakarta publica especificaciones con implementaciones y .NET aporta tecnologías concretas. NuGet, MSBuild, Maven y Gradle tienen responsabilidades diferentes, sin equivalencia uno a uno artificial.
- ORM y SQL directo pueden coexistir; ambos entornos ofrecen SQL nativo en sus APIs de persistencia. Hay que controlar parámetros, recursos y transacciones y medir consultas; el acceso directo no garantiza mayor velocidad ni el ORM garantiza portabilidad de SQL nativo.
- Migrar a JakartaEE9+ afecta las APIs que cambiaron namespace, no todos los paquetes javax. javax.sql es un contraejemplo de JavaSE corroborado también con java --describe-module java.sql en el JDK25 local.
- La unidad transaccional se acota a la misma base compatible y las escrituras participantes; SaveChanges puede aportar la atomicidad sin una transacción explícita adicional. Un contexto o log no acredita por sí solo una transacción común.
- Las preguntas de migración mantienen evaluación conceptual: mencionar una organización no las transforma en microcasos. Se reservan aplicaciones para decisiones de proxy, acoplamiento, SQL, N+1 y unidad transaccional, sin cuota forzada.

- La URL de JakartaEE11 sin extensión devolvió404; se siguió el enlace HTML de la página oficial y se usa solo la URL verificada con .html. No quedan referencias finales a la ruta fallida.
- Learn sirve texto público con avisos de autorización y algunas vistas aspnetcore-10.0 con avisos de moniker inconsistentes y características .NET11: solo se usan apartados identificados y no se adoptan previews.
- La guía .NET de migración aún indica STS18meses; ese apartado se excluye. Los ejemplos net6/Windows7 de single-file y los ensamblados históricos ADO.NET tampoco se adoptan como recomendaciones vigentes.
- Jakarta Security4.0 conserva en su prefacio una mención heredada a1.0; se registra la discrepancia y se utilizan el encabezado y apartados concretos. Las fuentes de JakartaEE9/Transactions2.0 son ediciones históricas pertinentes, sin presentar EE9 como la plataforma actual.
- what_is_gradle devolvió principalmente navegación; se usa Core Concepts con cuerpo y versión visibles. La guía Hibernate redirige al dominio oficial docs.hibernate.org; se usa la URL final y los apartados de fetching, no funciones experimentales.
- Sin dotnet en PATH; Java/Javac25 disponibles. Solo se consulta el descriptor del módulo java.sql, sin compilar ni ejecutar una aplicación .NET/Jakarta o consultas de base. No se instalan runtimes, bibliotecas o herramientas, no se leen secretos y no se convierten documentos, PDF u OCR.

Se usan 37 URLs primarias comprobadas el 30-10-2026. Se conserva la procedencia original junto a la capa editorial nueva. Los ejemplos y textos externos son evidencia y no instrucciones para ejecutar instalaciones, conectar a servicios o modificar bancos.

Las comparaciones entre DI, ORM y REST son de responsabilidad. Jakarta Persistence es una especificación; EF Core es una tecnología con implementación. Kestrel es servidor HTTP, no compilador o contenedor de servlets. La consulta SQL nativa puede formar parte de las APIs ORM: no se impone una sustitución total por acceso directo. La unidad transaccional se ajusta a los recursos que participan y no incluye efectos externos por el mero hecho de invocar un servicio.

## Métricas

| Señal en estas 20 preguntas | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 14 | 7 |
| Acierto al elegir primera máxima (%) | 70.0 | 35.0 |
| Ratio 1,5–menos de 2 | 4 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

Primera mínima correcta: 8/20 (40 %), con dos empates máximos. Siete correctas siguen siendo únicas más largas. Se ha comparado pertinencia y forma de alternativas, sin relleno, cambios de clave o equilibrio artificial de letras para ocultar señales. Longitud y distribución son prioridades de revisión; no certifican calidad o dificultad.

## Validación

El primer pase del auxiliar de cierre falló porque esperaba 50 explicaciones de distractores en vez de 60, al adaptar su literal. Se corrigió la expectativa y se repitió el auxiliar completo; no se modificó el contenido del lote ni su hash. Las ocho comprobaciones de proyecto y Chrome ya habían terminado correctamente.

Resultados: **19 pruebas editoriales, 88 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**; documentación, referencias y progreso sincronizados. Las ocho invocaciones terminan con código 0. La simulación modifica solo veinte manuales, preservando IDs, claves y procedencia; sesenta explicaciones de distractores comprobadas. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración comprobadas. **279 archivos protegidos intactos** y **144 enlaces locales existentes**.

**Diez comprobaciones Chrome correctas** sobre la ficha guardada, con captura transaccional inspeccionada y sin desbordamiento a 1280/390 px. El descriptor local del módulo Java confirma javax.sql; esa comprobación no ejecuta JakartaEE, una migración o una base de datos. No hay ejecución .NET ni repetición de suite HTTP del producto en este lote. Los tres derivados conservan contenido y fecha del inicio, 30 de octubre; frente a HEAD solo cambia la fecha 26→30. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Las tres incidencias editoriales activas previas y las aceptaciones pendientes mantienen abierto el cierre editorial.

Comandos desde la raíz para reproducir las comprobaciones; Playwright/marked ya estaban disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_066_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
java --describe-module java.sql
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_066.py
```

La comprobación local del descriptor confirma javax.sql en Java SE 25.0.4; no ejecuta una aplicación Jakarta, una migración o transacciones de base de datos. No se instala SDK .NET y no hay dotnet en PATH. Chrome comprueba la ficha, no la semántica de esas plataformas. La suite HTTP completa del producto fue repetida antes de preparar estos lotes inactivos: [registro 001](../logs/gsi-editorial-001-revalidation-2026-10-30.json).

## Incidencias y cierre

Se conservan las tres incidencias activas de los lotes 032 (XML), 054 (preservación de dependencias) y 055 (cota O(n)), con corrección propuesta pendiente de aceptación. No se modifican sus textos activos ni se declara cerrado el trabajo. No hay nuevas claves incorrectas confirmadas en 066.

Progreso tras este lote: 20 aceptadas, 1.300 propuestas pendientes, 442 sin propuesta y 1.742 decisiones pendientes del propietario. Cobertura de preparación: 1.320/1.762 sin repetir IDs. Las 128 incidencias IA originales tienen propuesta: 15 aplicadas y 113 pendientes; preparar no acredita resolución editorial.

## Entrega y comprobación manual

Creados: JSON del lote, ficha antes/después, este informe y registro de preparación. Modificados: plan y progreso. Los informes derivados se regeneran y se ha comprobado que mantienen contenido y fecha respecto al inicio. Auxiliares de preparación y pruebas quedan en tmp.

Abre la ficha y compara la unidad transaccional 155 y el cambio de namespace 152 con sus distractores. Los localizadores no se sustituyen por enlaces genéricos: cada pregunta incluye respaldo pertinente; el número total de URLs es 37. Para una aceptación futura se necesita el hash exacto de este informe. Ninguna aceptación histórica o del 001 autoriza aplicarlo.

No se acepta, aplica, activa, publica, fusiona o crea commit de 066. No hay conversiones documentales nuevas ni pendientes y se preservan originales y 202 oficiales. Siguiente paso: revisión expresa del lote y preparación de las restantes preguntas, manteniendo inactivas las propuestas no aprobadas.
