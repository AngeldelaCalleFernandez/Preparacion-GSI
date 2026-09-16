Supuesto práctico 1

La Secretaría General de Administración Digital (SGAD) presta servicio a distintos
organismos  públicos  a  través  de  las  aplicaciones  que  se  proveen  como  servicios
los  que  destaca,  por  sus  necesidades  de
comunes  y  compartidos,  entre
almacenamiento,  el  proyecto  NubeSARA,  que  permite  a  los  distintos  organismos  el
despliegue, en la nube híbrida de la Administración General del Estado, de sus propias
máquinas virtuales con la provisión del almacenamiento asociada. Asimismo, la SGAD
provee  a  los  organismos  de  capacidades  de  almacenamiento  que  permiten  alojar  en
esta infraestructura altos volúmenes de información.

En este sentido, para aquellos organismos que tienen la necesidad de un alojamiento
adicional  externo  a  sus  centros  de  datos,  se  les  proporciona  una  funcionalidad  de
almacenamiento,  llamada  Tercera  Copia  y  Dato  Frío,  complementaria  a  las  dos
habituales con las que pueda contar el organismo en cuestión.

Se ha estimado que el almacenamiento necesario para los datos de los organismos será
de  10.400 TB,  por  lo que  la  solución  propuesta deberá  disponer,  al menos,  de  dicha
capacidad neta.

La  solución  de  almacenamiento  propuesta  debe  garantizar  el  cumplimiento  de  lo
establecido  en  el  Esquema  Nacional  de  Seguridad  para  el  cumplimiento  de  una
categorización de NIVEL ALTO.

El Sistema de Almacenamiento para Tercera Copia y Dato Frío se repartirá entre los
tres CPDs corporativos de la SGAD, con las siguientes características y funcionalidades
mínimas:

•  Protocolo S3 nativo o equivalente y disponible desde todos los nodos.
•  Nodos  de  almacenamiento  de  objetos  para  crear  un  grid  de  almacenamiento
distribuido en cada CPD y conectando los 3 CPDs en modo Activo/Activo/Activo.
•  Solución en alta disponibilidad con al menos 15 nodos de cómputo y datos por

cada CPD.

•  Se  incluirán  dos  balanceadores  de  carga  hardware  para  balanceo  de  las

peticiones entre los 15 nodos de cómputo/almacenamiento.
•  Cada nodo debe tener un mínimo de 40 cores de procesamiento.
•  Cada nodo debe tener un mínimo de 192 GB de memoria RAM.
•  Cada nodo debe tener un mínimo de 1600 GB SSD para caché de aceleración.
•  Al menos 1.000 TB brutos de discos NL-SAS por nodo.
•  Soporte a conectividad 25/10 GbE para S3.
•  Conectividad consolidada de todos los nodos para salida 100 GbE.
•  Redundancia en todos los enlaces de datos hacia los nodos y hacia cualquier

elemento que conforme la solución.

•  Adicionalmente,  se  deberán  suministrar

los  elementos  de  conectividad
necesarios para posibilitar la interconexión entre los nodos propuestos en cada
uno  de  los  centros  de  datos.  Esto  permitirá  establecer  una  solución  scale-out
que  incrementará  el  rendimiento  de  esta  y  permitirá  una  reorganización  y  un
movimiento de las cargas entre los nodos en caliente y sin pérdida de servicio.

Asimismo,
integración  con  aquellos
almacenamientos adicionales que en un futuro se puedan configurar como de “nivel 2”,

la  solución  propuesta  debe  soportar

la

                         2024 - GSI-L

Página 1 de 4

permitiendo un desbordamiento automático desde la solución descrita hacia este nuevo
almacenamiento, de manera transparente para los clientes u organismos finales y con
la posibilidad de recuperación de la información sin la intervención manual de personal
operador de la SGAD.

En virtud de todo lo anterior, se le solicita lo siguiente:

1.  Realice un diagrama de arquitectura de red para el sistema propuesto.

2.  Identifique

las  fases  y  actividades  necesarias  para  llevar  a  cabo

la

implantación completa del servicio.

3.  Indique, al menos, 5 medidas que se deben tener en cuenta para el bastionado
o securización de los elementos detallados en la arquitectura del sistema, con
la descripción y objetivos que las justifiquen. Señale alguna de las guías del
Centro Criptológico Nacional u otros organismos de reconocido prestigio que
considere sean de aplicación.

4.  La arquitectura tiene que ser escalable, tanto a nivel horizontal como vertical.
¿Cómo plantearía cada uno de estos escalados? Plantee la conectividad del
CPD con la nube pública para permitir el desbordamiento de datos de forma
automática.

5.  Si algún organismo solicitase el cifrado para su volumen de almacenamiento,
¿cómo  se  podría  llevar  a  cabo  este  requisito?  ¿Qué  acciones  habría  que
realizar para poder ofrecer esta funcionalidad?

