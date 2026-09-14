GSI A2 — PRÁCTICA ACTIVA 16

**LICENCIAS · SOFTWARE LIBRE/PROPIETARIO · PROTECCIÓN JURÍDICA · DRM**

160 preguntas · 4 opciones · II.14 cierre del último hueco rojo

**CUADERNO DE TRABAJO**

# Cómo usar esta práctica

Objetivo: cerrar II.14 como último tema sin práctica específica y entrenar tanto discriminación conceptual como decisión contractual y de arquitectura.

Método: responde sin consultar apuntes. Marca además cada fallo como concepto, licencia/compatibilidad, regla jurídica, DRM/riesgo o decisión de contratación. Repite a 48–72 h solo las preguntas falladas o dudosas.

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

# 1. Software libre, propietario y open source

**1. ¿Qué caracteriza mejor al software propietario?**

**A)** El titular conserva los derechos y concede facultades de uso según la licencia y la ley.

**B)** Debe ser necesariamente de pago.

**C)** Nunca puede distribuirse gratuitamente.

**D)** Siempre impide cualquier copia de seguridad.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**2. ¿Cuál de estas afirmaciones sobre software libre es correcta?**

**A)** Debe entregarse siempre sin coste.

**B)** Prohíbe cobrar por soporte.

**C)** Puede ser comercial y venderse, siempre que se respeten las libertades y la licencia.

**D)** Obliga a que todo software que se ejecute junto a él sea libre.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**3. Según la definición de la FSF, la libertad 0 consiste en:**

**A)** Acceder gratuitamente al código fuente.

**B)** Ejecutar el programa como se desee, para cualquier propósito.

**C)** Redistribuir únicamente copias sin modificar.

**D)** Publicar siempre cualquier modificación privada.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**4. Para que la libertad de estudiar y modificar un programa sea efectiva, ¿qué es condición necesaria?**

**A)** Que el programa esté en dominio público.

**B)** Que la licencia sea necesariamente GPL.

**C)** Que el programa sea gratuito.

**D)** Acceso al código fuente en una forma adecuada para modificarlo.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**5. ¿Qué libertad de software libre permite redistribuir copias del programa?**

**A)** La libertad 0.

**B)** La libertad 2.

**C)** La libertad 1.

**D)** La libertad 3 exclusivamente para versiones modificadas.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**6. ¿Qué libertad se refiere específicamente a distribuir versiones modificadas?**

**A)** La libertad 0.

**B)** La libertad 1 únicamente.

**C)** La libertad 2 exclusivamente.

**D)** La libertad 3.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**7. Un programa cuyo código puede verse en GitHub, pero cuya licencia prohíbe modificarlo, ¿es automáticamente software libre?**

**A)** No; ver el código no basta si faltan libertades esenciales.

**B)** Sí, porque source-available equivale a libre.

**C)** Sí, si la descarga es gratuita.

**D)** Sí, siempre que no tenga DRM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**8. ¿Qué afirma la Open Source Definition respecto al concepto “open source”?**

**A)** Equivale a dominio público.

**B)** Obliga a usar siempre copyleft fuerte.

**C)** No se reduce a poder ver el código: las condiciones de distribución deben cumplir criterios adicionales.

**D)** Prohíbe el uso comercial.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**9. ¿Cuál de estas condiciones es coherente con la Open Source Definition?**

**A)** La licencia puede prohibir todo uso comercial.

**B)** La licencia puede exigir una tasa por cada redistribución.

**C)** La licencia no debe discriminar a personas, grupos o campos de actividad.

**D)** El código fuente puede omitirse siempre sin forma de obtenerlo.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**10. ¿Qué relación existe normalmente entre software libre y open source?**

**A)** Hay gran solapamiento práctico, aunque las definiciones y el énfasis filosófico no son idénticos.

**B)** Son categorías jurídicamente idénticas en todo caso.

**C)** Todo open source es dominio público.

**D)** El software libre nunca puede ser open source.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**11. ¿Cuál de estas frases es una trampa de examen?**

**A)** “El software libre puede ser comercial”.

**B)** “El acceso al fuente es necesario para estudiar y modificar”.

**C)** “Una licencia establece derechos y condiciones”.

**D)** “Si es gratuito, entonces es software libre”.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**12. Una aplicación propietaria se ofrece sin coste a todos los ciudadanos. ¿Qué puede afirmarse?**

**A)** Pasa automáticamente a ser software libre.

**B)** Puede seguir siendo propietaria aunque su precio sea cero.

**C)** Queda en dominio público.

**D)** Su código debe publicarse obligatoriamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**13. ¿Cuál es una diferencia correcta entre “propietario” y “comercial”?**

**A)** Todo software comercial es propietario.

**B)** Todo software propietario se vende.

**C)** El software libre no admite actividad económica.

**D)** No son sinónimos: puede haber software libre comercial y software propietario gratuito.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**14. ¿Qué describe mejor una licencia de software?**

**A)** Un mecanismo técnico de cifrado.

**B)** El instrumento que fija facultades, condiciones y obligaciones de uso, copia, modificación o distribución según el caso.

**C)** Una garantía de ausencia de vulnerabilidades.

**D)** Un registro obligatorio en todos los casos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**15. ¿Qué afirmación sobre modificaciones privadas es más correcta en términos generales de software libre?**

**A)** Toda modificación debe subirse a Internet en 24 horas.

**B)** Solo las licencias permisivas permiten modificar en privado.

**C)** Una licencia libre no convierte automáticamente toda modificación privada en una publicación obligatoria.

**D)** La libertad 1 prohíbe usar una versión modificada internamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**16. ¿Qué significa “source-available” de forma prudente?**

**A)** Que el código puede estar disponible para consulta, pero hay que revisar la licencia para saber qué derechos se conceden.

**B)** Que la licencia es OSI-approved automáticamente.

**C)** Que es necesariamente copyleft.

**D)** Que está en dominio público.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**17. Una licencia que prohíbe utilizar el programa en un sector económico concreto, ¿encaja bien con la Open Source Definition?**

**A)** No, porque la OSD impide discriminar por campo de actividad.

**B)** Sí, si permite ver el código.

**C)** Sí, si no cobra royalties.

**D)** Sí, si la prohibición solo afecta a empresas.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**18. ¿Qué opción contiene solo conceptos que conviene separar?**

**A)** GPL/AGPL como sinónimos exactos.

**B)** Precio/licencia como la misma dimensión.

**C)** Código fuente/binario como términos equivalentes.

**D)** Libre/gratuito, open source/dominio público y licencia/DRM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**19. En una comparación para una Administración, ¿qué criterio es inadecuado?**

**A)** Evaluar TCO.

**B)** Elegir “libre” únicamente porque se presupone coste de licencia cero.

**C)** Valorar soporte y comunidad.

**D)** Revisar interoperabilidad y reversibilidad.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**20. ¿Qué enfoque demuestra mejor comprensión del tema?**

**A)** Clasificar todo solo como gratis o de pago.

**B)** Asumir que código visible equivale a dominio público.

