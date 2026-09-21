# GSI A2 — BLOQUE III

## APUNTES COMPLETOS V2.1 REVISADOS — Desarrollo de sistemas

**Edición de estudio:** agosto de 2026.

**Procedencia y derechos:** PreparaTIC/A1 se cita como fuente secundaria consultada; la redacción y organización de este documento son propias y las fuentes primarias prevalecen. Este proyecto no está afiliado, patrocinado ni respaldado por PreparaTIC. Véanse los [avisos de terceros](../../../../THIRD_PARTY_NOTICES.md).

**Método:** BOE vigente → fuente A1 útil → poda de contenido A1 fuera de alcance → actualización → huecos → tema completo → test → supuesto → resumen.

Revisión V2.1: se ha contrastado cada epígrafe con el programa oficial vigente y se han ampliado los puntos que faltaban en V2: planificación de proyectos; derivación de sistemas existentes; diseño lógico/físico y concurrencia; estrategias algorítmicas; pruebas de hardware, procedimientos y datos; estrategias de sustitución; productos/herramientas, persistencia y seguridad en Java/.NET; y calidad/accesibilidad con referencias vigentes.

## 0. Control de fuentes

| Tema | Base A1 | Criterio V2.1 |
| --- | --- | --- |
| III.01 | 086 | Conservar modelos de ciclo de vida; actualizar enfoque DevOps/iterativo sin confundir ciclo con metodología. |
| III.02 | 088 + 037; 095 solo apoyo | Gestión, planificación y metodologías. El BOE vigente no exige Métrica expresamente. |
| III.03 | 088 + 094 + 091 | Requisitos: elicitación, análisis, especificación, trazabilidad y gestión del cambio. |
| III.04 | 063 + 064 | Modelado de datos, diseño relacional, normalización y concurrencia. |
| III.05 | 070 + 071 + 076 | Completar desde cero TAD, estructuras, ficheros y algoritmos; IA solo a nivel básico pedido. |
| III.06 | 097 + 102 | Construcción, código, despliegue, CI/CD/DevOps, documentación y formación. Actualización fuerte. |
| III.07 | 096 | Fuente amplia: aprovechar niveles, técnicas, principios ISTQB, estrategia y aceptación. |
| III.08 | 101 + 100 | Instalación, cambio, postimplantación y mantenimiento con enfoque operativo. |
| III.09 | 089 + 090 + 093 (+092) | OO, UP, UML y patrones. Separar notación de proceso. |
| III.10 | 067 | Fuente 2026; usar Java moderno y Jakarta EE 11. |
| III.11 | 066 | Actualizar desde material 2023 a .NET 10 LTS; mantener CLR/C#/ASP.NET/EF/LINQ. |
| III.12 | 065 (+058) | Web frontend/backend, servicios, seguridad e internacionalización. |
| III.13 | 103 | Fuente correcta actual. No usar A1 050 actual. Integrar ISO/IEC 25010:2023. |
| III.14 | 044 + 094 + 133 | Accesibilidad, usabilidad, UX y comunicación digital; separar norma vigente de estándar más reciente. |
| III.15 | 075 | Data mining, OLAP, Big Data, Hadoop y NoSQL; completar arquitecturas actuales sin borrar Hadoop. |

# III.01 — Ciclo de vida de los sistemas de información

Cobertura oficial que debe quedar dominada: Concepto de ciclo de vida. Fases. Modelos de ciclo de vida.

## 1. Concepto

El ciclo de vida comprende las etapas por las que pasa un sistema desde la identificación de una necesidad hasta su retirada. La fuente A1 086 diferencia correctamente **ciclo de vida** y **ciclo de desarrollo**: el primero incluye operación/mantenimiento y retirada. El modelo dice qué etapas y relaciones existen; una metodología concreta define cómo trabajar.

## 2. Actividades típicas

* viabilidad y planificación;
* requisitos;
* análisis y diseño;
* construcción;
* pruebas;
* despliegue;
* operación y mantenimiento;
* retirada/migración.

En modelos iterativos estas actividades se repiten y solapan; no desaparecen.

## 3. Modelos clásicos

### Cascada

Fases secuenciales. Facilita hitos/documentación, pero responde peor a requisitos cambiantes si se aplica rígidamente.

### Modelo en V

Relaciona fases de especificación/diseño con niveles de verificación y validación. Útil para trazabilidad entre requisitos y pruebas.

### Prototipos

Reducen incertidumbre. Pueden ser desechables o evolutivos. Riesgo: convertir prototipo en producción sin arquitectura/calidad suficiente.

### Incremental e iterativo

Entrega partes útiles y refina el producto mediante ciclos. Incremental añade capacidad; iterativo mejora/revisa solución.

### Espiral

Dirigido por riesgos: objetivos → identificación/resolución de riesgos → desarrollo/validación → planificación siguiente iteración.

## 4. Enfoques modernos

Agile y DevOps no eliminan el ciclo de vida: acortan ciclos, aumentan feedback y automatizan integración, pruebas, entrega y operación. El producto puede mantener un flujo continuo de cambios con controles de calidad y seguridad.

## 5. Retirada

Planificar migración de datos, conservación legal, exportación, destrucción segura, cierre de integraciones, revocación de secretos/cuentas, comunicación y contingencia. Retirar no es “apagar servidor”.

## 5.1 Entregables, gates y trazabilidad del ciclo

**Base A1 utilizada:** A1 086. La fuente es útil para distinguir modelos y actividades. **Complemento GSI:** se explicita qué se controla en cada transición porque es una pregunta muy aprovechable en supuesto.

Un ciclo bien gobernado no es una lista de fases: cada transición debe tener **entradas, salidas y criterios de paso**. En viabilidad se espera una justificación de alternativas; en requisitos, una especificación priorizada y trazable; en diseño, arquitectura y modelos; en construcción, artefactos reproducibles; en pruebas, evidencia de verificación/validación; en despliegue, plan de implantación y reversión; en operación, niveles de servicio y procedimientos.

La **trazabilidad** enlaza necesidad → requisito → componente de diseño → implementación → prueba → versión desplegada. Esta cadena permite estimar impacto de un cambio y demostrar cobertura ante auditoría o aceptación.

## 5.2 Elección del modelo

| Contexto | Enfoque razonable | Riesgo a vigilar |
| --- | --- | --- |
| requisitos muy estables y fuerte regulación | predictivo o híbrido con gates formales | feedback tardío |
| alta incertidumbre funcional | iterativo/incremental y prototipado | deriva de alcance |
| riesgo técnico elevado | espiral/prototipos técnicos | coste de exploración |
| producto digital evolutivo | ágil + CI/CD + operación continua | deuda técnica y gobernanza |

**Trampa de test:** “ágil” no constituye una fase del ciclo de vida ni elimina análisis, diseño, pruebas o mantenimiento.

## 6. Test

* Ciclo de vida ≠ metodología.
* Verificación: ¿construimos correctamente? Validación: ¿construimos lo correcto?
* Incremental ≠ iterativo.
* Espiral = fuerte orientación a riesgos.
* Operación/mantenimiento forman parte del ciclo.

## 7. Supuesto

Elige modelo según incertidumbre, criticidad, regulación, tamaño, dependencia externa y frecuencia de entrega. Explica hitos, artefactos, feedback, pruebas y transición a operación.

## 8. Resumen

Domina diferencias entre cascada, V, prototipo, incremental, iterativo y espiral, y entiende que Agile/DevOps comprimen y automatizan actividades del mismo ciclo.

# III.02 — Gestión y planificación del proceso de desarrollo. Metodologías

Cobertura oficial que debe quedar dominada: Gestión y planificación del proceso de desarrollo: técnicas y prácticas de gestión y planificación de proyectos. Metodologías de desarrollo.

## 1. Gestión

Gestionar desarrollo significa definir alcance, entregables, responsables, calendario, recursos, riesgos, calidad, comunicaciones y cambios. Hay que controlar progreso mediante evidencia, no solo porcentaje subjetivo.

## 2. Planificación

Descomponer trabajo en WBS/backlog; estimar esfuerzo/duración; dependencias; recursos; hitos; riesgos; criterios de aceptación. Técnicas: análoga, paramétrica, tres puntos y bottom-up.

## 3. Tradicional vs ágil

| Predictivo | Ágil/adaptativo |
| --- | --- |
| alcance más definido al inicio | alcance evoluciona en backlog |
| plan detallado por fases | planificación progresiva |
| cambio mediante control formal | cambio esperado y priorizado |
| entregas más grandes | entregas frecuentes |

## 4. Scrum

Roles/accountabilities: Product Owner, Scrum Master, Developers. Eventos: Sprint, Planning, Daily, Review, Retrospective. Artefactos: Product Backlog, Sprint Backlog, Increment con compromisos asociados. Scrum no prescribe arquitectura, lenguaje ni herramientas.

## 5. Kanban

Visualiza flujo, limita WIP, gestiona flujo y mejora continuamente. Métricas: lead time, cycle time, throughput, WIP. No requiere sprints.

## 6. XP

Prácticas: TDD, programación en pareja, integración continua, refactorización, diseño simple, propiedad colectiva, feedback frecuente.

## 7. Riesgos y calidad

Registro de riesgos con probabilidad/impacto, propietario, respuesta y disparadores. Calidad se planifica con Definition of Done, estándares, revisión, automatización y criterios de aceptación.

## 7.1 EDT/WBS, cronograma y dependencias

**Base A1:** 088 + 037; el 095 se conserva solo como apoyo histórico/metodológico. **Complemento:** se recuperan técnicas de planificación exigidas literalmente por el BOE.

La **EDT/WBS** descompone entregables y trabajo hasta un nivel gestionable. No es un calendario: primero estructura alcance, después permite estimar esfuerzo, responsables y coste. Un **hito** representa un punto de control sin duración propia relevante.

El diagrama de **Gantt** muestra actividades, duración, dependencias y calendario. Las redes PERT/CPM permiten analizar secuencia y **camino crítico**. Una actividad crítica tiene holgura total nula o mínima: retrasarla retrasa la fecha final salvo que se modifique la planificación.

