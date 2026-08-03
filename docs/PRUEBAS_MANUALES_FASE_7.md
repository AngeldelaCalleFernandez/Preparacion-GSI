# Pruebas manuales — Fase 7A

Todas las pruebas se registraron inicialmente como `NO EJECUTADA`. Solo se han
actualizado los casos realmente ejecutados; los demás deben realizarse con
`python -m http.server 8000`, no mediante `file://`.

| Caso | Estado | Instrucciones y resultado esperado |
| --- | --- | --- |
| M-01 | APROBADA | Ejecutada en navegador: `#temario` mostró 33 temas. |
| M-02 | APROBADA | Ejecutada en navegador: el filtro B1 mostró solo sus nueve temas. |
| M-03 | APROBADA | Ejecutada en navegador: el filtro parcial mostró solo B1-T01. |
| M-04 | APROBADA | Ejecutada en navegador: revisión pendiente mostró únicamente B1-T01. |
| M-05 | APROBADA | Ejecutada en navegador: la búsqueda `Corona` mostró B1-T01. |
| M-06 | APROBADA | Ejecutada en navegador: se cargó el detalle de B1-T01. |
| M-07 | APROBADA | Ejecutada en navegador: la URL directa enfocó `#la-corona`. |
| M-08 | APROBADA | Ejecutada en navegador: recargar conservó ruta y foco de sección. |
| M-09 | APROBADA | Ejecutada en navegador: atrás y adelante conservaron listado y detalle. |
| M-10 | APROBADA | Ejecutada en navegador: «La Corona» actualizó la URL a `#temario/B1-T01/la-corona` y enfocó la sección. |
| M-11 | APROBADA | Ejecutada en navegador: se copió y reabrió `#temario/B1-T01/la-corona`, conservando tema y sección. |
| M-12 | APROBADA | Ejecutada en navegador: B2-T01 mostró solo la carencia documental. |
| M-13 | APROBADA | Ejecutada en navegador: B1-T01 mostró cobertura parcial y revisión pendiente. |
| M-14 | APROBADA | Ejecutada en navegador: la fuente de `sources.json` se abrió en otra pestaña y el localizador permaneció visible en la aplicación. |
| M-15 | APROBADA | Ejecutada en navegador: los enlaces BOE no contienen anclas inventadas. |
| M-16 | APROBADA | Ejecutada en navegador: la ruta de tema inválida mostró un error controlado. |
| M-17 | APROBADA | Ejecutada en navegador: una sección inexistente mostró error dentro del tema. |
| M-18 | APROBADA | Ejecutada en navegador: al bloquear temporalmente el HTML se mostró el fallo y se conservó «Volver al listado». |
| M-19 | APROBADA | Ejecutada en navegador: `?demo=1` mantuvo un único contenido editorial. |
| M-20 | APROBADA | Comprobación manual del usuario: recorrido completo mediante teclado, con foco visible y controles activables. |
| M-21 | APROBADA | Ejecutada en navegador: un `main`, un `banner`, navegación y artículo; un único H1 visible, fragmento desde H2 y jerarquía H2/H3 válida. |
| M-22 | APROBADA | Ejecutada en navegador a 320 px: sin desplazamiento horizontal global. |
| M-23 | APROBADA | Ejecutada en navegador a 768 px: contenido y tabla de contenidos operables. |
| M-24 | APROBADA | Ejecutada en navegador a 1280 px: contenido y tabla de contenidos operables. |
| M-25 | APROBADA | Comprobación manual del usuario: zoom real al 200 % sin pérdida de legibilidad ni controles esenciales. |
| M-26 | APROBADA | Ejecutada en navegador: con `prefers-reduced-motion: reduce`, `scroll-behavior` fue `auto` y el salto de sección fue inmediato. |
| M-27 | APROBADA | Ejecutada en navegador: consola sin errores al navegar listado, detalle, sección, rutas principales y runner. |
| M-28 | APROBADA | Ejecutada en navegador: Red mostró `data/topic-content.json` y `content/generated/B1-T01.html` con respuesta 200 y rutas relativas. |
| M-29 | APROBADA | Ejecutada en navegador: runner con 45 aprobadas y 0 fallidas. |
| M-30 | APROBADA | Ejecutada: una segunda construcción no produjo cambios de checksum. |
| M-31 | APROBADA | Ejecutada: `validate_phase7.py` terminó con código cero. |
| M-32 | APROBADA | Ejecutada en navegador: Inicio, Entrenamiento, Examen, Refuerzo y Estadísticas conservaron cada ruta y vista, sin retorno asíncrono a Inicio. |

