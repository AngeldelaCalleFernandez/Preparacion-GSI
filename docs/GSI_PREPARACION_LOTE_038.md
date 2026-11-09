# Preparación editorial GSI-EDITORIAL-038

Fecha: **28-10-2026**. **20 propuestas pendientes de aprobación expresa; cero aceptadas, aplicadas, activadas o retiradas en este lote.**

Hash canónico vigente: `ad0e0da31b7af9ab98944b493ef534ebce5b1efd2156638c0977e0988673fe1c`. Base activa: `e3e20ab879518c899806a70575eead28b3b35e6f`.

[Ficha antes/después](GSI_REVISION_LOTE_038.md), [propuestas JSON](../content/question-reviews/lote-038.json) y [registro de preparación](../logs/gsi-editorial-038-preparation.json).

## Alcance y criterio

Posiciones **741–760** de la cola: **veinte IA, tres B2-T12 y diecisiete B2-T13**, en el orden previsto, incluidas las preguntas priorizadas T12-009 y T13-009/012/013/014 después de IDs mayores. Se revisan métricas y datos de atención, defensa y amenazas, herramientas, respuesta a incidentes, preservación forense, hash y HMAC.

Se conservan concepto, ID, clave original, dificultad orientativa, procedencia y campos históricos de fuente. **AI-GSI-B2-T13-012 (DLP) conserva íntegros enunciado y alternativas**, cuyos distractores ya eran pertinentes. Se corrige su feedback genérico para comentar PAM, SOAR y SIEM, sin referirse a alimentación eléctrica o DNS ausentes de las opciones. Las demás diecinueve reciben distractores próximos o precisión del contexto. Hay veinte explicaciones correctas y sesenta justificaciones individuales de error con los IDs originales, referidas al contenido para funcionar con cualquier orden visible.

**14 conceptuales y seis de aplicación**: integración de datos en CRM, presión por reducir AHT, acceso desde LAN, aislamiento de equipo, retorno tras restauración y comparación de copia forense con SHA-256. El aislamiento ya era un caso; los contextos restantes aclaran el criterio o exigen aplicarlo. La distribución no se impone por cuota.

Los estados heredados del objeto futuro no activan las propuestas. Las aceptaciones IA históricas no autorizan estas versiones. La rúbrica refleja el juicio del preparador por fuentes, pendiente del propietario; no es revisión humana independiente ni calibración.

| ID | Clave | Tipo | Motivo |
| --- | --- | --- | --- |
| AI-GSI-B2-T12-018 | C | Conceptual | Mantener significado FCR y clave C; comparar métricas reales y declarar criterios operativos sin universalizar una ventana de fabricante. |
| AI-GSI-B2-T12-009 | C | Aplicación | Mantener minimización en CRM público y clave C; microcaso de integración que distingue disponibilidad técnica y necesidad. |
| AI-GSI-B2-T12-019 | C | Aplicación | Mantener riesgo de optimizar AHT aisladamente y clave C; microcaso de objetivo de duración, sin afirmar que toda reducción empeore el servicio. |
| AI-GSI-B2-T13-002 | A | Conceptual | Mantener defensa en profundidad y clave A; comparar principios próximos, sin convertir una barrera individual en estrategia completa. |
| AI-GSI-B2-T13-003 | D | Aplicación | Mantener principio Zero Trust y clave D; caso LAN que aplica el concepto, retirando «en el tema» y distractores caricaturescos. |
| AI-GSI-B2-T13-004 | A | Conceptual | Mantener ataque a disponibilidad y clave A; tres categorías de amenaza próximas, sin identificar toda saturación con ataque. |
| AI-GSI-B2-T13-005 | D | Conceptual | Mantener extracción no autorizada y clave D; comparar modificación, respaldo, descubrimiento y salida de datos. |
| AI-GSI-B2-T13-006 | B | Conceptual | Mantener vulnerabilidad frente a exploit y clave B; pares de conceptos comparables, sin afirmar incidente por mera existencia. |
| AI-GSI-B2-T13-007 | A | Conceptual | Mantener diferencia funcional IDS/IPS y clave A; distractores sobre arquitectura, método y función, con límites explícitos. |
| AI-GSI-B2-T13-008 | A | Conceptual | Mantener SIEM y clave A; cuatro categorías reales y aclaración de capacidades integradas. |
| AI-GSI-B2-T13-010 | C | Conceptual | Mantener análisis de dependencias y clave C; comparar SCA con SAST/DAST/IAST sin exclusividades artificiales de producto. |
| AI-GSI-B2-T13-011 | D | Conceptual | Mantener protección WAF y clave D; comparar controles próximos por su capa, sin prometer seguridad total. |
| AI-GSI-B2-T13-016 | A | Aplicación | Conservar el caso existente de aislamiento, clave A; comparar actividades reales de respuesta usando revisión 3 vigente. |
| AI-GSI-B2-T13-017 | D | Aplicación | Mantener aceptación y seguimiento de recuperación, clave D; caso de retorno tras restauración sin equiparar disponibilidad y recuperación segura. |
| AI-GSI-B2-T13-018 | A | Conceptual | Mantener preservación forense y clave A; prácticas próximas de copia, metadatos y adquisición, con excepciones de datos vivos. |
| AI-GSI-B2-T13-019 | C | Aplicación | Mantener integridad relativa de copia y clave C; microcaso con SHA-256 y límites de referencia/colisiones explícitos. |
| AI-GSI-B2-T13-009 | B | Conceptual | Mantener SOAR y clave B; comparar categorías próximas sin negar funciones combinadas de plataformas. |
| AI-GSI-B2-T13-012 | C | Conceptual | Conservar íntegra formulación DLP y clave C: distractores ya pertinentes; alinear feedback con PAM/SOAR/SIEM en lugar de materias que no aparecen en las opciones. |
| AI-GSI-B2-T13-013 | A | Conceptual | Mantener hash frente a cifrado y clave A; distinguir dificultad computacional, codificación y firma, sin afirmar imposibilidad absoluta de adivinar entradas. |
| AI-GSI-B2-T13-014 | B | Conceptual | Mantener autenticación mediante hash y secreto compartido, clave B; cuatro mecanismos criptográficos reales, límites de confidencialidad y atribución claros. |

