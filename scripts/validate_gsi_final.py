#!/usr/bin/env python3
"""Validate GSI integrity and release readiness; exit 2 for pending editorial gates.

No question status is changed. A passing structural check is never editorial approval.
"""
import csv
import hashlib
import json
import re
import sys
import unicodedata
import xml.etree.ElementTree as ET
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT=Path(__file__).resolve().parents[1]
DATE='2026-09-15'
COUNTS=[10,16,15,16]
def load(p): return json.loads((ROOT/p).read_text('utf-8'))
def sha(s): return hashlib.sha256(s.encode('utf-8')).hexdigest()
def digest(p): return hashlib.sha256((ROOT/p).read_bytes()).hexdigest()
def norm(s): return re.sub(r'\W+',' ',unicodedata.normalize('NFKC',s).casefold()).strip()
def save(p,x): (ROOT/p).write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n','utf-8')

class Fragment(HTMLParser):
    def __init__(self): super().__init__(convert_charrefs=True); self.ids=[];self.links=[];self.text=[];self.unsafe=[]
    def handle_starttag(self,tag,attrs):
        for key,value in attrs:
            if key=='id':self.ids.append(value)
            if key in ('href','src'):self.links.append(value or '')
            if key.startswith('on') or key=='srcdoc':self.unsafe.append(key)
        if tag in ('script','iframe','object','embed','form','base'):self.unsafe.append(tag)
    def handle_data(self,value):self.text.append(value)

