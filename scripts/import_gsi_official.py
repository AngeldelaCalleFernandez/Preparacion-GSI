"""Compile INAP's published papers without inventing keys for annulled/provisional items."""
import hashlib
import json
import re
from datetime import date
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
DATE=date.today().isoformat()
def load(path):return json.loads((ROOT/path).read_text('utf-8'))
def save(path,data):
    p=ROOT/path;p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n','utf-8')
def fingerprint(record):return hashlib.sha256(json.dumps(record,ensure_ascii=False,sort_keys=True).encode('utf-8')).hexdigest()
def qid(year,record):return f"OFF-GSI-INAP-{year}-{'R' if record['reserve'] else 'Q'}{record['number']:03d}"
def main():
    extracted=load('documents/sources/gsi-official/extracted.json')
    mapping=load('data/gsi-official-topic-map.json')['exams']
    topics={t['id'] for b in load('data/syllabus.json')['blocks'] for t in b['topics']}
    sources=load('data/sources.json')
    sources['sources']=[s for s in sources['sources'] if not s['id'].startswith('SRC-INAP-GSI-')]
    bank=[];catalog=[]
    for exam in extracted['exams']:
        year=exam['year'];sid=f'SRC-INAP-GSI-{year}';eid=f'GSI-INAP-{year}'
        docs={d['kind']:d for d in exam['documents']}
        records=exam.get('questions') or []
        if exam['key_status']=='definitive':
            assert len(records)==105
            assert [(q['number'],q['reserve']) for q in records]==[(n,False) for n in range(1,101)]+[(n,True) for n in range(1,6)]
            assert all(set(q['options'])==set('ABCD') and (q['answer'] in 'ABCD' if q['answer'] else q['annulled']) for q in records)
            annulled=[q for q in records[:100] if q['annulled']]
            replacements=iter(records[100:])
            paper=[next(replacements) if q['annulled'] else q for q in records[:100]]
            assert all(not q['annulled'] for q in paper) and len(paper)==100
            order={qid(year,q):i+1 for i,q in enumerate(paper)}
        else:
            assert not records, 'No se activa una plantilla provisional.'
            annulled=[];paper=[];order={}
        source_topics=set()
        for q in records:
            tid=mapping[str(year)][('R' if q['reserve'] else '')+str(q['number'])]
            assert tid in topics
            source_topics.add(tid)
            if q['annulled']:continue
            ident=qid(year,q)
            number=('reserva ' if q['reserve'] else 'pregunta ')+str(q['number'])
            locator=f"Primer ejercicio, {number}; página {q['page']} del cuestionario; plantilla definitiva."
            key_name='R'+str(q['number']) if q['reserve'] else str(q['number'])
            feedback=(f"La plantilla definitiva del INAP para la convocatoria {year} señala la opción "
                      f"{q['answer']} («{q['options'][q['answer']]}»). Esta es la clave oficial de esa convocatoria; "
                      "el INAP no aporta una explicación razonada en la plantilla. Consulta los apuntes del tema para repasarla.")
            if year==2024 and q['number']==12 and not q['reserve']:
                feedback+=' La plantilla definitiva modificó esta respuesta: se utiliza D.'
            if year==2024 and q['number']==87 and not q['reserve']:
                feedback+=' Atención editorial: la descripción de la licencia de Nessus en la opción D requiere contraste de vigencia; se conserva literalmente la clave oficial, sin presentarla como información tecnológica actual.'
            provenance={'type':'official','source_id':sid,'document_id':f'DOC-INAP-GSI-{year}-QUESTIONNAIRE',
                        'drive_id':None,'url':docs['questionnaire']['url'],'locator':locator,
                        'version':f'Convocatoria {year}; plantilla definitiva','reviewed_at':DATE}
            bank.append({'id':ident,'opposition_id':'OPP-GSI','origin':'official','official_status':'official',
                'validation_status':'validated','block_id':tid[:2],'topic_id':tid,'subtopic':'Examen oficial INAP',
                'exam':{'id':eid,'year':year,'number':q['number'],'is_reserve':q['reserve'],
                        'paper_order':order.get(ident),'key_status':'definitive','historical':True},
                'statement':q['statement'],'options':[{'id':k,'text':v} for k,v in q['options'].items()],
                'correct_option':q['answer'],'feedback':{'correct':feedback,'incorrect':feedback},
                'source':{**provenance,'title':f'INAP · GSI ingreso libre · convocatoria {year}',
                          'answer_key_url':docs['answer_key']['url'],'answer_key_locator':key_name,
                          'record_sha256':fingerprint(q),'review_method':'Cotejo de extracción y clave con cuestionario y plantilla definitiva del INAP.'},
                'provenance':provenance,'difficulty':'medium','tags':['oficial','convocatoria-'+str(year),'dificultad-no-calibrada','historico'],
                'is_active':True,'created_at':DATE,'updated_at':DATE})
        kinds={'questionnaire':'exam_questionnaire','answer_key':'answer_key','written':'exam_questionnaire','criteria':'exam_criteria'}
        source_docs=[]
        for d in exam['documents']:
            source_docs.append({'id':f"DOC-INAP-GSI-{year}-{d['kind'].upper().replace('_', '-')}",'path':d['markdown'],
                                'kind':kinds[d['kind']],'conversion_status':'converted'})
        sources['sources'].append({'id':sid,'title':f'INAP · GSI ingreso libre · convocatoria {year}',
             'publisher':'Instituto Nacional de Administración Pública / Comisión Permanente de Selección',
             'official_status':'official' if exam['key_status']=='definitive' else 'official_provisional',
             'url':exam['page'],'published_at':None,'reviewed_at':DATE,
             'block_ids':sorted({t[:2] for t in source_topics}),'topic_ids':sorted(source_topics),
             'mapping_status':'mapped' if records else 'pending_review','documents':source_docs})
        catalog.append({'id':eid,'year':year,'title':f'Convocatoria {year} · GSI ingreso libre',
            'page_url':exam['page'],'key_status':exam['key_status'],'duration_seconds':5400,'question_count':100,
            'reserve_count':5,'written_question_count':5,'written_duration_seconds':10800,
            'documents':exam['documents'],'question_ids':[qid(year,q) for q in paper],
            'annulled_numbers':[q['number'] for q in annulled],
            'used_reserve_numbers':[q['number'] for q in paper if q['reserve']],
            'annulled_questions':annulled,
            'note':('Plantilla definitiva aplicada: las preguntas anuladas se sustituyen por reservas en su orden. Las claves corresponden a esta convocatoria histórica.'
                    if records else 'El INAP solo publica una plantilla provisional en la página consultada. Documentos disponibles para lectura; no se incorporan claves provisionales al banco activo.')})
    assert len(bank)==202 and len({q['id'] for q in bank})==202
    save('data/questions-official.json',{'metadata':{'dataset_type':'official','schema_version':'1.0.0','data_version':'2.1.0','updated_at':DATE},'questions':bank})
    save('data/gsi-official-exams.json',{'version':1,'updated_at':DATE,'exams':catalog})
    sources['metadata']['updated_at']=DATE
    save('data/sources.json',sources)
    print(f'{len(bank)} preguntas oficiales; {sum(bool(e["question_ids"]) for e in catalog)} exámenes corregibles; {len(catalog)} convocatorias documentadas.')
if __name__=='__main__':main()
