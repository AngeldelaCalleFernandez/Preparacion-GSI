# GSI-EDITORIAL-003 — revisión propuesta

Preparado: 2026-10-26. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `d8fc3bac73b45bf032b9a1e8ff100150a85693098124876f8731ef578d216991`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B1-T07-018

Decisión: pending_review · acción: revise.

Motivo: Conservar el enunciado y distinguir incidente, brecha y notificación, sustituyendo distractores absurdos por confusiones habituales sobre exfiltración, daño y procedimiento.

### Antes

¿Qué relación existe entre una incidencia informática y una brecha de datos personales?

- A. Una incidencia TI no es automáticamente una brecha de datos personales **(correcta)**
- B. Solo existe brecha si se ha probado un perjuicio económico
- C. Solo los ataques externos pueden ser brechas
- D. Toda parada de impresora es necesariamente una brecha notificable

Explicación: Hay que valorar la afectación a datos personales y el riesgo; las equivalencias automáticas son incorrectas.

### Propuesta

¿Qué relación existe entre una incidencia informática y una brecha de datos personales?

- A. Una incidencia TI puede no ser una brecha; hay que determinar si afecta a datos personales. **(correcta)**
- B. Una incidencia se convierte en brecha al confirmarse la extracción de datos por un tercero.
- C. Una incidencia que afecte a datos personales solo es brecha cuando causa un daño acreditado.
- D. Una incidencia con datos personales es brecha notificable en cuanto se abre un ticket de soporte.

Explicación: Una brecha requiere una violación de seguridad que afecte a datos personales, incluida pérdida, alteración o acceso no autorizado. Su existencia y la obligación de notificarla son valoraciones diferentes; esta última depende del riesgo.

- Error B: La extracción por terceros es un posible caso, pero también puede haber brecha por pérdida o alteración accidental o por acceso interno no autorizado.
- Error C: No es necesario acreditar un daño ya producido para identificar una brecha. Se valora también el riesgo para derechos y libertades.
- Error D: Abrir un ticket no determina la naturaleza del incidente ni obliga por sí mismo a notificarlo; hay que evaluar afectación y riesgo conforme al RGPD.

