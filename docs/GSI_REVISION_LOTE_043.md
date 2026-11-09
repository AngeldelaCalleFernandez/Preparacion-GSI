# GSI-EDITORIAL-043 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `cdc8cde5ca4190da427c632fecbabfe503cddcac9a4f39f94b5d6072eb886397`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P16-095

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la pregunta y clave C: ya delimita modificación frente a ejecución, respaldo y configuración sin adaptación; completar los errores concretos.

### Antes

¿Qué es una obra derivada o transformación en el contexto de software?

- A. Ejecutar una copia no modificada del programa dentro del entorno para el que fue licenciada.
- B. Crear una copia de seguridad necesaria para poder utilizar o restaurar legítimamente el programa.
- C. Una modificación/adaptación que puede implicar derechos de transformación y las condiciones de la licencia aplicable. **(correcta)**
- D. Cambiar parámetros, credenciales o ficheros de configuración sin alterar el código ni adaptar la obra.

Explicación: La transformación es uno de los derechos de explotación regulados.

### Propuesta

¿Qué es una obra derivada o transformación en el contexto de software?

- A. Ejecutar una copia no modificada del programa dentro del entorno para el que fue licenciada.
- B. Crear una copia de seguridad necesaria para poder utilizar o restaurar legítimamente el programa.
- C. Una modificación/adaptación que puede implicar derechos de transformación y las condiciones de la licencia aplicable. **(correcta)**
- D. Cambiar parámetros, credenciales o ficheros de configuración sin alterar el código ni adaptar la obra.

Explicación: La traducción, adaptación u otra modificación del programa puede afectar al derecho de transformación y a las condiciones de la licencia. La opción de configuración acota expresamente que no se altera el código ni se adapta la obra. No debe confundirse transformar la obra con ejecutar una copia o realizar una copia de seguridad necesaria, aunque esos actos tengan sus propias reglas de reproducción.

- Error A: La ejecución de la copia no modificada descrita no es por sí misma adaptar la obra; puede implicar actos de reproducción, que son un plano distinto de la transformación preguntada.
- Error B: La copia de seguridad necesaria conserva una copia del programa para su uso; no describe por sí misma modificar o adaptar la obra y tiene regla específica en el artículo 100.2.
- Error D: El supuesto declara expresamente que no se altera el código ni se adapta la obra. No se generaliza a que cualquier cambio de configuración nunca pueda tener relevancia jurídica.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 Hecho generador; 96.2 originalidad, 96.3 expresión y coexistencia industrial, 96.4 exclusión de ideas; 99.b transformación; 100 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `a678637c0ef4be0970cc6be365b262978913f9059a8dfa085d441d761d2be46c` · propuesta: `e3791818ccce1a77b122dbe1af0ae40960a2e9210e171e2abc7fc11cab138120`

## MAN-GSI-P16-096

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la comparación de cláusulas de continuidad y clave A; opciones ya próximas a artefactos, escrow y dependencia operativa.

### Antes

¿Cuál es una buena cláusula de continuidad en desarrollo para el sector público?

- A. Entrega de código fuente, documentación, dependencias, instrucciones de despliegue y derechos suficientes para mantenimiento/evolución según el contrato. **(correcta)**
- B. Conservar únicamente el último binario desplegado, sin código, documentación, dependencias ni facultades para modificarlo.
- C. Depositar el fuente en escrow, pero omitir condiciones de liberación, instrucciones operativas y derechos de mantenimiento.
- D. Mantener compilación y publicación ligadas a una cuenta personal del proveedor mientras el servicio siga disponible.

Explicación: La reversibilidad requiere tanto artefactos técnicos como derechos jurídicos.

### Propuesta

¿Cuál es una buena cláusula de continuidad en desarrollo para el sector público?

- A. Entrega de código fuente, documentación, dependencias, instrucciones de despliegue y derechos suficientes para mantenimiento/evolución según el contrato. **(correcta)**
- B. Conservar únicamente el último binario desplegado, sin código, documentación, dependencias ni facultades para modificarlo.
- C. Depositar el fuente en escrow, pero omitir condiciones de liberación, instrucciones operativas y derechos de mantenimiento.
- D. Mantener compilación y publicación ligadas a una cuenta personal del proveedor mientras el servicio siga disponible.

Explicación: La continuidad requiere disponer de los artefactos necesarios y de facultades suficientes para mantener y evolucionar el sistema. Fuente, documentación, dependencias e instrucciones deben ser utilizables en las condiciones pactadas. El artículo 308.1 LCSP aporta la regla de derechos en sus supuestos, sin sustituir la precisión contractual de entregables y operación. OpenChain ilustra artefactos como fuente y scripts, no una obligación de copiar una cláusula universal.

- Error B: Un binario sin fuente, información técnica y facultades de modificación no acredita por sí mismo capacidad de mantenimiento y evolución independientes.
- Error C: Un depósito no basta sin saber cuándo se libera, qué se entrega y qué derechos permiten utilizarlo para continuidad.
- Error D: Que el servicio funcione no garantiza una transición operativa si construcción y publicación dependen de una cuenta personal que el cliente no controla.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades necesarias para la finalidad; 45 forma escrita; 56.1 soporte frente a explotación; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 9/2017 de Contratos del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902) · 308.1 regla de cesión a la Administración en los contratos descritos, salvo previsión distinta en pliegos o documento contractual · versión: Consolidación consultada, actualización global publicada 09-04-2026; no equivale a que cualquier entrega material o contrato privado ceda derechos ilimitados · comprobado: 2026-10-28
- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 2.1 compliance artifacts: fuente, scripts de construcción/instalación, licencias y avisos; 3.1.5 obligaciones; 3.3 inventario; 3.4.1 creación y archivo de artefactos · versión: OpenChain 2.1, documento oficial del proyecto que declara equivalencia funcional con ISO/IEC 5230:2020. Referencia de artefactos, no cláusula contractual obligatoria o certificación de esta aplicación · comprobado: 2026-10-28

Partida: `62dc18c252597a63927a04144579ddc5d9b45b649f6fee9dbcf454f39721886e` · propuesta: `5d6b31b07807f6b1db864b3223fa59fcb580fca5455520cd08305cbf02d168bf`

## MAN-GSI-P16-097

Decisión: pending_review · acción: revise.

Motivo: Conservar riesgo de alcance contractual ambiguo y clave A; delimitar cliente privado y reconocer la regla de finalidad del artículo 43.2.

### Antes

¿Qué riesgo hay si el contrato dice solo “se entrega la aplicación” sin concretar derechos?

- A. Puede quedar ambiguo qué puede modificar, redistribuir, encargar a terceros o reutilizar el cliente. **(correcta)**
- B. La entrega transmite de forma automática todos los derechos de explotación al cliente.
- C. La falta de detalle afecta al aspecto visual, pero no a las facultades de uso.
- D. La cláusula convierte el contrato en una licencia MIT por defecto.