**C)** Separar libertades, licencia, titularidad, modelo económico y mecanismo técnico.

**D)** Usar “open source”, “freeware” y “libre” como sinónimos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# 2. Licencias permisivas: MIT, BSD y Apache-2.0

**21. ¿Qué rasgo general caracteriza a una licencia permisiva?**

**A)** Obliga siempre a publicar todo el código de la aplicación final.

**B)** Permite reutilización amplia con obligaciones relativamente reducidas, incluso dentro de software propietario según sus términos.

**C)** Prohíbe la distribución comercial.

**D)** Equivale a renunciar a todos los derechos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**22. ¿Cuál es un ejemplo habitual de licencia permisiva?**

**A)** AGPL-3.0.

**B)** GPL-3.0.

**C)** EUPL-1.2.

**D)** MIT.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**23. ¿Qué familia incluye ejemplos como BSD y MIT?**

**A)** Copyleft fuerte.

**B)** DRM contractual.

**C)** Licencias permisivas.

**D)** Dominio público necesariamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**24. ¿Qué debe hacerse antes de reutilizar código MIT o BSD en un producto?**

**A)** Leer y cumplir sus avisos y condiciones; “permisiva” no significa “sin obligaciones”.

**B)** Suprimir siempre todos los avisos de copyright.

**C)** Relicenciar el código original como propietario eliminando atribución.

**D)** Asumir que no existe copyright.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**25. ¿Qué afirmación sobre Apache License 2.0 es correcta?**

**A)** No concede ningún derecho de copyright.

**B)** Es copyleft fuerte idéntico a GPL.

**C)** Incluye una concesión explícita de licencia de patentes bajo sus condiciones.

**D)** Prohíbe uso comercial.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**26. ¿Qué distingue de forma útil Apache-2.0 frente a una descripción mínima de MIT?**

**A)** Apache-2.0 regula expresamente cuestiones de patentes con más detalle.

**B)** Apache-2.0 impide crear obras derivadas.

**C)** MIT obliga a publicar fuente de cualquier derivado.

**D)** MIT es una licencia de contenido, no de software.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**27. Una organización integra una biblioteca permisiva en un producto cerrado. ¿Qué conclusión es prudente?**

**A)** Es imposible con cualquier licencia permisiva.

**B)** Puede ser posible, pero deben respetarse exactamente la licencia, avisos y demás obligaciones aplicables.

**C)** La biblioteca pasa automáticamente a dominio público.

**D)** No hace falta conservar evidencia de licencia.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**28. ¿Qué error debe evitarse con licencias permisivas?**

**A)** Reconocer que puede existir atribución.

**B)** Mantener inventario de dependencias.

**C)** Revisar patentes cuando proceda.

**D)** Interpretar “permisiva” como “puedo borrar copyright y condiciones”.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**29. ¿Qué documento interno ayuda a cumplir avisos de terceros?**

**A)** Un listado de contraseñas.

**B)** Un diagrama de red.

**C)** Una copia del ejecutable sin metadatos.

**D)** Un inventario de componentes y sus licencias, acompañado de ficheros NOTICE/licencias cuando proceda.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**30. ¿Qué es más correcto sobre el uso comercial bajo MIT/BSD/Apache-2.0?**

**A)** Está prohibido por definición.

**B)** Generalmente está permitido conforme a sus términos.

**C)** Solo lo permite Apache-2.0.

**D)** Convierte automáticamente la licencia en propietaria.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**31. Si una dependencia está bajo Apache-2.0, ¿qué no debería asumirse?**

**A)** Que todas las patentes del mundo quedan licenciadas sin límites.

**B)** Que existe una sección específica de patente.

**C)** Que hay condiciones de redistribución.

**D)** Que conviene conservar avisos aplicables.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**32. ¿Qué ventaja organizativa suele aportar una licencia permisiva?**

**A)** Garantía de soporte de por vida.

**B)** Ausencia total de vulnerabilidades.

**C)** Menor fricción para combinar código con otros modelos de licencia, aunque sigue siendo necesario revisar compatibilidad.

**D)** Eliminación del riesgo de cadena de suministro.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**33. ¿Cuál es la mejor práctica al incorporar una librería BSD?**

**A)** Registrar versión, origen, licencia y avisos que deban conservarse.

**B)** Copiarla y eliminar cualquier referencia al origen.

**C)** Confiar en que el nombre “BSD” basta sin leer texto/licencia exacta.

**D)** Usar siempre la versión más nueva sin pruebas.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**34. ¿Qué afirmación sobre las licencias permisivas es falsa?**

**A)** Pueden permitir integración en software propietario.

**B)** Suelen exigir mantener determinadas notas de copyright/licencia.

**C)** Obligan necesariamente a que todo el programa combinado se distribuya bajo la misma licencia.

**D)** Deben analizarse por su texto y versión concreta.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**35. En un expediente de contratación, ¿qué conviene exigir respecto a componentes permisivos?**

**A)** Solo el nombre comercial de la aplicación.

**B)** Que no exista ningún componente de terceros.

**C)** Que todos los componentes sean GPL.

**D)** Inventario/SBOM y cumplimiento de atribuciones y condiciones.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**36. ¿Qué concepto se relaciona directamente con saber qué licencias llevan las dependencias?**

**A)** RPO.

**B)** SBOM e inventario de componentes.

**C)** BGP.

**D)** CPI de valor ganado.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**37. ¿Por qué no basta con saber que una licencia es “permisiva”?**

**A)** Porque todas son jurídicamente inválidas en Europa.

**B)** Porque hay que conocer la licencia y versión exactas y sus requisitos concretos.

**C)** Porque ninguna permite redistribución.

**D)** Porque todas incluyen idéntica cláusula de patentes.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**38. ¿Cuál de estas parejas está bien clasificada?**

**A)** MIT → permisiva; GPL → copyleft.

**B)** MIT → copyleft fuerte; GPL → permisiva.

**C)** Apache-2.0 → dominio público; BSD → DRM.

**D)** BSD → licencia propietaria; MIT → AGPL.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**39. Una empresa modifica código Apache-2.0 y lo distribuye dentro de un producto. ¿Qué enfoque es correcto?**

**A)** Asumir que puede eliminar toda referencia a terceros.

**B)** Publicar obligatoriamente todo el producto bajo AGPL.

**C)** Revisar y cumplir las condiciones de Apache-2.0, incluidos avisos y las reglas aplicables a modificaciones/NOTICE.

**D)** Tratar Apache-2.0 como si fuera una licencia sin texto.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**40. ¿Qué frase resume mejor las permisivas para test?**

**A)** Permisiva significa dominio público.

**B)** Permisiva significa sin uso comercial.

**C)** Permisiva significa copyleft de red.

**D)** Amplia reutilización no equivale a ausencia de copyright ni de obligaciones.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# 3. Copyleft: GPL, LGPL y AGPL

**41. ¿Qué busca el copyleft, de forma simplificada?**

**A)** Prohibir toda actividad comercial.

**B)** Convertir automáticamente el software en dominio público.

