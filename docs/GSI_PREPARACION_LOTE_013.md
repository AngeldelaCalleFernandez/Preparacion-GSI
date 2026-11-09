# Preparación del lote GSI-EDITORIAL-013

Fecha: **27-10-2026**. **Pendiente de aprobación expresa; ninguna propuesta aplicada, activada ni publicada.**

Hash SHA-256 canónico:

`8b5ca29cb40204af9211d3759c0423ee75c482f53115ea945939b48b67e2ac19`

La [ficha antes/después](GSI_REVISION_LOTE_013.md) permite revisar cada pregunta y sus explicaciones. El [JSON](../content/question-reviews/lote-013.json) conserva versiones de partida y propuestas, hashes, motivos, referencias y rúbrica del preparador. Las 20 mantienen concepto, ID, clave y procedencia. La aprobación del piloto no autoriza este lote.

## Alcance y decisiones individuales

Posiciones **241–260** de `review_order`: **20 IA**, 16 de `B1-T06` y cuatro de `B1-T07`. Ninguna pertenece a las 128 incidencias originales; se continúa el recorrido por bloque y tema.

Cinco conservan literalmente enunciado y cuatro alternativas: **AI-GSI-B1-T06-004, 006, 014, AI-GSI-B1-T07-005 y 009**. Sus nuevas explicaciones y referencias requieren aceptación propia, por lo que se registran como `revise`. Se clasifican **12 conceptuales y ocho de aplicación** por la utilidad de los casos, sin cuota obligatoria por lote.

| ID | Modalidad | Decisión propuesta y contraste individual |
| --- | --- | --- |
| AI-GSI-B1-T06-004 | Conceptual | Conservar pregunta y opciones; privada del firmante frente a pública para verificar y claves del destinatario para otras operaciones. |
| AI-GSI-B1-T06-008 | Aplicación | OCSP como consulta a respondedor con estados definidos; no basta «en línea», porque una CRL también se descarga por Internet. |
| AI-GSI-B1-T06-009 | Conceptual | CRL frente a OCSP, CSR y certificado de CA; sustituir Wallet y JIT por objetos cercanos de PKI. |
| AI-GSI-B1-T06-016 | Conceptual | Tiempo: existencia de datos en un instante, distinta de consentimiento, cifrado y fecha original de creación. |
| AI-GSI-B1-T06-017 | Conceptual | PAdES para integración PDF; cuatro nombres reales sin etiquetas falsas que revelen la correcta. |
| AI-GSI-B1-T06-005 | Aplicación | Verificación matemática con certificado adjunto no establece confianza; comprobar ancla, cadena, periodo y estado según política. |
| AI-GSI-B1-T06-006 | Conceptual | Conservar pregunta y opciones; concepto jurídico de firma electrónica frente a mecanismo técnico de firma digital y requisitos de categorías. |
| AI-GSI-B1-T06-007 | Conceptual | Certificado de usuario emitido por CA distinta: sujeto y clave pública, frente a emisor, clave privada y secreto de activación. |
| AI-GSI-B1-T06-010 | Aplicación | Uso actual de certificado no caducado: comprobar revocación; ni fechas, firma del emisor ni copia íntegra acreditan ese estado. |
| AI-GSI-B1-T06-012 | Conceptual | Cualificada: avanzada y combinación de certificado y dispositivo cualificados. Comparar cuatro combinaciones próximas; admitir gestión remota conforme a requisitos. |
| AI-GSI-B1-T06-013 | Conceptual | Avanzada: detectar modificaciones, sin prometer impedirlas, cifrar ni exigir siempre los elementos de cualificada. |
| AI-GSI-B1-T06-014 | Conceptual | Conservar pregunta y opciones; equivalencia con manuscrita, sin notario añadido ni veracidad material absoluta. |
| AI-GSI-B1-T06-015 | Aplicación | Entidad como creador del sello: distinguir sello, firma de representante, sello temporal y certificado de sitio web. |
| AI-GSI-B1-T06-018 | Conceptual | XAdES/XML frente a intercambios entre CMS, PDF y contenedor ZIP; distinguir base técnica de documento transportado. |
| AI-GSI-B1-T06-019 | Aplicación | Archivo de larga duración: conservar material para validación futura respecto del instante pertinente, sin validez eterna ni formatos inmutables. |
| AI-GSI-B1-T06-020 | Aplicación | Tarjeta reconocida y PIN introducido: no equivalen a validar certificado ni firmar todo documento abierto; funciones distintas de soporte y credenciales. |
| AI-GSI-B1-T07-001 | Aplicación | Códigos con tabla adicional necesaria, separada y protegida: seudonimización, distinta de anonimato, agregación o cifrado íntegro. |
| AI-GSI-B1-T07-005 | Aplicación | Conservar caso y opciones; cumplir y poder demostrarlo distingue responsabilidad proactiva de exactitud, conservación y finalidad. |
| AI-GSI-B1-T07-009 | Conceptual | Conservar pregunta y opciones; salud como categoría especial, sin suponer que contactos e identificadores ordinarios quedan libres de protección. |
| AI-GSI-B1-T07-010 | Conceptual | Prohibición con excepciones del artículo 9 y licitud general; consentimiento explícito cuando proceda y publicación manifiesta por el interesado. |

