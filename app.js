'use strict';
function route(){let view=location.hash.slice(1)||'builds';if(view==='quests')view='inspirations';if(!titles[view])view='builds';document.querySelectorAll('.view').forEach(section=>section.hidden=section.id!==view);document.querySelectorAll('nav a').forEach(link=>{const active=link.getAttribute('href')===`#${view}`;link.classList.toggle('active',active);active?link.setAttribute('aria-current','page'):link.removeAttribute('aria-current');});$('page-title').textContent=titles[view][0];$('page-description').textContent=titles[view][1];document.title=`${titles[view][0]} · 费伦冒险手册`;}
const $=id=>document.getElementById(id);
const escapeHTML=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const ACT_ONE_PROGRESS_KEY='bg3-codex-act1-progress-v1';
const actOneStepIds=new Set(ACT_ONE_STEPS.map(step=>step.id));
const ACT_TWO_PROGRESS_KEY='bg3-codex-act2-progress-v1';
const actTwoStepIds=new Set(ACT_TWO_STEPS.map(step=>step.id));
const ACT_THREE_PROGRESS_KEY='bg3-codex-act3-progress-v1';
const actThreeStepIds=new Set(ACT_THREE_STEPS.map(step=>step.id));
function loadActOneProgress(){
  try{const parsed=JSON.parse(window.localStorage.getItem(ACT_ONE_PROGRESS_KEY));return new Set(Array.isArray(parsed)?parsed.filter(id=>typeof id==='string'&&actOneStepIds.has(id)):[]);}catch{return new Set();}
}
function saveActOneProgress(progress){try{window.localStorage.setItem(ACT_ONE_PROGRESS_KEY,JSON.stringify([...progress]));}catch{/* Storage can be unavailable; in-memory progress remains usable. */}}
function loadActTwoProgress(){try{const parsed=JSON.parse(window.localStorage.getItem(ACT_TWO_PROGRESS_KEY));return new Set(Array.isArray(parsed)?parsed.filter(id=>typeof id==='string'&&actTwoStepIds.has(id)):[]);}catch{return new Set();}}
function saveActTwoProgress(progress){try{window.localStorage.setItem(ACT_TWO_PROGRESS_KEY,JSON.stringify([...progress]));}catch{/* Storage can be unavailable; in-memory progress remains usable. */}}
function loadActThreeProgress(){try{const parsed=JSON.parse(window.localStorage.getItem(ACT_THREE_PROGRESS_KEY));return new Set(Array.isArray(parsed)?parsed.filter(id=>typeof id==='string'&&actThreeStepIds.has(id)):[]);}catch{return new Set();}}
function saveActThreeProgress(progress){try{window.localStorage.setItem(ACT_THREE_PROGRESS_KEY,JSON.stringify([...progress]));}catch{/* Storage can be unavailable; in-memory progress remains usable. */}}
function loadJourneyAct(){try{const act=Number(window.localStorage.getItem('bg3-codex-journey-act'));return [1,2,3].includes(act)?act:1;}catch{return 1;}}
const state={classId:'',journey:loadJourneyAct(),selectedRegion:'',actOneModule:ACT_ONE_MODULES[0].id,actTwoModule:ACT_TWO_MODULES[0].id,actThreeModule:ACT_THREE_MODULES[0].id,actOneProgress:loadActOneProgress(),actTwoProgress:loadActTwoProgress(),actThreeProgress:loadActThreeProgress(),actOneShowSpoilers:false,actOneOnlyUnfinished:false,actOneOnlyEquipment:false,gearReturnStep:'',pendingReturnStep:''};
const walkthroughModules=()=>state.journey===3?ACT_THREE_MODULES:state.journey===2?ACT_TWO_MODULES:ACT_ONE_MODULES;
const walkthroughSteps=()=>state.journey===3?ACT_THREE_STEPS:state.journey===2?ACT_TWO_STEPS:ACT_ONE_STEPS;
const walkthroughModule=()=>state.journey===3?state.actThreeModule:state.journey===2?state.actTwoModule:state.actOneModule;
const walkthroughProgress=()=>state.journey===3?state.actThreeProgress:state.journey===2?state.actTwoProgress:state.actOneProgress;
const titles={builds:['找到属于你的战斗方式','先选职业主轴，再把每一级、每件装备与每次冒险连在一起。'],journey:['分章节冒险流程','按区域和不可逆节点推进，不错过重要救援、商人和装备。'],equipment:['构筑向装备图鉴','按 BD、章节、部位和推荐强度筛选；先看为什么适合，再决定给谁。'],inspirations:['角色激励点','按背景、起源与角色查找激励事件及触发提示。']};
const buildById=id=>BUILD_LIBRARY.find(build=>build.id===id);
const gearById=id=>GEAR.find(gear=>gear.id===id);
const classById=id=>CLASS_LIBRARY.find(klass=>klass.id===id);
const buildRole=build=>[build.subclass,build.split,build.design?.goal,build.design?.engine,...build.rotation,...build.risks].join(' ');
const includesClass=(build,id)=>!id||(build.entryClasses||[build.classId]).includes(id);
const buildStars=build=>$('difficulty').value==='honour'?(build.honourStars||build.strengthStars):build.strengthStars;
const visibleBuildPool=()=>BUILD_LIBRARY.filter(build=>($('build-scope')?.value||'all')==='all'||build.curated||($('difficulty').value==='explorer'&&!build.split.includes('/')));
const sourceName=url=>{try{return new URL(url).hostname.replace(/^www\./,'');}catch{return url;}};
const legacyFitLabels={
  'open-hand':'散打宗 · 连击武僧',giant:'巨人之道 · 巨人投掷',hexblade:'咒剑士 · 魅力近战',
  light:'光明牧师',tempest:'风暴牧师',healer:'治疗辅助',drunken:'醉拳宗 · 酒套扰乱',
  'shadow-monk':'暗影宗 · 潜袭武僧','moon-druid':'月亮德鲁伊 · 野性变形'
};
const fitLabel=id=>buildById(id)?.name||classById(id)?.name||legacyFitLabels[id]||'关联构筑';