### PERT

Estimación de tres puntos clásica: optimista O, más probable M y pesimista P. Duración esperada aproximada: **(O + 4M + P) / 6**. La técnica no convierte incertidumbre en certeza; explicita supuestos.

## 7.2 Líneas base y seguimiento

En gestión predictiva se controlan líneas base de alcance, cronograma y costes. En enfoques ágiles se observa flujo, valor entregado, burnup/burndown y objetivos de producto. Conviene separar **avance físico** de “porcentaje declarado”.

El **Valor Ganado** puede aparecer transversalmente: PV (valor planificado), EV (valor ganado) y AC (coste real). CV=EV−AC; SV=EV−PV; CPI=EV/AC; SPI=EV/PV. CPI o SPI inferiores a 1 son señales desfavorables de coste o plazo.

## 7.3 Gestión de cambios y configuración del proyecto

Un cambio debe registrar origen, justificación, impacto en requisitos/arquitectura/pruebas/plazo/coste y decisión. En un backlog ágil la priorización es más dinámica, pero sigue existiendo análisis de impacto. El control de configuración identifica versiones de requisitos, código, documentación, infraestructura y releases.

## 7.4 Comparación de metodologías

| Marco | Foco | Conceptos de test |
| --- | --- | --- |
| Scrum | producto incremental por Sprints | PO, SM, Developers; Product/Sprint Backlog; Increment |
| Kanban | flujo continuo | visualización, límites WIP, lead/cycle time |
| XP | prácticas de ingeniería | TDD, pairing, refactor, CI, diseño simple |
| UP | iterativo, arquitectura, riesgos | Inicio, Elaboración, Construcción, Transición |

**Para supuesto:** si existe contratación pública, hitos de aceptación y cumplimiento normativo, es razonable proponer gobierno/hitos formales combinados con construcción iterativa. “Híbrido” debe explicar qué parte es predictiva y cuál adaptativa.

## 8. Test

* Scrum ≠ Kanban.
* Backlog ≠ WBS.
* Lead time ≠ cycle time.
* Velocidad no compara equipos de forma fiable.
* Ágil no significa ausencia de documentación/planificación.

## 9. Supuesto

Proponer un modelo híbrido si hay contratación/hitos regulatorios y desarrollo iterativo. Definir gobierno, backlog, releases, riesgos, calidad, CI/CD y métricas.

## 10. Resumen

La metodología debe ajustarse a incertidumbre y contexto. Planifica alcance, tiempo, coste, calidad y riesgos con métricas de flujo/entrega.

# III.03 — Requisitos: elicitación, análisis y especificación

Cobertura oficial que debe quedar dominada: Análisis de requisitos: técnicas de entrevistas, derivación de sistemas existentes, análisis, prototipos y especificación de requisitos.

## 1. Tipos

* negocio;
* usuario/stakeholder;
* funcionales;
* no funcionales/calidad;
* restricciones;
* transición/migración.

## 2. Elicitación

Entrevistas, talleres, observación, cuestionarios, análisis documental, prototipos, brainstorming, análisis de interfaces y procesos. No es “preguntar qué quiere el usuario”: se descubren necesidades, conflictos, reglas y excepciones.

## 3. Calidad de requisitos

Deben ser necesarios, claros, verificables, consistentes, factibles, trazables, priorizados y sin ambigüedad evitable. Un requisito no funcional debe poder medirse: “rápido” es pobre; “p95 < 2 s bajo X carga” es verificable.

## 4. Historias y casos de uso

Historia: “Como [rol], quiero [capacidad], para [beneficio]”, complementada con criterios de aceptación. Caso de uso desarrolla actores, precondiciones, flujo principal, alternativos, excepciones y postcondiciones.

## 5. Priorización

MoSCoW, valor/riesgo/coste, WSJF en contextos adecuados. Prioridad debe explicitar dependencia y obligación legal.

## 6. Trazabilidad

Requisito ↔ diseño ↔ código ↔ prueba ↔ entrega. Permite impacto de cambio y demostrar cobertura. Matriz de trazabilidad no debe convertirse en burocracia sin uso.

## 7. Gestión de cambios

Registrar cambio, analizar impacto, decidir, versionar, actualizar trazabilidad y comunicar. En Agile, backlog facilita cambio, pero no elimina análisis de impacto.

## 7.1 Derivación de sistemas existentes

**Base A1:** 088 + 094 + 091. El BOE menciona expresamente la **derivación de sistemas existentes**, que en la V2 anterior estaba demasiado implícita.

Cuando se sustituye o moderniza un sistema, parte de los requisitos se obtiene mediante ingeniería inversa funcional: inventario de procesos, interfaces, datos, reglas de negocio, roles, informes, dependencias, restricciones y excepciones actuales. Hay que distinguir entre **requisito real** y **limitación heredada**. Copiar sin análisis todos los comportamientos del legado perpetúa deuda y errores.

Técnicas: observación de usuarios, análisis de pantallas/documentación/código y logs, extracción del modelo de datos, trazado de interfaces y talleres de “as-is / to-be”. Para migración se documentan reglas de correspondencia de datos y requisitos de reconciliación.

## 7.2 Especificación de requisitos

Una SRS/ERS debe permitir construir y verificar. Estructura útil: alcance, actores, glosario, requisitos funcionales, reglas de negocio, interfaces, datos, requisitos no funcionales, restricciones, supuestos, criterios de aceptación y trazabilidad. La familia ISO/IEC/IEEE 29148 es una referencia de ingeniería de requisitos que puede usarse como apoyo, sin memorizar numeración secundaria salvo que aparezca en test.

## 7.3 Modelado de requisitos

Casos de uso, BPMN/diagramas de actividad, estados, prototipos, modelos de dominio y contratos de interfaz. El modelo se elige por la duda que resuelve; dibujar por decorar añade ruido.

## 7.4 Requisitos no funcionales

| Área | Ejemplo verificable |
| --- | --- |
| rendimiento | p95 de respuesta < 2 s bajo carga definida |
| disponibilidad | 99,9 % mensual excluyendo ventanas acordadas |
| seguridad | MFA para perfiles privilegiados; cifrado en tránsito |
| accesibilidad | conformidad legal/técnica aplicable y pruebas manuales |
| continuidad | RTO/RPO definidos por proceso |

**Trampa:** “el sistema será intuitivo y rápido” no es un requisito suficientemente verificable.

## 8. Test

* Requisito funcional ≠ no funcional.
* Criterio de aceptación ≠ requisito completo.
* Historia ≠ caso de uso.
* Trazabilidad bidireccional facilita impacto y cobertura.

## 9. Supuesto

Identifica stakeholders, requisitos, NFR medibles, restricciones ENS/RGPD/accesibilidad, prototipo, prioridades, trazabilidad y control de cambios.

## 10. Resumen

El mejor requisito es comprensible y verificable. La trazabilidad conecta necesidad con prueba y entrega.

# III.04 — Modelado de datos. Diseño relacional, normalización y concurrencia

Cobertura oficial que debe quedar dominada: Modelado de datos y metodologías. Diseño de bases de datos. Modelo relacional, normalización, diseño lógico y físico. Concurrencia y resolución de conflictos.

## 1. Modelado conceptual

Entidad, atributo, relación, cardinalidad, participación y restricciones. El modelo conceptual debe representar negocio sin contaminarse prematuramente con detalles físicos.

## 2. Paso a relacional

Entidades → tablas; identificadores → PK; relaciones 1:N → FK en lado N; N:M → tabla asociativa; 1:1 según opcionalidad/semántica.

## 3. Normalización

1FN, 2FN, 3FN y BCNF reducen redundancia/anomalías. No normalices “por dogma”: el modelo transaccional suele favorecer normalización; cargas analíticas pueden justificar dimensional/desnormalizado.

## 4. Integridad

PK, UNIQUE, FK, NOT NULL, CHECK y reglas de dominio. La integridad debe vivir lo más cerca posible del dato cuando es universal y estable.

## 5. Transacciones/concurrencia

ACID, bloqueos, deadlock, MVCC y niveles de aislamiento. Fenómenos: dirty read, non-repeatable read, phantom y lost update.

## 6. Optimización del diseño

Índices, particionado, tipos, cardinalidad, consultas y estadísticas. Un índice mejora ciertas lecturas y penaliza escrituras/mantenimiento.

## 6.1 Del modelo conceptual al físico

**Base A1 principal:** 063 + 064, ya muy aprovechados en II.05. En este tema el foco no es SQL en general sino el **proceso de diseño** y la concurrencia.

* **Conceptual:** entidades, relaciones, atributos, identificadores, cardinalidades y reglas.
* **Lógico:** transformación al modelo relacional: tablas, PK/FK, restricciones y normalización.
* **Físico:** tipos concretos, índices, particiones, almacenamiento, clustering, parámetros y decisiones dependientes del SGBD.

La independencia conceptual/física explica por qué una optimización de almacenamiento no debería obligar a rediseñar toda la aplicación.

## 6.2 Dependencias y normalización con intención

**1FN**: dominios atómicos según el modelo aplicado. **2FN**: elimina dependencias parciales respecto a claves compuestas. **3FN**: elimina dependencias transitivas indebidas de atributos no clave. **BCNF**: todo determinante no trivial debe ser superclave. La normalización evita anomalías de inserción, borrado y actualización.

La desnormalización es una decisión consciente para patrones de lectura/rendimiento; exige controles para coherencia. No debe usarse para “arreglar” consultas mal diseñadas sin medir.

## 6.3 Concurrencia: anomalías

* **lectura sucia:** leer cambios no confirmados;
* **lectura no repetible:** la misma fila cambia entre lecturas;
* **fantasma:** cambia el conjunto de filas que satisface un predicado;
* **actualización perdida:** una escritura sobrescribe otra sin detectar conflicto.

## 6.4 Técnicas de control

