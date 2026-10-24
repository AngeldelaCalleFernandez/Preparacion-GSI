# Revisión humana de preguntas manuales · lote 18

Fecha de preparación: 24 de octubre de 2026.

## Alcance y estado

Este documento prepara las 20 candidatas siguientes a las incluidas en el lote 17 dentro de la cola editorial `correct-length-dominance`. Las decisiones permanecen pendientes y no se ha modificado ninguna pregunta de este lote.

Los 20 registros se contrastaron con el solucionario Markdown conservado de su práctica. En todos los casos, la letra correcta del banco coincide con la letra publicada en el solucionario.

Estado del lote: **20 decisiones pendientes de aprobación humana; cero cambios en los bancos**.

## Elementos preparados

| Orden | ID | Tema | Relación inicial | Evidencia de clave | Contraste propuesto |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `MAN-GSI-P16-065` | B2-T14 | 2,39× | P16, pregunta 65, A | Compatibilidad jurídica frente a coincidencias técnicas o textuales. |
| 2 | `MAN-GSI-P17-130` | B2-T02 | 2,39× | P17, pregunta 130, B | Daemon frente a módulo, gestor de servicios y cuenta root. |
| 3 | `MAN-GSI-P19-032` | B4-T14 | 2,39× | P19, pregunta 32, C | SRTP frente a TLS, S/MIME e IPsec. |
| 4 | `MAN-GSI-P18-003` | B2-T09 | 2,38× | P18, pregunta 3, C | XML y SGML frente a relaciones invertidas o inexistentes. |
| 5 | `MAN-GSI-P19-131` | B4-T16 | 2,38× | P19, pregunta 131, C | Calidad audiovisual frente a CPU, usuarios o volumen sin temporización. |
| 6 | `MAN-GSI-P19-016` | B4-T14 | 2,38× | P19, pregunta 16, D | QoS frente a capacidad creada, congestión eliminada o autenticación sustituida. |
| 7 | `MAN-GSI-P15-080` | B3-T11 | 2,37× | P15, pregunta 80, C | Rate limiting y caché frente a sustituciones de seguridad o consistencia. |
| 8 | `MAN-GSI-P19-156` | B4-T16 | 2,37× | P19, pregunta 156, B | DSCP gestionado frente a garantía, cifrado o reserva universal. |
| 9 | `MAN-GSI-P18-097` | B2-T16 | 2,37× | P18, pregunta 97, D | Documento frente a expediente, serie y repositorio. |
| 10 | `MAN-GSI-P14-094` | B1-T08 | 2,37× | P14, pregunta 94, D | Ley 40/2015 frente a procedimiento, empleo y transparencia. |
| 11 | `MAN-GSI-P18-006` | B2-T09 | 2,37× | P18, pregunta 6, D | Doctype frente a XSD, namespace y codificación. |
| 12 | `MAN-GSI-P15-109` | B3-T11 | 2,37× | P15, pregunta 109, D | Antiforgery frente a SQLi, XSS y fuerza bruta. |
| 13 | `MAN-GSI-P15-136` | B3-T10 | 2,37× | P15, pregunta 136, A | Migración `javax`/`jakarta` frente a cambios invertidos o ajenos. |
| 14 | `MAN-GSI-P16-048` | B2-T14 | 2,36× | P16, pregunta 48, A | Copyright GPL frente a dominio público o transferencia de titularidad. |
| 15 | `MAN-GSI-P17-051` | B2-T01 | 2,36× | P17, pregunta 51, B | Hipervisor tipo 2 frente a tipo 1, contenedores y extensión de CPU. |
| 16 | `MAN-GSI-P17-120` | B2-T02 | 2,35× | P17, pregunta 120, D | Cuello de disco frente a ampliar CPU, reducir memoria o desactivar caché. |
| 17 | `MAN-GSI-P19-003` | B4-T14 | 2,35× | P19, pregunta 3, B | IMS frente a SIP, codec y PBX. |
| 18 | `MAN-GSI-P14-078` | B1-T05 | 2,34× | P14, pregunta 78, D | Información sensible frente a acceso amplio, publicación o falta de auditoría. |
| 19 | `MAN-GSI-P17-147` | B2-T02 | 2,34× | P17, pregunta 147, C | MDM/EMM/UEM frente a sinonimia, alcance invertido o especialización falsa. |
| 20 | `MAN-GSI-P18-072` | B2-T09 | 2,34× | P18, pregunta 72, A | Dependencias web frente a versión flotante, abandono o confianza ciega en CDN. |