function setupOptions(){
  $('gear-build').insertAdjacentHTML('beforeend',BUILD_LIBRARY.map(build=>`<option value="${build.id}">${escapeHTML(build.name)} · ${escapeHTML(build.split)}</option>`).join(''));
  $('gear-slot').insertAdjacentHTML('beforeend',[...new Set(GEAR.map(gear=>gear.slot))].sort().map(slot=>`<option>${escapeHTML(slot)}</option>`).join(''));
}

function renderClassLibrary(){
  const buttons=[{id:'',name:'全部职业',icon:'Ⅲ',role:'显示所有流派'},...CLASS_LIBRARY];
  const pool=visibleBuildPool();
  $('class-library').innerHTML=buttons.map(klass=>{const count=pool.filter(build=>includesClass(build,klass.id)).length;return `<button class="class-button" type="button" data-class="${klass.id}" aria-pressed="${state.classId===klass.id}"><span class="class-icon" aria-hidden="true">${escapeHTML(klass.icon)}</span><span><strong>${escapeHTML(klass.name)}</strong><small>${escapeHTML(klass.role)} · ${count} 套</small></span></button>`;}).join('');
}

function renderOriginHints(origin){
  const entries=ORIGIN_ADJUSTMENTS[origin]||[];
  const notes=entries.map(entry=>`<li><strong>${escapeHTML(buildById(entry.buildId)?.name||entry.buildId)}</strong>：${escapeHTML(entry.note)}</li>`).join('');
  $('origin-hints').innerHTML=origin?`<strong>${escapeHTML(origin)}的起源建议</strong><span class="no-lock">选择角色不会锁定职业</span>${notes?`<ul>${notes}</ul>`:'<p>此角色暂无专属构筑微调；仍可自由选择全部 12 个职业。</p>'}`:'<strong>起源与职业</strong><span class="no-lock">选择角色不会锁定职业</span><p>选择角色后会显示相关剧情、装备或主题建议，但不会从职业库中移除任何选项。</p>';
}

function renderBuilds(){
  const classId=state.classId,role=$('style-filter').value,q=$('query').value.trim().toLowerCase(),difficulty=$('difficulty').value;
  let list=visibleBuildPool().filter(build=>includesClass(build,classId)&&(!role||buildRole(build).includes(role))&&(!q||[build.name,buildRole(build),build.design?.provenance].join(' ').toLowerCase().includes(q)));
  list.sort((a,b)=>Number(b.curated)-Number(a.curated)||buildStars(b)-buildStars(a));
  if(difficulty==='explorer')list=list.filter(build=>!build.split.includes('/'));
  const selectedClass=classById(classId);
  $('result-count').textContent=`${selectedClass?selectedClass.name+' · ':''}找到 ${list.length} 套构筑`;
  $('difficulty-note').hidden=false;
  $('difficulty-note').textContent=difficulty==='explorer'?'探索者：仅显示单职业构筑；原版此难度不能直接兼职，可临时切换难度升级。':'星级按'+(difficulty==='honour'?'荣誉':'战术／平衡')+'规则与满级成装评估，不预设无限资源。力量灵药、受惊和关键装备条件分别写在详情里。同一套构筑会关联多个核心职业。';
  $('build-grid').innerHTML=list.length?list.map(build=>`<article class="build-card"><div class="card-head"><span class="tag recommend">${escapeHTML(build.tier)}</span><span class="sigil">${escapeHTML(classById(build.classId)?.icon||'Ⅲ')}</span></div><h2>${escapeHTML(build.name)}</h2><p class="split">${escapeHTML(build.split)}</p><p class="summary">${escapeHTML(build.design?.engine||build.rotation[0])}</p><p class="build-stars" aria-label="强度 ${buildStars(build)} 星，满分 5 星">${'★'.repeat(buildStars(build))}${'☆'.repeat(5-buildStars(build))} <small>${$('difficulty').value==='honour'?'荣誉':'战术／平衡'}</small></p><div class="card-meta"><span>${escapeHTML(classById(build.classId)?.name||build.classId)}</span><span>${escapeHTML(build.difficulty)}</span><span>${escapeHTML(build.version)}</span></div><div class="card-bottom"><span>${escapeHTML(build.subclass)}</span><button class="action" type="button" data-build="${build.id}">查看升级与配装 →</button></div></article>`).join(''):'<div class="empty">没有匹配构筑。试试切换职业或重置筛选。</div>';
}

