# GSI-EDITORIAL-040 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `f9787144992044b7f6b71b3609cab74a9dcc61a6ec5178d4cdb583398ed3d888`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P16-027

Decisión: pending_review · acción: revise.

Motivo: Conservar integración en producto cerrado y clave B; contrastar tres políticas de licencia y atribución, sin suponer ausencia de condiciones.

### Antes

Una organización integra una biblioteca permisiva en un producto cerrado. ¿Qué conclusión es prudente?

- A. Es imposible con cualquier licencia permisiva.
- B. Puede ser posible, pero deben respetarse exactamente la licencia, avisos y demás obligaciones aplicables. **(correcta)**
- C. La biblioteca pasa automáticamente a dominio público.
- D. No hace falta conservar evidencia de licencia.

Explicación: Permisiva facilita integración, pero no elimina obligaciones.

### Propuesta

Una organización integra una biblioteca permisiva en un producto cerrado. ¿Qué conclusión es prudente?

- A. Debe relicenciar el producto completo por incorporar esa biblioteca.
- B. Puede integrarla respetando sus términos y los avisos exigibles. **(correcta)**
- C. Basta citar el nombre de la biblioteca sin conservar su licencia.
- D. Puede sustituir los avisos de terceros por el copyright del producto.

Explicación: Una licencia permisiva puede permitir integrar la biblioteca en un producto cerrado. Hay que identificar el texto aplicable y cumplir sus condiciones; por ejemplo, MIT conserva copyright y permiso, y Apache-2.0 establece reglas de redistribución. La integración no elimina esas obligaciones.

- Error A: La mera incorporación de una biblioteca permisiva no impone por sí sola su licencia a todo el producto. Deben examinarse su texto y las otras licencias implicadas.
- Error C: Mencionar el nombre no sustituye los textos y avisos que la licencia concreta exige conservar.
- Error D: El copyright del producto no reemplaza los avisos exigidos sobre código de terceros; pueden coexistir distintos titulares.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `48e06ce416e73d49ff9f3fdf9004c6925d14fcf4a55a30ec655a4372b95df6ae` · propuesta: `398d533b3076064d1cd5c141b4eb68bf0104bcb45f4e13837ae198122e67c41f`

## MAN-GSI-P16-028

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación del error y clave D; alternativas paralelas dentro del cumplimiento, con las otras tres prácticas defendibles.

### Antes

¿Qué error debe evitarse con licencias permisivas?

- A. Reconocer que puede existir atribución.
- B. Mantener inventario de dependencias.
- C. Revisar patentes cuando proceda.
- D. Interpretar “permisiva” como “puedo borrar copyright y condiciones”. **(correcta)**

Explicación: Permisiva no significa ausencia de condiciones.

### Propuesta

¿Qué error debe evitarse con licencias permisivas?

- A. Identificar los avisos que requiere la versión de la licencia.
- B. Conservar evidencia del componente y la licencia que le aplica.
- C. Examinar las condiciones de patente cuando el texto las incluya.
- D. Suprimir los avisos de terceros por tratarse de código permisivo. **(correcta)**

Explicación: Permisiva no significa libre de condiciones. MIT, BSD-3-Clause y Apache-2.0 permiten amplios usos, pero mantienen requisitos concretos de redistribución. Borrar los avisos exigidos confunde amplitud de permisos con inexistencia de obligaciones.

- Error A: Identificar qué avisos exige el texto aplicable es una medida pertinente para cumplirlo; no es el error solicitado.
- Error B: Guardar evidencia permite vincular el componente a su licencia y revisar la distribución; no autoriza borrar avisos ni supone un error.
- Error C: Revisar una cláusula de patente cuando exista es pertinente. Apache-2.0 tiene una concesión expresa limitada, distinta de afirmar cobertura universal.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1 y 2 para fuente/binario; condición 3 sobre promoción con nombres · versión: BSD de tres cláusulas; no se extrapolan sus condiciones a todas las variantes BSD · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `f3e0cbe98eb60b83ed19992561bce76558785e68f2b050d2378f99c4986183f2` · propuesta: `4426b959a13eaa0b2dac1e258c9b004f00f1995f19e736cc33362241477cf3bd`

## MAN-GSI-P16-029

Decisión: pending_review · acción: revise.

Motivo: Mantener concepto, clave D y cuatro alternativas ya próximas; precisar que se pide documentación que cubra la relación distribuido/licencias/avisos, no cualquier ayuda parcial.

### Antes

¿Qué documento interno ayuda a cumplir avisos de terceros?

- A. Un informe de vulnerabilidades sin inventario de componentes, versiones, titulares, licencias ni obligaciones de atribución.
- B. Una lista de repositorios de origen que omite qué versión se distribuye y los textos o avisos aplicables a cada componente.
- C. Un catálogo de nombres de licencias sin relacionarlas con componentes concretos ni conservar sus textos y avisos requeridos.
- D. Un inventario de componentes y sus licencias, acompañado de ficheros NOTICE/licencias cuando proceda. **(correcta)**

Explicación: La trazabilidad de componentes/licencias facilita atribución y cumplimiento.

### Propuesta

¿Qué documentación cubre la relación entre los componentes distribuidos, sus licencias y los avisos de terceros aplicables?

- A. Un informe de vulnerabilidades sin inventario de componentes, versiones, titulares, licencias ni obligaciones de atribución.
- B. Una lista de repositorios de origen que omite qué versión se distribuye y los textos o avisos aplicables a cada componente.
- C. Un catálogo de nombres de licencias sin relacionarlas con componentes concretos ni conservar sus textos y avisos requeridos.
- D. Un inventario de componentes y sus licencias, acompañado de ficheros NOTICE/licencias cuando proceda. **(correcta)**

Explicación: Un inventario que vincula los componentes distribuidos con sus licencias, textos y avisos permite preparar la documentación de terceros. Debe identificar la versión realmente entregada y los requisitos aplicables; el fichero NOTICE se incluye cuando proceda, no por una regla universal para toda licencia.

