# GSI-EDITORIAL-071 — revisión propuesta

Preparado: 2026-11-03. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `fe135f2bc1945ece12640cb37ec3ef558fe98151f19602d2614a0adf67639993`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## AI-GSI-B4-T01-007

Decisión: pending_review · acción: revise.

Motivo: Conservar clases Unix y clave D; distinguir sujetos, operaciones, credenciales y tipos de archivo con términos reales.

### Antes

¿Qué ámbitos distinguen los permisos Unix clásicos?

- A. Lectura, escritura y ejecución como sujetos
- B. Dominio, bosque y unidad organizativa
- C. Administrador, servicio y proceso como únicos ámbitos POSIX
- D. Propietario, grupo y otros **(correcta)**

Explicación: Los bits rwx se aplican a esos ámbitos, complementables mediante ACL.

### Propuesta

En el modelo Unix clásico, ¿a qué clases se asignan los conjuntos de bits rwx de un archivo?

- A. Lectura, escritura y ejecución.
- B. UID real, UID efectivo y UID guardado.
- C. Archivo regular, directorio y enlace simbólico.
- D. Propietario, grupo y otros. **(correcta)**

Explicación: Los permisos clásicos distinguen tres clases de sujetos: propietario, grupo y otros. A cada clase se le asignan bits de lectura, escritura y ejecución. No deben confundirse sujetos con operaciones, identificadores del proceso o tipos de archivo. ACL y otros mecanismos pueden complementar el modelo; esta pregunta no describe todo el control de acceso del sistema.

- Error A: Lectura, escritura y ejecución son operaciones o permisos, no las clases de sujetos a las que se asignan.
- Error B: Los UID citados son credenciales del proceso; no son los tres conjuntos de bits del modo de un archivo.
- Error C: Son tipos de archivo, no categorías de usuarios para asignar esos permisos.

