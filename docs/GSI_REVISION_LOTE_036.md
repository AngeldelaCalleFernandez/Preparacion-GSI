# GSI-EDITORIAL-036 — revisión propuesta

Preparado: 2026-10-28. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `67fc0ae7556a754060985002b85468e684075c1064158a824c6a99c591a81e4f`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B2-T10-009

Decisión: pending_review · acción: revise.

Motivo: Mantener clasificación del enfoque y clave C; sustituir categorías ajenas por enfoques de valoración próximos.

### Antes

Una matriz usa bajo, medio y alto. ¿Qué enfoque predomina?

- A. Determinista sin incertidumbre
- B. Cuantitativo monetario exacto
- C. Cualitativo **(correcta)**
- D. Contable exclusivamente

Explicación: Las escalas cualitativas facilitan comprensión, pero requieren criterios definidos.

### Propuesta

Una matriz valora el riesgo mediante las categorías bajo, medio y alto, sin estimar importes ni frecuencias. ¿Qué enfoque predomina?

- A. Cuantitativo, con pérdidas monetarias estimadas en una unidad de medida.
- B. Determinista, con resultados fijados sin incertidumbre de ocurrencia.
- C. Cualitativo, con categorías ordinales que necesitan criterios definidos. **(correcta)**
- D. Actuarial, con frecuencias estimadas a partir de una serie de siniestros.

Explicación: Bajo, medio y alto son categorías ordenadas de valoración cualitativa. Sus fronteras deben definirse para usarlas con coherencia; los nombres por sí solos no proporcionan probabilidades o pérdidas monetarias.

- Error A: Una valoración monetaria requiere cantidades con significado y datos o supuestos justificados; las tres etiquetas no los aportan.
- Error B: Clasificar por categorías no elimina la incertidumbre de que se materialice el daño.
- Error D: El enunciado no aporta una serie de siniestros ni una estimación de frecuencias derivada de ella.

- [NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) · 2.3.2 Assessment Approaches, pp. 14–15: enfoques cuantitativo, cualitativo y semicuantitativo · versión: Septiembre de 2012; distinción entre categorías, escalas numéricas y significado de las cantidades · comprobado: 2026-10-28

Partida: `67b1407668290f009adb71d06e5b343393c005898524e32da87199dc892e3b3f` · propuesta: `2a5a1d2ac8acd466f68e41d9ad16401a0b890c85720778a22210636187a0a681`

## AI-GSI-B2-T10-010

Decisión: pending_review · acción: revise.

Motivo: Conservar error de falsa precisión y clave B; microcaso que distingue codificar de medir.

### Antes

Asignar números arbitrarios a una matriz y presentarlos como pérdidas exactas produce…

- A. Cuantificación fiable por definición
- B. Falsa precisión **(correcta)**
- C. Transferencia contractual
- D. Aceptación formal automática

Explicación: La cuantificación necesita datos y supuestos fiables; numerar categorías no los crea.

### Propuesta

Un informe codifica bajo, medio y alto como 1, 2 y 3 y presenta esos números como euros de pérdida exacta, sin estimación económica. ¿Qué error comete?

- A. Doble cómputo de un activo por aparecer en dos inventarios de soporte.
- B. Falsa precisión: interpretar códigos ordinales como pérdidas monetarias. **(correcta)**
- C. Sesgo de selección al excluir del análisis una familia de incidentes.
- D. Pérdida de trazabilidad entre versiones de un control y sus revisiones.

Explicación: Numerar categorías no transforma su orden en una medida monetaria. Para presentar euros se necesita una estimación con unidades, datos y supuestos defendibles; el número de un nivel no acredita esa pérdida exacta.

- Error A: No se describe un activo contado dos veces. El problema está en la interpretación de las cantidades.
- Error C: No se indica que se haya excluido una familia de incidentes del conjunto analizado.
- Error D: No se describe una ruptura del historial de controles, sino una unidad de medida que los códigos no justifican.

- [NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) · 2.3.2 Assessment Approaches, pp. 14–15: enfoques cuantitativo, cualitativo y semicuantitativo · versión: Septiembre de 2012; distinción entre categorías, escalas numéricas y significado de las cantidades · comprobado: 2026-10-28

Partida: `abcb1d6b6ae284cf2a287b712a94aaabbda78133a106b8e5e6197e8ec653a16e` · propuesta: `f0381933ecda245d094be22edffca1b358b3be4dc5e96e0c2f67a56c4d593545`

## AI-GSI-B2-T10-011

Decisión: pending_review · acción: revise.

Motivo: Mantener evitación y clave A; contrastar las cuatro respuestas sin prometer riesgo organizativo cero.

### Antes

Dejar de realizar la actividad que origina un riesgo es…

- A. Evitarlo **(correcta)**
- B. Aceptarlo sin cambios
- C. Mitigarlo manteniendo necesariamente la actividad
- D. Transferirlo mediante seguro

Explicación: Evitar elimina la actividad o causa; mitigar mantiene la actividad aplicando controles.

### Propuesta

Se decide abandonar una actividad para dejar de estar expuesto al riesgo que esa actividad origina. ¿Qué respuesta se adopta?

- A. Evitar el riesgo abandonando la actividad que lo origina. **(correcta)**
- B. Aceptar el riesgo conservando la actividad sin cambios.
- C. Mitigar el riesgo reforzando controles de esa actividad.
- D. Compartir el riesgo distribuyendo consecuencias por contrato.

Explicación: Abandonar la actividad que origina el riesgo es una respuesta de evitación. Se elimina esa exposición concreta por no realizarla; no se demuestra con ello que desaparezcan otros riesgos de la organización.

- Error B: Aceptar supone asumir conscientemente el riesgo dentro de los criterios y competencias aplicables; no describe dejar la actividad.
- Error C: Mitigar conserva la actividad y reduce la posibilidad o consecuencias mediante medidas.
- Error D: Compartir distribuye consecuencias entre partes, sin exigir abandonar la actividad.

- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; aceptación, evitación, mitigación y transferencia o reparto del riesgo dentro del contexto y restricciones · comprobado: 2026-10-28
- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 4.1.2 Aceptación, p. 49; 4.1.7 Eliminación y 4.1.8 Mitigación, p. 53; 4.1.9 Compartición, p. 54; 4.2.5 Decisión de tratamiento, pp. 58–59 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28