**C)** Preservar determinadas libertades y obligaciones al redistribuir el programa o trabajos sujetos a sus condiciones.

**D)** Sustituir el copyright por DRM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**42. ¿Cuál es una licencia de copyleft fuerte muy conocida?**

**A)** GNU GPL.

**B)** MIT.

**C)** BSD-2-Clause.

**D)** Apache-2.0.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**43. ¿Qué afirmación sobre GPL y uso interno es correcta en términos generales?**

**A)** Todo uso interno obliga a publicar el repositorio en Internet.

**B)** GPL prohíbe modificar para uso interno.

**C)** GPL impide cobrar por el software.

**D)** El mero uso interno sin distribución/conveying no activa por sí solo las obligaciones de entrega de fuente propias de la distribución.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**44. ¿Qué diferencia conceptual conviene recordar entre GPL y AGPL?**

**A)** GPL es permisiva y AGPL propietaria.

**B)** AGPL añade una obligación específica para usuarios que interactúan remotamente por red con versiones modificadas en los supuestos de la licencia.

**C)** AGPL elimina el copyleft.

**D)** GPL solo sirve para documentación.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**45. Una empresa modifica un servidor AGPL y ofrece esa versión modificada a usuarios mediante una aplicación web. ¿Qué idea debe revisar?**

**A)** Que AGPL permite ocultar siempre las modificaciones si no entrega binarios.

**B)** Que la licencia se convierte en MIT.

**C)** Que el uso por red elimina cualquier obligación.

**D)** La obligación de ofrecer a esos usuarios acceso al código fuente correspondiente de la versión modificada, según AGPL.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**46. ¿Qué afirmación describe mejor LGPL?**

**A)** Es idéntica a MIT.

**B)** Es un copyleft más débil pensado para permitir determinados enlaces/usos con software no LGPL bajo condiciones.

**C)** Prohíbe enlazar con software propietario en todos los casos.

**D)** Es una licencia de contenidos Creative Commons.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**47. ¿Qué error de examen aparece a menudo con copyleft?**

**A)** Distinguir distribución de uso interno.

**B)** Revisar licencia y versión.

**C)** Pensar que copyleft significa “no comercial”.

**D)** Comprobar obligaciones de fuente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**48. ¿Qué ocurre con el copyright en una obra GPL?**

**A)** Sigue existiendo; el titular concede derechos bajo condiciones de la licencia.

**B)** Desaparece automáticamente.

**C)** Se transfiere al dominio público.

**D)** Pasa siempre a la FSF.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**49. ¿Qué hecho es especialmente relevante al analizar obligaciones GPL?**

**A)** Cómo se combina el código y si existe distribución/conveying de la obra resultante.

**B)** El color del logotipo.

**C)** El precio de adquisición exclusivamente.

**D)** El sistema operativo del desarrollador exclusivamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**50. ¿Cuál de estas afirmaciones sobre AGPL es correcta?**

**A)** Convierte todo el hardware del servidor en software libre.

**B)** Solo se aplica si el programa es gratuito.

**C)** No significa que cualquier software del mismo servidor pase automáticamente a AGPL.

**D)** No permite modificar el programa.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**51. ¿Cuál es la mejor regla para una dependencia GPL?**

**A)** Tratar GPL como MIT.

**B)** No decidir por intuición: revisar licencia, versión, forma de enlace/combinación y modelo de distribución.

**C)** Eliminar el fichero LICENSE.

**D)** Suponer que SaaS y distribución son siempre idénticos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**52. ¿Qué licencia fue creada específicamente para abordar el “vacío” de modificaciones usadas a través de red sin distribuir copias?**

**A)** MIT.

**B)** BSD-3-Clause.

**C)** Apache-1.1.

**D)** AGPL.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**53. Si solo se ejecuta una copia GPL sin distribuirla a terceros, la FAQ de GNU indica, de forma general, que:**

**A)** Debe publicarse todo el código propio del equipo.

**B)** No hay requisitos de distribución por ese mero hecho.

**C)** Hay que relicenciar la base de datos.

**D)** Se prohíbe modificar el programa.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**54. ¿Qué afirmación sobre GPL es falsa?**

**A)** Es una licencia de software libre.

**B)** Usa copyleft.

**C)** Puede imponer obligaciones al distribuir versiones modificadas.

**D)** Prohíbe vender copias.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**55. ¿Por qué LGPL suele considerarse útil para bibliotecas?**

**A)** Porque permite ciertos modelos de enlace con aplicaciones bajo otras licencias sin extender idénticamente el copyleft a toda la aplicación, bajo condiciones.

**B)** Porque elimina toda obligación de atribución y fuente.

**C)** Porque no tiene copyright.

**D)** Porque es una licencia de patente exclusivamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**56. ¿Qué pareja es correcta?**

**A)** GPL → permisiva; LGPL → dominio público.

**B)** AGPL → permisiva; MIT → copyleft fuerte.

**C)** GPL → copyleft fuerte; LGPL → copyleft más débil.

**D)** BSD → AGPL de red.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**57. ¿Qué debe hacer una organización si detecta una dependencia AGPL en un servicio?**

**A)** Borrarla siempre, sin análisis.

**B)** Ignorarla porque no se entregan binarios.

**C)** Analizar cómo se usa/modifica, quién interactúa con ella por red y qué obligaciones concretas resultan.

**D)** Asumir que toda la infraestructura debe publicarse.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**58. ¿Qué afirmación sobre “viralidad” de GPL es técnicamente más prudente?**

**A)** Cualquier fichero almacenado en el mismo disco pasa a GPL.

**B)** Es mejor hablar de obligaciones de copyleft según combinación y distribución que usar “viral” como regla automática.

**C)** Toda API que llame a GPL pasa siempre a GPL sin excepción.

**D)** La licencia no depende nunca de cómo se combinan obras.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**59. Una aplicación propietaria llama a una herramienta GPL como proceso separado. ¿Qué debe hacerse?**

**A)** Declarar automáticamente toda la aplicación GPL.

**B)** Eliminar el copyright del componente GPL.

**C)** Cambiar la herramienta a AGPL sin permiso.

**D)** Analizar la arquitectura, interfaces y distribución concretas; no inferir automáticamente el resultado solo por coexistencia.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**60. ¿Qué frase resume la diferencia de red de forma útil?**

**A)** GPL se centra en obligaciones asociadas a distribución/conveying; AGPL añade el escenario de interacción remota con software modificado.

**B)** GPL obliga siempre en SaaS y AGPL nunca.

**C)** Ambas son permisivas.

**D)** AGPL no contiene copyleft.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# 4. EUPL, compatibilidad, dominio público y Creative Commons

**61. ¿Qué es la EUPL?**

**A)** Una licencia propietaria de Microsoft.

**B)** Un estándar de DRM.

**C)** Una licencia exclusiva para fotografías.

**D)** La European Union Public Licence, una licencia libre/open source de la Unión Europea con carácter recíproco/copyleft.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**62. ¿Qué versión de EUPL aparece como texto oficial vigente en el portal europeo utilizado en estos apuntes?**

