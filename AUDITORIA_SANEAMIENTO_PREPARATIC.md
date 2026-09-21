# Auditoría de saneamiento respecto de PreparaTIC y derechos de terceros

**Fecha:** 21 de septiembre de 2026

**Rama auditada:** `gsi-only-final`

**Alcance:** repositorio activo GSI A2, preguntas, corpus convertido, derivados HTML, trazabilidad y `archive/tai-before-gsi`.

## 1. Resultado ejecutivo

Se han auditado los 57 temas GSI, los 51 documentos Markdown del corpus GSI, los tres bancos de preguntas y los 114 archivos del archivo histórico: **225 archivos de contenido o historial**, además de esquemas, manifiestos, registros, scripts y textos legales del repositorio.

No se ha encontrado ningún PDF, EPUB o documento ofimático de PreparaTIC redistribuido en el repositorio ni en las rutas históricas de Git. Tampoco se ha encontrado reproducción extensa preocupante en el corpus propio. Las coincidencias de doce o más palabras localizadas durante la comparación correspondían a títulos del programa oficial o a formulaciones normativas; se conservaron como contenido de fuente oficial. Dos enumeraciones técnicamente estándar, en II.06 y III.07, se reescribieron preventivamente para reforzar la independencia expresiva.

Resultado final de los temas: **55 `OK — redacción propia` o `OK — fuente oficial`; 2 `OK — reescrito`; 0 eliminados; 0 pendientes de decisión humana por coincidencia textual.** Se mantienen intactos los 57 temas y los 1.964 test cargables.

Recuento de cierre:

- **Archivos de contenido o historial revisados:** 225, más esquemas, manifiestos, scripts, licencia y registros de control.
- **Temas revisados:** 57.
- **Unidades temáticas sin reescritura sustantiva:** 55.
- **Fragmentos distintos reescritos:** 2, sincronizados en 11 apariciones entre corpus, temas, HTML y evidencias.
- **Puntos de atribución o aclaración añadidos:** 16 (un aviso global, tres superficies legales/editoriales, ocho manuales canónicos y cuatro conjuntos de metadatos).
- **Nuevas obras de fuente primaria incorporadas:** 0; se priorizaron y documentaron las fuentes oficiales ya existentes sin rehostear nuevos originales.
- **Ficheros retirados:** 0.
- **Casos textuales pendientes de decisión humana:** 0; permanece la recomendación jurídica condicional del apartado 8.

Esta auditoría es técnica y editorial; no es un dictamen jurídico ni garantiza ausencia absoluta de derechos de terceros. No se ha verificado una licencia general de PreparaTIC que autorice la relicencia de sus materiales. Por ello, PreparaTIC se trata como fuente secundaria consultada, se atribuye, no se redistribuyen sus originales y las fuentes primarias prevalecen.

## 2. Criterio de derechos y atribución

- **PreparaTIC/A1:** fuente secundaria de consulta. Titulares y condiciones concretas deben comprobarse por material. No existe afiliación, patrocinio ni respaldo de PreparaTIC.
- **BOE y textos normativos:** fuentes primarias. La exclusión de protección de determinados textos oficiales se aplica por documento y no convierte automáticamente en libres los resúmenes, comentarios, selecciones o materiales editoriales.
- **INAP:** fuente oficial de los cuestionarios y plantillas identificados por convocatoria; las preguntas oficiales permanecen separadas del banco propio.
- **Estándares, documentación técnica y marcas:** se citan como fuentes; sus titulares conservan los derechos que correspondan.
- **Licencia del repositorio:** solo alcanza aportaciones originales del proyecto. La cita, el enlace o la atribución no incorporan una obra ajena a esa licencia.
- **“Autorizado”:** en registros heredados significa exclusivamente aprobado internamente para lectura, inventario o publicación. No significa permiso, licencia ni autorización concedida por un tercero.

Los avisos consolidados están en `THIRD_PARTY_NOTICES.md`; `README.md`, `LICENSE` y `licencia.html` remiten a ellos.

## 3. Método de auditoría

