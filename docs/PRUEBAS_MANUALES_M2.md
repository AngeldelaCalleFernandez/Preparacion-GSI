# Pruebas manuales M2

Ejecutar la aplicación mediante un servidor HTTP local desde la raíz del
repositorio. No abrir `index.html` con `file://`.

## Casos

| ID | Prueba | Estado | Resultado esperado |
| --- | --- | --- | --- |
| M2-01 | Carga normal de `#inicio` | NO EJECUTADA | La portada carga sin errores. |
| M2-02 | Listado de `#temario` | NO EJECUTADA | Muestra 4 bloques y 33 temas. |
| M2-03 | Apertura legacy de B1-T01 | NO EJECUTADA | Muestra el tema editorial existente. |
| M2-04 | Apertura canónica equivalente | NO EJECUTADA | Muestra exactamente el mismo tema sin cambiar el hash. |
| M2-05 | Sección desde ruta legacy | NO EJECUTADA | Abre y enfoca la sección solicitada. |
| M2-06 | Sección desde ruta canónica | NO EJECUTADA | Abre la misma sección usando internamente el ID legacy. |
| M2-07 | Recarga directa de ruta canónica | NO EJECUTADA | Mantiene el tema y la sección. |
| M2-08 | Atrás y adelante | NO EJECUTADA | Conserva la navegación de temario. |
| M2-09 | Entrenamiento | NO EJECUTADA | Conserva sus preguntas y su comportamiento previo. |
| M2-10 | Examen | NO EJECUTADA | Conserva sus preguntas y su comportamiento previo. |
| M2-11 | Refuerzo | NO EJECUTADA | Conserva sus registros v1 sin migración. |
| M2-12 | Estadísticas | NO EJECUTADA | Conserva sus registros v1 sin migración. |
| M2-13 | Modo demo | NO EJECUTADA | Conserva su semántica y banco aislado. |
| M2-14 | Ausencia de GSI visible | NO EJECUTADA | No hay selector, temas ni navegación GSI. |
| M2-15 | Consola del navegador | NO EJECUTADA | No aparecen errores ni promesas rechazadas. |
| M2-16 | `tests/m2-runner.html` | APROBADA | 35 pruebas aprobadas y 0 fallidas mediante servidor HTTP local. |

## Registro de ejecución

El runner M2 se ejecutó realmente en navegador mediante servidor HTTP local:
35 pruebas aprobadas y 0 fallidas, sin errores de consola. El resto de los
casos sigue pendiente de una ejecución manual de la aplicación.