**Bloqueo pesimista:** evita conflictos bloqueando. **2PL** separa fase de adquisición y liberación y ayuda a serializabilidad, aunque puede producir deadlocks. **MVCC** mantiene versiones para permitir lecturas concurrentes y necesita reglas de visibilidad. **Control optimista** permite trabajar y valida versión/timestamp al confirmar; es útil cuando las colisiones son poco frecuentes.

## 6.5 Deadlocks y resolución

Prevención mediante orden consistente de adquisición, transacciones cortas y buenos índices; detección por gestor y aborto de una víctima; timeouts como mecanismo auxiliar. En aplicaciones, el error debe manejarse con rollback y reintento seguro cuando sea idempotente.

## 6.6 Índices y diseño físico

B-tree/B+tree para búsquedas/rangos; hash para igualdad según motor; índice compuesto depende del orden de columnas. Demasiados índices aumentan coste de escritura. Particionado divide grandes tablas por rango/lista/hash u otras estrategias del gestor, pero no sustituye índices ni buen modelo.

**Para supuesto:** dibuja un ER simplificado, justifica normalización, restricciones, transacciones críticas, aislamiento, bloqueo/MVCC, índices y estrategia de crecimiento.

## 7. Test

* Modelo conceptual ≠ físico.
* N:M requiere relación/tablas intermedias en relacional.
* Normalización ≠ optimización siempre.
* PK ≠ índice “solo por rendimiento”.
* MVCC ≠ ausencia de transacciones.

## 8. Supuesto

Presenta entidades, claves/cardinalidades, reglas, normalización, transacciones críticas, índices, concurrencia y plan de crecimiento.

## 9. Resumen

Modelar datos es preservar semántica e integridad antes de optimizar.

# III.05 — TAD, estructuras de datos, ficheros, algoritmos e IA básica

Cobertura oficial que debe quedar dominada: Tipos abstractos de datos y estructuras de datos. Organizaciones de ficheros. Estrategias de diseño de algoritmos, ordenación y búsqueda. Fundamentos, tecnologías y áreas de aplicación de la inteligencia artificial.

## 1. TAD

Un Tipo Abstracto de Datos define valores y operaciones observables independientemente de implementación. Ejemplo: pila con push/pop/top; puede implementarse mediante array o lista.

## 2. Complejidad

Big-O describe crecimiento asintótico. Órdenes habituales: O(1), O(log n), O(n), O(n log n), O(n²), O(2^n). Se analiza tiempo y espacio. O(n) no significa “n segundos”.

## 3. Estructuras

### Array

Acceso por índice O(1); inserción intermedia puede implicar desplazamiento.

### Lista enlazada

Inserciones locales eficientes si se tiene referencia; acceso posicional O(n).

### Pila

LIFO.

### Cola

FIFO. Cola de prioridad extrae según prioridad.

### Hash table

Búsqueda/inserción promedio cercanas a O(1) con buena función/distribución; colisiones requieren estrategia.

### Árbol

BST, árboles balanceados, heaps y B-trees. Heap útil para prioridad; B-tree/B+ tree en almacenamiento/indexación.

### Grafos

Vértices/aristas, dirigidos/no dirigidos, ponderados. Representaciones: lista/matriz de adyacencia.

## 4. Algoritmos

Búsqueda lineal O(n), binaria O(log n) sobre colección ordenada. Ordenación: bubble/selection/insertion O(n²) típicamente; merge sort O(n log n), quicksort promedio O(n log n), heap sort O(n log n).

### 4.1 Grafos

BFS recorre por niveles y encuentra caminos mínimos en grafos no ponderados; DFS profundiza. Dijkstra para pesos no negativos; Bellman-Ford admite negativos; Floyd-Warshall todos los pares con coste alto.

## 5. Ficheros

Secuenciales, acceso directo/indexado, registros fijos/variables. Buffering y serialización. Diferencia formato lógico y soporte físico.

## 6. IA básica

Conceptos mínimos: IA, machine learning, supervisado/no supervisado/refuerzo; entrenamiento, validación, test, feature, modelo, inferencia, overfitting y generalización. En clasificación: precisión, recall, F1 y matriz de confusión. No todo algoritmo es IA ni todo modelo requiere deep learning.

## 6.1 Estrategias de diseño de algoritmos

**Base A1:** 070 + 071 + 076. **Hueco GSI completado:** el BOE pide expresamente estrategias de diseño, no solo complejidad y ejemplos de ordenación.

* **Divide y vencerás:** divide en subproblemas, resuelve y combina. Ej.: merge sort, búsqueda binaria.
* **Voraz (greedy):** elige en cada paso la opción localmente mejor; solo es correcto si el problema tiene las propiedades adecuadas. Ej.: ciertos MST como Kruskal/Prim.
* **Programación dinámica:** subproblemas solapados + subestructura óptima; memoization/tabulation. Ej.: mochila 0/1, caminos.
* **Backtracking:** explora árbol de decisiones y poda cuando una solución parcial no puede ser válida.
* **Branch and bound:** optimización con cotas para descartar ramas que no pueden superar la mejor solución.

## 6.2 Organización de ficheros

**Secuencial:** adecuado a recorridos completos, pobre acceso aleatorio. **Secuencial indexado:** añade índice para localizar registros. **Directo/hash:** calcula ubicación lógica a partir de clave y gestiona colisiones. En ficheros de registros importan longitud fija/variable, bloques, buffering, índices y estrategia de actualización.

## 6.3 Ordenaciones: propiedades

| Algoritmo | Promedio | Rasgo |
| --- | --- | --- |
| Insertion | O(n²) | simple; bueno para pequeños/casi ordenados |
| Merge | O(n log n) | estable; requiere espacio auxiliar típico |
| Quick | O(n log n) | peor O(n²); muy eficiente práctico con buen pivote |
| Heap | O(n log n) | peor caso acotado; in-place típico |

**Estable** significa conservar el orden relativo de elementos con clave igual; no significa “no se cae”.

## 6.4 IA: tecnologías y áreas

Además de ML: sistemas basados en reglas/conocimiento, búsqueda/planificación, procesamiento de lenguaje natural, visión, recomendación, optimización y agentes. En ML: supervisado, no supervisado y refuerzo. En IA generativa/modelos fundacionales, para GSI interesa entender inferencia, contexto, embeddings/RAG como conceptos actuales y, sobre todo, riesgos de calidad, privacidad, seguridad, coste y explicabilidad; no convertir el tema en un catálogo de productos.

**Áreas públicas:** clasificación documental, detección de fraude/anomalías, asistentes, predicción de demanda, visión, traducción y apoyo a decisión. Si afecta a derechos, la gobernanza y supervisión humana son requisitos.

## 7. Test

* TAD ≠ estructura concreta.
* Pila LIFO; cola FIFO.
* Búsqueda binaria requiere orden.
* BFS ≠ DFS.
* Dijkstra no es adecuado a aristas negativas.
* Complejidad promedio ≠ peor caso.
* Overfitting = buen ajuste de entrenamiento y pobre generalización.

## 8. Supuesto

Justifica estructura según operaciones dominantes y volumen. Para IA, define objetivo, datos, métricas, validación, sesgo, explicabilidad y operación, sin convertirla en solución por defecto.

## 9. Resumen

Aprende comportamiento y coste de arrays, listas, pilas, colas, hash, árboles y grafos; enlaza algoritmo con estructura y complejidad.

# III.06 — Construcción, código, despliegue, CI/CD y DevOps. Documentación y formación

Cobertura oficial que debe quedar dominada: Construcción del sistema: entornos de construcción, generación de código, despliegue, integración continua y DevOps. Estándares de documentación, manuales y métodos/materiales de formación.

## 1. Construcción

Convierte diseño/requisitos en código mantenible. Prácticas: estándares, modularidad, revisión, análisis estático, gestión de dependencias, testing automatizado y control de versiones.

## 2. Git

Repositorio, commit, branch, merge/rebase, tag, pull request. El objetivo no es memorizar comandos, sino trazabilidad y colaboración. Branching debe ser tan simple como permita el modelo de entrega.

## 3. Build reproducible

Dependencias fijadas, lockfiles, repositorios controlados, artefactos inmutables, versiones, checksums, SBOM. “Funciona en mi máquina” se reduce con entornos reproducibles y CI.

## 4. Integración continua

Cambios frecuentes integrados en rama compartida con build y pruebas automáticas. Pipeline típico: checkout → dependencias → compile/build → static analysis → unit tests → package → security scans → artefacto.

## 5. Entrega/despliegue continuo

Continuous Delivery mantiene software desplegable y puede requerir aprobación; Continuous Deployment despliega automáticamente cambios que superan controles. No son sinónimos.

## 6. DevOps

Cultura/prácticas para reducir fricción desarrollo-operación mediante automatización, responsabilidad compartida, feedback y observabilidad. DevSecOps integra seguridad en todo el flujo.

## 7. IaC y configuración

Infraestructura declarada/versionada, revisable y automatizada. Distingue provisión de infraestructura de configuración de aplicaciones. Evitar cambios manuales no trazados.

## 8. Estrategias de despliegue

Rolling, blue-green, canary y feature flags. Rollback debe contemplar compatibilidad de esquema de BD y migraciones.

## 9. Supply chain

Dependencias, artefactos, firmas, SBOM, secretos, provenance, repositorios y runners. El pipeline es infraestructura crítica.

## 10. Documentación

Arquitectura, ADR, API, operación/runbooks, instalación, usuario y soporte. Docs-as-code puede versionar documentación técnica con código.

## 11. Formación y transición

Plan de capacitación por perfiles, materiales, sesiones, entorno de prácticas, evaluación y soporte inicial. La aceptación operativa incluye conocimiento y procedimientos.

## 11.1 Entornos de construcción y generación de código

**Base A1:** 097 + 102. Se amplían los elementos que el epígrafe oficial enumera de manera literal.