## Fuentes y vigencia

**23 URLs primarias distintas comprobadas el 28-10-2026.** Las páginas de NIST 800-86/94 usan numeración impresa por capítulo, distinta del índice cero del PDF. La ficha conserva los localizadores individuales por ID.

| Fuente | Localizadores y versión | Fecha real |
| --- | --- | --- |
| [Genesys: Interactive Insights Universe Guide Supplement](https://enu.docs.genesys.com/Documentation/GI2/8.5.0/UNV/Supplement) | Predictive Routing: First Contact Resolution Result, Avg Handle Time, % Abandoned Waiting y % Accept Service Level. Documentación histórica 8.5.0, producto EOL/EOS indicado en cabecera; solo conceptos de métricas, sin recomendar ese producto ni convertir su ventana FCR de siete días en regla universal | 2026-10-28 |
| [BOE/DOUE: Reglamento (UE) 2016/679](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) | Artículos 5.1(b), (c), (d), (e) y (f), 6, 24 y 32: finalidad, minimización, exactitud, conservación, seguridad y responsabilidad. Publicación DOUE L 119 de 04-05-2016; texto español mostrado en BOE y correcciones enlazadas, artículos citados cotejados | 2026-10-28 |
| [NIST CSRC: defense-in-depth](https://csrc.nist.gov/glossary/term/defense_in_depth) | Definitions: estrategia que integra personas, tecnología y operaciones, con barreras en múltiples capas. Glosario público consultado; definición atribuida en la ficha a SP 800-53 Rev. 5 y otras fuentes, sin afirmar lectura completa de ellas | 2026-10-28 |
| [NIST SP 800-207: Zero Trust Architecture](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf) | Abstract; 2 Zero Trust Basics; 2.1 Tenets of Zero Trust: confianza, ubicación de red, propiedad, autenticación y autorización. Agosto de 2020, publicación final; no se utiliza el borrador de 2019 que también devuelve el buscador | 2026-10-28 |
| [MITRE ATT&CK: Endpoint Denial of Service, T1499](https://attack.mitre.org/techniques/T1499/) | Descripción de T1499 y subtipos de agotamiento de recursos del sistema y de aplicación. Página de técnica consultada; clasificación conceptual, sin ejecutar pruebas o generar tráfico de ataque | 2026-10-28 |
| [MITRE ATT&CK: Network Denial of Service, T1498](https://attack.mitre.org/techniques/T1498/) | Descripción de T1498: denegación de servicio de red y procedencia distribuida. Página de técnica consultada; la distribución no implica que toda sobrecarga sea un ataque | 2026-10-28 |
| [MITRE ATT&CK: Exfiltration, TA0010](https://attack.mitre.org/tactics/TA0010/) | Descripción de la táctica y técnicas de extracción por distintos canales y medios. Táctica TA0010 consultada; extracción no autorizada, sin limitarla a tráfico público de Internet | 2026-10-28 |
| [NIST CSRC: vulnerability](https://csrc.nist.gov/glossary/term/vulnerability) | Definitions: debilidad explotable o desencadenable; entrada atribuida a SP 800-61r3/CNSSI 4009-2022. Glosario público consultado; se distingue posibilidad de explotación de incidente confirmado | 2026-10-28 |
| [NIST SP 800-94: IDPS](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-94.pdf) | 2 Intrusion Detection and Prevention Principles, pp. 2-1 a 2-6; 3 IDPS Technologies; distinción IDS/IPS y métodos de detección. Febrero de 2007; conceptos funcionales y de despliegue, sin trasladar referencias antiguas de respuesta como guía vigente | 2026-10-28 |
| [Microsoft Learn: Sentinel SIEM](https://learn.microsoft.com/en-us/azure/sentinel/overview) | Collect data at scale; Detect threats; analytics, normalización y combinación de alertas en incidentes. Documentación pública consultada; ejemplo de SIEM con capacidades integradas, sin afirmar separación exclusiva SIEM/SOAR | 2026-10-28 |
| [IBM: Security orchestration, automation and response](https://www.ibm.com/think/topics/security-orchestration-automation-response) | What is SOAR; Security orchestration; Security automation; playbooks y herramientas integradas. Página primaria del fabricante consultada; descripción de función, no recomendación comercial o autorización para automatizar una respuesta real | 2026-10-28 |
| [Microsoft Learn: Data Loss Prevention](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) | Introducción; políticas para identificar, monitorizar y proteger datos sensibles; canales y ubicaciones. Documentación pública consultada; pese a banner genérico de autorización se leyó el cuerpo público, sin acceder a sesiones privadas | 2026-10-28 |
| [OWASP: Dependency-Check](https://owasp.org/www-project-dependency-check/) | Definición inicial y About: SCA, identificación de dependencias y vulnerabilidades públicas conocidas. Página del proyecto consultada, redirige a /projects/dependency-check; no se instala ni recomienda ejecutar la herramienta | 2026-10-28 |
| [OWASP: Source Code Analysis Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools) | Introducción y nota sobre herramientas con varias capacidades: SAST, DAST y SCA. Página comunitaria de OWASP consultada; análisis estático y límites de equiparar herramientas a una única técnica | 2026-10-28 |
| [OWASP DevSecOps: Dynamic Application Security Testing](https://owasp.org/www-project-devsecops-guideline/latest/02b-Dynamic-Application-Security-Testing) | Dynamic Application Security Testing: evaluación de aplicación en ejecución desde su comportamiento externo. Guía v0.2 en la URL consultada; descripción conceptual de DAST, sin ejecutar un escaneo o cargar payloads | 2026-10-28 |
| [OWASP DevSecOps: Interactive Application Security Testing](https://owasp.github.io/DevSecOpsGuideline/2-Process/2-4-Test/2-4-1-Interactive-Application-Security-Testing/) | Introducción; How IAST differs from SAST and DAST: instrumentación de aplicación en ejecución. Guía pública consultada; solo distinción de técnicas. No se adoptan porcentajes de falsos positivos o recomendaciones de compra de sus tablas | 2026-10-28 |
| [AWS: What is AWS WAF?](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html) | What is AWS WAF: inspección de solicitudes HTTP/HTTPS, reglas y acciones de permitir, bloquear o contar. Documentación primaria del fabricante consultada; función de WAF según despliegue, no garantía contra toda lógica de negocio | 2026-10-28 |
| [NIST SP 800-61 Revision 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf) | CSF RS.MI-01 y RS.MI-02, pp. 32–33 impresas: contención y erradicación; RC.RP-01 a RC.RP-06, p. 34 impresa: fuentes de restauración, integridad, causas, verificación y cierre por criterios. Abril de 2025; retorno a operación y monitorización, distinto de restaurar disponibilidad sin más comprobaciones | 2026-10-28 |
| [NIST SP 800-86: Forensic Techniques into Incident Response](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf) | 3.1.2 Acquiring the Data, pp. 3-3 a 3-5; 4.2.1 Copying Files from Media, pp. 4-6 a 4-7; 4.2.2 Data File Integrity, pp. 4-7 a 4-8; 4.2.3 File Modification, Access, and Creation Times, p. 4-9. Agosto de 2006; preservación y trazabilidad, no asesoramiento jurídico o recomendación actual de MD5/SHA-1 citados históricamente | 2026-10-28 |
| [RFC Editor: RFC 6234, Secure Hash Algorithms](https://www.rfc-editor.org/rfc/rfc6234) | 1 Overview of Contents: resumen, resistencia computacional y alta probabilidad de detectar cambios; 6 Computing the Message Digest. Informational, mayo de 2011; conceptos y SHA-256 para el ejemplo. No se recomiendan SHA-1 o algoritmos antiguos por aparecer en el texto | 2026-10-28 |
| [RFC Editor: RFC 2104, HMAC](https://www.rfc-editor.org/rfc/rfc2104) | 1 Introduction; 2 Definition of HMAC; 3 Keys; 6 Security: autenticación mediante hash y secreto compartido. Febrero de 1997; construcción histórica vigente como concepto, no recomendación de MD5/SHA-1 ni norma actual de selección de claves | 2026-10-28 |
| [NIST: FIPS 198-1, HMAC](https://csrc.nist.gov/pubs/fips/198-1/final) | Abstract; Planning Note de 23-06-2025 y Document History: clave secreta compartida y traslado propuesto a SP 800-224. Julio de 2008; ficha consultada anuncia propuesta de retirada, sin presumirla consumada. SP 800-224 consultado figura como Initial Public Draft de junio de 2024 | 2026-10-28 |
| [RFC Editor: RFC 4231, HMAC-SHA test vectors](https://www.rfc-editor.org/rfc/rfc4231) | 4.2 Test Case 1 y 4.3 Test Case 2: HMAC-SHA-256. Diciembre de 2005; vectores públicos para ejemplos con hashlib/hmac, sin generar o leer secretos reales | 2026-10-28 |

Matices cotejados:

- Se mantienen concepto, ID y clave original en los veinte registros. AI-GSI-B2-T13-012 (DLP) conserva íntegros enunciado y alternativas; se completa feedback para sus distractores reales, que el texto genérico anterior no comentaba.
- FCR mide resolución inicial; AHT, duración. Población, resolución y ventana de repetición deben definirse. La ventana de siete días del ejemplo histórico Genesys no es universal, y reducir AHT no demuestra mayor FCR, satisfacción o menor abandono.
- El CRM de atención respeta finalidad, minimización, licitud, calidad, acceso y conservación. Que una administración pueda acceder técnicamente a datos no justifica copiarlos para cualquier finalidad.
- Defensa en profundidad combina capas; mínimo privilegio o separación de funciones pueden contribuir sin ser su definición. Zero Trust no otorga confianza implícita por red o propiedad y no equivale a negar toda operación.
- DoS afecta a disponibilidad; DDoS añade distribución. No toda sobrecarga es ataque. Exfiltración es extracción no autorizada y puede usar distintas redes o medios, no solo Internet.
- Vulnerabilidad, exploit e incidente se distinguen. IDS/IPS describe capacidad funcional; ubicación host/red, firmas/anomalías y productos no determinan una separación exclusiva ni bloqueo garantizado.
- SIEM correlaciona y SOAR orquesta; plataformas pueden combinar funciones. DLP controla políticas sobre datos sensibles y PAM privilegios; las categorías se distinguen por su función principal.
- SCA revisa composición y dependencias; SAST análisis estático, DAST comportamiento externo en ejecución e IAST observación instrumentada. Una herramienta puede reunir varias técnicas; un CVE no demuestra explotabilidad en todo contexto.
- El WAF filtra solicitudes de aplicación, sin reparar el código o garantizar toda lógica de negocio. La respuesta a incidentes usa NIST 800-61 r3 de abril 2025; no se presenta la revisión 2 sustituida como vigente ni una secuencia rígida de fases.
- Preservar y usar copias verificadas protege trazabilidad; datos vivos y volátiles pueden requerir actuaciones específicas documentadas. El hash es una evidencia relativa al referente y a supuestos criptográficos, no autoría, autorización, ausencia de malware o custodia completa.
- Hash no tiene operación de descifrado; las entradas previsibles pueden adivinarse y contrastarse. HMAC usa secreto compartido para autenticación, no cifra ni atribuye ante terceros a cuál de sus poseedores corresponde una etiqueta.
- FIPS 198-1 se cita por su ficha y construcción; la ficha anuncia una propuesta de retirada y el registro SP 800-224 leído sigue como borrador inicial de junio 2024. No se presume una retirada efectiva o publicación final no observada. Los RFC históricos no recomiendan por esta cita MD5 o SHA-1.
- El cotejo final separa en NIST 800-86 integridad (4.2.2, pp. 4-7–4-8) de fechas de archivo (4.2.3, p. 4-9). Se homogeneiza DoS frente a categorías de suplantación, exfiltración y modificación, sin cambiar su clave ni añadir relleno.

Límites de acceso:

- El PDF FIPS 180-4 agotó el tiempo de acceso en dos intentos. No se cuenta como PDF leído; se usa RFC 6234 para resumen y resistencia computacional y NIST 800-86 para comprobación de integridad forense.
- La URL de glosario NIST exploit no fue accesible. No se cuenta como fuente verificada; se usa vulnerability y el contexto de explotación de la debilidad en NIST 800-94.
- La entrada WAF comunitaria de OWASP mostró solo envoltorio sin texto técnico suficiente; no se cuenta como respaldo. La función se coteja con la documentación pública AWS WAF leída.
- Los catálogos CSRC muestran aviso genérico de marco no autorizado, pero sus definiciones y fichas públicas fueron legibles. No se accedió a autenticación privada. En Microsoft Learn DLP se leyó el cuerpo público pese a banner genérico de autorización.
- Genesys 8.5 está EOL/EOS según su cabecera y se utiliza como documento histórico de definiciones, no versión actual recomendada. OWASP y páginas de fabricante respaldan conceptos, sin instalar herramientas ni adoptar ofertas, supuestas tasas de falsos positivos o recomendaciones comerciales.
- PDF NIST leídos en web como fuentes, sin conversiones locales u OCR. Las fechas de edición histórica se distinguen de la comprobación real 28-10-2026. Las páginas de NIST 800-86/94 usan numeración impresa por capítulo.
- Los ejemplos criptográficos previstos solo usan vectores públicos y bytes sintéticos con módulos estándar, sin leer claves reales o conectar a sistemas. No son certificación criptográfica, prueba de resistencia a colisiones o una adquisición forense real.
- Se preservan aceptaciones IA históricas, procedencia y versiones activas. La revisión del preparador no es aceptación del propietario. La errata activa MAN-GSI-P18-026 del lote 032 sigue pendiente y bloquea el cierre editorial.

Se usa **NIST 800-61 r3, abril de 2025**, para contención y recuperación. NIST 800-86/94 son documentos históricos utilizados para conceptos concretos, sin convertir sus algoritmos, herramientas o referencias antiguas en recomendaciones actuales. La ficha FIPS 198-1 anuncia una propuesta de retirada y SP 800-224 sigue como borrador inicial en el registro leído; no se presume un cambio de estado no observado.

## Métricas y construcción

Analizador 2.0.0 sobre versiones de partida y simuladas; sin escritura de bancos.

| Indicador | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 8 | 3 |
| Aciertos por primera alternativa de longitud máxima | 9 | 5 |
| Ratio 1,5–<2 | 3 | 0 |
| Ratio ≥2 | 0 | 0 |
| Feedback correcto menor de 15 palabras | 14 | 0 |
| Feedback correcto e incorrecto idénticos | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Agrupación de absolutos | 0 | 0 |
| Empates de longitud máxima | 4 | 7 |
| Preguntas con tres distractores explicados | 0 | 20 |

La primera máxima pasa de **45 % a 25 %** de acierto. La primera mínima acierta **8/20 (40 %)**, señal que se registra por ID y no se oculta por mejorar la regla de máxima longitud. SCA y HMAC son nombres convencionales más cortos; DLP conserva su formulación previa. Las otras diferencias se revisan junto al contenido, sin añadir relleno. Se mantienen seis empates máximos y la distribución original **A: 7, B: 3, C: 6, D: 4**; no se cambian claves para equilibrar letras. Estos IDs no son las letras visibles de una sesión barajada.

Las correctas únicas más largas son AI-GSI-B2-T12-018 (67 frente a 58 caracteres), AI-GSI-B2-T13-007 (60 frente a 59 caracteres), AI-GSI-B2-T13-013 (75 frente a 70 caracteres). Se conservan las condiciones pertinentes de métrica, prevención y hash. Las señales son prioridades o justificaciones del preparador, no aceptación automática, garantía pedagógica ni calibración estadística.

La versión inicial tenía hash `53621acd87e4301e3378ddf3b85148ec362e64f5c337d0852c41ac760b3a5dde`. El cotejo de NIST 800-86 delimitó 4.2.2 (integridad, pp. 4-7–4-8) y añadió 4.2.3 (fechas, p. 4-9); se uniformaron las categorías de ataque en T13-004. Esa versión intermedia tenía hash `957328313d7d39738a138c315d396e2ee25441e369064636a8bd4faa792b3541`. Después se acortaron sus tres distractores sin cambiar la correcta: longitudes 34/37/36/37, sin relleno. El log conserva los elementos previos para reconstruir ambos hashes; ninguna versión tiene aceptación nueva.

## Validación y reproducción

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_batches.py --batch content/question-reviews/lote-038.json --render docs/GSI_REVISION_LOTE_038.md --literal-content
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
git diff --check
```

Resultados: **19 pruebas editoriales, 60 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**, con documentación, referencias y progreso coherentes. Simulación limitada a veinte IA; sesenta explicaciones de distractores, claves e IDs preservados. Se rechazan falta de aceptación, aceptación del piloto y registros históricos como aprobación nueva; se protegen 167 archivos y se reconstruyen los hashes inicial e intermedio. Se verifican 85 enlaces locales de las fichas y plan. Los bancos activos coinciden con HEAD y las oficiales con la auditoría en bytes.

**Ocho controles Python y diez de presentación Chrome correctos**, con captura de HMAC inspeccionada. Las invocaciones finales terminan con código 0. Los tres informes derivados ya tenían fecha 28-10-2026 y permanecen semánticamente iguales; respecto a HEAD solo difiere la fecha de validación. No se confunden cero errores técnicos y cierre editorial: P18-026 sigue pendiente en su versión activa.

Los **ocho controles Python** usan dos vectores públicos HMAC-SHA-256 de RFC 4231 y bytes sintéticos: coincidencia de resultados, rechazo de cambio de mensaje o clave, diferencia respecto a hash sin clave, copia idéntica, alteración de un byte y contraejemplo de sustitución conjunta de mensaje/resumen no confiable. Se usa una función de comprobación ingenua para el último caso, no una igualdad del mismo valor consigo mismo. No se leen secretos, archivos de evidencia o sistemas externos. No prueba resistencia a colisiones, preimagen, autoría, licitud, custodia o ausencia de malware.

La ficha literal se comprueba con Chrome, Playwright y marked existentes, en memoria y con red externa bloqueada: veinte apartados, cuarenta marcas de correcta, opciones y feedback propuestos, referencias y ausencia de desbordamiento en escritorio y a 390 px. Se inspecciona captura de HMAC. No es ejecución de WAF, DLP, IDS/IPS, exploit, adquisición forense o sistema de respuesta.

No se repite la suite HTTP de Entrenamiento, Simulacros, estadísticas y Refuerzo: no cambian bancos activos ni código de la aplicación. Las pruebas aisladas y los validadores estructurales no acreditan por sí solos calidad pedagógica; se distingue cotejo de conceptos y claves por el preparador de aprobación del propietario.

## Entrega y continuidad

Creados: `content/question-reviews/lote-038.json`, `docs/GSI_REVISION_LOTE_038.md`, este informe y `logs/gsi-editorial-038-preparation.json`. Modificados: `docs/GSI_MEJORA_TESTS.md` y `logs/gsi-editorial-progress.json`. Se regeneran los tres informes derivados de cobertura, validación final y revisión histórica, cotejando fecha y contenido con el estado inicial.

Acumulado: **20 aceptadas y 740 propuestas pendientes**; **1.742 decisiones pendientes**, **1.002** aún sin propuesta. Los lotes 002–038 reúnen 113 incidencias IA originales, otras 229 IA y 398 manuales. Las 128 incidencias originales tienen propuesta: quince aplicadas y 113 pendientes; propuesta no equivale a resolución.

Oficiales, bancos activos, borradores, historial, originales y entregas anteriores intactos. No se hacen conversiones, OCR o instalaciones; no hay conversiones nuevas pendientes. Sin aplicación, activación, publicación, fusión o nuevo commit. La errata activa MAN-GSI-P18-026 del lote 032 sigue pendiente y bloquea el cierre editorial.

Para revisar, contrastar por ID la ficha y sus fuentes y aprobar expresamente el hash vigente antes de aplicar. El siguiente lote sigue la cola por bloque y tema. El cierre completo exige decisión individual trazable del propietario sobre los 1.762 IDs, resolución de errores confirmados y controles técnicos y de cobertura superados. La dificultad continúa orientativa y sin calibración estadística.
