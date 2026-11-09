# Preparación de GSI-EDITORIAL-065

Fecha: 30 de octubre de 2026. Estado: **20 propuestas pendientes de revisión y aceptación del propietario; ninguna aplicada o activada.**

Hash canónico: `833b9301b8b808de8cb3e16cdc3f18b68c4bd2eec9730a1be29191f0a5896fba`.

## Alcance y criterio

Posiciones 1281–1300 de la cola original: veinte manuales B3-T11, MAN-GSI-P15-097  a 116. Se conservan IDs, conceptos, claves, dificultad orientativa y procedencia. Quince son conceptuales y cinco son microcasos (097,098,099,101,113); la proporción describe el resultado, sin imponer cuotas. Seis mantienen íntegramente enunciado y alternativas:100, 104, 107, 108, 111, 114. Todas reciben explicación de la correcta y justificación de los tres distractores por su ID original.

La rúbrica del JSON refleja el juicio del preparador con respaldo documental. No acredita aceptación humana independiente ni calibración estadística. Las explicaciones se refieren al contenido y funcionan con cualquier orden de presentación.

[Ficha antes/después](GSI_REVISION_LOTE_065.md) · [Propuesta JSON](../content/question-reviews/lote-065.json) · [Registro](../logs/gsi-editorial-065-preparation.json).

## Revisión individual

| ID | Clave conservada | Forma | Formulación íntegra conservada | Decisión |
| --- | :---: | --- | :---: | --- |
| MAN-GSI-P15-097 | A | Microcaso | No | Pendiente del propietario |
| MAN-GSI-P15-098 | A | Microcaso | No | Pendiente del propietario |
| MAN-GSI-P15-099 | D | Microcaso | No | Pendiente del propietario |
| MAN-GSI-P15-100 | B | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-101 | B | Microcaso | No | Pendiente del propietario |
| MAN-GSI-P15-102 | B | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-103 | D | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-104 | C | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-105 | C | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-106 | B | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-107 | B | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-108 | A | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-109 | D | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-110 | C | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-111 | B | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-112 | C | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-113 | C | Microcaso | No | Pendiente del propietario |
| MAN-GSI-P15-114 | A | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-115 | D | Conceptual | No | Pendiente del propietario |
| MAN-GSI-P15-116 | A | Conceptual | No | Pendiente del propietario |

Las razones, cuatro alternativas, explicación, tres errores individuales, fuentes con localizador/versión/fecha y hashes de cada versión están en la ficha y el JSON. No se ha identificado un cambio de clave que requiera sustitución o retirada.

## Fuentes y límites

- Veintisiete fuentes primarias comprobadas el 30-10-2026: Microsoft, IETF, OpenID Foundation, OpenTelemetry y Docker. Procedencia y fuentes originales preservadas.
- EF Core3+ diferencia predicado no traducible y proyección superior; elegir ejecución cliente exige valorar transferencia. ToList materializa, sin copia profunda. Paginar requiere orden único y atender cambios concurrentes.
- Cookie, bearer y JWT son ejes distintos; identidad requiere credenciales validadas. El caso de autorización exige autenticación expresamente, sin generalizarlo a cualquier política.
- OAuth se trata como autorización, OIDC como capa de autenticación, JWT como formato y SAML como aserciones XML. RFC9700 actualiza la seguridad; no se recomiendan flujos históricos solo por aparecer en RFC6749.
- Data Protection usa claves para recuperar datos de aplicación; no sustituye hash de contraseñas, TLS o cifrado transparente de base. Antiforgery trata CSRF y no elimina XSS o controles de autorización.
- TLS se acota a HTTPS con certificados; también existen modos PSK en TLS. Variables de entorno no implican cifrado, estructura de logs no elimina secretos, y readiness no equivale a liveness.
- OpenTelemetry no impone backend ni se limita a paneles. Contenedores requieren plataforma compatible y mantenimiento; no se promete build idéntico en bytes. Framework-dependent excluye el runtime en la comparación equivalente.

- Learn muestra avisos de autorización aunque devuelve texto público y algunas vistas ASP.NET Core10 presentan avisos de versión inconsistentes: se registra vista solicitada y texto realmente leído, sin login ni adopción de preview.
- La fuente ADO.NET usa una ruta histórica de .NET Framework; solo se toman las distinciones conceptuales. No se generalizan ensamblados, proveedores o defaults históricos.
- Sin SDK dotnet comprobado en PATH durante esta fase; no se instala ni ejecuta .NET, EF Core o ASP.NET Core. No se conecta a bases de datos, proveedores de identidad o nubes ni se prueban ataques. No se leen claves, tokens o variables de secretos.
- Sin documentos convertidos, PDF u OCR. Los ejemplos de las páginas se tratan como documentación, no como instrucciones para ejecutar o autenticarse.