Un entorno de construcción integra compiladores/intérpretes, gestor de dependencias, build tool, análisis estático, tests, empaquetado y repositorio de artefactos. Ejemplos de categorías: Maven/Gradle en Java, dotnet CLI/MSBuild en .NET, npm/pnpm/yarn en JS, make/CMake en C/C++. Memoriza la función, no una bandera concreta.

La **generación de código** puede partir de modelos, schemas, contratos OpenAPI/AsyncAPI, ORM o IDL. Reduce trabajo repetitivo, pero el código generado debe versionarse o reproducirse de forma determinista según estrategia y no editarse manualmente si se regenerará.

## 11.2 Entornos y promoción

Desarrollo → integración/test → preproducción → producción, con configuración externa y artefacto inmutable. Promover **el mismo artefacto** reduce diferencias. Bases de datos requieren migraciones versionadas y compatibles con despliegues progresivos.

## 11.3 Quality gates

Compilación, tests, cobertura mínima razonada, análisis estático, SAST, dependencia/SCA, secretos, imagen, IaC y políticas de licencia. Un gate debe estar vinculado a riesgo; acumular herramientas sin capacidad de corregir hallazgos genera ruido.

## 11.4 Documentación exigible

| Documento | Para quién / qué resuelve |
| --- | --- |
| arquitectura/ADR | decisiones, contexto, alternativas, consecuencias |
| API/contratos | integradores/desarrolladores |
| manual de instalación/despliegue | operación/implantación |
| manual de explotación/runbook | operación, incidencias, backup, recuperación |
| manual de usuario | tareas funcionales y ayuda |
| administración | roles, configuración, parametrización y seguridad |

## 11.5 Formación

Análisis de perfiles → objetivos de aprendizaje → material → sesiones prácticas → evaluación → soporte. Modalidades: instructor, autoformación, microlearning, laboratorio/sandbox y formación de formadores. Para implantación, medir asistencia no basta: conviene medir competencia/adopción y dudas recurrentes.

## 12. Test

* CI ≠ CD.
* Delivery ≠ Deployment.
* DevOps ≠ herramienta.
* IaC ≠ “script suelto”.
* Artefacto inmutable favorece trazabilidad.
* Rollback de app puede fallar si BD no es compatible.

## 13. Supuesto

Diseña repositorio, ramas, pipeline, quality gates, artefactos, registry, IaC, secretos, entornos, despliegue progresivo, observabilidad, rollback, documentación y formación.

## 14. Resumen

Construcción moderna = código + automatización + artefactos trazables + operación preparada.

# III.07 — Pruebas de software

Cobertura oficial que debe quedar dominada: Planificación y documentación de las pruebas. Datos de prueba. Pruebas de software, hardware, procedimientos y datos.

## 1. Principios

Los principios de prueba pueden agruparse en tres ideas: probar reduce incertidumbre, pero no demuestra ausencia de defectos; la exhaustividad no es viable, por lo que conviene empezar pronto y concentrar el esfuerzo donde se acumulan fallos; y la estrategia debe adaptarse al contexto, renovar los casos para evitar pérdida de eficacia y comprobar que el producto satisface la necesidad, no solo que carece de errores conocidos.

## 2. Error, defecto y fallo

Error humano puede introducir defecto; el defecto ejecutado puede causar fallo. No son sinónimos.

## 3. Verificación y validación

Verificación evalúa producto de trabajo frente a especificación; validación evalúa adecuación a necesidad/uso. Revisiones estáticas también son testing/QA relevante sin ejecutar código.

## 4. Niveles

* unitarias/componente;
* integración;
* sistema;
* aceptación.

La pirámide de pruebas favorece muchas unitarias rápidas, menos integración y menos E2E costosas, adaptada al contexto.

## 5. Tipos

Funcionales, rendimiento/carga/estrés, seguridad, usabilidad/accesibilidad, compatibilidad, recuperación, instalación, regresión, smoke/sanity y resiliencia.

## 6. Caja negra

Particiones de equivalencia, valores límite, tablas de decisión, transición de estados, casos de uso.

## 7. Caja blanca

Cobertura de sentencias, ramas/decisiones, condiciones y caminos. 100% cobertura de líneas no significa ausencia de defectos.

## 8. TDD

Red → Green → Refactor. TDD es técnica de desarrollo guiada por tests unitarios, no sustituto de estrategia completa de pruebas.

## 9. Dobles de prueba

Dummy, stub, spy, mock y fake. El exceso de mocks acopla test a implementación.

## 10. Automatización

Tests deterministas, rápidos, aislados y con datos controlados. CI ejecuta suites. Gestionar flaky tests como defectos del sistema de pruebas.

## 11. Criterios de aceptación y salida

Cobertura de requisitos, defectos críticos abiertos, tasa de éxito, rendimiento, seguridad y riesgo residual. “Todos los tests pasan” no basta si faltan escenarios.

## 11.1 Plan de pruebas y documentación

**Base principal:** A1 096 (resumen de 16 páginas). La V2 anterior infrautilizaba esta fuente. Se recuperan planificación, condiciones, diseño, ejecución, criterios de salida, reporting y cierre.

Un plan identifica alcance, objetos de prueba, riesgos, niveles/tipos, técnicas, entornos, datos, roles, calendario, herramientas, criterios de entrada/salida, gestión de defectos y entregables. Los casos de prueba especifican precondiciones, datos, pasos, resultado esperado y trazabilidad. Un informe de cierre resume ejecución, cobertura, defectos abiertos y riesgo residual.

## 11.2 Datos de prueba

Los datos deben cubrir particiones, límites, excepciones y combinaciones. En sistemas con datos personales se prefieren datos sintéticos o anonimizados cuando sea viable; copiar producción a test sin control es un riesgo. La **seudonimización** puede seguir siendo dato personal. Es importante poder recrear datasets y conocer su versión.

## 11.3 Pruebas de hardware

El BOE las menciona expresamente. Incluyen aceptación y verificación de servidores/dispositivos, CPU/RAM, almacenamiento, interfaces, redundancia, sensores/periféricos, rendimiento, burn-in/estrés cuando proceda y comportamiento ante fallos. No se confunden con pruebas unitarias de software.

## 11.4 Pruebas de procedimientos

Comprueban que procedimientos operativos son ejecutables: alta/baja de usuarios, backup/restauración, recuperación ante desastre, escalado de incidencias, operación batch, cambio, parcheo, gestión de certificados, contingencia y actuación manual. Un runbook que nadie ha probado no es evidencia de recuperabilidad.

## 11.5 Pruebas de datos

Validan migraciones, integridad, completitud, exactitud, reconciliación, duplicados, formatos, reglas de negocio y calidad. En una migración: conteos origen/destino, sumas/control totals, muestreo de registros, claves/referencias, excepciones y trazabilidad de transformaciones.

## 11.6 Técnicas de diseño

| Caja negra | Caja blanca |
| --- | --- |
| partición de equivalencia | sentencias |
| valores límite | decisiones/ramas |
| tablas de decisión | condiciones |
| transición de estados | caminos / flujo de control |

También testing basado en experiencia: error guessing, exploratory testing y checklist, útil pero no sustituto de cobertura sistemática.

## 11.7 No funcionales

**Rendimiento:** carga, estrés, endurance/soak, volumen y capacidad. **Seguridad:** SAST/DAST, revisión, dependencias y pentest según riesgo. **Recuperación:** fallo y restauración real. **Accesibilidad:** automatización + revisión manual/teclado/lector según alcance. **Compatibilidad:** navegadores/dispositivos/versiones.

## 11.8 Gestión de defectos

Ciclo: registrar → clasificar severidad/prioridad → asignar → corregir → retest → cerrar/reabrir. **Severidad** refleja impacto; **prioridad** urgencia de resolución. La regresión comprueba que cambios no rompen lo existente; el retest confirma el defecto concreto.

## 11.9 Norma y proceso

ISO/IEC/IEEE 29119 es una familia de referencia para procesos/documentación/técnicas de pruebas. Para examen, prioriza conceptos sobre memorizar todos los números de parte salvo evidencia histórica de pregunta.

**Supuesto:** una estrategia excelente separa objeto (software/hardware/datos/procedimientos), nivel, tipo, técnica, entorno, datos, automatización, criterios y evidencia de aceptación.

## 12. Test

* Pruebas demuestran defectos, no su ausencia.
* Exhaustividad imposible.
* Unit ≠ integración ≠ sistema ≠ aceptación.
* Regresión ≠ re-test.
* Coverage ≠ calidad.
* TDD ≠ testing completo.

## 13. Supuesto

Define estrategia por riesgo, niveles, técnicas, entornos/datos, automatización, performance/security/accessibility, criterios de entrada/salida, gestión de defectos y trazabilidad requisitos→tests.

## 14. Resumen

Testing reduce riesgo. Diseña cobertura por riesgo y automatiza sin olvidar pruebas no funcionales y aceptación.

# III.08 — Instalación, cambios, postimplantación y mantenimiento

Cobertura oficial que debe quedar dominada: Estrategias de implantación, sustitución y cambio. Recepción e instalación. Evaluación postimplantación. Mantenimiento de sistemas.

## 1. Instalación

Preparación de entornos, configuración, datos, integraciones, certificados/secretos, observabilidad y validación. Todo debe poder repetirse y auditarse.

## 2. Migración

Inventario, mapeo de datos, limpieza, pruebas, reconciliación, ventana de cambio, rollback y validación. Estrategias: big bang, fases, paralelo y piloto.

## 3. Gestión del cambio

RFC/cambio → evaluación de impacto/riesgo → aprobación según modelo → planificación → ejecución → validación → cierre. Cambios estándar/preautorizados pueden agilizar operación.

## 4. Postimplantación

Hypercare, monitorización, soporte reforzado, métricas, incidencias, adopción, rendimiento y revisión post-implantación. Comparar beneficios reales con caso de negocio.

## 5. Mantenimiento

* correctivo;
* adaptativo;
* perfectivo/evolutivo;
* preventivo.

La deuda técnica aumenta coste futuro y debe gestionarse como riesgo/coste, no como categoría de mantenimiento separada necesariamente.

