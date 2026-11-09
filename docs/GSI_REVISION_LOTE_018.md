# GSI-EDITORIAL-018 — revisión propuesta

Preparado: 2026-10-27. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `e33f66f3ba1a78ad771036ca540e12d917a84a5b815108000d5a437c5ad630b2`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P14-158

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto y clave D; comparar órganos reales de la misma estructura en lugar de autoridad de datos, plataforma y tribunal; retirar feedback que invocaba una ampliación oficial sin explicar el contenido.

### Antes

¿Qué afirmación sobre la CSAE es correcta?

- A. La autoridad estatal independiente que supervisa todos los tratamientos de datos personales realizados por las Administraciones públicas.
- B. La plataforma común que autentica directamente a la ciudadanía y emite por sí misma todos los certificados electrónicos administrativos.
- C. El órgano jurisdiccional especializado que resuelve con carácter vinculante los conflictos tecnológicos entre Administraciones públicas.
- D. Es un órgano técnico de cooperación en administración electrónica que trabaja sobre interoperabilidad y actuaciones conjuntas. **(correcta)**

Explicación: La ampliación oficial refuerza el hueco detectado en I.10.

### Propuesta

¿Qué afirmación sobre la CSAE es correcta?

- A. Es la Conferencia política multilateral que adopta acuerdos generales en materia de administración pública.
- B. Es la comisión técnica que coordina las políticas de personal y estudia la legislación básica de empleo público.
- C. Es la comisión técnica que coopera en transparencia, participación e integridad dentro del gobierno abierto.
- D. Es el órgano técnico de cooperación en administración electrónica, interoperabilidad y actuaciones conjuntas. **(correcta)**

Explicación: La CSAE es el órgano técnico de cooperación en administración electrónica dependiente de la Conferencia Sectorial de Administración Pública. La disposición adicional novena de la Ley 40/2015 recoge su naturaleza y funciones. El artículo 12 del Reglamento concreta interoperabilidad, preparación de planes conjuntos y cooperación informativa. Se distingue tanto de la Conferencia como de las otras comisiones técnicas de su estructura.

- Error A: La Conferencia Sectorial es el órgano del que depende la CSAE. El nivel político de cooperación y sus acuerdos no identifican a esta comisión técnica.
- Error B: La coordinación de política de personal y el estudio de legislación básica de empleo corresponden a la Comisión de Coordinación del Empleo Público del artículo 11, no a la CSAE.
- Error C: Transparencia, participación e integridad corresponden a la Comisión Sectorial de Gobierno Abierto del artículo 12 bis. Cooperan en ámbitos relacionados, pero no son la misma comisión.

- [Ley 40/2015, Régimen Jurídico del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) · Disposición adicional novena, apartados 1–3: CSAE · versión: Consolidación informativa BOE; última actualización publicada 02-08-2024; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Reglamento de la Conferencia Sectorial de Administración Pública](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22239) · Anexo, artículo 12.1–5: naturaleza, dependencia, composición y funciones; en particular 12.4.a–c · versión: Resolución de 20-10-2025; publicación BOE núm. 264, 03-11-2025, pp. 144303–144311; solo funciones, sin extrapolar denominaciones de cargos a 2026; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Reglamento de la Conferencia Sectorial de Administración Pública: órganos próximos](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22239) · Anexo, artículos 5, 6, 11.1–4 y 12 bis.1–4: estructura, Conferencia, empleo público y gobierno abierto · versión: Resolución 20-10-2025, BOE 03-11-2025; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `0ff12dbac0c8451f34718fb17e2e85acb3aba338ededac5d61a1e91ba6bb49ae` · propuesta: `51261cf9e451d1f58d44947c16bd2894138347fa3d0a308288342198025c42ad`

## MAN-GSI-P14-160

Decisión: pending_review · acción: revise.

Motivo: Conservar triple asociación y clave B; cuatro secuencias de forma comparable, con inversiones y aciertos parciales entre servicios próximos.

### Antes

¿Cuál de estas secuencias contiene solo asociaciones correctas?

- A. Red SARA→DNIe; @firma→DIR3; INSIDE→CTBG.
- B. Red SARA→interconexión AAPP; @firma→validación de firma/certificados; INSIDE→documento/expediente interoperable. **(correcta)**
- C. Red SARA→firma local; @firma→notificaciones; INSIDE→directorio de oficinas.
- D. Red SARA→datos abiertos; @firma→SIA; INSIDE→VPN.

Explicación: Resume tres asociaciones servicio↔función del I.10.

### Propuesta

¿Cuál de estas secuencias contiene solo asociaciones correctas?

- A. Red SARA: interconexión administrativa; @firma: gestión de expedientes; InSide: validación de firmas.
- B. Red SARA: interconexión administrativa; @firma: validación de firmas; InSide: gestión de expedientes. **(correcta)**
- C. Red SARA: intercambio registral; @firma: validación de firmas; InSide: gestión de expedientes.
- D. Red SARA: interconexión administrativa; @firma: firma local; InSide: intercambio registral.

Explicación: La asociación distingue infraestructura de comunicaciones, servicios de validación y gestión documental. Red SARA conecta Administraciones; @firma ofrece validación de firmas y certificados integrable en aplicaciones; InSide trabaja con documentos y expedientes conformes al ENI. Pueden combinarse en una solución sin que sus funciones sean intercambiables. El nombre de una plataforma no convierte toda gestión documental en archivo definitivo.

- Error A: Intercambia los papeles de @firma e InSide: validar firmas corresponde a la primera plataforma y gestionar documentos y expedientes ENI al segundo ámbito.
- Error C: Las dos últimas asociaciones son adecuadas, pero intercambio registral identifica SIR, no la red de comunicaciones SARA que puede darle soporte.
- Error D: La firma local describe AutoFirma y el intercambio registral corresponde a SIR. No son las funciones que identifican a @firma e InSide respectivamente.

