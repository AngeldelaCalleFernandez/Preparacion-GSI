# Bloque I — mejora pedagógica y visual

Fecha de revisión: 22/09/2026  
Rama: `gsi-only-final`  
Alcance: `B1-T01` a `B1-T10`

## Resultado

Se ha completado la intervención editorial del Bloque I sin reducir el temario ni modificar preguntas. Se conserva íntegro el corpus canónico de apuntes y resúmenes; las mejoras se mantienen en una capa editorial declarativa que el generador integra tanto en Markdown como en HTML.

La revisión completa de los diez temas determinó que la cobertura era suficiente. Las necesidades principales eran separar conceptos próximos, ofrecer rutas de lectura en los temas más densos y retirar unas pocas frases internas sobre el proceso de preparación que interrumpían el estudio.

## Fuente canónica y regeneración

- Los snapshots originales de los documentos de estudio y repaso permanecen en `documents/originals/gsi/` y no se modifican.
- `content/topics/*.md` y `content/generated/*.html` son derivados de `scripts/build_gsi_content.py`.
- La capa editorial canónica está en `content/enhancements/b1-visuals.json`.
- Los SVG originales están en `assets/diagrams/b1/`.
- El generador comprueba que todas las sustituciones y ubicaciones declaradas existen; falla si un encabezado o fragmento deja de coincidir.
- El generador ya no reescribe bancos de preguntas por diferencias de versión: esos ficheros tienen un ciclo de publicación independiente.

## Clasificación de los temas

| Tema | Estado | Diagnóstico y acción |
| --- | --- | --- |
| B1-T01 | CONSERVAR ESTRUCTURA | Secuencia constitucional clara. Se añaden dos comparativas de alta rentabilidad para test. |
| B1-T02 | REESCRITURA SELECTIVA | Se corrige una enumeración incrustada y se añade un mapa de funciones institucionales. |
| B1-T03 | CONSERVAR ESTRUCTURA | Orden lógico. Se añade una línea temporal de investidura y mayorías de control. |
| B1-T04 | REESCRITURA SELECTIVA | Se sustituye una nota editorial interna y se visualiza el sistema de transparencia y acceso. |
| B1-T05 | REESCRITURA SELECTIVA | Se cambia una sección de «depuración» por un mapa normativo útil para estudiar. |
| B1-T06 | REESCRITURA SELECTIVA | Se conserva todo el desarrollo técnico y se amplía eIDAS 2 con cartera, atributos, fuente auténtica, divulgación selectiva y trampas de test. |
| B1-T07 | CONSERVAR ESTRUCTURA | Cobertura completa. Se añade un mapa de actores y responsabilidades RGPD. |
| B1-T08 | REESTRUCTURAR | Se incorpora una ruta inicial por LPAC/LRJSP/TREBEP y un flujo del procedimiento; se conserva todo el detalle. |
| B1-T09 | REESTRUCTURAR | Se organiza visualmente como procedimiento + seguridad + interoperabilidad y se retira una nota editorial interna. |
| B1-T10 | REESCRITURA SELECTIVA | Se limpia una referencia interna obsoleta y se integra el mapa de servicios comunes. |

## Gráficos creados