1. Inventario del árbol actual, del historial de rutas Git, de binarios y de `archive/tai-before-gsi`.
2. Revisión de las referencias PreparaTIC/A1 del mapa GSI y lectura de 89 resúmenes o materiales relevantes de Drive. Para las referencias 057, 090, 094, 105, 119 y 129, sin el resumen preferido, se leyó un PDF alternativo del mismo tema.
3. Comparación normalizada de los 57 temas contra las fuentes A1: secuencias exactas consecutivas, con umbral de revisión de 12 palabras, y similitud por grupos de cinco palabras a nivel de párrafo.
4. Comparación equivalente de 38 documentos de prácticas, cuatro guías y 1.762 preguntas propias o generadas.
5. Revisión manual de los candidatos obtenidos, distinguiendo expresión protegible, vocabulario técnico, título oficial y redacción normativa.
6. Revisión de metadatos de procedencia, estado oficial, validación, derechos, huellas SHA-256 y separación física de bancos.

Limitaciones: la comparación automática es un mecanismo de detección, no una prueba jurídica; una idea o estructura puede requerir análisis humano aunque no haya coincidencia literal. Las conclusiones se refieren a las versiones y fuentes accesibles en la fecha indicada.

## 4. Auditoría tema por tema

En la columna **Archivos**, `A/T/H` significa: sección del apunte canónico `documents/markdown/gsi/Bx/...APUNTES...md`, tema `content/topics/<id>.md` y derivado `content/generated/<id>.html`. La atribución es común a todos: aviso en los ocho manuales canónicos, manifiesto de derechos y aviso global.