## 6. CMDB/configuración

Identificar elementos de configuración, versiones, relaciones y estado. CMDB no debe convertirse en inventario desactualizado: automatizar discovery cuando compense.

## 6.1 Estrategias de sustitución

**Base A1:** 101 + 100. Se amplían las cuatro estrategias clásicas porque son muy preguntables.

| Estrategia | Ventaja | Riesgo/coste |
| --- | --- | --- |
| directa / big bang | rápida, sin coexistencia | máximo riesgo; rollback crítico |
| paralela | comparación y respaldo | doble operación/coste; sincronización |
| piloto | aprendizaje en ámbito limitado | representatividad y posterior escalado |
| por fases | reduce impacto progresivamente | coexistencia e interfaces temporales |

## 6.2 Recepción

La recepción técnica comprueba entregables y criterios contractuales: software, código/artefactos, licencias, documentación, formación, pruebas, vulnerabilidades, inventario, configuración e infraestructura. Debe existir evidencia de aceptación y lista de defectos/condiciones pendientes.

## 6.3 Plan de cutover

Secuencia minuto/hora: congelación, backup, parada, exportación, migración, validación, cambio de DNS/rutas, arranque, smoke tests, comunicación y decisión go/no-go. Define **punto de no retorno** y pasos de rollback con responsables.

## 6.4 Evaluación postimplantación

Compara objetivos con resultados: disponibilidad, rendimiento, incidencias, adopción, satisfacción, costes y beneficios. Registra lecciones y deuda residual. Una implantación técnicamente correcta puede fracasar por adopción o soporte.

## 6.5 Organización del mantenimiento

Backlog de correctivos/evolutivos, SLA, priorización, releases, soporte L1/L2/L3, gestión de obsolescencia, parches, deuda técnica y fin de vida. Mantenimiento preventivo incluye refactorización, actualización y eliminación de riesgos antes del fallo.

## 7. Test

* Instalación ≠ despliegue únicamente.
* Cambio ≠ release.
* Correctivo ≠ adaptativo.
* Rollback debe probarse.
* Postimplantación incluye adopción y operación.

## 8. Supuesto

Define plan de cutover, migración, backups, rollback, comunicaciones, soporte, métricas de éxito y revisión.

## 9. Resumen

Implantar es transferir un sistema a operación de forma controlada y reversible.

# III.09 — Orientación a objetos. Proceso Unificado. UML y patrones

Cobertura oficial que debe quedar dominada: Análisis y diseño orientado a objetos. Proceso Unificado, UML y patrones de diseño.

## 1. OO

Objeto = identidad, estado y comportamiento. Principios: abstracción, encapsulación, polimorfismo y composición/herencia. Alta cohesión y bajo acoplamiento son objetivos de diseño.

## 2. SOLID

SRP, OCP, LSP, ISP y DIP como heurísticas. No son leyes matemáticas ni obligan a crear muchas clases.

## 3. Proceso Unificado

Iterativo/incremental, dirigido por casos de uso, centrado en arquitectura y orientado a riesgos. Fases: Inicio, Elaboración, Construcción, Transición.

## 4. UML

Lenguaje de modelado, no metodología. Diagramas estructurales: clases, componentes, despliegue, paquetes. Comportamiento: casos de uso, actividad, estados; interacción: secuencia/comunicación.

## 5. Clases

Asociación, agregación, composición, generalización, dependencia, multiplicidad. Composición implica ciclo de vida fuertemente ligado; agregación es más débil.

## 6. Secuencia

Lifelines, mensajes, activaciones y fragmentos combinados. Útil para contratos e interacciones.

## 7. Patrones GoF

Creacionales: Factory Method, Abstract Factory, Builder, Prototype, Singleton. Estructurales: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy. Comportamiento: Strategy, Observer, Command, State, Template Method, etc.

## 8. Patrones arquitectónicos

Layered, MVC, hexagonal/ports-adapters, event-driven, CQRS según necesidad. Patrón ≠ producto ni receta universal.

## 8.1 Análisis OO frente a diseño OO

**Base A1:** 089 + 090 + 093 (+092). **Análisis** identifica conceptos, responsabilidades y relaciones del dominio sin comprometer prematuramente tecnología. **Diseño** traduce el modelo a clases/componentes/interfaces y decisiones técnicas.

## 8.2 UP con más detalle

* **Inicio:** visión, alcance, caso de negocio y riesgos principales.
* **Elaboración:** arquitectura base ejecutable, requisitos/riesgos significativos.
* **Construcción:** completar funcionalidad incrementalmente.
* **Transición:** despliegue, formación, correcciones y aceptación.

Las disciplinas —requisitos, análisis/diseño, implementación, pruebas, despliegue, configuración/cambio, proyecto y entorno— aparecen con distinta intensidad a lo largo de las fases.

## 8.3 UML: qué muestra cada diagrama

| Diagrama | Uso |
| --- | --- |
| casos de uso | actores y objetivos funcionales |
| clases | estructura estática del dominio/diseño |
| secuencia | mensajes ordenados temporalmente |
| actividad | flujo de trabajo/decisión |
| estados | ciclo de vida de una entidad/objeto |
| componentes | módulos e interfaces |
| despliegue | nodos/artefactos físicos/lógicos |

Relaciones: asociación, dependencia, generalización, realización; agregación/composición; multiplicidades. En test, **include** y **extend** de casos de uso suelen confundirse: include reutiliza comportamiento obligatorio común; extend añade comportamiento opcional/condicional al caso base.

## 8.4 Patrones: intención antes que nombre

**Factory** desacopla creación; **Adapter** hace compatibles interfaces; **Facade** simplifica subsistema; **Decorator** añade responsabilidades dinámicamente; **Strategy** intercambia algoritmo; **Observer** notifica cambios; **Command** encapsula solicitud; **State** cambia comportamiento según estado. Aprender problema→solución es más útil que memorizar una lista.

## 9. Test

* UML ≠ UP.
* Agregación ≠ composición.
* Strategy ≠ State aunque su estructura pueda parecerse.
* Facade simplifica interfaz; Adapter compatibiliza interfaces.
* Singleton introduce estado global y debe justificarse.

## 10. Supuesto

Usa diagramas únicamente si aclaran arquitectura: componentes/despliegue para solución, secuencia para integración, clases para dominio. Nombra patrones y explica problema que resuelven.

## 11. Resumen

OO organiza responsabilidades; UML comunica modelos; patrones capturan soluciones recurrentes.

# III.10 — Java y Jakarta EE

Cobertura oficial que debe quedar dominada: Plataforma Java EE/Jakarta EE: funcionamiento, elementos, productos y herramientas. Persistencia y seguridad.

## 1. Plataforma Java

Código fuente → bytecode → JVM. JDK incluye herramientas de desarrollo; JVM ejecuta bytecode; bibliotecas estándar completan plataforma. Java combina compilación y JIT.

## 2. Lenguaje

Tipado estático, OO/multiparadigma, GC, excepciones, genéricos, colecciones, lambdas/streams, concurrencia. Primitivos y referencias. equals() y hashCode() deben ser coherentes para colecciones hash.

## 3. JVM

Class loading, bytecode verification, memoria/heap/stacks, GC y JIT. GC libera memoria no alcanzable pero no sustituye cierre de recursos externos; try-with-resources gestiona AutoCloseable.

## 4. Concurrencia

Thread, Executor, futures, locks, concurrent collections. Java moderno añade virtual threads en Java 21, especialmente útiles para alta concurrencia con modelo thread-per-request en cargas bloqueantes; no aceleran CPU-bound por sí solas.

## 5. Jakarta EE 11

Plataforma empresarial actual. Soporta Java 17 o superior y mejoras con Java 21. Incluye CDI, REST, Persistence, Transactions, Validation, Security, Servlets, Faces y la nueva Jakarta Data, entre otras especificaciones. Managed Beans antiguos han sido retirados en favor de CDI.

## 6. CDI

Inyección de dependencias y gestión de ciclo/contextos. Favorece desacoplamiento y testabilidad.

## 7. Persistencia

Jakarta Persistence: entidades, EntityManager, relaciones, JPQL y transacciones. ORM no elimina necesidad de entender SQL, índices y N+1.

## 8. REST

Jakarta REST para APIs HTTP. Recursos, métodos, media types, filtros/interceptores. Seguridad y validación siguen siendo responsabilidades explícitas.

## 8.1 Productos y herramientas

**Base A1:** 067, versión 31.1 actualizada el 19/02/2026. Es una fuente especialmente valiosa. **Actualización oficial:** Jakarta EE 11 es la plataforma vigente de referencia y soporta Java SE 17 o superior, con mejoras al usar Java 21.

Categorías que el epígrafe exige reconocer: JDK y herramientas (javac, java, javadoc, jdeps/jlink según contexto); build/dependencias (Maven, Gradle); IDE (IntelliJ IDEA, Eclipse, VS Code como ejemplos); runtimes/servidores compatibles (Eclipse GlassFish, WildFly, Payara, Open Liberty como ejemplos de mercado, sin memorizar versiones comerciales).

## 8.2 Perfiles y componentes Jakarta EE 11

**Core Profile** para runtimes pequeños/microservicios; **Web Profile** para aplicaciones web; **Platform** incluye el conjunto amplio. Especificaciones relevantes: Servlet 6.1, CDI 4.1, REST 4.0, Persistence 3.2, Transactions, Validation, Security 4.0, Messaging, WebSocket, JSON-P/JSON-B y Jakarta Data 1.0.

## 8.3 Persistencia en profundidad

Entidad con identidad, estado persistente y relaciones. EntityManager/persistence context controla ciclo; estados típicos new/transient, managed, detached, removed. **Lazy/eager**, cascadas y N+1 afectan rendimiento. Transacciones deben delimitar unidad de trabajo; JTA coordina en entornos empresariales cuando procede.

## 8.4 Seguridad

