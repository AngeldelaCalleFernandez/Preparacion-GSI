# GSI-EDITORIAL-039 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `e3e2658b1652f9c547ccf107aa354becb6b7ce8868daa9ad9a4da54703510e57`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P16-002

Decisión: pending_review · acción: revise.

Motivo: Mantener software libre comercial y clave C; comparar precio, soporte y alcance de copyleft sin universalizar una licencia.

### Antes

¿Cuál de estas afirmaciones sobre software libre es correcta?

- A. Debe entregarse siempre sin coste.
- B. Prohíbe cobrar por soporte.
- C. Puede ser comercial y venderse, siempre que se respeten las libertades y la licencia. **(correcta)**
- D. Obliga a que todo software que se ejecute junto a él sea libre.

Explicación: La libertad se refiere a uso, estudio, modificación y redistribución; no equivale a gratuidad.

### Propuesta

¿Cuál de estas afirmaciones sobre software libre es correcta?

- A. La libertad del programa se pierde si se cobra por entregar copias.
- B. El soporte de un programa libre debe prestarse sin remuneración.
- C. Puede venderse y ofrecer servicios respetando licencia y libertades. **(correcta)**
- D. La mera ejecución conjunta exige liberar otros programas instalados.

Explicación: Software libre describe libertades, no un precio obligatorio. Puede haber venta de copias y servicios remunerados. Deben respetarse las condiciones aplicables; convivir con otros programas no extiende por sí solo el copyleft a todos ellos.

- Error A: Cobrar por entregar copias no elimina por sí mismo las libertades concedidas a quien las recibe.
- Error B: El soporte puede prestarse mediante actividad económica. La GPL v3, por ejemplo, admite cobrar por soporte o garantía.
- Error D: Mera coexistencia o ejecución conjunta no equivale a obra derivada; las obligaciones concretas dependen de licencia y relación entre obras.

- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28

Partida: `56e8b84d9877b6e6c1d32ff2fb1b81e4ee6bb64c438a675e3c228d1d3aa65575` · propuesta: `1e2b64405a4d896f823053ac48d9d8d74fe3ab1f3b894e69c85899ca0ad587fb`

## MAN-GSI-P16-004

Decisión: pending_review · acción: revise.

Motivo: Mantener acceso al fuente como condición necesaria y clave D; distinguir acceso y permisos sin imponer GPL o dominio público.

### Antes

Para que la libertad de estudiar y modificar un programa sea efectiva, ¿qué es condición necesaria?

- A. Que el programa esté en dominio público.
- B. Que la licencia sea necesariamente GPL.
- C. Que el programa sea gratuito.
- D. Acceso al código fuente en una forma adecuada para modificarlo. **(correcta)**

Explicación: La FSF considera el acceso al código fuente condición necesaria para estudiar y modificar.

### Propuesta

Para que la libertad de estudiar y modificar un programa sea efectiva, ¿qué es condición necesaria?

- A. Una renuncia del titular que sitúe el programa en dominio público.
- B. La elección obligatoria de GNU GPL como licencia del programa.
- C. Una distribución de copias sin precio de adquisición para el usuario.
- D. El fuente en la forma adecuada para estudiarlo y realizar cambios. **(correcta)**

Explicación: Para estudiar y modificar de forma efectiva se necesita el código fuente en una forma adecuada para esos cambios. Además deben concederse las libertades correspondientes: acceso técnico al fuente es necesario, pero no convierte cualquier licencia restrictiva en libre.

- Error A: No es necesario que desaparezca el copyright; una licencia libre puede conceder las libertades conservando la titularidad.
- Error B: Hay distintas licencias libres. GPL es una de ellas, no la única vía para conceder estudio y modificación.
- Error C: El precio cero no proporciona por sí solo fuente ni permisos para estudiarlo y cambiarlo.

