# Revisión humana de preguntas manuales · lote 10

Fecha de preparación: 24 de octubre de 2026.

## Alcance y estado

Este documento prepara las 20 candidatas siguientes a las incluidas en el lote 09 dentro de la cola editorial `correct-length-dominance`. Las decisiones permanecen pendientes y no se ha modificado ninguna pregunta de este lote.

Los 20 registros se contrastaron con el solucionario Markdown conservado de su práctica. En todos los casos, la letra correcta del banco coincide con la letra publicada en el solucionario.

Estado del lote: **20 decisiones pendientes de aprobación humana; cero cambios en los bancos**.

## Elementos preparados

| Orden | ID | Tema | Relación inicial | Evidencia de clave | Contraste propuesto |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `MAN-GSI-P16-129` | B2-T14 | 2,92× | P16, pregunta 129, A | Riesgos de accesibilidad frente a garantías automáticas o ausencia de interacción. |
| 2 | `MAN-GSI-P16-055` | B2-T14 | 2,91× | P16, pregunta 55, A | LGPL frente a copyleft total, dominio público y restricciones de enlace inexistentes. |
| 3 | `MAN-GSI-P17-110` | B2-T02 | 2,91× | P17, pregunta 110, D | Interrupción de hardware frente a llamada al sistema, sondeo y cambio de contexto. |
| 4 | `MAN-GSI-P19-114` | B4-T16 | 2,90× | P19, pregunta 114, D | Compresión frente a ausencia ficticia de coste, pérdida o negociación. |
| 5 | `MAN-GSI-P19-132` | B4-T16 | 2,90× | P19, pregunta 132, A | Medio compartido frente a supuestas reservas o interferencias del cable. |
| 6 | `MAN-GSI-P17-103` | B2-T02 | 2,90× | P17, pregunta 103, A | Paginación frente a segmentación, swapping y caché. |
| 7 | `MAN-GSI-P19-030` | B4-T14 | 2,89× | P19, pregunta 30, C | SBC frente a registrar SIP, media gateway y cortafuegos genérico. |
| 8 | `MAN-GSI-P18-155` | B2-T16 | 2,89× | P18, pregunta 155, B | Chat frente a retención, estabilidad y gobierno documental supuestamente automáticos. |
| 9 | `MAN-GSI-P19-148` | B4-T15 | 2,88× | P19, pregunta 148, A | Acceso condicional frente a confiar solo en MFA, VPN o conectividad. |
| 10 | `MAN-GSI-P18-048` | B2-T09 | 2,88× | P18, pregunta 48, A | Capacidades documentales de XML frente a ventajas universales falsas. |
| 11 | `MAN-GSI-P19-021` | B4-T14 | 2,88× | P19, pregunta 21, B | SIP frente a RTP, SDP y RTCP. |
| 12 | `MAN-GSI-P15-119` | B3-T11 | 2,87× | P15, pregunta 119, D | Cabeceras reenviadas frente a confianza indiscriminada o ajustes irrelevantes. |
| 13 | `MAN-GSI-P19-019` | B4-T14 | 2,87× | P19, pregunta 19, D | Capas funcionales IMS frente a agrupaciones físicas o mezclas conceptuales. |
| 14 | `MAN-GSI-P14-132` | B1-T10 | 2,86× | P14, pregunta 132, B | Autentica frente a Cl@ve, SIR y DEHú. |
| 15 | `MAN-GSI-P15-005` | B3-T11 | 2,86× | P15, pregunta 5, C | SDK frente a componentes necesarios para ejecución o despliegue. |
| 16 | `MAN-GSI-P16-159` | B2-T14 | 2,84× | P16, pregunta 159, A | Continuidad integral frente a controles aislados no probados. |
| 17 | `MAN-GSI-P15-140` | B3-T10 | 2,84× | P15, pregunta 140, C | Unidad transaccional frente a transacciones demasiado amplias, fragmentadas o inexistentes. |
| 18 | `MAN-GSI-P16-114` | B2-T14 | 2,83× | P16, pregunta 114, C | Interoperabilidad limitada frente a permisos o prohibiciones absolutas. |
| 19 | `MAN-GSI-P17-146` | B2-T02 | 2,83× | P17, pregunta 146, B | MDM frente a MAM, federación de identidad y control de acceso de red. |
| 20 | `MAN-GSI-P14-122` | B1-T10 | 2,81× | P14, pregunta 122, D | Conferencia de Presidentes frente a órganos bilaterales, sectoriales o internos. |

## Propuestas concretas pendientes

Las respuestas correctas permanecen literalmente intactas. La aprobación del lote autorizaría únicamente los tres distractores enumerados en cada registro.

### 1. `MAN-GSI-P16-129` · conservar A

- B: El cifrado propio de un DRM garantiza por sí mismo conformidad con WCAG para cualquier contenido y dispositivo.
- C: La accesibilidad depende solo de la presentación visual y nunca puede verse afectada por controles de copia o uso.
- D: Las excepciones legales desactivan automáticamente toda restricción técnica cuando interviene una tecnología de apoyo.

