# Cobertura de preparación editorial GSI

Fecha:4 de noviembre de2026. **Preparación de fichas completa; plan editorial pendiente de aprobación y aplicación.**

Las1.762preguntas no oficiales tienen una ficha individual:959manuales y803IA. Solo20tienen aceptación expresa y están aplicadas,en el lote001. Las otras1.742versiones propuestas están pendientes de aprobación en88lotes,002–089. No queda ninguna pregunta sin propuesta. Las202oficiales conservan elhash de la auditoría y no se incluyen en esta revisión.

La comprobación mecánica valida los89JSON de lote,IDs y claves conservados,hashes de origen/contenido,ausencia de duplicados,cobertura exacta de la cola y correspondencia con las versiones publicadas. Cada propuesta pendiente tiene tres explicaciones de distractores. No se aplica ninguna ni se convierte esta cobertura en aprobación humana. [Informe final de preparación](GSI_PREPARACION_LOTE_089.md) · [Registro y métricas por banco/tema](../logs/gsi-editorial-089-preparation.json) · [Plan](GSI_MEJORA_TESTS.md).

## Prioridad:seis incidencias activas confirmadas

Estas versiones activas siguen sin corregirse fuera de la autorización del piloto. Sus propuestas mantienen evidencia y trazabilidad,y necesitan aceptación delcontenido exacto antes de aplicar la corrección o una retirada autorizada. Impiden elcierre editorial.

| Pregunta | Lote pendiente | Hash vigente del lote |
| --- | --- | --- |
| MAN-GSI-P18-026 | GSI-EDITORIAL-032 | `4fd57501ffc398617045ff4bbe62394cfa57af2f214ae566916d9f749c87bfb6` |
| AI-GSI-B3-T04-004 | GSI-EDITORIAL-054 | `6fe38eadb1b10b25e57a639122d14ac0d5743f49a31c093275297ae0ea28ccb5` |
| AI-GSI-B3-T05-002 | GSI-EDITORIAL-055 | `989299c7fdc7e026d7c0020a9920e4d5cc973a1cf2b47e298b65dd16ea80c99d` |
| MAN-GSI-P19-098 | GSI-EDITORIAL-085 | `39289ed0bf82f4e575973ecdec4af06c0c7a2a945efdbcafc23df6c1aa883150` |
| MAN-GSI-P19-080 | GSI-EDITORIAL-086 | `7619aeaf466bd53e475220f028ce69aa8f91d5ffeb675bd7a3341bf315ac5d83` |
| MAN-GSI-P19-157 | GSI-EDITORIAL-088 | `5b253178d587affe7908f84f447487b88e0977b309222b86827a60378e1e6668` |

## Señales agregadas de la simulación

Se comparan los bancos de la auditoría,a32323c,con una simulación de las1.742propuestas y las20versiones ya aprobadas. No es elcontenido activo de la aplicación ni una calibración de dificultad. Elregistro conserva también métricas actuales delbanco publicado y porbanco/tema. Estas señales no certifican precisión,distractores plausibles o respuesta única.

| Banco | Preguntas | Correcta única más larga:auditoría → propuesta | Acierto primera máxima(%):auditoría → propuesta | Feedback breve:auditoría → propuesta |
| --- | ---: | ---: | ---: | ---: |
| Manuales | 959 | 465 → 261 | 49.43 → 30.66 | 730 → 0 |
| IA | 803 | 365 → 171 | 47.07 → 26.15 | 705 → 0 |

Los registros históricos de validación tienen formatos distintos:49no usan elcampo validation.status. Se conservan y no se les atribuye resultado automático por la presencia o ausencia de ese campo. La validación del lote089 y la auditoría de cobertura tienen alcance explícito; las pruebasHTTP del producto se conservan en [revalidación del piloto](../logs/gsi-editorial-001-revalidation-2026-10-30.json).

## Lotes pendientes de revisión del propietario

Cada hash identifica elcontenido exacto de un lote de máximo20preguntas. Las fichas contienen antes/después y fuentes; los informes describen métricas,validaciones y límites. Una aprobación requiere identificar el lote y suhash vigente. La tabla no constituye una solicitud de aceptación masiva ni crea nuevas aceptaciones.

