# Plan de aplicación de la revisión editorial manual

Fecha de simulación: 25 de octubre de 2026.

Estado de ejecución: **completado el 26 de octubre de 2026**. Los 471 registros de este plan se aplicaron con aprobación humana expresa y todos los hashes acumulados coincidieron con sus puntos de control.

## Alcance

Este documento definió los puntos de control para aplicar de forma gradual las 471 propuestas que estaban pendientes en `GSI_REVISION_MANUAL_LOTE_02.md` a `GSI_REVISION_MANUAL_LOTE_25.md`. El plan no concedía aprobación ni sustituía la revisión humana de los textos concretos; su ejecución posterior quedó condicionada a las aprobaciones expresas recibidas.

El banco de partida es `data/questions-manual.json`, SHA-256 `b3d6eff82457733f5e3a8da8ef4a264c0f2dbca9382f8e975c8e6de246051b4c`. La serialización en memoria sin cambios reprodujo exactamente ese hash; por ello, los hashes prospectivos de la tabla son comparables con el archivo que resultaría de aplicar cada lote en el orden indicado.

## Invariantes comprobadas

- 471 IDs inicialmente pendientes y 471 IDs únicos.
- 1.413 sustituciones de distractores: tres por pregunta.
- Cero cambios en enunciados, claves correctas, feedback, procedencia, validación o estado activo.
- Cero alternativas duplicadas después de cada punto de control.
- Cada lote elimina de la cola `correct-length-dominance` exactamente las preguntas que incorpora.
- El plan no toca `data/questions-official.json` ni `data/questions-ai.json`.

## Puntos de control acumulados

`Hallazgos` cuenta preguntas manuales con al menos una señal heurística después de aplicar acumulativamente hasta el lote indicado. `Absolutas` incluye preguntas de todo el banco manual, también las que no pertenecen a esta cola.

| Lote aplicado | Preguntas del lote | Distractores | Acumuladas | Cola de longitud restante | Absolutas | Hallazgos | SHA-256 prospectivo del banco manual |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 02, decisiones 6–20 | 15 | 45 | 15 | 456 | 51 | 474 | `2e2051a2412f8c758175e16b3f44bd2092298348339a52806c395915d0398f9b` |
| 03 | 20 | 60 | 35 | 436 | 48 | 454 | `94bee42a0803f38c7e2689d1b3b56ec4f93419d50e0349ad083ec785ba874f0a` |
| 04 | 20 | 60 | 55 | 416 | 45 | 434 | `1c131bde875b49484916c036c0dc56c00dfec23b329cdcb193af561d91309067` |
| 05 | 20 | 60 | 75 | 396 | 45 | 414 | `fcfad42e36cf22b772038c37f59a670015977cea36ec8bbd9ec7c47531af3045` |
| 06 | 20 | 60 | 95 | 376 | 41 | 394 | `1b5fb92c447986cb1aac117ca224ac6e6f75f09ce5b4b37c04a4374fbc432211` |
| 07 | 20 | 60 | 115 | 356 | 38 | 374 | `3d79b06f6b70574aea1e2df87db393007ea89d19bff14300130afd9586a3a1e6` |
| 08 | 20 | 60 | 135 | 336 | 38 | 354 | `34700fe477c4229291abe2e2f57276da82b12564ecfad2872f0d6866ac373e5c` |
| 09 | 20 | 60 | 155 | 316 | 36 | 334 | `47a61bb77f13f5a33954387f873f756187da333b1b10ee3a32b730f313aa5e34` |
| 10 | 20 | 60 | 175 | 296 | 36 | 314 | `70f3ecd406aae6f196748b80ccd46565862b047c8a85c061afc47f00929493b5` |
| 11 | 20 | 60 | 195 | 276 | 36 | 294 | `13cc8fbe5f0a9b43944c2fdd82a7dc504acb7d37511963768f610287bb0ee881` |
| 12 | 20 | 60 | 215 | 256 | 34 | 274 | `77330a01c19e4592de40ddf5ad7dce20abcf311ba8bd89c5ec7e61b2a3a41152` |
| 13 | 20 | 60 | 235 | 236 | 33 | 254 | `6d313879fdb67594159712dadf8654c6e36e396917dd0961167179d3a8552634` |
| 14 | 20 | 60 | 255 | 216 | 33 | 234 | `327fa09b951cc55ff32834b48247ffc7e09aa9c8844f572ccd61a75f2b520dfd` |
| 15 | 20 | 60 | 275 | 196 | 31 | 214 | `bafbc76ae697cce9734d4338e419e97f2270ab96ea24d5b33182d81ce3eff53b` |
| 16 | 20 | 60 | 295 | 176 | 29 | 194 | `78a53c33ae801092b435656f5ec0f1a04615f29e88cdeb16fd6bef3c7f69ad76` |
| 17 | 20 | 60 | 315 | 156 | 26 | 174 | `883f2d8d9a626748786b60073faad2ef0bb25d7c4a34fda7d6dd86e219704371` |
| 18 | 20 | 60 | 335 | 136 | 24 | 154 | `52faa5abec42a146f1e8efa334dd1640ea1d2ddf335b97abf996afcc4e45c187` |
| 19 | 20 | 60 | 355 | 116 | 22 | 134 | `62a2da0f7288706469065347b2239a1a8b17cb080434a49d690bd6a29213cdcf` |
| 20 | 20 | 60 | 375 | 96 | 21 | 114 | `cd92a993cf225468ccd353b72b2d1ef3ca6c3e0d3b1f8d5b1ce3e649dd203069` |
| 21 | 20 | 60 | 395 | 76 | 21 | 94 | `3a9997a1b24062366883faf934ba2857ff8376691636ed3cbf86d0b6d812c363` |
| 22 | 20 | 60 | 415 | 56 | 21 | 74 | `f0daa1da9b19c20442932dc7575f2814938113cb51c9c07141a2a19341cdc0f9` |
| 23 | 20 | 60 | 435 | 36 | 19 | 54 | `a04fda98ffc3c656bd7db57e359112531c191d2dcb48e4c1f4d7b64a40a4d2ad` |
| 24 | 20 | 60 | 455 | 16 | 19 | 34 | `4807606f22837fe8babb329f356ee571c4cb82f0487961ef15c4cc237b8c47eb` |
| 25 | 16 | 48 | 471 | 0 | 17 | 18 | `08261968fde52c7180db82a973eee507cf83251f1f99f7cb188e6047ac286491` |

## Procedimiento por lote

1. Recibir aprobación humana expresa del lote o bloque exacto.
2. Confirmar que el hash de partida coincide con el punto de control anterior.
3. Sustituir únicamente los tres distractores enumerados en el informe aprobado.
4. Regenerar el informe editorial y los derivados que dependan del banco.
5. Confirmar el hash resultante, los IDs, las claves y la reducción esperada de la cola.
6. Ejecutar `python scripts/run_gsi_suite.py` y exigir código 0.
7. Crear y publicar un commit aislado; no mezclar lotes no aprobados.

## Resultado final

Después de aplicar los 471 registros en este orden, la cola `correct-length-dominance` quedó vacía y no aparecieron alternativas duplicadas. En ese punto permanecían 18 preguntas manuales con otros hallazgos: 17 por `absolute-wording-cluster` y una por `meta-source-wording`, todas fuera del bloque preparado aquí. Esas señales se trataron posteriormente, con autorización separada, en [GSI_MEJORA_EDITORIAL_RESIDUAL.md](GSI_MEJORA_EDITORIAL_RESIDUAL.md).

Los hashes de esta tabla se calcularon como previsiones reproducibles y se verificaron después de cada aplicación contra el archivo real.