- [Linux man-pages: inode(7)](https://man7.org/linux/man-pages/man7/inode.7.html) · DESCRIPTION: File type and mode; bits S\_IRWXU, S\_IRWXG y S\_IRWXO · versión: Manual primario Linux consultado 03-11-2026. Permisos clásicos de propietario/grupo/otros, no una descripción exhaustiva de ACL o de todos los controles de seguridad. · comprobado: 2026-11-03

Partida: `aa53ccc67acb1fa062449f7986a99e3a4e901cd6eb887e631dea5199e3cab4e7` · propuesta: `e6c5118c9c02f615ffbd1eb9e96256ac066a4c82a1018d9f254d49c52dd75a4f`

## AI-GSI-B4-T01-008

Decisión: pending_review · acción: revise.

Motivo: Conservar ACL de identidades y clave C; precisar DACL frente a SACL y cifrado sin trasladar permisos POSIX a NTFS.

### Antes

¿Qué mecanismo predomina en permisos NTFS?

- A. Solo permisos POSIX rwx sin identidades Windows
- B. Direcciones IP como única identidad de acceso local
- C. ACL asociadas a identidades y grupos **(correcta)**
- D. El nombre del fichero como autorización suficiente

Explicación: Windows utiliza SIDs, grupos y ACL; no basta con el nombre del recurso.

### Propuesta

¿Qué mecanismo expresa principalmente las autorizaciones de acceso discrecional a un archivo NTFS?

- A. Una SACL que decide las autorizaciones por el mero hecho de registrar intentos de acceso.
- B. Los bits rwx como único mecanismo, interpretados sin identidades o grupos Windows.
- C. Una DACL con entradas que permiten o deniegan derechos a identidades y grupos. **(correcta)**
- D. El cifrado EFS como sustituto de toda autorización discrecional sobre el archivo.

Explicación: El control discrecional Windows utiliza una DACL con entradas ACE que identifican sujetos y derechos permitidos o denegados. Las identidades de seguridad se representan mediante SIDs. Una SACL tiene otra finalidad: seleccionar intentos que se auditan. Cifrar contenido y auditar no sustituyen la decisión de autorización de la DACL.

- Error A: La SACL define auditoría de intentos, no el conjunto de autorizaciones discrecionales concedidas o denegadas.
- Error B: Los bits clásicos Unix no describen por sí solos el modelo de sujetos y ACE de Windows/NTFS.
- Error D: EFS protege el contenido mediante cifrado; no reemplaza todos los permisos discrecionales de acceso al objeto.

- [Microsoft: Access control lists](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists) · DACLs and SACLs: ACE, trustee, autorización y auditoría · versión: Texto Win32 público comprobado 03-11-2026. Se distingue DACL de SACL y se acota a acceso discrecional; no se trata todo mecanismo Windows como una lista equivalente. · comprobado: 2026-11-03

Partida: `67352ccda0096be8721ce5dc88d54f46a9f49609a097eb0fc82f7e55f5f64891` · propuesta: `9d26fcd54e60ff33529921c471d99fa041315194062273941f4ce660325eaad8`

## AI-GSI-B4-T01-009

Decisión: pending_review · acción: revise.

Motivo: Conservar uso no interactivo y gestión controlada y clave A; acotar servicio sin necesidad de login personal y admitir identidades gestionadas.

### Antes

¿Qué práctica reduce exposición de cuentas de servicio?

- A. Uso no interactivo y gestión controlada de secretos **(correcta)**
- B. Publicar sus credenciales
- C. Iniciar sesiones ordinarias de todos los usuarios con ellas
- D. Asignar privilegios máximos sin revisión

Explicación: Las cuentas técnicas deben limitar uso y privilegios según función.

### Propuesta

Para una cuenta usada por un servicio automático que no requiere sesiones personales, ¿qué práctica reduce exposición?

- A. Limitar la identidad a su función no interactiva y gestionar credenciales y permisos de forma controlada. **(correcta)**
- B. Utilizarla también para las sesiones personales de los operadores, para concentrar actividad en un nombre.
- C. Concederle administración completa por anticipado y revisar permisos únicamente si se produce un fallo.
- D. Distribuir una credencial común a varios servicios y mantenerla mientras todos sigan conectando.

Explicación: Una identidad de servicio debe representar su función técnica, con uso y permisos limitados, propietario conocido y gestión de credenciales cuando existan. Las identidades o credenciales gestionadas pueden reducir secretos administrados manualmente. Para un servicio que no necesita sesiones personales conviene evitar ese uso interactivo; no basta con que las conexiones actuales funcionen.

- Error B: Mezclar actividad humana con la identidad técnica dificulta atribución y amplía usos y exposición fuera de la función prevista.
- Error C: Privilegios anticipados por comodidad exceden lo necesario y una ausencia de fallos no demuestra que sean adecuados.
- Error D: Compartir credencial extiende el impacto de un compromiso y la disponibilidad de conexión no acredita su gestión, revisión o protección.

- [Microsoft: Securing cloud-based service accounts](https://learn.microsoft.com/en-us/entra/architecture/secure-service-accounts) · Tipos de cuenta de servicio; Managed identities; Service principals · versión: Documentación pública comprobada 03-11-2026. Identidad no humana y opciones gestionadas; no se prescribe Azure o un secreto manual a todo servicio. · comprobado: 2026-11-03
- [Gobierno de Canadá: Account Management Configuration Requirements](https://www.canada.ca/en/government/system/digital-government/policies-standards/enterprise-it-service-common-configurations/account.html) · §5 Non-person entity accounts, 5.1 y5.4; §6 Monitoring · versión: Texto institucional consultado 03-11-2026. Inventario, propietario, credenciales gestionadas y uso limitado; guía conceptual, no obligación jurídica del proyecto o la AGE. · comprobado: 2026-11-03

Partida: `72f175613b8d8f67d26bb4f48f35a3f695876cc3941239d39f6151a7ad1a69a8` · propuesta: `f300756d8bb164ecbaeb54c50df3e549cc751be2c8c0afbfb48b8a6c695b86b1`

## AI-GSI-B4-T01-011

Decisión: pending_review · acción: revise.

Motivo: Conservar diagnóstico más allá del proceso y clave C; alternativas de falsas inferencias operativas y recogida de evidencia.

### Antes

Un proceso existe pero el servicio no responde. ¿Qué diagnóstico es razonable?

- A. Reinstalar siempre sin medir
- B. Eliminar todos los logs
- C. Revisar dependencias, red, permisos y saturación **(correcta)**
- D. Declarar que funciona solo porque existe el proceso

Explicación: La salud del servicio depende de más elementos que la presencia del proceso.

### Propuesta

El proceso de un servicio sigue presente, pero las peticiones no obtienen respuesta. ¿Qué enfoque de diagnóstico es razonable?

- A. Cerrar la incidencia al confirmar el PID, porque existir el proceso acredita que presta el servicio.
- B. Reiniciar repetidamente sin recoger evidencia, aunque reaparezca el síntoma y se desconozca su causa.
- C. Contrastar respuesta real, dependencias, conectividad, permisos y recursos antes de decidir la causa. **(correcta)**
- D. Ampliar CPU por defecto, porque un proceso vivo que no responde demuestra saturación de cálculo.

Explicación: La existencia del proceso no demuestra que atienda correctamente peticiones. Conviene observar el síntoma desde el uso real y contrastarlo con dependencias, conexiones, permisos, errores y recursos. Las pruebas deben discriminar hipótesis y registrar evidencia; un reinicio puede ser una mitigación, pero por sí solo no identifica la causa o asegura que no reaparezca.

- Error A: Un proceso puede estar bloqueado, sin acceso a una dependencia o fallando peticiones; el PID no prueba la salud del servicio.
- Error B: Reiniciar sin evidencia puede perder información y repetir una mitigación sin entender el fallo.
- Error D: El síntoma no identifica necesariamente CPU como cuello de botella; puede haber red, permisos, espera u otras causas.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) · Black-Box Versus White-Box; The Four Golden Signals: Saturation · versión: Libro SRE, capítulo6, texto público comprobado 03-11-2026. Síntomas, utilización, latencia y margen, sin un umbral CPU universal o garantía de salud por proceso existente. · comprobado: 2026-11-03
- [Google SRE: Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/) · The Scientific Method; Hypothesize; Test; diseño de pruebas y evidencia · versión: Libro SRE, capítulo12, texto público comprobado 03-11-2026. Método de hipótesis/prueba, sin ejecutar los ejemplos o atribuir causalidad a una comparación no controlada. · comprobado: 2026-11-03

Partida: `fb65dcee699d74482d4ad37036e9bb40ae3d806601e5edf7181788b8578b16e9` · propuesta: `f279dd4f4156600976ab0842a4829885d3d227f478af1230e66040377f23e807`

## AI-GSI-B4-T01-013

Decisión: pending_review · acción: revise.

Motivo: Conservar agotamiento y fallo de escritura y clave D; caso que distingue estado del proceso de persistencia, sin afirmar fallo universal de lectura.

### Antes

¿Qué riesgo provoca agotar el almacenamiento?

- A. Aumentar automáticamente RAM
- B. Mejorar rendimiento siempre
- C. Eliminar necesidad de cuotas
- D. Impedir escritura de logs, datos o actualizaciones **(correcta)**

Explicación: La capacidad debe vigilarse antes del agotamiento, por su efecto sobre servicios.

### Propuesta

Un servicio agota el espacio utilizable de su volumen de datos. ¿Qué riesgo debe contemplar el diagnóstico?

- A. Que leer un archivo existente exige crear una copia completa del archivo antes de devolver datos.
- B. Que el espacio reservado del sistema absorbe cualquier crecimiento de datos sin necesidad de intervención.
- C. Que mantener el proceso presente garantiza que todas sus escrituras se hayan persistido correctamente.
- D. Que pueden fallar escrituras de logs, datos o actualizaciones aunque el proceso continúe presente. **(correcta)**

Explicación: Agotar el espacio utilizable puede impedir completar escrituras de datos, registros o actualizaciones; una escritura también puede ser parcial. Mantener el proceso vivo no prueba que sus operaciones persistan. Deben vigilarse capacidad y límites pertinentes —espacio, metadatos o cuotas según el caso— y comprobar errores; no se deduce que todo archivo ya existente deje necesariamente de poder leerse.

- Error A: Leer contenido existente no exige por regla general una copia completa previa; los problemas de escritura no implican ese comportamiento de toda lectura.
- Error B: Reservas o políticas pueden proteger ciertos usos, pero no aportan capacidad ilimitada o eliminan la vigilancia de crecimiento.
- Error C: La presencia del proceso no acredita el resultado de sus escrituras; debe comprobarse si fallaron o quedaron incompletas.

- [Linux man-pages: write(2)](https://man7.org/linux/man-pages/man2/write.2.html) · DESCRIPTION; ERRORS: ENOSPC y escrituras parciales · versión: Manual primario comprobado 03-11-2026. Espacio insuficiente puede impedir completar escrituras; no afirma que toda lectura previa deba fallar o todo almacenamiento crezca automáticamente. · comprobado: 2026-11-03

Partida: `df4ddf3f2e96baa33a621bd803080c577bf0689415db103fbeb2bcd78553158d` · propuesta: `27f99a5ee51db8586168848e4376c60dcb5a5dd9167a72a8126cbbae22f9e6de`

## AI-GSI-B4-T01-015

Decisión: pending_review · acción: revise.

Motivo: Conservar verificación/documentación posterior y clave D; distinguir adquisición, instalación y salud efectiva sin imponer igual protocolo a todo parche.

### Antes

¿Qué debe realizarse después de desplegar parches?

- A. Suponer éxito porque terminó la descarga
- B. Eliminar toda posibilidad de contingencia
- C. Omitir comprobar servicios
- D. Verificar y documentar resultados **(correcta)**

Explicación: La gestión de parches incluye prueba previa y verificación posterior.

### Propuesta

¿Qué debe realizarse después de desplegar un parche en los sistemas afectados?

- A. Cerrar el cambio al terminar la descarga, sin contrastar la versión instalada o el comportamiento.
- B. Considerar el código de salida del instalador como evidencia suficiente de toda la salud del servicio.
- C. Eliminar el plan de contingencia para impedir que se revierta un cambio ya desplegado.
- D. Verificar el estado instalado y los servicios afectados, y documentar resultados y desviaciones. **(correcta)**

Explicación: La gestión de parches incluye verificar la instalación, no solo adquirirla o ejecutarla. Hay que contrastar el estado y la versión esperados y comprobar los servicios afectados según el alcance del cambio, registrando resultados y desviaciones. Una prueba previa o código de éxito del instalador aporta evidencia parcial; no sustituye la verificación posterior ni la contingencia prevista.

- Error A: Descargar un paquete no demuestra que esté instalado o funcionando en el sistema objetivo.
- Error B: El código del instalador no evalúa por sí mismo todas las dependencias y funciones que podrían verse afectadas.
- Error C: Eliminar la contingencia no confirma el cambio y dificulta responder a un problema posterior.

- [NIST: Guide to Enterprise Patch Management Planning](https://csrc.nist.gov/pubs/sp/800/40/r4/final) · Abstract: identificar, priorizar, adquirir, instalar y verificar parches · versión: SP800-40 Rev.4, abril2022, ficha y resumen HTML comprobados 03-11-2026. Se usa el alcance expreso del resumen; no se atribuye lectura íntegra al PDF. · comprobado: 2026-11-03
- [Microsoft: Prepare a servicing strategy for Windows client updates](https://learn.microsoft.com/en-us/windows/deployment/update/waas-servicing-strategy-windows-10-updates) · Configure test devices; Recruit volunteers; Validate compatibility; Target and react to feedback · versión: URL de anillos redirigida a esta estrategia, texto público comprobado 03-11-2026. Pilotos representativos y feedback; no se recomiendan versiones Windows fuera de soporte ni se fijan anillos o plazos universales. · comprobado: 2026-11-03

Partida: `231f630e366406bca6207802f25895e0dd2d1f254776c6b40785c711b2e5071e` · propuesta: `c2f7a338c27bcbf017ee1f2ec613a8348b5a3a43a21ca455ffa6d0b0494c2ddb`

## AI-GSI-B4-T01-016

Decisión: pending_review · acción: revise.

Motivo: Conservar utilidad de anillos y clave A; microcaso de grupo inicial con observación representativa y criterios de progresión.

### Antes

¿Por qué desplegar por anillos puede ser útil?

- A. Permite observar efectos antes de extender el cambio **(correcta)**
- B. Garantiza compatibilidad sin pruebas
- C. Evita cualquier rollback
- D. Obliga a actualizar todo simultáneamente

Explicación: La progresión limita el impacto inicial y aporta evidencia para continuar.

### Propuesta

Se despliega una actualización primero a un grupo reducido de equipos. ¿Qué utilidad justifica ampliar por anillos?

- A. Observar efectos en un grupo representativo antes de decidir si se amplía el despliegue. **(correcta)**
- B. Tomar el éxito del primer equipo como prueba suficiente de compatibilidad de todos los sistemas.
- C. Sustituir las pruebas por esperar un plazo fijo, aunque no se recoja información de los equipos.
- D. Extender al resto al acabar la descarga, sin considerar incidentes o feedback del grupo inicial.

Explicación: Un despliegue progresivo permite limitar el impacto inicial y recoger evidencia antes de ampliar. El grupo debe representar aplicaciones y equipos relevantes, con criterios de avance y posibilidad de detener o tratar incidencias. No garantiza detectar todos los problemas ni sustituye pruebas o contingencia; esperar sin observaciones no aporta el mismo aprendizaje.

- Error B: Un equipo no cubre necesariamente diversidad de aplicaciones, hardware o configuración del resto.
- Error C: El mero transcurso del tiempo no demuestra buen comportamiento si no se observan resultados pertinentes.
- Error D: Decidir por finalización de descarga ignora la finalidad del grupo inicial: comprobar efectos y reaccionar al feedback.

- [Microsoft: Prepare a servicing strategy for Windows client updates](https://learn.microsoft.com/en-us/windows/deployment/update/waas-servicing-strategy-windows-10-updates) · Configure test devices; Recruit volunteers; Validate compatibility; Target and react to feedback · versión: URL de anillos redirigida a esta estrategia, texto público comprobado 03-11-2026. Pilotos representativos y feedback; no se recomiendan versiones Windows fuera de soporte ni se fijan anillos o plazos universales. · comprobado: 2026-11-03
- [NIST: Guide to Enterprise Patch Management Planning](https://csrc.nist.gov/pubs/sp/800/40/r4/final) · Abstract: identificar, priorizar, adquirir, instalar y verificar parches · versión: SP800-40 Rev.4, abril2022, ficha y resumen HTML comprobados 03-11-2026. Se usa el alcance expreso del resumen; no se atribuye lectura íntegra al PDF. · comprobado: 2026-11-03

Partida: `472edea8acd87d188361e5540b073d852a2d566f3eb4a2af479464adafdedea1` · propuesta: `839b149341d894e2510dc63a3e4221e886746780442aa6afecacfa14f34de4a9`

## AI-GSI-B4-T01-017

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave A; explicar sincronización, offset y preservación de marcas originales sin prometer causalidad.

### Antes

¿Qué mejora la correlación temporal de logs de varios equipos?

- A. Sincronización horaria **(correcta)**
- B. Corregir relojes sin documentar desfases durante el análisis
- C. Ordenar eventos solo por el equipo que los emitió
- D. Suprimir fechas para homogeneizar registros

Explicación: Relojes coherentes permiten reconstruir secuencias entre sistemas.

### Propuesta

¿Qué mejora la correlación temporal de logs de varios equipos?

- A. Sincronización horaria **(correcta)**
- B. Corregir relojes sin documentar desfases durante el análisis
- C. Ordenar eventos solo por el equipo que los emitió
- D. Suprimir fechas para homogeneizar registros

Explicación: Relojes sincronizados y marcas temporales interpretables ayudan a relacionar eventos entre equipos. Deben conocerse zona, precisión y posibles desfases. Si no se controla un reloj, puede estimarse el offset o registrar confianza en su timestamp. El análisis debe conservar los registros originales y documentar normalizaciones; sincronizar no demuestra por sí solo causalidad entre eventos próximos.

- Error B: Ajustar o reinterpretar tiempos sin registrar desfases puede alterar la secuencia aparente y perder trazabilidad del análisis.
- Error C: Agrupar únicamente por emisor no establece la relación temporal entre eventos de varios sistemas.
- Error D: Eliminar fechas suprime la evidencia temporal necesaria para correlacionar; homogeneizar formato no requiere borrarlas.

- [OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) · Event collection: Synchronize time, Note C; Verification · versión: Guía original de autores comprobada 03-11-2026. Sincronizar cuando se controla el reloj; si no es posible, medir desfase o confianza, preservando evidencia histórica. · comprobado: 2026-11-03

Partida: `b8f95bd61cb0ab267ff2a82b40305eb3e00282e7ccdcd12bf77c0c0130958c68` · propuesta: `2a14310b88d4b4c79a7124d03b7b831658d36eab29cbb61eaabe22ba64eadea4`

## AI-GSI-B4-T01-018

Decisión: pending_review · acción: revise.

Motivo: Conservar reducción de superficie y clave B; distinguir endurecimiento proporcionado de funciones por defecto o supresión de evidencia.

### Antes

¿Qué acción pertenece al hardening?

- A. Mantener cuentas sin control
- B. Eliminar servicios innecesarios y restringir exposición **(correcta)**
- C. Abrir todos los puertos
- D. Desactivar auditoría

Explicación: Reducir superficie y endurecer configuración limita oportunidades de ataque.

### Propuesta

¿Qué acción forma parte del hardening de un sistema conforme a su función requerida?

- A. Mantener servicios por defecto aunque no respondan a ninguna necesidad de la función.
- B. Deshabilitar servicios innecesarios y restringir los accesos y exposición requeridos. **(correcta)**
- C. Abrir puertos preventivamente para evitar estudiar qué comunicaciones necesita la aplicación.
- D. Suprimir la auditoría de accesos para reducir la cantidad de eventos que hay que analizar.

Explicación: El hardening reduce medios de ataque mediante configuración, correcciones y eliminación de funciones o servicios no esenciales. Debe partir de la función requerida y comprobar que los controles no impiden prestarla. Limitar exposición no garantiza riesgo cero ni justifica desactivar indiscriminadamente componentes necesarios; la auditoría ayuda a detectar y analizar actividad.

- Error A: Conservar componentes sin necesidad amplía superficie y mantenimiento sin aportar la función requerida.
- Error C: Abrir antes de conocer necesidades amplía exposición; deben justificarse comunicaciones y accesos.
- Error D: Reducir registros puede quitar capacidad de detección y seguimiento sin eliminar la causa del riesgo.

- [NIST CSRC: Hardening](https://csrc.nist.gov/glossary/term/hardening) · Definitions: parches y desactivación de servicios no esenciales; referencia SP800-152 · versión: Glosario público comprobado 03-11-2026. Reducción de superficie, no garantía de riesgo cero o mandato de desactivar servicios que necesita la función. · comprobado: 2026-11-03

Partida: `092e58875bc400e28f2fc41fc96671cba7e3e934bf2f311dd5fcf487662fa0ea` · propuesta: `1d351ee1cd8f1c3e1606176772ecd53c9066cfc962f26f3d71f3e34bf199c58c`

## AI-GSI-B4-T01-019

Decisión: pending_review · acción: revise.

Motivo: Conservar idempotencia y clave A; distinguir efecto funcional de repetición de comandos, comprobaciones y registros.

### Antes

¿Qué propiedad se busca al repetir una automatización de configuración?

- A. Que mantenga el mismo estado objetivo **(correcta)**
- B. Que duplique siempre usuarios
- C. Que ignore resultados anteriores
- D. Que añada permisos cada vez

Explicación: La idempotencia permite aplicar repetidamente el estado deseado sin efectos acumulativos indebidos.

### Propuesta

¿Qué propiedad se busca al reaplicar una automatización de configuración con el mismo estado objetivo?

- A. Alcanzar el estado deseado y conservarlo al reaplicar, sin acumular cambios funcionales indebidos. **(correcta)**
- B. Ejecutar exactamente las mismas modificaciones en cada pasada, aunque el estado ya sea correcto.
- C. Duplicar los recursos declarados en cada ejecución para confirmar que se aplicó la configuración.
- D. Evitar consultar el estado actual y aumentar permisos en cada pasada hasta que no aparezcan errores.

Explicación: La propiedad buscada es idempotencia: volver a aplicar la misma intención de configuración mantiene el mismo estado funcional deseado, sin duplicaciones o ampliaciones acumulativas indebidas. No significa que no haya lecturas, comprobaciones o logs en una nueva ejecución. Tampoco aparece automáticamente por escribir un script: deben diseñarse y comprobarse el recurso y sus operaciones.

- Error B: Repetir las mismas modificaciones no es el objetivo si ya se alcanzó el estado; puede producir efectos acumulativos.
- Error C: Crear duplicados cambia el estado funcional cada vez en lugar de conservar el objetivo declarado.
- Error D: Añadir permisos sin límite modifica el estado y amplía privilegios; no es una convergencia controlada a la configuración prevista.

- [Microsoft: dsc resource set](https://learn.microsoft.com/en-us/powershell/dsc/reference/cli/resource/set?view=dsc-3.0) · Idempotencia y recomendación de test previo cuando set no implementa pretest · versión: Documentación DSC3.0 comprobada 03-11-2026. Propiedad buscada del estado; un recurso o script arbitrario puede no ser idempotente. No se instala o ejecuta DSC. · comprobado: 2026-11-03
- [Malcolm Featonby: Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) · Retrying and side effects; Reducing client complexity with idempotent API design · versión: AWS Builders Library, texto de autor comprobado 03-11-2026. Efectos externos e identidad de petición, sin prescribir servicios AWS al proyecto. · comprobado: 2026-11-03

Partida: `dd1b4b04f9c15e818c11376bbf6d2654d796cc905430cb0eaf09193aa34d400a` · propuesta: `9075f225f72763aac0cc44cf9789a510ef4ad6b806e98ba415cbb92452b7538a`

## AI-GSI-B4-T01-020

Decisión: pending_review · acción: revise.

Motivo: Conservar diagnóstico contextual de utilización y clave C; caso CPU alta/SLO cumplido sin equiparar utilización, saturación y avería.

### Antes

Una CPU muy utilizada pero con SLO cumplido indica…

- A. Necesidad automática de reinstalar
- B. Pérdida obligatoria de datos
- C. Que hace falta contexto antes de diagnosticar un cuello de botella **(correcta)**
- D. Una avería segura

Explicación: Utilización debe correlacionarse con latencia, rendimiento y saturación.

### Propuesta

La CPU está muy utilizada, pero el servicio cumple su SLO. ¿Qué valoración es adecuada?

- A. Declarar un cuello de botella solo por superar un porcentaje de CPU, sin contrastar otras señales.
- B. Descartar toda revisión de capacidad porque cumplir hoy el SLO garantiza margen futuro.
- C. Relacionar CPU con latencia, rendimiento, colas y margen antes de diagnosticar una limitación. **(correcta)**
- D. Atribuir el uso alto a un fallo físico sin observar errores, carga o comportamiento del servicio.

Explicación: Una utilización alta puede corresponder a trabajo útil; el SLO cumplido no identifica por sí solo un cuello de botella ni garantiza capacidad futura. Hay que relacionar carga, latencia, throughput, colas y recursos limitantes, comparando con el comportamiento habitual y margen requerido. El diagnóstico necesita contexto, no un porcentaje universal o una inferencia directa de avería.

- Error A: Un umbral aislado no demuestra que CPU limite los resultados observados o que la aplicación esté incumpliendo su objetivo.
- Error B: El cumplimiento actual no acredita margen ante crecimiento, picos o fallos de otros componentes.
- Error D: El nivel de uso no demuestra daño físico; hacen falta síntomas y evidencia que discriminen hipótesis.

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) · Black-Box Versus White-Box; The Four Golden Signals: Saturation · versión: Libro SRE, capítulo6, texto público comprobado 03-11-2026. Síntomas, utilización, latencia y margen, sin un umbral CPU universal o garantía de salud por proceso existente. · comprobado: 2026-11-03
- [Google SRE: Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/) · The Scientific Method; Hypothesize; Test; diseño de pruebas y evidencia · versión: Libro SRE, capítulo12, texto público comprobado 03-11-2026. Método de hipótesis/prueba, sin ejecutar los ejemplos o atribuir causalidad a una comparación no controlada. · comprobado: 2026-11-03

Partida: `a8d50e22753fec6275090a467d9efe17f66583c2cf484fcd815bd2cc57c6afe5` · propuesta: `5f28e8726d81667fa5e8c9c1c2e1190e6d396ace937815532f67f3b27a067c9b`

## AI-GSI-B4-T02-001

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave A; respaldar instancia/datos con ejemplo de motor y mantener salvedad terminológica.

### Antes

¿Qué distingue operativamente una instancia del SGBD de sus datos?

- A. Procesos y memoria que prestan servicio, según terminología del motor **(correcta)**
- B. El conjunto de datos y estructuras persistentes considerado aisladamente
- C. Una copia lógica exportada del contenido de la base
- D. El esquema lógico de tablas y restricciones considerado aisladamente

Explicación: Administrar exige identificar procesos, memoria, ficheros y endpoints, aunque varíen nombres por producto.

### Propuesta

¿Qué distingue operativamente una instancia del SGBD de sus datos?

- A. Procesos y memoria que prestan servicio, según terminología del motor **(correcta)**
- B. El conjunto de datos y estructuras persistentes considerado aisladamente
- C. Una copia lógica exportada del contenido de la base
- D. El esquema lógico de tablas y restricciones considerado aisladamente

Explicación: La instancia se refiere aquí al conjunto operativo de memoria y procesos que atiende el servicio, mientras los datos y estructuras persistentes son otra dimensión que debe administrarse. Oracle ofrece un ejemplo explícito de esa distinción, pero la terminología y la relación entre instancias y bases dependen del motor. No debe confundirse la ejecución con un esquema lógico o una exportación.

- Error B: Los datos y estructuras persistentes por sí solos no describen los procesos y memoria que los sirven.
- Error C: Una exportación lógica es una representación de contenido para intercambio o recuperación, no el entorno de ejecución de la instancia.
- Error D: Tablas y restricciones describen organización lógica; no equivalen al conjunto operativo de procesos y memoria.

- [Oracle: Oracle Database Instance](https://docs.oracle.com/en/database/oracle/oracle-database/19/cncpt/oracle-database-instance.html) · §14 Introduction; Database Instance Structure; Instance Configurations · versión: Oracle Database19, edición fija consultada 03-11-2026. Ejemplo de memoria/procesos frente a ficheros persistentes; no se impone terminología idéntica o relación uno-a-uno a todos los motores. · comprobado: 2026-11-03

Partida: `884739ce2a3fc0a4bcf68803399545645a594b850efc2425ca072f9ff567cfbd` · propuesta: `7f168fe2a7970f587ef7acc5958f0ad1e74f1f3859616d818561922e5ca65088`

## AI-GSI-B4-T02-004

Decisión: pending_review · acción: revise.

Motivo: Conservar memoria medida y equilibrio con otras cargas y clave D; caso con RAM fija que distingue límite de asignación y capacidad.

### Antes

Aumentar memoria sin medir puede…

- A. Eliminar todas las esperas
- B. Sustituir los índices
- C. Resolver siempre cualquier consulta lenta
- D. Desplazar el problema o perjudicar otras cargas **(correcta)**

Explicación: La memoria debe equilibrarse con SO y otras cargas según evidencia.

### Propuesta

Se eleva el límite de memoria de una instancia sin medir, manteniendo fija la RAM del servidor compartido. ¿Qué riesgo existe?

- A. Crear más memoria física automáticamente, porque el límite del motor equivale a ampliar la RAM instalada.
- B. Sustituir el trabajo de índices y planes por caché, con independencia del patrón de consultas.
- C. Suprimir esperas de cualquier origen, incluidas las debidas a bloqueos o a comunicaciones externas.
- D. Presionar al SO u otras cargas sin resolver necesariamente la causa de la lentitud. **(correcta)**

Explicación: Elevar el límite no añade RAM física. El motor comparte capacidad con el SO y otras cargas, y hay consumos que pueden quedar fuera de ese límite según el producto. Hay que observar presión, cachés, E/S y esperas antes de ajustar. Más caché puede ser útil en ciertos casos, pero no elimina por sí sola bloqueos, planes inadecuados o límites externos.

- Error A: Un parámetro cambia la política de asignación del motor, no la capacidad física instalada.
- Error B: La caché no sustituye seleccionar accesos y combinaciones adecuados; el efecto depende de consultas y datos.
- Error C: Bloqueos y comunicaciones no se resuelven por definición ampliando memoria; hay que identificar la espera que limita la carga.

- [Microsoft: Server memory configuration options](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/server-memory-server-configuration-options?view=sql-server-ver17) · Recommendations; límites de memoria y reserva para SO/otras instancias/otros usos · versión: Vista SQL Server17.x, texto público comprobado 03-11-2026. No se traslada un porcentaje o parámetro como receta universal y se distingue capacidad física de límite del motor. · comprobado: 2026-11-03
- [Google SRE: Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/) · The Scientific Method; Hypothesize; Test; diseño de pruebas y evidencia · versión: Libro SRE, capítulo12, texto público comprobado 03-11-2026. Método de hipótesis/prueba, sin ejecutar los ejemplos o atribuir causalidad a una comparación no controlada. · comprobado: 2026-11-03

Partida: `9e09fb6f2539be37057206d4ce9d0646a075eb8761455f52ad3c919db29ada44` · propuesta: `fc9af665e0aef5b36d93371544cdd3ad58d79d97b6a1714f8744276ebc1e0e5a`

## AI-GSI-B4-T02-005

Decisión: pending_review · acción: revise.

Motivo: Conservar roles y mínimo privilegio y clave B; precisar definición y revisión efectiva, sin confundir autenticación y autorización.

### Antes

¿Cómo conviene conceder permisos a aplicaciones?

- A. Con una cuenta pública compartida
- B. Mediante roles y mínimo privilegio **(correcta)**
- C. Por el nombre visible del programa sin validar
- D. Con administración completa por comodidad

Explicación: Las cuentas deben tener lo necesario y separar autenticación de autorización.

### Propuesta

¿Cómo conviene conceder permisos del SGBD a una aplicación con operaciones y recursos identificados?

- A. Usar una cuenta de administrador para cada petición, porque así no hay que revisar permisos de objetos.
- B. Conceder mediante roles los privilegios que necesita la función, revisando herencia y alcance efectivo. **(correcta)**
- C. Autorizar por el nombre mostrado del programa, sin comprobar la identidad con la que abre la conexión.
- D. Conceder todos los permisos de todos los objetos y reducirlos solo si la aplicación comunica un error.

Explicación: Los permisos deben responder a operaciones y recursos necesarios para la aplicación, normalmente agrupados en roles administrables. La identidad que conecta debe autenticarse y su autorización efectiva debe revisarse: usar roles no garantiza mínimo privilegio si contienen permisos excesivos o se heredan concesiones no previstas. Privilegios de objeto y administrativos tienen alcances diferentes.

- Error A: Utilizar administración completa excede normalmente la función de una aplicación y amplía las consecuencias de su compromiso.
- Error C: Un nombre visible no acredita la identidad autenticada o los derechos con que opera una conexión.
- Error D: Que una aplicación no falle no demuestra que sus permisos sean mínimos; conceder todo desde el inicio aumenta exposición.

- [PostgreSQL: Database Roles](https://www.postgresql.org/docs/18/database-roles.html) · §21.1 roles y separación conceptual de usuarios del SO · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Roles como abstracción del motor, no nombres visibles de programas como prueba de identidad. · comprobado: 2026-11-03
- [PostgreSQL: Role Attributes](https://www.postgresql.org/docs/18/role-attributes.html) · §21.2 LOGIN; database creation; role creation · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Atributos y límites de capacidades administrativas; no toda gestión equivale a SUPERUSER. · comprobado: 2026-11-03
- [PostgreSQL: Privileges](https://www.postgresql.org/docs/18/ddl-priv.html) · §5.8 GRANT, REVOKE, roles de grupo; SELECT/INSERT/UPDATE y privilegios por objeto · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Separación de ámbitos y permisos pertinentes; no se ejecutan sentencias o se modifica una base real. · comprobado: 2026-11-03

Partida: `9d3e309bccc3dc55e598720589e14bad0af54b7dd8e27c418a1cb0f1b47e20ab` · propuesta: `b634f858d28f0fce26f1e19cf817725830e21d410f4bb981fee2f18594449256`

## AI-GSI-B4-T02-006

Decisión: pending_review · acción: revise.

Motivo: Conservar ámbitos de objeto y administración y clave C; ejemplos verificables sin afirmar una separación sin excepciones o capacidades superpuestas.

### Antes

¿Qué diferencia privilegios sobre objetos y administrativos?

- A. Son intercambiables en cualquier SGBD
- B. Un privilegio de objeto habilita siempre gestión del sistema
- C. Actúan sobre ámbitos distintos de datos y gestión del sistema **(correcta)**
- D. Todo permiso de lectura implica administración

Explicación: Los permisos deben distinguir acceso a objetos y capacidad administrativa.

### Propuesta

¿Qué diferencia hay entre privilegios sobre objetos y capacidades administrativas de un SGBD?

- A. Que un permiso de lectura de una tabla equivale a poder crear usuarios y gestionar el servidor.
- B. Que se distinguen por la interfaz usada, aunque habiliten las mismas acciones y recursos.
- C. Que unos regulan acciones sobre objetos concretos y otros capacidades de administración con su alcance. **(correcta)**
- D. Que cualquier privilegio de objeto incorpora todas las facultades del propietario y del superusuario.

Explicación: Un permiso como SELECT sobre una tabla tiene un objeto y operación concretos; capacidades como crear roles o bases pertenecen a otros ámbitos de administración, según el motor. No se conceden unas automáticamente por disponer de las otras. Hay poderes de propietario, delegación y roles con efectos específicos, por lo que debe examinarse el alcance efectivo sin tratarlos como categorías intercambiables.

- Error A: Leer una tabla no concede por sí mismo crear identidades o administrar la instancia.
- Error B: La diferencia es qué acciones y recursos se autorizan, no si se concedió desde una consola gráfica o una sentencia.
- Error D: Un privilegio concreto no convierte al receptor en propietario o superusuario; esas facultades y la delegación tienen reglas propias.

- [PostgreSQL: Privileges](https://www.postgresql.org/docs/18/ddl-priv.html) · §5.8 GRANT, REVOKE, roles de grupo; SELECT/INSERT/UPDATE y privilegios por objeto · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Separación de ámbitos y permisos pertinentes; no se ejecutan sentencias o se modifica una base real. · comprobado: 2026-11-03
- [PostgreSQL: Role Attributes](https://www.postgresql.org/docs/18/role-attributes.html) · §21.2 LOGIN; database creation; role creation · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Atributos y límites de capacidades administrativas; no toda gestión equivale a SUPERUSER. · comprobado: 2026-11-03

Partida: `9d000023b7d1fe745d4e6d083bf275656d621bee636ba98054d41fc820a924ae` · propuesta: `3f4da2e66d7e4707ff2ba51860c8bdc962708a1052de7a5fa0a2f763ffc04de5`

## AI-GSI-B4-T02-007

Decisión: pending_review · acción: revise.

Motivo: Conservar acceso restringido/bastión/PAM y clave C; distinguir cifrado, autenticación, autorización y atribución sin imponer un producto.

### Antes

¿Qué controles protegen la administración remota del SGBD?

- A. Publicar el endpoint sin restricciones
- B. Compartir una contraseña indefinidamente
- C. Red restringida y bastión o PAM cuando proceda **(correcta)**
- D. Guardar secretos en código

Explicación: La administración privilegiada requiere acceso controlado y trazabilidad.

### Propuesta

¿Qué conjunto de controles protege la administración remota de un SGBD?

- A. Cifrar el canal y conceder administración a cualquier identidad que consiga autenticarse.
- B. Cambiar el puerto del listener y aceptar conexiones de cualquier origen como control principal.
- C. Restringir orígenes, identidades y privilegios, con acceso mediado por bastión o PAM cuando proceda. **(correcta)**
- D. Compartir una credencial administrativa y atribuir cada acción únicamente a la dirección de origen.

Explicación: La administración remota necesita controles de origen, autenticación, permisos y trazabilidad; un bastión o PAM puede mediar acceso privilegiado según el contexto. El cifrado protege el tránsito, pero no sustituye autorización o restricciones de red. En PostgreSQL, por ejemplo, las reglas de conexión distinguen origen, usuario y método; activar soporte SSL no obliga por sí solo a usarlo en toda conexión.

- Error A: Autenticar acredita una identidad según el mecanismo, pero no justifica otorgarle todos los privilegios administrativos.
- Error B: Un puerto distinto no identifica al operador o limita de forma suficiente los orígenes y permisos autorizados.
- Error D: La dirección de origen puede compartirse o cambiar y no sustituye identidad individual y registro de operaciones privilegiadas.

- [PostgreSQL: The pg\_hba.conf File](https://www.postgresql.org/docs/18/auth-pg-hba-conf.html) · §20.1 database/user/address/auth-method; host frente a hostssl; orden de registros · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Control de autenticación por origen/usuario/base; no sustituye permisos de objeto o todos los controles de red. · comprobado: 2026-11-03
- [PostgreSQL: Secure TCP/IP Connections with SSL](https://www.postgresql.org/docs/18/ssl-tcp.html) · §18.9 Basic Setup y Using Client Certificates · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Soporte cifrado y control de conexión; activar SSL no fuerza por sí solo que toda conexión sea cifrada ni concede autorización sobre objetos. · comprobado: 2026-11-03
- [GSA/CIO Council/CISA: Privileged Identity Playbook](https://www.idmanagement.gov/playbooks/pam/) · Step 1: Develop a Privileged User Policy; identificación individual, auditoría; Step 2 · versión: Versión 1.2 de 29-12-2022, texto público comprobado 03-11-2026. Principios operativos, no obligaciones normativas de la AGE ni exclusión de mecanismos de emergencia controlados. · comprobado: 2026-11-03

Partida: `4bf04b8273f236389f535996e918216edd23f805beb3f8bb7e565553816713f4` · propuesta: `054c37028dcbc65b1ff2852f0a0760b473a75f86e4b84b00031e13e1ca618a3b`

## AI-GSI-B4-T02-009

Decisión: pending_review · acción: revise.

Motivo: Conservar manejo de víctima/reintento seguro y clave A; caso que explicita aborto completo y efectos de negocio fuera de la base.

### Antes

¿Qué debe coordinar DBA y aplicación ante deadlocks?

- A. Manejo de la víctima abortada y reintentos seguros **(correcta)**
- B. Repetir sin límites cualquier efecto externo
- C. Suponer confirmación de la víctima
- D. Desactivar todas las transacciones

Explicación: Resolver el bloqueo en el motor no completa automáticamente la operación de negocio.

### Propuesta

El motor resuelve un deadlock abortando una transacción de negocio. ¿Qué deben coordinar DBA y aplicación?

- A. Tratar el aborto y, si procede, reintentar la transacción completa con una política segura para efectos externos. **(correcta)**
- B. Repetir únicamente la última sentencia y dar por conservadas todas las escrituras anteriores de la víctima.
- C. Informar de éxito al negocio porque el motor ya ha eliminado el bloqueo al escoger una víctima.
- D. Repetir sin límite las llamadas externas y la transacción, sin comprobar qué efectos llegaron a ejecutarse.

Explicación: Si la transacción se ha abortado, resolver el deadlock no completa la operación de negocio. La aplicación debe tratar el error y decidir un reintento apropiado, incluyendo la lógica de la transacción completa, con límites y tratamiento de efectos externos. Un pago o mensaje ya emitido no se revierte necesariamente con el rollback de la base; hacen falta mecanismos de idempotencia o coordinación adecuados.

- Error B: El supuesto indica aborto de la transacción; no puede asumirse que sus cambios anteriores sigan confirmados al repetir solo la última sentencia.
- Error C: Liberar el ciclo de esperas permite continuar a otras operaciones, pero no confirma la transacción víctima ni el resultado de negocio.
- Error D: Reintentar sin límites o sin identificar efectos externos puede duplicar acciones y prolongar contención sin recuperar correctamente la intención.

- [PostgreSQL: Explicit Locking](https://www.postgresql.org/docs/18/explicit-locking.html) · §13.3.4 Deadlocks: detección, víctima, orden de adquisición y reintento · versión: PostgreSQL18, edición fija comprobada 03-11-2026. El supuesto explicita transacción abortada; no se generalizan los detalles de aborto de cada motor. · comprobado: 2026-11-03
- [PostgreSQL: Serialization Failure Handling](https://www.postgresql.org/docs/18/mvcc-serialization-failure-handling.html) · §13.5 errores40P01 y40001; repetir transacción completa con su lógica de decisión · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Reintento no garantiza éxito, y no todo error debe tratarse como transitorio. · comprobado: 2026-11-03
- [Malcolm Featonby: Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) · Retrying and side effects; Reducing client complexity with idempotent API design · versión: AWS Builders Library, texto de autor comprobado 03-11-2026. Efectos externos e identidad de petición, sin prescribir servicios AWS al proyecto. · comprobado: 2026-11-03

Partida: `8e8a3cce09711ff55c29eda89aab440665e08437ebe7b312b1c613c171f0e715` · propuesta: `bc074f5d1e2bfe05c94a095bf751f85070da57db565c528d1f4875c754dd24b1`

## AI-GSI-B4-T02-010

Decisión: pending_review · acción: revise.

Motivo: Conservar plan de acceso/join y clave C; comparar artefactos del SGBD y distinguir estimaciones de medidas reales sin ejecutar ANALYZE.

### Antes

¿Qué muestra un plan de ejecución?

- A. Historial de formación
- B. Solo tamaño del disco
- C. Estrategia de acceso y combinación de datos **(correcta)**
- D. Identidad legal del propietario

Explicación: Debe interpretarse con estadísticas, cardinalidades y métricas reales.

### Propuesta

¿Qué describe principalmente un plan de ejecución de una consulta?

- A. La definición lógica de tablas y restricciones, considerada sin operaciones de una consulta concreta.
- B. El registro de cambios confirmados para recuperación, sin describir los operadores de la consulta.
- C. La estrategia de acceso y combinación de datos, expresada mediante operaciones del motor. **(correcta)**
- D. La lista de permisos de un usuario, con independencia de las tablas y accesos que requiere la consulta.

Explicación: Un plan muestra cómo el motor propone acceder y combinar datos: exploraciones, índices, joins y otras operaciones. Las estimaciones dependen de estadísticas y supuestos; el plan no es por sí solo la medida de tiempo real. Una ejecución instrumentada añade observaciones, con coste y efectos: EXPLAIN ANALYZE de PostgreSQL ejecuta la consulta, también cuando esta modifica datos. Aquí se contrasta la documentación, sin ejecutar sentencias.

- Error A: El esquema define organización y restricciones, no el árbol de operaciones elegido para resolver una consulta.
- Error B: El log de transacciones sirve a recuperación y registro de cambios; no es el plan de acceso y combinación.
- Error D: Los permisos regulan autorizaciones, no describen la estrategia de ejecución del optimizador.

- [PostgreSQL: Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html) · §14.1.1 EXPLAIN Basics; §14.1.2 EXPLAIN ANALYZE; §14.1.3 Caveats · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Plan estimado frente a ejecución instrumentada; ANALYZE puede ejecutar efectos. No se ejecutan consultas. · comprobado: 2026-11-03

Partida: `0cbb5ac7ce1fc112828f707b535c73b83634e6ce1185528fc94e82a0e31678eb` · propuesta: `80d8767cfff32c9ff5ae5699fe496b73757a3b4ad6a38b65879d209950f7acbb`

## AI-GSI-B4-T02-012

Decisión: pending_review · acción: revise.

Motivo: Conservar medición/hipótesis/comparación y clave B; precisar prueba controlada y límites de atribución causal.

### Antes

¿Qué secuencia favorece ajuste de rendimiento fiable?

- A. Cambiar muchos parámetros sin medir
- B. Reproducir, medir, plantear una hipótesis y comparar **(correcta)**
- C. Aplicar recetas de otro sistema sin contexto
- D. Reinstalar por defecto

Explicación: Cambiar una hipótesis permite atribuir mejor efectos observados.

### Propuesta

¿Qué secuencia favorece un ajuste de rendimiento fiable del SGBD?

- A. Modificar varios parámetros por experiencia y medir después, sin conservar una referencia de la carga anterior.
- B. Reproducir y medir la carga, formular una hipótesis, probar un cambio acotado y comparar resultados. **(correcta)**
- C. Aplicar una receta de otra instalación y tomar cualquier descenso puntual de tiempo como prueba de su causa.
- D. Comparar consultas y datos distintos antes y después, atribuyendo toda diferencia al parámetro cambiado.

Explicación: Un ajuste defendible parte de una carga reproducible y medidas de referencia. La hipótesis orienta un cambio o prueba acotada; después se comparan resultados bajo condiciones pertinentes y se comprueba si respaldan la explicación. Esto mejora atribución y permite descartar ideas, pero una sola diferencia no demuestra causalidad sin atender a variación de carga, datos o entorno.

- Error A: Cambiar varios factores sin referencia dificulta saber cuál produjo el efecto y si la comparación es equivalente.
- Error C: Una receta ajena puede sugerir una hipótesis, pero no demuestra que el mismo límite exista o se resuelva en esta instalación.
- Error D: Cambiar simultáneamente datos o carga impide atribuir directamente todo el resultado al parámetro; deben controlarse o explicarse diferencias.

- [Google SRE: Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/) · The Scientific Method; Hypothesize; Test; diseño de pruebas y evidencia · versión: Libro SRE, capítulo12, texto público comprobado 03-11-2026. Método de hipótesis/prueba, sin ejecutar los ejemplos o atribuir causalidad a una comparación no controlada. · comprobado: 2026-11-03
- [PostgreSQL: Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html) · §14.1.1 EXPLAIN Basics; §14.1.2 EXPLAIN ANALYZE; §14.1.3 Caveats · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Plan estimado frente a ejecución instrumentada; ANALYZE puede ejecutar efectos. No se ejecutan consultas. · comprobado: 2026-11-03

Partida: `61b739ad9dce7a4ae5541e367195298b10d2118a52374bf191e60368fbd1b738` · propuesta: `86f2f9eb8f0b226dda7218ed5d415c2697f87f94738a15acf659f69dc35200f1`

## AI-GSI-B4-T02-013

Decisión: pending_review · acción: revise.

Motivo: Conservar costes de índices y clave D; alternativas sobre materialización, selección de plan y estadísticas sin negar beneficios reales.

### Antes

¿Por qué no conviene añadir indiscriminadamente índices?

- A. Porque eliminan ACID
- B. Porque impiden toda consulta
- C. Porque nunca mejoran lectura
- D. Aumentan espacio y coste de escritura y mantenimiento **(correcta)**

Explicación: La elección depende del patrón de consultas y del equilibrio de cargas.

### Propuesta

¿Por qué no conviene añadir índices indiscriminadamente a una tabla?

- A. Porque cada índice materializa todas las combinaciones posibles de resultados de cualquier consulta.
- B. Porque crear un índice obliga al optimizador a utilizarlo para todas las consultas de la tabla.
- C. Porque los índices reemplazan las estadísticas y hacen innecesario revisar cardinalidades o planes.
- D. Porque requieren espacio y mantenimiento ante cambios relevantes, con coste sobre las escrituras. **(correcta)**

Explicación: Los índices pueden acelerar ciertos accesos, pero ocupan espacio y deben mantenerse sincronizados con cambios relevantes de los datos. Eso añade trabajo a la escritura y al mantenimiento. El optimizador puede preferir otro acceso según selectividad y coste; no todo índice mejora la carga. Debe valorarse el beneficio observado frente a coste, redundancia y patrón de lecturas/escrituras.

- Error A: Un índice es una estructura de acceso, no el precálculo de todos los posibles resultados y combinaciones de consultas.
- Error B: La existencia del índice no obliga a usarlo; otro plan puede tener menor coste estimado para determinada consulta.
- Error C: El optimizador sigue necesitando información sobre datos y costes; el índice no sustituye por sí mismo estadísticas o análisis del plan.

- [PostgreSQL: Indexes, Introduction](https://www.postgresql.org/docs/18/indexes-intro.html) · §11.1 acceso por índice; mantenimiento sincronizado con tabla y sobrecoste de manipulación · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Ventaja dependiente de consultas y coste de escrituras/espacio, no garantía de mejora para cualquier consulta. · comprobado: 2026-11-03
- [PostgreSQL: Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html) · §14.1.1 EXPLAIN Basics; §14.1.2 EXPLAIN ANALYZE; §14.1.3 Caveats · versión: PostgreSQL18, edición fija comprobada 03-11-2026. Plan estimado frente a ejecución instrumentada; ANALYZE puede ejecutar efectos. No se ejecutan consultas. · comprobado: 2026-11-03

Partida: `81fed3e7eebe15eaac08dd18c51e02565ba5cff288717dc00ca3fafd37ccc7be` · propuesta: `c53ecd3866ac56244a0517cf708e518a3b73d3fcc8408cf6361d45e74335da66`