## Propuestas concretas pendientes

Las respuestas correctas permanecen literalmente intactas. La aprobación del lote autorizaría únicamente los tres distractores enumerados en cada registro.

### 1. `MAN-GSI-P16-065` · conservar A

- B: Que los componentes compilan y se ejecutan en el mismo sistema operativo, aunque sus licencias impongan condiciones contradictorias.
- C: Que ambos proyectos utilizan el mismo lenguaje y gestor de paquetes, con independencia de sus derechos de redistribución.
- D: Que los textos de las dos licencias son idénticos palabra por palabra, única situación en la que pueden combinarse componentes.

### 2. `MAN-GSI-P17-130` · conservar B

- A: Un módulo cargado dentro del kernel para ampliar soporte de hardware o funciones privilegiadas del sistema operativo.
- C: El gestor que inicia, detiene y supervisa unidades de servicio, pero no cada proceso de servicio ejecutado bajo su control.
- D: Una cuenta de superusuario necesaria para iniciar sesión y ejecutar cualquier tarea administrativa en primer plano.

### 3. `MAN-GSI-P19-032` · conservar C

- A: La señalización SIP mediante TLS entre saltos, sin proporcionar por sí mismo protección a los paquetes de audio o vídeo RTP.
- B: El contenido de determinados mensajes SIP mediante S/MIME, no el flujo continuo de medios transportado por RTP.
- D: Todo el tráfico IP entre extremos o gateways mediante IPsec, sin ser el perfil específico diseñado para proteger RTP.

### 4. `MAN-GSI-P18-003` · conservar C

- A: SGML se diseñó como un perfil simplificado de XML después de su adopción en la web para añadir reglas más estrictas.
- B: XML es un superconjunto de SGML que incorpora toda su flexibilidad y permite cualquier construcción válida del estándar original.
- D: No comparten origen ni conceptos de marcado; la semejanza de etiquetas es únicamente visual y no existe relación técnica.

### 5. `MAN-GSI-P19-131` · conservar C

- A: Utilización de CPU y memoria del servidor, sin correlacionarla con pérdida, retardo, bitrate o experiencia de los participantes.
- B: Número total de cuentas del directorio corporativo, aunque la mayoría no participe en la reunión monitorizada.
- D: Cantidad de paquetes transmitidos, sin secuencia, temporización, pérdida, variación ni datos sobre audio o vídeo recibido.

### 6. `MAN-GSI-P19-016` · conservar D

- A: Crear capacidad física adicional en cada enlace con solo marcar o clasificar paquetes, sin ampliar ni gestionar los recursos existentes.
- B: Eliminar toda congestión aunque la demanda supere de forma sostenida la capacidad disponible en los enlaces atravesados.
- C: Sustituir identidad y autorización porque la prioridad asignada a un flujo demuestra que el usuario está legitimado para generarlo.

### 7. `MAN-GSI-P15-080` · conservar C

- A: La caché hace innecesarios versionado, invalidación y consistencia porque cualquier respuesta almacenada sigue siendo correcta.
- B: El rate limiting sustituye autenticación, autorización y firewall al impedir por sí mismo todo abuso o acceso no permitido.
- D: Ambos pertenecen exclusivamente al ORM y solo pueden configurarse al consultar entidades mediante EF Core.

