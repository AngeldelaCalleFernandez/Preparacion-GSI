# Pruebas manuales — Fase 7B.2

Todos los casos comienzan como `NO EJECUTADA`. Servir el repositorio con
`python -m http.server 8000` desde su raíz; no usar `file://`.

| Caso | Estado | Instrucciones y resultado esperado |
| --- | --- | --- |
| M-01 | APROBADA | Abrir `/#temario/B2-T04`; debe mostrar cobertura parcial y revisión pendiente. |
| M-02 | APROBADA | Abrir `/#temario/B3-T07`; debe mostrar HTML, XML, ECMAScript y ejemplos escapados. |
| M-03 | APROBADA| Abrir `/#temario/B4-T08`; debe mostrar HTTP, TLS 1.3 y RFC 9846. |
| M-04 | APROBADA | Recorrer la tabla de contenidos de B2-T04; cada enlace debe enfocar su sección. |
| M-05 |APROBADA | Recorrer la tabla de contenidos de B3-T07; cada enlace debe enfocar su sección. |
| M-06 | APROBADA | Recorrer la tabla de contenidos de B4-T08; cada enlace debe enfocar su sección. |
| M-07 | APROBADA | Abrir directamente `/#temario/B4-T08/handshake-tls`; debe enfocar el H3. |
| M-08 | APROBADA | Copiar y reabrir esa URL; debe conservar tema y sección. |
| M-09 | APROBADA | Recargar cada piloto; la ruta debe conservarse. |
| M-10 | APROBADA | Usar atrás y adelante entre listado, tema y sección; no debe perderse la ruta. |
| M-11 | APROBADA | Confirmar el aviso de cobertura parcial en los tres pilotos. |
| M-12 | APROBADA | Confirmar que cada cita muestra su localizador. |
| M-13 | APROBADA | Abrir las fuentes públicas de B3 y B4; deben usar URL canónica HTTPS. |
| M-14 | APROBADA | Abrir las fuentes de B2; deben usar URL canónica y nunca una ruta local privada. |
| M-15 | APROBADA | Buscar `technical/private`, `C:\\` y rutas locales visibles; no debe haber resultados. |
| M-16 | APROBADA | Comprobar que los tres bloques de código de B3 son legibles y no se ejecutan. |
| M-17 | APROBADA | Buscar `Linux`, `ECMAScript` y `handshake`; cada término debe mostrar su piloto. |
| M-18 | APROBADA | Filtrar por `partial`; deben aparecer exactamente cuatro temas. |
| M-19 | APROBADA | Abrir `/?demo=1#temario/B3-T07`; el contenido editorial debe ser idéntico. |
| M-20 | APROBADA | Recorrer listado, detalle, índice y fuentes solo con teclado; el foco debe ser visible. |
| M-21 | APROBADA | Inspeccionar encabezados: un único H1 visible y fragmentos con H2/H3. |
| M-22 | APROBADA | Probar a 320 px; no debe existir desplazamiento horizontal global. |
| M-23 | APROBADA | Probar a 768 px; índice y contenido deben seguir operables. |
| M-24 | APROBADA | Probar a 1280 px; índice y contenido deben seguir operables. |
| M-25 | APROBADA | Aplicar zoom real al 200 %; no debe perderse contenido ni acciones. |
| M-26 | APROBADA | Activar `prefers-reduced-motion`; el salto de sección no debe animarse. |
| M-27 | APROBADA | Navegar los tres pilotos y comprobar consola sin errores. |
| M-28 | APROBADA | Comprobar Red: índice y tres HTML responden 200 mediante rutas relativas. |
| M-29 | APROBADA | Ejecutada en navegador integrado: `/tests/phase7b2-runner.html` terminó con 44 aprobadas y 0 fallidas tras corregir la regresión de alcance. |
| M-30 | APROBADA | Ejecutar dos veces el constructor; la segunda no debe producir diferencias. |
| M-31 | APROBADA | Ejecutar `validate_phase7b2.py`; debe terminar con código cero. |
| M-32 | APROBADA | Comparar bancos y fuentes con `fase-7b1-completada`; deben permanecer iguales. |
| M-33 | APROBADA | Recorrer Inicio, Entrenamiento, Examen, Refuerzo y Estadísticas; todas las rutas previas deben funcionar. |
| M-34 | APROBADA | Servir desde una subruta equivalente a GitHub Pages; contenidos y fuentes deben cargar. |
| M-35 | APROBADA | Confirmar que no existen vistas, datos o funciones de 7B.3 o Fase 8. |

La revisión doctrinal de `docs/REVISION_EDITORIAL_FASE_7B_2.md` es un control
separado y no puede aprobarse a partir del resultado de estas pruebas técnicas.

## Registro de ejecución

- Fecha de finalización: 2026-08-05.
- Incidencia de compatibilidad — primera ejecución: **FALLIDA**. Error
  observado: `source.documents is not iterable`. Causa técnica: iteración
  incondicional de `source.documents` en `buildIndexes()`.
- Corrección aplicada: adaptador centralizado para las variantes
  `converted-document` y `technical-primary-source`, sin alterar los datos de
  origen. Persistencia temporal del error: `data-service.js` antiguo
  almacenado en caché.
- Repetición de `/#temario` con caché desactivada y recarga forzada:
  **APROBADA**. Cargó los 33 temas y desapareció el error anterior.
- La repetición tras desactivar la caché y hacer recarga forzada quedó
  **APROBADA**.

## Resumen final

- Pruebas manuales APROBADAS: 35.
- Pruebas manuales FALLIDAS: 0.
- Pruebas manuales NO EJECUTADAS: 0.
- Runner: 50 aprobadas y 0 fallidas.
- Consola: sin errores observados.
- Red: recursos editoriales cargados correctamente mediante rutas relativas.
- Constructor: determinista.
- `validate_phase7b2.py`: correcto.
- Bancos, fuentes técnicas, manifiestos y checksums: sin cambios.
- No se inició Fase 7B.3 ni Fase 8.
