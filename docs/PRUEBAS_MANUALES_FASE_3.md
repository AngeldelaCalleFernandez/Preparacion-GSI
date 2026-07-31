# Pruebas manuales de la Fase 3

## Preparación común

1. Desde la raíz del repositorio, ejecute `python -m http.server 8000`.
2. Abra un navegador moderno en `http://localhost:8000/`.
3. Para las preguntas ficticias de interfaz, abra `http://localhost:8000/?demo=1#entrenamiento`.
4. Registre cada caso como `APROBADA`, `FALLIDA` o `NO EJECUTADA`. Solo puede marcarse `APROBADA` tras ejecutarlo realmente en un navegador.

## Registro

| ID | Estado inicial | URL y pasos exactos | Resultado esperado |
| --- | --- | --- | --- |
| M-01 | APROBADA | Abra `http://localhost:8000/`. Espere a que termine la carga. | Inicio visible, sin error de carga, con 4 bloques, 33 temas, 0 preguntas reales activas y el número de actualizaciones catalogadas. |
| M-02 | APROBADA | Abra `http://localhost:8000/#temario`. Expanda los cuatro bloques uno a uno. | Navegación y URL por hash correctas; se ven 4 bloques y exactamente 33 temas, cada uno con sus fuentes. |
| M-03 | APROBADA | Abra `http://localhost:8000/#entrenamiento`. Cambie bloque, tema, origen y cantidad sin usar `?demo=1`. | El formulario actualiza sus temas; informa de que no hay preguntas reales compatibles y no inicia una sesión vacía. |
| M-04 | APROBADA | Abra `http://localhost:8000/?demo=1#entrenamiento`. Seleccione todos los bloques, origen IA y cantidad 3. Inicie el entrenamiento. | Aparece el aviso persistente de demo y se inicia una sesión con preguntas IA ficticias, no oficiales y en borrador. |
| M-05 | APROBADA | En la primera pregunta demo, seleccione una opción incorrecta. | La opción correcta queda identificada, se muestra feedback, fuente de demostración y botón para continuar. |
| M-06 | APROBADA | En una pregunta demo, seleccione la opción correcta. Recargue la página tras corregir. | La interfaz confirma la corrección y el resumen muestra una respuesta demo guardada tras la recarga. |
| M-07 | NO EJECUTADA | Inserte directamente en `localStorage` una respuesta real y otra demo con el formato válido. Pulse `Borrar solo respuestas demo` y confirme. | Se elimina la respuesta demo, se conserva la real y, tras la comprobación, se limpian los registros artificiales. |
| M-08 | APROBADA | Con una respuesta demo guardada, pulse `Borrar todas las respuestas locales`, confirme y recargue. | El resumen vuelve a cero, se eliminan los registros y el estado vacío persiste tras la recarga. |
| M-09 | NO EJECUTADA | En cada vista, use Tab y Shift+Tab. Active navegación, selectores y opciones con Enter o Espacio. | El foco es siempre visible, el enlace de salto funciona y el entrenamiento es realizable solo con teclado. |
| M-10a | APROBADA | Pruebe las URLs de M-01, M-02 y M-04 a 320 px, 768 px y 1280 px de ancho. | No hay desplazamiento horizontal; controles, títulos y opciones permanecen legibles y utilizables. |
| M-10b | NO EJECUTADA | En un navegador, con la URL `http://localhost:8000/?demo=1#entrenamiento`, aplique un zoom del 200 % y recorra controles y opciones. | No hay desplazamiento horizontal; controles, títulos y opciones permanecen legibles y utilizables. |
| M-11 | NO EJECUTADA | Abra `index.html` directamente mediante `file://`. | La aplicación muestra una explicación para usar `python -m http.server 8000`, sin un fallo silencioso. |
| M-12 | NO EJECUTADA | En el navegador, simule la indisponibilidad de un JSON mediante las herramientas de red y recargue. | Se muestra un mensaje claro con el JSON que no se pudo cargar; no se muestra contenido incompleto como si fuera válido. |

## Registro de ejecución

