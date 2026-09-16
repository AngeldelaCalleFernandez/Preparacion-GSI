import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { EXAM_MODES, selectExamQuestions, calculateExamResults, validateExamConfig, isQuestionEligible, formatRemainingTime } from '../assets/js/exam-engine.js?gsi2';
import { filterTrainingQuestions } from '../assets/js/training-engine.js?gsi2';
import { createActiveExamState } from '../assets/js/exam-storage.js?gsi2';
import { createWrittenState, writtenRemaining, validateWrittenState, RUBRIC, WRITTEN_KEY } from '../assets/js/written-practice.js?gsi2';
import { buildPhysicalPersistenceKey, createPersistenceAdapter } from '../assets/js/persistence-v2.js?gsi2';
import { migrateV1ToV2 } from '../assets/js/persistence-migration-v2.js?gsi2';
import { exportProgress, importProgress, resetProgress, validateProgressBackup } from '../assets/js/progress-backup.js?gsi2';

const read = async (name) => JSON.parse(await fs.readFile(new URL('../data/'+name+'.json',import.meta.url),'utf8'));
const syllabus=await read('syllabus'), practice=await read('gsi-practice');
const questions=(await Promise.all(['official','manual','ai'].map(async (collection)=>(await read('questions-'+collection)).questions.map((q)=>({...q,collection,isDemo:false}))))).flat();
const context={oppositionId:'OPP-GSI',syllabusId:'SYL-GSI-2025'};
const data={runtimeContext:context,syllabus,practice,questions};
const config={mode:EXAM_MODES.GSI,questionCount:100,durationSeconds:5400,penaltyPerError:1/3,blockIds:['B1','B2','B3','B4'],shuffleQuestions:true,shuffleOptions:true};
const results=[];
function test(name,action){try{action();results.push({name,ok:true});}catch(e){results.push({name,ok:false,error:e.message});console.error(name,e.message);}}
class Memory {
  map=new Map(); calls=0; failAt=0;
  getItem(k){return this.map.get(k)??null;}
  setItem(k,v){if(++this.calls===this.failAt)throw new Error('Quota');this.map.set(k,String(v));}
  removeItem(k){this.map.delete(k);}
}
const selected=selectExamQuestions(questions,config,()=>.37);
test('GSI: 100 preguntas distintas, cuatro bloques y 90 minutos',()=>{assert.equal(selected.questions.length,100);assert.equal(new Set(selected.questions.map(q=>q.id)).size,100);assert.equal(new Set(selected.questions.map(q=>q.block_id)).size,4);assert.deepEqual(validateExamConfig(config),[]);});
test('GSI rechaza cantidad, penalización, tiempo o bloques incorrectos',()=>{for(const change of [{questionCount:99},{durationSeconds:5399},{penaltyPerError:.25},{blockIds:['B1']}])assert.ok(validateExamConfig({...config,...change}).length);});
test('Puntuación GSI: 50 aciertos, 30 errores, 20 blancos = 40',()=>{const answers=Object.fromEntries(selected.questions.slice(0,80).map((q,i)=>[q.id,i<50?q.correct_option:q.options.find(o=>o.id!==q.correct_option).id]));const r=calculateExamResults(selected.questions,answers,1/3);assert.equal(r.overall.net,40);assert.equal(r.overall.grossPercentage,50);assert.equal(r.overall.blank,20);assert.equal(r.byTopic.reduce((n,t)=>n+t.total,0),100);});
test('Todos los aciertos = 100; todos los errores = −100/3; blancos = 0',()=>{const correct=Object.fromEntries(selected.questions.map(q=>[q.id,q.correct_option]));const wrong=Object.fromEntries(selected.questions.map(q=>[q.id,q.options.find(o=>o.id!==q.correct_option).id]));assert.equal(calculateExamResults(selected.questions,correct,1/3).overall.net,100);assert.ok(Math.abs(calculateExamResults(selected.questions,wrong,1/3).overall.net+100/3)<1e-10);assert.equal(calculateExamResults(selected.questions,{},1/3).overall.net,0);});
test('No se modifica el banco al seleccionar y barajar',()=>{const before=JSON.stringify(questions);selectExamQuestions(questions,config);assert.equal(JSON.stringify(questions),before);});
test('Selección equilibrada alcanza 57 temas con banco sintético suficiente',()=>{
  const synthetic=syllabus.blocks.flatMap(b=>b.topics.flatMap(t=>[0,1].map(n=>({id:`TEST-${t.id}-${n}`,opposition_id:'OPP-GSI',block_id:b.id,topic_id:t.id,origin:'manual',collection:'manual',is_active:true,validation_status:'validated',options:[... 'ABCD'].map(id=>({id,text:`Fixture ${id}`})),correct_option:'A'}))));
  const r=selectExamQuestions(synthetic,config);assert.equal(new Set(r.questions.map(q=>q.topic_id)).size,57);
});
test('Examen excluye IA pendiente, inactiva, demo y otra oposición',()=>{
  for(const mode of [EXAM_MODES.GSI,EXAM_MODES.CUSTOM,EXAM_MODES.AI_VALIDATED])for(const change of [{validation_status:'pending_review'},{is_active:false},{isDemo:true},{opposition_id:'OPP-LEGACY'}])assert.equal(isQuestionEligible({...questions.find(q=>q.origin==='ai'),...change},{...config,mode}),false);
  assert.equal(isQuestionEligible({...questions[0],origin:'official',collection:'official',validation_status:'pending_review'},{...config,mode:EXAM_MODES.BOE}),false);
});
for(const b of syllabus.blocks) for(const t of b.topics)test(`Filtro de entrenamiento ${t.id}`,()=>{const result=filterTrainingQuestions(questions,[],{topicId:t.id});assert.ok(result.every(q=>q.topic_id===t.id&&q.is_active&&q.validation_status==='validated'));assert.equal(result.length,questions.filter(q=>q.topic_id===t.id&&q.is_active&&q.validation_status==='validated').length);});
test('Entrenamiento por bloque y mixto',()=>{for(const b of syllabus.blocks)assert.ok(filterTrainingQuestions(questions,[],{blockId:b.id}).every(q=>q.block_id===b.id));assert.equal(filterTrainingQuestions(questions).length,1762+questions.filter(q=>q.origin==='official'&&q.is_active).length);});
test('Fallos y no vistas usan la respuesta más reciente, sin mezclar demo',()=>{const q=questions.find(q=>q.is_active);const rows=[{questionId:q.id,correct:false,answeredAt:'2026-09-01T10:00:00Z'},{questionId:q.id,correct:true,answeredAt:'2026-09-02T10:00:00Z'}];assert.equal(filterTrainingQuestions([q],rows,{history:'failed'}).length,0);assert.equal(filterTrainingQuestions([q],rows,{history:'unseen'}).length,0);assert.equal(filterTrainingQuestions([q],rows.slice(0,1),{history:'failed'}).length,1);assert.equal(filterTrainingQuestions([q],[{...rows[0],isDemo:true}],{history:'unseen'}).length,1);});
test('Temporizador formatea y limita a cero',()=>{assert.equal(formatRemainingTime(5400),'90:00');assert.equal(formatRemainingTime(-1),'00:00');assert.equal(formatRemainingTime(59.1),'01:00');});
test('Práctica escrita: 180 minutos absolutos y rúbrica de 50',()=>{const now=Date.parse('2026-09-14T10:00:00Z');const state=createWrittenState(practice.cases[0].id,now);assert.equal(writtenRemaining(state,now),10800);assert.equal(writtenRemaining(state,now+5000),10795);assert.equal(writtenRemaining(state,now+10801000),0);assert.equal(validateWrittenState(state,practice.cases),true);assert.equal(Object.values(RUBRIC).reduce((a,b)=>a+b,0),50);});
test('Práctica rechaza caso, plazo, respuestas o puntuación corruptos',()=>{const s=createWrittenState(practice.cases[0].id);for(const change of [{caseId:'UNKNOWN'},{deadlineAt:s.startedAt},{answers:{1:'x'}},{scores:{...s.scores,technical:31}},{finishedAt:'2000-01-01T00:00:00Z'}])assert.equal(validateWrittenState({...s,...change},practice.cases),false);});
test('La rúbrica rechaza puntos extra e impide superar 50 por una importación',()=>{const state=createWrittenState(practice.cases[0].id);state.scores.extra=10;assert.equal(validateWrittenState(state,practice.cases),false);});
test('Migración GSI no copia claves antiguas ni sin identidad',()=>{const raw=new Memory();raw.setItem('tai.phase3.training.v1','legacy untouched');raw.setItem('gsi.phase3.training.v1','unscoped untouched');const before=[...raw.map];const result=migrateV1ToV2(context,raw);assert.ok(result.ok);assert.equal(result.copied,0);assert.deepEqual([...raw.map],before);});
const q=questions.find(q=>q.is_active);
const training={version:1,responses:[{questionId:q.id,selectedOption:q.correct_option,correct:true,answeredAt:'2026-09-14T10:00:00Z',blockId:q.block_id,topicId:q.topic_id,isDemo:false}]};
function seed(){const raw=new Memory();const adapter=createPersistenceAdapter(context,raw);adapter.setItem('gsi.phase3.training.v1',JSON.stringify(training));adapter.removeItem('gsi.phase4.exam.active.real.v1');raw.setItem(WRITTEN_KEY,JSON.stringify(createWrittenState(practice.cases[0].id)));raw.setItem('tai.phase3.training.v1','historical');return raw;}
test('Exportar/importar conserva respuestas, práctica y sesiones borradas',()=>{const raw=seed(),backup=exportProgress(context,raw),target=new Memory();validateProgressBackup(backup,data);importProgress(backup,data,target);assert.equal(target.getItem('tai.phase3.training.v1'),null);assert.deepEqual(exportProgress(context,target).entries,backup.entries);});
test('Importación rechaza otra identidad, tema, pregunta, opción o modo demo',()=>{for(const mut of [b=>b.oppositionId='OPP-LEGACY',b=>b.entries['foreign']={},b=>b.entries[buildPhysicalPersistenceKey(context,'gsi.phase3.training.v1')].payload.responses[0].questionId='UNKNOWN',b=>b.entries[buildPhysicalPersistenceKey(context,'gsi.phase3.training.v1')].payload.responses[0].topicId='B4-T16',b=>b.entries[buildPhysicalPersistenceKey(context,'gsi.phase3.training.v1')].payload.responses[0].selectedOption='Z',b=>b.entries[buildPhysicalPersistenceKey(context,'gsi.phase3.training.v1')].payload.responses[0].isDemo=true]){const raw=seed(),before=[...raw.map],b=exportProgress(context,raw);mut(b);assert.throws(()=>importProgress(b,data,raw));assert.deepEqual([...raw.map],before);}});
test('Importación de examen exige configuración, plazo y opciones íntegros',()=>{const raw=seed(),adapter=createPersistenceAdapter(context,raw),state=createActiveExamState({config,questions:selected.questions,optionOrderByQuestionId:selected.optionOrderByQuestionId,isDemo:false});adapter.setItem('gsi.phase4.exam.active.real.v1',JSON.stringify(state));const backup=exportProgress(context,raw);assert.doesNotThrow(()=>validateProgressBackup(backup,data));const key=buildPhysicalPersistenceKey(context,'gsi.phase4.exam.active.real.v1');backup.entries[key].payload.deadlineAt=state.startedAt;assert.throws(()=>validateProgressBackup(backup,data));});
test('Fallo de escritura restaura la copia anterior',()=>{const raw=seed(),before=[...raw.map],backup=exportProgress(context,raw);raw.failAt=raw.calls+2;assert.throws(()=>importProgress(backup,data,raw),/Quota/);assert.deepEqual([...raw.map],before);});
test('Reinicio borra solo progreso GSI y conserva historial antiguo',()=>{const raw=seed();resetProgress(context,raw);assert.deepEqual([...raw.map],[['tai.phase3.training.v1','historical']]);});
const officialCatalog=JSON.parse(await fs.readFile(new URL('../data/gsi-official-exams.json',import.meta.url),'utf8'));
for(const exam of officialCatalog.exams.filter(e=>e.key_status==='definitive')) {
  const cfg={...config,mode:EXAM_MODES.BOE,officialExamId:exam.id,shuffleQuestions:false,shuffleOptions:false};
  test(`Oficial ${exam.year}: plantilla, orden, reservas y exclusión de anuladas`,()=>{
    const result=selectExamQuestions(questions,cfg);
    assert.deepEqual(result.questions.map(q=>q.id),exam.question_ids);
    assert.deepEqual(result.questions.filter(q=>q.exam.is_reserve).map(q=>q.exam.number),[1,2,3,4]);
    assert.ok(result.questions.every(q=>q.exam.is_reserve||!exam.annulled_numbers.includes(q.exam.number)));
    assert.ok(Object.values(result.optionOrderByQuestionId).every(order=>order.join('')==='ABCD'));
    assert.equal(calculateExamResults(result.questions,Object.fromEntries(result.questions.map(q=>[q.id,q.correct_option])),1/3).overall.net,100);
  });
  test(`Oficial ${exam.year}: rechaza configuración alterada`,()=>{
    for(const change of [{shuffleOptions:true},{shuffleQuestions:true},{questionCount:99},{durationSeconds:60},{mode:EXAM_MODES.GSI}])assert.ok(selectExamQuestions(questions,{...cfg,...change}).errors);
    const corrupt=structuredClone(questions);corrupt.find(q=>q.exam?.id===exam.id&&q.exam.paper_order===2).exam.paper_order=1;
    assert.ok(selectExamQuestions(corrupt,cfg).errors);
  });
  test(`Oficial ${exam.year}: copia de progreso conserva convocatoria y rechaza reordenación`,()=>{
    const result=selectExamQuestions(questions,cfg),raw=seed(),adapter=createPersistenceAdapter(context,raw);
    const state=createActiveExamState({config:cfg,questions:result.questions,optionOrderByQuestionId:result.optionOrderByQuestionId,isDemo:false});
    adapter.setItem('gsi.phase4.exam.active.real.v1',JSON.stringify(state));
    const backup=exportProgress(context,raw),target=new Memory();
    assert.doesNotThrow(()=>importProgress(backup,data,target));
    const key=buildPhysicalPersistenceKey(context,'gsi.phase4.exam.active.real.v1');
    assert.equal(exportProgress(context,target).entries[key].payload.config.officialExamId,exam.id);
    backup.entries[key].payload.questionRefs.reverse();assert.throws(()=>validateProgressBackup(backup,data));
  });
}
test('Plantilla modificada 2024 pregunta 12 y provisional 2025 excluida',()=>{
  assert.equal(questions.find(q=>q.id==='OFF-GSI-INAP-2024-Q012').correct_option,'D');
  assert.equal(questions.filter(q=>q.origin==='official').length,202);
  assert.equal(questions.some(q=>q.exam?.year===2025),false);
  assert.ok(selectExamQuestions(questions,{...config,mode:EXAM_MODES.BOE,officialExamId:'GSI-INAP-2025',shuffleQuestions:false,shuffleOptions:false}).errors);
});
await fs.writeFile(new URL('../logs/gsi-unit.json',import.meta.url),JSON.stringify({date:new Date().toISOString(),passed:results.filter(r=>r.ok).length,failed:results.filter(r=>!r.ok).length,results},null,2)+'\n');
console.log(`GSI unit: ${results.filter(r=>r.ok).length} passed, ${results.filter(r=>!r.ok).length} failed.`);
if(results.some(r=>!r.ok))process.exitCode=1;