### 2. `MAN-GSI-P16-055` · conservar A

- B: Porque obliga a publicar bajo LGPL cualquier aplicación que enlace con la biblioteca, sin distinguir cómo se realiza el enlace.
- C: Porque sitúa automáticamente la biblioteca en el dominio público y elimina las condiciones sobre copia y redistribución.
- D: Porque permite únicamente el enlace estático con software propietario y prohíbe el enlace dinámico con otras licencias.

### 3. `MAN-GSI-P17-110` · conservar D

- A: Una instrucción ejecutada por un proceso para solicitar voluntariamente un servicio protegido al núcleo del sistema.
- B: Una comprobación repetitiva en la que la CPU consulta el estado del periférico hasta detectar que está preparado.
- C: El procedimiento de guardar y restaurar registros cuando el planificador cambia la ejecución de un proceso a otro.

### 4. `MAN-GSI-P19-114` · conservar D

- A: Reduce siempre el trabajo tanto del codificador como del decodificador y no introduce latencia adicional.
- B: Disminuye el bitrate sin afectar a calidad, complejidad ni compatibilidad entre terminales y plataformas.
- C: Elimina la negociación de codecs porque cualquier receptor puede decodificar de forma nativa todo formato comprimido.

### 5. `MAN-GSI-P19-132` · conservar A

- B: El medio radio compartido reserva capacidad estable a cada sala y evita la competencia con otros dispositivos cercanos.
- C: Ethernet introduce más interferencia variable que Wi-Fi porque sus tramas recorren un medio físico dedicado.
- D: La selección automática de canal garantiza ancho de banda y latencia constantes aunque el espectro esté congestionado.

### 6. `MAN-GSI-P17-103` · conservar A

- B: Dividir el espacio de direcciones en segmentos lógicos de tamaño variable asociados a código, datos o pila.
- C: Trasladar un proceso completo entre memoria principal y almacenamiento secundario para liberar capacidad física.
- D: Copiar bloques usados con frecuencia a líneas de memoria caché para reducir el tiempo medio de acceso del procesador.

### 7. `MAN-GSI-P19-030` · conservar C

- A: Un servidor que conserva exclusivamente asociaciones entre usuarios SIP y direcciones de contacto para localizar terminales.
- B: Una pasarela dedicada solo a convertir canales de telefonía de circuitos en flujos RTP, sin aplicar políticas de frontera.
- D: Un cortafuegos genérico de capas 3 y 4 que filtra IP y puertos sin comprender ni normalizar señalización SIP o medios.

### 8. `MAN-GSI-P18-155` · conservar B

- A: El historial del chat aplica automáticamente clasificación, calendario de conservación y bloqueo legal a cada mensaje.
- C: Las conversaciones mantienen un registro estable aunque usuarios, administradores o políticas eliminen mensajes y adjuntos.
- D: La búsqueda textual del chat sustituye por sí sola al control de versiones, los metadatos y el gobierno de un repositorio.

### 9. `MAN-GSI-P19-148` · conservar A

- B: Permitir acceso completo siempre que el usuario supere MFA, dejando la postura del dispositivo para una revisión posterior.
- C: Considerarlo conforme después de instalar una VPN, aunque permanezcan el rooteo y la versión mínima incumplida.
- D: Conceder acceso según la velocidad de la conexión móvil, sin utilizar señales de integridad o cumplimiento del terminal.

### 10. `MAN-GSI-P18-048` · conservar A

- B: JSON ofrece siempre validación de contenido mixto, espacios de nombres y firma documental con mayor madurez que XML.
- C: XML produce en todos los casos documentos más pequeños y un análisis más rápido, con independencia del contrato usado.
- D: JSON no permite representar texto Unicode ni estructuras jerárquicas, por lo que XML es obligatorio para esos datos.

### 11. `MAN-GSI-P19-021` · conservar B

- A: Transportar muestras de audio y vídeo en tiempo real con números de secuencia y marcas temporales mediante RTP.
- C: Describir codecs, direcciones, puertos y otros parámetros de una sesión multimedia mediante un cuerpo SDP.
- D: Informar sobre pérdida, jitter y estadísticas de recepción de los flujos multimedia mediante mensajes RTCP.

### 12. `MAN-GSI-P15-119` · conservar D

- A: Aceptar cabeceras reenviadas de cualquier origen, porque el proxy siempre impide que un cliente las suplante.
- B: Configurar únicamente compresión de respuestas y caché de archivos estáticos para recuperar esquema, IP y host originales.
- C: Registrar en Kestrel los servidores DNS de cada cliente para que sustituyan la información aportada por el proxy inverso.

### 13. `MAN-GSI-P19-019` · conservar D

- A: Agrupar los elementos únicamente por fabricante y tecnología de acceso, sin mostrar control de sesión ni datos de abonado.
- B: Unir señalización y medios en una única capa y situar las funciones de abonado dentro de la red de acceso radio.
- C: Representar solo racks, enlaces físicos y subredes IP, aunque se pierdan las funciones y dependencias propias de IMS.

