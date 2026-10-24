# Revisión humana de preguntas manuales · lote 23

Fecha de preparación: 24 de octubre de 2026.

## Alcance y estado

Este documento prepara las 20 candidatas siguientes a las incluidas en el lote 22 dentro de la cola editorial `correct-length-dominance`. Las decisiones permanecen pendientes y no se ha modificado ninguna pregunta de este lote.

Los 20 registros se contrastaron con el solucionario Markdown conservado de su práctica. En todos los casos, la letra correcta del banco coincide con la letra publicada en el solucionario.

Estado del lote: **20 decisiones pendientes de aprobación humana; cero cambios en los bancos**.

## Elementos preparados

| Orden | ID | Tema | Relación inicial | Evidencia de clave | Contraste propuesto |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `MAN-GSI-P19-039` | B4-T14 | 2,13× | P19, pregunta 39, D | QoS frente a capacidad, dimensionamiento y garantías externas. |
| 2 | `MAN-GSI-P14-084` | B1-T05 | 2,12× | P14, pregunta 84, B | Accesibilidad universal frente a canal único, reacción tardía y ausencia de ajustes. |
| 3 | `MAN-GSI-P17-137` | B2-T02 | 2,12× | P17, pregunta 137, C | Paquete frente a repositorio, código fuente y kernel. |
| 4 | `MAN-GSI-P16-147` | B2-T14 | 2,12× | P16, pregunta 147, D | Reutilización de código frente a visibilidad, compilación y longitud. |
| 5 | `MAN-GSI-P17-131` | B2-T02 | 2,12× | P17, pregunta 131, A | systemd frente a kernel, sistema de archivos y compilador. |
| 6 | `MAN-GSI-P15-056` | B3-T11 | 2,11× | P15, pregunta 56, A | Compilación frente a publicación y falsas tareas asociadas. |
| 7 | `MAN-GSI-P17-058` | B2-T01 | 2,11× | P17, pregunta 58, A | Failover operativo frente a documentación aislada, copia única y falta de monitorización. |
| 8 | `MAN-GSI-P17-112` | B2-T02 | 2,11× | P17, pregunta 112, D | Driver frente a firmware, SaaS y planificación. |
| 9 | `MAN-GSI-P16-100` | B2-T14 | 2,10× | P16, pregunta 100, C | Protección jurídica frente a registro constitutivo, compra total y código desprotegido. |
| 10 | `MAN-GSI-P17-159` | B2-T02 | 2,09× | P17, pregunta 159, C | Selección tecnológica basada en requisitos frente a novedad, uniformidad y CPU. |
| 11 | `MAN-GSI-P17-073` | B2-T01 | 2,09× | P17, pregunta 73, B | Región frente a zona de disponibilidad y aislamiento de fallos. |
| 12 | `MAN-GSI-P16-085` | B2-T14 | 2,09× | P16, pregunta 85, B | Ideas de interfaz frente a protección automática, licencia libre y DRM. |
| 13 | `MAN-GSI-P15-026` | B3-T11 | 2,08× | P15, pregunta 26, D | CLR, CTS y CLS frente a equivalencia o funciones intercambiadas. |
| 14 | `MAN-GSI-P15-068` | B3-T11 | 2,08× | P15, pregunta 68, B | Gestión de secretos frente a logs, repositorio y Base64. |
| 15 | `MAN-GSI-P18-158` | B2-T16 | 2,08× | P18, pregunta 158, B | Continuidad frente a versionado aislado, restauración sin prueba y persona única. |
| 16 | `MAN-GSI-P19-096` | B4-T15 | 2,08× | P19, pregunta 96, A | Dispositivo no conforme frente a ignorarlo, silenciar logs y variar bitrate. |
| 17 | `MAN-GSI-P15-089` | B3-T11 | 2,07× | P15, pregunta 89, D | N+1 frente a índices, paralelismo y transacción única. |
| 18 | `MAN-GSI-P17-016` | B2-T01 | 2,07× | P17, pregunta 16, B | Arquitecturas 32/64 bits frente a cloud, incompatibilidad total y ausencia de caché. |
| 19 | `MAN-GSI-P16-039` | B2-T14 | 2,07× | P16, pregunta 39, C | Cumplimiento Apache-2.0 frente a borrar avisos, relicenciar todo y omitir condiciones. |
| 20 | `MAN-GSI-P18-001` | B2-T09 | 2,07× | P18, pregunta 1, A | Lenguaje de marcas frente a cálculo, transporte y sistema operativo. |

