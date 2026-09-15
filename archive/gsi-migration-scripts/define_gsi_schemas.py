"""Write explicit schemas for GSI artifacts (authoring utility, not a runtime build)."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def obj(properties,required=None,extra=False):
    return {'type':'object','additionalProperties':extra,'required':required or list(properties),'properties':properties}
def arr(item,minimum=0,maximum=None):
    out={'type':'array','items':item,'minItems':minimum}
    if maximum is not None: out['maxItems']=maximum
    return out
string={'type':'string','minLength':1}; date={'type':'string','format':'date'}
sha={'type':'string','pattern':'^[a-f0-9]{64}$'}
tid={'type':'string','pattern':'^B[1-4]-T[0-9]{2}$'}
url={'type':'string','format':'uri','pattern':'^https://'}
def save(name,schema):
    schema={'$schema':'https://json-schema.org/draft/2020-12/schema',**schema}
    (ROOT/f'schemas/{name}.schema.json').write_text(json.dumps(schema,ensure_ascii=False,indent=2)+'\n','utf-8')
trace=obj({'title':string,'url':url,'drive_id':string,'locator':string},extra=True)
save('gsi-practice',obj({'version':{'const':1},'updatedAt':date,'oppositionId':{'const':'OPP-GSI'},'simulations':{'const':4},
 'cases':arr(obj({'id':{'type':'string','pattern':'^GSI-S[1-4]-[AB]$'},'simulation':{'type':'integer','minimum':1,'maximum':4},'option':{'enum':['A','B']},'title':string,'statement':{'type':'string','minLength':300},
 'questions':arr(obj({'id':{'enum':['1','2','3','4','5']},'prompt':string,'checklist':arr(string)}),5,5),
 'checklist':arr(string,1),'rubric':{'const':{'technical':30,'analysis':10,'systematic':5,'expression':5}},'source':trace,'solutionHtml':{'type':'string','minLength':1000},'solutionSource':trace}),8,8),
 'library':arr(obj({'id':string,'title':string,'url':url,'sourceType':{'enum':['curated','support-a1']},'description':string,'localPath':{'type':'string','pattern':'^content/practice/[A-Za-z0-9-]+\\.html$'},'drive_id':string,'pack':string},required=['id','title','url','sourceType','description']),1)}))
save('gsi-editorial-reviews',obj({'version':{'const':1},'reviewed_at':date,'reviewer':string,'reviewer_type':{'enum':['human','ai']},'method':string,'status':{'enum':['pending_human_review','reviewed']},'sample_ids':arr(string,1),
 'reviews':arr(obj({'id':{'type':'string','pattern':'^AI-GSI-B[1-4]-T[0-9]{2}-[0-9]{3}$'},'decision':{'enum':['pending_review','accepted','rejected']},'record_sha256':sha,'evidence_sha256':sha,'method':string}),1)}))
save('gsi-document-register',obj({'version':{'const':1},'authorized_root':{'const':'1bmBgrybIUDyT1owpnooU8Oq5FH4wLrp2'},'documents':arr(obj({'path':{'type':'string','pattern':'^documents/markdown/gsi/.+\\.md$'},'title':string,'drive_id':string,'url':url,'kind':string,'sha256':sha}),50,50)}))
save('gsi-source-manifest',obj({'version':{'const':'2.0.0'},'retrieved_at':date,'authorized_root':url,'official_control':url,
 'canonical_documents':arr(obj({'id':string,'drive_id':string,'version':string,'reviewed_at':date},extra=True),8,8),
 'topics':arr(obj({'topic_id':tid,'title':string,'source_id':string,'document_id':string,'drive_id':string,'url':url,'locator':string,'version':{'const':'V2.1'},'reviewed_at':date,'source_type':{'const':'curated'},'study_characters':{'type':'integer','minimum':1500},'summary_characters':{'type':'integer','minimum':100},'markdown_path':string,'html_path':string,'study_sha256':sha,'review_source_id':string}),57,57),
 'discrepancies':arr(string),'policy':string}))
save('gsi-map-review',obj({'version':{'const':1},'reviewed_at':date,'drive_id':string,'url':url,'snapshot':string,'sha256':sha,'program_rows':{'const':57},'distribution':{'const':[10,16,15,16]},'decision':string,'differences':arr(obj({'topic_id':tid,'auxiliary':string,'decision':string})),'catalog_discrepancy':string}))
save('gsi-drive-inventory',obj({'root':url,'inspected_at':date,'main':arr(obj({'id':string,'parent_id':string,'relative_path':string},extra=True),1),'auxiliary':obj({'roots':arr(obj({'id':string,'path':string}),1),'items':arr(obj({'id':string,'observed_parent_id':string,'path':string},extra=True),1),'errors':{'type':'array','maxItems':0}},extra=True)}))
save('gsi-coverage-report',obj({'version':{'const':1},'date':date,'opposition_id':{'const':'OPP-GSI'},'topic_count':{'const':57},'distribution':{'const':[10,16,15,16]},'question_totals':obj({'total':{'type':'integer'},'active':{'type':'integer'},'pending':{'type':'integer'},'by_origin':{'type':'object'},'by_block':{'type':'object'}}),
 'topics':arr(obj({'topic_id':tid,'study_characters':{'type':'integer','minimum':1500},'has_source':{'const':True},'questions':{'type':'integer'},'active':{'type':'integer'},'pending':{'type':'integer'},'minimum_met':{'type':'boolean'}}),57,57),
 'release_ready':{'type':'boolean'},'blockers':arr(string)}))
# External controls are not didactic sources and never carry a Drive claim.
p=ROOT/'schemas/source.schema.json';s=json.loads(p.read_text('utf-8'))
control=json.loads(json.dumps(s['$defs']['convertedSource']))
control['required'].append('sourceKind');control['properties']['sourceKind']={'const':'currency-control'}
control['properties']['documents']={'type':'array','maxItems':0}
s['$defs']['currencyControl']=control
if {'$ref':'#/$defs/currencyControl'} not in s['properties']['sources']['items']['oneOf']: s['properties']['sources']['items']['oneOf'].append({'$ref':'#/$defs/currencyControl'})
p.write_text(json.dumps(s,ensure_ascii=False,indent=2)+'\n','utf-8')
p=ROOT/'data/sources.json';s=json.loads(p.read_text('utf-8'))
for source in s['sources']:
    if source['id']=='SRC-CONTROL-KUBERNETES': source['sourceKind']='currency-control'
p.write_text(json.dumps(s,ensure_ascii=False,indent=2)+'\n','utf-8')
p=ROOT/'scripts/validate_json.py';s=p.read_text('utf-8')
add=['oppositions','syllabi-catalog','topic-content','gsi-practice','gsi-editorial-reviews','gsi-document-register','gsi-source-manifest','gsi-map-review','gsi-drive-inventory','gsi-coverage-report']
for name in add:
    line=f'    "data/{name}.json": "schemas/{name}.schema.json",\n'
    if line not in s:s=s.replace('SCHEMAS = {\n','SCHEMAS = {\n'+line)
p.write_text(s,'utf-8')
print('Explicit GSI artifact schemas written.')
