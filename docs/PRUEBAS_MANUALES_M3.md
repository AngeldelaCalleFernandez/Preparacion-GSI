# Pruebas manuales M3

Estados permitidos: `NO EJECUTADA`, `APROBADA`, `FALLIDA`. Las pruebas siguientes requieren servir el repositorio por HTTP y usar un perfil de navegador controlado.

| Prueba | Pasos observables | Estado |
| --- | --- | --- |
| Arranque limpio | Abrir la aplicación sin claves previas y comprobar que carga inicio. | NO EJECUTADA |
| Primera respuesta crea v2 | Responder una pregunta y comprobar una clave física v2 de training. | NO EJECUTADA |
| No se crea v1 nueva | Tras responder, comprobar que no aparece una clave lógica v1 nueva. | NO EJECUTADA |
| Entrenamiento tras recarga | Recargar y confirmar que el progreso se conserva. | NO EJECUTADA |
| Clear training no resucita | Borrar training, recargar y confirmar que no vuelve el historial v1. | NO EJECUTADA |
| Examen real recuperable | Iniciar examen real, recargar y recuperar la sesión. | NO EJECUTADA |
| Clear examen no resucita | Borrar examen real, recargar y confirmar que no reaparece. | NO EJECUTADA |
| Demo aislado | Abrir `?demo=1` y comprobar que no mezcla examen/refuerzo/analítica real. | NO EJECUTADA |
| Refuerzo persiste | Generar actividad de refuerzo, recargar y comprobarla. | NO EJECUTADA |
| Clear refuerzo no resucita | Borrar refuerzo, recargar y comprobar ausencia persistente. | NO EJECUTADA |
| Estadísticas persisten | Registrar actividad, recargar y comprobar las estadísticas. | NO EJECUTADA |
| Clear estadísticas no resucita | Borrar estadísticas, recargar y comprobar ausencia persistente. | NO EJECUTADA |
| Migración v1 a v2 controlada | En un perfil de prueba con v1 válida, abrir y comprobar la copia v2. | NO EJECUTADA |
| v1 intacta | Tras la migración controlada, comparar el texto de las siete v1. | NO EJECUTADA |
| Segunda migración idempotente | Recargar el perfil migrado y comprobar que no se reescribe v2. | NO EJECUTADA |
| Inicio, temario y rutas | Visitar inicio, temario, ruta legacy y ruta canónica. | NO EJECUTADA |
| Entrenamiento, examen, refuerzo y estadísticas | Recorrer las cuatro vistas y sus acciones básicas. | NO EJECUTADA |
| Atrás y adelante | Navegar con los controles del navegador entre vistas. | NO EJECUTADA |
| Recarga | Recargar en cada vista relevante. | NO EJECUTADA |
| Consola sin errores | Repetir el recorrido y comprobar consola limpia. | NO EJECUTADA |
| Runner M3 | Abierto por HTTP con `FakeStorage`: 61 aprobadas y 0 fallidas. | APROBADA |