Autenticación y autorización declarativa/programática, roles, constraints, Security API, identidad externa/OIDC cuando arquitectura lo requiera, TLS, gestión de secretos, validación y protección de sesiones/tokens. El SecurityManager de Java SE no debe estudiarse como mecanismo actual de seguridad de Jakarta EE 11: la plataforma ha retirado sus referencias.

## 8.5 Mensajería y concurrencia

Jakarta Messaging desacopla productores/consumidores; transacciones y entrega deben entenderse según broker/configuración. Jakarta Concurrency gestiona tareas/hilos de forma integrada con el runtime, evitando crear hilos arbitrarios sin control del contenedor en aplicaciones empresariales.

## 8.6 Datos de test adicionales

* Jakarta EE 11 ≠ Java SE 11.
* JPA/Persistence ≠ JDBC; JPA suele usar acceso relacional subyacente pero añade ORM.
* Maven/Gradle son herramientas de build, no servidores.
* GlassFish/WildFly/Payara/Open Liberty son implementaciones/runtimes, no especificaciones.
* Java EE cambió de namespace javax.\* a jakarta.\* en la evolución de la plataforma.

## 9. Test

* JDK ≠ JVM.
* Java ≠ JavaScript.
* GC ≠ gestión automática de todos los recursos.
* Jakarta EE es evolución de Java EE.
* CDI ≠ JPA.
* Virtual thread ≠ proceso.

## 10. Supuesto

Diseña capas/servicios, CDI, JPA, REST, transacciones, validación, seguridad, pool/conexiones, observabilidad y despliegue en runtime compatible.

## 11. Resumen

Domina Java/JVM y componentes empresariales Jakarta EE 11; evita memorizar APIs retiradas como si fueran actuales.

# III.11 — Plataforma .NET

Cobertura oficial que debe quedar dominada: Plataforma .NET: modelo de programación, servicios y herramientas. Persistencia y seguridad.

## 1. Ecosistema

.NET moderno incluye runtime, SDK, bibliotecas, C#, F#/VB, ASP.NET Core y Entity Framework Core. El material A1 066 de 2023 aporta base, pero la referencia actual en agosto de 2026 es **.NET 10 LTS**, soporte hasta noviembre de 2028.

## 2. CLR y IL

Código se compila a Intermediate Language y CLR ejecuta/JIT. CTS define sistema común de tipos; CLS facilita interoperabilidad entre lenguajes.

## 3. C#

Tipado estático, OO/multiparadigma, genéricos, LINQ, async/await, records, pattern matching, nullable reference types. IDisposable/using gestionan recursos.

## 4. ASP.NET Core

Framework web multiplataforma para MVC, Razor, Minimal APIs y servicios HTTP. Middleware compone pipeline. DI está integrada.

## 5. Entity Framework Core

ORM con DbContext, entidades, LINQ, tracking y migraciones. Riesgos: N+1, queries no eficientes, tracking innecesario y migraciones incompatibles.

## 6. LINQ

Modelo declarativo de consultas sobre colecciones/proveedores. Deferred execution puede sorprender; el proveedor traduce expresiones cuando corresponde.

## 7. Async

async/await simplifica operaciones asíncronas; no convierte automáticamente trabajo CPU-bound en paralelo. Evitar bloqueos sync-over-async.

## 8. Despliegue

Framework-dependent o self-contained según escenario; contenedores; Kestrel tras reverse proxy o directamente según arquitectura; configuración y secretos externos.

## 8.1 Servicios y herramientas

**Base A1:** 066 (2023), útil para CLR, bibliotecas, ADO.NET, EF y LINQ. **Actualización oficial:** a 21/08/2026 .NET 10 es LTS activo hasta 14/11/2028; .NET 8 y .NET 9 terminan soporte en noviembre de 2026. No estudiar .NET 6 como “LTS vigente”.

Herramientas: **dotnet CLI** (crear, restaurar, compilar, probar, publicar), MSBuild, NuGet, Visual Studio/VS Code/Rider como ejemplos, depurador/profilers y herramientas de diagnóstico. Un paquete NuGet es dependencia, no un ensamblado necesariamente uno-a-uno.

## 8.2 CLR, CTS, CLS y assemblies

CLR administra ejecución, JIT, GC, excepciones, threads y metadatos. **CTS** define tipos comunes; **CLS** un subconjunto de reglas para interoperabilidad entre lenguajes. **Assembly** es unidad de despliegue/versionado con IL, metadatos y manifiesto.

## 8.3 Servicios web

ASP.NET Core: pipeline de **middleware**, routing, controllers/minimal APIs, model binding, filtros según modelo, inyección de dependencias, configuración y logging. Kestrel es servidor web multiplataforma. Para servicios legacy puede aparecer WCF en material antiguo; en .NET moderno se priorizan HTTP APIs/gRPC y soluciones compatibles según necesidad.

## 8.4 Persistencia

**ADO.NET** ofrece acceso de bajo nivel mediante conexiones, comandos, readers/datasets. **Entity Framework Core** es ORM: DbContext, LINQ, tracking, relaciones, migrations y transacciones. Distingue consultas materializadas de deferred execution y controla N+1, tracking y proyecciones.

## 8.5 Seguridad

ASP.NET Core Authentication/Authorization, esquemas cookies/bearer, Identity para gestión de usuarios cuando procede, políticas/claims/roles, Data Protection para protección de datos de aplicación, antiforgery en flujos cookie, HTTPS/HSTS, secretos y gestión de claves. En APIs modernas, OAuth 2.0/OIDC suelen integrarse mediante proveedor de identidad, pero OAuth 2.0 por sí solo es autorización, no autenticación.

## 8.6 Despliegue y observabilidad

Framework-dependent vs self-contained, single-file/native AOT en casos compatibles, contenedores, IIS/reverse proxy/Kestrel, health checks, logging estructurado, métricas/trazas vía OpenTelemetry según arquitectura.

## 8.7 Trampas de test

* CLR ≠ CTS ≠ CLS.
* ADO.NET ≠ EF Core.
* NuGet ≠ MSBuild.
* ASP.NET Core ≠ ASP.NET clásico.
* .NET 10 LTS vigente no significa que toda aplicación deba migrar inmediatamente; depende de soporte y compatibilidad.

## 9. Test

* CLR ≠ .NET Framework.
* .NET moderno ≠ .NET Framework clásico.
* LINQ ≠ SQL aunque pueda traducirse.
* async ≠ paralelismo.
* .NET 10 es LTS actual en 2026.

## 10. Supuesto

Arquitectura ASP.NET Core, DI, EF Core, APIs, identidad, logging, health checks, caché, resiliencia, contenedor y CI/CD.

## 11. Resumen

La plataforma actual se centra en .NET multiplataforma; conserva conceptos CLR/C#/ASP.NET/EF pero actualiza versiones y ciclo de soporte.

# III.12 — Aplicaciones web: frontend, servidor, servicios, seguridad e internacionalización

Cobertura oficial que debe quedar dominada: Aplicaciones web multiplataforma y multidispositivo. Frontend y servidor. Componentes y servicios web, estándares, protocolos, interoperabilidad, seguridad e internacionalización/localización.

## 1. Web

Cliente navegador ↔ HTTP(S) ↔ servidor/API ↔ servicios/BD. Arquitecturas SSR, CSR, SPA y combinaciones/hidratación.

## 2. Frontend

HTML semántico, CSS, JavaScript/TypeScript, DOM, eventos, módulos, fetch, almacenamiento cliente y frameworks. La elección de framework no sustituye fundamentos web.

## 3. Backend

Routing, controllers/handlers, servicios de dominio, persistencia, caché, sesiones/tokens, jobs y mensajería.

## 4. HTTP

Métodos, códigos, headers, caché, cookies, content negotiation. HTTPS aporta TLS; no corrige vulnerabilidades de aplicación.

## 5. Seguridad

OWASP: inyección, control de acceso roto, fallos criptográficos, diseño inseguro, configuración, componentes vulnerables, autenticación, integridad, logging/monitorización y SSRF según categorizaciones vigentes. Controles: validación, parametrización, output encoding, CSP, CSRF defense, sesiones seguras, MFA, rate limit y secretos.

## 6. Servicios

REST, SOAP y eventos. Contratos/versionado, OpenAPI, autenticación OAuth2/OIDC cuando aplique, idempotencia y observabilidad.

## 7. Internacionalización

i18n prepara software para idiomas/formatos; l10n adapta a locale. Unicode, UTF-8, fechas, números, pluralización, zonas horarias, dirección RTL y traducciones. Guardar hora en UTC no elimina necesidad de timezone de usuario.

## 8. Rendimiento

CDN, compresión, caché, optimización assets, lazy loading, consultas eficientes, pool, métricas y pruebas. Medir p95/p99, no solo promedio.

## 8.1 Arquitecturas multiplataforma y multidispositivo

**Base A1:** 065 (+058). El A1 065 es extenso pero de 2023: se conservan fundamentos y se actualizan prácticas de seguridad/arquitectura.

Responsive web adapta presentación; PWA puede añadir service worker, instalación y capacidades offline; aplicaciones móviles nativas/híbridas pueden consumir las mismas APIs. El backend no debe confiar en validación del cliente: toda regla de seguridad se valida en servidor.

## 8.2 Ciclo HTTP y estado

HTTP es stateless; el estado de sesión se implementa con cookies/identificadores/tokens/almacenamiento servidor. Cookies: Secure, HttpOnly, SameSite; dominio/path y caducidad. Caché: Cache-Control, ETag/Last-Modified y validación. CDN acerca contenido y puede terminar TLS/caché, pero no sustituye autenticación ni autorización de origen.

## 8.3 CORS, CSP y navegador

**Same-Origin Policy** limita acceso entre orígenes. **CORS** permite al servidor declarar orígenes/métodos/headers autorizados para determinadas solicitudes del navegador; no es autenticación. **CSP** reduce riesgo de XSS restringiendo fuentes de contenido. CSRF afecta especialmente autenticación basada en cookies y se mitiga con tokens, SameSite y diseño correcto.