### 8. `MAN-GSI-P19-156` · conservar B

- A: Marcar DSCP obliga técnicamente a todos los proveedores y redes intermedias de Internet a reservar la misma prioridad extremo a extremo.
- C: DSCP cifra y autentica el vídeo antes de asignarle una clase, evitando que terceros inspeccionen o modifiquen el flujo.
- D: El marcado reserva ancho de banda en cada salto y elimina la necesidad de dimensionar capacidad o acordar políticas entre dominios.

### 9. `MAN-GSI-P18-097` · conservar D

- A: Un documento individual siempre contiene el procedimiento completo, mientras el expediente representa una única página o fichero.
- B: El expediente es una serie documental general que agrupa todos los procedimientos del mismo tipo sin distinguir cada tramitación.
- C: Ambos son nombres del repositorio electrónico que almacena archivos, no objetos con estructura, metadatos y funciones diferentes.

### 10. `MAN-GSI-P14-094` · conservar D

- A: El procedimiento administrativo común, los derechos de los interesados y la tramitación de actos y recursos en las Administraciones.
- B: El régimen estatutario completo de los empleados públicos, incluidos acceso, carrera, situaciones y régimen disciplinario.
- C: La transparencia, el derecho de acceso a información pública y las obligaciones de buen gobierno de los responsables públicos.

### 11. `MAN-GSI-P18-006` · conservar D

- A: Declarar el esquema XSD que valida elementos, atributos, tipos y cardinalidades permitidos en todo documento HTML.
- B: Asociar el documento a un namespace XML obligatorio que determina la identidad de cada elemento y atributo HTML.
- C: Establecer la codificación de caracteres utilizada para interpretar los bytes, sustituyendo a la declaración `meta charset`.

### 12. `MAN-GSI-P15-109` · conservar D

- A: La inyección de instrucciones SQL producida al construir consultas con entrada no parametrizada dentro de ADO.NET.
- B: La ejecución de script inyectado en el origen de la aplicación, que requiere codificación y controles frente a XSS.
- C: Los intentos repetidos de adivinar credenciales, mitigados mediante límites, MFA y controles específicos de autenticación.

### 13. `MAN-GSI-P15-136` · conservar A

- B: De `java.*` a `jakarta.*` para todas las clases de la biblioteca estándar incluidas en Java SE y en la JVM.
- C: De `jakarta.*` a `javax.*`, recuperando los nombres anteriores en las versiones modernas posteriores a la transferencia.
- D: De `javax.*` a `dotnet.*` para mantener interoperabilidad binaria directa entre componentes Jakarta y ensamblados .NET.

### 14. `MAN-GSI-P16-048` · conservar A

- B: Desaparece al aplicar GPL, ya que publicar el código fuente equivale a renunciar a todos los derechos de autor.
- C: Se transfiere automáticamente a la Free Software Foundation, aunque no haya participado como autora o cesionaria.
- D: Pasa al dominio público tras la primera redistribución y las condiciones de copyleft continúan sin apoyarse en copyright.

### 15. `MAN-GSI-P17-051` · conservar B

- A: Un hipervisor bare metal que se ejecuta directamente sobre el hardware, sin un sistema operativo anfitrión general.
- C: Un runtime de contenedores que comparte el kernel del host y aísla procesos sin virtualizar hardware completo.
- D: Una extensión de CPU que facilita virtualización, pero no crea ni administra por sí sola máquinas virtuales.

### 16. `MAN-GSI-P17-120` · conservar D

- A: Duplicar los núcleos de CPU de inmediato aunque las métricas indiquen baja utilización y espera asociada al almacenamiento.
- B: Reducir la memoria disponible para generar más paginación y forzar al sistema a utilizar con mayor frecuencia el disco lento.
- C: Desactivar cachés del sistema y de la aplicación antes de medir, aumentando accesos físicos para observar mejor el problema.