**A)** EUPL-3.0.

**B)** EUPL-1.2.

**C)** EUPL-2.5.

**D)** EUPL-0.9 únicamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**63. ¿En cuántas lenguas oficiales de la UE está disponible EUPL-1.2 según el portal oficial?**

**A)** 23.

**B)** 4.

**C)** 12.

**D)** 27 versiones no equivalentes.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**64. ¿Qué rasgo hace especialmente relevante la EUPL para Administraciones europeas?**

**A)** Prohíbe reutilización por empresas.

**B)** Es una licencia de pago por usuario.

**C)** Fue concebida en el marco de la UE, es multilingüe y contempla compatibilidad/interoperabilidad con otras licencias.

**D)** Solo sirve para software sin red.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**65. ¿Qué significa que una licencia sea compatible en este contexto?**

**A)** Que puede existir una vía jurídicamente prevista para combinar componentes y distribuir la obra resultante bajo condiciones compatibles.

**B)** Que dos programas compilan en el mismo sistema operativo.

**C)** Que ambos usan el mismo lenguaje.

**D)** Que ambas licencias son idénticas palabra por palabra.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**66. ¿Qué debe hacerse antes de combinar dos dependencias copyleft distintas?**

**A)** Asumir que todo copyleft es compatible entre sí.

**B)** Eliminar las licencias originales.

**C)** Comprobar compatibilidad de las licencias y versiones concretas.

**D)** Relicenciar siempre ambas como MIT.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**67. ¿Qué afirmación sobre EUPL-1.2 y compatibilidad es correcta?**

**A)** Es incompatible por definición con toda licencia GNU.

**B)** Permite relicenciar libremente el código original sin límites.

**C)** Elimina cualquier obligación copyleft al combinar.

**D)** Incluye un apéndice/listado de licencias compatibles que debe consultarse para el caso concreto.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**68. ¿Qué es el dominio público?**

**A)** Un tipo de copyleft fuerte.

**B)** Una situación jurídica distinta de una licencia open source; no deben tratarse como sinónimos.

**C)** Un DRM sin servidor.

**D)** Una licencia de Apache.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**69. ¿Qué afirmación sobre Creative Commons y software es la más adecuada para este tema?**

**A)** CC-BY es la licencia estándar recomendada por OSI para código ejecutable.

**B)** Creative Commons se orienta principalmente a contenidos/obras culturales y no suele ser la familia recomendada para licenciar software.

**C)** Creative Commons es idéntica a GPL.

**D)** CC0 convierte cualquier patente en dominio público automáticamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**70. ¿Qué riesgo existe al copiar un fragmento de Internet sin información de licencia?**

**A)** Ninguno si el repositorio es público.

**B)** Ninguno si son menos de 100 líneas.

**C)** Solo un riesgo de rendimiento.

**D)** No saber si se tiene derecho a incorporarlo, modificarlo o redistribuirlo.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**71. ¿Qué herramienta conceptual ayuda a comprobar combinaciones de licencias en el ecosistema EUPL?**

**A)** Un escáner de puertos.

**B)** Un compilador Java.

**C)** El Licensing Assistant / compatibility checker del portal Interoperable Europe.

**D)** Un sistema DRM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**72. ¿Qué identificador estandarizado es útil para registrar una licencia como EUPL-1.2 o Apache-2.0?**

**A)** Un identificador SPDX.

**B)** Una dirección MAC.

**C)** Un OID de certificado de usuario.

**D)** Un CVE.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**73. ¿Cuál de estas afirmaciones sobre compatibilidad es falsa?**

**A)** Hay que considerar versión concreta.

**B)** El modo de combinación y distribución importa.

**C)** Si dos licencias son open source, entonces siempre son compatibles sin revisar nada más.

**D)** Las obligaciones de patentes/NOTICE/fuente pueden influir.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**74. ¿Qué relación entre EUPL y red/SaaS destaca el portal europeo?**

**A)** EUPL contempla obligaciones para distribución/uso en red dentro de su régimen de reciprocidad.

**B)** EUPL se vuelve permisiva si se usa por red.

**C)** EUPL prohíbe cualquier SaaS.

**D)** EUPL solo cubre software de escritorio.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**75. ¿Qué significa “recíproca” al describir EUPL?**

**A)** Que obliga a pagar una tasa a la UE.

**B)** Que determinadas mejoras/derivados distribuidos o puestos a disposición según sus términos deben mantener obligaciones de compartir código.

**C)** Que el programa solo puede usarse por organismos públicos.

**D)** Que no puede combinarse con ninguna otra licencia.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**76. Una Administración quiere publicar código propio para reutilización europea. ¿Qué consideración es especialmente pertinente?**

**A)** Publicar sin LICENSE porque es una Administración.

**B)** Usar Creative Commons para todo código por defecto.

**C)** Eliminar avisos de terceros.

**D)** Elegir conscientemente licencia, versión y compatibilidad con dependencias, pudiendo considerar EUPL.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**77. ¿Qué afirmación sobre el código original EUPL al usar una cláusula de compatibilidad es más prudente?**

**A)** La licencia original desaparece automáticamente.

**B)** Todo pasa a dominio público.

**C)** Se eliminan las obligaciones de fuente.

**D)** La compatibilidad no implica que el código original deje mágicamente de estar cubierto por EUPL.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**78. ¿Qué diferencia hay entre compatibilidad jurídica e interoperabilidad técnica?**

**A)** Son el mismo concepto.

**B)** La interoperabilidad solo se refiere a copyright.

**C)** La primera trata de si licencias permiten una combinación/distribución; la segunda de si sistemas pueden intercambiar/funcionar juntos.

**D)** La compatibilidad jurídica solo se refiere a protocolos de red.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**79. ¿Qué debería contener una política OSS madura?**

**A)** Lista de licencias permitidas/restringidas, proceso de aprobación, inventario/SBOM y reglas de cumplimiento.

**B)** Solo una lista de repositorios favoritos.

**C)** Únicamente el precio de las herramientas.

**D)** Una prohibición genérica de todo open source.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**80. ¿Qué frase resume mejor este bloque?**

**A)** Todo open source está en dominio público.

**B)** Open source, copyleft, compatibilidad y dominio público son conceptos relacionados pero no intercambiables.

**C)** Toda licencia copyleft es compatible con cualquier otra.

**D)** EUPL es una licencia propietaria.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# 5. Protección jurídica del software en España y la UE

**81. ¿Qué norma española contiene un título específico sobre programas de ordenador dentro de la propiedad intelectual?**

**A)** El texto refundido de la Ley de Propiedad Intelectual, aprobado por Real Decreto Legislativo 1/1996.

**B)** La Ley 39/2015 exclusivamente.

**C)** El Código de Comercio como única norma.

**D)** La Ley General de Telecomunicaciones exclusivamente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**82. ¿Qué protege el derecho de autor sobre software según el TRLPI?**

**A)** Cualquier idea informática aunque nunca se materialice.

**B)** Solo el nombre comercial.

