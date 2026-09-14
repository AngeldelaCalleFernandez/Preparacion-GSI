# GSI A2 — Guía de preparación del segundo ejercicio (SUPUESTO PRÁCTICO)

**Formato vigente de ingreso libre:** se elige uno de dos supuestos relacionados con el programa. El supuesto tiene 5 preguntas y un máximo de 180 minutos. La puntuación directa máxima es 50: 30 por aplicación de conocimientos técnicos, 10 por capacidad de análisis, 5 por sistemática y 5 por expresión escrita.

## 1. Qué exige realmente el tribunal

El supuesto no premia una lista de tecnologías. Premia una solución coherente con los requisitos y restricciones, capaz de explicar decisiones y riesgos. La mayor parte de la puntuación es técnica, pero 20 de 50 puntos dependen de análisis, estructura y redacción; una respuesta técnicamente buena pero desordenada pierde una parte sustancial de la nota.

## 2. Método de 180 minutos

**Lectura y elección (10–15 min):** compara los dos supuestos por familiaridad, número de preguntas dominadas y riesgo. Identifica actores, requisitos funcionales, no funcionales, datos, integraciones y normativa.

**Esqueleto (10 min):** escribe para cada pregunta 4–7 ideas obligatorias y dependencias entre respuestas. Decide una arquitectura común para no contradecirte.

**Desarrollo (aprox. 28–30 min por pregunta):** responde exactamente lo pedido, empezando por decisión y justificación. Reserva los últimos 10–15 minutos para revisar coherencia, términos y omisiones.

## 3. Plantilla de respuesta

**1. Supuestos y requisitos.** Expón solo las asunciones necesarias y separa hechos del enunciado de decisiones propias.

**2. Propuesta.** Describe componentes, flujos y responsabilidades antes de enumerar productos.

**3. Justificación.** Relaciona cada decisión con disponibilidad, seguridad, interoperabilidad, mantenibilidad, coste, rendimiento o plazo.

**4. Seguridad y cumplimiento.** ENS, protección de datos, identidad/firma, ENI, accesibilidad y continuidad cuando sean aplicables.

**5. Operación.** Monitorización, logs, backup, RPO/RTO, parcheo, incidentes, capacidad y soporte.

**6. Riesgos y alternativas.** Indica al menos los trade-offs relevantes; evita vender una tecnología como universalmente superior.

## 4. Arquitectura que conviene saber dibujar de memoria

Usuario/canal → WAF o reverse proxy → balanceador/API gateway → front-end → servicios de negocio → persistencia/cache/broker → integraciones con servicios externos. De forma transversal: IAM, secretos, cifrado, logging/SIEM, monitorización, CI/CD, backup y continuidad. Para AAPP añade cuando proceda Red SARA y servicios comunes (Cl@ve, @firma/VALIDe, DIR3/SIA, GEISER/SIR, INSIDE, DEHú, Carpeta Ciudadana, Plataforma de Intermediación, Representa).

## 5. Checklists por tipo de pregunta

| Pregunta | No olvidar |
| --- | --- |
| Arquitectura | capas, componentes, flujos, integración, HA, escalado, datos, seguridad y observabilidad |
| Red/CPD | zonas, direccionamiento/VLAN, redundancia, routing, firewall, QoS, capacidad, DR |
| Datos | modelo, claves, transacciones, índices, HA, backup, cifrado, retención y gobierno |
| Seguridad | riesgo, ENS, IAM/MFA, mínimo privilegio, segmentación, cifrado, logs, incidentes, continuidad |
| Proyecto | alcance, metodología, planificación, riesgos, pruebas, cambios, despliegue, formación y costes |
| Administración electrónica | Leyes 39/40, RD 203/2021, ENS, ENI/NTI, identidad/firma, expediente, notificación, servicios comunes |

## 6. Cómo usar los supuestos A1 de RELEASE/PreparaTIC

Úsalos como biblioteca de razonamiento: diagramas, arquitectura lógica/física, seguridad, dimensionamiento y forma de justificar decisiones. No copies su estructura de tercer ejercicio A1 ni prepares defensa oral: el GSI actual es un supuesto escrito de 5 preguntas. Extrae patrones reutilizables y reescríbelos al nivel y tiempo de GSI.

## 7. Errores que penalizan

Responder otra cosa distinta a lo preguntado; contradicciones entre diagramas y texto; inventar requisitos sin declararlos; citar normativa obsoleta; nombrar herramientas sin arquitectura; olvidarse de operación/backup; hablar de seguridad solo como firewall; no justificar alternativas; usar siglas oscuras sin primera explicación; dedicar media respuesta a introducciones genéricas.

## 8. Entrenamiento

Primero practica preguntas aisladas de 25–30 minutos. Después combina cinco preguntas con una arquitectura común. Corrige con cuatro notas separadas: técnica /30, análisis /10, sistemática /5 y expresión /5. Reescribe solo las respuestas que tengan fallos estructurales; el objetivo es desarrollar una plantilla mental estable y adaptable.

## 9. Fuentes

Programa, formato y criterios: BOE-A-2025-26262. Convocatoria de ingreso libre 2025 y ejercicio realizado el 23 de mayo de 2026: Sede electrónica del INAP. Material A1 de RELEASE/RELEASE\_VOLCADOS: apoyo técnico, no simulacro fiel.
