Supuesto práctico 1

Una vez aprobada la oposición, usted ha tomado posesión de una plaza en un Ministerio
que  dispone  de  la  aplicación  ODISEA  para  gestionar  las  Órdenes  de  Comisión  de
Servicio (OCS), las cuales están asociadas a los viajes oficiales de sus empleados.

En la Fase 1 de esta aplicación ya se ha desarrollado el flujo de solicitud y aprobación
de  la  OCS.  La  solicitud  se  compone  de  un  formulario  web  donde  el  comisionado  (la
persona que viaja) debe rellenar sus datos personales y de contacto y debe indicar el
motivo del viaje, así como el itinerario, detallando las fechas y horas de inicio y fin para
cada uno de los desplazamientos del viaje. Asimismo, en este formulario se debe incluir
el medio de transporte y, en el caso de que pernocte en destino, si va a requerir hotel.
Adicionalmente, debe adjuntar una memoria justificativa y la agenda del viaje oficial, si
existe. Una vez rellenada la solicitud, el comisionado debe recoger la autorización de su
superior jerárquico.

Tras la puesta en producción de la Fase 1 del proyecto, los responsables funcionales
del Ministerio han solicitado una Fase 2 que incluya funcionalidades para la mejora del
control  financiero  de  los  viajes  realizados.  Estas  funcionalidades  están  orientadas  a
realizar la liquidación de los gastos y dietas asociados al viaje oficial a partir de la
información aprobada en la OCS del comisionado.

Una vez el comisionado haya realizado el viaje, debe poder acceder a un formulario de
ODISEA donde iniciar la liquidación y confirmar la información del viaje que se aprobó
en la OCS, pudiendo modificar el itinerario y las fechas del viaje, siempre y cuando estén
dentro del periodo aprobado en la OCS.

En esta aplicación, el comisionado debe poder indicar la cantidad adelantada de gastos
de  desplazamiento,  aparcamiento  y  otros  gastos,  adjuntando  las  facturas  o  tickets
recibidos. Para las facturas asociadas al alojamiento en hoteles, si han sido gestionadas
por la Agencia de Viajes del Ministerio, deben descargarse directamente del Registro
Central de Facturas (RCF).

Para este ejercicio, se asume que el RCF tiene un servicio web que permite la descarga
automatizada  de  facturas.  Desde  el  sistema  RCF  se  ha  aprobado  que  la  aplicación
pueda acceder  a aquellas  facturas  donde  el  FILEID  es ODISEA.  En el campo FILEX
aparece el identificador de la OCS. Por motivos de seguridad, cualquier aplicación que
consuma  este  servicio  web  ha  de  realizarlo  de  manera  autenticada,  utilizando  el
certificado electrónico que se haya mandado a RCF y lo hará de manera asíncrona, por
las noches, para no sobrecargar el sistema.

Con  toda  esta  información,  la  aplicación  debe  calcular  la  liquidación  de  las  dietas
automáticamente y conforme a las tablas vigentes del Real Decreto 462/2002, de 24 de
mayo,  sobre  indemnizaciones  por  razón  del  servicio,  que  establecen  una  cuantía  de
dietas por alojamiento y manutención según el país destino al que se realice el viaje.
Aunque  las  cuantías  de  las  dietas  han  estado  congeladas  durante  mucho  tiempo,  la
aplicación debe permitir su actualización de una manera sencilla en previsión de que su
cuantía  económica  se  pueda  revisar.  Además  del  alojamiento  y  manutención,  la
aplicación debe incorporar las cuantías de los otros gastos de los que el comisionado
aporte  factura  o ticket  (desplazamientos,  parkings,  etc.).  Considere  que  los  viajes  no
tienen escalas ni paradas intermedias.

Una  vez  completado  el  formulario,  el  comisionado  debe  mandar  la  solicitud  de
liquidación  a  su  superior  jerárquico,  que  entrará  en  la  aplicación  para  autorizar  la

2025 - GSI-L

Página 1 de 4

