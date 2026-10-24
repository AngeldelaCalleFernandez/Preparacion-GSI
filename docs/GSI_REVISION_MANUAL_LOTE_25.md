# Revisión humana de preguntas manuales · lote 25

Fecha de preparación: 24 de octubre de 2026.

## Alcance y estado

Este documento prepara las 16 candidatas finales de la cola editorial `correct-length-dominance`, a continuación de las incluidas en el lote 24. Las decisiones permanecen pendientes y no se ha modificado ninguna pregunta de este lote.

Los 16 registros se contrastaron con el solucionario Markdown conservado de su práctica. En todos los casos, la letra correcta del banco coincide con la letra publicada en el solucionario.

Estado del lote: **16 decisiones pendientes de aprobación humana; cero cambios en los bancos**.

## Elementos preparados

| Orden | ID | Tema | Relación inicial | Evidencia de clave | Contraste propuesto |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `MAN-GSI-P16-057` | B2-T14 | 2,02× | P16, pregunta 57, C | Dependencia AGPL frente a eliminación, indiferencia por red y publicación total. |
| 2 | `MAN-GSI-P19-004` | B4-T14 | 2,02× | P19, pregunta 4, A | IMS convergente frente a circuitos, ausencia de autenticación y acceso Wi-Fi único. |
| 3 | `MAN-GSI-P18-159` | B2-T16 | 2,02× | P18, pregunta 159, C | Gobierno transversal frente a cuenta común, ausencia de logs y publicación interna. |
| 4 | `MAN-GSI-P18-104` | B2-T16 | 2,02× | P18, pregunta 104, B | Sindicación frente a scraping, correo exclusivo y cifrado. |
| 5 | `MAN-GSI-P16-058` | B2-T14 | 2,00× | P16, pregunta 58, B | Copyleft contextual frente a contaminación automática, API universal y combinación irrelevante. |
| 6 | `MAN-GSI-P16-041` | B2-T14 | 2,00× | P16, pregunta 41, C | Copyleft frente a prohibición comercial, dominio público y DRM. |
| 7 | `MAN-GSI-P15-097` | B3-T11 | 2,00× | P15, pregunta 97, A | Traducción LINQ frente a servidor web, confianza ciega y compilador. |
| 8 | `MAN-GSI-P17-062` | B2-T01 | 2,00× | P17, pregunta 62, D | Acceso amplio por red frente a LAN, radio y contraseña común. |
| 9 | `MAN-GSI-P14-098` | B1-T08 | 2,00× | P14, pregunta 98, D | Registro electrónico frente a expediente, horario y notificación. |
| 10 | `MAN-GSI-P16-077` | B2-T14 | 2,00× | P16, pregunta 77, D | Compatibilidad EUPL frente a desaparición, dominio público y pérdida de fuente. |
| 11 | `MAN-GSI-P17-119` | B2-T02 | 2,00× | P17, pregunta 119, A | Kernel híbrido frente a alternancia de SO, doble CPU y ausencia de memoria. |
| 12 | `MAN-GSI-P17-071` | B2-T01 | 2,00× | P17, pregunta 71, B | Nube híbrida frente a dos proveedores aislados, entorno local único y una VM. |
| 13 | `MAN-GSI-P16-001` | B2-T14 | 2,00× | P16, pregunta 1, A | Software propietario frente a pago, gratuidad imposible y copias prohibidas. |
| 14 | `MAN-GSI-P19-069` | B4-T15 | 2,00× | P19, pregunta 69, C | Core 5G basado en servicios frente a ausencia de identidad, TDM y observabilidad. |
| 15 | `MAN-GSI-P16-040` | B2-T14 | 2,00× | P16, pregunta 40, D | Licencia permisiva frente a dominio público, prohibición comercial y copyleft de red. |
| 16 | `MAN-GSI-P16-070` | B2-T14 | 2,00× | P16, pregunta 70, D | Fragmento sin licencia frente a publicidad, longitud y rendimiento. |

## Propuestas concretas pendientes

Las respuestas correctas permanecen literalmente intactas. La aprobación del lote autorizaría únicamente los tres distractores enumerados en cada registro.

### 1. `MAN-GSI-P16-057` · conservar C

- A: Eliminar siempre la dependencia sin analizar su versión, licencia, forma de integración ni las alternativas disponibles para el servicio.
- B: Ignorarla porque no se entregan binarios, aunque usuarios externos interactúen por red con una versión modificada de la aplicación.
- D: Suponer que toda la infraestructura, incluidos componentes independientes y servicios no relacionados, debe publicarse bajo AGPL.