## Registro de ejecución

- Fecha: 2026-08-03. Navegador: navegador integrado de Codex.
- URLs comprobadas: `/#temario`, `/#temario/B1-T01`,
  `/#temario/B1-T01/la-corona`, `/?demo=1#temario/B1-T01` y
  `/tests/phase7-runner.html`.
- M-02 y M-04: el filtro por Bloque I mostró 9 de 33 temas; al seleccionar
  «Pendiente de revisión» quedó B1-T01 como único resultado.
- M-10 y M-11: el enlace de índice «La Corona» actualizó la ruta y llevó a su
  sección; la URL copiada y abierta de nuevo conservó el mismo tema y foco.
- M-14 y M-15: la fuente BOE se abrió en otra pestaña con la URL declarada en
  los datos de fuentes; los localizadores se mostraron dentro de la aplicación
  y ningún enlace BOE contenía un fragmento externo inventado.
- M-18: se bloqueó temporalmente por CDP `content/generated/B1-T01.html`.
  La vista conservó la cabecera, migas y «Volver al listado»; tras retirar el
  bloqueo se recargó correctamente. El mensaje observado fue `Failed to fetch`.
- M-21: la vista visible tuvo un único H1, un `main`, `banner`, navegaciones y
  artículo; el fragmento editorial empezó en H2 y mantuvo jerarquía H2/H3.
- M-22 a M-24: a 320 × 900, 768 × 900 y 1280 × 900 no se observó
  desplazamiento horizontal global; el contenido y el índice siguieron visibles.
- M-26: con la emulación activa de `prefers-reduced-motion: reduce`, la página
  informó `scroll-behavior: auto` y el enlace de sección saltó inmediatamente.
- M-27 y M-28: no hubo errores en consola; Red registró respuestas 200 para
  `data/topic-content.json` y `content/generated/B1-T01.html`, resueltas desde
  rutas relativas.
- M-32: se recorrieron Inicio, Entrenamiento, Examen, Refuerzo y Estadísticas;
  cada una conservó su encabezado y enlace de navegación activo, sin retorno a
  Inicio tras la inicialización asíncrona.
- M-29: el runner completo mostró 45 pruebas aprobadas y 0 fallidas.
- M-20 — **Comprobación manual del usuario:** se recorrió el detalle del tema
  utilizando únicamente el teclado. El foco abandonó el encabezado,
  permaneció visible y siguió un orden utilizable por navegación, tabla de
  contenidos, fuentes y controles. Los enlaces pudieron activarse con el
  teclado.
- M-25 — **Comprobación manual del usuario:** se aplicó zoom real del
  navegador al 200 %. El contenido, la tabla de contenidos, las referencias y
  los controles permanecieron legibles y utilizables, sin pérdida de acciones
  esenciales ni desplazamiento horizontal global indebido.

## Resumen final

- 32 pruebas manuales APROBADAS.
- 0 FALLIDAS.
- 0 NO EJECUTADAS.
- Runner: 45 aprobadas y 0 fallidas.
- Consola y red sin errores observados.
- Constructor determinista.
- Validador de Fase 7 correcto.
- Archivos protegidos sin cambios.