const gearActLabel=gear=>gear.act==='special'?'特殊获取':`第${gear.act}章`;
function gearList(ids){return ids.map(gearById).filter(Boolean).map(gear=>`<li><strong>${escapeHTML(gear.name)}</strong> <span>${gearActLabel(gear)} · ${escapeHTML(gear.slot)}</span><br>${escapeHTML(gear.effect)}</li>`).join('');}
function renderBuildReasoning(build){
  const d=build.design;if(!d)return '<p class="notice">主题／其他路线：保留供比较，强度优先请查看推荐路线。</p>';
  const list=items=>'<ul class="detail-list">'+items.map(item=>'<li>'+escapeHTML(item)+'</li>').join('')+'</ul>';
  const abilityNames=['力量','敏捷','体质','智力','感知','魅力'];
  return '<section class="build-reasoning"><p class="eyebrow">构筑推导 · '+escapeHTML(d.goal)+'</p>'+
    '<h3>开卡属性</h3><div class="ability-grid">'+d.attributes.map((value,i)=>'<div><span>'+abilityNames[i]+'</span><strong>'+value+'</strong></div>').join('')+'</div><p class="muted">'+escapeHTML(d.attributeNote)+'</p>'+
    '<h3>成型节点</h3>'+list(d.breakpoints)+
    '<div class="tradeoff-grid"><section><h3>这些等级换来了什么</h3>'+list(d.gains)+'</section><section><h3>为此放弃了什么</h3>'+list(d.costs)+'</section></div>'+
    '<h3>为什么选它，而不是相近方案</h3><p>'+escapeHTML(d.comparison)+'</p>'+
    '<h3>资源与装备条件</h3><p>'+escapeHTML(d.resources)+'</p>'+
    '<p class="muted">评分：战术／平衡 '+build.strengthStars+' 星 · 荣誉 '+build.honourStars+' 星。'+escapeHTML(d.ratingNote)+'</p>'+
    '<p class="strategy-origin">'+escapeHTML(d.provenance)+'</p></section>';
}
function renderBuildDetail(buildId){
  const build=buildById(buildId);if(!build)return;
  const plan=build.gearPlan||{core:[],strong:[],replacements:[]};
  const selectedOrigin=$('character').value;
  const originEntries=[...(build.originHints||[]),...(ORIGIN_ADJUSTMENTS[selectedOrigin]||[]).filter(item=>item.buildId===build.id).map(item=>({origin:selectedOrigin,note:item.note}))];
  const seenOriginNotes=new Set();
  const originGroups=new Map();
  originEntries.forEach(item=>{const origin=item.origin||selectedOrigin||'相关角色',key=`${origin}\u0000${item.note}`;if(seenOriginNotes.has(key))return;seenOriginNotes.add(key);originGroups.set(origin,[...(originGroups.get(origin)||[]),item.note]);});
  const originNotes=[...originGroups].map(([origin,notes])=>`<li><strong>${escapeHTML(origin)}</strong>：${notes.map(escapeHTML).join('；')}</li>`).join('');
  const alternatives=plan.replacements.map(item=>{const target=gearById(item.for),choices=item.alternatives.map(gearById).filter(Boolean);return `<li><strong>${escapeHTML(target?.name||item.for)}</strong> 的替代：${choices.map(choice=>escapeHTML(choice.name)).join('、')}<br>${escapeHTML(item.reason)}${item.fallback?`<br><span class="muted">${escapeHTML(item.fallback.mode)}：${escapeHTML(item.fallback.reason)}</span>`:''}</li>`;}).join('');
  const buildAdvice=`<section class="build-advice"><h3>强度 ${'★'.repeat(buildStars(build))}${'☆'.repeat(5-buildStars(build))}</h3><p>${escapeHTML(build.strengthWhy)}</p><p class="muted">五星是相对强度参考，不保证任何难度或装备状态下的表现；兼职收益见逐级路线，荣誉模式差异见风险。</p><h3>推荐武器</h3><ul class="detail-list">${build.recommendedWeapons.map(name=>`<li>${escapeHTML(name)}</li>`).join('')}</ul><h3>推荐法术</h3>${build.recommendedSpells.length?`<ul class="detail-list">${build.recommendedSpells.map(name=>`<li>${escapeHTML(name)}</li>`).join('')}</ul>`:'<p>无必须选择的施法路线；以职业技能和武器攻击为主。</p>'}</section>${renderBuildReasoning(build)}`;
  $('build-detail').innerHTML=`<p class="eyebrow">${escapeHTML(classById(build.classId)?.name||build.classId)} · ${escapeHTML(build.subclass)}</p><h2 id="detail-title" class="detail-title">${escapeHTML(build.name)}</h2><p class="split">${escapeHTML(build.split)}</p><div class="detail-badges"><span class="tag recommend">${escapeHTML(build.tier)}</span><span class="tag">${escapeHTML(build.difficulty)}</span><span class="tag">${escapeHTML(build.version)}</span><span class="tag">核对 ${escapeHTML(build.strategyReviewedAt||build.checkedAt)}</span></div>${buildAdvice}<div class="detail-columns"><div><h3>1–12级路线</h3><table class="level-table"><thead><tr><th>等级</th><th>选择与理由</th></tr></thead><tbody>${build.levels.map((level,index)=>`<tr><td>${index+1}</td><td><strong>${escapeHTML(level[0])}</strong><br>${escapeHTML(level[1])}</td></tr>`).join('')}</tbody></table><h3>实战循环</h3><ol class="detail-list">${build.rotation.map(step=>`<li>${escapeHTML(step)}</li>`).join('')}</ol><h3>风险与使用条件</h3><ul class="detail-list risk-list">${build.risks.map(risk=>`<li>${escapeHTML(risk)}</li>`).join('')}</ul></div><div><h3>核心装备</h3><ul class="detail-list gear-plan">${gearList(plan.core)}</ul><h3>强力补件</h3><ul class="detail-list gear-plan">${gearList(plan.strong)}</ul><h3>替代路线</h3><ul class="detail-list">${alternatives||'<li>暂无额外替代说明。</li>'}</ul><h3>角色微调</h3><p class="no-lock">选择角色不会锁定职业</p><ul class="detail-list">${originNotes||'<li>此构筑没有选中角色的专属微调。</li>'}</ul><h3>资料来源</h3><ul class="detail-list source-list">${build.sources.map(url=>`<li><a class="source" href="${escapeHTML(url)}" target="_blank" rel="noopener">${escapeHTML(sourceName(url))} ↗</a></li>`).join('')}</ul></div></div>`;
  const dialog=$('build-dialog');if(!dialog.open)dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';
}

