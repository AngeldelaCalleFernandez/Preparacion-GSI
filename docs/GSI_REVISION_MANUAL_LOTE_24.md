# Revisión humana de preguntas manuales · lote 24

Fecha de preparación: 24 de octubre de 2026.

## Alcance y estado

Este documento registra la aplicación de las 20 candidatas siguientes a las incluidas en el lote 23 dentro de la cola editorial `correct-length-dominance`. La instrucción expresa «apruebo los lotes 21 al 25» de la persona responsable del proyecto autoriza las veinte decisiones de este lote.

Los 20 registros se contrastaron con el solucionario Markdown conservado de su práctica. En todos los casos, la letra correcta del banco coincide con la letra publicada en el solucionario.

Estado del lote: **20 decisiones humanas L3 aprobadas y aplicadas; cero pendientes**.

## Elementos preparados

| Orden | ID | Tema | Relación inicial | Evidencia de clave | Contraste aprobado y aplicado |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `MAN-GSI-P17-151` | B2-T02 | 2,07× | P17, pregunta 151, C | Riesgo BYOD frente a inmunidad, cumplimiento automático y menor identidad. |
| 2 | `MAN-GSI-P18-076` | B2-T09 | 2,07× | P18, pregunta 76, B | Validación cliente/servidor frente a confianza exclusiva o separación artificial. |
| 3 | `MAN-GSI-P17-095` | B2-T02 | 2,07× | P17, pregunta 95, B | Semáforo de conteo frente a exclusión global, MMU y cuentas. |
| 4 | `MAN-GSI-P18-083` | B2-T16 | 2,07× | P18, pregunta 83, C | DMS frente a CMS y falsas limitaciones de formato o permisos. |
| 5 | `MAN-GSI-P18-095` | B2-T16 | 2,07× | P18, pregunta 95, A | Gobierno de permisos frente a acceso global, cuenta común y ausencia de auditoría. |
| 6 | `MAN-GSI-P19-064` | B4-T15 | 2,07× | P19, pregunta 64, A | 5G SA frente a dependencia de EPC, radio 2G y Wi-Fi. |
| 7 | `MAN-GSI-P16-105` | B2-T14 | 2,06× | P16, pregunta 105, C | Interoperabilidad frente a clonación, descompilación total y gratuidad. |
| 8 | `MAN-GSI-P15-112` | B3-T11 | 2,06× | P15, pregunta 112, C | Logging estructurado frente a sustitución de métricas, pérdida de correlación y garantía de privacidad. |
| 9 | `MAN-GSI-P17-078` | B2-T01 | 2,06× | P17, pregunta 78, C | Administración cloud frente a ausencia de arquitectura, monitorización o responsabilidad. |
| 10 | `MAN-GSI-P18-110` | B2-T16 | 2,06× | P18, pregunta 110, B | Tarea humana frente a llamada del kernel, sitemap y namespace. |
| 11 | `MAN-GSI-P17-114` | B2-T02 | 2,05× | P17, pregunta 114, C | Journaling frente a cifrado, sustitución de copias y ejecución. |
| 12 | `MAN-GSI-P17-099` | B2-T02 | 2,04× | P17, pregunta 99, A | Modos de CPU frente a velocidad absoluta, cuenta de directorio y ausencia de privilegios. |
| 13 | `MAN-GSI-P16-132` | B2-T14 | 2,04× | P16, pregunta 132, D | Reversibilidad frente a deshacer actualizaciones, eliminar licencias o liberar software. |
| 14 | `MAN-GSI-P16-145` | B2-T14 | 2,04× | P16, pregunta 145, A | Fin de soporte frente a pérdida de copyright, dominio público y caducidad de licencia. |
| 15 | `MAN-GSI-P15-023` | B3-T11 | 2,04× | P15, pregunta 23, D | JIT frente a AOT y falsas asociaciones de plataforma. |
| 16 | `MAN-GSI-P15-040` | B3-T11 | 2,03× | P15, pregunta 40, C | IL frente a fuente directa, máquina x86 y archivo textual. |
| 17 | `MAN-GSI-P18-080` | B2-T09 | 2,03× | P18, pregunta 80, D | HTML y XML seguros frente a sustitución, secretos y ausencia de validación. |
| 18 | `MAN-GSI-P15-011` | B3-T11 | 2,03× | P15, pregunta 11, D | MSBuild frente a identidad, alojamiento y ORM. |
| 19 | `MAN-GSI-P16-021` | B2-T14 | 2,02× | P16, pregunta 21, B | Licencia permisiva frente a publicación total, prohibición comercial y renuncia. |
| 20 | `MAN-GSI-P17-080` | B2-T01 | 2,02× | P17, pregunta 80, B | Migración reversible frente a promesa, bloqueo de copias y falta de documentación. |