Partida: `768bb4ef00d8fe3b2adf080f03eee6f3bb5f08a66ef15d136d3a1c5fa34c070e` · propuesta: `d707a5cffe2d24671cc3b5ba9fa8c83cdd2a80c37027d8193ea4d11608cda4fa`

## AI-GSI-B2-T10-012

Decisión: pending_review · acción: revise.

Motivo: Mantener mitigación y clave A; alternativas de tratamiento comparables, con evaluación posterior de eficacia.

### Antes

Instalar y operar controles para disminuir riesgo es…

- A. Reducir o mitigar **(correcta)**
- B. Eliminar toda responsabilidad
- C. Aceptar necesariamente sin tratamiento
- D. Ignorar

Explicación: Mitigar aplica controles; después debe valorarse el residual.

### Propuesta

Una organización instala y opera controles para disminuir el riesgo de una actividad que continúa realizando. ¿Qué respuesta describe esa actuación?

- A. Mitigar mediante controles que reduzcan la exposición. **(correcta)**
- B. Evitar mediante el abandono de la actividad de origen.
- C. Aceptar mediante la decisión de asumir la exposición.
- D. Compartir mediante un acuerdo sobre sus consecuencias.

Explicación: Implantar y operar salvaguardas para disminuir el riesgo es mitigación. Debe comprobarse su eficacia y valorar el riesgo residual; instalar controles no basta para demostrar el resultado pretendido.

- Error B: La evitación elimina la actividad o situación de origen, mientras aquí se sigue operando con medidas adicionales.
- Error C: La aceptación es una decisión de asumir riesgo, distinta de la acción de reducirlo mediante controles.
- Error D: Un acuerdo de reparto puede ser otra respuesta, pero no es la instalación y operación de las salvaguardas descritas.

- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; aceptación, evitación, mitigación y transferencia o reparto del riesgo dentro del contexto y restricciones · comprobado: 2026-10-28
- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 3.1.5 Salvaguardas, pp. 31–35; 4.1.8 Mitigación, p. 53 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28

Partida: `66dbd8d867d830deff26cafeba4d82247cee7a28dbae19bd0e992173914a37f1` · propuesta: `15a5073a0506ce737f23620c8ab74644f83299ffbcf3a151155af767edcdf679`

## AI-GSI-B2-T10-013

Decisión: pending_review · acción: revise.

Motivo: Mantener límites de transferencia y clave A; distinguir reparto de consecuencias de desaparición de obligaciones.

### Antes

¿Qué afirmación sobre transferir riesgo es correcta?

- A. No transfiere necesariamente toda responsabilidad **(correcta)**
- B. Equivale a borrar el registro de riesgos
- C. Elimina siempre todo impacto para la organización
- D. Hace innecesario evaluar al proveedor

Explicación: Seguros y contratos pueden compartir consecuencias, pero no eliminan todas las obligaciones ni dependencias.

### Propuesta

¿Qué afirmación es correcta al transferir o compartir un riesgo mediante un seguro o un contrato?

- A. Puede repartir consecuencias sin extinguir todas las obligaciones propias. **(correcta)**
- B. Impide que la organización dependa de la capacidad de respuesta del proveedor.
- C. Convierte el impacto residual de cualquier incidente en una cantidad igual a cero.
- D. Sustituye la valoración de riesgos por la revisión económica inicial del contrato.

Explicación: Un seguro o contrato puede distribuir determinadas consecuencias. Las obligaciones que permanezcan y los riesgos de la contraparte dependen del acuerdo y del marco aplicable: transferir no equivale a eliminar toda responsabilidad propia.

- Error B: La respuesta del proveedor puede ser una dependencia que deba valorarse; contratar no la hace imposible.
- Error C: La cobertura puede tener límites y el daño puede incluir consecuencias no cubiertas. No se deduce impacto nulo.
- Error D: El contrato es una medida dentro de la gestión del riesgo; su precio no reemplaza valorar exposición, límites y riesgo residual.

- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; aceptación, evitación, mitigación y transferencia o reparto del riesgo dentro del contexto y restricciones · comprobado: 2026-10-28
- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 4.1.2 Aceptación, p. 49; 4.1.7 Eliminación y 4.1.8 Mitigación, p. 53; 4.1.9 Compartición, p. 54; 4.2.5 Decisión de tratamiento, pp. 58–59 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28

Partida: `12557c3389ce4773110bf0b98b261cfbc8c28638b6dc40cba69628e98868807a` · propuesta: `21f826feaa3faa62d83ce43d280b97286108af5fce4bb23166afded2db13ae52`

## AI-GSI-B2-T10-014

Decisión: pending_review · acción: revise.

Motivo: Mantener aceptación frente a ignorancia y clave A; eliminar pistas por distractores ajenos y precisar decisión competente.

### Antes

¿Qué distingue aceptar un riesgo de ignorarlo?

- A. Una decisión consciente y explícita según criterios **(correcta)**
- B. No asignar responsable
- C. Ausencia de análisis
- D. Eliminación de toda documentación

Explicación: La aceptación se documenta y se encuadra en tolerancia y gobernanza.

### Propuesta

¿Qué distingue aceptar un riesgo de simplemente dejarlo sin tratar?

- A. Decidir conscientemente asumirlo conforme a criterios y autoridad aplicables. **(correcta)**
- B. Considerarlo aprobado porque no figura una medida adicional en el presupuesto.
- C. Darlo por asumido porque la herramienta ha calculado una puntuación residual.
- D. Equiparar su aceptación a la ausencia de incidentes registrados en el período.

Explicación: Aceptar exige una decisión expresa, documentada y competente sobre el riesgo valorado. No se deduce de la inacción o de un resultado de herramienta; también deben respetarse las restricciones y obligaciones aplicables.

