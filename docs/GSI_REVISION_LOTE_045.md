# GSI-EDITORIAL-045 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `e9792f433da825dec04c559d042d853686b3c5f01658cd4f33960cdc671d8fa0`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P16-135

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación/rastreo mediante marca de agua y clave A; precisar información incrustada y contrastar control de acceso, firma e integridad.

### Antes

¿Qué es un “watermark” o marca de agua digital en este contexto?

- A. Un mecanismo técnico que puede identificar o rastrear copias/usuarios sin ser por sí mismo la licencia jurídica. **(correcta)**
- B. Sistema que controla el acceso y uso de contenidos mediante licencias y restricciones técnicas.
- C. Mecanismo criptográfico que acredita autoría e integridad, sin insertar un identificador rastreable en cada copia.
- D. Hash criptográfico que permite comprobar si el contenido cambió, sin incorporar información dentro de la obra.

Explicación: Es un ejemplo de medida técnica/forense.

### Propuesta

¿Qué caracteriza una marca de agua digital o watermark?

- A. Información incrustada en el contenido para identificar su origen o una copia. **(correcta)**
- B. Reglas de acceso que exigen una clave válida para reproducir un contenido.
- C. Datos de una firma digital para verificar firmante e integridad de un archivo.
- D. Resumen criptográfico externo para detectar modificaciones de un archivo.

Explicación: Una marca de agua inserta información en el contenido; puede identificar obra, titular, copia, usuario o ruta de distribución según su diseño. EUIPO distingue marcas visibles e invisibles y funciones diferentes. Puede ayudar a autenticar o rastrear, sin ser por sí misma la licencia jurídica ni garantizar identificar a una persona o acreditar concluyentemente titularidad en cualquier caso.

- Error B: Condicionar reproducción a una clave describe control de acceso, no la función de información incrustada que define la marca de agua preguntada; ambos pueden coexistir.
- Error C: Una firma permite verificar firmante e integridad según su esquema, pero no equivale por sí sola a incrustar una marca identificativa en el contenido.
- Error D: El resumen externo permite comparar integridad; no incorpora por sí mismo información de identificación dentro de la obra como una marca de agua.

