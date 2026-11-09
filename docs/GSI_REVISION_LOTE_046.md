# GSI-EDITORIAL-046 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `0c9760e92ea2e6c3670750bf8400e6332f45921a653082f157d9765a4d37654b`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P16-157

Decisión: pending_review · acción: revise.

Motivo: Conservar prevención en CI/CD y clave D; cuatro controles parciales o completos del mismo ámbito, evitando distractores de destrucción de avisos.

### Antes

¿Qué práctica reduce el riesgo de introducir una licencia incompatible en CI/CD?

- A. Desactivar los gestores de paquetes para que cada dependencia se copie manualmente sin que el pipeline pueda identificar su licencia.
- B. Eliminar los ficheros \`LICENSE\` durante la construcción para evitar que los avisos de terceros formen parte de los artefactos publicados.
- C. Permitir cualquier dependencia sin revisión porque las licencias declaradas por un repositorio público son compatibles entre sí por defecto.
- D. Escaneo de dependencias/licencias y políticas automáticas con revisión humana para excepciones. **(correcta)**

Explicación: Los controles automatizados ayudan, pero necesitan políticas y excepciones gobernadas.

### Propuesta

¿Qué práctica reduce el riesgo de introducir una licencia incompatible en CI/CD?

- A. Analizar vulnerabilidades sin revisar las licencias detectadas en dependencias.
- B. Conservar las licencias declaradas sin evaluar su compatibilidad con la entrega.
- C. Revisar las dependencias directas sin detectar cambios en las transitivas.
- D. Escanear licencias con políticas y revisión humana de excepciones. **(correcta)**

Explicación: El análisis automatizado puede detectar componentes, cambios y posibles incumplimientos y aplicar políticas, con revisión de hallazgos y excepciones. No convierte una etiqueta detectada en conclusión jurídica infalible. OpenChain requiere proceso de obligaciones y revisión; NIST PS.3.2 y PW.4 aportan procedencia y seguimiento de componentes. La compatibilidad debe evaluarse para el uso, combinación y distribución concretos.

- Error A: El análisis de vulnerabilidades no resuelve condiciones de licencia o compatibilidad; seguridad y derechos son dimensiones complementarias.
- Error B: Registrar la declaración es evidencia útil, pero no prueba que sea correcta ni compatible con el caso de uso y la entrega.
- Error C: Las transitivas y sus cambios pueden introducir condiciones relevantes; limitarse a las directas no cubre lo realmente incorporado.

- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.2.2.5 revisión y remediación de incumplimientos; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4 artefactos · versión: Versión oficial OpenChain 2.1, equivalente funcional a ISO/IEC 5230:2020 según el propio documento; no se atribuye certificación a esta aplicación ni carácter legal universal · comprobado: 2026-10-28
- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28

Partida: `57d59c6a77201a39565aad24c6c1f7ed26e9caae9e4a3f9caf3f362b02754f60` · propuesta: `d191a060cc71f436014aa6b3effa6a166a78c981f64f28b801cc3b292240a64f`

## MAN-GSI-P16-158

Decisión: pending_review · acción: revise.

Motivo: Conservar pregunta contractual de salida SaaS y clave C; cuatro preguntas paralelas, con contexto de proveedor dependiente.

### Antes

¿Qué pregunta contractual es clave si se usa un SaaS con fuerte dependencia del proveedor?

- A. Qué descuento ofrece el proveedor durante la primera renovación, sin concretar formato, asistencia o plazo para recuperar los datos.
- B. Cuántos colores, temas y logotipos admite el panel, aunque la personalización no reduzca dependencia ni facilite migración.
- C. ¿Cómo exportamos datos/configuración, cuánto dura la transición y qué ocurre si el servicio cesa? **(correcta)**
- D. En qué ciudad se encuentra la sede social, sin cláusulas sobre cese, portabilidad, transición o eliminación posterior de información.

Explicación: La salida debe diseñarse antes de contratar para evitar lock-in.

### Propuesta

¿Qué pregunta contractual es clave si se usa un SaaS con fuerte dependencia del proveedor?

- A. ¿Qué rebaja ofrece la renovación como garantía de facilidad de cambio?
- B. ¿Qué personalización del panel sustituye las previsiones de migración?
- C. ¿Cómo salen datos y configuración, y cómo se cubre transición o cese? **(correcta)**
- D. ¿Qué historial comercial acredita por sí solo la capacidad de salida?

Explicación: La salida debe concretar exportación utilizable, alcance de configuración, plazos, asistencia y condiciones de continuidad o cese. No basta con que haya un botón de descarga: debe probarse el uso en destino y los medios y derechos de transición. OSOR recomienda planificar salida, soporte y costes; se emplea como criterio de gestión, sin convertirlo en una cláusula universal de cualquier SaaS.

- Error A: Un descuento puede influir en costes, pero no acredita capacidad de exportar o sustituir proveedor.
- Error B: Personalizar la interfaz no define formatos, dependencias ni transición operativa; no sustituye previsiones de migración.
- Error D: El historial del proveedor no demuestra por sí solo que los datos y la operación puedan recuperarse ante fin del servicio.

- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `12a89391651495144b2dc9f29b343c049c9fe2b85674a058aae5645f00da85b1` · propuesta: `7e810805de78629df413ba3c8b6f710596f52d199dfb7b576b1f98f7d2b01f7c`

## MAN-GSI-P16-159

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro el microcaso de activación permanente y clave A; precisar que contingencia debe ser autorizada, viable y probada.

### Antes

Un sistema crítico requiere activación online permanente. ¿Qué combinación de controles es más sensata?

- A. Plan offline/contingencia, cláusulas de continuidad, monitorización de dependencia y prueba periódica de recuperación/migración. **(correcta)**
- B. Confiar únicamente en el SLA del proveedor y prescindir de una alternativa probada mientras se cumplan sus métricas.
- C. Conservar copias de los binarios sin prever licencias, claves, documentación ni continuidad contractual de la activación.
- D. Mantener conectividad redundante, pero sin monitorizar la dependencia ni ensayar recuperación, migración o salida.

Explicación: Los riesgos técnicos y contractuales deben tratarse conjuntamente.

### Propuesta

Un sistema crítico requiere activación online permanente. ¿Qué combinación de controles es más sensata?

- A. Plan offline/contingencia, cláusulas de continuidad, monitorización de dependencia y prueba periódica de recuperación/migración. **(correcta)**
- B. Confiar únicamente en el SLA del proveedor y prescindir de una alternativa probada mientras se cumplan sus métricas.
- C. Conservar copias de los binarios sin prever licencias, claves, documentación ni continuidad contractual de la activación.
- D. Mantener conectividad redundante, pero sin monitorizar la dependencia ni ensayar recuperación, migración o salida.

Explicación: La dependencia permanente necesita tratamiento técnico y contractual: monitorización, recuperación ensayada y una contingencia autorizada y viable, que puede incluir transición a otra solución. No se presupone que todo producto admita un modo offline sin rediseño o acuerdo. La documentación de PlayReady ilustra adquisición y licencias locales, no una receta para cualquier activación. Un compromiso de disponibilidad no sustituye pruebas de salida.

- Error B: Un SLA mide o compromete servicio, pero no garantiza capacidad de operar o migrar cuando falla o termina la dependencia.
- Error C: Los binarios conservados pueden seguir necesitando licencias, claves y derechos o servicios que falten; no bastan para recuperar operación.
- Error D: Redundar conectividad reduce fallos de acceso a red, pero no cubre desaparición del servicio, problemas de licencia o falta de una salida probada.

- [Microsoft Learn: PlayReady — License Acquisition](https://learn.microsoft.com/en-us/playready/overview/license-acquisition) · Server and Client interactions; Proactive, Reactive license acquisition; pasos 5–11 de adquisición; licencias, derechos y condiciones · versión: Artículo actualizado 07-11-2018; documentación de un sistema concreto, no comportamiento obligatorio de cualquier DRM · comprobado: 2026-10-28
- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `dd2fe7db53052829899436439eff6301f0f50882d19db6848b538f39cedc43bf` · propuesta: `b4686e2282dfb7dc93882d5cec2e5069b5ef3bad1aa784882a77ff4ac0d74d3e`

## MAN-GSI-P16-160

Decisión: pending_review · acción: revise.

Motivo: Conservar caso integrado de reutilización AAPP y clave B; eliminar «Caso final» y concretar que elegir licencia no sustituye derechos de terceros.

### Antes

Caso final: se quiere reutilizar software en varias AAPP, incorporar dependencias OSS y garantizar continuidad. ¿Qué enfoque es el más completo?

- A. Elegir una licencia permisiva para el proyecto sin inventariar dependencias, titulares ni obligaciones heredadas.
- B. Inventariar/SBOM, seleccionar licencia y comprobar compatibilidad, fijar derechos y entregables, revisar seguridad/soporte y diseñar reversibilidad. **(correcta)**
- C. Publicar el repositorio completo sin revisar licencias de terceros, secretos, seguridad o derechos sobre cada componente.
- D. Implantar controles DRM para impedir copias y utilizarlos como sustituto de contrato, soporte y plan de reversibilidad.

Explicación: La respuesta integra todos los planos del tema II.14.

### Propuesta

Se quiere reutilizar software en varias AAPP, incorporar dependencias OSS y garantizar continuidad. ¿Qué enfoque es el más completo?

- A. Elegir una licencia permisiva para el proyecto sin inventariar dependencias, titulares ni obligaciones heredadas.
- B. Inventariar/SBOM, seleccionar licencia y comprobar compatibilidad, fijar derechos y entregables, revisar seguridad/soporte y diseñar reversibilidad. **(correcta)**
- C. Publicar el repositorio completo sin revisar licencias de terceros, secretos, seguridad o derechos sobre cada componente.
- D. Implantar controles DRM para impedir copias y utilizarlos como sustituto de contrato, soporte y plan de reversibilidad.

Explicación: La reutilización entre Administraciones requiere conocer componentes y obligaciones, disponer de derechos y entregables suficientes, comprobar seguridad y soporte y planificar salida. El ENI regula condiciones de licenciamiento y reutilización en su ámbito; no borra derechos de terceros ni garantiza que una licencia elegida para código propio pueda sustituir las de todas las dependencias. Inventario y gobernanza aportan una base trazable, sin certificar calidad por sí solos.

- Error A: Escoger una licencia del proyecto no demuestra titularidad o permiso para relicenciar dependencias ni resuelve obligaciones heredadas.
- Error C: Publicar todo sin revisión puede revelar información no destinada a publicación o distribuir código sin facultades o condiciones suficientes.
- Error D: Un control de copias no sustituye derechos contractuales, mantenimiento o reversibilidad; puede añadir una dependencia técnica.

- [BOE: Real Decreto 4/2010, Esquema Nacional de Interoperabilidad](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331) · 16 condiciones de licenciamiento aplicables; 17 directorios y documentación/condiciones de reutilización · versión: Consolidación informativa consultada, actualización global publicada 06-11-2024; artículos 16/17 modificados con publicación 31-03-2021. Se distinguen objeto contractual y derechos de terceros · comprobado: 2026-10-28
- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 3.1.1 Policy; 3.1.5 License obligations; 3.2.2.5 revisión y remediación de incumplimientos; 3.3.1 Bill of materials; 3.3.2 License compliance; 3.4 artefactos · versión: Versión oficial OpenChain 2.1, equivalente funcional a ISO/IEC 5230:2020 según el propio documento; no se atribuye certificación a esta aplicación ni carácter legal universal · comprobado: 2026-10-28
- [NIST: SP 800-218, Secure Software Development Framework 1.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf) · Tabla 1: PS.3.1 y PS.3.2, página impresa 10; PW.4.1, página 12; PW.4.4, página 13; RV.1.1, página 16 · versión: Final, febrero de 2022, DOI 10.6028/NIST.SP.800-218. Catálogo NIST comprobado: revisión 1, versión 1.2 de 17-12-2025, aún Draft; no se presenta como final · comprobado: 2026-10-28
- [Comisión Europea, OSOR: Public procurement of open source software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and vendor criteria: total cost of ownership, support, upgrades and exit costs; Buyer checklist: needs, resources, vendor neutrality, exit and long-term support · versión: Guía web de contratación y planificación consultada el 28-10-2026; criterios de gestión, sin convertirlos en cláusulas legales universales o mandato de elegir una licencia · comprobado: 2026-10-28

Partida: `432cdaaa3d98b105a8c7616f9d0465f8fed182ffdbf1ee01dd544feadfe8de04` · propuesta: `829f9c0ac9a27af232d18ccfc8c601e6b92fea1047189468022e2f8cfa1ba47d`

## MAN-GSI-P16-001

Decisión: pending_review · acción: revise.

Motivo: Conservar régimen propietario frente a precio y clave A; hacer definitoria la correcta, ya que conservar derechos también ocurre bajo licencias libres.

### Antes

¿Qué caracteriza mejor al software propietario?

- A. El titular conserva los derechos y concede facultades de uso según la licencia y la ley. **(correcta)**
- B. Ser necesariamente de pago, aunque el titular pueda distribuirlo gratuitamente manteniendo restricciones y reservándose los derechos.
- C. No poder distribuirse nunca sin precio, porque la gratuidad transforma de forma automática cualquier programa en software libre.
- D. Impedir siempre cualquier copia de seguridad, incluso cuando la licencia o la legislación aplicable permiten realizarla al usuario legítimo.

Explicación: Propietario describe el régimen de derechos/licencia, no el precio ni una prohibición absoluta de todos los actos.

### Propuesta

¿Qué caracteriza al software propietario frente al software libre?

- A. No concede al usuario el conjunto de libertades que define el software libre. **(correcta)**
- B. Se define por cobrar al usuario por cada copia, con independencia de sus derechos.
- C. Se define por ocultar el fuente, aunque conceda las cuatro libertades al usuario.
- D. Se define por conservar copyright, aunque conceda todas las libertades de uso.

Explicación: En la distinción empleada, propietario o no libre no concede adecuadamente el conjunto de libertades de ejecutar, estudiar, modificar y redistribuir que define el software libre. Precio, acceso material al fuente y conservación de copyright no bastan por sí solos para clasificar. El titular puede conservar copyright y ofrecer una licencia libre; el software propietario también puede distribuirse gratis.

- Error B: Puede cobrarse por software libre y distribuirse propietario sin precio; cobrar por copia no define las libertades concedidas.
- Error C: El acceso al fuente es condición para estudiar y modificar, pero ocultarlo no es una definición autónoma compatible a la vez con conceder realmente todas esas libertades.
- Error D: Conservar copyright es compatible con licenciar libremente; no diferencia por sí mismo el régimen propietario del libre.

- [FSF/GNU: The Free Software Definition](https://www.gnu.org/philosophy/free-sw.en.html) · The four essential freedoms; The freedom to run the program as you wish; The freedom to redistribute if you wish: basic requirements · versión: Definición viva consultada mediante texto primario indexado el 28-10-2026; aperturas GNU/FSF devolvieron timeout. No se inventa fecha de revisión o número de versión de la página · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 nacimiento por creación; 96.2 originalidad y 96.3–4 expresión frente a ideas; 97.4 programa laboral fuente/objeto; 99 explotación; 100 límites; 101 inscripción voluntaria · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `609f2431179ea22fddefd7e5b263d25951982f22f1831e7e4192ca2ddf47e6ac` · propuesta: `9319b289b43c4e5dfca2297949fe8a852b3832b113b05e018505506b5a71daa4`

## MAN-GSI-P16-003

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la libertad 0 y clave B; explicar cada confusión entre ejecución, fuente, redistribución y publicación privada.

### Antes

Según la definición de la FSF, la libertad 0 consiste en:

- A. Acceder gratuitamente al código fuente.
- B. Ejecutar el programa como se desee, para cualquier propósito. **(correcta)**
- C. Redistribuir únicamente copias sin modificar.
- D. Publicar siempre cualquier modificación privada.

Explicación: La libertad 0 es la libertad de ejecutar; no depende del precio ni obliga a publicar modificaciones privadas.

### Propuesta

Según la definición de la FSF, la libertad 0 consiste en:

- A. Acceder gratuitamente al código fuente.
- B. Ejecutar el programa como se desee, para cualquier propósito. **(correcta)**
- C. Redistribuir únicamente copias sin modificar.
- D. Publicar siempre cualquier modificación privada.

Explicación: La libertad 0 de la FSF permite ejecutar el programa como se desee y para cualquier propósito. No se identifica con precio cero ni con acceso material al fuente: este es necesario para las libertades de estudio/modificación y distribución de versiones modificadas. La numeración se mantiene para distinguir el contenido de cada libertad, sin imponer publicación de cambios privados.

- Error A: Acceder al fuente no es ejecutar para cualquier propósito, y la gratuidad no define la libertad 0 ni el conjunto de software libre.
- Error C: Redistribuir copias corresponde a otra libertad; no define la ejecución para el propósito elegido por el usuario.
- Error D: La FSF permite modificar y usar privadamente sin comunicar los cambios; publicar cada modificación privada no define libertad 0.

- [FSF/GNU: The Free Software Definition](https://www.gnu.org/philosophy/free-sw.en.html) · The four essential freedoms; The freedom to run the program as you wish; The freedom to redistribute if you wish: basic requirements · versión: Definición viva consultada mediante texto primario indexado el 28-10-2026; aperturas GNU/FSF devolvieron timeout. No se inventa fecha de revisión o número de versión de la página · comprobado: 2026-10-28

Partida: `cad579beecaa26418c318f59d1dc1d9212de18ad88542c954e68c93da28e9b97` · propuesta: `9421d36d05507068d51e1d3b4e130efd52505bd660dd7701722fcbccaf05ccb8`

## MAN-GSI-P16-006

Decisión: pending_review · acción: revise.

Motivo: Conservar libertad 3 y clave D; cuatro denominaciones paralelas sin «únicamente» o «exclusivamente» en opciones concretas.

### Antes

¿Qué libertad se refiere específicamente a distribuir versiones modificadas?

- A. La libertad 0.
- B. La libertad 1 únicamente.
- C. La libertad 2 exclusivamente.
- D. La libertad 3. **(correcta)**

Explicación: La libertad 3 permite distribuir versiones modificadas y exige acceso al código fuente para ser real.

### Propuesta

¿Qué libertad se refiere específicamente a distribuir versiones modificadas?

- A. La libertad 0.
- B. La libertad 1.
- C. La libertad 2.
- D. La libertad 3. **(correcta)**

Explicación: La libertad 3 es distribuir copias de versiones modificadas a otras personas. Para que sea efectiva se requiere acceso al código fuente en la forma apropiada para modificar. Se distingue del derecho a estudiar y cambiar para uso propio y del de redistribuir copias sin modificar; no obliga a publicar cualquier cambio privado.

- Error A: La libertad 0 trata de ejecutar para cualquier propósito; no es la libertad específicamente referida a distribuir versiones modificadas.
- Error B: La libertad 1 permite estudiar y modificar el programa; distribuir esas versiones a otras personas es el objeto específico de libertad 3.
- Error C: La libertad 2 se refiere a redistribuir copias; la libertad 3 explicita distribución de las versiones modificadas.

- [FSF/GNU: The Free Software Definition](https://www.gnu.org/philosophy/free-sw.en.html) · The four essential freedoms; The freedom to run the program as you wish; The freedom to redistribute if you wish: basic requirements · versión: Definición viva consultada mediante texto primario indexado el 28-10-2026; aperturas GNU/FSF devolvieron timeout. No se inventa fecha de revisión o número de versión de la página · comprobado: 2026-10-28

Partida: `48fc4a5dc76ab6abe1249b60a7989f7266bbc1f30eeeef9828a22051a105695d` · propuesta: `a26fd69fd67d591e137abd648c4bc43684cb5a9bf0b55574b7cc0b9c72bb498e`

## MAN-GSI-P16-009

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la condición de no discriminación y clave C; distinguir tasas impuestas por licencia y precio por entregar copias.

### Antes

¿Cuál de estas condiciones es coherente con la Open Source Definition?

- A. La licencia puede prohibir todo uso comercial.
- B. La licencia puede exigir una tasa por cada redistribución.
- C. La licencia no debe discriminar a personas, grupos o campos de actividad. **(correcta)**
- D. El código fuente puede omitirse siempre sin forma de obtenerlo.

Explicación: Las licencias open source no pueden discriminar por persona o campo de actividad y deben permitir redistribución conforme a la OSD.

### Propuesta

¿Cuál de estas condiciones es coherente con la Open Source Definition?

- A. La licencia puede prohibir todo uso comercial.
- B. La licencia puede exigir una tasa por cada redistribución.
- C. La licencia no debe discriminar a personas, grupos o campos de actividad. **(correcta)**
- D. El código fuente puede omitirse siempre sin forma de obtenerlo.

Explicación: Los puntos 5 y 6 de la OSD exigen no discriminar personas, grupos o campos de actividad. Eso incluye permitir uso comercial, sin confundirlo con que todas las copias deban ser gratuitas. El punto 1 no permite una regalía exigida por la licencia por redistribuir y el 2 requiere fuente o una vía apropiada para obtenerlo.

- Error A: La prohibición general de uso comercial discrimina un campo de actividad y no satisface el punto 6.
- Error B: La OSD no permite que la licencia exija una regalía por la redistribución; es distinto de que alguien cobre por entregar una copia o un servicio.
- Error D: El punto 2 requiere incluir el fuente o una vía bien anunciada para obtenerlo en las condiciones previstas; no admite su omisión sin alternativa.

- [OSI: The Open Source Definition](https://opensource.org/osd) · 1 Free Redistribution; 2 Source Code; 3 Derived Works; 5 No Discrimination Against Persons or Groups; 6 No Discrimination Against Fields of Endeavor · versión: OSD versión 1.9, fecha interna 22-03-2007; página modificada 16-02-2024, distinta de fecha de consulta · comprobado: 2026-10-28

Partida: `3d96f5d66330643a3135f3d6c40afb500fa4cae7a45974688a43b8b4e2b5757e` · propuesta: `63b13cb133e84f1958b20a106389b6c39a9179e2ca8324cc110282c36680edad`

## MAN-GSI-P16-015

Decisión: pending_review · acción: revise.

Motivo: Conservar ausencia de publicación automática por modificar en privado y clave C; cuatro criterios comparables y matiz de hechos de licencia distintos de mera modificación.

### Antes

¿Qué afirmación sobre modificaciones privadas es más correcta en términos generales de software libre?

- A. Toda modificación debe subirse a Internet en 24 horas.
- B. Solo las licencias permisivas permiten modificar en privado.
- C. Una licencia libre no convierte automáticamente toda modificación privada en una publicación obligatoria. **(correcta)**
- D. La libertad 1 prohíbe usar una versión modificada internamente.

Explicación: Las obligaciones de compartir suelen activarse por hechos previstos en la licencia, por ejemplo distribución; no por el mero acto privado de modificar en todos los casos.

### Propuesta

Sobre modificaciones privadas en software libre, ¿qué afirmación es correcta?

- A. El copyleft exige publicar cada cambio aunque no se distribuya.
- B. La modificación privada solo queda permitida en licencias permisivas.
- C. Modificar privadamente no implica por sí solo publicar el resultado. **(correcta)**
- D. La libertad de modificar excluye usar internamente la versión cambiada.

Explicación: El software libre permite modificar y usar privadamente sin comunicar los cambios. Las obligaciones deben leerse según hechos previstos en cada licencia, como entregar copias o, en AGPL bajo su supuesto, interacción remota con una versión modificada. No se convierte cualquier uso ofrecido a terceros en modificación estrictamente privada ni se presume que todas las obligaciones se agoten en distribución.

- Error A: El copyleft no exige por su mera etiqueta publicar todo cambio privado; GPLv3 sección 2 permite modificar sin transmitir con las condiciones allí descritas.
- Error B: La libertad de modificar para uso propio también existe bajo licencias libres con copyleft, no solo bajo las permisivas.
- Error D: La libertad 1 incluye poder utilizar la versión cambiada en el propio trabajo; no se limita a escribir cambios que no se puedan ejecutar.

- [FSF/GNU: The Free Software Definition](https://www.gnu.org/philosophy/free-sw.en.html) · The four essential freedoms; The freedom to run the program as you wish; The freedom to redistribute if you wish: basic requirements · versión: Definición viva consultada mediante texto primario indexado el 28-10-2026; aperturas GNU/FSF devolvieron timeout. No se inventa fecha de revisión o número de versión de la página · comprobado: 2026-10-28
- [OSI: GNU General Public License version 3](https://opensource.org/license/gpl-3.0) · 0 Definitions: propagate/convey; 2 Basic Permissions; 4 y 5 distribución; 5 aggregate; 6 Corresponding Source; 13 AGPL combination · versión: GPL versión 3, 29-06-2007; texto completo del registro oficial OSI, leído directamente tras timeout en GNU · comprobado: 2026-10-28
- [OSI: GNU Affero General Public License version 3](https://opensource.org/license/agpl-3.0) · 0 Definitions; 2 Basic Permissions; 5 aggregate y obras independientes; 13 Remote Network Interaction; Use with the GNU GPL · versión: AGPL versión 3, 19-11-2007; texto completo del registro oficial OSI, leído directamente tras timeout en GNU · comprobado: 2026-10-28

Partida: `5ff986a261c0dbd86b6112fa6d2a5815334e6d64a0c85f2ec956d1509f5ee822` · propuesta: `ce0f6c8cecb14bd4aeec0d9fd1632bd7eda61db328cee6fe0eed41e61ad6a847`

## MAN-GSI-P16-021

Decisión: pending_review · acción: revise.

Motivo: Conservar reutilización permisiva y clave B; separar copyleft, comercio y dominio público con opciones próximas y comparables.

### Antes

¿Qué rasgo general caracteriza a una licencia permisiva?

- A. Obligar siempre a publicar bajo la misma licencia todo el código de la aplicación final, incluso los componentes independientes y propietarios.
- B. Permite reutilización amplia con obligaciones relativamente reducidas, incluso dentro de software propietario según sus términos. **(correcta)**
- C. Prohibir cualquier distribución comercial o cobro por servicios, aunque se conserven los avisos y se cumplan las restantes condiciones.
- D. Equivaler a una renuncia completa a todos los derechos y permitir retirar autoría, avisos o condiciones del código redistribuido.

Explicación: Las permisivas conservan copyright y condiciones, pero no imponen el copyleft fuerte típico de GPL.

### Propuesta

¿Qué rasgo general caracteriza a una licencia permisiva como MIT o Apache-2.0?

- A. Exige copyleft del conjunto que incluye módulos independientes del componente.
- B. Permite reutilizar con obligaciones limitadas, incluso en productos propietarios. **(correcta)**
- C. Prohíbe distribuir el componente a cambio de un precio por la copia.
- D. Elimina copyright y permite retirar los avisos al redistribuir el componente.

Explicación: Una licencia permisiva suele conceder amplios permisos sin imponer copyleft al conjunto de la obra derivada, manteniendo condiciones concretas. MIT y Apache-2.0 permiten usos comerciales y combinación en productos propietarios si se respetan sus términos. No equivalen a dominio público ni a ausencia de obligaciones; tampoco se infiere que cualquier combinación con otra licencia resulte compatible.

- Error A: Esa imposición general de copyleft no caracteriza a las permisivas; además, las relaciones entre partes independientes y obra combinada deben examinarse concretamente.
- Error C: MIT y Apache permiten explotación y distribución comerciales en sus términos; no prohíben cobrar por la copia por ser permisivas.
- Error D: Conservan copyright y avisos o condiciones aplicables; la amplitud de permisos no autoriza borrarlos sin atender al texto.

- [OSI: The MIT License](https://opensource.org/license/mit) · Concesión de permisos; condición de conservar copyright y permiso en copias o partes sustanciales; ausencia de garantía · versión: Identificador MIT, versión N/A según OSI; texto de licencia, no dominio público · comprobado: 2026-10-28
- [ASF: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 2 Copyright License; 3 Patent License: reivindicaciones licenciables del contribuyente necesariamente infringidas por su contribución sola o combinada con la obra; terminación por litigio indicado; 4 avisos · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. Concesión expresa delimitada, sin concluir ausencia de todo derecho implícito bajo otras licencias · comprobado: 2026-10-28

Partida: `9b3ab3558d97666db5825d11494441d17968b14f3a0143db591d04cf36bde36e` · propuesta: `dda5f9c3c70f3b97c62a9fd81fb7eb1e625ee9f61ae2d2f242da06f71960cf5c`

## MAN-GSI-P16-031

Decisión: pending_review · acción: revise.

Motivo: Conservar alcance limitado de patentes y clave A; reemplazar «todas las patentes del mundo» por cuatro inferencias concretas de la sección 3.

### Antes

Si una dependencia está bajo Apache-2.0, ¿qué no debería asumirse?

- A. Que todas las patentes del mundo quedan licenciadas sin límites. **(correcta)**
- B. Que existe una sección específica de patente.
- C. Que hay condiciones de redistribución.
- D. Que conviene conservar avisos aplicables.

Explicación: La concesión de patentes está delimitada por los términos y contribuciones contempladas en la licencia.

### Propuesta

Respecto a la sección 3 de Apache-2.0, ¿qué inferencia es incorrecta?

- A. La concesión cubre patentes de terceros ajenos a las contribuciones. **(correcta)**
- B. La concesión exige que el contribuyente pueda licenciar las reivindicaciones.
- C. El alcance vincula reivindicaciones a la contribución sola o con la obra.
- D. El litigio descrito puede terminar la concesión de patentes para esa obra.

Explicación: La sección 3 Apache-2.0 delimita la concesión a reivindicaciones licenciables por el contribuyente que resulten necesariamente infringidas por su contribución sola o por su combinación con la obra a la que se aportó. No licencia las patentes de cualquier tercero ni concede propiedad sobre ellas. La sección incluye terminación por el litigio de patentes que describe; no se extiende esa terminación a cualquier reclamación jurídica.

- Error B: Que el contribuyente pueda licenciar esas reivindicaciones es una condición del texto; no es la inferencia incorrecta.
- Error C: El vínculo con la contribución sola o combinada con la obra está previsto, con el requisito de infracción necesaria; no equivale a cualquier patente relacionada lejanamente.
- Error D: La licencia contempla terminación de las concesiones para esa obra al interponer el litigio de patentes descrito; no es la afirmación incorrecta.

- [ASF: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 2 Copyright License; 3 Patent License: reivindicaciones licenciables del contribuyente necesariamente infringidas por su contribución sola o combinada con la obra; terminación por litigio indicado; 4 avisos · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. Concesión expresa delimitada, sin concluir ausencia de todo derecho implícito bajo otras licencias · comprobado: 2026-10-28

Partida: `5b60b20e78798f4c5950da3ec0313a7d8234edb2afeabf0e9ec60d04de0085fb` · propuesta: `77fdece13a6049e9311e116d1d9833fd04d7954e8568bf5d6dbb1de59aff698a`

## MAN-GSI-P16-044

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la diferencia GPL/AGPL y clave B; precisar modificación, usuarios remotos, fuente correspondiente y oferta destacada.

### Antes

¿Qué diferencia conceptual conviene recordar entre GPL y AGPL?

- A. AGPL sustituye el copyleft fuerte por condiciones permisivas cuando el software se ofrece como servicio.
- B. AGPL añade una obligación específica para usuarios que interactúan remotamente por red con versiones modificadas en los supuestos de la licencia. **(correcta)**
- C. GPL exige entregar el código por el uso privado de una copia, mientras AGPL excluye los servicios accesibles por red.
- D. AGPL se limita a bibliotecas enlazadas dinámicamente, mientras GPL se aplica a aplicaciones de escritorio.

Explicación: AGPL fue diseñada para cubrir el escenario de software interactivo ejecutado como servicio en red.

### Propuesta

¿Qué diferencia conceptual conviene recordar entre GPL y AGPL?

- A. AGPL sustituye el copyleft fuerte por condiciones permisivas cuando el software se ofrece como servicio.
- B. AGPL añade una obligación específica para usuarios que interactúan remotamente por red con versiones modificadas en los supuestos de la licencia. **(correcta)**
- C. GPL exige entregar el código por el uso privado de una copia, mientras AGPL excluye los servicios accesibles por red.
- D. AGPL se limita a bibliotecas enlazadas dinámicamente, mientras GPL se aplica a aplicaciones de escritorio.

Explicación: AGPLv3 sección 13 exige que, al modificar el programa y si la versión soporta interacción remota por red, se ofrezca de forma destacada a esos usuarios obtener el fuente correspondiente por red sin cargo. GPLv3 define que mera interacción sin transferencia de copia no es conveying. La distinción no elimina obligaciones de distribución de cualquiera de las dos ni extiende automáticamente AGPL a todo software vecino.

- Error A: AGPL conserva copyleft; la interacción por red no lo transforma en condiciones permisivas.
- Error C: GPLv3 permite uso privado sin transmitir con sus condiciones, y AGPL sí contempla la interacción remota del supuesto de sección 13; la alternativa invierte ambos criterios.
- Error D: La distinción no es bibliotecas frente a escritorio: esa caracterización confunde AGPL/GPL con otras categorías y no describe la obligación remota.

- [OSI: GNU General Public License version 3](https://opensource.org/license/gpl-3.0) · 0 Definitions: propagate/convey; 2 Basic Permissions; 4 y 5 distribución; 5 aggregate; 6 Corresponding Source; 13 AGPL combination · versión: GPL versión 3, 29-06-2007; texto completo del registro oficial OSI, leído directamente tras timeout en GNU · comprobado: 2026-10-28
- [OSI: GNU Affero General Public License version 3](https://opensource.org/license/agpl-3.0) · 0 Definitions; 2 Basic Permissions; 5 aggregate y obras independientes; 13 Remote Network Interaction; Use with the GNU GPL · versión: AGPL versión 3, 19-11-2007; texto completo del registro oficial OSI, leído directamente tras timeout en GNU · comprobado: 2026-10-28

Partida: `4129058611de0353bc38bedee2d5bae6bee6f57d6ac37188dbfca2077fe02980` · propuesta: `7cce10017ce97fba4be2f6b3696dffe5153e081a220f9787444f8f3da2b2f302`

## MAN-GSI-P16-049

Decisión: pending_review · acción: revise.

Motivo: Conservar combinación y distribución como hechos relevantes GPL y clave A; sustituir distractores ajenos por inferencias de gobernanza cercanas.

### Antes

¿Qué hecho es especialmente relevante al analizar obligaciones GPL?

- A. Cómo se combina el código y si existe distribución/conveying de la obra resultante. **(correcta)**
- B. El color del logotipo.
- C. El precio de adquisición exclusivamente.
- D. El sistema operativo del desarrollador exclusivamente.

Explicación: El análisis depende de la relación entre componentes y del acto de distribución, no de etiquetas comerciales.

### Propuesta

¿Qué hecho es especialmente relevante al analizar obligaciones GPL?

- A. La combinación entre componentes y los actos que entregan copias a terceros. **(correcta)**
- B. La publicación de una vulnerabilidad como activador general de copyleft.
- C. La posibilidad de consultar el repositorio como sustituto de revisar la entrega.
- D. El tipo de máquina de despliegue como criterio que determina toda obligación.

Explicación: Deben examinarse la relación entre componentes, qué obra o combinación se entrega y si hay conveying, además de condiciones concretas de la licencia. GPLv3 distingue una obra cubierta de un agregado con programas separados e independientes. Acceso al repositorio, precio o infraestructura no resuelven por sí solos el análisis; tampoco se afirma que cualquier enlace implique o excluya una obra derivada en todo caso.

- Error B: Publicar un aviso de vulnerabilidad no es un activador general de copyleft de GPL; el análisis atiende a actos y relaciones previstos en la licencia.
- Error C: Que un repositorio sea consultable no identifica por sí solo qué copia se entregó ni demuestra cumplimiento de todos los requisitos aplicables.
- Error D: La máquina o plataforma puede aportar contexto, pero no determina por sí misma la relación de obras o la entrega de copias.

- [OSI: GNU General Public License version 3](https://opensource.org/license/gpl-3.0) · 0 Definitions: propagate/convey; 2 Basic Permissions; 4 y 5 distribución; 5 aggregate; 6 Corresponding Source; 13 AGPL combination · versión: GPL versión 3, 29-06-2007; texto completo del registro oficial OSI, leído directamente tras timeout en GNU · comprobado: 2026-10-28

Partida: `07f690f8536ec69e82c3d36e02292a0fe6bcb22237f6f95853655789a24bd99d` · propuesta: `05be0b74c3519f2f4feb98503ca9540454de365540d395327f539bb6c67c7c4d`

## MAN-GSI-P16-050

Decisión: pending_review · acción: revise.

Motivo: Conservar que AGPL no se extiende indiscriminadamente al servidor y clave C; microcaso delimita programa separado e independiente, sin imponer reglas universales de enlace.

### Antes

¿Cuál de estas afirmaciones sobre AGPL es correcta?

- A. Convierte todo el hardware del servidor en software libre.
- B. Solo se aplica si el programa es gratuito.
- C. No significa que cualquier software del mismo servidor pase automáticamente a AGPL. **(correcta)**
- D. No permite modificar el programa.

Explicación: La obligación se aplica a la obra cubierta y a combinaciones según los términos, no indiscriminadamente a todo lo que comparte infraestructura.

### Propuesta

En un servidor conviven un programa AGPL y otro separado e independiente, sin formar una obra combinada. ¿Qué conclusión es correcta?

- A. Compartir servidor somete a AGPL los dos programas por su ubicación.
- B. El precio del servicio decide si el programa independiente queda bajo AGPL.
- C. La ubicación común no somete por sí sola el otro programa a AGPL. **(correcta)**
- D. La comunicación de procesos elimina las condiciones del programa AGPL.

Explicación: Compartir infraestructura no aplica por sí solo AGPL a otro programa separado e independiente que no forma una obra combinada con el cubierto. La sección 5 trata agregados y la 13 la interacción remota de versiones modificadas. Si cambian los hechos de integración debe revisarse la relación real; no se usa la separación de procesos como regla universal que resuelva cualquier combinación.

- Error A: La ubicación no equivale por sí misma a obra combinada ni elimina la independencia declarada en el supuesto.
- Error B: Cobrar o no por el servicio no sustituye el análisis de derechos, obras e interacción definido por la licencia.
- Error D: Una comunicación no extingue por sí sola las condiciones del programa cubierto. Tampoco basta invocar procesos distintos para resolver toda cuestión de integración.

- [OSI: GNU Affero General Public License version 3](https://opensource.org/license/agpl-3.0) · 0 Definitions; 2 Basic Permissions; 5 aggregate y obras independientes; 13 Remote Network Interaction; Use with the GNU GPL · versión: AGPL versión 3, 19-11-2007; texto completo del registro oficial OSI, leído directamente tras timeout en GNU · comprobado: 2026-10-28

Partida: `7ed2e382a726a622342178da0ed45e511e83e961f55134760ea35a699fd2be30` · propuesta: `82ce6c42965286d459ee73fbbb4829fe625812ee5c8d4dee6605e9db9d34f67c`

## MAN-GSI-P16-077

Decisión: pending_review · acción: revise.

Motivo: Conservar licencia original frente a compatibilidad EUPL y clave D; quitar «mágicamente» y delimitar obra combinada, copia aislada y obligaciones en conflicto.

### Antes

¿Qué afirmación sobre el código original EUPL al usar una cláusula de compatibilidad es más prudente?

- A. Desaparecer automáticamente la licencia original al aplicar la cláusula, dejando el código previo sin las condiciones que lo cubrían.
- B. Pasar todo el código a dominio público, sin copyright, atribución ni obligaciones, por combinarse con una licencia declarada compatible.
- C. Eliminar las obligaciones de facilitar código fuente respecto del componente original, aunque la EUPL siga cubriéndolo en la combinación.
- D. La compatibilidad no implica que el código original deje mágicamente de estar cubierto por EUPL. **(correcta)**

Explicación: La compatibilidad opera sobre la obra combinada según términos; no borra la licencia del componente original.

### Propuesta

Al aplicar legítimamente la cláusula de compatibilidad EUPL 1.2, ¿qué afirmación es correcta?

- A. La licencia compatible borra la procedencia y el copyright del código original.
- B. El mecanismo convierte el código original en dominio público al combinarlo.
- C. La cláusula permite relicenciar una copia aislada solo por preferencia del receptor.
- D. La obra combinada puede usar la compatible sin borrar la licencia de origen. **(correcta)**

Explicación: La cláusula EUPL 1.2 permite distribuir o comunicar determinadas obras derivadas basadas en la obra y otra bajo una licencia del apéndice, con prevalencia de obligaciones compatibles cuando colisionan. La FAQ distingue la obra combinada del código recibido, que conserva cobertura de origen. No es permiso para cambiar una copia aislada por preferencia ni para retirar autoría, avisos o suministro de fuente que siga siendo exigible.

- Error A: Compatibilidad no elimina procedencia ni copyright; deben conservarse los avisos y obligaciones que correspondan.
- Error B: La combinación no convierte automáticamente el código en dominio público ni extingue sus derechos y condiciones.
- Error C: La cláusula tiene requisitos de obra derivada y licencia compatible; la FAQ descarta usarla solo para relicenciar una copia original aislada.

- [Comisión Europea: EUPL 1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 definiciones; 5 copyleft, cláusula de compatibilidad, conflictos y suministro de fuente; 6 secuencia de autoría; apéndice de licencias compatibles · versión: EUPL 1.2, DOUE L128 de 19-05-2017; texto oficial español, sin inferir compatibilidad universal entre cualquier par de licencias · comprobado: 2026-10-28
- [Comisión Europea: EUPL FAQs](https://interoperable-europe.ec.europa.eu/collection/eupl/faqs) · Licence Compatibility: What is licence compatibility?; Is the use of a compatible licence a re-licensing?; Could the use of a compatible licence reduce the reciprocity? · versión: Guía web interpretativa consultada el 28-10-2026; no sustituye texto de licencia ni resuelve universalmente si cualquier enlace crea obra derivada · comprobado: 2026-10-28

Partida: `fa0ac7beb4d01171f4aabc54b6fec9293c1768d548a69aad54bd532a175ed605` · propuesta: `84d94be5390e6ea7460c1c412618c662c8fa0582d2a1323c18cfaf18294e7342`

## MAN-GSI-P16-087

Decisión: pending_review · acción: revise.

Motivo: Conservar inscripción no constitutiva y clave A; cuatro consecuencias jurídicas próximas y sin una correcta desproporcionadamente larga.

### Antes

¿Qué afirmación sobre el registro de un programa es correcta?

- A. Puede inscribirse en el Registro de la Propiedad Intelectual, pero la protección no se plantea como dependiente de un registro constitutivo obligatorio. **(correcta)**
- B. La inscripción es constitutiva: sin ella no existe copyright ni puede ejercerse ningún derecho sobre el programa original.
- C. Registrar el programa concede automáticamente una patente sobre sus algoritmos sin examen de novedad o actividad inventiva.
- D. Solo puede inscribirse el ejecutable final y quedan excluidos código fuente, versiones sucesivas y documentación asociada.

Explicación: El artículo 101 permite la inscripción; la protección deriva del régimen de autor y la originalidad.

### Propuesta

Sobre el registro de un programa de ordenador, ¿qué afirmación es correcta?

- A. Puede inscribirse, pero los derechos no nacen por una inscripción obligatoria. **(correcta)**
- B. Debe inscribirse para que la creación original reciba protección de autor.
- C. La inscripción concede también una patente sobre el algoritmo registrado.
- D. La inscripción transforma en exclusiva una licencia de uso no exclusiva.

Explicación: El artículo 101 permite inscribir derechos sobre programas y sus versiones o derivados. La protección de autor se relaciona con creación y originalidad, conforme a artículos 1 y 96, sin exigir una inscripción constitutiva general. El registro no equivale a patente ni cambia por sí solo el alcance de una licencia o cesión.

- Error B: La ley permite inscripción, pero no supedita con carácter general el nacimiento del derecho de autor a ese trámite.
- Error C: Registro de propiedad intelectual y patente tienen objetos y procedimientos distintos; inscribir no concede automáticamente una patente.
- Error D: La inscripción no sustituye las condiciones de licencia o cesión ni transforma por sí sola derechos no exclusivos en exclusivos.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 nacimiento por creación; 96.2 originalidad y 96.3–4 expresión frente a ideas; 97.4 programa laboral fuente/objeto; 99 explotación; 100 límites; 101 inscripción voluntaria · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `45bb98c4abef08d6c3b1b8d5cbdd016b2b5d9a5b4202026b6345a3cc9beae05e` · propuesta: `2b6711f88134b880007d8517ba9e3c16879e8dec22dbcb0affe57c3ff54e74b6`

## MAN-GSI-P16-088

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegro el supuesto laboral y clave C; delimitar trabajador asalariado, funciones/instrucciones, pacto y derechos de explotación.

### Antes

Un empleado crea un programa dentro de las funciones que le han sido confiadas. Salvo pacto en contrario, el TRLPI atribuye los derechos de explotación:

- A. Al empleado en exclusiva por ser autor material, aunque el programa se cree dentro de sus funciones y no exista pacto distinto.
- B. Al Registro de la Propiedad Intelectual desde la inscripción, que pasa a explotar el programa en nombre de ambas partes.
- C. Al empresario, tanto respecto del programa fuente como del programa objeto, en el supuesto legal descrito. **(correcta)**
- D. Al cliente final que utilice primero el programa, aunque no sea empleador ni exista cesión contractual de los derechos.

Explicación: El artículo 97.4 establece esa regla para programas creados por trabajador asalariado en sus funciones/instrucciones.

### Propuesta

Un empleado crea un programa dentro de las funciones que le han sido confiadas. Salvo pacto en contrario, el TRLPI atribuye los derechos de explotación:

- A. Al empleado en exclusiva por ser autor material, aunque el programa se cree dentro de sus funciones y no exista pacto distinto.
- B. Al Registro de la Propiedad Intelectual desde la inscripción, que pasa a explotar el programa en nombre de ambas partes.
- C. Al empresario, tanto respecto del programa fuente como del programa objeto, en el supuesto legal descrito. **(correcta)**
- D. Al cliente final que utilice primero el programa, aunque no sea empleador ni exista cesión contractual de los derechos.

Explicación: El artículo 97.4 atribuye al empresario, salvo pacto en contrario, los derechos de explotación del programa creado por trabajador asalariado en el ejercicio de funciones confiadas o siguiendo instrucciones del empresario, tanto fuente como objeto. Es un supuesto delimitado: no se extiende a cualquier persona contratista o cualquier creación ajena a esas funciones, ni equivale a decidir aquí todos los derechos morales.

- Error A: La condición de autor material no altera por sí sola la atribución legal de explotación al empresario en el supuesto laboral descrito y sin pacto distinto.
- Error B: El registro no pasa a explotar el programa por la inscripción; no es el destinatario de la regla del artículo 97.4.
- Error D: El primer uso por un cliente no acredita cesión o condición de empleador ni sustituye la atribución legal del supuesto.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 nacimiento por creación; 96.2 originalidad y 96.3–4 expresión frente a ideas; 97.4 programa laboral fuente/objeto; 99 explotación; 100 límites; 101 inscripción voluntaria · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `4418551d0f16a1859f85546ef499453640c556042fd8e68a53a0565b345e0cae` · propuesta: `f350f04d39cb563e38eb6764c90047d6590c52d19677a181e709882315bf438b`

## MAN-GSI-P16-090

Decisión: pending_review · acción: revise.

Motivo: Conservar fuente/objeto como formas del programa y clave A; alternativas sobre expresión, compilación y registro, sin prolongarlas con absolutos repetidos.

### Antes

¿Qué distinción es correcta entre código fuente y código objeto?

- A. Ambos son formas del programa; el régimen legal puede abarcar las distintas formas de expresión. **(correcta)**
- B. Proteger mediante derechos de autor únicamente el código objeto ejecutable, mientras el código fuente queda fuera del régimen del programa.
- C. Excluir siempre de protección el código fuente por ser legible y modificable, incluso cuando expresa de forma original un programa de ordenador.
- D. Considerar el código objeto una idea abstracta sin forma de expresión, aunque sea la representación compilada de instrucciones del programa.

Explicación: El artículo 96 protege cualquier forma de expresión y el 97 menciona fuente y objeto en el supuesto laboral.

### Propuesta

¿Qué distinción entre código fuente y código objeto es correcta desde el régimen de autor del programa?

- A. Fuente y objeto son formas de expresión susceptibles de protección del programa. **(correcta)**
- B. El objeto es expresión protegible y el fuente solo una idea por ser legible.
- C. El fuente es expresión protegible y el objeto pierde esa condición al compilarse.
- D. Cada forma necesita una inscripción constitutiva distinta para recibir protección.

Explicación: La protección del programa original alcanza cualquier forma de expresión conforme al artículo 96.3. Fuente y objeto no se excluyen por ser legibles o compilados; el artículo 97.4 menciona ambos en el supuesto laboral. No se reserva la idea abstracta como tal ni se convierte toda secuencia de código en obra protegida sin examinar originalidad.

- Error B: Ser legible no convierte el fuente en mera idea abstracta; puede expresar originalmente el programa y estar protegido.
- Error C: Compilar no convierte por ese solo hecho el objeto en algo sin expresión protegible; la ley contempla distintas formas del programa.
- Error D: La protección no exige con carácter general registros constitutivos separados para fuente y objeto; inscripción y nacimiento del derecho son planos distintos.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 nacimiento por creación; 96.2 originalidad y 96.3–4 expresión frente a ideas; 97.4 programa laboral fuente/objeto; 99 explotación; 100 límites; 101 inscripción voluntaria · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `dab5ab1c5d65b09360a8b5f208f763f7c4a9916f7d669ce8d4cb052576a3e75c` · propuesta: `47005157f12717a6a44307b003a209728ff622e54b112010ebfa5e130f97309d`

## MAN-GSI-P16-136

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la inferencia errónea sobre permiso técnico y clave C; explicar cada práctica válida sin referencias a letras visibles.

### Antes

¿Qué error es frecuente con DRM?

- A. Distinguir las capacidades impuestas por la medida técnica de los permisos y límites derivados de licencia y ley.
- B. Revisar el contrato, la licencia y la normativa aplicable antes de concluir si un uso concreto está autorizado.
- C. Pensar que si una acción está técnicamente permitida por el software, necesariamente está jurídicamente autorizada. **(correcta)**
- D. Evaluar si el mecanismo afecta a accesibilidad, interoperabilidad, conservación y ejercicio de excepciones legítimas.

Explicación: Capacidad técnica y permiso jurídico no coinciden necesariamente; tampoco la prohibición técnica resuelve todos los derechos.

### Propuesta

¿Qué error es frecuente con DRM?

- A. Distinguir las capacidades impuestas por la medida técnica de los permisos y límites derivados de licencia y ley.
- B. Revisar el contrato, la licencia y la normativa aplicable antes de concluir si un uso concreto está autorizado.
- C. Pensar que si una acción está técnicamente permitida por el software, necesariamente está jurídicamente autorizada. **(correcta)**
- D. Evaluar si el mecanismo afecta a accesibilidad, interoperabilidad, conservación y ejercicio de excepciones legítimas.

Explicación: Que el software deje realizar una acción no demuestra autorización jurídica para ella. Deben comprobarse licencia, derechos y límites legales, junto a funcionamiento real y efectos del control. La inversa también importa: un derecho no elimina automáticamente una barrera técnica. PlayReady ejemplifica objetos técnicos con claves y políticas, distintos del contrato o título jurídico; no se generaliza su implementación a cualquier producto.

- Error A: Separar capacidad técnica y permiso jurídico es una distinción correcta, no el error preguntado.
- Error B: Examinar contrato, licencia y ley es pertinente antes de concluir autorización; no presupone que el funcionamiento técnico decida derechos.
- Error D: Evaluar efectos en usuarios, integración y acceso futuro es pertinente; no confunde por sí mismo posibilidad técnica y autorización.

- [Microsoft Learn: PlayReady — License Acquisition](https://learn.microsoft.com/en-us/playready/overview/license-acquisition) · Server and Client interactions; Proactive, Reactive license acquisition; pasos 5–11 de adquisición; licencias, derechos y condiciones · versión: Artículo actualizado 07-11-2018; documentación de un sistema concreto, no comportamiento obligatorio de cualquier DRM · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 nacimiento por creación; 96.2 originalidad y 96.3–4 expresión frente a ideas; 97.4 programa laboral fuente/objeto; 99 explotación; 100 límites; 101 inscripción voluntaria · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `ab999ad910c8fc3e125ecfc3276a4690cdf0e3230ef6224d3b91e34a252f3301` · propuesta: `5ed861f92b99e5bace14bdddfcd079ba548fe53465c7fdbbf0ff955a9b1e1eb9`

## AI-GSI-B2-T15-002

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de Delphi y clave C; precisar cuestionarios/realimentación y sustituir TOPSIS por una técnica próxima de consenso, eliminando «exclusivamente» de AHP.

### Antes

¿Qué técnica utiliza rondas de expertos con realimentación para aproximar consenso?

- A. TOPSIS
- B. Camino crítico
- C. Delphi **(correcta)**
- D. AHP exclusivamente

Explicación: Delphi organiza rondas; AHP utiliza jerarquías y comparaciones por pares.

### Propuesta

¿Qué técnica aproxima el consenso de expertos mediante cuestionarios sucesivos con realimentación controlada entre rondas?

- A. Técnica de grupo nominal
- B. Camino crítico
- C. Delphi **(correcta)**
- D. AHP

Explicación: Delphi utiliza consultas sucesivas de expertos con realimentación controlada entre rondas para acercar o esclarecer sus opiniones. El resumen del estudio original de Dalkey y Helmer describe esa estructura de cuestionarios. Buscar consenso no garantiza alcanzarlo ni demuestra por sí solo que la opinión sea correcta. AHP también emplea juicios expertos, pero los organiza en comparaciones por pares para derivar prioridades.

- Error A: La técnica de grupo nominal estructura generación de ideas, registro, discusión y priorización en grupo; no es la serie de cuestionarios con realimentación controlada entre rondas descrita.
- Error B: El camino crítico analiza la red de actividades y duración del proyecto; no es un procedimiento de consulta sucesiva de expertos para aproximar opiniones.
- Error D: AHP deriva prioridades mediante comparaciones por pares y su síntesis; no se define por la secuencia de rondas de cuestionarios con realimentación descrita.

- [Dalkey y Helmer: An Experimental Application of the DELPHI Method to the Use of Experts](https://pubsonline.informs.org/doi/abs/10.1287/mnsc.9.3.458?journalCode=mnsc) · Abstract: series of questionnaires interspersed with controlled opinion feedback; identificación de autores, fecha y artículo · versión: Management Science 9(3), 458–467, 01-04-1963; DOI 10.1287/mnsc.9.3.458. Resumen del editor leído directamente; no se atribuye lectura de texto completo inaccesible · comprobado: 2026-10-28
- [CDC: Gaining Consensus Among Stakeholders Through the Nominal Group Technique](https://www.cdc.gov/healthy-youth/php/program-evaluation/pdf/brief7.pdf) · Página 1: Defining the Nominal Group Technique; The Four Step Process to Conduct NGT · versión: Evaluation Briefs No.7, actualizado agosto de 2018; cabecera C296013-E November 16, 2018. URL antigua devolvió 404; texto en URL vigente accesible · comprobado: 2026-10-28
- [NASA: PP&amp;C Glossary](https://www.nasa.gov/ocfo/ppc-corner/ppc-glossary/) · Critical Path (Deterministic); Critical Path Method (CPM) · versión: Glosario web de planificación y control consultado el 28-10-2026, sin versión documental cerrada indicada; CPM es planificación por red, no consulta sucesiva de expertos · comprobado: 2026-10-28
- [Thomas L. Saaty: Decision making with the analytic hierarchy process](https://doi.org/10.1504/IJSSCI.2008.017590) · Abstract del editor: teoría de medición mediante comparaciones por pares y prioridades; autor, fecha, revista y DOI · versión: International Journal of Services Sciences 1(1), 83–98, publicado online 18-03-2008. Resumen primario indexado; apertura directa DOI devolvió 403, sin declarar lectura del artículo completo · comprobado: 2026-10-28

Partida: `d1efcc5e6585adda089c76508ccef16f0a2a6969afeca6afea4dfebba3478666` · propuesta: `2c3dec36d8e9912114e795cba6cb9bbfb63523ff56667ebaece79602d20f487e`
