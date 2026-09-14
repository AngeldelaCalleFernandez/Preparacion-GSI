GSI A2 — PRÁCTICA ACTIVA 16

**LICENCIAS · SOFTWARE LIBRE/PROPIETARIO · PROTECCIÓN JURÍDICA · DRM**

160 preguntas · 4 opciones · II.14 cierre del último hueco rojo

**SOLUCIONARIO COMENTADO**

# Cómo usar esta práctica

Este solucionario no se limita a dar la letra: cada respuesta incluye la regla que conviene fijar para examen. Las respuestas A/B/C/D están equilibradas: 40 de cada letra en el total y 5 de cada letra en cada bloque de 20.

Base nuclear: GSI A2 — Bloque II — Apuntes completos V2.1 revisados. Las ampliaciones sensibles se han contrastado con fuentes oficiales vigentes a 24/08/2026.

## Distribución

| **Preguntas** | **Bloque** | **Función** |
| --- | --- | --- |
| **1–20** | **Software libre, propietario y open source** | Conceptos base y trampas: libre ≠ gratis; source-available ≠ libre. |
| **21–40** | **Licencias permisivas** | MIT, BSD, Apache-2.0, avisos, patentes y reutilización. |
| **41–60** | **Copyleft** | GPL, LGPL, AGPL, distribución, linking y red. |
| **61–80** | **EUPL, compatibilidad y dominio público** | EUPL-1.2, SPDX, CC y compatibilidad de licencias. |
| **81–100** | **Protección jurídica** | TRLPI, expresión/ideas, titularidad, contratos y explotación. |
| **101–120** | **Límites e interoperabilidad** | Usuario legítimo, copia, descompilación limitada, patentes, marcas y secretos. |
| **121–140** | **DRM** | Medidas técnicas, privacidad, accesibilidad, continuidad y reversibilidad. |
| **141–160** | **Casos integradores** | SBOM, SAM, TCO, lock-in, contratación y supply chain. |

## Fuentes oficiales de contraste

