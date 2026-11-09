# GSI-EDITORIAL-056 — revisión propuesta

Preparado: 2026-10-29. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `ccc87faeae293c0979641482821402b62020f9667e0a5802aa6e7b59f1a95783`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B3-T06-001

Decisión: pending_review · acción: revise.

Motivo: Conservar mantenibilidad y clave D; prácticas comparables y límites de modularidad/revisión/pruebas sin garantías automáticas.

### Antes

¿Qué contribuye a construir código mantenible?

- A. Una única función para todo
- B. Dependencias sin control
- C. Ausencia de estándares
- D. Modularidad, revisión y pruebas automatizadas **(correcta)**

Explicación: La construcción incorpora calidad y revisión, no solo producción de código.

### Propuesta

¿Qué contribuye a construir código mantenible?

- A. Concentrar responsabilidades distintas para reducir el número de funciones.
- B. Dar prioridad al número de líneas producidas como medida suficiente de calidad.
- C. Delegar la detección de regresiones en las incidencias que lleguen de producción.
- D. Separar responsabilidades, revisar cambios y probar comportamientos relevantes. **(correcta)**

Explicación: Separar responsabilidades comprensibles facilita localizar y cambiar una parte sin arrastrar dependencias innecesarias. La revisión contrasta diseño, claridad y comportamiento; las pruebas pertinentes aportan evidencia frente a regresiones. Estas prácticas se complementan: ni dividir por dividir ni acumular pruebas triviales garantiza mantenibilidad. Deben ajustarse a la complejidad y al riesgo del cambio.

- Error A: Concentrar tareas no relacionadas puede aumentar acoplamiento y dificultar entender los efectos de una modificación.
- Error B: Más líneas no demuestra claridad, corrección o facilidad de evolución; la medida no basta para valorar calidad.
- Error C: Esperar incidencias detecta problemas tarde y no sustituye revisar y comprobar cambios antes de usarlos.

- [Google Engineering Practices: What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html) · Design; Functionality; Complexity; Tests; Documentation · versión: Guía pública leída el 29-10-2026, sin número de edición indicado en el cuerpo. Complejidad comprensible y pruebas pertinentes, sin convertir una lista de prácticas en garantía de calidad · comprobado: 2026-10-29

Partida: `25a377d76c4df74b141090d377592ca0627ae1da760db94a149d38ddaaa58cad` · propuesta: `f1cabc180b85d04b3b113f755e41d1aec4b966408791cda9e3d98173992dd30a`

## AI-GSI-B3-T06-002

Decisión: pending_review · acción: revise.

Motivo: Conservar trazabilidad/colaboración y clave D; distinguir registro de cambios, corrección y autorización de entrega.

### Antes

¿Qué objetivo central aporta el control de versiones?

- A. Garantizar corrección funcional automáticamente
- B. Sustituir todas las pruebas
- C. Evitar toda documentación
- D. Trazabilidad y colaboración **(correcta)**

Explicación: Versionar permite identificar y coordinar cambios, pero no prueba su calidad.

### Propuesta

¿Qué objetivo central aporta el control de versiones?

- A. Certificar que cada cambio registrado satisface los requisitos funcionales.
- B. Resolver los conflictos entre desarrolladores sin revisión de su significado.
- C. Decidir la versión que debe publicarse solo por ser la más reciente.
- D. Registrar y comparar cambios para coordinar y recuperar versiones identificables. **(correcta)**

Explicación: El control de versiones conserva cambios identificables y permite comparar, atribuir y recuperar estados registrados. Un historial compartido ayuda a coordinar trabajo y analizar cómo se llegó a una versión. Un commit no certifica comportamiento correcto: la revisión y las pruebas aportan evidencia distinta. Recuperar una versión de archivos tampoco revierte automáticamente una base de datos o efectos externos.

- Error A: Registrar contenido no demuestra que cumpla los requisitos; puede versionarse código defectuoso.
- Error B: El gestor ayuda a combinar cambios, pero un conflicto o una combinación semánticamente incorrecta requiere criterio.
- Error C: Ser reciente no equivale a estar aceptado para publicación. El historial no sustituye esa decisión.

- [Pro Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) · 1.1 About Version Control; cambios, comparación y recuperación; Centralized/Distributed Version Control Systems · versión: Pro Git, segunda edición, capítulo público leído el 29-10-2026. Versionar no demuestra corrección ni elimina conflictos · comprobado: 2026-10-29

Partida: `39b311c1bdb59507c456cf8bebd64a3a610bfdeb50963c153b129d81948999ce` · propuesta: `2a89a5548343f670f83e9a4c66a6a3837e6b8bf232afe721926d8d74780023ff`

## AI-GSI-B3-T06-003

Decisión: pending_review · acción: revise.

Motivo: Conservar dependencias fijadas y clave C; microcaso de resolución distinta para un mismo commit y límite de lockfile.

### Antes

¿Qué favorece reproducir una construcción?

- A. Cambiar herramientas en cada ejecución
- B. Descargas manuales no documentadas
- C. Dependencias fijadas y lockfiles **(correcta)**
- D. Versiones flotantes sin registro

Explicación: La reproducibilidad exige controlar entradas, herramientas y dependencias.

### Propuesta

Dos instalaciones del mismo commit resuelven versiones transitivas distintas. ¿Qué medida reduce esa variación de dependencias?

- A. Mantener rangos flotantes y resolverlos de nuevo en cada instalación.
- B. Compartir el comando de instalación sin registrar el árbol resuelto.
- C. Versionar el lockfile y usar una instalación que respete sus resoluciones. **(correcta)**
- D. Actualizar las dependencias transitivas antes de cada ejecución del build.

Explicación: El lockfile registra versiones y resoluciones concretas del árbol de dependencias y debe utilizarse de forma consistente. Así se evita que una nueva resolución cambie las dependencias con el mismo código. Favorece reproducibilidad, pero no basta para garantizar artefactos idénticos: también importan fuentes, herramientas, entorno e instrucciones. No se cambia aquí el stack ni se añade un gestor al proyecto.