### 17. `MAN-GSI-P19-003` · conservar B

- A: El protocolo SIP utilizado para crear, modificar y terminar sesiones, considerado por sí solo toda la arquitectura de servicios.
- C: Un codec que comprime audio y vídeo para transportarlo por IP sin funciones de abonado, control o prestación de servicios.
- D: Un producto PBX concreto que administra extensiones y llamadas, obligatorio y equivalente en cualquier despliegue IMS.

### 18. `MAN-GSI-P14-078` · conservar D

- A: Publicar ubicaciones y datos de contacto para facilitar coordinación externa, aunque puedan revelar a la víctima o su entorno.
- B: Dar acceso general a todo el personal del organismo para evitar retrasos, sin limitarlo por función, necesidad o expediente.
- C: Desactivar logs y auditoría para que no exista rastro de identidad, perdiendo capacidad de detectar y atribuir accesos indebidos.

### 19. `MAN-GSI-P17-147` · conservar C

- A: Son sinónimos exactos y cualquier producto que gestione un móvil cubre necesariamente aplicaciones, contenido, identidad y todos los endpoints.
- B: MDM es la categoría de mayor alcance; EMM y UEM son subconjuntos limitados exclusivamente a teléfonos y tabletas.
- D: UEM se especializa solo en impresoras y periféricos, mientras EMM reemplaza la gestión de cualquier ordenador corporativo.

### 20. `MAN-GSI-P18-072` · conservar A

- B: Referenciar siempre la versión más reciente mediante una URL flotante para recibir cambios sin revisión ni pruebas previas.
- C: Desactivar actualizaciones y auditorías después de la primera instalación para evitar incompatibilidades futuras.
- D: Confiar en cualquier CDN porque el uso de HTTPS garantiza por sí solo procedencia, revisión e integridad del script servido.

## Fuentes contrastadas

- P14: `documents/markdown/gsi/P14/GSI A2 — PRÁCTICA ACTIVA 14 — TEST BLOQUE I — SOLUCIONARIO COMENTADO.md`, preguntas 78 y 94.
- P15: `documents/markdown/gsi/P15/GSI A2 — PRÁCTICA ACTIVA 15 — .NET Y JAKARTA EE — SOLUCIONARIO COMENTADO.md`, preguntas 80, 109 y 136.
- P16: `documents/markdown/gsi/P16/GSI A2 — PRÁCTICA ACTIVA 16 — LICENCIAS, PROTECCIÓN JURÍDICA Y DRM — SOLUCIONARIO COMENTADO.md`, preguntas 48, 65 y 123.
- P17: `documents/markdown/gsi/P17/GSI A2 — PRÁCTICA ACTIVA 17 — COMPUTADORES, CLOUD Y SISTEMAS OPERATIVOS — SOLUCIONARIO COMENTADO.md`, preguntas 51, 120, 130 y 147.
- P18: `documents/markdown/gsi/P18/GSI A2 — PRÁCTICA ACTIVA 18 — HTML, XML, CONTENIDOS, BÚSQUEDA Y SEO — SOLUCIONARIO COMENTADO.md`, preguntas 3, 6, 72 y 97.
- P19: `documents/markdown/gsi/P19/GSI A2 — PRÁCTICA ACTIVA 19 — NGN, IMS, MOVILIDAD, UEM Y VIDEOCONFERENCIA — SOLUCIONARIO COMENTADO.md`, preguntas 3, 16, 32, 131 y 156.

## Resultado de la preparación

- 20 de 20 IDs localizados en el banco manual.
- 20 de 20 claves coincidentes con sus solucionarios conservados.
- 20 decisiones editoriales pendientes de aprobación humana.
- Cero modificaciones en `data/questions-manual.json`, `data/questions-official.json` y `data/questions-ai.json`.

Este lote solo podrá aplicarse después de recibir aprobación expresa de sus textos concretos.
