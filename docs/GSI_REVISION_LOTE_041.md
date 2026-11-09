# GSI-EDITORIAL-041 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `be61917a0c303835ecd2f1278502c27701a2093455b95039379ad7b56a935dca`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P16-051

Decisión: pending_review · acción: revise.

Motivo: Conservar análisis de dependencia GPL y clave B; cuatro criterios de decisión próximos y comparables, sin identificar licencia libre con compatibilidad.

### Antes

¿Cuál es la mejor regla para una dependencia GPL?

- A. Tratar GPL como MIT.
- B. No decidir por intuición: revisar licencia, versión, forma de enlace/combinación y modelo de distribución. **(correcta)**
- C. Eliminar el fichero LICENSE.
- D. Suponer que SaaS y distribución son siempre idénticos.

Explicación: La compatibilidad depende de detalles técnicos y jurídicos.

### Propuesta

¿Cuál es la mejor regla para una dependencia GPL?

- A. Inferir compatibilidad porque las dos licencias sean libres.
- B. Revisar versión, combinación y forma de entrega de copias. **(correcta)**
- C. Aplicar la excepción de agregación a cualquier dependencia.
- D. Tratar el acceso remoto como entrega de copias del programa.

Explicación: Una dependencia GPL exige analizar el texto y la versión aplicables, la relación con otras obras y cómo se usan o entregan copias. GPL v3 distingue conveying, ejecución e interacción por red sin transferencia de copia. Ser licencias libres o compartir un producto no resuelve por sí solo su compatibilidad.