## 8.4 APIs y contratos

REST/HTTP, SOAP/WSDL en integración formal/legada, gRPC en comunicación de alto rendimiento, eventos/mensajería para desacoplamiento. OpenAPI documenta contratos HTTP; AsyncAPI puede describir mensajería. Versionado, idempotencia, pagination, rate limiting, timeouts y errores forman parte del contrato operativo.

## 8.5 Identidad

OAuth 2.0 delega autorización; OpenID Connect añade autenticación/identidad. JWT es un formato de token, no un protocolo. Debe validarse firma, issuer, audience, expiración y claims; no se cifra por defecto.

## 8.6 Internacionalización/localización

Unicode/UTF-8, locale, idioma, pluralización, collation, formatos de fecha/número/moneda, calendarios, RTL y zonas horarias. Almacenar instantes en UTC es habitual, pero hay eventos futuros ligados a zona local que requieren conservar zona/regla, no solo offset.

## 8.7 Seguridad web para test/supuesto

Entradas parametrizadas, output encoding contextual, control de acceso server-side, MFA cuando proceda, secretos fuera de código, dependencias actualizadas, logging sin datos sensibles, cabeceras, TLS, rate limiting y gestión de sesión. OWASP sirve como guía de riesgos, no como norma jurídica.

## 9. Test

* HTTPS ≠ aplicación segura.
* CSR ≠ SPA necesariamente.
* i18n ≠ l10n.
* Cookie HttpOnly reduce acceso JS; Secure exige HTTPS.
* OAuth2 ≠ protocolo de autenticación; OIDC añade identidad.

## 10. Supuesto

Dibuja front/API/servicios/datos, identidad, seguridad, caché/CDN, logs/trazas, accesibilidad, i18n y despliegue.

## 11. Resumen

Web moderna combina fundamentos HTTP con frontend, backend, APIs, seguridad, rendimiento e internacionalización.

# III.13 — Calidad del software y medición

Cobertura oficial que debe quedar dominada: Calidad del software y medición: modelos, métricas, normas y estándares.

## 1. Calidad

Grado en que producto satisface necesidades/requisitos bajo condiciones. Distingue quality assurance (proceso/preventivo) y quality control (evaluación del producto).

## 2. ISO/IEC 25010:2023

La edición 2023 reemplaza a 2011 y define un modelo de calidad de producto con **9 características**. El examen puede contener material antiguo, pero el apunte debe reflejar estándar vigente y señalar transición.

Las características vigentes incluyen adecuación funcional, eficiencia de desempeño, compatibilidad, capacidad de interacción, fiabilidad, seguridad, mantenibilidad, flexibilidad y safety; cada una se subdivide. Para estudiar, importa entender que el modelo sirve para especificar, medir y evaluar calidad durante el ciclo.

## 3. Métricas

Producto: tamaño, complejidad, duplicación, cobertura, defect density, deuda técnica, rendimiento. Proceso: lead/cycle time, defect escape, change failure rate. Servicio: disponibilidad, latencia, error rate, SLO.

## 4. Complejidad ciclomática

McCabe mide caminos independientes del grafo de control; una formulación común V(G)=E−N+2P o decisiones+1 para componente simple. Alta complejidad incrementa dificultad de prueba/mantenimiento, pero el número no debe usarse aislado.

## 5. Mantenibilidad

Modularidad, analizabilidad, modificabilidad, testabilidad y reutilización según modelo/edición aplicable. Reducir acoplamiento, aumentar cohesión, pruebas y documentación.

## 6. Calidad en proceso

Definition of Done, reviews, lint/static analysis, testing, quality gates, gestión de deuda, RCA y mejora continua.

## 6.1 SQuaRE y modelos de calidad

**Base A1 correcta:** 103, versión 31.1 actualizada 24/02/2026. Se elimina la vieja derivación hacia A1 050. **Complemento oficial:** ISO/IEC 25010:2023 es la edición vigente del modelo de calidad de producto y define nueve características.

La familia **SQuaRE (ISO/IEC 25000)** organiza requisitos y evaluación de calidad. Para estudiar no es necesario memorizar todas las partes, pero sí entender la cadena: definir modelo/requisitos → seleccionar medidas → evaluar → aceptar/mejorar.

## 6.2 Nueve características de ISO/IEC 25010:2023

Functional suitability, performance efficiency, compatibility, interaction capability, reliability, security, maintainability, flexibility y safety. La terminología de 2023 cambia respecto a material 2011: por eso en test hay que saber identificar qué edición se pregunta.

## 6.3 Métricas de producto

* densidad de defectos;
* complejidad ciclomática;
* duplicación;
* acoplamiento/cohesión;
* cobertura;
* tiempo de respuesta/throughput;
* disponibilidad y tasa de error;
* vulnerabilidades por severidad/edad.

Una métrica debe tener definición, unidad, población, periodo y objetivo. Comparar proyectos distintos con “líneas de código” sin contexto es una mala práctica.

## 6.4 Métricas de proceso/entrega

Lead time, deployment frequency, change failure rate, mean time to restore (con cautela sobre definiciones), defect escape rate y tiempo de resolución. Las métricas DORA pueden orientar entrega, pero no sustituyen calidad funcional ni seguridad.

## 6.5 QA, QC y mejora

**QA** diseña procesos preventivos: estándares, revisiones, formación, pipeline, auditoría. **QC** evalúa producto: pruebas, inspecciones y mediciones. RCA, retrospectivas y mejora continua cierran el ciclo.

## 6.6 Modelos de proceso

EFQM/ISO 900x pueden aparecer en tus fuentes como calidad organizativa/servicio, pero el epígrafe GSI aquí se centra en **software y medición**. Se conservan solo como contexto, evitando convertir III.13 en el tema A1 completo de calidad organizativa.

## 7. Test

* QA ≠ QC.
* ISO/IEC 25010:2023 es edición actual.
* Cobertura ≠ ausencia de defectos.
* Complejidad ≠ calidad total.
* Métrica sin objetivo/contexto puede inducir comportamientos perversos.

## 8. Supuesto

Convierte calidad en NFR medibles: disponibilidad, p95, errores, seguridad, accesibilidad, mantenibilidad y criterios de aceptación. Añade quality gates y SLO.

## 9. Resumen

Calidad debe especificarse y medirse. Actualiza el modelo a ISO/IEC 25010:2023 y usa métricas con contexto.

# III.14 — Accesibilidad, usabilidad, UX y comunicación digital

Cobertura oficial que debe quedar dominada: Accesibilidad y diseño universal; usabilidad de productos/servicios tecnológicos; experiencia de usuario; guía de comunicación digital de la AGE.

## 1. Accesibilidad

Diseñar para que personas con distintas capacidades puedan percibir, operar, entender e interactuar. No es una “adaptación al final”.

## 2. Marco

En sector público español: RD 1112/2018 y marco europeo/EN 301 549. La referencia armonizada actualmente emplea WCAG 2.1 en gran parte; W3C recomienda WCAG 2.2 para máxima aplicabilidad futura. Distingue obligación vigente y recomendación técnica más reciente.

## 3. WCAG

Principios POUR: Perceptible, Operable, Understandable, Robust. Niveles A, AA y AAA. WCAG 2.2 añade criterios de foco, dragging, tamaño de objetivo, ayuda consistente, entrada redundante y autenticación accesible.

## 4. Prácticas

* HTML semántico;
* teclado completo;
* focus visible/no oculto;
* alternativas textuales;
* subtítulos/transcripciones;
* contraste;
* labels y errores comprensibles;
* ARIA solo cuando HTML nativo no basta;
* reflow/zoom;
* no depender solo de color.

## 5. Usabilidad

Eficacia, eficiencia y satisfacción en contexto. Heurísticas, pruebas con usuarios, análisis de tareas, consistencia, feedback, prevención/recuperación de errores.

## 6. UX

Experiencia global antes/durante/después. Incluye utilidad, usabilidad, accesibilidad, confianza y percepción. UX ≠ diseño visual.

## 7. Investigación

Entrevistas, analytics, journey maps, prototipos, usability testing y métricas. Diseñar con usuarios reales evita asumir necesidades.

## 8. Comunicación digital AGE

Aplicar identidad, claridad, lenguaje comprensible, consistencia, accesibilidad y patrones oficiales vigentes. No memorizar capturas antiguas de una guía si cambian; priorizar principios y versión vigente.

## 8.1 Marco jurídico-técnico en sector público

**Base A1:** 044 + 094 + 133. **Complemento vigente:** RD 1112/2018 para sitios web y apps móviles del sector público; EN 301 549 como estándar europeo técnico. W3C mantiene WCAG 2.2 como recomendación más reciente y anima a usarla; la versión vigente de EN 301 549 todavía referencia ampliamente WCAG 2.1, por lo que no deben confundirse “última recomendación W3C” y “referencia legal armonizada”.

## 8.2 Conformidad y evaluación

WCAG organiza criterios bajo POUR y niveles A/AA/AAA. Evaluar accesibilidad requiere combinación de herramienta automática, revisión manual, teclado, foco, lector de pantalla cuando proceda, zoom/reflow, contraste, multimedia y formularios. La automatización detecta solo una parte.

## 8.3 Declaración y mecanismo de comunicación

Los servicios públicos deben prever declaración de accesibilidad y mecanismos de comunicación/queja conforme al marco aplicable. La accesibilidad se gestiona como proceso: evaluación inicial, corrección, monitorización y actualización cuando cambia contenido o tecnología.

## 8.4 Diseño universal

Busca que producto sea utilizable por el mayor número posible de personas sin adaptación específica, complementado con ajustes cuando sean necesarios. Principios prácticos: múltiples modos de interacción, tolerancia a errores, información perceptible, bajo esfuerzo, tamaño/espacio adecuados y flexibilidad.

## 8.5 Usabilidad

