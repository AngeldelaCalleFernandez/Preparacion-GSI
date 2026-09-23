# Bloque IV — mejora pedagógica y visual

Fecha de revisión: 23/09/2026

Rama: `gsi-only-final`

Alcance: `B4-T01` a `B4-T16`

## Resultado

Se ha revisado íntegramente el Bloque IV. Los 16 temas se han reestructurado para hacer explícita su jerarquía de estudio, conservar el contenido técnico y añadir una visual original por tema. No se han modificado preguntas ni documentos originales.

## Arquitectura de la mejora

- Las fuentes originales de `documents/originals/gsi/` permanecen intactas.
- El manifiesto `content/enhancements/b4-visuals.json` declara promociones de encabezado y ubicaciones visuales de forma comprobable.
- `scripts/build_gsi_content.py` integra la capa en Markdown y HTML y falla si un anclaje deja de existir.
- Los 16 SVG accesibles están en `assets/diagrams/b4/`.
- La mejora reutiliza la arquitectura responsive y accesible validada en los bloques anteriores.

## Clasificación y visuales

Los 16 temas se clasifican como `REESTRUCTURAR`: sus etiquetas planas de cierre pasan a formar parte de la jerarquía numerada, sin alterar la materia estudiable.

| Tema | Visual principal |
| --- | --- |
| B4-T01 | Flujo de operación de sistemas operativos. |
| B4-T02 | Servicio de base de datos y responsabilidades del SGBD. |
| B4-T03 | Respuesta a incidentes, copia y recuperación. |
| B4-T04 | Configuración, telemetría y observabilidad. |
| B4-T05 | Capas y decisiones de almacenamiento. |
| B4-T06 | Centro de proceso de datos, alta disponibilidad y recuperación. |
| B4-T07 | Subsistemas del cableado estructurado. |
| B4-T08 | LAN segmentada mediante VLAN y controles de acceso. |
| B4-T09 | Ciclo de gestión y supervisión de red. |
| B4-T10 | Selección y protección de conectividad WAN. |
| B4-T11 | Capas de una WLAN empresarial. |
| B4-T12 | Defensa en profundidad y respuesta. |
| B4-T13 | Relación entre Internet, servicios e IoT. |
| B4-T14 | Cadena de señalización y medios en VoIP. |
| B4-T15 | Gestión del ciclo de vida móvil con UEM. |
| B4-T16 | Arquitectura de videoconferencia y colaboración. |

Los archivos siguen el patrón `assets/diagrams/b4/b4-tNN-*.svg`. Todos contienen `<title>` y `<desc>`, comunican mediante texto y formas además del color e incluyen alternativa, explicación y clave de memoria en la página.

## Cambios pedagógicos relevantes

- «Datos y trampas de test» y «Aplicación al supuesto práctico» dejan de ser rótulos planos y pasan a secciones numeradas de segundo nivel en los 16 temas.
- En T16, los anexos A, B y C y las fuentes oficiales pasan a integrarse como secciones numeradas del cierre del bloque.
- Cada diagrama sintetiza una relación operativa o una decisión de arquitectura, evitando repetir en formato decorativo el texto del tema.
- La estructura mantiene intactos el texto oficial de los epígrafes y la separación entre contenido fuente, mejora declarativa y derivados generados.

## Actualidad y fuentes primarias

- [RFC 9846](https://www.rfc-editor.org/info/rfc9846/) actualiza la especificación de TLS 1.3 y declara obsoleto RFC 8446 sin cambiar la versión del protocolo.
- [IEEE 802.11-2024](https://standards.ieee.org/ieee/802.11/10548/) incorpora las enmiendas consolidadas de la familia, incluida IEEE 802.11be-2024.
- [3GPP Release 18](https://www.3gpp.org/specifications-technologies/releases/release-18) identifica la primera entrega de 5G-Advanced.
- El [Esquema Nacional de Seguridad consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191&p=20241106&tn=1) recoge la redacción vigente usada como referencia normativa.

## Accesibilidad y responsive

- La prueba abre los 16 temas en 1365×900 y 390×844.
- Comprueba número y carga de SVG, texto alternativo, recorte, overflow de página, consola y rutas HTTP.
- En móvil el diagrama conserva anchura legible dentro de un contenedor desplazable local.
- El resultado final es 32/32 combinaciones tema/viewport sin incidencias.

## Archivos

### Creados

- `content/enhancements/b4-visuals.json`.
- 16 SVG en `assets/diagrams/b4/`.
- `tests/b4-visual-smoke.mjs`.
- `logs/b4-visual-smoke.json`.
- `docs/BLOQUE_IV_MEJORA_VISUAL.md`.

### Modificados

- `content/topics/B4-T01.md` a `content/topics/B4-T16.md`.
- `content/generated/B4-T01.html` a `content/generated/B4-T16.html`.
- `data/topic-content.json`, por los checksums de los derivados.
- Logs mantenidos por la suite.

### Conversión y OCR

No se han convertido documentos ni usado OCR. No hay pendientes de conversión en esta intervención.

## Validaciones

| Comprobación | Resultado |
| --- | --- |
| XML de 16 SVG, JSON y `py_compile` | Correcto |
| Regeneración | 57 temas; distribución 10/16/15/16 |
| `scripts/validate_gsi_final.py` | 19.183 controles correctos; 0 errores; 0 bloqueos |
| `tests/b4-visual-smoke.mjs` | 32/32 tema/viewport; sin overflow, consola ni rutas rotas |
| Preguntas | 202 oficiales + 803 IA + 959 manuales = 1.964; sin cambios |
| `scripts/run_gsi_suite.py` | Código 0; `technical_pass = true`; `release_ready = true` |

## Cómo probar

1. `.\\.venv\\Scripts\\python.exe scripts/build_gsi_content.py`.
2. `.\\.venv\\Scripts\\python.exe scripts/run_gsi_suite.py`.
3. Ejecutar `node tests/b4-visual-smoke.mjs` con `PLAYWRIGHT_MODULE` si no existe Playwright local.
4. Servir el repositorio por HTTP y abrir `index.html#temario/B4-T01` hasta `B4-T16`.

## Limitaciones y siguiente fase

La automatización integrada de navegador siguió indisponible por el error del helper sandbox; la comprobación se realizó con Chrome headless y Playwright, con capturas en `tmp/gsi-b4/`. No quedan bloqueos del Bloque IV. El paso siguiente es la comprobación global de la rama y su publicación.
