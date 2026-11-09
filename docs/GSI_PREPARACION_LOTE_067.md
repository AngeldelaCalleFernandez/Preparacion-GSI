# Preparación de GSI-EDITORIAL-067

Fecha: 30 de octubre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `a26747baf487db0ba608ee104e8b6bdcee2779d2ac64f7edc4bafc345713b10a`.

## Alcance y criterio

Posiciones 1321–1340 de la cola: cuatro manuales B3-T11 (MAN-GSI-P15-157 a 160) y dieciséis IA B3-T12 (001–006 y 008–017). Se conservan IDs, conceptos, claves, dificultad orientativa y procedencia. Catorce son conceptuales y seis aplicaciones: manuales 158/160 e IA 006/009/012/015. Es una distribución descriptiva, sin imponer cuotas.

Se conservan íntegros enunciado y alternativas de las manuales 157 y 159. Las IA reciben alternativas más próximas al concepto, sin cambiar su clave. Todas tienen explicación de la correcta y tres justificaciones individuales asociadas a los IDs originales y al contenido para funcionar con cualquier barajado.

[Ficha antes/después](GSI_REVISION_LOTE_067.md) · [Propuesta JSON](../content/question-reviews/lote-067.json) · [Registro](../logs/gsi-editorial-067-preparation.json).

La rúbrica del JSON expresa juicio del preparador y respaldo documental; no acredita aceptación humana independiente, dificultad calibrada o cierre editorial. Se conservarán las aceptaciones históricas de las dieciséis IA sin atribuirlas a los textos nuevos.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado y alternativas íntegros | Decisión |
| --- | :---: | --- | :---: | --- |
| MAN-GSI-P15-157 | A | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-158 | B | Aplicación | No | Pendiente del propietario |
| MAN-GSI-P15-159 | A | Conceptual | Sí | Pendiente del propietario |
| MAN-GSI-P15-160 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T12-001 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-002 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-003 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-004 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-005 | D | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-006 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T12-008 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-009 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T12-010 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-011 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-012 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T12-013 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-014 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-015 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B3-T12-016 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B3-T12-017 | A | Conceptual | No | Pendiente del propietario |

La ficha recoge motivo, antes/después, fuentes con localizador/versión/fecha y hashes de cada ítem. No se identifican cambios de clave o concepto que exijan reemplazo o retirada.

## Fuentes y vigencia

- Fuentes primarias comprobadas el 30-10-2026: Microsoft, Jakarta/Eclipse, Ecma, WHATWG, IETF, W3C, IANA, OpenAPI, AsyncAPI y OWASP; MDN se usa como documentación de navegador para contrastar cookies actuales. Se mantienen las fuentes y procedencia originales.
- La comparación de plataformas no opone especificaciones abiertas a un .NET cerrado: .NET es abierto y CLI está estandarizado. Portabilidad de APIs no elimina configuración, versiones o recursos externos.
- El backend y la interfaz HTTP se separan de DOM, representación y enrutado local. El framework frontend no sustituye la semántica de HTML, eventos o módulos. HTTPS protege tránsito y autenticación del servicio, sin resolver permisos, SQL o XSS.
- Internacionalización prepara adaptación y localización la realiza. UTC almacena un instante, pero la presentación necesita zona y reglas de esa fecha; un locale no fija por sí solo la zona.
- Instalación PWA y soporte offline se tratan por separado. Manifest es metadato y service worker permite estrategias de respuesta/almacenamiento; no se exige este último para cualquier forma de instalación ni se afirma soporte uniforme.
- HttpOnly restringe exposición a script, Secure condiciona el canal y SameSite aborda contexto de envío. No son controles intercambiables; se documenta la excepción operativa localhost sin generalizarla a producción.
- ETag es un validador opaco, no una duración ni una firma obligatoria. El caso GET usa If-None-Match/304 y metadatos de caché. CORS regula respuesta compartida y preflight, no todo envío; CSP en cumplimiento es distinto de Report-Only.
- OpenAPI describe interfaz HTTP y no aplica automáticamente lo documentado. AsyncAPI describe APIs de mensajes y puede usar HTTP. OAuth autoriza y OIDC añade autenticación; formato JWT no equivale a validación ni convierte ID Token en access token.

- Manifest y CSP3 aparecen como Working Draft26/27-10-2026; Service Workers como Candidate Recommendation Draft29-10-2026. Se registran como trabajo en curso y se usan mecanismos identificados, sin atribuirles estado Recommendation o soporte universal.
- La versión principal de ECMA402 aparece como borrador2027; se adopta la edición publicada fija12/2025 para DateTimeFormat y timeZone, junto a la teoría de IANA. No se supone una versión de tzdb instalada o precisión histórica universal.
- RFC6265 se cita para atributos de2011; SameSite y comportamiento actual se contrastan con documentación específica. MDN es complemento de implementación, no sustituto de la especificación normativa.
- OpenAPI3.2.0 y AsyncAPI3.0.0 son ediciones fijas leídas; sus páginas enlazan otras versiones, por lo que no se anuncian como las últimas.
- Las fuentes de Learn mantienen avisos de autorización aunque se devuelve texto público. Se usa ese texto sin login o evasión; documentos y ejemplos externos no autorizan ejecutar sus instrucciones.
- Sin ejecución de aplicación .NET/Jakarta, protocolos de identidad, ataques, base de datos o instalación PWA. Chrome comprueba la ficha; no se leen cookies o secretos del usuario ni se convierten documentos, PDF u OCR.

