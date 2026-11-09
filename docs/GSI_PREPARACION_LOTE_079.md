# Preparación de GSI-EDITORIAL-079

Fecha: 4 de noviembre de 2026. **20 propuestas pendientes de aprobación del propietario. Aceptadas: 0; aplicadas: 0; retiradas: 0.**

Hash canónico: `a9e2f298425090788b837bee9393d2965dc638c3d6186131dfc10670137cc0ae`.

## Alcance y criterio

Posiciones 1561–1580 de la cola: ocho IA B4-T11 (013–017, 019–020 y 001) y doce IA B4-T12 (003–011, 013–014 y 016). Se conservan IDs, conceptos, claves, dificultad orientativa, estados y procedencia. No se requieren reemplazos o retiradas por cambio de clave o significado.

Catorce conceptuales y seis aplicaciones: T11-017/020 y T12-003/005/009/013. Los casos tratan diagnóstico con buena señal, invitados e IoT, DMZ, movimiento lateral, administración privilegiada y firma de documento. Distribución descriptiva, sin cuota impuesta. Se conservan **once enunciados**, incluido el microcaso original de señal intensa; se revisan alternativas de las veinte para contrastar confusiones próximas y evitar opciones ajenas al concepto.

Todas incluyen explicación correcta y tres justificaciones individuales por ID original y contenido, compatibles con barajado. No se distribuyen artificialmente letras ni se cambia una clave para ocultar patrones. La ficha permite revisar cada decisión.

[Ficha antes/después](GSI_REVISION_LOTE_079.md) · [Propuesta JSON](../content/question-reviews/lote-079.json) · [Registro](../logs/gsi-editorial-079-preparation.json).

La rúbrica representa juicio documental del preparador, pendiente del propietario. No acredita revisión humana independiente o calibración. Las veinte aceptaciones históricas IA siguen vinculadas a sus textos anteriores, sin aceptar estas propuestas.

## Revisión individual

| ID | Clave conservada | Forma | Enunciado conservado | Decisión |
| --- | :---: | --- | :---: | --- |
| AI-GSI-B4-T11-013 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T11-014 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T11-015 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T11-016 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T11-017 | A | Aplicación | Sí | Pendiente del propietario |
| AI-GSI-B4-T11-019 | B | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T11-020 | D | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T11-001 | A | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T12-003 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T12-004 | C | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T12-005 | A | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T12-006 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T12-007 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T12-008 | C | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T12-009 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T12-010 | B | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T12-011 | D | Conceptual | Sí | Pendiente del propietario |
| AI-GSI-B4-T12-013 | B | Aplicación | No | Pendiente del propietario |
| AI-GSI-B4-T12-014 | A | Conceptual | No | Pendiente del propietario |
| AI-GSI-B4-T12-016 | D | Conceptual | Sí | Pendiente del propietario |

TACACS+ se distingue por separación AAA, evitando la ambigüedad de «administración frecuente», también posible con RADIUS o SSH. La firma se comprueba con la pública del firmante, diferenciándola de la pública de la autoridad que emite su certificado. No se identifica un error nuevo confirmado de clave.

## Fuentes y vigencia

**20 URLs primarias con apartados públicos comprobados el 04-11-2026**; procedencia original conservada.

- WMM prioriza acceso relativo mediante EDCA; BSS, ESS e IBSS se distinguen por organización, no por el nombre SSID o la carcasa física del AP.

- Las ayudas k/v/r al roaming no sustituyen universalmente al cliente. Una señal fuerte no acredita capacidad ni identifica por sí sola la causa de retransmisiones.

- 802.1X/EAP exige método y configuración adecuados. Segmentación significa reglas efectivas entre zonas; SSID/VLAN distintos no bastan con flujos abiertos.

- TACACS+ se identifica por su separación AAA, sin negar otros usos administrativos de RADIUS/SSH. RFC8907 es informativo y contiene limitaciones de seguridad.

- Se diferencia confidencialidad, identidad, integridad y gestión de claves. La pública del firmante comprueba el documento; la de la autoridad emisora comprueba el certificado.

- TLS e IPsec tienen límites distintos de protección. Guías históricas describen mecanismos, sin trasladar algoritmos obsoletos, cifras o recetas de plataforma.

Se contrastan RFC 8907 §1/10, RFC 9110 §3.7/7.6, RFC 5280 §4.1.2.7/4.2.1.3/6, RFC 4251 §1/4.1, RFC 8446 §1 y RFC 4301 §2.1. Los glosarios NIST identifican sus publicaciones de origen: no se declara lectura íntegra de ellas. NCSC §6 respalda separación efectiva y GSA los controles de identidad privilegiada. Las fuentes incluyen URL, localizador, versión o alcance y fecha real.

## Límites de acceso y verificación

- El candidato CISA de acceso remoto respondió403 y el de topologías CiscoPress400/Timeout. Se usan GSA, Cisco y NCSC con cuerpos primarios accesibles; sin sortear restricciones.

- Apple de SSID y dos URLs de roaming respondieron429. No se atribuye apertura de sus cuerpos: Cisco documenta recomendaciones802.11v, informes802.11k y transición802.11r.

- Se han leído apartados HTML y definiciones públicas, no textos completos de normas IEEE, PDF de las publicaciones enlazadas ni despliegues operativos. Sin conversiones, OCR o ensayos de redes.

