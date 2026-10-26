#!/usr/bin/env python3
"""Author the agreed 20-item pilot as pending proposals, never as active data."""
import copy
import argparse
import hashlib
import json
import subprocess
from editorial_batches import ROOT, PROPOSALS, RUBRIC, LEDGER, banks, digest, load, materialize, render_batch, require, validate_batch, write

DATE = '2026-10-26'
COMMIT = 'a32323ccdd1ec50fbfd51122e0a4fde99c302743'
REFINED_IDS = frozenset(('MAN-GSI-P14-014', 'AI-GSI-B2-T06-015', 'AI-GSI-B2-T13-001', 'AI-GSI-B3-T01-004'))


def reference(title, url, locator, version=None):
    return dict(title=title, url=url, locator=locator, version=version, checked_at=DATE)


MODEL = reference('Microsoft: Model Binding in ASP.NET Core', 'https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding?view=aspnetcore-10.0', 'What is Model binding; Model binding and validation', 'ASP.NET Core 10.0')
SEMAPHORE = reference('Oracle: Semaphore', 'https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/concurrent/Semaphore.html', 'Class description; acquire; release; ownership', 'Java SE 25')
GPL = reference('GNU: preguntas frecuentes de licencias', 'https://www.gnu.org/licenses/gpl-faq.en.html#GPLIncompatibleLibs', 'GPLIncompatibleLibs; GPLModuleLicense; LicenseCompatibility', 'Documento consultado')
APACHE = reference('Apache License', 'https://www.apache.org/licenses/LICENSE-2.0', 'Apartados 1 y 4: definiciones y redistribución', '2.0')
MIT = reference('OSI: MIT License', 'https://opensource.org/license/mit', 'Permiso y condición de conservación del aviso', 'MIT')
CE = reference('Constitución Española', 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a55', 'Artículo 55, apartados 1 y 2', 'Texto consolidado consultado')
HTTP = reference('IETF: HTTP Semantics', 'https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2', '9.2.2 Idempotent Methods; 9.3.5 DELETE', 'RFC 9110, junio 2022')
SOAP = reference('OASIS: SOAP Message Security', 'https://docs.oasis-open.org/wss-m/wss/v1.1.1/os/wss-SOAPMessageSecurity-v1.1.1-os.html', '3 Message Protection Mechanisms; 6 Security Tokens; 8 Signatures; 9 Encryption', '1.1.1, OASIS Standard, 18 mayo 2012')
ENS = reference('Esquema Nacional de Seguridad', 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', 'Artículo 14 y anexo I: categorías de seguridad', 'Real Decreto 311/2022, texto consolidado consultado')
POWER = reference('ENS: instalaciones', 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', 'Anexo II, 5.1.4 Energía eléctrica [mp.if.4], refuerzo R1', 'Real Decreto 311/2022, texto consolidado consultado')
UPS_RUNTIME = reference('Eaton: UPS battery backup buying guide', 'https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/ups-buying-guide-for-idf-network-closets-.html', 'Understand your battery runtime needs: autonomía según carga y respaldo inmediato hasta el suministro del generador', None)
CONTRACT = reference('Ley de Contratos del Sector Público', 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a139', 'Artículo 139.1: ajuste de las proposiciones a los pliegos', 'Ley 9/2017, texto consolidado consultado')
CTFL = reference('ISTQB: Foundation Level Syllabus', 'https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf', '2.1 Software Development Lifecycle; 1.2.3 Errors, Defects, Failures, and Root Causes', '4.0.1, 15 septiembre 2024')
PREDICTIVE = reference('PMI: Choosing the right project approach', 'https://www.pmi.org/learning/library/choosing-right-project-approach-9346', 'Predictive, iterative and incremental life cycles; definición inicial y cambios formales', 'Artículo de PMI, 2014')
RISK = reference('NASA: Guidelines for Risk Management', 'https://www.nasa.gov/wp-content/uploads/2015/10/s3001_guidelines_for_risk_management_-_ver_g_-_10-25-2017.pdf', 'Tabla 4-6 Risk Planning: Watch, Mitigate, Risk Owner y trigger points', 'S3001, versión G, 25 octubre 2017')
REQUIREMENT = reference('NASA: How to Write a Good Requirement', 'https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/', 'Appendix C: Performance; Verifiability/Testability', 'NASA Systems Engineering Handbook, apéndice C')
SRS = reference('NASA: Software Engineering Requirements', 'https://nodis3.gsfc.nasa.gov/displayAll.cfm?Internal_ID=N_PR_7150_0002_&page_name=all', '3.1 Software Requirements: requisitos, restricciones, interfaces y verificación', 'NPR 7150.2, edición mostrada en el documento')
DATA_MODEL = reference('IBM: Data modeling', 'https://www.ibm.com/think/topics/data-modeling', 'Types of data models: conceptual, logical, physical', 'Documento consultado')
PARTITION = reference('PostgreSQL: Table Partitioning', 'https://www.postgresql.org/docs/18/ddl-partitioning.html', '5.12.1 Overview; 5.12.2 Declarative Partitioning; 5.12.6 Best Practices', 'PostgreSQL 18')
DELIVERY = reference('Microsoft: Continuous delivery', 'https://learn.microsoft.com/en-us/devops/deliver/what-is-continuous-delivery', 'Proceso automatizado y aprobación manual entre etapas', 'Documento consultado')
IAC = reference('Microsoft: Infrastructure as code', 'https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code', 'Modelo descriptivo, versionado e infraestructura reproducible', 'Documento consultado')

# Each explanation corresponds to the same stable option ID as its text.
# True rubric values are the preparer's assessment; decision remains pending.
EDITS = {
 'MAN-GSI-P15-075': dict(refs=[MODEL], reason='Conservar los distractores funcionalmente próximos y explicar cada confusión.',
   correct='El model binding obtiene valores de la petición y los convierte en parámetros o propiedades del modelo de entrada. La validación comprueba después las reglas del modelo.',
   errors={'A':'Seleccionar el endpoint es responsabilidad del routing; no construye el modelo de entrada.', 'B':'Comprobar reglas corresponde a validación; se realiza sobre los datos vinculados al modelo.', 'D':'La inyección de dependencias resuelve servicios registrados; no convierte datos de la petición en el modelo.'}),
 'MAN-GSI-P17-095': dict(refs=[SEMAPHORE], reason='Sustituir distractores sobre MMU y cuentas por confusiones con primitivas de sincronización.',
   options={'A':'Garantizar exclusión mutua con propiedad del bloqueo y liberación reservada al hilo que lo adquirió.', 'B':'Gestionar permisos para limitar accesos concurrentes a recursos o señalizar su disponibilidad.', 'C':'Bloquear al grupo hasta que todos los participantes alcancen el mismo punto de sincronización.', 'D':'Conservar en una cola los datos enviados entre productores y consumidores para su lectura posterior.'},
   correct='El contador representa permisos disponibles: adquirir consume un permiso y liberar lo devuelve. Con varios permisos permite acceso concurrente limitado; un semáforo no exige propiedad del hilo.',
   errors={'A':'Describe la propiedad característica de ciertos bloqueos; un semáforo puede liberarse desde otro hilo.', 'C':'La reunión de un grupo en un punto describe una barrera, no un contador de permisos.', 'D':'Una cola transporta elementos; el semáforo cuenta permisos, aunque pueda coordinar el uso de una cola.'}),
 'MAN-GSI-P16-155': dict(refs=[GPL, APACHE, MIT], reason='Comparar estrategias de cumplimiento plausibles y explicitar la dependencia de versiones y forma de combinación.',
   options={'A':'Aplicar la licencia más permisiva a la distribución completa, manteniendo solo los avisos que esa licencia exige.', 'B':'Examinar licencias, versiones y forma de combinación o distribución de cada componente antes de decidir la compatibilidad.', 'C':'Aplicar la licencia del componente propietario al conjunto, conservando los demás únicamente en un inventario interno.', 'D':'Considerar compatibles las licencias citadas por permitir uso comercial, sin distinguir enlace, distribución o versión de GPL.'},
   correct='La coexistencia de componentes no determina una licencia única. Deben examinarse permisos y obligaciones de cada versión y la forma de combinación y distribución, incluidas las condiciones de copyleft.',
   errors={'A':'Una licencia permisiva no elimina las obligaciones de los otros componentes.', 'C':'Incluir código propietario no permite cambiar unilateralmente las condiciones del código recibido.', 'D':'Permitir uso comercial no resuelve la compatibilidad; versiones, enlace y distribución pueden cambiar el análisis.'}),
 'MAN-GSI-P14-014': dict(refs=[CE], reason='Mantener la evaluación conceptual del artículo 55.2 con alternativas paralelas sobre derechos y garantías, sin concentrar las condiciones en la correcta.',
   statement='Para personas determinadas investigadas por actuaciones de bandas armadas o elementos terroristas, ¿qué combinación de derechos y garantías corresponde a la suspensión individual del artículo 55.2 de la Constitución?',
   options={'A':'Arts. 17.2, 18.2 y 18.3; autorización administrativa y control parlamentario, sin intervención judicial.', 'B':'Arts. 17.2, 18.2 y 18.3; intervención judicial y control parlamentario, previa declaración de excepción o sitio.', 'C':'Arts. 17.2, 18.2 y 21.1; intervención judicial y control parlamentario, con desarrollo mediante ley orgánica.', 'D':'Arts. 17.2, 18.2 y 18.3; intervención judicial y control parlamentario, con desarrollo mediante ley orgánica.'},
   correct='El artículo 55.2 permite que una ley orgánica determine los casos y la forma de suspensión individual de los derechos de los artículos 17.2, 18.2 y 18.3. Exige intervención judicial y control parlamentario, dentro de las investigaciones descritas.',
   errors={'A':'La intervención judicial es una garantía necesaria; una autorización administrativa no la sustituye.', 'B':'La declaración de excepción o sitio pertenece al régimen de suspensión general del apartado 1; no es el requisito del régimen individual del apartado 2.', 'C':'El artículo 55.2 incluye el secreto de las comunicaciones del artículo 18.3, no el derecho de reunión del artículo 21.1.'}),
 'AI-GSI-B2-T06-015': dict(refs=[HTTP], reason='Aplicar la idempotencia a una repetición de DELETE con respuestas distintas; separar efecto solicitado, seguridad y efectos auxiliares.',
   statement='Una API elimina un recurso con DELETE y responde 204. Una petición idéntica posterior recibe 404 porque el recurso ya no existe. ¿Qué afirmación es correcta sobre la idempotencia de este comportamiento?',
   options={'A':'Para ser idempotente, la repetición tendría que devolver también 204 y el mismo cuerpo de respuesta.', 'B':'El cambio de respuesta es compatible con la idempotencia si se mantiene el mismo efecto solicitado sobre el recurso.', 'C':'El caso convierte DELETE en un método seguro, porque la segunda petición ya no modifica el recurso.', 'D':'La idempotencia exige que el servidor omita también los registros de actividad de la petición repetida.'},
   correct='La idempotencia compara el efecto solicitado al repetir peticiones idénticas, no sus respuestas. El recurso permanece eliminado tras ambas peticiones: recibir después 404 es compatible con esa propiedad y no convierte DELETE en un método seguro.',
   errors={'A':'El RFC permite que las respuestas a repeticiones difieran; no exige reproducir el código ni el cuerpo de la primera.', 'C':'Un método seguro no solicita un cambio de estado. DELETE sí lo solicita, aunque un recurso ya eliminado no cambie al repetir la petición.', 'D':'El servidor puede registrar cada petición por separado. La idempotencia se refiere al efecto solicitado sobre el recurso, no a eliminar todos los efectos auxiliares.'}),
 'AI-GSI-B2-T06-012': dict(refs=[SOAP], reason='Usar responsabilidades cercanas del ecosistema de servicios como distractores.',
   options={'A':'Describir operaciones y tipos del servicio para que el cliente genere un contrato de invocación.', 'B':'Proteger el canal de transporte mediante TLS, sin mecanismos dentro del mensaje SOAP.', 'C':'Proteger mensajes SOAP con firmas, cifrado y tokens de seguridad según el perfil empleado.', 'D':'Coordinar la confirmación o reversión de transacciones distribuidas entre varios servicios.'},
   correct='WS-Security define mecanismos de seguridad del mensaje SOAP: integridad, confidencialidad y asociación de tokens. Su uso concreto depende del perfil y de la política de seguridad.',
   errors={'A':'La descripción del contrato corresponde a WSDL, no a los mecanismos de protección de WS-Security.', 'B':'TLS protege el transporte; WS-Security incorpora mecanismos en el mensaje y puede complementarlo.', 'D':'Coordinar transacciones es otra responsabilidad del ecosistema WS-*, no la función de WS-Security.'}),
 'AI-GSI-B2-T10-019': dict(refs=[ENS], reason='Comparar funciones del ENS sin confundir categoría, amenaza y selección de medidas.',
   options={'A':'La categoría depende de la probabilidad de cada amenaza; el análisis fija el impacto institucional.', 'B':'La categoría se basa en el impacto; el análisis examina riesgos y permite justificar su tratamiento.', 'C':'La categoría identifica el riesgo residual; el análisis asigna los niveles de las dimensiones de seguridad.', 'D':'La categoría determina una lista definitiva de medidas; el análisis se limita a comprobar su instalación.'},
   correct='El anexo I fundamenta la categoría en el impacto sobre información y servicios. El artículo 14 exige analizar y tratar riesgos y justificar medidas proporcionadas; categorizar no sustituye esa gestión.',
   errors={'A':'Intercambia las funciones: la probabilidad de amenazas no es la base de categorización del anexo I.', 'C':'La categoría no es una medida del riesgo residual tras aplicar controles.', 'D':'Las medidas deben justificarse frente a los riesgos; la gestión no se reduce a verificar instalaciones.'}),
 'AI-GSI-B2-T13-001': dict(refs=[POWER, UPS_RUNTIME], reason='Evaluar continuidad eléctrica con un microcaso de arranque del grupo electrógeno y distinguir reserva de energía, acondicionamiento, redundancia y conmutación.',
   statement='Un CPD necesita mantener encendidos sus servidores durante el intervalo entre un corte eléctrico y la entrada en servicio del grupo electrógeno. ¿Qué medida debe dimensionarse y probarse con la carga prevista para cubrir ese intervalo?',
   options={'A':'Instalar un regulador automático de tensión convencional para estabilizar la salida de la acometida.', 'B':'Instalar fuentes de alimentación redundantes en los servidores, conectadas a la misma acometida.', 'C':'Instalar un SAI con baterías para alimentar los servidores hasta que el grupo esté disponible.', 'D':'Instalar un conmutador automático que transfiera la carga al grupo cuando este esté disponible.'},
   correct='El SAI aporta la energía durante el intervalo sin suministro. Su potencia y autonomía deben ser suficientes para la carga prevista hasta que el grupo pueda asumirla. La existencia de un grupo no elimina la necesidad de cubrir su tiempo de arranque.',
   errors={'A':'Regular la tensión no aporta energía cuando la acometida deja de suministrarla; falta reserva para el intervalo.', 'B':'Dos fuentes sobre la misma acometida pierden su suministro al producirse ese corte; la redundancia de fuentes no añade autonomía.', 'D':'El conmutador selecciona una fuente disponible, pero no almacena la energía necesaria mientras el grupo todavía no suministra.'}),
 'AI-GSI-B2-T15-001': dict(refs=[CONTRACT], reason='Explicitar el carácter obligatorio del requisito y evitar compensarlo con precio.',
   statement='Una oferta incumple una prescripción obligatoria de los pliegos y no se admite una variante que la exceptúe. ¿Cómo debe valorarse su precio reducido?',
   options={'A':'Compensando el incumplimiento con una mayor puntuación en el criterio económico.', 'B':'Admitiendo la oferta y aplazando el cumplimiento al momento de la adjudicación.', 'C':'Otorgando prioridad a su evaluación por mejorar el coste total previsto del contrato.', 'D':'Sin compensar el incumplimiento: el precio no convierte en admisible una oferta que contraviene esa prescripción.'},
   correct='Las proposiciones deben ajustarse a los pliegos. En el supuesto descrito, un precio menor no compensa el incumplimiento de una prescripción obligatoria ni lo transforma en un criterio ponderable.',
   errors={'A':'Ponderar precio entre ofertas admisibles no permite sustituir una condición obligatoria.', 'B':'La hipótesis no permite aplazar el requisito: la oferta debe ajustarse a los pliegos.', 'C':'El ahorro no elimina el examen previo de admisibilidad de la oferta.'}),
 'AI-GSI-B3-T01-002': dict(refs=[CTFL], reason='Distinguir organización del ciclo y prácticas de trabajo sin caricaturizar las metodologías.',
   options={'A':'El modelo organiza etapas y relaciones; la metodología concreta prácticas y formas de trabajo.', 'B':'El modelo asigna roles y plantillas; la metodología solo determina la secuencia temporal de etapas.', 'C':'El modelo describe exclusivamente pruebas; la metodología organiza el resto del desarrollo.', 'D':'El modelo se aplica a proyectos predictivos; la metodología se reserva a proyectos ágiles.'},
   correct='Un modelo del ciclo de vida organiza actividades y relaciones temporales. Métodos y prácticas detallan cómo ejecutar el trabajo; ambos pueden combinarse y adaptarse al contexto.',
   errors={'B':'Invierte la distinción entre organización del ciclo y concreción de las prácticas.', 'C':'El ciclo abarca el desarrollo completo, no solo sus pruebas.', 'D':'La distinción no depende de separar proyectos predictivos y ágiles.'}),
 'AI-GSI-B3-T01-004': dict(refs=[CTFL, PREDICTIVE], reason='Aplicar el riesgo de feedback tardío a un proyecto en cascada con requisitos cambiantes y comparar riesgos de gestión próximos.',
   statement='Un proyecto con requisitos que van cambiando aplica una cascada rígida: cierra requisitos, diseño y codificación antes de que los usuarios prueben por primera vez el producto ejecutable en aceptación. Entonces se detecta un cambio necesario en un flujo. ¿Qué riesgo ilustra principalmente este modo de obtener feedback?',
   options={'A':'Desviaciones por incorporar cambios sin autorización ni evaluación de su impacto en el proyecto.', 'B':'Retrasos por repetir pruebas de regresión tras cada entrega parcial del producto a los usuarios.', 'C':'Retrabajo por descubrir tarde cambios que afectan a requisitos, diseño y código ya cerrados.', 'D':'Inconsistencias por integrar en paralelo varias versiones funcionales de un mismo módulo.'},
   correct='El contraste ejecutable llega cuando ya existen artefactos dependientes del requisito: cambiar el flujo puede obligar a revisar requisitos, diseño y código. El riesgo es el retrabajo tardío; el modelo no impide realizar antes revisiones estáticas.',
   errors={'A':'El caso no describe cambios sin autorizar. Un control formal correcto tampoco elimina el coste de descubrir su necesidad demasiado tarde.', 'B':'No se describen entregas parciales sucesivas a usuarios; su primera prueba del ejecutable se pospone hasta aceptación.', 'D':'No se atribuye el problema a versiones desarrolladas en paralelo, sino al momento de obtener feedback de los usuarios.'}),
 'AI-GSI-B3-T02-004': dict(refs=[PREDICTIVE], reason='Eliminar la referencia a una tabla no mostrada y comparar enfoques de planificación reales.',
   statement='¿Qué caracteriza al enfoque predictivo de gestión de proyectos?',
   options={'A':'Definir inicialmente gran parte del alcance y gestionar sus modificaciones mediante control formal.', 'B':'Precisar el alcance de cada iteración principalmente a partir de la experiencia del incremento previo.', 'C':'Gestionar el trabajo mediante flujo continuo y límites de tareas simultáneas como estructura principal.', 'D':'Descubrir el alcance mediante experimentos sucesivos sin establecer inicialmente una línea base detallada.'},
   correct='El enfoque predictivo busca definir el alcance con anticipación y controlar sus cambios. Puede admitir ajustes; no implica ausencia de documentación ni prohíbe adaptar el proceso.',
   errors={'B':'La elaboración progresiva por iteraciones es característica de enfoques iterativos o adaptativos.', 'C':'El flujo continuo y los límites de trabajo en curso describen otra forma de organizar el trabajo.', 'D':'El descubrimiento experimental continuo no caracteriza la planificación predictiva descrita.'}),
 'AI-GSI-B3-T02-013': dict(refs=[RISK], reason='Comparar registros incompletos del riesgo con una gestión que permite actuar y seguirlo.',
   options={'A':'Una puntuación agregada y una categoría, dejando la respuesta para cuando ocurra el evento.', 'B':'Un responsable y un coste estimado, sustituyendo el seguimiento por una aceptación inicial permanente.', 'C':'Probabilidad e impacto, responsable, respuesta prevista y condiciones que disparen su seguimiento o actuación.', 'D':'Una descripción del impacto y una fecha de cierre, dando por aplicada la mitigación desde su planificación.'},
   correct='Un riesgo gestionable requiere valoración, responsable y tratamiento. Los disparadores y el seguimiento permiten decidir cuándo actuar; planificar una mitigación no demuestra que ya sea efectiva.',
   errors={'A':'La puntuación ayuda a priorizar, pero omite la respuesta anticipada y su responsable.', 'B':'La aceptación no elimina la necesidad de revisar el riesgo cuando cambian sus condiciones.', 'D':'Una respuesta planificada debe ejecutarse y verificarse; no equivale a mitigación efectiva.'}),
 'AI-GSI-B3-T03-005': dict(refs=[REQUIREMENT], reason='Comparar requisitos de rendimiento próximos y precisar la condición de aceptación.',
   statement='Bajo una carga de prueba previamente definida, ¿qué requisito fija un criterio de aceptación del tiempo de respuesta verificable?',
   options={'A':'El percentil 95 del tiempo de respuesta será inferior a 2 segundos durante la prueba acordada.', 'B':'El tiempo de respuesta mejorará respecto a la versión anterior en la medida técnicamente posible.', 'C':'La mayoría de las operaciones ofrecerá una experiencia de respuesta suficientemente fluida.', 'D':'El sistema mantendrá una latencia competitiva con productos de características semejantes.'},
   correct='El percentil y el umbral permiten evaluar el resultado bajo condiciones de prueba acordadas. Un adjetivo o una comparación sin referencia medible no fija el mismo criterio de aceptación.',
   errors={'B':'No define una mejora mínima exigible ni un límite verificable para aceptar la prueba.', 'C':'No cuantifica la proporción requerida ni el tiempo considerado fluido.', 'D':'No identifica los productos, las condiciones ni el umbral que permitirían decidir la aceptación.'}),
 'AI-GSI-B3-T03-017': dict(refs=[SRS], reason='Diferenciar una especificación de requisitos de otros documentos de ingeniería.',
   options={'A':'Contexto y alcance, requisitos funcionales y de calidad, interfaces, restricciones y criterios de verificación.', 'B':'Distribución de componentes, decisiones internas de diseño, patrones y detalle de clases de implementación.', 'C':'Estrategia de ejecución de pruebas, recursos del laboratorio, calendario y asignación de casos a probadores.', 'D':'Procedimientos operativos, resolución de incidencias conocidas y tareas de mantenimiento en producción.'},
   correct='La ERS/SRS define lo que debe satisfacer el software y las condiciones para comprobarlo. Debe describir requisitos e interfaces sin confundirse con un diseño interno o un manual operativo.',
   errors={'B':'El detalle de solución e implementación corresponde al diseño, no al contenido principal de una ERS.', 'C':'Organizar la ejecución y los recursos de prueba corresponde a su planificación.', 'D':'Los procedimientos de operación pertenecen al manual operativo, aunque deriven de requisitos.'}),
 'AI-GSI-B3-T04-001': dict(refs=[DATA_MODEL], reason='Contrastar niveles del modelo de datos en lugar de parámetros físicos aislados.',
   options={'A':'Entidades del dominio, relaciones, cardinalidades y reglas del negocio que deben representarse.', 'B':'Tablas del motor elegido, índices compuestos, particiones y ubicación física de sus segmentos.', 'C':'Sentencias de creación, tipos propietarios del SGBD y parámetros de almacenamiento de cada tabla.', 'D':'Planes de ejecución, métodos de acceso a índices y orden concreto de las operaciones de consulta.'},
   correct='El modelo conceptual describe la información del dominio y sus relaciones. Las decisiones específicas del motor y los accesos físicos se abordan después, sin sustituir el análisis del negocio.',
   errors={'B':'Mezcla estructuras y decisiones de implementación física posteriores al nivel conceptual.', 'C':'El DDL y los parámetros específicos del motor pertenecen a la implementación del esquema.', 'D':'Los planes de ejecución describen cómo acceder a los datos, no qué información representa el dominio.'}),
 'AI-GSI-B3-T04-020': dict(refs=[PARTITION], reason='Separar particionado, índices, fragmentación lógica y replicación.',
   options={'A':'Crear estructuras auxiliares ordenadas para localizar filas sin dividir los datos de la tabla.', 'B':'Mantener copias completas de la tabla en varios servidores para mejorar disponibilidad y lectura.', 'C':'Dividir físicamente una tabla lógica según una estrategia, manteniendo las decisiones de modelo e índices necesarias.', 'D':'Separar las columnas de una entidad en nuevas relaciones para eliminar dependencias y redundancias.'},
   correct='El particionado divide una tabla lógica en partes según una estrategia. Sus beneficios dependen del patrón de acceso; no garantiza acelerar toda consulta ni reemplaza el diseño de índices.',
   errors={'A':'Describe la función de un índice, no la división de los datos en particiones.', 'B':'Duplicar una tabla completa describe replicación, no particionado.', 'D':'La descomposición de relaciones corresponde al diseño lógico, no al particionado descrito.'}),
 'AI-GSI-B3-T06-007': dict(refs=[DELIVERY], reason='Precisar que la diferencia está en el paso a producción y no en omitir controles.',
   options={'A':'La entrega exige publicar cada cambio en producción; el despliegue exige siempre una aprobación manual.', 'B':'La entrega automatiza solo compilación; el despliegue comienza cuando se redacta el código de pruebas.', 'C':'La entrega evita entornos previos a producción; el despliegue los sustituye por pruebas manuales finales.', 'D':'La entrega mantiene cambios listos para publicar con posible aprobación; el despliegue los publica tras superar controles automáticos.'},
   correct='La entrega continua mantiene cambios preparados para su publicación y puede incluir una decisión manual. El despliegue continuo automatiza también el paso a producción tras superar los controles definidos.',
   errors={'A':'Invierte la diferencia sobre la decisión manual de publicación.', 'B':'La entrega continua abarca más que compilar; la distinción no es cuándo se escriben las pruebas.', 'C':'Los entornos y las pruebas previas son compatibles con ambos enfoques.'}),
 'AI-GSI-B3-T06-010': dict(refs=[IAC], reason='Distinguir IaC de inventario, automatización de interfaz y documentos operativos.',
   options={'A':'Inventariar recursos existentes mediante capturas de consola, sin definir un modelo que permita desplegarlos.', 'B':'Documentar la configuración en un manual para repetir cambios desde la interfaz de administración.', 'C':'Definir infraestructura mediante código versionable, revisable y ejecutable por herramientas de automatización.', 'D':'Supervisar métricas de los recursos y generar alertas, sin describir cómo provisionar su configuración.'},
   correct='IaC expresa la infraestructura mediante definiciones que pueden versionarse, revisarse y automatizarse. Facilita reproducir cambios; no equivale a conservar capturas ni a monitorizar recursos existentes.',
   errors={'A':'Un inventario describe lo observado; no define por sí mismo cómo provisionar el entorno.', 'B':'Un manual puede orientar al operador, pero no ofrece la definición automatizable propia de IaC.', 'D':'La monitorización observa funcionamiento; no sustituye la definición de infraestructura.'}),
 'AI-GSI-B3-T07-003': dict(refs=[CTFL], reason='Comparar secuencias causales próximas sin afirmar que todo defecto produce siempre un fallo.',
   options={'A':'Un fallo humano introduce un error del producto, que solo se considera defecto cuando llega a producción.', 'B':'Un defecto observado causa necesariamente un fallo en cada ejecución, con independencia de las condiciones.', 'C':'Un error y un fallo son propiedades internas del código; un defecto es la diferencia visible para el usuario.', 'D':'Un error humano puede introducir un defecto; su ejecución en determinadas condiciones puede manifestar un fallo.'},
   correct='El error es una acción humana equivocada; el defecto queda en un producto de trabajo y el fallo es su manifestación observable. No todo defecto se manifiesta en todas las ejecuciones.',
   errors={'A':'El defecto puede existir antes de producción; la cadena confunde los términos.', 'B':'La manifestación de un defecto puede depender de condiciones específicas de ejecución.', 'C':'Intercambia defecto interno y fallo observable.'})
}


def refresh_pending_proposal(root, batch):
    """Replace only the four authorized drafts; retain exact prior artifacts."""
    target = root / PROPOSALS / 'lote-001.json'
    doc = root / 'docs/GSI_REVISION_PILOTO_001.md'
    old = validate_batch(load(target))
    require(old['id'] == batch['id'] == 'GSI-EDITORIAL-001', 'Solo se actualiza el piloto GSI-EDITORIAL-001.')
    require(not any(entry['batch']['id'] == batch['id'] for entry in load(root / LEDGER)['batches']), 'Un lote aceptado o aplicado no se reemplaza por propuestas nuevas.')
    require(all(i['decision'] == 'pending_review' for i in old['items'] + batch['items']), 'Se conservan las decisiones del revisor; no se sobrescribe una decisión existente.')
    require([i['id'] for i in old['items']] == [i['id'] for i in batch['items']], 'El piloto debe conservar sus 20 IDs y su orden.')
    for previous, proposed in zip(old['items'], batch['items']):
        require(previous['before'] == proposed['before'] and previous['base_sha256'] == proposed['base_sha256'], 'La instantánea del banco de partida debe permanecer intacta.')
        if previous['id'] not in REFINED_IDS:
            require(previous == proposed, f"{previous['id']}: conserve la propuesta ya construida.")
        require(previous['after']['correct_option'] == proposed['after']['correct_option'], 'Esta actualización conserva las claves originales.')
    materialize(batch, banks(root))
    require(doc.is_file() and doc.read_text('utf-8') == render_batch(old), 'La ficha existente contiene otra salida o anotaciones: consérvela antes de regenerar.')
    if old == batch:
        return
    history = root / PROPOSALS / 'history' / digest(old)
    archived = {history / target.name: target.read_bytes(), history / doc.name: doc.read_bytes()}
    for path, content in archived.items():
        require(not path.exists() or path.read_bytes() == content, f'{path}: existe una instantánea histórica distinta.')
    for path, content in archived.items():
        if not path.exists():
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(content)
    previous_bytes = target.read_bytes(), doc.read_bytes()
    try:
        write(target, batch)
        doc.write_text(render_batch(batch), 'utf-8')
    except OSError:
        target.write_bytes(previous_bytes[0])
        doc.write_bytes(previous_bytes[1])
        raise


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--refresh-proposals', action='store_true', help='Regenera solo las cuatro propuestas pendientes autorizadas y conserva la versión anterior.')
    args = parser.parse_args()
    original_report = json.loads(subprocess.check_output(['git', 'show', f'{COMMIT}:logs/gsi-question-quality.json'], cwd=ROOT).decode('utf-8'))
    ai_flags = sorted((i for i in original_report['findings'] if i['bank'] == 'ai'), key=lambda i: (i['priority'], i['id']))
    pilot = ['MAN-GSI-P15-075', 'MAN-GSI-P17-095', 'MAN-GSI-P16-155', 'MAN-GSI-P14-014', 'AI-GSI-B2-T06-015']
    pilot += [i['id'] for i in ai_flags if i['id'] not in pilot][:15]
    require(set(pilot) == set(EDITS), 'El contenido del piloto no coincide con la selección acordada.')
    collections = banks()
    questions = {q['id']: q for bank in ('manual', 'ai') for q in collections[bank]['questions']}
    items = []
    for id in pilot:
        before = questions[id]
        after, edit = copy.deepcopy(before), EDITS[id]
        if 'statement' in edit: after['statement'] = edit['statement']
        if 'options' in edit:
            after['options'] = [{'id': o['id'], 'text': edit['options'][o['id']]} for o in before['options']]
        after['feedback'] = {'correct': edit['correct'], 'incorrect': 'Revisa la distinción conceptual entre la respuesta correcta y la alternativa elegida.', 'incorrect_options': edit['errors']}
        after['source']['editorial_references'] = edit['refs']
        after['source']['editorial_revision_id'] = 'GSI-EDITORIAL-001'
        after['updated_at'] = DATE
        items.append({'id': id, 'bank': before['origin'], 'action': 'revise', 'decision': 'pending_review', 'base_sha256': digest(before), 'content_sha256': digest(after), 'before': before, 'after': after, 'reasons': [edit['reason']], 'references': edit['refs'], 'rubric': dict.fromkeys(RUBRIC, True)})
    batch = dict(version=1, id='GSI-EDITORIAL-001', prepared_at=DATE, baseline_commit=COMMIT, items=items)
    validate_batch(batch)
    remaining_flags = [i['id'] for i in ai_flags if i['id'] not in pilot]
    remaining = sorted((q for q in questions.values() if q['id'] not in pilot + remaining_flags), key=lambda q: (q['block_id'], q['topic_id'], len(q['feedback']['correct'].split()) >= 15, q['id']))
    baseline = {'version': 1, 'commit': COMMIT, 'date': DATE, 'banks_sha256': {bank: hashlib.sha256((ROOT / f'data/questions-{bank}.json').read_bytes()).hexdigest() for bank in collections}, 'original_ai_findings': [i['id'] for i in ai_flags], 'pilot_ids': pilot, 'review_order': pilot + remaining_flags + [q['id'] for q in remaining]}
    outputs = {ROOT / PROPOSALS / 'baseline.json': baseline, ROOT / PROPOSALS / 'lote-001.json': batch}
    if args.refresh_proposals:
        require(load(ROOT / PROPOSALS / 'baseline.json') == baseline, 'La cola y los hashes del banco auditado deben permanecer intactos.')
        refresh_pending_proposal(ROOT, batch)
        print('Piloto regenerado: cuatro propuestas refinadas, 16 conservadas y aceptación pendiente. Bancos activos intactos.')
        return
    for path, value in outputs.items():
        require(not path.exists() or load(path) == value, f'{path.name} ya contiene una salida diferente; no se sobrescribe.')
    doc = ROOT / 'docs/GSI_REVISION_PILOTO_001.md'
    require(not doc.exists() or doc.read_text('utf-8') == render_batch(batch), 'La ficha del piloto ya contiene otra versión.')
    for path, value in outputs.items(): write(path, value)
    doc.write_text(render_batch(batch), 'utf-8')
    print('Piloto: 20 propuestas pendientes; bancos activos intactos. Cola completa: 1762 preguntas.')


if __name__ == '__main__':
    main()
