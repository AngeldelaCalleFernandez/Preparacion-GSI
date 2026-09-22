# Bloque II — mejora pedagógica y visual

Fecha de revisión: 22/09/2026

Rama: `gsi-only-final`

Alcance: `B2-T01` a `B2-T16`

## Resultado

Se ha revisado íntegramente el Bloque II y se ha incorporado una capa editorial declarativa sin reducir el temario, alterar preguntas ni modificar los documentos originales. El cuerpo técnico se conserva; las intervenciones se limitan a limpiar notas internas, corregir un encabezado, actualizar una referencia temporal de Kubernetes y añadir un esquema original por tema.

## Fuente canónica y regeneración

- Los originales de `documents/originals/gsi/` no se modifican.
- `content/topics/*.md` y `content/generated/*.html` se regeneran con `scripts/build_gsi_content.py`.
- La capa editorial del bloque está en `content/enhancements/b2-visuals.json`.
- Los 16 SVG originales están en `assets/diagrams/b2/`.
- El generador y el validador cargan todos los manifiestos `b*-visuals.json`, rechazan temas duplicados y fallan si un texto o una ubicación deja de coincidir.
- El cambio de infraestructura es compatible con el Bloque I, que permanece sin diferencias respecto a su commit de cierre.

## Clasificación de los temas

| Tema | Estado | Acción principal |
| --- | --- | --- |
| B2-T01 | REESCRITURA SELECTIVA | Se limpia la entrada y se representa la continuidad máquina–virtualización–cloud. |
| B2-T02 | CONSERVAR ESTRUCTURA | Se añade una comparación de proceso, hilo y planificación. |
| B2-T03 | REESCRITURA SELECTIVA | Se ordenan los ejes de comparación entre lenguajes. |
| B2-T04 | REESCRITURA SELECTIVA | Se visualiza la cadena desde fuentes hasta decisión BI. |
| B2-T05 | REESCRITURA SELECTIVA | Se separan niveles externo, conceptual e interno de ANSI/SPARC. |
| B2-T06 | REESCRITURA SELECTIVA | Se ordenan presentación, lógica, integración y datos. |
| B2-T07 | REESCRITURA SELECTIVA | Se actualiza Kubernetes y se resume su arquitectura declarativa. |
| B2-T08 | CONSERVAR ESTRUCTURA | Se añade correspondencia OSI/TCP-IP con encapsulación. |
| B2-T09 | REESCRITURA SELECTIVA | Se relacionan SGML, HTML, XML, XHTML, XPath y XSLT. |
| B2-T10 | REESCRITURA SELECTIVA | Se convierte el análisis de riesgos en un ciclo trazable. |
| B2-T11 | REESCRITURA SELECTIVA | Se representa el ciclo completo de auditoría y cierre. |
| B2-T12 | REESCRITURA SELECTIVA | Se sustituye la nota de procedencia por una entrada directa y una arquitectura de contact center. |
| B2-T13 | REESCRITURA SELECTIVA | Se separan respuesta operativa y preservación forense. |
| B2-T14 | REESCRITURA SELECTIVA | Se corrige un falso encabezado y se comparan familias de licencias. |
| B2-T15 | CONSERVAR ESTRUCTURA | Se conecta selección multicriterio con planificación y control. |
| B2-T16 | REESCRITURA SELECTIVA | Se organiza el ecosistema de contenidos por ciclo de vida. |

## Gráficos creados

| Tema | Archivo | Concepto de alto valor |
| --- | --- | --- |
| B2-T01 | `b2-t01-maquina-cloud.svg` | Máquina física, virtualización, contenedor y cloud. |
| B2-T02 | `b2-t02-proceso-hilo.svg` | Proceso, hilo, estados y planificación. |
| B2-T03 | `b2-t03-ejes-lenguajes.svg` | Paradigma, tipado, ejecución y memoria. |
| B2-T04 | `b2-t04-cadena-bi.svg` | Fuentes, integración, almacenamiento, análisis y decisión. |
| B2-T05 | `b2-t05-ansi-sparc.svg` | Independencia lógica y física en ANSI/SPARC. |
| B2-T06 | `b2-t06-capas-integracion.svg` | Capas e integración de sistemas. |
| B2-T07 | `b2-t07-kubernetes.svg` | Control plane, nodos y reconciliación declarativa. |
| B2-T08 | `b2-t08-osi-tcpip.svg` | Correspondencia de capas y encapsulación. |
| B2-T09 | `b2-t09-familia-marcas.svg` | Familia de lenguajes de marcas. |
| B2-T10 | `b2-t10-ciclo-riesgo.svg` | Riesgo inherente, salvaguardas, residual y tratamiento. |
| B2-T11 | `b2-t11-ciclo-auditoria.svg` | Evidencia, hallazgo, acciones y verificación. |
| B2-T12 | `b2-t12-contact-center.svg` | Canales, ACD, atención, CRM y backoffice. |
| B2-T13 | `b2-t13-incidente-forense.svg` | Respuesta a incidentes y cadena de custodia. |
| B2-T14 | `b2-t14-licencias.svg` | Propietario, permisivas, copyleft, dominio público y DRM. |
| B2-T15 | `b2-t15-alternativas-proyecto.svg` | Alternativas, sensibilidad, líneas base y valor ganado. |
| B2-T16 | `b2-t16-ciclo-contenido.svg` | DMS, workflow, CMS, distribución, búsqueda y archivo. |

