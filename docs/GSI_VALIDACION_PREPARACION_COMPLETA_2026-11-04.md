# Validación técnica tras completar la preparación editorial

Fecha de ejecución: 4 de noviembre de 2026. Commit del banco activo: `e3e20ab879518c899806a70575eead28b3b35e6f`.

**La suite completa termina con código 0. El cierre editorial sigue pendiente:** solo el lote 001 tiene aprobación expresa y está aplicado. Hay 1.742 propuestas pendientes en 88 lotes y seis incidencias activas con corrección propuesta. La cobertura de preparación alcanza las 1.762 preguntas no oficiales; ninguna queda sin ficha.

## Resultados y alcance

| Comprobación | Resultado |
| --- | --- |
| Unitarias JavaScript | 101 aprobadas, 0 fallidas |
| Regresión en Chrome, siete runners | 289 aprobadas, 0 fallidas |
| Recorrido HTTP en Chrome | 82 comprobaciones aprobadas; sin errores de consola ni rutas rotas |
| Circuito editorial | 19 pruebas aprobadas |
| Analizador editorial y jerarquía | 8 y 5 pruebas aprobadas |
| Datos y esquemas | 111 JSON y 21 esquemas válidos |
| Integridad | 19.251 controles superados |
| Exportación Markdown | Sincronizada con las 1.964 preguntas |
| Archivos protegidos | 377 hashes sin cambios |

El recorrido HTTP incluye Entrenamiento y barajado, reanudación, repetición de falladas, Simulacros oficiales, puntuación, estadísticas, Refuerzo, exportación/importación, navegación por teclado y vistas móviles. Se sirve bajo `/gsi-test/`, para comprobar rutas de proyecto compatibles con GitHub Pages. Es una comprobación automatizada local; no prueba una publicación real ni calibra la dificultad.

El primer intento terminó con código 1: Chrome no pudo acceder a `127.0.0.1` por `ERR_NETWORK_ACCESS_DENIED`. Las demás etapas pasaron. Se conservó ese informe y se repitió la misma suite con permiso de acceso al servidor HTTP local. El reintento terminó con todas las etapas a cero. Ambos resultados constan en el [registro permanente](../logs/gsi-editorial-completion-validation-2026-11-04.json).

Los tres bancos coinciden con el commit activo. Respecto al commit anterior al piloto, solo cambian los 20 IDs aprobados de 001, cuyo hash sigue siendo `9ef7e9e1ebaf5ffb1aaed76f3213baac8779fc90a52f7d262f697ea9315f1d5b`. Se mantienen sus claves y contenido aprobado. Las 202 preguntas oficiales conservan los bytes de la auditoría. No se ha creado ninguna aceptación adicional.

## Pendientes y siguiente paso

El código 0 y el campo `release_ready` del runner describen las comprobaciones que ejecuta. **No acreditan la aprobación editorial pendiente ni resuelven las seis incidencias activas.** Las fichas y hashes están en el [inventario de cobertura](GSI_COBERTURA_EDITORIAL_2026-11-04.md). Los lotes 032, 054, 055, 085, 086 y 088 contienen las correcciones prioritarias.

Para continuar hace falta la decisión expresa del propietario sobre un lote y su hash vigente. Después procede comprobar de nuevo su integridad y fuentes, aplicar únicamente ese contenido y repetir las validaciones. No se presenta la evaluación del preparador ni las señales automáticas como revisión independiente del propietario. La calibración estadística permanece para una etapa posterior.

## Archivos y reproducción

Se crean este informe y el registro permanente enlazado. La suite regenera los informes derivados de integridad y los logs actuales de unitarias, regresión y recorrido HTTP. Los resultados previos se preservan con hashes en `tmp/gsi-completion-validation-2026-11-04/`; la revalidación histórica de 001 permanece intacta. No se modifican propuestas, bancos, aceptaciones ni código de la aplicación. No hay nuevas conversiones ni conversiones pendientes. No se aplica, activa, retira, publica, fusiona ni crea un commit en esta entrega.

Desde la raíz del proyecto, con Chrome y las dependencias locales ya instaladas:

```powershell
.\.venv\Scripts\python.exe -X utf8 -B scripts/run_gsi_suite.py
.\.venv\Scripts\python.exe -X utf8 -B scripts/export_gsi_questions.py --check
git diff --check
```

Los informes generales siguen disponibles en [suite](../logs/gsi-suite.json) y [progreso editorial](../logs/gsi-editorial-progress.json). Las fuentes no se han vuelto a consultar en esta validación técnica; cada ficha conserva sus fechas reales, localizadores y límites de consulta.