## Propuestas concretas pendientes

Las respuestas correctas permanecen literalmente intactas. La aprobación del lote autorizaría únicamente los tres distractores enumerados en cada registro.

### 1. `MAN-GSI-P19-039` · conservar D

- A: Duplicar automáticamente la capacidad física de cada enlace en cuanto se detecta congestión, sin ampliar ni reconfigurar la infraestructura.
- B: Hacer innecesario dimensionar enlaces y colas porque la priorización evita por completo la saturación, con independencia de la carga ofrecida.
- C: Garantizar la calidad extremo a extremo aunque redes intermedias de Internet ignoren las marcas y no apliquen la misma política de servicio.

### 2. `MAN-GSI-P14-084` · conservar B

- A: Ofrecer siempre un único canal digital idéntico para todas las personas, evitando alternativas que puedan adaptar la interacción a necesidades distintas.
- C: Realizar únicamente adaptaciones posteriores cuando una persona las solicite, sin incorporar criterios de accesibilidad al diseño inicial del entorno.
- D: Eliminar cualquier necesidad de ajustes razonables porque el diseño general garantiza por sí mismo el acceso efectivo en todas las situaciones posibles.

### 3. `MAN-GSI-P17-137` · conservar C

- A: Son términos equivalentes para el mismo archivo instalable y ambos incluyen necesariamente el catálogo completo de versiones disponibles.
- B: El repositorio solo puede almacenar código fuente y no admite binarios, metadatos, firmas ni índices para resolver dependencias.
- D: Un paquete contiene siempre un kernel completo y reemplaza el sistema operativo antes de instalar cualquier aplicación o biblioteca.

### 4. `MAN-GSI-P16-147` · conservar D

- A: No debe comprobar nada si el fragmento era visible públicamente, porque la publicación en una web equivale a renunciar a todos los derechos.
- B: Basta con verificar que compile en el proyecto, aunque se desconozcan la licencia, la atribución exigida, la seguridad y la procedencia del código.
- C: Solo debe comprobar que tenga menos de veinte líneas, pues cualquier fragmento inferior a ese límite carece automáticamente de protección jurídica.

### 5. `MAN-GSI-P17-131` · conservar A

- B: Ser el propio kernel Linux y gestionar directamente memoria virtual, interrupciones, procesos, dispositivos y llamadas al sistema.
- C: Sustituir el sistema de archivos mediante una base de datos de unidades que almacena por sí misma todo el contenido persistente.
- D: Actuar como compilador de C integrado en el arranque y reconstruir todos los servicios desde su código fuente cada vez que se inician.

### 6. `MAN-GSI-P15-056` · conservar A

- B: Instalar el sistema operativo de destino y configurar sus servicios antes de compilar el código fuente y resolver las referencias del proyecto.
- C: Ejecutar únicamente los tests con `publish`, mientras `build` carga los binarios resultantes en un repositorio público de Internet.
- D: Ser comandos exactamente equivalentes que producen siempre los mismos archivos, sin diferencias de finalidad, dependencias ni despliegue.

### 7. `MAN-GSI-P17-058` · conservar A

- B: Disponer solo de un diagrama del componente alternativo, sin realizar pruebas de conmutación ni definir cómo recuperar el servicio principal.
- C: Mantener una única copia del componente crítico y confiar en que pueda reconstruirse después del fallo sin estado replicado ni respaldo.
- D: Desactivar la monitorización para reducir alertas y efectuar el cambio manualmente cuando los usuarios comuniquen la indisponibilidad.

### 8. `MAN-GSI-P17-112` · conservar D