| Tema | Gráfico | Concepto | Archivo | Motivo |
| --- | --- | --- | --- | --- |
| B1-T01 | Título I: derechos y nivel de protección | Categorías y garantías del Título I | `assets/diagrams/b1/b1-t01-garantias-titulo-i.svg` | Evitar atribuir amparo a todo el Título I. |
| B1-T01 | Suspensión general e individual | Artículos 55.1 y 55.2 CE | `assets/diagrams/b1/b1-t01-suspension-derechos.svg` | Separar supuestos, listas y controles. |
| B1-T02 | Órganos y controles constitucionales | Cortes, TC y Defensor del Pueblo | `assets/diagrams/b1/b1-t02-organos-control-constitucional.svg` | Distinguir control parlamentario, constitucional y supervisión. |
| B1-T03 | Investidura y control | Investidura, confianza y censura | `assets/diagrams/b1/b1-t03-investidura-y-control.svg` | Memorizar secuencia, plazos y mayorías. |
| B1-T04 | Transparencia y acceso | Publicidad activa, acceso y buen gobierno | `assets/diagrams/b1/b1-t04-transparencia-acceso.svg` | Separar límite de inadmisión y visualizar el procedimiento. |
| B1-T05 | Mapa normativo | Igualdad, no discriminación, discapacidad y dependencia | `assets/diagrams/b1/b1-t05-igualdad-discapacidad-dependencia.svg` | Asociar norma y materia y evitar falsos sinónimos. |
| B1-T06 | Identidad y firma | Identificación, autenticación, autorización y niveles de firma | `assets/diagrams/b1/b1-t06-identidad-firma.svg` | Diferenciar cuatro funciones técnicas y jurídicas. |
| B1-T06 | Evolución eIDAS | 910/2014, reforma 2024/1183, marco europeo y EUDI Wallet | `assets/diagrams/b1/b1-t06-evolucion-eidas.svg` | Fijar que la reforma modifica y amplía el reglamento original, pero no lo sustituye por completo. |
| B1-T06 | Flujo de atributos | Fuente auténtica, declaración de atributos, wallet, decisión y verificación | `assets/diagrams/b1/b1-t06-eudi-wallet-atributos.svg` | Explicar control del usuario, minimización y divulgación selectiva con el ejemplo «Mayor de 18: SÍ». |
| B1-T07 | Actores RGPD | Interesado, responsable, encargado, DPD y autoridad | `assets/diagrams/b1/b1-t07-actores-rgpd.svg` | Memorizar quién decide, trata, asesora y supervisa. |
| B1-T08 | Tres normas | LPAC, LRJSP y TREBEP | `assets/diagrams/b1/b1-t08-tres-normas.svg` | Dar una ruta de entrada al tema más extenso. |
| B1-T08 | Fases del procedimiento | Iniciación a recurso | `assets/diagrams/b1/b1-t08-fases-procedimiento.svg` | Situar trámites que suelen aparecer desordenados en test. |
| B1-T09 | Procedimiento electrónico | Registro, expediente, notificación y archivo | `assets/diagrams/b1/b1-t09-procedimiento-electronico.svg` | Integrar flujo jurídico y capas técnicas transversales. |
| B1-T09 | Marcos ENS/ENI | ENS, ENI, NTI y CCN-STIC | `assets/diagrams/b1/b1-t09-ens-eni-nti.svg` | Evitar asociaciones cruzadas entre seguridad e interoperabilidad. |
| B1-T10 | Servicios comunes | Servicios en un trámite público | `assets/diagrams/b1/b1-t10-servicios-comunes.svg` | Asociar cada plataforma con la necesidad que resuelve. |

## Comparación antes / después

| Tema | Acción | Motivo | Resultado |
| --- | --- | --- | --- |
| B1-T02 | Reescritura puntual | Enumeración incrustada difícil de leer | Funciones del Congreso expresadas en una frase precisa. |
| B1-T04 | Reescritura puntual | Nota sobre una fuente interna, sin valor de estudio | Explicación directa de las tres piezas en contexto digital. |
| B1-T05 | Reescritura puntual | Encabezado de «depuración» y comentario editorial | Mapa normativo centrado en el epígrafe oficial. |
| B1-T06 | Ampliación selectiva | El tratamiento de eIDAS 2 y la EUDI Wallet era demasiado breve para test | Explicación jerarquizada, separación de siete conceptos, ejemplo de divulgación selectiva y tabla de ocho trampas. |
| B1-T08 | Reestructuración de entrada | Tres bloques extensos y heterogéneos | Ruta «cómo se tramita / quién actúa / con qué personal». |
| B1-T09 | Reestructuración de entrada | Alta densidad jurídica y técnica | Lectura unificada: procedimiento, ENS y ENI. |
| B1-T10 | Reescritura puntual | Referencia a una previsión descartada | Estado de Cl@ve explicado sin ruido editorial. |

No se han eliminado artículos, plazos, competencias, excepciones, clasificaciones, referencias o claves de test. Los temas `B1-T01`, `B1-T03` y `B1-T07` conservan su estructura; `B1-T06` mantiene íntegro el contenido previo y suma una ampliación localizada; en `B1-T08` y `B1-T09` la reorganización se limita a la capa de entrada y navegación, sin mover ni resumir agresivamente el cuerpo normativo.

## Accesibilidad y comportamiento responsive

- Cada SVG contiene `<title>` y `<desc>` propios.
- Cada inserción HTML incluye título visible, `alt` descriptivo, explicación y bloque «Qué debes recordar».
- Las etiquetas y formas mantienen significado además del color.
- En escritorio el SVG se adapta al ancho del tema.
- En móvil el documento no genera scroll horizontal. El diagrama conserva un ancho legible dentro de un contenedor desplazable rotulado; el pie y la clave de memoria se adaptan al viewport.
- La prueba `tests/b1-visual-smoke.mjs` abre los diez temas en 1365×900 y 390×844, comprueba carga de imágenes, número de visuales, texto alternativo, recortes y overflow, y genera capturas en `tmp/gsi-b1/`.

## Precisión jurídica y técnica

