# Plan aprobado de la Fase 7B.2 — pilotos técnicos trazables

## Alcance y decisiones

La fase redacta exclusivamente los pilotos parciales B2-T04, B3-T07 y
B4-T08 a partir de las fuentes primarias verificadas en Fase 7B.1. No añade
fuentes, no cambia copias ni checksums, no genera preguntas y no inicia 7B.3
ni Fase 8.

Los localizadores admitidos son únicamente los declarados en el manifiesto y
la matriz técnica. Cuando esos localizadores no bastan para desarrollar una
parte del epígrafe oficial, se conserva una sección `pendiente`. POSIX no se
usa como respaldo doctrinal porque su adquisición manual continúa pendiente.
Los materiales de examen pueden orientar el orden pedagógico, pero no se
catalogan ni se citan como doctrina.

## Tareas y criterios

### 1. Redacción editorial

- Archivos: `content/topics/B2-T04.md`, `content/topics/B3-T07.md` y
  `content/topics/B4-T08.md`.
- Dependencias: `data/syllabus.json`, `data/sources.json`, manifiesto y matriz
  técnica de 7B.1, y las copias verificadas disponibles.
- Validación: front matter estricto, H1 oficial, secciones H2/H3 estables,
  directivas admitidas, citas con localizador y ejemplos originales.
- Finalización: los tres temas quedan `partial` y `needs-review`, con varias
  secciones sustantivas y lagunas finales visibles.

### 2. Constructor y artefactos

- Archivos: `scripts/topic_content_lib.py`, `scripts/build_topic_content.py`,
  tres HTML derivados, `data/topic-content.json` y
  `docs/COBERTURA_TEMARIO_FASE_7.md`.
- Dependencias: contrato editorial de 7A y catálogo técnico de 7B.1.
- Validación: dos construcciones consecutivas producen los mismos bytes; el
  código queda escapado; las fuentes técnicas usan su URL canónica y nunca una
  ruta privada.
- Finalización: 4 temas `partial`, 29 `pending`, ninguno `complete` ni
  `reviewed`, con índice e informe coherentes.

### 3. Validación y regresión

- Archivos: `scripts/validate_phase7.py`, `scripts/validate_phase7b1.py`,
  `scripts/validate_phase7b2.py`, `tests/phase7b2-runner.html` y
  `tests/phase7b2-tests.js`.
- Dependencias: validadores de fases 2 a 7B.1 y módulos de rutas/contenido.
- Validación: contrato editorial, localizadores permitidos, determinismo,
  seguridad HTML, invariabilidad de fuentes, checksums, preguntas y datos
  protegidos, además de regresiones de rutas anteriores.
- Finalización: todos los validadores y el runner terminan sin fallos.

### 4. Revisión humana y pruebas manuales

- Archivos: `docs/REVISION_EDITORIAL_FASE_7B_2.md` y
  `docs/PRUEBAS_MANUALES_FASE_7B_2.md`.
- Dependencias: artefactos ya generados y aplicación servida por HTTP.
- Validación: todos los controles doctrinales y casos manuales comienzan
  pendientes o `NO EJECUTADA`; solo se actualizan tras ejecución humana real.
- Finalización: quedan instrucciones reproducibles para navegador, tamaños,
  accesibilidad, rutas, fuentes, runner y validadores.

## Orden de commits

1. `Fase 7B.2: redacta pilotos técnicos trazables`.
2. `Fase 7B.2: corrige y valida pilotos técnicos`.

La revisión doctrinal humana se mantiene separada y ningún tema puede pasar a
`reviewed` o `complete` en esta fase.