ISO 9241-11 es una referencia conceptual: eficacia, eficiencia y satisfacción en un contexto de uso. Métodos: evaluación heurística, walkthrough, pruebas moderadas/no moderadas, success rate, tiempo de tarea, errores y SUS como ejemplo de cuestionario. Usabilidad no garantiza accesibilidad ni viceversa.

## 8.6 UX

Research → definición de problema → arquitectura de información/flujos → prototipo → prueba → iteración. Personas y journey maps son herramientas, no entregables obligatorios. Diseñar con evidencia evita “usuario promedio” ficticio.

## 8.7 Guía de comunicación digital AGE

Debe estudiarse desde la versión vigente disponible en la AGE: identidad, consistencia, lenguaje claro, arquitectura de información, componentes/patrones, accesibilidad y comunicación. Evita memorizar capturas o URLs que cambian; prioriza principios, responsabilidades y patrones estables.

## 8.8 Trampas

* WCAG 2.2 no “deroga” WCAG 2.1.
* AA no significa cumplir algunos criterios A y AA: requiere satisfacer todos los aplicables de A y AA.
* ARIA no arregla HTML incorrecto; primera regla práctica: usar semántica nativa.
* Accesibilidad ≠ solo discapacidad visual.
* UX ≠ UI estética.

## 9. Test

* Accesibilidad ≠ usabilidad.
* UX ≠ UI.
* ARIA no sustituye HTML semántico.
* A/AA/AAA son niveles de conformidad.
* Automatización no detecta todos los problemas de accesibilidad.

## 10. Supuesto

Incluye accesibilidad desde requisitos, componentes accesibles, testing automático+manual+usuarios, declaración de accesibilidad, feedback y monitorización.

## 11. Resumen

Diseño universal, WCAG, usabilidad y UX deben integrarse desde requisitos hasta pruebas.

# III.15 — Minería de datos, OLAP, Big Data, Hadoop y NoSQL

Cobertura oficial que debe quedar dominada: Minería de datos: planteamiento y resolución de problemas, tecnologías y algoritmos. OLAP, Big Data, Hadoop o entornos similares y bases de datos NoSQL.

## 1. Minería de datos

Descubre patrones/modelos en datos. Tareas: clasificación, regresión, clustering, asociación, anomalías y reducción dimensional.

## 2. Proceso

Entender negocio → entender datos → preparar → modelar → evaluar → desplegar/monitorizar. CRISP-DM es referencia clásica.

## 3. OLAP

Analítica multidimensional, cubos, dimensiones/jerarquías/medidas; slice, dice, drill-down, roll-up, pivot. Se relaciona con BI del II.04.

## 4. Big Data

Volumen, velocidad, variedad, veracidad y valor como marco habitual. Lo importante es cuándo arquitectura distribuida aporta valor respecto a BD/warehouse convencional.

## 5. Hadoop

El BOE lo exige. Ecosistema clásico: HDFS para almacenamiento distribuido, YARN para recursos y MapReduce para procesamiento batch. HDFS replica bloques y favorece data locality. Hadoop no equivale a todo Big Data.

## 6. Spark

Motor distribuido general, procesamiento en memoria cuando es posible, batch/streaming/SQL/ML. Puede usar HDFS u otros almacenamientos.

## 7. NoSQL

| Familia | Uso típico |
| --- | --- |
| clave-valor | caché/sesiones/lookup simple |
| documental | documentos JSON-like y esquema flexible |
| columnar wide-column | gran escala distribuida por claves |
| grafos | relaciones y recorridos |

## 8. CAP

Ante partición de red, un sistema distribuido debe priorizar consistencia o disponibilidad en ese contexto. CAP no significa elegir permanentemente “dos de tres” sin matices.

## 9. Consistencia

Fuerte, eventual y modelos intermedios. BASE se contrasta a menudo con ACID, pero no son normas mutuamente excluyentes.

## 10. Lake, warehouse y lakehouse

Data lake almacena datos heterogéneos en formatos flexibles; warehouse modela datos curados para BI; lakehouse intenta combinar almacenamiento abierto con capacidades de gestión/tabla/SQL. Seleccionar por necesidades, no moda.

## 11. Gobierno

Catálogo, linaje, calidad, privacidad, retención, seguridad, costes y ownership. En plataformas masivas, gobernanza es requisito arquitectónico.

## 11.1 Algoritmos de minería

**Base A1:** 075. **Complemento GSI:** se amplía “tecnologías y algoritmos” exigido por BOE.

| Tarea | Algoritmos/conceptos | Métrica típica |
| --- | --- | --- |
| clasificación | árboles, regresión logística, SVM, k-NN, redes | precision, recall, F1, ROC-AUC según caso |
| regresión | lineal, árboles/ensembles | MAE, RMSE, R² |
| clustering | k-means, jerárquico, DBSCAN | silhouette + validación de negocio |
| asociación | Apriori/FP-Growth | support, confidence, lift |
| anomalías | estadísticos, isolation forest, densidad | precision/recall con fuerte desbalance |

## 11.2 Preparación de datos

Limpieza, missing values, outliers, codificación, escalado, selección/creación de features y partición train/validation/test. Evita **data leakage**: información del futuro/test no debe influir entrenamiento/preprocesamiento.

## 11.3 Hadoop con más detalle

**HDFS:** NameNode gestiona namespace/metadatos; DataNodes almacenan bloques; replicación para tolerancia. **YARN:** gestión de recursos/ejecución. **MapReduce:** map → shuffle/sort → reduce para batch. La arquitectura clásica favorece mover cómputo hacia datos.

## 11.4 Ecosistema “o similares”

Spark ofrece ejecución distribuida y APIs para batch/SQL/streaming/ML; Kafka u otros logs/brokers se usan para ingestión/event streaming; almacenamiento de objetos y formatos columnares Parquet/ORC son comunes. Son ejemplos actuales, no sustitutos de los conceptos Hadoop del BOE.

## 11.5 NoSQL: modelo de acceso

**Key-value:** acceso por clave. **Documental:** agregados JSON-like. **Wide-column:** distribución masiva por claves/column families. **Grafo:** relaciones/recorridos. Diseña a partir de consultas y consistencia; no migres de relacional solo por volumen.

## 11.6 Particionado y replicación

Sharding distribuye datos por clave/rango/hash; una mala clave crea hot spots. Replicación mejora lectura/disponibilidad pero introduce lag/consistencia y gestión de fallos. CAP se analiza cuando existe partición, no como lema aislado de “elige dos”.

## 11.7 Batch vs streaming

Batch procesa conjuntos finitos; streaming procesa eventos continuos. Conceptos: event time vs processing time, ventanas, late events, exactly-once como propiedad compleja que depende de extremo a extremo, no una casilla mágica del broker.

## 11.8 Supuesto

Empieza por volumen/velocidad/variedad y SLA. Propón ingestión, almacenamiento, procesamiento batch/stream, catálogo/linaje, calidad, seguridad, retención, costes y consumo. Justifica cada tecnología por requisito y planifica observabilidad del pipeline.

## 12. Test

* Hadoop ≠ HDFS.
* HDFS ≠ base de datos.
* NoSQL ≠ “sin SQL” necesariamente; significa familia no relacional.
* CAP aparece ante partición.
* Data lake ≠ warehouse.
* OLAP ≠ data mining.

## 13. Supuesto

Justifica volumen/velocidad/variedad, ingestión, almacenamiento, batch/stream, procesamiento, catálogo, seguridad, costes y consumidores. No propongas Hadoop/Spark si una BD convencional resuelve mejor.

## 14. Resumen

Big Data es arquitectura distribuida por necesidad; Hadoop sigue siendo materia de examen, mientras NoSQL se elige según modelo de acceso/consistencia.

# ANEXO A — Memorización rápida

| Concepto | Clave |
| --- | --- |
| Ciclo vs metodología | qué/cuándo vs cómo |
| Scrum | PO / SM / Developers |
| Kanban | flujo + WIP |
| Requisito bueno | claro, verificable, trazable |
| Pila / cola | LIFO / FIFO |
| CI / CD | integración / entrega-despliegue |
| Testing | unit / integration / system / acceptance |
| UP | Inicio / Elaboración / Construcción / Transición |
| UML | lenguaje, no metodología |
| Jakarta EE | 11 actual; Java 17+ |
| .NET | 10 LTS actual en 2026 |
| ISO 25010 | edición 2023, 9 características |
| WCAG | POUR; A/AA/AAA |
| Hadoop | HDFS + YARN + MapReduce como núcleo clásico |
| CAP | decisión C/A cuando hay partición |

# ANEXO B — Estrategia de estudio

**Muy alta prioridad de supuesto:** III.02, III.03, III.04, III.06, III.07, III.09, III.12 y III.14. Practicar diagramas, pipelines, requisitos, modelos de datos, estrategia de pruebas y web segura/accesible.

**Primera vuelta:** comprender. **Segunda:** comparar conceptos cercanos. **Tercera:** test + mini-supuestos de 15–20 minutos.

# Fuentes y control de actualidad

Jerarquía de autoridad: el BOE define el alcance; PreparaTIC aporta la base de estudio; cuando una fuente A1 no cubre o está desactualizada, la ampliación se marca como complemento GSI y se contrasta con documentación oficial del estándar/plataforma. Las versiones concretas se incluyen solo para corregir obsolescencia, no como sustituto de los conceptos estables.

* BOE-A-2025-26262, Anexo IX, Bloque III.
* PreparaTIC A1 según mapa maestro: 086, 088, 037, 094, 091, 063/064, 070/071/076, 097/102, 096, 101/100, 089/090/093, 067, 066, 065, 103, 044/133, 075.
* Jakarta EE 11 — Eclipse Foundation; Java 17+.
* Microsoft .NET Support Policy, actualizada 14/07/2026: .NET 10 LTS activo hasta 14/11/2028.
* ISO/IEC 25010:2023 — modelo de calidad de producto, 9 características.
* W3C WCAG 2.2 — recomendación actual; EN 301 549 mantiene referencia jurídica técnica que debe comprobarse según versión aplicable.

**Control de actualidad:** 21/08/2026.
