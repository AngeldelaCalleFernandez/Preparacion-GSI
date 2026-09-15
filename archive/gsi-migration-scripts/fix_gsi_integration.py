from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def replace(path, old, new):
    p=ROOT/path; text=p.read_text('utf-8')
    if old not in text:
        if new in text: return
        raise ValueError(path+': expected text absent')
    p.write_text(text.replace(old,new),'utf-8',newline='\n')

# Inspect parsed DOM attributes, not words such as "Big Data:" in safe prose.
replace('assets/js/topic-content-service.js', '  if (RAW_FORBIDDEN_RE.test(rawHtml)) {\n    throw new Error("El fragmento de contenido contiene marcado o URL no permitidos.");\n  }\n', '')
# Include exam and reinforcement attempts in unseen/failed selection.
replace('assets/js/training.js', 'import { filterTrainingQuestions }', 'import { loadAnalyticsStore } from "./analytics-storage.js?m3";\nimport { filterTrainingQuestions }')
replace('assets/js/training.js', 'filterTrainingQuestions(data.questions, getStoredResponses(), {', 'filterTrainingQuestions(data.questions, [...getStoredResponses(), ...loadAnalyticsStore(false).store.attempts], {')
# Static hosting can cache module URLs independently; version every internal import.
for p in (ROOT/'assets/js').glob('*.js'):
    text=p.read_text('utf-8')
    import re
    text=re.sub(r'(from\s+["\']\./[^"\']+\.js)(?:\?[^"\']*)?(["\'])',r'\1?gsi2\2',text)
    p.write_text(text,'utf-8',newline='\n')
p=ROOT/'index.html'; text=p.read_text('utf-8').replace('src="assets/js/app.js"','src="assets/js/app.js?gsi2"'); p.write_text(text,'utf-8',newline='\n')
p=ROOT/'assets/css/styles.css'; text=p.read_text('utf-8')
if '.written-statement' not in text:
    text+='''\n/* Written GSI practice. */
.written-statement { white-space: pre-line; line-height: 1.65; }
.written-choices { display: grid; gap: 1rem; }
#practice-app textarea { display: block; width: 100%; box-sizing: border-box; margin: .6rem 0 1.5rem; padding: .8rem; font: inherit; line-height: 1.6; resize: vertical; }
#practice-app label { display: block; margin-top: .8rem; }
#practice-app .written-check { display: flex; gap: .6rem; align-items: baseline; }
#practice-app details { padding: 1rem; margin: 1rem 0; }
.topic-content table { display: block; overflow-x: auto; max-width: 100%; border-collapse: collapse; margin: 1rem 0; }
.topic-content th, .topic-content td { border: 1px solid var(--color-border, #cbd5e1); padding: .65rem; vertical-align: top; min-width: 7rem; }
.topic-content th { text-align: left; }
.topic-content { overflow-wrap: anywhere; }
'''
    p.write_text(text,'utf-8',newline='\n')
print('GSI integration repaired.')
