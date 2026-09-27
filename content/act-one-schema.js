'use strict';
(function(){
  var ACT_ONE_ROUTE=['nautiloid','ravaged-beach','overgrown-ruins','emerald-grove','blighted-village-risen-road','sunlit-wetlands','goblin-camp','waukeens-rest-surface','underdark','grymforge','mountain-pass-monastery','creche-yllk'];
  var MODULE_FIELDS=['id','name','levelRange','overview','prepare','leaveChecklist','collections','sources','version','checkedAt'];
  var COLLECTION_KEYS=['questsCompanions','merchantsStock','magicEquipment','permanentBonuses','hiddenAreas','campEvents'];
  var STEP_FIELDS=['id','moduleId','number','title','route','actions','checks','battle','loot','completion','warnings','spoilers','sources'];
  var PLACEHOLDER=/(?:TODO|TBD|placeholder|占位|待补)/i;

  function hasText(value){return typeof value==='string'&&value.trim()&&!PLACEHOLDER.test(value);}
  function assertText(value,label){if(!hasText(value))throw new Error(label+' must be a non-placeholder string');}
  function assertTextList(value,label,allowEmpty){
    if(!Array.isArray(value)||(!allowEmpty&&!value.length)||value.some(function(item){return !hasText(item);})){throw new Error(label+' must be '+(allowEmpty?'an array of non-placeholder strings':'a nonempty array of non-placeholder strings'));}
  }
  function approvedSource(source){
    try{
      var parsed=new URL(source),host=parsed.hostname.toLowerCase();
      return parsed.protocol==='https:'&&(host==='bg3.wiki'||host.endsWith('.bg3.wiki')||host==='baldursgate3.game'||host.endsWith('.baldursgate3.game')||host==='larian.com'||host.endsWith('.larian.com')||host==='larianstudios.com'||host.endsWith('.larianstudios.com'));
    }catch(error){return false;}
  }
  function assertSources(value,label){
    assertTextList(value,label+' sources',false);
    var seen=new Set();
    value.forEach(function(source){
      if(!approvedSource(source))throw new Error(label+' must use approved HTTPS sources');
      if(seen.has(source))throw new Error(label+' has duplicate source');
      seen.add(source);
    });
  }
  function validateModule(module){
    if(!module||typeof module!=='object'||Array.isArray(module))throw new Error('module must be an object');
    MODULE_FIELDS.forEach(function(field){if(!(field in module))throw new Error('module missing '+field);});
    assertText(module.id,'module id');
    assertText(module.name,'module '+module.id+' name');
    if(!/[\u3400-\u9fff]/.test(module.name))throw new Error('module '+module.id+' name must be Chinese');
    assertText(module.levelRange,'module '+module.id+' levelRange');
    assertText(module.overview,'module '+module.id+' overview');
    assertTextList(module.prepare,'module '+module.id+' prepare',false);
    assertTextList(module.leaveChecklist,'module '+module.id+' leaveChecklist',false);
    if(!module.collections||typeof module.collections!=='object'||Array.isArray(module.collections))throw new Error('module '+module.id+' collections must be an object');
    COLLECTION_KEYS.forEach(function(key){
      var entries=module.collections[key];
      if(!Array.isArray(entries))throw new Error('module '+module.id+' collections.'+key+' must be an array');
      entries.forEach(function(entry){
        if(!entry||typeof entry!=='object'||Array.isArray(entry))throw new Error(module.id+' '+key+' entry must be an object');
        assertText(entry.id,module.id+' '+key+' id');assertText(entry.label,entry.id+' label');assertText(entry.condition,entry.id+' condition');assertText(entry.missRisk,entry.id+' missRisk');
        if(!['low','spoiler'].includes(entry.spoilerTier))throw new Error(entry.id+' has invalid spoilerTier');
        assertSources(entry.sources,entry.id);
      });
    });
    assertSources(module.sources,'module '+module.id);
    if(module.version!=='Patch 8 + Hotfix')throw new Error('module '+module.id+' has invalid version');
    if(module.checkedAt!=='2026-09-20')throw new Error('module '+module.id+' has invalid checkedAt');
  }
  function validateTaskReferences(step){
    if(!Object.prototype.hasOwnProperty.call(step,'taskIds'))return;
    if(!Array.isArray(step.taskIds)||step.taskIds.some(function(id){return !hasText(id);})){throw new Error(step.id+' taskIds must be an array of nonempty strings');}
    if(!Array.isArray(globalThis.ACT_ONE_TASKS))throw new Error(step.id+' has unknown task reference');
    var known=new Set(globalThis.ACT_ONE_TASKS.map(function(task){return task.id;})),seen=new Set();
    step.taskIds.forEach(function(id){if(!known.has(id))throw new Error(step.id+' has unknown task reference');if(seen.has(id))throw new Error(step.id+' has duplicate task reference');seen.add(id);});
  }
  function validateStep(step,moduleIds,stepIds,numbers,gearIds){
    if(!step||typeof step!=='object'||Array.isArray(step))throw new Error('step must be an object');
    STEP_FIELDS.forEach(function(field){if(!(field in step))throw new Error('step missing '+field);});
    assertText(step.id,'step id');
    if(stepIds.has(step.id))throw new Error('duplicate step id: '+step.id);
    stepIds.add(step.id);
    assertText(step.moduleId,step.id+' moduleId');
    if(!moduleIds.has(step.moduleId))throw new Error(step.id+' has unknown module');
    if(!Number.isInteger(step.number)||step.number<1)throw new Error(step.id+' number must be a positive integer');
    var moduleNumbers=numbers.get(step.moduleId);
    if(moduleNumbers.has(step.number))throw new Error(step.id+' has duplicate step number in '+step.moduleId);
    moduleNumbers.add(step.number);
    assertText(step.title,step.id+' title');
    if(!step.route||typeof step.route!=='object'||Array.isArray(step.route)){throw new Error(step.id+' route must be an object');}
    assertText(step.route.from,step.id+' route.from');
    assertText(step.route.to,step.id+' route.to');
    assertTextList(step.actions,step.id+' actions',false);
    assertTextList(step.checks,step.id+' checks',false);
    if(!step.battle||typeof step.battle!=='object'||Array.isArray(step.battle))throw new Error(step.id+' battle must be an object');
    assertText(step.battle.when,step.id+' battle.when');
    assertTextList(step.battle.tactics,step.id+' battle.tactics',false);
    if(!step.loot||typeof step.loot!=='object'||Array.isArray(step.loot))throw new Error(step.id+' loot must be an object');
    if(!Array.isArray(step.loot.gearIds)||step.loot.gearIds.some(function(id){return !hasText(id);})){throw new Error(step.id+' loot.gearIds must be an array of gear IDs');}
    assertTextList(step.loot.notes,step.id+' loot.notes',false);
    step.loot.gearIds.forEach(function(id){if(!gearIds.has(id))throw new Error(step.id+' has unknown gear '+id);});
    if(!step.completion||typeof step.completion!=='object'||Array.isArray(step.completion))throw new Error(step.id+' completion must be an object');
    assertTextList(step.completion.criteria,step.id+' completion.criteria',false);
    assertText(step.completion.next,step.id+' completion.next');
    assertTextList(step.warnings,step.id+' warnings',false);
    assertTextList(step.spoilers,step.id+' spoilers',false);
    assertSources(step.sources,step.id);
    validateTaskReferences(step);
  }
  function validateActOneGuide(){
    var modules=globalThis.ACT_ONE_MODULES,steps=globalThis.ACT_ONE_STEPS;
    if(!Array.isArray(modules)||modules.length!==ACT_ONE_ROUTE.length)throw new Error('ACT_ONE_MODULES must contain exactly 12 modules');
    if(!Array.isArray(steps))throw new Error('ACT_ONE_STEPS must be an array');
    var moduleIds=new Set(),numbers=new Map(),stepIds=new Set();
    modules.forEach(function(module,index){
      validateModule(module);
      if(moduleIds.has(module.id))throw new Error('duplicate module id: '+module.id);
      if(module.id!==ACT_ONE_ROUTE[index])throw new Error('Act One module route order must be canonical');
      moduleIds.add(module.id);numbers.set(module.id,new Set());
    });
    if(!Array.isArray(globalThis.GEAR))throw new Error('shared GEAR catalog is required');
    var gearIds=new Set(globalThis.GEAR.map(function(gear){return gear.id;}));
    steps.forEach(function(step){validateStep(step,moduleIds,stepIds,numbers,gearIds);});
    moduleIds.forEach(function(moduleId){if(!numbers.get(moduleId).size)throw new Error(moduleId+' needs at least one step');});
    return true;
  }
  globalThis.validateActOneGuide=validateActOneGuide;
}());