- A: Firmware grabado necesariamente en la placa del equipo que no puede actualizarse ni interactuar con componentes del sistema operativo.
- B: Una aplicación SaaS que administra dispositivos a través de Internet y reemplaza las interfaces locales ofrecidas por el fabricante.
- C: Un algoritmo de planificación que elige el siguiente proceso y controla cualquier periférico sin conocer sus registros ni protocolo.

### 9. `MAN-GSI-P16-100` · conservar C

- A: El registro obligatorio crea el derecho de autor y, antes de inscribir el programa, su código puede copiarse y distribuirse libremente.
- B: Comprar una copia transmite todos los derechos de explotación, incluida la facultad de modificar, sublicenciar y redistribuir el programa.
- D: El código fuente carece de protección por ser legible, aunque constituya una forma de expresión original de un programa de ordenador.

### 10. `MAN-GSI-P17-159` · conservar C

- A: Elegir siempre la tecnología más nueva, porque la fecha de lanzamiento garantiza mejor adecuación, estabilidad y operación para cualquier carga.
- B: Utilizar una única plataforma para móvil, servidor, cloud y HPC, aunque sus requisitos de rendimiento, seguridad y soporte sean diferentes.
- D: Decidir exclusivamente por la frecuencia nominal de CPU, sin valorar arquitectura, memoria, red, coste, ecosistema ni reversibilidad.

### 11. `MAN-GSI-P17-073` · conservar B

- A: Una zona contiene necesariamente varias regiones completas y cada una replica todos sus recursos en el mismo dominio de fallo físico.
- C: Son categorías de licenciamiento que determinan dónde puede ejecutarse el software, pero no describen la organización geográfica de la nube.
- D: No influyen en el diseño de resiliencia porque los fallos de infraestructura afectan siempre por igual a todas las ubicaciones del proveedor.

### 12. `MAN-GSI-P16-085` · conservar B

- A: Sí, quedan protegidas automáticamente como código por servir de fundamento a una interfaz, aunque carezcan de forma expresiva concreta.
- C: La protección existiría si el programa usara una licencia libre, pues las licencias privativas excluirían esas ideas y principios.
- D: La presencia de DRM determinaría la protección al impedir observar o analizar el comportamiento del programa.

### 13. `MAN-GSI-P15-026` · conservar D

- A: Son nombres equivalentes para el entorno de ejecución y cada término comprende exactamente los mismos tipos, servicios y reglas.
- B: CTS ejecuta directamente el código administrado, mientras CLR se limita a establecer los nombres permitidos para los tipos públicos.
- C: CLR y CTS son gestores de paquetes que resuelven dependencias, y CLS es el servidor web encargado de alojar las aplicaciones.

### 14. `MAN-GSI-P15-068` · conservar B

- A: Incluir los secretos en los mensajes de log para que el personal de soporte pueda recuperarlos sin acceder al almacén seguro del entorno.
- C: Guardarlos directamente en `appsettings.json` y confirmar ese archivo en Git para que todos los despliegues compartan los mismos valores.
- D: Codificarlos en Base64 y tratarlos como cifrados, aunque cualquier persona con acceso pueda recuperar de forma inmediata el texto original.

### 15. `MAN-GSI-P18-158` · conservar B

- A: Confiar exclusivamente en el versionado de documentos, aunque la plataforma, su configuración o todas sus copias fallen a la vez.
- C: Crear copias periódicas sin probar restauraciones, porque la existencia del archivo de backup demuestra por sí sola que puede recuperarse.
- D: Depender de un único administrador sin documentación, procedimientos ni transferencia de conocimiento para resolver cualquier interrupción.

### 16. `MAN-GSI-P19-096` · conservar A

- B: Ignorar siempre la detección para no afectar al usuario, aunque el dispositivo incumpla una condición explícita de acceso corporativo.
- C: Desactivar los registros del agente UEM para ocultar el evento y mantener el terminal como conforme sin evaluar el riesgo asociado.
- D: Aumentar el bitrate de videollamada para compensar la alteración del sistema operativo y recuperar la integridad del dispositivo.

