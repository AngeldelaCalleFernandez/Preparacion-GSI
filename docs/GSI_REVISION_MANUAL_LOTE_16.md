# Revisión humana de preguntas manuales · lote 16

Fecha de preparación: 24 de octubre de 2026.

## Alcance y estado

Este documento registra la aplicación de las 20 candidatas siguientes a las incluidas en el lote 15 dentro de la cola editorial `correct-length-dominance`. La instrucción expresa «apruebo los lotes 06–20» de la persona responsable del proyecto autoriza las veinte decisiones de este lote.

Los 20 registros se contrastaron con el solucionario Markdown conservado de su práctica. En todos los casos, la letra correcta del banco coincide con la letra publicada en el solucionario.

Estado del lote: **20 decisiones humanas L3 aprobadas y aplicadas; cero pendientes**.

## Elementos preparados

| Orden | ID | Tema | Relación inicial | Evidencia de clave | Contraste aprobado y aplicado |
| ---: | --- | --- | ---: | --- | --- |
| 1 | `MAN-GSI-P15-093` | B3-T11 | 2,48× | P15, pregunta 93, D | Transacción explícita frente a uso universal, implícito o coordinación insuficiente. |
| 2 | `MAN-GSI-P18-082` | B2-T16 | 2,48× | P18, pregunta 82, B | CMS frente a DMS, DAM y generador estático. |
| 3 | `MAN-GSI-P14-127` | B1-T10 | 2,48× | P14, pregunta 127, C | Red SARA frente a SIR, DIR3 y nube comercial. |
| 4 | `MAN-GSI-P19-141` | B4-T14 | 2,47× | P19, pregunta 141, D | Migración UC frente a soluciones parciales de trunk, terminal o cifrado. |
| 5 | `MAN-GSI-P18-160` | B2-T16 | 2,47× | P18, pregunta 160, A | Gobierno integral frente a CMS, buscador o red social aislados. |
| 6 | `MAN-GSI-P19-018` | B4-T14 | 2,47× | P19, pregunta 18, B | IMS distribuido frente a appliance, problema solo de escala o PBX equivalente. |
| 7 | `MAN-GSI-P18-135` | B2-T16 | 2,47× | P18, pregunta 135, C | SEO/SEM frente a inversión de orgánico y pago o métricas aisladas. |
| 8 | `MAN-GSI-P19-110` | B4-T16 | 2,47× | P19, pregunta 110, D | STUN y TURN frente a funciones invertidas o cifrado. |
| 9 | `MAN-GSI-P18-061` | B2-T09 | 2,47× | P18, pregunta 61, B | DOM frente a HTML fuente, almacenamiento y CSSOM. |
| 10 | `MAN-GSI-P14-144` | B1-T10 | 2,46× | P14, pregunta 144, B | Cl@ve y Autentica frente a SIR, DEHú y DIR3. |
| 11 | `MAN-GSI-P18-131` | B2-T16 | 2,46× | P18, pregunta 131, A | robots.txt frente a autorización, ocultación y bloqueo de URL ficticios. |
| 12 | `MAN-GSI-P15-027` | B3-T11 | 2,46× | P15, pregunta 27, D | Assembly frente a paquete NuGet, proceso y proyecto fuente. |
| 13 | `MAN-GSI-P14-035` | B1-T02 | 2,46× | P14, pregunta 35, C | Defensor del Pueblo frente a tribunal, órgano gubernamental y AEPD. |
| 14 | `MAN-GSI-P18-014` | B2-T09 | 2,46× | P18, pregunta 14, D | Label frente a placeholder, validación y estilo visual. |
| 15 | `MAN-GSI-P19-049` | B4-T15 | 2,46× | P19, pregunta 49, D | 5G-Advanced frente a 6G, NSA y Wi-Fi. |
| 16 | `MAN-GSI-P19-160` | B4-T16 | 2,45× | P19, pregunta 160, B | Arquitectura integrada frente a producto, radio o definiciones aisladas. |
| 17 | `MAN-GSI-P18-054` | B2-T09 | 2,45× | P18, pregunta 54, C | Interpretación frente a imposibilidad de compilación, ausencia de tipos o navegador. |
| 18 | `MAN-GSI-P16-123` | B2-T14 | 2,45× | P16, pregunta 123, D | Licencia jurídica frente a DRM técnico. |
| 19 | `MAN-GSI-P15-139` | B3-T10 | 2,45× | P15, pregunta 139, C | Java SE y Jakarta EE frente a numeraciones o sustituciones falsas. |
| 20 | `MAN-GSI-P14-081` | B1-T05 | 2,45× | P14, pregunta 81, A | Ley 4/2023 frente a dependencia, datos y transparencia. |