liquidación realizando la conformidad de la misma. A continuación, el autorizador enviará
la solicitud a la Caja Pagadora del Ministerio, que verificará los cálculos de la liquidación
y  las  facturas  y  tickets  aportados  directamente  en  el  sistema.  Una  vez  verificados,
procederá a aprobar la propuesta de liquidación que enviará al comisionado.

En el Ministerio solo hay una Caja Pagadora y la gestiona una única persona con el rol
de Cajero Pagador. La Caja Pagadora incorporará la propuesta de liquidación aprobada
en  otra  aplicación  diferente  que  efectúa  los  pagos  y  está  fuera  del  alcance  de  este
ejercicio.

La aplicación ODISEA debe permitir un flujo de subsanación entre el comisionado y la
Caja  Pagadora,  manteniendo  en  el  sistema  todas  las  comunicaciones  realizadas  en
relación con una OCS, así como un flujo de envío de correos a través de una integración
SMTP  para  avisar  a  los  distintos  participantes  en  el  sistema  sobre  el  estado  de  los
expedientes en los que tiene que realizar alguna acción.

Finalmente, la aplicación debe poder generar informes de los gastos realizados de cada
una de las unidades del Ministerio por anualidad.

En virtud de todo lo anterior, se le solicita lo siguiente:

1.  Realice un diagrama de contexto de la funcionalidad solicitada. Mencione

al menos cinco factores críticos de éxito para este proyecto.

2.  Realice  una  propuesta  de  arquitectura  lógica,  identificando  los  distintos
módulos del sistema y explicando en detalle sus acciones, interrelaciones
y soluciones tecnológicas elegidas.

3.  Realice un diagrama entidad-relación extendido indicando los principales

atributos.

4.  El Ministerio actualmente  utiliza  Git  como  herramienta  para  el  control  de
versiones.  Explique  cómo  realizaría la  gestión del  versionado del  código
de la aplicación teniendo en cuenta que la versión en Fase 1 actualmente
está  en  producción  y,  aunque  está  estable,  puede  requerir  alguna
modificación en paralelo al desarrollo de la Fase 2. Asumiendo que tiene
una infraestructura con entornos de desarrollo, integración, preproducción
y  producción,  explique  en  detalle  cuál  sería  la  estrategia  de  pruebas  y
despliegues.

5.  Realice  una  planificación  del  desarrollo  de  la  funcionalidad  completa
utilizando  metodología  SCRUM  y  asumiendo que el  equipo  de  desarrollo
está formado por los siguientes perfiles: 1 Jefe de Proyecto/Arquitecto (con
dedicación  al  50%),  1 Analista  y  2 Analistas-Programadores.  Especifique
los diferentes roles del proyecto, sus funciones principales y los tipos de
reuniones a efectuar según la metodología SCRUM.

En  todo  lo  no  contemplado  en  este  supuesto,  podrá  efectuar  las  suposiciones  que
considere  convenientes,  debiendo  siempre  hacerlas  constar  en  su  propuesta  de
solución acompañadas de una justificación correspondiente.

2025 - GSI-L

Página 2 de 4

Supuesto práctico 2

El Departamento de Servicios Digitales Orientados a la Ciudadanía de la Agencia Estatal
de Administración  Digital  se  ha  puesto  en  contacto  con  el  equipo  de  sistemas  para
solicitar  la  implantación  de  una  nueva  versión  de  una  de  las  aplicaciones  que  están
desarrollando.  Esta  aplicación  constituye  una  pieza  clave  dentro  de  los  servicios
digitales ofrecidos por la Agencia, ya que permitirá gestionar y tramitar  las solicitudes
enviadas por los usuarios finales (tanto empresas como trabajadores autónomos) que
interactúan con la Administración para la presentación de documentación y solicitudes
sujetas a tramitación administrativa.

