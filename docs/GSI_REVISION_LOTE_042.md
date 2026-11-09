# GSI-EDITORIAL-042 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `b19f65af0687990a401ae38ee7a34834ae5f81957c48495ff772d6edeead0f22`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P16-071

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave C: ya distingue herramientas próximas; precisar función y límites mediante la guía actual del portal.

### Antes

¿Qué herramienta conceptual ayuda a comprobar combinaciones de licencias en el ecosistema EUPL?

- A. El catálogo SPDX de identificadores y expresiones normalizadas de licencias, sin resolver por sí mismo su compatibilidad.
- B. Un escáner que inventaría dependencias y licencias declaradas para preparar una revisión jurídica posterior.
- C. El Licensing Assistant / compatibility checker del portal Interoperable Europe. **(correcta)**
- D. Un sistema de gestión de derechos que limita técnicamente copia, apertura o reproducción de contenidos digitales.

Explicación: El portal europeo mantiene herramientas para comparar y comprobar compatibilidad.

### Propuesta

¿Qué herramienta conceptual ayuda a comprobar combinaciones de licencias en el ecosistema EUPL?

- A. El catálogo SPDX de identificadores y expresiones normalizadas de licencias, sin resolver por sí mismo su compatibilidad.
- B. Un escáner que inventaría dependencias y licencias declaradas para preparar una revisión jurídica posterior.
- C. El Licensing Assistant / compatibility checker del portal Interoperable Europe. **(correcta)**
- D. Un sistema de gestión de derechos que limita técnicamente copia, apertura o reproducción de contenidos digitales.

Explicación: Licensing Assistant permite explorar y comparar licencias, y su Compatibility Checker orienta el análisis de una licencia de entrada frente a otra de salida. La guía explica condiciones de redistribución y límites del resultado. Es una ayuda documentada: no sustituye revisar el texto, el caso de uso y los hechos de la combinación.

- Error A: SPDX normaliza nombres, identificadores y expresiones de licencia; ese catálogo no resuelve por sí solo si una combinación concreta es compatible.
- Error B: Un escáner aporta inventario y datos para revisión, pero detectar componentes o licencias no equivale al comprobador de compatibilidad preguntado.
- Error D: El control técnico de apertura o copia tiene otra finalidad; no compara las obligaciones de licencias de entrada y salida.