- Error B: La falta de presupuesto o de una medida nueva no demuestra una decisión de aceptación del responsable competente.
- Error C: Calcular riesgo residual informa la decisión, pero no concede autoridad a la herramienta para aceptarlo.
- Error D: No observar incidentes no demuestra que el riesgo se haya valorado y aceptado formalmente.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 4.1.2 Aceptación, p. 49; 4.1.7 Eliminación y 4.1.8 Mitigación, p. 53; 4.1.9 Compartición, p. 54; 4.2.5 Decisión de tratamiento, pp. 58–59 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28
- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.3 Responding to Risk; Appendix H Risk Response Strategies · versión: Marzo de 2011; aceptación, evitación, mitigación y transferencia o reparto del riesgo dentro del contexto y restricciones · comprobado: 2026-10-28

Partida: `65f7957685dfb4b07162aa01d458bebf70e68d3b26c757cbea17f64b4e68c4fe` · propuesta: `b886991a4bee99c6857bdd9ec1ee0a3b7fb3b3720a4b281a4a0b146eb3b73e17`

## AI-GSI-B2-T10-015

Decisión: pending_review · acción: revise.

Motivo: Mantener plan ejecutable y clave B; comparar artefactos reales de gestión, sin alargar distractores con relleno.

### Antes

¿Qué debe contener un plan de tratamiento?

- A. Una lista de controles sin responsables ni plazos
- B. Acción, responsable, prioridad, recursos, fecha y riesgo objetivo **(correcta)**
- C. Solo la puntuación inherente
- D. Una aceptación genérica sin objetivo residual

Explicación: El plan conecta medidas con responsables, plazos y resultados esperados.

### Propuesta

¿Qué información caracteriza un plan de tratamiento que permita ejecutar y seguir las medidas elegidas?

- A. Inventario de activos, amenazas y valoraciones previas a las medidas.
- B. Acciones priorizadas, responsables, recursos, plazos y riesgo objetivo. **(correcta)**
- C. Relación de hallazgos, evidencias y criterios usados por la auditoría.
- D. Registro de riesgos aceptados, su justificación y autoridad que decide.

Explicación: El plan de tratamiento debe permitir ejecutar y seguir las acciones: qué se hará, quién responde, con qué recursos, cuándo y con qué resultado de riesgo previsto. El objetivo deberá contrastarse después con el residual observado.

- Error A: El inventario y la valoración sustentan la decisión, pero no especifican por sí solos la ejecución de las medidas.
- Error C: Un registro de hallazgos apoya el diagnóstico y puede originar acciones; no sustituye planificarlas con responsables y plazos.
- Error D: Documentar aceptaciones cumple otra función. No basta para programar y verificar las acciones de tratamiento elegidas.

- [NIST SP 800-39](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-39.pdf) · 3.3 Responding to Risk, Task 3-4 Risk Response Implementation; 3.4 Monitoring Risk · versión: Marzo de 2011; planes ejecutables y seguimiento, no aceptación automática por implantar una medida · comprobado: 2026-10-28
- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 6 Plan de seguridad, pp. 73–80: identificación y planificación de proyectos de seguridad · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28

Partida: `d51b93c6c8f946d983ab1ffc5fe668a04066d5ea492c67adf114425bda4aec92` · propuesta: `eaee2ddcb895d03864b05c6ea93b568c1b611b2ef50dec53c7af8eece7efa955`

## AI-GSI-B2-T10-016

Decisión: pending_review · acción: revise.

Motivo: Mantener naturaleza de MAGERIT y clave A; distractores próximos método/herramienta/norma/política.

### Antes

¿Qué es MAGERIT?

- A. Una metodología de análisis y gestión de riesgos **(correcta)**
- B. Un seguro obligatorio
- C. Un dispositivo de firewall
- D. Un lenguaje de consulta

Explicación: MAGERIT organiza el método; no debe confundirse con la herramienta PILAR.

### Propuesta

¿Qué es MAGERIT en el análisis y gestión de riesgos de sistemas de información?

- A. Una metodología para analizar y gestionar riesgos de sistemas de información. **(correcta)**
- B. Una herramienta informática que calcula riesgos mediante una metodología.
- C. Una norma que establece requisitos para un sistema de gestión de seguridad.
- D. Una política interna que asigna competencias y criterios a los responsables.

Explicación: MAGERIT ofrece un método de análisis y gestión de riesgos de los sistemas de información. Puede apoyarse en herramientas como PILAR; metodología, herramienta, norma de requisitos y política organizativa son elementos distintos.