function renderGear(){
  const q=$('gear-query').value.trim().toLowerCase(),act=$('gear-act').value,slot=$('gear-slot').value,tier=$('gear-tier').value,buildId=$('gear-build').value,build=buildById(buildId);
  const plan=build?.gearPlan||{core:[],strong:[],replacements:[]};
  const plannedIds=new Set([...plan.core,...plan.strong,...plan.replacements.flatMap(item=>[item.for,...item.alternatives])]);
  const selectedAct=act==='special'?'special':act?Number(act):null;
  let list=GEAR.filter(gear=>(!selectedAct||gear.act===selectedAct)&&(!slot||gear.slot===slot)&&(!tier||gear.tier===tier)&&(!buildId||plannedIds.has(gear.id)||gear.fit.includes(buildId))&&(!q||[gear.name,gear.place,gear.slot,gear.effect,gear.steps,...gear.fit].join(' ').toLowerCase().includes(q)));
  list.sort((a,b)=>String(a.act).localeCompare(String(b.act),'zh-CN')||a.name.localeCompare(b.name,'zh-CN'));
  const returnControl=state.gearReturnStep?`<button class="gear-return action" type="button" data-return-step="${escapeHTML(state.gearReturnStep)}">← 返回攻略步骤</button>`:'';
  const specialNote=selectedAct==='special'?'<strong>特殊获取</strong>：这里仅列需要机制利用、非常规转移或受版本影响的武器；不计入普通路线的 BD 强度推荐。':'';
  $('gear-summary').innerHTML=(specialNote||(build?`<strong>${escapeHTML(build.name)}</strong>：显示 ${list.length} 件相关装备。<strong>核心</strong>只指该构筑的关键件；替代路线和队伍竞争会列在卡片中。`:`共收录 ${GEAR.length} 件关键装备。选择一套构筑可查看它的<strong>核心、替代路线与队伍竞争</strong>。`))+returnControl;
  $('gear-grid').innerHTML=list.length?list.map(gear=>{const replacement=plan.replacements.find(item=>item.for===gear.id);const fallback=plan.replacements.find(item=>item.alternatives.includes(gear.id));const fit=[...new Set([...(gear.fit||[]),...(plannedIds.has(gear.id)?[buildId]:[])])].filter(Boolean).map(fitLabel);const core=plan.core.includes(gear.id);return `<article class="gear-card" id="gear-${gear.id}"><div class="gear-top"><span class="tag ${core?'recommend':''}">${core?'本构筑核心':escapeHTML(gear.tier)}</span><span class="tag">${gearActLabel(gear)} · ${escapeHTML(gear.slot)}</span></div><h3>${escapeHTML(gear.name)}</h3><p>${escapeHTML(gear.effect)}</p><p class="fit"><strong>适配流派</strong> · ${fit.length?fit.map(escapeHTML).join('、'):'通用配装选择'}</p><p><strong>地点</strong> · ${escapeHTML(gear.place)}</p><p>${escapeHTML(gear.steps)}</p>${replacement?`<p class="replacement"><strong>替代路线</strong> · ${escapeHTML(replacement.alternatives.map(id=>gearById(id)?.name||id).join('、'))}<br>${escapeHTML(replacement.reason)}</p>`:''}${fallback?`<p class="replacement"><strong>可作为替代</strong> · ${escapeHTML(gearById(fallback.for)?.name||'核心装备')} 的备选。</p>`:''}${gear.competition?`<p class="competition"><strong>队伍竞争</strong> · ${escapeHTML(gear.competition)}</p>`:''}<details><summary>获取条件与错过风险（含剧透）</summary><p>${escapeHTML(gear.risk)}</p></details><a class="source" href="${escapeHTML(gear.sources?.[0]||wiki(gear.url))}" target="_blank" rel="noopener">核对物品来源 ↗</a></article>`;}).join(''):'<div class="empty">没有符合当前条件的装备。移除一个筛选条件再试。</div>';
}