- [Comisión Europea: Licensing Assistant](https://interoperable-europe.ec.europa.eu/collection/eupl/solution/licensing-assistant) · Welcome: comparar, seleccionar y combinar; identificadores SPDX; How to use the Licensing Assistant · versión: Página del producto consultada; enlaza guías actualizadas el 22-06-2026. Se coteja descripción documental, no se afirma ejecutar una comparación en su interfaz · comprobado: 2026-10-28
- [Comisión Europea: How to check compatibility between two licences](https://interoperable-europe.ec.europa.eu/collection/eupl/document/licensing-assistant-how-check-compatibility-between-two-licences) · Steps 2 y 4: inbound/outbound, condiciones de redistribución y límites del resultado basado en la base de conocimiento del portal · versión: Publicado 02-07-2025, actualizado 22-06-2026; guía pública leída, distinta de un dictamen individual de compatibilidad · comprobado: 2026-10-28
- [SPDX License List](https://spdx.org/licenses/) · Introducción y tabla Full name / Identifier, entradas EUPL-1.2 y Apache-2.0 · versión: La página muestra versión 3.29.0 de 16-09-2026; se distingue de la fecha de comprobación real · comprobado: 2026-10-28
- [OpenChain: License Compliance Specification](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4.1 Compliance artifacts · versión: OpenChain 2.1, documento del proyecto que declara equivalencia funcional con ISO/IEC 5230:2020; no se afirma certificación de esta aplicación · comprobado: 2026-10-28

Partida: `85a46785970d8795e94839eabd2ab8a58893d97626c2563edb71d909aa84f5fe` · propuesta: `ae9828c7b851b4fa6c82937adebc92f64b837da2438411ec497a06592987ad3e`

## MAN-GSI-P16-072

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación SPDX y clave A; sustituir siglas de ámbitos ajenos por identificadores y metadatos próximos.

### Antes

¿Qué identificador estandarizado es útil para registrar una licencia como EUPL-1.2 o Apache-2.0?

- A. Un identificador SPDX. **(correcta)**
- B. Una dirección MAC.
- C. Un OID de certificado de usuario.
- D. Un CVE.

Explicación: SPDX normaliza identificadores de licencias y componentes.

### Propuesta

¿Qué identificador estandarizado es útil para registrar una licencia como EUPL-1.2 o Apache-2.0?

- A. Un identificador corto de la SPDX License List. **(correcta)**
- B. Un SPDXRef de un elemento del inventario.
- C. Una suma de comprobación del fichero de licencia.
- D. Un número de versión del paquete distribuido.

Explicación: EUPL-1.2 y Apache-2.0 son identificadores cortos normalizados de licencia en la SPDX License List. Permiten registrar qué licencia se identifica, pero no prueban por sí solos compatibilidad ni cumplimiento. Son distintos de los identificadores de elementos de un documento SPDX, de los hashes y de las versiones de paquetes.

- Error B: SPDXRef identifica un elemento dentro del documento y permite referenciarlo; no es el identificador corto estandarizado de una licencia de la lista.
- Error C: Un hash permite cotejar contenido de un fichero; no sustituye el nombre normalizado de la licencia que se registra.
- Error D: La versión de un paquete identifica una entrega del componente; no identifica por sí misma la licencia aplicable.

- [SPDX License List](https://spdx.org/licenses/) · Introducción y tabla Full name / Identifier, entradas EUPL-1.2 y Apache-2.0 · versión: La página muestra versión 3.29.0 de 16-09-2026; se distingue de la fecha de comprobación real · comprobado: 2026-10-28
- [SPDX: Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.2 Package SPDX identifier, 7.3 Package version, 7.10 checksum y 7.13 Concluded license · versión: Especificación SPDX v2.3.1; SPDXRef de elemento y metadatos de paquete no son identificadores cortos de licencia · comprobado: 2026-10-28

Partida: `ee65d57a5ea8bc2d3e10e4d5f082b552ae25127ed8aeb39fda563cb4adc3b099` · propuesta: `4bd5b58fac91792f3d49a0eb18fa9902039be060c32b0189728e58ac4feb9026`

## MAN-GSI-P16-073

Decisión: pending_review · acción: revise.

Motivo: Conservar afirmación falsa y clave C; cuatro afirmaciones paralelas, sin destacar la falsa mediante extensión o absolutos iniciales.

### Antes

¿Cuál de estas afirmaciones sobre compatibilidad es falsa?

- A. Hay que considerar versión concreta.
- B. El modo de combinación y distribución importa.
- C. Si dos licencias son open source, entonces siempre son compatibles sin revisar nada más. **(correcta)**
- D. Las obligaciones de patentes/NOTICE/fuente pueden influir.

Explicación: Ser open source no garantiza compatibilidad automática.

### Propuesta

¿Cuál de estas afirmaciones sobre compatibilidad es falsa?

- A. La versión de cada licencia puede cambiar el análisis de compatibilidad.
- B. El modo de combinar obras y entregar copias influye en sus obligaciones.
- C. El carácter open source de ambas licencias acredita su compatibilidad. **(correcta)**
- D. Los requisitos de fuente, patentes y avisos pueden afectar a la entrega.

Explicación: Que dos licencias sean open source no demuestra que puedan satisfacerse juntas en cualquier combinación. Deben revisarse textos, versiones, relación de obras y forma de entrega. GPL v3 contempla que no pueda distribuirse si resultan incompatibles las obligaciones concurrentes; EUPL prevé vías concretas de compatibilidad, no una regla universal.

- Error A: Las versiones pueden cambiar condiciones y vías de compatibilidad; considerarlas es pertinente, no la afirmación falsa.
- Error B: La combinación y la entrega determinan qué supuestos de las licencias se activan; son hechos relevantes.
- Error D: Las obligaciones concretas sobre fuente, patentes o avisos, como las de Apache-2.0, deben poder cumplirse; no son ajenas al análisis.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender of Others’ Freedom · versión: GNU GPL v3, 29-06-2007; texto FSF reproducido en OSI. La coexistencia de condiciones incompatibles no habilita por sí sola una distribución · comprobado: 2026-10-28
- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones, distribución/comunicación incluidas funcionalidades esenciales en línea; 2 Derechos; 5 Copyleft, compatibilidad y fuente; 6 Secuencia de autoría; Apéndice · versión: EUPL v1.2, texto español oficial enlazado por la Comisión; DOUE 19-05-2017 L128. No se traslada automáticamente la condición de modificación de AGPL a EUPL · comprobado: 2026-10-28
- [ASF: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 3 Grant of Patent License; 4 Redistribution, copia de licencia, cambios, avisos pertinentes y NOTICE si procede · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF · comprobado: 2026-10-28

Partida: `3fd9dbd22aebaa666cebedac3caf1f5c18b5905aa2e1efc966de53dfabd1a969` · propuesta: `0b6242fc559924a9148866472c57d8db023c4f093ac842e395bef1d08e5a954d`

## MAN-GSI-P16-074

Decisión: pending_review · acción: revise.

Motivo: Conservar cobertura EUPL de red/SaaS y clave A; microcaso de funcionalidades esenciales, con diferencias frente a descarga, modificación y extensión a otras obras.

### Antes

¿Qué relación entre EUPL y red/SaaS destaca el portal europeo?

- A. EUPL contempla obligaciones para distribución/uso en red dentro de su régimen de reciprocidad. **(correcta)**
- B. Convertirse automáticamente en una licencia permisiva cuando el programa se ofrece por red, dejando de aplicar sus obligaciones de reciprocidad.
- C. Prohibir cualquier modalidad SaaS porque la EUPL solo permite ejecutar el programa después de entregar una copia física al usuario.
- D. Limitar su cobertura al software de escritorio instalado localmente, sin contemplar distribución ni utilización mediante servicios en red.

Explicación: El portal oficial destaca cobertura de escenarios SaaS/network.

### Propuesta

Un organismo ofrece a terceros acceso web a las funcionalidades esenciales de una obra EUPL-1.2. ¿Qué consecuencia debe atender?

- A. Se aplican las condiciones de comunicación, incluido el suministro del fuente. **(correcta)**
- B. La ausencia de descarga excluye la comunicación prevista en la licencia.
- C. La reciprocidad solo opera si se modifican los ficheros del programa.
- D. El acceso web somete también los sistemas independientes a la EUPL.

Explicación: EUPL-1.2 incluye en distribución o comunicación poner las funcionalidades esenciales de la obra a disposición de otra persona, en línea o fuera de línea. La sección 5 impone condiciones de reciprocidad y suministro del fuente para los supuestos regulados. No exige en su definición una copia física ni que la obra se haya modificado, y no extiende por ese solo hecho EUPL a sistemas independientes.

- Error B: La definición no se limita a descargar copias: comprende acceso a las funcionalidades esenciales de la obra a otra persona.
- Error C: La cláusula de copyleft se refiere a obras originales y derivadas en sus supuestos; no debe importarse sin más la condición de modificación de AGPL.
- Error D: El acceso en red no convierte automáticamente sistemas independientes ajenos en la obra cubierta. Debe analizarse la relación y el alcance de cada licencia.

- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones, distribución/comunicación incluidas funcionalidades esenciales en línea; 2 Derechos; 5 Copyleft, compatibilidad y fuente; 6 Secuencia de autoría; Apéndice · versión: EUPL v1.2, texto español oficial enlazado por la Comisión; DOUE 19-05-2017 L128. No se traslada automáticamente la condición de modificación de AGPL a EUPL · comprobado: 2026-10-28

Partida: `a3b785cf6901bb5c0595524935897a362f765ee66366589579de04b8586c63cc` · propuesta: `aea925bd5e39cb1b9fff45675129f8718b6bd879222a7f633c8f3d47c04b7068`

## MAN-GSI-P16-075

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la definición de reciprocidad y clave B; formulación ya acotada a los términos de EUPL, completando las tres explicaciones.

### Antes

¿Qué significa “recíproca” al describir EUPL?

- A. Que cada redistribución exige pagar una tasa a una institución de la Unión Europea para conservar el derecho de uso.
- B. Que determinadas mejoras/derivados distribuidos o puestos a disposición según sus términos deben mantener obligaciones de compartir código. **(correcta)**
- C. Que únicamente organismos y Administraciones públicas pueden ejecutar, modificar o distribuir el programa licenciado.
- D. Que está prohibido combinar código EUPL con cualquier componente bajo otra licencia, incluso cuando exista compatibilidad prevista.

Explicación: Reciprocity/share-alike es la forma de copyleft de EUPL.

### Propuesta

¿Qué significa “recíproca” al describir EUPL?

- A. Que cada redistribución exige pagar una tasa a una institución de la Unión Europea para conservar el derecho de uso.
- B. Que determinadas mejoras/derivados distribuidos o puestos a disposición según sus términos deben mantener obligaciones de compartir código. **(correcta)**
- C. Que únicamente organismos y Administraciones públicas pueden ejecutar, modificar o distribuir el programa licenciado.
- D. Que está prohibido combinar código EUPL con cualquier componente bajo otra licencia, incluso cuando exista compatibilidad prevista.

Explicación: La reciprocidad de EUPL articula obligaciones de copyleft y fuente para distribución o comunicación de las obras cubiertas, incluidas determinadas mejoras o derivados. Debe leerse junto a su cláusula de compatibilidad. No exige tasas por redistribución ni reserva el uso a organismos públicos.

- Error A: EUPL concede derechos a título gratuito bajo sus términos; no impone una tasa institucional por cada redistribución como condición de reciprocidad.
- Error C: La licencia define al licenciatario de forma abierta y concede uso en cualquier circunstancia bajo sus términos; no se reserva a Administraciones.
- Error D: La sección 5 y el apéndice prevén determinados supuestos de compatibilidad; la reciprocidad no prohíbe toda combinación con otra licencia.

- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones, distribución/comunicación incluidas funcionalidades esenciales en línea; 2 Derechos; 5 Copyleft, compatibilidad y fuente; 6 Secuencia de autoría; Apéndice · versión: EUPL v1.2, texto español oficial enlazado por la Comisión; DOUE 19-05-2017 L128. No se traslada automáticamente la condición de modificación de AGPL a EUPL · comprobado: 2026-10-28

Partida: `9a0b20c843ebf5c558ab31d53ef48374f4e90b64c5473fd4d6d4875d4c068166` · propuesta: `e0a892989425084df4f1166deb30fc44ccbfe74ac861f43f4f507e03c5e70bf2`

## MAN-GSI-P16-076

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de publicación por una Administración y clave D; centrar alternativas en decisiones de derechos, dependencias y evidencia, sin licencia universal obligatoria.

### Antes

Una Administración quiere publicar código propio para reutilización europea. ¿Qué consideración es especialmente pertinente?

- A. Publicar sin LICENSE porque es una Administración.
- B. Usar Creative Commons para todo código por defecto.
- C. Eliminar avisos de terceros.
- D. Elegir conscientemente licencia, versión y compatibilidad con dependencias, pudiendo considerar EUPL. **(correcta)**

Explicación: La publicación pública requiere gobernanza de derechos y dependencias.

### Propuesta

Una Administración quiere publicar código propio para reutilización europea. ¿Qué consideración es especialmente pertinente?

- A. Elegir por el precio de descarga sin revisar el código incorporado.
- B. Aplicar a las dependencias la licencia elegida para el código propio.
- C. Tratar el identificador de licencia como prueba de titularidad.
- D. Precisar licencia, versión y derechos propios y de las dependencias. **(correcta)**

Explicación: Antes de publicar hay que acreditar los derechos y elegir conscientemente licencia y versión, comprobando condiciones de dependencias y forma de reutilización. EUPL puede considerarse sin asumir que sea obligatoria para todo código público. Una licencia de salida no cambia por sí sola los derechos o condiciones del material ajeno incorporado.

- Error A: El precio no acredita derechos para publicar ni sustituye comprobar las licencias y obligaciones del código recibido.
- Error B: Elegir licencia para código propio no autoriza a sustituir sin más la de dependencias; debe existir una vía compatible o permiso suficiente.
- Error C: Un identificador SPDX nombra una licencia, pero no demuestra que quien publica sea titular o esté autorizado para concederla.

- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones, distribución/comunicación incluidas funcionalidades esenciales en línea; 2 Derechos; 5 Copyleft, compatibilidad y fuente; 6 Secuencia de autoría; Apéndice · versión: EUPL v1.2, texto español oficial enlazado por la Comisión; DOUE 19-05-2017 L128. No se traslada automáticamente la condición de modificación de AGPL a EUPL · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades; 45 formalización escrita; 56.1 soporte frente a explotación; 97 titularidad; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28
- [SPDX License List](https://spdx.org/licenses/) · Introducción y tabla Full name / Identifier, entradas EUPL-1.2 y Apache-2.0 · versión: La página muestra versión 3.29.0 de 16-09-2026; se distingue de la fecha de comprobación real · comprobado: 2026-10-28

Partida: `9beffe4365cc01ed9a2b7d14f7d4b9e773bb276796c8ebe8a3452d8e50d60158` · propuesta: `9bca8ed4e298815719d2ed2229fd882e3205a9b23431ec55b65a7acdd8ba803b`

## MAN-GSI-P16-078

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción jurídica/técnica y clave C; cuatro correspondencias homogéneas y explicación con fuente EIF identificada por edición y apartado.

### Antes

¿Qué diferencia hay entre compatibilidad jurídica e interoperabilidad técnica?

- A. Son el mismo concepto y basta con que dos programas intercambien datos para que sus licencias permitan combinarlos y redistribuirlos juntos.
- B. La interoperabilidad se refiere exclusivamente a derechos de autor y no considera formatos, protocolos, interfaces ni comportamiento técnico.
- C. La primera trata de si licencias permiten una combinación/distribución; la segunda de si sistemas pueden intercambiar/funcionar juntos. **(correcta)**
- D. La compatibilidad jurídica solo compara protocolos de red y no afecta a las condiciones impuestas al combinar o distribuir componentes.

Explicación: Separar ambos planos evita confundir licencias con arquitectura.

### Propuesta

¿Qué diferencia hay entre compatibilidad jurídica e interoperabilidad técnica?

- A. Jurídica: intercambio de datos; técnica: permisos de redistribución.
- B. Jurídica: identidad de textos; técnica: uso del mismo lenguaje.
- C. Jurídica: condiciones de licencia; técnica: intercambio entre sistemas. **(correcta)**
- D. Jurídica: calidad del código; técnica: identidad de titulares.

Explicación: La compatibilidad jurídica de licencias pregunta si pueden cumplirse las condiciones de la combinación o distribución previstas. La interoperabilidad técnica trata de conectar sistemas y servicios mediante interfaces, interconexión e intercambio de datos, entre otros aspectos. Conseguir que dos programas intercambien datos no acredita por sí solo autorización para redistribuirlos juntos.

- Error A: Intercambia los planos: los permisos corresponden al análisis jurídico de licencias, mientras el intercambio de datos es un aspecto técnico.
- Error B: La compatibilidad no exige identidad literal de licencias y la interoperabilidad no exige usar el mismo lenguaje de programación.
- Error D: Calidad de código e identidad de titulares no definen esos planos. Se necesitan condiciones jurídicas por un lado y capacidades técnicas de conexión por otro.

- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones, distribución/comunicación incluidas funcionalidades esenciales en línea; 2 Derechos; 5 Copyleft, compatibilidad y fuente; 6 Secuencia de autoría; Apéndice · versión: EUPL v1.2, texto español oficial enlazado por la Comisión; DOUE 19-05-2017 L128. No se traslada automáticamente la condición de modificación de AGPL a EUPL · comprobado: 2026-10-28
- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender of Others’ Freedom · versión: GNU GPL v3, 29-06-2007; texto FSF reproducido en OSI. La coexistencia de condiciones incompatibles no habilita por sí sola una distribución · comprobado: 2026-10-28
- [Comisión Europea: New European Interoperability Framework](https://www.varam.gov.lv/lv/media/42342/download?attachment=) · 3.6 Technical interoperability, página impresa 30: interfaces, interconexión, integración y presentación/intercambio de datos · versión: Edición de la Oficina de Publicaciones de la UE, 2017, ISBN 978-92-79-63756-8, DOI 10.2799/78681; copia de autoría UE en sitio ministerial letón. No se extrapolan sus datos históricos de Estados miembros a 2026 · comprobado: 2026-10-28

Partida: `b115e2ffb651ebc08558ea5f5e212bca5895af87d1df69f60e524182fcd19b9b` · propuesta: `4f1c4e8115c5dfc1a6f3d4b7ae510c41cdd74098260aa9507ec50315f7b14cb2`

## MAN-GSI-P16-079

Decisión: pending_review · acción: revise.

Motivo: Mantener gobernanza OSS y clave A; precisar cobertura del proceso para evitar que varias listas parciales respondan a una pregunta demasiado abierta.

### Antes

¿Qué debería contener una política OSS madura?

- A. Lista de licencias permitidas/restringidas, proceso de aprobación, inventario/SBOM y reglas de cumplimiento. **(correcta)**
- B. Una lista de repositorios favoritos sin criterios de licencia, aprobación, inventario, actualización o retirada de componentes.
- C. Una prohibición general de open source que no evalúa necesidades, excepciones, componentes ya incluidos ni cadena de suministro.
- D. Un escaneo puntual de vulnerabilidades sin reglas sobre licencias, procedencia, SBOM, avisos o respuesta a hallazgos.

Explicación: La gobernanza reduce riesgo jurídico y de cadena de suministro.

### Propuesta

¿Qué conjunto cubre identificación, decisión y cumplimiento de licencias dentro de una política OSS?

- A. Licencias admitidas, responsables, aprobación, inventario y cumplimiento. **(correcta)**
- B. Licencias admitidas, reglas de formato y pruebas de rendimiento.
- C. Inventario de dependencias, autoría declarada y control de versiones.
- D. Escaneos de código, incidencias de seguridad y planificación de entregas.

Explicación: Un proceso de licencias OSS necesita identificar componentes y licencias, asignar decisiones y responsabilidades y preparar y conservar la evidencia de cumplimiento. OpenChain 2.1 describe política, revisión, inventario y artefactos. Una lista de licencias admitidas o restringidas puede formar parte de la política, pero su mera existencia no sustituye esos procesos ni implica certificación.

- Error B: Una lista de licencias puede orientar decisiones, pero las reglas de formato y rendimiento no cubren inventario, revisión de usos ni artefactos exigidos por licencia.
- Error C: Inventario, autoría y versiones aportan trazabilidad, pero faltan el proceso de decisión sobre licencias y las obligaciones concretas de cumplimiento.
- Error D: Escaneo, seguridad y planificación son útiles técnicamente; no equivalen a identificar y aprobar licencias ni a entregar avisos, fuente u otros artefactos exigibles.

- [OpenChain: License Compliance Specification](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4.1 Compliance artifacts · versión: OpenChain 2.1, documento del proyecto que declara equivalencia funcional con ISO/IEC 5230:2020; no se afirma certificación de esta aplicación · comprobado: 2026-10-28

Partida: `a23be67db5706d74f0d39c280b796f100b4cd48003945f748fc3fecb8fbb522d` · propuesta: `bfd2d5579f1bd02dda3d654c761f2bf801e6c5b579c0995264dfc35655ba877b`

## MAN-GSI-P16-080

Decisión: pending_review · acción: revise.

Motivo: Conservar separación de conceptos y clave B; retirar la metarreferencia al bloque y formular cuatro relaciones comparables.

### Antes

¿Qué frase resume mejor este bloque?

- A. Todo open source está en dominio público.
- B. Open source, copyleft, compatibilidad y dominio público son conceptos relacionados pero no intercambiables. **(correcta)**
- C. Toda licencia copyleft es compatible con cualquier otra.
- D. EUPL es una licencia propietaria.

Explicación: La discriminación conceptual es el objetivo principal.

### Propuesta

¿Qué relación entre estos conceptos es correcta?

- A. Open source sitúa por definición el código en dominio público.
- B. Copyleft, compatibilidad y dominio público describen planos distintos. **(correcta)**
- C. La compatibilidad se acredita por usar dos licencias de código abierto.
- D. El dominio público es una modalidad de licencia copyleft recíproca.

Explicación: Open source describe condiciones de licencia; copyleft añade reciprocidad según su texto y alcance; compatibilidad trata del encaje de obligaciones, y dominio público es una situación jurídica distinta. Pueden relacionarse, pero no son etiquetas intercambiables. En España, el artículo 41 LPI conserva autoría e integridad de las obras en dominio público.

- Error A: La apertura de una licencia no extingue por sí sola los derechos de explotación; no convierte automáticamente el código en dominio público.
- Error C: Dos licencias abiertas pueden imponer condiciones incompatibles para la combinación prevista; la clasificación no sustituye revisar los textos.
- Error D: Dominio público no es una licencia de copyleft. La reciprocidad se articula mediante condiciones de licencia sobre los derechos pertinentes.

- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Redistribución, 2 Fuente y 3 Obras derivadas · versión: OSD versión 1.9, texto consultado; página con metadato de edición 16-02-2024. Open source no equivale a dominio público o compatibilidad universal · comprobado: 2026-10-28
- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones, distribución/comunicación incluidas funcionalidades esenciales en línea; 2 Derechos; 5 Copyleft, compatibilidad y fuente; 6 Secuencia de autoría; Apéndice · versión: EUPL v1.2, texto español oficial enlazado por la Comisión; DOUE 19-05-2017 L128. No se traslada automáticamente la condición de modificación de AGPL a EUPL · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 41 Dominio público; 43 transmisión de derechos; 96 programas y documentación; 97 titularidad · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `e1f7d80f4c44458553e910eb75b685752e6c8e627ddd3167f76cbb0ef1b9d571` · propuesta: `3b5134bdb272a5782b43de6c100021289e08c1bb5f550021d8b21ca46380d37a`

## MAN-GSI-P16-081

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación normativa y clave A; usar tres normas reales próximas a propiedad industrial y actividad digital, sin distractores con exclusivamente.

### Antes

¿Qué norma española contiene un título específico sobre programas de ordenador dentro de la propiedad intelectual?

- A. El texto refundido de la Ley de Propiedad Intelectual, aprobado por Real Decreto Legislativo 1/1996. **(correcta)**
- B. La Ley 39/2015 exclusivamente.
- C. El Código de Comercio como única norma.
- D. La Ley General de Telecomunicaciones exclusivamente.

Explicación: El TRLPI dedica su Título VII del Libro I a los programas de ordenador.

### Propuesta

¿Qué norma española contiene un título específico sobre programas de ordenador dentro de la propiedad intelectual?

- A. Texto refundido de la Ley de Propiedad Intelectual (RDL 1/1996). **(correcta)**
- B. Ley 24/2015, de Patentes.
- C. Ley 17/2001, de Marcas.
- D. Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico.

Explicación: El Libro I del TRLPI aprobado por RDL 1/1996 contiene un Título VII específico sobre programas de ordenador, artículos 95 a 104. El artículo 95 establece ese régimen y remite a las disposiciones aplicables del resto de la ley para lo no previsto específicamente.

- Error B: La Ley de Patentes corresponde al régimen de propiedad industrial; no es la norma que contiene el título de derecho de autor sobre programas preguntado.
- Error C: La Ley de Marcas se refiere a signos distintivos; el título específico de programas del enunciado pertenece al TRLPI.
- Error D: La Ley de servicios de la sociedad de la información y comercio electrónico tiene otro ámbito; no sustituye el Título VII del Libro I TRLPI.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Libro I, Título VII Programas de ordenador, artículos 95–104; art.95 Régimen jurídico · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 24/2015 de Patentes](https://www.boe.es/buscar/act.php?id=BOE-A-2015-8328) · Cabecera, denominación de la norma y Título I Disposiciones preliminares; contraste con el Título VII del Libro I TRLPI · versión: Consolidación consultada, actualización global publicada 04-07-2018; se usa para identificar el ámbito de la norma, sin decidir patentabilidad de un programa concreto · comprobado: 2026-10-28
- [BOE: Ley 17/2001 de Marcas](https://www.boe.es/buscar/act.php?id=BOE-A-2001-23093) · Cabecera, denominación de la norma e índice; contraste con la protección de programas en TRLPI · versión: Consolidación consultada, actualización global publicada 28-07-2022; se identifica el ámbito de signos distintivos, no una decisión sobre una marca particular · comprobado: 2026-10-28
- [BOE: Ley 34/2002 de servicios de la sociedad de la información y de comercio electrónico](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758) · Cabecera e índice; contraste con el Título VII del Libro I TRLPI · versión: Consolidación consultada, actualización global publicada 23-01-2025; se identifica la norma sin atribuirle el título específico de programas de ordenador · comprobado: 2026-10-28

Partida: `fe4910911313c7be57f699d973bb1516bdbb736b821aedc34978779c63070b0e` · propuesta: `8dcea3ae3e1df7be858f0976a1c271ff05f5869626aad06ad87021dc6ab138fb`

## MAN-GSI-P16-082

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas, clave C; contraste ya pertinente entre expresión, ideas, signo y soporte, con feedback específico.

### Antes

¿Qué protege el derecho de autor sobre software según el TRLPI?

- A. Las ideas y principios de un programa aunque no se hayan expresado en código.
- B. El nombre comercial del producto como contenido propio del programa.
- C. Las formas de expresión del programa, no las ideas y principios abstractos en que se basa. **(correcta)**
- D. El soporte físico donde se entrega el programa, con independencia de su expresión.

Explicación: El artículo 96 protege la expresión y excluye ideas y principios subyacentes.

### Propuesta

¿Qué protege el derecho de autor sobre software según el TRLPI?

- A. Las ideas y principios de un programa aunque no se hayan expresado en código.
- B. El nombre comercial del producto como contenido propio del programa.
- C. Las formas de expresión del programa, no las ideas y principios abstractos en que se basa. **(correcta)**
- D. El soporte físico donde se entrega el programa, con independencia de su expresión.

Explicación: El artículo 96 protege las formas de expresión del programa dentro de su régimen y exige originalidad. Excluye las ideas y principios subyacentes, incluidos los que fundamentan interfaces. Deben distinguirse esa expresión, los signos distintivos y el soporte material en que se entrega la copia.

- Error A: El artículo 96.4 excluye las ideas y principios como tales; que sean funcionalmente relevantes no los convierte en expresión protegida del programa.
- Error B: El nombre comercial no es por ese solo hecho la forma de expresión del programa protegida por el artículo 96; corresponde distinguir signos y código.
- Error D: La propiedad del soporte material y los derechos sobre la obra incorporada son planos distintos; comprar el soporte no atribuye por sí solo explotación del programa.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.1 programa y documentación; 96.2 originalidad; 96.3 expresión y coexistencia con propiedad industrial; 96.4 exclusión de ideas y principios · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades; 45 formalización escrita; 56.1 soporte frente a explotación; 97 titularidad; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `53de60eea4c224a7bf24d05ff7f9a44dfb34743c12c43d772b66ee004a4d5b91` · propuesta: `1a2102e94a8a84b23e811987856dec66cbde6a4d61b0326d332ac386b32b37fb`

## MAN-GSI-P16-083

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la pregunta sobre documentación preparatoria y clave B; completar diferencias con ejecutable, ideas y documentos ajenos.

### Antes

¿Qué incluye el concepto de programa de ordenador a efectos del artículo 96?

- A. Comprende el ejecutable compilado, pero excluye el código fuente y los materiales preparatorios utilizados para crearlo.
- B. También su documentación preparatoria, además de la secuencia de instrucciones en cualquiera de sus formas de expresión/fijación. **(correcta)**
- C. Incluye las ideas y principios funcionales subyacentes aunque no se hayan expresado o fijado en un programa concreto.
- D. Abarca cualquier manual, contrato o documento del proyecto aunque no guarde relación con la elaboración del programa.

Explicación: La norma incluye documentación preparatoria y protege además documentación técnica/manuales en los términos indicados.

### Propuesta

¿Qué incluye el concepto de programa de ordenador a efectos del artículo 96?

- A. Comprende el ejecutable compilado, pero excluye el código fuente y los materiales preparatorios utilizados para crearlo.
- B. También su documentación preparatoria, además de la secuencia de instrucciones en cualquiera de sus formas de expresión/fijación. **(correcta)**
- C. Incluye las ideas y principios funcionales subyacentes aunque no se hayan expresado o fijado en un programa concreto.
- D. Abarca cualquier manual, contrato o documento del proyecto aunque no guarde relación con la elaboración del programa.

Explicación: El artículo 96.1 incluye la documentación preparatoria en el concepto de programa de ordenador. Añade expresamente protección para documentación técnica y manuales de uso en los términos de ese título. No extiende por ello la protección de programas a cualquier documento sin relación con su elaboración.

- Error A: El artículo 96 no limita la protección al ejecutable: contempla la secuencia en cualquier forma de expresión y fijación e incluye documentación preparatoria.
- Error C: Las ideas y principios subyacentes quedan excluidos como tales por el artículo 96.4; no deben confundirse con documentación preparatoria expresada.
- Error D: La mención a documentación preparatoria, técnica y manuales no abarca indiscriminadamente cualquier contrato o documento ajeno a la elaboración del programa.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.1 programa y documentación; 96.2 originalidad; 96.3 expresión y coexistencia con propiedad industrial; 96.4 exclusión de ideas y principios · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `95e93dbf6cdd0f28b8eca8c2535131c5dc3c0c29668ef765dd3b26b60ce5e590` · propuesta: `090d86450b58882bf4ca4d3c94f46bcc31b69a55faa420c4bd9f5a0c93626ea0`

## MAN-GSI-P16-084

Decisión: pending_review · acción: revise.

Motivo: Conservar requisito de originalidad y clave D; tres confusiones próximas de registro, novedad industrial y valor comercial, sin umbrales ficticios de líneas.

### Antes

¿Qué requisito menciona el TRLPI para que un programa sea protegido como tal?

- A. Que esté registrado obligatoriamente antes de publicarse.
- B. Que sea software propietario.
- C. Que tenga al menos 10.000 líneas de código.
- D. Que sea original, como creación intelectual propia de su autor. **(correcta)**

Explicación: La originalidad es la condición indicada en el artículo 96.2.

### Propuesta

¿Qué requisito menciona el TRLPI para que un programa sea protegido como tal?

- A. La inscripción previa del código en el Registro de Propiedad Intelectual.
- B. La novedad técnica del programa como si fuera una patente de invención.
- C. Su valor comercial o el pago de una licencia por cada usuario.
- D. Su originalidad como creación intelectual propia de su autor. **(correcta)**

Explicación: El requisito del artículo 96.2 es la originalidad del programa como creación intelectual propia de su autor. No debe confundirse con el criterio de novedad de una patente, con el éxito comercial o con una inscripción constitutiva de ese derecho. Licenciar el programa como libre o propietario no cambia por sí solo ese requisito.

- Error A: La inscripción no es el requisito de protección que establece el artículo 96.2; el registro no sustituye la originalidad.
- Error B: La originalidad del derecho de autor no equivale a aplicar el régimen de patentabilidad de una invención.
- Error C: Precio, licencias por usuario y valor comercial no son el criterio de originalidad señalado por el artículo 96.2.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.1 programa y documentación; 96.2 originalidad; 96.3 expresión y coexistencia con propiedad industrial; 96.4 exclusión de ideas y principios · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 24/2015 de Patentes](https://www.boe.es/buscar/act.php?id=BOE-A-2015-8328) · Cabecera, denominación de la norma y Título I Disposiciones preliminares; contraste con el Título VII del Libro I TRLPI · versión: Consolidación consultada, actualización global publicada 04-07-2018; se usa para identificar el ámbito de la norma, sin decidir patentabilidad de un programa concreto · comprobado: 2026-10-28

Partida: `600531461ba3cc88de9ce4d7bdcb2ad00217f08a8d5c61146c8fbf444774de67` · propuesta: `48777e47dd104a35ac6b657bc67979041790c0b5da1a0f513dc6c88fd127b530`

## MAN-GSI-P16-085

Decisión: pending_review · acción: revise.

Motivo: Mantener exclusión de ideas de interfaz y clave B; distinguir exclusión de la idea y eventual protección de una implementación original.

### Antes

¿Están protegidas por derecho de autor las ideas y principios que sirven de fundamento a las interfaces de un programa?

- A. Sí, quedan protegidas automáticamente como código por servir de fundamento a una interfaz, aunque carezcan de forma expresiva concreta.
- B. No, no como tales por el derecho de autor sobre programas de ordenador. **(correcta)**
- C. La protección existiría si el programa usara una licencia libre, pues las licencias privativas excluirían esas ideas y principios.
- D. La presencia de DRM determinaría la protección al impedir observar o analizar el comportamiento del programa.

Explicación: El artículo 96.4 excluye las ideas y principios, incluidos los que fundamentan interfaces.

### Propuesta

¿Están protegidas por derecho de autor las ideas y principios que sirven de fundamento a las interfaces de un programa?

- A. Sí, por ser ideas necesarias para utilizar la interfaz del programa.
- B. No, se excluyen como tales por el artículo 96.4 del TRLPI. **(correcta)**
- C. Sí, cuando las describa la documentación técnica del programa.
- D. No, y por ello tampoco se protege el código concreto que las implementa.

Explicación: El artículo 96.4 excluye las ideas y principios subyacentes, incluidos los que sirven de fundamento a interfaces. La exclusión se refiere a esos elementos como tales; no convierte automáticamente en desprotegida una expresión original concreta que los implemente. Tampoco se resuelve el asunto por el tipo de licencia o por un control técnico.

- Error A: La necesidad funcional de una idea o principio no elimina la exclusión que establece el artículo 96.4.
- Error C: Describir una idea en documentación no convierte por ese hecho la idea abstracta en un elemento protegido como tal por el derecho de autor sobre programas.
- Error D: La exclusión de ideas y principios no elimina la protección que pueda corresponder a su expresión original concreta; confunde idea e implementación.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.1 programa y documentación; 96.2 originalidad; 96.3 expresión y coexistencia con propiedad industrial; 96.4 exclusión de ideas y principios · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `c082d8d86c928b920f2f3e350f7233705928e0ef660f5bb05fcc17f9fb9053d3` · propuesta: `db33c1303f97c9109be5c3725843f4e5b09ddb85f7f904016531cccd8cb80605`

## MAN-GSI-P16-086

Decisión: pending_review · acción: revise.

Motivo: Conservar actos de explotación y clave D; diferenciar explotación, derechos morales y prestaciones técnicas o contractuales, con límites legales expresos.

### Antes

¿Qué derechos exclusivos enumera el artículo 99, con las limitaciones legales correspondientes?

- A. El registro de la marca bajo la que se comercializa el programa.
- B. El cobro de servicios de soporte y mantenimiento del producto.
- C. La prohibición de cualquier mecanismo de interoperabilidad con otros programas.
- D. Reproducción, transformación y distribución pública, entre otros actos descritos. **(correcta)**

Explicación: El artículo 99 recoge actos de explotación del programa sujetos a autorización salvo límites.

### Propuesta

¿Qué derechos exclusivos enumera el artículo 99, con las limitaciones legales correspondientes?

- A. Ejecución, venta del soporte y registro de la marca.
- B. Acceso al fuente, interoperabilidad y contratación de soporte.
- C. Reconocimiento del autor, integridad y retirada de la obra.
- D. Reproducción, transformación y distribución pública. **(correcta)**

Explicación: El artículo 99 enumera actos de explotación del programa, como reproducción, transformación y distribución pública, sin perjuicio de los límites del artículo 100. Se distinguen de derechos morales, signos distintivos, propiedad del soporte y prestaciones de soporte contratadas.

- Error A: Mezcla ejecución, soporte material y registro de marca; no reproduce el conjunto de actos de explotación enumerado por el artículo 99.
- Error B: Acceso al fuente, interoperabilidad y soporte no son esa enumeración de derechos exclusivos; la interoperabilidad tiene además reglas específicas en el artículo 100.
- Error C: Reconocimiento e integridad corresponden al plano de derechos morales del artículo 14; no son la enumeración de explotación del programa del artículo 99.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 14 Derechos morales; 99 Derechos de explotación, letras a–c; 100 Límites a los derechos de explotación · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `fc234b12327e1bc3df893b382e0380cc60f84f3c578f494f560985e4ae6c1810` · propuesta: `1d50a341005d9540bfd8d5f3de97bd8c26d3cf2788c3088767c2f866ec9c5dc7`

## MAN-GSI-P16-089

Decisión: pending_review · acción: revise.

Motivo: Conservar necesidad de claridad en desarrollo externo y clave C; contexto de continuidad y entregables sin negar la regla especial de cesión LCSP.

### Antes

¿Por qué conviene regular expresamente la titularidad en un contrato de desarrollo externo?

- A. Porque todo proveedor pierde automáticamente todos sus derechos sin contrato.
- B. Porque el copyright no se aplica al software contratado.
- C. Para dejar claros derechos de uso, modificación, evolución, entrega de fuente/documentación y reutilización, evitando dependencia contractual. **(correcta)**
- D. Para sustituir la licencia por un DRM.

Explicación: La claridad contractual evita conflictos sobre alcance de cesiones/licencias y continuidad.

### Propuesta

Una entidad encarga un desarrollo externo que deberá mantener y evolucionar. ¿Para qué conviene regular expresamente los derechos y entregables?

- A. Para dar por cedidos todos los derechos por el pago del desarrollo.
- B. Para equiparar la entrega del fuente con una cesión exclusiva de derechos.
- C. Para concretar facultades, entregables y continuidad conforme a contrato y ley. **(correcta)**
- D. Para sustituir la revisión de dependencias por la titularidad del código propio.

Explicación: Delimitar los derechos de uso, modificación y evolución, los entregables y las dependencias permite saber qué continuidad y reutilización se autoriza realmente. Titularidad, cesión y entrega de fuente son planos distintos. En contratación pública debe atenderse además a la regla del artículo 308.1 LCSP y a lo previsto en pliegos o documento contractual; no cabe generalizar una ausencia o cesión ilimitada de derechos a todo encargo.

- Error A: El pago no permite inferir para cualquier contrato una cesión ilimitada de cualquier derecho; se revisan su régimen y alcance, incluida la regla especial LCSP cuando corresponda.
- Error B: Entregar una copia del fuente permite disponer materialmente de ella, pero no es por sí solo una cesión exclusiva e ilimitada de derechos de explotación.
- Error D: Acreditar derechos sobre código propio no resuelve licencias de terceros incorporados; esas condiciones deben seguir examinándose.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades; 45 formalización escrita; 56.1 soporte frente a explotación; 97 titularidad; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 9/2017 de Contratos del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902) · 308.1 Contenido y límites: regla de cesión a la Administración en los contratos descritos, salvo previsión distinta en pliegos o documento contractual · versión: Consolidación consultada, última actualización global publicada 09-04-2026; no se generaliza su regla especial a cualquier compra de una copia · comprobado: 2026-10-28
- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones, distribución/comunicación incluidas funcionalidades esenciales en línea; 2 Derechos; 5 Copyleft, compatibilidad y fuente; 6 Secuencia de autoría; Apéndice · versión: EUPL v1.2, texto español oficial enlazado por la Comisión; DOUE 19-05-2017 L128. No se traslada automáticamente la condición de modificación de AGPL a EUPL · comprobado: 2026-10-28

Partida: `7544beb96e359636c8aaf445b09beabbbee879b258b3112456aed11a585f1a65` · propuesta: `e1f38551543bdae69e24c769e754656296742448afbe857bc4604e170767ae1e`

## MAN-GSI-P16-091

Decisión: pending_review · acción: revise.

Motivo: Conservar análisis por modalidades y clave D; incluir la regla de finalidad del artículo 43.2 para no convertir falta de mención en prohibición absoluta.

### Antes

¿Qué significa que la cesión de derechos debe analizarse por modalidades de explotación?

- A. Que comprar un portátil transfiere el copyright del software instalado.
- B. Que una licencia siempre transmite la propiedad intelectual completa.
- C. Que el derecho de autor desaparece al pagar una factura.
- D. Que no debe presumirse una cesión ilimitada de cualquier derecho no expresado; el contrato y la ley delimitan alcance. **(correcta)**

Explicación: Uso del software y titularidad de derechos de explotación no son equivalentes.

### Propuesta

¿Qué significa que la cesión de derechos debe analizarse por modalidades de explotación?

- A. Las modalidades se deducen del precio pagado por el encargo.
- B. La cesión de una modalidad incluye todas las demás por defecto.
- C. Entregar el soporte atribuye cualquier explotación de la obra.
- D. El contrato y la ley delimitan derechos y modalidades cedidos. **(correcta)**

Explicación: El artículo 43 limita la cesión a derechos y modalidades previstos, con reglas para duración y territorio. Si faltan modalidades expresas y concretas, se atiende a las que se deduzcan necesariamente del contrato y sean indispensables para su finalidad. No es equivalente a presumir todo derecho imaginable ni a afirmar que toda facultad no literal sea imposible.

- Error A: La cuantía pagada no identifica por sí sola qué modalidades se ceden; debe examinarse el contrato y su régimen legal.
- Error B: Ceder una modalidad no incluye automáticamente todas las demás. El artículo 43 define límites y reglas para lo no especificado.
- Error C: La propiedad del soporte no atribuye por sí sola derechos de explotación de la obra incorporada, conforme al artículo 56.1.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades; 45 formalización escrita; 56.1 soporte frente a explotación; 97 titularidad; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `d664d52123ef51486d31a6ffc78d33c37e2e23f7dd6739f85893642d8e935d07` · propuesta: `362ea20ca9d31a60593ee81bb370903b2d593a9800a7cd53d2ff9e3857941692`

## MAN-GSI-P16-092

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la pregunta y clave B; contraste ya equilibrado y respaldo literal en artículo 96.1, con explicación individual de cada confusión.

### Antes

¿Qué afirmación es correcta sobre la documentación técnica y manuales de uso?

- A. Carecen de protección si acompañan a un programa, porque solo el código fuente y el ejecutable pueden ser objeto de derechos.
- B. El artículo 96 indica que gozan de la protección que el título dispensa a los programas en los términos legales. **(correcta)**
- C. Solo reciben protección cuando se registran individualmente y se distribuyen bajo una licencia Creative Commons.
- D. Pasan automáticamente al dominio público al entregarse con el software, aunque sean originales y no haya cesión de derechos.

Explicación: La norma contempla expresamente documentación técnica y manuales.

### Propuesta

¿Qué afirmación es correcta sobre la documentación técnica y manuales de uso?

- A. Carecen de protección si acompañan a un programa, porque solo el código fuente y el ejecutable pueden ser objeto de derechos.
- B. El artículo 96 indica que gozan de la protección que el título dispensa a los programas en los términos legales. **(correcta)**
- C. Solo reciben protección cuando se registran individualmente y se distribuyen bajo una licencia Creative Commons.
- D. Pasan automáticamente al dominio público al entregarse con el software, aunque sean originales y no haya cesión de derechos.

Explicación: El artículo 96.1 menciona expresamente documentación técnica y manuales de uso y les dispensa la protección prevista en ese título. Debe distinguirse esa regla de requisitos inventados de registro o licencia CC, y de la supuesta pérdida automática de derechos al entregar documentación junto al programa.

- Error A: La norma incluye expresamente documentación técnica y manuales; no reduce la protección solo a fuente y ejecutable.
- Error C: El artículo 96.1 no supedita esa protección a registro individual y licencia Creative Commons; esos no son los requisitos enunciados.
- Error D: Entregar documentación con software no la sitúa automáticamente en dominio público ni extingue por sí solo los derechos correspondientes.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.1 programa y documentación; 96.2 originalidad; 96.3 expresión y coexistencia con propiedad industrial; 96.4 exclusión de ideas y principios · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `2159045c2e39b89d7a98a7446003d4c9628ab4b7f9659502a6444dbda8ba5319` · propuesta: `bd7e2a7ca699a96d91228abbf8c308a3136b9be420f89db7ae37d0db16e4d827`

## MAN-GSI-P16-093

Decisión: pending_review · acción: revise.

Motivo: Conservar coexistencia de derechos y clave D; concretar el supuesto legal sin pronunciarse sobre patentabilidad de un programa abstracto.

### Antes

¿Qué ocurre si un programa forma parte de una invención que puede recibir protección industrial?

- A. El copyright desaparece cuando existe una invención patentable, aunque la expresión original del programa siga protegida.
- B. Cada línea de código se convierte automáticamente en patente europea sin solicitud, examen ni requisitos de patentabilidad.
- C. Obtener protección industrial sustituye toda licencia de software y extingue las condiciones previamente concedidas por el titular.
- D. La protección por derecho de autor puede coexistir, sin perjuicio del régimen de propiedad industrial que corresponda. **(correcta)**

Explicación: El artículo 96 contempla coexistencia con la protección industrial cuando proceda.

### Propuesta

Si un programa forma parte de una patente o modelo de utilidad, ¿qué prevé el artículo 96.3 TRLPI?

- A. La patente sustituye al derecho de autor sobre el programa.
- B. La publicación de la patente sitúa el programa en dominio público.
- C. La licencia de uso elimina su eventual protección industrial.
- D. Pueden coexistir protecciones conforme a sus distintos regímenes. **(correcta)**

Explicación: El artículo 96.3 prevé que, si los programas forman parte de una patente o modelo de utilidad, puedan gozar de la protección industrial correspondiente sin perjuicio de la prevista por derecho de autor. No declara patentable cualquier programa ni convierte cada línea en patente. Los regímenes y los derechos concretos deben distinguirse.

- Error A: La protección industrial que corresponda no sustituye por sí sola la de derecho de autor: el artículo 96.3 contempla coexistencia.
- Error B: Publicar una patente no extingue automáticamente el derecho de autor de una expresión original del programa.
- Error C: Una licencia de uso no elimina por sí sola una protección industrial que corresponda conforme a su régimen; deben revisarse sus términos y alcance.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.1 programa y documentación; 96.2 originalidad; 96.3 expresión y coexistencia con propiedad industrial; 96.4 exclusión de ideas y principios · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28

Partida: `1cc1a9bf6fbd96db47ca1da0972a2dee2c0d4ef9d84200848ac9871fb9bccb4b` · propuesta: `1437d0ac9acf6246466e50c891771ddb15b03a2c7fb5698c79ffbfc204a40381`

## MAN-GSI-P16-094

Decisión: pending_review · acción: revise.

Motivo: Conservar compra de copia frente a titularidad y clave B; microcaso de licencia de uso, distinguido de encargo de desarrollo y cesión especial LCSP.

### Antes

¿Qué afirmación sobre “comprar software” es más correcta?

- A. Comprar una copia siempre transfiere todo el código fuente y copyright.
- B. Normalmente se adquieren facultades de uso conforme a licencia/contrato, no necesariamente la titularidad del copyright. **(correcta)**
- C. La compra elimina cualquier condición de licencia.
- D. El precio determina si hay derecho de autor.

Explicación: Adquisición de una copia/licencia y titularidad de propiedad intelectual son planos distintos.

### Propuesta

Una empresa compra una copia de un programa bajo una licencia de uso. ¿Qué conclusión es correcta?

- A. La adquisición incluye la cesión exclusiva del copyright del programa.
- B. Adquiere facultades de uso, no por ello la titularidad del copyright. **(correcta)**
- C. La copia autoriza cualquier modificación y redistribución del programa.
- D. El precio determina qué derechos de autor dejan de existir.

Explicación: Adquirir una copia o licencia de uso no equivale por ese solo hecho a adquirir titularidad de los derechos de autor. Hay que examinar las facultades concedidas y los límites legales. El artículo 56 distingue soporte y explotación, y el artículo 99 contempla reglas sobre cesión de uso del programa. La cuestión no es un contrato de desarrollo sujeto a la regla especial del artículo 308.1 LCSP.

- Error A: La compra de una copia no demuestra cesión exclusiva del copyright; adquisición material, uso y titularidad son planos distintos.
- Error C: Modificar o redistribuir debe fundarse en derechos concedidos o límites aplicables, no en una autorización universal presumida de cualquier copia comprada.
- Error D: El precio no decide la existencia del derecho de autor ni qué facultades se extinguen; se atiende a ley y contrato.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades; 45 formalización escrita; 56.1 soporte frente a explotación; 97 titularidad; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de la publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 9/2017 de Contratos del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902) · 308.1 Contenido y límites: regla de cesión a la Administración en los contratos descritos, salvo previsión distinta en pliegos o documento contractual · versión: Consolidación consultada, última actualización global publicada 09-04-2026; no se generaliza su regla especial a cualquier compra de una copia · comprobado: 2026-10-28

Partida: `3baec16b352258bb150912cc61e7af6f5b6782a7f6165e7e59402c84e38452d3` · propuesta: `79848f40bb71aed1fcb144b7efcbdc2ae67735e5aa4bac7afd7837d7e1045438`