## Propuestas concretas aprobadas y aplicadas

Las respuestas correctas permanecen literalmente intactas. La aprobación del lote autorizó únicamente los tres distractores enumerados en cada registro.

### 1. `MAN-GSI-P17-151` · conservar C

- A: La desaparición automática del malware porque un dispositivo personal no puede ejecutar código malicioso dentro del entorno corporativo.
- B: El cumplimiento garantizado por ser propiedad del usuario, sin necesidad de requisitos mínimos, inventario, separación o respuesta ante incidentes.
- D: Una menor necesidad de gestionar identidad y acceso, ya que la posesión del dispositivo personal autentica por sí sola a su propietario.

### 2. `MAN-GSI-P18-076` · conservar B

- A: La validación del cliente basta como control de seguridad porque el servidor recibe únicamente datos que el navegador ya ha aprobado.
- C: La validación del servidor solo se utiliza con documentos XML y no resulta necesaria para formularios HTML, JSON ni llamadas de API.
- D: Ambas validaciones son incompatibles y deben excluirse mutuamente para evitar que apliquen reglas distintas sobre una misma entrada.

### 3. `MAN-GSI-P17-095` · conservar B

- A: Forzar que se ejecute un único hilo en todo el sistema, aunque existan recursos independientes y varios permisos disponibles.
- C: Sustituir la MMU y traducir por software todas las direcciones virtuales a marcos físicos antes de permitir un acceso concurrente.
- D: Crear y eliminar cuentas del sistema operativo según aumenta o disminuye el número de recursos disponibles para los procesos.

### 4. `MAN-GSI-P18-083` · conservar C

- A: Ser sistemas siempre equivalentes, con el mismo modelo, funciones y ciclo de vida, aunque se orienten a necesidades de gestión diferentes.
- B: Limitar el DMS exclusivamente a imágenes y el CMS exclusivamente a PDF, sin que ninguno admita otros formatos o tipos de contenido.
- D: Impedir que un CMS gestione permisos, flujos, versiones o publicación segmentada por usuarios, roles, canales y audiencias.

### 5. `MAN-GSI-P18-095` · conservar A

- B: Conceder acceso global para facilitar las búsquedas, aunque cada usuario pueda consultar documentos ajenos a sus funciones y necesidad.
- C: Utilizar una sola cuenta compartida para todo el personal, de modo que los cambios conserven una identidad común y simplifiquen la administración.
- D: Desactivar la auditoría para reducir almacenamiento, aunque ya no pueda conocerse quién consultó, modificó o compartió información sensible.

### 6. `MAN-GSI-P19-064` · conservar A

- B: Depender obligatoriamente del EPC como núcleo principal y utilizar 5G NR solo como una ampliación radio de la arquitectura 4G existente.
- C: Funcionar únicamente sobre acceso radio 2G, porque el 5G Core traduce después todas las sesiones a servicios y capacidades de quinta generación.
- D: Ser una modalidad de Wi-Fi administrada por el operador que no utiliza 5G NR ni funciones específicas del núcleo de red móvil.

### 7. `MAN-GSI-P16-105` · conservar C

- A: Que el usuario pretenda desarrollar un clon sustancialmente similar y reutilizar para ello cualquier parte expresiva del programa original.
- B: Que se descompile el programa completo aunque solo una parte limitada resulte necesaria para obtener la información de interoperabilidad.
- D: Que el programa se distribuya gratuitamente, con independencia de quién realiza los actos, su finalidad y la disponibilidad previa de información.

### 8. `MAN-GSI-P15-112` · conservar C