Se registran cinco accesos limitados, incluidas las dos variantes de roaming Apple. No se atribuye lectura de cuerpos inaccesibles. Los avisos de plantilla NIST y Microsoft no impidieron leer sus definiciones y ejemplos. Se excluyen recomendaciones históricas de RC4/ECB, parámetros radio universales, simplificaciones de DSCP y afirmaciones comerciales de rendimiento.

## Métricas y revisión de forma

| Señal | Antes | Propuesta |
| --- | ---: | ---: |
| Correcta única más larga | 9 | 4 |
| Acierto primera máxima (%) | 50.0 | 25.0 |
| Ratio 1,5–menos de 2 | 1 | 0 |
| Ratio 2 o superior | 0 | 0 |
| Feedback menor de 15 palabras | 19 | 0 |
| Feedback correcto/incorrecto idéntico | 20 | 0 |
| Alternativas duplicadas | 0 | 0 |
| Formulaciones absolutas | 0 | 0 |

Primera mínima correcta: 5/20 (25 %); empates máximos: 1→3. Las correctas únicas más largas difieren de su distractor máximo en 1–4 caracteres. SSH conserva sus tres caracteres frente a Telnet de seis: no se alarga un nombre técnico con relleno. Se registra esa proporción inversa de 2 y las restantes pequeñas. Estas señales orientan revisión; no acreditan calidad pedagógica. Dificultad orientativa, sin calibración estadística.

## Validación

Resultados: **19 pruebas editoriales, 101 JSON, 21 esquemas, 1.964 preguntas y 19.251 controles de integridad correctos**. Documentación, referencias y progreso sincronizados; ocho comandos con código 0. Simulación en memoria limitada a **20 IA** con IDs, claves, estados y procedencia conservados; **60 justificaciones individuales** comprobadas. Veinte registros históricos IA conservados, sin extender su aceptación; tres aceptaciones improcedentes rechazadas y dos barreras de regeneración verificadas. **331 archivos protegidos intactos**, doce borradores conservados y **170 enlaces locales existentes**.

**Diez comprobaciones Chrome correctas**, con captura de firma/certificado inspeccionada y sin desbordamiento a 1280/390 px. Son controles de ficha, no pruebas HTTP del producto o ensayos de redes/criptografía. Se verifican metadatos de veinte fuentes y once enunciados conservados. No hay revisiones internas del contenido posteriores al hash inicial ni fallos de la suite o reparaciones auxiliares en este lote.

Derivados con contenido igual al inicio y fecha 03-11→04-11; frente a HEAD solo cambia fecha 26-10→04-11. Bancos activos iguales a HEAD, oficiales idénticas en bytes a la auditoría. Sin nuevas aceptaciones, aplicación, publicación, fusión o commit. La suite HTTP previa del producto se conserva sin atribuirla a estas propuestas inactivas. Tres incidencias editoriales anteriores y las aceptaciones pendientes mantienen abierto el cierre.

Comandos desde la raíz:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B tests/editorial_batch_tests.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_json.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_questions.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_documentation.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_references.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/editorial_progress.py
& "C:\Program Files\nodejs\node.exe" tmp/validate_editorial_079_browser.mjs
.\.venv\Scripts\python.exe -X utf8 -B scripts/validate_gsi_final.py
.\.venv\Scripts\python.exe -X utf8 -B tmp/validate_editorial_079.py
```

Chrome ha comprobado la ficha literal a 1280/390 px. No se repite la [suite HTTP del producto aplicada al lote 001](../logs/gsi-editorial-001-revalidation-2026-10-30.json): estas propuestas están inactivas y no cambia aplicación o bancos. Entrenamiento, Simulacros, estadísticas y Refuerzo deberán probarse al aplicar contenido aprobado; la ficha no sustituye ese recorrido.

## Incidencias y cierre

Las tres incidencias activas anteriores de lotes 032 (XML), 054 (dependencias en normalización) y 055 (cota O(n)) conservan correcciones propuestas pendientes de aprobación/aplicación. No están corregidas en el banco activo y mantienen abierto el cierre.

Tras preparar 079: **20 aceptadas, 1.560 propuestas pendientes, 182 sin propuesta y 1.742 decisiones pendientes del propietario**. Cubiertos 1.580/1.762 IDs sin duplicar. Las 128 incidencias IA originales tienen propuesta: 15 aplicadas y 113 pendientes, sin acreditar resolución editorial. La cola pendiente preparada comprende 113 IA originales, 652 IA restantes y 795 manuales.

## Entrega y cómo probar

Creados: propuesta JSON, ficha, este informe y registro. Modificados: plan y progreso. El validador regenera tres informes derivados: se ha comprobado contenido igual al inicio y fecha 03-11→04-11. Auxiliares y captura en tmp. Sin conversiones, OCR, documentos convertidos o conversiones nuevas pendientes; sin dependencias nuevas.

Abre la ficha y contrasta WLAN (T11-013–020/001), perímetro/AAA (T12-003–009) y criptografía (010–016). Revisa los sesenta errores individualizados y sus fuentes. La aprobación deberá identificar el hash exacto.

Sin aceptar, aplicar, activar, retirar, publicar, fusionar o crear commit. Las 202 oficiales, los bancos activos y los originales permanecen intactos. Siguiente paso: revisión del propietario y preparación de las 182 preguntas restantes con este estándar.
