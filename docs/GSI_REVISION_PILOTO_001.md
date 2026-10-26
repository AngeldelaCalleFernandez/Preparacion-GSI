# GSI-EDITORIAL-001 — revisión aplicada

Preparado: 2026-10-26. Preguntas: 20.

**Aceptación humana registrada: Propietario del proyecto (usuario de este chat) · 2026-10-26. Lote aplicado localmente.**

Hash del lote: `9ef7e9e1ebaf5ffb1aaed76f3213baac8779fc90a52f7d262f697ea9315f1d5b`. Se conserva el hash de la propuesta aprobada; las decisiones efectivas están en el recibo de aceptación.

## MAN-GSI-P15-075

Decisión: accepted · acción: revise.

Motivo: Conservar los distractores funcionalmente próximos y explicar cada confusión.

### Antes

¿Qué es model binding?

- A. El proceso que selecciona un endpoint comparando la URL y el método HTTP con las plantillas de ruta registradas.
- B. La comprobación de reglas y atributos aplicada al modelo ya construido para detectar entradas no válidas.
- C. El proceso de obtener datos de la petición y construir/asignar parámetros u objetos del modelo de entrada. **(correcta)**
- D. La resolución de servicios registrados para inyectar las dependencias requeridas por controladores y otros componentes.

Explicación: El proceso de obtener datos de la petición y construir/asignar parámetros u objetos del modelo de entrada. Binding transforma fuentes HTTP en valores que las acciones/endpoints pueden usar.

### Propuesta

¿Qué es model binding?

- A. El proceso que selecciona un endpoint comparando la URL y el método HTTP con las plantillas de ruta registradas.
- B. La comprobación de reglas y atributos aplicada al modelo ya construido para detectar entradas no válidas.
- C. El proceso de obtener datos de la petición y construir/asignar parámetros u objetos del modelo de entrada. **(correcta)**
- D. La resolución de servicios registrados para inyectar las dependencias requeridas por controladores y otros componentes.

Explicación: El model binding obtiene valores de la petición y los convierte en parámetros o propiedades del modelo de entrada. La validación comprueba después las reglas del modelo.

- Error A: Seleccionar el endpoint es responsabilidad del routing; no construye el modelo de entrada.
- Error B: Comprobar reglas corresponde a validación; se realiza sobre los datos vinculados al modelo.
- Error D: La inyección de dependencias resuelve servicios registrados; no convierte datos de la petición en el modelo.

- [Microsoft: Model Binding in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding?view=aspnetcore-10.0) · What is Model binding; Model binding and validation · versión: ASP.NET Core 10.0 · comprobado: 2026-10-26

Partida: `c021bb2447ba60d9d8bbc24c271fddaf1eb2465113300350b12449f1994dd864` · propuesta: `7ead640d84b1b6913e7d31a6d4d127f6d3eabb3ec3040fb64b530d701c5d364f`

## MAN-GSI-P17-095

Decisión: accepted · acción: revise.

Motivo: Sustituir distractores sobre MMU y cuentas por confusiones con primitivas de sincronización.

### Antes

¿Qué permite un semáforo de conteo?

- A. Forzar que se ejecute un único hilo en todo el sistema, aunque existan recursos independientes y varios permisos disponibles.
- B. Controlar acceso concurrente a un número limitado de recursos o señalizar disponibilidad. **(correcta)**
- C. Sustituir la MMU y traducir por software todas las direcciones virtuales a marcos físicos antes de permitir un acceso concurrente.
- D. Crear y eliminar cuentas del sistema operativo según aumenta o disminuye el número de recursos disponibles para los procesos.

Explicación: Su contador representa unidades disponibles o eventos según diseño.

### Propuesta

¿Qué permite un semáforo de conteo?

- A. Garantizar exclusión mutua con propiedad del bloqueo y liberación reservada al hilo que lo adquirió.
- B. Gestionar permisos para limitar accesos concurrentes a recursos o señalizar su disponibilidad. **(correcta)**
- C. Bloquear al grupo hasta que todos los participantes alcancen el mismo punto de sincronización.
- D. Conservar en una cola los datos enviados entre productores y consumidores para su lectura posterior.

Explicación: El contador representa permisos disponibles: adquirir consume un permiso y liberar lo devuelve. Con varios permisos permite acceso concurrente limitado; un semáforo no exige propiedad del hilo.

- Error A: Describe la propiedad característica de ciertos bloqueos; un semáforo puede liberarse desde otro hilo.
- Error C: La reunión de un grupo en un punto describe una barrera, no un contador de permisos.
- Error D: Una cola transporta elementos; el semáforo cuenta permisos, aunque pueda coordinar el uso de una cola.

- [Oracle: Semaphore](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/Semaphore.html) · Class description; acquire; release; ownership · versión: Java SE 25 · comprobado: 2026-10-26

Partida: `7252e48554cf7b647edc5ba4c8d9fa22cc0ab2de440315f7bf3ba5a2c16b53ef` · propuesta: `3d7a362c38b8b56f30eaae5ccb284e4c975ad852658f7210187182045ab14274`

## MAN-GSI-P16-155

Decisión: accepted · acción: revise.

Motivo: Comparar estrategias de cumplimiento plausibles y explicitar la dependencia de versiones y forma de combinación.

### Antes

Una aplicación usa MIT, Apache-2.0, GPL y componentes propietarios. ¿Qué enfoque es correcto?

- A. Decir que todo es MIT porque es la licencia más permisiva.
- B. Analizar cada componente, su forma de combinación/distribución y compatibilidad; no clasificar la aplicación por una sola etiqueta. **(correcta)**
- C. Decir que todo es propietario porque existe un componente cerrado.
- D. Ignorar versiones y arquitectura.

