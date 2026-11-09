# GSI-EDITORIAL-067 — revisión propuesta

Preparado: 2026-10-30. Preguntas: 20.

**Pendiente de tu revisión humana. Esta ficha no aplica ni activa propuestas.**

Hash del lote: `a26747baf487db0ba608ee104e8b6bdcee2779d2ac64f7edc4bafc345713b10a`. Las decisiones forman parte del hash. Una aceptación del hash pendiente se registra aparte sin reescribir la propuesta.

## MAN-GSI-P15-157

Decisión: pending_review · acción: revise.

Motivo: Conservar formulación completa y clave A; precisar modelo de especificación sin inferir cierre de .NET o ausencia de estándares.

### Antes

¿Qué afirmación distingue mejor especificación e implementación al comparar stacks?

- A. Jakarta EE está organizado fuertemente como conjunto de especificaciones con múltiples implementaciones; .NET es una plataforma/producto con frameworks de Microsoft y ecosistema asociado. **(correcta)**
- B. Jakarta EE y .NET son dos especificaciones abiertas equivalentes que se ejecutan mediante servidores intercambiables de distintos proveedores.
- C. Jakarta EE designa un servidor de aplicaciones mantenido por Eclipse Foundation, mientras .NET define interfaces sin implementación propia.
- D. La diferencia es sintáctica: Jakarta EE usa Java y .NET usa C\#, pero ambos siguen el mismo modelo de estandarización e implementación.

Explicación: Jakarta EE está organizado fuertemente como conjunto de especificaciones con múltiples implementaciones; .NET es una plataforma/producto con frameworks de Microsoft y ecosistema asociado. Entender el modelo de estandarización evita equiparar erróneamente Jakarta EE con un producto concreto.

### Propuesta

¿Qué afirmación distingue mejor especificación e implementación al comparar stacks?

- A. Jakarta EE está organizado fuertemente como conjunto de especificaciones con múltiples implementaciones; .NET es una plataforma/producto con frameworks de Microsoft y ecosistema asociado. **(correcta)**
- B. Jakarta EE y .NET son dos especificaciones abiertas equivalentes que se ejecutan mediante servidores intercambiables de distintos proveedores.
- C. Jakarta EE designa un servidor de aplicaciones mantenido por Eclipse Foundation, mientras .NET define interfaces sin implementación propia.
- D. La diferencia es sintáctica: Jakarta EE usa Java y .NET usa C\#, pero ambos siguen el mismo modelo de estandarización e implementación.

Explicación: Jakarta EE define una plataforma mediante especificaciones que implementan productos compatibles. .NET es una plataforma con implementaciones, bibliotecas y frameworks mantenidos por Microsoft y la comunidad. La comparación no significa que .NET sea cerrado o carezca de estándares: es abierto y CLI tiene especificación Ecma. Tampoco se reduce cada plataforma a un único lenguaje o servidor intercambiable.

- Error B: No se ejecutan indistintamente sobre los mismos servidores por ser plataformas abiertas: tienen modelos y entornos de ejecución diferentes.
- Error C: Jakarta EE no designa un único servidor de Eclipse, y .NET sí dispone de implementaciones y runtime.
- Error D: La sintaxis no explica la organización de especificaciones, productos y servicios. .NET además admite varios lenguajes.