- Error A: Un informe de vulnerabilidades sirve a seguridad, pero sin componentes, versiones y licencias no cubre la trazabilidad de avisos pedida.
- Error B: Los repositorios de origen aportan procedencia, pero sin la versión distribuida ni los textos y avisos no permiten verificar las obligaciones de esa entrega.
- Error C: Un catálogo de nombres sin relación con componentes ni conservación de textos y avisos no cubre la documentación de terceros de la distribución.

- [SPDX: Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.1 nombre; 7.3 versión; 7.7 descarga; 7.13 licencia concluida; 7.15 declarada; 7.16 comentarios, incluida incertidumbre NOASSERTION · versión: Especificación SPDX v2.3.1; la ruta /v2.3/ redirige a esta versión. Se identifica el documento efectivamente leído · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `2e80bf820f9f93c88bee9cfc48aef2c41a41cc608939412bafa71dc64587c2f7` · propuesta: `07b0b9cccd7c7f15b3e95e55af33ae1be89c060f6e91a92d25996736abdb5f6e`

## MAN-GSI-P16-030

Decisión: pending_review · acción: revise.

Motivo: Mantener uso comercial y clave B; concretar BSD-3-Clause y sustituir respuestas extremas por confusiones de precio, titularidad y extensión de licencia.

### Antes

¿Qué es más correcto sobre el uso comercial bajo MIT/BSD/Apache-2.0?

- A. Está prohibido por definición.
- B. Generalmente está permitido conforme a sus términos. **(correcta)**
- C. Solo lo permite Apache-2.0.
- D. Convierte automáticamente la licencia en propietaria.

Explicación: Las licencias permisivas permiten ampliamente explotación comercial.

### Propuesta

¿Qué afirmación es correcta sobre el uso comercial de código bajo MIT, BSD-3-Clause o Apache-2.0?

- A. El cobro por las copias requiere convertir antes el código a dominio público.
- B. El uso comercial es posible cumpliendo los términos de cada licencia. **(correcta)**
- C. La venta de copias obliga a sustituir la licencia recibida por una propietaria.
- D. La integración comercial exige publicar todo el producto con la misma licencia.

Explicación: MIT, BSD-3-Clause y Apache-2.0 permiten explotación comercial bajo sus condiciones. Cobrar o integrar código no extingue la licencia recibida ni impone por ese solo hecho publicar todo el producto con una licencia uniforme. Deben conservarse los avisos y cumplirse las reglas que correspondan.

- Error A: El permiso comercial se concede mediante la licencia; no exige una renuncia previa al copyright ni el paso a dominio público.
- Error C: Vender copias no transforma automáticamente los términos del código recibido ni permite eliminar sus condiciones.
- Error D: Estas licencias permisivas no obligan por el mero uso comercial a aplicar su licencia al producto completo; otras dependencias pueden aportar condiciones distintas.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1 y 2 para fuente/binario; condición 3 sobre promoción con nombres · versión: BSD de tres cláusulas; no se extrapolan sus condiciones a todas las variantes BSD · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `f5cdd0a7c52932b21a8bbe96f6e711db9806e9be5c8f9ee2ec563157c67cc4c1` · propuesta: `4d21ed52b3b7b76c9baaa1852b557536fc55b631014d2c767f26d8e1d88c6751`

## MAN-GSI-P16-032

Decisión: pending_review · acción: revise.

Motivo: Conservar flexibilidad de combinación y clave C; distractores sobre obligaciones y compatibilidad, sin garantía de patentes de terceros ajenas a la cuestión.

### Antes

¿Qué ventaja organizativa suele aportar una licencia permisiva?

- A. Eliminar cualquier obligación de atribución, conservación de avisos o condiciones de redistribución del código recibido.
- B. Conceder automáticamente todas las patentes de cualquier tercero relacionadas con el producto, aunque no intervenga en la licencia.
- C. Menor fricción para combinar código con otros modelos de licencia, aunque sigue siendo necesario revisar compatibilidad. **(correcta)**
- D. Garantizar compatibilidad jurídica con cualquier otra licencia por el mero hecho de ser permisiva, sin revisar textos ni distribución.

Explicación: La permisividad reduce algunas restricciones de redistribución, no otros riesgos técnicos/operativos.

### Propuesta

¿Qué ventaja organizativa suele aportar una licencia permisiva?

- A. Evitar comprobar avisos de terceros al combinar módulos bajo otras licencias.
- B. Resolver la compatibilidad a partir de la familia sin leer el texto aplicable.
- C. Facilitar combinaciones con otras licencias, sujetas a comprobar condiciones. **(correcta)**
- D. Sustituir por la licencia propia las condiciones del código que se incorpora.

Explicación: La ausencia de una obligación general de copyleft facilita combinar código permisivo con distintos modelos de licencia. Esa flexibilidad no garantiza cualquier combinación: siguen siendo relevantes los textos aplicables, las otras licencias y cómo se realiza la distribución.

- Error A: Los avisos exigibles siguen siendo relevantes aunque no se imponga copyleft al conjunto.
- Error B: La etiqueta de familia orienta, pero no sustituye la comprobación de condiciones y compatibilidad de los textos concretos.
- Error D: La posibilidad de incorporar código no permite borrar las condiciones del código ajeno y sustituirlas sin más por las propias.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source; 6 Non-Source Forms · versión: GNU GPL v3 de 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `bbb3fd89cac7c4d1dcd5abb83c40d3f5783d2b3b3d801c8388b8db8db3d4acd3` · propuesta: `dfb51331b78b0f0182022f72b13d83df55126b598dc819794411213141a76322`

## MAN-GSI-P16-033

Decisión: pending_review · acción: revise.

Motivo: Mantener buena práctica al incorporar BSD y clave A; convertir incorporación genérica en control de una versión concreta, con errores próximos de trazabilidad.

### Antes

¿Cuál es la mejor práctica al incorporar una librería BSD?

- A. Registrar versión, origen, licencia y avisos que deban conservarse. **(correcta)**
- B. Copiarla y eliminar cualquier referencia al origen.
- C. Confiar en que el nombre “BSD” basta sin leer texto/licencia exacta.
- D. Usar siempre la versión más nueva sin pruebas.

Explicación: La gobernanza de componentes debe registrar la licencia concreta y su evidencia.

### Propuesta

Una biblioteca BSD se incorpora a una entrega. ¿Qué registro permite comprobar sus obligaciones de licencia?

- A. Registrar versión, origen, texto de licencia y avisos aplicables. **(correcta)**
- B. Registrar la familia BSD y omitir la variante del componente.
- C. Usar los avisos de otra versión sin contrastar la incorporada.
- D. Citar el proyecto de origen en lugar de conservar los avisos.

Explicación: El registro debe permitir saber qué versión se incorpora, de dónde procede y qué texto y avisos le corresponden. BSD-2-Clause y BSD-3-Clause no son intercambiables en todos sus detalles. La información ha de cotejarse con el componente concreto, no deducirse solo del nombre de familia.

- Error B: La familia BSD reúne variantes con diferencias; registrar solo esa etiqueta no identifica todas las condiciones aplicables.
- Error C: Una versión anterior o posterior puede tener cambios de licencia, titulares o avisos; su documentación no debe trasladarse sin contraste.
- Error D: Citar la procedencia aporta información, pero no reemplaza conservar los avisos, condiciones y disclaimer exigidos para fuente o binario.

- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1 y 2 para fuente/binario; condición 3 sobre promoción con nombres · versión: BSD de tres cláusulas; no se extrapolan sus condiciones a todas las variantes BSD · comprobado: 2026-10-28
- [OSI: BSD-2-Clause](https://opensource.org/license/bsd-2-clause) · Redistribution and use; condiciones 1 y 2 de conservación de avisos, condiciones y disclaimer · versión: BSD de dos cláusulas, identificador BSD-2-Clause; se contrasta con la variante de tres cláusulas · comprobado: 2026-10-28
- [SPDX: Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.1 nombre; 7.3 versión; 7.7 descarga; 7.13 licencia concluida; 7.15 declarada; 7.16 comentarios, incluida incertidumbre NOASSERTION · versión: Especificación SPDX v2.3.1; la ruta /v2.3/ redirige a esta versión. Se identifica el documento efectivamente leído · comprobado: 2026-10-28

Partida: `a526d0a2ee8629be216d6cdee1f26de429fa526271a472ed2209d1f98877bd17` · propuesta: `290878782ed1eefc8e48249ad81c039fc563c3ba82ab3c19e0e9f129dab37cd8`

## MAN-GSI-P16-034

Decisión: pending_review · acción: revise.

Motivo: Conservar afirmación falsa y clave C; cuatro afirmaciones comparables sobre alcance de la licencia, sin relleno.

### Antes

¿Qué afirmación sobre las licencias permisivas es falsa?

- A. Pueden permitir integración en software propietario.
- B. Suelen exigir mantener determinadas notas de copyright/licencia.
- C. Obligan necesariamente a que todo el programa combinado se distribuya bajo la misma licencia. **(correcta)**
- D. Deben analizarse por su texto y versión concreta.

Explicación: El copyleft de la obra combinada no es el rasgo general de las permisivas.

### Propuesta

¿Qué afirmación sobre las licencias permisivas es falsa?

- A. Pueden permitir integrar código en un producto con partes propietarias.
- B. Pueden exigir conservar avisos aunque permitan ampliar la reutilización.
- C. Exigen licenciar el programa combinado entero con su misma licencia. **(correcta)**
- D. Sus condiciones se determinan por el texto y la versión aplicables.

Explicación: Imponer necesariamente la misma licencia a todo el programa combinado no es una característica de las licencias permisivas. Estas pueden permitir integración con partes propietarias y conservar condiciones sobre el código recibido. La clasificación no sustituye leer la licencia aplicable.

- Error A: La integración en productos con partes propietarias puede ser compatible con licencias permisivas, respetando sus condiciones y las de las demás partes.
- Error B: Amplitud de permisos y conservación de avisos son compatibles; MIT, BSD y Apache ofrecen ejemplos concretos.
- Error D: El texto y la versión determinan los permisos y condiciones; la etiqueta permisiva no elimina ese análisis.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1 y 2 para fuente/binario; condición 3 sobre promoción con nombres · versión: BSD de tres cláusulas; no se extrapolan sus condiciones a todas las variantes BSD · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `d3fa73741916cb1b3c220b66cbee66ba07f65ee69f551aeba1702056fe73f2ef` · propuesta: `c9b4cf5056e328af339b379093a68fbdfadc7b43433f82d82e26a92e449c35d8`

## MAN-GSI-P16-035

Decisión: pending_review · acción: revise.

Motivo: Mantener documentación de componentes en contratación y clave D; concretar la revisión solicitada sin inventar un mandato legal universal de SBOM.

### Antes

En un expediente de contratación, ¿qué conviene exigir respecto a componentes permisivos?

- A. Solo el nombre comercial de la aplicación.
- B. Que no exista ningún componente de terceros.
- C. Que todos los componentes sean GPL.
- D. Inventario/SBOM y cumplimiento de atribuciones y condiciones. **(correcta)**

Explicación: La trazabilidad de terceros permite gestionar obligaciones y vulnerabilidades.

### Propuesta

Al revisar las licencias de terceros de una entrega contratada, ¿qué documentación permite contrastar sus obligaciones?

- A. El catálogo comercial y los nombres de productos suministrados.
- B. El inventario de componentes con sus vulnerabilidades conocidas.
- C. La relación de proyectos de origen sin las versiones entregadas.
- D. El inventario de versiones, licencias y avisos exigibles cotejados. **(correcta)**

Explicación: Para revisar cumplimiento de licencias de terceros conviene vincular lo entregado a versiones, licencias y avisos comprobados. Un inventario o SBOM sirve de apoyo, acompañado de textos y atribuciones exigibles; su mera existencia no demuestra cumplimiento. Es un criterio de documentación, no una obligación legal general afirmada para cualquier expediente.

- Error A: El nombre comercial permite identificar productos, pero no describe sus componentes ni sus condiciones de redistribución.
- Error B: Las vulnerabilidades son útiles para seguridad, pero no sustituyen licencias, textos y avisos aplicables.
- Error C: Los proyectos de origen sin la versión realmente entregada no bastan para contrastar las condiciones de esa entrega.

- [SPDX: Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.1 nombre; 7.3 versión; 7.7 descarga; 7.13 licencia concluida; 7.15 declarada; 7.16 comentarios, incluida incertidumbre NOASSERTION · versión: Especificación SPDX v2.3.1; la ruta /v2.3/ redirige a esta versión. Se identifica el documento efectivamente leído · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28
- [Comisión Europea, OSOR: Public Procurement of Open Source Software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Public Buyer’s Checklist; Quality and Vendor Evaluation, trazabilidad de decisiones, recursos y sostenibilidad · versión: Guía pública consultada, sin convertir buenas prácticas de documentación en obligación legal española general · comprobado: 2026-10-28

Partida: `3c67dd2303006e7c5f6c64dc4fb0dd5e9ae454ba6e24d93a836db4ff8eb53063` · propuesta: `8d279e30eb13c40a004906c871912a6ab6e522d9499a14d2a47a6b4824cc9e3e`

## MAN-GSI-P16-036

Decisión: pending_review · acción: revise.

Motivo: Mantener SBOM y clave B; sustituir siglas ajenas por documentos técnicos próximos, sin equiparar presencia de SBOM a validación de licencias.

### Antes

¿Qué concepto se relaciona directamente con saber qué licencias llevan las dependencias?

- A. RPO.
- B. SBOM e inventario de componentes. **(correcta)**
- C. BGP.
- D. CPI de valor ganado.

Explicación: Una SBOM permite inventariar componentes; debe complementarse con metadatos/licencias fiables.

### Propuesta

¿Qué concepto se relaciona directamente con saber qué licencias llevan las dependencias?

- A. Un registro de vulnerabilidades con severidad y tratamiento.
- B. Un inventario SBOM con componentes y datos de licencia cotejados. **(correcta)**
- C. Un inventario de equipos con ubicación, custodio y amortización.
- D. Un catálogo de interfaces con operaciones, parámetros y errores.

Explicación: Un SBOM organiza información de componentes de software y puede recoger datos de licencia. Para conocer las condiciones de las dependencias hay que cotejar esos datos con los textos aplicables. SPDX distingue licencia declarada y concluida y permite expresar incertidumbre; un inventario no verifica por sí solo todas las obligaciones.

- Error A: El registro de vulnerabilidades describe riesgos y tratamiento, no identifica por sí mismo las condiciones de licencia de las dependencias.
- Error C: El inventario de equipos documenta activos físicos; esos datos no sustituyen la composición del software y sus licencias.
- Error D: El catálogo de interfaces explica contratos técnicos de uso; no equivale al inventario de componentes y licencias.

- [SPDX: Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.1 nombre; 7.3 versión; 7.7 descarga; 7.13 licencia concluida; 7.15 declarada; 7.16 comentarios, incluida incertidumbre NOASSERTION · versión: Especificación SPDX v2.3.1; la ruta /v2.3/ redirige a esta versión. Se identifica el documento efectivamente leído · comprobado: 2026-10-28

Partida: `cda61c108a7566736f94c8f6a754ac703301577a0019a3db50f5a5b4061b1b4e` · propuesta: `8dfbcc1877dac7ca468952ba68fd42da2bc38f182aca0b370b95f3aef440bdad`

## MAN-GSI-P16-037

Decisión: pending_review · acción: revise.

Motivo: Mantener necesidad de texto y versión, clave B; contrastar precio, patentes y procedencia sin afirmaciones sobre invalidez territorial.

### Antes

¿Por qué no basta con saber que una licencia es “permisiva”?

- A. Porque todas son jurídicamente inválidas en Europa.
- B. Porque hay que conocer la licencia y versión exactas y sus requisitos concretos. **(correcta)**
- C. Porque ninguna permite redistribución.
- D. Porque todas incluyen idéntica cláusula de patentes.

Explicación: Las familias ayudan a clasificar, pero el cumplimiento depende del texto concreto.

### Propuesta

¿Por qué no basta con saber que una licencia es “permisiva”?

- A. Porque la gratuidad de descarga determina sus condiciones de uso.
- B. Porque el texto y la versión fijan los requisitos de cada licencia. **(correcta)**
- C. Porque compartir familia implica iguales permisos sobre patentes.
- D. Porque los avisos del repositorio sustituyen la licencia del código.

Explicación: Permisiva es una clasificación general. El texto concreto determina obligaciones sobre avisos, modificación, patentes u otras materias. MIT, BSD-3-Clause y Apache-2.0 no tienen cláusulas idénticas. Debe identificarse la licencia aplicable al componente y la versión de esa licencia cuando exista.

- Error A: El precio de descarga no fija los derechos de uso, modificación o redistribución.
- Error C: La familia no garantiza igualdad de cláusulas de patente; Apache-2.0 incluye una concesión expresa con alcance y terminación específicos.
- Error D: La información del repositorio puede aportar evidencia, pero no reemplaza los términos aplicables al código ni sus avisos exigidos.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1 y 2 para fuente/binario; condición 3 sobre promoción con nombres · versión: BSD de tres cláusulas; no se extrapolan sus condiciones a todas las variantes BSD · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `7517037070c3329b768199175a2d74925ab460dedd1f219d10050cf1ec7c44d1` · propuesta: `d17ad14db75ce63bca6825b917f02f120ab6f367c4d033e79753c8f2cfba7e9a`

## MAN-GSI-P16-038

Decisión: pending_review · acción: revise.

Motivo: Mantener clasificación y clave A; comparar las mismas dos licencias en las cuatro opciones, con matiz sobre agregación independiente.

### Antes

¿Cuál de estas parejas está bien clasificada?

- A. MIT → permisiva; GPL → copyleft. **(correcta)**
- B. MIT → copyleft fuerte; GPL → permisiva.
- C. Apache-2.0 → dominio público; BSD → DRM.
- D. BSD → licencia propietaria; MIT → AGPL.

Explicación: La distinción permisiva/copyleft es básica.

### Propuesta

¿Cuál de estas parejas está bien clasificada?

- A. MIT: permisiva; GPL v3: copyleft fuerte. **(correcta)**
- B. MIT: copyleft fuerte; GPL v3: permisiva.
- C. MIT: permisiva; GPL v3: permisiva.
- D. MIT: copyleft débil; GPL v3: copyleft débil.

Explicación: MIT permite amplia reutilización bajo sus avisos sin imponer un copyleft general. GPL v3 aplica copyleft al programa y trabajos cubiertos en los supuestos regulados, por lo que se clasifica como fuerte. Eso no significa que alcance automáticamente a obras independientes en una mera agregación.

- Error B: Invierte las familias: MIT no impone copyleft fuerte y GPL v3 no es permisiva.
- Error C: Identifica bien MIT, pero elimina el copyleft de GPL v3 y sus condiciones sobre distribución de trabajos cubiertos.
- Error D: MIT es permisiva, no copyleft débil; GPL v3 se clasifica como fuerte, con su alcance y excepciones definidos.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source; 6 Non-Source Forms · versión: GNU GPL v3 de 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `205d616dfc46f25370df239f9b8820a8023394fe71d93321dcc4397a15dcbe5a` · propuesta: `c9339e29418ce852bbca599cec1fb4fa0f587dedcb08901296e87036da45242e`

## MAN-GSI-P16-039

Decisión: pending_review · acción: revise.

Motivo: Conservar caso Apache-2.0 y clave C; comparar incumplimientos parciales plausibles, con alcance preciso de fuente, modificaciones y NOTICE.

### Antes

Una empresa modifica código Apache-2.0 y lo distribuye dentro de un producto. ¿Qué enfoque es correcto?

- A. Eliminar todas las referencias a terceros porque Apache-2.0 transfiere al distribuidor la autoría exclusiva del código incorporado.
- B. Publicar obligatoriamente el producto completo bajo AGPL, aunque los demás componentes sean independientes y usen otras licencias compatibles.
- C. Revisar y cumplir las condiciones de Apache-2.0, incluidos avisos y las reglas aplicables a modificaciones/NOTICE. **(correcta)**
- D. Tratar Apache-2.0 como una licencia sin condiciones y redistribuir el código sin conservar avisos, atribuciones ni documentación aplicable.

Explicación: Apache-2.0 es permisiva, pero impone condiciones de redistribución.

### Propuesta

Una empresa distribuye fuentes Apache-2.0 modificados; el original incluye NOTICE. Además de entregar la licencia, ¿qué debe hacer?

- A. Entregar la licencia, pero omitir qué ficheros se han modificado.
- B. Conservar el NOTICE y sustituir con él la copia de la licencia.
- C. Conservar avisos exigibles y señalar los ficheros modificados. **(correcta)**
- D. Marcar cambios y retirar atribuciones ajenas de los fuentes.

Explicación: Apache-2.0 exige dar copia de la licencia, avisos destacados en los ficheros modificados y conservar las atribuciones pertinentes en la forma fuente de las obras derivadas. Si el original contiene NOTICE, se reproducen sus atribuciones pertinentes por las vías de la sección 4d. NOTICE no sustituye la licencia ni obliga por sí solo a publicar todo el producto.

- Error A: Dar copia de la licencia no cubre la obligación adicional de avisos destacados que indiquen los cambios en los ficheros modificados.
- Error B: NOTICE aporta atribuciones cuando procede, pero no reemplaza la copia de la licencia que exige la sección 4a.
- Error D: Señalar cambios no permite retirar los avisos pertinentes de copyright, patente, marcas y atribución que deben conservarse en la forma fuente de las obras derivadas.

- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `0919b35b590ad4cf3813fb8bc7852f9d551ad7ff8035bb780faf96e788ddb1bf` · propuesta: `b56efda5f5c35dab4aab03a1d2c9823e6934900c822cc63a23e22e7f8137fef9`

## MAN-GSI-P16-040

Decisión: pending_review · acción: revise.

Motivo: Mantener síntesis de permisivas y clave D; quitar la referencia al test y aproximar los distractores a permisos, titularidad y condiciones.

### Antes

¿Qué frase resume mejor las permisivas para test?

- A. Significar dominio público y permitir eliminar avisos, atribución y cualquier condición establecida por quien conserva los derechos.
- B. Prohibir el uso comercial, el cobro por distribución y la integración en productos propietarios, aunque se cumplan sus términos.
- C. Imponer copyleft de red a todo servicio que interactúe con el programa, con independencia del texto concreto de la licencia permisiva.
- D. Amplia reutilización no equivale a ausencia de copyright ni de obligaciones. **(correcta)**

Explicación: Es la regla mental más útil para evitar errores.

### Propuesta

¿Qué descripción resume el alcance de una licencia permisiva?

- A. Amplia reutilización mediante la renuncia al copyright del titular.
- B. Integración comercial a cambio de aplicar copyleft al conjunto.
- C. Redistribución condicionada a conceder al autor exclusividad comercial.
- D. Amplia reutilización sujeta a las condiciones que conserve la licencia. **(correcta)**

Explicación: Las licencias permisivas permiten amplios usos y combinaciones manteniendo condiciones concretas. No equivalen a dominio público ni a una autorización sin obligaciones. Se revisa el texto aplicable para conservar los avisos y atender los demás requisitos que correspondan.

- Error A: El titular puede conceder permisos amplios conservando copyright; no tiene que renunciar a él.
- Error B: La posibilidad de integración comercial no supone un copyleft general del conjunto en licencias permisivas.
- Error C: La clasificación permisiva no impone conceder exclusividad comercial al autor como condición general de redistribución.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1 y 2 para fuente/binario; condición 3 sobre promoción con nombres · versión: BSD de tres cláusulas; no se extrapolan sus condiciones a todas las variantes BSD · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `13987d692de4e26ccd1d99e856c80726d0466082f621ed1d72a4f583fdc4ad56` · propuesta: `678713d071e01b91401e19413034707f78db5c1c55971dffa2c1b9804fa98992`

## MAN-GSI-P16-041

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave C; la definición ya acota trabajos sujetos y simplificación. Completar tres explicaciones específicas.

### Antes

¿Qué busca el copyleft, de forma simplificada?

- A. Prohibir cualquier actividad comercial, cobro por distribución o prestación de servicios relacionados con el programa cubierto.
- B. Convertir automáticamente el software en dominio público, extinguiendo autoría, copyright y todas las condiciones de redistribución.
- C. Preservar determinadas libertades y obligaciones al redistribuir el programa o trabajos sujetos a sus condiciones. **(correcta)**
- D. Sustituir el copyright por controles DRM que impiden estudiar, copiar o modificar el programa aunque la licencia conceda esas facultades.

Explicación: Copyleft usa el copyright/licencia para mantener libertades en redistribuciones y derivados según los términos.

### Propuesta

¿Qué busca el copyleft, de forma simplificada?

- A. Prohibir cualquier actividad comercial, cobro por distribución o prestación de servicios relacionados con el programa cubierto.
- B. Convertir automáticamente el software en dominio público, extinguiendo autoría, copyright y todas las condiciones de redistribución.
- C. Preservar determinadas libertades y obligaciones al redistribuir el programa o trabajos sujetos a sus condiciones. **(correcta)**
- D. Sustituir el copyright por controles DRM que impiden estudiar, copiar o modificar el programa aunque la licencia conceda esas facultades.

Explicación: El copyleft utiliza la licencia para preservar libertades y obligaciones al redistribuir el programa o trabajos cubiertos. Su alcance depende del texto y de la relación entre obras. GPL v3, por ejemplo, permite actividad comercial y distingue obras derivadas de una mera agregación con programas independientes.

- Error A: GPL v3 permite cobrar por las copias y ofrecer soporte o garantía remunerados; copyleft no equivale a prohibición comercial.
- Error B: El copyleft se articula mediante derechos y condiciones de licencia; no exige extinguir copyright ni convertir automáticamente la obra a dominio público.
- Error D: El copyleft preserva facultades concedidas por licencia, no las reemplaza por DRM. GPL v3 contiene además reglas sobre medidas técnicas para el ejercicio de derechos de sus usuarios.

- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source; 6 Non-Source Forms · versión: GNU GPL v3 de 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `41821a73dc7daed5fda24476387bad814a94e5c575605354737d1b468903e7a8` · propuesta: `f067bd0269a023ad7241a62cbcefe3c4dc50b476f45d4593fe03eb028f8a5eb1`

## MAN-GSI-P16-042

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la identificación con cuatro licencias reales y clave A; ampliar fundamento y distractores sin alargar nombres convencionales.

### Antes

¿Cuál es una licencia de copyleft fuerte muy conocida?

- A. GNU GPL. **(correcta)**
- B. MIT.
- C. BSD-2-Clause.
- D. Apache-2.0.

Explicación: GPL es la referencia clásica de copyleft fuerte.

### Propuesta

¿Cuál es una licencia de copyleft fuerte muy conocida?

- A. GNU GPL. **(correcta)**
- B. MIT.
- C. BSD-2-Clause.
- D. Apache-2.0.

Explicación: GNU GPL es una referencia de copyleft fuerte: las versiones modificadas y su entrega se someten a las condiciones de la versión aplicable para los trabajos cubiertos. MIT, BSD-2-Clause y Apache-2.0 son licencias permisivas. Esta clasificación no sustituye el análisis del texto ni extiende GPL a cualquier programa independiente.

- Error B: MIT concede permisos amplios con conservación de avisos, sin un copyleft general sobre el programa combinado.
- Error C: BSD-2-Clause exige conservar avisos, condiciones y disclaimer en los supuestos indicados, pero no impone copyleft fuerte.
- Error D: Apache-2.0 permite redistribución bajo condiciones, incluidos cambios y NOTICE cuando corresponda; no exige un copyleft fuerte del producto completo.

- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source; 6 Non-Source Forms · versión: GNU GPL v3 de 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso en copias o partes sustanciales · versión: Identificador MIT; la ficha indica Version N/A, sin inventar número de versión · comprobado: 2026-10-28
- [OSI: BSD-2-Clause](https://opensource.org/license/bsd-2-clause) · Redistribution and use; condiciones 1 y 2 de conservación de avisos, condiciones y disclaimer · versión: BSD de dos cláusulas, identificador BSD-2-Clause; se contrasta con la variante de tres cláusulas · comprobado: 2026-10-28
- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Patent License; 4 Redistribution, apartados a–d; 6 Trademarks · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. NOTICE condicionado a su presencia y atribuciones pertinentes · comprobado: 2026-10-28

Partida: `9596987cf53cdf71f226f0b0713fde46472a5234189a47b57172dc221f4a1d75` · propuesta: `e324b488fdb0fd84d522ebc6f60ebcb9866ae767a384dedc5d95fe08366071f6`

## MAN-GSI-P16-043

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la formulación y clave D: ya delimita mero uso sin conveying. Explicar límites y distinguir AGPL sin transformar el caso.

### Antes

¿Qué afirmación sobre GPL y uso interno es correcta en términos generales?

- A. Ejecutar internamente un programa GPL obliga a publicar en Internet el repositorio completo, aunque no se entregue ninguna copia a terceros.
- B. La GPL prohíbe modificar el programa para uso interno porque cualquier obra derivada debe ser autorizada previamente por todos los autores.
- C. La GPL impide cobrar por distribuir copias o servicios asociados, pues la libertad del software exige necesariamente que sean gratuitos.
- D. El mero uso interno sin distribución/conveying no activa por sí solo las obligaciones de entrega de fuente propias de la distribución. **(correcta)**

Explicación: GNU aclara que ejecutar copias sin distribuir no impone esas obligaciones de distribución.

### Propuesta

¿Qué afirmación sobre GPL y uso interno es correcta en términos generales?

- A. Ejecutar internamente un programa GPL obliga a publicar en Internet el repositorio completo, aunque no se entregue ninguna copia a terceros.
- B. La GPL prohíbe modificar el programa para uso interno porque cualquier obra derivada debe ser autorizada previamente por todos los autores.
- C. La GPL impide cobrar por distribuir copias o servicios asociados, pues la libertad del software exige necesariamente que sean gratuitos.
- D. El mero uso interno sin distribución/conveying no activa por sí solo las obligaciones de entrega de fuente propias de la distribución. **(correcta)**

Explicación: El supuesto excluye entrega de copias a terceros: el mero uso interno no activa por sí solo las obligaciones de fuente asociadas a conveying. GPL v3 permite hacer, ejecutar y propagar trabajos que no se entregan, mientras la licencia siga en vigor. No debe extrapolarse a una entrega real a otra entidad ni a AGPL y su cláusula de interacción remota.

- Error A: GPL v3 no obliga por la mera ejecución interna sin conveying a publicar el repositorio en Internet; no debe confundirse ejecución con distribución.
- Error B: La licencia concede permisos de modificación para uso interno bajo sus términos; no requiere recabar por esa sola modificación una autorización nueva de todos los autores.
- Error C: GPL v3 permite cobrar por copias y servicios. La libertad se refiere a facultades del usuario, no a un precio necesariamente cero.

- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source; 6 Non-Source Forms · versión: GNU GPL v3 de 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28
- [GNU AGPL versión 3, texto en OSI](https://opensource.org/license/agpl-3.0) · 13 Remote Network Interaction: versión modificada y oferta destacada de Corresponding Source a usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. Se distingue interacción remota de entrega de copias y del resto de infraestructura · comprobado: 2026-10-28

Partida: `7913fbc2cc7b73b2d9ce6840dcc2522bce3c6c15f952b26801ca10ed48eb39ec` · propuesta: `5731bba12c9ec5e06e0650798dc45ff06b941f581d1625c77cd8904de74f9865`

## MAN-GSI-P16-045

Decisión: pending_review · acción: revise.

Motivo: Mantener servidor AGPL modificado y clave D; cuatro políticas de entrega comparables, con límites de fuente correspondiente y destinatarios.

### Antes

Una empresa modifica un servidor AGPL y ofrece esa versión modificada a usuarios mediante una aplicación web. ¿Qué idea debe revisar?

- A. Que AGPL permite ocultar siempre las modificaciones si no entrega binarios.
- B. Que la licencia se convierte en MIT.
- C. Que el uso por red elimina cualquier obligación.
- D. La obligación de ofrecer a esos usuarios acceso al código fuente correspondiente de la versión modificada, según AGPL. **(correcta)**

Explicación: La cláusula de red es precisamente el rasgo diferenciador de AGPL.

### Propuesta

Una empresa modifica un servidor AGPL v3 y permite que usuarios interactúen con esa versión por la web. ¿Qué exigencia debe atender?

- A. Ofrecer el fuente solo si también entrega una copia del servidor.
- B. Dar únicamente instrucciones para usar la interfaz del servicio.
- C. Ofrecer el fuente de todos los sistemas independientes de la empresa.
- D. Ofrecer a los usuarios remotos el fuente de la versión modificada. **(correcta)**

Explicación: La sección 13 de AGPL v3 exige que la versión modificada ofrezca de forma destacada a los usuarios que interactúan remotamente acceso al código fuente correspondiente desde un servidor de red, sin cargo y mediante un medio habitual de copia. No depende de entregar binarios ni abarca por ese solo hecho sistemas independientes ajenos a la obra cubierta.

- Error A: La obligación específica del supuesto deriva de la interacción remota con la versión modificada; no queda condicionada a entregar una copia del servidor.
- Error B: La documentación de la interfaz no sustituye el código fuente correspondiente que deben poder obtener los usuarios remotos.
- Error C: El alcance es el código fuente correspondiente de la versión cubierta, no todo sistema independiente de la organización por compartir titular o infraestructura.

- [GNU AGPL versión 3, texto en OSI](https://opensource.org/license/agpl-3.0) · 13 Remote Network Interaction: versión modificada y oferta destacada de Corresponding Source a usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. Se distingue interacción remota de entrega de copias y del resto de infraestructura · comprobado: 2026-10-28

Partida: `81a9c50161bebac942bccf6339555da1c4197da72e493981c2e3a6ae3aa65611` · propuesta: `4f8fe6668d001302e61bae84d2ad6088936617dfd6e3fa7b3439cacb5cadb8e5`

## MAN-GSI-P16-046

Decisión: pending_review · acción: revise.

Motivo: Conservar copyleft débil y clave B; concretar LGPL v3 y límites de enlace, sin afirmar cumplimiento automático por usar biblioteca compartida.

### Antes

¿Qué afirmación describe mejor LGPL?

- A. Es idéntica a MIT.
- B. Es un copyleft más débil pensado para permitir determinados enlaces/usos con software no LGPL bajo condiciones. **(correcta)**
- C. Prohíbe enlazar con software propietario en todos los casos.
- D. Es una licencia de contenidos Creative Commons.

Explicación: LGPL modera el efecto copyleft para bibliotecas y ciertos escenarios de linking.

### Propuesta

¿Qué descripción caracteriza LGPL v3 frente al copyleft fuerte de GPL v3?

- A. Una licencia permisiva que elimina el copyleft de la biblioteca.
- B. Un copyleft que permite ciertos enlaces con otras licencias bajo condiciones. **(correcta)**
- C. Un copyleft que obliga a aplicar LGPL a toda aplicación enlazada.
- D. Una licencia que activa por el mero uso remoto la entrega del fuente.

Explicación: LGPL v3 añade permisos a GPL v3 y se clasifica como copyleft débil. Permite distribuir ciertos trabajos combinados bajo otros términos si se cumplen sus condiciones: avisos, licencias y las vías de recombinación o enlace previstas, entre otras. No basta afirmar que el enlace es dinámico para dar por cumplida toda la licencia.

- Error A: Los permisos adicionales no convierten la biblioteca en código MIT ni eliminan su copyleft y condiciones aplicables.
- Error C: La sección 4 permite términos elegidos para ciertos trabajos combinados sujetos a sus requisitos; no obliga siempre a licenciar toda aplicación bajo LGPL.
- Error D: La exigencia específica por interacción remota de versiones modificadas corresponde a AGPL v3; no define por sí sola LGPL.

- [GNU LGPL versión 3, texto en OSI](https://opensource.org/license/lgpl-3-0) · Introducción y 0 Additional Definitions; 4 Combined Works, condiciones a–e y alternativas de recombinación/reenlace de 4d · versión: GNU LGPL v3, 29-06-2007; incorpora GPL v3 con permisos adicionales. Texto FSF reproducido en OSI · comprobado: 2026-10-28
- [GNU AGPL versión 3, texto en OSI](https://opensource.org/license/agpl-3.0) · 13 Remote Network Interaction: versión modificada y oferta destacada de Corresponding Source a usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. Se distingue interacción remota de entrega de copias y del resto de infraestructura · comprobado: 2026-10-28

Partida: `72c605ba13f2b2d87bd8572ae1fd6e2eabbf9ea4fa836d015e0e93c852616256` · propuesta: `4acb1374e528f9c39e85618425256dd3e1cdc924af67eff2a296f33cb3cda363`

## MAN-GSI-P16-047

Decisión: pending_review · acción: revise.

Motivo: Mantener error copyleft igual a no comercial y clave C; quitar la metarreferencia a errores de examen no respaldada por datos.

### Antes

¿Qué error de examen aparece a menudo con copyleft?

- A. Distinguir distribución de uso interno.
- B. Revisar licencia y versión.
- C. Pensar que copyleft significa “no comercial”. **(correcta)**
- D. Comprobar obligaciones de fuente.

Explicación: Copyleft no prohíbe el comercio; regula libertades/obligaciones.

### Propuesta

¿Qué interpretación del copyleft es incorrecta?

- A. Distinguir las obligaciones de entrega del mero uso sin distribución.
- B. Comprobar la versión y los trabajos cubiertos por las condiciones.
- C. Entender que el copyleft impide vender copias del programa cubierto. **(correcta)**
- D. Examinar cómo se proporciona el fuente cuando la licencia lo exige.

Explicación: Copyleft no significa no comercial. GPL v3 permite vender copias y ofrecer servicios remunerados, manteniendo los derechos del receptor y las obligaciones aplicables. Precio, alcance de la obra cubierta y forma de entrega del fuente son cuestiones distintas que deben revisarse con el texto concreto.

- Error A: Distinguir entrega y mero uso es pertinente: no tienen por sí mismos los mismos efectos en GPL v3.
- Error B: Comprobar versión y alcance evita aplicar obligaciones de una licencia o trabajo a otros que no les corresponden.
- Error D: Verificar las vías de entrega del fuente es necesario cuando se activa esa obligación; no convierte la licencia en no comercial.

- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source; 6 Non-Source Forms · versión: GNU GPL v3 de 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `66c83733b7dd861af88ddef969fe048a1a112ee6c27925829c0b0d6f55899dcb` · propuesta: `bdac7a7d165905c2139cc797c9cbcfa9e90cb14a43b3db3b2881b66458824610`

## MAN-GSI-P16-048

Decisión: pending_review · acción: revise.

Motivo: Mantener titularidad y clave A; cuatro afirmaciones concisas sobre copyright, publicación y cesión, sin pistas por extensión.

### Antes

¿Qué ocurre con el copyright en una obra GPL?

- A. Sigue existiendo; el titular concede derechos bajo condiciones de la licencia. **(correcta)**
- B. Desaparece al aplicar GPL, ya que publicar el código fuente equivale a renunciar a todos los derechos de autor.
- C. Se transfiere automáticamente a la Free Software Foundation, aunque no haya participado como autora o cesionaria.
- D. Pasa al dominio público tras la primera redistribución y las condiciones de copyleft continúan sin apoyarse en copyright.

Explicación: Copyleft se apoya precisamente en el copyright.

### Propuesta

¿Qué ocurre con el copyright en una obra GPL?

- A. El titular conserva derechos y concede permisos con condiciones. **(correcta)**
- B. Publicar el fuente extingue los derechos de autor del programa.
- C. Elegir GPL cede la titularidad del programa a la FSF.
- D. Redistribuir la primera copia convierte el programa en dominio público.

Explicación: Aplicar GPL concede permisos sujetos a condiciones sin extinguir el copyright del programa. El titular conserva sus derechos; usar una licencia escrita por FSF no cede automáticamente la titularidad del programa a esa organización. Publicar el fuente o redistribuir copias tampoco equivale por sí solo a dominio público.

- Error B: Publicar el código fuente no es por sí mismo una renuncia al copyright; GPL regula permisos y condiciones para el trabajo cubierto.
- Error C: La autoría del texto de licencia y la titularidad del programa son distintas. Adoptar GPL no produce una cesión automática a FSF.
- Error D: La redistribución bajo GPL transmite facultades conforme a la licencia, no elimina automáticamente los derechos tras la primera copia.

- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source; 6 Non-Source Forms · versión: GNU GPL v3 de 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `2e27d7a33888cab3e756aec3dced61f254a46ab8d692108df9afb6ba8cd0d847` · propuesta: `09a09d33b3e369d5cfcc34dd29f03262605768b32641b1f436059c352d67fdb6`
