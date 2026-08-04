# Plan de la Fase 7B.1 — adquisición y verificación de fuentes técnicas

## Alcance aprobado

La Fase 7B.1 incorpora una cadena segura y trazable para seleccionar,
adquirir, verificar y catalogar fuentes técnicas primarias destinadas a los
temas B2-T04, B3-T07 y B4-T08. No redacta contenido doctrinal ni modifica los
Markdown editoriales, por lo que no inicia la Fase 7B.2 ni la Fase 8.

## Modelo y límites

Cada fuente tiene una identidad lógica estable en el manifiesto técnico y una
o más revisiones inmutables. Una revisión conserva fecha de obtención,
checksum, título y actualización observados, ruta local y relación con la
revisión anterior. Actualizar una fuente viva crea una revisión explícita y no
reescribe las existentes.

ECMA-262 se cataloga como una sola fuente normativa HTML; el PDF, si se
conserva, es una representación auxiliar y nunca cuenta como una segunda
fuente. RFC 9110 se usa para HTTP y RFC 9846 para TLS 1.3. RFC 8446 solo puede
figurar como antecedente `obsolete` con `supersededBy` a RFC 9846.

Las copias públicas se alojan bajo `documents/sources/technical/public/`. Las
copias privadas se alojan bajo `documents/sources/technical/private/`, quedan
ignoradas por Git y nunca se exponen como rutas cargables de la aplicación.
Una fuente que requiera inicio de sesión, condiciones, formulario, cookies o
registro se marca `manual-acquisition-required`; el adquiridor no intenta
eludir esa interacción.

## Entregables

- Manifiesto, esquema, matriz de cobertura y validador de fuentes técnicas.
- Adquiridor Python sin dependencias externas ni escrituras implícitas.
- Migración estricta y compatible de `sources.json` y `source.schema.json`.
- Informe `docs/FUENTES_TECNICAS_FASE_7B.md` y pruebas manuales inicialmente
  no ejecutadas.
- Pruebas unitarias de adquisición, revisión, licencia, referencias y
  compatibilidad histórica.

## Validación pública y privada

`scripts/validate_phase7b1.py` debe funcionar en un clon limpio: verifica el
manifiesto, el esquema, los activos públicos, el catálogo y los registros
privados declarados e ignorados, sin requerir archivos privados. El responsable
puede ejecutar `scripts/validate_technical_sources.py --require-private-local`
para comprobar las copias privadas, sus checksums, tipo y tamaño. El informe
documentará ese resultado sin publicar contenido privado.

## Orden de entrega

1. `Fase 7B.1: prepara adquisición de fuentes técnicas`: infraestructura,
   manifiesto inicial, pruebas y validadores.
2. `Fase 7B.1: incorpora fuentes técnicas primarias verificadas`: revisiones
   adquiridas, migración compatible del esquema y catálogo, matriz, informe y
   resultados. No incluye ningún archivo de `private/`.

## Cierre

La fase termina solo si RFC 9846 sustituye a RFC 8446, ECMA-262 usa HTML como
representación normativa, las fuentes vivas conservan revisiones inmutables,
la validación pública no depende de `private/`, la migración histórica es
estricta y los tres Markdown técnicos permanecen sin contenido nuevo.