def main():
    errors=[]; checks=[]; blockers=[]
    def check(ok,message):
        if not ok:errors.append(message)
        else:checks.append(message)
    syllabus=load('data/syllabus.json'); blocks=syllabus['blocks'];topics={t['id']:t for b in blocks for t in b['topics']}
    manifest=load('data/gsi-source-manifest.json'); index=load('data/topic-content.json');sources={s['id']:s for s in load('data/sources.json')['sources']}
    inventory=load('data/gsi-drive-inventory.json'); known={e['id'] for e in inventory['main']}|{e['id'] for e in inventory['auxiliary']['items']}|{e['id'] for e in inventory['auxiliary']['roots']}
    check([len(b['topics']) for b in blocks]==COUNTS and len(topics)==57,'57 temas; distribución 10/16/15/16')
    check([o['id'] for o in load('data/oppositions.json')['oppositions']]==['OPP-GSI'],'Única oposición GSI')
    xml=ET.parse(ROOT/'documents/sources/gsi/BOE-A-2025-26262.xml')
    items=[' '.join(''.join(e.itertext()).split()) for e in xml.find('texto')]
    start=items.index('ANEXO IX');end=items.index('ANEXO X',start+1);annex=items[start:end];program=annex[annex.index('4. Programa.')+1:]
    official=[re.sub(r'^\d+\.\s+','',t) for t in program if re.match(r'^\d+\.\s+',t)]
    check([t['title'] for t in topics.values()]==official,'Títulos y orden idénticos al Anexo IX')
    check({e['topicId'] for e in index['topics']}==set(topics) and len(index['topics'])==57,'Índice de 57 contenidos sin duplicados')
    check({e['topic_id'] for e in manifest['topics']}==set(topics) and len(manifest['topics'])==57,'Manifiesto de 57 procedencias sin duplicados')
    imap={e['topicId']:e for e in index['topics']}; mmap={e['topic_id']:e for e in manifest['topics']}
    for tid,t in topics.items():
        m=mmap[tid];text=(ROOT/m['markdown_path']).read_text('utf-8');markup=(ROOT/m['html_path']).read_text('utf-8');frag=Fragment();frag.feed(markup)
        source=sources[m['source_id']]; canonical=(ROOT/source['documents'][0]['path']).read_text('utf-8')
        section=re.search(r'(?m)^#+ '+re.escape(m['locator'])+r'\s*[—–-].*\n',canonical)
        check(section is not None,tid+': localizador en manual original')
        if section:
            rest=canonical[section.end():];boundary=re.search(r'(?m)^#+ (?:I|II|III|IV)\.\d+\s*[—–-]',rest)
            study=rest[:boundary.start()].strip() if boundary else rest.strip()
            check(sha(study)==m['study_sha256'] and study in text and len(study)==m['study_characters'],tid+': apuntes completos conservados y hash exacto')
        check(len(' '.join(frag.text))>1500 and len(text)>1500,tid+': contenido sustancial')
        check(text.startswith('# '+t['title']+'\n') and '## Resumen de repaso' in text,tid+': título oficial y repaso')
        check(digest(m['html_path'])==imap[tid]['checksum'],tid+': HTML íntegro')
        check(m['drive_id'] in known and m['url']==source['url'] and m['version']=='V2.1',tid+': fuente canónica inventariada')
        check(not frag.unsafe and len(frag.ids)==len(set(frag.ids)),tid+': HTML seguro, anclas únicas')
        check(all(s['sectionId'] in frag.ids for s in imap[tid]['sections']),tid+': todas las anclas resuelven')
        for link in frag.links:
            if link.startswith('#temario/'):
                route=link.split('/');check(route[1] in topics and (len(route)<3 or route[2] in frag.ids),tid+': enlace de sección válido')
            else:check(link.startswith('https://'),tid+': URL de fuente HTTPS')
    register=load('data/gsi-document-register.json')
    conversions={e['output']:e for e in load('logs/gsi-conversions.json') if e['status']=='converted'}
    for doc in register['documents']:
        check(doc['drive_id'] in known and digest(doc['path'])==doc['sha256'],doc['path']+': documento íntegro e inventariado')
        log=conversions.get(doc['path'],{})
        check(log.get('sha256')==doc['sha256'] and log.get('ocr') is False,doc['path']+': conversión normal registrada')
    map_review=load('data/gsi-map-review.json');rows=list(csv.DictReader((ROOT/map_review['snapshot']).open(encoding='utf-8-sig')))[:57]
    check(digest(map_review['snapshot'])==map_review['sha256'],'Mapa auxiliar íntegro')
    check([r['Tema GSI'] for r in rows]==[m['locator'] for m in manifest['topics']],'Mapa auxiliar: numeración y orden oficial')
    questions=[]
    for origin in ('official','manual','ai'):
        qs=load(f'data/questions-{origin}.json')['questions'];check(all(q['origin']==origin for q in qs),origin+': separación física');questions.extend(qs)
    ids=[q['id'] for q in questions];check(len(ids)==len(set(ids)),'IDs de preguntas únicos')
    prompts=[norm(q['statement']) for q in questions];check(len(prompts)==len(set(prompts)),'Sin enunciados duplicados exactos normalizados')
    reviews=load('data/gsi-editorial-reviews.json');reviewmap={r['id']:r for r in reviews['reviews']}
    drafts={}
    for path in sorted((ROOT/'content/question-drafts').glob('*.txt')):
        counts={};topic=None
        for line in path.read_text('utf-8').splitlines():
            if line.startswith('@'):topic=line[1:]
            elif line and not line.startswith('#'):
                counts[topic]=counts.get(topic,0)+1;drafts[f'AI-GSI-{topic}-{counts[topic]:03}']=(topic,line)
    for q in questions:
        label=q['id'];check(q['opposition_id']=='OPP-GSI' and q['topic_id'] in topics and q['block_id']==q['topic_id'][:2],label+': identidad GSI y tema válidos')
        check(len(q['options'])==4 and len({o['id'] for o in q['options']})==4 and len({norm(o['text']) for o in q['options']})==4 and sum(o['id']==q['correct_option'] for o in q['options'])==1,label+': cuatro opciones distintas y una correcta')
        check(bool(q['feedback']['correct'].strip()) and q['provenance']['source_id'] in sources and bool(q['provenance']['locator']),label+': explicación y procedencia')
        check(q['provenance']['drive_id'] in known,label+': fuente dentro del inventario autorizado')
        check(not q['is_active'] or q['validation_status']=='validated',label+': activación exige revisión')
        if q['origin']=='ai':
            topic,line=drafts[label];fields=line.split('|');section=fields[0]
            check(q['statement']==fields[1] and sorted(o['text'] for o in q['options'])==sorted(fields[2:6]) and next(o['text'] for o in q['options'] if o['id']==q['correct_option'])==fields[2] and q['feedback']['correct']==fields[6],label+': opciones, respuesta y explicación coinciden con borrador')
            text=(ROOT/f'content/topics/{topic}.md').read_text('utf-8').split('## Resumen de repaso')[0]
            match=re.search(r'^## '+re.escape(section)+r'\.? (.+?)\n(.*?)(?=^## |\Z)',text,re.M|re.S)
            check(match is not None and sha(match[2].strip())==q['source']['evidence_sha256'] and match[2].strip()==q['source']['evidence'],label+': evidencia exacta de sección')
            check(sha(topic+'\n'+line)==q['source']['record_sha256'],label+': borrador y JSON sincronizados')
            r=reviewmap.get(label,{})
            check(r.get('record_sha256')==q['source']['record_sha256'] and r.get('evidence_sha256')==q['source']['evidence_sha256'],label+': revisión ligada a versión')
            check(q['official_status']=='not_official' and q['provenance']['type']=='generated',label+': origen generado explícito')
            if q['is_active']:check(r.get('decision')=='accepted' and reviews['reviewer_type']=='human',label+': validación humana exigida por control de permisos')
        elif q['origin']=='manual':
            source=sources[q['source']['source_id']];text=(ROOT/source['documents'][0]['path']).read_text('utf-8');number=int(label.split('-')[-1])
            match=re.search(r'(?m)^\*\*'+str(number)+r'\.\s*([A-D])\s*[—–-]',text)
            if '-P14-' in label:
                part=re.search(r'(?m)^\*\*'+str(number)+r'\.[\s\S]*?\*\*Respuesta:\s*([A-D])\.',text)
                match=part
            check(match is not None and match[1]==q['correct_option'],label+': clave cotejada con solucionario original')
    active=Counter(q['topic_id'] for q in questions if q['is_active']);total=Counter(q['topic_id'] for q in questions)
    deficient=[tid for tid in topics if active[tid]<20]
    if deficient:blockers.append(f'{len(deficient)} temas tienen menos de 20 preguntas activas revisadas; 803 generadas pendientes de validación humana. La revisión automática de permisos rechazó su activación masiva.')
    report={'version':1,'date':DATE,'opposition_id':'OPP-GSI','topic_count':57,'distribution':COUNTS,
        'question_totals':{'total':len(questions),'active':sum(active.values()),'pending':sum(q['validation_status']=='pending_review' for q in questions),'by_origin':dict(Counter(q['origin'] for q in questions)),'by_block':dict(Counter(q['block_id'] for q in questions))},
        'topics':[{'topic_id':tid,'study_characters':mmap[tid]['study_characters'],'has_source':bool(mmap[tid]['drive_id']),'questions':total[tid],'active':active[tid],'pending':total[tid]-active[tid],'minimum_met':active[tid]>=20} for tid in topics],
        'release_ready':not errors and not blockers,'blockers':blockers}
    practice=load('data/gsi-practice.json');check(len(practice['cases'])==8,'Ocho supuestos escritos')
    for n in range(1,5):check({c['option'] for c in practice['cases'] if c['simulation']==n}=={'A','B'},f'Simulacro escrito {n}: elección A/B')
    for c in practice['cases']:
        check([q['id'] for q in c['questions']]==['1','2','3','4','5'] and c['rubric']=={'technical':30,'analysis':10,'systematic':5,'expression':5},c['id']+': cinco preguntas y rúbrica 30/10/5/5')
        frag=Fragment();frag.feed(c['solutionHtml']);check(not frag.unsafe and c['source']['drive_id'] in known and c['solutionSource']['drive_id'] in known,c['id']+': práctica y solución trazadas')
    for item in practice['library']:
        if item.get('localPath'):check((ROOT/item['localPath']).is_file(),item['id']+': biblioteca local accesible')
        if item['sourceType']=='support-a1':check('no constituye un simulacro fiel GSI' in item['description'],item['id']+': apoyo A1 etiquetado')
    runtime=[ROOT/'index.html',*(ROOT/'assets').rglob('*.js'),*(ROOT/'assets').rglob('*.css'),*(ROOT/'content/generated').glob('*.html'),*(ROOT/'content/topics').glob('*.md')]
    for p in runtime:
        text=p.read_text('utf-8');check(not re.search(r'\b(?:TAI|tai|TODO|FIXME)\b|33 temas',text),p.relative_to(ROOT).as_posix()+': sin TAI ni marcadores pendientes activos')
        check(not re.search(r'gh[pousr]_[A-Za-z0-9]{30,}|AKIA[0-9A-Z]{16}|sk-proj-[A-Za-z0-9_-]{30,}',text),p.name+': sin patrones de credencial')
    report['release_ready']=not errors and not blockers
    save('data/gsi-coverage-report.json',report)
    save('logs/gsi-final-validation.json',{'date':DATE,'checks_passed':len(checks),'errors':errors,'release_blockers':blockers,'ready':not errors and not blockers})
    print(f'GSI: {len(checks)} controles de integridad correctos; {len(errors)} errores técnicos; {len(blockers)} bloqueos de cierre.')
    for message in errors+blockers:print(message)
    return 1 if errors else 2 if blockers else 0

if __name__=='__main__':
    if hasattr(sys.stdout,'reconfigure'):sys.stdout.reconfigure(encoding='utf-8')
    raise SystemExit(main())
