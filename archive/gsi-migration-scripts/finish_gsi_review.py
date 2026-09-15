"""Apply explicitly authored second-pass corrections; never activate questions."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
# Question-specific decisions from source comparison, not generated substitutions.
revisions = {
    'B1-T06-014': ['Presunción absoluta de veracidad del contenido firmado', 'Equivalencia con una firma manuscrita solo si interviene un notario', 'Efecto jurídico idéntico al de cualquier firma simple sin requisitos adicionales'],
    'B1-T07-005': ['Limitación de la finalidad', 'Exactitud de los datos', 'Limitación del plazo de conservación'],
    'B2-T04-006': ['Data Warehouse corporativo completo', 'Sistema OLTP de transacciones operativas', 'Cubo OLAP como sinónimo obligatorio de cualquier almacén por área'],
    'B2-T05-015': ['Atomicidad', 'Aislamiento', 'Consistencia'],
    'B2-T13-012': ['Correlacionar registros y generar alertas como función central de SIEM', 'Administrar sesiones y credenciales privilegiadas como función de PAM', 'Orquestar playbooks de respuesta como función de SOAR'],
    'B2-T08-020': ['Fragmentan si el paquete supera la MTU del enlace de salida', 'Fragmentan únicamente cuando el siguiente salto es IPv6', 'Fragmentan después de traducir la cabecera a su formato mínimo'],
    'B2-T10-020': ['RTO: pérdida máxima de datos; RPO: tiempo de recuperación', 'RTO: duración de retención; RPO: frecuencia de pruebas', 'RTO: tiempo medio entre fallos; RPO: tiempo medio de reparación'],
    'B2-T12-006': ['Distribuir llamadas entrantes a colas según reglas de ACD', 'Integrar telefonía y CRM como función principal de CTI', 'Guiar al usuario por menús de voz como función de IVR'],
    'B3-T01-017': ['Únicamente la aprobación de requisitos de la fase de análisis', 'Un informe de viabilidad sin procedimiento de transición', 'El diseño de arquitectura sin criterios de recuperación'],
    'B3-T04-012': ['Lectura sucia de cambios no confirmados', 'Actualización perdida al sobrescribir una escritura', 'Interbloqueo entre transacciones que esperan recursos'],
    'B3-T05-018': ['Opera sin memoria auxiliar en todos los casos', 'Su tiempo siempre está acotado por O(n)', 'Su complejidad no depende del orden inicial de la entrada'],
    'B3-T07-008': ['Análisis de valores límite para una única variable numérica', 'Partición de equivalencia sin modelar combinaciones de reglas', 'Cobertura de sentencias basada en la estructura interna del código'],
    'B3-T13-001': ['Cumplir exclusivamente el presupuesto del proyecto', 'Maximizar rendimiento con independencia de las necesidades', 'Medir únicamente el número de defectos detectados durante desarrollo'],
    'B4-T02-001': ['El conjunto de datos y estructuras persistentes considerado aisladamente', 'El esquema lógico de tablas y restricciones considerado aisladamente', 'Una copia lógica exportada del contenido de la base'],
    'B4-T05-018': ['Volumen transferido por segundo frente a operaciones por segundo', 'Tiempo por operación frente a capacidad útil del volumen', 'Número de operaciones simultáneas frente a tiempo de respuesta'],
    'B4-T06-006': ['Duplicar la cadena de alimentación eléctrica hasta cada servidor', 'Añadir por sí mismos un equipo de climatización redundante N+1', 'Medir la energía TI consumida sin incluir refrigeración'],
    'B4-T09-014': ['Registros completos de cada paquete equivalentes a una captura sin muestreo', 'Eventos de aplicación equivalentes a un servidor Syslog', 'Objetos de gestión de una MIB consultados mediante SNMP'],
    'B4-T13-005': ['Mantener todas las direcciones de los extremos sin traducción', 'Aportar por sí solo autenticación criptográfica de los extremos', 'Sustituir las políticas de filtrado de un firewall'],
}
changes=[]
for path in sorted((ROOT/'content/question-drafts').glob('*.txt')):
    topic=None; counts={}; output=[]
    for line in path.read_text('utf-8').splitlines():
        if line.startswith('@'): topic=line[1:]
        if line and not line.startswith(('#','@')):
            counts[topic]=counts.get(topic,0)+1
            key=f'{topic}-{counts[topic]:03}'
            if key in revisions:
                fields=line.split('|'); fields[3:6]=revisions[key]; revised='|'.join(fields)
                if revised!=line: changes.append({'id':'AI-GSI-'+key,'previous':line,'revised':revised})
                line=revised
        output.append(line)
    path.write_text('\n'.join(output)+'\n','utf-8')
if changes:
    p=ROOT/'logs/gsi-editorial-corrections.json'; log=json.loads(p.read_text('utf-8'))
    log['changes'].extend(changes); p.write_text(json.dumps(log,ensure_ascii=False,indent=2)+'\n','utf-8')
print(f'{len(changes)} second-pass editorial corrections; no validation decisions written.')