- Error A: Que dos licencias sean libres no demuestra que puedan cumplirse simultáneamente en la combinación prevista.
- Error C: La agregación se refiere a obras separadas e independientes en los términos de GPL v3; no es una excepción automática para cualquier dependencia integrada.
- Error D: GPL v3 excluye de conveying la mera interacción por red sin transferencia de copia. AGPL v3 añade un supuesto específico para versiones modificadas con usuarios remotos.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28
- [GNU AGPL v3, texto FSF en OSI](https://opensource.org/license/agpl-3.0) · Preámbulo; 13 Remote Network Interaction: oferta destacada de Corresponding Source en versión modificada con usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. No se equipara interacción remota a conveying de GPL · comprobado: 2026-10-28

Partida: `01c10e6a549195b851fa0f6a3cecda1f2dcb0a8732afaf02fa1c7a509c1fe56d` · propuesta: `1ca85249d4eb37f70ad0451ef56f0616879c8e364aca28586afb4b83044f08b0`

## MAN-GSI-P16-052

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la identificación con cuatro licencias reales y clave D; explicar el alcance preciso de AGPL sin alargar nombres para ajustar longitudes.

### Antes

¿Qué licencia fue creada específicamente para abordar el “vacío” de modificaciones usadas a través de red sin distribuir copias?

- A. MIT.
- B. BSD-3-Clause.
- C. Apache-1.1.
- D. AGPL. **(correcta)**

Explicación: AGPL añade la cláusula de interacción remota por red.

### Propuesta

¿Qué licencia fue creada específicamente para abordar el “vacío” de modificaciones usadas a través de red sin distribuir copias?

- A. MIT.
- B. BSD-3-Clause.
- C. Apache-1.1.
- D. AGPL. **(correcta)**

Explicación: AGPL incorpora una condición específica para la interacción remota con una versión modificada. En AGPL v3, esa versión debe ofrecer de forma destacada a sus usuarios remotos acceso al código fuente correspondiente. No exige entregar binarios para activar ese supuesto ni alcanza por sí solo todos los sistemas de una organización.

- Error A: MIT concede permisos amplios con conservación de avisos; no contiene la condición específica de fuente por interacción remota con versiones modificadas.
- Error B: BSD-3-Clause regula avisos y uso de nombres en la redistribución; no añade una cláusula equivalente de acceso remoto al fuente.
- Error C: Apache-1.1 regula redistribución y atribuciones; no es la licencia creada para ese supuesto. Es una edición histórica sustituida por Apache-2.0.

- [GNU AGPL v3, texto FSF en OSI](https://opensource.org/license/agpl-3.0) · Preámbulo; 13 Remote Network Interaction: oferta destacada de Corresponding Source en versión modificada con usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. No se equipara interacción remota a conveying de GPL · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant y conservación de copyright y permiso; ausencia de cláusula específica de interacción remota · versión: Identificador MIT; la ficha indica Version N/A, sin asignar un número de versión · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1–3 de avisos en fuente/binario y uso de nombres para promoción · versión: BSD de tres cláusulas; no se atribuye cláusula de fuente por interacción remota · comprobado: 2026-10-28
- [OSI: Apache Software License 1.1](https://opensource.org/license/Apache-1.1) · Redistribution and use y condiciones 1–5; nota de sustitución por Apache License 2.0 · versión: Apache Software License 1.1, copyright ASF 2000; licencia histórica distinta de Apache-2.0, no recomendación de adoptarla · comprobado: 2026-10-28

Partida: `7d04e81714e47a5c57ae074a7a340cc53258e23c81d7fdba6d8f96dcc0956858` · propuesta: `678865808217fe838847dc8d19c116a73dad13ab213962a91c18a4c85230df01`

## MAN-GSI-P16-053

Decisión: pending_review · acción: revise.

Motivo: Mantener mero uso sin distribución y clave B; caso breve que distingue ejecución y entrega, retirando dependencia textual de una FAQ GNU no necesaria para resolverlo.

### Antes

Si solo se ejecuta una copia GPL sin distribuirla a terceros, la FAQ de GNU indica, de forma general, que:

- A. Debe publicarse todo el código propio del equipo.
- B. No hay requisitos de distribución por ese mero hecho. **(correcta)**
- C. Hay que relicenciar la base de datos.
- D. Se prohíbe modificar el programa.

Explicación: La GPL condiciona actos como convey/distribución, no el mero uso privado interno.

### Propuesta

Un equipo ejecuta internamente una copia GPL v3, sin entregar copias a terceros. ¿Qué conclusión se sigue de ese mero uso?

- A. La mera ejecución obliga a publicar el fuente del programa utilizado.
- B. El mero uso no activa los requisitos de fuente de la distribución. **(correcta)**
- C. Cada ejecución requiere una autorización adicional del autor.
- D. Antes de ejecutarlo debe sustituirse GPL por la licencia del equipo.

Explicación: El mero uso interno sin conveying no activa por sí mismo los requisitos de fuente propios de entregar copias. GPL v3 permite ejecutar el programa y también realizar trabajos que no se entregan mientras la licencia siga en vigor. Esto no debe extrapolarse a una entrega efectiva ni a la condición específica de AGPL para interacción remota con versiones modificadas.

- Error A: La mera ejecución descrita no exige publicar el fuente en Internet; las obligaciones de entrega se analizan cuando hay conveying.
- Error C: GPL v3 concede permiso de ejecución del programa, sin exigir por ese solo acto una autorización nueva para cada uso.
- Error D: La ejecución no exige ni habilita sustituir la licencia recibida por la que se utilice para otros programas del equipo.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28
- [GNU AGPL v3, texto FSF en OSI](https://opensource.org/license/agpl-3.0) · Preámbulo; 13 Remote Network Interaction: oferta destacada de Corresponding Source en versión modificada con usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. No se equipara interacción remota a conveying de GPL · comprobado: 2026-10-28

Partida: `592f73c747bb5690398e9958358912956796f049f0bfc0b72fea739fcfdaac31` · propuesta: `2b762ce2179c4a32f88503c935f51ffd41c4408f980e6847714300727fd4d92e`

## MAN-GSI-P16-054

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la pregunta falsa y clave D; las tres afirmaciones alternativas son defendibles y la venta se respalda expresamente en GPL v3.

### Antes

¿Qué afirmación sobre GPL es falsa?

- A. Es una licencia de software libre.
- B. Usa copyleft.
- C. Puede imponer obligaciones al distribuir versiones modificadas.
- D. Prohíbe vender copias. **(correcta)**

Explicación: El software GPL puede distribuirse comercialmente.

### Propuesta

¿Qué afirmación sobre GPL es falsa?

- A. Es una licencia de software libre.
- B. Usa copyleft.
- C. Puede imponer obligaciones al distribuir versiones modificadas.
- D. Prohíbe vender copias. **(correcta)**

Explicación: GPL permite actividad comercial y cobro por las copias. GPL v3 lo declara expresamente y también admite soporte o garantía remunerados. Deben conservarse los derechos del receptor y cumplirse las condiciones de licencia que correspondan a la distribución.

- Error A: GPL es una licencia de software libre: concede facultades de uso, estudio, cambio y redistribución bajo sus términos.
- Error B: GPL usa copyleft para conservar libertades en los trabajos cubiertos, conforme al alcance de la versión aplicable.
- Error C: La distribución de versiones modificadas puede activar requisitos de avisos, licencia y fuente; es distinto de una prohibición de vender copias.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `144afe934104868ba56839623a16a3f9ce7a241f2e87ccb248c8b4570836be3f` · propuesta: `ce3edd2bf101cc94f86f4b9f44bee0ca71d32fa3a4ee1b1de5df55e9980c253d`

## MAN-GSI-P16-055

Decisión: pending_review · acción: revise.

Motivo: Conservar utilidad de LGPL para bibliotecas y clave A; concentrar distractores en alcance del copyleft y obligaciones de enlace, sin promesas automáticas.

### Antes

¿Por qué LGPL suele considerarse útil para bibliotecas?

- A. Porque permite ciertos modelos de enlace con aplicaciones bajo otras licencias sin extender idénticamente el copyleft a toda la aplicación, bajo condiciones. **(correcta)**
- B. Porque obliga a publicar bajo LGPL cualquier aplicación que enlace con la biblioteca, sin distinguir cómo se realiza el enlace.
- C. Porque sitúa automáticamente la biblioteca en el dominio público y elimina las condiciones sobre copia y redistribución.
- D. Porque permite únicamente el enlace estático con software propietario y prohíbe el enlace dinámico con otras licencias.

Explicación: Es la razón conceptual para distinguir LGPL de GPL.

### Propuesta

¿Por qué LGPL suele considerarse útil para bibliotecas?

- A. Permite ciertos enlaces con otras licencias manteniendo condiciones. **(correcta)**
- B. Permite cambiar la licencia de la biblioteca al elegir la aplicación.
- C. Considera el enlace dinámico suficiente para omitir avisos y textos.
- D. Exige publicar toda aplicación enlazada bajo la licencia de la biblioteca.

Explicación: LGPL v3 permite determinados trabajos combinados bajo otros términos si se cumplen sus requisitos. La sección 4 regula avisos, textos, derechos sobre las partes de la biblioteca y vías de recombinación o enlace, entre otros. Se clasifica como copyleft más débil que GPL; no elimina las condiciones de la biblioteca ni garantiza cumplimiento por enlazar dinámicamente.

- Error B: Los permisos para ciertos trabajos combinados no autorizan a cambiar sin más la licencia recibida de la biblioteca a la que se elija para la aplicación.
- Error C: Un mecanismo compartido adecuado es una vía prevista en 4d, pero no sustituye los demás requisitos, como avisos y copias de las licencias.
- Error D: LGPL v3 permite ciertos términos distintos para trabajos combinados bajo condiciones; no impone siempre LGPL a toda aplicación enlazada.

- [GNU LGPL v3, texto FSF en OSI](https://opensource.org/license/lgpl-3-0) · Introducción; 0 Additional Definitions; 4 Combined Works, requisitos a–e y vías de recombinación/reenlace de 4d · versión: GNU LGPL v3, 29-06-2007; incorpora GPL v3 con permisos adicionales y condiciones específicas · comprobado: 2026-10-28

Partida: `2ff49bd89f136bb8fabb117add7dabef6a080306529391571787acd4b7a2946b` · propuesta: `8ebf46aa21e270f328b388f7853a8bed93c0cdb9f01d09f26c37e0cf5325c68c`

## MAN-GSI-P16-056

Decisión: pending_review · acción: revise.

Motivo: Mantener clasificación GPL/LGPL y clave C; comparar las mismas dos licencias y versiones en las cuatro opciones.

### Antes

¿Qué pareja es correcta?

- A. GPL → permisiva; LGPL → dominio público.
- B. AGPL → permisiva; MIT → copyleft fuerte.
- C. GPL → copyleft fuerte; LGPL → copyleft más débil. **(correcta)**
- D. BSD → AGPL de red.

Explicación: La fuerza/alcance del copyleft distingue estas familias.

### Propuesta

¿Qué clasificación compara correctamente GPL v3 y LGPL v3?

- A. GPL v3: permisiva; LGPL v3: copyleft débil.
- B. GPL v3: copyleft débil; LGPL v3: copyleft fuerte.
- C. GPL v3: copyleft fuerte; LGPL v3: copyleft débil. **(correcta)**
- D. GPL v3: copyleft fuerte; LGPL v3: permisiva.

Explicación: GPL v3 se clasifica como copyleft fuerte. LGPL v3 incorpora GPL v3 con permisos adicionales que permiten determinados trabajos combinados bajo otros términos y condiciones, por lo que se clasifica como copyleft débil. Débil no significa ausencia de obligaciones sobre la biblioteca.

- Error A: La clasificación de LGPL es adecuada, pero GPL v3 no es permisiva: impone copyleft sobre los trabajos cubiertos en sus supuestos.
- Error B: Invierte el alcance comparativo: LGPL añade permisos a GPL, no un copyleft más fuerte que el de esta.
- Error D: Identifica correctamente GPL, pero LGPL conserva copyleft y requisitos de biblioteca y combinación; no equivale a una licencia permisiva.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28
- [GNU LGPL v3, texto FSF en OSI](https://opensource.org/license/lgpl-3-0) · Introducción; 0 Additional Definitions; 4 Combined Works, requisitos a–e y vías de recombinación/reenlace de 4d · versión: GNU LGPL v3, 29-06-2007; incorpora GPL v3 con permisos adicionales y condiciones específicas · comprobado: 2026-10-28

Partida: `2cf7a45d055c01b92feb7a4271798b8679987c1b7b9ea465b188e2aaadf8e364` · propuesta: `6de7a97fb6ad9d7872d9dc22cfdd3b4a4d6ba7a868dbc9361f4a332a33424880`

## MAN-GSI-P16-057

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de dependencia AGPL en servicio y clave C; cuatro decisiones sobre alcance, sin automatismos de retirada o extensión a toda infraestructura.

### Antes

¿Qué debe hacer una organización si detecta una dependencia AGPL en un servicio?

- A. Eliminar siempre la dependencia sin analizar su versión, licencia, forma de integración ni las alternativas disponibles para el servicio.
- B. Ignorarla porque no se entregan binarios, aunque usuarios externos interactúen por red con una versión modificada de la aplicación.
- C. Analizar cómo se usa/modifica, quién interactúa con ella por red y qué obligaciones concretas resultan. **(correcta)**
- D. Suponer que toda la infraestructura, incluidos componentes independientes y servicios no relacionados, debe publicarse bajo AGPL.

Explicación: La respuesta correcta es un análisis de uso y arquitectura, no una reacción automática.

### Propuesta

¿Qué debe hacer una organización si detecta una dependencia AGPL en un servicio?

- A. Revisar solo si se entregan binarios y descartar la interacción remota.
- B. Publicar todo sistema independiente que comparta la infraestructura.
- C. Examinar versión, modificaciones y usuarios que interactúan por red. **(correcta)**
- D. Retirar la dependencia por su nombre, sin examinar uso o integración.

Explicación: Hay que identificar la licencia aplicable y cómo se utiliza la dependencia, si se ha modificado y con quién interactúa remotamente la versión cubierta. AGPL v3 sección 13 añade una oferta de fuente correspondiente en el supuesto de versión modificada con usuarios remotos. El análisis no puede reducirse a entrega de binarios ni extenderse sin más a sistemas independientes.

- Error A: AGPL v3 puede imponer una oferta de fuente en el supuesto de interacción remota con una versión modificada aunque no se entreguen binarios.
- Error B: Compartir infraestructura no convierte por sí solo todos los sistemas independientes en la versión cubierta por AGPL.
- Error D: El nombre de la licencia no basta para decidir una retirada; es necesario concretar hechos, obligaciones y alternativas.

- [GNU AGPL v3, texto FSF en OSI](https://opensource.org/license/agpl-3.0) · Preámbulo; 13 Remote Network Interaction: oferta destacada de Corresponding Source en versión modificada con usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. No se equipara interacción remota a conveying de GPL · comprobado: 2026-10-28

Partida: `72b564b191abafc517652aa438f024a76887b8281a4e97845df74445b2ed9377` · propuesta: `937e5d1f7f07ecdf55ddc7843ff006a7a550b11bf46c4b5adef8b41e173a7e76`

## MAN-GSI-P16-058

Decisión: pending_review · acción: revise.

Motivo: Mantener alcance contextual del copyleft y clave B; sustituir uso de viralidad como criterio por relación de obras y distribución.

### Antes

¿Qué afirmación sobre “viralidad” de GPL es técnicamente más prudente?

- A. Aplicar GPL a cualquier fichero almacenado en el mismo disco, aunque no se combine, derive ni distribuya junto con el programa cubierto.
- B. Es mejor hablar de obligaciones de copyleft según combinación y distribución que usar “viral” como regla automática. **(correcta)**
- C. Considerar que toda API que invoque software GPL queda siempre bajo GPL, sin examinar arquitectura, relación entre obras ni distribución.
- D. Afirmar que las obligaciones nunca dependen de cómo se combinan o transmiten las obras y que solo importa el nombre de cada fichero.

Explicación: El término “viral” simplifica demasiado y lleva a errores.

### Propuesta

¿Qué criterio permite analizar el alcance del copyleft de GPL con mayor precisión?

- A. La presencia en el mismo soporte determina el copyleft del conjunto.
- B. El alcance depende de la relación entre obras y de su distribución. **(correcta)**
- C. Toda llamada de API basta para extender GPL al programa que llama.
- D. Ejecutables separados garantizan ausencia de obligaciones al entregar.

Explicación: El alcance del copyleft se analiza con el texto, la relación entre obras y las condiciones de distribución; la palabra viral no es una regla jurídica suficiente. GPL v3 distingue trabajos cubiertos de una agregación de obras separadas e independientes. Ni el mismo soporte, una API o un proceso separado permiten concluir por sí solos todo el resultado.

- Error A: La mera inclusión en un soporte no extiende GPL a obras independientes que cumplan las condiciones de agregación.
- Error C: Una llamada de API, sin analizar relación, arquitectura y entrega, no prueba por sí sola el alcance de GPL sobre el programa llamante.
- Error D: Separar ejecutables no elimina las obligaciones sobre el componente GPL entregado ni resuelve automáticamente si existe una obra mayor cubierta.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `593cafb3e2bd570e02bd60300f92e57694f6847c325e21c9b9401f6c611def4b` · propuesta: `84f7778d083d85edeb15ff38ab30e77133290d89e4d9b38ba91d6a8a646a0d7a`

## MAN-GSI-P16-059

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de proceso separado y clave D; distinguir arquitectura y cumplimiento del propio componente, sin resolver automáticamente una frontera jurídica.

### Antes

Una aplicación propietaria llama a una herramienta GPL como proceso separado. ¿Qué debe hacerse?

- A. Aplicar automáticamente GPL a toda la aplicación por iniciar el proceso, sin considerar distribución, interfaces ni relación entre programas.
- B. Concluir que GPL nunca puede tener efecto porque los ejecutables sean procesos distintos, aunque la arquitectura y distribución los integren estrechamente.
- C. Renombrar el binario o envolver su llamada en un script para convertirlo jurídicamente en un componente independiente en cualquier supuesto.
- D. Analizar la arquitectura, interfaces y distribución concretas; no inferir automáticamente el resultado solo por coexistencia. **(correcta)**

Explicación: La determinación de obra combinada/independiente exige contexto.

### Propuesta

Una aplicación propietaria llama a una herramienta GPL como proceso separado. ¿Qué debe hacerse?

- A. Aplicar GPL a la aplicación por el hecho de iniciar otro proceso.
- B. Descartar obligaciones porque cada programa tiene su ejecutable.
- C. Tratar un script envoltorio como prueba suficiente de independencia.
- D. Examinar relación entre programas, interfaces y entrega de copias. **(correcta)**

Explicación: Un proceso separado es un dato de arquitectura, no una respuesta automática sobre todas las obligaciones. Debe examinarse si son obras independientes o partes de una obra cubierta y cómo se entregan. Aunque una aplicación sea independiente, distribuir una herramienta GPL sigue exigiendo cumplir las condiciones aplicables a esa herramienta.

- Error A: Iniciar otro proceso no demuestra por sí solo que toda la aplicación esté cubierta por GPL; se necesita analizar su relación.
- Error B: Separar ejecutables no elimina los requisitos del programa GPL que se entregue ni acredita automáticamente independencia jurídica.
- Error C: Renombrar o envolver una llamada no cambia por sí solo la relación sustantiva entre obras ni las condiciones de su distribución.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `64ae49aedd771f4ba63a8039656990f72e99d98e4b0c4a54934dc798d73c6ef5` · propuesta: `31081e65d3bdda9a175987f9a0f5ff0db53c0a627ef0e05b4701b5a84d51269a`

## MAN-GSI-P16-060

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la comparación GPL/AGPL y clave A; completar el feedback original metarreferencial con mecanismo, destinatarios y límites.

### Antes

¿Qué frase resume la diferencia de red de forma útil?

- A. GPL se centra en obligaciones asociadas a distribución/conveying; AGPL añade el escenario de interacción remota con software modificado. **(correcta)**
- B. AGPL reduce el copyleft para bibliotecas enlazadas, mientras GPL añade obligaciones específicas para servicios de red.
- C. GPL exige publicar modificaciones por el mero uso local, mientras AGPL no contempla interacción remota con usuarios.
- D. Ambas licencias regulan de la misma forma distribución y uso en red; sus diferencias se limitan al nombre del proyecto GNU.

Explicación: Es una distinción de alto rendimiento para test.

### Propuesta

¿Qué frase resume la diferencia de red de forma útil?

- A. GPL se centra en obligaciones asociadas a distribución/conveying; AGPL añade el escenario de interacción remota con software modificado. **(correcta)**
- B. AGPL reduce el copyleft para bibliotecas enlazadas, mientras GPL añade obligaciones específicas para servicios de red.
- C. GPL exige publicar modificaciones por el mero uso local, mientras AGPL no contempla interacción remota con usuarios.
- D. Ambas licencias regulan de la misma forma distribución y uso en red; sus diferencias se limitan al nombre del proyecto GNU.

Explicación: GPL v3 distingue conveying de la mera interacción por red sin transferencia de copias. AGPL v3 añade, para la versión modificada que permite esa interacción, una oferta destacada a los usuarios remotos de su código fuente correspondiente. No exige publicar todos los sistemas ajenos ni se confunde con los permisos de enlace de LGPL.

- Error B: La flexibilidad de ciertos enlaces es propia de LGPL; AGPL añade un requisito por interacción remota y GPL no contiene esa misma cláusula específica.
- Error C: GPL v3 no exige publicar modificaciones por el mero uso local sin conveying; AGPL sí contempla el supuesto de interacción remota con versiones modificadas.
- Error D: La cláusula 13 de AGPL v3 introduce una diferencia sustantiva para versiones modificadas con usuarios remotos, no un mero cambio de nombre.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28
- [GNU AGPL v3, texto FSF en OSI](https://opensource.org/license/agpl-3.0) · Preámbulo; 13 Remote Network Interaction: oferta destacada de Corresponding Source en versión modificada con usuarios remotos · versión: GNU AGPL v3; texto FSF reproducido en OSI. No se equipara interacción remota a conveying de GPL · comprobado: 2026-10-28
- [GNU LGPL v3, texto FSF en OSI](https://opensource.org/license/lgpl-3-0) · Introducción; 0 Additional Definitions; 4 Combined Works, requisitos a–e y vías de recombinación/reenlace de 4d · versión: GNU LGPL v3, 29-06-2007; incorpora GPL v3 con permisos adicionales y condiciones específicas · comprobado: 2026-10-28

Partida: `5662b563ca789feeef1b1520d97396e9cbbd5632e27dc5e9a963779d01501bc5` · propuesta: `76a1498cb296473dc5d38d2886f537bab42778119e55bac148ab670793a655f3`

## MAN-GSI-P16-061

Decisión: pending_review · acción: revise.

Motivo: Mantener identificación EUPL y clave D; cuatro categorías de licencia comparables, con alcance mundial y reciprocidad precisos.

### Antes

¿Qué es la EUPL?

- A. Una licencia permisiva sin obligaciones recíprocas para redistribuciones o trabajos derivados del software cubierto.
- B. Una licencia propietaria reservada a instituciones de la Unión Europea y no disponible para terceros.
- C. Una licencia destinada a fotografías y documentos que no resulta aplicable a programas de ordenador.
- D. La European Union Public Licence, una licencia libre/open source de la Unión Europea con carácter recíproco/copyleft. **(correcta)**

Explicación: EUPL es la licencia pública de la UE para software y trabajos cubiertos.

### Propuesta

¿Qué es la EUPL?

- A. Una licencia permisiva que excluye obligaciones sobre derivados.
- B. Una licencia propietaria reservada a instituciones de la Unión.
- C. Una licencia cultural que deja fuera los programas de ordenador.
- D. Una licencia libre de origen europeo con reciprocidad o copyleft. **(correcta)**

Explicación: EUPL es la European Union Public Licence, impulsada por la Comisión Europea y utilizable por entidades públicas o privadas de cualquier lugar. EUPL-1.2 contiene reciprocidad y una cláusula de compatibilidad para supuestos determinados. No es exclusiva de instituciones europeas ni una licencia permisiva sin copyleft.

- Error A: EUPL-1.2 contiene obligaciones de copyleft y fuente, además de su mecanismo de compatibilidad; no elimina obligaciones sobre derivados.
- Error B: Su origen europeo no la reserva a instituciones de la Unión; puede utilizarla cualquier persona o entidad bajo sus términos.
- Error C: Las definiciones incluyen expresamente programas de ordenador y su fuente o ejecutable; no se limita a obras culturales.

- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones; 2 Derechos; 3 Comunicación del fuente; 5 Obligaciones, copyleft y compatibilidad; 13 Varios; Apéndice de licencias compatibles · versión: EUPL v1.2, texto español oficial enlazado por el portal; DOUE 19-05-2017, L128. El apéndice delimita compatibilidad, no un permiso general de relicenciar · comprobado: 2026-10-28
- [Comisión Europea: Introduction to the EUPL licence](https://interoperable-europe.ec.europa.eu/collection/eupl/introduction-eupl-licence) · Párrafos iniciales: iniciativa, alcance mundial y versión actual EUPL-1.2; What makes the EUPL unique, copyleft y compatibilidad de obra combinada · versión: Portal oficial consultado; EUPL-1.2 se identifica como actual, distinta de sus versiones anteriores y de su fecha real de comprobación · comprobado: 2026-10-28

Partida: `b342bcd9ea09c9d54deb8bf005c14c45cc2f2d841540491a2b05dcf322c14e6f` · propuesta: `c51fa4aef7228e5ebfe8b496815e1c3fd97df06ec1715854c29116873b4a548a`

## MAN-GSI-P16-062

Decisión: pending_review · acción: revise.

Motivo: Conservar identificación de versión y clave B; anclar el dato a ficha y fecha, retirando referencia a apuntes y números caricaturescos.

### Antes

¿Qué versión de EUPL aparece como texto oficial vigente en el portal europeo utilizado en estos apuntes?

- A. EUPL-3.0.
- B. EUPL-1.2. **(correcta)**
- C. EUPL-2.5.
- D. EUPL-0.9 únicamente.

Explicación: El portal oficial publica EUPL 1.2, difundida en el DOUE en 2017.

### Propuesta

¿Qué versión identifica como actual la ficha oficial de EUPL consultada el 28-10-2026?

- A. EUPL-1.0.
- B. EUPL-1.2. **(correcta)**
- C. EUPL-1.1.
- D. EUPL-2.0.

Explicación: El portal de la Comisión identifica EUPL-1.2 como versión actual y sitúa su publicación en el DOUE de 19 de mayo de 2017. La fecha de comprobación de la fuente es distinta de la de publicación. Las versiones anteriores no se vuelven inexistentes ni dejan de ser relevantes para obras expresamente licenciadas con ellas.

- Error A: EUPL-1.0 es una versión anterior; no es la identificada como actual en la ficha oficial consultada.
- Error C: EUPL-1.1 es anterior a 1.2 y figura en el apéndice de compatibilidad, pero no es la versión actual que pregunta la ficha.
- Error D: El portal consultado no identifica una EUPL-2.0 como versión actual; no debe inferirse una revisión por su numeración.

- [Comisión Europea: EUPL text (EUPL-1.2)](https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12) · Introducción, publicación DOUE de 19-05-2017 y tabla BG–HR de 23 versiones lingüísticas oficiales · versión: Ficha pública EUPL-1.2 comprobada; número de versiones del texto, no número total de lenguas oficiales de la UE · comprobado: 2026-10-28
- [Comisión Europea: Introduction to the EUPL licence](https://interoperable-europe.ec.europa.eu/collection/eupl/introduction-eupl-licence) · Párrafos iniciales: iniciativa, alcance mundial y versión actual EUPL-1.2; What makes the EUPL unique, copyleft y compatibilidad de obra combinada · versión: Portal oficial consultado; EUPL-1.2 se identifica como actual, distinta de sus versiones anteriores y de su fecha real de comprobación · comprobado: 2026-10-28
- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones; 2 Derechos; 3 Comunicación del fuente; 5 Obligaciones, copyleft y compatibilidad; 13 Varios; Apéndice de licencias compatibles · versión: EUPL v1.2, texto español oficial enlazado por el portal; DOUE 19-05-2017, L128. El apéndice delimita compatibilidad, no un permiso general de relicenciar · comprobado: 2026-10-28

Partida: `a7b920ae27e996f5b4046e78a97c0fea2a267014508f8b0157c455d819d806f7` · propuesta: `a8d7c6ee51c98edf7eebe098f379688c147fa5916a0a3806b011862d904492a9`

## MAN-GSI-P16-063

Decisión: pending_review · acción: revise.

Motivo: Conservar número de versiones lingüísticas y clave A; cuatro cantidades homogéneas y alcance temporal/catalográfico, sin equipararlo a lenguas de la UE.

### Antes

¿En cuántas lenguas oficiales de la UE está disponible EUPL-1.2 según el portal oficial?

- A. 23. **(correcta)**
- B. 4.
- C. 12.
- D. 27 versiones no equivalentes.

Explicación: EUPL-1.2 se ofrece en 23 versiones lingüísticas oficiales.

### Propuesta

¿Cuántas versiones lingüísticas oficiales de EUPL-1.2 ofrece la ficha europea consultada el 28-10-2026?

- A. 23. **(correcta)**
- B. 22.
- C. 24.
- D. 27.

Explicación: La ficha oficial de EUPL-1.2 ofrece 23 versiones lingüísticas originales, con su tabla de enlaces. La sección 13 establece igual valor para las versiones lingüísticas aprobadas por la Comisión. Se pregunta por versiones del texto disponibles en esa ficha, no por el número de Estados miembros ni por todas las lenguas oficiales de la UE.

- Error B: La ficha no contabiliza 22 versiones: declara 23 y muestra una tabla que incluye la versión croata.
- Error C: El número de lenguas oficiales de la Unión no debe sustituir el dato concreto del catálogo EUPL; la ficha consultada indica 23 versiones del texto.
- Error D: El número de Estados miembros no determina el de versiones lingüísticas del texto. Además, las versiones aprobadas tienen idéntico valor, no regímenes incompatibles.

- [Comisión Europea: EUPL text (EUPL-1.2)](https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12) · Introducción, publicación DOUE de 19-05-2017 y tabla BG–HR de 23 versiones lingüísticas oficiales · versión: Ficha pública EUPL-1.2 comprobada; número de versiones del texto, no número total de lenguas oficiales de la UE · comprobado: 2026-10-28
- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones; 2 Derechos; 3 Comunicación del fuente; 5 Obligaciones, copyleft y compatibilidad; 13 Varios; Apéndice de licencias compatibles · versión: EUPL v1.2, texto español oficial enlazado por el portal; DOUE 19-05-2017, L128. El apéndice delimita compatibilidad, no un permiso general de relicenciar · comprobado: 2026-10-28

Partida: `e57f4e82174fac9a39bb09cb0a9b489b0f2812897b7746b9cd54945c97916838` · propuesta: `44acb81eff10b5e2dcfd6a23371c92dae94cd2d71aca44be5c7fd3c0112c9c51`

## MAN-GSI-P16-064

Decisión: pending_review · acción: revise.

Motivo: Mantener relevancia de EUPL para Administraciones y clave C; precisar multilingüismo y compatibilidad sin exclusividad institucional.

### Antes

¿Qué rasgo hace especialmente relevante la EUPL para Administraciones europeas?

- A. Una licencia reservada al uso de organismos públicos que impide reutilización por empresas o particulares.
- B. Una licencia no comercial que exige pagar por usuario cuando el software se utiliza fuera de una Administración.
- C. Fue concebida en el marco de la UE, es multilingüe y contempla compatibilidad/interoperabilidad con otras licencias. **(correcta)**
- D. Un texto disponible en un único idioma oficial que evita cláusulas de compatibilidad con otras licencias libres.

Explicación: Su diseño europeo y cláusulas de compatibilidad la hacen relevante para reutilización pública.

### Propuesta

¿Qué rasgo hace especialmente relevante la EUPL para Administraciones europeas?

- A. Su uso queda reservado a organismos públicos de la Unión Europea.
- B. Su reutilización comercial exige licencias individuales de pago por usuario.
- C. Su origen europeo, versiones lingüísticas y compatibilidad prevista. **(correcta)**
- D. Su texto único obliga a sustituir toda licencia previa por la inglesa.

Explicación: EUPL combina origen institucional europeo, versiones lingüísticas de igual valor y un mecanismo de compatibilidad para ciertos derivados. Son rasgos relevantes para reutilización entre organizaciones, incluidas Administraciones, sin reservarles el uso ni resolver automáticamente cualquier combinación técnica o jurídica.

- Error A: La Comisión indica que EUPL puede usarla cualquiera en el mundo; no restringe la licencia a organismos públicos europeos.
- Error B: EUPL concede derechos a título gratuito bajo sus condiciones; no impone una licencia individual de pago por usuario para actividad comercial.
- Error D: Existen 23 versiones lingüísticas oficiales y las aprobadas tienen igual valor. La compatibilidad no implica sustituir cualquier licencia previa por un texto inglés.

- [Comisión Europea: Introduction to the EUPL licence](https://interoperable-europe.ec.europa.eu/collection/eupl/introduction-eupl-licence) · Párrafos iniciales: iniciativa, alcance mundial y versión actual EUPL-1.2; What makes the EUPL unique, copyleft y compatibilidad de obra combinada · versión: Portal oficial consultado; EUPL-1.2 se identifica como actual, distinta de sus versiones anteriores y de su fecha real de comprobación · comprobado: 2026-10-28
- [Comisión Europea: EUPL text (EUPL-1.2)](https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12) · Introducción, publicación DOUE de 19-05-2017 y tabla BG–HR de 23 versiones lingüísticas oficiales · versión: Ficha pública EUPL-1.2 comprobada; número de versiones del texto, no número total de lenguas oficiales de la UE · comprobado: 2026-10-28
- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones; 2 Derechos; 3 Comunicación del fuente; 5 Obligaciones, copyleft y compatibilidad; 13 Varios; Apéndice de licencias compatibles · versión: EUPL v1.2, texto español oficial enlazado por el portal; DOUE 19-05-2017, L128. El apéndice delimita compatibilidad, no un permiso general de relicenciar · comprobado: 2026-10-28

Partida: `3ac3fba700d42ab5193255f326b486047e9d929d5089243341871c2649de7548` · propuesta: `bfc7d4029a61c6e0f58a2a37b90e5ec72cc7a09c534e4098c84a9f3f82818f11`

## MAN-GSI-P16-065

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la distinción entre compatibilidad jurídica y técnica y clave A; cuatro alternativas ya pertinentes y comparables.

### Antes

¿Qué significa que una licencia sea compatible en este contexto?

- A. Que puede existir una vía jurídicamente prevista para combinar componentes y distribuir la obra resultante bajo condiciones compatibles. **(correcta)**
- B. Que los componentes compilan y se ejecutan en el mismo sistema operativo, aunque sus licencias impongan condiciones contradictorias.
- C. Que ambos proyectos utilizan el mismo lenguaje y gestor de paquetes, con independencia de sus derechos de redistribución.
- D. Que los textos de las dos licencias son idénticos palabra por palabra, única situación en la que pueden combinarse componentes.

Explicación: Compatibilidad de licencias es jurídica, no compatibilidad técnica.

### Propuesta

¿Qué significa que una licencia sea compatible en este contexto?

- A. Que puede existir una vía jurídicamente prevista para combinar componentes y distribuir la obra resultante bajo condiciones compatibles. **(correcta)**
- B. Que los componentes compilan y se ejecutan en el mismo sistema operativo, aunque sus licencias impongan condiciones contradictorias.
- C. Que ambos proyectos utilizan el mismo lenguaje y gestor de paquetes, con independencia de sus derechos de redistribución.
- D. Que los textos de las dos licencias son idénticos palabra por palabra, única situación en la que pueden combinarse componentes.

Explicación: La compatibilidad se refiere a poder satisfacer las condiciones jurídicas aplicables a la combinación y su distribución. Que el código compile o comparta lenguaje no demuestra ese encaje, y no es necesario que las licencias sean idénticas. EUPL-1.2 ofrece un ejemplo expreso y condicionado de compatibilidad en su sección 5 y apéndice.

- Error B: Compilar y ejecutarse en un sistema describe compatibilidad técnica; las obligaciones de licencia todavía pueden entrar en conflicto.
- Error C: Lenguaje y gestor de paquetes son datos técnicos, no una prueba de que puedan cumplirse las condiciones de redistribución de ambos componentes.
- Error D: Las licencias pueden ser distintas y disponer de una vía compatible de distribución; no se exige identidad literal de sus textos.

- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones; 2 Derechos; 3 Comunicación del fuente; 5 Obligaciones, copyleft y compatibilidad; 13 Varios; Apéndice de licencias compatibles · versión: EUPL v1.2, texto español oficial enlazado por el portal; DOUE 19-05-2017, L128. El apéndice delimita compatibilidad, no un permiso general de relicenciar · comprobado: 2026-10-28
- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `f481d204a46cd2564c217ff20d89a8e87aaf58639f150ebd32acb432af9e20f1` · propuesta: `e6af1bd791ea0e2095d32d93af99f7322774e0c9f821be400e2a98a6687f0ee1`

## MAN-GSI-P16-066

Decisión: pending_review · acción: revise.

Motivo: Conservar comprobación de copyleft distintos y clave C; microcaso que separa compilación correcta de autorización para distribuir.

### Antes

¿Qué debe hacerse antes de combinar dos dependencias copyleft distintas?

- A. Asumir que todo copyleft es compatible entre sí.
- B. Eliminar las licencias originales.
- C. Comprobar compatibilidad de las licencias y versiones concretas. **(correcta)**
- D. Relicenciar siempre ambas como MIT.

Explicación: Copyleft puede generar conflictos de obligaciones si no existe compatibilidad.

### Propuesta

Una aplicación combina dos dependencias copyleft distintas y compila sin errores. Antes de entregar copias, ¿qué debe hacerse?

- A. Dar por satisfechas las licencias porque el programa ya compila.
- B. Usar la licencia de la aplicación en lugar de las de las dependencias.
- C. Comprobar versiones y obligaciones de las licencias al combinarlas. **(correcta)**
- D. Resolver el alcance del copyleft por el lenguaje de programación.

Explicación: Que la aplicación compile acredita un resultado técnico, no la compatibilidad de sus licencias. Antes de entregar copias hay que identificar textos, versiones, relación de obras y obligaciones concurrentes. Si no pueden cumplirse simultáneamente, compartir la etiqueta copyleft no habilita la distribución; debe buscarse una vía autorizada o cambiar la combinación.

- Error A: La compilación no comprueba derechos de redistribución ni resuelve condiciones jurídicas incompatibles.
- Error B: La licencia elegida para código propio no sustituye por sí sola los términos bajo los que se recibieron las dependencias.
- Error D: El lenguaje puede influir en la integración técnica, pero no decide por sí solo los permisos y obligaciones de los componentes.

- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28
- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones; 2 Derechos; 3 Comunicación del fuente; 5 Obligaciones, copyleft y compatibilidad; 13 Varios; Apéndice de licencias compatibles · versión: EUPL v1.2, texto español oficial enlazado por el portal; DOUE 19-05-2017, L128. El apéndice delimita compatibilidad, no un permiso general de relicenciar · comprobado: 2026-10-28

Partida: `07c18e5b4eac76fdf9b486dcac1f05b9d2fe25a0ef2df59fefc2998b79cb0ff9` · propuesta: `23b9fa3ca6e542a39d93f09032c4be5fa6212b2203d3fc2e670e612a032f5964`

## MAN-GSI-P16-067

Decisión: pending_review · acción: revise.

Motivo: Mantener apéndice de compatibilidad y clave D; distinguir vía para derivados de relicenciamiento global o eliminación de condiciones.

### Antes

¿Qué afirmación sobre EUPL-1.2 y compatibilidad es correcta?

- A. Es incompatible por definición con toda licencia GNU.
- B. Permite relicenciar libremente el código original sin límites.
- C. Elimina cualquier obligación copyleft al combinar.
- D. Incluye un apéndice/listado de licencias compatibles que debe consultarse para el caso concreto. **(correcta)**

Explicación: La compatibilidad EUPL está expresamente estructurada y no equivale a borrar la licencia original.

### Propuesta

¿Qué afirmación sobre EUPL-1.2 y compatibilidad es correcta?

- A. Permite adoptar otra licencia con tal de conservar el nombre del autor.
- B. Permite usar cualquier licencia al combinar dos obras de fuente abierta.
- C. Sustituye el copyleft por atribución al distribuir cualquier obra derivada.
- D. Prevé compatibilidad mediante una cláusula y licencias del apéndice. **(correcta)**

Explicación: La sección 5 de EUPL-1.2 permite ciertos derivados basados en una obra EUPL y otra bajo una licencia compatible distribuirse o comunicarse con esa licencia compatible. El apéndice identifica las licencias correspondientes. No es un permiso general para relicenciar el proyecto original o borrar obligaciones por el mero hecho de combinar.

- Error A: Mantener el nombre del autor no sustituye los requisitos de copyleft y compatibilidad ni autoriza cualquier licencia alternativa.
- Error B: Ser fuente abierta no basta: deben comprobarse el supuesto de la sección 5 y las licencias y versiones previstas en el apéndice.
- Error C: La compatibilidad no se reduce a atribución ni elimina automáticamente copyleft; permite una vía concreta con condiciones de la licencia compatible.

- [Comisión Europea: EUPL v1.2, texto español](https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/EUPL%20v1_2%20ES.txt) · 1 Definiciones; 2 Derechos; 3 Comunicación del fuente; 5 Obligaciones, copyleft y compatibilidad; 13 Varios; Apéndice de licencias compatibles · versión: EUPL v1.2, texto español oficial enlazado por el portal; DOUE 19-05-2017, L128. El apéndice delimita compatibilidad, no un permiso general de relicenciar · comprobado: 2026-10-28
- [Comisión Europea: Introduction to the EUPL licence](https://interoperable-europe.ec.europa.eu/collection/eupl/introduction-eupl-licence) · Párrafos iniciales: iniciativa, alcance mundial y versión actual EUPL-1.2; What makes the EUPL unique, copyleft y compatibilidad de obra combinada · versión: Portal oficial consultado; EUPL-1.2 se identifica como actual, distinta de sus versiones anteriores y de su fecha real de comprobación · comprobado: 2026-10-28

Partida: `29a3fec0ad6a561a770d2a2e50ce2305d95990192a03393a98d02194466eac31` · propuesta: `0537bf88e0b44aeb2ef2cc9a429017ce6ecf980333397133628bd5d92597e812`

## MAN-GSI-P16-068

Decisión: pending_review · acción: revise.

Motivo: Mantener dominio público frente a licencia y clave B; conservar las cuatro alternativas y precisar que se pregunta por la distinción, con límites del artículo 41.

### Antes

¿Qué es el dominio público?

- A. Una licencia de copyleft que permite reutilización con la condición de mantener determinadas libertades en derivados.
- B. Una situación jurídica distinta de una licencia open source; no deben tratarse como sinónimos. **(correcta)**
- C. Una licencia permisiva que concede derechos de uso y redistribución con obligaciones reducidas de atribución o aviso.
- D. Un régimen source-available que permite consultar el código, pero conserva restricciones incompatibles con open source.

Explicación: Open source normalmente opera mediante copyright + licencia; dominio público es otro régimen.

### Propuesta

¿Qué relación existe entre dominio público y licencias de código abierto?

- A. Una licencia de copyleft que permite reutilización con la condición de mantener determinadas libertades en derivados.
- B. Una situación jurídica distinta de una licencia open source; no deben tratarse como sinónimos. **(correcta)**
- C. Una licencia permisiva que concede derechos de uso y redistribución con obligaciones reducidas de atribución o aviso.
- D. Un régimen source-available que permite consultar el código, pero conserva restricciones incompatibles con open source.

Explicación: El dominio público es una situación jurídica de la obra, distinta de conceder permisos mediante una licencia sobre derechos vigentes. En España, el artículo 41 LPI prevé el paso al dominio público al extinguirse los derechos de explotación y conserva el respeto a autoría e integridad. No debe confundirse con código visible o con una licencia permisiva.

- Error A: El copyleft es una técnica de licencia que establece condiciones de reutilización de obras cubiertas; no define dominio público.
- Error C: Una licencia permisiva sigue concediendo derechos bajo condiciones sobre código protegido; no equivale por ello a dominio público.
- Error D: Source-available describe acceso al fuente con posibles restricciones; ver el código no determina el paso al dominio público.

- [BOE: Ley de Propiedad Intelectual, RDL 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Artículos 41, 96.2 y 96.4, 97, 99 y 100: dominio público, originalidad, expresión frente a ideas, titularidad, explotación y límites de programas · versión: Consolidación consultada, última actualización global publicada 30-03-2022; texto informativo frente a publicación oficial. El art.41 conserva autoría e integridad · comprobado: 2026-10-28
- [GNU GPL v3, texto FSF en OSI](https://opensource.org/license/gpl-3.0) · Preámbulo; 0 Definitions, conveying; 2 Basic Permissions; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate; 6 Non-Source Forms; 12 No Surrender · versión: GNU GPL v3, 29-06-2007; texto del titular FSF reproducido en OSI, sin atribuir lectura del servidor GNU · comprobado: 2026-10-28

Partida: `cdb6f619b1f028403105d3a0277c529b2a1958d9fdf6b505460521e35e8a7c45` · propuesta: `2367063b77df66fde02ce4f77aecc9c075e7be8c00387656741c69e7598727be`

## MAN-GSI-P16-069

Decisión: pending_review · acción: revise.

Motivo: Conservar orientación CC/software y clave B; retirar metarreferencia al tema y explicar CC0 como matiz sin universalizar patentes o invalidez de CC.

### Antes

¿Qué afirmación sobre Creative Commons y software es la más adecuada para este tema?

- A. CC-BY es la licencia estándar recomendada por OSI para código ejecutable.
- B. Creative Commons se orienta principalmente a contenidos/obras culturales y no suele ser la familia recomendada para licenciar software. **(correcta)**
- C. Creative Commons es idéntica a GPL.
- D. CC0 convierte cualquier patente en dominio público automáticamente.

Explicación: Para software se prefieren licencias diseñadas específicamente para código.

### Propuesta

¿Qué orientación ofrece Creative Commons sobre aplicar sus instrumentos a software?

- A. CC BY aporta los mismos requisitos de fuente que una licencia GPL.
- B. Para código se prefieren licencias de software, con matices para CC0. **(correcta)**
- C. CC BY-SA equivale a GPL al licenciar el código de un programa.
- D. CC0 elimina también las patentes del titular sobre cualquier programa.

Explicación: Creative Commons desaconseja sus licencias generales para software y remite a licencias diseñadas para código, por cuestiones como fuente y patentes. Distingue CC0, aceptable para software como dedicación en los términos permitidos por ley, sin afectar patentes. Las licencias CC pueden ser adecuadas para documentación o recursos artísticos separados.

- Error A: CC BY no contiene los mismos términos específicos de distribución de fuente que GPL; no deben tratarse como instrumentos idénticos.
- Error C: El mecanismo unidireccional de CC BY-SA 4.0 a GPL v3 para ciertas integraciones de contenido tiene condiciones; no hace equivalentes ambos instrumentos para cualquier código.
- Error D: La sección 4a de CC0 excluye expresamente cualquier efecto sobre las patentes y marcas del titular; no las libera automáticamente.

- [Creative Commons: Frequently Asked Questions](https://creativecommons.org/faq/) · Can I apply a Creative Commons license to software?: recomendación, fuente, patentes, documentación, CC0 y compatibilidad puntual BY-SA 4.0/GPLv3 · versión: FAQ pública con cabecera 2025-05-13; comprobación real 28-10-2026. Se distingue recomendación de prohibición o invalidez automática · comprobado: 2026-10-28
- [Creative Commons: CC0 1.0 Universal, Legal Code](https://creativecommons.org/publicdomain/zero/1.0/legalcode.en) · 2 Waiver; 3 Public License Fallback; 4a Limitations: marcas y patentes no afectadas; 4c derechos de terceros · versión: CC0 1.0 Universal; texto de la herramienta, sin equipararla a las seis licencias CC ni a renuncia universal de derechos ajenos · comprobado: 2026-10-28

Partida: `773f0adbcd2a99fd75672bb43c49f75aa42cc1bd47116d60fc5d2f60f620a8f5` · propuesta: `30e05f5e19b853730da88ed1ef30cec365fc35a32e85fe05c47099cff1548102`

## MAN-GSI-P16-070

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de fragmento sin licencia y clave D; cuatro inferencias plausibles sobre publicidad, atribución y tamaño, sin presumir infracción confirmada.

### Antes

¿Qué riesgo existe al copiar un fragmento de Internet sin información de licencia?

- A. No existir ningún riesgo si el repositorio es público, porque la visibilidad del código concede por sí misma permiso para cualquier uso.
- B. No existir riesgo cuando el fragmento tiene menos de cien líneas, ya que esa longitud lo excluye automáticamente de cualquier protección.
- C. Existir únicamente un riesgo de rendimiento, sin consecuencias sobre atribución, modificación, incorporación o redistribución del código.
- D. No saber si se tiene derecho a incorporarlo, modificarlo o redistribuirlo. **(correcta)**

Explicación: Repositorio público no equivale a permiso jurídico de reutilización.

### Propuesta

¿Qué riesgo existe al copiar un fragmento de Internet sin información de licencia?

- A. Que el acceso público permite reutilizarlo en un producto sin más comprobaciones.
- B. Que citar al autor reemplaza cualquier permiso para modificar o redistribuir.
- C. Que una longitud breve acredita por sí sola ausencia de derechos de autor.
- D. Que faltan datos para saber qué reutilización está jurídicamente autorizada. **(correcta)**

Explicación: La visibilidad pública de un fragmento no acredita autorización general para incorporarlo, modificarlo o redistribuirlo. Hay que identificar procedencia, derechos, licencia u otra base aplicable. Tampoco existe una regla universal por número de líneas que elimine toda protección. En GitHub, las facultades de ver o hacer fork no equivalen a cualquier reutilización fuera de ese ámbito.

- Error A: Acceso técnico público y permiso de reutilización son distintos; la publicación no aporta por sí sola todos los derechos necesarios.
- Error B: Atribuir la autoría no sustituye una autorización exigible para modificar o redistribuir; deben comprobarse licencia y otras bases aplicables.
- Error C: La longitud por sí sola no decide protección, originalidad, excepciones o permisos; no garantiza un umbral universal libre de derechos.

- [GitHub Docs: Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) · Choosing the right license: copyright por defecto sin licencia y nota sobre facultades de ver/fork en GitHub · versión: Documentación oficial pública consultada; permiso de la plataforma para ver/fork no equivale a autorización general de incorporar o redistribuir · comprobado: 2026-10-28
- [BOE: Ley de Propiedad Intelectual, RDL 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Artículos 41, 96.2 y 96.4, 97, 99 y 100: dominio público, originalidad, expresión frente a ideas, titularidad, explotación y límites de programas · versión: Consolidación consultada, última actualización global publicada 30-03-2022; texto informativo frente a publicación oficial. El art.41 conserva autoría e integridad · comprobado: 2026-10-28

Partida: `4a8c11221eee920003b04366ebb3e2448d862cf2b93b750bb004a572835f1c82` · propuesta: `4d423c5c68344345672ae395c079a98de13716e9d5b3693f96c504313556a841`