## Propuestas concretas aprobadas y aplicadas

Las respuestas correctas permanecen literalmente intactas. La aprobación del lote autorizó únicamente los tres distractores enumerados en cada registro.

### 1. `MAN-GSI-P15-093` · conservar D

- A: Para toda consulta de lectura, creando siempre una transacción manual aunque el proveedor y el límite de negocio no lo requieran.
- B: Nunca, porque cada llamada a `SaveChanges` coordina automáticamente cualquier operación y recurso externo de la unidad de negocio.
- C: Cuando se utiliza Kestrel, ya que el servidor HTTP es quien abre y confirma las transacciones de persistencia de cada petición.

### 2. `MAN-GSI-P18-082` · conservar B

- A: Un sistema de gestión documental centrado en expedientes, versiones, clasificación, conservación y recuperación de documentos.
- C: Un sistema de gestión de activos digitales especializado en catalogar y distribuir imágenes, audio, vídeo y otros medios.
- D: Una herramienta que genera archivos HTML en una fase de construcción a partir de plantillas y contenido fuente.

### 3. `MAN-GSI-P14-127` · conservar C

- A: La infraestructura SIR utilizada para intercambiar asientos registrales y documentación entre oficinas integradas.
- B: El directorio DIR3 que codifica unidades orgánicas, oficinas y otras entidades necesarias para la interoperabilidad.
- D: Un proveedor comercial de infraestructura y plataformas cloud contratado en exclusiva por todas las Administraciones.

### 4. `MAN-GSI-P19-141` · conservar D

- A: Contratar un único SIP trunk y confiar en el proveedor, sin SBC, redundancia, monitorización ni procedimiento de caída.
- B: Sustituir los teléfonos y mantener la red sin medir capacidad, pérdida, jitter o priorización del tráfico multimedia.
- C: Activar TLS en señalización y considerar cubiertos medios, fraude, continuidad, sedes remotas y operación diaria.

### 5. `MAN-GSI-P18-160` · conservar A

- B: Adquirir un CMS y publicar directamente, sin definir workflow, metadatos, responsables, conservación ni métricas de uso.
- C: Implantar un buscador interno sobre repositorios inconexos, sin mejorar clasificación, permisos o calidad del contenido.
- D: Trasladar todo a una red social corporativa y tratar conversaciones y adjuntos como repositorio oficial permanente.

### 6. `MAN-GSI-P19-018` · conservar B

- A: No existiría riesgo, porque las funciones IMS se ejecutarían en un único appliance indivisible definido así por 3GPP.
- C: El riesgo se limitaría a la capacidad, sin consecuencias para redundancia, seguridad, encaminamiento o interoperabilidad entre funciones.
- D: Permitiría sustituir todas las entidades IMS por una PBX, ya que ambas arquitecturas definen exactamente las mismas funciones.

### 7. `MAN-GSI-P18-135` · conservar C

- A: SEO designa exclusivamente publicidad pagada y SEM únicamente mejoras orgánicas de contenido y rastreo.
- B: SEO y SEM son sinónimos para cualquier acción que aumente tráfico, sin distinguir resultados orgánicos y campañas de pago.
- D: SEM se limita a medir posiciones y clics del sitio, pero no incluye creación, segmentación o gestión de anuncios en buscadores.

### 8. `MAN-GSI-P19-110` · conservar D