Como parte del equipo de la Subdirección de Sistemas y Comunicaciones, es necesario
realizar una correcta gestión del cambio solicitado y una adecuada puesta en producción
de  la  nueva  versión  de  la  aplicación,  asegurando que todos  los procesos  se  lleven a
cabo de forma ordenada, con la seguridad requerida y garantizando la coordinación con
los  distintos  equipos  implicados:  desarrollo,  seguridad,  comunicaciones,  explotación,
almacenamiento,  bases  de  datos  y  soporte  funcional,  entre  otros.  De  esta  forma,  se
cumplirá  con  los  procedimientos  internos  y  con  la  normativa  aplicable  en  materia  de
seguridad y operación de sistemas.

La  aplicación  será  utilizada  por  personal  funcionario  desde  las  Delegaciones  y
Subdelegaciones del Gobierno distribuidas por las distintas provincias españolas. Dicho
personal  accederá  al  sistema  para  la  tramitación  de  las  solicitudes,  que  previamente
han  sido  enviadas  por  los  usuarios  finales.  Estos  usuarios  subirán  información  y
documentación  a  través  de  la  plataforma,  por  lo  que  es  necesario  prever  un
almacenamiento adecuado capaz de absorber un volumen previsto de 10 TB de datos
al mes, generados de forma no uniforme y distribuidos aleatoriamente a lo largo de las
semanas.  Este  crecimiento  sostenido  obliga  a  diseñar  una  arquitectura  de
almacenamiento escalable y con políticas claras de retención, archivo y protección del
dato.

Dado que el servicio debe prestarse en modalidad 24x7, será imprescindible dotar a la
infraestructura  de  la  redundancia  suficiente  para  permitir  actualizaciones,  cambios,
mantenimiento programado y tareas de parcheo sin provocar interrupciones del servicio.

En virtud de todo lo anterior, se le solicita lo siguiente:

1.  Como  responsable  técnico  del  equipo  de  sistemas  encargado  del
despliegue realice un diagrama de la arquitectura de red y describa cómo
será el acceso de los distintos tipos de usuarios al sistema, indicando qué
perfiles  de  usuario  estarán  dados  de  alta  en  la  aplicación  y  cómo  se
gestionarán.

2.  Describa los pasos necesarios para la puesta en producción de la nueva
aplicación,  incluyendo  consideraciones  relativas  al  ciclo  de  vida  del
cambio,  validaciones  previas,  pruebas  necesarias,  coordinación  entre
equipos y procedimientos de retroceso. Además, determine qué partes de
la arquitectura deberían ser monitorizadas por el equipo de sistemas, con
qué  tecnologías  o  protocolos,  qué  métricas  serían  relevantes  y  qué
equipos dependerían de cada uno de esos elementos de monitorización.

2025 - GSI-L

Página 3 de 4

3.  El  acceso  de  usuarios  debe  incorporar  medidas  de  protección  frente  a
ataques.  Describa  qué  tipos  de  ataques  debe  prevenir  el  equipo  de
comunicaciones  y  seguridad  y  proponga  medidas  para  mitigarlos  o
evitarlos,  justificando  su  idoneidad  en  el  contexto  del  servicio  y  su
implantación en la red corporativa.

4.  Se  plantea  incorporar  un  sistema  de  ayuda  a  la  decisión  mediante  un
cuadro  de  mandos  con  capacidades  de  IA.  Proponga  una  arquitectura
adecuada para esta nueva funcionalidad, considerando orígenes de datos,
transformación, almacenamiento y explotación mediante IA.

5.  La  aplicación  debe  obtener  certificación  del  Esquema  Nacional  de
Seguridad (ENS). Categorice de forma razonada el sistema, mencionando
al  menos  una  medida  que  sea  de  aplicación  para  cada  una  de  las
dimensiones de seguridad. Cite algunas guías de seguridad del CCN que
el equipo de seguridad debería tener en cuenta durante el proyecto.

En  todo  lo  no  contemplado  en  este  supuesto,  podrá  efectuar  las  suposiciones  que
considere  convenientes,  debiendo  siempre  hacerlas  constar  en  su  propuesta  de
solución acompañadas de una justificación correspondiente.

2025 - GSI-L

Página 4 de 4