- Error B: Describe una herramienta de apoyo como PILAR, no la naturaleza de MAGERIT.
- Error C: Una norma de requisitos de SGSI, como ISO/IEC 27001, tiene una función diferente de este método.
- Error D: La política fija criterios y responsabilidades de la organización; no define qué es MAGERIT.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 1.4 Magerit, p. 7; 1.5 Análisis y tratamiento, p. 8; 2 Visión de conjunto, pp. 19–21 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28
- [CCN-CERT: Nuevo portal de PILAR](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/10388-nuevo-portal-de-pilar-la-solucion-de-analisis-y-gestion-de-riesgos-del-ccn?format=html) · Cuerpo de la noticia: herramienta EAR, análisis y gestión de riesgos siguiendo MAGERIT y variantes · versión: 29-07-2020; se usa para la función de la herramienta, sin afirmar que la versión descargable de 2020 sea la actual · comprobado: 2026-10-28
- [ISO: ISO/IEC 27001:2022](https://www.iso.org/standard/27001) · Título Requirements; What is ISO/IEC 27001; General information; amendment · versión: Edición 3, octubre de 2022; catálogo público consultado con una enmienda de 2024 listada, sin afirmar lectura del clausulado de pago · comprobado: 2026-10-28

Partida: `c51e25c5bb43eb3dc047ccfccabb428284051136a3a9964ed9b8faa98d00fb2b` · propuesta: `ea9be0bfc101cf9b6d717414a2523c161aba2b81b7b41acf7ce6f2eafa29fa85`

## AI-GSI-B2-T10-017

Decisión: pending_review · acción: revise.

Motivo: Mantener función de PILAR y clave C; distinguir herramienta de norma, autoridad y escáner.

### Antes

¿Qué papel cumple PILAR?

- A. Sustituir todo juicio experto
- B. Certificar automáticamente cumplimiento completo
- C. Apoyar modelado y cálculo de riesgos y planes de mejora **(correcta)**
- D. Aceptar riesgos en nombre de cualquier autoridad

Explicación: PILAR apoya el análisis; las decisiones y la aprobación siguen correspondiendo a responsables.

### Propuesta

¿Qué papel desempeña PILAR en relación con el análisis y gestión del riesgo?

- A. Una norma de requisitos que permite certificar el SGSI por su sola adopción.
- B. Una autoridad que decide qué riesgo puede aceptar cada responsable del sistema.
- C. Una herramienta de apoyo para modelar, valorar y tratar riesgos de información. **(correcta)**
- D. Un inventario de vulnerabilidades que sustituye analizar activos y dependencias.

Explicación: PILAR implementa apoyo informático al análisis y gestión de riesgos siguiendo MAGERIT. Ayuda a modelar y valorar; sus resultados requieren contexto y decisiones de responsables, y no constituyen por sí solos certificación o aceptación.

- Error A: La herramienta no es una norma de requisitos y usarla no otorga automáticamente una certificación de SGSI.
- Error B: La autoridad de aceptación pertenece a las funciones competentes, no al software que calcula o presenta resultados.
- Error D: El análisis considera activos, amenazas, dependencias y salvaguardas; no se reduce a enumerar vulnerabilidades técnicas.

- [CCN-CERT: Nuevo portal de PILAR](https://www.ccn-cert.cni.es/es/comunicacion-eventos/comunicados-ccn-cert/10388-nuevo-portal-de-pilar-la-solucion-de-analisis-y-gestion-de-riesgos-del-ccn?format=html) · Cuerpo de la noticia: herramienta EAR, análisis y gestión de riesgos siguiendo MAGERIT y variantes · versión: 29-07-2020; se usa para la función de la herramienta, sin afirmar que la versión descargable de 2020 sea la actual · comprobado: 2026-10-28
- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 1.4 Magerit, p. 7; 1.5 Análisis y tratamiento, p. 8; 2 Visión de conjunto, pp. 19–21 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28
- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 4.1.2 Aceptación, p. 49; 4.1.7 Eliminación y 4.1.8 Mitigación, p. 53; 4.1.9 Compartición, p. 54; 4.2.5 Decisión de tratamiento, pp. 58–59 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28

Partida: `7b8fdb72afb0ad255a5a0f71c5e0a2e3dc8b83e656504686ac758f68e721e456` · propuesta: `cc1155a5301b34d021bbbba7c0ef5419484541edf6c547395dd6d420f3cf1980`

## AI-GSI-B2-T10-020

Decisión: pending_review · acción: revise.

Motivo: Mantener pareja RTO/RPO y clave C; precisar objetivo, sin confundirlo con resultado de una prueba.

### Antes

¿Qué diferencia RTO y RPO?

- A. RTO: tiempo medio entre fallos; RPO: tiempo medio de reparación
- B. RTO: duración de retención; RPO: frecuencia de pruebas
- C. RTO: tiempo de recuperación; RPO: pérdida de datos medida temporalmente **(correcta)**
- D. RTO: pérdida máxima de datos; RPO: tiempo de recuperación

Explicación: RTO y RPO traducen necesidades de continuidad, no probabilidad ni categorías de riesgo.

### Propuesta

Al planificar la recuperación tras una interrupción, ¿qué asociación de RTO y RPO es correcta?

- A. RTO: intervalo entre fallos; RPO: duración media de una reparación.
- B. RTO: retención de copias; RPO: frecuencia de ensayo del plan de continuidad.
- C. RTO: plazo objetivo de recuperación; RPO: punto temporal de datos a recuperar. **(correcta)**
- D. RTO: punto temporal de datos a recuperar; RPO: plazo objetivo de recuperación.

Explicación: RTO fija el objetivo temporal de recuperación del recurso o servicio; RPO fija hasta qué punto anterior a la interrupción deben recuperarse los datos, expresable como ventana tolerada de pérdida. Son objetivos, no tiempos o pérdidas ya observados.

- Error A: Intervalo entre fallos y duración media de reparación son métricas distintas de los objetivos RTO y RPO.
- Error B: Retención y frecuencia de ensayos son decisiones operativas. No definen los objetivos de tiempo y punto de recuperación.
- Error D: Intercambia las magnitudes: RTO se refiere al tiempo de recuperación y RPO al punto temporal de los datos.

- [NIST SP 800-34 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) · 3.2.1 Determine Business Processes and Recovery Criticality, p. 16: RTO, RPO y relación con MTD · versión: Mayo de 2010; objetivos de recuperación frente a resultados observados · comprobado: 2026-10-28

Partida: `ed140daa5bdfb48aad9c3c27cabb92ee49b94bed31e328e3d4984d2fb77933e5` · propuesta: `4ebada42c57772b59e2b0ade8b8b2e3492fd1eef684c6f02cce93f226952db97`

## AI-GSI-B2-T10-018

Decisión: pending_review · acción: revise.

Motivo: Mantener riesgo de proyecto y clave C; precisar futuro retraso por recursos, sin inferir incidente o categoría ENS.

### Antes

Un posible retraso por falta de equipo es principalmente…

- A. Una vulnerabilidad criptográfica necesariamente
- B. Una lectura sucia
- C. Riesgo de proyecto **(correcta)**
- D. Una categoría ENS

Explicación: Los riesgos de proyecto afectan plazo, coste o recursos y se distinguen de riesgos de seguridad, aunque se relacionen.

### Propuesta

Un proyecto puede retrasar su entrega porque no contará con suficientes desarrolladores en la fase crítica. ¿Qué describe directamente esa situación?

- A. Una vulnerabilidad criptográfica en la protección de los datos almacenados.
- B. Un incidente de integridad que ya ha alterado transacciones de producción.
- C. Un riesgo de recursos y calendario que amenaza la entrega del proyecto. **(correcta)**
- D. Un incumplimiento de retención por conservar datos fuera del plazo aprobado.

Explicación: La posible falta de personal amenaza el calendario y la entrega del proyecto. Es un riesgo de proyecto ligado a recursos; el caso no prueba un incidente de seguridad ni un incumplimiento de retención.

- Error A: No se describe debilidad de algoritmo, clave o configuración criptográfica.
- Error B: Se plantea un retraso posible, sin evidencias de transacciones alteradas en producción.
- Error D: No se menciona conservación de datos ni un plazo de retención vulnerado.

- [MAGERIT v3, Libro I: Método](https://www.hacienda.gob.es/sgt/catalogo_sefp/046_magerit_v3_libro1_metodo.pdf) · 5.2.3 Tarea PAR.13 Planificación del proyecto, p. 68: recursos humanos, temporales y financieros y calendario; 5.5 Control del proyecto, p. 71 · versión: Octubre de 2012, NIPO 630-12-171-8; páginas impresas. Respaldo metodológico, sin actualizar por analogía sus referencias legales históricas · comprobado: 2026-10-28

Partida: `bf2a3f96f4390531a7d8ec9b873d1aecc572a790b84f9732e5eb62622e3623c8` · propuesta: `bf4c910721b438ab831f30ac2d8a4efc753ba46a5f31584f9658c8a5f0f18d4b`

## AI-GSI-B2-T11-002

Decisión: pending_review · acción: revise.

Motivo: Mantener seguimiento de acciones y clave A; contrastar evidencia de resultado frente a hitos administrativos.

### Antes

¿Qué actividad completa una recomendación correctiva?

- A. Comprobar su cierre y eficacia **(correcta)**
- B. Cerrar al recibir la declaración del responsable sin contraste
- C. Posponer indefinidamente la comprobación
- D. Retirar el hallazgo antes de probar la corrección

Explicación: El objetivo incluye seguimiento, no solo identificar deficiencias.

### Propuesta

Tras recomendar acciones correctivas en una auditoría, ¿qué actuación permite comprobar el cierre del hallazgo?

- A. Verificar la implantación y si las acciones resuelven el problema detectado. **(correcta)**
- B. Cerrar el hallazgo al recibir la declaración de que la acción fue terminada.
- C. Cerrar el hallazgo al aprobarse el gasto previsto para ejecutar la acción.
- D. Dar por corregido el problema al asignar una persona y fecha de ejecución.

Explicación: El seguimiento debe comprobar lo realizado y su adecuación al hallazgo. Declarar, financiar o programar una acción son avances distintos de verificar que se ha implantado y que atiende el problema.

- Error B: Una declaración puede iniciar la comprobación, pero no demuestra por sí sola cierre eficaz.
- Error C: Aprobar recursos permite actuar; no prueba que la medida se haya ejecutado ni que funcione.
- Error D: La asignación organiza el trabajo futuro y no acredita su resultado.

- [INTOSAI: ISSAI 100](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-100-Fundamental-Principles-of-Public-Sector-Auditing.pdf) · 5, Reporting and follow-up, párrafo 51, apartado Follow-up, p. 29 impresa · versión: Revisión 2013 con cambios editoriales IFPP 2019; principios de auditoría pública, no obligación uniforme para toda auditoría privada · comprobado: 2026-10-28

Partida: `e79af08cb2d482929b33623286bf085569a8b397013092dad8a9f2ce874eccf6` · propuesta: `8daa49045a64185214a742384ed831fbc089b7ed6aefa87df18f04edc342c26a`

## AI-GSI-B2-T11-003

Decisión: pending_review · acción: revise.

Motivo: Mantener autorrevisión y clave C; sustituir conceptos ajenos por principios de auditoría próximos, explicitando el conflicto.

### Antes

Un auditor evalúa acríticamente controles que él mismo opera. ¿Qué principio se compromete?

- A. Portabilidad
- B. Normalización
- C. Independencia y objetividad **(correcta)**
- D. Compresión de datos

Explicación: La autorrevisión sin salvaguardas puede comprometer independencia y juicio objetivo.

### Propuesta

Una persona debe auditar, sin salvaguardas frente a la autorrevisión, los mismos controles que opera a diario. ¿Qué principio queda específicamente amenazado?

- A. La confidencialidad, por haberse divulgado información a terceros.
- B. La competencia técnica, por faltar formación sobre el control revisado.
- C. La independencia y objetividad, por tener que evaluar la propia actuación. **(correcta)**
- D. La trazabilidad documental, por faltar el historial de evidencias obtenidas.

Explicación: Evaluar controles que uno mismo opera introduce una amenaza de autorrevisión a la independencia y objetividad. Deben evaluarse el conflicto y las salvaguardas; no se deduce una prohibición universal de toda colaboración técnica interna.

- Error A: El caso no indica una divulgación no autorizada; ese sería un problema de confidencialidad distinto.
- Error B: Operar el control no demuestra falta de formación. La cuestión específica es juzgar la propia actuación.
- Error D: No se describe ausencia de registros. Puede existir un historial completo y persistir el conflicto de autorrevisión.

- [INTOSAI: ISSAI 100](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-100-Fundamental-Principles-of-Public-Sector-Auditing.pdf) · 5 General principles, Ethics and independence, párrafo 36, p. 20 impresa · versión: Revisión 2013 con cambios editoriales IFPP 2019; independencia y objetividad frente al conflicto de autorrevisión · comprobado: 2026-10-28

Partida: `9bce53c4b32af66053587eec6c424bb427e817115052c42bbd36d54fdab440a3` · propuesta: `ae4840d25508364c8ff6deae46e0c9e14f68023fdfad3a4349c5e45a8726069c`

## AI-GSI-B2-T11-005

Decisión: pending_review · acción: revise.

Motivo: Mantener alcance y clave B; comparar alcance/objetivos/criterios/métodos según términos de 2026.

### Antes

¿Qué debe delimitar el alcance de una auditoría?

- A. Solo el resultado esperado
- B. Sistemas, procesos, periodo, ubicaciones y exclusiones **(correcta)**
- C. Toda actividad sin límites
- D. El proveedor favorito del auditor

Explicación: El alcance fija qué se evalúa y permite interpretar las conclusiones.

### Propuesta

¿Qué expresa el alcance de una auditoría de sistemas de gestión?

- A. Los objetivos que expresan qué pretende conseguir la auditoría.
- B. Los límites de sistemas, procesos, ubicaciones y período cubierto. **(correcta)**
- C. Los requisitos que sirven de criterio para contrastar la evidencia.
- D. Los métodos y actividades previstos para obtener la evidencia.

Explicación: El alcance delimita la extensión de lo que se audita, incluidos sistemas o procesos, ubicaciones y período. Las exclusiones deben quedar claras y justificadas para que las conclusiones no se extrapolen fuera de ese perímetro.

- Error A: Los objetivos explican la finalidad de la auditoría; se relacionan con el alcance, pero no son su definición.
- Error C: Los criterios son los requisitos de referencia para evaluar evidencias, no los límites de cobertura.
- Error D: Los métodos y actividades forman parte de la planificación de cómo auditar, distintos de qué queda comprendido.

- [ISO 19011:2026: vista pública OBP](https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:19011:ed-4:v1:en) · 1 Scope; 3.6 Audit scope; 3.7 Audit plan; 3.8 Audit criteria · versión: Edición 4, mayo de 2026; únicamente apartados públicos visibles. 2018 figura retirada en el catálogo · comprobado: 2026-10-28

Partida: `124efb8cecd36adc25bfbeaebe819a0d6d7577329aaee00aff1e23905ff600f7` · propuesta: `07a614938ed903cb95b9e10d3cef4776b85a01587bd93fd793a0c0764a2ebc77`

## AI-GSI-B2-T11-007

Decisión: pending_review · acción: revise.

Motivo: Mantener suficiencia de evidencia y clave B; caso que exige distinguir foto puntual de conclusión temporal.

### Antes

¿Qué limitación tiene una captura aislada sin contexto?

- A. Garantiza que el control funcionó en todos los casos
- B. Puede no constituir evidencia suficiente **(correcta)**
- C. Sustituye cualquier criterio
- D. Demuestra siempre todo el periodo auditado

Explicación: Deben conservarse fecha, fuente y contexto y contrastarse las evidencias cuando sea necesario.

### Propuesta

Se aporta una captura de un control habilitado, sin fecha, entorno ni procedencia verificable, para acreditar su funcionamiento durante un año. ¿Qué valoración es adecuada?

- A. Acredita el funcionamiento continuo por mostrar una configuración habilitada.
- B. Necesita contexto y corroboración para sostener una conclusión anual. **(correcta)**
- C. Debe descartarse por su formato aunque después se acredite su procedencia.
- D. Permite cerrar el hallazgo porque coincide visualmente con el control esperado.

Explicación: La captura puede contribuir como evidencia, pero falta vincularla al sistema, fecha, origen y criterio. Una imagen puntual tampoco demuestra por sí sola operación continua durante todo un período; debe corroborarse según el objetivo.

- Error A: Una configuración visible no demuestra cuándo estaba activa ni su funcionamiento durante todo el intervalo.
- Error C: El formato de imagen no la invalida por definición; su pertinencia y fiabilidad dependen del contexto y verificación.
- Error D: La semejanza visual no prueba identidad, fecha, cobertura temporal o resolución del hallazgo.

- [INTOSAI: ISSAI 100](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-100-Fundamental-Principles-of-Public-Sector-Auditing.pdf) · 5 Conducting an audit, párrafo 49, pp. 26–27 impresas: suficiencia y adecuación, relevancia, validez y fiabilidad · versión: Revisión 2013 con cambios editoriales IFPP 2019; suficiencia dependiente del objetivo y alcance · comprobado: 2026-10-28
- [ISO 19011:2026: vista pública OBP](https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:19011:ed-4:v1:en) · 3.1 Audit; 3.8 Audit criteria; 3.9 Objective evidence; 3.10 Audit evidence · versión: Edición 4, mayo de 2026; evidencia verificable pertinente respecto a criterios, con alcance de la vista pública · comprobado: 2026-10-28

Partida: `b6f9d4e59888bbd904d83ec029a9373971723b8de12129b8d4987e34007d1d3a` · propuesta: `7d2f18a112d393577836280482b76e4f2d21b697d19ef94840c6dfbbcfac6184`

## AI-GSI-B2-T11-008

Decisión: pending_review · acción: revise.

Motivo: Mantener diseño de muestreo y clave B; explicar límites sin imponer fórmula o tamaño universal.

### Antes

¿Qué debe definirse al usar muestreo?

- A. La conclusión antes de seleccionar la muestra
- B. Población, método y riesgo de muestreo **(correcta)**
- C. Solo el primer registro disponible
- D. Un porcentaje elegido sin justificación

Explicación: El muestreo fundamenta una conclusión razonable si su diseño y limitaciones están definidos.

### Propuesta

¿Qué enfoque fundamenta el uso de muestreo al obtener evidencia de auditoría?

- A. Elegir primero la conclusión y ajustar después los registros que se revisarán.
- B. Definir población, método y tamaño justificados, considerando el riesgo de muestreo. **(correcta)**
- C. Revisar el primer registro disponible y extender su resultado al conjunto anual.
- D. Fijar el mismo porcentaje de registros en toda auditoría para igualar la confianza.

Explicación: El diseño vincula objetivo, población y selección, con tamaño y riesgo justificados. Una muestra puede llevar a una conclusión distinta de revisar toda la población; ni un porcentaje fijo ni una selección cómoda acreditan la confianza requerida.

- Error A: Seleccionar para sostener una conclusión previa introduce sesgo y rompe la base de la inferencia.
- Error C: El primer registro no demuestra cobertura o representatividad del conjunto anual.
- Error D: La confianza depende del diseño, variabilidad, errores esperados y riesgo tolerado; un porcentaje igual no la iguala.

- [IAASB: ISA 530, Audit Sampling, edición difundida por IBR-IRE](https://www.ibr-ire.be/docs/default-source/fr/documents/reglementation-et-publications/normes-et-recommandations/isa/isa-en-update-2026/a029_2023-2024-iaasb-hb_isa-530.pdf?sfvrsn=c89d7bdf_1) · Párrafos 4, 5(a)–(g), 6–8 y A9–A13; apéndice 4, métodos de selección · versión: Extracto oficial del Handbook IAASB 2023–2024 en el instituto profesional belga. Norma para auditoría de estados financieros: se usa el concepto de muestreo, sin imponerla a toda auditoría de TI · comprobado: 2026-10-28
- [INTOSAI: ISSAI 100](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-100-Fundamental-Principles-of-Public-Sector-Auditing.pdf) · 5 Conducting an audit, párrafo 49, pp. 26–27 impresas: suficiencia y adecuación, relevancia, validez y fiabilidad · versión: Revisión 2013 con cambios editoriales IFPP 2019; suficiencia dependiente del objetivo y alcance · comprobado: 2026-10-28

Partida: `ce13f0dfba19b25f2470b6ae9a222c0f1e1596f86dd3b04f6cd2b6dcaf7492e6` · propuesta: `941dd1693ab0d734e0de6a6312b1e54d590847d6b87d1954884b5d357109431d`

## AI-GSI-B2-T11-009

Decisión: pending_review · acción: revise.

Motivo: Mantener relación auditoría/pentest y clave C; evitar la afirmación excesiva de que toda auditoría es más amplia que cualquier pentest.

### Antes

¿Qué relación existe entre auditoría y pentest?

- A. Son sinónimos exactos
- B. Toda auditoría exige explotar todos los sistemas
- C. La auditoría puede usar resultados de pentest, pero tiene un alcance de controles más amplio **(correcta)**
- D. Un pentest certifica automáticamente RGPD

Explicación: El pentest explora vulnerabilidades bajo reglas; la auditoría evalúa criterios y controles más amplios.

### Propuesta

En una auditoría de controles de seguridad, ¿qué relación puede tener un test de intrusión o pentest?

- A. Son equivalentes: el listado de vulnerabilidades constituye toda la evaluación.
- B. La auditoría exige explotar cada debilidad, aunque quede fuera del alcance acordado.
- C. El pentest puede aportar evidencia al evaluar controles frente a criterios. **(correcta)**
- D. Un pentest sin hallazgos reemplaza verificar procesos y controles del SGSI.

Explicación: Un pentest prueba posibilidades de comprometer la seguridad dentro de objetivos y límites acordados. Puede aportar evidencia a una auditoría de controles, cuyas conclusiones deben contrastarse con sus criterios y alcance; los términos no son sinónimos.

- Error A: Un listado técnico puede ser una entrada, pero no define por sí solo toda auditoría ni su evaluación de criterios.
- Error B: Las pruebas deben respetar autorización y alcance. La auditoría no exige explotar toda debilidad.
- Error D: La ausencia de hallazgos en esa prueba no demuestra funcionamiento de todos los procesos y controles del SGSI.

- [NIST SP 800-115](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=152164) · 1.1 Purpose and Scope; 5.2 Penetration Testing; 5.2.1 Planning; 6 Security Assessment Planning · versión: Septiembre de 2008; PDF público alternativo del propio NIST. Técnica de prueba con objetivos, límites y autorización, no certificado de cumplimiento general · comprobado: 2026-10-28
- [ISO 19011:2026: vista pública OBP](https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:19011:ed-4:v1:en) · 3.1 Audit; 3.8 Audit criteria; 3.9 Objective evidence; 3.10 Audit evidence · versión: Edición 4, mayo de 2026; evidencia verificable pertinente respecto a criterios, con alcance de la vista pública · comprobado: 2026-10-28

Partida: `0e41c176feba2adbb8abba5f260e898194a706a05ae496271345b90a6b42e5b0` · propuesta: `1c7c1b3218129a0f30111974dac967416739fde3aa1feac1ca8ae3f8af1831d7`

## AI-GSI-B2-T11-011

Decisión: pending_review · acción: revise.

Motivo: Mantener segunda parte y clave D; contexto contractual sin confundir externo con tercera parte.

### Antes

Una organización audita a un proveedor. ¿Qué tipo de auditoría es por la relación entre partes?

- A. Forense exclusivamente
- B. Primera parte interna
- C. Tercera parte independiente por definición
- D. Segunda parte **(correcta)**

Explicación: La clasificación distingue auditoría interna, de proveedor y externa de tercera parte.

### Propuesta

Una organización cliente audita a su proveedor para comprobar requisitos contractuales. ¿Cómo se clasifica la auditoría por la relación entre las partes?

- A. Una auditoría interna de primera parte del propio proveedor.
- B. Una auditoría interna de primera parte de la organización cliente.
- C. Una auditoría independiente de tercera parte para certificación.
- D. Una auditoría de segunda parte en la relación cliente-proveedor. **(correcta)**

Explicación: El cliente que audita a su proveedor actúa como parte interesada: es segunda parte. Puede encargar la ejecución a personas que actúen en su nombre; ser externo al proveedor no basta para clasificarla como tercera parte.

- Error A: La primera parte del proveedor sería realizada por él o en su nombre para su propia auditoría interna.
- Error B: El objeto auditado es el proveedor, no los procesos internos de la organización cliente.
- Error C: No se describe una entidad independiente que evalúe para certificación; la relación es la de cliente interesado.

- [ISO 19011:2026: vista pública OBP](https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:19011:ed-4:v1:en) · Introducción, tabla 1; 3.1 Audit, notas 1 y 2 sobre primera, segunda y tercera parte · versión: Edición 4, mayo de 2026; se leyó esta parte de la vista pública, no todo el texto de pago · comprobado: 2026-10-28

Partida: `b2ff92727fdd50595a276b0dcf6bb542d58a989baa751fbc450127e41fdc3cb4` · propuesta: `96237b8abf46a2bbc68a92b2e7e3faec261e00bc5d063c58a7baf43c916e0aa8`

## AI-GSI-B2-T11-012

Decisión: pending_review · acción: revise.

Motivo: Mantener identificación ISO 19011 y clave B; alternativas normativas reales y ámbito general para distinguir 27007; actualizar edición.

### Antes

¿Qué norma ofrece directrices para auditar sistemas de gestión?

- A. ISO/IEC 27001 como guía de auditoría exclusivamente
- B. ISO 19011 **(correcta)**
- C. SQL
- D. VoiceXML

Explicación: ISO 19011 guía auditorías; ISO 27001 contiene requisitos de un SGSI.

### Propuesta

¿Qué norma ofrece directrices generales para auditar sistemas de gestión de distintas disciplinas, más allá del ámbito específico de seguridad de la información?

- A. ISO/IEC 27001, requisitos de un sistema de gestión de seguridad de la información.
- B. ISO 19011, directrices generales para auditorías de sistemas de gestión. **(correcta)**
- C. ISO/IEC 27002, orientación sobre controles de seguridad de la información.
- D. ISO/IEC 27007, orientación para auditorías de sistemas de gestión de seguridad.

Explicación: ISO 19011 proporciona orientación general sobre principios, programa, realización y competencia en auditorías de sistemas de gestión. La edición publicada consultada es 2026; la guía no constituye por sí misma una norma de certificación.

- Error A: ISO/IEC 27001 establece requisitos de un SGSI, no es la guía general de auditorías para distintas disciplinas de gestión.
- Error C: ISO/IEC 27002 orienta sobre controles de seguridad, no sobre el programa general de auditoría de sistemas de gestión.
- Error D: ISO/IEC 27007 se centra en auditar SGSI. El enunciado pide la guía general, aplicable a sistemas de gestión de distintas disciplinas.

- [ISO: catálogo ISO 19011:2026](https://www.iso.org/standard/19011) · What is ISO 19011; Who needs ISO 19011; General information y Life cycle · versión: Edición 4 publicada en mayo de 2026; 2018 retirada. Guía general para auditoría de sistemas de gestión, no norma certificable por sí misma · comprobado: 2026-10-28
- [ISO 19011:2026: vista pública OBP](https://www.iso.org/obp/ui?_escaped_fragment_=iso:std:iso:19011:ed-4:v1:en) · 1 Scope; 3.6 Audit scope; 3.7 Audit plan; 3.8 Audit criteria · versión: Edición 4, mayo de 2026; únicamente apartados públicos visibles. 2018 figura retirada en el catálogo · comprobado: 2026-10-28
- [ISO: ISO/IEC 27001:2022](https://www.iso.org/standard/27001) · Título Requirements; What is ISO/IEC 27001; General information; amendment · versión: Edición 3, octubre de 2022; catálogo público consultado con una enmienda de 2024 listada, sin afirmar lectura del clausulado de pago · comprobado: 2026-10-28
- [ISO: ISO/IEC 27002:2022](https://www.iso.org/standard/75652.html) · What is ISO/IEC 27002: relación de orientación sobre controles con requisitos del SGSI · versión: Edición 3, febrero de 2022, versión corregida marzo de 2022; catálogo público · comprobado: 2026-10-28
- [ISO: ISO/IEC 27007:2020](https://www.iso.org/standard/77802.html) · Abstract; General information; Next version under development · versión: Edición 3, enero de 2020, publicada; DIS sucesor aún en desarrollo. Orientación específica para auditorías de SGSI · comprobado: 2026-10-28

Partida: `c39fdd8f983f15623f485bc5401f6ef0cdddf0263589d934044b1422d75ae64c` · propuesta: `b5e391217bc367e61c0b8d478c471013be0a5e3f9114e488ce1a3ce778d2c505`

## AI-GSI-B2-T11-013

Decisión: pending_review · acción: revise.

Motivo: Mantener distinción requisitos/controles y clave C; comparación paralela de funciones, sin afirmar que adoptar controles garantiza cumplimiento.

### Antes

¿Qué diferencia ISO/IEC 27001 y 27002 en el tema?

- A. Ambas son protocolos de transporte
- B. 27001 es exclusivamente una lista de puertos
- C. 27001 contiene requisitos de SGSI; 27002 guía controles **(correcta)**
- D. 27002 sustituye toda legislación

Explicación: Requisitos de sistema de gestión y guía de controles cumplen funciones relacionadas pero diferentes.

### Propuesta

¿Qué relación describe correctamente ISO/IEC 27001 e ISO/IEC 27002?

- A. 27001 orienta sobre controles; 27002 establece los requisitos del SGSI.
- B. 27001 orienta sobre programas de auditoría; 27002 certifica auditores.
- C. 27001 establece requisitos del SGSI; 27002 ofrece orientación sobre controles. **(correcta)**
- D. 27001 calcula los niveles de riesgo; 27002 determina si son aceptables.

Explicación: ISO/IEC 27001 establece requisitos del sistema de gestión de seguridad de la información. ISO/IEC 27002 aporta orientación sobre controles. Sus funciones se complementan; un catálogo de controles no sustituye los requisitos del sistema de gestión.

- Error A: Invierte las funciones: requisitos de SGSI en 27001 y orientación sobre controles en 27002.
- Error B: Confunde gestión de seguridad con orientación de auditoría y certificación de personas. No es la función de esta pareja.
- Error D: Las normas no son una herramienta que calcule una puntuación ni una autoridad que acepte el riesgo: establecen requisitos de gestión y orientación de controles.

- [ISO: ISO/IEC 27001:2022](https://www.iso.org/standard/27001) · Título Requirements; What is ISO/IEC 27001; General information; amendment · versión: Edición 3, octubre de 2022; catálogo público consultado con una enmienda de 2024 listada, sin afirmar lectura del clausulado de pago · comprobado: 2026-10-28
- [ISO: ISO/IEC 27002:2022](https://www.iso.org/standard/75652.html) · What is ISO/IEC 27002: relación de orientación sobre controles con requisitos del SGSI · versión: Edición 3, febrero de 2022, versión corregida marzo de 2022; catálogo público · comprobado: 2026-10-28
- [ISO: catálogo ISO 19011:2026](https://www.iso.org/standard/19011) · What is ISO 19011; Who needs ISO 19011; General information y Life cycle · versión: Edición 4 publicada en mayo de 2026; 2018 retirada. Guía general para auditoría de sistemas de gestión, no norma certificable por sí misma · comprobado: 2026-10-28

Partida: `9e86813e57cc7b530fba412eb3d3e8640c0293ec7ced1bbcca3e28d0ae973426` · propuesta: `099de11ebef31bbd4f32955bdb8ba21db311c8274d08a3c5ce219b87f9e6c6d3`