- A: Sustituir completamente las métricas porque cada evento estructurado permite calcular sin agregación cualquier indicador del sistema.
- B: Eliminar la necesidad de identificadores de correlación, ya que el formato de los campos relaciona automáticamente operaciones distribuidas.
- D: Garantizar que nunca se registren datos sensibles, aunque la aplicación incluya contraseñas, tokens o información personal en las propiedades.

### 9. `MAN-GSI-P17-078` · conservar C

- A: Eliminar cualquier necesidad de diseñar arquitectura porque el proveedor decide automáticamente topología, resiliencia y dependencias del cliente.
- B: Hacer innecesaria la monitorización, ya que los servicios gestionados detectan y resuelven todas las degradaciones posibles de la aplicación.
- D: Transferir al proveedor toda responsabilidad sobre los datos, identidades, configuraciones y decisiones de acceso del cliente.

### 10. `MAN-GSI-P18-110` · conservar B

- A: Una llamada privilegiada del kernel que detiene el workflow hasta que el sistema operativo libera los recursos solicitados por el proceso.
- C: Un sitemap generado por el motor del proceso para enumerar todas las pantallas que puede visitar el participante durante la tramitación.
- D: Un namespace que agrupa actividades automáticas y determina qué documentos XML pueden utilizar las personas asignadas al flujo.

### 11. `MAN-GSI-P17-114` · conservar C

- A: Cifrar obligatoriamente todo el disco y registrar las claves dentro del propio journal para recuperarlas después de cualquier reinicio.
- B: Eliminar la necesidad de copias de seguridad porque el registro conserva permanentemente todas las versiones y contenidos de cada archivo.
- D: Convertir cualquier archivo en ejecutable al registrar sus cambios, aunque sus permisos y su formato no permitan cargarlo como programa.

### 12. `MAN-GSI-P17-099` · conservar A

- B: Ejecutar siempre más rápido en modo usuario por definición, aunque una operación requiera servicios privilegiados o produzca cambios de contexto.
- C: Ser el modo kernel una cuenta especial de Active Directory que recibe permisos administrativos al iniciar sesión en un equipo del dominio.
- D: No existir separación de privilegios en sistemas modernos, porque todos los procesos acceden directamente al hardware con las mismas facultades.

### 13. `MAN-GSI-P16-132` · conservar D

- A: Deshacer cada actualización de Windows y restaurar siempre la versión anterior del sistema, aunque el servicio no dependa de esa plataforma.
- B: Eliminar cualquier licencia de terceros para que todos los componentes queden sin condiciones antes de cambiar de proveedor o solución.
- C: Convertir automáticamente el software propietario en libre cuando finaliza el contrato, transfiriendo al cliente todo su código y derechos.

### 14. `MAN-GSI-P16-145` · conservar A

- B: Perder automáticamente el copyright al finalizar el soporte, de modo que cualquier tercero pueda copiar, modificar y redistribuir el componente.
- C: Pasar inmediatamente al dominio público, aunque la duración de los derechos y las condiciones de licencia no dependan del mantenimiento ofrecido.
- D: Caducar toda licencia cuando termina el soporte y quedar prohibida desde ese momento cualquier ejecución de las versiones ya obtenidas.

### 15. `MAN-GSI-P15-023` · conservar D

- A: Interpretar AOT el código durante cada ejecución, mientras JIT distribuye binarios nativos producidos antes de llegar al destino.
- B: Ser dos nombres del mismo mecanismo de compilación y realizar siempre el trabajo en el mismo momento y con idéntica información del entorno.
- C: Aplicarse JIT únicamente a Java y AOT únicamente a .NET, sin que otros runtimes o lenguajes puedan emplear estrategias semejantes.

### 16. `MAN-GSI-P15-040` · conservar C

- A: Ejecutar el CLR directamente el texto fuente C# sin compilarlo a una representación intermedia ni producir instrucciones para la CPU.
- B: Ser IL siempre código máquina final x86, aunque el ensamblado vaya a ejecutarse en una arquitectura o runtime diferente.
- D: Utilizarse IL solo en archivos de texto para documentar instrucciones, sin formar parte de ensamblados ni intervenir en su ejecución.

### 17. `MAN-GSI-P18-080` · conservar D