### 14. `MAN-GSI-P14-132` · conservar B

- A: Identificación y autenticación de ciudadanos ante servicios públicos mediante sistemas concertados en la plataforma Cl@ve.
- C: Intercambio electrónico de asientos y documentación registral entre oficinas integradas en la plataforma SIR.
- D: Acceso centralizado de los interesados a notificaciones y comunicaciones electrónicas a través de la DEHú.

### 15. `MAN-GSI-P15-005` · conservar C

- A: El runtime y las bibliotecas de ejecución que necesita una aplicación publicada como dependiente del framework.
- B: Los componentes de alojamiento de ASP.NET Core requeridos para servir una aplicación web en el entorno elegido.
- D: Los archivos de configuración y dependencias publicados junto a la aplicación para que el host pueda iniciarla.

### 16. `MAN-GSI-P16-159` · conservar A

- B: Confiar únicamente en el SLA del proveedor y prescindir de una alternativa probada mientras se cumplan sus métricas.
- C: Conservar copias de los binarios sin prever licencias, claves, documentación ni continuidad contractual de la activación.
- D: Mantener conectividad redundante, pero sin monitorizar la dependencia ni ensayar recuperación, migración o salida.

### 17. `MAN-GSI-P15-140` · conservar C

- A: Mantener una sola transacción durante toda la sesión del usuario para incluir cualquier operación que realice después.
- B: Confirmar cada sentencia de persistencia por separado aunque varias formen conjuntamente una única operación de negocio.
- D: Definir la transacción solo durante compilación y despliegue porque el contenedor no puede gestionarla en ejecución.

### 18. `MAN-GSI-P16-114` · conservar C

- A: Descompilar y publicar inmediatamente todo el producto porque disponer de una licencia equivale a adquirir su código.
- B: Prohibir cualquier análisis del binario aun cuando falte información indispensable, sin examinar contrato ni marco legal.
- D: Copiar interfaces y código completo invocando interoperabilidad, sin comprobar necesidad, finalidad ni límites de uso.

### 19. `MAN-GSI-P17-146` · conservar B

- A: Gestionar únicamente datos y aplicaciones corporativas sin aplicar configuración o cumplimiento al dispositivo completo.
- C: Federar identidades y proporcionar inicio de sesión único entre aplicaciones, directorios y proveedores de servicio.
- D: Autorizar conexiones a la red según identidad y postura del equipo, sin administrar su configuración o aplicaciones.

### 20. `MAN-GSI-P14-122` · conservar D

- A: Un órgano bilateral entre la Administración General del Estado y una comunidad autónoma para asuntos de interés común.
- B: Un órgano sectorial que reúne al ministro competente y a los consejeros autonómicos responsables de una materia concreta.
- C: Una comisión interna de coordinación entre ministerios de la Administración General del Estado sin participación autonómica.

## Fuentes contrastadas

- P14: `documents/markdown/gsi/P14/GSI A2 — PRÁCTICA ACTIVA 14 — TEST BLOQUE I — SOLUCIONARIO COMENTADO.md`, preguntas 122 y 132.
- P15: `documents/markdown/gsi/P15/GSI A2 — PRÁCTICA ACTIVA 15 — .NET Y JAKARTA EE — SOLUCIONARIO COMENTADO.md`, preguntas 5, 119 y 140.
- P16: `documents/markdown/gsi/P16/GSI A2 — PRÁCTICA ACTIVA 16 — LICENCIAS, PROTECCIÓN JURÍDICA Y DRM — SOLUCIONARIO COMENTADO.md`, preguntas 55, 114, 129 y 159.
- P17: `documents/markdown/gsi/P17/GSI A2 — PRÁCTICA ACTIVA 17 — COMPUTADORES, CLOUD Y SISTEMAS OPERATIVOS — SOLUCIONARIO COMENTADO.md`, preguntas 103, 110 y 146.
- P18: `documents/markdown/gsi/P18/GSI A2 — PRÁCTICA ACTIVA 18 — HTML, XML, CONTENIDOS, BÚSQUEDA Y SEO — SOLUCIONARIO COMENTADO.md`, preguntas 48 y 155.
- P19: `documents/markdown/gsi/P19/GSI A2 — PRÁCTICA ACTIVA 19 — NGN, IMS, MOVILIDAD, UEM Y VIDEOCONFERENCIA — SOLUCIONARIO COMENTADO.md`, preguntas 19, 21, 30, 114, 132 y 148.

## Resultado de la preparación

- 20 de 20 IDs localizados en el banco manual.
- 20 de 20 claves coincidentes con sus solucionarios conservados.
- 20 decisiones editoriales pendientes de aprobación humana.
- Cero modificaciones en `data/questions-manual.json`, `data/questions-official.json` y `data/questions-ai.json`.

Este lote solo podrá aplicarse después de recibir aprobación expresa de sus textos concretos.
