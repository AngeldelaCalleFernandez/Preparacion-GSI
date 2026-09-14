"""Apply the checked-in, question-specific editorial corrections (no approval changes)."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
directory = ROOT / 'content/question-drafts'
revisions = json.loads((directory / 'distractor-revisions.json').read_text('utf-8'))
revisions['B4-T03-004'] = ['Gestión de peticiones estándar', 'Gestión de accesos', 'Solo gestión de incidentes sin analizar recurrencia']
replacement_rows = {
    'B1-T03-001': '5|¿Durante qué plazo pueden presentarse mociones de censura alternativas según los apuntes?|En los dos primeros días|Durante los cinco días posteriores a la votación|Solo en las primeras 48 horas después de aprobarse la censura|En cualquier momento posterior a la investidura del candidato|Las alternativas se presentan en los primeros dos días; la votación de la moción exige esperar cinco días.',
    'B1-T03-003': '5|Antes de plantear una cuestión de confianza, ¿qué actuación colegiada exige el procedimiento descrito?|Deliberación previa del Consejo de Ministros|Autorización previa del Senado por mayoría absoluta|Informe vinculante del Consejo de Estado|Aprobación previa de una moción de censura|La iniciativa corresponde al Presidente, previa deliberación del Consejo de Ministros; no requiere las otras actuaciones indicadas.',
    'B2-T03-005': '2|Una plataforma compila a una representación intermedia que luego ejecuta un runtime. ¿Qué ejemplos ofrece el tema?|Java y .NET|C con compilación nativa como único modelo|SQL como formato de código máquina|Prolog como requisito exclusivo de compilación nativa|Java y .NET utilizan bytecode o lenguaje intermedio; compilar no significa necesariamente producir directamente código máquina.',
    'B3-T12-007': '7|Al almacenar instantes en UTC, ¿qué debe seguir considerándose para mostrarlos al usuario?|La zona horaria pertinente para su presentación|Solo el idioma, porque UTC elimina las zonas|Un offset fijo universal para todos los usuarios|La supresión de formatos regionales|Almacenar en UTC no elimina la necesidad de interpretar y mostrar fechas según zona y contexto del usuario.'
}
changes = []
for path in sorted(directory.glob('*.txt')):
    counts, topic, lines = {}, None, []
    for line in path.read_text('utf-8').splitlines():
        if line.startswith('@'): topic = line[1:]
        if line and not line.startswith(('#', '@')):
            counts[topic] = counts.get(topic, 0) + 1
            key = f'{topic}-{counts[topic]:03}'
            previous = line
            if key in replacement_rows: line = replacement_rows[key]
            if key in revisions:
                fields = line.split('|')
                fields[3:6] = revisions[key]
                line = '|'.join(fields)
            if line != previous: changes.append({'id': 'AI-GSI-' + key, 'previous': previous, 'revised': line})
        lines.append(line)
    path.write_text('\n'.join(lines) + '\n', 'utf-8')
if changes:
    (ROOT / 'logs/gsi-editorial-corrections.json').write_text(json.dumps({'date': '2026-09-14', 'reason': 'Revisión editorial de distractores, dos duplicados semánticos y respaldo explícito de fuente; no implica aceptación automática.', 'changes': changes}, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(f'{len(changes)} question-specific corrections applied; validation status unchanged.')