| Tema | Estado | Referencias PreparaTIC/A1 cotejadas | Archivos | Riesgo inicial | Cambio | Fuentes primarias o de control | Atribución | Resultado |
|---|---|---|---|---|---|---|---|---|
| I.01 | OK — fuente oficial | 001 | A/T/H | Alto P1 | Ninguno | CE y BOE | Sí | Conservar |
| I.02 | OK — fuente oficial | 001 | A/T/H | Alto P1 | Ninguno | CE, LOTC y BOE | Sí | Conservar |
| I.03 | OK — fuente oficial | 001, 007 | A/T/H | Alto P1 | Ninguno | CE, Ley 50/1997 y BOE | Sí | Conservar |
| I.04 | OK — fuente oficial | 025, 014, 031 | A/T/H | Medio | Ninguno | CE, LPAC, LRJSP y BOE | Sí | Conservar |
| I.05 | OK — fuente oficial | 016 | A/T/H | Medio | Ninguno | TREBEP y BOE | Sí | Conservar |
| I.06 | OK — fuente oficial | 051, 080, 081 | A/T/H | Medio | Ninguno | LPAC, LRJSP, ENI y BOE | Sí | Conservar |
| I.07 | OK — fuente oficial | 027, 082 | A/T/H | Alto P1 | Ninguno | ENS, CCN y BOE | Sí | Conservar |
| I.08 | OK — fuente oficial | 008, 009, 010, 024 | A/T/H | Medio | Ninguno | TUE, TFUE y EUR-Lex | Sí | Conservar |
| I.09 | OK — fuente oficial | 008, 009, 025, 045–048 | A/T/H | Alto P1 | Ninguno | RGPD, LOPDGDD, AEPD y EUR-Lex | Sí | Conservar |
| I.10 | OK — fuente oficial | 008, 009, 049 | A/T/H | Medio | Ninguno | LSSI, normativa UE y BOE | Sí | Conservar |
| II.01 | OK — redacción propia | 052, 054, 055, 053 | A/T/H | Medio | Ninguno | NIST y documentación de arquitectura | Sí | Conservar |
| II.02 | OK — redacción propia | 059–062 | A/T/H | Medio | Ninguno | Fabricantes y documentación técnica | Sí | Conservar |
| II.03 | OK — redacción propia | Sin equivalencia directa | A/T/H | Bajo | Ninguno | Documentación técnica primaria | Sí | Conservar |
| II.04 | OK — redacción propia | 072, 075, 033, 076 | A/T/H | Medio | Ninguno | IETF, W3C y OASIS | Sí | Conservar |
| II.05 | OK — redacción propia | 063, 064 | A/T/H | Alto P1 | Ninguno | NIST y documentación criptográfica | Sí | Conservar |
| II.06 | OK — reescrito | 058 | A/T/H | Alto P1 | Reestructurada enumeración SOA | W3C y OASIS | Sí | Conservar reescritura |
| II.07 | OK — redacción propia | 065, 097, 100, 132 | A/T/H | Medio | Ninguno | ISO, NIST y documentación técnica | Sí | Conservar |
| II.08 | OK — redacción propia | 109, 111, 115 | A/T/H | Medio | Ninguno | IETF y documentación de producto | Sí | Conservar |
| II.09 | OK — redacción propia | 077 | A/T/H | Alto P1 | Ninguno | W3C, Unicode y WHATWG | Sí | Conservar |
| II.10 | OK — redacción propia | 047 | A/T/H | Alto P1 | Ninguno | W3C y documentación web | Sí | Conservar |
| II.11 | OK — redacción propia | 038, 047, 048 | A/T/H | Medio | Ninguno | W3C, IETF y documentación CMS | Sí | Conservar |
| II.12 | OK — redacción propia | 072, 077 | A/T/H | Medio | Ninguno | IETF, W3C y OASIS | Sí | Conservar |
| II.13 | OK — redacción propia | 125–127 | A/T/H | Medio | Ninguno | Normas y documentación audiovisual | Sí | Conservar |
| II.14 | OK — redacción propia | 069, 043 | A/T/H | Medio | Ninguno | ISO, OMG y documentación BPM | Sí | Conservar |
| II.15 | OK — redacción propia | 040, 099, 035, 036, 041 | A/T/H | Medio | Ninguno | ISO y documentación de ingeniería | Sí | Conservar |
| II.16 | OK — redacción propia | 104, 105 | A/T/H | Medio | Ninguno | ISO 15489, BOE y documentación SRI | Sí | Conservar |
| III.01 | OK — redacción propia | 086 | A/T/H | Alto P1 | Ninguno | ISO/IEC/IEEE 12207 y fuentes de proceso | Sí | Conservar |
| III.02 | OK — redacción propia | 088, 037, 095 | A/T/H | Medio | Ninguno | ISO, IEEE y OMG | Sí | Conservar |
| III.03 | OK — redacción propia | 088, 094, 091 | A/T/H | Medio | Ninguno | ISO 9241, W3C y WCAG | Sí | Conservar |
| III.04 | OK — redacción propia | 063, 064 | A/T/H | Alto P1 | Ninguno | NIST y documentación criptográfica | Sí | Conservar |
| III.05 | OK — redacción propia | 070, 071, 076 | A/T/H | Medio | Ninguno | Textos algorítmicos y documentación técnica | Sí | Conservar |
| III.06 | OK — redacción propia | 097, 102 | A/T/H | Medio | Ninguno | ISO/IEC/IEEE 12207 y documentación CI/CD | Sí | Conservar |
| III.07 | OK — reescrito | 096 | A/T/H | Alto P1 | Reagrupados principios de prueba | ISTQB e ISO/IEC/IEEE 29119 | Sí | Conservar reescritura |
| III.08 | OK — redacción propia | 101, 100 | A/T/H | Medio | Ninguno | ISO/IEC/IEEE 12207 | Sí | Conservar |
| III.09 | OK — redacción propia | 089, 090, 093, 092 | A/T/H | Medio | Ninguno | OMG UML y documentación de métodos | Sí | Conservar |
| III.10 | OK — redacción propia | 067 | A/T/H | Alto P1 | Ninguno | Especificaciones de lenguajes | Sí | Conservar |
| III.11 | OK — redacción propia | 066 | A/T/H | Alto P1 | Ninguno | Especificaciones y documentación funcional | Sí | Conservar |
| III.12 | OK — redacción propia | 065, 058 | A/T/H | Medio | Ninguno | W3C, OASIS e IETF | Sí | Conservar |
| III.13 | OK — redacción propia | 103 | A/T/H | Alto P1 | Ninguno | Microsoft Learn y ECMA | Sí | Conservar |
| III.14 | OK — redacción propia | 044, 094, 133 | A/T/H | Medio | Ninguno | Jakarta EE, Oracle y W3C | Sí | Conservar |
| III.15 | OK — redacción propia | 075 | A/T/H | Medio | Ninguno | W3C y documentación de accesibilidad | Sí | Conservar |
| IV.01 | OK — redacción propia | 059 | A/T/H | Medio | Ninguno | Documentación de sistemas operativos | Sí | Conservar |
| IV.02 | OK — redacción propia | 063 | A/T/H | Medio | Ninguno | NIST, CCN y documentación de plataforma | Sí | Conservar |
| IV.03 | OK — redacción propia | 101, 105, 056 | A/T/H | Medio | Ninguno | ISO, NIST y documentación de respaldo | Sí | Conservar |
| IV.04 | OK — redacción propia | 100 | A/T/H | Medio | Ninguno | ISO/IEC 20000 e ITIL como referencia | Sí | Conservar |
| IV.05 | OK — redacción propia | 056, 057 | A/T/H | Medio | Ninguno | Documentación de virtualización y SO | Sí | Conservar |
| IV.06 | OK — redacción propia | 057, 053, 132, 128 | A/T/H | Medio | Ninguno | NIST y documentación cloud/contenedores | Sí | Conservar |
| IV.07 | OK — redacción propia | 108, 110, 112 | A/T/H | Medio | Ninguno | IETF e IEEE | Sí | Conservar |
| IV.08 | OK — redacción propia | 118, 119 | A/T/H | Medio | Ninguno | IETF y documentación de redes | Sí | Conservar |
| IV.09 | OK — redacción propia | 118, 119 | A/T/H | Medio | Ninguno | IETF y documentación de redes | Sí | Conservar |
| IV.10 | OK — redacción propia | 113, 108, 120 | A/T/H | Medio | Ninguno | IETF e IEEE 802 | Sí | Conservar |
| IV.11 | OK — redacción propia | 114 | A/T/H | Alto P1 | Ninguno | IETF y documentación DNS/DHCP/IPAM | Sí | Conservar |
| IV.12 | OK — redacción propia | 125, 079, 080, 131 | A/T/H | Medio | Ninguno | IETF, W3C y documentación de servicios | Sí | Conservar |
| IV.13 | OK — redacción propia | 109, 115, 117 | A/T/H | Medio | Ninguno | IETF y documentación de seguridad de red | Sí | Conservar |
| IV.14 | OK — redacción propia | 116 | A/T/H | Alto P1 | Ninguno | IETF y estándares de correo | Sí | Conservar |
| IV.15 | OK — redacción propia | 123, 054, 124 | A/T/H | Medio | Ninguno | 3GPP, ETSI e IETF | Sí | Conservar |
| IV.16 | OK — redacción propia | 130, 129 | A/T/H | Medio | Ninguno | Ley 11/2022, CNMC y BOE | Sí | Conservar |