Las simplificaciones se contrastaron con las fuentes primarias ya utilizadas por el proyecto y, de nuevo, con:

- [Constitución Española consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229), en especial artículos 53 y 55.
- [Ley 19/2013 de transparencia](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), artículos 20 y 24.
- [Ley 39/2015 del procedimiento administrativo común](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565), ordenación e instrucción.
- [Real Decreto 311/2022, ENS](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191).
- [Real Decreto 4/2010, ENI](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331).
- [Reglamento (UE) 2016/679, RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj).
- [Reglamento (UE) n.º 910/2014 consolidado tras la reforma](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18).
- [Reglamento (UE) 2024/1183, que modifica el Reglamento 910/2014 para establecer el Marco Europeo de Identidad Digital](https://eur-lex.europa.eu/eli/reg/2024/1183/oj).

En `B1-T06` se contrastaron expresamente la definición y funciones de la EUDI Wallet, el control del usuario, la voluntariedad, la divulgación selectiva, las definiciones de atributo, declaración electrónica de atributos, declaración cualificada y fuente auténtica. La explicación evita convertir el ejemplo de mayoría de edad en un procedimiento técnico obligatorio y deja fuera del nivel exigible los actos de ejecución y los detalles criptográficos.

Los diagramas son originales del proyecto y no incorporan imágenes, plantillas ni composiciones de terceros.

## Archivos

### Creados

- `content/enhancements/b1-visuals.json`.
- 15 SVG en `assets/diagrams/b1/`.
- `tests/b1-visual-smoke.mjs`.
- `logs/b1-visual-smoke.json`.
- `docs/BLOQUE_I_MEJORA_VISUAL.md`.

### Modificados

- `scripts/build_gsi_content.py`.
- `assets/css/styles.css`.
- `content/topics/B1-T01.md` a `content/topics/B1-T10.md`.
- `content/generated/B1-T01.html` a `content/generated/B1-T10.html`.
- `data/topic-content.json` (checksums de los diez HTML derivados).
- Logs mantenidos por la suite de validación.

### Documentos convertidos y pendientes

No se han convertido documentos en esta intervención. Los originales y conversiones existentes se preservan. No hay documentos pendientes por este trabajo y no se ha usado OCR.

## Errores corregidos

1. Notas editoriales internas visibles en T04, T05, T08, T09 y T10.
2. Enumeración incrustada difícil de leer en T02.
3. Falta de separación visual entre conceptos de test muy próximos.
4. Contraste de rótulos SVG detectado durante la revisión de capturas.
5. Texto interno demasiado pequeño en móvil, resuelto con contenedor desplazable local y rotulado.
6. Riesgo del generador de vaciar bancos de preguntas con versión editorial distinta.
7. Tratamiento insuficiente de eIDAS 2 en B1-T06 y riesgo de confundir wallet, DNIe, certificado, firma, autenticación y declaración de atributos.

## Validaciones ejecutadas

| Comprobación | Resultado |
| --- | --- |
| `python -m py_compile scripts/build_gsi_content.py` | Correcto |
| Regeneración `scripts/build_gsi_content.py` | 57 temas; distribución 10/16/15/16 |
| Bancos tras regeneración | 202 oficiales + 803 IA + 959 manuales = 1.964; sin modificaciones de contenido |
| `tests/b1-visual-smoke.mjs` | 20/20 combinaciones tema/viewport correctas; 15 SVG cargados; sin overflow de página |
| `git diff --check` | Correcto |
| `.\.venv\Scripts\python.exe scripts/run_gsi_suite.py` | Código 0; `technical_pass = true`; `release_ready = true` |

## Cómo probar

1. Regenerar: `.\.venv\Scripts\python.exe scripts/build_gsi_content.py`.
2. Ejecutar la suite: `.\.venv\Scripts\python.exe scripts/run_gsi_suite.py`.
3. Ejecutar la prueba visual con el runtime Playwright disponible en el entorno: `node tests/b1-visual-smoke.mjs` definiendo `PLAYWRIGHT_MODULE` cuando no haya una instalación local.
4. Servir el repositorio por HTTP y abrir `index.html#temario/B1-T01` hasta `B1-T10`.

## Problemas pendientes y siguiente fase recomendada

No quedan bloqueos funcionales de esta intervención. La automatización de navegador integrada en la aplicación no pudo iniciarse por un fallo del servicio sandbox del entorno, por lo que la comprobación se realizó con Chrome headless y capturas reproducibles mediante Playwright. La siguiente actuación recomendada es revisión humana de contenido por una persona preparadora o especialista jurídico, centrada en utilidad mnemotécnica y no en ampliar temario.