**C)** Las formas de expresión del programa, no las ideas y principios abstractos en que se basa.

**D)** Exclusivamente el soporte físico.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**83. ¿Qué incluye el concepto de programa de ordenador a efectos del artículo 96?**

**A)** Solo el ejecutable firmado.

**B)** También su documentación preparatoria, además de la secuencia de instrucciones en cualquiera de sus formas de expresión/fijación.

**C)** Solo el código fuente publicado.

**D)** Únicamente los manuales de usuario.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**84. ¿Qué requisito menciona el TRLPI para que un programa sea protegido como tal?**

**A)** Que esté registrado obligatoriamente antes de publicarse.

**B)** Que sea software propietario.

**C)** Que tenga al menos 10.000 líneas de código.

**D)** Que sea original, como creación intelectual propia de su autor.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**85. ¿Están protegidas por derecho de autor las ideas y principios que sirven de fundamento a las interfaces de un programa?**

**A)** Sí, siempre y de forma automática.

**B)** No, no como tales por el derecho de autor sobre programas de ordenador.

**C)** Solo si el software es libre.

**D)** Solo si existe DRM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**86. ¿Qué derechos exclusivos enumera el artículo 99, con las limitaciones legales correspondientes?**

**A)** Solo el derecho a registrar una marca.

**B)** Únicamente el derecho a cobrar soporte.

**C)** El derecho a impedir toda interoperabilidad.

**D)** Reproducción, transformación y distribución pública, entre otros actos descritos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**87. ¿Qué afirmación sobre el registro de un programa es correcta?**

**A)** Puede inscribirse en el Registro de la Propiedad Intelectual, pero la protección no se plantea como dependiente de un registro constitutivo obligatorio.

**B)** Sin registro nunca existe derecho de autor.

**C)** Registrar el programa lo convierte en patente.

**D)** Solo puede registrarse el binario, nunca versiones derivadas.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**88. Un empleado crea un programa dentro de las funciones que le han sido confiadas. Salvo pacto en contrario, el TRLPI atribuye los derechos de explotación:**

**A)** Siempre al empleado de forma exclusiva.

**B)** Al Registro de la Propiedad Intelectual.

**C)** Al empresario, tanto respecto del programa fuente como del programa objeto, en el supuesto legal descrito.

**D)** A la Administración tributaria.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**89. ¿Por qué conviene regular expresamente la titularidad en un contrato de desarrollo externo?**

**A)** Porque todo proveedor pierde automáticamente todos sus derechos sin contrato.

**B)** Porque el copyright no se aplica al software contratado.

**C)** Para dejar claros derechos de uso, modificación, evolución, entrega de fuente/documentación y reutilización, evitando dependencia contractual.

**D)** Para sustituir la licencia por un DRM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**90. ¿Qué distinción es correcta entre código fuente y código objeto?**

**A)** Ambos son formas del programa; el régimen legal puede abarcar las distintas formas de expresión.

**B)** Solo el código objeto puede tener copyright.

**C)** El fuente nunca está protegido.

**D)** El código objeto es una idea abstracta.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**91. ¿Qué significa que la cesión de derechos debe analizarse por modalidades de explotación?**

**A)** Que comprar un portátil transfiere el copyright del software instalado.

**B)** Que una licencia siempre transmite la propiedad intelectual completa.

**C)** Que el derecho de autor desaparece al pagar una factura.

**D)** Que no debe presumirse una cesión ilimitada de cualquier derecho no expresado; el contrato y la ley delimitan alcance.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**92. ¿Qué afirmación es correcta sobre la documentación técnica y manuales de uso?**

**A)** Nunca pueden estar protegidos.

**B)** El artículo 96 indica que gozan de la protección que el título dispensa a los programas en los términos legales.

**C)** Son automáticamente dominio público.

**D)** Solo se protegen si usan Creative Commons.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**93. ¿Qué ocurre si un programa forma parte de una invención que puede recibir protección industrial?**

**A)** El copyright desaparece automáticamente.

**B)** Toda línea de código se convierte en patente europea.

**C)** Las patentes sustituyen siempre a cualquier licencia.

**D)** La protección por derecho de autor puede coexistir, sin perjuicio del régimen de propiedad industrial que corresponda.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**94. ¿Qué afirmación sobre “comprar software” es más correcta?**

**A)** Comprar una copia siempre transfiere todo el código fuente y copyright.

**B)** Normalmente se adquieren facultades de uso conforme a licencia/contrato, no necesariamente la titularidad del copyright.

**C)** La compra elimina cualquier condición de licencia.

**D)** El precio determina si hay derecho de autor.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**95. ¿Qué es una obra derivada o transformación en el contexto de software?**

**A)** Cualquier ejecución sin cambios.

**B)** Un simple cambio de contraseña siempre.

**C)** Una modificación/adaptación que puede implicar derechos de transformación y las condiciones de la licencia aplicable.

**D)** Solo una copia de seguridad.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**96. ¿Cuál es una buena cláusula de continuidad en desarrollo para el sector público?**

**A)** Entrega de código fuente, documentación, dependencias, instrucciones de despliegue y derechos suficientes para mantenimiento/evolución según el contrato.

**B)** Dependencia exclusiva de una cuenta personal del proveedor.

**C)** Prohibición de exportar datos.

**D)** Ausencia de inventario de terceros.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**97. ¿Qué riesgo hay si el contrato dice solo “se entrega la aplicación” sin concretar derechos?**

**A)** Puede quedar ambiguo qué puede modificar, redistribuir, encargar a terceros o reutilizar el cliente.

**B)** Ninguno: la propiedad intelectual siempre se transmite automáticamente.

**C)** Solo un riesgo estético.

**D)** El contrato pasa a ser una licencia MIT.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**98. ¿Qué combinación refleja correctamente distintas capas de protección?**

**A)** Copyright sobre cualquier idea; DRM sobre marcas; patente sobre toda interfaz.

**B)** Marca y copyright son sinónimos.

**C)** Secreto empresarial equivale a dominio público.

**D)** Copyright sobre expresión del software; marcas sobre signos distintivos; secretos sobre información confidencial; patentes bajo su régimen específico.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**99. ¿Qué frase es falsa?**

**A)** La expresión concreta del programa puede estar protegida.

**B)** “Si el algoritmo es una idea abstracta, el copyright del programa me concede monopolio sobre cualquier implementación de esa idea”.

**C)** Las ideas/principios subyacentes no se protegen como tales por copyright de software.

**D)** Puede haber otros regímenes jurídicos además del copyright.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**100. ¿Qué regla mental es más útil para examen sobre protección jurídica?**

**A)** Registro obligatorio = nacimiento del copyright.

**B)** Compra = cesión de todos los derechos.

**C)** Protección del programa ≠ protección absoluta de ideas; licencia de uso ≠ transmisión de titularidad.

**D)** Código fuente = sin protección.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# 6. Límites, interoperabilidad, patentes, marcas y secretos

**101. ¿Puede el usuario legítimo corregir errores necesarios para usar el programa conforme a su finalidad?**