function chapterTabs(view){document.querySelector(`[data-chapters="${view}"]`).innerHTML=[1,2,3].map(act=>`<button type="button" data-view="${view}" data-act="${act}" aria-pressed="${state[view]===act}">第${act}章</button>`).join('');}
function renderActOneProgress(){
  const done=walkthroughProgress().size,total=walkthroughSteps().length;
  $('act-one-progress').max=total;$('act-one-progress').value=done;
  $('act-one-progress-label').textContent=`${done} / ${total} 已完成`;
}
function renderActOneDirectory(){
  const modules=walkthroughModules(),steps=walkthroughSteps(),progress=walkthroughProgress();
  $('act-one-directory').innerHTML=`<p class="eyebrow">${modules.length} 个推进模块 · ${steps.length} 步</p>${modules.map((module,index)=>{const own=steps.filter(step=>step.moduleId===module.id),done=own.filter(step=>progress.has(step.id)).length;return `<button type="button" data-act-one-module="${escapeHTML(module.id)}" aria-pressed="${module.id===walkthroughModule()}"><span>${index+1}. ${escapeHTML(module.name)}</span><small>${escapeHTML(module.levelRange)} · ${done}/${own.length}</small></button>`;}).join('')}`;
}
function renderActOneOverview(){
  const modules=walkthroughModules(),steps=walkthroughSteps();
  const module=modules.find(item=>item.id===walkthroughModule())||modules[0];
  const warnings=[...new Set(steps.filter(step=>step.moduleId===module.id).flatMap(step=>step.warnings))];
  const labels={questsCompanions:'任务与队友',merchantsStock:'商人与重要商品',magicEquipment:'魔法装备',permanentBonuses:'永久增益与特殊奖励',hiddenAreas:'隐藏区域／宝箱',campEvents:'营地／长休事件'};
  const keys=(state.actOneOnlyEquipment?['magicEquipment']:['questsCompanions','merchantsStock','magicEquipment','permanentBonuses','hiddenAreas','campEvents']).filter(key=>state.journey===1||module.collections[key].length);
  const collections=keys.map(key=>`<section data-collection-category="${key}"><h3>${labels[key]}</h3><ul>${module.collections[key].length?module.collections[key].map(item=>{const gear=item.gearId?`<button type="button" data-collection-gear="${escapeHTML(item.gearId)}">${escapeHTML(item.label)} →</button>`:`<strong>${escapeHTML(item.label)}</strong>`;const body=`<span>${escapeHTML(item.condition)}</span><small>错过风险：${escapeHTML(item.missRisk)}</small>`;return `<li data-collection-id="${escapeHTML(item.id)}">${gear}${item.spoilerTier==='spoiler'?`<details class="collection-spoiler" ${state.actOneShowSpoilers?'open':''}><summary>条件与代价（剧透）</summary>${body}</details>`:body}</li>`;}).join(''):'<li class="muted">本模块没有独立条目。</li>'}</ul></section>`).join('');
  $('act-one-overview').innerHTML=`<article class="act-one-overview"><div class="region-heading"><div><p class="eyebrow">模块概览 · ${escapeHTML(module.levelRange)}</p><h2>${escapeHTML(module.name)}</h2></div><span class="tag">${escapeHTML(module.version)}</span></div><p>${escapeHTML(module.overview)}</p><div class="act-one-checklists"><section><h3>进入前准备</h3><ul>${module.prepare.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></section><section><h3>离开前检查</h3><ul>${module.leaveChecklist.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></section></div><div class="act-one-collections">${collections}</div><p class="module-sources">${module.sources.map((url,index)=>`<a class="source" href="${escapeHTML(url)}" target="_blank" rel="noopener">模块来源 ${index+1} ↗</a>`).join('')}</p></article><aside class="act-one-warning-summary" aria-label="本模块不可错过警告"><h3>本模块不可错过警告</h3><ul>${warnings.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></aside>`;
}
function actOneStepCard(step){
  const gear=step.loot.gearIds.map(id=>gearById(id)).filter(Boolean);
  return `<article class="act-one-step" id="act-one-step-${escapeHTML(step.id)}" data-step-id="${escapeHTML(step.id)}" tabindex="-1"><header><label class="step-progress"><input type="checkbox" data-progress-step="${escapeHTML(step.id)}" ${walkthroughProgress().has(step.id)?'checked':''}><span>步骤 ${step.number}</span></label><div><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.route.from)} → ${escapeHTML(step.route.to)}</p></div></header><section class="step-block"><h4>行动</h4><ol>${step.actions.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ol></section><section class="step-block"><h4>核对</h4><ul>${step.checks.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></section><section class="step-block"><h4>战斗与应对</h4><p><strong>触发：</strong>${escapeHTML(step.battle.when)}</p><ul>${step.battle.tactics.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></section><section class="step-block step-loot"><h4>收集与装备</h4><ul>${step.loot.notes.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul>${gear.length?`<div class="step-gear-list">${gear.map(item=>`<button type="button" data-step-gear="${escapeHTML(item.id)}">查看装备：${escapeHTML(item.name)} →</button>`).join('')}</div>`:'<p class="muted">本步没有共享装备目录条目。</p>'}</section><section class="step-block"><h4>完成条件</h4><ul>${step.completion.criteria.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul><p><strong>下一步：</strong>${escapeHTML(step.completion.next)}</p></section><aside class="step-warning" aria-label="不可错过警告"><strong>不可错过</strong><ul>${step.warnings.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></aside><details class="step-spoilers" ${state.actOneShowSpoilers?'open':''}><summary>直接后果与身份细节（剧透）</summary><ul>${step.spoilers.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></details><p class="step-sources">${step.sources.map((url,index)=>`<a class="source" href="${escapeHTML(url)}" target="_blank" rel="noopener">步骤来源 ${index+1} ↗</a>`).join('')}</p></article>`;
}
function renderActOneSteps(){
  let steps=walkthroughSteps().filter(step=>step.moduleId===walkthroughModule());
  if(state.actOneOnlyUnfinished)steps=steps.filter(step=>!walkthroughProgress().has(step.id));
  if(state.actOneOnlyEquipment)steps=steps.filter(step=>step.loot.gearIds.length);
  $('act-one-steps').innerHTML=steps.length?steps.map(actOneStepCard).join(''):'<div class="empty">当前筛选下没有步骤。</div>';
}
function renderActOne(){
  $('walkthrough-eyebrow').textContent=state.journey===3?'ACT THREE · 完整终局路线':state.journey===2?'ACT TWO · 逐步推进路线':'ACT ONE · 完整推进路线';
  $('act-one-title').textContent=state.journey===3?'第三章交互式流程 · 利文顿至耐色脑终局':state.journey===2?'第二章交互式流程':'第一章交互式流程';
  $('act-one-only-equipment').disabled=walkthroughSteps().every(step=>!step.loot.gearIds.length);
  renderActOneProgress();renderActOneDirectory();renderActOneOverview();renderActOneSteps();
}
function renderRegionGuides(act){
  const regions=REGION_GUIDES.filter(region=>region.act===act),selected=regions.find(region=>region.id===state.selectedRegion)||regions[0];
  state.selectedRegion=selected?.id||'';
  $('region-directory').innerHTML=`<p class="eyebrow">区域目录 · 当前查看第${act}章</p><div class="region-groups">${[1,2,3].map(chapter=>`<section><h3>第${chapter}章</h3><div>${REGION_GUIDES.filter(region=>region.act===chapter).map(region=>`<button type="button" data-region="${region.id}" aria-pressed="${region.id===state.selectedRegion}">${escapeHTML(region.name)}<small>${escapeHTML(region.levelRange)}</small></button>`).join('')}</div></section>`).join('')}</div>`;
  $('journey-content').innerHTML=selected?`<article class="region-card"><div class="region-heading"><div><p class="eyebrow">区域攻略 · ${escapeHTML(selected.levelRange)}</p><h2>${escapeHTML(selected.name)}</h2></div><a class="source" href="${escapeHTML(selected.sources[0])}" target="_blank" rel="noopener">区域资料 ↗</a></div><dl class="region-facts"><div><dt>如何进入</dt><dd>${escapeHTML(selected.entry)}</dd></div><div><dt>进入前准备</dt><dd>${escapeHTML(selected.prepare)}</dd></div><div><dt>推荐顺序</dt><dd>${escapeHTML(selected.order)}</dd></div></dl><h3>关键遭遇</h3><ul class="detail-list">${selected.encounters.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul><h3>区域装备</h3><ul class="detail-list">${selected.rewards.gearIds.length?selected.rewards.gearIds.map(id=>`<li>${escapeHTML(gearById(id)?.name||id)}</li>`).join(''):'<li>本区以推进、补给或线索为主。</li>'}</ul><p class="muted">${escapeHTML(selected.rewards.note)}</p><section class="region-warning" aria-label="进入前风险"><h3>进入前风险</h3><ul>${selected.warnings.map(warning=>`<li>${selected.id==='moonrise-towers'?`<strong>此处会锁定救援任务：</strong> ${escapeHTML(warning)}`:escapeHTML(warning)}</li>`).join('')}</ul></section><details class="region-spoilers"><summary>剧情结果（含剧透）</summary><ul>${selected.spoilers.map(spoiler=>`<li>${escapeHTML(spoiler)}</li>`).join('')}</ul></details></article>`:'<div class="empty">本章暂时没有区域攻略。</div>';
}
function renderJourney(){chapterTabs('journey');$('journey').querySelector('.act-one-walkthrough').hidden=false;renderActOne();renderRegionGuides(state.journey);}
function setupInspirations(){
  const backgrounds=[...new Set(INSPIRATIONS.map(item=>item.background))];
  $('inspiration-background').insertAdjacentHTML('beforeend',backgrounds.map(name=>`<option value="${escapeHTML(name)}">${escapeHTML(name)} · ${INSPIRATIONS.filter(item=>item.background===name).length} 条</option>`).join(''));
  const characters=[...new Set(INSPIRATIONS.flatMap(item=>item.character.split('、')).filter(name=>name!=='自建角色'))];
  $('inspiration-character').insertAdjacentHTML('beforeend',characters.map(name=>`<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`).join(''));
  ['inspiration-background','inspiration-character','inspiration-query'].forEach(id=>$(id).addEventListener(id==='inspiration-query'?'input':'change',renderInspirations));
}
function renderInspirations(){
  const background=$('inspiration-background').value;
  const character=$('inspiration-character').value;
  const query=$('inspiration-query').value.trim().toLocaleLowerCase();
  const rows=INSPIRATIONS.filter(item=>(!background||item.background===background)&&(!character||item.character.split('、').includes(character))&&(!query||`${item.title} ${item.detail} ${item.background} ${item.character}`.toLocaleLowerCase().includes(query)));
  $('inspiration-count').textContent=`找到 ${rows.length} / ${INSPIRATIONS.length} 条激励点`;
  $('inspiration-list').innerHTML=rows.length?rows.map(item=>`<article class="inspiration-card"><div class="inspiration-meta"><span class="tag">${escapeHTML(item.background)}</span><span>${escapeHTML(item.character)}</span><span>${item.chapter==='其他'?'其他':`第${['','一','二','三'][item.chapter]}章`}</span></div><h2>${escapeHTML(item.title)}</h2><p>${escapeHTML(item.detail)}</p></article>`).join(''):'<p class="empty">没有符合条件的激励点。试试清除筛选。</p>';
}
['character','difficulty','style-filter','build-scope'].forEach(id=>$(id)?.addEventListener('change',()=>{if(id==='character')renderOriginHints($('character').value);renderClassLibrary();renderBuilds();}));
$('query').addEventListener('input',renderBuilds);
$('reset').addEventListener('click',()=>{$('character').value='';$('difficulty').value='tactician';$('style-filter').value='';$('query').value='';if($('build-scope'))$('build-scope').value='recommended';state.classId='';renderClassLibrary();renderOriginHints('');renderBuilds();});
['gear-query','gear-act','gear-build','gear-slot','gear-tier'].forEach(id=>$(id).addEventListener(id==='gear-query'?'input':'change',renderGear));
$('act-one-show-spoilers').addEventListener('change',event=>{state.actOneShowSpoilers=event.target.checked;renderActOneOverview();renderActOneSteps();});
$('act-one-low-spoiler').addEventListener('change',event=>{if(event.target.checked){state.actOneShowSpoilers=false;renderActOneOverview();renderActOneSteps();}});
$('act-one-only-unfinished').addEventListener('change',event=>{state.actOneOnlyUnfinished=event.target.checked;renderActOneSteps();});
$('act-one-only-equipment').addEventListener('change',event=>{state.actOneOnlyEquipment=event.target.checked;renderActOneOverview();renderActOneSteps();});
$('act-one-directory-toggle').addEventListener('click',event=>{const expanded=event.currentTarget.getAttribute('aria-expanded')==='true';event.currentTarget.setAttribute('aria-expanded',String(!expanded));event.currentTarget.textContent=expanded?'展开模块目录':'收起模块目录';$('act-one-directory').hidden=expanded;});
document.addEventListener('change',event=>{const progress=event.target.closest('[data-progress-step]');if(!progress)return;const focusIndex=[...document.querySelectorAll('[data-progress-step]')].indexOf(progress),selected=walkthroughProgress();progress.checked?selected.add(progress.dataset.progressStep):selected.delete(progress.dataset.progressStep);if(state.journey===3)saveActThreeProgress(selected);else if(state.journey===2)saveActTwoProgress(selected);else saveActOneProgress(selected);renderActOneProgress();renderActOneDirectory();if(progress.checked&&state.actOneOnlyUnfinished){renderActOneSteps();const remaining=[...document.querySelectorAll('[data-progress-step]')];(remaining[Math.min(focusIndex,remaining.length-1)]||$('act-one-only-unfinished')).focus();}});
document.addEventListener('click',event=>{
  const moduleButton=event.target.closest('[data-act-one-module]');
  if(moduleButton){
    if(state.journey===3)state.actThreeModule=moduleButton.dataset.actOneModule;
    else if(state.journey===2)state.actTwoModule=moduleButton.dataset.actOneModule;
    else state.actOneModule=moduleButton.dataset.actOneModule;
    renderActOne();return;
  }
  const gearButton=event.target.closest('[data-step-gear],[data-collection-gear]');
  if(gearButton){const step=gearButton.closest('.act-one-step');const gearId=gearButton.dataset.stepGear||gearButton.dataset.collectionGear;const gear=gearById(gearId);state.gearReturnStep=step?.dataset.stepId||'';$('gear-query').value=gear?.name||'';$('gear-act').value='';$('gear-build').value='';$('gear-slot').value='';$('gear-tier').value='';renderGear();location.hash='equipment';requestAnimationFrame(()=>document.getElementById(`gear-${gearId}`)?.scrollIntoView({block:'start'}));return;}
  const returnButton=event.target.closest('[data-return-step]');
  if(returnButton){const step=[...ACT_ONE_STEPS,...ACT_TWO_STEPS,...ACT_THREE_STEPS].find(item=>item.id===returnButton.dataset.returnStep);if(!step)return;state.journey=step.id.startsWith('act3-')?3:step.id.startsWith('act2-')?2:1;if(state.journey===3)state.actThreeModule=step.moduleId;else if(state.journey===2)state.actTwoModule=step.moduleId;else state.actOneModule=step.moduleId;state.actOneOnlyUnfinished=false;state.actOneOnlyEquipment=false;$('act-one-only-unfinished').checked=false;$('act-one-only-equipment').checked=false;state.pendingReturnStep=step.id;renderJourney();location.hash='journey';return;}
  const classButton=event.target.closest('[data-class]');if(classButton){state.classId=classButton.dataset.class;renderClassLibrary();renderBuilds();return;}
  const buildButton=event.target.closest('[data-build]');if(buildButton){renderBuildDetail(buildButton.dataset.build);return;}
  const tab=event.target.closest('[data-view][data-act]');if(tab){state.journey=Number(tab.dataset.act);try{localStorage.setItem('bg3-codex-journey-act',String(state.journey));}catch{}state.selectedRegion='';renderJourney();return;}
  const regionButton=event.target.closest('[data-region]');if(regionButton){const region=REGION_GUIDES.find(item=>item.id===regionButton.dataset.region);state.selectedRegion=regionButton.dataset.region;state.journey=region?.act||state.journey;renderJourney();return;}
});
$('close-dialog').addEventListener('click',()=>$('build-dialog').close());$('build-dialog').addEventListener('close',()=>document.body.style.overflow='');window.addEventListener('hashchange',()=>{route();if(state.pendingReturnStep&&location.hash==='#journey'){const id=state.pendingReturnStep;state.pendingReturnStep='';requestAnimationFrame(()=>{const target=document.getElementById(`act-one-step-${id}`);target?.scrollIntoView({block:'start'});target?.focus({preventScroll:true});});}else scrollTo(0,0);});
setupOptions();setupInspirations();renderClassLibrary();renderOriginHints('');renderBuilds();renderGear();renderJourney();renderInspirations();route();