- [Reglamento (UE) 2016/679 (RGPD)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · Artículos 4.12, 33.1 y 34.1: brecha, notificación y comunicación · versión: Reglamento de 27-04-2016; preceptos comprobados el 26-10-2026 · comprobado: 2026-10-26

Partida: `1d6f3980fce267c360276afceebef7070e24de2b081ebb31a88722b6a14bc170` · propuesta: `46ea0e7434cbcb11c0f19f8d0486af8e36faed63d89d6c406961bc5cd477ed0b`

## AI-GSI-B1-T09-004

Decisión: pending_review · acción: revise.

Motivo: Precisar identificación, contexto y garantías con el precepto exacto, incluyendo referencia temporal y la excepción de firma cuando procede.

### Antes

¿Qué conjunto describe adecuadamente un documento electrónico administrativo?

- A. Contenido, identificador, metadatos y garantías de integridad y autenticidad **(correcta)**
- B. Solo un nombre de fichero legible
- C. Cualquier imagen sin necesidad de contexto o garantías
- D. Solo una fila sin contenido ni metadatos

Explicación: El documento requiere identificación, contexto y garantías para conservarse e interoperar.

### Propuesta

¿Qué conjunto es coherente con los requisitos de validez del documento electrónico administrativo del artículo 26 de la Ley 39/2015?

- A. Contenido individualizable, identificación, referencia temporal, metadatos y las firmas que correspondan. **(correcta)**
- B. Contenido e identificación por nombre de fichero, sustituyendo con ese nombre los metadatos exigidos.
- C. Contenido y firma electrónica, de modo que la firma dispense de identificar y fechar el documento.
- D. Contenido y fecha de emisión, presumiendo su origen por el servidor que almacena el archivo.

Explicación: El artículo 26.2 exige contenido identificable, datos de individualización, referencia temporal, metadatos mínimos y las firmas aplicables. El apartado 3 contempla documentos sin firma, pero exige identificar su origen.

- Error B: El nombre del archivo no sustituye los metadatos mínimos exigidos ni garantiza por sí mismo la individualización administrativa.
- Error C: La firma no dispensa de identificación, referencia temporal y metadatos; son requisitos distintos.
- Error D: El lugar de almacenamiento no acredita por sí solo el origen ni sustituye los datos y garantías que exige el artículo 26.

- [Ley 39/2015 del Procedimiento Administrativo Común](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565#a26) · Artículo 26.2 y 26.3: requisitos y supuestos sin firma · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `c866064d67502bb071364ea09ed1048c87499ce21d93f6d316f5c25bc6771f52` · propuesta: `28c9aa6a2bbc05b476c8d163f414586bfaf106ae06232d996b682f51c4ee76e2`

## AI-GSI-B1-T09-006

Decisión: pending_review · acción: revise.

Motivo: Distinguir autenticidad jurídica de similitud visual, igualdad binaria o imagen de firma; explicitar que el cambio de formato está permitido.

### Antes

¿Qué debe preservar una copia auténtica?

- A. Solo la apariencia visual, sin competencia para expedirla
- B. Únicamente el nombre del archivo, sin relación con el original
- C. La relación con el original y las garantías del proceso competente **(correcta)**
- D. Una declaración informal del operador sin procedimiento

Explicación: La copia auténtica exige proceso y competencias previstos, con relación al original.

### Propuesta

Una copia electrónica cambia el formato del documento original. ¿Qué es necesario para que pueda tener carácter de copia auténtica conforme al artículo 27 de la Ley 39/2015?

- A. Que conserve la representación visual, aunque la expida una unidad sin competencia para copiar.
- B. Que reproduzca los mismos bytes y conserve el nombre del archivo, aunque no identifique al emisor.
- C. Que la expida el órgano competente y garantice su identidad y el contenido mediante el proceso previsto. **(correcta)**
- D. Que conserve la firma del original como imagen, dando esa reproducción por garantía de autenticidad.

Explicación: La copia auténtica puede cambiar de formato, pero requiere órgano competente y garantías de su identidad y contenido. Las copias electrónicas incorporan metadatos que acreditan su condición y se ajustan al ENI y al ENS.

- Error A: La semejanza visual no corrige la falta de competencia ni acredita las garantías del proceso de copiado.
- Error B: El artículo 27 admite cambio de formato: no exige identidad de bytes. Copiar bytes y nombre tampoco sustituye identificar al órgano competente.
- Error D: Una imagen de una firma no equivale a una firma verificable ni acredita el proceso competente de copia auténtica.

- [Ley 39/2015 del Procedimiento Administrativo Común](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565#a27) · Artículo 27.1, 27.2 y 27.3.a): competencia, identidad, contenido y cambio de formato · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `65e9424d257f55d328f3a32864cc26628e492ca2fa20f141804a6757a4f08646` · propuesta: `f92b37fbfda6231ad1242a15d61f69a4ff753153ae0c83a75ec8851c7a641e03`

## AI-GSI-B1-T09-010

Decisión: pending_review · acción: revise.

Motivo: Concretar la categorización ENS y sustituir indicadores físicos aislados por distractores que confunden contexto con evaluación del impacto.

### Antes

Para valorar la seguridad de un sistema público, ¿qué criterio debe prevalecer sobre el tamaño de sus servidores?

- A. Solo el número de servidores instalados
- B. El impacto de incidentes en la información y los servicios **(correcta)**
- C. Exclusivamente el presupuesto del proyecto
- D. Únicamente la antigüedad de los equipos

Explicación: El ENS se fundamenta en impacto y riesgos, no en magnitudes físicas aisladas.

### Propuesta

Para determinar la categoría ENS de un sistema, ¿qué criterio resulta decisivo frente al tamaño o número de sus servidores?

- A. La capacidad instalada de los equipos que soportan las aplicaciones de producción.
- B. El impacto de incidentes en la información y los servicios, valorado por dimensiones de seguridad. **(correcta)**
- C. El coste de reposición de la infraestructura, usado como medida del conjunto de consecuencias.
- D. La cantidad de usuarios del sistema, empleada como sustituto de valorar las funciones afectadas.

Explicación: El anexo I del ENS categoriza por las consecuencias de incidentes en las dimensiones de seguridad. Infraestructura, costes o usuarios pueden aportar contexto, pero no sustituyen valorar el impacto en información y servicios.

- Error A: La potencia o capacidad de los equipos no determina por sí misma las consecuencias de un incidente ni la categoría ENS.
- Error C: El coste de reposición es una parte posible del impacto, pero no resume daños a funciones, personas, activos o cumplimiento normativo.
- Error D: El número de usuarios no mide por sí solo la gravedad de las consecuencias para cada información y servicio.

- [Real Decreto 311/2022: Esquema Nacional de Seguridad](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Anexo I, §§1–4: impacto, dimensiones, niveles y categoría · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `85b10279e5aaa9de16e9a95174ca80222dd2b94198cf468295bc83191b8c4f92` · propuesta: `4040d6b4ebf97e6cec2dbb9fd72380404d839eb3520ecb80757c8280ce8b92a8`

## AI-GSI-B2-T03-013

Decisión: pending_review · acción: revise.

Motivo: Contrastar paradigmas reales con alternativas próximas y comparables; conservar hechos y reglas como concepto sin negar mecanismos adicionales de Prolog.

### Antes

¿Qué elementos son característicos de la programación lógica?

- A. Únicamente asignaciones a registros
- B. Exclusivamente hojas de estilo
- C. Hechos y reglas **(correcta)**
- D. Solo jerarquías de clases

Explicación: El paradigma lógico expresa hechos y reglas, como en Prolog.

### Propuesta

¿Cómo se expresa principalmente el conocimiento en la programación lógica, como en Prolog?

- A. Con secuencias de asignaciones que describen los cambios de estado paso a paso.
- B. Con composiciones de funciones que transforman valores sin modificar su estado.
- C. Con hechos y reglas sobre relaciones, a los que se plantean consultas. **(correcta)**
- D. Con clases que reúnen estado y operaciones y se especializan mediante herencia.

Explicación: Los hechos y las reglas expresan relaciones; las consultas buscan soluciones que el sistema puede demostrar con ellas. Esta organización caracteriza el enfoque lógico, aunque Prolog también disponga de mecanismos de control.

- Error A: La secuencia de cambios de estado describe el enfoque imperativo; no es la forma principal de representar conocimiento lógico en Prolog.
- Error B: Componer funciones puras es característico del paradigma funcional; una base lógica se expresa mediante predicados, hechos y reglas.
- Error D: Clases, estado y herencia corresponden al enfoque orientado a objetos; no definen la base de conocimiento lógica.

- [SWI-Prolog Reference Manual: Getting started quickly](https://www.swi-prolog.org/man/quickstart.html) · §2.1.1 Starting SWI-Prolog; §2.1.2 Adding rules from the console; §2.1.3 Executing a query · versión: Manual web consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `b4a75e5a3938a484814690dd3bd9ccdf797983ecd2456a0243bd06cd998e0e91` · propuesta: `ebfc9e05fe9562b2b3e79339f43a4a535ceb86d56c23c709adc0734e6cd7862d`

## AI-GSI-B2-T03-020

Decisión: pending_review · acción: revise.

Motivo: Conservar el enunciado útil y reemplazar indicadores absurdos por sesgos reales de selección: familiaridad individual, microbenchmark y popularidad.

### Antes

Al seleccionar lenguaje para un servicio público mantenible, ¿qué criterio es más completo?

- A. Solo la preferencia personal del primer desarrollador
- B. El número de palabras reservadas como único indicador
- C. Requisitos, soporte, seguridad, ecosistema y coste de mantenimiento **(correcta)**
- D. Solo la popularidad en una encuesta

Explicación: La elección debe justificarse por requisitos y ciclo de vida, no por un indicador aislado.

### Propuesta

Al seleccionar lenguaje para un servicio público mantenible, ¿qué criterio es más completo?

- A. Elegir el lenguaje que mejor conoce quien inicia el proyecto, sin valorar la continuidad del equipo.
- B. Elegir el lenguaje con mejor resultado en un microbenchmark, extrapolándolo al servicio completo.
- C. Contrastar requisitos, seguridad, soporte, ecosistema y mantenimiento durante la vida del servicio. **(correcta)**
- D. Elegir el lenguaje con mayor adopción reciente, dando su popularidad por garantía de soporte futuro.

Explicación: La selección debe responder a requisitos y ciclo de vida, incluyendo seguridad, capacidades del ecosistema, competencias y soporte. Una ventaja de sintaxis o rendimiento aislada no demuestra que la solución sea mantenible.

- Error A: La experiencia del equipo es relevante, pero depender de la preferencia de una sola persona no evalúa continuidad, soporte o requisitos.
- Error B: Un microbenchmark cubre una operación y un entorno concretos; no acredita rendimiento global, seguridad o coste de mantenimiento.
- Error D: La adopción aporta información, pero no garantiza estabilidad de bibliotecas, actualizaciones ni soporte durante la vida prevista del servicio.

- [Microsoft Azure: Application design of mission-critical workloads](https://learn.microsoft.com/en-us/azure/well-architected/mission-critical/mission-critical-application-design) · Programming language selection and uptime impact; Design considerations · versión: Guía actualizada el 28-05-2026; consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `730e1ff5a7604db692b87cee657c3245525b472392b5766d4b9cbcdec91c21b3` · propuesta: `d4821e0ab3965087b7ce2900d0cf9da70bb313535655112a2bb78cc7786d4617`

## AI-GSI-B2-T04-005

Decisión: pending_review · acción: revise.

Motivo: Identificar expresamente la definición clásica y enfrentar errores en cada propiedad, evitando convertir no volatilidad en prohibición absoluta de corregir datos.

### Antes

¿Qué propiedades clásicas caracterizan al Data Warehouse?

- A. Exclusivamente transacciones cortas en tiempo real
- B. Volátil, aislado, sin historia y orientado a edición puntual
- C. Orientado a temas, integrado, variable en el tiempo y no volátil **(correcta)**
- D. Solo documentos sin estructura ni metadatos

Explicación: El DW integra historia para análisis; su finalidad difiere de la operación transaccional.

### Propuesta

Según la caracterización clásica de Inmon, ¿qué propiedades describen un Data Warehouse?

- A. Orientado a aplicaciones, integrado, histórico y no volátil.
- B. Orientado a temas, integrado, centrado en el dato actual y volátil.
- C. Orientado a temas, integrado, variable en el tiempo y no volátil. **(correcta)**
- D. Orientado a temas, separado por fuentes, histórico y no volátil.

Explicación: La caracterización clásica combina organización por temas, integración de fuentes, perspectiva histórica y estabilidad de lo cargado. No volatilidad diferencia su uso analítico de la actualización transaccional cotidiana; no significa que ninguna implementación pueda corregir datos.

- Error A: La orientación clásica es por temas de análisis, no por las aplicaciones operativas que originaron los datos.
- Error B: Centrarse en el estado actual y su actualización frecuente describe necesidades operativas; se pierden la perspectiva temporal y la no volatilidad de la definición clásica.
- Error D: Mantener fuentes separadas sin integración no resuelve discrepancias de formatos, unidades o significado, que son propias de la integración del almacén.

- [Oracle: What Is a Data Warehouse?](https://www.oracle.com/database/what-is-a-data-warehouse/) · What Is a Data Warehouse?; Four unique characteristics (William Inmon) · versión: Artículo de 08-06-2023, consultado el 26-10-2026 · comprobado: 2026-10-26
- [Microsoft: Dimensional modeling fact tables](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-fact-tables) · Fact table types: Transaction fact tables; actualización para corregir errores · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `2fc1b1d91bfec96e9efa066332bf48b35e207bcb34f53ba83f6c0d8f768d7282` · propuesta: `255c49cc5a18e05ed998f8f502685d8507cbc39724d43facabc859408d6cc9be`

## AI-GSI-B2-T04-008

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado y respuesta correcta ya precisos; comparar las posiciones del tratamiento en origen, destino y presentación sin añadir un caso de relleno.

### Antes

En ETL, ¿cuándo se realiza la transformación principal respecto a la carga?

- A. Siempre después de cargar en destino
- B. Nunca, porque ETL solo extrae
- C. Solo después de visualizar el informe
- D. Antes de cargar en el destino **(correcta)**

Explicación: ETL extrae, transforma y carga; ELT carga antes de transformar en la plataforma destino.

### Propuesta

En ETL, ¿cuándo se realiza la transformación principal respecto a la carga?

- A. Después de cargar los datos en el destino.
- B. Antes de extraer los datos desde el origen.
- C. Al representar los datos en los informes.
- D. Antes de cargar en el destino. **(correcta)**

Explicación: En ETL se extraen los datos, se transforman y después se cargan en el sistema destino. Puede utilizarse un área temporal; ELT sitúa la transformación después de cargar los datos en destino.

- Error A: Cargar primero en destino y transformar después corresponde al orden ELT, no al ETL preguntado.
- Error B: La transformación de los datos extraídos sigue a la extracción; no se define como modificar el sistema de origen antes de extraer.
- Error C: Dar formato al informe pertenece a presentación y no sustituye la transformación del flujo de integración.

- [IBM: What is ETL (Extract, Transform, Load)?](https://www.ibm.com/think/topics/etl) · ETL versus ELT; Differences between ETL and ELT: Order and location of steps; How ETL works · versión: Artículo web consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `4fc429d2b5fe8ab46813988b26abc9a14b66c1b1f32b22cbebadc49b5d5d4430` · propuesta: `7d893ef65a4cd4acd2bc678915848b60b93da28c6f2d96f535fd459250f2c636`

## AI-GSI-B2-T04-014

Decisión: pending_review · acción: revise.

Motivo: Aplicar la distinción medidas/claves frente a atributos descriptivos con un grano explícito, conservando el concepto y la excepción de hechos sin medidas.

### Antes

En un modelo dimensional, ¿qué contiene principalmente una tabla de hechos?

- A. Exclusivamente documentos PDF
- B. Únicamente usuarios y contraseñas
- C. Medidas y claves hacia dimensiones **(correcta)**
- D. Solo descripciones jerárquicas sin eventos medibles

Explicación: Los hechos representan eventos o procesos medibles; las dimensiones aportan ejes descriptivos.

### Propuesta

Se diseña un modelo dimensional para analizar solicitudes, con una fila de hechos por solicitud resuelta. ¿Qué contenido corresponde a esa tabla de hechos?

- A. Denominación de la unidad, dirección y jerarquía de sus dependencias administrativas.
- B. Descripción del tipo de solicitud, su familia y los textos de ayuda para clasificarla.
- C. Duración e importe del trámite, junto con claves de fecha, unidad y tipo de solicitud. **(correcta)**
- D. Identificación del calendario, nombre del mes y relaciones entre ejercicios y trimestres.

Explicación: La fila registra medidas del evento al grano fijado —una solicitud resuelta— y claves que permiten analizarlo por dimensiones. Las dimensiones aportan descripciones; también existen tablas de hechos sin medidas numéricas.

- Error A: La denominación y jerarquía describen la dimensión unidad; no representan las medidas de cada solicitud resuelta.
- Error B: La descripción y familia clasifican el tipo de solicitud y corresponden a atributos de esa dimensión.
- Error D: Nombre del mes, ejercicio y trimestre describen una dimensión temporal; no son las medidas del evento de tramitación.

- [Microsoft: Understand star schema and the importance for Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) · Star schema overview: Dimension tables y Fact tables; Measures; Factless fact tables · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `87de9cbddd03fbb60c111677e530fdb2d0841411510740e25fa9cadcbe28ffac` · propuesta: `7c3c466d717ced9ee0ecf1a157a97a4499a244e3e766878517774d16b533c990`

## AI-GSI-B2-T04-016

Decisión: pending_review · acción: revise.

Motivo: Distinguir perfiles de trabajo reales con un caso de tramitación, sin identificar OLTP por una tecnología o producto concreto.

### Antes

¿Qué carga corresponde típicamente a OLTP?

- A. Solo cubos sin escrituras
- B. Exclusivamente entrenamiento de modelos predictivos
- C. Solo agregaciones históricas extensas
- D. Muchas transacciones cortas sobre operaciones actuales **(correcta)**

Explicación: OLTP prioriza integridad y latencia transaccional; OLAP atiende consultas analíticas complejas.

### Propuesta

Un portal debe confirmar con baja latencia altas y cambios individuales de expedientes realizados por muchos usuarios. ¿Qué perfil de carga es típico de OLTP?

- A. Agregaciones extensas de varios años para comparar la evolución entre organismos.
- B. Recorridos periódicos del histórico para ajustar los parámetros de un modelo predictivo.
- C. Exploraciones de grandes volúmenes para construir resúmenes por muchas dimensiones.
- D. Transacciones cortas y concurrentes que consultan y actualizan las operaciones actuales. **(correcta)**

Explicación: OLTP atiende operaciones de negocio frecuentes y concurrentes sobre cantidades acotadas de datos, con integridad y respuesta rápida. El análisis amplio del histórico corresponde a un perfil analítico, aunque pueda usar los mismos datos de origen.

- Error A: Comparar agregados de varios años es una carga analítica típica de OLAP, no la operación individual del portal.
- Error B: Ajustar un modelo sobre el histórico es un proceso de análisis o aprendizaje, distinto de confirmar transacciones operativas.
- Error C: Explorar grandes conjuntos y resumirlos por dimensiones describe una carga analítica, frente a las operaciones cortas planteadas.

- [Oracle: What Is Online Transaction Processing (OLTP)?](https://www.oracle.com/database/what-is-oltp/) · OLTP Defined; OLTP Versus OLAP · versión: Artículo de 01-08-2023, consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `de8a281ac5eb4440ae9fd01e6f437bab1a1e053c39dc32e070083c5344d64ec6` · propuesta: `a42c6d5684ce04aea84f76182cbaade7aa3f968abeeaf46ba7c01aaa87dc157a`

## AI-GSI-B2-T04-020

Decisión: pending_review · acción: revise.

Motivo: Conservar el enunciado y el concepto de definición operativa; contrastar cálculo, presentación y manipulación del objetivo sin imponer una plantilla normativa universal.

### Antes

¿Qué necesita un indicador para ser útil como KPI?

- A. Definición, fórmula, fuente, periodicidad, responsable y objetivo o umbral **(correcta)**
- B. Solo un gráfico circular
- C. Ausencia de contexto para facilitar comparaciones
- D. Solo un valor numérico grande

Explicación: Un KPI debe relacionarse con objetivos y tener definición operativa; no toda cifra es clave.

### Propuesta

¿Qué necesita un indicador para ser útil como KPI?

- A. Definición operativa, cálculo y fuente, periodicidad, responsable y vínculo con un objetivo. **(correcta)**
- B. Nombre atractivo, valor actual y un gráfico elegido para destacar su evolución positiva.
- C. Fórmula y fuente de datos, dejando el objetivo y la interpretación a criterio de cada lector.
- D. Objetivo y umbral de alerta, cambiando la fórmula cuando no se alcance el resultado esperado.

Explicación: Un KPI debe permitir valorar un objetivo mediante una medida definida y repetible. Fuente, cálculo, frecuencia y responsabilidad hacen interpretable su evolución; la fórmula no se cambia para aparentar cumplimiento.

- Error B: La presentación visual ayuda a comunicar, pero no define qué se mide ni su relación con un objetivo o su reproducibilidad.
- Error C: Sin objetivo e interpretación compartidos, la misma cifra puede conducir a conclusiones incompatibles; calcularla no basta para que sea clave.
- Error D: Cambiar la fórmula para alcanzar el umbral rompe la comparabilidad. Un cambio metodológico legítimo debe justificarse y documentarse, no ocultar desviaciones.

- [NIST SP 800-55v1: Measurement Guide for Information Security, Volume 1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf) · §3.1.1 Measures Documentation, pp.12–14: Goal, Formula, Target, Implementation evidence, Time-based reference y Responsible parties · versión: Diciembre de 2024 · comprobado: 2026-10-26

Partida: `4edb3bc4467cb240e806eca9778c6df1eda3d20c79a9fe5306985c3418a4b96a` · propuesta: `be977bad1aa751fc617b3bb32f974b4808b0152fedd79881ec878d40fffaca19`

## AI-GSI-B2-T06-002

Decisión: pending_review · acción: revise.

Motivo: Conservar el microcaso original bien planteado y exigir identificar el rol en cada dirección, evitando confundir rol lógico con tipo permanente de proceso.

### Antes

Un proceso atiende peticiones y consulta otro servicio. ¿Qué roles desempeña?

- A. Servidor y cliente según la interacción **(correcta)**
- B. Solo cliente por definición permanente
- C. Solo servidor por definición permanente
- D. Ninguno si comparte máquina física

Explicación: Cliente y servidor son roles lógicos relativos a cada interacción.

### Propuesta

Un proceso atiende peticiones y consulta otro servicio. ¿Qué roles desempeña?

- A. Servidor al atender la petición recibida y cliente al consultar el otro servicio. **(correcta)**
- B. Cliente al atender la petición recibida y servidor al consultar el otro servicio.
- C. Servidor en ambas interacciones, porque un proceso que publica una API conserva ese rol.
- D. Cliente en ambas interacciones, porque el proceso inicia una consulta a otro servicio.

Explicación: Cliente y servidor son roles relativos a cada interacción: quien atiende la petición actúa como servidor y quien solicita al otro servicio actúa como cliente. Un mismo proceso puede ejercer ambos roles.

- Error B: Invierte los roles: recibir y responder a una petición es actuar como servidor; iniciar la consulta al otro servicio es actuar como cliente.
- Error C: Publicar una API no fija el rol para todas las conexiones; al consultar otro servicio ese mismo proceso actúa como cliente.
- Error D: Iniciar una consulta no elimina el rol de servidor que el proceso cumple al responder a su solicitante.

- [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · §3.3 Connections, Clients, and Servers · versión: RFC 9110, junio de 2022 · comprobado: 2026-10-26

Partida: `c3aee00c4a505ced60c9a653476ab006eabdb9f12a302c2f8bdc6365704a3c3e` · propuesta: `c8fdd86bba95cc0cc2862cb7aeb6156114b2b6cdfccd555f6dd3414cd4726c8f`

## AI-GSI-B2-T06-004

Decisión: pending_review · acción: revise.

Motivo: Delimitar el modelo de capas y distinguir reglas de negocio de validación de interfaz, integridad persistente y distribución de tráfico.

### Antes

¿Dónde corresponde ubicar las reglas de negocio en una arquitectura de tres capas?

- A. Exclusivamente en el sistema de archivos
- B. Lógica de aplicación o dominio **(correcta)**
- C. Solo en el balanceador
- D. Exclusivamente en estilos visuales

Explicación: La capa de dominio concentra casos de uso y reglas, separada de presentación y persistencia.

### Propuesta

En la separación lógica clásica de tres capas —presentación, negocio y acceso a datos—, ¿dónde corresponde concentrar las reglas de negocio?

- A. En la presentación, para vincular las reglas a cada formulario de entrada.
- B. En la lógica de aplicación o dominio, separadas de presentación y persistencia. **(correcta)**
- C. En el acceso a datos, para identificar todas las reglas con restricciones del almacenamiento.
- D. En el balanceo de red, para aplicar las reglas antes de seleccionar la instancia de aplicación.

Explicación: La capa de negocio expresa las reglas y operaciones del dominio; presentación y acceso a datos cumplen otras responsabilidades. Se trata de separación lógica: no exige que cada capa resida en una máquina distinta.

- Error A: La presentación puede validar formato o interacción, pero ubicar ahí las reglas del dominio las acopla a cada interfaz y dificulta reutilizarlas.
- Error C: Las restricciones de almacenamiento pueden reforzar integridad, pero no sustituyen el conjunto de reglas y operaciones de negocio.
- Error D: El balanceador distribuye tráfico; no es la capa destinada a expresar los criterios y operaciones del dominio.

- [Microsoft Azure Architecture Center: N-tier architecture style](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) · Introducción: logical layers y physical tiers; nota sobre Business tier y Web tier del ejemplo de arquitectura · versión: Documentación web consultada el 26-10-2026 · comprobado: 2026-10-26

Partida: `3517b7861161528e56183a305f03f9af7d43a4394c14b9eeb520f5b914b82dbf` · propuesta: `fe84c68320504d065bcb5e9b249d8e0ef82875c20878a2672922a69ec0760038`

## AI-GSI-B2-T08-018

Decisión: pending_review · acción: revise.

Motivo: Precisar tabla de reenvío, coincidencia de dirección y ausencia de políticas; mantener la comparación /24 frente a /0 sin introducir empates o rutas no instaladas.

### Antes

Hay una ruta /24 y una ruta por defecto que coinciden con el destino. ¿Cuál se selecciona por especificidad?

- A. La /24 **(correcta)**
- B. La que se escribió primero necesariamente
- C. Ninguna hasta consultar DNS
- D. Siempre la ruta por defecto

Explicación: El router utiliza la coincidencia de prefijo más específica.

### Propuesta

La tabla de reenvío IPv4 contiene rutas utilizables 10.20.30.0/24 y 0.0.0.0/0. Para el destino 10.20.30.8, sin reglas de encaminamiento por políticas, ¿qué selección responde al prefijo más específico?

- A. 10.20.30.0/24, porque coincide con más bits del destino que la ruta por defecto. **(correcta)**
- B. 0.0.0.0/0, si fue instalada antes que la ruta hacia la subred del destino.
- C. 0.0.0.0/0, porque su cobertura de todas las redes la hace preferente para reenviar.
- D. Las dos rutas por igual, porque ambas coinciden con la dirección de destino.

Explicación: Ambas rutas coinciden, pero /24 aporta un prefijo más largo que /0 y se selecciona por especificidad. El orden de instalación no sustituye esa regla; elegir entre rutas al mismo prefijo plantea otros criterios.

- Error B: El orden de instalación no hace preferente a la ruta por defecto frente a una coincidencia más específica ya utilizable.
- Error C: La ruta por defecto cubre más destinos precisamente porque es menos específica; se utiliza cuando no queda una coincidencia más larga.
- Error D: Coincidir con el destino no implica igual preferencia. La longitud del prefijo distingue estas dos rutas y no justifica repartir entre ambas.

- [IETF RFC 1812: Requirements for IP Version 4 Routers](https://www.rfc-editor.org/rfc/rfc1812.html) · §5.2.4.3 Next Hop Address, reglas (1) Basic Match y (2) Longest Match · versión: RFC 1812, junio de 1995; regla de selección IPv4 · comprobado: 2026-10-26

Partida: `2e75070c171cb24dd1234e80bee5256232f8b5664e16c53f887e89c9e956c8ed` · propuesta: `86c803df9c87e617a7533ef0b899de7014b8ea72dba81eae68986070b20bc3d8`

## AI-GSI-B2-T10-008

Decisión: pending_review · acción: revise.

Motivo: Añadir periodicidad y referencia ENS a revisión anual sin confundirla con una evaluación estática o con el calendario de compra de herramientas.

### Antes

¿Cuándo debe revisarse un análisis de riesgos?

- A. Únicamente cuando se contrata otra herramienta
- B. Solo cuando se compra el primer activo
- C. Ante cambios, incidentes y nuevas amenazas de forma continuada **(correcta)**
- D. Nunca después de la aceptación inicial

Explicación: El riesgo evoluciona con exposición, activos y controles; la revisión forma parte del ciclo.

### Propuesta

¿Qué enfoque mantiene actualizado el análisis de riesgos de un sistema conforme al ciclo de seguridad del ENS?

- A. Revisar el inventario cuando cambien los activos y dar por estables las amenazas externas.
- B. Actualizar el análisis al renovar la herramienta y usar esa fecha como siguiente punto de revisión.
- C. Revisarlo periódicamente y ante cambios, incidentes o amenazas que alteren la valoración. **(correcta)**
- D. Conservar la aceptación inicial como valoración vigente mientras no se sustituya todo el sistema.

Explicación: El riesgo evoluciona con activos, amenazas, exposición y controles. El ENS combina vigilancia y reevaluación periódica; su auditoría comprueba además revisión y aprobación anual del análisis, sin excluir revisiones motivadas por cambios relevantes.

- Error A: Actualizar activos no basta si cambian amenazas, exposición o eficacia de controles; esos factores también pueden alterar la valoración.
- Error B: La revisión no puede depender del ciclo comercial de una herramienta; debe responder al ciclo de seguridad y a cambios relevantes.
- Error D: Aceptar un riesgo no congela su valoración. Cambios parciales o nuevas amenazas pueden invalidar los supuestos antes de sustituir el sistema completo.

- [Real Decreto 311/2022: Esquema Nacional de Seguridad](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Artículo 10.2–3; artículo 14; anexo III §1.1.d): análisis de riesgos, revisión y aprobación anual · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `c6c4fea289f0e0587cb04aff5a4fd289aa20e15e972fd002594efb24348dc315` · propuesta: `ef20bbfda543468b4181408ea57adb1a9012ab5f736af16dc998200a22d9a780`

## AI-GSI-B2-T11-001

Decisión: pending_review · acción: revise.

Motivo: Sustituir opciones caricaturescas por errores plausibles de alcance, dependencia del escáner y confusión entre gravedad y cumplimiento.

### Antes

¿Qué requiere una auditoría además de encontrar fallos?

- A. Solo una lista de opiniones
- B. Únicamente un escaneo sin contexto
- C. Buscar cualquier error fuera del mandato
- D. Alcance, criterios, evidencias y conclusiones trazables **(correcta)**

Explicación: La auditoría es una evaluación sistemática contra criterios, no una búsqueda indiscriminada.

### Propuesta

¿Qué enfoque convierte una búsqueda de fallos en una auditoría con conclusiones justificadas?

- A. Ampliar las comprobaciones hasta reunir muchos fallos, aunque se alejen del objetivo acordado.
- B. Adoptar el resultado del escáner como dictamen, dejando a la herramienta definir el alcance.
- C. Clasificar los fallos por gravedad y deducir el cumplimiento sin explicitar criterios de evaluación.
- D. Definir alcance y criterios, obtener evidencia y vincular a ella los hallazgos y las conclusiones. **(correcta)**

Explicación: Una auditoría evalúa un objeto delimitado contra criterios y fundamenta sus conclusiones en evidencia suficiente y apropiada. El número de fallos o la salida de una herramienta no constituyen por sí mismos un dictamen.

- Error A: Acumular fallos ajenos al objetivo no sustituye un alcance definido ni mejora necesariamente la conclusión sobre lo auditado.
- Error B: El escáner aporta información dentro de procedimientos de auditoría; no determina por sí solo alcance, criterios ni dictamen.
- Error C: La gravedad ayuda a priorizar, pero no permite juzgar cumplimiento sin relacionar evidencia y criterios aplicables.

- [INTOSAI ISSAI 100: Fundamental Principles of Public-Sector Auditing](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-100-EN.pdf) · §§26–27, 50–53: objeto, criterios, planificación, evidencia y conclusiones · versión: IFPP 2019; principios revisados en 2013 · comprobado: 2026-10-26

Partida: `8545232bf93b5f232ac31dfc497788308aee135c23d5fe2e5900dc9659bab77b` · propuesta: `b709568211e355d0107d39415361c9b64c3698b3e86a4c4c9355661566af2fa2`

## AI-GSI-B2-T11-004

Decisión: pending_review · acción: revise.

Motivo: Diferenciar cantidad de calidad y evaluar pertinencia, vigencia y origen, sin descartar toda evidencia verbal ni prescribir volumen fijo.

### Antes

¿Cómo debe ser la evidencia de auditoría?

- A. Exclusivamente verbal sin contraste
- B. Abundante aunque no guarde relación
- C. Siempre anónima y sin fecha
- D. Suficiente, pertinente y fiable **(correcta)**

Explicación: La calidad y pertinencia importan además del volumen; debe conservarse trazabilidad.

### Propuesta

¿Qué caracteriza una evidencia de auditoría suficiente y apropiada para sustentar una conclusión?

- A. Un volumen elevado de registros, aunque su relación con el criterio no esté comprobada.
- B. Un documento aprobado por la dirección, aunque corresponda a un periodo ya superado.
- C. Una muestra técnicamente detallada, aunque su origen y método de obtención no puedan verificarse.
- D. Cantidad suficiente para el objetivo y calidad pertinente, válida y fiable de la información. **(correcta)**

Explicación: Suficiencia se refiere a cantidad; adecuación, a calidad, incluida pertinencia, validez y fiabilidad. La evaluación considera qué conclusión se pretende sostener y las limitaciones de la evidencia, no solo su volumen.

- Error A: Muchos registros no compensan que no respondan al criterio o a la afirmación que se audita.
- Error B: La aprobación del documento no demuestra que describa el periodo y el estado auditados; deben comprobarse su vigencia y pertinencia.
- Error C: El detalle técnico no sustituye conocer el origen y la obtención necesarios para valorar fiabilidad y reproducibilidad.

- [INTOSAI ISSAI 100: Fundamental Principles of Public-Sector Auditing](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-100-EN.pdf) · §51, p.26: cantidad suficiente y calidad pertinente, válida y fiable; §52 · versión: IFPP 2019; principios revisados en 2013 · comprobado: 2026-10-26

Partida: `a7bee6def032c15984143e5c1e03f717a3e27a5ea77bb63e3cebe923e9ef1c18` · propuesta: `044d3b415d2f1449378e7c5b9e80549e7cfb2a4e9a5b34ba132ccf31bfc320c8`

## AI-GSI-B2-T11-006

Decisión: pending_review · acción: revise.

Motivo: Completar responsable, prioridad y fecha con acción y criterio de cierre, evitando confundir registro, presupuesto o severidad con remediación ejecutada.

### Antes

¿Qué elementos hacen accionable un plan de remediación?

- A. Únicamente una puntuación de satisfacción
- B. Responsable, prioridad y fecha **(correcta)**
- C. Solo una recomendación sin destinatario
- D. Una promesa de mejora sin seguimiento

Explicación: Las acciones necesitan asignación y plazos para poder verificarse.

### Propuesta

¿Qué convierte una recomendación de auditoría en una acción de remediación gestionable y verificable?

- A. Añadir una estimación de coste y una lista de herramientas, dejando abierta la ejecución.
- B. Definir acción, responsable, prioridad, plazo y evidencia con la que comprobar su cierre. **(correcta)**
- C. Asignar la recomendación a un área, sin concretar quién responde de los hitos ni cuándo vencen.
- D. Incorporar la gravedad del hallazgo al informe, dando su clasificación por seguimiento suficiente.

Explicación: Una acción gestionable concreta qué se hará, quién responde y en qué plazo, con prioridad y comprobación del resultado. Registrar o presupuestar una recomendación no acredita su ejecución ni permite cerrarla sin evidencia.

- Error A: Costes y herramientas pueden apoyar el plan, pero sin asignación y plazo no se gobierna su ejecución.
- Error C: Nombrar un área de forma genérica deja ambiguas responsabilidad y fechas; deben concretarse para seguir y exigir los hitos.
- Error D: Clasificar gravedad ayuda a priorizar, pero no sustituye asignar actuaciones y verificar que corrigen la debilidad.

- [CMS Information Security and Privacy Program: POA&M Handbook](https://security.cms.gov/learn/cms-plan-action-and-milestones-poam-handbook) · Develop a Corrective Action Plan (CAP); Appropriate milestones; Assign a completion date; Execute the Corrective Action Plan · versión: Manual web consultado el 26-10-2026; guía de gestión, no obligación jurídica española · comprobado: 2026-10-26

Partida: `a594f3c8d04261ad5b3982e739519b4851497221a8bb72738683eab8454dd7b7` · propuesta: `6d978c4aebd2d4f4b0117bff5943b20ed8efb1b59327deeb8c1e57539aba016d`

## AI-GSI-B2-T11-010

Decisión: pending_review · acción: revise.

Motivo: Distinguir ejecución de copia, documentación y restauración validada con un caso de auditoría, sin generalizar una prueba a todos los escenarios.

### Antes

¿Qué evidencia resulta especialmente útil para auditar recuperación?

- A. La existencia de una licencia de backup
- B. Resultados de restauraciones y pruebas de backups **(correcta)**
- C. Solo informes de trabajos de copia sin restaurar
- D. Únicamente el tamaño ocupado del repositorio

Explicación: Las pruebas de restauración evidencian capacidad real; adquirir una herramienta no acredita funcionamiento.

### Propuesta

El informe de copias muestra trabajos completados sin error. Para auditar la capacidad de recuperación, ¿qué evidencia adicional es más directa?

- A. El inventario de licencias de la herramienta, junto con su fecha de renovación y soporte.
- B. El registro de una restauración probada, con integridad de los datos y resultado de las comprobaciones. **(correcta)**
- C. El historial de tamaños y duración de las copias, sin haber utilizado sus datos para restaurar.
- D. El procedimiento de recuperación aprobado, sin resultados de su ejecución en un entorno de prueba.

Explicación: Una restauración probada aporta evidencia de que los datos pueden recuperarse y utilizarse bajo las condiciones ensayadas. Los trabajos completados no prueban por sí solos recuperación; deben documentarse alcance, verificaciones y limitaciones de la prueba.

- Error A: Licencias y soporte acreditan disponibilidad contractual de la herramienta, no que una copia concreta permita recuperar datos utilizables.
- Error C: Tamaño y duración describen la ejecución de la copia, pero no prueban que pueda restaurarse ni que el resultado sea íntegro.
- Error D: El procedimiento define lo previsto; sin ejecutarlo no demuestra el resultado real del proceso de recuperación.

- [CISA, NSA, FBI y MS-ISAC: #StopRansomware Guide](https://www.ic3.gov/CSA/2023/231019.pdf) · Part 1, Preparing for Ransomware and Data Extortion Incidents, p.5: disponibilidad e integridad de copias en un escenario de recuperación · versión: Versión 3.0, octubre de 2023; copia primaria publicada por FBI IC3 · comprobado: 2026-10-26

Partida: `b2b47091f953446b98078197a07bc056b8da5e5f839faa36fdce3fdcf6b85cb1` · propuesta: `6e33cebe0bb24ad464087c91256920c33b41f3e2baf83e61a136d63e24241fea`

## AI-GSI-B2-T11-015

Decisión: pending_review · acción: revise.

Motivo: Concretar categoría MEDIA para no atribuir auditoría obligatoria a todos los sistemas; contrastar organización y evidencia con meras compras o escaneos.

### Antes

¿Qué debe revisar una auditoría ENS además de medidas técnicas?

- A. Solo velocidad de procesadores
- B. Política, roles, riesgos, aplicabilidad y evidencias **(correcta)**
- C. Solo número de usuarios inscritos
- D. Solo tamaño de la sede web

Explicación: ENS comprende organización, operación y protección, con evidencias de aplicación.

### Propuesta

Además de controles técnicos, ¿qué debe comprobarse al auditar un sistema de categoría MEDIA conforme al ENS?

- A. El inventario y las fichas de fabricantes, tomándolos como sustitutos de la asignación de responsabilidades.
- B. La política y los roles, el análisis de riesgos, la aplicabilidad de medidas y las evidencias de cumplimiento. **(correcta)**
- C. La compra de herramientas recomendadas, tomándola como demostración de que todos los procedimientos funcionan.
- D. Las vulnerabilidades detectadas, sin contrastar organización ni documentación para evitar juicios no técnicos.

Explicación: El anexo III exige comprobar organización, responsabilidades, riesgos, medidas aplicables y evidencias, además de aspectos técnicos. La categoría MEDIA requiere auditoría; en BÁSICA puede bastar autoevaluación documentada en los términos del ENS.

- Error A: Inventario y fabricantes aportan contexto técnico, pero no acreditan que la organización haya definido y asignado roles de seguridad.
- Error C: Adquirir herramientas no acredita su implantación ni el funcionamiento del conjunto de procedimientos y medidas aplicables.
- Error D: Limitarse a vulnerabilidades excluye comprobaciones organizativas y documentales expresamente incluidas en el objeto de la auditoría ENS.

- [Real Decreto 311/2022: Esquema Nacional de Seguridad](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) · Artículos 28 y 31; anexo III §§1.1–1.3 y 2: objeto, evidencias y niveles de auditoría · versión: Texto consolidado consultado el 26-10-2026 · comprobado: 2026-10-26

Partida: `6e1817554098109977266b65f4294677213bd185c635e638275dff589471fbc6` · propuesta: `edd28464f3cb02ccc7a56753aa1366ce61cf64f79d67a7a341bf7765e9c1083a`