Actualice esta sección únicamente después de ejecutar casos en un navegador. Indique fecha, navegador, dimensiones y resultado observado. Los casos no realizados deben conservar el estado `NO EJECUTADA` y seguir las instrucciones de la tabla anterior.

- 2026-07-30 · Navegador integrado de Codex · M-01 APROBADA: Inicio cargado por HTTP con los contadores 4, 33, 0 y 0; no se observaron errores de consola.
- 2026-07-30 · Navegador integrado de Codex · M-02 APROBADA: `#temario` cargó los cuatro bloques; los cuatro se desplegaron y se comprobaron 33 temas visibles.
- 2026-07-30 · Navegador integrado de Codex · M-03 APROBADA: se seleccionaron bloque B1, tema B1-T01, origen oficial y cantidad 1; la interfaz bloqueó el inicio vacío con un mensaje explícito.
- 2026-07-30 · Navegador integrado de Codex · M-04 APROBADA: `?demo=1` mostró el aviso de contenido ficticio y permitió una sesión IA de tres preguntas en estado `draft`.
- 2026-07-30 · Navegador integrado de Codex · M-05 APROBADA: una respuesta demo errónea mostró la opción correcta, feedback específico y la fuente de demostración.
- 2026-07-30 · Navegador integrado de Codex · M-06 APROBADA: una respuesta demo correcta permaneció registrada en el resumen después de recargar la página.
- 2026-07-30 · Navegador integrado de Codex · M-07 NO EJECUTADA: se había comprobado previamente el borrado de datos demo, pero esta repetición requería insertar una respuesta real y otra demo válidas en `localStorage`. La interfaz de navegador disponible solo permite evaluación de lectura y no expone CDP ni herramientas de almacenamiento para escribir esos registros; por tanto, no se pudo verificar la conservación de la respuesta real ni limpiar los datos artificiales (no llegaron a crearse).
- 2026-07-30 · Navegador integrado de Codex · M-08 APROBADA: con una respuesta demo existente, se pulsó `Borrar todas las respuestas locales`, se aceptó el diálogo de confirmación y el resumen pasó a «Aún no hay respuestas guardadas.». Tras recargar `?demo=1#entrenamiento`, el mismo resumen vacío persistió.
- 2026-07-30 · Navegador integrado de Codex · M-09 NO EJECUTADA: se enviaron Tab y Shift+Tab mediante las interfaces de teclado disponibles, pero el foco permaneció en `BODY`. No fue posible realizar ni observar el flujo completo exclusivamente con teclado en este entorno.
- 2026-07-30 · Navegador integrado de Codex · M-10a APROBADA: se abrieron M-01, M-02 y M-04 a 320 px, 768 px y 1280 px de ancho (alto 800 px). En los nueve casos `scrollWidth` fue igual a `clientWidth`; a 320 px los controles se apilaron con ancho visible de 238 px y a 768/1280 px se mantuvieron visibles y utilizables. Revisión visual incluida en 320, 768 y 1280 px.
- 2026-07-30 · Navegador integrado de Codex · M-10b NO EJECUTADA: el navegador integrado no expone control de zoom. Se intentó aplicar cinco veces Ctrl++ desde su interfaz de teclado, pero `innerWidth`, `devicePixelRatio` y el ancho del documento no cambiaron; no se pudo garantizar un zoom real del 200 %.
- 2026-07-30 · Navegador integrado de Codex · M-11 NO EJECUTADA: la política de seguridad del navegador integrado bloqueó la navegación a `file:///C:/TAI-proyecto/index.html`. No se pudo comprobar el mensaje explicativo sin sortear esa política.
- 2026-07-30 · Navegador integrado de Codex · M-12 NO EJECUTADA: el navegador integrado no expone interceptación de red ni una conexión CDP para bloquear temporalmente `data/syllabus.json`. No se pudo provocar la indisponibilidad del JSON de forma controlada.
- 2026-07-30 · Navegador integrado de Codex · Consola: no se observaron mensajes de nivel `warning` ni `error` durante las comprobaciones HTTP realizadas.