**A)** Nunca, ni siquiera el usuario legítimo.

**B)** El artículo 100 contempla reproducción/transformación necesaria, incluida corrección de errores, salvo disposición contractual en contrario en el marco indicado.

**C)** Solo si publica el código.

**D)** Solo si el programa está en dominio público.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**102. ¿Qué regla establece el TRLPI sobre la copia de seguridad necesaria?**

**A)** Está prohibida siempre.

**B)** Solo puede hacerla el fabricante.

**C)** Transforma la licencia en copyleft.

**D)** No puede impedirse por contrato a quien tiene derecho a utilizar el programa cuando resulte necesaria para esa utilización.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**103. ¿Puede el usuario legítimo observar o estudiar el funcionamiento del programa para determinar ideas y principios?**

**A)** No, está prohibido en todo caso.

**B)** Solo con autorización judicial previa.

**C)** Sí, durante operaciones que tiene derecho a realizar, en los términos del artículo 100.

**D)** Solo si el software es GPL.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**104. ¿La descompilación está autorizada de forma general para cualquier finalidad?**

**A)** No; la excepción legal está limitada, especialmente a obtener información necesaria para interoperabilidad bajo requisitos.

**B)** Sí, cualquier comprador puede descompilar para copiar el producto.

**C)** Sí, si no vende el resultado.

**D)** Sí, siempre que cambie el nombre del programa.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**105. Una condición para la excepción de interoperabilidad es:**

**A)** Que el usuario quiera desarrollar un clon sustancialmente similar.

**B)** Que se descompile el programa completo aunque no sea necesario.

**C)** Que la información necesaria no haya sido puesta previamente de manera fácil y rápida a disposición de quien puede invocar la excepción.

**D)** Que el programa sea gratuito.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**106. ¿Hasta dónde deben limitarse los actos de descompilación para interoperabilidad?**

**A)** A las partes del programa original necesarias para conseguirla.

**B)** A todo el código sin límite.

**C)** Solo al manual, nunca al código.

**D)** A las partes que generen más valor comercial.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**107. La información obtenida por la excepción de interoperabilidad puede usarse:**

**A)** Para crear y comercializar un clon sustancialmente similar en expresión.

**B)** Únicamente para conseguir la interoperabilidad del programa creado independientemente y dentro de los límites legales.

**C)** Para publicarla indiscriminadamente.

**D)** Para eliminar cualquier DRM ajeno sin relación con interoperabilidad.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**108. ¿Qué diferencia hay entre una patente y el copyright del software?**

**A)** Son exactamente el mismo derecho.

**B)** La patente nace automáticamente al escribir código.

**C)** El copyright requiere novedad técnica industrial.

**D)** Son regímenes distintos; el copyright protege expresión y la patente, cuando proceda, una invención bajo requisitos específicos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**109. ¿Qué protege principalmente una marca?**

**A)** El código fuente como tal.

**B)** Toda idea de negocio.

**C)** Una copia de seguridad.

**D)** Signos que distinguen productos o servicios en el mercado.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**110. ¿Qué protege un secreto empresarial?**

**A)** Cualquier dato publicado en GitHub.

**B)** Información valiosa mantenida confidencial bajo condiciones legales, como know-how no divulgado.

**C)** Únicamente logotipos registrados.

**D)** Todo algoritmo aunque sea público.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**111. ¿Qué error debe evitarse al usar una licencia open source?**

**A)** Suponer que la licencia de copyright concede automáticamente cualquier patente imaginable.

**B)** Revisar cláusulas de patente.

**C)** Registrar la licencia exacta.

**D)** Conservar avisos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**112. ¿Qué afirmación sobre Apache-2.0 y patentes es correcta?**

**A)** No menciona patentes.

**B)** Concede cualquier patente de terceros del mundo.

**C)** La licencia contiene una concesión de patentes de cada contribuyente limitada a las reivindicaciones cubiertas por sus términos.

**D)** Convierte todas las patentes en dominio público.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**113. ¿Qué afirmación refleja el artículo 104 del TRLPI?**

**A)** El régimen de programas se entiende sin perjuicio de normas sobre patentes, marcas, competencia desleal, secretos y obligaciones, entre otras.

**B)** El software solo puede protegerse por copyright.

**C)** Las marcas quedan derogadas para software.

**D)** Los secretos empresariales no pueden coexistir con copyright.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**114. Un proveedor entrega binarios pero ninguna información para integrar el sistema con terceros. ¿Qué enfoque es correcto?**

**A)** Descompilar todo y publicar el resultado por defecto.

**B)** Asumir que pagar la licencia permite cualquier uso.

**C)** Revisar primero contrato, documentación disponible y, si procede, los límites legales de interoperabilidad; no asumir libertad total para descompilar.

**D)** Copiar la interfaz y el código completo sin análisis.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**115. ¿Cuál de estas actividades está más claramente fuera de la excepción de interoperabilidad descrita?**

**A)** Limitarse a las partes necesarias.

**B)** Actuar siendo usuario legítimo.

**C)** Usar la información solo para interoperar.

**D)** Usar la información para desarrollar y comercializar un programa sustancialmente similar en su expresión.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**116. ¿Qué relación hay entre ingeniería inversa e interoperabilidad?**

**A)** Son siempre ilegales sin excepción.

**B)** La ley puede permitir actos concretos y limitados para interoperabilidad; no existe una autorización genérica de ingeniería inversa para cualquier fin.

**C)** Son siempre libres sin condiciones.

**D)** Solo dependen del precio del software.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**117. ¿Qué debe comprobar una Administración ante una solución con algoritmos propietarios críticos?**

**A)** Solo la marca del proveedor.

**B)** Derechos de auditoría, interoperabilidad, exportación, documentación, continuidad y condiciones de acceso, además de seguridad.

**C)** Únicamente el coste inicial.

**D)** Que tenga el DRM más restrictivo posible.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**118. ¿Cuál es una buena práctica con secretos del proveedor?**

**A)** Delimitar confidencialidad sin impedir al cliente obtener la información y derechos necesarios para operar, mantener y migrar según contrato.

**B)** Publicarlos siempre.

**C)** Confundirlos con patentes concedidas.

**D)** Asumir que secreto permite incumplir obligaciones de transparencia en cualquier caso.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**119. ¿Qué frase distingue bien patente y marca?**

**A)** Ambas protegen exactamente el código fuente.

**B)** Marca protege el algoritmo y patente el logotipo.

**C)** Patente puede proteger una invención bajo requisitos; marca identifica origen empresarial de productos/servicios.

**D)** Ninguna tiene relación con propiedad industrial.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**120. ¿Qué regla mental resume este bloque?**

**A)** Comprar una copia autoriza cualquier descompilación.

**B)** La interoperabilidad elimina todo copyright.

**C)** Una licencia cubre automáticamente todos los derechos posibles.

**D)** Usuario legítimo no significa libertad ilimitada: hay límites y excepciones concretas; copyright no agota patentes, marcas ni secretos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# 7. DRM, medidas técnicas y riesgos

**121. ¿Qué significa DRM en este contexto?**