Explicación: Los derechos de explotación deben quedar claramente definidos.

### Propuesta

Un cliente privado recibe un contrato de desarrollo que solo dice «se entrega la aplicación». ¿Qué riesgo permanece?

- A. Puede ser ambiguo el alcance del mantenimiento y la reutilización. **(correcta)**
- B. Implica una cesión exclusiva de toda modalidad de explotación.
- C. Equivale a entregar el fuente con cualquier facultad de modificación.
- D. Activa por defecto una licencia permisiva sobre las dependencias.

Explicación: La frase entrega la aplicación no concreta por sí sola todas las facultades de mantenimiento, reutilización o encargo a terceros. Se interpretan contrato y ley: el artículo 43.2 también contempla las modalidades que se deduzcan necesariamente del contrato y sean indispensables para su finalidad. No se afirma que no exista ninguna facultad si falta una mención expresa.

- Error B: Una fórmula genérica de entrega no prueba una cesión exclusiva e ilimitada de toda explotación en este supuesto privado.
- Error C: Entrega de aplicación, acceso material al fuente y derechos de modificación son cuestiones distintas; no cabe equipararlas sin más.
- Error D: La imprecisión contractual no convierte por defecto el código de terceros en una licencia permisiva ni elimina sus condiciones.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades necesarias para la finalidad; 45 forma escrita; 56.1 soporte frente a explotación; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `5be5a5e0235c48da7cfb59910ce4a4421678cfcc6970bd41764f1cbe5b7cfd14` · propuesta: `6ba045fc74b5c8d2d26c784b81d12a491ef6a512fbec2901b25e795e1a67ac04`

## MAN-GSI-P16-098

Decisión: pending_review · acción: revise.

Motivo: Conservar clasificación de cuatro capas y clave D; cuatro correspondencias paralelas, evitando una correcta extensa frente a eslóganes cortos.

### Antes

¿Qué combinación refleja correctamente distintas capas de protección?

- A. Copyright sobre cualquier idea; DRM sobre marcas; patente sobre toda interfaz.
- B. Marca y copyright son sinónimos.
- C. Secreto empresarial equivale a dominio público.
- D. Copyright sobre expresión del software; marcas sobre signos distintivos; secretos sobre información confidencial; patentes bajo su régimen específico. **(correcta)**

Explicación: El temario exige distinguir mecanismos jurídicos complementarios.

### Propuesta

¿Qué combinación refleja correctamente distintas capas de protección?

- A. Copyright: ideas; marca: invenciones; secreto: información publicada; patente: expresión del código.
- B. Copyright: signos comerciales; marca: código original; secreto: cualquier dato interno; patente: ideas sin requisitos.
- C. Copyright: invención técnica; marca: información reservada; secreto: dominio público; patente: cualquier expresión original.
- D. Copyright: expresión; marca: signos distintivos; secreto: información reservada con requisitos; patente: invención bajo su régimen. **(correcta)**

Explicación: Los mecanismos tienen objetos y requisitos distintos. El derecho de autor protege la expresión original del programa, la marca distingue productos o servicios, el secreto empresarial exige las condiciones legales de reserva y valor, y una patente protege una invención cuando concurren sus requisitos. Pueden coexistir sin convertirse en sinónimos.