### 2. `MAN-GSI-P19-004` · conservar A

- B: Obligar a transportar todas las llamadas mediante circuitos dedicados y excluir los servicios multimedia basados en paquetes IP.
- C: Eliminar la autenticación del abonado porque la dirección de red identifica de forma suficiente al usuario y su perfil de servicios.
- D: Utilizar exclusivamente Wi-Fi como tecnología de acceso y rechazar conexiones procedentes de redes móviles o accesos fijos.

### 3. `MAN-GSI-P18-159` · conservar C

- A: Compartir una única cuenta entre todos los usuarios para simplificar altas y bajas, aunque se pierdan atribución y mínimo privilegio.
- B: Eliminar los registros de actividad para mejorar el rendimiento, aun cuando resulte imposible investigar accesos o cambios no autorizados.
- D: Publicar por defecto cualquier documento interno para que el buscador lo indexe, sin clasificación previa ni control sobre información sensible.

### 4. `MAN-GSI-P18-104` · conservar B

- A: Copiar páginas de terceros mediante scraping sin acuerdo ni formato estable y presentar ese contenido como un canal oficial del publicador.
- C: Enviar exclusivamente mensajes de correo a una lista cerrada, sin ofrecer un formato estructurado que los clientes puedan consultar o agregar.
- D: Cifrar el repositorio completo para que los clientes descubran automáticamente las novedades sin recibir metadatos ni elementos publicados.

### 5. `MAN-GSI-P16-058` · conservar B

- A: Aplicar GPL a cualquier fichero almacenado en el mismo disco, aunque no se combine, derive ni distribuya junto con el programa cubierto.
- C: Considerar que toda API que invoque software GPL queda siempre bajo GPL, sin examinar arquitectura, relación entre obras ni distribución.
- D: Afirmar que las obligaciones nunca dependen de cómo se combinan o transmiten las obras y que solo importa el nombre de cada fichero.

### 6. `MAN-GSI-P16-041` · conservar C

- A: Prohibir cualquier actividad comercial, cobro por distribución o prestación de servicios relacionados con el programa cubierto.
- B: Convertir automáticamente el software en dominio público, extinguiendo autoría, copyright y todas las condiciones de redistribución.
- D: Sustituir el copyright por controles DRM que impiden estudiar, copiar o modificar el programa aunque la licencia conceda esas facultades.

### 7. `MAN-GSI-P15-097` · conservar A

- B: Cambiar Kestrel por IIS para que el servidor web traduzca cualquier expresión LINQ y la convierta automáticamente en SQL válido.
- C: Suponer que siempre se ejecutará correctamente en el proveedor, aunque la operación carezca de traducción y afecte a una parte esencial.
- D: Desactivar el compilador de C# para que EF Core interprete directamente el código fuente y decida en tiempo de ejecución dónde evaluarlo.

### 8. `MAN-GSI-P17-062` · conservar D

- A: Restringir el servicio a una LAN privada y excluir mecanismos estándar que permiten acceder desde plataformas cliente heterogéneas.
- B: Exigir que toda conexión utilice una red inalámbrica, aunque el servicio sea accesible mediante enlaces fijos y protocolos convencionales.
- C: Hacer que todos los clientes compartan una única contraseña para garantizar que reciben por red exactamente las mismas capacidades.

### 9. `MAN-GSI-P14-098` · conservar D

- A: Ser el propio expediente electrónico y contener necesariamente todos los documentos, índices, firmas y actuaciones de cada procedimiento.
- B: Admitir documentos únicamente durante el horario de oficina, aunque el canal electrónico permanezca técnicamente disponible el resto del día.
- C: Sustituir a todos los sistemas de notificaciones y practicar por sí mismo cualquier comunicación dirigida a las personas interesadas.

### 10. `MAN-GSI-P16-077` · conservar D

- A: Desaparecer automáticamente la licencia original al aplicar la cláusula, dejando el código previo sin las condiciones que lo cubrían.
- B: Pasar todo el código a dominio público, sin copyright, atribución ni obligaciones, por combinarse con una licencia declarada compatible.
- C: Eliminar las obligaciones de facilitar código fuente respecto del componente original, aunque la EUPL siga cubriéndolo en la combinación.

### 11. `MAN-GSI-P17-119` · conservar A