Las seis fuentes alternativas que cerraron la cobertura presentaron máximos de 2 a 5 palabras consecutivas coincidentes y similitud máxima de párrafo por grupos de cinco palabras de 0,023; no generaron candidatos de revisión.

## 5. Preguntas y bancos de test

| Banco | Registros | Resultado de derechos y procedencia |
|---|---:|---|
| Manual | 959 | Separado físicamente; procedencia y derechos declarados; sin coincidencias exactas de 12 palabras con las fuentes A1 cotejadas. |
| Generado por IA | 803 | Separado, marcado `not_official`, validado humanamente según el registro existente; evidencia enlazada por SHA-256; cinco evidencias sincronizadas tras las dos reescrituras. |
| Oficial INAP | 202 | Separado; cuestionario, clave definitiva, convocatoria y URL oficial conservados. No se presenta como contenido propio. |

Total: **1.964 preguntas**. Las 1.762 preguntas manuales o generadas se compararon por enunciado contra las fuentes A1 disponibles sin coincidencias exactas de doce palabras. Las preguntas oficiales se cotejan contra la extracción y la plantilla definitiva del INAP mediante el validador del repositorio.

## 6. Archivo histórico y binarios

`archive/tai-before-gsi` contiene 114 archivos (`40 .html`, `35 .md`, `20 .py`, `12 .json` y `7 .js`). La búsqueda textual no encontró referencias sustantivas a PreparaTIC ni materiales A1; las únicas apariciones léxicas parecidas a “authorized” pertenecen a controles de acceso o enums técnicos sin relación con derechos de reutilización.