En  todo  lo  no  contemplado  en  este  supuesto,  podrá  efectuar  las  suposiciones  que
considere  convenientes,  debiendo  siempre  hacerlas  constar  en  su  propuesta  de
solución acompañadas de una justificación correspondiente.

                         2024 - GSI-L

Página 2 de 4

Supuesto práctico 2

La Dirección  General  de  Carreteras (DGC)  es  el  órgano  directivo  del Ministerio  de
Transportes, Movilidad y Agenda Urbana (MITMA), adscrito a la Secretaría General de
Infraestructuras, cuyo ámbito de actuación es la Red de Carreteras del Estado. Entre
sus  funciones  se  encuentra  la  elaboración,  seguimiento,  supervisión  y  control  de  los
proyectos  básicos  o  de  trazado  y  proyectos  de  construcción  dentro  de  su  ámbito  de
actuación, así como la tramitación ambiental requerida en cada caso según la legislación
vigente.

Con  carácter  general,  los  proyectos  de  carreteras  pasan  por  diversas  fases  de
tramitación administrativa desde su inicio, las cuales pueden resumirse de una forma
muy simplificada en:

Fase 1: Aprobación provisional del proyecto de trazado.

Fase 2: Trámite de información pública.

Fase 3: Aprobación definitiva del proyecto de trazado.

Fase 4: Evaluación de impacto ambiental.

Fase 5: Aprobación del proyecto de construcción.

En aras de favorecer la transparencia durante todo el proceso de tramitación, una de las
principales  iniciativas  que  está  impulsando  actualmente  la  DGC  es  la  creación  de  un
portal web en el que poner a disposición de todos los interesados la información relativa
al  estado de  tramitación  de  los expedientes  administrativos de  estos proyectos,  cuya
tramitación  corre  a cargo de  los  gestores  de  la DGC  que  se  designen  por  el  Director
General de Carreteras.

Se hace constar que el resto de departamentos ministeriales y administraciones públicas
que  sean  competentes  para  la  emisión  de  informes  preceptivos,  como  parte  del
procedimiento  de  aprobación  de  estos  proyectos  (Confederaciones  Hidrográficas,
Dirección General de Calidad y Evaluación Ambiental, Servicios Periféricos de Costas,
Consejerías  de  Comunidades  Autónomas,  Ayuntamientos,  etc.),  deberán  tener
asignada un área de acceso para poder cargar estos informes que se incorporarán al
expediente.

Para poder acceder a todos los datos, el ciudadano o las empresas interesadas deberán
registrarse  en  el  portal  web.  Los  usuarios  registrados  podrán  guardar  como  favoritos
aquellos  proyectos  sobre  los  que  quieran  hacer  el  seguimiento  de  su  evolución,  así
como recibir avisos cuando estos sean actualizados. Debido a la amplitud de proyectos
que  se  gestionan  en  la  DGC,  será  necesario  desarrollar  un  buscador  que  permita
realizar búsquedas mediante los campos más importantes de los proyectos.

Cuando el procedimiento se encuentre en fase de información pública, se deberá abrir
un  plazo  durante  el  cual  los  usuarios  registrados  puedan  hacer  sus  alegaciones
directamente a través de esta plataforma. La información registrada deberá ser firmada
y  el  usuario  recibirá  un  código  para  validar  la  entrega  de  esta  información.  Esta

                         2024 - GSI-L

Página 3 de 4

documentación  será  analizada  por  la  DGC  e  incorporada  al  expediente,  si  así  lo
considerase oportuno.

El sistema contará con un cuadro de mando con indicadores relevantes para consulta
por parte del personal de la DGC. Además, los gestores de la DGC podrán configurar
informes de seguimiento personalizados con los campos que sean de interés para su
labor,  pudiendo  guardar  informes  predeterminados  que  se  puedan  actualizar  a
demanda. Asimismo, existirá la posibilidad de visualizar determinada información sobre
mapas.

En virtud de todo lo anterior, se le solicita lo siguiente:

1.  Diseñe  un  cuadro  de  mando  para  los  gestores  del  organismo  con  los

indicadores más importantes que usted considere.

2.  Muestre, a través de un diagrama de casos de uso, el sistema que se quiere

implantar.

3.  Represente un diagrama entidad-relación extendido del sistema, indicando los

principales atributos.

4.  Diseñe  un  diagrama  de  arquitectura  lógica  del  sistema,  especificando  las
soluciones  tecnológicas  elegidas.  En  previsión  de  una  mayor  necesidad  de
almacenamiento, se está planteando la hibridación del proyecto a nube, ¿qué
consideraciones cree que habría que tener en cuenta en este caso?

5.  Indique  5  medidas  de  seguridad  que  habría  que  tener  en  cuenta  en  este
proyecto para poder garantizar un adecuado nivel de seguridad, de acuerdo
con el ENS. Justifique su respuesta.

En  todo  lo  no  contemplado  en  este  supuesto,  podrá  efectuar  las  suposiciones  que
considere  convenientes,  debiendo  siempre  hacerlas  constar  en  su  propuesta  de
solución acompañadas de una justificación correspondiente.

                         2024 - GSI-L

Página 4 de 4