- [EUIPO: Digital Watermarks, Anti-Counterfeiting and Anti-Piracy Technology Guide](https://euipo.europa.eu/anti-counterfeiting-and-anti-piracy-technology-guide/technologies-digital-media/digital-watermarks) · Description; Uses: Content-ID, Owner-ID, User-ID y Network-ID; Implementation · versión: Guía pública consultada en inglés, sin número de versión documental mostrado; marcas visibles/invisibles y funciones diversas, sin presentarlas como licencia o prueba jurídica concluyente · comprobado: 2026-10-28
- [Library of Congress: Sustainability Factors](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml) · Disclosure; External dependencies; Technical protection mechanisms: migración, copias, dispositivos, contraseñas y conexión activa · versión: Página actualizada 14-02-2025; criterios de preservación de la Library of Congress, no prohibición legal general de DRM · comprobado: 2026-10-28

Partida: `c7c20d7d0afb023e5bffbc65eef5961768e4c1f1f0afdd8ba84dcdb14bab321f` · propuesta: `34b0d30286a7753752811332d8689d4b583aa3dcdeae7752fb2ba35f17b02318`

## MAN-GSI-P16-137

Decisión: pending_review · acción: revise.

Motivo: Conservar error de inferir ausencia de barreras a partir de un derecho y clave C; eliminar contexto dependiente «otro error inverso» y equilibrar cuatro razonamientos.

### Antes

¿Qué otro error inverso debe evitarse?

- A. Comprobar que el mecanismo técnico es compatible con derechos concedidos.
- B. Probar escenarios offline.
- C. Pensar que una licencia concede un derecho y por ello el producto nunca puede tener una barrera técnica que dificulte ejercerlo. **(correcta)**
- D. Documentar dependencias.

Explicación: La implementación puede introducir barreras que deben detectarse aunque exista un derecho contractual/licenciado.

### Propuesta

Al evaluar derechos de uso y controles técnicos, ¿qué inferencia es incorrecta?

- A. El permiso jurídico y el funcionamiento técnico requieren comprobaciones distintas.
- B. Probar el uso sin conexión ayuda a evaluar ciertas dependencias de acceso.
- C. Conceder un derecho de uso elimina las barreras técnicas para ejercerlo. **(correcta)**
- D. Documentar claves y servicios ayuda a conocer las dependencias de acceso.

Explicación: Un derecho concedido no elimina automáticamente las barreras técnicas de la implementación. Deben comprobarse compatibilidad entre permisos y funcionamiento, dependencias y escenarios reales. EPUB Accessibility ilustra que restricciones de distribución pueden dificultar el uso de tecnologías de apoyo aun sobre una publicación creada accesible; PlayReady muestra que la disponibilidad de licencias técnicas es una condición operativa distinta del título jurídico.

- Error A: Distinguir permiso y funcionamiento es una comprobación pertinente: no asume que el derecho modifique automáticamente el producto.
- Error B: Ensayar escenarios sin conexión ayuda a determinar si existen licencias locales válidas o dependencias de adquisición, sin afirmar que todo DRM funcione offline.
- Error D: Conocer claves y servicios permite identificar condiciones de acceso y continuidad; documentarlos no concede por sí mismo derechos ni autoriza eludir controles.

- [Microsoft Learn: PlayReady — License Acquisition](https://learn.microsoft.com/en-us/playready/overview/license-acquisition) · Server and Client interactions; Proactive, Reactive license acquisition; pasos 5–11 de adquisición; licencias, derechos y condiciones · versión: Artículo actualizado 07-11-2018; documentación de un sistema concreto, no comportamiento obligatorio de cualquier DRM · comprobado: 2026-10-28
- [W3C: EPUB Accessibility 1.1](https://www.w3.org/TR/2024/REC-epub-a11y-11-20241017/) · 5 Distribution: restricciones DRM, tecnologías de apoyo y text-to-speech; notas sobre distribución y límites de responsabilidad del creador · versión: W3C Recommendation de 17-10-2024; alcance EPUB, no obligación legal universal sobre cualquier aplicación · comprobado: 2026-10-28

Partida: `b190e1c6bf3d56f230a5466778687d676f3fd202b607a2f0cdba6cc08551e113` · propuesta: `1f152ff5472fcf505da336145239b441a1011a7b15c254dd5db9cf91c33921de`

## MAN-GSI-P16-138

Decisión: pending_review · acción: revise.

Motivo: Conservar infracción específica de instrumentos y clave B; precisar circulación/tenencia comercial, único uso y falta de autorización, sin prohibir herramientas polivalentes por su mera capacidad.

### Antes

¿Qué relación hay entre medidas de protección y el TRLPI de programas?

- A. La ley exige que todo programa incorpore DRM y considera infracción distribuir software sin un mecanismo técnico de protección.
- B. La ley contempla infracciones relacionadas con instrumentos destinados a suprimir o neutralizar sin autorización dispositivos técnicos de protección, en el supuesto regulado. **(correcta)**
- C. El usuario legítimo puede neutralizar cualquier protección sin límites, con independencia de finalidad, autorización y supuesto legal.
- D. Cualquier herramienta capaz de interactuar con una protección está prohibida, aunque tenga finalidades legítimas y no se destine a suprimirla.

Explicación: El artículo 102 contempla específicamente dispositivos técnicos de protección.

### Propuesta

Según el artículo 102.c TRLPI, ¿qué instrumentos pueden originar infracción al ponerse en circulación o tenerse con fines comerciales para actuar sobre la protección de programas?

- A. Los que permiten interoperar aunque no faciliten neutralizar una protección.
- B. Los de único uso para facilitar supresión o neutralización no autorizadas. **(correcta)**
- C. Los que verifican integridad aunque no alteren los controles de protección.
- D. Los de uso legítimo que además permiten analizar protecciones con autorización.

Explicación: El artículo 102.c considera infractores a quienes pongan en circulación o tengan con fines comerciales instrumentos cuyo único uso sea facilitar la supresión o neutralización no autorizadas de dispositivos técnicos que protejan programas. Se respetan sus elementos y la salvedad del artículo 100. El artículo 196.4 remite las medidas sobre programas a su normativa propia; no se trasladan sin más todos los criterios del régimen general a este supuesto.

- Error A: Interoperar no implica necesariamente facilitar neutralización no autorizada; la descripción no reúne el elemento de único uso exigido por el artículo citado.
- Error C: Verificar integridad sin alterar protecciones no es el instrumento de único uso para facilitar supresión o neutralización no autorizadas descrito en la norma.
- Error D: La mera capacidad de análisis autorizado junto a un uso legítimo no satisface el criterio específico de único uso para neutralización no autorizada.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.2 originalidad y 96.4 ideas; 98 duración; 99 explotación; 100 límites; 102.c circulación o tenencia comercial de instrumentos de único uso; 196.4 normativa propia de medidas sobre programas · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `20572d8ca77b4e020160cd93910f3f5dfc1640be1aec1840435fc76db9eae8ec` · propuesta: `9be174a48b845115d40b587463148901953344d6313ab355a1c353974ad85bc4`

## MAN-GSI-P16-139

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la evaluación equilibrada y clave D; ampliar los límites de cada enfoque y diferenciar recomendaciones técnicas de mandatos jurídicos.

### Antes

¿Qué opción refleja una evaluación equilibrada de DRM?

- A. Elegir la alternativa que imponga más restricciones técnicas sin analizar finalidad, usuarios ni ciclo de vida.
- B. Descartar cualquier uso de DRM sin valorar activos, obligaciones, riesgos o medidas proporcionadas al contexto.
- C. Aceptar las capacidades anunciadas por el proveedor sin comprobar dependencia, privacidad, accesibilidad o preservación.
- D. Valorar protección de activos junto con impacto en disponibilidad, privacidad, accesibilidad, interoperabilidad y preservación. **(correcta)**

Explicación: Los controles deben ser proporcionales y compatibles con objetivos de servicio.

### Propuesta

¿Qué opción refleja una evaluación equilibrada de DRM?

- A. Elegir la alternativa que imponga más restricciones técnicas sin analizar finalidad, usuarios ni ciclo de vida.
- B. Descartar cualquier uso de DRM sin valorar activos, obligaciones, riesgos o medidas proporcionadas al contexto.
- C. Aceptar las capacidades anunciadas por el proveedor sin comprobar dependencia, privacidad, accesibilidad o preservación.
- D. Valorar protección de activos junto con impacto en disponibilidad, privacidad, accesibilidad, interoperabilidad y preservación. **(correcta)**

Explicación: La evaluación pondera qué se quiere proteger y el efecto real del control sobre el servicio y sus usuarios. Disponibilidad, privacidad, tecnologías de apoyo, integración y acceso futuro requieren pruebas y decisiones proporcionadas al contexto. Las referencias W3C y Library of Congress describen riesgos técnicos; OSOR orienta planificación de soporte y salida. No imponen por sí solas adoptar o rechazar todo DRM.

- Error A: Aumentar restricciones sin evaluar finalidad o usuarios puede perjudicar el servicio; el grado de bloqueo no demuestra adecuación del control.
- Error B: El rechazo por etiqueta omite valorar activos, obligaciones y alternativas concretas; no es la evaluación contextual preguntada.
- Error C: Las capacidades anunciadas no acreditan comportamiento real ante pérdida de servicios, tratamiento de datos, tecnologías de apoyo o preservación.

- [W3C: Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/) · 1 Introduction; 2 Definitions: License; 11.1 Information Disclosed, 11.2 Fingerprinting y 11.4 User Tracking · versión: W3C Recommendation de 18-09-2017, URL de versión fija. No se confunde con Working Draft de 13-10-2026 de la URL general ni se presenta EME como un DRM completo · comprobado: 2026-10-28
- [W3C: EPUB Accessibility 1.1](https://www.w3.org/TR/2024/REC-epub-a11y-11-20241017/) · 5 Distribution: restricciones DRM, tecnologías de apoyo y text-to-speech; notas sobre distribución y límites de responsabilidad del creador · versión: W3C Recommendation de 17-10-2024; alcance EPUB, no obligación legal universal sobre cualquier aplicación · comprobado: 2026-10-28
- [Library of Congress: Sustainability Factors](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml) · Disclosure; External dependencies; Technical protection mechanisms: migración, copias, dispositivos, contraseñas y conexión activa · versión: Página actualizada 14-02-2025; criterios de preservación de la Library of Congress, no prohibición legal general de DRM · comprobado: 2026-10-28
- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `d8a753aa6a7f1a0aa9461e54af19f304c4932507f90f80627d54f8651c92b1ab` · propuesta: `c908c4bdd08e11e91b0427360077a4795ec7e855cc0d29e70f5183ca1bde38f0`

## MAN-GSI-P16-140

Decisión: pending_review · acción: revise.

Motivo: Conservar separación de DRM, licencia y riesgos y clave A; quitar el metaresumen de bloque y comparar cuatro relaciones entre control y derechos.

### Antes

¿Qué frase resume mejor el bloque específico de DRM?

- A. DRM es un mecanismo técnico con efectos operativos; no sustituye el análisis de licencia, derechos, continuidad y riesgos. **(correcta)**
- B. DRM y licencia son exactamente lo mismo.
- C. DRM elimina el lock-in.
- D. Todo software libre carece de cualquier medida técnica de control.

Explicación: La separación conceptual es esencial.

### Propuesta

Sobre DRM, permisos jurídicos y continuidad, ¿qué afirmación es correcta?

- A. El DRM es control técnico; requiere analizar derechos y riesgos operativos. **(correcta)**
- B. El control de acceso determina los permisos jurídicos de cualquier licencia.
- C. El uso de DRM resuelve la salida al compartir el mismo archivo protegido.
- D. La licencia libre excluye cualquier mecanismo técnico en la implementación.

Explicación: DRM describe mecanismos técnicos con efectos operativos, que deben examinarse junto a licencia, derechos, continuidad y riesgos. Un objeto técnico de licencia no sustituye al título jurídico y disponer del archivo protegido no garantiza lectura o migración futura. Tampoco se deduce de una etiqueta de licencia toda la implementación; su compatibilidad con condiciones concretas debe comprobarse.

- Error B: Lo que un sistema permite técnicamente no determina por sí mismo qué está jurídicamente autorizado por licencia o ley.
- Error C: Compartir el archivo no resuelve por sí solo acceso a claves, clientes o entornos compatibles y, por tanto, no garantiza salida operativa.
- Error D: Una licencia libre no describe todos los mecanismos técnicos presentes; deben comprobarse sus condiciones y cómo se implementan, sin presumir compatibilidad de cualquier restricción.

- [Microsoft Learn: PlayReady — License Acquisition](https://learn.microsoft.com/en-us/playready/overview/license-acquisition) · Server and Client interactions; Proactive, Reactive license acquisition; pasos 5–11 de adquisición; licencias, derechos y condiciones · versión: Artículo actualizado 07-11-2018; documentación de un sistema concreto, no comportamiento obligatorio de cualquier DRM · comprobado: 2026-10-28
- [Library of Congress: Sustainability Factors](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml) · Disclosure; External dependencies; Technical protection mechanisms: migración, copias, dispositivos, contraseñas y conexión activa · versión: Página actualizada 14-02-2025; criterios de preservación de la Library of Congress, no prohibición legal general de DRM · comprobado: 2026-10-28
- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `160566f11559e2c4ce669cbda1e47c6ef00fc5c6368d224ba40f286d2222ef56` · propuesta: `57aeba04500a4abe634bc39497473050a417069a223b2bde34ad02ec48ebc025`

## MAN-GSI-P16-141

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro el microcaso y clave D; explicar que inventario actualizado habilita análisis, sin certificar seguridad o cumplimiento por su mera existencia.

### Antes

Una Administración recibe una aplicación con 300 dependencias de terceros. ¿Qué debería exigir primero para gobernar licencias y vulnerabilidades?

- A. Un manifiesto que declara dependencias directas del proyecto, pero omite transitivas, origen, licencias y componentes incorporados.
- B. Un informe puntual de vulnerabilidades con severidad y recomendaciones, sin inventario persistente de componentes.
- C. Una lista de nombres de licencias encontradas sin asociarlas a componentes, versiones, procedencia o evidencias.
- D. Una SBOM/inventario con componentes, versiones, origen y licencias, más proceso de actualización. **(correcta)**

Explicación: Sin inventario no puede gestionarse cumplimiento ni cadena de suministro.

### Propuesta

Una Administración recibe una aplicación con 300 dependencias de terceros. ¿Qué debería exigir primero para gobernar licencias y vulnerabilidades?

- A. Un manifiesto que declara dependencias directas del proyecto, pero omite transitivas, origen, licencias y componentes incorporados.
- B. Un informe puntual de vulnerabilidades con severidad y recomendaciones, sin inventario persistente de componentes.
- C. Una lista de nombres de licencias encontradas sin asociarlas a componentes, versiones, procedencia o evidencias.
- D. Una SBOM/inventario con componentes, versiones, origen y licencias, más proceso de actualización. **(correcta)**

Explicación: El punto de partida es un inventario utilizable y mantenido que asocie componentes y versiones con procedencia, relaciones y licencias, para gobernar cambios y contrastar avisos de seguridad. La SBOM aporta transparencia; no certifica ausencia de vulnerabilidades ni que la licencia esté jurídicamente resuelta. CISA anunció mínimos nuevos en julio de 2026 y NIST PS.3.2 propone actualizar procedencia al cambiar componentes.

- Error A: Las dependencias directas no representan por sí solas todas las piezas incorporadas o transitivas; omitir alcance, procedencia y licencias dificulta evaluar el producto recibido.
- Error B: Un informe puntual de vulnerabilidades es complementario: sin inventario mantenido no identifica de forma persistente qué versiones componen cada entrega.
- Error C: Los nombres de licencias sin correspondencia con componentes, versiones y evidencias no permiten reconstruir obligaciones o localizar el componente afectado por un aviso.

- [CISA: anuncio oficial de los mínimos SBOM 2026](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/422a7eb) · Anuncio de 29-07-2026: definición SBOM, What’s New, campos Component Hash, License, SBOM Tool Name y SBOM Generation Context, formatos procesables · versión: Boletín oficial CISA de 29-07-2026, 11:33 EDT. El PDF y su página CISA devolvieron 403; se cita solo el anuncio accesible, sin atribuirle lectura de apartados del PDF ni usar borrador 2025 como texto final · comprobado: 2026-10-28
- [SPDX: Specification 2.3.1, Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.1 nombre; 7.2 SPDX identifier; 7.3 versión; 7.5/7.6 proveedor/originador; 7.7 descarga; 7.10 checksum; 7.12 fuente; 7.13 concluded license, 7.15 declared license y 7.16 comentarios · versión: Versión fija 2.3.1; un SPDXID no es una licencia ni identifica por sí solo el artefacto global. NONE/NOASSERTION se conservan como incertidumbre o ausencia, sin asignar MIT por defecto · comprobado: 2026-10-28
- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28
- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.2.2.5 revisión y remediación de incumplimientos; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4 artefactos · versión: Versión oficial OpenChain 2.1, equivalente funcional a ISO/IEC 5230:2020 según el propio documento; no se atribuye certificación a esta aplicación ni carácter legal universal · comprobado: 2026-10-28

Partida: `97aaeb16e78922cc6228d05d2d3163628b60928610439634c7c56704ba7f5de9` · propuesta: `db11ce01692e9153f2a8ea2bb407845a8b8b737eab0487bd96f9ba0f5244a04e`

## MAN-GSI-P16-142

Decisión: pending_review · acción: revise.

Motivo: Conservar definición de SBOM y clave B; cuatro artefactos próximos y comparables, reconociendo que manifiestos/lockfiles pueden aportar datos.

### Antes

¿Qué es una SBOM?

- A. Informe de análisis que enumera vulnerabilidades detectadas y su severidad en una ejecución concreta.
- B. Un inventario estructurado de componentes de software que ayuda a conocer dependencias y versiones; debe complementarse con información fiable de licencias y seguridad. **(correcta)**
- C. Archivo que fija versiones exactas y el árbol resuelto de dependencias para reproducir una instalación.
- D. Manifiesto que declara dependencias directas y configuración para un gestor de paquetes.

Explicación: Software Bill of Materials es una “lista de materiales” del software.

### Propuesta

¿Qué definición describe mejor una SBOM de un producto de software?

- A. Informe puntual de vulnerabilidades con severidades y recomendaciones.
- B. Inventario estructurado de componentes, relaciones y datos identificativos. **(correcta)**
- C. Archivo de resolución de versiones para reproducir una instalación.
- D. Manifiesto de dependencias directas para un gestor de paquetes.

Explicación: Software Bill of Materials es un inventario estructurado de componentes de un producto y datos que permiten identificarlos y entender sus relaciones. Su alcance, exactitud y contexto de generación importan. Debe relacionarse con información fiable de licencias y seguridad; no sustituye por sí sola análisis jurídico o de vulnerabilidades. Manifiestos y lockfiles pueden servir como entradas o aportar inventario, sin ser por su sola etiqueta una descripción completa de la entrega.

- Error A: El informe enumera hallazgos de seguridad en un momento; puede basarse en una SBOM, pero no es la definición general del inventario de componentes.
- Error C: El archivo de resolución fija dependencias para instalación; puede aportar datos a una SBOM, pero su finalidad no define por sí sola el inventario completo del producto entregado.
- Error D: Un manifiesto declara requisitos del gestor y puede omitir dependencias transitivas o elementos incorporados; por sí solo no define el concepto general de SBOM.

- [CISA: anuncio oficial de los mínimos SBOM 2026](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/422a7eb) · Anuncio de 29-07-2026: definición SBOM, What’s New, campos Component Hash, License, SBOM Tool Name y SBOM Generation Context, formatos procesables · versión: Boletín oficial CISA de 29-07-2026, 11:33 EDT. El PDF y su página CISA devolvieron 403; se cita solo el anuncio accesible, sin atribuirle lectura de apartados del PDF ni usar borrador 2025 como texto final · comprobado: 2026-10-28
- [SPDX: Specification 2.3.1, Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.1 nombre; 7.2 SPDX identifier; 7.3 versión; 7.5/7.6 proveedor/originador; 7.7 descarga; 7.10 checksum; 7.12 fuente; 7.13 concluded license, 7.15 declared license y 7.16 comentarios · versión: Versión fija 2.3.1; un SPDXID no es una licencia ni identifica por sí solo el artefacto global. NONE/NOASSERTION se conservan como incertidumbre o ausencia, sin asignar MIT por defecto · comprobado: 2026-10-28

Partida: `4c95801820a2b5da0177ac7716f302640802949113a20d820c80d33ab1f16c06` · propuesta: `02b3e25c717b85929a0c2bba02e95ad001bdedf04e855ffb8602020096bed243`

## MAN-GSI-P16-143

Decisión: pending_review · acción: revise.

Motivo: Conservar respuesta prudente ante licencia incierta y clave A; precisar redistribución prevista de una aplicación ya usada, sin confundir retención de entrega con apagado automático.

### Antes

Detectas una dependencia sin licencia identificable en producción. ¿Cuál es la mejor actuación?

- A. Detener su incorporación/redistribución hasta aclarar procedencia, derechos y alternativa, según política. **(correcta)**
- B. Tratarla como MIT porque el repositorio es público y permite consultar el código, aunque no exista aviso de licencia.
- C. Marcarla internamente como permisiva y continuar su redistribución mientras solo se utilice dentro de la organización.
- D. Eliminar del paquete los metadatos sin licencia y mantener el binario, suponiendo que así desaparece la incertidumbre jurídica.

Explicación: La ausencia de licencia clara es un riesgo jurídico que requiere resolución.

### Propuesta

Se prepara para redistribuir una aplicación ya usada en producción. Una dependencia carece de licencia identificable. ¿Qué actuación corresponde?

- A. Retener la redistribución afectada y aclarar procedencia, derechos y alternativas. **(correcta)**
- B. Presumir licencia MIT por estar el repositorio públicamente accesible.
- C. Registrar el componente como heredado y continuar sin analizar sus permisos.
- D. Eliminar los avisos del paquete y conservar su implementación sin cambios.

Explicación: La incertidumbre sobre derechos requiere investigar procedencia, versión, licencia y evidencia antes de continuar la redistribución afectada, conforme al proceso de revisión. Un repositorio público no concede por sí solo permiso general de incorporación o redistribución. Tampoco se ordena apagar automáticamente toda producción: deben delimitarse los actos afectados y decidir tratamiento o sustitución según derechos y política.

- Error B: Visibilidad pública no equivale a MIT; pueden existir permisos específicos de plataforma o derechos legales, pero no la licencia permisiva presumida.
- Error C: Clasificar como heredado documenta antigüedad, no autorización; debe revisarse el permiso aplicable a la redistribución prevista.
- Error D: Suprimir avisos no resuelve la falta de permiso y puede eliminar información necesaria para cumplir condiciones o reconstruir procedencia.

- [GitHub Docs: Licensing a repository](https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) · Choosing the right license; nota sobre derechos de ver y hacer fork de repositorios públicos conforme a términos de GitHub · versión: Documentación web vigente consultada el 28-10-2026. Visibilidad pública no equivale a licencia general; se distinguen permisos específicos de la plataforma y derechos legales aplicables · comprobado: 2026-10-28
- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.2.2.5 revisión y remediación de incumplimientos; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4 artefactos · versión: Versión oficial OpenChain 2.1, equivalente funcional a ISO/IEC 5230:2020 según el propio documento; no se atribuye certificación a esta aplicación ni carácter legal universal · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.2 originalidad y 96.4 ideas; 98 duración; 99 explotación; 100 límites; 102.c circulación o tenencia comercial de instrumentos de único uso; 196.4 normativa propia de medidas sobre programas · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `201eda0aa4ad9527a472ea2841bd235afda4974107affbbffc43c958365d6f81` · propuesta: `6fc1ebdba362724b2e0d89bbc6b0ae7fdea798b1cbecb561f9112160f7457fc3`

## MAN-GSI-P16-144

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la comparación de SAM, hardware, SBOM y soporte y clave C; explicar reconciliación de instalaciones y derechos.

### Antes

¿Qué debe registrar un proceso de Software Asset Management?

- A. Un inventario de equipos, números de serie y configuraciones de hardware sin derechos de uso de software.
- B. Una SBOM que enumera componentes y dependencias de una aplicación sin acreditar adquisiciones ni licencias disponibles.
- C. Software instalado/adquirido, licencias, derechos de uso, evidencias, versiones y condiciones relevantes. **(correcta)**
- D. Un registro de incidencias de instalación y soporte sin catálogo de productos, versiones, contratos o evidencias.

Explicación: SAM busca control de activos y cumplimiento de licencias.

### Propuesta

¿Qué debe registrar un proceso de Software Asset Management?

- A. Un inventario de equipos, números de serie y configuraciones de hardware sin derechos de uso de software.
- B. Una SBOM que enumera componentes y dependencias de una aplicación sin acreditar adquisiciones ni licencias disponibles.
- C. Software instalado/adquirido, licencias, derechos de uso, evidencias, versiones y condiciones relevantes. **(correcta)**
- D. Un registro de incidencias de instalación y soporte sin catálogo de productos, versiones, contratos o evidencias.

Explicación: SAM relaciona el software adquirido e instalado con derechos, cantidades o métricas, versiones y condiciones, conservando evidencias para reconciliar uso y permisos. La documentación primaria de Flexera ilustra comparación de compras e instalaciones y efectos de SKU, suscripción y mantenimiento. Se usa como ejemplo de gestión, no como definición legal universal ni recomendación de una herramienta.

- Error A: El inventario de equipos aporta contexto de despliegue, pero no identifica por sí solo derechos, condiciones ni evidencias de uso de software.
- Error B: La SBOM describe composición de una aplicación y puede complementar SAM; no prueba por sí sola cuántos derechos se adquirieron o a quién se asignaron.
- Error D: Las incidencias de instalación o soporte no sustituyen catálogo, contratos y evidencias necesarios para reconciliar uso con derechos.

- [Flexera One: Purchases, documentación de IT Asset Management](https://docs.flexera.com/flexera-one/it-assets/procure-intro/purch-intro/) · Purchases: software asset management, license entitlements, comparación de compras e instalaciones, SKU, condiciones, upgrades, suscripciones y mantenimiento · versión: Documentación web del fabricante consultada el 28-10-2026, sin versión cerrada indicada; ejemplo primario de reconciliación SAM, sin recomendar el producto ni convertir su implementación en norma universal · comprobado: 2026-10-28

Partida: `491e5d77a87c7589f8f43cc278f39a4d144122996cb86c5a876dcd8b30b87424` · propuesta: `b14aeed8c979f0b12121c82950a7a59668c63dbdba0922dc1c4c142451db7739`

## MAN-GSI-P16-145

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción licencia/soporte/seguridad y clave A; microcaso existente con razones cercanas y sin confundir cese de mantenimiento y dominio público.

### Antes

Una dependencia deja de tener soporte. ¿Por qué interesa además de la licencia?

- A. Porque el riesgo de seguridad y mantenimiento también forma parte de la gobernanza de componentes. **(correcta)**
- B. Perder automáticamente el copyright al finalizar el soporte, de modo que cualquier tercero pueda copiar, modificar y redistribuir el componente.
- C. Pasar inmediatamente al dominio público, aunque la duración de los derechos y las condiciones de licencia no dependan del mantenimiento ofrecido.
- D. Caducar toda licencia cuando termina el soporte y quedar prohibida desde ese momento cualquier ejecución de las versiones ya obtenidas.

Explicación: Licencia, soporte y vulnerabilidades son dimensiones distintas que deben gestionarse juntas.

### Propuesta

Una dependencia deja de recibir soporte del proveedor. ¿Por qué debe revisarse aunque se disponga de licencia?

- A. Porque deben evaluarse parches, mantenimiento y alternativas de continuidad. **(correcta)**
- B. Porque el fin de soporte extingue por sí solo el derecho de uso adquirido.
- C. Porque no recibir avisos del proveedor demuestra que no quedan vulnerabilidades.
- D. Porque disponer del fuente evita revisar el mantenimiento del componente.

Explicación: El fin del soporte puede dejar sin parches o asistencia y exige evaluar riesgo, mantenimiento alternativo o sustitución. Es una dimensión diferente de la licencia: la terminación del soporte no determina por sí sola duración o extinción de todos los derechos de uso. Deben examinarse las condiciones efectivas. Tener fuente tampoco garantiza disponer de capacidad o recursos para mantenerlo con seguridad.

- Error B: No puede inferirse extinción automática por el solo fin del soporte; duración, renovación y derechos dependen de licencia, contrato y ley aplicables.
- Error C: La ausencia de avisos del proveedor puede deberse precisamente al cese de actividad; no acredita ausencia de vulnerabilidades y deben usarse otras fuentes.
- Error D: El acceso al fuente no asegura personal, conocimiento, herramientas o proceso para corregir; la capacidad de mantenimiento debe evaluarse.

- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.2 originalidad y 96.4 ideas; 98 duración; 99 explotación; 100 límites; 102.c circulación o tenencia comercial de instrumentos de único uso; 196.4 normativa propia de medidas sobre programas · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `f5c5964f5ae061fa4bf68a40d286bbce7ee75b9a7428fddf241941e299357f19` · propuesta: `4f1382d9d1af9693db65dc58a271d6f44a4623bd361754e98f1880b1295f709b`

## MAN-GSI-P16-146

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la gobernanza de dependencias y clave C; diferenciar inventario, escaneo, catálogo de licencias y proceso completo.

### Antes

¿Qué debe incluir una política de dependencias open source?

- A. Mantener un inventario SBOM de componentes y versiones sin reglas de aprobación, actualización o redistribución.
- B. Ejecutar un análisis de vulnerabilidades puntual sin gobernar licencias, procedencia ni mantenimiento posterior.
- C. Criterios de aprobación, licencias aceptables, revisión de seguridad, inventario, actualización y obligaciones de redistribución. **(correcta)**
- D. Publicar una lista de licencias permitidas sin proceso para revisar seguridad, excepciones y obligaciones concretas.

Explicación: La gobernanza debe cubrir legal, seguridad y ciclo de vida.

### Propuesta

¿Qué debe incluir una política de dependencias open source?

- A. Mantener un inventario SBOM de componentes y versiones sin reglas de aprobación, actualización o redistribución.
- B. Ejecutar un análisis de vulnerabilidades puntual sin gobernar licencias, procedencia ni mantenimiento posterior.
- C. Criterios de aprobación, licencias aceptables, revisión de seguridad, inventario, actualización y obligaciones de redistribución. **(correcta)**
- D. Publicar una lista de licencias permitidas sin proceso para revisar seguridad, excepciones y obligaciones concretas.

Explicación: La política debe gobernar aprobación, procedencia, licencias, obligaciones, seguridad e inventario durante el ciclo de vida, con actualización y revisión de excepciones. OpenChain concreta procesos de cumplimiento e inventario; NIST SSDF aborda componentes, procedencia y vulnerabilidades. Son dimensiones complementarias: ninguno de esos documentos convierte un escaneo puntual en aprobación jurídica automática.

- Error A: El inventario es base de conocimiento, pero no define qué se aprueba, quién decide o cómo se actualiza y cumple al redistribuir.
- Error B: El análisis puntual no cubre licencias o cambios posteriores; las vulnerabilidades y la composición requieren seguimiento.
- Error D: La lista de licencias es solo parte de la política; faltan evaluación de seguridad, tratamiento de excepciones y cumplimiento del caso de uso concreto.

- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.2.2.5 revisión y remediación de incumplimientos; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4 artefactos · versión: Versión oficial OpenChain 2.1, equivalente funcional a ISO/IEC 5230:2020 según el propio documento; no se atribuye certificación a esta aplicación ni carácter legal universal · comprobado: 2026-10-28
- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28

Partida: `9db35f46a5ff0af7f903e47e9884428676d3b4522a5be5b9e5001bef0a4881b9` · propuesta: `b52c72c2d8ef8c52d2645121bc6d02e5e6af344d26cd462ba22b78970092cb33`

## MAN-GSI-P16-147

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de fragmentos públicos y clave D; cuatro comprobaciones próximas, distinguiendo visibilidad, funcionamiento y atribución aislada de revisión completa de derechos y seguridad.

### Antes

Un equipo copia código de Stack Overflow o un blog. ¿Qué debe verificar antes de incorporarlo?

- A. No debe comprobar nada si el fragmento era visible públicamente, porque la publicación en una web equivale a renunciar a todos los derechos.
- B. Basta con verificar que compile en el proyecto, aunque se desconozcan la licencia, la atribución exigida, la seguridad y la procedencia del código.
- C. Solo debe comprobar que tenga menos de veinte líneas, pues cualquier fragmento inferior a ese límite carece automáticamente de protección jurídica.
- D. Licencia/derechos aplicables, atribución y compatibilidad, además de calidad y seguridad. **(correcta)**

Explicación: Accesibilidad pública no equivale a autorización libre de reutilización.

### Propuesta

Un equipo copia código de Stack Overflow o un blog. ¿Qué debe verificar antes de incorporarlo?

- A. Que sea públicamente visible y lo haya publicado una persona con buena reputación.
- B. Que compile y resuelva la función requerida como controles suficientes de incorporación.
- C. Que se cite la página de origen como sustituto de comprobar licencia y compatibilidad.
- D. Licencia/derechos aplicables, atribución y compatibilidad, además de calidad y seguridad. **(correcta)**

Explicación: Que un fragmento sea visible no concede permiso irrestricto para cualquier incorporación. Deben comprobarse procedencia, derechos, atribución y compatibilidad del uso, además de calidad y seguridad. Stack Overflow informa de versiones CC BY-SA según fecha y revisión; un blog puede tener otras condiciones. Debe examinarse el régimen del fragmento concreto, incluida su posible protección por originalidad, sin inferir un permiso general de su visibilidad.

- Error A: La visibilidad y reputación del autor no conceden por sí mismas permisos. Debe localizarse licencia o autorización pertinente, sin trasladar condiciones de una plataforma a cualquier blog.
- Error B: Compilación y funcionalidad son comprobaciones técnicas parciales; no acreditan permisos, atribución, compatibilidad ni que el fragmento sea seguro.
- Error C: La atribución puede ser una condición, pero citar la página no reemplaza comprobar derechos y compatibilidad del uso o cumplir las demás obligaciones aplicables.

- [Stack Overflow Help: What is the license for the content I post?](https://stackoverflow.com/help/licensing) · Fechas UTC y versiones CC BY-SA; licencia por revisión en post timeline; remisión a términos y texto legal · versión: Página consultada el 28-10-2026: anterior a 08-04-2011, 2.5; de 08-04-2011 a antes de 02-05-2018, 3.0; desde 02-05-2018, 4.0. No se atribuye una misma licencia a cualquier blog o contenido del sitio · comprobado: 2026-10-28
- [GitHub Docs: Licensing a repository](https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) · Choosing the right license; nota sobre derechos de ver y hacer fork de repositorios públicos conforme a términos de GitHub · versión: Documentación web vigente consultada el 28-10-2026. Visibilidad pública no equivale a licencia general; se distinguen permisos específicos de la plataforma y derechos legales aplicables · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 96.2 originalidad y 96.4 ideas; 98 duración; 99 explotación; 100 límites; 102.c circulación o tenencia comercial de instrumentos de único uso; 196.4 normativa propia de medidas sobre programas · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.2.2.5 revisión y remediación de incumplimientos; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4 artefactos · versión: Versión oficial OpenChain 2.1, equivalente funcional a ISO/IEC 5230:2020 según el propio documento; no se atribuye certificación a esta aplicación ni carácter legal universal · comprobado: 2026-10-28
- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28

Partida: `3c7e421342e44732b04e6da3749a8a2587cf517b09e4aa6a7101b2707cf6943c` · propuesta: `88353deba702821e6028c67b938788ed670b3b3a702e19c877597e4020741b22`

## MAN-GSI-P16-148

Decisión: pending_review · acción: revise.

Motivo: Conservar definición de lock-in y clave B; reducir la extensión de la correcta y mantener alternativas conceptualmente próximas.

### Antes

¿Qué es “lock-in” de proveedor?

- A. Interoperabilidad que permite sustituir componentes mediante interfaces abiertas y documentadas.
- B. Dependencia que hace costoso o difícil cambiar de proveedor/tecnología por barreras técnicas, contractuales, de datos o licencia. **(correcta)**
- C. Portabilidad que permite extraer datos y configuraciones en formatos reutilizables por otra solución.
- D. Plan de reversibilidad que define migración, transferencia de conocimiento y salida al terminar un contrato.

Explicación: Lock-in es un riesgo de reversibilidad, no una licencia.

### Propuesta

¿Qué se entiende por lock-in de proveedor?

- A. Facilidad de sustituir componentes mediante interfaces documentadas.
- B. Dependencia que dificulta cambiar de proveedor, tecnología o solución. **(correcta)**
- C. Capacidad de recuperar datos en formatos utilizables por otra solución.
- D. Planificación de la salida y de la transferencia de conocimiento técnico.

Explicación: Lock-in es una dependencia que vuelve difícil o costoso cambiar de proveedor, tecnología o solución. Puede deberse a formatos, interfaces, datos, conocimientos, condiciones contractuales o licencias; no es una licencia concreta ni una propiedad exclusiva de software propietario. Portabilidad, interfaces utilizables y planificación de salida pueden reducir el riesgo, sin garantizar por sí solas ausencia de costes.

- Error A: Las interfaces documentadas y utilizables pueden facilitar sustitución; no definen la dependencia que dificulta el cambio.
- Error C: Recuperar datos utilizables contribuye a portabilidad y salida; no es la barrera o dependencia preguntada.
- Error D: Planificar salida y transferencia de conocimiento ayuda a gestionar dependencia, pero no define el fenómeno de quedar atado a la solución.

- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28
- [Library of Congress: Sustainability Factors](https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml) · Disclosure; External dependencies; Technical protection mechanisms: migración, copias, dispositivos, contraseñas y conexión activa · versión: Página actualizada 14-02-2025; criterios de preservación de la Library of Congress, no prohibición legal general de DRM · comprobado: 2026-10-28

Partida: `7eaf581ad6b9e135bc656ed43030ad34714913cf6dc5eff3fc39dfa3a71922fd` · propuesta: `7ba7b3b31d7f45f0c45b2535a365bbe26f9e48db4c28eb5c28cf00cecd972fde`

## MAN-GSI-P16-149

Decisión: pending_review · acción: revise.

Motivo: Conservar evaluación multidimensional libre/propietario y clave B; pregunta positiva y cuatro criterios comparables, sin pista por lista especialmente extensa.

### Antes

¿Qué factor NO debería omitirse al comparar software libre y propietario?

- A. Comparar el precio de adquisición inicial sin incorporar operación, formación, migración ni costes de salida.
- B. Coste total de propiedad, soporte, capacidades, seguridad, interoperabilidad, dependencia, comunidad/proveedor y reversibilidad. **(correcta)**
- C. Decidir a partir de la etiqueta libre o propietario sin contrastar capacidades, seguridad ni adecuación al caso.
- D. Valorar el soporte disponible durante el primer año sin revisar ciclo de vida, comunidad, dependencia o reversibilidad.

Explicación: La decisión no debe reducirse al precio de licencia.

### Propuesta

Al comparar una solución libre y una propietaria, ¿qué criterio resulta más adecuado?

- A. Precio inicial y soporte del primer año como aproximación al coste de vida.
- B. Adecuación y coste del ciclo de vida, incluida dependencia y salida. **(correcta)**
- C. Tipo de licencia como sustituto de una evaluación técnica y operativa.
- D. Número de funciones como indicador suficiente de sostenibilidad y seguridad.

Explicación: La comparación requiere adecuación al caso y costes del ciclo de vida, con soporte, capacidades, seguridad, interoperabilidad, dependencia y salida. OSOR incluye soporte, evolución y costes de salida en TCO, junto a criterios de calidad y proveedor. Una etiqueta libre o propietario, el precio inicial o el número de funciones no sustituyen el análisis del servicio y sus necesidades.

- Error A: El primer año puede omitir operación, formación, evolución y salida posteriores; no representa necesariamente el coste del ciclo de vida.
- Error C: La licencia importa, pero no acredita por sí sola prestaciones, seguridad, soporte o viabilidad operativa para el caso.
- Error D: El número de funciones no demuestra mantenibilidad, seguridad o sostenibilidad; deben evaluarse capacidades necesarias y riesgos reales.

- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `50bb9e843935a4f4c9973acd76b5b4aff666c68906a05fc59b684bd755efca8a` · propuesta: `8064f2509fbebc61a70d94fa7362515b130f09b3014f7350c809fd8b481cd380`

## MAN-GSI-P16-150

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la definición de TCO y clave D; precisar horizonte, costes pertinentes y diferencia frente a presupuesto/amortización.

### Antes

¿Qué significa TCO?

- A. El precio inicial de adquisición y licencias, excluyendo implantación, operación, soporte, formación y retirada.
- B. El gasto operativo de un único ejercicio presupuestario, sin inversiones previas ni costes posteriores de migración o salida.
- C. La amortización contable del activo según su vida útil, aunque no refleje todos los costes reales soportados durante el ciclo.
- D. Total Cost of Ownership: coste total de propiedad a lo largo del ciclo de vida. **(correcta)**

Explicación: TCO incluye implantación, soporte, operación, formación, migración, etc.

### Propuesta

¿Qué significa TCO?

- A. El precio inicial de adquisición y licencias, excluyendo implantación, operación, soporte, formación y retirada.
- B. El gasto operativo de un único ejercicio presupuestario, sin inversiones previas ni costes posteriores de migración o salida.
- C. La amortización contable del activo según su vida útil, aunque no refleje todos los costes reales soportados durante el ciclo.
- D. Total Cost of Ownership: coste total de propiedad a lo largo del ciclo de vida. **(correcta)**

Explicación: Total Cost of Ownership es el coste total de propiedad durante un ciclo de vida definido, no solo adquisición o gasto de un ejercicio. Deben delimitarse alcance, horizonte y supuestos e incluir costes pertinentes de implantación, operación, soporte, formación, evolución, migración y salida. La guía OSOR menciona expresamente soporte, actualizaciones y salida. TCO no equivale a amortización contable ni mide por sí solo todos los beneficios o la adecuación técnica.

- Error A: El precio de entrada omite costes necesarios para implantar, operar y retirar la solución; puede ser solo una parte del total.
- Error B: Un presupuesto anual no cubre por definición todo el ciclo de vida ni las inversiones y costes de salida fuera del ejercicio.
- Error C: La amortización distribuye un valor contable; no recoge necesariamente todos los costes operativos, de formación o transición efectivamente soportados.

- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `367b14361e2f1829dfefcf34da67b21f80a50bb1ff4ef227d3b194c57686c0a5` · propuesta: `7fead2950e49a6e6400f6b1f66e4da760fdc9b179810331f392b8c1e22526fa2`

## MAN-GSI-P16-151

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso del pliego y clave C; distractores sobre seguridad, disponibilidad y recuperación, cercanos a continuidad pero distintos de salida.

### Antes

Un pliego exige que al terminar contrato puedan migrarse datos y continuar el servicio. ¿Qué está reforzando?

- A. Copyleft fuerte.
- B. Dominio público.
- C. Reversibilidad y continuidad. **(correcta)**
- D. DRM obligatorio.

Explicación: Son requisitos de salida y continuidad operativa.

### Propuesta

Un pliego exige que al terminar contrato puedan migrarse datos y continuar el servicio. ¿Qué está reforzando?

- A. Seguridad del proceso de desarrollo.
- B. Disponibilidad durante la operación ordinaria.
- C. Reversibilidad y continuidad en la salida. **(correcta)**
- D. Recuperación de una actualización fallida.

Explicación: El requisito aborda poder salir de la solución y mantener capacidad operativa al terminar el contrato. Migración utilizable, responsabilidades, documentación y transición deben concretarse y probarse. No equivale a copyleft, dominio público o garantía de disponibilidad durante un periodo en que el proveedor sigue prestando el servicio.

- Error A: Un proceso de desarrollo seguro es otro objetivo; no describe específicamente transferir datos y continuar al terminar el contrato.
- Error B: Disponibilidad ordinaria no demuestra que se pueda operar o migrar tras el fin de la relación con el proveedor.
- Error D: Recuperar una actualización fallida es rollback o recuperación; no es el requisito de abandonar o sustituir la solución descrito.

- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `553bdcca6b3c18bbafa2fdd57666e7dca10e1a3712cca374e361196dd9659668` · propuesta: `a766f9b0aba8a58ab7ad38d83f3b458ff22699803c43169d45bbf6e50a2d6ab4`

## MAN-GSI-P16-152

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la evidencia de adquisición y clave A; distinguir presencia de archivos y prueba de derechos, sin exigir un documento universal para cualquier licencia.

### Antes

¿Qué evidencia debería conservar una organización respecto a software adquirido?

- A. Contratos, facturas/suscripciones, métricas/licencias asignadas y condiciones aplicables. **(correcta)**
- B. Capturas de la pantalla de instalación sin contratos, condiciones, titular, cantidad de licencias ni periodo de suscripción.
- C. Una copia del ejecutable instalado, aunque no pruebe procedencia, derechos adquiridos, asignaciones o mantenimiento contratado.
- D. La factura inicial como única evidencia, sin conservar contrato, renovaciones, métricas de uso o condiciones aplicables.

Explicación: La evidencia permite demostrar derechos de uso y gestionar renovaciones.

### Propuesta

¿Qué evidencia debería conservar una organización respecto a software adquirido?

- A. Contratos, facturas/suscripciones, métricas/licencias asignadas y condiciones aplicables. **(correcta)**
- B. Capturas de la pantalla de instalación sin contratos, condiciones, titular, cantidad de licencias ni periodo de suscripción.
- C. Una copia del ejecutable instalado, aunque no pruebe procedencia, derechos adquiridos, asignaciones o mantenimiento contratado.
- D. La factura inicial como única evidencia, sin conservar contrato, renovaciones, métricas de uso o condiciones aplicables.

Explicación: Las evidencias deben permitir reconstruir qué derechos se adquirieron, bajo qué condiciones, para qué productos, cantidades, métricas, asignaciones y periodos. Contratos, justificantes y renovaciones se relacionan con uso real. El conjunto concreto depende del modelo: una factura aislada, una captura o un ejecutable no prueban por sí solos todos los permisos o coberturas.

- Error B: La pantalla de instalación no identifica por sí sola contrato, condiciones, cantidades o vigencia y no demuestra el conjunto de derechos.
- Error C: Tener el ejecutable acredita disponibilidad de una copia, no necesariamente procedencia legítima o derechos de uso en la configuración implantada.
- Error D: La factura inicial puede ser parte de la evidencia, pero omite renovaciones, condiciones y métricas necesarias para analizar el modelo concreto.

- [Flexera One: Purchases, documentación de IT Asset Management](https://docs.flexera.com/flexera-one/it-assets/procure-intro/purch-intro/) · Purchases: software asset management, license entitlements, comparación de compras e instalaciones, SKU, condiciones, upgrades, suscripciones y mantenimiento · versión: Documentación web del fabricante consultada el 28-10-2026, sin versión cerrada indicada; ejemplo primario de reconciliación SAM, sin recomendar el producto ni convertir su implementación en norma universal · comprobado: 2026-10-28

Partida: `3f29c3d6b97c4a0dc9775e4dfbf2270d6dc6bbff3be8c8ca6d2267c006cc2398` · propuesta: `8d9c008fe4aaf365c317222928b25e34b2e279a11f53cbe44a70feb83bba3616`

## MAN-GSI-P16-153

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de dependencia por cuenta del proveedor y clave C; microcaso explicita control único sin transferencia y no censura toda cuenta individual.

### Antes

¿Qué riesgo hay en usar una cuenta personal de un proveedor para repositorios, firma o activación críticos?

- A. Ninguno si el proveedor es conocido.
- B. Convierte el software en libre.
- C. Dependencia y pérdida de control/continuidad si la relación termina. **(correcta)**
- D. Elimina necesidad de contrato.

Explicación: Los activos críticos deben quedar bajo control organizativo y con mecanismos de transferencia.

### Propuesta

El proveedor conserva en su cuenta personal el único control administrativo de repositorios y activaciones críticos, sin transferencia pactada. ¿Qué riesgo introduce?

- A. Corrupción de los repositorios por el hecho de usar una cuenta personal.
- B. Conversión de los permisos de repositorio en una licencia jurídica del producto.
- C. Pérdida de control operativo si esa persona deja de estar disponible. **(correcta)**
- D. Extinción automática de los derechos de uso al cambiar de administrador.

Explicación: Concentrar el único control administrativo y la recuperación en una persona externa sin transferencia puede impedir mantener, publicar o activar el servicio cuando deje de estar disponible. Deben preverse titularidad organizativa, roles y recuperación adecuados. No se afirma que cada acceso individual sea incorrecto: cuentas personales con permisos organizativos y continuidad bien gestionados son un escenario diferente.

- Error A: El uso de una cuenta personal no corrompe por sí mismo los archivos; el riesgo descrito es perder acceso o capacidad administrativa.
- Error B: Los permisos de una plataforma no se convierten por sí solos en la licencia jurídica de todo el software que aloja.
- Error D: Cambiar administrador no extingue automáticamente los derechos de uso; estos y el control técnico pertenecen a planos distintos.

- [GitHub Docs: Maintaining ownership continuity for your organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization) · About maintaining ownership continuity: riesgo de único propietario no localizable y recomendación de más de un propietario · versión: Documentación web consultada el 28-10-2026. Ejemplo de continuidad de control organizativo; una cuenta individual con roles organizativos adecuados no es por sí sola el riesgo del supuesto · comprobado: 2026-10-28
- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `cf2dada09ac58f420f4dca56e5e75d4b8a09c3295ee4d4f6a9f628d001995b76` · propuesta: `7b9d39205113d475db9520468aeeb612720b59df16ad3277447c17ba78fef419`

## MAN-GSI-P16-154

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la contratación de terceros y clave A; explicar inventario, mantenimiento y responsabilidades sin prometer ausencia de vulnerabilidades.

### Antes

¿Qué debería exigir un contrato sobre componentes de terceros?

- A. Identificación, licencias, cumplimiento, actualizaciones, vulnerabilidades y responsabilidad/proceso de sustitución cuando proceda. **(correcta)**
- B. Declarar solo las dependencias directas y omitir componentes transitivos, versiones y licencias para simplificar el inventario.
- C. Transferir toda responsabilidad al fabricante de cada componente sin exigir avisos, soporte ni proceso de sustitución.
- D. Congelar las versiones contratadas y evitar informes de vulnerabilidades para que la configuración permanezca estable.

Explicación: La transparencia de terceros es básica para mantener la solución.

### Propuesta

¿Qué debería exigir un contrato sobre componentes de terceros?

- A. Identificación, licencias, cumplimiento, actualizaciones, vulnerabilidades y responsabilidad/proceso de sustitución cuando proceda. **(correcta)**
- B. Declarar solo las dependencias directas y omitir componentes transitivos, versiones y licencias para simplificar el inventario.
- C. Transferir toda responsabilidad al fabricante de cada componente sin exigir avisos, soporte ni proceso de sustitución.
- D. Congelar las versiones contratadas y evitar informes de vulnerabilidades para que la configuración permanezca estable.

Explicación: El contrato debe concretar identificación y licencias de componentes, evidencias de cumplimiento, seguimiento de vulnerabilidades, actualización y responsabilidades o sustitución pertinentes al servicio. Inventario y proceso deben cubrir lo efectivamente suministrado. OpenChain aporta gestión de cumplimiento y NIST seguimiento de seguridad; no se impone una garantía universal de software sin fallos ni responsabilidad ilimitada.

- Error B: Omitir transitivas y versiones puede dejar fuera componentes realmente incorporados y sus obligaciones o vulnerabilidades.
- Error C: Remitir toda responsabilidad a terceros no define cómo el suministrador informa, mantiene o sustituye piezas dentro de la solución contratada.
- Error D: Congelar e impedir información no elimina vulnerabilidades; debe haber gestión de cambios y riesgos compatible con la estabilidad necesaria.

- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.2.2.5 revisión y remediación de incumplimientos; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4 artefactos · versión: Versión oficial OpenChain 2.1, equivalente funcional a ISO/IEC 5230:2020 según el propio documento; no se atribuye certificación a esta aplicación ni carácter legal universal · comprobado: 2026-10-28
- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28
- [CISA: anuncio oficial de los mínimos SBOM 2026](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/422a7eb) · Anuncio de 29-07-2026: definición SBOM, What’s New, campos Component Hash, License, SBOM Tool Name y SBOM Generation Context, formatos procesables · versión: Boletín oficial CISA de 29-07-2026, 11:33 EDT. El PDF y su página CISA devolvieron 403; se cita solo el anuncio accesible, sin atribuirle lectura de apartados del PDF ni usar borrador 2025 como texto final · comprobado: 2026-10-28

Partida: `1116c6ac5ad3d1a3a340911f83ba459490804e241887b0f5df010906442a864f` · propuesta: `395cfd238cc79d2d95996819ae8c769395abda674c64db147b22b585e9c435f3`

## MAN-GSI-P16-156

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación exacta/procedencia para reproducibilidad y clave D; reemplazar distractores ajenos por metadatos relevantes pero insuficientes, sin confundir versión con prueba de licencia.

### Antes

¿Qué dato es especialmente importante en una SBOM para reproducir un análisis de licencia?

- A. El fondo de pantalla del desarrollador.
- B. La resolución del monitor.
- C. La contraseña de producción.
- D. Versión/identificador exacto del componente y su procedencia. **(correcta)**

Explicación: Sin versión exacta no puede saberse qué código/licencia se utilizó.

### Propuesta

Para reproducir un análisis de licencia a partir de una SBOM, ¿qué dato del componente es esencial?

- A. Nombre comercial de la solución y su proveedor principal.
- B. Fecha del último análisis y nombre de la herramienta empleada.
- C. Familia de licencias que la política interna considera aceptable.
- D. Identidad y versión exactas del componente, junto a su procedencia. **(correcta)**

Explicación: Para reconstruir el análisis es esencial saber qué componente y versión o artefacto se examinó y de dónde procede. También deben conservarse evidencia de licencia, fuentes, herramientas y decisiones; identidad y versión solas no demuestran una licencia. Si una etiqueta de versión no distingue variantes, se necesitan datos adicionales, por ejemplo hash, revisión y copia del material analizado. SPDX separa identificadores, versión, procedencia, checksum y licencias declarada/concluida.

- Error A: Producto y proveedor principal no identifican necesariamente cada dependencia o variante incorporada, cuya licencia puede ser distinta.
- Error B: Fecha y herramienta ayudan a reproducir el procedimiento, pero no indican por sí solas qué código concreto se analizó.
- Error C: La familia admitida expresa política, no prueba qué licencia rige el componente y versión realmente utilizados.

- [SPDX: Specification 2.3.1, Package information](https://spdx.github.io/spdx-spec/v2.3.1/package-information/) · 7.1 nombre; 7.2 SPDX identifier; 7.3 versión; 7.5/7.6 proveedor/originador; 7.7 descarga; 7.10 checksum; 7.12 fuente; 7.13 concluded license, 7.15 declared license y 7.16 comentarios · versión: Versión fija 2.3.1; un SPDXID no es una licencia ni identifica por sí solo el artefacto global. NONE/NOASSERTION se conservan como incertidumbre o ausencia, sin asignar MIT por defecto · comprobado: 2026-10-28
- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28
- [CISA: anuncio oficial de los mínimos SBOM 2026](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/422a7eb) · Anuncio de 29-07-2026: definición SBOM, What’s New, campos Component Hash, License, SBOM Tool Name y SBOM Generation Context, formatos procesables · versión: Boletín oficial CISA de 29-07-2026, 11:33 EDT. El PDF y su página CISA devolvieron 403; se cita solo el anuncio accesible, sin atribuirle lectura de apartados del PDF ni usar borrador 2025 como texto final · comprobado: 2026-10-28

Partida: `90ce04181a89586a349fa51920677246fb5ca8d243cde52891059852f33456ec` · propuesta: `7b69ca14f9a721ae4c709374f37694fc831225f64f2158bff62833dca9911715`