**A)** Una licencia jurídica concreta de software libre.

**B)** Un registro de propiedad intelectual.

**C)** Digital Rights Management: mecanismos técnicos para controlar acceso, uso o explotación digital.

**D)** Un estándar de SBOM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**122. ¿Cuál es un ejemplo de mecanismo DRM o control técnico de licencias?**

**A)** Activación mediante servidor y clave vinculada a una licencia.

**B)** Una licencia MIT escrita en un fichero LICENSE.

**C)** Un contrato de mantenimiento sin control técnico.

**D)** Un inventario SBOM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**123. ¿Qué diferencia fundamental hay entre licencia y DRM?**

**A)** Son sinónimos exactos.

**B)** DRM concede copyright y la licencia cifra archivos.

**C)** La licencia solo existe en software propietario.

**D)** La licencia define derechos/obligaciones jurídicas; el DRM intenta hacer cumplir o restringir técnicamente determinados usos.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**124. ¿Puede existir software propietario sin DRM?**

**A)** No, todo propietario tiene DRM por definición.

**B)** Sí; propiedad/licencia y presencia de controles técnicos son dimensiones distintas.

**C)** Solo si es gratuito.

**D)** No, porque DRM es el copyright.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**125. ¿Puede existir DRM en contenidos o software con un modelo de licencia concreto sin que DRM sea la licencia?**

**A)** No, DRM sustituye jurídicamente cualquier licencia.

**B)** Solo en dominio público.

**C)** Solo en GPL.

**D)** Sí; el mecanismo técnico y la licencia siguen siendo conceptos separados.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**126. ¿Qué riesgo de continuidad introduce un servidor de activación externo?**

**A)** Que el código se vuelva automáticamente open source.

**B)** Que la indisponibilidad o desaparición del proveedor impida usar software legítimamente adquirido.

**C)** Que se reduzca siempre el consumo de CPU.

**D)** Que desaparezca el copyright.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**127. ¿Qué riesgo de privacidad puede asociarse a ciertos DRM?**

**A)** Que la licencia MIT exija datos biométricos.

**B)** Que no exista nunca conexión de red.

**C)** Telemetría o comunicación frecuente con servidores de licencia que recoja datos de dispositivo/uso.

**D)** Que el copyright se transfiera al usuario.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**128. ¿Qué problema puede causar DRM en preservación digital?**

**A)** Impedir acceso futuro si desaparecen claves, servidores o entornos compatibles.

**B)** Garantizar conservación indefinida.

**C)** Convertir automáticamente formatos a estándares abiertos.

**D)** Eliminar dependencia de proveedor.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**129. ¿Qué relación puede haber entre DRM y accesibilidad?**

**A)** Un control técnico puede impedir herramientas de asistencia, adaptación o copia necesaria si está mal diseñado.

**B)** DRM garantiza por definición WCAG AAA.

**C)** No existe ninguna interacción posible.

**D)** Accesibilidad solo depende del precio.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**130. ¿Qué riesgo de interoperabilidad puede introducir un DRM cerrado?**

**A)** Obligar a usar estándares abiertos.

**B)** Eliminar formatos propietarios.

**C)** Bloquear integración, migración o uso con herramientas de terceros.

**D)** Garantizar APIs públicas.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**131. ¿Qué debe evaluar especialmente una Administración antes de aceptar DRM crítico?**

**A)** Solo si el icono es visible.

**B)** Continuidad, reversibilidad, dependencia de servidores, privacidad, accesibilidad e interoperabilidad.

**C)** Únicamente el número de usuarios.

**D)** Solo si el proveedor es grande.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**132. ¿Qué significa “reversibilidad” en este contexto?**

**A)** Revertir cada actualización de Windows.

**B)** Eliminar cualquier licencia de terceros.

**C)** Convertir automáticamente software propietario en libre.

**D)** Poder abandonar o sustituir la solución conservando datos, funcionalidad esencial y capacidad operativa razonable.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**133. Un DRM impide exportar datos en formato utilizable. ¿Cuál es el principal problema?**

**A)** Exceso de software libre.

**B)** Lock-in y dificultad de migración/reversibilidad.

**C)** Falta de copyleft.

**D)** Incompatibilidad con copyright por definición.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**134. ¿Qué medida contractual reduce riesgo de un servidor de licencias que pueda desaparecer?**

**A)** Prohibir copias de seguridad.

**B)** Eliminar la documentación.

**C)** Aceptar activación personal no transferible sin contingencia.

**D)** Cláusulas de continuidad, mecanismos offline/escrow cuando proceda y derecho de uso/transición ante fin de servicio.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**135. ¿Qué es un “watermark” o marca de agua digital en este contexto?**

**A)** Un mecanismo técnico que puede identificar o rastrear copias/usuarios sin ser por sí mismo la licencia jurídica.

**B)** Una licencia copyleft.

**C)** Un registro de patentes.

**D)** Un formato de SBOM.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**136. ¿Qué error es frecuente con DRM?**

**A)** Separar lo técnico de lo jurídico.

**B)** Revisar contrato y ley.

**C)** Pensar que si una acción está técnicamente permitida por el software, necesariamente está jurídicamente autorizada.

**D)** Analizar accesibilidad.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**137. ¿Qué otro error inverso debe evitarse?**

**A)** Comprobar que el mecanismo técnico es compatible con derechos concedidos.

**B)** Probar escenarios offline.

**C)** Pensar que una licencia concede un derecho y por ello el producto nunca puede tener una barrera técnica que dificulte ejercerlo.

**D)** Documentar dependencias.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**138. ¿Qué relación hay entre medidas de protección y el TRLPI de programas?**

**A)** La ley obliga a todo software a incluir DRM.

**B)** La ley contempla infracciones relacionadas con instrumentos destinados a suprimir o neutralizar sin autorización dispositivos técnicos de protección, en el supuesto regulado.

**C)** La ley define DRM como licencia libre.

**D)** Eliminar cualquier DRM es siempre lícito por ser usuario legítimo.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**139. ¿Qué opción refleja una evaluación equilibrada de DRM?**

**A)** Maximizar restricciones sin análisis.

**B)** Prohibir siempre DRM sin excepciones.

**C)** Confiar solo en el marketing del proveedor.

**D)** Valorar protección de activos junto con impacto en disponibilidad, privacidad, accesibilidad, interoperabilidad y preservación.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**140. ¿Qué frase resume mejor el bloque específico de DRM?**

**A)** DRM es un mecanismo técnico con efectos operativos; no sustituye el análisis de licencia, derechos, continuidad y riesgos.

**B)** DRM y licencia son exactamente lo mismo.

**C)** DRM elimina el lock-in.

**D)** Todo software libre carece de cualquier medida técnica de control.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# 8. Casos mixtos, SBOM, cumplimiento y contratación

**141. Una Administración recibe una aplicación con 300 dependencias de terceros. ¿Qué debería exigir primero para gobernar licencias y vulnerabilidades?**

**A)** Solo una captura del repositorio.

**B)** Únicamente el ejecutable.

