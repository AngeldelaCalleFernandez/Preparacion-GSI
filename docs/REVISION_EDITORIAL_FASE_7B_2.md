# Revisión editorial humana — Fase 7B.2

La compilación y la trazabilidad técnica no equivalen a aprobación doctrinal.
Todos los controles siguientes comienzan como **PENDIENTE** y deben ser
resueltos por una persona antes de cambiar `needs-review`.

## B2-T04 — Sistemas operativos

- [ ] PENDIENTE — Coincidencia con el epígrafe oficial.
- [ ] PENDIENTE — Fuente primaria suficiente para cada sección sustantiva.
- [ ] PENDIENTE — Localizadores comprobados en las copias privadas sin publicar su ruta.
- [ ] PENDIENTE — Paráfrasis fiel de Windows HAL y del índice Linux.
- [ ] PENDIENTE — Ausencia de generalizaciones de Linux a Unix o de Windows a todas sus versiones.
- [ ] PENDIENTE — Lagunas de POSIX, procesos, móviles, Android e iOS visibles.
- [ ] PENDIENTE — Terminología consistente y utilidad pedagógica.
- [ ] PENDIENTE — Ningún fragmento oficial inventado ni contenido privado reproducido.
- [ ] PENDIENTE — Estados `partial` y `needs-review`.

## B3-T07 — Aplicaciones y estándares web

- [ ] PENDIENTE — Coincidencia con el epígrafe oficial.
- [ ] PENDIENTE — Fuentes WHATWG, W3C y ECMA para cada sección sustantiva.
- [ ] PENDIENTE — Localizadores comprobados y paráfrasis fieles.
- [ ] PENDIENTE — Diferencia clara entre HTML, XML y ECMAScript.
- [ ] PENDIENTE — Ejemplos originales, breves, diferenciados y no ejecutables.
- [ ] PENDIENTE — Ausencia de afirmaciones no respaldadas sobre servidor, CSS, frameworks o navegadores.
- [ ] PENDIENTE — Lagunas visibles y terminología consistente.
- [ ] PENDIENTE — Ningún fragmento oficial inventado.
- [ ] PENDIENTE — Estados `partial` y `needs-review`.

## B4-T08 — HTTP, HTTPS y TLS

- [ ] PENDIENTE — Coincidencia con el epígrafe oficial.
- [ ] PENDIENTE — RFC 9110 y RFC 9846 respaldan cada sección sustantiva.
- [ ] PENDIENTE — Localizadores comprobados y paráfrasis fieles.
- [ ] PENDIENTE — RFC 8446 aparece solo como antecedente sustituido, nunca como fuente vigente.
- [ ] PENDIENTE — Separación clara de HTTP, HTTPS y TLS.
- [ ] PENDIENTE — Ausencia de doctrina no respaldada sobre DNS, correo, PKI o certificados.
- [ ] PENDIENTE — Lagunas visibles y terminología consistente.
- [ ] PENDIENTE — Ningún fragmento oficial inventado.
- [ ] PENDIENTE — Estados `partial` y `needs-review`.

## Decisión de estado

Codex no aprueba exactitud doctrinal completa, claridad pedagógica definitiva,
suficiencia para estudiar ni ausencia absoluta de errores conceptuales. Hasta
que esta lista se revise en un commit editorial posterior, los tres pilotos
permanecen `needs-review`.

## Revisión de solo lectura realizada

Se efectuó una revisión asistida de solo lectura, sin modificar los temas ni
aprobar doctrinalmente su contenido.

### Resultado general

- No se encontraron hallazgos críticos.
- B2-T04, B3-T07 y B4-T08 permanecen `partial`.
- Los tres permanecen `needs-review`.
- Las lagunas documentales continúan visibles.
- No se publican rutas ni contenidos privados.
- La revisión realizada no equivale a aprobación doctrinal.

### B2-T04

- El alcance está correctamente limitado.
- No se generaliza Linux a Unix.
- La HAL no se presenta como toda la arquitectura de Windows.
- POSIX, procesos, móviles, Android e iOS continúan pendientes.
- Queda pendiente contrastar literalmente la expresión «oculta detalles de
  bajo nivel» con la copia local exacta de Microsoft.
- Queda pendiente contrastar personalmente las paráfrasis dependientes de las
  copias privadas de Windows y Linux.

### B3-T07

- HTML, XML y ECMAScript aparecen diferenciados.
- Los ejemplos son breves, originales, didácticos y no ejecutables.
- No se atribuye cobertura completa de CSS, servidor, frameworks,
  navegadores o multiplataforma.
- La expresión «estructura documental y comportamiento programado» se
  presenta como separación conceptual, no como arquitectura completa.
- Queda pendiente la valoración humana definitiva de claridad y utilidad para
  estudiar.

### B4-T08

- HTTP, HTTPS y TLS aparecen diferenciados.
- RFC 9110 respalda HTTP.
- RFC 9846 respalda TLS 1.3.
- RFC 8446 aparece únicamente como antecedente sustituido.
- DNS, correo, PKI, certificados, OSI/TCP-IP y versiones anteriores continúan
  pendientes.
- Queda pendiente confirmar humanamente que la formulación «HTTP protegido
  mediante TLS» tiene precisión y claridad suficientes para el nivel del
  temario.

### Decisión

La revisión de solo lectura aporta observaciones editoriales, pero no permite
marcar controles doctrinales como completados.

Todos los controles permanecen `PENDIENTE` hasta una revisión editorial
posterior específicamente destinada a aprobarlos.