- Error A: El copyright no reserva ideas abstractas, la marca no protege por sí misma una invención, la publicación no define un secreto y la patente no es la protección literal del código.
- Error B: Intercambia signos y expresión del código; no todo dato interno reúne los requisitos de secreto y las ideas no obtienen patente sin requisitos.
- Error C: Confunde invención y copyright, información reservada y marca, y dominio público y secreto. Una expresión original tampoco es por ese solo hecho una invención patentada.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 Hecho generador; 96.2 originalidad, 96.3 expresión y coexistencia industrial, 96.4 exclusión de ideas; 99.b transformación; 100 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 17/2001 de Marcas](https://www.boe.es/buscar/act.php?id=BOE-A-2001-23093) · 4 Concepto de marca: signos aptos para distinguir productos/servicios y representación clara y precisa de su protección · versión: Consolidación consultada, actualización global publicada 28-07-2022; ámbito de signos distintivos, distinto del copyright del código · comprobado: 2026-10-28
- [BOE: Ley 1/2019 de Secretos Empresariales](https://www.boe.es/buscar/act.php?id=BOE-A-2019-2364) · 1.1 letras a–c: secreto, valor empresarial por serlo y medidas razonables para mantenerlo; 1.2 titular que ejerce control legítimo · versión: Cabecera consultada: texto inicial publicado 21-02-2019, en vigor 13-03-2019; se distingue de la fecha real de comprobación de fuentes · comprobado: 2026-10-28
- [BOE: Ley 24/2015 de Patentes](https://www.boe.es/buscar/act.php?id=BOE-A-2015-8328) · 4.1 novedad, actividad inventiva y aplicación industrial; 4.4–5 exclusiones como tales; 22 solicitud y Título V procedimiento de concesión · versión: Consolidación consultada, actualización global publicada 04-07-2018; no se declara patentable cualquier programa ni invención por el mero hecho de escribir código · comprobado: 2026-10-28

Partida: `9dd0e1fcfcb291c7fd8a85ece6bf19f97e0570b99dcad309898297ea7da0df0d` · propuesta: `e1154ab6099a9ddbccd760cb5ce46710c6450b8d29b38131fe0b94970a4f5968`

## MAN-GSI-P16-099

Decisión: pending_review · acción: revise.

Motivo: Conservar afirmación falsa sobre monopolio de ideas y clave B; quitar la cita larga que destacaba la falsa por longitud.

### Antes

¿Qué frase es falsa?

- A. La expresión concreta del programa puede estar protegida.
- B. “Si el algoritmo es una idea abstracta, el copyright del programa me concede monopolio sobre cualquier implementación de esa idea”. **(correcta)**
- C. Las ideas/principios subyacentes no se protegen como tales por copyright de software.
- D. Puede haber otros regímenes jurídicos además del copyright.

Explicación: El copyright no monopoliza ideas abstractas.

### Propuesta

Sobre ideas, algoritmos y protección del software, ¿qué afirmación es falsa?

- A. El código original puede protegerse como expresión del programa.
- B. El copyright reserva toda implementación de la idea del programa. **(correcta)**
- C. Las ideas y principios no quedan protegidos como tales por copyright.
- D. Otros regímenes pueden coexistir con la protección del programa.

Explicación: El derecho de autor sobre un programa no concede un monopolio sobre cualquier implementación independiente de una idea abstracta. El artículo 96.4 excluye ideas y principios como tales, mientras la expresión original puede protegerse. Ello no resuelve por sí solo otras normas, contratos o derechos aplicables a un caso concreto.

- Error A: La expresión original del programa puede protegerse; no es la afirmación falsa y debe distinguirse de su idea abstracta.
- Error C: La exclusión de ideas y principios como tales está prevista en el artículo 96.4; no niega protección de una expresión original.
- Error D: El artículo 104 contempla coexistencia de otros regímenes; su existencia no transforma el copyright en monopolio sobre todas las ideas.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 Hecho generador; 96.2 originalidad, 96.3 expresión y coexistencia industrial, 96.4 exclusión de ideas; 99.b transformación; 100 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 104 Salvaguardia de aplicación de otras disposiciones legales: patentes, marcas, competencia desleal, secretos comerciales, obligaciones y otras · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28

Partida: `d3a056f0e15bf593f750f9e9cea94b603024905785ee338a945ea49e4410726b` · propuesta: `364d84d9928459d4c28e3cbc7ff7b3a2189953a0fb9d49c5a27a10545598dba8`

## MAN-GSI-P16-100

Decisión: pending_review · acción: revise.

Motivo: Conservar las dos distinciones del concepto original y clave C; retirar la metarreferencia al examen y comparar cuatro afirmaciones dobles.

### Antes

¿Qué regla mental es más útil para examen sobre protección jurídica?

- A. El registro obligatorio crea el derecho de autor y, antes de inscribir el programa, su código puede copiarse y distribuirse libremente.
- B. Comprar una copia transmite todos los derechos de explotación, incluida la facultad de modificar, sublicenciar y redistribuir el programa.
- C. Protección del programa ≠ protección absoluta de ideas; licencia de uso ≠ transmisión de titularidad. **(correcta)**
- D. El código fuente carece de protección por ser legible, aunque constituya una forma de expresión original de un programa de ordenador.

Explicación: Son dos distinciones nucleares del bloque.

### Propuesta

¿Qué relación entre protección del programa y licencia de uso es correcta?

- A. El copyright protege las ideas; la licencia de uso cede su titularidad.
- B. El copyright exige registro; la compra de copia elimina la licencia.
- C. Se protege la expresión original; usar no equivale a ser titular. **(correcta)**
- D. El fuente queda sin protección; la licencia solo afecta al ejecutable.

Explicación: Se separan objeto protegido y facultades adquiridas: la expresión original puede tener derechos de autor, sin monopolizar las ideas, y una licencia de uso no transmite por ese solo título la titularidad. El derecho no nace necesariamente por inscripción y la legibilidad del fuente no lo excluye de protección.

- Error A: El copyright no protege ideas como tales y conceder uso no equivale a ceder automáticamente la titularidad de los derechos.
- Error B: El artículo 1 vincula el derecho al hecho de creación, con el requisito aplicable de originalidad; comprar una copia tampoco borra sus condiciones.
- Error D: El fuente puede ser una forma de expresión original protegida. La licencia no se limita por definición al ejecutable ni elimina los derechos sobre el fuente.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 Hecho generador; 96.2 originalidad, 96.3 expresión y coexistencia industrial, 96.4 exclusión de ideas; 99.b transformación; 100 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 43.1 y 43.2 alcance de la cesión y modalidades necesarias para la finalidad; 45 forma escrita; 56.1 soporte frente a explotación; 99.c cesión de uso · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28

Partida: `783298d881d22939bbaa219c42ef6ed668d75d3ca7a78f7781a4a0870aa623f6` · propuesta: `1dc3cc1162d507ec1094064fd73149fa44762050ed938cc70d79d5ef633816cf`

## MAN-GSI-P16-101

Decisión: pending_review · acción: revise.

Motivo: Conservar corrección necesaria por usuario legítimo y clave B; precisar contrato con Directiva y Top System, sin convertir la salvedad literal en exclusión total.

### Antes

¿Puede el usuario legítimo corregir errores necesarios para usar el programa conforme a su finalidad?

- A. La corrección corresponde al titular de derechos y el usuario legítimo necesita autorización específica en todos los casos.
- B. El artículo 100 contempla reproducción/transformación necesaria, incluida corrección de errores, salvo disposición contractual en contrario en el marco indicado. **(correcta)**
- C. El usuario legítimo puede transformar, distribuir y explotar la versión corregida sin límites adicionales.
- D. La corrección de errores está permitida únicamente cuando el programa se distribuye con una licencia de código abierto.

Explicación: El artículo 100.1 establece ese límite a los derechos de explotación.

### Propuesta

Un usuario legítimo necesita corregir un error que impide usar un programa conforme a su finalidad. ¿Qué criterio es correcto?

- A. Una cláusula puede prohibir toda posibilidad de corregir errores.
- B. Cabe la corrección necesaria con los límites legales aplicables. **(correcta)**
- C. La corrección permite redistribuir la versión modificada sin límites.
- D. La facultad depende de que el programa tenga una licencia libre.

Explicación: El artículo 100.1 contempla los actos necesarios para la utilización legítima, incluida corrección de errores. Debe interpretarse con el marco europeo: Top System distingue organizar contractualmente cómo se corrige, por ejemplo mediante mantenimiento del titular, de prohibir toda posibilidad de corrección. No concede una autorización general para otros usos o para distribuir la versión modificada.

- Error A: Top System, apartados 65–68, distingue prohibición total y organización contractual de la corrección: la facultad no puede excluirse sin más en toda posibilidad.
- Error C: La corrección necesaria no convierte en libres todos los actos posteriores de explotación o distribución; se atiende a su finalidad y alcance.
- Error D: El límite legal se refiere a la utilización legítima y necesidad, no a que el programa tenga una licencia open source.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28
- [TJUE: Top System, C-13/20](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62020CJ0013) · Apartados 41–53 y 57–74, especialmente 63 necesidad, 65–68 corrección y contrato, 69–74 finalidad y límites; fallo 1 y 2 · versión: Sentencia 06-10-2021, ECLI:EU:C:2021:811, CELEX 62020CJ0013. Cotejo de texto primario indexado por el buscador; lectura HTTP directa bloqueada por comprobación JavaScript. No se usa la opinión del Abogado General 62020CC0013 como fallo · comprobado: 2026-10-28

Partida: `b0094c363dc8c035f4210237b7e0c3f75e4a859fd0449f236bab0fa1c2c5273c` · propuesta: `13ee4569c50412a01d7b2653531dc909f153074c2919f5e056c4b817d3ba4b47`

## MAN-GSI-P16-102

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la regla de copia necesaria y clave D; delimitar sujeto, necesidad y diferencia frente a distribución.

### Antes

¿Qué regla establece el TRLPI sobre la copia de seguridad necesaria?

- A. La copia de seguridad está prohibida salvo autorización individual y previa del titular de los derechos del programa.
- B. La copia necesaria para el uso corresponde al fabricante y el usuario legítimo no puede realizarla directamente.
- C. La copia de seguridad puede distribuirse libremente a terceros porque no queda vinculada a la licencia del programa.
- D. No puede impedirse por contrato a quien tiene derecho a utilizar el programa cuando resulte necesaria para esa utilización. **(correcta)**

Explicación: El artículo 100.2 protege la copia de seguridad necesaria.

### Propuesta

¿Qué regla establece el TRLPI sobre la copia de seguridad necesaria?

- A. La copia de seguridad está prohibida salvo autorización individual y previa del titular de los derechos del programa.
- B. La copia necesaria para el uso corresponde al fabricante y el usuario legítimo no puede realizarla directamente.
- C. La copia de seguridad puede distribuirse libremente a terceros porque no queda vinculada a la licencia del programa.
- D. No puede impedirse por contrato a quien tiene derecho a utilizar el programa cuando resulte necesaria para esa utilización. **(correcta)**

Explicación: El artículo 100.2 impide excluir por contrato la copia de seguridad cuando resulte necesaria para la utilización por quien tiene derecho a usar el programa. El supuesto está limitado por sujeto y necesidad; no permite distribuir esa copia a cualquier tercero ni elimina las condiciones aplicables a otros actos.

- Error A: La ley no supedita esa copia necesaria a una autorización individual previa del titular; establece que no puede impedirse por contrato en el supuesto previsto.
- Error B: La facultad se reconoce a quien tiene derecho a utilizar el programa, no exclusivamente al fabricante.
- Error C: La copia necesaria para utilización no concede por sí sola permiso de distribución libre a terceros; se confunde respaldo con circulación de copias.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28

Partida: `a1df6692b5ab3d11fd94f0ba55250f7a16442779dceec34f57bdd62b1e89f236` · propuesta: `2ba30b817d30aa79961a6bf04d7e9fecd04f8990bc94c1fc6d62297acce78dfb`

## MAN-GSI-P16-103

Decisión: pending_review · acción: revise.

Motivo: Conservar observación por usuario legítimo y clave C; microcaso de operación autorizada para aplicar sujeto, finalidad y límites.

### Antes

¿Puede el usuario legítimo observar o estudiar el funcionamiento del programa para determinar ideas y principios?

- A. No; observar el funcionamiento está prohibido en cualquier circunstancia aunque se haga durante una operación legítimamente autorizada.
- B. La observación requeriría autorización judicial específica, incluso para el usuario legítimo durante el uso ordinario del programa.
- C. Sí, durante operaciones que tiene derecho a realizar, en los términos del artículo 100. **(correcta)**
- D. El supuesto legal se aplicaría cuando el software estuviera bajo GPL, pero no alcanzaría a programas con licencia propietaria.

Explicación: El artículo 100.3 reconoce esa facultad al usuario legítimo.

### Propuesta

Un usuario legítimo estudia el funcionamiento durante operaciones que tiene derecho a realizar, para identificar ideas y principios. ¿Qué puede hacer?

- A. Necesita autorización específica aunque la ejecución ya sea legítima.
- B. La facultad requiere que el programa tenga una licencia libre.
- C. Puede hacerlo sin autorización adicional en los términos legales. **(correcta)**
- D. La observación autoriza también a distribuir el código original.

Explicación: El artículo 100.3 permite al usuario legítimo observar, estudiar o verificar el funcionamiento para determinar ideas y principios durante operaciones que tiene derecho a realizar. La facultad no depende de que la licencia sea libre y no habilita por sí sola otros actos, como distribuir código original o intervenir sobre copias no autorizadas.

- Error A: En las operaciones autorizadas del supuesto, la observación con esa finalidad no requiere una autorización adicional específica del titular.
- Error B: La regla legal no se limita a GPL u otras licencias libres; exige legitimidad y las condiciones descritas.
- Error D: Observar funcionamiento y distribuir código son facultades distintas; el artículo 100.3 no concede un permiso general de distribución.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28

Partida: `ff0d71da2a6a73d7b4213e6071822aa63305bdb705ce1554c993cca42dcee82f` · propuesta: `467b97d210b89552c118046a6165989054b1b669e688600a019ad6f12717d74a`

## MAN-GSI-P16-104

Decisión: pending_review · acción: revise.

Motivo: Conservar ausencia de permiso general para cualquier finalidad y clave A; precisar la excepción preguntada sin negar otras bases como corrección necesaria.

### Antes

¿La descompilación está autorizada de forma general para cualquier finalidad?

- A. No; la excepción legal está limitada, especialmente a obtener información necesaria para interoperabilidad bajo requisitos. **(correcta)**
- B. Sí, cualquier comprador puede descompilar para copiar el producto.
- C. Sí, si no vende el resultado.
- D. Sí, siempre que cambie el nombre del programa.

Explicación: La descompilación/interoperabilidad se regula con condiciones estrictas en el artículo 100.5 y 100.6.

### Propuesta

¿Qué alcance tiene la excepción de interoperabilidad para descompilar un programa?

- A. Actos necesarios para interoperar bajo sus requisitos. **(correcta)**
- B. Cualquier actuación autorizada por tener licencia de uso.
- C. Actos de descompilación sin finalidad comercial.
- D. Actos que eliminen la identificación del proveedor.

Explicación: La excepción de interoperabilidad no permite descompilar para cualquier finalidad: los artículos 100.5–7 exigen necesidad, sujetos habilitados, información no disponible de forma fácil y rápida y límites de uso y comunicación. Esto no significa que interoperabilidad sea la única base posible: Top System distingue la descompilación necesaria para corregir errores, con finalidad y requisitos propios.

- Error B: Tener una licencia de uso no basta para cumplir automáticamente todos los requisitos de la excepción de interoperabilidad.
- Error C: La ausencia de comercialización no sustituye finalidad, necesidad, disponibilidad de información o límites de la excepción.
- Error D: Cambiar o eliminar la identificación del proveedor no aporta legitimación ni sustituye los requisitos legales.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28
- [TJUE: Top System, C-13/20](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62020CJ0013) · Apartados 41–53 y 57–74, especialmente 63 necesidad, 65–68 corrección y contrato, 69–74 finalidad y límites; fallo 1 y 2 · versión: Sentencia 06-10-2021, ECLI:EU:C:2021:811, CELEX 62020CJ0013. Cotejo de texto primario indexado por el buscador; lectura HTTP directa bloqueada por comprobación JavaScript. No se usa la opinión del Abogado General 62020CC0013 como fallo · comprobado: 2026-10-28

Partida: `1fc437b7d70a2436405506fd1928f1740d77bcbaef3ad96a32d6f7e2099558cb` · propuesta: `11a77c488b0db5d9fcdb8466044d5ccfac9642413ff7b822a507e7cce0f96db3`

## MAN-GSI-P16-105

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la condición de información no disponible y clave C; alternativas ya próximas a necesidad, alcance, finalidad y precio.

### Antes

Una condición para la excepción de interoperabilidad es:

- A. Que el usuario pretenda desarrollar un clon sustancialmente similar y reutilizar para ello cualquier parte expresiva del programa original.
- B. Que se descompile el programa completo aunque solo una parte limitada resulte necesaria para obtener la información de interoperabilidad.
- C. Que la información necesaria no haya sido puesta previamente de manera fácil y rápida a disposición de quien puede invocar la excepción. **(correcta)**
- D. Que el programa se distribuya gratuitamente, con independencia de quién realiza los actos, su finalidad y la disponibilidad previa de información.

Explicación: La ley exige necesidad y falta de disponibilidad previa de la información.

### Propuesta

Una condición para la excepción de interoperabilidad es:

- A. Que el usuario pretenda desarrollar un clon sustancialmente similar y reutilizar para ello cualquier parte expresiva del programa original.
- B. Que se descompile el programa completo aunque solo una parte limitada resulte necesaria para obtener la información de interoperabilidad.
- C. Que la información necesaria no haya sido puesta previamente de manera fácil y rápida a disposición de quien puede invocar la excepción. **(correcta)**
- D. Que el programa se distribuya gratuitamente, con independencia de quién realiza los actos, su finalidad y la disponibilidad previa de información.

Explicación: El artículo 100.5.b exige que la información necesaria no se hubiera puesto previamente de manera fácil y rápida a disposición de los sujetos habilitados. Es una condición del conjunto, no un permiso suficiente por sí solo: se examinan también legitimación, necesidad, partes afectadas y usos posteriores de la información.

- Error A: La excepción no permite utilizar la información para desarrollar un programa sustancialmente similar en su expresión ni para infringir derechos, según el artículo 100.6.c.
- Error B: El artículo 100.5.c limita los actos a las partes necesarias; no habilita descompilar todo por comodidad cuando solo hace falta una parte.
- Error D: La gratuidad no sustituye las condiciones sobre sujeto, finalidad y disponibilidad previa de la información necesaria.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28

Partida: `34c4373408978d4b870431a315255c2a76228c2278250db5ebf7bbebab715bc6` · propuesta: `397bf787efc0dafc0312f6f9583d472489910bbb6155911bfc6dae931dde9b92`

## MAN-GSI-P16-106

Decisión: pending_review · acción: revise.

Motivo: Conservar límite a partes necesarias y clave A; evitar tanto habilitación de todo el programa por defecto como una prohibición universal de actuar sobre él completo.

### Antes

¿Hasta dónde deben limitarse los actos de descompilación para interoperabilidad?

- A. A las partes del programa original necesarias para conseguirla. **(correcta)**
- B. A todo el código sin límite.
- C. Solo al manual, nunca al código.
- D. A las partes que generen más valor comercial.

Explicación: La proporcionalidad/limitación es requisito expreso.

### Propuesta

¿Hasta dónde deben limitarse los actos de descompilación para interoperabilidad?

- A. A las partes necesarias del programa para interoperar. **(correcta)**
- B. Al programa completo por disponer de una licencia de uso.
- C. A los módulos de mayor interés comercial para la integración.
- D. A cualquier parte que pueda compilarse de forma separada.

Explicación: El artículo 100.5.c limita los actos a las partes del programa original necesarias para la interoperabilidad. La medida depende de lo necesario, no de que la persona tenga una copia, de su valor comercial o de la división en módulos. No significa que siempre deba excluirse el programa completo si se acredita que todo él resulta necesario en el supuesto legal.

- Error B: La licencia de uso no prueba que sea necesario actuar sobre el programa entero; debe justificarse el alcance conforme a la finalidad de interoperar.
- Error C: El interés comercial no sustituye el criterio legal de necesidad para lograr interoperabilidad.
- Error D: Poder compilar por separado no demuestra que una parte sea necesaria para interoperar; son criterios técnicos distintos.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28

Partida: `12a16247769674059f588e54b91b64d729ad925c054f825cc97047bf4f648aeb` · propuesta: `9127f709d5a0114d3c9ec002c9d68a52423ea1fd604ee9471581600e6a0b7aae`

## MAN-GSI-P16-107

Decisión: pending_review · acción: revise.

Motivo: Conservar finalidad y límites de la información y clave B; cuatro usos comparables, distinguiendo comunicar lo necesario de divulgar sin límite.

### Antes

La información obtenida por la excepción de interoperabilidad puede usarse:

- A. Para crear y comercializar un clon sustancialmente similar en expresión.
- B. Únicamente para conseguir la interoperabilidad del programa creado independientemente y dentro de los límites legales. **(correcta)**
- C. Para publicarla indiscriminadamente.
- D. Para eliminar cualquier DRM ajeno sin relación con interoperabilidad.

Explicación: El artículo 100.6 limita uso y comunicación de la información obtenida.

### Propuesta

La información obtenida por la excepción de interoperabilidad puede usarse:

- A. Para reutilizar libremente la expresión del programa descompilado.
- B. Para lograr la interoperabilidad del programa creado independientemente. **(correcta)**
- C. Para divulgarla a terceros aunque no intervengan en la integración.
- D. Para desarrollar un programa sustancialmente similar en su expresión.

Explicación: El artículo 100.6 vincula la información obtenida por esa excepción a la interoperabilidad del programa creado independientemente. Su comunicación a terceros solo se admite cuando sea necesaria para esa interoperabilidad y no puede usarse para crear un programa sustancialmente similar en su expresión o infringir derechos. No se confunde identidad funcional con apropiación de expresión protegida.

- Error A: La excepción no convierte la expresión del programa original en material de libre reutilización para cualquier explotación.
- Error C: La comunicación no es indiscriminada: el artículo 100.6.b exige necesidad para la interoperabilidad del programa creado independientemente.
- Error D: El artículo 100.6.c excluye ese uso sustancialmente similar en expresión; no equivale a prohibir por copyright toda implementación independiente de una idea.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28

Partida: `a1ff311ddb3f01cba362f5cfd91cae60c691c37230ed7249d69dc6a184c57c39` · propuesta: `9248efc8403e11ef95382f21ea870809d0a98f5a80b27e5e65bf539a1d05c600`

## MAN-GSI-P16-108

Decisión: pending_review · acción: revise.

Motivo: Conservar distinción patente/copyright y clave D; cuatro correspondencias concisas sobre objeto y nacimiento de derechos.

### Antes

¿Qué diferencia hay entre una patente y el copyright del software?

- A. Ambos derechos nacen automáticamente al escribir el programa y protegen durante el mismo plazo cualquier idea técnica subyacente.
- B. La patente protege la expresión literal del código sin examen, mientras el copyright exige novedad y actividad inventiva.
- C. El copyright reserva una invención técnica tras solicitud y concesión, y la patente protege automáticamente cualquier obra original.
- D. Son regímenes distintos; el copyright protege expresión y la patente, cuando proceda, una invención bajo requisitos específicos. **(correcta)**

Explicación: Propiedad intelectual e industrial tienen objetos y requisitos diferentes.

### Propuesta

¿Qué diferencia hay entre una patente y el copyright del software?

- A. Ambos protegen cualquier idea técnica por el hecho de expresarla.
- B. Patente: expresión del código; copyright: invención técnica nueva.
- C. Copyright: concesión tras solicitud; patente: protección automática.
- D. Copyright: expresión original; patente: invención patentable. **(correcta)**

Explicación: Son regímenes distintos: el derecho de autor protege expresión original del programa y la patente, cuando corresponda, una invención bajo sus requisitos y procedimiento. No comparten por definición objeto, nacimiento o alcance. El artículo 96.3 TRLPI contempla coexistencia, sin declarar patentable cualquier programa como tal.

- Error A: El derecho de autor no protege cualquier idea técnica y escribirla no concede automáticamente una patente.
- Error B: Invierte los objetos: la expresión original corresponde a copyright y la invención se examina en el régimen de patentes.
- Error C: Intercambia sus mecanismos: copyright no depende de una concesión de patente y la patente no nace automáticamente por escribir una obra.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 Hecho generador; 96.2 originalidad, 96.3 expresión y coexistencia industrial, 96.4 exclusión de ideas; 99.b transformación; 100 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 24/2015 de Patentes](https://www.boe.es/buscar/act.php?id=BOE-A-2015-8328) · 4.1 novedad, actividad inventiva y aplicación industrial; 4.4–5 exclusiones como tales; 22 solicitud y Título V procedimiento de concesión · versión: Consolidación consultada, actualización global publicada 04-07-2018; no se declara patentable cualquier programa ni invención por el mero hecho de escribir código · comprobado: 2026-10-28

Partida: `98960aaaf7f79eab7c95ebe01c41cac4508168c1bade028fa31804e075cef873` · propuesta: `852f22d2013ecc666bd1e124a7e117ce8fabb80568687e1763557be3dd4454a5`

## MAN-GSI-P16-109

Decisión: pending_review · acción: revise.

Motivo: Conservar función de marca y clave D; cuatro objetos de protección comparables en forma y longitud.

### Antes

¿Qué protege principalmente una marca?

- A. Una invención técnica definida por reivindicaciones y concedida tras cumplir requisitos de patentabilidad.
- B. La expresión original del código y otras obras, protegida por derechos de autor.
- C. Información empresarial valiosa y confidencial que no es generalmente conocida.
- D. Signos que distinguen productos o servicios en el mercado. **(correcta)**

Explicación: La marca protege identificación/distinción, no el contenido del programa.

### Propuesta

¿Qué protege principalmente una marca?

- A. Invenciones técnicas que cumplen requisitos de patentabilidad.
- B. Expresiones originales del código y de otras obras protegidas.
- C. Información empresarial secreta con valor por su reserva.
- D. Signos que distinguen productos o servicios de una empresa. **(correcta)**

Explicación: Una marca distingue productos o servicios de una empresa de los de otras. El artículo 4 de la Ley de Marcas añade requisitos para precisar el objeto de protección en el registro. No protege por ese solo hecho la invención técnica, la expresión del código o un conocimiento secreto, que corresponden a otros regímenes.

- Error A: Describe el objeto del régimen de patentes, no la función distintiva de una marca.
- Error B: Se refiere a expresión original protegible por derecho de autor, distinta del signo que identifica productos o servicios.
- Error C: Se aproxima al secreto empresarial y sus condiciones de reserva y valor, no al signo distintivo de la marca.

- [BOE: Ley 17/2001 de Marcas](https://www.boe.es/buscar/act.php?id=BOE-A-2001-23093) · 4 Concepto de marca: signos aptos para distinguir productos/servicios y representación clara y precisa de su protección · versión: Consolidación consultada, actualización global publicada 28-07-2022; ámbito de signos distintivos, distinto del copyright del código · comprobado: 2026-10-28
- [BOE: Ley 24/2015 de Patentes](https://www.boe.es/buscar/act.php?id=BOE-A-2015-8328) · 4.1 novedad, actividad inventiva y aplicación industrial; 4.4–5 exclusiones como tales; 22 solicitud y Título V procedimiento de concesión · versión: Consolidación consultada, actualización global publicada 04-07-2018; no se declara patentable cualquier programa ni invención por el mero hecho de escribir código · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 Hecho generador; 96.2 originalidad, 96.3 expresión y coexistencia industrial, 96.4 exclusión de ideas; 99.b transformación; 100 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 1/2019 de Secretos Empresariales](https://www.boe.es/buscar/act.php?id=BOE-A-2019-2364) · 1.1 letras a–c: secreto, valor empresarial por serlo y medidas razonables para mantenerlo; 1.2 titular que ejerce control legítimo · versión: Cabecera consultada: texto inicial publicado 21-02-2019, en vigor 13-03-2019; se distingue de la fecha real de comprobación de fuentes · comprobado: 2026-10-28

Partida: `db5b1f669fdd092974ab536aeef918c2415326e77a1906e9b49a894cac783745` · propuesta: `748492638e0385d0c82fe2822fe1d2244988c50e8d11f4aa4b8a65c0b57a063b`

## MAN-GSI-P16-110

Decisión: pending_review · acción: revise.

Motivo: Conservar secreto empresarial y clave B; hacer explícitos sus tres requisitos, no solo una etiqueta de confidencialidad.

### Antes

¿Qué protege un secreto empresarial?

- A. Una invención divulgada públicamente que obtiene exclusividad automática sin solicitud, novedad ni concesión de patente.
- B. Información valiosa mantenida confidencial bajo condiciones legales, como know-how no divulgado. **(correcta)**
- C. Cualquier idea empresarial por efecto del copyright, aunque no se haya expresado en una obra ni mantenido reservada.
- D. Los nombres y signos distintivos internos de una empresa, aunque el proceso o conocimiento ya sea público y conocido.

Explicación: La confidencialidad es esencial al régimen de secretos.

### Propuesta

¿Qué protege un secreto empresarial?

- A. Invenciones divulgadas para obtener un título de exclusividad.
- B. Información secreta, valiosa por serlo y con medidas razonables. **(correcta)**
- C. Cualquier idea interna aunque sea conocida o accesible en su sector.
- D. Signos que distinguen productos por estar registrados como marca.

Explicación: El artículo 1 de la Ley 1/2019 exige que la información sea secreta en su ámbito pertinente, tenga valor empresarial real o potencial precisamente por ser secreta y sea objeto de medidas razonables para mantenerla así. No basta llamarla confidencial, ni toda idea interna reúne esos requisitos. Puede incluir conocimiento tecnológico u organizativo si satisface las condiciones.

- Error A: La divulgación para obtener un título de protección describe otra vía jurídica; no acredita las condiciones de secreto empresarial.
- Error C: Ser interna no basta si la información es generalmente conocida o fácilmente accesible en los círculos pertinentes.
- Error D: La función de distinguir productos mediante signos corresponde a la marca; no define un secreto empresarial.

- [BOE: Ley 1/2019 de Secretos Empresariales](https://www.boe.es/buscar/act.php?id=BOE-A-2019-2364) · 1.1 letras a–c: secreto, valor empresarial por serlo y medidas razonables para mantenerlo; 1.2 titular que ejerce control legítimo · versión: Cabecera consultada: texto inicial publicado 21-02-2019, en vigor 13-03-2019; se distingue de la fecha real de comprobación de fuentes · comprobado: 2026-10-28
- [BOE: Ley 24/2015 de Patentes](https://www.boe.es/buscar/act.php?id=BOE-A-2015-8328) · 4.1 novedad, actividad inventiva y aplicación industrial; 4.4–5 exclusiones como tales; 22 solicitud y Título V procedimiento de concesión · versión: Consolidación consultada, actualización global publicada 04-07-2018; no se declara patentable cualquier programa ni invención por el mero hecho de escribir código · comprobado: 2026-10-28
- [BOE: Ley 17/2001 de Marcas](https://www.boe.es/buscar/act.php?id=BOE-A-2001-23093) · 4 Concepto de marca: signos aptos para distinguir productos/servicios y representación clara y precisa de su protección · versión: Consolidación consultada, actualización global publicada 28-07-2022; ámbito de signos distintivos, distinto del copyright del código · comprobado: 2026-10-28

Partida: `da3ab782c299471e4c58a60c076cc9307792f50f394f5dedba7ec07af8d62f5b` · propuesta: `7cb6c404dd60e63392c02b09967b796b2deefb0e12016bf1d5eab6de087ec843`

## MAN-GSI-P16-111

Decisión: pending_review · acción: revise.

Motivo: Conservar error de suponer patentes universales y clave A; cuatro actuaciones paralelas, sin convertir ausencia de cláusula expresa en ausencia de todo derecho implícito.

### Antes

¿Qué error debe evitarse al usar una licencia open source?

- A. Suponer que la licencia de copyright concede automáticamente cualquier patente imaginable. **(correcta)**
- B. Identificar y revisar las cláusulas de patente de la licencia y las posibles condiciones asociadas a contribuciones o litigios.
- C. Registrar el nombre y versión exactos de la licencia aplicable para evitar decisiones basadas solo en una familia genérica.
- D. Conservar avisos de copyright, atribuciones y textos de licencia cuando las condiciones de redistribución lo exijan.

Explicación: Las concesiones de patente dependen de la licencia; Apache-2.0, por ejemplo, las regula expresamente.

### Propuesta

¿Qué error debe evitarse al usar una licencia open source?

- A. Dar por concedidas patentes ajenas al alcance de la licencia. **(correcta)**
- B. Revisar la concesión y sus condiciones de patente, si existe.
- C. Identificar texto y versión aplicables a cada componente.
- D. Conservar avisos exigidos cuando se redistribuya el código.

Explicación: Una licencia de código no acredita por sí sola permiso sobre cualquier patente imaginable o ajena a su alcance. Deben comprobarse las concesiones concretas y sus condiciones. Apache-2.0, por ejemplo, contiene una concesión expresa limitada a ciertas reivindicaciones licenciables de los contribuyentes; no elimina derechos de todos los terceros ni equivale a cesión de titularidad.

- Error B: Revisar una concesión de patente y sus condiciones cuando exista es pertinente; no es el error preguntado.
- Error C: Identificar texto y versión evita decidir solo por una etiqueta genérica y permite comprobar sus condiciones.
- Error D: Conservar los avisos que se exijan es parte del cumplimiento; no supone afirmar una concesión universal de patentes.

- [ASF: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 2 Copyright License; 3 Patent License: reivindicaciones licenciables del contribuyente necesariamente infringidas por su contribución sola o combinada con la obra; terminación por litigio indicado; 4 avisos · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. Concesión expresa delimitada, sin concluir ausencia de todo derecho implícito bajo otras licencias · comprobado: 2026-10-28
- [OpenChain: License Compliance Specification 2.1](https://github.com/OpenChain-Project/License-Compliance-Specification/blob/master/Official/en/2.1/openchainspec-2.1.md) · 2.1 compliance artifacts: fuente, scripts de construcción/instalación, licencias y avisos; 3.1.5 obligaciones; 3.3 inventario; 3.4.1 creación y archivo de artefactos · versión: OpenChain 2.1, documento oficial del proyecto que declara equivalencia funcional con ISO/IEC 5230:2020. Referencia de artefactos, no cláusula contractual obligatoria o certificación de esta aplicación · comprobado: 2026-10-28

Partida: `4132df9a042b53a9ebcbc0af5b94d5bb663724a646578869b7d7150052b18c39` · propuesta: `d8e917a3e31c6c71e42f747a1e2966ee57a6131d51e0f5e0e1763b84c324f7a7`

## MAN-GSI-P16-112

Decisión: pending_review · acción: revise.

Motivo: Conservar concesión de patentes delimitada y clave C; comparar alcance, relación con contribución y licencia frente a titularidad.

### Antes

¿Qué afirmación sobre Apache-2.0 y patentes es correcta?

- A. La licencia evita cualquier referencia a patentes y regula exclusivamente copyright y redistribución del código.
- B. Cada contribuyente concede todas las patentes propias y de terceros, aunque no cubran su aportación al proyecto.
- C. La licencia contiene una concesión de patentes de cada contribuyente limitada a las reivindicaciones cubiertas por sus términos. **(correcta)**
- D. Las patentes relacionadas pasan automáticamente al dominio público cuando el software se distribuye bajo Apache-2.0.

Explicación: Su sección 3 contiene una licencia expresa de patentes delimitada.

### Propuesta

¿Qué afirmación sobre Apache-2.0 y patentes es correcta?

- A. La concesión cubre cualquier patente de terceros que afecte al producto.
- B. Comprende patentes del contribuyente sin relación con su contribución.
- C. Cubre las reivindicaciones del contribuyente previstas en la cláusula. **(correcta)**
- D. Las patentes se ceden en propiedad al receptor junto con el copyright.

Explicación: La sección 3 de Apache-2.0 concede licencia de determinadas reivindicaciones licenciables por cada contribuyente, necesariamente infringidas por su contribución sola o combinada con la obra a la que se aporta. No es cesión de propiedad ni cobertura universal de patentes. La sección también prevé terminación para la obra en el supuesto de litigio de patentes que describe.

- Error A: La concesión de un contribuyente no garantiza permiso sobre cualquier patente de terceros que pueda afectar al producto.
- Error B: No abarca sin más todo el catálogo de patentes del contribuyente: la sección 3 delimita las reivindicaciones y su relación con la contribución y la obra.
- Error D: Conceder una licencia de patente no es transferir la propiedad de la patente ni la del copyright al receptor.

- [ASF: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 2 Copyright License; 3 Patent License: reivindicaciones licenciables del contribuyente necesariamente infringidas por su contribución sola o combinada con la obra; terminación por litigio indicado; 4 avisos · versión: Versión 2.0, enero de 2004; texto inglés autoritativo según ASF. Concesión expresa delimitada, sin concluir ausencia de todo derecho implícito bajo otras licencias · comprobado: 2026-10-28

Partida: `e17f878fe306a9f4270b494055c470e8c27660de1d31c5dd1d144f1b83ed5f79` · propuesta: `481edc718e8e762a290fcb1407f0d02400e378c6158f76f3e68d9abad796ac2b`

## MAN-GSI-P16-113

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra la regla de salvaguardia del artículo 104 y clave A; completar los límites de coexistencia sin confundir objetos de protección.

### Antes

¿Qué afirmación refleja el artículo 104 del TRLPI?

- A. El régimen de programas se entiende sin perjuicio de normas sobre patentes, marcas, competencia desleal, secretos y obligaciones, entre otras. **(correcta)**
- B. El software solo puede quedar protegido por copyright y cualquier patente, marca o secreto relacionado resulta inaplicable.
- C. Obtener una patente sustituye automáticamente el copyright del código y extingue las obligaciones contractuales existentes.
- D. Mantener el código como secreto empresarial impide que coexistan derechos de autor, marcas o acciones por competencia desleal.

Explicación: La ley reconoce expresamente la coexistencia de otros regímenes.

### Propuesta

¿Qué afirmación refleja el artículo 104 del TRLPI?

- A. El régimen de programas se entiende sin perjuicio de normas sobre patentes, marcas, competencia desleal, secretos y obligaciones, entre otras. **(correcta)**
- B. El software solo puede quedar protegido por copyright y cualquier patente, marca o secreto relacionado resulta inaplicable.
- C. Obtener una patente sustituye automáticamente el copyright del código y extingue las obligaciones contractuales existentes.
- D. Mantener el código como secreto empresarial impide que coexistan derechos de autor, marcas o acciones por competencia desleal.

Explicación: El artículo 104 preserva la aplicación de otros regímenes, como patentes, marcas, competencia desleal, secretos comerciales y obligaciones. El derecho de autor sobre programas no los sustituye automáticamente. Que una misma solución tenga distintas protecciones no significa que todos esos derechos existan en cualquier caso ni tengan el mismo objeto o requisitos.

- Error B: La norma no reserva toda protección al copyright: contempla expresamente otros regímenes aplicables cuando corresponda.
- Error C: La coexistencia de una patente no extingue por sí sola el derecho de autor del código o las obligaciones contractuales que resulten aplicables.
- Error D: Mantener información secreta no excluye automáticamente otros derechos o acciones; deben examinarse sus respectivos objetos y condiciones.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 104 Salvaguardia de aplicación de otras disposiciones legales: patentes, marcas, competencia desleal, secretos comerciales, obligaciones y otras · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 1 Hecho generador; 96.2 originalidad, 96.3 expresión y coexistencia industrial, 96.4 exclusión de ideas; 99.b transformación; 100 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Ley 1/2019 de Secretos Empresariales](https://www.boe.es/buscar/act.php?id=BOE-A-2019-2364) · 1.1 letras a–c: secreto, valor empresarial por serlo y medidas razonables para mantenerlo; 1.2 titular que ejerce control legítimo · versión: Cabecera consultada: texto inicial publicado 21-02-2019, en vigor 13-03-2019; se distingue de la fecha real de comprobación de fuentes · comprobado: 2026-10-28

Partida: `d2d44e07b4a660cfa96f6a51fa90498b0c8a8c8323c8fb3014f1ae1fa1a17575` · propuesta: `4ac3e7ef09f9406237dd080e7e7ee5d6ecff60c51eb181b541e7282a322f34ad`

## MAN-GSI-P16-114

Decisión: pending_review · acción: revise.

Motivo: Conservar microcaso de binarios sin información de integración y clave C; cuatro decisiones comparables, sin inferir automáticamente permiso o prohibición.

### Antes

Un proveedor entrega binarios pero ninguna información para integrar el sistema con terceros. ¿Qué enfoque es correcto?

- A. Descompilar y publicar inmediatamente todo el producto porque disponer de una licencia equivale a adquirir su código.
- B. Prohibir cualquier análisis del binario aun cuando falte información indispensable, sin examinar contrato ni marco legal.
- C. Revisar primero contrato, documentación disponible y, si procede, los límites legales de interoperabilidad; no asumir libertad total para descompilar. **(correcta)**
- D. Copiar interfaces y código completo invocando interoperabilidad, sin comprobar necesidad, finalidad ni límites de uso.

Explicación: La interoperabilidad tiene un marco legal específico y requisitos.

### Propuesta

Un proveedor entrega binarios pero ninguna información para integrar el sistema con terceros. ¿Qué enfoque es correcto?

- A. Descompilar todo el producto por haber adquirido una licencia de uso.
- B. Descartar la interoperabilidad si el proveedor no entrega el fuente.
- C. Comprobar contrato, información disponible y requisitos de la excepción. **(correcta)**
- D. Publicar cualquier información obtenida para facilitar otras integraciones.

Explicación: La falta de información en la entrega no acredita por sí sola todas las condiciones para descompilar. Se comprueban los permisos contractuales, si la información necesaria ya está disponible de forma fácil y rápida y los requisitos de los artículos 100.5–7: sujeto, programa creado independientemente, necesidad, alcance y usos posteriores. No debe asumirse ni libertad total ni prohibición absoluta de análisis.

- Error A: La licencia de uso no demuestra necesidad de actuar sobre todo el producto ni cumplimiento de las condiciones de interoperabilidad.
- Error B: La ausencia de fuente no excluye por sí sola toda vía legal de interoperabilidad; deben examinarse permisos, información disponible y excepciones.
- Error D: El artículo 100.6 no permite comunicar indiscriminadamente toda información obtenida; la comunicación a terceros debe ser necesaria para la interoperabilidad prevista.

- [BOE: TRLPI, Real Decreto Legislativo 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · 100.1 corrección necesaria; 100.2 copia de seguridad; 100.3 observación; 100.5 requisitos de interoperabilidad; 100.6 uso/comunicación de información; 100.7 límites · versión: Texto consolidado consultado, actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial · comprobado: 2026-10-28
- [BOE: Directiva 2009/24/CE, versión codificada](https://www.boe.es/buscar/doc.php?id=DOUE-L-2009-80808) · Considerandos 13–16; 5 excepciones; 6 descompilación para interoperabilidad; 8 disposiciones legales y contractuales; 10 derogación; anexo II correspondencias · versión: Directiva de 23-04-2009, DOUE L111 de 05-05-2009. Se distingue de la Directiva 91/250 interpretada en Top System, cuyos artículos 5 y 6 se corresponden en la codificación · comprobado: 2026-10-28

Partida: `678e471f3c5f2ee328c7874937ffae5b1012de409f7e2b7edff1a34f0b8b2962` · propuesta: `d7f04c0790de0f4ef64a12c4c4ce1f6b2aa84f3b4ba71d838e33cddf2324f71e`