Las páginas documentales y sus ejemplos se usan como evidencia; no autorizan ejecutar comandos o modificar la aplicación. Las 27 URLs primarias se comprobaron el 30-10-2026; se conservan fechas y fuentes originales además de las referencias nuevas. El caso de JWT exige autenticación expresamente y evita tratar cualquier autorización como necesariamente autenticada. No se presupone que bearer signifique JWT, que una cookie exija sesión en memoria o que TLS otorgue permisos.

## Métricas

| Señal en estas 20 preguntas | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 10 | 8 |
| Acierto primera máxima (%) | 50.0 | 45.0 |
| Ratio 1,5–menos de 2 | 7 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 0 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

Primera alternativa mínima correcta:8/20 (40 %); hay un empate máximo. Las ocho correctas únicas más largas y el acierto 45 % por primera máxima siguen siendo señales descriptivas. No se alteran claves ni se añade relleno o se impone equilibrio de letras para ocultarlas. Se han comparado las cuatro alternativas por responsabilidad y alcance: la longitud por sí sola no acredita ni descarta calidad. Dificultad sin calibración.

Se ha diferenciado el distractor D de 116 durante la revisión del preparador. El registro conserva el hash previo y la versión anterior; la clave A permanece. No existía aceptación de esa propuesta.

## Validación

Resultados: **19 pruebas editoriales, 87 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso correctos. Las ocho invocaciones terminan con código 0. La simulación modifica exclusivamente veinte manuales; conserva IDs, claves, procedencia y las sesenta explicaciones de distractores. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración comprobadas. **275 archivos protegidos intactos** y **142 enlaces locales existentes**.

**Diez controles Chrome correctos** sobre la ficha final; captura de paginación inspeccionada y ausencia de desbordamiento a 1280/390 px. No se ejecuta .NET o SQL ni se repite la suite HTTP del producto. Los tres derivados conservan contenido y fecha del inicio, 30 de octubre; frente a HEAD solo varía la fecha 26→30. Bancos activos iguales a HEAD y oficiales idénticas en bytes al banco auditado. Las tres incidencias editoriales activas anteriores y las decisiones pendientes mantienen abierto el cierre editorial.

Comandos reproducibles desde la raíz; el recorrido Chrome usa Playwright y marked ya disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_065_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_065.py
```

La comprobación Chrome de este lote se limita a la ficha. El producto y los bancos permanecen iguales aHEAD; su suite completa fue repetida en la continuación anterior y se conserva en [la revalidación del001](../logs/gsi-editorial-001-revalidation-2026-10-30.json). No se atribuye a esa suite validación conceptual de propuestas inactivas.

## Incidencias pendientes y cierre

Se arrastran sin modificar las tres incidencias activas de lotes 032 (XML), 054 (preservación de dependencias al normalizar) y 055 (cota O(n)). Sus correcciones siguen propuestas, pendientes de aceptación; impiden declarar cerrado el trabajo editorial. El lote065 no detecta nuevas claves incorrectas confirmadas.

Tras preparar este lote:20 aceptadas, 1.280 propuestas pendientes y 462 sin propuesta; continúan pendientes 1.742 decisiones de propietario. La cobertura preparada es 1.300/1.762, sin duplicar IDs. Las 128 incidencias IA originales tienen propuesta: 15 aplicadas y 113 pendientes; no equivale a resolución editorial.

## Entrega y prueba manual

Creados: propuesta JSON, ficha antes/después, este informe y registro de preparación. Modificados: plan vigente y progreso editorial. Los informes derivados se regeneran mediante el validador y se ha comprobado que mantienen contenido y fecha respecto al inicio. Auxiliares de generación, validación y captura quedan en tmp, sin dependencias nuevas.

Abre la ficha, revisa el microcaso de paginación099 o el de sondas113 y compara sus explicaciones con las cuatro alternativas. Para una aceptación futura debe usarse el hash exacto de este informe. No hay aceptación, aplicación, activación, publicación, fusión o commit de este lote. No se convierten documentos y no hay conversiones nuevas pendientes; originales y 202 oficiales intactos.

Siguiente paso: revisión expresa de este lote y preparación de las restantes preguntas sin activar propuestas pendientes.
