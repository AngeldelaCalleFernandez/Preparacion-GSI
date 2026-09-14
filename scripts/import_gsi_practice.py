"""Import the four written GSI simulations and the complete active-practice library."""
import html
import json
import re
from build_gsi_content import ROOT, DATE, save, text_of
from import_gsi_documents import render_elements

def read(path):
    doc=json.loads(path.read_text('utf-8'))
    return doc,[e for tab in doc['tabs'] for e in tab['body']['content']]

def main():
    directory=ROOT/'documents/originals/gsi/P13'
    question_path=next(directory.glob('*CUADERNO*.json'))
    solution_path=next(directory.glob('*SOLUCIONARIO*.json'))
    qdoc,elements=read(question_path)
    sdoc,solutions=read(solution_path)
    cases=[]; current=None; simulation=0
    common_checklist=[]
    for element in elements:
        text=text_of(element)
        if text.startswith('SIMULACRO '):
            simulation=int(re.match(r'SIMULACRO (\d+)',text)[1]); current=None
        elif text.startswith('Opción '):
            option=re.match(r'Opción ([AB])',text)[1]
            current={'id':f'GSI-S{simulation}-{option}','simulation':simulation,'option':option,'title':text,
                     'statement':'','questions':[], 'checklist':[], 'rubric':{'technical':30,'analysis':10,'systematic':5,'expression':5},
                     'source':{'title':qdoc['title'],'url':f'https://docs.google.com/document/d/{qdoc["documentId"]}/edit',
                               'drive_id':qdoc['documentId'],'type':'curated','locator':f'Simulacro {simulation}, {text}; índice nativo {element.get("startIndex")}'}}
            cases.append(current)
        elif current:
            match=re.match(r'Pregunta (\d)\.\s*(.+)',text)
            if match:
                current['questions'].append({'id':str(match[1]),'prompt':match[2],'checklist':[]})
            elif text and not current['questions']:
                current['statement']+=text+'\n\n'
        elif not simulation and element.get('paragraph',{}).get('bullet'):
            common_checklist.append(text)
    if len(cases)!=8 or any(len(c['questions'])!=5 or len(c['statement'])<500 for c in cases):
        raise ValueError('Written simulation extraction incomplete')
    solution_parts=[]; part=None
    for e in solutions:
        if text_of(e).startswith('Opción '):
            part=[]; solution_parts.append(part)
        elif part is not None:
            part.append(e)
    if len(solution_parts)!=8: raise ValueError('Written answer guide extraction incomplete')
    for case,part in zip(cases,solution_parts):
        case['checklist']=common_checklist
        case['solutionHtml']=render_elements(part)
        case['solutionSource']={'title':sdoc['title'],'url':f'https://docs.google.com/document/d/{sdoc["documentId"]}/edit', 'locator':case['title'], 'drive_id':sdoc['documentId']}
    library=[]
    for path in sorted((ROOT/'documents/originals/gsi').glob('P*/*.json')):
        doc,body=read(path)
        pack=path.parent.name
        kind='solucionario' if 'SOLUCIONARIO' in path.stem else 'cuaderno'
        target=f'content/practice/{pack}-{kind}.html'
        markup='<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+html.escape(doc['title'])+'</title><link rel="stylesheet" href="../../assets/css/styles.css"></head><body><main class="shell topic-content"><p><a href="../../index.html#practica">Volver a práctica escrita</a></p><p>Material curado GSI A2. Fuente: <a href="https://docs.google.com/document/d/'+doc['documentId']+'/edit">documento original de Drive</a>.</p>'+render_elements(body)+'</main></body></html>\n'
        save(target,markup)
        library.append({'id':pack+'-'+kind,'pack':pack,'title':doc['title'],'url':f'https://docs.google.com/document/d/{doc["documentId"]}/edit',
                        'localPath':target,'sourceType':'curated','description':'Práctica activa GSI A2 · '+kind,'drive_id':doc['documentId']})
    # Auxiliary A1 material stays an explicitly labelled reference library.
    inv=json.loads((ROOT/'tmp/gsi-aux-inventory.json').read_text('utf-8'))
    for root in inv['roots']:
        library.append({'id':'A1-'+root['id'],'title':root['path'],'url':'https://drive.google.com/drive/folders/'+root['id'],
                        'sourceType':'support-a1','description':'Apoyo técnico PreparaTIC/A1; no constituye un simulacro fiel GSI.'})
    save('data/gsi-practice.json',{'version':1,'updatedAt':DATE,'oppositionId':'OPP-GSI','simulations':4,'cases':cases,'library':library})
    print(f'{len(cases)} written cases / 4 simulations; {len(library)} library entries.')

if __name__=='__main__': main()