* [FSF — Definición de software libre](https://www.gnu.org/philosophy/free-sw.es)
* [OSI — Open Source Definition](https://opensource.org/osd)
* [BOE — RDL 1/1996, TRLPI (programas de ordenador)](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930)
* [Interoperable Europe — EUPL-1.2](https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12)
* [GNU — FAQ GPL/AGPL](https://www.gnu.org/licenses/gpl-faq.html)
* [Apache Software Foundation — Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)

# Plantilla rápida de respuestas

| **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** | **10** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **1 A** | **2 C** | **3 B** | **4 D** | **5 B** | **6 D** | **7 A** | **8 C** | **9 C** | **10 A** |
| **11 D** | **12 B** | **13 D** | **14 B** | **15 C** | **16 A** | **17 A** | **18 D** | **19 B** | **20 C** |
| **21 B** | **22 D** | **23 C** | **24 A** | **25 C** | **26 A** | **27 B** | **28 D** | **29 D** | **30 B** |
| **31 A** | **32 C** | **33 A** | **34 C** | **35 D** | **36 B** | **37 B** | **38 A** | **39 C** | **40 D** |
| **41 C** | **42 A** | **43 D** | **44 B** | **45 D** | **46 B** | **47 C** | **48 A** | **49 A** | **50 C** |
| **51 B** | **52 D** | **53 B** | **54 D** | **55 A** | **56 C** | **57 C** | **58 B** | **59 D** | **60 A** |
| **61 D** | **62 B** | **63 A** | **64 C** | **65 A** | **66 C** | **67 D** | **68 B** | **69 B** | **70 D** |
| **71 C** | **72 A** | **73 C** | **74 A** | **75 B** | **76 D** | **77 D** | **78 C** | **79 A** | **80 B** |
| **81 A** | **82 C** | **83 B** | **84 D** | **85 B** | **86 D** | **87 A** | **88 C** | **89 C** | **90 A** |
| **91 D** | **92 B** | **93 D** | **94 B** | **95 C** | **96 A** | **97 A** | **98 D** | **99 B** | **100 C** |
| **101 B** | **102 D** | **103 C** | **104 A** | **105 C** | **106 A** | **107 B** | **108 D** | **109 D** | **110 B** |
| **111 A** | **112 C** | **113 A** | **114 C** | **115 D** | **116 B** | **117 B** | **118 A** | **119 C** | **120 D** |
| **121 C** | **122 A** | **123 D** | **124 B** | **125 D** | **126 B** | **127 C** | **128 A** | **129 A** | **130 C** |
| **131 B** | **132 D** | **133 B** | **134 D** | **135 A** | **136 C** | **137 C** | **138 B** | **139 D** | **140 A** |
| **141 D** | **142 B** | **143 A** | **144 C** | **145 A** | **146 C** | **147 D** | **148 B** | **149 B** | **150 D** |
| **151 C** | **152 A** | **153 C** | **154 A** | **155 B** | **156 D** | **157 D** | **158 C** | **159 A** | **160 B** |

# 1. Software libre, propietario y open source

**1. A —** Propietario describe el régimen de derechos/licencia, no el precio ni una prohibición absoluta de todos los actos.

**2. C —** La libertad se refiere a uso, estudio, modificación y redistribución; no equivale a gratuidad.

**3. B —** La libertad 0 es la libertad de ejecutar; no depende del precio ni obliga a publicar modificaciones privadas.

**4. D —** La FSF considera el acceso al código fuente condición necesaria para estudiar y modificar.

**5. B —** La libertad 2 cubre redistribuir copias; la 3 se refiere a versiones modificadas.

**6. D —** La libertad 3 permite distribuir versiones modificadas y exige acceso al código fuente para ser real.

**7. A —** Código visible no implica por sí mismo una licencia libre u open source.

**8. C —** OSI exige criterios como redistribución, fuente, derivados y ausencia de discriminación, entre otros.

**9. C —** Las licencias open source no pueden discriminar por persona o campo de actividad y deben permitir redistribución conforme a la OSD.

**10. A —** Las comunidades comparten mucho software, pero no son conceptos filosóficamente idénticos.

**11. D —** Gratis describe precio; libre describe libertades.

**12. B —** Precio cero no altera por sí mismo el régimen de licencia.

**13. D —** Modelo económico y libertades/licencia son dimensiones distintas.

**14. B —** La licencia es jurídica; no debe confundirse con controles técnicos o calidad.

**15. C —** Las obligaciones de compartir suelen activarse por hechos previstos en la licencia, por ejemplo distribución; no por el mero acto privado de modificar en todos los casos.

**16. A —** La disponibilidad del código no sustituye el análisis de la licencia.

**17. A —** La no discriminación por campo de actividad es un criterio de la OSD.

**18. D —** Estas parejas son trampas clásicas porque describen dimensiones distintas.

**19. B —** El software libre no garantiza coste total cero; deben compararse costes y riesgos completos.

**20. C —** El tema exige discriminar planos jurídicos, económicos y técnicos.

# 2. Licencias permisivas: MIT, BSD y Apache-2.0

**21. B —** Las permisivas conservan copyright y condiciones, pero no imponen el copyleft fuerte típico de GPL.

**22. D —** MIT es una licencia permisiva clásica.

**23. C —** BSD y MIT son referencias típicas de licencias permisivas.

**24. A —** Las permisivas suelen exigir conservar avisos/licencia u otras condiciones concretas.

**25. C —** Apache-2.0 contiene tanto concesión de copyright como una concesión expresa de patentes.

**26. A —** Para examen, la concesión explícita de patentes de Apache-2.0 es una diferencia relevante.

**27. B —** Permisiva facilita integración, pero no elimina obligaciones.

**28. D —** Permisiva no significa ausencia de condiciones.

**29. D —** La trazabilidad de componentes/licencias facilita atribución y cumplimiento.

**30. B —** Las licencias permisivas permiten ampliamente explotación comercial.

**31. A —** La concesión de patentes está delimitada por los términos y contribuciones contempladas en la licencia.

**32. C —** La permisividad reduce algunas restricciones de redistribución, no otros riesgos técnicos/operativos.

**33. A —** La gobernanza de componentes debe registrar la licencia concreta y su evidencia.

**34. C —** El copyleft de la obra combinada no es el rasgo general de las permisivas.

**35. D —** La trazabilidad de terceros permite gestionar obligaciones y vulnerabilidades.

**36. B —** Una SBOM permite inventariar componentes; debe complementarse con metadatos/licencias fiables.

**37. B —** Las familias ayudan a clasificar, pero el cumplimiento depende del texto concreto.

**38. A —** La distinción permisiva/copyleft es básica.

**39. C —** Apache-2.0 es permisiva, pero impone condiciones de redistribución.

**40. D —** Es la regla mental más útil para evitar errores.

# 3. Copyleft: GPL, LGPL y AGPL

**41. C —** Copyleft usa el copyright/licencia para mantener libertades en redistribuciones y derivados según los términos.

**42. A —** GPL es la referencia clásica de copyleft fuerte.

**43. D —** GNU aclara que ejecutar copias sin distribuir no impone esas obligaciones de distribución.

**44. B —** AGPL fue diseñada para cubrir el escenario de software interactivo ejecutado como servicio en red.

**45. D —** La cláusula de red es precisamente el rasgo diferenciador de AGPL.

**46. B —** LGPL modera el efecto copyleft para bibliotecas y ciertos escenarios de linking.

**47. C —** Copyleft no prohíbe el comercio; regula libertades/obligaciones.

**48. A —** Copyleft se apoya precisamente en el copyright.

**49. A —** El análisis depende de la relación entre componentes y del acto de distribución, no de etiquetas comerciales.

**50. C —** La obligación se aplica a la obra cubierta y a combinaciones según los términos, no indiscriminadamente a todo lo que comparte infraestructura.

**51. B —** La compatibilidad depende de detalles técnicos y jurídicos.

**52. D —** AGPL añade la cláusula de interacción remota por red.

**53. B —** La GPL condiciona actos como convey/distribución, no el mero uso privado interno.

**54. D —** El software GPL puede distribuirse comercialmente.

**55. A —** Es la razón conceptual para distinguir LGPL de GPL.

**56. C —** La fuerza/alcance del copyleft distingue estas familias.

**57. C —** La respuesta correcta es un análisis de uso y arquitectura, no una reacción automática.

**58. B —** El término “viral” simplifica demasiado y lleva a errores.

**59. D —** La determinación de obra combinada/independiente exige contexto.

**60. A —** Es una distinción de alto rendimiento para test.

# 4. EUPL, compatibilidad, dominio público y Creative Commons

**61. D —** EUPL es la licencia pública de la UE para software y trabajos cubiertos.

**62. B —** El portal oficial publica EUPL 1.2, difundida en el DOUE en 2017.

**63. A —** EUPL-1.2 se ofrece en 23 versiones lingüísticas oficiales.

**64. C —** Su diseño europeo y cláusulas de compatibilidad la hacen relevante para reutilización pública.

**65. A —** Compatibilidad de licencias es jurídica, no compatibilidad técnica.

**66. C —** Copyleft puede generar conflictos de obligaciones si no existe compatibilidad.

**67. D —** La compatibilidad EUPL está expresamente estructurada y no equivale a borrar la licencia original.

**68. B —** Open source normalmente opera mediante copyright + licencia; dominio público es otro régimen.

**69. B —** Para software se prefieren licencias diseñadas específicamente para código.

**70. D —** Repositorio público no equivale a permiso jurídico de reutilización.

**71. C —** El portal europeo mantiene herramientas para comparar y comprobar compatibilidad.

**72. A —** SPDX normaliza identificadores de licencias y componentes.

**73. C —** Ser open source no garantiza compatibilidad automática.

**74. A —** El portal oficial destaca cobertura de escenarios SaaS/network.

**75. B —** Reciprocity/share-alike es la forma de copyleft de EUPL.

**76. D —** La publicación pública requiere gobernanza de derechos y dependencias.

**77. D —** La compatibilidad opera sobre la obra combinada según términos; no borra la licencia del componente original.

**78. C —** Separar ambos planos evita confundir licencias con arquitectura.

**79. A —** La gobernanza reduce riesgo jurídico y de cadena de suministro.

**80. B —** La discriminación conceptual es el objetivo principal.

# 5. Protección jurídica del software en España y la UE

**81. A —** El TRLPI dedica su Título VII del Libro I a los programas de ordenador.

**82. C —** El artículo 96 protege la expresión y excluye ideas y principios subyacentes.

**83. B —** La norma incluye documentación preparatoria y protege además documentación técnica/manuales en los términos indicados.

**84. D —** La originalidad es la condición indicada en el artículo 96.2.

**85. B —** El artículo 96.4 excluye las ideas y principios, incluidos los que fundamentan interfaces.

**86. D —** El artículo 99 recoge actos de explotación del programa sujetos a autorización salvo límites.

**87. A —** El artículo 101 permite la inscripción; la protección deriva del régimen de autor y la originalidad.

**88. C —** El artículo 97.4 establece esa regla para programas creados por trabajador asalariado en sus funciones/instrucciones.

**89. C —** La claridad contractual evita conflictos sobre alcance de cesiones/licencias y continuidad.

**90. A —** El artículo 96 protege cualquier forma de expresión y el 97 menciona fuente y objeto en el supuesto laboral.

**91. D —** Uso del software y titularidad de derechos de explotación no son equivalentes.

**92. B —** La norma contempla expresamente documentación técnica y manuales.

**93. D —** El artículo 96 contempla coexistencia con la protección industrial cuando proceda.

**94. B —** Adquisición de una copia/licencia y titularidad de propiedad intelectual son planos distintos.

**95. C —** La transformación es uno de los derechos de explotación regulados.

**96. A —** La reversibilidad requiere tanto artefactos técnicos como derechos jurídicos.

**97. A —** Los derechos de explotación deben quedar claramente definidos.

**98. D —** El temario exige distinguir mecanismos jurídicos complementarios.

**99. B —** El copyright no monopoliza ideas abstractas.

**100. C —** Son dos distinciones nucleares del bloque.

# 6. Límites, interoperabilidad, patentes, marcas y secretos

**101. B —** El artículo 100.1 establece ese límite a los derechos de explotación.

**102. D —** El artículo 100.2 protege la copia de seguridad necesaria.

**103. C —** El artículo 100.3 reconoce esa facultad al usuario legítimo.

**104. A —** La descompilación/interoperabilidad se regula con condiciones estrictas en el artículo 100.5 y 100.6.

**105. C —** La ley exige necesidad y falta de disponibilidad previa de la información.

**106. A —** La proporcionalidad/limitación es requisito expreso.

**107. B —** El artículo 100.6 limita uso y comunicación de la información obtenida.

**108. D —** Propiedad intelectual e industrial tienen objetos y requisitos diferentes.

**109. D —** La marca protege identificación/distinción, no el contenido del programa.

**110. B —** La confidencialidad es esencial al régimen de secretos.

**111. A —** Las concesiones de patente dependen de la licencia; Apache-2.0, por ejemplo, las regula expresamente.

**112. C —** Su sección 3 contiene una licencia expresa de patentes delimitada.

**113. A —** La ley reconoce expresamente la coexistencia de otros regímenes.

**114. C —** La interoperabilidad tiene un marco legal específico y requisitos.

**115. D —** El artículo 100.6 prohíbe ese uso.

**116. B —** El punto de examen es evitar absolutos.

**117. B —** La dependencia técnica y jurídica debe gestionarse desde contratación.

**118. A —** Hay que equilibrar secreto, contrato y necesidades legítimas de continuidad/obligaciones públicas.

**119. C —** Son figuras de propiedad industrial con funciones distintas.

**120. D —** La precisión de alcance evita errores jurídicos.

# 7. DRM, medidas técnicas y riesgos

**121. C —** DRM es una capa técnica de control, no una licencia.

**122. A —** Activación/servidores de licencia son ejemplos típicos de control técnico.

**123. D —** Separar norma jurídica y mecanismo técnico es una trampa central del tema.

**124. B —** Un proveedor puede confiar en contrato/licencia sin activación técnica.

**125. D —** DRM puede acompañar a licencias, pero no las reemplaza.

**126. B —** La dependencia de infraestructura del proveedor puede afectar continuidad.

**127. C —** Los controles online pueden introducir tratamiento de datos y trazabilidad.

**128. A —** La preservación exige poder seguir accediendo a largo plazo.

**129. A —** Restricciones técnicas pueden interferir con usos legítimos y tecnologías de apoyo.

**130. C —** DRM puede reforzar lock-in técnico.

**131. B —** El sector público debe asegurar continuidad del servicio y salida.

**132. D —** La reversibilidad reduce lock-in y riesgo de fin de contrato.

**133. B —** La salida y portabilidad de datos deben ser requisitos de contratación.

**134. D —** Debe existir un plan de continuidad y transición.

**135. A —** Es un ejemplo de medida técnica/forense.

**136. C —** Capacidad técnica y permiso jurídico no coinciden necesariamente; tampoco la prohibición técnica resuelve todos los derechos.

**137. C —** La implementación puede introducir barreras que deben detectarse aunque exista un derecho contractual/licenciado.

**138. B —** El artículo 102 contempla específicamente dispositivos técnicos de protección.

**139. D —** Los controles deben ser proporcionales y compatibles con objetivos de servicio.

**140. A —** La separación conceptual es esencial.

# 8. Casos mixtos, SBOM, cumplimiento y contratación

**141. D —** Sin inventario no puede gestionarse cumplimiento ni cadena de suministro.

**142. B —** Software Bill of Materials es una “lista de materiales” del software.

**143. A —** La ausencia de licencia clara es un riesgo jurídico que requiere resolución.

**144. C —** SAM busca control de activos y cumplimiento de licencias.

**145. A —** Licencia, soporte y vulnerabilidades son dimensiones distintas que deben gestionarse juntas.

**146. C —** La gobernanza debe cubrir legal, seguridad y ciclo de vida.

**147. D —** Accesibilidad pública no equivale a autorización libre de reutilización.

**148. B —** Lock-in es un riesgo de reversibilidad, no una licencia.

**149. B —** La decisión no debe reducirse al precio de licencia.

**150. D —** TCO incluye implantación, soporte, operación, formación, migración, etc.

**151. C —** Son requisitos de salida y continuidad operativa.

**152. A —** La evidencia permite demostrar derechos de uso y gestionar renovaciones.

**153. C —** Los activos críticos deben quedar bajo control organizativo y con mecanismos de transferencia.

**154. A —** La transparencia de terceros es básica para mantener la solución.

**155. B —** Los sistemas reales son composiciones y el cumplimiento se evalúa por componentes/relaciones.

**156. D —** Sin versión exacta no puede saberse qué código/licencia se utilizó.

**157. D —** Los controles automatizados ayudan, pero necesitan políticas y excepciones gobernadas.

**158. C —** La salida debe diseñarse antes de contratar para evitar lock-in.

**159. A —** Los riesgos técnicos y contractuales deben tratarse conjuntamente.

**160. B —** La respuesta integra todos los planos del tema II.14.

# Mapa mental de alto rendimiento

| **Concepto** | **Regla de examen** |
| --- | --- |
| **Software libre** | Libertades; puede ser comercial. Libre ≠ gratuito. |
| **Open source** | No basta ver código: la licencia debe cumplir criterios OSD. |
| **Permisivas** | MIT/BSD/Apache-2.0: amplia reutilización + condiciones/avisos; Apache regula patentes. |
| **GPL** | Copyleft fuerte; foco en distribución/conveying y fuente correspondiente según términos. |
| **LGPL** | Copyleft más débil, especialmente relevante en bibliotecas/linking bajo condiciones. |
| **AGPL** | Añade interacción remota por red con versión modificada como escenario de oferta de fuente. |
| **EUPL-1.2** | Licencia de la UE, recíproca/copyleft, multilingüe y con compatibilidad explícita. |
| **Dominio público** | No es sinónimo de open source ni de licencia permisiva. |
| **Copyright software** | Protege expresión; no ideas/principios abstractos. TRLPI Título VII. |
| **Interoperabilidad** | Excepción de descompilación limitada: necesidad, usuario legitimado, partes necesarias y uso restringido. |
| **DRM** | Mecanismo técnico ≠ licencia jurídica. |
| **SBOM/SAM** | Inventario, versiones, licencias, evidencias, seguridad y ciclo de vida. |
| **Contratación** | Derechos + entregables + reversibilidad + datos + continuidad + dependencias. |

# Trampas que debes eliminar

* Software libre ≠ gratuito; software propietario ≠ necesariamente de pago.
* Código visible/source-available ≠ automáticamente libre u open source.
* Permisiva ≠ dominio público; conserva copyright y condiciones.
* Copyleft ≠ prohibición de uso comercial.
* GPL ≠ AGPL: la cláusula de interacción remota de AGPL cambia el escenario de red.
* EUPL compatible ≠ relicenciar sin límites el código original.
* Licencia de copyright ≠ concesión automática de todas las patentes.
* Comprar una copia/licencia ≠ adquirir la titularidad del copyright.
* Usuario legítimo ≠ derecho ilimitado a descompilar.
* DRM ≠ licencia; capacidad técnica ≠ permiso jurídico.
* OSS ≠ ausencia de riesgos de seguridad o supply chain.
* Precio inicial ≠ TCO; contratación sin salida ≠ continuidad.

# Checklist de decisión para un supuesto

* Identificar titular, licencia y versión exacta de cada componente.
* Distinguir uso interno, modificación, distribución y prestación por red.
* Comprobar compatibilidad y obligaciones de avisos, fuente, patentes y redistribución.
* Inventariar dependencias/SBOM y revisar vulnerabilidades/fin de soporte.
* Revisar derechos contractuales sobre código, documentación, datos y evolución.
* Evaluar DRM, activación, accesibilidad, privacidad, interoperabilidad y continuidad.
* Diseñar reversibilidad: exportación, transición, cuentas, claves, repositorios y conocimientos.
* Comparar TCO y riesgos, no solo precio de licencia.
