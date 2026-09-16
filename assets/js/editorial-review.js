// Read-only editorial workspace. It cannot approve questions or write progress.
const topic=document.querySelector('#review-topic');
const search=document.querySelector('#review-search');
const select=document.querySelector('#review-question');
const content=document.querySelector('#review-content');
const counter=document.querySelector('#review-count');
const previous=document.querySelector('#review-prev');
const next=document.querySelector('#review-next');
let bank=[], filtered=[];
function node(tag,text){const e=document.createElement(tag);e.textContent=text;return e;}
function render(){
  content.replaceChildren();
  const q=filtered.find(q=>q.id===select.value);const position=filtered.indexOf(q);
  previous.disabled=position<=0;next.disabled=position<0||position===filtered.length-1;
  counter.textContent=`${filtered.length} preguntas en esta selección · ${bank.length} en el lote`;
  if(!q)return;
  const status=q.validation_status==='validated'?'validada':q.validation_status==='pending_review'?'pendiente de validación':q.validation_status;
  content.append(node('h2',`${q.id} · ${q.statement}`),node('p',`Generada · ${status} · ${q.is_active?'activa':'inactiva'} · dificultad orientativa`));
  if(q.source.review_method)content.append(node('p',q.source.review_method));
  const options=node('ol','');options.type='A';
  for(const o of q.options)options.append(node('li',o.text+(o.id===q.correct_option?' — respuesta propuesta':'')));
  content.append(options,node('h3','Explicación propuesta'),node('p',q.feedback.correct));
  content.append(node('h3','Texto de la sección que respalda la pregunta'),node('p',q.source.locator));
  const evidence=node('pre',q.source.evidence);evidence.style.whiteSpace='pre-wrap';evidence.style.overflowWrap='anywhere';evidence.style.fontFamily='inherit';
  content.append(evidence);
  const link=node('a',q.source.title);const url=new URL(q.source.url);
  if(url.protocol==='https:'){link.href=url.href;link.target='_blank';link.rel='noopener noreferrer';}
  content.append(node('h3','Documento original'),link,node('p',`Versión ${q.provenance.version} · revisión de la fuente ${q.provenance.reviewed_at}`));
}
function filter(){
  const term=search.value.trim().toLocaleLowerCase('es');
  filtered=bank.filter(q=>(!topic.value||q.topic_id===topic.value)&&(!term||`${q.id} ${q.statement}`.toLocaleLowerCase('es').includes(term)));
  select.replaceChildren();for(const q of filtered){const option=node('option',q.id);option.value=q.id;select.append(option);}render();
}
try{
  const response=await fetch('./data/questions-ai.json',{cache:'no-store'});if(!response.ok)throw new Error(`HTTP ${response.status}`);
  const data=await response.json();bank=data.questions.filter(q=>q.origin==='ai'&&q.opposition_id==='OPP-GSI');
  for(const id of [...new Set(bank.map(q=>q.topic_id))].sort()){const option=node('option',id);option.value=id;topic.append(option);}
  topic.addEventListener('change',filter);search.addEventListener('input',filter);select.addEventListener('change',render);
  previous.addEventListener('click',()=>{select.selectedIndex-=1;render();});next.addEventListener('click',()=>{select.selectedIndex+=1;render();});filter();
}catch(error){counter.textContent=`No se pudo cargar el lote: ${error.message}. Abre esta vista mediante el servidor HTTP del proyecto.`;}
