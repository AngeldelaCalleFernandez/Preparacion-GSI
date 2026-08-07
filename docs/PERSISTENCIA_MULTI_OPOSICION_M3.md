# Persistencia multioposición M3

## 1. Objetivo M3

M3 introduce persistencia v2 aislada por oposición y syllabus, con migración segura por copia desde los contratos v1. No incorpora selector de oposición ni funcionalidad de M4.

## 2. Baseline M2

La base es el commit `8df4ff47a6cb7c7083ad71bc7e506e247506ec7c`, etiquetado `m2-cargador-rutas-compatibles`.

## 3. Siete contratos v1

Se conservan exactamente `tai.phase3.training.v1`, los dos contratos de examen activo, los dos de refuerzo y los dos de analítica. Son el origen histórico de la migración.

## 4. Conservación de v1

M3 no borra, reescribe, normaliza in situ ni mueve las claves v1. La copia conserva sus bytes y el payload original válido.

## 5. Sin dual-write

Después de configurar M3, las operaciones nuevas escriben solo en v2. V1 queda disponible únicamente para que una versión M2 anterior pueda leer el historial previo.

## 6. Namespace v2

Las claves físicas siguen `oposiciones.<OPPOSITION_ID>.<SYLLABUS_ID>.<TIPO>.v2`. Por ejemplo, el contexto TAI actual produce `oposiciones.OPP-TAI.SYL-TAI-2025.training.v2`.

## 7. Contexto de ejecución

El namespace se construye exclusivamente con `runtimeContext.oppositionId` y `runtimeContext.syllabusId`; no usa `short_code` ni contiene IDs concretos en el JavaScript operativo.

## 8. Envelope

Cada valor v2 es un JSON con `persistenceVersion: 2`, `oppositionId`, `syllabusId` y `payload`. Un `payload: null` es un tombstone válido.

## 9. Versión de persistencia y versión de dominio

`persistenceVersion` describe el sobre físico v2. Las propiedades `version` internas de entrenamiento, examen, refuerzo y analítica siguen describiendo sus modelos de dominio v1.

## 10. Adaptador

`assets/js/persistence-v2.js` traduce los siete nombres lógicos v1 a la clave física v2, valida el sobre al leer y envuelve JSON al escribir. Su importación no lee ni escribe almacenamiento.

## 11. Configuración

La aplicación configura el adaptador tras cargar `data.runtimeContext`, usando el almacenamiento del navegador como `rawStorage`. Las pruebas inyectan un almacenamiento en memoria.

## 12. Migración por copia

`assets/js/persistence-migration-v2.js` lee v1 físicamente y, cuando es válida, crea una copia envuelta en v2. Nunca elimina ni modifica v1.

## 13. Planificación

Antes de escribir, la migración examina los siete contratos, valida v2 existentes y todas las candidatas v1, y construye el plan completo.

## 14. Validación v1

Entrenamiento valida estructura y fechas; examen reutiliza `validateActiveExamState`; refuerzo reutiliza `validateReinforcementStore`; y analítica usa `normaliseAnalyticsStore` para decidir la validez. La copia no normaliza el payload.

## 15. Validación v2

La lectura de un sobre v2 exige JSON válido, versión 2, contexto coincidente y propiedad `payload`; si el payload no es tombstone, también debe seguir validando para su contrato de dominio. Un sobre corrupto o de otro contexto es un error explícito.

## 16. Idempotencia

Una v2 válida o un tombstone cuenta como existente: v1 no se vuelve a importar. Una segunda ejecución no crea nuevas claves ni introduce timestamps variables.

## 17. Tombstones

Los borrados lógicos escriben un sobre v2 con `payload: null`; por eso el borrado no hace resucitar los datos v1 en una recarga posterior.

## 18. Borrado seguro

El adaptador no elimina físicamente en un borrado de dominio y no usa `clear()`. Solo el rollback interno usa eliminación física sobre las claves creadas en ese intento.

## 19. Rollback

Si falla una escritura durante la migración, se eliminan en orden inverso únicamente las v2 nuevas que ya se habían creado. No se tocan v2 previas ni v1; un fallo del rollback se informa.

## 20. v1 corrupta

Una candidata v1 corrupta invalida la planificación completa: no se escribe ninguna v2 nueva y v1 permanece intacta.

## 21. Orden de arranque

El arranque inicializa el router, carga datos y contenido, configura v2, ejecuta la migración central, después las migraciones históricas de refuerzo y analítica, y solo entonces inicia los módulos persistentes.

## 22. `reinforcement-migration`

La migración histórica de entrenamiento a refuerzo conserva su lógica de negocio y opera por el adaptador ya configurado, por lo que escribe en v2.

## 23. `analytics-migration`

La reconstrucción analítica conserva su lógica e igualmente recibe por defecto el adaptador configurado. Sus resultados se guardan solo en v2.

## 24. Real y demo

Examen, refuerzo y analítica conservan claves separadas para real y demo. Entrenamiento mantiene su única colección histórica con `isDemo` en cada respuesta.

## 25. IDs legacy

M3 conserva `B1`, `B1-T01` y los demás IDs existentes dentro de los payloads. No introduce IDs canónicos ni repite el contexto de oposición/syllabus en cada registro.

## 26. GSI no operativo

GSI sigue planificado y fuera del runtime. M3 solo prueba el aislamiento con contextos sintéticos en memoria; no activa datos, contenido ni selector GSI.

## 27. Rollback a M2

Al volver al commit M2, la versión anterior puede seguir leyendo las v1 históricas que M3 conserva.

## 28. Limitación del rollback

Los datos creados tras actualizar a M3 existen solo en v2 y no se ven desde M2. Es una consecuencia deliberada de no hacer dual-write.

## 29. Pruebas automáticas

El runner `tests/m3-runner.html` usa exclusivamente `FakeStorage` in-memory y cubre builder, sobres, migración, idempotencia, tombstones, rollback, aislamiento y las migraciones históricas. El validador Python comprueba el alcance y las protecciones.

## 30. Pruebas manuales

El guion y los estados de las comprobaciones manuales están en `docs/PRUEBAS_MANUALES_M3.md`.

## 31. Frontera M4

M3 no migra persistencia adicional, no modifica los datos, no activa GSI y no implementa M4.