- A: STUN retransmite todos los medios como relay y TURN se limita a informar al cliente de su dirección pública observada.
- B: TURN solo comprueba pares de conectividad sin transportar tráfico, mientras STUN mantiene el relay durante toda la sesión.
- C: Ambos cifran los medios extremo a extremo; la diferencia consiste únicamente en el algoritmo criptográfico utilizado.

### 9. `MAN-GSI-P18-061` · conservar B

- A: El texto HTML original recibido del servidor, que permanece inmutable aunque el navegador modifique la página en memoria.
- C: Una base de almacenamiento persistente del navegador equivalente a una base relacional accesible mediante consultas SQL.
- D: El modelo CSSOM que representa exclusivamente reglas y hojas de estilo, sin incluir nodos, atributos o contenido del documento.

### 10. `MAN-GSI-P14-144` · conservar B

- A: Cl@ve intercambia asientos registrales mediante SIR y Autentica conserva expedientes en el archivo electrónico único.
- C: Cl@ve centraliza notificaciones en la DEHú y Autentica mantiene los códigos de unidades y oficinas del directorio DIR3.
- D: Ambas son aplicaciones de firma local que funcionan sin servicios de identidad y se dirigen al mismo colectivo de usuarios.

### 11. `MAN-GSI-P18-131` · conservar A

- B: Porque aplica autorización en el servidor y rechaza con seguridad cualquier petición procedente de un crawler no permitido.
- C: Porque oculta la existencia de la ruta: las entradas declaradas no pueden ser leídas ni descubiertas por usuarios o buscadores.
- D: Porque elimina físicamente del servidor el recurso indicado y evita que un cliente acceda directamente mediante su URL.

### 12. `MAN-GSI-P15-027` · conservar D

- A: Un paquete NuGet que agrupa uno o varios artefactos, dependencias y metadatos para su distribución mediante repositorios.
- B: El proceso del sistema operativo que aloja el CLR y ejecuta una o varias unidades de código cargadas en memoria.
- C: El proyecto fuente con archivos C#, configuración de compilación y referencias, antes de producir sus salidas binarias.

### 13. `MAN-GSI-P14-035` · conservar C

- A: Un órgano jurisdiccional especial cuyas resoluciones sustituyen las sentencias de los tribunales en materia de derechos fundamentales.
- B: Un órgano dependiente del Gobierno que recibe instrucciones del Consejo de Ministros para supervisar a las Administraciones.
- D: La autoridad administrativa independiente que ejerce potestades de control y sanción exclusivamente en protección de datos.

### 14. `MAN-GSI-P18-014` · conservar D

- A: Mostrar un texto provisional dentro del control que sustituye permanentemente su nombre accesible y desaparece al escribir.
- B: Ejecutar la validación de los datos introducidos y bloquear el envío cuando el valor no cumple el formato requerido.
- C: Aplicar color, tipografía y posición visual al control sin establecer ninguna asociación semántica con su descripción.

### 15. `MAN-GSI-P19-049` · conservar D

- A: La primera especificación oficial de 6G, incompatible con NR y separada de la evolución de las releases de 5G.
- B: El despliegue 5G NSA que combina NR con LTE/EPC, con independencia de las funciones incorporadas por Release 18.
- C: Una evolución del estándar Wi-Fi para redes locales que utiliza numeración de releases coordinada con 3GPP.

### 16. `MAN-GSI-P19-160` · conservar B

- A: Elegir un producto único de comunicaciones y asumir que reemplaza diseño WAN/LAN, seguridad, UEM, capacidad, continuidad y operación.
- C: Estudiar definiciones de IMS, 5G y WebRTC sin dimensionamiento, flujos, controles de endpoint ni pruebas de interoperabilidad reales.
- D: Sustituir toda conectividad fija por 5G y considerar innecesarios QoS, SBC, gestión de terminales, monitorización y redundancia.

### 17. `MAN-GSI-P18-054` · conservar C