| Lote | Preguntas | Hash canónico vigente | Documentación |
| --- | ---: | --- | --- |
| GSI-EDITORIAL-002 | 20 | `b50edfbce2d3510a105aebb4304f1ef485e329686605d0e88c3e8201aedfcf1d` | [Ficha](GSI_REVISION_LOTE_002.md) · [Informe](GSI_PREPARACION_LOTE_002.md) |
| GSI-EDITORIAL-003 | 20 | `d8fc3bac73b45bf032b9a1e8ff100150a85693098124876f8731ef578d216991` | [Ficha](GSI_REVISION_LOTE_003.md) · [Informe](GSI_PREPARACION_LOTE_003.md) |
| GSI-EDITORIAL-004 | 20 | `2ae24b1ba96244feefd3de39ea500c7a7222563468b009e9b9dfea2936556b2b` | [Ficha](GSI_REVISION_LOTE_004.md) · [Informe](GSI_PREPARACION_LOTE_004.md) |
| GSI-EDITORIAL-005 | 20 | `5586497edf4f0c0f267c04fbdf70b80ffff8941d66690f1568d41e2f5fedc18c` | [Ficha](GSI_REVISION_LOTE_005.md) · [Informe](GSI_PREPARACION_LOTE_005.md) |
| GSI-EDITORIAL-006 | 20 | `9065eb3b901d847ac95da07b88cb5edbd9b25315b8fbeacb6ec3bc7aaeda800d` | [Ficha](GSI_REVISION_LOTE_006.md) · [Informe](GSI_PREPARACION_LOTE_006.md) |
| GSI-EDITORIAL-007 | 20 | `5d1b4794a830cb8d15a910659fce5352509222fa045d74dd46ecb0b5594c250d` | [Ficha](GSI_REVISION_LOTE_007.md) · [Informe](GSI_PREPARACION_LOTE_007.md) |
| GSI-EDITORIAL-008 | 20 | `4e72676e22334765a9a13acc75cfdf32b03ec687a8234f4cea89751f6dc56f70` | [Ficha](GSI_REVISION_LOTE_008.md) · [Informe](GSI_PREPARACION_LOTE_008.md) |
| GSI-EDITORIAL-009 | 20 | `b7b5acce18ce3c9899dd47cdf2673051a10b3c13c0f96efd4e6cc1e5c7349538` | [Ficha](GSI_REVISION_LOTE_009.md) · [Informe](GSI_PREPARACION_LOTE_009.md) |
| GSI-EDITORIAL-010 | 20 | `ede95c5e4e8ab0560280f2f2b2db1c3ed1b2125392162866b6343dbf83095c44` | [Ficha](GSI_REVISION_LOTE_010.md) · [Informe](GSI_PREPARACION_LOTE_010.md) |
| GSI-EDITORIAL-011 | 20 | `e4215ffdbd714ec6d89c1fa13fa10adf8b7ae2d7a15ffa843e63dd9c32511ed4` | [Ficha](GSI_REVISION_LOTE_011.md) · [Informe](GSI_PREPARACION_LOTE_011.md) |
| GSI-EDITORIAL-012 | 20 | `ef9b4b237cb1ca89378272458ed7dd78e62f81e77ffa6374d48a046c52a6aec5` | [Ficha](GSI_REVISION_LOTE_012.md) · [Informe](GSI_PREPARACION_LOTE_012.md) |
| GSI-EDITORIAL-013 | 20 | `8b5ca29cb40204af9211d3759c0423ee75c482f53115ea945939b48b67e2ac19` | [Ficha](GSI_REVISION_LOTE_013.md) · [Informe](GSI_PREPARACION_LOTE_013.md) |
| GSI-EDITORIAL-014 | 20 | `c010f4db6113c55761631b8fa0d5e042a17b4518560b511dd62be7792a997dde` | [Ficha](GSI_REVISION_LOTE_014.md) · [Informe](GSI_PREPARACION_LOTE_014.md) |
| GSI-EDITORIAL-015 | 20 | `60692e006bc8ecf107222580d39602958c770a2be414c68ce3e034568ee3c519` | [Ficha](GSI_REVISION_LOTE_015.md) · [Informe](GSI_PREPARACION_LOTE_015.md) |
| GSI-EDITORIAL-016 | 20 | `885e5a6ae923de47b6fd2267095cfe113cd9ca3fb039eb5021204439cd2218eb` | [Ficha](GSI_REVISION_LOTE_016.md) · [Informe](GSI_PREPARACION_LOTE_016.md) |
| GSI-EDITORIAL-017 | 20 | `5d7956599531f0bdc19d80d0b3df389fdc9248bdac9196da46956a442a38ddb5` | [Ficha](GSI_REVISION_LOTE_017.md) · [Informe](GSI_PREPARACION_LOTE_017.md) |
| GSI-EDITORIAL-018 | 20 | `e33f66f3ba1a78ad771036ca540e12d917a84a5b815108000d5a437c5ad630b2` | [Ficha](GSI_REVISION_LOTE_018.md) · [Informe](GSI_PREPARACION_LOTE_018.md) |
| GSI-EDITORIAL-019 | 20 | `65a45a0830d84d9f0fbcf689861c64bb6fb6dad7d25e02cc6fe91877eb607330` | [Ficha](GSI_REVISION_LOTE_019.md) · [Informe](GSI_PREPARACION_LOTE_019.md) |
| GSI-EDITORIAL-020 | 20 | `2570edc7c1c3959fa68a957341f86ed7ef55843e26f344589e3b211078b0d7e2` | [Ficha](GSI_REVISION_LOTE_020.md) · [Informe](GSI_PREPARACION_LOTE_020.md) |
| GSI-EDITORIAL-021 | 20 | `1087093d0b855d8f44d921e35805fe89f564136a786136cc7763603375e1d165` | [Ficha](GSI_REVISION_LOTE_021.md) · [Informe](GSI_PREPARACION_LOTE_021.md) |
| GSI-EDITORIAL-022 | 20 | `bd9206bdd1057b8968b6e21830e10ecb84a0ce258cee19693726ab8c86596475` | [Ficha](GSI_REVISION_LOTE_022.md) · [Informe](GSI_PREPARACION_LOTE_022.md) |
| GSI-EDITORIAL-023 | 20 | `8bc2874397a71c6b44d65fa8b73274667037ca6c1045c71984a8ea9e699c9e65` | [Ficha](GSI_REVISION_LOTE_023.md) · [Informe](GSI_PREPARACION_LOTE_023.md) |
| GSI-EDITORIAL-024 | 20 | `eb837fa4518e6621e59d5c8ef05aa54c6a76ce5eb5cf392ee72f962b294bab6c` | [Ficha](GSI_REVISION_LOTE_024.md) · [Informe](GSI_PREPARACION_LOTE_024.md) |
| GSI-EDITORIAL-025 | 20 | `2d77b1a430cab26d729682c426c7387e2fe340e4a6bd4630f7854663c92e9558` | [Ficha](GSI_REVISION_LOTE_025.md) · [Informe](GSI_PREPARACION_LOTE_025.md) |
| GSI-EDITORIAL-026 | 20 | `55b84c44a31b518aee347afa92bec8a5b621283c8c009b31f4c58fbe0f8e44ad` | [Ficha](GSI_REVISION_LOTE_026.md) · [Informe](GSI_PREPARACION_LOTE_026.md) |
| GSI-EDITORIAL-027 | 20 | `f883f0be1392f1a43cb42c1e569a3c22ddc647b9950e1111d118b4a84804c010` | [Ficha](GSI_REVISION_LOTE_027.md) · [Informe](GSI_PREPARACION_LOTE_027.md) |
| GSI-EDITORIAL-028 | 20 | `b40fbb8e3973092929dd34f3586ed293f6720277411a15a7c97d34482ff55771` | [Ficha](GSI_REVISION_LOTE_028.md) · [Informe](GSI_PREPARACION_LOTE_028.md) |
| GSI-EDITORIAL-029 | 20 | `fcfce4ccdc35fdb5ccc399ad97fc93becee9e102fabc35ea06115da278086f52` | [Ficha](GSI_REVISION_LOTE_029.md) · [Informe](GSI_PREPARACION_LOTE_029.md) |
| GSI-EDITORIAL-030 | 20 | `e858e9ae85a40d602f5380c9eaf4a727b7e84004238b5c9e22d0379c904db59d` | [Ficha](GSI_REVISION_LOTE_030.md) · [Informe](GSI_PREPARACION_LOTE_030.md) |
| GSI-EDITORIAL-031 | 20 | `c903aafa3b17125effe750222ebb6dedc88731eb4c395bec3d1157deacbac4b6` | [Ficha](GSI_REVISION_LOTE_031.md) · [Informe](GSI_PREPARACION_LOTE_031.md) |
| GSI-EDITORIAL-032 | 20 | `4fd57501ffc398617045ff4bbe62394cfa57af2f214ae566916d9f749c87bfb6` | [Ficha](GSI_REVISION_LOTE_032.md) · [Informe](GSI_PREPARACION_LOTE_032.md) |
| GSI-EDITORIAL-033 | 20 | `517d71cfd0787eb77602a1d4bca6f7f71e65caf2b4fee335254893600aec35ef` | [Ficha](GSI_REVISION_LOTE_033.md) · [Informe](GSI_PREPARACION_LOTE_033.md) |
| GSI-EDITORIAL-034 | 20 | `7fd400d2b9878cef2708b238ebbf5ccd62013de517c18f735413c0c59c5bc436` | [Ficha](GSI_REVISION_LOTE_034.md) · [Informe](GSI_PREPARACION_LOTE_034.md) |
| GSI-EDITORIAL-035 | 20 | `39f4239fcba0b46a15ad40453adc6f83921fa46131725728585cde3bd550d1f7` | [Ficha](GSI_REVISION_LOTE_035.md) · [Informe](GSI_PREPARACION_LOTE_035.md) |
| GSI-EDITORIAL-036 | 20 | `67fc0ae7556a754060985002b85468e684075c1064158a824c6a99c591a81e4f` | [Ficha](GSI_REVISION_LOTE_036.md) · [Informe](GSI_PREPARACION_LOTE_036.md) |
| GSI-EDITORIAL-037 | 20 | `b481040a05282da9d8aaa65133dcb63155d805520a9ea8e2079fb5464a2bf32f` | [Ficha](GSI_REVISION_LOTE_037.md) · [Informe](GSI_PREPARACION_LOTE_037.md) |
| GSI-EDITORIAL-038 | 20 | `ad0e0da31b7af9ab98944b493ef534ebce5b1efd2156638c0977e0988673fe1c` | [Ficha](GSI_REVISION_LOTE_038.md) · [Informe](GSI_PREPARACION_LOTE_038.md) |
| GSI-EDITORIAL-039 | 20 | `e3e2658b1652f9c547ccf107aa354becb6b7ce8868daa9ad9a4da54703510e57` | [Ficha](GSI_REVISION_LOTE_039.md) · [Informe](GSI_PREPARACION_LOTE_039.md) |
| GSI-EDITORIAL-040 | 20 | `f9787144992044b7f6b71b3609cab74a9dcc61a6ec5178d4cdb583398ed3d888` | [Ficha](GSI_REVISION_LOTE_040.md) · [Informe](GSI_PREPARACION_LOTE_040.md) |
| GSI-EDITORIAL-041 | 20 | `be61917a0c303835ecd2f1278502c27701a2093455b95039379ad7b56a935dca` | [Ficha](GSI_REVISION_LOTE_041.md) · [Informe](GSI_PREPARACION_LOTE_041.md) |
| GSI-EDITORIAL-042 | 20 | `b19f65af0687990a401ae38ee7a34834ae5f81957c48495ff772d6edeead0f22` | [Ficha](GSI_REVISION_LOTE_042.md) · [Informe](GSI_PREPARACION_LOTE_042.md) |
| GSI-EDITORIAL-043 | 20 | `cdc8cde5ca4190da427c632fecbabfe503cddcac9a4f39f94b5d6072eb886397` | [Ficha](GSI_REVISION_LOTE_043.md) · [Informe](GSI_PREPARACION_LOTE_043.md) |
| GSI-EDITORIAL-044 | 20 | `5419b630791796a6de89ab523497a1d8ebca6c107b6d42bdcbac302204bdacf1` | [Ficha](GSI_REVISION_LOTE_044.md) · [Informe](GSI_PREPARACION_LOTE_044.md) |
| GSI-EDITORIAL-045 | 20 | `e9792f433da825dec04c559d042d853686b3c5f01658cd4f33960cdc671d8fa0` | [Ficha](GSI_REVISION_LOTE_045.md) · [Informe](GSI_PREPARACION_LOTE_045.md) |
| GSI-EDITORIAL-046 | 20 | `0c9760e92ea2e6c3670750bf8400e6332f45921a653082f157d9765a4d37654b` | [Ficha](GSI_REVISION_LOTE_046.md) · [Informe](GSI_PREPARACION_LOTE_046.md) |
| GSI-EDITORIAL-047 | 20 | `097ddc6749510809f4c9f0feafcb9616dd3c0409b54ae9efb4663adc2cf8e497` | [Ficha](GSI_REVISION_LOTE_047.md) · [Informe](GSI_PREPARACION_LOTE_047.md) |
| GSI-EDITORIAL-048 | 20 | `d7f4976c193e320cd0547564be3dcbf2827d3e025402d0eab9b4b580fafedaa5` | [Ficha](GSI_REVISION_LOTE_048.md) · [Informe](GSI_PREPARACION_LOTE_048.md) |
| GSI-EDITORIAL-049 | 20 | `451bf5bb1f2984accc3bc78f81fed94fdd6342154edf9f5976f07d9a678e3fce` | [Ficha](GSI_REVISION_LOTE_049.md) · [Informe](GSI_PREPARACION_LOTE_049.md) |
| GSI-EDITORIAL-050 | 20 | `d1f1868e0ddbe7223bd05b7fb0386a28eeb004b6c98375675b67600c2e75a299` | [Ficha](GSI_REVISION_LOTE_050.md) · [Informe](GSI_PREPARACION_LOTE_050.md) |
| GSI-EDITORIAL-051 | 20 | `2704c84eb692c47958caa509fc1adbfc02e4cd8b42e498fa815033a47256429b` | [Ficha](GSI_REVISION_LOTE_051.md) · [Informe](GSI_PREPARACION_LOTE_051.md) |
| GSI-EDITORIAL-052 | 20 | `c54420a106b7d06f98e198e72bf7863a07454c83de2e43a4a959e479d64edf4f` | [Ficha](GSI_REVISION_LOTE_052.md) · [Informe](GSI_PREPARACION_LOTE_052.md) |
| GSI-EDITORIAL-053 | 20 | `e27b701abedf818d034c3c1681c10065256ac8c0672383f7c168f7b52e035700` | [Ficha](GSI_REVISION_LOTE_053.md) · [Informe](GSI_PREPARACION_LOTE_053.md) |
| GSI-EDITORIAL-054 | 20 | `6fe38eadb1b10b25e57a639122d14ac0d5743f49a31c093275297ae0ea28ccb5` | [Ficha](GSI_REVISION_LOTE_054.md) · [Informe](GSI_PREPARACION_LOTE_054.md) |
| GSI-EDITORIAL-055 | 20 | `989299c7fdc7e026d7c0020a9920e4d5cc973a1cf2b47e298b65dd16ea80c99d` | [Ficha](GSI_REVISION_LOTE_055.md) · [Informe](GSI_PREPARACION_LOTE_055.md) |
| GSI-EDITORIAL-056 | 20 | `ccc87faeae293c0979641482821402b62020f9667e0a5802aa6e7b59f1a95783` | [Ficha](GSI_REVISION_LOTE_056.md) · [Informe](GSI_PREPARACION_LOTE_056.md) |
| GSI-EDITORIAL-057 | 20 | `962a9707d5b8551525a5b46ac1860874413025f64ed40a72d70d19a2e1605a3e` | [Ficha](GSI_REVISION_LOTE_057.md) · [Informe](GSI_PREPARACION_LOTE_057.md) |
| GSI-EDITORIAL-058 | 20 | `28c8693ae81360a5f0b640b56220f4ac03da55c560b98a458101593e9488f0dc` | [Ficha](GSI_REVISION_LOTE_058.md) · [Informe](GSI_PREPARACION_LOTE_058.md) |
| GSI-EDITORIAL-059 | 20 | `ef78b3b7d18079f667694031ac94ef93dbede1dfc8814714a86c2d8d9943feb6` | [Ficha](GSI_REVISION_LOTE_059.md) · [Informe](GSI_PREPARACION_LOTE_059.md) |
| GSI-EDITORIAL-060 | 20 | `33a4ae1bcce047b262ccc5f88e1056d62128694340a02a6a693d2dee372d33b6` | [Ficha](GSI_REVISION_LOTE_060.md) · [Informe](GSI_PREPARACION_LOTE_060.md) |
| GSI-EDITORIAL-061 | 20 | `0724983bc4ed58e438b5a7ddb532b76d29f6af8b9def7837a64a4fc98cd7bc4d` | [Ficha](GSI_REVISION_LOTE_061.md) · [Informe](GSI_PREPARACION_LOTE_061.md) |
| GSI-EDITORIAL-062 | 20 | `8ed2b1abdebb28e05424831b35356124be350c875313d0f230447e1051fdd2a1` | [Ficha](GSI_REVISION_LOTE_062.md) · [Informe](GSI_PREPARACION_LOTE_062.md) |
| GSI-EDITORIAL-063 | 20 | `c08d46167b08746c1ec192a888b2e3c3caf2c9afb44cc270b2425843c7a93a6e` | [Ficha](GSI_REVISION_LOTE_063.md) · [Informe](GSI_PREPARACION_LOTE_063.md) |
| GSI-EDITORIAL-064 | 20 | `b6cab5f8d7310a2fd10ded71f2e81c860ff66a6018d3dcb5d0bfd9437f2031bc` | [Ficha](GSI_REVISION_LOTE_064.md) · [Informe](GSI_PREPARACION_LOTE_064.md) |
| GSI-EDITORIAL-065 | 20 | `833b9301b8b808de8cb3e16cdc3f18b68c4bd2eec9730a1be29191f0a5896fba` | [Ficha](GSI_REVISION_LOTE_065.md) · [Informe](GSI_PREPARACION_LOTE_065.md) |
| GSI-EDITORIAL-066 | 20 | `540b92903e0202c73f22e093f70de2d6b32db160c1f90d0097b225589cd4644f` | [Ficha](GSI_REVISION_LOTE_066.md) · [Informe](GSI_PREPARACION_LOTE_066.md) |
| GSI-EDITORIAL-067 | 20 | `a26747baf487db0ba608ee104e8b6bdcee2779d2ac64f7edc4bafc345713b10a` | [Ficha](GSI_REVISION_LOTE_067.md) · [Informe](GSI_PREPARACION_LOTE_067.md) |
| GSI-EDITORIAL-068 | 20 | `3047b46824bc6a571834558d4bef851f2dd808e5ebabc3e5285e1ca4c1cc588e` | [Ficha](GSI_REVISION_LOTE_068.md) · [Informe](GSI_PREPARACION_LOTE_068.md) |
| GSI-EDITORIAL-069 | 20 | `be68822c78fc5aecae532de97ed5da81eefcc2118fd5a6ec573fe30c063802d8` | [Ficha](GSI_REVISION_LOTE_069.md) · [Informe](GSI_PREPARACION_LOTE_069.md) |
| GSI-EDITORIAL-070 | 20 | `491e816a8c49c0e0e7a961769a76990e21214a46973737ecac2bbe462733e112` | [Ficha](GSI_REVISION_LOTE_070.md) · [Informe](GSI_PREPARACION_LOTE_070.md) |
| GSI-EDITORIAL-071 | 20 | `fe135f2bc1945ece12640cb37ec3ef558fe98151f19602d2614a0adf67639993` | [Ficha](GSI_REVISION_LOTE_071.md) · [Informe](GSI_PREPARACION_LOTE_071.md) |
| GSI-EDITORIAL-072 | 20 | `d2cbe43a295fd0bcc61566450426b96539e47df2d8e0cd2ea300f10b48458e10` | [Ficha](GSI_REVISION_LOTE_072.md) · [Informe](GSI_PREPARACION_LOTE_072.md) |
| GSI-EDITORIAL-073 | 20 | `7ce12a6e069cc4cbf2738b5ef4892af1d66797279d16a7f5213c1ce8dd305fbe` | [Ficha](GSI_REVISION_LOTE_073.md) · [Informe](GSI_PREPARACION_LOTE_073.md) |
| GSI-EDITORIAL-074 | 20 | `7e695db6b220072ba44c244927af82e8950140d4232a12dfaf0b982ee75d1e57` | [Ficha](GSI_REVISION_LOTE_074.md) · [Informe](GSI_PREPARACION_LOTE_074.md) |
| GSI-EDITORIAL-075 | 20 | `6b2df8f4b25ebb1088a84fe8266dde8c1c9d85cde1195c6088b06cf6c0c76a13` | [Ficha](GSI_REVISION_LOTE_075.md) · [Informe](GSI_PREPARACION_LOTE_075.md) |
| GSI-EDITORIAL-076 | 20 | `75c5d9524abe6c60533b816fbb0d77de025eed695b89c0aa58f1b8ca00d5e712` | [Ficha](GSI_REVISION_LOTE_076.md) · [Informe](GSI_PREPARACION_LOTE_076.md) |
| GSI-EDITORIAL-077 | 20 | `71ded9a0507381df08d413d2e5ca9c590cbfd7ad2e73a223a76749e19ae85e6f` | [Ficha](GSI_REVISION_LOTE_077.md) · [Informe](GSI_PREPARACION_LOTE_077.md) |
| GSI-EDITORIAL-078 | 20 | `bb25cb933fc6f03adaae5ef7c130949a2e4264cc876a2628d0e8bd2d9b51125b` | [Ficha](GSI_REVISION_LOTE_078.md) · [Informe](GSI_PREPARACION_LOTE_078.md) |
| GSI-EDITORIAL-079 | 20 | `a9e2f298425090788b837bee9393d2965dc638c3d6186131dfc10670137cc0ae` | [Ficha](GSI_REVISION_LOTE_079.md) · [Informe](GSI_PREPARACION_LOTE_079.md) |
| GSI-EDITORIAL-080 | 20 | `5972a8be63c534c7bba2711bc737613c339ebfb0d0e796c595f0fc8c451e1f74` | [Ficha](GSI_REVISION_LOTE_080.md) · [Informe](GSI_PREPARACION_LOTE_080.md) |
| GSI-EDITORIAL-081 | 20 | `f32c0921733db58f00b2cf06e204785347426ba4c0bb7a73baf8779801f3c319` | [Ficha](GSI_REVISION_LOTE_081.md) · [Informe](GSI_PREPARACION_LOTE_081.md) |
| GSI-EDITORIAL-082 | 20 | `84b8e24994700d7b305c2dc4ff8f4c2a3d4d7df8b53ce2cc9d0ab6b59db1f1cf` | [Ficha](GSI_REVISION_LOTE_082.md) · [Informe](GSI_PREPARACION_LOTE_082.md) |
| GSI-EDITORIAL-083 | 20 | `5955c0a12125ef13a19b63d2998fa382151bf12d8c0d1f64a17692bbfbaf6cb6` | [Ficha](GSI_REVISION_LOTE_083.md) · [Informe](GSI_PREPARACION_LOTE_083.md) |
| GSI-EDITORIAL-084 | 20 | `05c6f0c1caeaebef2f022a55f810911cc5c7d7170fcbd4fedf526777dc7bf5e6` | [Ficha](GSI_REVISION_LOTE_084.md) · [Informe](GSI_PREPARACION_LOTE_084.md) |
| GSI-EDITORIAL-085 | 20 | `39289ed0bf82f4e575973ecdec4af06c0c7a2a945efdbcafc23df6c1aa883150` | [Ficha](GSI_REVISION_LOTE_085.md) · [Informe](GSI_PREPARACION_LOTE_085.md) |
| GSI-EDITORIAL-086 | 20 | `7619aeaf466bd53e475220f028ce69aa8f91d5ffeb675bd7a3341bf315ac5d83` | [Ficha](GSI_REVISION_LOTE_086.md) · [Informe](GSI_PREPARACION_LOTE_086.md) |
| GSI-EDITORIAL-087 | 20 | `512e30bd72ded1d429cf38c8364d39ffec44440b822f88f797c472e056c2adcc` | [Ficha](GSI_REVISION_LOTE_087.md) · [Informe](GSI_PREPARACION_LOTE_087.md) |
| GSI-EDITORIAL-088 | 20 | `5b253178d587affe7908f84f447487b88e0977b309222b86827a60378e1e6668` | [Ficha](GSI_REVISION_LOTE_088.md) · [Informe](GSI_PREPARACION_LOTE_088.md) |
| GSI-EDITORIAL-089 | 2 | `3de7ab3fbcf75d00066b8281ef26ae33a9d557bd84ac0901ae5b363df6ec932c` | [Ficha](GSI_REVISION_LOTE_089.md) · [Informe](GSI_PREPARACION_LOTE_089.md) |

## Siguiente paso

Revisar y aprobar expresamente lotes concretos,priorizando los seis con incidencias activas. Tras cada aceptación,comprobar vigencia de hashes y aplicar solo esecontenido; regenerar derivados y ejecutar validaciones correspondientes antes de commit independiente y de cualquier publicación o fusión. Los demás lotes mantienen pending_review.

La dificultad continúa siendo orientativa y la calibración estadística no se ha realizado. No se declara terminado elplan: faltan1.742decisiones del propietario,resolver las seis incidencias activas y completar elcierre tras las aplicaciones autorizadas. Sin conversiones,OCR,dependencias o documentos originales modificados en estehito.