- A: Sustituir toda interfaz web por XML sin esquema, semántica HTML ni controles de accesibilidad para que un único formato cubra ambos usos.
- B: Incluir secretos en JavaScript y aceptar cualquier XML sin restricciones porque el navegador y el parser neutralizan automáticamente las entradas.
- C: Eliminar toda validación para mejorar la compatibilidad, aunque se reciban estructuras imprevistas, contenido malicioso o versiones incompatibles.

### 18. `MAN-GSI-P15-011` · conservar D

- A: Gestionar la autenticación y autorización de los usuarios, emitir sus tokens y decidir a qué recursos puede acceder cada identidad.
- B: Alojar directamente aplicaciones web en producción, aceptar las conexiones HTTP y mantener sus procesos disponibles como servidor.
- C: Ser el ORM oficial de .NET y traducir las consultas de objetos a SQL sin utilizar proyectos, objetivos ni tareas de compilación.

### 19. `MAN-GSI-P16-021` · conservar B

- A: Obligar siempre a publicar bajo la misma licencia todo el código de la aplicación final, incluso los componentes independientes y propietarios.
- C: Prohibir cualquier distribución comercial o cobro por servicios, aunque se conserven los avisos y se cumplan las restantes condiciones.
- D: Equivaler a una renuncia completa a todos los derechos y permitir retirar autoría, avisos o condiciones del código redistribuido.

### 20. `MAN-GSI-P17-080` · conservar B

- A: Confiar únicamente en una promesa comercial de portabilidad, sin definir formatos, responsables, plazos, costes ni pruebas de salida.
- C: Prohibir cualquier copia o exportación de datos para asegurar su consistencia, aunque esa restricción impida migrarlos a otra solución.
- D: No documentar dependencias para simplificar la operación y reconstruirlas solo cuando se decida abandonar al proveedor actual.

## Fuentes contrastadas

- P15: `documents/markdown/gsi/P15/GSI A2 — PRÁCTICA ACTIVA 15 — .NET Y JAKARTA EE — SOLUCIONARIO COMENTADO.md`, preguntas 11, 23, 40 y 112.
- P16: `documents/markdown/gsi/P16/GSI A2 — PRÁCTICA ACTIVA 16 — LICENCIAS, PROTECCIÓN JURÍDICA Y DRM — SOLUCIONARIO COMENTADO.md`, preguntas 21, 105, 132 y 145.
- P17: `documents/markdown/gsi/P17/GSI A2 — PRÁCTICA ACTIVA 17 — COMPUTADORES, CLOUD Y SISTEMAS OPERATIVOS — SOLUCIONARIO COMENTADO.md`, preguntas 78, 80, 95, 99, 114 y 151.
- P18: `documents/markdown/gsi/P18/GSI A2 — PRÁCTICA ACTIVA 18 — HTML, XML, CONTENIDOS, BÚSQUEDA Y SEO — SOLUCIONARIO COMENTADO.md`, preguntas 76, 80, 83, 95 y 110.
- P19: `documents/markdown/gsi/P19/GSI A2 — PRÁCTICA ACTIVA 19 — NGN, IMS, MOVILIDAD, UEM Y VIDEOCONFERENCIA — SOLUCIONARIO COMENTADO.md`, pregunta 64.

## Resultado de la aplicación

- 20 de 20 IDs localizados en el banco manual.
- 20 de 20 claves coincidentes con sus solucionarios conservados.
- 20 decisiones editoriales aprobadas y aplicadas; cero pendientes en este lote.
- Se modificaron únicamente los tres distractores aprobados de cada pregunta: 20 IDs y 60 textos.
- Se conservaron enunciados, claves correctas, feedback, procedencia, estado de validación y estado activo.
- `data/questions-official.json` y `data/questions-ai.json` permanecen intactos.

## Verificación

- Cola `correct-length-dominance`: de 36 a 16 registros.
- Preguntas manuales con algún hallazgo heurístico: de 54 a 34.
- Alertas `absolute-wording-cluster`: 19 antes y 19 después.
- SHA-256 de partida de `data/questions-manual.json`: `a04fda98ffc3c656bd7db57e359112531c191d2dcb48e4c1f4d7b64a40a4d2ad`.
- SHA-256 resultante, coincidente con el punto de control previsto: `4807606f22837fe8babb329f356ee571c4cb82f0487961ef15c4cc237b8c47eb`.

El siguiente punto de control dentro del mismo bloque aprobado es el lote 25.