Todos los SVG incluyen `<title>` y `<desc>`, emplean rótulos además del color y son originales del proyecto.

## Cambios editoriales y precisión técnica

- Se han retirado o reformulado notas sobre auditorías, huecos de fuente y proceso interno que no aportaban contenido de estudio.
- En B2-T14, «La European Union Public Licence...» deja de presentarse como un encabezado de segundo nivel y pasa a ser un párrafo normal bajo su sección.
- En B2-T07 se elimina una previsión ya caducada sobre Kubernetes 1.37. La referencia queda formulada de forma estable y el suplemento fecha el estado comprobado: 1.37, 1.36 y 1.35 eran las versiones menores mantenidas el 22/09/2026; Kubernetes 1.37.0 se publicó el 26/08/2026.
- Fuentes primarias de contraste: [Kubernetes Releases](https://kubernetes.io/releases/) y [Kubernetes 1.37](https://kubernetes.io/releases/1.37/).

No se han eliminado definiciones, protocolos, modelos, controles, métodos, fórmulas, referencias o claves de test del corpus canónico.

## Accesibilidad y responsive

- Cada inserción ofrece título visible, `alt` descriptivo, explicación y una clave «Qué debes recordar».
- En escritorio los diagramas se ajustan al ancho disponible.
- En móvil el documento no produce scroll horizontal; el esquema mantiene anchura legible en un contenedor desplazable local rotulado.
- `tests/b2-visual-smoke.mjs` abre los 16 temas en 1365×900 y 390×844, comprueba imágenes, cantidad de visuales, alternativas textuales, recortes, overflow y errores de consola, y guarda capturas en `tmp/gsi-b2/`.

## Archivos

### Creados

- `content/enhancements/b2-visuals.json`.
- 16 SVG en `assets/diagrams/b2/`.
- `tests/b2-visual-smoke.mjs`.
- `logs/b2-visual-smoke.json`.
- `docs/BLOQUE_II_MEJORA_VISUAL.md`.

### Modificados

- `scripts/build_gsi_content.py` y `scripts/validate_gsi_final.py`, para generalizar a los cuatro bloques la infraestructura declarativa inaugurada en B1.
- `content/topics/B2-T01.md` a `content/topics/B2-T16.md`.
- `content/generated/B2-T01.html` a `content/generated/B2-T16.html`.
- `data/topic-content.json`, únicamente por los checksums de los HTML derivados.
- Logs mantenidos por las validaciones.

### Documentos convertidos y pendientes

No se han convertido documentos ni usado OCR. No hay documentos pendientes derivados de esta intervención.

## Validaciones ejecutadas

| Comprobación | Resultado |
| --- | --- |
| XML de los 16 SVG y JSON del manifiesto | Correcto |
| `python -m py_compile` de generador y validador | Correcto |
| Regeneración de contenido | 57 temas; distribución 10/16/15/16 |
| `scripts/validate_gsi_final.py` | 19.120 controles correctos; 0 errores; 0 bloqueos |
| `tests/b2-visual-smoke.mjs` | 32/32 casos; 16 SVG; sin overflow ni rutas rotas |
| Bancos de preguntas | 202 oficiales + 803 IA + 959 manuales = 1.964; sin cambios |
| `scripts/run_gsi_suite.py` | Código 0; `technical_pass = true`; `release_ready = true` |

## Cómo probar

1. Regenerar con `.\.venv\Scripts\python.exe scripts/build_gsi_content.py`.
2. Ejecutar `.\.venv\Scripts\python.exe scripts/run_gsi_suite.py`.
3. Ejecutar `node tests/b2-visual-smoke.mjs` con `PLAYWRIGHT_MODULE` cuando Playwright no esté instalado localmente.
4. Servir el repositorio por HTTP y abrir `index.html#temario/B2-T01` hasta `B2-T16`.

## Limitaciones y siguiente fase

La automatización de navegador integrada en la aplicación no pudo iniciarse por un error del helper sandbox; la prueba se ejecutó con Chrome headless y Playwright, con capturas reproducibles. No quedan bloqueos funcionales del Bloque II. La siguiente fase autorizada es el Bloque III, manteniendo la misma secuencia de lectura completa, cambios, prueba, commit y subida.