Los escenarios son didácticos, no incidentes, certificados o expedientes reales. Las explicaciones se asocian a IDs originales de opción y describen su contenido, sin depender de las letras visibles tras barajar. Las evidencias y aceptaciones históricas de IA permanecen como procedencia, sin atribuirlas a estas versiones propuestas.

## Fuentes, vigencia y límites

Consulta real: **27-10-2026**. Las fichas registran 16 URLs primarias distintas, con localizadores y versión. Las publicaciones BOE de eIDAS y RGPD no se presentan como consolidaciones; se contrasta la reforma eIDAS para los preceptos usados. Las consolidaciones informativas españolas tampoco sustituyen publicaciones oficiales.

| Fuente | Versión y localizadores principales |
| --- | --- |
| [NIST FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) | Final 03-02-2023; sección 3 y 3.2–3.3, páginas impresas 9 y 12–15. Fundamento de generación, verificación y garantías, sin selección de parámetros. |
| [RFC 5280](https://www.rfc-editor.org/rfc/rfc5280.html) | Mayo de 2008; secciones 4.1.1.3, 4.1.2.4–7, 5.1.2.6 y 6.1.3.a: sujeto, clave pública, emisor, vigencia, revocación y camino de confianza. |
| [RFC 6960](https://www.rfc-editor.org/rfc/rfc6960.html) | Junio de 2013; 2.1–2.2, 2.4 y 3.2: consulta, estados, tiempos y aceptación de respuesta OCSP. |
| [RFC 2986](https://www.rfc-editor.org/rfc/rfc2986.html) | Noviembre de 2000, PKCS #10 v1.7; secciones 1 y 4: solicitud de certificación, distinta de certificado y estado. |
| [RFC 3161](https://www.rfc-editor.org/rfc/rfc3161.html) | Agosto de 2001; secciones 1 y 2.1: evidencia de existencia, tiempo fiable y huella. |
| [eIDAS 910/2014](https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-81822) | Publicación DOUE 28-08-2014; artículos 3.9–12, 3.24–25, 3.33 y 3.38; 25.1–2, 26 y 41.1–2, con contraste de reforma. |
| [Reglamento 2024/1183](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608) | Publicación DOUE 30-04-2024; artículo 1, puntos 3, 24, 28, 35, 36, 41 y 42: definiciones, avanzada, gestión remota y sellos. |
| [PAdES, EN 319 142-1](https://www.etsi.org/deliver/etsi_en/319100_319199/31914201/01.02.01_60/en_31914201v010201p.pdf) | **V1.2.1, 2024-01**, publicada; secciones 1, 4.1 y 6.3, tabla 1 y requisitos de material de validación, páginas 18–22. |
| [XAdES, EN 319 132-1](https://www.etsi.org/deliver/etsi_en/319100_319199/31913201/01.03.01_60/en_31913201v010301p.pdf) | V1.3.1, 2024-07; secciones 1 y 4, base XML. |
| [CAdES, EN 319 122-1](https://www.etsi.org/deliver/etsi_en/319100_319199/31912201/01.03.01_60/en_31912201v010301p.pdf) | V1.3.1, 2023-06; secciones 1 y 4, base CMS. |
| [ASiC, EN 319 162-1](https://www.etsi.org/deliver/etsi_en/319100_319199/31916201/01.01.01_60/en_31916201v010101p.pdf) | V1.1.1, 2016-04; sección 1, página 7, contenedor ZIP y objetos asociados. |
| [Policía: Seguridad del DNIe](https://www.dnie.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1010) | Página técnica abierta, pie v.20260505; solo preguntas 9–10 sobre claves y PIN, sin adoptar su apartado legal antiguo. |
| [Policía: Ejemplo de uso](https://www.dnie.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1079) | Página técnica abierta; autenticación y «Firma de Trámites Administrativos», pasos 4–10, como distinción funcional. |
| [RD 255/2025, DNI](https://www.boe.es/buscar/act.php?id=BOE-A-2025-6601) | Texto inicial publicado 02-04-2025; artículos 11.2–4 y 12, con distinción respecto de versión digital del artículo 13. |
| [Ley 39/2015](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) | Consolidación actualizada 06-11-2024; artículos 9, 10.4–5 y 11: identidad y firma, con admisión condicionada. |
| [RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) | Publicación DOUE 04-05-2016; considerandos 26 y 51, artículos 4.1, 4.5, 4.15, 5, 6, 9 y 32.1.a, según ficha. |

Se han preservado estas condiciones y distinciones:

- **OCSP y CRL.** Descargar una CRL por Internet no la convierte en OCSP. El caso de OCSP pide intercambio con respondedor y estados concretos. Deben verificarse firma, autoridad, certificado consultado y tiempos; `good` no acredita todo el camino de confianza, y `unknown` no equivale a `good`.
- **Versiones de RFC.** Se contrastaron sus fichas: RFC 6960 tiene actualizaciones 8954 y 9654 sobre Nonce, RFC 3161 tiene 5816 y RFC 5280 tiene actualizaciones posteriores. Los localizadores respaldan conceptos y campos señalados; no se declara una revisión integral de todos sus cambios ni se prescribe una configuración de despliegue.
- **Confianza e instante.** Verificar la operación matemática no hace confiable cualquier certificado adjunto. Caducidad y revocación son distintas. El supuesto de uso actual no decide por sí solo sobre firmas históricas, que necesitan instante y evidencia pertinentes.
- **Sujeto y emisor.** El certificado de usuario se emite por una CA distinta del titular para evitar la coincidencia propia de otros casos. Se distingue certificado público de almacén que pueda agrupar certificado y clave privada; el sujeto no tiene que ser necesariamente una persona física identificada por nombre civil.
- **Categorías eIDAS.** Cualificada exige avanzada, certificado y dispositivo cualificados; puede existir gestión remota conforme a requisitos. Detectar alteraciones no significa impedir cualquier cambio o cifrar. Equivalencia con manuscrita no asegura veracidad absoluta ni convierte todas las firmas en jurídicamente idénticas; tampoco priva automáticamente de efectos a las no cualificadas.
- **Creador del sello.** El supuesto pide el instrumento creado por la persona jurídica. No se niega la aceptación de firma cualificada de representante autorizado cuando proceda: se pregunta por figura y creador, sin afirmar exclusividad general.
- **ETSI.** Se abrieron los directorios y PDFs publicados. La revisión PAdES **V1.3.0 de 2026-08 está en aprobación**, según el programa de trabajo y el directorio consultados; se respalda con V1.2.1 publicada. No se presenta el borrador como norma final. PDF, XML, CMS y ZIP se diferencian sin negar combinaciones o documentos transportados.
- **Tiempo y longevidad.** La prueba de existencia no acredita necesariamente la primera creación del documento. Conservar material de validación permite examinar firmas después; no promete validez eterna, ausencia de futuras comprobaciones ni formatos inmutables. Las presunciones propias de sello temporal cualificado no se atribuyen a cualquier sello.
- **Fuentes del DNIe.** El PDF DPC v3.2 de Policía devolvió 502 y no se registra como leído; su extracto de búsqueda no se usa como comprobación íntegra. Se emplean las páginas oficiales abiertas y RD 255/2025. La página de seguridad conserva una referencia a Ley 59/2003: solo se usan sus preguntas técnicas 9–10, con respaldo normativo separado. No se inventan fechas de actualización de contenido ni intentos de PIN. La ficha FIPS mantiene una nota oficial de posibles actualizaciones de 12-05-2025; se usa el fundamento conceptual, no parámetros concretos.
- **Tarjeta y operaciones.** El caso se refiere a tarjeta física y chip, no equipara todas las funcionalidades de DNI digital móvil. PIN correcto, soporte reconocido, autenticación y acto de firma no son equivalentes. No se prescribe el flujo actual de una sede ni se realiza ninguna operación de identidad real.
- **Protección de datos.** La seudonimización explicita necesidad de información adicional separada y protegida. La salud es categoría especial; un contacto ordinario puede seguir siendo personal y su contexto puede revelar información especial. La excepción del artículo 9 no elimina la licitud general; consentimiento explícito cuando sea la excepción usada y publicación manifiesta por el interesado tienen condiciones propias.

En la última lectura se precisó que la atribución del caso de seudonimización requiere la tabla y se completó el localizador 3.38 para certificado de sitio web. Se regeneraron propuesta, ficha y hash; el [registro de preparación](../logs/gsi-editorial-013-preparation.json) conserva el hash del borrador anterior no aprobado y las razones. No se alteró la versión de partida ni ninguna clave. La rúbrica es juicio del preparador, pendiente de revisión humana y sin calibración estadística.

## Métricas antes y propuesta

Análisis 2.0.0 sobre las 20 preguntas; simulación en memoria.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 4 | 3 |
| Acierto por primera alternativa de longitud máxima | 4/20 (20 %) | 5/20 (25 %) |
| Ratio correcta/distractor máximo de 1,5–<2 | 0 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 9 | 0 |
| Feedback correcto e incorrecto idénticos | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos iniciales en distractores | 0 | 0 |
| Explicación individual de los tres distractores | 0 | 20 |

El acierto heurístico por primera alternativa más larga **sube del 20 % al 25 %**; no se presenta como mejora ni se convierte en objetivo. No se cambian claves ni se rellenan textos para ajustar longitudes o letras. Ausencia de alertas y mayor extensión de feedback no certifican calidad pedagógica. La dificultad continúa como orientativa, sin calibración estadística.

## Validación y reproducción

La simulación debe afectar únicamente a **20 IA**, cero manuales, cero oficiales y cero escrituras en bancos activos. Se comprueban JSON, esquemas, IDs, claves, fuentes, 60 explicaciones, hashes, reproducción de la ficha y rechazo de aceptaciones que no correspondan al lote.

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-013.json --render docs/GSI_REVISION_LOTE_013.md
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
git diff --check
```

No se modifica código ni bancos activos. No se repite la suite HTTP completa para estas propuestas; la ejecución completa del piloto conserva su evidencia propia y no se atribuye a una ejecución nueva. Para revisar el resultado, abrir la ficha y cotejar cada alternativa y explicación con su localizador. Entrenamiento, Simulacros, estadísticas y Refuerzo siguen consumiendo los bancos actuales; estas propuestas no se activan hasta aprobación y aplicación expresas.

Resultado: **17 pruebas editoriales superadas**, **35 JSON y 21 esquemas validados**, 1.964 estructuras de pregunta válidas y **19.251 controles de integridad sin errores técnicos**. La documentación de la aplicación sigue sincronizada. El validador de referencias cubrió cuatro bloques, 57 temas y 37 Markdown del catálogo; una comprobación adicional verificó los **33 enlaces locales** de ficha, informe y plan.

La simulación confirmó exactamente 20 cambios IA y ninguno manual u oficial, sin escrituras activas. Se comprobaron las 60 explicaciones, los cinco enunciados con alternativas conservados, todos los IDs y claves, procedencia, campos históricos de fuente y reproducción de la ficha. Las evidencias IA y aceptaciones históricas mantienen sus campos sin atribuirse al texto nuevo. Los **52 archivos protegidos** de bancos, aceptación, base y entregas anteriores conservan sus hashes. Las oficiales siguen idénticas byte a byte al commit actual y a la base auditada; manuales e IA mantienen el contenido del commit actual. Se rechazaron tanto una aceptación vacía como el recibo real del piloto al probarlos frente al lote 013. No hay aceptaciones nuevas de los lotes 002–013. Los informes derivados conservan contenido y fecha existentes al iniciar la preparación. `git diff --check` y la comprobación de espacios finales de los cuatro artefactos nuevos fueron correctos. No hubo fallos técnicos de validación; el acceso fallido al PDF de Policía y su respaldo alternativo se documentan en fuentes. El resultado técnico no acredita aceptación editorial de las propuestas.

## Entrega y continuidad

Creados: `content/question-reviews/lote-013.json`, `docs/GSI_REVISION_LOTE_013.md`, este informe y `logs/gsi-editorial-013-preparation.json`.

Actualizados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Los informes derivados de cobertura, validación final y revisión histórica se regeneran comprobando contenido y fecha ya existente de 27-10-2026. No se convierten documentos ni hay conversiones nuevas pendientes de este hito.

Este lote deja **20 propuestas pendientes, cero aceptadas, cero aplicadas y cero retiradas**. El conjunto queda en **20 aceptadas y 240 propuestas pendientes**, con **1.742 decisiones pendientes de aceptación**, de las que **1.502** aún no tienen propuesta. Los lotes 002–013 reúnen 113 incidencias IA originales, otras 25 IA y 102 manuales; las incidencias originales conservan 15 aplicadas y 113 propuestas pendientes.

Se continuará por bloque y tema. El cierre exige decisión humana individual para los **1.762 IDs** y validación del contenido activo. Los lotes nuevos requieren aprobación expresa por hash antes de aplicar, activar, publicar o fusionar. Se distingue preparación editorial de aceptación, señales automáticas y calibración todavía no realizada.