Se utilizan 31 URLs de respaldo comprobadas el 30-10-2026. Se conservan también los documentos de procedencia y sus fechas históricas. Las fuentes externas se tratan como evidencia, no como instrucciones para ejecutar herramientas o alterar la aplicación.

Se acota el uso de HTTPS a configuración y certificado válidos. Secure, HttpOnly y SameSite no se intercambian; se explica la excepción localhost según navegador. CORS distingue envío y lectura de respuesta; CSP distingue cumplimiento y observación. El caso de ETag es GET condicional y no una firma o tiempo de frescura. Las fechas de publicación y estado de borrador de W3C están registrados; no se presentan como Recommendations finales.

## Métricas

| Señal en estas 20 preguntas | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 15 | 6 |
| Acierto primera máxima (%) | 75.0 | 30.0 |
| Ratio 1,5–menos de 2 | 5 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 16 | 0 |
| Feedback correcto/incorrecto idéntico | 16 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

La primera mínima es correcta en 8/20 (40 %); no hay empates máximos. Se han comparado forma, alcance y error conceptual de las alternativas. Las seis correctas únicas más largas siguen siendo una señal descriptiva, no un defecto acreditado ni una certificación de calidad. No se cambia la clave, añade relleno o impone equilibrio de letras para ocultarla. No hay calibración estadística.

Durante la inspección visual se aclaró la separación del código 304 y se normalizó la grafía OAuth2.0 en feedback y un enunciado. El registro conserva hash e ítems previos; no cambia ninguna clave o alternativa y no había aceptación.

## Validación

Resultados: **19 pruebas editoriales, 89 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho invocaciones con código 0. Simulación limitada a **4 manuales y 16 IA**, con claves, IDs y procedencia conservados y sesenta explicaciones individuales de distractores. Se preservan los 16 hashes de procedencia de la aceptación IA histórica, que no acepta las propuestas nuevas. Tres aceptaciones improcedentes rechazadas y dos barreras de regeneración comprobadas. **283 archivos protegidos intactos** y **146 enlaces locales existentes**.

**Diez controles Chrome correctos sobre la ficha final**, con captura de revalidación GET/ETag inspeccionada y sin desbordamiento a 1280/390 px. No se ejecutan los protocolos o supuestos ni se repite la suite HTTP del producto sin cambios. Los derivados conservan contenido y fecha 30 del inicio; frente a HEAD solo cambia la fecha 26→30. Bancos activos iguales a HEAD y oficiales iguales en bytes a la auditoría. Las tres incidencias editoriales anteriores y aceptaciones pendientes mantienen abierto el cierre.

Comandos desde la raíz; Chrome usa Playwright/marked ya disponibles:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_067_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_067.py
```

El navegador ha comprobado la presentación de la ficha, no el comportamiento de todos los estándares citados. No se ejecutan ataques, se leen secretos/cookies del usuario o se instala una PWA. La aplicación y bancos permanecen sin cambios; la suite HTTP completa previa consta en [la revalidación del 001](../logs/gsi-editorial-001-revalidation-2026-10-30.json). No se repite para estas propuestas inactivas ni se atribuye a ella validación pedagógica.

## Incidencias y cierre

Permanecen las tres incidencias activas anteriores, con correcciones propuestas en lotes 032 (XML), 054 (dependencias en normalización) y 055 (cota O(n)), pendientes de aceptación. Se conserva su evidencia y el impedimento de cierre editorial. No se identifican nuevas claves incorrectas confirmadas en este lote.

Tras preparar 067: 20 aceptadas, 1.320 propuestas pendientes, 422 sin propuesta y 1.742 decisiones pendientes de propietario. Se cubren 1.340/1.762 IDs sin duplicar. Las 128 incidencias IA originales mantienen propuesta: 15 aplicadas y 113 pendientes; no es resolución editorial. La cola adicional preparada comprende 113 IA originales, 412 IA restantes y 795 manuales; los 16 nuevos IDs IA de este lote no pertenecen al grupo original de incidencias.

## Entrega y revisión manual

Creados: JSON propuesto, ficha, este informe y registro. Modificados: plan y progreso editorial. El validador regenera los informes derivados y se ha comprobado que mantienen contenido y fecha del inicio. Auxiliares y captura quedan en tmp, sin dependencias nuevas.

Abre la ficha y compara los microcasos de UTC (006), revalidación (012) y CSRF (015) con la explicación de cada opción. La aprobación futura debe identificar el hash exacto del lote; las aceptaciones históricas o del 001 no lo autorizan. Ninguna propuesta se acepta, aplica, activa, publica o fusiona y no se crea commit.

Las 202 oficiales, los bancos activos y los documentos originales se preservan. No hay conversiones nuevas o pendientes. Siguiente paso: revisión expresa y preparación de las 422 preguntas restantes, sin activar textos no aceptados.
