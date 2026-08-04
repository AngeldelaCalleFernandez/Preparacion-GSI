# Pruebas manuales — Fase 7B.2

Todos los casos comienzan como `NO EJECUTADA`. Servir el repositorio con
`python -m http.server 8000` desde su raíz; no usar `file://`.

| Caso | Estado | Instrucciones y resultado esperado |
| --- | --- | --- |
| M-01 | NO EJECUTADA | Abrir `/#temario/B2-T04`; debe mostrar cobertura parcial y revisión pendiente. |
| M-02 | NO EJECUTADA | Abrir `/#temario/B3-T07`; debe mostrar HTML, XML, ECMAScript y ejemplos escapados. |
| M-03 | NO EJECUTADA | Abrir `/#temario/B4-T08`; debe mostrar HTTP, TLS 1.3 y RFC 9846. |
| M-04 | NO EJECUTADA | Recorrer la tabla de contenidos de B2-T04; cada enlace debe enfocar su sección. |
| M-05 | NO EJECUTADA | Recorrer la tabla de contenidos de B3-T07; cada enlace debe enfocar su sección. |
| M-06 | NO EJECUTADA | Recorrer la tabla de contenidos de B4-T08; cada enlace debe enfocar su sección. |
| M-07 | NO EJECUTADA | Abrir directamente `/#temario/B4-T08/handshake-tls`; debe enfocar el H3. |
| M-08 | NO EJECUTADA | Copiar y reabrir esa URL; debe conservar tema y sección. |
| M-09 | NO EJECUTADA | Recargar cada piloto; la ruta debe conservarse. |
| M-10 | NO EJECUTADA | Usar atrás y adelante entre listado, tema y sección; no debe perderse la ruta. |
| M-11 | NO EJECUTADA | Confirmar el aviso de cobertura parcial en los tres pilotos. |
| M-12 | NO EJECUTADA | Confirmar que cada cita muestra su localizador. |
| M-13 | NO EJECUTADA | Abrir las fuentes públicas de B3 y B4; deben usar URL canónica HTTPS. |
| M-14 | NO EJECUTADA | Abrir las fuentes de B2; deben usar URL canónica y nunca una ruta local privada. |
| M-15 | NO EJECUTADA | Buscar `technical/private`, `C:\\` y rutas locales visibles; no debe haber resultados. |
| M-16 | NO EJECUTADA | Comprobar que los tres bloques de código de B3 son legibles y no se ejecutan. |
| M-17 | NO EJECUTADA | Buscar `Linux`, `ECMAScript` y `handshake`; cada término debe mostrar su piloto. |
| M-18 | NO EJECUTADA | Filtrar por `partial`; deben aparecer exactamente cuatro temas. |
| M-19 | NO EJECUTADA | Abrir `/?demo=1#temario/B3-T07`; el contenido editorial debe ser idéntico. |
| M-20 | NO EJECUTADA | Recorrer listado, detalle, índice y fuentes solo con teclado; el foco debe ser visible. |
| M-21 | NO EJECUTADA | Inspeccionar encabezados: un único H1 visible y fragmentos con H2/H3. |
| M-22 | NO EJECUTADA | Probar a 320 px; no debe existir desplazamiento horizontal global. |
| M-23 | NO EJECUTADA | Probar a 768 px; índice y contenido deben seguir operables. |
| M-24 | NO EJECUTADA | Probar a 1280 px; índice y contenido deben seguir operables. |
| M-25 | NO EJECUTADA | Aplicar zoom real al 200 %; no debe perderse contenido ni acciones. |
| M-26 | NO EJECUTADA | Activar `prefers-reduced-motion`; el salto de sección no debe animarse. |
| M-27 | NO EJECUTADA | Navegar los tres pilotos y comprobar consola sin errores. |
| M-28 | NO EJECUTADA | Comprobar Red: índice y tres HTML responden 200 mediante rutas relativas. |
| M-29 | NO EJECUTADA | Abrir `/tests/phase7b2-runner.html`; debe terminar sin fallos. |
| M-30 | NO EJECUTADA | Ejecutar dos veces el constructor; la segunda no debe producir diferencias. |
| M-31 | NO EJECUTADA | Ejecutar `validate_phase7b2.py`; debe terminar con código cero. |
| M-32 | NO EJECUTADA | Comparar bancos y fuentes con `fase-7b1-completada`; deben permanecer iguales. |
| M-33 | NO EJECUTADA | Recorrer Inicio, Entrenamiento, Examen, Refuerzo y Estadísticas; todas las rutas previas deben funcionar. |
| M-34 | NO EJECUTADA | Servir desde una subruta equivalente a GitHub Pages; contenidos y fuentes deben cargar. |
| M-35 | NO EJECUTADA | Confirmar que no existen vistas, datos o funciones de 7B.3 o Fase 8. |

La revisión doctrinal de `docs/REVISION_EDITORIAL_FASE_7B_2.md` es un control
separado y no puede aprobarse a partir del resultado de estas pruebas técnicas.
