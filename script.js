
const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const toggle=$('.menu-toggle'),nav=$('.nav-links');if(toggle)toggle.onclick=()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.textContent=open?'×':'☰'};
$$('.nav-links a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰'});
let lastFocus;
function closeModal(){const m=$('#demo-modal');m.hidden=true;document.body.style.overflow='';lastFocus?.focus()}
function demo(title='الطلب'){lastFocus=document.activeElement;$('#demo-title').textContent=title;$('#demo-modal').hidden=false;document.body.style.overflow='hidden';$('#demo-modal .close').focus()}
$$('[data-demo]').forEach(b=>b.addEventListener('click',()=>demo(b.dataset.demo)));
$('#demo-modal .close')?.addEventListener('click',closeModal);$('#demo-modal')?.addEventListener('click',e=>{if(e.target.id==='demo-modal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();const m=$('#demo-modal');if(e.key==='Tab'&&m&&!m.hidden){const a=$$('button,input,textarea,select,a[href]',m).filter(x=>!x.disabled);if(e.shiftKey&&document.activeElement===a[0]){e.preventDefault();a.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===a.at(-1)){e.preventDefault();a[0].focus()}}});
$$('form[data-local]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;const out=$('.status',f);out.textContent='شكرًا لك. هذه الخطوة غير متصلة بخدمة فعلية حاليًا، ولم تُرسل بياناتك.'}));
$$('[data-filter-group]').forEach(group=>{const target=group.dataset.filterGroup;$$('button',group).forEach(b=>b.onclick=()=>{$$('button',group).forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b)});$$('[data-group="'+target+'"]').forEach(card=>card.hidden=b.dataset.filter!=='all'&&card.dataset.cat!==b.dataset.filter)})});