**C)** Un listado de usuarios finales.

**D)** Una SBOM/inventario con componentes, versiones, origen y licencias, más proceso de actualización.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**142. ¿Qué es una SBOM?**

**A)** Un contrato de licencia propietaria.

**B)** Un inventario estructurado de componentes de software que ayuda a conocer dependencias y versiones; debe complementarse con información fiable de licencias y seguridad.

**C)** Un DRM.

**D)** Un tipo de patente.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**143. Detectas una dependencia sin licencia identificable en producción. ¿Cuál es la mejor actuación?**

**A)** Detener su incorporación/redistribución hasta aclarar procedencia, derechos y alternativa, según política.

**B)** Asumir MIT porque está en GitHub.

**C)** Eliminar el fichero README y continuar.

**D)** Clasificarla como dominio público.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**144. ¿Qué debe registrar un proceso de Software Asset Management?**

**A)** Solo contraseñas de administrador.

**B)** Únicamente incidencias de red.

**C)** Software instalado/adquirido, licencias, derechos de uso, evidencias, versiones y condiciones relevantes.

**D)** Solo software de código abierto.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**145. Una dependencia deja de tener soporte. ¿Por qué interesa además de la licencia?**

**A)** Porque el riesgo de seguridad y mantenimiento también forma parte de la gobernanza de componentes.

**B)** Porque pierde automáticamente su copyright.

**C)** Porque se convierte en dominio público.

**D)** Porque toda licencia caduca al terminar soporte.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**146. ¿Qué debe incluir una política de dependencias open source?**

**A)** Prohibición total sin excepciones.

**B)** Solo una lista de precios.

**C)** Criterios de aprobación, licencias aceptables, revisión de seguridad, inventario, actualización y obligaciones de redistribución.

**D)** Únicamente el nombre del desarrollador.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**147. Un equipo copia código de Stack Overflow o un blog. ¿Qué debe verificar antes de incorporarlo?**

**A)** Nada si el texto era visible públicamente.

**B)** Solo que compile.

**C)** Solo que tenga menos de 20 líneas.

**D)** Licencia/derechos aplicables, atribución y compatibilidad, además de calidad y seguridad.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**148. ¿Qué es “lock-in” de proveedor?**

**A)** Un tipo de copyleft.

**B)** Dependencia que hace costoso o difícil cambiar de proveedor/tecnología por barreras técnicas, contractuales, de datos o licencia.

**C)** Una garantía de continuidad.

**D)** Un estándar abierto.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**149. ¿Qué factor NO debería omitirse al comparar software libre y propietario?**

**A)** El coste inicial como único criterio.

**B)** Coste total de propiedad, soporte, capacidades, seguridad, interoperabilidad, dependencia, comunidad/proveedor y reversibilidad.

**C)** La disponibilidad de documentación.

**D)** El ciclo de vida.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**150. ¿Qué significa TCO?**

**A)** Technical Copyright Obligation.

**B)** Trusted Code Ownership.

**C)** Transfer Control Option.

**D)** Total Cost of Ownership: coste total de propiedad a lo largo del ciclo de vida.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**151. Un pliego exige que al terminar contrato puedan migrarse datos y continuar el servicio. ¿Qué está reforzando?**

**A)** Copyleft fuerte.

**B)** Dominio público.

**C)** Reversibilidad y continuidad.

**D)** DRM obligatorio.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**152. ¿Qué evidencia debería conservar una organización respecto a software adquirido?**

**A)** Contratos, facturas/suscripciones, métricas/licencias asignadas y condiciones aplicables.

**B)** Solo capturas de pantalla.

**C)** Ninguna una vez instalado.

**D)** Únicamente el número de serie del PC.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**153. ¿Qué riesgo hay en usar una cuenta personal de un proveedor para repositorios, firma o activación críticos?**

**A)** Ninguno si el proveedor es conocido.

**B)** Convierte el software en libre.

**C)** Dependencia y pérdida de control/continuidad si la relación termina.

**D)** Elimina necesidad de contrato.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**154. ¿Qué debería exigir un contrato sobre componentes de terceros?**

**A)** Identificación, licencias, cumplimiento, actualizaciones, vulnerabilidades y responsabilidad/proceso de sustitución cuando proceda.

**B)** Que se oculten para no complicar el inventario.

**C)** Que todos sean necesariamente propietarios.

**D)** Que no se documente su versión.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**155. Una aplicación usa MIT, Apache-2.0, GPL y componentes propietarios. ¿Qué enfoque es correcto?**

**A)** Decir que todo es MIT porque es la licencia más permisiva.

**B)** Analizar cada componente, su forma de combinación/distribución y compatibilidad; no clasificar la aplicación por una sola etiqueta.

**C)** Decir que todo es propietario porque existe un componente cerrado.

**D)** Ignorar versiones y arquitectura.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**156. ¿Qué dato es especialmente importante en una SBOM para reproducir un análisis de licencia?**

**A)** El fondo de pantalla del desarrollador.

**B)** La resolución del monitor.

**C)** La contraseña de producción.

**D)** Versión/identificador exacto del componente y su procedencia.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**157. ¿Qué práctica reduce el riesgo de introducir una licencia incompatible en CI/CD?**

**A)** Desactivar los gestores de paquetes.

**B)** Eliminar ficheros LICENSE durante el build.

**C)** Permitir cualquier dependencia sin revisión.

**D)** Escaneo de dependencias/licencias y políticas automáticas con revisión humana para excepciones.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**158. ¿Qué pregunta contractual es clave si se usa un SaaS con fuerte dependencia del proveedor?**

**A)** ¿Qué color tiene el panel?

**B)** ¿Usan más de un lenguaje de programación?

**C)** ¿Cómo exportamos datos/configuración, cuánto dura la transición y qué ocurre si el servicio cesa?

**D)** ¿El proveedor permite cambiar el logotipo?

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**159. Un sistema crítico requiere activación online permanente. ¿Qué combinación de controles es más sensata?**

**A)** Plan offline/contingencia, cláusulas de continuidad, monitorización de dependencia y prueba periódica de recuperación/migración.

**B)** Confiar en que el proveedor existirá siempre.

**C)** Prohibir copias de seguridad.

**D)** No documentar la activación.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

**160. Caso final: se quiere reutilizar software en varias AAPP, incorporar dependencias OSS y garantizar continuidad. ¿Qué enfoque es el más completo?**

**A)** Elegir solo por precio inicial.

**B)** Inventariar/SBOM, seleccionar licencia y comprobar compatibilidad, fijar derechos y entregables, revisar seguridad/soporte y diseñar reversibilidad.

**C)** Publicar todo sin revisar licencias de terceros.

**D)** Usar DRM como sustituto de contrato y gobernanza.

*Respuesta: \_\_\_\_ Seguridad: alta / media / baja*

# Registro de errores

Anota solo los fallos o dudas. La última columna debe contener una regla breve que puedas recordar sin volver a leer todo el tema.

| **N.º** | **Tema** | **Tipo de error** | **Regla correcta** | **Revisión** |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