- A: Que el lenguaje no puede compilarse en ninguna implementación ni utilizar técnicas JIT o generación previa de código.
- B: Que carece necesariamente de tipos y comprobaciones, porque todo intérprete solo puede operar con valores dinámicos.
- D: Que solo puede ejecutarse dentro de un navegador y no admite runtimes de servidor, escritorio o línea de comandos.

### 18. `MAN-GSI-P16-123` · conservar D

- A: La licencia es el mecanismo que cifra o bloquea el archivo, mientras DRM se limita a describir permisos contractuales.
- B: El DRM concede copyright al proveedor y autoriza jurídicamente usos que la licencia no haya contemplado.
- C: Son términos equivalentes: cualquier condición jurídica se ejecuta técnicamente y todo control técnico constituye una licencia.

### 19. `MAN-GSI-P15-139` · conservar C

- A: El número de Jakarta EE determina la versión de Java SE: Jakarta EE 11 solo puede significar Java SE 11.
- B: Java SE es un perfil reducido definido dentro de Jakarta EE y no puede utilizarse independientemente de un servidor empresarial.
- D: Jakarta EE sustituye la JVM por un runtime propio incompatible con clases, bibliotecas y herramientas de la plataforma Java SE.

### 20. `MAN-GSI-P14-081` · conservar A

- B: La Ley 39/2006, relativa a promoción de la autonomía personal y atención a las personas en situación de dependencia.
- C: La Ley Orgánica 3/2018, sobre protección de datos personales y garantía de los derechos digitales.
- D: La Ley 19/2013, dedicada a transparencia, acceso a la información pública y buen gobierno.

## Fuentes contrastadas

- P14: `documents/markdown/gsi/P14/GSI A2 — PRÁCTICA ACTIVA 14 — TEST BLOQUE I — SOLUCIONARIO COMENTADO.md`, preguntas 35, 81, 127 y 144.
- P15: `documents/markdown/gsi/P15/GSI A2 — PRÁCTICA ACTIVA 15 — .NET Y JAKARTA EE — SOLUCIONARIO COMENTADO.md`, preguntas 27, 93 y 139.
- P16: `documents/markdown/gsi/P16/GSI A2 — PRÁCTICA ACTIVA 16 — LICENCIAS, PROTECCIÓN JURÍDICA Y DRM — SOLUCIONARIO COMENTADO.md`, pregunta 123.
- P18: `documents/markdown/gsi/P18/GSI A2 — PRÁCTICA ACTIVA 18 — HTML, XML, CONTENIDOS, BÚSQUEDA Y SEO — SOLUCIONARIO COMENTADO.md`, preguntas 14, 54, 61, 82, 131, 135 y 160.
- P19: `documents/markdown/gsi/P19/GSI A2 — PRÁCTICA ACTIVA 19 — NGN, IMS, MOVILIDAD, UEM Y VIDEOCONFERENCIA — SOLUCIONARIO COMENTADO.md`, preguntas 18, 49, 110, 141 y 160.

## Resultado de la aplicación

- 20 de 20 IDs localizados en el banco manual.
- 20 de 20 claves coincidentes con sus solucionarios conservados.
- 20 decisiones editoriales aprobadas y aplicadas; cero pendientes en este lote.
- Se modificaron únicamente los tres distractores aprobados de cada pregunta: 20 IDs y 60 textos.
- Se conservaron enunciados, claves correctas, feedback, procedencia, estado de validación y estado activo.
- `data/questions-official.json` y `data/questions-ai.json` permanecen intactos.

## Verificación

- Cola `correct-length-dominance`: de 196 a 176 registros.
- Preguntas manuales con algún hallazgo heurístico: de 214 a 194.
- Alertas `absolute-wording-cluster`: 31 antes y 29 después.
- SHA-256 de partida de `data/questions-manual.json`: `bafbc76ae697cce9734d4338e419e97f2270ab96ea24d5b33182d81ce3eff53b`.
- SHA-256 resultante, coincidente con el punto de control previsto: `78a53c33ae801092b435656f5ec0f1a04615f29e88cdeb16fd6bef3c7f69ad76`.

El siguiente punto de control dentro del mismo bloque aprobado es el lote 17.