### 17. `MAN-GSI-P15-089` · conservar D

- A: Crear automáticamente N índices nuevos por cada entidad consultada para acelerar el acceso, aunque no se analicen las columnas utilizadas.
- B: Ejecutar exactamente N consultas en paralelo como estrategia óptima, sin consultas iniciales ni dependencia del número de elementos recuperados.
- C: Guardar N entidades mediante una sola transacción, evitando cualquier consulta adicional y reduciendo siempre el coste de acceso a datos.

### 18. `MAN-GSI-P17-016` · conservar B

- A: La arquitectura de 64 bits obliga a ejecutar las aplicaciones en cloud porque ningún equipo local puede direccionar su espacio de memoria.
- C: Un procesador de 32 bits no puede ejecutar ningún sistema operativo ni utilizar memoria virtual, protección o multitarea preventiva.
- D: La arquitectura de 64 bits elimina todos los niveles de caché al poder direccionar directamente una cantidad mayor de memoria principal.

### 19. `MAN-GSI-P16-039` · conservar C

- A: Eliminar todas las referencias a terceros porque Apache-2.0 transfiere al distribuidor la autoría exclusiva del código incorporado.
- B: Publicar obligatoriamente el producto completo bajo AGPL, aunque los demás componentes sean independientes y usen otras licencias compatibles.
- D: Tratar Apache-2.0 como una licencia sin condiciones y redistribuir el código sin conservar avisos, atribuciones ni documentación aplicable.

### 20. `MAN-GSI-P18-001` · conservar A

- B: Un lenguaje destinado únicamente a ejecutar cálculos numéricos y que no puede describir estructura, semántica ni presentación de contenido.
- C: Un protocolo de transporte que entrega paquetes entre nodos de una red y utiliza etiquetas para seleccionar la ruta física de cada conexión.
- D: Un sistema operativo de propósito general que administra procesos, memoria y dispositivos mediante documentos etiquetados por el usuario.

## Fuentes contrastadas

- P14: `documents/markdown/gsi/P14/GSI A2 — PRÁCTICA ACTIVA 14 — TEST BLOQUE I — SOLUCIONARIO COMENTADO.md`, pregunta 84.
- P15: `documents/markdown/gsi/P15/GSI A2 — PRÁCTICA ACTIVA 15 — .NET Y JAKARTA EE — SOLUCIONARIO COMENTADO.md`, preguntas 26, 56, 68 y 89.
- P16: `documents/markdown/gsi/P16/GSI A2 — PRÁCTICA ACTIVA 16 — LICENCIAS, PROTECCIÓN JURÍDICA Y DRM — SOLUCIONARIO COMENTADO.md`, preguntas 39, 85, 100 y 147.
- P17: `documents/markdown/gsi/P17/GSI A2 — PRÁCTICA ACTIVA 17 — COMPUTADORES, CLOUD Y SISTEMAS OPERATIVOS — SOLUCIONARIO COMENTADO.md`, preguntas 16, 58, 73, 112, 131, 137 y 159.
- P18: `documents/markdown/gsi/P18/GSI A2 — PRÁCTICA ACTIVA 18 — HTML, XML, CONTENIDOS, BÚSQUEDA Y SEO — SOLUCIONARIO COMENTADO.md`, preguntas 1 y 158.
- P19: `documents/markdown/gsi/P19/GSI A2 — PRÁCTICA ACTIVA 19 — NGN, IMS, MOVILIDAD, UEM Y VIDEOCONFERENCIA — SOLUCIONARIO COMENTADO.md`, preguntas 39 y 96.

## Resultado de la preparación

- 20 de 20 IDs localizados en el banco manual.
- 20 de 20 claves coincidentes con sus solucionarios conservados.
- 20 decisiones editoriales pendientes de aprobación humana.
- Cero modificaciones en `data/questions-manual.json`, `data/questions-official.json` y `data/questions-ai.json`.

Este lote solo podrá aplicarse después de recibir aprobación expresa de sus textos concretos.
