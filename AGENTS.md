# Instrucciones del proyecto TAI

## Alcance

Estas instrucciones se aplican a todo el repositorio. El proyecto es una
aplicación personal y estática para preparar las oposiciones de Técnicos
Auxiliares de Informática de la Administración del Estado (TAI).

La prioridad es mantener una solución sencilla, comprensible y fácil de
ampliar por una sola persona. Evita arquitecturas empresariales, abstracciones
prematuras y dependencias que no sean imprescindibles.

## Tecnología

- Usa HTML5 semántico, CSS3 y JavaScript moderno sin frameworks.
- No introduzcas compiladores ni un proceso de build obligatorio.
- Divide JavaScript en módulos con responsabilidades claras; no concentres toda
  la aplicación en un único archivo.
- Mantén los datos y el contenido separados de la lógica de la aplicación.
- Usa archivos JSON como fuente de datos estática.
- Usa `localStorage` únicamente para progreso, estadísticas y preferencias
  personales del navegador.
- No añadas backend, base de datos externa, microservicios ni autenticación.
- No añadas librerías externas salvo que sean estrictamente necesarias y estén
  justificadas.

## Compatibilidad con GitHub Pages

- Toda la aplicación debe funcionar como sitio estático en GitHub Pages.
- Usa rutas relativas compatibles con publicación desde la raíz del repositorio
  o desde una ruta base de proyecto.
- No dependas de rutas absolutas del sistema local.
- No asumas que GitHub Pages puede escribir en los JSON del repositorio.
- Para cargar JSON con `fetch`, prueba mediante un servidor HTTP local; no
  dependas de abrir `index.html` con `file://`.
- No incluyas secretos, tokens, claves ni credenciales en HTML, JavaScript,
  JSON, documentación, logs o historial Git.

## Datos JSON

- Mantén separadas físicamente las preguntas oficiales, las generadas por IA y
  las manuales.
- No presentes contenido generado por IA como fuente oficial.
- Las preguntas de IA no pueden considerarse validadas automáticamente.
- Conserva procedencia, versión, fechas de revisión y estado de validación
  cuando el modelo de datos lo permita.
- Antes de consumir o importar datos, valida como mínimo:
  - JSON bien formado.
  - Identificadores únicos.
  - Referencias válidas a bloques y temas.
  - Valores enumerados permitidos.
  - Cuatro opciones y una única respuesta correcta en preguntas de test.
  - Fuente presente en preguntas oficiales.
  - Feedback presente en preguntas activas.
  - Fechas con formato válido.
  - Exclusión de preguntas IA no validadas en modo examen.
- No inventes temario, preguntas, respuestas, fuentes ni metadatos cuando falten
  documentos o datos. Registra claramente lo que quede pendiente.

## Documentos y conversión

- Conserva siempre los documentos originales.
- Guarda originales y Markdown resultantes en carpetas separadas.
- Conserva el nombre y la estructura relativa del archivo; cambia únicamente la
  extensión al generar Markdown.
- No sobrescribas un original ni una salida diferente ya existente.
- Registra cada intento de conversión y su resultado.
- Usa primero una conversión normal con MarkItDown.
- Comprueba que la salida exista, no esté vacía y contenga una cantidad
  razonable de texto.
- Clasifica una salida vacía o mínima como posible documento escaneado; no
  ejecutes OCR automáticamente.

## Seguridad de OCR

Antes de usar OCR:

1. Ejecuta `markitdown --list-plugins` y registra el resultado.
2. Confirma que el complemento OCR o el servicio documental requerido está
   instalado.
3. Confirma que el cliente o dependencia de API requerido está instalado.
4. Comprueba únicamente la existencia de las variables de entorno o del
   mecanismo de autenticación exigido por la herramienta.
5. Verifica la configuración real contra la versión instalada de la herramienta.

Nunca:

- Muestres, imprimas o registres valores de claves o tokens.
- Pidas al usuario que pegue secretos en el chat, el código o un archivo del
  repositorio.
- Copies credenciales a logs.
- Incluyas secretos en el repositorio.
- Actives OCR o un servicio externo sin verificar antes complementos,
  dependencias, endpoint y autenticación.

Si falta configuración OCR, detén solo los documentos afectados. Continúa con
los demás y registra por documento el complemento, dependencia o configuración
que falta y un comando de instalación accionable.

## Desarrollo por fases

Trabaja en este orden:

1. Diagnóstico y conversión segura de documentos.
2. Estructura de datos, esquemas y validadores.
3. Aplicación mínima: carga de datos, temario, entrenamiento, feedback,
   estadísticas básicas y persistencia local.
4. Modo examen.
5. Refuerzo y repetición de errores.
6. Documentación, publicación y primera versión estable.

No avances de fase mientras existan errores críticos en la fase actual. No
implementes funcionalidades de fases posteriores para anticipar necesidades no
validadas.

## Flujo de trabajo

Antes de modificar archivos:

1. Inspecciona la estructura y las instrucciones aplicables.
2. Revisa el estado de Git cuando exista un repositorio.
3. Detecta nombres duplicados, rutas de salida existentes y posibles conflictos.
4. Preserva los cambios del usuario y evita sobrescrituras destructivas.
5. Explica brevemente el alcance del cambio.

Durante la implementación:

- Haz cambios pequeños, trazables y limitados a la fase activa.
- Usa mensajes de error concretos y accionables.
- Mantén HTML accesible, CSS organizado mediante variables y JavaScript modular.
- Preserva navegación por teclado, contraste suficiente y diseño responsive.
- No añadas animaciones ni complejidad visual innecesarias.

## Validación obligatoria

Valida antes de declarar una fase completada y antes de avanzar a la siguiente.
Ejecuta las comprobaciones pertinentes al cambio, incluyendo cuando corresponda:

- Sintaxis y estructura de JSON.
- Esquemas y validadores de datos.
- Identificadores y referencias únicas.
- Rutas relativas y carga mediante servidor HTTP.
- Separación de preguntas oficiales e IA.
- Exclusión de preguntas IA no validadas.
- Cálculo de puntuación y penalización.
- Persistencia, exportación e importación de progreso.
- Comportamiento de refuerzo.
- Funcionamiento en móvil y escritorio.
- Ausencia de secretos y credenciales.
- Integridad de originales y salidas de conversión.

No ocultes pruebas fallidas. Si una comprobación no puede ejecutarse, indica el
motivo, el alcance no verificado y cómo reproducirla.

## Entrega de cada fase

Resume siempre:

- Fase completada.
- Archivos creados.
- Archivos modificados.
- Documentos convertidos y pendientes.
- Errores o limitaciones encontrados.
- Comandos y validaciones ejecutados.
- Cómo probar el resultado.
- Siguiente fase recomendada.