No hay PDF, EPUB, DOC/DOCX, ODT, RTF, PPT/PPTX ni XLS/XLSX de PreparaTIC versionados en el árbol actual. La inspección de rutas históricas de Git tampoco encontró nombres PreparaTIC/A1 de ese tipo. Los originales externos permanecen fuera del repositorio.

## 7. Cambios realizados

- Creado `THIRD_PARTY_NOTICES.md` y enlazado desde `README.md`, `LICENSE` y `licencia.html`.
- Añadidos metadatos estructurados de derechos para PreparaTIC, BOE e INAP en `data/gsi-source-manifest.json` y sus esquemas/generadores.
- Aclarado el significado interno de `authorized_root` en manifiesto, registro, esquema, generador y documentación de vigencia/auditoría.
- Añadidos metadatos de derechos a los tres bancos de preguntas y preservados en los importadores/generadores.
- Añadido aviso de procedencia y no afiliación a los ocho manuales canónicos.
- Reescritos preventivamente II.06 (SOA) y III.07 (principios de prueba), incluidos tema Markdown, HTML derivado y evidencias de preguntas.
- Actualizadas todas las huellas SHA-256, longitudes, índices, revisiones editoriales y registros de conversión afectados.
- No se eliminó ningún tema, pregunta, práctica ni fuente primaria.

## 8. Casos para revisión humana o asesoramiento jurídico

No queda ningún candidato textual pendiente. Sí se recomienda revisión jurídica si se pretende redistribuir originales de PreparaTIC, incorporar imágenes/tablas ajenas, reproducir fragmentos extensos o afirmar compatibilidad de licencia: esta auditoría no concede esos permisos. Si aparece en el futuro una licencia explícita por material, deberá registrarse con URL, versión, titular, alcance y fecha de comprobación.

## 9. Validación ejecutada

La segunda pasada de `\.venv\Scripts\python.exe scripts\run_gsi_suite.py` terminó con **código 0**:

- 19.080 controles de integridad correctos; 0 errores técnicos; 0 bloqueos de cierre.
- 19 archivos de datos y 17 esquemas JSON válidos.
- Cuatro bloques, 57 temas y 33 Markdown con rutas y referencias válidas.
- 1.964 preguntas válidas y físicamente separadas por origen.
- 83 pruebas unitarias y 288 pruebas de regresión aprobadas, sin fallos.
- Recorrido funcional HTTP completo aprobado: los 57 temas, móvil, teclado, entrenamiento, examen, práctica escrita, estadísticas, refuerzo, persistencia, exportación/importación y biblioteca oficial.
- Sintaxis JavaScript de todos los módulos y pruebas aprobada por la suite.

La primera pasada detectó una carrera en dos pasos consecutivos de la prueba de exportación/restauración: la prueba continuaba mientras el navegador recargaba. Se corrigió `tests/gsi-smoke.mjs` esperando explícitamente la navegación; la función de la aplicación no necesitó cambios. La prueba aislada y la suite completa posterior pasaron.

También se ejecutaron `git diff --check`, búsqueda residual, inspección de binarios e historial de rutas y búsqueda de patrones comunes de secretos. No se detectaron errores de whitespace, binarios de PreparaTIC ni credenciales. Los avisos de conversión LF/CRLF de Git son informativos y no alteran el contenido validado.

El proyecto es estático y no declara proceso de build. La prueba se realiza mediante servidor HTTP local dentro del recorrido funcional; no se usa `file://`.