Explicación: Los sistemas reales son composiciones y el cumplimiento se evalúa por componentes/relaciones.

### Propuesta

Una aplicación usa MIT, Apache-2.0, GPL y componentes propietarios. ¿Qué enfoque es correcto?

- A. Aplicar la licencia más permisiva a la distribución completa, manteniendo solo los avisos que esa licencia exige.
- B. Examinar licencias, versiones y forma de combinación o distribución de cada componente antes de decidir la compatibilidad. **(correcta)**
- C. Aplicar la licencia del componente propietario al conjunto, conservando los demás únicamente en un inventario interno.
- D. Considerar compatibles las licencias citadas por permitir uso comercial, sin distinguir enlace, distribución o versión de GPL.

Explicación: La coexistencia de componentes no determina una licencia única. Deben examinarse permisos y obligaciones de cada versión y la forma de combinación y distribución, incluidas las condiciones de copyleft.

- Error A: Una licencia permisiva no elimina las obligaciones de los otros componentes.
- Error C: Incluir código propietario no permite cambiar unilateralmente las condiciones del código recibido.
- Error D: Permitir uso comercial no resuelve la compatibilidad; versiones, enlace y distribución pueden cambiar el análisis.

- [GNU: preguntas frecuentes de licencias](https://www.gnu.org/licenses/gpl-faq.en.html#GPLIncompatibleLibs) · GPLIncompatibleLibs; GPLModuleLicense; LicenseCompatibility · versión: Documento consultado · comprobado: 2026-10-26
- [Apache License](https://www.apache.org/licenses/LICENSE-2.0) · Apartados 1 y 4: definiciones y redistribución · versión: 2.0 · comprobado: 2026-10-26
- [OSI: MIT License](https://opensource.org/license/mit) · Permiso y condición de conservación del aviso · versión: MIT · comprobado: 2026-10-26

Partida: `4dc6aad9055c7bf6282130207782b3e845ece656f3ed91cd09f796c0544afa4a` · propuesta: `eaabb22dcecbc0c8cf5db9f69039d23d0b2a69fdc57d2e5eeb759e018f6ed8ab`

## MAN-GSI-P14-014

Decisión: accepted · acción: revise.

Motivo: Mantener la evaluación conceptual del artículo 55.2 con alternativas paralelas sobre derechos y garantías, sin concentrar las condiciones en la correcta.

### Antes

¿Qué afirmación sobre la suspensión individual del artículo 55.2 es correcta?

- A. Permitir que una autoridad administrativa suspenda cualquier derecho del Título I, sin intervención judicial ni determinación individual.
- B. Aplicarse exclusivamente durante el estado de sitio y desaparecer como posibilidad constitucional fuera de esa declaración general.
- C. Comprender exactamente los mismos derechos y requisitos que la suspensión general, sin especialidades por sujeto o investigación.
- D. Puede afectar a derechos concretos de los artículos 17.2, 18.2 y 18.3 para personas determinadas en investigaciones vinculadas a bandas armadas o terrorismo, con garantías. **(correcta)**

Explicación: La suspensión individual tiene objeto, derechos y garantías propios; no coincide con la general.

### Propuesta

Para personas determinadas investigadas por actuaciones de bandas armadas o elementos terroristas, ¿qué combinación de derechos y garantías corresponde a la suspensión individual del artículo 55.2 de la Constitución?

- A. Arts. 17.2, 18.2 y 18.3; autorización administrativa y control parlamentario, sin intervención judicial.
- B. Arts. 17.2, 18.2 y 18.3; intervención judicial y control parlamentario, previa declaración de excepción o sitio.
- C. Arts. 17.2, 18.2 y 21.1; intervención judicial y control parlamentario, con desarrollo mediante ley orgánica.
- D. Arts. 17.2, 18.2 y 18.3; intervención judicial y control parlamentario, con desarrollo mediante ley orgánica. **(correcta)**

Explicación: El artículo 55.2 permite que una ley orgánica determine los casos y la forma de suspensión individual de los derechos de los artículos 17.2, 18.2 y 18.3. Exige intervención judicial y control parlamentario, dentro de las investigaciones descritas.

- Error A: La intervención judicial es una garantía necesaria; una autorización administrativa no la sustituye.
- Error B: La declaración de excepción o sitio pertenece al régimen de suspensión general del apartado 1; no es el requisito del régimen individual del apartado 2.
- Error C: El artículo 55.2 incluye el secreto de las comunicaciones del artículo 18.3, no el derecho de reunión del artículo 21.1.

- [Constitución Española](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a55) · Artículo 55, apartados 1 y 2 · versión: Texto consolidado consultado · comprobado: 2026-10-26

Partida: `33032fc8b7f051a4e5b528b650391aca2c8fae321eb64b0a82ba3905842244af` · propuesta: `1911b4b4e3c8585fb350f6e46f5492d60a8045da2e382ce3037ee24e0566c4f5`

## AI-GSI-B2-T06-015

Decisión: accepted · acción: revise.

Motivo: Aplicar la idempotencia a una repetición de DELETE con respuestas distintas; separar efecto solicitado, seguridad y efectos auxiliares.

### Antes

¿Qué significa que DELETE sea idempotente en su efecto deseado?

- A. Debe devolver siempre el mismo código
- B. Repetirlo busca el mismo estado final aunque las respuestas puedan variar **(correcta)**
- C. Solo puede enviarse una vez
- D. No produce ningún efecto

Explicación: Idempotencia se refiere al efecto deseado repetido, no a ausencia de efectos ni igualdad literal de respuestas.

### Propuesta

Una API elimina un recurso con DELETE y responde 204. Una petición idéntica posterior recibe 404 porque el recurso ya no existe. ¿Qué afirmación es correcta sobre la idempotencia de este comportamiento?

- A. Para ser idempotente, la repetición tendría que devolver también 204 y el mismo cuerpo de respuesta.
- B. El cambio de respuesta es compatible con la idempotencia si se mantiene el mismo efecto solicitado sobre el recurso. **(correcta)**
- C. El caso convierte DELETE en un método seguro, porque la segunda petición ya no modifica el recurso.
- D. La idempotencia exige que el servidor omita también los registros de actividad de la petición repetida.

Explicación: La idempotencia compara el efecto solicitado al repetir peticiones idénticas, no sus respuestas. El recurso permanece eliminado tras ambas peticiones: recibir después 404 es compatible con esa propiedad y no convierte DELETE en un método seguro.

- Error A: El RFC permite que las respuestas a repeticiones difieran; no exige reproducir el código ni el cuerpo de la primera.
- Error C: Un método seguro no solicita un cambio de estado. DELETE sí lo solicita, aunque un recurso ya eliminado no cambie al repetir la petición.
- Error D: El servidor puede registrar cada petición por separado. La idempotencia se refiere al efecto solicitado sobre el recurso, no a eliminar todos los efectos auxiliares.

- [IETF: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2) · 9.2.2 Idempotent Methods; 9.3.5 DELETE · versión: RFC 9110, junio 2022 · comprobado: 2026-10-26

Partida: `b59d8bd8f8f136f12256690c0cb4cf71caaded35dbfca0eda4a16a19a17c03c0` · propuesta: `cfa940f1226a58cfb6a8976a6b59db1691b170e0699aebde0932ee62c11831ab`

## AI-GSI-B2-T06-012

Decisión: accepted · acción: revise.

Motivo: Usar responsabilidades cercanas del ecosistema de servicios como distractores.

### Antes

¿Qué aporta WS-Security al ecosistema SOAP?

- A. Normalización relacional
- B. Solo maquetación de formularios
- C. Seguridad de mensajes, con firmas, cifrado y tokens según perfil **(correcta)**
- D. Asignación de direcciones IP

Explicación: WS-Security aplica mecanismos a mensajes; no describe redes ni presentación.

### Propuesta

¿Qué aporta WS-Security al ecosistema SOAP?

- A. Describir operaciones y tipos del servicio para que el cliente genere un contrato de invocación.
- B. Proteger el canal de transporte mediante TLS, sin mecanismos dentro del mensaje SOAP.
- C. Proteger mensajes SOAP con firmas, cifrado y tokens de seguridad según el perfil empleado. **(correcta)**
- D. Coordinar la confirmación o reversión de transacciones distribuidas entre varios servicios.

Explicación: WS-Security define mecanismos de seguridad del mensaje SOAP: integridad, confidencialidad y asociación de tokens. Su uso concreto depende del perfil y de la política de seguridad.

- Error A: La descripción del contrato corresponde a WSDL, no a los mecanismos de protección de WS-Security.
- Error B: TLS protege el transporte; WS-Security incorpora mecanismos en el mensaje y puede complementarlo.
- Error D: Coordinar transacciones es otra responsabilidad del ecosistema WS-*, no la función de WS-Security.

- [OASIS: SOAP Message Security](https://docs.oasis-open.org/wss-m/wss/v1.1.1/os/wss-SOAPMessageSecurity-v1.1.1-os.html) · 3 Message Protection Mechanisms; 6 Security Tokens; 8 Signatures; 9 Encryption · versión: 1.1.1, OASIS Standard, 18 mayo 2012 · comprobado: 2026-10-26

Partida: `742caafbce6abaf86fab82a4c05ce53354387a526a05403acf74eb4082372f82` · propuesta: `35d4d540faf68ccb27f2ddaed68adf37eaec33e93250c116bc4a9f95ce9756eb`

## AI-GSI-B2-T10-019

Decisión: accepted · acción: revise.

Motivo: Comparar funciones del ENS sin confundir categoría, amenaza y selección de medidas.

### Antes

¿Qué diferencia categorización ENS y análisis de riesgos?

- A. El análisis se limita al tamaño del servidor
- B. La categoría deriva del impacto; el análisis profundiza en amenazas, controles y residual **(correcta)**
- C. Son exactamente el mismo cálculo
- D. La categoría sustituye todo inventario

Explicación: Ambos procesos están relacionados, pero responden a funciones diferentes.

### Propuesta

¿Qué diferencia categorización ENS y análisis de riesgos?

- A. La categoría depende de la probabilidad de cada amenaza; el análisis fija el impacto institucional.
- B. La categoría se basa en el impacto; el análisis examina riesgos y permite justificar su tratamiento. **(correcta)**
- C. La categoría identifica el riesgo residual; el análisis asigna los niveles de las dimensiones de seguridad.
- D. La categoría determina una lista definitiva de medidas; el análisis se limita a comprobar su instalación.

Explicación: El anexo I fundamenta la categoría en el impacto sobre información y servicios. El artículo 14 exige analizar y tratar riesgos y justificar medidas proporcionadas; categorizar no sustituye esa gestión.

- Error A: Intercambia las funciones: la probabilidad de amenazas no es la base de categorización del anexo I.
- Error C: La categoría no es una medida del riesgo residual tras aplicar controles.
- Error D: Las medidas deben justificarse frente a los riesgos; la gestión no se reduce a verificar instalaciones.

- [Esquema Nacional de Seguridad](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Artículo 14 y anexo I: categorías de seguridad · versión: Real Decreto 311/2022, texto consolidado consultado · comprobado: 2026-10-26

Partida: `10a6638adf4c93e71ea720f6ce9791351bc34e2d599ef45f1791a877a2ec7e91` · propuesta: `9e11b9e776eea0367e36da232946b7f84600fc4f8e2c881e9945636c7faaa0b1`

## AI-GSI-B2-T13-001

Decisión: accepted · acción: revise.

Motivo: Evaluar continuidad eléctrica con un microcaso de arranque del grupo electrógeno y distinguir reserva de energía, acondicionamiento, redundancia y conmutación.

### Antes

¿Qué medida protege frente a interrupciones eléctricas y requiere pruebas de autonomía?

- A. WAF exclusivamente
- B. Firma digital
- C. SAI y alimentación de respaldo planificada **(correcta)**
- D. Índice B+

Explicación: La continuidad eléctrica necesita dimensionamiento, mantenimiento y pruebas; una barrera lógica no la sustituye.

### Propuesta

Un CPD necesita mantener encendidos sus servidores durante el intervalo entre un corte eléctrico y la entrada en servicio del grupo electrógeno. ¿Qué medida debe dimensionarse y probarse con la carga prevista para cubrir ese intervalo?

- A. Instalar un regulador automático de tensión convencional para estabilizar la salida de la acometida.
- B. Instalar fuentes de alimentación redundantes en los servidores, conectadas a la misma acometida.
- C. Instalar un SAI con baterías para alimentar los servidores hasta que el grupo esté disponible. **(correcta)**
- D. Instalar un conmutador automático que transfiera la carga al grupo cuando este esté disponible.

Explicación: El SAI aporta la energía durante el intervalo sin suministro. Su potencia y autonomía deben ser suficientes para la carga prevista hasta que el grupo pueda asumirla. La existencia de un grupo no elimina la necesidad de cubrir su tiempo de arranque.

- Error A: Regular la tensión no aporta energía cuando la acometida deja de suministrarla; falta reserva para el intervalo.
- Error B: Dos fuentes sobre la misma acometida pierden su suministro al producirse ese corte; la redundancia de fuentes no añade autonomía.
- Error D: El conmutador selecciona una fuente disponible, pero no almacena la energía necesaria mientras el grupo todavía no suministra.

- [ENS: instalaciones](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Anexo II, 5.1.4 Energía eléctrica [mp.if.4], refuerzo R1 · versión: Real Decreto 311/2022, texto consolidado consultado · comprobado: 2026-10-26
- [Eaton: UPS battery backup buying guide](https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/ups-buying-guide-for-idf-network-closets-.html) · Understand your battery runtime needs: autonomía según carga y respaldo inmediato hasta el suministro del generador · versión: None · comprobado: 2026-10-26

Partida: `dd7374acfad4e38b8958f08a1dae9f971abb7b6cd1dbd26986b818de4d396a37` · propuesta: `c9335c80997b8a20e23a515172dfaf5047d0af411a6f5c5fe99aa30c8d94d69f`

## AI-GSI-B2-T15-001

Decisión: accepted · acción: revise.

Motivo: Explicitar el carácter obligatorio del requisito y evitar compensarlo con precio.

### Antes

Una alternativa incumple un requisito legal obligatorio, pero es muy barata. ¿Cómo debe tratarse?

- A. Como equivalente a todas las demás
- B. Como viable sin revisar la restricción
- C. Como ganadora automática por precio
- D. Como incumplimiento eliminatorio, no compensable solo con puntuación económica **(correcta)**

Explicación: Los requisitos obligatorios no se compensan como criterios ponderables.

### Propuesta

Una oferta incumple una prescripción obligatoria de los pliegos y no se admite una variante que la exceptúe. ¿Cómo debe valorarse su precio reducido?

- A. Compensando el incumplimiento con una mayor puntuación en el criterio económico.
- B. Admitiendo la oferta y aplazando el cumplimiento al momento de la adjudicación.
- C. Otorgando prioridad a su evaluación por mejorar el coste total previsto del contrato.
- D. Sin compensar el incumplimiento: el precio no convierte en admisible una oferta que contraviene esa prescripción. **(correcta)**

Explicación: Las proposiciones deben ajustarse a los pliegos. En el supuesto descrito, un precio menor no compensa el incumplimiento de una prescripción obligatoria ni lo transforma en un criterio ponderable.

- Error A: Ponderar precio entre ofertas admisibles no permite sustituir una condición obligatoria.
- Error B: La hipótesis no permite aplazar el requisito: la oferta debe ajustarse a los pliegos.
- Error C: El ahorro no elimina el examen previo de admisibilidad de la oferta.

- [Ley de Contratos del Sector Público](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a139) · Artículo 139.1: ajuste de las proposiciones a los pliegos · versión: Ley 9/2017, texto consolidado consultado · comprobado: 2026-10-26

Partida: `9199336400b0882c090ac843980749c4aa12146b4cd51147f031f5ecdb799fd3` · propuesta: `b2ac836f6933931e6b1370b09181fc13a77a033a0173016d14ae0d7adf770d5d`

## AI-GSI-B3-T01-002

Decisión: accepted · acción: revise.

Motivo: Distinguir organización del ciclo y prácticas de trabajo sin caricaturizar las metodologías.

### Antes

¿Qué distingue un modelo de ciclo de vida de una metodología?

- A. El modelo establece etapas y relaciones; la metodología concreta cómo trabajar **(correcta)**
- B. La metodología elimina toda fase
- C. Ambos son lenguajes de programación
- D. El modelo solo describe tablas

Explicación: Etapas y relaciones no equivalen a prácticas concretas de trabajo.

### Propuesta

¿Qué distingue un modelo de ciclo de vida de una metodología?

- A. El modelo organiza etapas y relaciones; la metodología concreta prácticas y formas de trabajo. **(correcta)**
- B. El modelo asigna roles y plantillas; la metodología solo determina la secuencia temporal de etapas.
- C. El modelo describe exclusivamente pruebas; la metodología organiza el resto del desarrollo.
- D. El modelo se aplica a proyectos predictivos; la metodología se reserva a proyectos ágiles.

Explicación: Un modelo del ciclo de vida organiza actividades y relaciones temporales. Métodos y prácticas detallan cómo ejecutar el trabajo; ambos pueden combinarse y adaptarse al contexto.

- Error B: Invierte la distinción entre organización del ciclo y concreción de las prácticas.
- Error C: El ciclo abarca el desarrollo completo, no solo sus pruebas.
- Error D: La distinción no depende de separar proyectos predictivos y ágiles.

- [ISTQB: Foundation Level Syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) · 2.1 Software Development Lifecycle; 1.2.3 Errors, Defects, Failures, and Root Causes · versión: 4.0.1, 15 septiembre 2024 · comprobado: 2026-10-26

Partida: `2e8b92111e3ac3ca79c0da7be7aaa88a6bfada816efa78d10891228098ad5582` · propuesta: `606c69f7a6caa8caff8dbfb8e0f2fce2d3859f644e761f38fbc7e5fccf0635fc`

## AI-GSI-B3-T01-004

Decisión: accepted · acción: revise.

Motivo: Aplicar el riesgo de feedback tardío a un proyecto en cascada con requisitos cambiantes y comparar riesgos de gestión próximos.

### Antes

¿Qué riesgo tiene una cascada aplicada rígidamente con requisitos cambiantes?

- A. No permitir hitos en ningún caso
- B. No poder construir software nunca
- C. Recibir tarde información que obligue a revisar decisiones anteriores **(correcta)**
- D. Carecer siempre de documentación

Explicación: La secuencia rígida dificulta incorporar cambios y feedback tardío.

### Propuesta

Un proyecto con requisitos que van cambiando aplica una cascada rígida: cierra requisitos, diseño y codificación antes de que los usuarios prueben por primera vez el producto ejecutable en aceptación. Entonces se detecta un cambio necesario en un flujo. ¿Qué riesgo ilustra principalmente este modo de obtener feedback?

- A. Desviaciones por incorporar cambios sin autorización ni evaluación de su impacto en el proyecto.
- B. Retrasos por repetir pruebas de regresión tras cada entrega parcial del producto a los usuarios.
- C. Retrabajo por descubrir tarde cambios que afectan a requisitos, diseño y código ya cerrados. **(correcta)**
- D. Inconsistencias por integrar en paralelo varias versiones funcionales de un mismo módulo.

Explicación: El contraste ejecutable llega cuando ya existen artefactos dependientes del requisito: cambiar el flujo puede obligar a revisar requisitos, diseño y código. El riesgo es el retrabajo tardío; el modelo no impide realizar antes revisiones estáticas.

- Error A: El caso no describe cambios sin autorizar. Un control formal correcto tampoco elimina el coste de descubrir su necesidad demasiado tarde.
- Error B: No se describen entregas parciales sucesivas a usuarios; su primera prueba del ejecutable se pospone hasta aceptación.
- Error D: No se atribuye el problema a versiones desarrolladas en paralelo, sino al momento de obtener feedback de los usuarios.

- [ISTQB: Foundation Level Syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) · 2.1 Software Development Lifecycle; 1.2.3 Errors, Defects, Failures, and Root Causes · versión: 4.0.1, 15 septiembre 2024 · comprobado: 2026-10-26
- [PMI: Choosing the right project approach](https://www.pmi.org/learning/library/choosing-right-project-approach-9346) · Predictive, iterative and incremental life cycles; definición inicial y cambios formales · versión: Artículo de PMI, 2014 · comprobado: 2026-10-26

Partida: `5d993bef7e8cae9e6dff27c2cfe4e429c73e63c3f702a39f7ab56e3f466e3b2b` · propuesta: `6f445221a4ceab50dd0aa16f84aaded039c117c8cf1b912d09c80bfcdb18a319`

## AI-GSI-B3-T02-004

Decisión: accepted · acción: revise.

Motivo: Eliminar la referencia a una tabla no mostrada y comparar enfoques de planificación reales.

### Antes

¿Qué caracteriza al enfoque predictivo de la tabla?

- A. Mayor definición inicial del alcance y control formal de cambios **(correcta)**
- B. Ausencia de hitos
- C. Entregas continuas obligatorias
- D. Inexistencia de documentación

Explicación: El enfoque predictivo fija más elementos al inicio y controla sus modificaciones.

### Propuesta

¿Qué caracteriza al enfoque predictivo de gestión de proyectos?

- A. Definir inicialmente gran parte del alcance y gestionar sus modificaciones mediante control formal. **(correcta)**
- B. Precisar el alcance de cada iteración principalmente a partir de la experiencia del incremento previo.
- C. Gestionar el trabajo mediante flujo continuo y límites de tareas simultáneas como estructura principal.
- D. Descubrir el alcance mediante experimentos sucesivos sin establecer inicialmente una línea base detallada.

Explicación: El enfoque predictivo busca definir el alcance con anticipación y controlar sus cambios. Puede admitir ajustes; no implica ausencia de documentación ni prohíbe adaptar el proceso.

- Error B: La elaboración progresiva por iteraciones es característica de enfoques iterativos o adaptativos.
- Error C: El flujo continuo y los límites de trabajo en curso describen otra forma de organizar el trabajo.
- Error D: El descubrimiento experimental continuo no caracteriza la planificación predictiva descrita.

- [PMI: Choosing the right project approach](https://www.pmi.org/learning/library/choosing-right-project-approach-9346) · Predictive, iterative and incremental life cycles; definición inicial y cambios formales · versión: Artículo de PMI, 2014 · comprobado: 2026-10-26

Partida: `5b5cc3a67340648dadbfe9313c59c90b1693c4aa8e70073aa7239893721ba4cc` · propuesta: `6c5d8a77bfec65221ed6ab515c3468007e1656d1b6fe53a319c048d4f8245c58`

## AI-GSI-B3-T02-013

Decisión: accepted · acción: revise.

Motivo: Comparar registros incompletos del riesgo con una gestión que permite actuar y seguirlo.

### Antes

¿Qué debe acompañar a un riesgo identificado del proyecto?

- A. Solo un nombre alarmante
- B. Una cifra sin responsable
- C. Propietario, respuesta y disparadores además de probabilidad e impacto **(correcta)**
- D. La eliminación de toda fecha

Explicación: El registro debe permitir actuar y seguir el riesgo, no solo enumerarlo.

### Propuesta

¿Qué debe acompañar a un riesgo identificado del proyecto?

- A. Una puntuación agregada y una categoría, dejando la respuesta para cuando ocurra el evento.
- B. Un responsable y un coste estimado, sustituyendo el seguimiento por una aceptación inicial permanente.
- C. Probabilidad e impacto, responsable, respuesta prevista y condiciones que disparen su seguimiento o actuación. **(correcta)**
- D. Una descripción del impacto y una fecha de cierre, dando por aplicada la mitigación desde su planificación.

Explicación: Un riesgo gestionable requiere valoración, responsable y tratamiento. Los disparadores y el seguimiento permiten decidir cuándo actuar; planificar una mitigación no demuestra que ya sea efectiva.

- Error A: La puntuación ayuda a priorizar, pero omite la respuesta anticipada y su responsable.
- Error B: La aceptación no elimina la necesidad de revisar el riesgo cuando cambian sus condiciones.
- Error D: Una respuesta planificada debe ejecutarse y verificarse; no equivale a mitigación efectiva.

- [NASA: Guidelines for Risk Management](https://www.nasa.gov/wp-content/uploads/2015/10/s3001_guidelines_for_risk_management_-_ver_g_-_10-25-2017.pdf) · Tabla 4-6 Risk Planning: Watch, Mitigate, Risk Owner y trigger points · versión: S3001, versión G, 25 octubre 2017 · comprobado: 2026-10-26

Partida: `cd23a07a85a545581bb2325db7bfdc81bb73d649ddd949a380e0e4c4dcace9f9` · propuesta: `41d0222a246b76d7e1621669f0d0abf8cc11a7ef5469a8ebcb62e42f6beb146e`

## AI-GSI-B3-T03-005

Decisión: accepted · acción: revise.

Motivo: Comparar requisitos de rendimiento próximos y precisar la condición de aceptación.

### Antes

¿Qué formulación es verificable bajo una carga definida?

- A. El percentil 95 del tiempo de respuesta será inferior a 2 segundos **(correcta)**
- B. La aplicación será excelente
- C. El portal resultará moderno
- D. El sistema será muy rápido

Explicación: Un umbral medible con condiciones permite una prueba; adjetivos vagos no definen aceptación.

### Propuesta

Bajo una carga de prueba previamente definida, ¿qué requisito fija un criterio de aceptación del tiempo de respuesta verificable?

- A. El percentil 95 del tiempo de respuesta será inferior a 2 segundos durante la prueba acordada. **(correcta)**
- B. El tiempo de respuesta mejorará respecto a la versión anterior en la medida técnicamente posible.
- C. La mayoría de las operaciones ofrecerá una experiencia de respuesta suficientemente fluida.
- D. El sistema mantendrá una latencia competitiva con productos de características semejantes.

Explicación: El percentil y el umbral permiten evaluar el resultado bajo condiciones de prueba acordadas. Un adjetivo o una comparación sin referencia medible no fija el mismo criterio de aceptación.

- Error B: No define una mejora mínima exigible ni un límite verificable para aceptar la prueba.
- Error C: No cuantifica la proporción requerida ni el tiempo considerado fluido.
- Error D: No identifica los productos, las condiciones ni el umbral que permitirían decidir la aceptación.

- [NASA: How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/) · Appendix C: Performance; Verifiability/Testability · versión: NASA Systems Engineering Handbook, apéndice C · comprobado: 2026-10-26

Partida: `a3afb60252cb6e1be71c161349e7a0e582a171238bfaa752dbe4fec0c199de23` · propuesta: `d68eb42e406ec904a0992e594843975a8763ca98080bb40a5b3074befa402386`

## AI-GSI-B3-T03-017

Decisión: accepted · acción: revise.

Motivo: Diferenciar una especificación de requisitos de otros documentos de ingeniería.

### Antes

¿Qué contenido es apropiado en una SRS/ERS?

- A. Alcance, actores, requisitos, interfaces, restricciones y aceptación **(correcta)**
- B. Únicamente un presupuesto
- C. Solo código compilado
- D. Solo capturas sin texto

Explicación: La especificación debe permitir construir y verificar, incluyendo contexto y trazabilidad.

### Propuesta

¿Qué contenido es apropiado en una SRS/ERS?

- A. Contexto y alcance, requisitos funcionales y de calidad, interfaces, restricciones y criterios de verificación. **(correcta)**
- B. Distribución de componentes, decisiones internas de diseño, patrones y detalle de clases de implementación.
- C. Estrategia de ejecución de pruebas, recursos del laboratorio, calendario y asignación de casos a probadores.
- D. Procedimientos operativos, resolución de incidencias conocidas y tareas de mantenimiento en producción.

Explicación: La ERS/SRS define lo que debe satisfacer el software y las condiciones para comprobarlo. Debe describir requisitos e interfaces sin confundirse con un diseño interno o un manual operativo.

- Error B: El detalle de solución e implementación corresponde al diseño, no al contenido principal de una ERS.
- Error C: Organizar la ejecución y los recursos de prueba corresponde a su planificación.
- Error D: Los procedimientos de operación pertenecen al manual operativo, aunque deriven de requisitos.

- [NASA: Software Engineering Requirements](https://nodis3.gsfc.nasa.gov/displayAll.cfm?Internal_ID=N_PR_7150_0002_&page_name=all) · 3.1 Software Requirements: requisitos, restricciones, interfaces y verificación · versión: NPR 7150.2, edición mostrada en el documento · comprobado: 2026-10-26

Partida: `40fde0b0327fd70088c0dbd766db3d213c3a395c087c2804c2cfa009521c4c30` · propuesta: `f2609cfa05ca1aa5dd7d3a87d90af1821ccec407b271b28d3888c64d8b74764f`

## AI-GSI-B3-T04-001

Decisión: accepted · acción: revise.

Motivo: Contrastar niveles del modelo de datos en lugar de parámetros físicos aislados.

### Antes

¿Qué debe representar el modelo conceptual antes de elegir índices?

- A. Entidades, relaciones, cardinalidades y reglas del negocio **(correcta)**
- B. Únicamente tamaños de buffers
- C. Solo parámetros del motor
- D. Solo páginas de disco

Explicación: La semántica precede a decisiones físicas de almacenamiento.

### Propuesta

¿Qué debe representar el modelo conceptual antes de elegir índices?

- A. Entidades del dominio, relaciones, cardinalidades y reglas del negocio que deben representarse. **(correcta)**
- B. Tablas del motor elegido, índices compuestos, particiones y ubicación física de sus segmentos.
- C. Sentencias de creación, tipos propietarios del SGBD y parámetros de almacenamiento de cada tabla.
- D. Planes de ejecución, métodos de acceso a índices y orden concreto de las operaciones de consulta.

Explicación: El modelo conceptual describe la información del dominio y sus relaciones. Las decisiones específicas del motor y los accesos físicos se abordan después, sin sustituir el análisis del negocio.

- Error B: Mezcla estructuras y decisiones de implementación física posteriores al nivel conceptual.
- Error C: El DDL y los parámetros específicos del motor pertenecen a la implementación del esquema.
- Error D: Los planes de ejecución describen cómo acceder a los datos, no qué información representa el dominio.

- [IBM: Data modeling](https://www.ibm.com/think/topics/data-modeling) · Types of data models: conceptual, logical, physical · versión: Documento consultado · comprobado: 2026-10-26

Partida: `101bae38c869ea9803163c66c2177fe524109d679a431321d8e25f17dc6703a4` · propuesta: `9c5a753d0c8379c7e1d8ea35b6571630711e000e4eec1ac46e4febb9c7757f74`

## AI-GSI-B3-T04-020

Decisión: accepted · acción: revise.

Motivo: Separar particionado, índices, fragmentación lógica y replicación.

### Antes

Particionar una tabla grande implica…

- A. Eliminar siempre todos los índices
- B. Garantizar mejora de cualquier consulta
- C. Dividirla según estrategia sin sustituir un buen modelo ni los índices necesarios **(correcta)**
- D. Suprimir restricciones de integridad

Explicación: El particionado debe responder a patrones de acceso y crecimiento y no resuelve por sí solo todo el diseño.

### Propuesta

Particionar una tabla grande implica…

- A. Crear estructuras auxiliares ordenadas para localizar filas sin dividir los datos de la tabla.
- B. Mantener copias completas de la tabla en varios servidores para mejorar disponibilidad y lectura.
- C. Dividir físicamente una tabla lógica según una estrategia, manteniendo las decisiones de modelo e índices necesarias. **(correcta)**
- D. Separar las columnas de una entidad en nuevas relaciones para eliminar dependencias y redundancias.

Explicación: El particionado divide una tabla lógica en partes según una estrategia. Sus beneficios dependen del patrón de acceso; no garantiza acelerar toda consulta ni reemplaza el diseño de índices.

- Error A: Describe la función de un índice, no la división de los datos en particiones.
- Error B: Duplicar una tabla completa describe replicación, no particionado.
- Error D: La descomposición de relaciones corresponde al diseño lógico, no al particionado descrito.

- [PostgreSQL: Table Partitioning](https://www.postgresql.org/docs/18/ddl-partitioning.html) · 5.12.1 Overview; 5.12.2 Declarative Partitioning; 5.12.6 Best Practices · versión: PostgreSQL 18 · comprobado: 2026-10-26

Partida: `cb133c5724f1d40391297c0416e021ded0e211b20de3fc051a83fa5bf3bd3206` · propuesta: `cc4add1e496e1e5d4107cf4f6cc052df3c8f4cca2aa9eeaf4fffaf0a8c98b8cd`

## AI-GSI-B3-T06-007

Decisión: accepted · acción: revise.

Motivo: Precisar que la diferencia está en el paso a producción y no en omitir controles.

### Antes

¿Qué diferencia entrega continua y despliegue continuo?

- A. Son sinónimos exactos
- B. El despliegue prohíbe automatización
- C. La entrega nunca ejecuta pruebas
- D. La entrega puede requerir aprobación; el despliegue publica automáticamente tras los controles **(correcta)**

Explicación: Ambos automatizan, pero difieren en el paso final a producción.

### Propuesta

¿Qué diferencia entrega continua y despliegue continuo?

- A. La entrega exige publicar cada cambio en producción; el despliegue exige siempre una aprobación manual.
- B. La entrega automatiza solo compilación; el despliegue comienza cuando se redacta el código de pruebas.
- C. La entrega evita entornos previos a producción; el despliegue los sustituye por pruebas manuales finales.
- D. La entrega mantiene cambios listos para publicar con posible aprobación; el despliegue los publica tras superar controles automáticos. **(correcta)**

Explicación: La entrega continua mantiene cambios preparados para su publicación y puede incluir una decisión manual. El despliegue continuo automatiza también el paso a producción tras superar los controles definidos.

- Error A: Invierte la diferencia sobre la decisión manual de publicación.
- Error B: La entrega continua abarca más que compilar; la distinción no es cuándo se escriben las pruebas.
- Error C: Los entornos y las pruebas previas son compatibles con ambos enfoques.

- [Microsoft: Continuous delivery](https://learn.microsoft.com/en-us/devops/deliver/what-is-continuous-delivery) · Proceso automatizado y aprobación manual entre etapas · versión: Documento consultado · comprobado: 2026-10-26

Partida: `71cbd637de9879a705588b65b199102b452633762b42d831358b87a775db7d72` · propuesta: `8ad3a7a56bfc3b41623487e28d7c1a93c4c6879b7b41ab1855242ec9dbb758fa`

## AI-GSI-B3-T06-010

Decisión: accepted · acción: revise.

Motivo: Distinguir IaC de inventario, automatización de interfaz y documentos operativos.

### Antes

¿Qué aporta infraestructura como código?

- A. Dependencia exclusiva de capturas
- B. Cambios manuales sin registro
- C. Definición versionada, revisable y automatizable de infraestructura **(correcta)**
- D. Ausencia de configuración

Explicación: IaC permite revisión y reproducción de cambios de infraestructura.

### Propuesta

¿Qué aporta infraestructura como código?

- A. Inventariar recursos existentes mediante capturas de consola, sin definir un modelo que permita desplegarlos.
- B. Documentar la configuración en un manual para repetir cambios desde la interfaz de administración.
- C. Definir infraestructura mediante código versionable, revisable y ejecutable por herramientas de automatización. **(correcta)**
- D. Supervisar métricas de los recursos y generar alertas, sin describir cómo provisionar su configuración.

Explicación: IaC expresa la infraestructura mediante definiciones que pueden versionarse, revisarse y automatizarse. Facilita reproducir cambios; no equivale a conservar capturas ni a monitorizar recursos existentes.

- Error A: Un inventario describe lo observado; no define por sí mismo cómo provisionar el entorno.
- Error B: Un manual puede orientar al operador, pero no ofrece la definición automatizable propia de IaC.
- Error D: La monitorización observa funcionamiento; no sustituye la definición de infraestructura.

- [Microsoft: Infrastructure as code](https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code) · Modelo descriptivo, versionado e infraestructura reproducible · versión: Documento consultado · comprobado: 2026-10-26

Partida: `f6bfe72601261168d810658d749360ef2242477923a77592cef94080fd283faa` · propuesta: `045f7762ddc4f7dc36843aae6305094b8fc9b01edf479aff997ed9211924f85e`

## AI-GSI-B3-T07-003

Decisión: accepted · acción: revise.

Motivo: Comparar secuencias causales próximas sin afirmar que todo defecto produce siempre un fallo.

### Antes

¿Qué cadena describe error, defecto y fallo?

- A. Son sinónimos sin matices
- B. Todo defecto se ejecuta siempre
- C. Todo error es una parada física
- D. Un error humano puede introducir un defecto cuya ejecución cause un fallo **(correcta)**

Explicación: Causa humana, defecto del producto y manifestación observable son conceptos distintos.

### Propuesta

¿Qué cadena describe error, defecto y fallo?

- A. Un fallo humano introduce un error del producto, que solo se considera defecto cuando llega a producción.
- B. Un defecto observado causa necesariamente un fallo en cada ejecución, con independencia de las condiciones.
- C. Un error y un fallo son propiedades internas del código; un defecto es la diferencia visible para el usuario.
- D. Un error humano puede introducir un defecto; su ejecución en determinadas condiciones puede manifestar un fallo. **(correcta)**

Explicación: El error es una acción humana equivocada; el defecto queda en un producto de trabajo y el fallo es su manifestación observable. No todo defecto se manifiesta en todas las ejecuciones.

- Error A: El defecto puede existir antes de producción; la cadena confunde los términos.
- Error B: La manifestación de un defecto puede depender de condiciones específicas de ejecución.
- Error C: Intercambia defecto interno y fallo observable.

- [ISTQB: Foundation Level Syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) · 2.1 Software Development Lifecycle; 1.2.3 Errors, Defects, Failures, and Root Causes · versión: 4.0.1, 15 septiembre 2024 · comprobado: 2026-10-26

Partida: `c85f6f59660a0565efffcb71d760a622c52a491d8b27e769bc79e9b531092c87` · propuesta: `41ff58d8542dfabf61464e1143400060e464162e45657274f3d9f2cf1bc68321`
