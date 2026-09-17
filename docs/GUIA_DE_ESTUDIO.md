# Preparación GSI · Guía paso a paso

Esta guía explica cómo usar la aplicación para estudiar, practicar y volver sobre tus errores. No necesitas saber programar ni modificar archivos del proyecto.

Creado por [AngeldelaCalleFernandez](https://github.com/AngeldelaCalleFernandez). [Uso gratuito y no comercial, con atribución](../LICENSE). Los materiales de terceros conservan sus propias condiciones.

**Tu recorrido habitual será: Temario → Entrenamiento → Refuerzo → Estadísticas.** Reserva Examen y Práctica escrita para sesiones más largas.

## 1. Abrir la aplicación en ordenador, tableta o móvil

1. Abre [Preparación GSI](https://angeldelacallefernandez.github.io/Preparacion-GSI/) en el navegador de tu dispositivo.
2. Guarda esa dirección en favoritos para volver fácilmente.
3. Pulsa **Temario** para empezar. No necesitas instalar nada ni mantener encendido tu ordenador.

Verás la portada **Gestión de Sistemas e Informática de la Administración del Estado — GSI A2**. Utiliza siempre el mismo navegador y perfil en cada dispositivo para recuperar su progreso. Si cambias de dispositivo, traslada una copia siguiendo el paso 10.

### Opcional: usar la copia local preparada en tu ordenador

Si prefieres estudiar desde la copia que ya tienes en `C:\TAI-proyecto`, sigue estos pasos en ese ordenador:

1. Abre el menú Inicio de Windows, escribe **PowerShell** y ábrelo.
2. Copia estas dos líneas, pégalas y pulsa Intro:

```powershell
Set-Location -LiteralPath 'C:\TAI-proyecto'
.\.venv\Scripts\python.exe -m http.server 8765 --bind 127.0.0.1
```

3. Deja esa ventana abierta. Mantiene disponible la aplicación mientras estudias; puedes minimizarla.
4. Abre tu navegador y entra en **http://127.0.0.1:8765/**.
5. Guarda esa dirección en favoritos para volver a ella fácilmente.

Esta dirección local guarda su propio progreso, separado del de la web publicada. Para trasladarlo, exporta una copia en la versión local e impórtala en la publicada siguiendo el paso 10.

Cuando acabes, puedes cerrar el navegador. Para detener la aplicación, vuelve a PowerShell y pulsa **Ctrl+C**. El progreso ya guardado se conserva. Otro día, repite las dos líneas y abre tu favorito.

No abras `index.html` con doble clic: la copia local necesita el servidor HTTP anterior. Para entrar desde otro dispositivo, utiliza el enlace de la web publicada al principio de este paso.

## 2. Saber para qué sirve cada apartado

| Apartado | Para qué lo vas a usar |
| --- | --- |
| Inicio | Ver un resumen de la aplicación y de tu actividad reciente. |
| Temario | Leer los apuntes completos y el resumen de cada tema. |
| Entrenamiento | Hacer test con explicación después de cada respuesta. |
| Examen | Hacer un simulacro con tiempo y corregir al terminar. |
| Práctica escrita | Resolver un supuesto escribiendo tus respuestas. |
| Refuerzo | Volver a trabajar preguntas falladas o que te generan dudas. |
| Estadísticas | Comprobar resultados y decidir qué repasar. |

**Contenido de esta revisión, a 16 de septiembre de 2026:** puedes estudiar y practicar los 57 temas. Hay 1.964 preguntas activas: 959 curadas, 803 generadas cuya revisión ha confirmado el propietario y 202 oficiales del INAP. Todos los temas tienen al menos 20 preguntas revisadas.

## 3. Estudiar tu primer tema

1. Pulsa **Temario** en el menú superior.
2. En **Bloque**, elige **B1**. Es el bloque I.
3. Deja **Cobertura** en **Toda la cobertura** y **Revisión** en **Todos los estados**.
4. Abre el tema **B1-T01**. Ese código significa «bloque 1, tema 1».
5. Lee un apartado de los apuntes, sin intentar terminar todo el tema de una vez.
6. Aparta la vista e intenta explicar con tus palabras lo que acabas de leer.
7. Vuelve al texto para comprobar lo que te faltó. Al terminar tu sesión, utiliza el **Resumen de repaso** del tema.

Puedes usar **Buscar por título o sección** para localizar un asunto concreto. Los enlaces de procedencia permiten consultar el documento del que salen los apuntes; si aparece un aviso de actualización, léelo también.

Los estados de **Cobertura** y **Revisión** describen el material, no cuánto has estudiado tú. La aplicación no marca automáticamente un tema como aprendido por abrirlo. Anota en una libreta o documento el último apartado que has trabajado.

Si aún no hay test para tu tema, escribe tres preguntas sobre el apartado, intenta responderlas sin mirar y contrasta las respuestas con los apuntes. Es un ejercicio personal; no se añade al banco de la aplicación.

## 4. Hacer un test corto del tema

Para probar el proceso completo, utiliza B1-T01, que ya tiene preguntas activas.

1. Entra en **Entrenamiento**.
2. En **Bloque**, selecciona **B1**; después, en **Tema**, selecciona **B1-T01**.
3. Deja **Origen** en **Todos los orígenes** y **Selección** en **Todas · test mixto**. El filtro de tema sigue aplicándose aunque esa selección incluya la palabra «mixto».
4. En **Cantidad**, escribe **5** y pulsa **Iniciar entrenamiento**.
5. Lee la pregunta y pulsa una respuesta. Se corregirá inmediatamente.
6. Lee la explicación, tanto si has acertado como si has fallado.
7. Si acertaste con dudas, pulsa **Dudé**. Si quieres repasar esa pregunta más adelante, utiliza **Añadir a refuerzo** cuando esté disponible. Las falladas se incorporan automáticamente al refuerzo.
8. Pulsa **Siguiente pregunta**. Después de la última, pulsa **Finalizar entrenamiento**.

En Entrenamiento, elegir una opción ya registra la respuesta: decide antes de pulsar. Tu objetivo es entender por qué una respuesta es correcta, no recordar solo su letra, porque el orden puede variar.

## 5. Cambiar el tipo de entrenamiento

Configura los filtros antes de pulsar **Iniciar entrenamiento**:

| Lo que quieres practicar | Qué seleccionar |
| --- | --- |
| Un tema concreto | Su bloque y su tema. |
| Un bloque entero | Su bloque y **Todos los temas**. |
| Mezclar el banco disponible | **Todos los bloques**, **Todos los temas** y **Todas · test mixto**. |
| Preguntas nuevas para ti | En **Selección**, elige **Preguntas no vistas**. |
| Volver sobre errores | En **Selección**, elige **Última respuesta incorrecta**. |

Puedes combinar la selección de errores o no vistas con un bloque o tema. «Última respuesta incorrecta» se fija en tu respuesta más reciente: una pregunta que ya hayas corregido después puede dejar de aparecer ahí.

Si ves **No hay preguntas activas**, comprueba los filtros. Actualmente, seleccionar solo **Oficial** o **Generadas** no aporta preguntas activas. Vuelve a **Todos los orígenes**; si el tema tampoco tiene test, continúa estudiándolo desde Temario.

## 6. Repasar con Refuerzo

Refuerzo reúne preguntas para volver a practicarlas y programa próximas revisiones según tus respuestas y valoraciones.

1. Entra en **Refuerzo**.
2. Mira el resumen y la **Cola de refuerzo** para conocer qué tienes pendiente.
3. Baja al formulario **Iniciar sesión**. Sus filtros son distintos de los que usas arriba para consultar la cola.
4. Para empezar, deja todos los bloques y temas, elige **5** preguntas y conserva **Por prioridad**.
5. Deja **Solo vencidas** marcado para repasar las preguntas cuya fecha de revisión ya ha llegado. Pulsa **Iniciar refuerzo**.
6. Responde y lee la explicación. Después debes valorar la pregunta: **La sabía**, **Dudé** o **No la sabía**. **La sabía** solo está disponible si has acertado.
7. Pulsa **Siguiente pregunta** y, al acabar, **Finalizar refuerzo**.

Si hay preguntas en la cola pero ninguna disponible hoy, pueden estar programadas para otra fecha. Para adelantarlas, desmarca **Solo vencidas** y marca **Incluir programadas futuras**.

Utiliza **Pregunta potencialmente defectuosa** si detectas un posible problema en el enunciado o la respuesta. La aplicación la apartará de tu refuerzo como incidencia; eso no corrige automáticamente el banco original.

## 7. Hacer un simulacro de examen

Empieza cuando dispongas de 90 minutos seguidos. La configuración GSI de la aplicación utiliza 100 preguntas y corrige al finalizar.

1. Entra en **Examen**.
2. En **Modalidad**, elige **Simulacro GSI · 100 preguntas / 90 minutos**.
3. Comprueba la configuración y pulsa **Iniciar examen**.
4. Contesta y avanza con **Pregunta siguiente**. Puedes volver con **Pregunta anterior** o usar los números del examen.
5. Si quieres volver sobre una pregunta, pulsa **Marcar para revisión**. Si prefieres no responderla, utiliza **Dejar en blanco**.
6. Cuando termines, pulsa **Finalizar examen** y confirma con **Finalizar y corregir**.
7. Revisa aciertos, errores, blancos y puntuación neta. Lee las explicaciones de las preguntas que fallaste o que te hicieron dudar.

La puntuación directa de la aplicación es: **aciertos − errores ÷ 3**. Las respuestas en blanco no restan. Por ejemplo, 50 aciertos, 30 errores y 20 blancos dan **40 puntos netos**. Ese resultado no es la nota transformada ni el corte que pueda aplicar un tribunal.

**El reloj no se pausa por cerrar la página o cambiar de apartado.** Si vuelves y aparece un examen pendiente, pulsa **Reanudar**; se mantiene su hora de finalización. Al agotarse el tiempo, se corrige automáticamente.

Para una sesión más breve, puedes elegir **Test configurable · banco revisado** y ajustar cantidad, tiempo y bloques. La modalidad GSI mantiene sus 100 preguntas y 90 minutos.

Para hacer un **examen oficial**:

1. En **Examen**, busca **Exámenes oficiales INAP**.
2. Abre la convocatoria **2022** o **2024**.
3. Pulsa **Preparar este examen**. Comprueba la convocatoria seleccionada.
4. Pulsa **Iniciar examen** cuando tengas 90 minutos disponibles.
5. Contesta y corrige al finalizar. Se conservan las letras originales y se sustituyen las anuladas por reservas.

Para practicar preguntas oficiales sueltas, elige **Solo preguntas oficiales → Mezclar preguntas oficiales** y ajusta la cantidad. Las respuestas siguen la plantilla histórica de su convocatoria: contrasta la normativa y la tecnología con los apuntes actuales.

En cada convocatoria también puedes abrir **Segundo ejercicio: supuestos oficiales (PDF)** y **Criterios de corrección (PDF)**. Resuelve uno de los supuestos por escrito; esos PDF no tienen autocorrección en la aplicación. La convocatoria **2025** está disponible para lectura con su plantilla provisional; no tiene examen interactivo hasta verificar la definitiva.

## 8. Practicar el ejercicio escrito

Esta parte se resuelve redactando; no consiste en elegir opciones de un test.

1. Entra en **Práctica escrita**.
2. Selecciona uno de los cuatro valores de **Simulacro escrito**.
3. Lee los dos supuestos que aparecen y decide cuál vas a resolver.
4. Pulsa **Elegir opción A · iniciar 180 minutos** o el botón equivalente de la opción B.
5. Escribe primero un plan breve en **Esquema común de respuesta**.
6. Desarrolla las cinco respuestas en sus cuadros de texto.
7. Abre **Lista de revisión de la respuesta** y comprueba los puntos antes de entregar.
8. Pulsa **Terminar y autocorregir** y confirma. Las respuestas quedarán guardadas y ya no se podrán editar en esa sesión.
9. Abre **Solucionario y rúbrica comentada del corpus** y compara tu respuesta con la guía.
10. Introduce tu autoevaluación en los cuatro apartados de puntuación.

| Apartado de autoevaluación | Máximo |
| --- | ---: |
| Aplicación de conocimientos técnicos | 30 |
| Capacidad de análisis | 10 |
| Sistemática | 5 |
| Expresión escrita | 5 |
| **Total** | **50** |

La aplicación suma las puntuaciones que tú introduces; no lee tu redacción para ponerte una nota automática.

El texto, el esquema y las puntuaciones se guardan en este navegador. Las casillas de la lista de revisión no se conservan al recargar. El reloj sigue contando aunque cierres la página; al agotarse, la sesión termina y las respuestas quedan en modo lectura.

**Solo se conserva una sesión escrita actual.** Exporta una copia antes de pulsar **Elegir otro simulacro** si quieres conservar la anterior. La nota escrita se consulta dentro de esta práctica; las estadísticas generales corresponden al entrenamiento, los exámenes de test y el refuerzo.

En **Biblioteca de práctica · cuadernos y solucionarios** tienes más ejercicios para trabajar por tu cuenta. Los materiales etiquetados como apoyo A1 sirven de apoyo técnico, pero no equivalen a un simulacro GSI.

## 9. Mirar tus resultados y decidir qué repasar

1. Entra en **Estadísticas**.
2. Elige el **Periodo** que quieras consultar. Para empezar, deja los últimos 30 días.
3. Consulta los resultados por bloque y por tema.
4. Busca los errores recurrentes y elige un asunto para tu próxima sesión.
5. Vuelve a sus apuntes y después realiza un entrenamiento corto o una sesión de refuerzo.

Interpreta el porcentaje junto con el número de preguntas respondidas. Acertar dos de dos todavía aporta poca información sobre un tema. Los temas sin preguntas activas no quedan evaluados por los test.

No necesitas pulsar los botones de borrado para empezar una sesión nueva: sirven para eliminar datos, no para cambiar de ejercicio.

## 10. Guardar una copia de tu progreso

El guardado normal es automático y local: se conserva en ese navegador, perfil y dirección. No se sincroniza con otros dispositivos. Evita estudiar en una ventana privada si quieres conservarlo.

**Para crear una copia:**

1. Baja al final de la página hasta **Tu progreso GSI**. Este apartado aparece debajo de las vistas de estudio.
2. Pulsa **Exportar progreso**.
3. Guarda el archivo descargado en una carpeta que recuerdes, por ejemplo Documentos → Copias GSI. La extensión será `.json`; no necesitas abrirlo ni editarlo.

**Para recuperar una copia:**

1. Abre la aplicación y baja a **Tu progreso GSI**.
2. Si ya tienes progreso en ese navegador, expórtalo primero para conservarlo.
3. Pulsa **Importar copia GSI** y selecciona el archivo guardado.
4. Confirma cuando la aplicación te lo pida y comprueba tus resultados después de la recarga. La copia sustituye los datos guardados que contiene; no combina historiales de varios dispositivos.

Para continuar en otro dispositivo, lleva el archivo JSON a ese dispositivo y usa **Importar copia GSI** en la web publicada. Al cambiar otra vez, exporta allí la copia más reciente: los historiales no se sincronizan ni se combinan automáticamente.

Si antes estudiabas en `http://127.0.0.1:8765/`, exporta allí tu progreso e impórtalo una vez en la web publicada. Son direcciones distintas y el navegador guarda sus datos por separado.

Haz una copia al terminar la semana y antes de borrar datos del navegador, cambiar de ordenador o sustituir una práctica escrita. Usa siempre el mismo favorito, navegador y perfil para encontrar tus datos.

Utiliza **Reiniciar todo el progreso GSI** únicamente si quieres empezar desde cero. Exporta antes si quieres poder recuperar lo que tenías.

## 11. Una sesión sencilla de 45 minutos

Este reparto es un ejemplo que puedes ajustar a tu tiempo y al tamaño del apartado.

| Tiempo | Qué hacer |
| --- | --- |
| 5 minutos | Recordar lo estudiado en la sesión anterior. |
| 20 minutos | Leer y comprender un apartado del Temario. |
| 10 minutos | Hacer entre 5 y 10 preguntas, si el tema tiene test. |
| 10 minutos | Entender los fallos, repasar dudas y anotar dónde continuar. |

Si todavía no tienes preguntas del tema, dedica esos 10 minutos a explicarlo por escrito sin mirar y compruébalo después. Para un simulacro completo, reserva otra sesión de 90 minutos; para una práctica escrita completa, una de 180.

**Para empezar hoy:** abre B1-T01, estudia un apartado, haz cinco preguntas de ese tema y revisa las explicaciones. Después consulta Refuerzo y exporta tu primera copia de progreso.

## 12. Si algo no sale como esperabas

| Qué ocurre | Qué puedes hacer |
| --- | --- |
| La web publicada no abre | Comprueba tu conexión a Internet y abre el enlace del paso 1. |
| La dirección local no abre | Comprueba que PowerShell sigue abierto y que has ejecutado las dos líneas del apartado opcional del paso 1. |
| PowerShell indica que el puerto está en uso | Abre la dirección habitual: puede que la aplicación ya estuviera funcionando. Si no aparece GSI, conserva el mensaje para resolverlo; cambiar de puerto cambia también dónde busca el navegador tu progreso. |
| Aparece un error al abrir `index.html` | Utiliza la dirección HTTP del paso 1. |
| No encuentro un tema | Vacía la búsqueda y deja todos los bloques, toda la cobertura y todos los estados. |
| No hay preguntas para el entrenamiento | Revisa tema, origen y selección. Puede faltar banco activo o no quedar preguntas nuevas/falladas con esos filtros. |
| Hay preguntas en Refuerzo pero no puedo empezar | Comprueba si tienen una revisión futura y revisa los filtros del formulario **Iniciar sesión**. |
| Mi progreso parece vacío | Comprueba navegador, perfil y dirección exacta. Si los cambiaste, vuelve al anterior para exportar la copia e impórtala en el nuevo. |
| Un documento de Drive pide acceso | Ese enlace abre la fuente original y puede requerir tu cuenta autorizada. Los apuntes ya incorporados se leen dentro del Temario. |
| No aparece «python» o falta el archivo indicado | Estas instrucciones usan el entorno preparado en este ordenador. No borres ni reinstales el proyecto; conserva el mensaje exacto para revisar el arranque. |

Puedes imprimir esta guía desde el navegador con **Ctrl+P** y elegir **Guardar como PDF**.