- Error A: Resolver rangos en momentos distintos puede seleccionar versiones diferentes y conserva la variación descrita.
- Error B: El mismo comando puede resolver otro árbol si las versiones siguen flotando o no se respeta un registro exacto.
- Error D: Actualizar entradas antes de cada build introduce variación; la actualización debe ser un cambio controlado y revisable.

- [npm: package-lock.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json/) · Description: árbol exacto de dependencias e inclusión del lockfile en control de versiones · versión: Documentación CLI v11, selector 11.21.1 Legacy al consultar el 29-10-2026. Se cita como ejemplo de lockfile, no versión local o recomendación de instalar una versión antigua · comprobado: 2026-10-29
- [Reproducible Builds: Definitions](https://reproducible-builds.org/docs/definition/) · When is a build reproducible?; Explanations: fuentes, entorno, instrucciones y artefactos idénticos bit a bit · versión: Definición pública leída el 29-10-2026, sin versión numerada indicada. Lockfile es una entrada controlada, no garantía suficiente de reproducibilidad total · comprobado: 2026-10-29

Partida: `a1e060997512fb2dadbb88d7b132eb9cf3871883b01914e85bc8816de61be173` · propuesta: `59981a9990dd357d9e5bfc9acae33091933b9a2b7fccb962bd97f8a6d4970be0`

## AI-GSI-B3-T06-004

Decisión: pending_review · acción: revise.

Motivo: Conservar comprobación de contenido y clave A; microcaso con referencia fiable, sin equiparar integridad, autenticidad y calidad.

### Antes

¿Para qué sirven checksums de artefactos?

- A. Comprobar identidad e integridad de los archivos **(correcta)**
- B. Sustituir la revisión de licencias
- C. Decidir automáticamente si cumplen requisitos funcionales
- D. Definir roles del equipo

Explicación: Los checksums identifican contenido; no validan por sí solos comportamiento ni condiciones legales.

### Propuesta

Se descarga un artefacto y se dispone de su SHA-256 esperado por un canal fiable. ¿Para qué sirve calcular y comparar el SHA-256 del archivo recibido?

- A. Comparar el contenido recibido con el resumen esperado de referencia. **(correcta)**
- B. Acreditar quién publicó el archivo solo por calcular su hash local.
- C. Confirmar que el archivo cumple todos los requisitos funcionales.
- D. Determinar que todas sus dependencias permiten el uso previsto por licencia.

Explicación: Comparar un resumen criptográfico del archivo con una referencia obtenida de forma fiable ayuda a comprobar integridad del contenido. Una discrepancia revela que no coincide con esa referencia; una coincidencia no ejecuta el programa ni demuestra su corrección funcional. El hash aislado no autentica al autor: si alguien sustituye archivo y resumen en un canal no confiable, la comparación no detecta esa suplantación.

- Error B: Un resumen calculado localmente identifica contenido, pero no vincula por sí solo el archivo a una identidad de autor.
- Error C: Un programa con fallos también tiene hash; el resumen no sustituye las pruebas de comportamiento.
- Error D: La licencia se determina a partir de sus términos y procedencia, no del valor de un hash.

- [Reproducible Builds: Cryptographic checksums](https://reproducible-builds.org/docs/checksums/) · Comparación byte a byte; intercambio de resúmenes criptográficos y ejemplo de firma · versión: Página pública leída el 29-10-2026, sin edición numerada. Se exige referencia fiable; comparar un resumen no ejecuta pruebas funcionales o revisión de licencias · comprobado: 2026-10-29

Partida: `2d1fcab8fe0fd0e93d150e469a58740f4f76325b419a48ba6baf4bf2c8b1bbac` · propuesta: `dd0ecc64bdb8a0611d87c0b4f6c17fdba769a47c0b92b497e162fe67d335920f`

## AI-GSI-B3-T06-005

Decisión: pending_review · acción: revise.

Motivo: Conservar integración frecuente y clave D; diferenciar práctica de CI, uso de una herramienta y despliegue automático.

### Antes

¿Qué caracteriza la integración continua?

- A. Mantener cambios aislados indefinidamente
- B. Esperar al final del proyecto para combinar ramas
- C. Publicar sin compilar ni probar
- D. Integrar cambios frecuentes con construcción y pruebas automáticas **(correcta)**

Explicación: CI acorta el intervalo para detectar incompatibilidades al integrar.

### Propuesta

¿Qué caracteriza la integración continua?

- A. Conservar ramas separadas y probar cada una sin integrarlas en una base compartida.
- B. Programar una única combinación al final y resolver entonces incompatibilidades.
- C. Publicar automáticamente cada cambio aunque no se ejecute una construcción.
- D. Integrar cambios pequeños con frecuencia y verificar la base compartida automáticamente. **(correcta)**

Explicación: La integración continua combina trabajo frecuente en una base compartida y ejecuta construcción y pruebas automáticas para obtener feedback temprano. Los fallos deben atenderse y los resultados estar disponibles al equipo. Ejecutar un servidor de CI sobre ramas que permanecen aisladas no basta para practicar integración continua. Tampoco significa desplegar en producción cada cambio sin otra decisión.

- Error A: Probar ramas aisladas no comprueba que el trabajo integrado conviva en la base compartida.
- Error B: La combinación tardía retrasa la detección de incompatibilidades que CI busca acortar.
- Error C: Publicar sin verificar no define CI; entrega y despliegue tienen controles y decisiones adicionales.

- [DORA: Continuous integration](https://dora.dev/capabilities/continuous-integration/) · How to implement CI: integración frecuente en rama principal compartida, build y tests automáticos; resultados visibles y reparación · versión: Texto público leído el 29-10-2026, sin edición numerada. Las cifras de investigación no se convierten en cuota obligatoria por organización; CI no implica publicación automática · comprobado: 2026-10-29

Partida: `2ba9435026b270afb9f27d6199aefa100c39d7ddb311186b8fb09d048f3d5e8e` · propuesta: `66033f5e77078725bd427581a65d9615d444d417c266fca0954565c942a6ceb3`

## AI-GSI-B3-T06-006

Decisión: pending_review · acción: revise.

Motivo: Conservar artefacto empaquetado/validado y clave D; precisar trazabilidad y alcance de validación sin prometer calidad universal.

### Antes

¿Qué salida útil produce un pipeline de construcción?

- A. Un binario reconstruido fuera del pipeline sin trazabilidad
- B. Un conjunto de fuentes sin comprobar que puedan empaquetarse
- C. Solo logs sin artefacto identificable
- D. Un artefacto empaquetado y validado **(correcta)**

Explicación: El pipeline automatiza pasos que culminan en un artefacto trazable.

### Propuesta

En un pipeline cuyo objetivo es construir y empaquetar una versión entregable, ¿qué salida debe poder conservarse y promoverse?

- A. Una copia de trabajo modificable sin vincularla a la revisión construida.
- B. Una caché de dependencias que no identifica el producto empaquetado.
- C. Un log correcto que no conserva el paquete obtenido en esa ejecución.
- D. Un paquete identificable vinculado a su origen y a los controles ejecutados. **(correcta)**

Explicación: Un pipeline de construcción y empaquetado útil deja un artefacto identificable y trazable a sus entradas y resultados. El paquete es la salida que podrá promoverse según los controles y aprobaciones del proyecto. Logs y cachés ayudan, pero no sustituyen ese producto. Superar los controles definidos no certifica ausencia de defectos ni obliga a publicar automáticamente.

- Error A: Una copia modificable sin revisión identificada no permite saber qué contenido produjo la entrega.
- Error B: La caché acelera trabajo y puede ser una salida auxiliar; no sustituye el artefacto solicitado.
- Error C: El log aporta evidencia del proceso, pero no permite promover el mismo paquete si este no se conserva.

- [Apache Maven: Introduction to the Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html) · Build Lifecycle Basics; fases validate/compile/test/package/verify/install/deploy y plugins vinculados · versión: Guía pública leída el 29-10-2026. Se usa Maven como ejemplo de coordinación; fases y verificaciones dependen del proyecto y no se ejecuta ningún comando de la guía · comprobado: 2026-10-29
- [Reproducible Builds: Definitions](https://reproducible-builds.org/docs/definition/) · When is a build reproducible?; Explanations: fuentes, entorno, instrucciones y artefactos idénticos bit a bit · versión: Definición pública leída el 29-10-2026, sin versión numerada indicada. Lockfile es una entrada controlada, no garantía suficiente de reproducibilidad total · comprobado: 2026-10-29

Partida: `ee9d4b87c9e2304da8f81f6ea8e378048d28fdb330d73ed61869e4337807e87d` · propuesta: `20b47496db9cc4d516628d43d3805c5fdc1f92e163c689e1d5ee912994f4f023`

## AI-GSI-B3-T06-008

Decisión: pending_review · acción: revise.

Motivo: Conservar colaboración desarrollo/operación y clave B; distinguir cultura, roles, herramientas y reparto de responsabilidad.

### Antes

¿Qué describe DevOps?

- A. Solo un cargo que asume todo el trabajo
- B. Cultura y prácticas de colaboración entre desarrollo y operación **(correcta)**
- C. Un producto único obligatorio
- D. La eliminación de operación

Explicación: Responsabilidad compartida, automatización y feedback reducen fricción.

### Propuesta

¿Qué describe DevOps?

- A. Unificar todos los roles en una persona como condición del modelo.
- B. Compartir responsabilidad y feedback entre desarrollo y operación. **(correcta)**
- C. Adoptar una plataforma de automatización como sustituto del cambio cultural.
- D. Trasladar al equipo de operación la responsabilidad por todos los fallos del producto.

Explicación: DevOps combina cultura y prácticas para colaborar a lo largo del ciclo de entrega y operación, con feedback, automatización y responsabilidad compartida. No impone que una persona asuma todos los roles o que desaparezcan las especialidades. Comprar herramientas puede ayudar a las prácticas, pero no elimina por sí solo silos o problemas de coordinación.

- Error A: Colaborar no exige concentrar todas las competencias y tareas en una sola persona.
- Error C: La plataforma no sustituye acuerdos de trabajo, comunicación y responsabilidad compartida.
- Error D: Transferir toda la culpa mantiene la separación que se pretende mejorar y no comparte responsabilidad.

- [AWS: What is DevOps?](https://aws.amazon.com/devops/what-is-devops/) · DevOps Model Defined; How DevOps Works; Improved Collaboration; DevOps Cultural Philosophy · versión: Definición y prácticas públicas leídas el 29-10-2026, sin edición numerada. Colaboración y responsabilidad compartida no requieren fusionar todos los roles ni usar productos AWS · comprobado: 2026-10-29

Partida: `940d739a4ef7a050adedb758de5cab249a81ed049a202915c1de2c971f76dbe7` · propuesta: `1f27f5a3eb3134845e4fd08f4928fc29ed92ce187a0231eb278202813066c055`

## AI-GSI-B3-T06-009

Decisión: pending_review · acción: revise.

Motivo: Conservar seguridad durante el flujo y clave C; actividades y tratamiento de resultados sin convertir herramientas en garantías.

### Antes

¿Qué añade DevSecOps al flujo?

- A. Publicación de secretos para facilitar pruebas
- B. Supresión de revisiones
- C. Integración de seguridad durante todo el proceso **(correcta)**
- D. Seguridad solo en la última auditoría

Explicación: La seguridad se integra en construcción, entrega y operación.

### Propuesta

¿Qué añade DevSecOps al flujo?

- A. Dejar la seguridad para una auditoría independiente tras terminar el desarrollo.
- B. Ejecutar un escáner aislado y tratar sus resultados como corrección automática.
- C. Integrar prácticas de seguridad en diseño, construcción, entrega y operación. **(correcta)**
- D. Asignar todos los riesgos a operación una vez publicada la versión.

Explicación: DevSecOps incorpora seguridad al flujo de trabajo y sus responsabilidades durante el ciclo de vida. Diseñar requisitos, revisar, analizar, probar y responder a vulnerabilidades son actividades complementarias según el riesgo. No basta añadir un escáner ni se elimina una auditoría final que resulte pertinente. Los hallazgos necesitan evaluación y tratamiento, no solo un indicador verde.

- Error A: Un control tardío puede aportar evidencia, pero no integra prevención y comprobación durante el ciclo.
- Error B: Detectar una alerta no equivale a corregirla; la herramienta aislada no cubre todas las responsabilidades.
- Error D: Trasladar el riesgo al final deja fuera actividades previas y rompe la responsabilidad compartida.

- [NIST SP 800-218: Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · §1.1 integración de seguridad durante SDLC; PO.4 criterios de comprobación; PS.2 integridad de releases; PW.7 revisión/análisis y PW.8 pruebas · versión: SSDF v1.1, febrero de 2022, contrastado con ficha CSRC; PDF de 36 páginas leído textualmente el 29-10-2026. Versión explícita, sin afirmar que sea la última publicada o una obligación española universal · comprobado: 2026-10-29

Partida: `2124b875328507bbb31e3032c6778b579ec9c80f1589044eae40d33dd795b7ec` · propuesta: `de3da9c57cd5c0b6331ee70b49c11b79aa3e4cbcf3e6841fc497eca502147b1f`

## AI-GSI-B3-T06-011

Decisión: pending_review · acción: revise.

Motivo: Conservar incompatibilidad de migración y clave A; microcaso que distingue esquema, reconstrucción, pérdida de artefacto y configuración mediante condiciones explícitas.

### Antes

¿Qué puede impedir un rollback correcto de la aplicación?

- A. Una migración de base de datos incompatible **(correcta)**
- B. Versionar los cambios
- C. Tener un plan de reversión
- D. Conservar el artefacto anterior

Explicación: Revertir binarios no basta si el esquema ya no admite esa versión.

### Propuesta

Una migración elimina una columna que aún consulta la versión anterior. Se ejecuta su mismo binario conservado, con su configuración original y sin reconstruirlo. ¿Qué limitación de rollback ilustra el caso?

- A. El esquema migrado no satisface las consultas del binario anterior. **(correcta)**
- B. La resolución de otras dependencias al reconstruir el binario anterior.
- C. La pérdida del artefacto previo durante la limpieza del repositorio.
- D. Una configuración exclusiva de la versión nueva mantenida en el retorno.

Explicación: Si la versión anterior consulta una columna eliminada, volver a su binario no restaura esa columna ni sus datos. La compatibilidad de código, esquema y datos forma parte de la reversión y debe verificarse. Guardar el binario o un plan ayuda, pero no compensa una transición incompatible. Restaurar una copia de datos puede perder cambios posteriores y no debe confundirse con revertir solo la aplicación.

- Error B: El caso ejecuta el mismo binario sin reconstruirlo; no describe una resolución nueva durante un build. En otros casos, reconstruir sí puede cambiar entradas.
- Error C: El artefacto previo está conservado y se ejecuta; su pérdida no es la limitación descrita.
- Error D: Se usa la configuración original del binario anterior. El problema sigue en el esquema cambiado, no en conservar la configuración nueva.

- [Sandeep Pokkunuri: Ensuring rollback safety during deployments](https://builder.aws.com/content/3F04j2yRAAMBuPSPs50xwXZqg01/ensuring-rollback-safety-during-deployments) · Introduction; Standalone vs. distributed software deployments; compatibilidad entre versiones y datos durante avance/reversión · versión: Artículo de AWS Builders Library, publicado y modificado 05-12-2019 según cuerpo; URL original redirige a Builder Center, leído el 29-10-2026. Principios de compatibilidad, no guía específica de DDL · comprobado: 2026-10-29
- [Prisma Data Guide: Using the expand and contract pattern for schema changes](https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern) · How to use: pasos 1–7, estructura paralela, datos, interfaz y retirada tras actualizar clientes; límites de rollback · versión: Revisión de fuente 41ccbc7d5038f7b4391787911e24ad936598fab2 indicada por la página, leída el 29-10-2026. Se toma el patrón conceptual, sin instalar ORM o ejecutar migraciones de ejemplo · comprobado: 2026-10-29

Partida: `d90222b5974f500d2f4bb84dc743725a9efc4f408a3d9d0dd5b75aed527da552` · propuesta: `89e8e116177ac5344668ac1649ea7cb1ad8c68279e8a2b9dcaaaff5e895f2f86`

## AI-GSI-B3-T06-012

Decisión: pending_review · acción: revise.

Motivo: Conservar cadena de suministro y clave C; describir capacidades reales de modificación y límites de aislamiento/publicidad.

### Antes

¿Por qué deben protegerse runners y repositorios de artefactos?

- A. No pueden afectar a producción
- B. Su seguridad sustituye todas las demás
- C. Forman parte de la cadena de suministro del software **(correcta)**
- D. Solo contienen documentación inocua por definición

Explicación: Un compromiso del pipeline puede modificar lo que finalmente se despliega.

### Propuesta

¿Por qué deben protegerse runners y repositorios de artefactos?

- A. Porque sus registros de ejecución sustituyen el control de acceso de producción.
- B. Porque su aislamiento hace innecesario revisar quién puede modificar el build.
- C. Porque pueden modificar el código o los artefactos que se entregan al producto. **(correcta)**
- D. Porque publicar el código fuente impide que un paquete sea sustituido después.

Explicación: Los runners ejecutan el proceso de construcción y los repositorios sirven sus resultados. Si se comprometen, pueden alterar el contenido entregado o exponer permisos y secretos del flujo. Son parte de la cadena de suministro: se controlan accesos, procedencia e integridad con medidas apropiadas al entorno. Protegerlos no sustituye la seguridad de la aplicación o de producción.

- Error A: Un log informa, pero no concede ni limita los permisos de producción y no sustituye su control de acceso.
- Error B: El aislamiento y los permisos deben verificarse; no se presume que cualquier runner sea seguro frente a código no confiable.
- Error D: Publicar fuentes no impide sustituir un artefacto o manipular cómo se construye; se necesita verificar la relación.

- [GitHub Actions: Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) · Writing workflows; Using third-party actions; Hardening for self-hosted runners: código no confiable, permisos y acceso a secretos · versión: Documentación pública leída el 29-10-2026, URL final de la referencia de seguridad. No se configura un runner ni se consultan credenciales; usar acciones fijadas no elimina todo riesgo · comprobado: 2026-10-29

Partida: `c13e77f54e22f0694b98ba8aaa8608346a42204f31849805ac65b970578d6935` · propuesta: `825fbcb982b44d062ffcbf11827711c0c92ac7f6edd407acc63105da9ca00076`

## AI-GSI-B3-T06-013

Decisión: pending_review · acción: revise.

Motivo: Conservar documentación trazable y clave D; distinguir flujo, ubicación física y revisión editorial.

### Antes

¿Qué ventaja aporta docs-as-code?

- A. Eliminar la necesidad de escribir documentación
- B. Convertir toda ayuda en código ejecutable
- C. Evitar revisión editorial
- D. Versionar documentación técnica junto a cambios del producto **(correcta)**

Explicación: La documentación puede mantenerse trazable con el código sin dejar de ser legible.

### Propuesta

¿Qué ventaja aporta docs-as-code?

- A. Obtener documentación correcta por el solo hecho de compilar el código fuente.
- B. Tratar el texto técnico como instrucciones ejecutables para el entorno de producción.
- C. Excluir revisiones humanas porque las comprobaciones automáticas validan su significado.
- D. Versionar y revisar documentación con un flujo coordinado con los cambios del producto. **(correcta)**

Explicación: Docs-as-code usa prácticas y herramientas del desarrollo para mantener documentación: texto, control de versiones, revisión y comprobaciones automatizadas apropiadas. Esto permite revisar el cambio de producto junto a su explicación y conservar historial. No exige un único repositorio ni elimina la necesidad de claridad, revisión editorial o contraste con el comportamiento real.

- Error A: Compilar código no demuestra que su documentación sea completa o comprensible para el destinatario.
- Error B: Tratar el texto con un flujo de código no significa ejecutar sus instrucciones contra producción.
- Error C: Un comprobador de enlaces o formato no valida por sí solo el significado o la utilidad del documento.

- [Write the Docs: Docs as code](https://www.writethedocs.org/guide/docs-as-code/) · Docs as code: herramientas, control de versiones, revisión, pruebas y trabajo integrado con producto · versión: Eric Holscher y comunidad Write the Docs; texto público leído el 29-10-2026, sin edición numerada. No exige el mismo repositorio ni convierte documentación en programa ejecutable · comprobado: 2026-10-29

Partida: `aaec71718b962e405aa1d919b3ecd9508541845b80c3933faedb838f81de1e27` · propuesta: `f5f86e84bdf761042c09c9fc6afb4293a7cfd840c9f9e29f670d5ce32033c553`

## AI-GSI-B3-T06-014

Decisión: pending_review · acción: revise.

Motivo: Conservar coordinación de construcción y clave D; sustituir distractores ajenos por funciones de herramientas cercanas.

### Antes

¿Qué función cumple una herramienta de build?

- A. Gestionar exclusivamente llamadas telefónicas
- B. Certificar la identidad del usuario
- C. Sustituir un registro de riesgos
- D. Coordinar construcción, dependencias, pruebas y empaquetado según el entorno **(correcta)**

Explicación: El entorno de construcción reúne herramientas con funciones distintas pero coordinadas.

### Propuesta

¿Qué función cumple una herramienta de build?

- A. Editar y colorear archivos fuente durante la escritura del programa.
- B. Inspeccionar manualmente la ejecución para localizar una excepción concreta.
- C. Definir qué decisión arquitectónica debe aceptarse antes de cada cambio.
- D. Ordenar tareas de construcción y sus dependencias hasta obtener las salidas previstas. **(correcta)**

Explicación: Una herramienta de build coordina tareas y dependencias del proceso, por ejemplo compilar, ejecutar pruebas configuradas y empaquetar. Las acciones concretas se definen mediante configuración, plugins o reglas. El editor ayuda a escribir y el depurador a investigar una ejecución; no son esa coordinación. Una herramienta de build no decide por sí sola si una arquitectura o un requisito son adecuados.

- Error A: La edición de fuentes es función del editor o IDE, aunque este pueda invocar el build.
- Error B: La depuración inspecciona una ejecución; no define el grafo de tareas y salidas de construcción.
- Error C: La aceptación de una decisión corresponde al proceso del proyecto; no es la función técnica del build.

- [Apache Maven: Introduction to the Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html) · Build Lifecycle Basics; fases validate/compile/test/package/verify/install/deploy y plugins vinculados · versión: Guía pública leída el 29-10-2026. Se usa Maven como ejemplo de coordinación; fases y verificaciones dependen del proyecto y no se ejecuta ningún comando de la guía · comprobado: 2026-10-29

Partida: `641679855a9adc3c9a8009ad88fc5024d012bf3f0187ee93370c3bbe4b39600a` · propuesta: `79a38653f54cbc9478f84670ce44db6c0967ec932785ca097b805662deb839b6`

## AI-GSI-B3-T06-015

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de edición sobrescrita y clave C; precisar opciones reales de extensión y límite de ignorar archivos.

### Antes

Un cliente se genera desde OpenAPI y se regenerará después. ¿Qué debe evitarse?

- A. Versionar la estrategia de generación
- B. Reproducción determinista
- C. Ediciones manuales que se perderán sin estrategia explícita **(correcta)**
- D. Conservar el contrato fuente

Explicación: La generación debe ser reproducible y las modificaciones deben situarse donde sobrevivan a regeneración.

### Propuesta

Un cliente OpenAPI se regenerará y la herramienta sobrescribe sus archivos de salida. ¿Qué práctica debe evitarse si no hay una estrategia que conserve el cambio?

- A. Conservar contrato y parámetros de generación bajo control de versiones.
- B. Fijar la versión del generador y comprobar el resultado regenerado.
- C. Modificar a mano archivos que se sobrescriben sin preservar esos cambios. **(correcta)**
- D. Situar extensiones en plantillas o capas previstas y revisar su compatibilidad.

Explicación: Si una regeneración sobrescribe un archivo, editarlo a mano sin una estrategia hace que el cambio no sobreviva. Deben identificarse entradas, versión y configuración, y ubicar extensiones en plantillas, capas o mecanismos de preservación elegidos y probados. Ignorar un archivo puede conservarlo, pero también dejarlo desfasado: no equivale a sincronizarlo con un contrato nuevo. Se revisa y prueba el resultado generado.

- Error A: Conservar las entradas facilita repetir y revisar la generación; no es la modificación frágil que se pide evitar.
- Error B: Controlar la versión y comprobar la salida ayuda a gestionar cambios del generador, sin garantizar corrección por sí solo.
- Error D: Una extensión en mecanismos previstos puede sobrevivir si se mantiene y verifica; es una estrategia explícita.

- [OpenAPI Generator: Customization](https://openapi-generator.tech/docs/customization/) · User-defined Templates; Ignore file format; Customizing the generator: control sobre sobrescritura y configuración · versión: Documentación pública leída el 29-10-2026. Se cita disponibilidad de plantillas desde 5.0.0 sin inferir versión instalada. Las opciones de preservación requieren estrategia, pruebas y revisión; no se regenera un cliente real · comprobado: 2026-10-29

Partida: `5aef505c9301084f66d34217ab169acf0286397b1e284d7a070ec2e2fbc5855f` · propuesta: `8dfd4412dd421e5843d5d65dd9697d7440768becf371d19c195fcdc814310f5b`

## AI-GSI-B3-T06-016

Decisión: pending_review · acción: revise.

Motivo: Conservar migraciones compatibles y clave A; microcaso de coexistencia para distinguir expansión y retirada prematura.

### Antes

¿Cómo deberían tratarse las migraciones de base de datos en despliegues progresivos?

- A. Versionadas y compatibles con las versiones coexistentes **(correcta)**
- B. Sin pruebas porque son datos
- C. Como cambios manuales sin registro
- D. Suponiendo que solo existe una instancia siempre

Explicación: La coexistencia durante promoción exige compatibilidad del esquema.

### Propuesta

En un despliegue progresivo conviven instancias antigua y nueva que usan la misma base de datos. ¿Cómo debe tratarse una migración que cambia su estructura?

- A. Versionar la migración y mantener interfaces de datos compatibles mientras coexistan. **(correcta)**
- B. Renombrar de inmediato la columna original y exigir que las instancias antiguas se adapten.
- C. Dejar cada cambio de esquema al criterio manual de la instancia que arranque primero.
- D. Eliminar la estructura anterior en cuanto una sola instancia nueva pase sus pruebas.

Explicación: Mientras dos versiones acceden a los mismos datos, el esquema y las operaciones deben servir a ambas. El patrón expandir y contraer permite añadir estructura, migrar datos y clientes y retirar lo anterior cuando ya no se usa, con pruebas y coordinación de escrituras. Versionar ayuda a repetir y auditar la transición; no basta si el contenido rompe a clientes coexistentes. La política de rollback debe revisarse antes de cambios destructivos.

- Error B: Renombrar una columna que aún lee la versión antigua rompe su contrato durante la coexistencia.
- Error C: Cambios manuales no coordinados pueden competir y dejar estados distintos; no resuelven compatibilidad o trazabilidad.
- Error D: Que funcione una instancia nueva no demuestra que ya no existan clientes antiguos usando la estructura previa.

- [Prisma Data Guide: Using the expand and contract pattern for schema changes](https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern) · How to use: pasos 1–7, estructura paralela, datos, interfaz y retirada tras actualizar clientes; límites de rollback · versión: Revisión de fuente 41ccbc7d5038f7b4391787911e24ad936598fab2 indicada por la página, leída el 29-10-2026. Se toma el patrón conceptual, sin instalar ORM o ejecutar migraciones de ejemplo · comprobado: 2026-10-29

Partida: `861d0ec410d3c97b74a84869325e440fd9d50b98e1d96e342c7025f6a2b5ec1b` · propuesta: `29aa28c903349448c1e25a01d0098d375123a3fd6b3c15bfa7ab4614e8906bbf`

## AI-GSI-B3-T06-017

Decisión: pending_review · acción: revise.

Motivo: Conservar control accionable según riesgo y clave D; distinguir medida, decisión y tratamiento de resultados.

### Antes

¿Qué hace útil un quality gate?

- A. Medir solo número de herramientas
- B. Acumular herramientas sin atender resultados
- C. Aceptar automáticamente cualquier alerta
- D. Vincularlo a riesgo y capacidad de corregir hallazgos **(correcta)**

Explicación: Los controles deben ser accionables y proporcionales, no una fuente de ruido.

### Propuesta

¿Qué hace útil un quality gate?

- A. Contar herramientas conectadas y usar ese número como criterio suficiente de salida.
- B. Archivar todos los avisos sin definir qué resultado permite avanzar o exige corregir.
- C. Desactivar un control al primer fallo para conservar una secuencia de builds verdes.
- D. Definir criterios proporcionados al riesgo, con decisiones y tratamiento de hallazgos. **(correcta)**

Explicación: Un quality gate contrasta resultados con criterios definidos y determina si se puede avanzar o hay que tratar un hallazgo. Debe tener evidencia, responsables y medidas proporcionadas al riesgo. Acumular herramientas o umbrales sin capacidad de interpretar y corregir produce ruido. Superar el gate acredita esos controles, no calidad absoluta ni aceptación editorial de un contenido distinto.

- Error A: El número de herramientas no indica si se comprobó un riesgo relevante o se trató un fallo.
- Error B: Sin criterio ni respuesta al resultado, registrar avisos no establece una puerta de decisión útil.
- Error C: Ocultar el control para mantener verde elimina evidencia; corresponde investigar, corregir o justificar una excepción trazable.

- [SonarQube Server: Understanding quality gates](https://docs.sonarsource.com/sonarqube-server/quality-standards-administration/managing-quality-gates/introduction-to-quality-gates) · Introducción; condiciones por métrica/operador/umbral; política, código nuevo/general y resultado de gate · versión: Página identifica SonarQube Server 2026.5 al consultar el 29-10-2026. Ejemplo de implementación, sin recomendar producto o imponer sus umbrales al banco de preguntas · comprobado: 2026-10-29
- [NIST SP 800-218: Secure Software Development Framework](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · §1.1 integración de seguridad durante SDLC; PO.4 criterios de comprobación; PS.2 integridad de releases; PW.7 revisión/análisis y PW.8 pruebas · versión: SSDF v1.1, febrero de 2022, contrastado con ficha CSRC; PDF de 36 páginas leído textualmente el 29-10-2026. Versión explícita, sin afirmar que sea la última publicada o una obligación española universal · comprobado: 2026-10-29

Partida: `ca65d9d3f62a5bfab6592a3d937c43866140d0d16e4ceaef3eb69d59bc6c40cf` · propuesta: `f6b2074723e89b5fee4d9d56b67856c24712ec988bec2c0251d1f90d5d8f9e17`

## AI-GSI-B3-T06-018

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave B; documentos y finalidad ya bien distinguidos. Ampliar estado e historial.

### Antes

¿Qué documento recoge contexto, alternativas y consecuencias de una decisión arquitectónica?

- A. Manual de usuario orientado a tareas
- B. ADR **(correcta)**
- C. Referencia de endpoints de API
- D. Runbook de respuesta a incidencias

Explicación: Un ADR conserva el razonamiento de una decisión de arquitectura.

### Propuesta

¿Qué documento recoge contexto, alternativas y consecuencias de una decisión arquitectónica?

- A. Manual de usuario orientado a tareas
- B. ADR **(correcta)**
- C. Referencia de endpoints de API
- D. Runbook de respuesta a incidencias

Explicación: Un ADR registra una decisión arquitectónica relevante, su contexto, estado y consecuencias; las alternativas ayudan a comprender el razonamiento. Si otra decisión lo sustituye, se conserva y se enlaza el reemplazo en lugar de borrar por qué se decidió. El formato puede variar. Un ADR no reemplaza las instrucciones operativas ni la referencia de una API.

- Error A: Un manual de tareas ayuda al usuario a operar funciones; no se centra en la justificación de una decisión arquitectónica.
- Error C: La referencia de endpoints define cómo integrar una API, no el contexto y consecuencias de una decisión.
- Error D: El runbook guía una actuación operativa; su objetivo no es conservar el razonamiento arquitectónico.

- [Michael Nygard: Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) · Decision: Context, Decision, Status, Consequences; conservar decisiones sustituidas y referencia a reemplazo · versión: Artículo original de 15-11-2011, leído el 29-10-2026. Su ADR de ejemplo marcado Accepted no constituye aprobación de ninguna propuesta del proyecto · comprobado: 2026-10-29

Partida: `28678d93247baf160174932654bf7605ccc3f5e980e0362e158c4f388a1daa6b` · propuesta: `13c99a94a5dc254d53715e973da11fa3702530a0d248d1080fc3f54bd11cebbc`

## AI-GSI-B3-T06-019

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación y clave B; contraste de documentación ya preciso. Ampliar verificación y mantenimiento del procedimiento.

### Antes

¿Qué documentación sirve a operación para incidencias, copias y recuperación?

- A. Catálogo funcional para usuarios finales
- B. Runbook o manual de explotación **(correcta)**
- C. Registro de decisiones arquitectónicas sin procedimientos
- D. Referencia de sintaxis de la API

Explicación: El manual operativo debe permitir ejecutar procedimientos de explotación.

### Propuesta

¿Qué documentación sirve a operación para incidencias, copias y recuperación?

- A. Catálogo funcional para usuarios finales
- B. Runbook o manual de explotación **(correcta)**
- C. Registro de decisiones arquitectónicas sin procedimientos
- D. Referencia de sintaxis de la API

Explicación: El runbook o manual de explotación recoge procedimientos operativos concretos: pasos, condiciones previas, permisos, verificación del resultado y respuesta a errores. Debe estar actualizado y ser utilizable por operación. Puede complementarse con diagnóstico y escalado; no sustituye comprobar que una copia puede restaurarse o que el procedimiento funciona. Aquí se pregunta por instrucciones de explotación, no por la nomenclatura de toda organización.

- Error A: El catálogo funcional explica capacidades al usuario, sin detallar necesariamente recuperación y operación.
- Error C: El registro conserva decisiones y motivos; al carecer de procedimientos no guía la actuación operativa planteada.
- Error D: La sintaxis de API orienta llamadas e integración, sin constituir por sí misma procedimientos de copias y recuperación.

- [AWS Well-Architected: Use runbooks to perform procedures](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/ops_ready_to_support_use_runbooks.html) · OPS07-BP03: definición, resultado, herramientas/permisos, manejo de errores y actualización de procedimientos · versión: Página pública leída el 29-10-2026, ruta latest sin atribuirle una edición numerada. Un runbook documenta procedimientos; un playbook diagnóstico puede complementarlo, sin nomenclatura universal rígida · comprobado: 2026-10-29

Partida: `1d8605d3e2dc50f045ee3960403413ecd22685472060d3ef3fd4c5079ce8655b` · propuesta: `7e47a06ae24c62808d453a5816da1126f1aa66d438b58fe1df0d95d5088ff5fd`

## AI-GSI-B3-T07-001

Decisión: pending_review · acción: revise.

Motivo: Conservar evidencia de presencia y clave A; distractores de inferencias excesivas próximas a cobertura y equivalencia.

### Antes

¿Qué pueden demostrar las pruebas sobre defectos?

- A. Su presencia, sin garantizar su ausencia **(correcta)**
- B. Que no hace falta analizar riesgos
- C. Que el sistema satisface cualquier necesidad posible
- D. La ausencia absoluta en todos los escenarios

Explicación: El testing reduce incertidumbre, pero no prueba corrección universal.

### Propuesta

¿Qué pueden demostrar las pruebas sobre defectos?

- A. Pueden revelar defectos sin garantizar que no queden otros sin detectar. **(correcta)**
- B. Cada caso superado demuestra corrección de todos los escenarios equivalentes.
- C. La ausencia de fallos observados certifica cualquier uso futuro del sistema.
- D. Cubrir todos los requisitos escritos descarta necesidades de usuario no previstas.

Explicación: Un fallo observado puede revelar un defecto. Que los casos ejecutados pasen no garantiza que no queden defectos en otros escenarios. La evidencia de pruebas debe interpretarse dentro de su alcance; no equivale a una demostración formal de corrección.

- Error B: Superar un caso no demuestra por sí solo todos los escenarios que se consideren semejantes.
- Error C: Los usos futuros pueden incluir situaciones no cubiertas por las pruebas ejecutadas.
- Error D: Los requisitos escritos pueden omitir necesidades; cobertura no demuestra adecuación universal.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · §1.3 principios 1 y 5: evidencia de defectos y tests wear out; §2.2.3 regresión útil · versión: v4.0.1 de 15-09-2024 según portada/pie; PDF de 78 páginas leído textualmente el 29-10-2026. El parámetro de descarga conserva un título web v4.0, pero el documento es v4.0.1 · comprobado: 2026-10-29

Partida: `ad8b11d62a4e10df54271baad035a6b2ff80689cd5f49d4b749c013e45f5cbd4` · propuesta: `2fb668db616273104f528ea54dcad4249dd70d810d806d085956f3a2e4fb77f4`

## AI-GSI-B3-T07-002

Decisión: pending_review · acción: revise.

Motivo: Conservar evolución de pruebas y clave B; principio tests wear out sin prohibir regresión ni declarar caducidad por uso.

### Antes

¿Por qué se revisan y renuevan casos de prueba?

- A. Porque nunca deben repetirse pruebas de regresión
- B. Repetir siempre los mismos puede dejar de descubrir nuevos defectos **(correcta)**
- C. Porque una prueba solo es válida una vez
- D. Porque los requisitos dejan de importar

Explicación: La paradoja del pesticida aconseja evolucionar pruebas sin abandonar regresión útil.

### Propuesta

¿Cómo se evita que una suite deje de descubrir defectos nuevos sin perder la regresión útil?

- A. Sustituir toda regresión en cada ejecución para que nunca se repita un caso.
- B. Ampliar y ajustar casos y datos para nuevos riesgos, conservando regresión útil. **(correcta)**
- C. Considerar inválida cualquier prueba tras su primera ejecución satisfactoria.
- D. Mantener idénticos casos y datos aunque cambien requisitos y riesgos.

Explicación: Los casos y datos necesitan evolucionar para descubrir defectos nuevos. Esto complementa la repetición de regresión útil, que detecta efectos adversos de cambios. Renovar no significa desechar automáticamente las comprobaciones que siguen aportando evidencia.

- Error A: La regresión útil requiere repetición; el principio no ordena sustituirla toda.
- Error C: Una ejecución satisfactoria no invalida el caso para detectar una regresión posterior.
- Error D: Congelar el conjunto puede dejar sin cubrir riesgos o comportamientos nuevos.

- [ISTQB: Certified Tester Foundation Level Syllabus](https://istqb.org/?download_id=3345&sdm_process_download=1) · §1.3 principios 1 y 5: evidencia de defectos y tests wear out; §2.2.3 regresión útil · versión: v4.0.1 de 15-09-2024 según portada/pie; PDF de 78 páginas leído textualmente el 29-10-2026. El parámetro de descarga conserva un título web v4.0, pero el documento es v4.0.1 · comprobado: 2026-10-29

Partida: `2daa4aba730f35118fecd435fe1e2264752f4f489b30f13e83a1d386f8beaea4` · propuesta: `67a1b49521db502e7ab1613e268e0c713c3a233bc43a0450377670ddc7436d0c`

## AI-GSI-B3-T07-005

Decisión: pending_review · acción: revise.

Motivo: Conservar interacción entre componentes y clave D; microcaso de contrato y alcance para distinguir niveles próximos.

### Antes

¿Qué nivel examina interacción entre componentes?

- A. Unidad aislada exclusivamente
- B. Inspección física exclusivamente
- C. Aceptación contractual exclusivamente
- D. Integración **(correcta)**

Explicación: Integración atiende interfaces e interacciones entre unidades.

### Propuesta

Dos componentes pasan sus pruebas aisladas. Al conectarlos se comprueba su intercambio de fechas por una interfaz, sin ejecutar el resto del sistema. ¿Qué nivel se está probando?

- A. Pruebas de un componente con el otro sustituido por un doble.
- B. Pruebas del sistema completo mediante un recorrido de usuario de extremo a extremo.
- C. Pruebas de aceptación de negocio con los usuarios destinatarios.
- D. Pruebas de integración de componentes sobre su interfaz e intercambio de datos. **(correcta)**

Explicación: El objeto de esta prueba es la interacción técnica entre dos componentes reales y su contrato de intercambio. Corresponde a integración de componentes. Probarlos por separado no verifica que formatos y supuestos coincidan al conectarlos. No se ejecuta aquí todo el sistema ni se evalúa aceptación de negocio.

- Error A: Sustituir al colaborador por un doble puede ocultar el desacuerdo entre los dos componentes reales.
- Error B: El caso limita el alcance a dos componentes; no describe un recorrido del sistema completo.
- Error C: La aceptación valora adecuación al negocio; aquí se verifica una interfaz técnica concreta.

- [Microsoft Engineering Fundamentals Playbook: Integration Testing](https://microsoft.github.io/code-with-engineering-playbook/automated-testing/integration-testing/) · Integration Testing; Why Integration Testing; Integration Testing Design Blocks: interacciones técnicas frente a aceptación de negocio · versión: Última actualización 10-12-2024 según pie; texto público leído el 29-10-2026. La clasificación se delimita por objetivo y alcance, sin imponer una pirámide fija · comprobado: 2026-10-29

Partida: `ad7321610208e848b0a534edb0c59dd4e86cb2208e68ca805088b95820ec4c07` · propuesta: `c49dbc1f91d31b650307a72717b1fbe94a313fa6181b4566157de21bb32c4118`