- B: Alternar automáticamente entre Windows y Linux cada segundo y trasladar los procesos activos de un sistema al otro sin interrupción.
- C: Necesitar dos CPU de fabricantes distintos para repartir entre ellas las funciones propias de un microkernel y de un kernel monolítico.
- D: Carecer de gestión de memoria y delegar todas las decisiones de paginación, protección y asignación directamente a las aplicaciones.

### 12. `MAN-GSI-P17-071` · conservar B

- A: Utilizar dos proveedores públicos sin integración, conectividad común ni mecanismos coordinados de identidad, gestión o portabilidad.
- C: Mantener todas las cargas exclusivamente en infraestructura local, sin recursos públicos ni relación operativa con servicios de nube.
- D: Ejecutar una única máquina virtual local y denominar pública la red utilizada para administrarla desde otro equipo de la organización.

### 13. `MAN-GSI-P16-001` · conservar A

- B: Ser necesariamente de pago, aunque el titular pueda distribuirlo gratuitamente manteniendo restricciones y reservándose los derechos.
- C: No poder distribuirse nunca sin precio, porque la gratuidad transforma de forma automática cualquier programa en software libre.
- D: Impedir siempre cualquier copia de seguridad, incluso cuando la licencia o la legislación aplicable permiten realizarla al usuario legítimo.

### 14. `MAN-GSI-P19-069` · conservar C

- A: Eliminar todas las funciones de autenticación porque las interfaces entre servicios identifican por sí solas a cada abonado de la red.
- B: Obligar a transportar señalización y tráfico mediante TDM, sustituyendo las interfaces de servicio por circuitos físicos dedicados.
- D: Hacer innecesaria la observabilidad, ya que cada función resuelve automáticamente cualquier fallo de las demás sin métricas ni trazas.

### 15. `MAN-GSI-P16-040` · conservar D

- A: Significar dominio público y permitir eliminar avisos, atribución y cualquier condición establecida por quien conserva los derechos.
- B: Prohibir el uso comercial, el cobro por distribución y la integración en productos propietarios, aunque se cumplan sus términos.
- C: Imponer copyleft de red a todo servicio que interactúe con el programa, con independencia del texto concreto de la licencia permisiva.

### 16. `MAN-GSI-P16-070` · conservar D

- A: No existir ningún riesgo si el repositorio es público, porque la visibilidad del código concede por sí misma permiso para cualquier uso.
- B: No existir riesgo cuando el fragmento tiene menos de cien líneas, ya que esa longitud lo excluye automáticamente de cualquier protección.
- C: Existir únicamente un riesgo de rendimiento, sin consecuencias sobre atribución, modificación, incorporación o redistribución del código.

## Fuentes contrastadas

- P14: `documents/markdown/gsi/P14/GSI A2 — PRÁCTICA ACTIVA 14 — TEST BLOQUE I — SOLUCIONARIO COMENTADO.md`, pregunta 98.
- P15: `documents/markdown/gsi/P15/GSI A2 — PRÁCTICA ACTIVA 15 — .NET Y JAKARTA EE — SOLUCIONARIO COMENTADO.md`, pregunta 97.
- P16: `documents/markdown/gsi/P16/GSI A2 — PRÁCTICA ACTIVA 16 — LICENCIAS, PROTECCIÓN JURÍDICA Y DRM — SOLUCIONARIO COMENTADO.md`, preguntas 1, 40, 41, 57, 58, 70 y 77.
- P17: `documents/markdown/gsi/P17/GSI A2 — PRÁCTICA ACTIVA 17 — COMPUTADORES, CLOUD Y SISTEMAS OPERATIVOS — SOLUCIONARIO COMENTADO.md`, preguntas 62, 71 y 119.
- P18: `documents/markdown/gsi/P18/GSI A2 — PRÁCTICA ACTIVA 18 — HTML, XML, CONTENIDOS, BÚSQUEDA Y SEO — SOLUCIONARIO COMENTADO.md`, preguntas 104 y 159.
- P19: `documents/markdown/gsi/P19/GSI A2 — PRÁCTICA ACTIVA 19 — NGN, IMS, MOVILIDAD, UEM Y VIDEOCONFERENCIA — SOLUCIONARIO COMENTADO.md`, preguntas 4 y 69.

## Resultado de la preparación

- 16 de 16 IDs localizados en el banco manual.
- 16 de 16 claves coincidentes con sus solucionarios conservados.
- 16 decisiones editoriales pendientes de aprobación humana.
- Cero modificaciones en `data/questions-manual.json`, `data/questions-official.json` y `data/questions-ai.json`.

Este lote solo podrá aplicarse después de recibir aprobación expresa de sus textos concretos.