- [ENI, Real Decreto 4/2010](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · Artículos 13.1–2 y 21.1.a–d: Red SARA, comunicaciones y gestión interoperable de documentos y expedientes · versión: Consolidación informativa BOE; última actualización publicada 06-11-2024; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [CTT: Red SARA](https://administracionelectronica.gob.es/ctt/redsara) · Resumen y primeros párrafos de Descripción: infraestructuras de comunicaciones y servicios básicos, conexión de Administraciones e instituciones europeas · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026; contenido primario indexado consultado mediante buscador; apertura directa rechazada por el sitio, sin atribuir comprobación de acceso en vivo · comprobado: 2026-10-27
- [CTT: Plataforma de validación de firma electrónica @firma](https://administracionelectronica.gob.es/ctt/afirma/abstract) · Summary y Description; componentes Service platforms, Support elements y Client components: plataforma multi-PKI integrable, VALIDe portal, AutoFirma cliente y Portafirmas para flujos · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026; contenido primario indexado consultado mediante buscador; apertura directa rechazada por el sitio, sin atribuir comprobación de acceso en vivo · comprobado: 2026-10-27
- [CTT: Infraestructura y Sistemas de Documentación Electrónica](https://administracionelectronica.gob.es/ctt/inside) · Resumen y Descripción, apartados InSide y G-Inside: gestión de documentos y expedientes conforme a ENI; gestión viva y distinción del archivo definitivo; generación y validación no equivalen a almacenarlo todo · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026; contenido primario indexado consultado mediante buscador; apertura directa rechazada por el sitio, sin atribuir comprobación de acceso en vivo · comprobado: 2026-10-27
- [VALIDe: Validar Firma](https://valide.redsara.es/valide/ejecutarValidarFirma/exec.html) · Encabezado Validar Firma: comprobación de validez de firma mediante plataforma @firma; página abierta directamente, sin enviar ficheros ni operar el formulario · versión: Página funcional sin versión documental declarada; consulta real y apertura directa el 27-10-2026 · comprobado: 2026-10-27
- [CTT: Sistema de Interconexión de Registros](https://administracionelectronica.gob.es/ctt/verIniciativaPInfoAdificional.htm?idIniciativa=sir) · Descripción Funcional, epígrafes El Sistema de Interconexión de Registros, Requisitos y modalidades de integración y Recursos relacionados: intercambio mediante aplicaciones integradas; GEISER y DIR3 · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026; contenido primario indexado consultado mediante buscador; apertura directa rechazada por el sitio, sin atribuir comprobación de acceso en vivo · comprobado: 2026-10-27
- [Portal de Firma Electrónica: Descargas, AutoFirma](https://firmaelectronica.gob.es/descargas) · Apartados Autofirma, Manuales y Cliente @Firma (obsoleto): aplicación de firma en el entorno del usuario e integración con navegador; no confundir cliente antiguo con plataforma @firma · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `bed1e9af35c2f1b2443019bc355c171010590e608f5a231b55364bb33174f22d` · propuesta: `085c84f1db2311d6d316b589388c249b39a40ad9d58d8a470a5dba3786454711`

## MAN-GSI-P14-123

Decisión: pending_review · acción: revise.

Motivo: Conservar definición y clave C; contrastar sectorial, bilateral, comisión de apoyo y Presidentes con opciones jurídicas próximas.

### Antes

Las Conferencias Sectoriales son:

- A. Órganos exclusivamente locales.
- B. Unidades técnicas de cada ministerio sin representación autonómica.
- C. Órganos de cooperación de composición multilateral y ámbito sectorial determinado. **(correcta)**
- D. Órganos judiciales de coordinación.

Explicación: Reúnen al miembro competente del Gobierno y a los correspondientes miembros de los gobiernos autonómicos/Ceuta/Melilla.

### Propuesta

Las Conferencias Sectoriales son:

- A. Órganos de cooperación bilateral con igual representación del Estado y una Comunidad Autónoma.
- B. Órganos técnicos de trabajo y apoyo general de la Conferencia de la materia correspondiente.
- C. Órganos de cooperación de composición multilateral y ámbito sectorial determinado. **(correcta)**
- D. Órganos multilaterales que reúnen a las presidencias de los gobiernos estatal y autonómicos.

Explicación: El artículo 147.1 de la Ley 40/2015 define las Conferencias Sectoriales por composición multilateral y ámbito sectorial. Reúnen al miembro del Gobierno competente en representación estatal y a los correspondientes miembros de los gobiernos autonómicos y de Ceuta y Melilla. No son una comisión de apoyo, una bilateral ni la Conferencia de Presidentes. La materia determina el ámbito de cooperación.

- Error A: La cooperación Estado-Comunidad con igual número de representantes describe las Comisiones Bilaterales del artículo 153, no una Conferencia Sectorial multilateral.
- Error B: El trabajo y apoyo general a la Conferencia corresponde a su Comisión Sectorial del artículo 152. No define al órgano al que presta apoyo.
- Error D: La reunión de presidencias de gobiernos corresponde a la Conferencia de Presidentes del artículo 146. Su nivel y objeto no equivalen al órgano político por materia del artículo 147.

- [Ley 40/2015, Régimen Jurídico del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) · Artículos 146.1–2, 147.1, 152.1 y 153.1–2 · versión: Consolidación informativa BOE; última actualización publicada 02-08-2024; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `250795a4e573821fa6c72b8055530471769222d3f3cd264cf2e9189216d0cecd` · propuesta: `b95076edf03f28db57b61c9ed4ab69811ccfaded9b81d653312c527d36655f34`

## MAN-GSI-P14-125

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y alternativas ya válidos; completar dependencia, composición y errores individuales con localizadores legales.

### Antes

La Comisión Sectorial de Administración Electrónica (CSAE) se define como:

- A. Un órgano técnico de cooperación en materia de administración electrónica dependiente de la Conferencia Sectorial correspondiente. **(correcta)**
- B. La propia Conferencia Sectorial que reúne a responsables políticos estatales y autonómicos, no su órgano técnico de apoyo.
- C. Una comisión interna de un único ministerio formada solo por órganos de la Administración General del Estado.
- D. La unidad que opera y gobierna técnicamente Red SARA, sin funciones de cooperación sobre administración electrónica.

Explicación: La regulación y documentación oficial la configuran como órgano técnico de cooperación entre niveles de Administración en administración electrónica.

### Propuesta

La Comisión Sectorial de Administración Electrónica (CSAE) se define como:

- A. Un órgano técnico de cooperación en materia de administración electrónica dependiente de la Conferencia Sectorial correspondiente. **(correcta)**
- B. La propia Conferencia Sectorial que reúne a responsables políticos estatales y autonómicos, no su órgano técnico de apoyo.
- C. Una comisión interna de un único ministerio formada solo por órganos de la Administración General del Estado.
- D. La unidad que opera y gobierna técnicamente Red SARA, sin funciones de cooperación sobre administración electrónica.

Explicación: La CSAE es un órgano técnico de cooperación en administración electrónica dependiente de la Conferencia Sectorial de Administración Pública. Lo establecen la disposición adicional novena de la Ley 40/2015 y el artículo 12.1 del Reglamento. Su composición incorpora representación de distintas Administraciones, incluida la local mediante la FEMP. No se reduce a una unidad operativa de red ni se identifica con el pleno de la Conferencia.

- Error B: La Conferencia y su comisión técnica son órganos distintos. La CSAE depende de aquella y tiene funciones técnicas de cooperación propias.
- Error C: La composición interadministrativa incluye AGE, Comunidades Autónomas, Ceuta y Melilla y representación local. No es una comisión exclusivamente interna de un ministerio.
- Error D: La cooperación sobre interoperabilidad y actuaciones conjuntas tiene un alcance distinto de operar una infraestructura concreta como SARA. La CSAE no se define como unidad operadora de esa red.

- [Ley 40/2015, Régimen Jurídico del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) · Disposición adicional novena, apartados 1–3 · versión: Consolidación informativa BOE; última actualización publicada 02-08-2024; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Reglamento de la Conferencia Sectorial de Administración Pública](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22239) · Anexo, artículo 12.1–5: naturaleza, dependencia, composición y funciones; en particular 12.4.a–c · versión: Resolución de 20-10-2025; publicación BOE núm. 264, 03-11-2025, pp. 144303–144311; solo funciones, sin extrapolar denominaciones de cargos a 2026; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `0baaf98a286ab117dc3b311c6e15c54958276b90a4a5130f33bd7d9a6573849f` · propuesta: `74b94647364545e282a03ab7117c92be003eaca83e5c313ba944b88dc116f49d`

## MAN-GSI-P14-126

Decisión: pending_review · acción: revise.

Motivo: Conservar función y clave D; localizar expresamente planes conjuntos en 12.4.b y comparar competencias de órganos próximos sin tribunales o emisión de certificados.

### Antes

¿Cuál es una función asociada oficialmente a la CSAE?

- A. Resolver recursos de amparo.
- B. Emitir certificados cualificados de firma.
- C. Gestionar directamente todas las sedes electrónicas del país.
- D. Asegurar compatibilidad e interoperabilidad de sistemas y aplicaciones y preparar actuaciones conjuntas. **(correcta)**

Explicación: Entre sus funciones están interoperabilidad, impulso de administración electrónica y cooperación para información clara y actualizada.

### Propuesta

¿Cuál es una función asociada oficialmente a la CSAE?

- A. Coordinar la política de personal y estudiar proyectos de legislación básica sobre empleo público.
- B. Cooperar en transparencia, participación e integridad y seguir iniciativas de gobierno abierto.
- C. Adoptar los acuerdos políticos generales de la Conferencia Sectorial en sustitución de su Pleno.
- D. Asegurar compatibilidad e interoperabilidad de sistemas y preparar planes conjuntos de administración electrónica. **(correcta)**

Explicación: La disposición adicional novena de la Ley 40/2015 atribuye a la CSAE asegurar compatibilidad e interoperabilidad e impulsar la administración electrónica. El artículo 12.4.a–b del Reglamento especifica interoperabilidad y preparación de planes y programas conjuntos. Prepararlos no significa sustituir todas las decisiones de la Conferencia ni operar directamente todas las aplicaciones de las Administraciones.

- Error A: La política de personal y los proyectos de legislación básica son funciones de la Comisión de Coordinación del Empleo Público del artículo 11. No identifican la función específica preguntada de la CSAE.
- Error B: Es el ámbito de la Comisión Sectorial de Gobierno Abierto del artículo 12 bis. La cercanía de las políticas digitales no intercambia sus funciones.
- Error C: La CSAE es un órgano técnico dependiente de la Conferencia, no su sustituto general. Preparar planes conjuntos no equivale a asumir por completo los acuerdos políticos del Pleno.

- [Ley 40/2015, Régimen Jurídico del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566) · Disposición adicional novena, apartado 2 · versión: Consolidación informativa BOE; última actualización publicada 02-08-2024; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Reglamento de la Conferencia Sectorial de Administración Pública](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22239) · Anexo, artículo 12.1–5: naturaleza, dependencia, composición y funciones; en particular 12.4.a–c · versión: Resolución de 20-10-2025; publicación BOE núm. 264, 03-11-2025, pp. 144303–144311; solo funciones, sin extrapolar denominaciones de cargos a 2026; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Reglamento de la Conferencia Sectorial de Administración Pública: órganos próximos](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-22239) · Anexo, artículos 5, 6, 11.1–4 y 12 bis.1–4: estructura, Conferencia, empleo público y gobierno abierto · versión: Resolución 20-10-2025, BOE 03-11-2025; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `dc2c558fae47bdcb588277ba2242cd9b62bbc9f24cc9d185e73d1d9bf3bba450` · propuesta: `bbf49023b2629fedb66b2312af092345b927ae1e4b25da8c2e7fed16ae2ab9f9`

## MAN-GSI-P14-137

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, clave A y tres alternativas funcionales; sustituir publicación ilícita demasiado evidente por una función real de datos abiertos, explicando oposición y excepciones sin consentimiento universal.

### Antes

La Plataforma de Intermediación de Datos permite:

- A. Consultar o verificar datos entre Administraciones para evitar exigir documentos al ciudadano cuando exista base jurídica. **(correcta)**
- B. Publicar conjuntos de datos personales para su reutilización general sin necesidad de finalidad, habilitación o minimización.
- C. Intercambiar asientos y documentos registrales entre oficinas conectadas mediante la infraestructura del sistema SIR.
- D. Autenticar y autorizar empleados públicos en aplicaciones internas mediante identidades y atributos corporativos de Autentica.

Explicación: La consulta exige finalidad, habilitación, minimización, autorización y trazabilidad; no se reduce siempre a consentimiento.

### Propuesta

La Plataforma de Intermediación de Datos permite:

- A. Consultar o verificar datos entre Administraciones para evitar exigir documentos al ciudadano cuando exista base jurídica. **(correcta)**
- B. Publicar información y conjuntos de datos abiertos para facilitar su consulta y reutilización por usuarios externos.
- C. Intercambiar asientos y documentos registrales entre oficinas conectadas mediante la infraestructura del sistema SIR.
- D. Autenticar y autorizar empleados públicos en aplicaciones internas mediante identidades y atributos corporativos de Autentica.

Explicación: La intermediación permite consultar o verificar datos para un trámite con la habilitación y finalidad correspondientes, evitando pedir de nuevo documentación disponible. El artículo 28.2–3 de la Ley 39/2015 prevé recabar documentos mediante redes o plataformas, con régimen de oposición y excepciones. No toda consulta exige siempre consentimiento expreso ni la disponibilidad técnica constituye por sí misma una base jurídica. Publicación abierta, registro e identidad son funciones diferentes.

- Error B: La publicación para reutilización abierta tiene destinatarios y condiciones diferentes. La intermediación de datos para un procedimiento no publica de forma general el resultado de consultas individuales.
- Error C: El intercambio de asientos y documentación registral corresponde a SIR mediante aplicaciones integradas. Consultar un dato necesario para un trámite es otra operación.
- Error D: Autenticar o autorizar usuarios internos corresponde al ámbito de Autentica. Identificar al usuario puede ser un requisito de consulta, pero no sustituye el servicio de intermediación ni su habilitación jurídica.

- [Ley 39/2015, Procedimiento Administrativo Común](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565) · Artículos 16.4 y 28.2–3: transmisión registral y consulta de documentos por redes o plataformas de intermediación; oposición, excepciones y ley especial · versión: Consolidación informativa BOE; última actualización publicada 06-11-2024; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [CTT: Plataforma de Intermediación de Datos](https://administracionelectronica.gob.es/ctt/svd/infoadicional) · Descripción Funcional: consultas autorizadas de datos, identificación de usuario o aplicación, finalidad y registro; contenido primario indexado consultado · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026; contenido primario indexado consultado mediante buscador; apertura directa rechazada por el sitio, sin atribuir comprobación de acceso en vivo · comprobado: 2026-10-27
- [CTT: Sistema de Interconexión de Registros](https://administracionelectronica.gob.es/ctt/verIniciativaPInfoAdificional.htm?idIniciativa=sir) · Descripción Funcional, epígrafes El Sistema de Interconexión de Registros, Requisitos y modalidades de integración y Recursos relacionados: intercambio mediante aplicaciones integradas; GEISER y DIR3 · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026; contenido primario indexado consultado mediante buscador; apertura directa rechazada por el sitio, sin atribuir comprobación de acceso en vivo · comprobado: 2026-10-27
- [CTT: AutenticA, repositorio horizontal de usuarios](https://administracionelectronica.gob.es/ctt/autentica) · Resumen y Descripción: autenticación, Single Sign On y autorización de empleados, altos cargos y usuarios relacionados; autorización opcional por aplicación e integración con Cl@ve · versión: Página funcional sin versión documental declarada; consulta real el 27-10-2026; contenido primario indexado consultado mediante buscador; apertura directa rechazada por el sitio, sin atribuir comprobación de acceso en vivo · comprobado: 2026-10-27

Partida: `dbb9d0460e4a85f1ca8bfb9899b789e63e16f2abfd2a10194ca6c645b2acc101` · propuesta: `79a3f50c6738c27cfe65f2ea5e280498481c8fff5279cd345a5e3ecd94fb1209`

## MAN-GSI-P17-001

Decisión: pending_review · acción: revise.

Motivo: Conservar función CPU y clave A; comparar procesamiento, memoria, almacenamiento e interconexión con cuatro funciones reales.

### Antes

¿Qué describe mejor la función de la CPU?

- A. Ejecuta instrucciones y coordina operaciones sobre datos mediante unidades de control y ejecución. **(correcta)**
- B. Almacena de forma persistente todos los datos del sistema.
- C. Sustituye al sistema operativo en la gestión de procesos.
- D. Actúa únicamente como controlador de red.

Explicación: La CPU interpreta y ejecuta instrucciones; almacenamiento, SO y red son subsistemas distintos.

### Propuesta

¿Qué describe mejor la función de la CPU?

- A. Ejecuta instrucciones y coordina operaciones sobre datos mediante unidades de control y ejecución. **(correcta)**
- B. Mantiene los programas y datos en memoria principal volátil para su acceso durante la ejecución.
- C. Conserva programas y archivos en almacenamiento persistente para recuperarlos tras el apagado.
- D. Transporta datos, direcciones y señales de control entre los componentes conectados del sistema.

Explicación: La CPU interpreta y ejecuta instrucciones mediante control, registros y unidades de ejecución. Puede integrar cachés y otros componentes, pero su función de procesamiento se distingue de la memoria principal, la conservación persistente y la interconexión. La unidad de control dirige el ciclo de instrucción; no reemplaza las políticas del sistema operativo por el mero hecho de ejecutar su código.

- Error B: Describe el papel de la memoria principal de trabajo. La CPU accede a esa memoria y procesa instrucciones y datos; no se define como el almacén principal volátil.
- Error C: Es la función de almacenamiento persistente, como SSD o disco. Ejecutar instrucciones no conserva por sí mismo archivos después de cortar la alimentación.
- Error D: Describe la función de buses e interconexiones. Transportar señales hace posible la comunicación, pero no equivale a interpretar y ejecutar el programa.

- [IBM: What is a microprocessor?](https://www.ibm.com/think/topics/microprocessor) · Apartados Microprocessor components y How does a microprocessor work?: ALU, control, registros temporales, caché, buses y núcleos; ciclo de instrucción · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) · Entradas RAM / Random Access Memory y SDRAM / Synchronous DRAM: memoria temporal entre almacenamiento y procesador, volatilidad predominante y memoria principal; EEPROM y SSD como contraste · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `5833fad30cc84d5369ccc2d622e19ca2a800050f9598d05e7b78d5742a60e60b` · propuesta: `b288c3246fc0828311e7a34c6d680a0c199612fb1d2c442885f0f848e6e35d63`

## MAN-GSI-P17-002

Decisión: pending_review · acción: revise.

Motivo: Conservar literalmente enunciado y opciones; precisar SMT y recursos compartidos, sin equiparar hilo software a contexto hardware ni fijar topología universal.

### Antes

En terminología de hardware, ¿qué diferencia correctamente socket, núcleo e hilo hardware?

- A. Un socket aloja un procesador físico; un núcleo es una unidad de ejecución dentro de él y un hilo hardware es un contexto lógico de ejecución expuesto por el núcleo. **(correcta)**
- B. Un socket es una unidad planificable del sistema operativo, un núcleo es el encapsulado físico y un hilo hardware es un proceso.
- C. Cada núcleo contiene varios sockets independientes y cada hilo hardware corresponde necesariamente a otro procesador físico.
- D. Socket, núcleo e hilo hardware son nombres equivalentes para la misma unidad de ejecución observada desde distintas herramientas.

Explicación: No deben confundirse procesador físico, núcleo y contexto de ejecución hardware.

### Propuesta

En terminología de hardware, ¿qué diferencia correctamente socket, núcleo e hilo hardware?

- A. Un socket aloja un procesador físico; un núcleo es una unidad de ejecución dentro de él y un hilo hardware es un contexto lógico de ejecución expuesto por el núcleo. **(correcta)**
- B. Un socket es una unidad planificable del sistema operativo, un núcleo es el encapsulado físico y un hilo hardware es un proceso.
- C. Cada núcleo contiene varios sockets independientes y cada hilo hardware corresponde necesariamente a otro procesador físico.
- D. Socket, núcleo e hilo hardware son nombres equivalentes para la misma unidad de ejecución observada desde distintas herramientas.

Explicación: La distinción separa alojamiento físico, núcleo de procesamiento y contexto lógico hardware. En la terminología ordinaria, un socket aloja el procesador y este contiene núcleos; SMT permite que un núcleo exponga varios contextos que comparten recursos de ejecución. Un hilo hardware no equivale a un proceso del sistema operativo ni garantiza duplicar rendimiento. La topología concreta depende de la arquitectura y no obliga a dos hilos por núcleo.

- Error B: Mezcla niveles: el socket es físico, no una entidad planificable; el núcleo no es el encapsulado y un proceso software puede usar distintos contextos hardware.
- Error C: Invierte la relación entre procesador y núcleos. Los contextos SMT pueden pertenecer al mismo núcleo y compartir recursos; no requieren un procesador físico adicional por hilo.
- Error D: Las herramientas pueden exponer niveles de topología distintos precisamente porque no son sinónimos. Socket, núcleo y contexto hardware no nombran la misma unidad.

- [Linux: How CPU topology info is exported via sysfs](https://docs.kernel.org/admin-guide/cputopology.html) · Introducción y atributos physical_package_id, core_id y thread_siblings; implementación dependiente de arquitectura · versión: Documentación Linux en línea, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Intel: Guidance for System Administrators to Mitigate Transient Execution Side-Channel Issues](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/best-practices/sysadmin-guidance-transient-execution-side-channel.html) · Appendix A: Hardware Overview, párrafos de Figure 6 y Simultaneous Multithreading: socket, núcleos físicos y recursos de ejecución compartidos; no se utiliza la descripción particular de L2 · versión: ID 660242; actualización 26-05-2020; se usa únicamente contexto de arquitectura, no recomendaciones actuales de seguridad; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `0a92f83d71891a555755a5b9de7c8e1d483d7f77570cfd2bd723a9bc60da153f` · propuesta: `e4836b439cb3ac278884b82066615f2a3705ea58c91f24ccbf0d94292d7bfa66`

## MAN-GSI-P17-003

Decisión: pending_review · acción: revise.

Motivo: Conservar concepto, clave B y orden habitual; usar los mismos cuatro componentes en todas las permutaciones para eliminar diferencias de longitud ajenas al conocimiento.

### Antes

¿Cuál es el orden habitual de la jerarquía de memoria desde menor latencia a mayor capacidad?

- A. RAM -> registros -> SSD -> caché.
- B. Registros -> cachés -> RAM -> almacenamiento persistente. **(correcta)**
- C. SSD -> RAM -> caché -> registros.
- D. Caché -> almacenamiento -> registros -> RAM.

Explicación: La jerarquía busca equilibrar latencia, capacidad y coste.

### Propuesta

¿Cuál es el orden habitual de la jerarquía de memoria desde menor latencia a mayor capacidad?

- A. RAM → registros → almacenamiento persistente → cachés.
- B. Registros → cachés → RAM → almacenamiento persistente. **(correcta)**
- C. Almacenamiento persistente → RAM → cachés → registros.
- D. Cachés → almacenamiento persistente → registros → RAM.

Explicación: En la jerarquía convencional, registros y cachés acercan a la ejecución datos de acceso rápido y capacidad limitada. La RAM aporta más capacidad con mayor latencia habitual, y el almacenamiento persistente amplía capacidad y conservación con acceso generalmente más lento. Es una comparación de niveles típicos, no una ley sobre cada producto o carga. Que una caché falle también cambia el tiempo observado de un acceso concreto.

- Error A: Sitúa la RAM antes de los registros y la persistencia antes de las cachés. No representa la progresión convencional desde niveles próximos y rápidos hacia mayor capacidad.
- Error C: Recorre esencialmente el sentido contrario: comienza por almacenamiento y termina en registros. El enunciado pide partir del extremo de menor latencia habitual.
- Error D: Intercala persistencia antes de registros y termina en RAM. Rompe la relación de niveles que pretende representar la jerarquía convencional.

- [Armv8-M Memory Model and Memory Protection User Guide](https://documentation-service.arm.com/static/64c783b138511951cb7a2575) · Secciones 2.7.1 y 2.7.2, pp. impresas 23–24: caché, localidad temporal/espacial y jerarquía; 2.7.3 para coherencia · versión: Versión 1.1, documento 107565_0101_01_en, Issue 01, 19-07-2023; no se atribuye MMU a este perfil M; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [IBM: What is a microprocessor?](https://www.ibm.com/think/topics/microprocessor) · Apartados Microprocessor components y How does a microprocessor work?: ALU, control, registros temporales, caché, buses y núcleos; ciclo de instrucción · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) · Entradas RAM / Random Access Memory y SDRAM / Synchronous DRAM: memoria temporal entre almacenamiento y procesador, volatilidad predominante y memoria principal; EEPROM y SSD como contraste · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `8f0f37a260d20da3a2e6e10419e986c8d66ec6e98ce875c21453ea5db1da913b` · propuesta: `d60bb4b43377a348215f60f0c56cd32fe2c95af0d3209b3e3bf2911e6dfbe372`

## MAN-GSI-P17-004

Decisión: pending_review · acción: revise.

Motivo: Conservar localidad y clave D; microcaso de reutilización y recorrido contiguo, con protección, traducción y coherencia como confusiones próximas.

### Antes

¿Qué principio explotan principalmente las memorias caché?

- A. La independencia lógica de datos.
- B. La compresión obligatoria de instrucciones.
- C. La redundancia geográfica del almacenamiento.
- D. La localidad temporal y espacial de los accesos. **(correcta)**

Explicación: Los datos e instrucciones usados recientemente o cercanos tienden a reutilizarse.

### Propuesta

Un bucle reutiliza un dato y recorre posiciones contiguas de un vector. ¿Qué principio aprovecha una caché de datos para favorecer esos accesos?

- A. La protección que impide a un proceso acceder a páginas pertenecientes a otro proceso.
- B. La traducción que conserva en una TLB asociaciones recientes de direcciones virtuales y físicas.
- C. La coherencia que evita usar copias incompatibles cuando varios agentes modifican los datos.
- D. La localidad temporal de los datos reutilizados y espacial de los accesos a posiciones próximas. **(correcta)**

Explicación: Reutilizar pronto un dato ilustra localidad temporal; recorrer posiciones próximas de un vector ilustra localidad espacial. Una caché conserva datos o instrucciones recientes en bloques para aprovechar esos patrones. Que el programa presente localidad no garantiza que todos los accesos acierten: capacidad, tamaño de línea, conflictos y política también influyen. Traducción, protección y coherencia resuelven problemas diferentes.

- Error A: La protección determina accesos permitidos entre contextos. No explica por qué reutilizar un dato o acceder a posiciones vecinas favorece la caché.
- Error B: La TLB guarda traducciones de direcciones y también aprovecha localidad, pero el caso pregunta por datos de la caché y sus dos patrones de acceso, no por el mecanismo de traducción.
- Error C: La coherencia trata la consistencia entre copias cuando hay otros agentes. No es el principio que relaciona reutilización y proximidad de posiciones con aciertos de caché.

- [Armv8-M Memory Model and Memory Protection User Guide](https://documentation-service.arm.com/static/64c783b138511951cb7a2575) · Secciones 2.7.1 y 2.7.2, pp. impresas 23–24: caché, localidad temporal/espacial y jerarquía; 2.7.3 para coherencia · versión: Versión 1.1, documento 107565_0101_01_en, Issue 01, 19-07-2023; no se atribuye MMU a este perfil M; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Linux: Concepts overview — Memory Management](https://docs.kernel.org/admin-guide/mm/concepts.html) · Virtual Memory y Page Tables: sistemas con MMU, traducción, protección, tablas y caché TLB; el texto distingue sistemas sin MMU · versión: Documentación Linux en línea, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `1c424b1bb36157755f64038617221b2ea696cc9765c8be9959433fa4c62f2c6a` · propuesta: `4553dd55d55edc601a815366445acc2af757a1b1c23be38b1f1d84be02188942`

## MAN-GSI-P17-005

Decisión: pending_review · acción: revise.

Motivo: Conservar afirmación general y clave D; comparar niveles reales, evitando siempre, clúster y capacidad superior a toda RAM.

### Antes

¿Qué afirmación sobre la caché L1 es la más adecuada en términos generales?

- A. Es el almacenamiento persistente principal del equipo.
- B. Siempre es compartida por todos los servidores de un clúster.
- C. Tiene más capacidad que la RAM del sistema.
- D. Suele ser muy rápida y pequeña, próxima al núcleo de ejecución. **(correcta)**

Explicación: L1 prioriza latencia frente a capacidad.

### Propuesta

¿Qué afirmación sobre la caché L1 es la más adecuada en términos generales?

- A. Suele ser una caché de último nivel de mayor capacidad, compartida entre varios núcleos.
- B. Suele ser la memoria principal DRAM, con más capacidad y fuera del núcleo de ejecución.
- C. Suele ser la memoria persistente que conserva el programa al interrumpir la alimentación.
- D. Suele ser muy rápida y pequeña, próxima al núcleo de ejecución. **(correcta)**

Explicación: L1 designa el primer nivel de caché próximo a la ejecución, habitualmente de poca capacidad y acceso rápido frente a niveles posteriores. Es común separar instrucciones y datos, pero organización, tamaño y compartición dependen del procesador. No es memoria persistente ni la RAM principal. La comparación es relativa dentro de una jerarquía, sin fijar cifras universales de ciclos o capacidad.

- Error A: Describe un papel frecuente de caché de último nivel, no el primer nivel próximo al núcleo. La existencia y compartición concretas de ese último nivel dependen del diseño.
- Error B: La DRAM principal es otro nivel de la jerarquía, de capacidad y acceso distintos. No se convierte en L1 por servir como memoria de trabajo.
- Error C: La persistencia tras pérdida de alimentación no es la función que define L1. Conservar el programa corresponde al almacenamiento no volátil, no a la caché típica.

- [Armv8-M Memory Model and Memory Protection User Guide](https://documentation-service.arm.com/static/64c783b138511951cb7a2575) · Secciones 2.7.1 y 2.7.2, pp. impresas 23–24: caché, localidad temporal/espacial y jerarquía; 2.7.3 para coherencia · versión: Versión 1.1, documento 107565_0101_01_en, Issue 01, 19-07-2023; no se atribuye MMU a este perfil M; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Intel: Guidance for System Administrators to Mitigate Transient Execution Side-Channel Issues](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/best-practices/sysadmin-guidance-transient-execution-side-channel.html) · Appendix A: Hardware Overview, párrafos de Figure 6 y Simultaneous Multithreading: socket, núcleos físicos y recursos de ejecución compartidos; no se utiliza la descripción particular de L2 · versión: ID 660242; actualización 26-05-2020; se usa únicamente contexto de arquitectura, no recomendaciones actuales de seguridad; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) · Entradas RAM / Random Access Memory y SDRAM / Synchronous DRAM: memoria temporal entre almacenamiento y procesador, volatilidad predominante y memoria principal; EEPROM y SSD como contraste · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `b8e4f0acfe14cd2077ee93af729ae8042e24b0e9d608243c1d930d1c18e2210b` · propuesta: `17c0d34d97ac31e2c30116e8d8a54b91020492c29dd3abec6de2d3e631b39551`

## MAN-GSI-P17-006

Decisión: pending_review · acción: revise.

Motivo: Conservar función y clave D; precisar sistema con memoria virtual y comparar planificador, DMA y controlador, sin ofrecer TLB como distractor ambiguamente verdadero.

### Antes

¿Qué papel tiene la MMU en un sistema moderno?

- A. Planifica rutas IP entre redes.
- B. Convierte un HDD en un SSD.
- C. Sustituye al compilador en tiempo de ejecución.
- D. Participa en la traducción y protección de direcciones de memoria. **(correcta)**

Explicación: La Memory Management Unit soporta traducción de direcciones y protección de memoria.

### Propuesta

En un sistema con memoria virtual basada en MMU, ¿cuál es el papel de esta unidad?

- A. Selecciona el siguiente hilo ejecutable según la política del planificador del sistema operativo.
- B. Transfiere bloques entre un dispositivo de E/S y la memoria tras configurar una operación DMA.
- C. Gestiona las señales de acceso y temporización de los chips de la memoria principal DRAM.
- D. Participa en la traducción y protección de direcciones de memoria. **(correcta)**

Explicación: En un sistema con memoria virtual basada en MMU, la unidad participa en traducir direcciones y comprobar permisos de acceso. El sistema operativo configura estructuras como tablas de páginas; la TLB acelera traducciones recientes. Planificar hilos, ejecutar transferencias DMA y controlar la interfaz DRAM son responsabilidades diferentes, aunque puedan integrarse componentes en el mismo chip. También existen sistemas sin MMU.

- Error A: Elegir qué hilo se ejecuta es función del planificador software, no la función de traducción y protección de la MMU.
- Error B: Mover datos mediante DMA es una operación de E/S configurada por el controlador. Puede implicar traducciones de IOMMU, pero no define la MMU de memoria virtual de la CPU.
- Error C: La interfaz y temporización de DRAM corresponden al controlador de memoria. La MMU trabaja con direcciones y permisos, no se identifica con ese controlador.

- [Linux: Concepts overview — Memory Management](https://docs.kernel.org/admin-guide/mm/concepts.html) · Virtual Memory y Page Tables: sistemas con MMU, traducción, protección, tablas y caché TLB; el texto distingue sistemas sin MMU · versión: Documentación Linux en línea, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Linux: Dynamic DMA mapping Guide](https://docs.kernel.org/core-api/dma-api-howto.html) · CPU and DMA addresses: controlador prepara buffer, mapea y programa dispositivo; direcciones virtuales, físicas y de bus, IOMMU y transferencia DMA · versión: Documentación Linux en línea, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) · Entradas RAM / Random Access Memory y SDRAM / Synchronous DRAM: memoria temporal entre almacenamiento y procesador, volatilidad predominante y memoria principal; EEPROM y SSD como contraste · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `11f33abf4d6b2615efca99ec3a39449e00436ef8a387fda3bed644682997e741` · propuesta: `90ec55f3d20edb14caecd28902a3cf19c5cf808938c0231e4addf175da8b72ec`

## MAN-GSI-P17-007

Decisión: pending_review · acción: revise.

Motivo: Conservar memoria de trabajo y clave B; acotar DRAM convencional para no afirmar volatilidad universal de todo acceso aleatorio, con cuatro niveles y usos plausibles.

### Antes

¿Qué describe mejor la RAM?

- A. Memoria persistente que conserva datos sin alimentación.
- B. Memoria principal volátil usada por programas y sistema operativo durante la ejecución. **(correcta)**
- C. Memoria exclusiva de la tarjeta de red.
- D. Sinónimo de caché L1.

Explicación: La RAM es memoria principal y normalmente volátil.

### Propuesta

En un equipo convencional cuya memoria principal utiliza DRAM, ¿qué descripción corresponde a esa memoria?

- A. Memoria no volátil que conserva el firmware del equipo aunque se retire la alimentación.
- B. Memoria principal volátil usada por programas y sistema operativo durante la ejecución. **(correcta)**
- C. Memoria caché próxima al núcleo que conserva copias de bloques accedidos recientemente.
- D. Almacenamiento flash persistente que conserva los archivos del equipo después del apagado.

Explicación: La memoria principal convencional basada en DRAM mantiene temporalmente código y datos durante la ejecución y necesita alimentación. Se distingue del almacenamiento persistente, del soporte del firmware y de las cachés próximas al núcleo. El enunciado delimita DRAM: acceso aleatorio por sí solo no implica que toda tecnología denominada RAM sea volátil. Que una caché también sea volátil no la convierte en memoria principal DRAM.

- Error A: Describe la conservación no volátil de firmware, por ejemplo en memoria flash. No corresponde al papel de trabajo temporal de la DRAM principal.
- Error C: Describe una caché y sus copias de bloques. Es un nivel distinto de la memoria principal, aunque ambas puedan perder contenido sin alimentación.
- Error D: Describe almacenamiento persistente flash, como el usado en un SSD. Su conservación de archivos tras el apagado contrasta con la DRAM de trabajo.

- [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) · Entradas RAM / Random Access Memory y SDRAM / Synchronous DRAM: memoria temporal entre almacenamiento y procesador, volatilidad predominante y memoria principal; EEPROM y SSD como contraste · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Armv8-M Memory Model and Memory Protection User Guide](https://documentation-service.arm.com/static/64c783b138511951cb7a2575) · Secciones 2.7.1 y 2.7.2, pp. impresas 23–24: caché, localidad temporal/espacial y jerarquía; 2.7.3 para coherencia · versión: Versión 1.1, documento 107565_0101_01_en, Issue 01, 19-07-2023; no se atribuye MMU a este perfil M; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `31e5203c4912b1bdbd5a106245fac51d4efdad68d7ea3a903967a24e312f6274` · propuesta: `d00aeade4f1d165b180faa6950ae3ecfcdbe187c7b66d356d8db7fcf7b7ee835`

## MAN-GSI-P17-009

Decisión: pending_review · acción: revise.

Motivo: Conservar aptitud para paralelismo de datos y clave C; comparar cargas computacionales reales sin sustituir SGBD, backup o direccionamiento IP.

### Antes

¿Para qué resulta especialmente apropiada una GPU?

- A. Para sustituir siempre al SGBD.
- B. Para almacenar copias de seguridad de larga duración.
- C. Para cargas con alto paralelismo de datos y muchas operaciones similares. **(correcta)**
- D. Para proporcionar direccionamiento IP al sistema.

Explicación: Las GPU explotan paralelismo masivo; no son un reemplazo universal de CPU.

### Propuesta

¿Para qué resulta especialmente apropiada una GPU?

- A. Para una cadena de operaciones dependientes que deja poca posibilidad de ejecución paralela.
- B. Para tareas diminutas aisladas cuyo coste de transferir datos domina el tiempo de cálculo.
- C. Para cargas con alto paralelismo de datos y muchas operaciones similares. **(correcta)**
- D. Para recorridos con mucho control divergente y escaso trabajo común entre los datos.

Explicación: Una GPU puede explotar gran paralelismo de datos cuando muchas operaciones similares se distribuyen entre numerosas unidades. La ventaja depende del trabajo paralelizable, la organización de accesos y los costes de transferencia y lanzamiento. No toda tarea mejora al trasladarse: dependencias y divergencia pueden limitar el beneficio. La documentación CUDA ilustra estos factores sin definir un rendimiento universal para cualquier arquitectura GPU.

- Error A: Una cadena dependiente deja poco trabajo simultáneo. Acelerar una porción paralela no elimina el tramo secuencial que limita el resultado global.
- Error B: Si las transferencias dominan una tarea muy pequeña, el cálculo acelerado puede no compensarlas. Ser computable en GPU no implica ser especialmente apropiado para ella.
- Error D: El control muy divergente y poco trabajo común dificultan explotar operaciones similares en grupos. Su efecto concreto depende de la arquitectura, pero no es la característica favorable preguntada.

- [NVIDIA CUDA C++ Best Practices Guide](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html) · Secciones 4.1.3 Understanding Scaling, 5 Parallelizing Your Code y 13.1 Branching and Divergence: fracción paralelizable, coste de transferencias y divergencia · versión: Versión 13.4 indicada por el documento consultado; ejemplo de arquitectura CUDA, sin universalizar detalles a toda GPU; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `07c39bf591247773386fd648127a9b426edd06a842b11c143deca7b7b4e8144e` · propuesta: `27bb09518c5f8b42d92d17fa1c08f50521aed3a90f9f978902c288e586a746a4`

## MAN-GSI-P17-010

Decisión: pending_review · acción: revise.

Motivo: Conservar hardware configurable y clave A; comparar FPGA, ASIC, GPU y CPU, evitando promesa automática de aceleración o confundir reconfiguración con software.

### Antes

¿Qué caracteriza a una FPGA?

- A. Permite configurar lógica hardware reprogramable para acelerar funciones específicas. **(correcta)**
- B. Es obligatoriamente un procesador general x86.
- C. Es un tipo de memoria RAM no volátil.
- D. Es un hipervisor de tipo 2.

Explicación: Una FPGA permite implementar circuitos lógicos reconfigurables.

### Propuesta

¿Qué caracteriza a una FPGA?

- A. Permite configurar lógica e interconexiones hardware después de fabricar el dispositivo. **(correcta)**
- B. Implementa un circuito especializado cuya lógica se fija para una aplicación al fabricarlo.
- C. Ejecuta numerosos hilos sobre unidades programables con una arquitectura de instrucciones.
- D. Ejecuta programas de propósito general mediante instrucciones de un procesador convencional.

Explicación: Una FPGA ofrece recursos lógicos e interconexiones configurables para implementar circuitos después de su fabricación y reconfigurarlos. Esto difiere de cargar instrucciones en una CPU o GPU y de la lógica específica fijada de un ASIC. Puede incorporar bloques dedicados o procesadores, sin que desaparezca el tejido configurable que la caracteriza. La reconfiguración no garantiza por sí sola acelerar cualquier función.

- Error B: Describe la especialización de lógica de un ASIC. Una FPGA se distingue por permitir configurar su tejido lógico después de fabricar el dispositivo.
- Error C: Describe el enfoque de ejecución programable habitual de una GPU. Programar instrucciones para unidades existentes no equivale a configurar el circuito del tejido FPGA.
- Error D: Describe el modelo de CPU de propósito general. La FPGA se caracteriza por configurar lógica e interconexiones, aunque pueda integrar un procesador.

- [AMD Vitis Unified Software Platform Documentation](https://docs.amd.com/r/2023.2-English/ug1393-vitis-application-acceleration/Working-with-Alveo-Accelerator-Cards) · Working with Alveo Accelerator Cards, epígrafe What is an FPGA?: lógica e interconexiones configurables y reconfiguración repetida · versión: UG1393, 2023.2 English, publicación 13-12-2023; fundamento de arquitectura, no selección de herramienta vigente; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Intel Technology Journal: Technology and Play Pattern — Intel Play Digital Movie Creator](https://www.intel.com/content/dam/www/public/us/en/documents/research/2001-vol05-iss-4-intel-technology-journal.pdf) · Artículo Technology and Play Pattern: Intel Play Digital Movie Creator, Hardware Architecture, pp. impresas 4–5 (PDF pp. 52–53): ASIC específico frente a procesador general y microcontrolador embebido que ejecuta firmware · versión: Intel Technology Journal Q4 2001, vol. 5, issue 4; ejemplo histórico para definición, sin extrapolar productos o prestaciones actuales; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [NVIDIA CUDA C++ Best Practices Guide](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html) · Secciones 4.1.3 Understanding Scaling, 5 Parallelizing Your Code y 13.1 Branching and Divergence: fracción paralelizable, coste de transferencias y divergencia · versión: Versión 13.4 indicada por el documento consultado; ejemplo de arquitectura CUDA, sin universalizar detalles a toda GPU; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [IBM: What is a microprocessor?](https://www.ibm.com/think/topics/microprocessor) · Apartados Microprocessor components y How does a microprocessor work?: ALU, control, registros temporales, caché, buses y núcleos; ciclo de instrucción · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `9d3338caf8a75085d0730717419c3a8f8f2940c6359489219d9ea701734d8b55` · propuesta: `2229153cbabbcc550d068926ddf81e5293f9a481cf778e09ac51401931f9b9d6`

## MAN-GSI-P17-011

Decisión: pending_review · acción: revise.

Motivo: Conservar definición y clave C; usar CPU, FPGA y memoria como conceptos reales y explicar que un ASIC puede incluir firmware.

### Antes

¿Qué caracteriza a un ASIC?

- A. Es una máquina virtual gestionada por software.
- B. Es un protocolo de almacenamiento distribuido.
- C. Es un circuito diseñado para una función o familia de funciones específicas. **(correcta)**
- D. Es un sistema operativo móvil.

Explicación: ASIC significa circuito integrado de aplicación específica.

### Propuesta

¿Qué caracteriza a un ASIC?

- A. Es un procesador de propósito general que ejecuta aplicaciones mediante su juego de instrucciones.
- B. Es un tejido lógico que se reconfigura tras fabricarse para implementar diferentes circuitos.
- C. Es un circuito diseñado para una función o familia de funciones específicas. **(correcta)**
- D. Es una memoria principal de trabajo que mantiene temporalmente los datos de los programas.

Explicación: ASIC significa circuito integrado para una aplicación específica. Su diseño se adapta a una función o familia de funciones, frente al propósito general de una CPU y al tejido reconfigurable de una FPGA. Puede contener bloques programables y ejecutar firmware: especificidad no significa que ningún comportamiento pueda actualizarse. Tampoco garantiza por definición menor coste o mayor velocidad en cualquier volumen y comparación.

- Error A: Describe el propósito general de una CPU. Un ASIC se define por la especialización del circuito, aunque pueda incluir núcleos programables en su interior.
- Error B: Describe el tejido configurable de una FPGA. Cambiar esa configuración de circuito después de fabricar el dispositivo es una distinción frente al diseño de lógica específica de un ASIC.
- Error D: Describe el papel de memoria principal, no la especialización de un circuito para una aplicación. Un ASIC puede relacionarse con memoria sin ser por ello esa memoria de trabajo.

- [Intel Technology Journal: Technology and Play Pattern — Intel Play Digital Movie Creator](https://www.intel.com/content/dam/www/public/us/en/documents/research/2001-vol05-iss-4-intel-technology-journal.pdf) · Artículo Technology and Play Pattern: Intel Play Digital Movie Creator, Hardware Architecture, pp. impresas 4–5 (PDF pp. 52–53): ASIC específico frente a procesador general y microcontrolador embebido que ejecuta firmware · versión: Intel Technology Journal Q4 2001, vol. 5, issue 4; ejemplo histórico para definición, sin extrapolar productos o prestaciones actuales; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [AMD Vitis Unified Software Platform Documentation](https://docs.amd.com/r/2023.2-English/ug1393-vitis-application-acceleration/Working-with-Alveo-Accelerator-Cards) · Working with Alveo Accelerator Cards, epígrafe What is an FPGA?: lógica e interconexiones configurables y reconfiguración repetida · versión: UG1393, 2023.2 English, publicación 13-12-2023; fundamento de arquitectura, no selección de herramienta vigente; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [IBM: What is a microprocessor?](https://www.ibm.com/think/topics/microprocessor) · Apartados Microprocessor components y How does a microprocessor work?: ALU, control, registros temporales, caché, buses y núcleos; ciclo de instrucción · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) · Entradas RAM / Random Access Memory y SDRAM / Synchronous DRAM: memoria temporal entre almacenamiento y procesador, volatilidad predominante y memoria principal; EEPROM y SSD como contraste · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `91c48c29adabb37596676e67e6d8bbe649346f847a789396a261e9583ce0f886` · propuesta: `78bdd90327d55664c8856ff46dbfd8534f3a7c46d5205a27ed848cc841c6c74e`

## MAN-GSI-P17-012

Decisión: pending_review · acción: revise.

Motivo: Conservar throughput y clave C; microcaso con cuenta simple que diferencia tasa, duración, concurrencia y utilización sin inferir latencia de una tasa concurrente.

### Antes

¿Qué métrica expresa mejor la cantidad total de trabajo procesado por unidad de tiempo?

- A. Latencia.
- B. RPO.
- C. Throughput o rendimiento agregado. **(correcta)**
- D. Tiempo de seek lógico de una página web.

Explicación: Throughput mide volumen de trabajo; latencia mide el tiempo de una operación.

### Propuesta

Un servicio admite peticiones concurrentes. Durante una ventana de 10 segundos completa 3.000 peticiones. ¿Qué conclusión se obtiene directamente de estos datos?

- A. La latencia media de las peticiones fue de 1/300 de segundo.
- B. La concurrencia media del servicio fue de 300 peticiones.
- C. El throughput observado fue de 300 peticiones por segundo. **(correcta)**
- D. La utilización media del procesador fue del 30 por ciento.

Explicación: Dividir 3.000 peticiones completadas entre 10 segundos da un throughput observado de 300 peticiones por segundo. Es trabajo completado por unidad de tiempo durante esa ventana. Con peticiones concurrentes, el inverso de esa tasa no determina la latencia individual. Tampoco basta para conocer concurrencia o utilización: se necesitan observaciones adicionales y límites de medida definidos.

- Error A: El inverso de la tasa de terminaciones es un intervalo agregado entre completados, no necesariamente duración de cada petición. El caso permite concurrencia y no aporta latencias individuales.
- Error B: Una tasa de completados no indica cuántas peticiones están simultáneamente en curso. Para concurrencia media hacen falta otros datos y condiciones de observación.
- Error D: No se ha medido tiempo ocupado o capacidad del procesador. La tasa de peticiones no fija un porcentaje de utilización.

- [Microsoft Learn: Load testing for serving endpoints](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/model-serving/what-is-load-test) · Load testing concepts and definitions, filas Latency, Client concurrency, Endpoint concurrency y Requests per second (RPS); se usan definiciones, no proporcionalidad universal entre métricas · versión: Documentación en línea; contexto de endpoint, sin convertir configuración concreta de Databricks en requisito general; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `d4fee1ccd82954f423cab39e01aebb94a909703bc1ebc2f2efd5359438e3122d` · propuesta: `b1bba98cc5ce90a0883a68d7cd1b5374966eb545b7aad3206e0064b456498225`

## MAN-GSI-P17-013

Decisión: pending_review · acción: revise.

Motivo: Conservar menor tiempo de respuesta y clave B; fijar límites extremo a extremo y comparar cuatro métricas, sin más núcleos, capacidad o mejora universal.

### Antes

¿Qué significa que un sistema tenga menor latencia?

- A. Que almacena necesariamente más datos.
- B. Que una operación o petición tarda menos en completarse o responder. **(correcta)**
- C. Que usa más núcleos obligatoriamente.
- D. Que siempre tiene mayor disponibilidad anual.

Explicación: Latencia y capacidad/HA son dimensiones distintas.

### Propuesta

Si se mide la latencia de extremo a extremo, ¿qué significa que un sistema tenga menor latencia para peticiones comparables?

- A. Que completa una mayor cantidad de peticiones por unidad de tiempo.
- B. Que una petición tarda menos desde el envío hasta recibir la respuesta completa. **(correcta)**
- C. Que mantiene un mayor número de peticiones simultáneamente en curso.
- D. Que permanece accesible durante una proporción mayor del tiempo observado.

Explicación: En la medida de extremo a extremo indicada, latencia es el tiempo transcurrido entre enviar una petición y recibir su respuesta completa. Menor latencia significa menor duración para esa operación comparable. Throughput, concurrencia y disponibilidad miden otros aspectos; no mejoran necesariamente en la misma proporción. Para comparar sistemas deben mantenerse límites y condiciones de carga y estadístico comparables, distinguiendo media y percentiles.

- Error A: Más peticiones completadas por unidad de tiempo expresa throughput. Puede variar junto a latencia, pero no es su definición ni se deduce siempre de una reducción individual.
- Error C: El número simultáneo en curso expresa concurrencia. Aumentarlo puede incluso elevar esperas bajo carga; no define menor latencia de extremo a extremo.
- Error D: La proporción de tiempo accesible expresa disponibilidad. Un servicio puede estar disponible y responder lentamente, por lo que son medidas distintas.

- [Microsoft Learn: Load testing for serving endpoints](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/model-serving/what-is-load-test) · Load testing concepts and definitions, filas Latency, Client concurrency, Endpoint concurrency y Requests per second (RPS); se usan definiciones, no proporcionalidad universal entre métricas · versión: Documentación en línea; contexto de endpoint, sin convertir configuración concreta de Databricks en requisito general; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `b708411acba3f3947fec5e961159e991288fd8a4a7c358abeaf05ce4db72f603` · propuesta: `f829bd6b3aa6250b4f87feefdc2c709ec29dad9fc7aedc8ee63c9daf745d1413`

## MAN-GSI-P17-014

Decisión: pending_review · acción: revise.

Motivo: Conservar intercambio entre componentes y clave A; comparar funciones hardware reales sin sistema de archivos o DNS, evitando bus paralelo único universal.

### Antes

¿Cuál es la función principal de un bus o interconexión del sistema?

- A. Permitir el intercambio de datos, direcciones y señales entre componentes. **(correcta)**
- B. Ejecutar el código de usuario en modo privilegiado.
- C. Reemplazar el sistema de archivos.
- D. Resolver nombres DNS.

Explicación: La interconexión comunica CPU, memoria y dispositivos/controladores.

### Propuesta

¿Cuál es la función principal de un bus o interconexión del sistema?

- A. Permitir el intercambio de datos, direcciones y señales entre componentes. **(correcta)**
- B. Interpretar y ejecutar las instrucciones del programa mediante unidades de control y cálculo.
- C. Traducir direcciones virtuales y comprobar permisos de acceso a páginas de memoria.
- D. Conservar programas y archivos de forma persistente cuando se retira la alimentación.

Explicación: Un bus o interconexión permite comunicar componentes transportando datos, direcciones y control según su protocolo. Esa comunicación conecta procesamiento, memoria y E/S, pero no sustituye sus funciones. La interconexión puede tener organización compartida, enlaces o redes internas: no se presupone un único bus paralelo para todo sistema. Sus prestaciones tampoco son idénticas al rendimiento de ejecutar instrucciones.

- Error B: Interpretar y ejecutar instrucciones es función del procesador. La interconexión transporta información que puede necesitar, sin ser el motor de ejecución del programa.
- Error C: Traducción y permisos corresponden al ámbito de la MMU en un sistema con memoria virtual. Transportar una dirección no equivale a traducirla o autorizar el acceso.
- Error D: La persistencia corresponde a almacenamiento no volátil. Una ruta de comunicación no conserva por sí misma los archivos tras cortar la alimentación.

- [IBM: What is a microprocessor?](https://www.ibm.com/think/topics/microprocessor) · Apartados Microprocessor components y How does a microprocessor work?: ALU, control, registros temporales, caché, buses y núcleos; ciclo de instrucción · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Linux: Concepts overview — Memory Management](https://docs.kernel.org/admin-guide/mm/concepts.html) · Virtual Memory y Page Tables: sistemas con MMU, traducción, protección, tablas y caché TLB; el texto distingue sistemas sin MMU · versión: Documentación Linux en línea, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Kingston Glossary](https://www.kingston.com/en/memory/kingston-glossary) · Entradas RAM / Random Access Memory y SDRAM / Synchronous DRAM: memoria temporal entre almacenamiento y procesador, volatilidad predominante y memoria principal; EEPROM y SSD como contraste · versión: Página primaria sin versión documental declarada; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `4778191d4dd7efea29c9bb4aac5dbd03e9911f66388530b173fd789fb73a870c` · propuesta: `f72b6d808049645abbf13cafbc68ca652030d436f7e4306aaa14f08ca727d6f0`

## MAN-GSI-P17-015

Decisión: pending_review · acción: revise.

Motivo: Conservar DMA y clave A; comparar E/S programada, MMU e interrupción, retirando DHCP ajeno y explicando preparación e IOMMU sin CPU ausente universal.

### Antes

¿Qué permite DMA en operaciones de E/S?

- A. Transferir datos entre dispositivo y memoria con menor intervención continuada de la CPU. **(correcta)**
- B. Hacer que la CPU copie cada palabra entre registros y dispositivo mediante instrucciones durante toda la transferencia.
- C. Traducir direcciones virtuales a físicas y aplicar protección de memoria mediante la unidad MMU y sus tablas de páginas.
- D. Obtener dirección, máscara, puerta de enlace y DNS para el dispositivo mediante un intercambio del protocolo DHCP.

Explicación: DMA reduce la carga de CPU durante determinadas transferencias de E/S.

### Propuesta

¿Qué permite DMA en operaciones de E/S?

- A. Transferir datos entre dispositivo y memoria con menor intervención continuada de la CPU. **(correcta)**
- B. Hacer que la CPU copie cada palabra mediante instrucciones durante toda la transferencia.
- C. Traducir direcciones virtuales y aplicar permisos mediante la MMU de memoria de la CPU.
- D. Avisar a la CPU de un evento del dispositivo mediante una petición de interrupción.

Explicación: DMA permite que el dispositivo o motor DMA transfiera datos hacia o desde memoria sin que la CPU ejecute la copia de cada palabra. El controlador sigue preparando buffers, mapeos y órdenes, y gestiona finalización y errores. Las direcciones DMA pueden diferir de las direcciones físicas o virtuales de CPU; puede intervenir una IOMMU. La transferencia puede complementarse con interrupciones, pero no se identifica con notificarlas.

- Error B: La copia continua mediante instrucciones de CPU describe E/S programada. DMA reduce precisamente esa intervención durante el movimiento de datos, sin eliminar toda participación de CPU.
- Error C: Describe traducción y protección de memoria virtual de CPU. Una IOMMU puede participar en mapeos DMA, pero traducir direcciones no es el traslado de datos que define DMA.
- Error D: Una interrupción notifica un evento, por ejemplo la finalización de DMA. La notificación puede acompañar la operación, pero no es la transferencia del bloque.

- [Linux: Dynamic DMA mapping Guide](https://docs.kernel.org/core-api/dma-api-howto.html) · CPU and DMA addresses: controlador prepara buffer, mapea y programa dispositivo; direcciones virtuales, físicas y de bus, IOMMU y transferencia DMA · versión: Documentación Linux en línea, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27
- [Linux: Concepts overview — Memory Management](https://docs.kernel.org/admin-guide/mm/concepts.html) · Virtual Memory y Page Tables: sistemas con MMU, traducción, protección, tablas y caché TLB; el texto distingue sistemas sin MMU · versión: Documentación Linux en línea, sin fijar versión de implementación; consulta real el 27-10-2026 · comprobado: 2026-10-27

Partida: `2a60ef22179e9ef0e8d72d2add8ea3afa072739fa6d6e0f6308228f5e90b992f` · propuesta: `0e7e12c902cde8ca3346101eade43a477877910fba3eb9205d5d161f3d61a635`