- [FSF: Free software teaching materials, FOSDEM 2025](https://archive.fosdem.org/2025/events/attachments/fosdem-2025-4438-free-software-teaching-materials/slides/238576/Presentat_xT8PmaJ.pdf) · Diapositiva 7, Handouts / The Four Freedoms: 0 uso, 1 estudio/cambio, 2 redistribución del original, 3 redistribución modificada y acceso al fuente · versión: Material de Miriam Bastian, FSF, FOSDEM 2025; texto de 17 páginas leído en el visor. Captura de la diapositiva no disponible por fallo del visor, sin atribuir revisión visual · comprobado: 2026-10-28
- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28

Partida: `8aadc53aa3ad7ae1057201ca734a38eea5c2617cdab6244701f36c539595c9d9` · propuesta: `fa7734310fbf46b1e5ee54575bbc48d123e379ead4624b4f16c3bed520d1742e`

## MAN-GSI-P16-005

Decisión: pending_review · acción: revise.

Motivo: Mantener numeración FSF y clave B; precisar copias sin modificar y cuatro etiquetas homogéneas, sin un distractor largo añadido.

### Antes

¿Qué libertad de software libre permite redistribuir copias del programa?

- A. La libertad 0.
- B. La libertad 2. **(correcta)**
- C. La libertad 1.
- D. La libertad 3 exclusivamente para versiones modificadas.

Explicación: La libertad 2 cubre redistribuir copias; la 3 se refiere a versiones modificadas.

### Propuesta

¿Qué libertad de la definición de software libre permite redistribuir copias del programa sin modificarlas?

- A. La libertad 0.
- B. La libertad 2. **(correcta)**
- C. La libertad 1.
- D. La libertad 3.

Explicación: La libertad 2 es redistribuir copias del programa original. La numeración identifica funciones distintas y no es una escala de importancia; la libertad 3 se refiere a compartir versiones modificadas.

- Error A: La libertad 0 es ejecutar el programa para cualquier propósito; no identifica la redistribución de copias originales.
- Error C: La libertad 1 permite estudiar y cambiar el programa, lo que requiere acceso al fuente.
- Error D: La libertad 3 se refiere a distribuir las propias versiones modificadas, distinta de la copia sin modificar que se pregunta.

- [FSF: Free software teaching materials, FOSDEM 2025](https://archive.fosdem.org/2025/events/attachments/fosdem-2025-4438-free-software-teaching-materials/slides/238576/Presentat_xT8PmaJ.pdf) · Diapositiva 7, Handouts / The Four Freedoms: 0 uso, 1 estudio/cambio, 2 redistribución del original, 3 redistribución modificada y acceso al fuente · versión: Material de Miriam Bastian, FSF, FOSDEM 2025; texto de 17 páginas leído en el visor. Captura de la diapositiva no disponible por fallo del visor, sin atribuir revisión visual · comprobado: 2026-10-28

Partida: `ac67581f68616d8adc29e6bba7300d91b24779ee7277d523e49073325663738a` · propuesta: `a3aae0a7bded6f7b1a41eb4797d4eff76a6f6e2bc4c89f3b7ecb1d39f7201992`

## MAN-GSI-P16-007

Decisión: pending_review · acción: revise.

Motivo: Mantener código visible frente a licencia libre y clave A; conservar el caso, retirando dependencia de las condiciones de una plataforma concreta.

### Antes

Un programa cuyo código puede verse en GitHub, pero cuya licencia prohíbe modificarlo, ¿es automáticamente software libre?

- A. No; ver el código no basta si faltan libertades esenciales. **(correcta)**
- B. Sí, porque source-available equivale a libre.
- C. Sí, si la descarga es gratuita.
- D. Sí, siempre que no tenga DRM.

Explicación: Código visible no implica por sí mismo una licencia libre u open source.

### Propuesta

Un programa tiene código accesible públicamente, pero su licencia no permite modificarlo. ¿Cómo debe interpretarse respecto a software libre?

- A. Código visible con restricciones incompatibles con la libertad de modificar. **(correcta)**
- B. Software libre porque publicarlo concede permiso para crear derivados.
- C. Software abierto porque no exige pagar para obtener una copia.
- D. Dominio público porque puede accederse al repositorio sin autorización.

Explicación: Una licencia que no permite modificar el programa no concede una de las libertades esenciales. Que el fuente sea visible no basta para clasificarlo como libre ni como open source según la OSD. Deben examinarse permisos y condiciones, no solo la ubicación o precio de descarga.

- Error B: La publicación técnica no sustituye el permiso de modificar; el supuesto dice que la licencia lo restringe.
- Error C: Obtener sin pagar no acredita libertades de modificación o redistribución.
- Error D: Acceder a un repositorio público no implica renuncia al copyright o paso al dominio público.

- [FSF: What is free software?](https://www.fsf.org/about/what-is-free-software) · Definición inicial: compartir, estudiar y modificar, libertad del usuario frente a restricciones propietarias · versión: Página pública de FSF consultada; definición de libertad, sin trasladar sus opiniones generales sobre productos a una evaluación técnica particular · comprobado: 2026-10-28
- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28

Partida: `479f380ba09e3b5524305a8950127b6ad005f7404ef6ba4aa3ec01ddfd9a24cf` · propuesta: `8ba821c2f936768810ddef7bd075b9c899914004b603732be21dc5d7b5a82840`

## MAN-GSI-P16-008

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegros enunciado y alternativas OSD, clave C: comparación ya pertinente y equilibrada; completar explicación de cada error.

### Antes

¿Qué afirma la Open Source Definition respecto al concepto “open source”?

- A. Basta con permitir la lectura del código fuente, aunque la licencia prohíba redistribuirlo, modificarlo o usarlo comercialmente.
- B. Cualquier programa distribuido gratuitamente es open source aunque solo se entregue el binario y se restrinja su reutilización.
- C. No se reduce a poder ver el código: las condiciones de distribución deben cumplir criterios adicionales. **(correcta)**
- D. Toda licencia aprobada por OSI debe imponer copyleft fuerte a la obra completa y a cualquier software que se relacione con ella.

Explicación: OSI exige criterios como redistribución, fuente, derivados y ausencia de discriminación, entre otros.

### Propuesta

¿Qué afirma la Open Source Definition respecto al concepto “open source”?

- A. Basta con permitir la lectura del código fuente, aunque la licencia prohíba redistribuirlo, modificarlo o usarlo comercialmente.
- B. Cualquier programa distribuido gratuitamente es open source aunque solo se entregue el binario y se restrinja su reutilización.
- C. No se reduce a poder ver el código: las condiciones de distribución deben cumplir criterios adicionales. **(correcta)**
- D. Toda licencia aprobada por OSI debe imponer copyleft fuerte a la obra completa y a cualquier software que se relacione con ella.

Explicación: La OSD exige un conjunto de condiciones de licencia, como redistribución, acceso al fuente y obras derivadas, junto con no discriminación y otros criterios. Leer el código no basta. La clasificación tampoco depende del precio ni exige que todas las licencias aprobadas adopten copyleft fuerte.

- Error A: Permitir lectura sin modificación, redistribución o uso por campos de actividad no satisface todos los criterios de la OSD.
- Error B: La gratuidad de un binario no concede por sí sola fuente y derechos de reutilización exigidos.
- Error D: OSI reconoce licencias permisivas y de copyleft; la OSD no obliga a extender copyleft fuerte a todo software relacionado.

- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant; inclusión de copyright y permiso en copias o partes sustanciales; disclaimer · versión: Identificador SPDX MIT, sin número de versión en la ficha; texto de licencia cotejado · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28

Partida: `b1843115e109486b6b0e470140cbc24136472f1a5d4ee8e0d29811cf0c639e99` · propuesta: `2da23f73ddf743166193e64257122eeaf09ea079d83245dbcd286d203ea2cb52`

## MAN-GSI-P16-010

Decisión: pending_review · acción: revise.

Motivo: Mantener solapamiento y diferencias de enfoque, clave A; inferencia comparativa de definiciones, sin afirmar identidad legal universal.

### Antes

¿Qué relación existe normalmente entre software libre y open source?

- A. Hay gran solapamiento práctico, aunque las definiciones y el énfasis filosófico no son idénticos. **(correcta)**
- B. Son categorías jurídicamente idénticas en todo caso.
- C. Todo open source es dominio público.
- D. El software libre nunca puede ser open source.

Explicación: Las comunidades comparten mucho software, pero no son conceptos filosóficamente idénticos.

### Propuesta

¿Qué relación existe normalmente entre software libre y open source?

- A. Definiciones con amplio solapamiento práctico y énfasis distintos. **(correcta)**
- B. Un régimen jurídico único determinado por la gratuidad de la descarga.
- C. Una renuncia al copyright aplicable en cualquiera de las dos categorías.
- D. Dos conjuntos de programas que no pueden compartir una misma licencia.

Explicación: Software libre y open source tienen amplio solapamiento práctico, pero sus definiciones y énfasis no se deben declarar idénticos en todos los casos. Se comparan las libertades y criterios concretos, no se crea por las etiquetas un régimen jurídico único ni una renuncia de derechos.

- Error B: La gratuidad no define ninguna de las dos categorías ni crea un régimen jurídico común.
- Error C: Las licencias pueden conservar copyright; no son por definición una renuncia al copyright ni un paso al dominio público.
- Error D: Muchas licencias y programas son reconocidos por ambas comunidades. La diferencia de énfasis no las hace conjuntos disjuntos.

- [FSF: Free software teaching materials, FOSDEM 2025](https://archive.fosdem.org/2025/events/attachments/fosdem-2025-4438-free-software-teaching-materials/slides/238576/Presentat_xT8PmaJ.pdf) · Diapositiva 7, Handouts / The Four Freedoms: 0 uso, 1 estudio/cambio, 2 redistribución del original, 3 redistribución modificada y acceso al fuente · versión: Material de Miriam Bastian, FSF, FOSDEM 2025; texto de 17 páginas leído en el visor. Captura de la diapositiva no disponible por fallo del visor, sin atribuir revisión visual · comprobado: 2026-10-28
- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28

Partida: `4f0ae5166525c92ab82bc6b05cdd3f0f8f9c1eedf75e832d023544f09a67edfa` · propuesta: `c9e4ab1d132a9e25e60dda0b398a2e520cd3366656c7874f43cb9b2d52e0a500`

## MAN-GSI-P16-011

Decisión: pending_review · acción: revise.

Motivo: Mantener distinción libre/gratuito y clave D; sustituir «trampa de examen» por la confusión conceptual concreta.

### Antes

¿Cuál de estas frases es una trampa de examen?

- A. “El software libre puede ser comercial”.
- B. “El acceso al fuente es necesario para estudiar y modificar”.
- C. “Una licencia establece derechos y condiciones”.
- D. “Si es gratuito, entonces es software libre”. **(correcta)**

Explicación: Gratis describe precio; libre describe libertades.

### Propuesta

¿Qué afirmación confunde el precio de adquisición con las libertades del software?

- A. Un programa libre puede venderse junto con servicios de soporte.
- B. Estudiar y modificar de forma efectiva exige disponer del fuente.
- C. La licencia establece permisos y condiciones para usar o distribuir.
- D. Descargar sin pagar implica poder modificar y redistribuir el programa. **(correcta)**

Explicación: Obtener una copia sin pagar solo informa de su precio de adquisición. No demuestra que el titular conceda permisos de modificación y redistribución ni que estén presentes las demás libertades. Hay software libre comercial y software no libre gratuito.

- Error A: Venta y soporte remunerado son compatibles con una licencia libre si se respetan sus condiciones.
- Error B: El fuente es necesario para esas libertades, aunque también deban existir los permisos correspondientes.
- Error C: Describir permisos y condiciones es función de la licencia; no debe confundirse con el precio de la copia.

- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28
- [BOE: Ley de Propiedad Intelectual, RDL 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Artículos 97, 99 y 100: titularidad, derechos de explotación y límites relativos a programas de ordenador · versión: Texto consolidado consultado, última actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial. Licencia no equivale a cesión íntegra o garantía técnica · comprobado: 2026-10-28

Partida: `25be6456a86656973ae16aa4b8a65db0c9ecade05000309adb293ff25e305efd` · propuesta: `3c471cee9f31a700233f0a7c4203848710f467d99c7716d6dece141218275e37`

## MAN-GSI-P16-012

Decisión: pending_review · acción: revise.

Motivo: Mantener caso de aplicación propietaria gratuita y clave B; alternativas sobre permisos, titularidad y fuente sin automatismos económicos.

### Antes

Una aplicación propietaria se ofrece sin coste a todos los ciudadanos. ¿Qué puede afirmarse?

- A. Pasa automáticamente a ser software libre.
- B. Puede seguir siendo propietaria aunque su precio sea cero. **(correcta)**
- C. Queda en dominio público.
- D. Su código debe publicarse obligatoriamente.

Explicación: Precio cero no altera por sí mismo el régimen de licencia.

### Propuesta

Una aplicación propietaria se ofrece sin coste a todos los ciudadanos. ¿Qué puede afirmarse?

- A. Los destinatarios pueden modificarlo por el hecho de no pagar la descarga.
- B. La licencia puede seguir restringiendo modificación y redistribución. **(correcta)**
- C. El titular pierde el copyright desde que empieza a ofrecer copias gratuitas.
- D. El titular debe entregar el fuente porque decidió no cobrar por las copias.

Explicación: Un programa puede seguir siendo propietario aunque se entregue sin coste. El precio no altera por sí solo la titularidad ni las condiciones de licencia. Hay que leer los permisos y considerar los límites legales aplicables, sin deducirlos de que la descarga sea gratuita.

- Error A: El precio cero no concede automáticamente permisos de modificación.
- Error C: Ofrecer copias gratuitas no equivale a renunciar al copyright.
- Error D: No cobrar no crea por sí solo una obligación general de entregar código fuente.

- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [BOE: Ley de Propiedad Intelectual, RDL 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Artículos 97, 99 y 100: titularidad, derechos de explotación y límites relativos a programas de ordenador · versión: Texto consolidado consultado, última actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial. Licencia no equivale a cesión íntegra o garantía técnica · comprobado: 2026-10-28

Partida: `759c2350ecb287eb9bd7359e2ed08fd8e36a3a2b3d999f17de781d46cc6db97f` · propuesta: `e2df3847ba361f7fb2cac1145c0a4ac3f2484b9d9ec8ca23bb0db66d0a189fcc`

## MAN-GSI-P16-013

Decisión: pending_review · acción: revise.

Motivo: Mantener propietario frente a comercial y clave D; cuatro caracterizaciones de dimensiones próximas, sin confundir precio y licencia.

### Antes

¿Cuál es una diferencia correcta entre “propietario” y “comercial”?

- A. Todo software comercial es propietario.
- B. Todo software propietario se vende.
- C. El software libre no admite actividad económica.
- D. No son sinónimos: puede haber software libre comercial y software propietario gratuito. **(correcta)**

Explicación: Modelo económico y libertades/licencia son dimensiones distintas.

### Propuesta

¿Cuál es una diferencia correcta entre “propietario” y “comercial”?

- A. Comercial designa licencias que impiden redistribuir derivados.
- B. Propietario designa programas por los que se paga un precio.
- C. Libre designa programas cuya distribución carece de actividad económica.
- D. Licencia y actividad comercial describen dimensiones distintas. **(correcta)**

Explicación: Propietario se refiere a restricciones de libertades o licencia; comercial, a actividad económica. Puede distribuirse software libre comercial y software propietario a precio cero. Ninguna de las dos etiquetas sustituye leer las condiciones concretas.

- Error A: La actividad comercial no determina por sí misma si se permiten derivados. Hay licencias libres que admiten venta.
- Error B: Un programa propietario puede entregarse gratis; su clasificación no nace del precio.
- Error C: La distribución libre puede formar parte de un negocio legítimo, con copias o servicios remunerados.

- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant; inclusión de copyright y permiso en copias o partes sustanciales; disclaimer · versión: Identificador SPDX MIT, sin número de versión en la ficha; texto de licencia cotejado · comprobado: 2026-10-28

Partida: `2f5fadb16abf6abc711a69f6a8566539fed834f6435e1e97435061f1a0e63fdf` · propuesta: `37127c5d18a3e7f4ca2d369e564f5d8dfe2f41b3e5f0a93e7af2f1648a4edf81`

## MAN-GSI-P16-014

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra comparación de licencia, control técnico, garantía y titularidad, clave B; completar derechos y límites sin equiparar licencia a cesión total.

### Antes

¿Qué describe mejor una licencia de software?

- A. Un control técnico que cifra el ejecutable e impide copiarlo, con independencia de los derechos jurídicos concedidos.
- B. El instrumento que fija facultades, condiciones y obligaciones de uso, copia, modificación o distribución según el caso. **(correcta)**
- C. Una certificación de calidad que garantiza ausencia de vulnerabilidades, soporte y adecuación del software a su finalidad.
- D. Un contrato que transmite necesariamente la propiedad intelectual completa al usuario cada vez que obtiene una copia.

Explicación: La licencia es jurídica; no debe confundirse con controles técnicos o calidad.

### Propuesta

¿Qué describe mejor una licencia de software?

- A. Un control técnico que cifra el ejecutable e impide copiarlo, con independencia de los derechos jurídicos concedidos.
- B. El instrumento que fija facultades, condiciones y obligaciones de uso, copia, modificación o distribución según el caso. **(correcta)**
- C. Una certificación de calidad que garantiza ausencia de vulnerabilidades, soporte y adecuación del software a su finalidad.
- D. Un contrato que transmite necesariamente la propiedad intelectual completa al usuario cada vez que obtiene una copia.

Explicación: Una licencia establece permisos y condiciones sobre el programa y sus usos, dentro del marco aplicable. No es una barrera técnica, una certificación de calidad ni una transmisión necesaria de toda la propiedad intelectual por recibir una copia. Los derechos y límites legales deben distinguirse de lo pactado.

- Error A: Un cifrado o control de copia es un mecanismo técnico; no es el instrumento jurídico que concede permisos.
- Error C: La licencia no garantiza ausencia de fallos o soporte. Las licencias pueden excluir garantías o existir acuerdos de servicio distintos.
- Error D: Obtener una copia no transmite necesariamente todos los derechos de autor. Uso de la copia y titularidad son cuestiones diferentes.

- [BOE: Ley de Propiedad Intelectual, RDL 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Artículos 97, 99 y 100: titularidad, derechos de explotación y límites relativos a programas de ordenador · versión: Texto consolidado consultado, última actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial. Licencia no equivale a cesión íntegra o garantía técnica · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant; inclusión de copyright y permiso en copias o partes sustanciales; disclaimer · versión: Identificador SPDX MIT, sin número de versión en la ficha; texto de licencia cotejado · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28

Partida: `801a3266e179448df7b3f3a6730d4c2692ddb22f525679919139aace2e197dae` · propuesta: `fdd966d0eed46b65d4d1afef9af70871fa4a96dfa854a3384297fffc51d0a96f`

## MAN-GSI-P16-016

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra formulación source-available y clave A, ya precisa y con distractores comparables; añadir justificaciones individuales.

### Antes

¿Qué significa “source-available” de forma prudente?

- A. Que el código puede estar disponible para consulta, pero hay que revisar la licencia para saber qué derechos se conceden. **(correcta)**
- B. Que mostrar el código convierte automáticamente la licencia en una licencia open source aprobada por OSI.
- C. Que cualquier usuario puede modificar, redistribuir y crear forks con cualquier finalidad aunque la licencia no lo permita.
- D. Que el titular renuncia al copyright y el código pasa al dominio público desde el momento en que puede consultarse.

Explicación: La disponibilidad del código no sustituye el análisis de la licencia.

### Propuesta

¿Qué significa “source-available” de forma prudente?

- A. Que el código puede estar disponible para consulta, pero hay que revisar la licencia para saber qué derechos se conceden. **(correcta)**
- B. Que mostrar el código convierte automáticamente la licencia en una licencia open source aprobada por OSI.
- C. Que cualquier usuario puede modificar, redistribuir y crear forks con cualquier finalidad aunque la licencia no lo permita.
- D. Que el titular renuncia al copyright y el código pasa al dominio público desde el momento en que puede consultarse.

Explicación: Source-available describe que se puede consultar el fuente, pero no determina por sí solo los permisos. Hace falta leer si la licencia concede uso, modificación y redistribución con condiciones compatibles con la categoría pretendida. Ni aprobación OSI ni dominio público se deducen de la visibilidad.

- Error B: OSI aplica criterios de licencia; mostrar código no produce aprobación automática.
- Error C: Los permisos deben resultar de la licencia y marco aplicable; no se presumen libertades ilimitadas por acceder al texto.
- Error D: Publicación y renuncia al copyright son actos distintos; la visibilidad no sitúa automáticamente una obra en dominio público.

- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28
- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [BOE: Ley de Propiedad Intelectual, RDL 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Artículos 97, 99 y 100: titularidad, derechos de explotación y límites relativos a programas de ordenador · versión: Texto consolidado consultado, última actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial. Licencia no equivale a cesión íntegra o garantía técnica · comprobado: 2026-10-28

Partida: `ea24f9ab86b0fb5d6dfcf9da9b9589c410b3b953d76ec51c852ba42229fe47a1` · propuesta: `9cbcd880f62109f76e2f93d763771c0c32e7d0c040f857dad5ed53d34d5bc591`

## MAN-GSI-P16-017

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de restricción sectorial, clave A; cuatro razonamientos comparables sin pista «no» frente a tres «sí».

### Antes

Una licencia que prohíbe utilizar el programa en un sector económico concreto, ¿encaja bien con la Open Source Definition?

- A. No, porque la OSD impide discriminar por campo de actividad. **(correcta)**
- B. Sí, si permite ver el código.
- C. Sí, si no cobra royalties.
- D. Sí, si la prohibición solo afecta a empresas.

Explicación: La no discriminación por campo de actividad es un criterio de la OSD.

### Propuesta

Una licencia que prohíbe utilizar el programa en un sector económico concreto, ¿encaja bien con la Open Source Definition?

- A. La restricción incumple la no discriminación por campo de actividad. **(correcta)**
- B. La disponibilidad del fuente compensa la restricción de actividad.
- C. La redistribución sin regalías hace admisible la restricción sectorial.
- D. La restricción es admisible si afecta a empresas y no a particulares.

Explicación: El criterio 6 de la OSD impide discriminar por campo de actividad, incluido uso empresarial. Una restricción sectorial de la licencia no se compensa con fuente accesible o ausencia de regalías: deben cumplirse los criterios conjuntamente.

- Error B: Acceso al fuente y no discriminación son requisitos distintos y deben cumplirse ambos.
- Error C: La redistribución sin regalías no elimina la restricción por campo de actividad.
- Error D: Restringir un sector empresarial sigue siendo discriminar por actividad; no se salva por dejar fuera a particulares.

- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28

Partida: `e28b1d9ca6ab6a07f6046d9b393629051d8ecc01337066021a94feb8e8356255` · propuesta: `547015d17e674447de00bee451a33494ddb94668d00d445ec79d1b9a548a8c0a`

## MAN-GSI-P16-018

Decisión: pending_review · acción: revise.

Motivo: Mantener las tres distinciones evaluadas y clave D; alternativas paralelas con las mismas dimensiones, sin «trampas» metacognitivas vagas.

### Antes

¿Qué opción contiene solo conceptos que conviene separar?

- A. GPL/AGPL como sinónimos exactos.
- B. Precio/licencia como la misma dimensión.
- C. Código fuente/binario como términos equivalentes.
- D. Libre/gratuito, open source/dominio público y licencia/DRM. **(correcta)**

Explicación: Estas parejas son trampas clásicas porque describen dimensiones distintas.

### Propuesta

¿Qué afirmación distingue correctamente libertad, dominio público y control técnico del software?

- A. Libre equivale a gratis; open source implica dominio público; licencia equivale a DRM.
- B. Libre equivale a gratis; open source conserva autoría; licencia equivale a DRM.
- C. Libre admite precio; open source implica dominio público; licencia equivale a DRM.
- D. Libre admite precio; open source no implica dominio público; licencia y DRM son distintos. **(correcta)**

Explicación: Libertades y precio son dimensiones distintas. Open source no implica ausencia de copyright; puede utilizar licencias que lo conservan. Una licencia concede permisos y condiciones, mientras DRM es una forma de control técnico. Esta comparación no decide por sí sola la licitud de eludir una medida concreta.

- Error A: Confunde las tres parejas: libertad no es gratuidad, código abierto no es dominio público y licencia no es control técnico.
- Error B: Conservar autoría es compatible con licencias abiertas, pero siguen siendo erróneas las equivalencias libre/gratis y licencia/DRM.
- Error C: Admitir un precio es compatible con software libre; las equivalencias open source/dominio público y licencia/DRM siguen siendo incorrectas.

- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28

Partida: `feb9baef43e0076bd2c220c111d108de2e92ea71ec1d22d29c46d42075e913de` · propuesta: `5f1809c5c93dfac274e2f735792fccfe07b6897542d8b0ae09c3dd2935feed5d`

## MAN-GSI-P16-019

Decisión: pending_review · acción: revise.

Motivo: Conservar caso de comparación para Administración y clave B; cuatro políticas de evaluación plausibles, sin presuponer compra o coste real.

### Antes

En una comparación para una Administración, ¿qué criterio es inadecuado?

- A. Evaluar TCO.
- B. Elegir “libre” únicamente porque se presupone coste de licencia cero. **(correcta)**
- C. Valorar soporte y comunidad.
- D. Revisar interoperabilidad y reversibilidad.

Explicación: El software libre no garantiza coste total cero; deben compararse costes y riesgos completos.

### Propuesta

En una comparación para una Administración, ¿qué criterio es inadecuado?

- A. Comparar adquisición, implantación, mantenimiento y salida de las soluciones.
- B. Descartar otros costes porque se presupone que una solución libre es gratuita. **(correcta)**
- C. Examinar soporte, evolución y sostenibilidad de la comunidad o proveedores.
- D. Valorar interoperabilidad y capacidad de migrar a otra solución o proveedor.

Explicación: Software libre no garantiza coste total cero. Una comparación necesita costes de implantación, adaptación, soporte, formación, operación y salida, además de adecuación y riesgos. Licencia, precio de adquisición y coste total deben evaluarse por separado, con datos del caso.

- Error A: Comparar las etapas del ciclo de vida aproxima el coste total, sin limitarse al precio de la copia.
- Error C: Soporte y sostenibilidad afectan a continuidad, costes y riesgos; son criterios pertinentes.
- Error D: Interoperabilidad y reversibilidad afectan a dependencia, migración y costes futuros; deben valorarse.

- [Comisión Europea, OSOR: Public Procurement of Open Source Software](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/public-procurement-open-source-software) · Quality and Vendor Evaluation; TCO con soporte, actualizaciones y salida; Public Buyer’s Checklist y evaluación de comunidad · versión: Guía pública consultada; criterios de comparación, sin tratar la página orientativa como ley española o recomendar una compra concreta · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28

Partida: `b515ad6d3911dafe5beb6b762b8b0edc69624dbaad1475441b2576d3d159c7cd` · propuesta: `cd78258336bfe3e8db904fc708fbbe3a4e17efe376e9849e97f8e70f91f2f3e4`

## MAN-GSI-P16-020

Decisión: pending_review · acción: revise.

Motivo: Mantener separación de planos y clave C; sustituir «comprensión del tema» por clasificación explícita de una solución.

### Antes

¿Qué enfoque demuestra mejor comprensión del tema?

- A. Clasificar todo solo como gratis o de pago.
- B. Asumir que código visible equivale a dominio público.
- C. Separar libertades, licencia, titularidad, modelo económico y mecanismo técnico. **(correcta)**
- D. Usar “open source”, “freeware” y “libre” como sinónimos.

Explicación: El tema exige discriminar planos jurídicos, económicos y técnicos.

### Propuesta

¿Qué enfoque permite clasificar con precisión una solución de software?

- A. Clasificar la licencia por el precio que se paga para descargar la copia.
- B. Clasificar la titularidad por poder leer el código en un repositorio público.
- C. Separar libertades, licencia, titularidad, modelo económico y controles técnicos. **(correcta)**
- D. Clasificar como sinónimos open source, freeware y cualquier programa gratuito.

Explicación: Clasificar requiere distinguir qué permisos se conceden, quién conserva derechos, cómo se distribuye o remunera y qué controles técnicos existen. Las etiquetas o el precio no resuelven todas esas dimensiones. La licencia concreta y su contexto importan más que una única etiqueta compuesta.

- Error A: El precio no determina permisos, condiciones o tipo de licencia.
- Error B: Leer el fuente no identifica por sí solo al titular ni prueba una renuncia de derechos.
- Error D: Freeware o gratuidad no implican las libertades y condiciones exigidas por open source o software libre.

- [FSFE: What is Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) · The Four Freedoms; Licences; Synonyms: libertad frente a precio, permisos y distinción de dominio público · versión: Página primaria de FSFE consultada; se distingue esta organización de FSF y sus textos, sin equiparar definiciones o énfasis filosóficos por una etiqueta · comprobado: 2026-10-28
- [OSI: Open Source Definition](https://opensource.org/osd) · Introducción y criterios 1 Free Redistribution, 2 Source Code, 3 Derived Works, 5/6 No Discrimination y 9 Other Software · versión: OSD versión 1.9, 22-03-2007; página con metadato de edición 16-02-2024. Criterios completos frente a mera visibilidad del código · comprobado: 2026-10-28
- [BOE: Ley de Propiedad Intelectual, RDL 1/1996](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) · Artículos 97, 99 y 100: titularidad, derechos de explotación y límites relativos a programas de ordenador · versión: Texto consolidado consultado, última actualización global publicada 30-03-2022; consolidación informativa distinta de publicación oficial. Licencia no equivale a cesión íntegra o garantía técnica · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28

Partida: `aa34d659384623c7d8f9da009bd25601c94c9863847727a563fdc86ffd842f7b` · propuesta: `cea99b1a2909768cb1f7bce80295c1563292e0fb17374c9ad4ff6ce332cc88ad`

## MAN-GSI-P16-022

Decisión: pending_review · acción: revise.

Motivo: Conservar íntegra clasificación MIT frente a AGPL/GPL/EUPL y clave D; explicar copyleft y compatibilidad sin equiparar todas las licencias.

### Antes

¿Cuál es un ejemplo habitual de licencia permisiva?

- A. AGPL-3.0.
- B. GPL-3.0.
- C. EUPL-1.2.
- D. MIT. **(correcta)**

Explicación: MIT es una licencia permisiva clásica.

### Propuesta

¿Cuál es un ejemplo habitual de licencia permisiva?

- A. AGPL-3.0.
- B. GPL-3.0.
- C. EUPL-1.2.
- D. MIT. **(correcta)**

Explicación: MIT permite amplios usos y redistribución, incluidas copias modificadas, sujetas a conservar los avisos exigidos. Se clasifica como permisiva. Las otras alternativas incorporan obligaciones de copyleft, con diferencias de alcance y compatibilidad; no se vuelven idénticas por compartir esa característica.

- Error A: AGPL v3 tiene copyleft y añade en su sección 13 una obligación para determinadas interacciones remotas de versiones modificadas.
- Error B: GPL v3 exige condiciones de licencia y fuente al distribuir obras cubiertas; no es una licencia permisiva como MIT.
- Error C: EUPL 1.2 incluye cláusula de copyleft y reglas de compatibilidad en su sección 5; esas reglas no la convierten en MIT.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant; inclusión de copyright y permiso en copias o partes sustanciales; disclaimer · versión: Identificador SPDX MIT, sin número de versión en la ficha; texto de licencia cotejado · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28
- [GNU AGPL versión 3, texto en OSI](https://opensource.org/license/agpl-v3) · 5 Conveying Modified Source Versions; 13 Remote Network Interaction; relación con GPL · versión: GNU AGPL v3, texto en OSI, redirige a /license/agpl-3.0; no es sinónimo exacto de GPL v3 · comprobado: 2026-10-28
- [European Union Public Licence 1.2, texto en OSI](https://opensource.org/license/eupl-1-2) · 5 Obligations of the Licensee: Copyleft clause, Compatibility clause y Provision of Source Code · versión: EUPL versión 1.2; redirige a /license/EUPL-1.2. Copyleft con reglas de compatibilidad, sin identificarlo como MIT o equiparar todas las licencias recíprocas · comprobado: 2026-10-28

Partida: `3461d162a12387ffe05de7bbcd0485e987a3e22f346314b4951044fa798b2f5d` · propuesta: `bd8950db8968c02084eaa638cb6d497e458869a297ba79501832ccb9e4ec07f9`

## MAN-GSI-P16-023

Decisión: pending_review · acción: revise.

Motivo: Mantener familia permisiva y clave C; distractores de familias de licencia próximas y variante BSD concreta en la explicación.

### Antes

¿Qué familia incluye ejemplos como BSD y MIT?

- A. Copyleft fuerte.
- B. DRM contractual.
- C. Licencias permisivas. **(correcta)**
- D. Dominio público necesariamente.

Explicación: BSD y MIT son referencias típicas de licencias permisivas.

### Propuesta

¿Qué familia incluye ejemplos como BSD y MIT?

- A. Licencias de copyleft fuerte.
- B. Licencias de copyleft débil.
- C. Licencias permisivas. **(correcta)**
- D. Licencias de uso no comercial.

Explicación: MIT y licencias BSD habituales, como BSD-3-Clause, se consideran permisivas: conceden amplios permisos sin exigir copyleft sobre el conjunto del derivado. Conservan obligaciones concretas, como avisos y, en BSD-3-Clause, límites de uso de nombres para promoción.

- Error A: El copyleft fuerte exige reciprocidad más amplia sobre obras cubiertas; no describe estas licencias permisivas.
- Error B: El copyleft débil mantiene reciprocidad en un ámbito delimitado; tampoco es la familia de MIT o BSD-3-Clause.
- Error D: MIT y BSD-3-Clause no limitan sus permisos al uso no comercial; vender o reutilizar exige respetar condiciones, no excluir negocio.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant; inclusión de copyright y permiso en copias o partes sustanciales; disclaimer · versión: Identificador SPDX MIT, sin número de versión en la ficha; texto de licencia cotejado · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1, 2 y 3: avisos en fuente/binario y no promoción con nombres sin permiso · versión: BSD de tres cláusulas, identificador SPDX BSD-3-Clause; no se extrapolan todos sus detalles a cualquier variante BSD · comprobado: 2026-10-28
- [GNU GPL versión 3, texto en OSI](https://opensource.org/license/gpl-3-0) · Preámbulo; 1 Source Code; 2 Basic Permissions; 3 Technical Measures; 4 Conveying Verbatim Copies; 5 Modified Source y aggregate · versión: GNU GPL v3, texto de la licencia publicada por FSF reproducido en OSI; redirige a /license/gpl-3.0. No se afirma lectura del servidor GNU que agotó el tiempo · comprobado: 2026-10-28

Partida: `2a9e675488d90f063cb1479213bb7c12fa359981fce6971eb6ac86bfa067d5c0` · propuesta: `315c5a90aabfa134e212e37bdea488f3b001f7cab9a3b17456a9761e22e2c434`

## MAN-GSI-P16-024

Decisión: pending_review · acción: revise.

Motivo: Mantener cumplimiento de condiciones MIT/BSD y clave A; microcaso de distribución que hace pertinente distinguir avisos y copyleft.

### Antes

¿Qué debe hacerse antes de reutilizar código MIT o BSD en un producto?

- A. Leer y cumplir sus avisos y condiciones; “permisiva” no significa “sin obligaciones”. **(correcta)**
- B. Suprimir siempre todos los avisos de copyright.
- C. Relicenciar el código original como propietario eliminando atribución.
- D. Asumir que no existe copyright.

Explicación: Las permisivas suelen exigir conservar avisos/licencia u otras condiciones concretas.

### Propuesta

Un equipo incorpora componentes MIT y BSD-3-Clause a un producto que distribuirá. ¿Cómo debe tratar sus licencias?

- A. Revisar condiciones y conservar los avisos exigidos para esa distribución. **(correcta)**
- B. Eliminar los avisos de los componentes por integrarlos en un producto propio.
- C. Publicar el código del producto por una obligación general de copyleft.
- D. Tratar los componentes como dominio público por tener una licencia permisiva.

Explicación: Permisiva no significa sin condiciones. MIT exige conservar avisos de copyright y permiso en copias o partes sustanciales. BSD-3-Clause distingue avisos en distribución fuente y binaria y prohíbe usar nombres para promoción sin permiso. Hay que revisar la licencia exacta y la forma de distribución.

- Error B: La integración no elimina las obligaciones de conservar los avisos que correspondan.
- Error C: MIT y BSD-3-Clause no imponen por sí mismas un copyleft general del producto; pueden existir otras obligaciones por otros componentes.
- Error D: Una licencia permisiva concede derechos bajo condiciones, sin presumir ausencia de copyright.

- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant; inclusión de copyright y permiso en copias o partes sustanciales; disclaimer · versión: Identificador SPDX MIT, sin número de versión en la ficha; texto de licencia cotejado · comprobado: 2026-10-28
- [OSI: BSD-3-Clause](https://opensource.org/license/bsd-3-clause) · Redistribution and use; condiciones 1, 2 y 3: avisos en fuente/binario y no promoción con nombres sin permiso · versión: BSD de tres cláusulas, identificador SPDX BSD-3-Clause; no se extrapolan todos sus detalles a cualquier variante BSD · comprobado: 2026-10-28

Partida: `8f3ee0cd3d838f0b84ffefe7ac18be8f48b54f86ae7fee5c19b8cbee9ed1b8de` · propuesta: `c0e910628d139e7956d9aa908d23cc05c093d54e2667a7b16467dd53ebc8d620`

## MAN-GSI-P16-025

Decisión: pending_review · acción: revise.

Motivo: Mantener concesión expresa de patentes y clave C; precisar contribuyentes, alcance y terminación, sin garantía universal frente a patentes.

### Antes

¿Qué afirmación sobre Apache License 2.0 es correcta?

- A. No concede ningún derecho de copyright.
- B. Es copyleft fuerte idéntico a GPL.
- C. Incluye una concesión explícita de licencia de patentes bajo sus condiciones. **(correcta)**
- D. Prohíbe uso comercial.

Explicación: Apache-2.0 contiene tanto concesión de copyright como una concesión expresa de patentes.

### Propuesta

¿Qué afirmación sobre Apache License 2.0 es correcta?

- A. Excluye la concesión de copyright y solo permite ejecutar el binario.
- B. Obliga a publicar bajo Apache todo código que se enlace con la obra.
- C. Concede ciertos derechos de patente de los contribuyentes bajo condiciones. **(correcta)**
- D. La autorización de uso se limita a finalidades no comerciales.

Explicación: La sección 3 de Apache-2.0 concede una licencia expresa sobre determinadas reivindicaciones de patente licenciables por cada contribuyente, dentro del alcance definido. Incluye terminación ante la litigación descrita en esa sección. No cubre todas las patentes del mundo ni sustituye examinar alcance y condiciones.

- Error A: La sección 2 concede derechos de copyright; no se limita a permitir ejecutar un binario.
- Error B: La licencia no impone ese copyleft general; define obras derivadas y permite condiciones distintas para modificaciones con respeto a sus requisitos.
- Error D: Sus permisos incluyen actividades comerciales dentro de las condiciones; no reserva el uso a fines no comerciales.

- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Grant of Patent License y terminación; 4 Redistribution; 6 Trademarks; 7 Disclaimer · versión: Versión 2.0, enero de 2004. El inglés es el texto autoritativo según ASF; concesión de patentes limitada a supuestos de la sección 3 · comprobado: 2026-10-28

Partida: `ac57325396f0d8f0c5fa25140ecab2c4f1ba6120d20ddbcce7b30997f76c951f` · propuesta: `bda52eaff13a29bfcc339839aceaa0b64404cafb17b67f8f5b3cd11400431b0b`

## MAN-GSI-P16-026

Decisión: pending_review · acción: revise.

Motivo: Mantener diferencia textual de patentes Apache/MIT y clave A; no deducir que MIT excluya cualquier posible derecho implícito de patente.

### Antes

¿Qué distingue de forma útil Apache-2.0 frente a una descripción mínima de MIT?

- A. Apache-2.0 regula expresamente cuestiones de patentes con más detalle. **(correcta)**
- B. Apache-2.0 impide crear obras derivadas.
- C. MIT obliga a publicar fuente de cualquier derivado.
- D. MIT es una licencia de contenido, no de software.

Explicación: Para examen, la concesión explícita de patentes de Apache-2.0 es una diferencia relevante.

### Propuesta

¿Qué diferencia textual resulta relevante al comparar Apache License 2.0 y la licencia MIT?

- A. Apache-2.0 contiene una cláusula expresa de patentes; MIT no la detalla. **(correcta)**
- B. Apache-2.0 impone copyleft fuerte y MIT obliga a publicar todo derivado.
- C. Apache-2.0 prohíbe vender las copias, mientras MIT permite venderlas.
- D. Apache-2.0 concede derechos de copyright y MIT no concede ese permiso.

Explicación: Apache-2.0 dedica su sección 3 a una concesión expresa de patentes y sus condiciones. El texto MIT es más breve y no contiene una cláusula de patentes equivalente. Esa comparación textual no resuelve por sí sola derechos implícitos, titularidad o litigios de patente de un caso concreto.

- Error B: No describe estas licencias: son permisivas y no imponen una obligación general de publicar todo derivado.
- Error C: Ambas admiten actividad comercial respetando sus condiciones; Apache-2.0 no prohíbe por principio vender copias.
- Error D: MIT también concede derechos como copia, modificación, distribución y venta bajo sus condiciones.

- [Apache Software Foundation: Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) · 1 Definitions; 2 Grant of Copyright License; 3 Grant of Patent License y terminación; 4 Redistribution; 6 Trademarks; 7 Disclaimer · versión: Versión 2.0, enero de 2004. El inglés es el texto autoritativo según ASF; concesión de patentes limitada a supuestos de la sección 3 · comprobado: 2026-10-28
- [OSI: The MIT License](https://opensource.org/license/mit) · Permission grant; inclusión de copyright y permiso en copias o partes sustanciales; disclaimer · versión: Identificador SPDX MIT, sin número de versión en la ficha; texto de licencia cotejado · comprobado: 2026-10-28

Partida: `57870fd45950efc0b539af610e0df496f35791de346be590d3808803eed89a5c` · propuesta: `84dc0f1aadeefaeda386064bb606f6398c45d3766bd98721ff6b0b155fbdd4c7`