- [Jakarta EE Platform](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · §2.4 Containers; §2.4.1 Container Requirements; §2.4.2 Jakarta EE Servers · versión: 11; HTML oficial enlazado desde la página de la plataforma, comprobado 30-10-2026. Un contenedor Jakarta no equivale al aislamiento de un contenedor de SO. · comprobado: 2026-10-30
- [Microsoft: Introduction to .NET](https://learn.microsoft.com/en-us/dotnet/core/introduction) · Introducción; .NET ecosystem; Free and open source · versión: Texto comprobado 30-10-2026. Se describe plataforma e implementaciones abiertas, sin reducir .NET a un único lenguaje o presentar su apertura como opuesta a Jakarta. · comprobado: 2026-10-30
- [Ecma: Common Language Infrastructure](https://ecma-international.org/publications-and-standards/standards/ecma-335/) · Descripción del estándar y particiones I–VI · versión: ECMA335, sexta edición, junio2012; ficha HTML comprobada 30-10-2026. Evidencia de estandarización de CLI, sin descargar o convertir PDF. · comprobado: 2026-10-30

Partida: `78a9dfafea4187ad197d5f355333a00c7f6e2df328a9dca4fce2e29e0c461006` · propuesta: `c8d98d79d19140cff132e48cb0fd1fb3c18d42cf6dbf547c30abd0b758617dcc`

## MAN-GSI-P15-158

Decisión: pending_review · acción: revise.

Motivo: Conservar portabilidad por APIs estándar y clave B; caso de dos runtimes del mismo perfil y versión sin garantizar equivalencia de todo comportamiento.

### Antes

Si el objetivo es portabilidad entre proveedores de runtime Jakarta EE, ¿qué práctica ayuda?

- A. Compilar contra una versión diferente en cada despliegue sin pruebas.
- B. Priorizar APIs estándar de Jakarta y aislar extensiones específicas del proveedor cuando sean necesarias. **(correcta)**
- C. Evitar especificaciones estándar.
- D. Usar únicamente APIs internas no documentadas del servidor.

Explicación: Priorizar APIs estándar de Jakarta y aislar extensiones específicas del proveedor cuando sean necesarias. La portabilidad mejora cuando se separan dependencias propietarias de la lógica estándar.

### Propuesta

Una aplicación debe pasar entre dos runtimes compatibles con la misma versión y perfil de Jakarta EE. ¿Qué práctica favorece la portabilidad entre proveedores?

- A. Empaquetar el despliegue conservando todas las dependencias de APIs internas del primer servidor.
- B. Usar APIs estándar de la versión y aislar las extensiones específicas que sean necesarias. **(correcta)**
- C. Sustituir las dependencias declaradas por reflexión sobre clases internas de cada servidor.
- D. Adaptar la lógica de negocio a cada proveedor en vez de separar sus diferencias de integración.

Explicación: Usar APIs estándar soportadas por ambos runtimes y aislar extensiones reduce el acoplamiento con un proveedor. Aun con la misma versión y perfil, deben comprobarse configuración, recursos externos y comportamiento real. Estándar no significa portabilidad automática de cualquier aplicación, ni un paquete de despliegue elimina una dependencia interna del servidor.

- Error A: Cambiar el empaquetado no vuelve estándar una API interna o una extensión particular de un runtime.
- Error C: Ocultar referencias mediante reflexión no elimina la dependencia de tipos internos que pueden variar entre productos.
- Error D: Dispersar diferencias del proveedor por el negocio aumenta el acoplamiento; un límite de integración permite mantenerlas localizadas.

- [Jakarta EE Platform](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · §2.4 Containers; §2.4.1 Container Requirements; §2.4.2 Jakarta EE Servers · versión: 11; HTML oficial enlazado desde la página de la plataforma, comprobado 30-10-2026. Un contenedor Jakarta no equivale al aislamiento de un contenedor de SO. · comprobado: 2026-10-30
- [Microsoft: Architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · Separation of concerns; Dependency inversion; lógica de negocio separada de HTTP e infraestructura · versión: Texto HTML comprobado 30-10-2026; se usa separación de responsabilidades, no se prescribe una arquitectura empresarial o un número de capas al proyecto. · comprobado: 2026-10-30

Partida: `1c5ce17fc46810f9ec5af042aab026504006f5d394c0d4dbe655f62aa241d014` · propuesta: `f108bac767e5bbf6d2a871184cd528a64178980a99067c6716ab9776bee3df5d`

## MAN-GSI-P15-159

Decisión: pending_review · acción: revise.

Motivo: Conservar enunciado, alternativas y clave A; respaldar responsabilidades e integración independiente del lenguaje.

### Antes

¿Qué afirmación sobre OAuth 2.0 y OpenID Connect es correcta para ambos stacks?

- A. OAuth 2.0 se centra en autorización delegada y OIDC añade identidad/autenticación; ambos pueden integrarse tanto en .NET como en Jakarta/Java. **(correcta)**
- B. TLS concede scopes y access tokens, mientras OAuth 2.0 cifra el canal y autentica criptográficamente el servidor.
- C. OpenID Connect solo puede utilizarse con servicios Java/Jakarta y OAuth 2.0 está limitado a aplicaciones .NET.
- D. OAuth 2.0 autentica al usuario mediante ID Token y OpenID Connect se limita a autorizar acceso a APIs.

Explicación: OAuth 2.0 se centra en autorización delegada y OIDC añade identidad/autenticación; ambos pueden integrarse tanto en .NET como en Jakarta/Java. Los protocolos son independientes del lenguaje y se integran mediante librerías y servidores de identidad.

### Propuesta

¿Qué afirmación sobre OAuth 2.0 y OpenID Connect es correcta para ambos stacks?

- A. OAuth 2.0 se centra en autorización delegada y OIDC añade identidad/autenticación; ambos pueden integrarse tanto en .NET como en Jakarta/Java. **(correcta)**
- B. TLS concede scopes y access tokens, mientras OAuth 2.0 cifra el canal y autentica criptográficamente el servidor.
- C. OpenID Connect solo puede utilizarse con servicios Java/Jakarta y OAuth 2.0 está limitado a aplicaciones .NET.
- D. OAuth 2.0 autentica al usuario mediante ID Token y OpenID Connect se limita a autorizar acceso a APIs.

Explicación: OAuth 2.0 trata la concesión de acceso limitado a recursos; OIDC añade una capa de autenticación del usuario y el ID Token. Son protocolos independientes del lenguaje que pueden integrarse con .NET o Java/Jakarta mediante componentes compatibles. La configuración debe atender las recomendaciones de seguridad vigentes; no basta elegir una biblioteca o decodificar un token.

- Error B: TLS protege el canal, no concede scopes OAuth. Atribuir a OAuth el cifrado del canal intercambia responsabilidades distintas.
- Error C: No existe esa exclusividad de lenguaje. Ambas plataformas tienen mecanismos de integración con identidad externa.
- Error D: El ID Token es parte de la capa de identidad OIDC; OAuth por sí solo no define esa autenticación del usuario.

- [IETF: OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749.html) · §1 Introducción; §1.4 Access Token; §3.3 Access Token Scope · versión: RFC6749, octubre2012; comprobada 30-10-2026 junto a BCP240, sin recomendar flujos históricos por el solo hecho de figurar en el RFC. · comprobado: 2026-10-30
- [OpenID Foundation: OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) · §1 Introduction; §1.3 Overview; §2 ID Token; §5.3 UserInfo · versión: Core1.0, Final incorporando errata set2, 15-12-2023; comprobada 30-10-2026. No todos los endpoints son obligatorios en cualquier configuración. · comprobado: 2026-10-30
- [IETF: OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html) · Abstract; actualización de recomendaciones de RFC6749/6750/6819 · versión: RFC9700, BCP240, enero2025; comprobada 30-10-2026; no se implementan ni prueban flujos OAuth. · comprobado: 2026-10-30
- [Microsoft: Authentication overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/?view=aspnetcore-10.0) · Introducción: identidad y acceso; esquemas y handlers; configurar autenticación no impone autorización · versión: Vista aspnetcore-10.0 solicitada y texto público comprobado el 30-10-2026. Se usan los apartados indicados; las páginas con avisos de moniker inconsistentes no se presentan como documentos aislados estrictamente a una versión. · comprobado: 2026-10-30
- [Jakarta Security](https://jakarta.ee/specifications/security/4.0/jakarta-security-spec-4.0.html) · §1.1 Terminology; §1.2.1 Group-To-Role Mapping; §2.4.4 OpenID Connect Annotation · versión: 4.0 Final, 09-05-2024; comprobada 30-10-2026. El prefacio mantiene una referencia heredada a1.0; se usan encabezado4.0 y apartados concretos verificados. · comprobado: 2026-10-30

Partida: `e83f376a28af56dcef85a2d6192ddccabe147610102b0e2e07be9ae3092b44e2` · propuesta: `c553596d50fe2b8fe7d7a587d7ebdeeb1c45f4abbc0e7179dd8c955d247ac7aa`

## MAN-GSI-P15-160

Decisión: pending_review · acción: revise.

Motivo: Conservar coherencia del stack y clave D; hacer comparables los errores de integración sin alargar la respuesta con un catálogo.

### Antes

Una arquitectura requiere API, persistencia, identidad, transacciones, observabilidad y despliegue en contenedores. ¿Qué enfoque es correcto?

- A. Utilizar el runtime del lenguaje como API, sistema de identidad y almacenamiento, dejando al contenedor toda la persistencia y observabilidad.
- B. Asignar al ORM la terminación HTTP, al gestor de paquetes la autenticación y al motor de contenedores el control de transacciones de negocio.
- C. Combinar cualquier versión de frameworks y runtimes porque compartir lenguaje o estándar garantiza compatibilidad, soporte y seguridad entre capas.
- D. Elegir componentes coherentes del stack, separar responsabilidades y verificar soporte/versiones: ASP.NET Core + EF Core + seguridad .NET o Jakarta REST/CDI/Persistence/Transactions/Security en un runtime compatible. **(correcta)**

Explicación: Elegir componentes coherentes del stack, separar responsabilidades y verificar soporte/versiones: ASP.NET Core + EF Core + seguridad .NET o Jakarta REST/CDI/Persistence/Transactions/Security en un runtime compatible. El examen busca reconocer capas y equivalencias sin confundir lenguaje, runtime, framework, build, persistencia y seguridad.

### Propuesta

Una arquitectura requiere API, persistencia, identidad, transacciones, observabilidad y despliegue en contenedores. ¿Qué enfoque es correcto?

- A. Elegir la última versión de cada componente por separado y dejar la compatibilidad para el despliegue.
- B. Unificar el lenguaje de implementación y asumir que con ello se igualan contratos y ciclos de vida.
- C. Delegar en la imagen de contenedor la compatibilidad entre cualquier ORM, servidor y biblioteca de seguridad.
- D. Separar responsabilidades y verificar que versiones, contratos y runtime soportan los componentes elegidos. **(correcta)**

Explicación: La elección debe relacionar cada responsabilidad con componentes compatibles: API HTTP, persistencia, identidad, transacciones, observabilidad y despliegue. Hay que comprobar soporte, versiones y contratos de integración del runtime concreto. Compartir lenguaje o disponer de una imagen no prueba que una combinación funcione; una lista de tecnologías tampoco sustituye pruebas de integración.

- Error A: Las últimas versiones elegidas aisladamente pueden exigir contratos o runtimes distintos; la compatibilidad debe evaluarse como conjunto.
- Error B: Un mismo lenguaje permite expresar componentes con contratos incompatibles. No unifica automáticamente APIs, estados o ciclos de vida.
- Error C: La imagen aporta un entorno empaquetado, pero no adapta automáticamente interfaces o requisitos incompatibles de los componentes.

- [Microsoft: Introduction to .NET](https://learn.microsoft.com/en-us/dotnet/core/introduction) · Introducción; .NET ecosystem; Free and open source · versión: Texto comprobado 30-10-2026. Se describe plataforma e implementaciones abiertas, sin reducir .NET a un único lenguaje o presentar su apertura como opuesta a Jakarta. · comprobado: 2026-10-30
- [Jakarta EE Platform](https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.html) · §2.4 Containers; §2.4.1 Container Requirements; §2.4.2 Jakarta EE Servers · versión: 11; HTML oficial enlazado desde la página de la plataforma, comprobado 30-10-2026. Un contenedor Jakarta no equivale al aislamiento de un contenedor de SO. · comprobado: 2026-10-30
- [Microsoft: Architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · Separation of concerns; Dependency inversion; lógica de negocio separada de HTTP e infraestructura · versión: Texto HTML comprobado 30-10-2026; se usa separación de responsabilidades, no se prescribe una arquitectura empresarial o un número de capas al proyecto. · comprobado: 2026-10-30

Partida: `39f567d8f56e8e5c3a243e8e212d7757c65a5db4fde23aba442222be01e64d2c` · propuesta: `4cbeae64f58e3074a484a8f938de8e3cb31189b5b3fc0eb386af46e53b8d01f5`

## AI-GSI-B3-T12-001

Decisión: pending_review · acción: revise.

Motivo: Conservar interfaz navegador/servidor y clave A; distinguir comunicación, persistencia y representación del documento.

### Antes

¿Qué componente conecta habitualmente navegador y servicios de aplicación?

- A. Servidor o API mediante HTTP(S) **(correcta)**
- B. Un compilador en todos los casos
- C. La placa de red como lógica de negocio
- D. Solo un archivo de imagen

Explicación: La arquitectura web articula cliente, protocolo, servidor y servicios o datos.

### Propuesta

En una arquitectura web con navegador y servicios de aplicación en un servidor, ¿qué interfaz utiliza habitualmente el cliente para comunicarse con esos servicios?

- A. Endpoints HTTP(S) de un servidor o API de aplicación. **(correcta)**
- B. Un repositorio ORM que el navegador trata como interfaz remota directa.
- C. Un árbol DOM que por sí mismo expone los servicios del servidor.
- D. El enrutador local de vistas, sin realizar solicitudes al servidor.

Explicación: En una arquitectura web habitual, el navegador intercambia peticiones y respuestas HTTP(S) con endpoints del servidor o API. Esa interfaz puede invocar servicios y acceso a datos internos. El DOM representa el documento y un cambio de vista local no implica una operación remota; un repositorio de persistencia tampoco constituye por sí mismo un contrato remoto para el cliente.

- Error B: El repositorio puede formar parte del servidor, pero el cliente no obtiene una interfaz remota por la mera existencia de una abstracción ORM.
- Error C: El DOM representa el documento y sus nodos; una operación remota necesita un mecanismo de comunicación adicional.
- Error D: Cambiar la vista local no invoca por sí solo un servicio remoto: para ello hace falta la comunicación con el servidor.

- [IETF: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · §1; §8.8.3 ETag; §13.1.2 If-None-Match; §15.4.5 304 · versión: RFC9110, junio2022; comprobada 30-10-2026. Revalidación del caso mediante GET, sin confundir caché con identidad o firma criptográfica. · comprobado: 2026-10-30
- [WHATWG: Fetch](https://fetch.spec.whatwg.org/) · Abstract; §3.3 CORS protocol; §3.3.1 General; §3.3.5 Credentials · versión: Living Standard mostrado con actualización19-10-2026, leído 30-10-2026. Se separa envío de petición y exposición de respuesta al script. · comprobado: 2026-10-30
- [Microsoft: Architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · Separation of concerns; Dependency inversion; lógica de negocio separada de HTTP e infraestructura · versión: Texto HTML comprobado 30-10-2026; se usa separación de responsabilidades, no se prescribe una arquitectura empresarial o un número de capas al proyecto. · comprobado: 2026-10-30
- [WHATWG: DOM](https://dom.spec.whatwg.org/) · Abstract; §2 Events; §4 Nodes · versión: Living Standard mostrado con actualización19-10-2026, comprobado 30-10-2026. · comprobado: 2026-10-30

Partida: `38bb9032e809214d20e2aff7562124cb08265b2071bcc6d14120b2ddd999d5aa` · propuesta: `6a0a8c93c7d19f9851e49b541a0bbab65bf406b469e1525069cadf125db81774`

## AI-GSI-B3-T12-002

Decisión: pending_review · acción: revise.

Motivo: Conservar fundamentos web frente a abstracción y clave D; sustituir popularidad y nombres comerciales por errores conceptuales próximos.

### Antes

¿Qué fundamento no sustituye elegir un framework frontend?

- A. La popularidad de una plantilla
- B. El nombre comercial del producto
- C. El número de extensiones instaladas
- D. HTML semántico, DOM, eventos y módulos **(correcta)**

Explicación: Los frameworks se apoyan en fundamentos web y no los reemplazan.

### Propuesta

¿Qué afirmación explica por qué elegir un framework frontend no sustituye el conocimiento de los fundamentos web?

- A. Las convenciones del framework hacen innecesario comprender la estructura HTML de los componentes.
- B. El modelo de componentes reemplaza los eventos del navegador por un estándar ajeno al DOM.
- C. La configuración del framework determina por sí sola la semántica de todos los elementos de la interfaz.
- D. La abstracción sigue apoyándose en HTML, DOM, eventos y módulos que conviene comprender. **(correcta)**

Explicación: Un framework puede abstraer tareas, pero la aplicación sigue utilizando los mecanismos de la plataforma web. HTML aporta semántica, el DOM representa nodos y eventos, y los módulos organizan dependencias de scripts. Entender esas bases permite razonar sobre accesibilidad, interacción y carga sin atribuir al framework garantías que no proporciona automáticamente.

- Error A: Las convenciones de un componente no eliminan el efecto de su HTML en la estructura y semántica del documento.
- Error B: Los sistemas de eventos de un framework pueden añadir una abstracción, pero no hacen desaparecer el modelo de eventos de la plataforma.
- Error C: La configuración del framework no asigna por sí sola la semántica correcta a cualquier interfaz; importan los elementos y su uso.

- [WHATWG: HTML introduction](https://html.spec.whatwg.org/multipage/introduction.html) · §1.3 Background; §1.10 introducción y aplicaciones seguras · versión: Living Standard mostrado con actualización30-10-2026, comprobado 30-10-2026. · comprobado: 2026-10-30
- [WHATWG: DOM](https://dom.spec.whatwg.org/) · Abstract; §2 Events; §4 Nodes · versión: Living Standard mostrado con actualización19-10-2026, comprobado 30-10-2026. · comprobado: 2026-10-30
- [WHATWG: HTML scripting](https://html.spec.whatwg.org/multipage/scripting.html) · §4.12 Scripting; §4.12.1 script: módulos y dependencias · versión: Living Standard mostrado con actualización30-10-2026, comprobado 30-10-2026. Solo mecanismos estándar; no se ejecutan ejemplos de páginas externas. · comprobado: 2026-10-30

Partida: `85307f04d56a673ad205df4bb59da2eb33aec0d42fdd357a311abfd195f78dd5` · propuesta: `d947994d0b44ce623bb92e4cf1a50da8cee462adbcd7c829834a05f6538f79b8`

## AI-GSI-B3-T12-003

Decisión: pending_review · acción: revise.

Motivo: Conservar responsabilidades del backend y clave C; diferenciar presentación, manipulación del documento y decisiones de confianza.

### Antes

¿Qué responsabilidad corresponde habitualmente al backend?

- A. Composición visual mediante CSS exclusivamente
- B. Gestión del foco y eventos del DOM exclusivamente
- C. Reglas de dominio y acceso a persistencia **(correcta)**
- D. Validación de interfaz como única autorización

Explicación: El servidor coordina rutas, servicios, datos y estado de aplicación.

### Propuesta

En una aplicación con frontend en navegador y backend de aplicación, ¿qué responsabilidad corresponde habitualmente al backend?

- A. Determinar en el navegador la composición visual de la página mediante sus estilos.
- B. Gestionar en el navegador los nodos y el foco de los controles de la interfaz.
- C. Aplicar reglas de negocio y acceso a persistencia desde un entorno de confianza. **(correcta)**
- D. Considerar la validación visual del formulario como decisión final sobre permisos.

Explicación: El backend suele coordinar reglas de aplicación o dominio y acceso a persistencia. Para proteger recursos, las decisiones autoritativas deben aplicarse en un entorno que el cliente no pueda modificar a voluntad. La interfaz puede repetir comprobaciones para mejorar la experiencia, pero no sustituye los controles del servidor. No se afirma que toda web necesite un backend propio.

- Error A: El cálculo visual en el navegador pertenece a la presentación cliente; no es la aplicación de reglas de negocio y persistencia que se pregunta.
- Error B: Manipular nodos y foco es una responsabilidad del documento en el navegador, distinta de ejecutar servicios y proteger recursos del servidor.
- Error D: La validación visible puede eludirse. No es una autoridad suficiente sobre lo que un solicitante puede hacer con los datos.

- [Microsoft: Architectural principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · Separation of concerns; Dependency inversion; lógica de negocio separada de HTTP e infraestructura · versión: Texto HTML comprobado 30-10-2026; se usa separación de responsabilidades, no se prescribe una arquitectura empresarial o un número de capas al proyecto. · comprobado: 2026-10-30
- [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) · Introduction; Enforce Least Privileges; Validate permissions on every request; Verify checks in the right location · versión: Documento del proyecto comprobado 30-10-2026; controles de servidor, no mera comprobación del cliente. · comprobado: 2026-10-30
- [WHATWG: DOM](https://dom.spec.whatwg.org/) · Abstract; §2 Events; §4 Nodes · versión: Living Standard mostrado con actualización19-10-2026, comprobado 30-10-2026. · comprobado: 2026-10-30

Partida: `bb55466080e696b91e8e640064d03aadde39df601b165f2241e9ec93d47a9429` · propuesta: `9b37fc8f16344bbc17471776e3f7147e87acf01f3e6669dac2d7dbde66b58455`

## AI-GSI-B3-T12-004

Decisión: pending_review · acción: revise.

Motivo: Conservar alcance del transporte HTTPS y clave A; acotar configuración válida y comparar controles de seguridad distintos.

### Antes

¿Qué garantiza HTTPS por sí mismo?

- A. Protección TLS del transporte, sin corregir errores de aplicación **(correcta)**
- B. Autorización correcta de todos los usuarios
- C. Ausencia de inyección SQL
- D. Inmunidad frente a XSS

Explicación: TLS protege comunicaciones; la lógica y validación requieren controles propios.

### Propuesta

Con HTTPS correctamente configurado y el certificado del servicio validado, ¿qué protección aporta TLS por sí mismo?

- A. Proteger confidencialidad e integridad del tráfico entre los extremos del canal TLS. **(correcta)**
- B. Determinar si la identidad solicitante puede acceder a cada registro del servidor.
- C. Separar los datos recibidos de las instrucciones de las consultas SQL ejecutadas.
- D. Impedir que una entrada no codificada se convierta en script en la página.

Explicación: HTTPS con TLS configurado correctamente protege el tráfico en tránsito y, con certificados validados, la identidad esperada del servicio. No acredita la corrección de la aplicación: permisos, consultas seguras y prevención de XSS necesitan sus propios controles. Tampoco cifra por ese hecho los datos que permanecen almacenados en los extremos.

- Error B: Decidir acceso a un registro es autorización de la aplicación; un canal protegido puede transportar una petición sin permiso.
- Error C: Separar valores y comandos es una propiedad del acceso SQL correctamente parametrizado, no del cifrado del transporte HTTP.
- Error D: Una aplicación puede servir contenido vulnerable mediante HTTPS. La prevención de XSS requiere controles de generación y ejecución de contenido.

- [IETF: TLS1.3](https://www.rfc-editor.org/rfc/rfc8446.html) · §1 Introduction: autenticación, confidencialidad e integridad; certificados o PSK · versión: RFC8446, agosto2018; comprobada 30-10-2026. La pregunta se acota al uso HTTPS con certificados. · comprobado: 2026-10-30
- [IETF: Service Identity in TLS](https://www.rfc-editor.org/rfc/rfc9525.html) · Abstract; §6 Verifying Service Identity · versión: RFC9525, noviembre2023, sustituye RFC6125; comprobada 30-10-2026. · comprobado: 2026-10-30
- [OWASP: REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html) · HTTPS; Access Control; Input validation; Sensitive information in HTTP requests · versión: Documento del proyecto comprobado 30-10-2026; controles complementarios y aplicación de políticas en servidor. · comprobado: 2026-10-30

Partida: `38989daf7f4fc92b1921428b002b14f48ecb00e81bee9463f01e1e63f0fb7967` · propuesta: `c33fa0a91870ad7ec88bfba3b5edd2287a1d846cce7c6736ef89846712fa4836`

## AI-GSI-B3-T12-005

Decisión: pending_review · acción: revise.

Motivo: Conservar preparación frente a adaptación y clave D; contrastar inversión y reducciones habituales de ambas actividades.

### Antes

¿Qué diferencia i18n y l10n?

- A. i18n solo traduce imágenes
- B. Ambas son técnicas de cifrado
- C. l10n elimina formatos regionales
- D. i18n prepara el software; l10n lo adapta a un locale **(correcta)**

Explicación: Preparar internacionalización y realizar una adaptación concreta son actividades distintas.

### Propuesta

¿Qué diferencia hay entre internacionalización (i18n) y localización (l10n)?

- A. i18n adapta formatos a una región; l10n diseña el código para admitir regiones diferentes.
- B. i18n traduce mensajes; l10n se limita a convertir horas entre zonas regionales.
- C. i18n declara el idioma de la página; l10n establece la codificación Unicode de sus bytes.
- D. i18n prepara el producto para su adaptación; l10n lo adapta a un locale concreto. **(correcta)**

Explicación: Internacionalizar prepara el diseño y desarrollo para facilitar adaptaciones culturales, regionales o lingüísticas. Localizar realiza una adaptación concreta, que puede incluir texto, formatos, ordenación y convenciones locales. No son sinónimos de traducir mensajes ni de fijar una codificación o una zona horaria.

- Error A: Invierte las funciones: la adaptación a una región concreta corresponde a localización y la preparación general a internacionalización.
- Error B: Traducir mensajes puede ser parte de localizar. Localización abarca más que horarios, e internacionalización no se limita a traducir.
- Error C: Declarar idioma y usar Unicode son decisiones útiles dentro de una solución, pero no definen por sí solas ambos procesos.

- [W3C: Localization vs Internationalization](https://www.w3.org/International/questions/qa-i18n) · Answer; Localization; Internationalization · versión: Guía de W3C Internationalization comprobada 30-10-2026; definiciones generales de preparación y adaptación a locale. · comprobado: 2026-10-30

Partida: `9b15b24b30142bf5f074b92a294cdcb5dcbe5402fc59631101d343eee1128c22` · propuesta: `7e76685b7aa3285aa9c97e7680a08f455f11b805ea03ecf2d09c735d95100157`

## AI-GSI-B3-T12-006

Decisión: pending_review · acción: revise.

Motivo: Conservar separación almacenamiento/presentación y clave B; retirar doble negación y usar un registro histórico concreto sin inventar un cambio horario.

### Antes

Guardar instantes en UTC elimina…

- A. Toda necesidad de zonas horarias
- B. Ninguna necesidad de presentar según zona del usuario **(correcta)**
- C. La pluralización
- D. La necesidad de Unicode

Explicación: Almacenamiento temporal y presentación local siguen siendo decisiones diferentes.

### Propuesta

Un registro guarda un instante pasado en UTC. El usuario quiere verlo como hora local en su zona regional. ¿Qué debe hacer la presentación?

- A. Mostrar el valor UTC como hora local, ya que almacenarlo así elimina la elección de zona.
- B. Convertir el instante con la zona regional del usuario y sus reglas para esa fecha. **(correcta)**
- C. Sumar el desplazamiento actual de la zona a cualquier instante histórico que se muestre.
- D. Cambiar solo idioma y formato numérico, porque un locale determina siempre la zona horaria.

Explicación: UTC identifica el instante almacenado, pero su presentación como hora civil necesita una zona. Una zona regional contiene reglas que pueden variar con la fecha, por ejemplo por cambios estacionales o históricos. El desplazamiento de hoy no sirve necesariamente para un registro pasado. El locale ayuda a dar formato, sin determinar por sí solo la zona deseada.

- Error A: UTC es una referencia temporal común, no la hora civil de cualquier usuario o región.
- Error C: El desplazamiento aplicable al instante histórico puede diferir del actual; debe obtenerse de las reglas de la zona para esa fecha.
- Error D: Idioma y región de formato no identifican de forma suficiente la zona horaria que quiere utilizar una persona.

- [Ecma: Internationalization API](https://402.ecma-international.org/12.0/) · §6.5 IANA time zones; DateTimeFormat: opción timeZone y formato de instantes · versión: ECMA402, edición12, ECMAScript2025, comprobada 30-10-2026. Se usa edición publicada fija; el borrador principal ya se presenta como2027 y no se adopta como estándar final. · comprobado: 2026-10-30
- [IANA: tz theory and pragmatics](https://data.iana.org/time-zones/tzdb/theory.html) · Scope of the tz database; historia, reglas y cambios de hora civil · versión: Documento de tzdb leído 30-10-2026, sin atribuir una versión local de datos o precisión histórica universal anterior a1970. · comprobado: 2026-10-30
- [W3C: Localization vs Internationalization](https://www.w3.org/International/questions/qa-i18n) · Answer; Localization; Internationalization · versión: Guía de W3C Internationalization comprobada 30-10-2026; definiciones generales de preparación y adaptación a locale. · comprobado: 2026-10-30

Partida: `18b601ef900de3a7dea2250a66bdd294950cb739629dd4d7c9a4e4dbca9cd39b` · propuesta: `31de8ef97e43afff36c80d0e70fefc3898ff0808f54b5e587edd442a65d35b29`

## AI-GSI-B3-T12-008

Decisión: pending_review · acción: revise.

Motivo: Conservar capacidades PWA y clave A; separar manifest, instalación y estrategia offline sin requisitos universales de navegador.

### Antes

¿Qué puede añadir una PWA a una aplicación web?

- A. Service worker y capacidades de instalación u offline **(correcta)**
- B. Eliminación de HTTP
- C. Acceso ilimitado a todo el equipo por defecto
- D. Autenticación legal automática

Explicación: PWA incorpora capacidades adicionales del entorno web bajo sus restricciones.

### Propuesta

¿Qué capacidades puede añadir el enfoque PWA a una aplicación web, según su implementación y el soporte del navegador?

- A. Instalación integrada y funcionamiento offline con mecanismos web adecuados y soporte del navegador. **(correcta)**
- B. Funcionamiento offline de todos los recursos por el hecho de usar HTTPS y diseño adaptable.
- C. Acceso irrestricto a recursos del dispositivo por haber instalado la aplicación.
- D. Actualización de cualquier caché al instante con solo cambiar el nombre mostrado en el manifest.

Explicación: Una PWA puede ofrecer integración de instalación mediante metadatos y mecanismos del navegador, y soporte offline mediante service worker y una estrategia de almacenamiento y respuestas. Son capacidades que hay que diseñar y probar. Un service worker no es un requisito universal de toda forma de instalación, y ni instalar ni usar HTTPS concede acceso irrestricto al dispositivo.

- Error B: HTTPS y diseño adaptable no almacenan por sí mismos los recursos ni definen cómo responder cuando no hay red.
- Error C: Instalar una aplicación web no elimina el modelo de permisos o aislamiento que limita sus APIs del dispositivo.
- Error D: El nombre del manifest es metadato de presentación, no un mecanismo que invalide o actualice automáticamente todas las cachés.

- [W3C: Web Application Manifest](https://www.w3.org/TR/appmanifest/) · Abstract; §4 Installable web applications · versión: Working Draft26-10-2026, comprobado30-10-2026. Trabajo en curso, no Recommendation estable; no garantiza criterios idénticos de instalación en todos los navegadores. · comprobado: 2026-10-30
- [W3C: Service Workers](https://www.w3.org/TR/service-workers/) · Abstract; fetch event; request and response store para soporte offline · versión: Candidate Recommendation Draft29-10-2026, comprobado30-10-2026. Estado de borrador registrado; no se supone soporte uniforme ni requisito universal de instalación. · comprobado: 2026-10-30

Partida: `1dbdc6f4aaecdd3738a3b12eaecb7be63bd6d00e26d32c33f4b32a88a5ba6a86` · propuesta: `daaee4327dc3e5cad523b287be1c7b3cae81cc54c7b343ee3b7d9d55af94b0f7`

## AI-GSI-B3-T12-009

Decisión: pending_review · acción: revise.

Motivo: Conservar controles autoritativos del servidor y clave A; comparar verificaciones parciales de integridad, entrada y canal.

### Antes

Un formulario valida permisos en JavaScript. ¿Qué debe hacer el servidor?

- A. Aplicar también toda regla de seguridad correspondiente **(correcta)**
- B. Aceptar cualquier petición si el botón está oculto
- C. Confiar únicamente en ese JavaScript
- D. Omitir autorización al usar HTTPS

Explicación: El cliente puede alterarse o eludirse; el control de seguridad corresponde al servidor.

### Propuesta

Un formulario valida permisos en JavaScript. ¿Qué debe hacer el servidor?

- A. Comprobar en servidor identidad, permisos y reglas aunque se omita el formulario. **(correcta)**
- B. Comprobar el hash del archivo JavaScript y confiar en que el cliente ejecutó su validación.
- C. Verificar tipos y formato de los campos y tomar eso como autorización suficiente.
- D. Exigir HTTPS y aceptar la operación sin comprobar acceso al recurso solicitado.

Explicación: El cliente puede alterar u omitir el formulario. El servidor debe aplicar los controles que correspondan a la operación y al recurso, con una identidad válida cuando se requiera, permisos y validación de datos. Comprobar entrada, proteger el transporte y mejorar la experiencia de la interfaz son medidas complementarias, no pruebas intercambiables de autorización.

- Error B: La integridad del archivo no demuestra que el solicitante lo haya ejecutado ni que no haya enviado una petición distinta directamente.
- Error C: Un dato con formato válido puede pedir una operación sobre un recurso ajeno; validez de entrada y permiso son comprobaciones diferentes.
- Error D: HTTPS protege el canal con quien envía la petición, pero no acredita su derecho a realizar la operación solicitada.

- [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) · Introduction; Enforce Least Privileges; Validate permissions on every request; Verify checks in the right location · versión: Documento del proyecto comprobado 30-10-2026; controles de servidor, no mera comprobación del cliente. · comprobado: 2026-10-30
- [OWASP: REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html) · HTTPS; Access Control; Input validation; Sensitive information in HTTP requests · versión: Documento del proyecto comprobado 30-10-2026; controles complementarios y aplicación de políticas en servidor. · comprobado: 2026-10-30

Partida: `1cabbf00de866662d27636a88254bfd0ecbb2b624b4e2e04ca730fe67dc7d16b` · propuesta: `309d89d235710b81c162358215d5abf329e6d862d947466ba30561e6ede39a2a`

## AI-GSI-B3-T12-010

Decisión: pending_review · acción: revise.

Motivo: Conservar atributo HttpOnly y clave A; comparar nombres reales sin exclusividades repetidas y explicar lectura frente a envío.

### Antes

¿Qué atributo limita el acceso JavaScript a una cookie?

- A. HttpOnly **(correcta)**
- B. Path exclusivamente
- C. Expires exclusivamente
- D. Secure exclusivamente

Explicación: HttpOnly limita acceso desde scripts; Secure restringe envío a transporte seguro.

### Propuesta

¿Qué atributo evita que una cookie sea expuesta al JavaScript de la página mediante document.cookie?

- A. HttpOnly **(correcta)**
- B. Path
- C. Expires
- D. Secure

Explicación: HttpOnly hace que el navegador no exponga esa cookie mediante APIs de script como document.cookie. La cookie puede seguir acompañando peticiones HTTP conforme a sus otras reglas, incluidas peticiones iniciadas desde JavaScript. No elimina XSS ni protege por sí solo todas las acciones que un script podría inducir en la sesión.

- Error B: Path acota rutas a las que se aplica la cookie; no es un control fiable de aislamiento frente a scripts del mismo sitio.
- Error C: Expires fija caducidad. Una cookie no caducada no queda oculta al script por tener una fecha de expiración.
- Error D: Secure limita el envío por canales seguros; es independiente de impedir lectura desde APIs de script.

- [IETF: HTTP State Management](https://www.rfc-editor.org/rfc/rfc6265.html) · §4.1.2.1 Expires; §4.1.2.3 Domain; §4.1.2.4 Path; §4.1.2.5 Secure; §4.1.2.6 HttpOnly · versión: RFC6265, abril2011, comprobado30-10-2026 para atributos. SameSite y comportamientos actuales se contrastan aparte; no se presenta esta edición como exhaustiva de cookies modernas. · comprobado: 2026-10-30
- [Mozilla MDN: Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie) · HttpOnly; Secure; SameSite; nota de excepción localhost · versión: Documentación de navegador comprobada30-10-2026; complemento operativo a los contratos RFC, sin tratarla como RFC normativo. · comprobado: 2026-10-30

Partida: `abf88be6969d9c25f0d25e0415f9de95fca8134b71297a38fd72d0c9c97ed0df` · propuesta: `4a48f320ca03c2183979697a9c719443bf72a2b11e6cf53e24ad3c629cf98f2d`

## AI-GSI-B3-T12-011

Decisión: pending_review · acción: revise.

Motivo: Conservar atributo Secure y clave B; precisar política del agente y separar transporte, acceso por script y duración.

### Antes

¿Qué atributo indica que una cookie debe enviarse mediante conexión segura?

- A. HttpOnly exclusivamente
- B. Secure **(correcta)**
- C. Max-Age exclusivamente
- D. Domain exclusivamente

Explicación: Secure protege el transporte de la cookie; no sustituye otras medidas de sesión.

### Propuesta

¿Qué atributo marca una cookie para enviarla solo por un canal seguro según la política del agente de usuario?

- A. HttpOnly
- B. Secure **(correcta)**
- C. Max-Age
- D. Domain

Explicación: Secure marca la cookie para su envío por canales que el agente de usuario considera seguros, normalmente HTTPS. No cifra por sí mismo su almacenamiento ni impide leerla desde script si no tiene HttpOnly. Hay comportamientos especiales de navegador para localhost; no se extrapolan a una aplicación de producción en HTTP.

- Error A: HttpOnly restringe exposición a APIs de script, no define por sí solo el canal por el que se envía la cookie.
- Error C: Max-Age define duración en segundos, no el requisito de transporte seguro.
- Error D: Domain establece ámbito de hosts, no que el transporte deba ser seguro.

- [IETF: HTTP State Management](https://www.rfc-editor.org/rfc/rfc6265.html) · §4.1.2.1 Expires; §4.1.2.3 Domain; §4.1.2.4 Path; §4.1.2.5 Secure; §4.1.2.6 HttpOnly · versión: RFC6265, abril2011, comprobado30-10-2026 para atributos. SameSite y comportamientos actuales se contrastan aparte; no se presenta esta edición como exhaustiva de cookies modernas. · comprobado: 2026-10-30
- [Mozilla MDN: Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie) · HttpOnly; Secure; SameSite; nota de excepción localhost · versión: Documentación de navegador comprobada30-10-2026; complemento operativo a los contratos RFC, sin tratarla como RFC normativo. · comprobado: 2026-10-30

Partida: `36959ef0568419ea549366fa71ca04a16306dcd15cde072043a21de599e1d9f5` · propuesta: `e17951a45b0b641a6caf819f4efa70328846e5a582a260bfdf8222b906a86557`

## AI-GSI-B3-T12-012

Decisión: pending_review · acción: revise.

Motivo: Conservar validación de representación y clave B; caso GET con copia almacenada, sin equiparar ETag a caducidad o firma.

### Antes

¿Para qué sirve ETag en caché HTTP?

- A. Identificar jurídicamente al usuario
- B. Validar una representación almacenada **(correcta)**
- C. Asignar dirección IP
- D. Cifrar una cookie

Explicación: ETag permite validar vigencia de contenido cacheado junto a mecanismos HTTP.

### Propuesta

Un cliente conserva una respuesta GET y su ETag. Al consultar de nuevo el mismo recurso, ¿para qué puede utilizar ese ETag?

- A. Determinar el tiempo de frescura de la copia sin consultar otras cabeceras de caché.
- B. Revalidar la copia con If-None-Match y permitir un 304 si el validador coincide. **(correcta)**
- C. Comprobar una firma criptográfica obligatoria que demuestra el origen del cuerpo guardado.
- D. Ordenar al servidor enviar otra copia completa aunque coincida el validador del recurso.

Explicación: ETag es un validador opaco de una representación. En un GET condicional, el cliente puede enviar If-None-Match; una coincidencia permite una respuesta 304 y reutilizar la respuesta almacenada conforme a las reglas de caché y metadatos actualizados. No fija por sí mismo cuánto tiempo es fresca ni tiene que ser un hash o firma criptográfica.

- Error A: La frescura temporal se decide con reglas y metadatos de caché; ETag sirve para validación, no sustituye esos tiempos.
- Error C: El formato de ETag no exige una firma criptográfica ni permite deducir cómo se generó el valor opaco.
- Error D: Evitar transferir de nuevo el cuerpo cuando la copia puede reutilizarse es precisamente la utilidad de esa validación condicional.

- [IETF: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · §1; §8.8.3 ETag; §13.1.2 If-None-Match; §15.4.5 304 · versión: RFC9110, junio2022; comprobada 30-10-2026. Revalidación del caso mediante GET, sin confundir caché con identidad o firma criptográfica. · comprobado: 2026-10-30
- [IETF: HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111.html) · §4.3 Validation; §4.3.1 Sending validation request; §4.3.3 Handling validation response · versión: RFC9111, junio2022, comprobada30-10-2026. ETag/If-None-Match y reutilización tras304, distintos de frescura por tiempo. · comprobado: 2026-10-30

Partida: `1c17ab29f28601daa712c3270eb895ddf47073f3df3bb260b29fe32aa28b6b95` · propuesta: `326ed57bb37d82f376ee7d9a15629cd27840fd1db2ca07e7e211a19cdeba28b5`

## AI-GSI-B3-T12-013

Decisión: pending_review · acción: revise.

Motivo: Conservar CORS y clave A; diferenciar exposición de respuesta, envío, CSP, permisos y canal.

### Antes

¿Qué función cumple CORS?

- A. Declarar permisos de acceso entre orígenes para el navegador **(correcta)**
- B. Corregir cualquier XSS
- C. Cifrar todos los mensajes
- D. Autenticar usuarios por sí solo

Explicación: CORS regula acceso entre orígenes; no es autenticación ni autorización de negocio.

### Propuesta

¿Qué función cumple CORS en las peticiones web entre orígenes?

- A. Indicar al navegador si puede exponer una respuesta a un script de otro origen. **(correcta)**
- B. Limitar qué fuentes de contenido puede cargar o ejecutar la página mediante directivas.
- C. Comprobar si el usuario autenticado tiene permiso de negocio sobre el recurso pedido.
- D. Proteger mediante cifrado e integridad el tráfico que intercambian los extremos.

Explicación: CORS permite declarar mediante cabeceras si una respuesta puede compartirse con otro origen en el navegador. Algunas peticiones requieren preflight. No es autorización de negocio ni una barrera que impida enviar cualquier petición entre orígenes: ciertas solicitudes pueden llegar al servidor aunque el script no pueda leer la respuesta. Tampoco sustituye una defensa CSRF.

- Error B: Restringir fuentes que una página puede cargar o ejecutar corresponde a una política de contenido como CSP, no a CORS.
- Error C: El servidor debe comprobar los permisos de negocio independientemente de si permite que un navegador comparta una respuesta entre orígenes.
- Error D: Cifrado e integridad del transporte son funciones de TLS; las cabeceras CORS no cifran el tráfico.

- [WHATWG: Fetch](https://fetch.spec.whatwg.org/) · Abstract; §3.3 CORS protocol; §3.3.1 General; §3.3.5 Credentials · versión: Living Standard mostrado con actualización19-10-2026, leído 30-10-2026. Se separa envío de petición y exposición de respuesta al script. · comprobado: 2026-10-30
- [W3C: Content Security Policy Level3](https://www.w3.org/TR/CSP3/) · Abstract; §3.1 Content-Security-Policy; §3.2 Report-Only; directivas de recursos · versión: Working Draft27-10-2026, comprobado30-10-2026. Trabajo en curso; solo alcance de política y distinción entre cumplir y observar, sin prometer eliminación de XSS. · comprobado: 2026-10-30
- [OWASP: REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html) · HTTPS; Access Control; Input validation; Sensitive information in HTTP requests · versión: Documento del proyecto comprobado 30-10-2026; controles complementarios y aplicación de políticas en servidor. · comprobado: 2026-10-30
- [IETF: TLS1.3](https://www.rfc-editor.org/rfc/rfc8446.html) · §1 Introduction: autenticación, confidencialidad e integridad; certificados o PSK · versión: RFC8446, agosto2018; comprobada 30-10-2026. La pregunta se acota al uso HTTPS con certificados. · comprobado: 2026-10-30

Partida: `b26ea4b195cd7fd017f63e41225e893b7d4239658403e86fa0b186458fcd2bca` · propuesta: `7fc6c3a5f5e18c8b378da672e9381be37d95baf8a100087ba5618a5bc914e52a`

## AI-GSI-B3-T12-014

Decisión: pending_review · acción: revise.

Motivo: Conservar defensa de contenido y clave B; acotar cumplimiento frente a observación y distinguir controles próximos.

### Antes

¿Qué aporta CSP?

- A. Sustitución completa de validación de entradas
- B. Restricciones sobre fuentes de contenido para reducir riesgo de XSS **(correcta)**
- C. Asignación de permisos de base de datos
- D. Una firma cualificada

Explicación: CSP es defensa del navegador y complementa codificación y diseño seguro.

### Propuesta

¿Qué aporta una Content Security Policy aplicada en modo de cumplimiento?

- A. Sustituir la validación de datos que hace el servidor antes de ejecutar la operación.
- B. Restringir recursos y ejecución de contenido para reducir riesgos como XSS. **(correcta)**
- C. Asignar a la identidad del usuario permisos sobre filas y operaciones de la base de datos.
- D. Permitir a scripts de otros orígenes leer respuestas HTTP conforme a cabeceras de acceso.

Explicación: Una CSP en cumplimiento permite restringir recursos y ejecución según directivas, fuentes, nonces o hashes configurados. Reduce superficie de ataques como XSS como defensa adicional; no arregla por sí sola toda vulnerabilidad de contenido ni sustituye codificación o validación. Report-Only observa infracciones sin hacer cumplir esa política.

- Error A: La política del navegador no valida la semántica de los datos con que el servidor realiza una operación.
- Error C: Las facultades sobre registros y operaciones son autorización de la aplicación o de los datos, no permisos otorgados por CSP.
- Error D: Permitir compartir respuestas entre orígenes es la función de CORS; no define las restricciones de contenido de CSP.

- [W3C: Content Security Policy Level3](https://www.w3.org/TR/CSP3/) · Abstract; §3.1 Content-Security-Policy; §3.2 Report-Only; directivas de recursos · versión: Working Draft27-10-2026, comprobado30-10-2026. Trabajo en curso; solo alcance de política y distinción entre cumplir y observar, sin prometer eliminación de XSS. · comprobado: 2026-10-30
- [WHATWG: Fetch](https://fetch.spec.whatwg.org/) · Abstract; §3.3 CORS protocol; §3.3.1 General; §3.3.5 Credentials · versión: Living Standard mostrado con actualización19-10-2026, leído 30-10-2026. Se separa envío de petición y exposición de respuesta al script. · comprobado: 2026-10-30
- [OWASP: REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html) · HTTPS; Access Control; Input validation; Sensitive information in HTTP requests · versión: Documento del proyecto comprobado 30-10-2026; controles complementarios y aplicación de políticas en servidor. · comprobado: 2026-10-30

Partida: `2703bb610f39ec7cd7476f523e4a78d64ed1a769ffd762b2159d2cc5033eb356` · propuesta: `a4e3382fa54aa8faec3210da06e4fbf919141778c78a12ee7ae133c150cbc5f3`

## AI-GSI-B3-T12-015

Decisión: pending_review · acción: revise.

Motivo: Conservar mitigación CSRF y clave B; microcaso de operación de estado y controles de cookie, CORS y método que no la sustituyen.

### Antes

¿Qué medidas pueden mitigar CSRF en sesiones basadas en cookies?

- A. Desactivar toda comprobación de origen
- B. Tokens adecuados, SameSite y diseño correcto **(correcta)**
- C. Publicar el identificador de sesión
- D. Solo ocultar enlaces

Explicación: La defensa controla peticiones inducidas aprovechando credenciales enviadas por el navegador.

### Propuesta

Una aplicación usa una cookie de sesión y un POST que modifica datos. ¿Qué combinación ayuda a mitigar peticiones CSRF?

- A. Añadir HttpOnly y considerar que ya impide las peticiones forjadas entre sitios.
- B. Verificar un token anti-CSRF apropiado y usar SameSite como defensa complementaria. **(correcta)**
- C. Restringir la lectura por CORS y confiar en que ninguna petición externa llegará al servidor.
- D. Trasladar la operación a GET y pedir al usuario que use solo el enlace de la interfaz.

Explicación: En una operación de estado con sesión por cookie, un token anti-CSRF correctamente vinculado y validado ayuda a distinguir una petición legítima de otra inducida. SameSite puede complementar esa defensa según el diseño y despliegue. HttpOnly no evita el envío automático de la cookie y CORS no bloquea toda petición entre sitios. Una operación que cambia estado no debe depender de un GET o de ocultar enlaces.

- Error A: HttpOnly protege exposición de la cookie a APIs de script; el navegador puede seguir enviándola en una petición inducida.
- Error C: Una petición como un envío de formulario puede alcanzar el servidor aunque su respuesta no sea legible por el script atacante.
- Error D: Una URL GET también puede inducirse desde otro sitio. Cambiar el método o confiar en la ruta de navegación no acredita intención legítima.

- [OWASP: CSRF Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) · Introduction; Token-Based Mitigation; SameSite Cookie Attribute y Limitations of SameSite · versión: Documento del proyecto comprobado30-10-2026. Tokens vinculados y verificados; SameSite como defensa complementaria según despliegue. · comprobado: 2026-10-30
- [IETF: HTTP State Management](https://www.rfc-editor.org/rfc/rfc6265.html) · §4.1.2.1 Expires; §4.1.2.3 Domain; §4.1.2.4 Path; §4.1.2.5 Secure; §4.1.2.6 HttpOnly · versión: RFC6265, abril2011, comprobado30-10-2026 para atributos. SameSite y comportamientos actuales se contrastan aparte; no se presenta esta edición como exhaustiva de cookies modernas. · comprobado: 2026-10-30
- [WHATWG: Fetch](https://fetch.spec.whatwg.org/) · Abstract; §3.3 CORS protocol; §3.3.1 General; §3.3.5 Credentials · versión: Living Standard mostrado con actualización19-10-2026, leído 30-10-2026. Se separa envío de petición y exposición de respuesta al script. · comprobado: 2026-10-30
- [IETF: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) · §1; §8.8.3 ETag; §13.1.2 If-None-Match; §15.4.5 304 · versión: RFC9110, junio2022; comprobada 30-10-2026. Revalidación del caso mediante GET, sin confundir caché con identidad o firma criptográfica. · comprobado: 2026-10-30

Partida: `fdd2b763186d5252dd2d36a228eb01d993037f219521b1686560bf07e4031cd1` · propuesta: `48f75e7056e49b631e3b7029d0e2095a9fcb33d6d89626c2fc27e4c82d7e01ac`

## AI-GSI-B3-T12-016

Decisión: pending_review · acción: revise.

Motivo: Conservar contrato HTTP y clave A; contrastar interfaz, esquema parcial, mensajería e implementación sin exigir campos opcionales como universales.

### Antes

¿Qué describe OpenAPI?

- A. Contratos de APIs HTTP **(correcta)**
- B. Esquema de almacenamiento interno de cualquier SGBD
- C. Topología física de la infraestructura
- D. Políticas de encaminamiento interdominio

Explicación: El contrato debe incluir operaciones y aspectos operativos, como errores y límites.

### Propuesta

¿Qué describe principalmente un documento OpenAPI?

- A. La interfaz de una API HTTP: operaciones, parámetros, respuestas y esquemas relacionados. **(correcta)**
- B. Solo la estructura de valores JSON, sin rutas ni operaciones de una API.
- C. Los canales y mensajes de una API orientada a eventos, con sus intercambios.
- D. La ejecución interna de servicios, transacciones y conexiones de la implementación.

Explicación: OpenAPI describe de forma independiente del lenguaje interfaces de APIs HTTP, como operaciones, parámetros, respuestas y esquemas. Puede documentar seguridad y errores; no implementa automáticamente controles ni obliga a que un servidor cumpla lo escrito. Un contrato debe comprobarse frente a la implementación. Los esquemas de datos son parte del contrato, no toda su estructura.

- Error B: Describir valores y tipos es una parte del modelo, pero OpenAPI también expresa operaciones y sus interfaces HTTP.
- Error C: La descripción orientada a canales y mensajes corresponde al ámbito de AsyncAPI, que es agnóstico de protocolo; no se afirma que excluya HTTP.
- Error D: El contrato de interfaz no define ni ejecuta toda la lógica interna, la gestión transaccional o el pool de conexiones del servicio.

- [OpenAPI Initiative: OpenAPI Specification](https://spec.openapis.org/oas/v3.2.0.html) · What is OAS; Paths/Operation; Responses; Schema; Security Scheme · versión: 3.2.0,19-09-2025, comprobada30-10-2026. Edición fija con otras versiones enlazadas; no se declara última versión o aplicación automática de reglas documentadas. · comprobado: 2026-10-30
- [AsyncAPI Initiative: Specification](https://www.asyncapi.com/docs/reference/specification/v3.0.0) · Introduction; Definitions; Channel y Message · versión: 3.0.0, comprobada30-10-2026. APIs orientadas a mensajes, agnósticas de protocolo; no se afirma que AsyncAPI excluya HTTP o sea la última edición. · comprobado: 2026-10-30

Partida: `0ef6291a4406a43fd8839c11ddd5ad2370e1c583387c0424d425f37bd226ca96` · propuesta: `9a4f04f53a9d75c3e349f142e931466e78aa1ebc74eaacfa6127e1cfbcba6417`

## AI-GSI-B3-T12-017

Decisión: pending_review · acción: revise.

Motivo: Conservar relación OAuth/OIDC y clave A; sustituir distractores ajenos por confusiones de protocolo, formato y uso de tokens.

### Antes

¿Qué relación existe entre OAuth 2.0 y OpenID Connect?

- A. OAuth delega autorización; OIDC añade identidad y autenticación **(correcta)**
- B. Ambos son formatos de imagen
- C. OIDC elimina cualquier comprobación de token
- D. OAuth es únicamente una contraseña

Explicación: Autorización delegada y autenticación son funciones relacionadas pero distintas.

### Propuesta

¿Qué relación existe entre OAuth 2.0 y OpenID Connect?

- A. OAuth concede acceso autorizado; OIDC añade autenticación del usuario e ID Token. **(correcta)**
- B. OAuth define el ID Token de autenticación; OIDC se limita a conceder scopes de acceso.
- C. OAuth exige formato JWT para cualquier token; OIDC exige que todos sean valores opacos.
- D. OAuth y OIDC hacen intercambiables ID Token y access token ante cualquier API.

Explicación: OAuth 2.0 es un marco de autorización para obtener acceso limitado. OIDC incorpora una capa de autenticación con un ID Token destinado al cliente. Un access token se utiliza para acceder al recurso previsto y no se intercambia sin más con el ID Token. Los formatos y validaciones dependen del protocolo y contexto; decodificar un JWT no basta para confiar en él.

- Error B: Invierte las funciones: el ID Token es una extensión de OIDC sobre el marco OAuth, no una autenticación definida por OAuth por sí solo.
- Error C: OAuth no impone universalmente formato JWT para access tokens y el ID Token de OIDC sí se representa como JWT.
- Error D: Ambos tokens tienen destinatarios y fines distintos. Una API no debe aceptar un ID Token solo por proceder del mismo proveedor.

- [IETF: OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749.html) · §1 Introducción; §1.4 Access Token; §3.3 Access Token Scope · versión: RFC6749, octubre2012; comprobada 30-10-2026 junto a BCP240, sin recomendar flujos históricos por el solo hecho de figurar en el RFC. · comprobado: 2026-10-30
- [OpenID Foundation: OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) · §1 Introduction; §1.3 Overview; §2 ID Token; §5.3 UserInfo · versión: Core1.0, Final incorporando errata set2, 15-12-2023; comprobada 30-10-2026. No todos los endpoints son obligatorios en cualquier configuración. · comprobado: 2026-10-30
- [IETF: JSON Web Token](https://www.rfc-editor.org/rfc/rfc7519.html) · Abstract; §2 Terminology; Appendix B Relationship of JWTs to SAML Assertions · versión: RFC7519, mayo2015; comprobada 30-10-2026; formato distinto de protocolo de autenticación o autorización. · comprobado: 2026-10-30
- [IETF: OAuth 2.0 Security BCP](https://www.rfc-editor.org/rfc/rfc9700.html) · Abstract; actualización de recomendaciones de RFC6749/6750/6819 · versión: RFC9700, BCP240, enero2025; comprobada 30-10-2026; no se implementan ni prueban flujos OAuth. · comprobado: 2026-10-30

Partida: `4c5fede532a289bd517107078770ed38ac2a02993b4fe33df11672f472fd58ec` · propuesta: `1da7636c7ed264d3680798341936b8d852f9360abd4b0cebdffa57c384fb518d`
