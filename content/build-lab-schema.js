'use strict';
(function(){
  var GOAL_IDS=['melee-burst','ranged-sustain','spell-burst','control','healing','throwing','summon','exploration'];
  var MECHANIC_IDS=['wet-lightning','lightning-charges','arcane-acuity','radiant-reverberation','multi-hit-riders','throwing','unarmed','charisma-weapon','short-rest-casting','concentration-control','healing-triggers','summon-utility','stealth-utility'];
  var EXPLOIT_IDS=['infinite-spell-slots','merchant-refresh-theft','camp-persistent-buffs'];
  var SCORE_CONTEXTS=['current','wholeGame','endgame'];
  var SCORE_DIMENSIONS=['pressure','survival','actionEconomy','smoothness','resourceEfficiency','gearDependence'];
  var ABILITIES=['力量','敏捷','体质','智力','感知','魅力'];
  var POINT_COST={8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};
  var ROGUE_SKILLS=['体操','运动','欺瞒','洞悉','威吓','调查','察觉','表演','说服','巧手','隐匿'];
  var PLACEHOLDER=/(?:TODO|TBD|placeholder|待补|看情况|按需|合适的法术|选择合法选项|复核|子职业选择|学派能力|记录资源)/i;
  var SUBCLASS_LEVEL={barbarian:3,bard:3,cleric:1,druid:2,fighter:3,monk:3,paladin:1,ranger:3,rogue:3,sorcerer:1,warlock:1,wizard:2};
  // Alternatives are OR-ed; a subclass requirement belongs to that class.
  var GATED_TERMS=[
    {term:/盗贼额外附赠动作|快手/,any:[['rogue',3,'盗贼']]},
    {term:/快速法术/,any:[['sorcerer',3]]},
    {term:/剑刃花式|防御花式/,any:[['bard',3,'剑刃学院']]},
    {term:/反制法术/,any:[['wizard',5],['sorcerer',5],['warlock',5],['bard',10]]},
    {term:/剑舞/,any:[['wizard',2,'剑舞法师']]},
    {term:/愤怒投掷/,any:[['barbarian',3,'狂战士']]},
    {term:/元素劈斩/,any:[['barbarian',6,'巨人之道']]},
    {term:/守护光环/,any:[['paladin',6]]},
    {term:/神圣忠诚/,any:[['paladin',7,'王冠之誓']]},
    {term:/审判者之力/,any:[['paladin',1,'复仇誓言']]},
    {term:/仇敌誓言/,any:[['paladin',3,'复仇誓言']]},
    {term:/恶兆之犬/,any:[['sorcerer',6,'暗影魔法']]},
    {term:/醉拳技巧/,any:[['monk',3,'醉拳宗']]},
    {term:/醉酒打击|Intoxicating Strike/,any:[['monk',4,'醉拳宗']]},
    {term:/Redirect Attack/,any:[['monk',6,'醉拳宗']]},
    {term:/震慑拳/,any:[['monk',5]]},
    {term:/偏斜投射物/,any:[['monk',3]]},
    {term:/狡诈动作/,any:[['rogue',2]]},
    {term:/动作如潮/,any:[['fighter',2]]},
    {term:/恐怖伏击/,any:[['ranger',3,'幽暗追踪者']]},
    {term:/弯曲射击/,any:[['fighter',7,'奥术射手']]},
    {term:/宇宙预兆/,any:[['druid',6,'星辰结社']]},
    {term:/巨人狂暴/,any:[['barbarian',3,'巨人之道']]},
    {term:/鲁莽攻击/,any:[['barbarian',2]]},
    {term:/虎之血欲/,any:[['barbarian',3,'荒蛮之心']]},
    {term:/精准攻击|缴械攻击|绊摔攻击/,any:[['fighter',3,'战斗大师']]},
    {term:/威严帷幕/,any:[['bard',6,'魅惑学院']]},
    {term:/巨龙星辰形态|弓手星辰形态/,any:[['druid',2,'星辰结社']]},
    {term:/枭熊/,any:[['druid',6]]},
    {term:/大地侍从/,any:[['druid',10,'月亮结社']]},
    {term:/毁灭之怒/,any:[['cleric',2,'风暴领域']]},
    {term:/雷霆打击/,any:[['cleric',6,'风暴领域']]},
    {term:/风暴之怒/,any:[['cleric',1,'风暴领域']]},
    {term:/守御之光/,any:[['cleric',1,'光明领域']]},
    {term:/黎明曙光/,any:[['cleric',2,'光明领域']]},
    {term:/神圣干预/,any:[['cleric',10]]},
    {term:/魔能爆/,any:[['warlock',1],['bard',10]]},
    {term:/诡诈闪避/,any:[['rogue',5]]}
  ];
  var SPELL_GATES=[
    {term:/强化属性/,any:[['bard',3],['cleric',3],['druid',3],['sorcerer',3]]},
    {term:/护盾术/,any:[['wizard',1],['sorcerer',1],['warlock',1,'咒剑士']]},
    {term:/魔法飞弹|法师护甲/,any:[['wizard',1],['sorcerer',1]]},
    {term:/治疗真言/,any:[['bard',1],['cleric',1],['druid',1]]},
    {term:/造水术/,any:[['cleric',1],['druid',1],['sorcerer',6,'风暴术法']]},
    {term:/祝福术/,any:[['cleric',1],['paladin',2]]},
    {term:/灵体武器/,any:[['cleric',3],['paladin',5,'王冠之誓']]},
    {term:/援助术/,any:[['cleric',3],['paladin',5]]},
    {term:/灵体卫士/,any:[['cleric',5],['paladin',9,'王冠之誓']]},
    {term:/召雷术/,any:[['druid',5],['cleric',5,'风暴领域'],['sorcerer',6,'风暴术法']]},
    {term:/荆棘丛生/,any:[['druid',3],['ranger',5]]},
    {term:/月华之光/,any:[['druid',3],['paladin',5,'古贤之誓']]},
    {term:/人类定身术/,any:[['bard',3],['cleric',3],['druid',3],['sorcerer',3],['warlock',3],['wizard',3],['paladin',5,'复仇誓言']]},
    {term:/迷踪步/,any:[['sorcerer',3],['warlock',3],['wizard',3],['ranger',5,'幽暗追踪者'],['paladin',5,'复仇誓言'],['paladin',5,'古贤之誓']]},
    {term:/镜像术/,any:[['sorcerer',3],['warlock',3],['wizard',3]]},
    {term:/匕首之云/,any:[['bard',3],['sorcerer',3],['warlock',3],['wizard',3]]},
    {term:/Shatter/,any:[['bard',3],['sorcerer',3],['warlock',3],['wizard',3],['cleric',3,'风暴领域']]},
    {term:/反制法术/,any:[['sorcerer',5],['warlock',5],['wizard',5]]},
    {term:/闪电束|火球术|加速术/,any:[['sorcerer',5],['wizard',5]]},
    {term:/催眠图纹|恐惧术/,any:[['bard',5],['sorcerer',5],['warlock',5],['wizard',5]]},
    {term:/缓慢术/,any:[['sorcerer',5],['wizard',5]]},
    {term:/哈达饥渴/,any:[['warlock',5]]},
    {term:/任意门/,any:[['bard',7],['sorcerer',7],['warlock',7],['wizard',7]]},
    {term:/高等隐形术/,any:[['bard',7],['sorcerer',7],['wizard',7]]},
    {term:/死亡防护/,any:[['cleric',7]]},
    {term:/召唤林地妖精/,any:[['druid',7]]},
    {term:/召唤元素生物/,any:[['druid',9],['wizard',9]]},
    {term:/怪物定身术/,any:[['bard',9],['sorcerer',9],['warlock',9],['wizard',9]]},
    {term:/寒冰锥/,any:[['sorcerer',9],['wizard',9]]},
    {term:/六环法术|连锁闪电/,any:[['sorcerer',11],['wizard',11]]}
  ];
  function hasGate(gate,counts,subclasses){return gate.any.some(function(path){return (counts[path[0]]||0)>=path[1]&&(!path[2]||subclasses[path[0]]===path[2]);});}
  function isFeatLevel(step){return [4,8,12].includes(step.classLevel)||(step.classId==='fighter'&&step.classLevel===6)||(step.classId==='rogue'&&step.classLevel===10);}

  function hasText(value){return typeof value==='string'&&value.trim()&&!PLACEHOLDER.test(value);}
  function assertText(value,label){if(!hasText(value))throw new Error(label+' must be a non-placeholder string');}
  function approvedSource(source){
    try{
      var parsed=new URL(source),host=parsed.hostname.toLowerCase();
      return parsed.protocol==='https:'&&(host==='bg3.wiki'||host.endsWith('.bg3.wiki')||host==='baldursgate3.game'||host.endsWith('.baldursgate3.game')||host==='larian.com'||host.endsWith('.larian.com')||host==='larianstudios.com'||host.endsWith('.larianstudios.com'));
    }catch(error){return false;}
  }
  function assertTextList(value,label){
    if(!Array.isArray(value)||!value.length||value.some(function(item){return !hasText(item);})){throw new Error(label+' must be a nonempty array of non-placeholder strings');}
  }
  function assertSources(value,label){
    assertTextList(value,label+' sources');
    var seen=new Set();
    value.forEach(function(source){
      if(!approvedSource(source))throw new Error(label+' must use approved HTTPS sources');
      if(seen.has(source))throw new Error(label+' has duplicate source');
      seen.add(source);
    });
  }
  function assertUniqueIds(records,label){
    if(!Array.isArray(records)||!records.length)throw new Error(label+' must be a nonempty array');
    var seen=new Set();
    records.forEach(function(record){
      if(!record||typeof record!=='object'||Array.isArray(record))throw new Error(label+' record must be an object');
      assertText(record.id,label+' id');
      if(seen.has(record.id))throw new Error('duplicate '+label+' id: '+record.id);
      seen.add(record.id);
    });
    return seen;
  }
  function assertReferences(ids,known,label){
    if(!Array.isArray(ids)||!ids.length)throw new Error(label+' must be a nonempty array');
    var seen=new Set();
    ids.forEach(function(id){
      assertText(id,label+' id');
      if(!known.has(id))throw new Error(label+' has unknown reference: '+id);
      if(seen.has(id))throw new Error(label+' has duplicate reference: '+id);
      seen.add(id);
    });
  }
  function assertExactIds(records,expected,label){
    var ids=assertUniqueIds(records,label);
    if(ids.size!==expected.length||expected.some(function(id){return !ids.has(id);})){throw new Error(label+' must use canonical IDs');}
  }
  function validateScore(value,label){
    if(typeof value!=='number'||value<1||value>5||Math.round(value*2)!==value*2)throw new Error(label+' must be 1-5 in 0.5 increments');
  }
  function validateScoreContext(value,label){
    if(!value||typeof value!=='object'||Array.isArray(value))throw new Error(label+' must be an object');
    validateScore(value.stars,label+' stars');
    SCORE_DIMENSIONS.forEach(function(dimension){
      var detail=value[dimension];
      if(!detail||typeof detail!=='object'||Array.isArray(detail))throw new Error(label+' missing '+dimension);
      validateScore(detail.score,label+' '+dimension+' score');assertText(detail.reason,label+' '+dimension+' reason');
      if(/动作、附赠动作与反应各支付一次|按本路线的关键职业等级成型|以前排护甲、移动和反应资源承担风险/.test(detail.reason))throw new Error(label+' contains shared score reason template');
    });
    if(new Set(SCORE_DIMENSIONS.map(function(d){return value[d].reason;})).size!==SCORE_DIMENSIONS.length)throw new Error(label+' repeats a shared score reason template');
    if(Object.keys(value).some(function(key){return key!=='stars'&&!SCORE_DIMENSIONS.includes(key);})){throw new Error(label+' has unknown score dimension');}
  }
  function parseFinalSplit(value,label){
    assertText(value,label);
    var result={},parts=value.split('/').map(function(part){return part.trim();});
    if(!parts.length)throw new Error(label+' must contain class counts');
    parts.forEach(function(part){
      var match=/^([a-z]+)\s+([1-9]|1[0-2])$/.exec(part);
      if(!match||result[match[1]])throw new Error(label+' must use unique "class level" entries');
      result[match[1]]=Number(match[2]);
    });
    return result;
  }
  function validateStartingAttributes(attributes,label){
    if(!Array.isArray(attributes)||attributes.length!==ABILITIES.length||attributes.some(function(item){return !item||!ABILITIES.includes(item.ability)||!Number.isInteger(item.value)||item.value<8||item.value>17;})||new Set(attributes.map(function(item){return item.ability;})).size!==ABILITIES.length)throw new Error(label+' needs all six explicit ability scores');
    // Try every distinct +2/+1 placement; bonuses cannot stack on one ability.
    var possible=attributes.some(function(_,plusTwo){return attributes.some(function(_,plusOne){
      if(plusTwo===plusOne)return false;
      var base=attributes.map(function(item,index){return item.value-(index===plusTwo?2:index===plusOne?1:0);});
      return base.every(function(value){return value>=8&&value<=15;})&&base.reduce(function(sum,value){return sum+POINT_COST[value];},0)<=27;
    });});
    if(!possible)throw new Error(label+' cannot be created with 27-point buy and distinct +2/+1 bonuses');
  }
  function validateCards(cards,decisionId,archetype){
    if(!Array.isArray(cards)||cards.length!==12)throw new Error(decisionId+' must contain exactly 12 level cards');
    var levels=new Set();
    cards.forEach(function(card){
      if(!card||typeof card!=='object'||Array.isArray(card))throw new Error(decisionId+' level card must be an object');
      ['level','required','requiredReason','recommended','alternatives','avoid','operation','sources'].forEach(function(field){if(!(field in card))throw new Error(decisionId+' level card missing '+field);});
      if(!Number.isInteger(card.level)||card.level<1||card.level>12||levels.has(card.level))throw new Error(decisionId+' cards must cover levels 1-12 exactly once');
      levels.add(card.level);
      ['required','requiredReason','operation'].forEach(function(field){assertText(card[field],decisionId+' level '+card.level+' '+field);});
      if(/选择\s+(?:合法选项|职业等级能力)|若本级没有选择界面|服务于\s*[^；。]+机制/.test(card.required+' '+card.requiredReason+' '+card.operation))throw new Error(decisionId+' level '+card.level+' contains generated decision filler');
      assertTextList(card.alternatives,decisionId+' level '+card.level+' alternatives');
      assertTextList(card.avoid,decisionId+' level '+card.level+' avoid');
      assertSources(card.sources,decisionId+' level '+card.level);
      if(card.factId==='wizard-bladesinger-sorcadin-storm-cantrips'&&(!/跳下或下降前先施放羽落术/.test(card.operation)||!/附赠动作/.test(card.operation)||!/10 回合/.test(card.operation)||!card.sources.includes('https://bg3.wiki/wiki/Feather_Fall')))throw new Error(decisionId+' Feather Fall needs bonus-action/precast facts and a direct source');
      if(/羽落术反应|羽落术与护盾术争反应/.test(card.operation+' '+card.avoid.join(' ')))throw new Error(decisionId+' Feather Fall cannot use a reaction');
      if('draft' in card)throw new Error(decisionId+' level '+card.level+' must not be draft');
      if(!Array.isArray(card.recommended)||card.recommended.length<2)throw new Error(decisionId+' level '+card.level+' needs at least two ranked recommendations');
      var priorities=new Set(),lastPriority=0;
      card.recommended.forEach(function(item){
        if(!item||typeof item!=='object'||Array.isArray(item))throw new Error(decisionId+' level '+card.level+' recommendation must be an object');
        if(!Number.isInteger(item.priority)||item.priority<1||priorities.has(item.priority))throw new Error(decisionId+' level '+card.level+' recommendations need unique priorities');
        if(item.priority<=lastPriority)throw new Error(decisionId+' level '+card.level+' recommendations must ascend by priority');
        priorities.add(item.priority);lastPriority=item.priority;
        assertText(item.choice,decisionId+' level '+card.level+' recommendation choice');assertText(item.reason,decisionId+' level '+card.level+' recommendation reason');
        if(!approvedSource(item.source))throw new Error(decisionId+' level '+card.level+' recommendation must use approved HTTPS sources');
      });
      if(!card.required.includes(archetype.primaryClassId))throw new Error(decisionId+' level '+card.level+' must name its primary-class route');
      if(!archetype.mechanicIds.some(function(id){return card.requiredReason.includes(id);})){throw new Error(decisionId+' level '+card.level+' must name a route mechanic dependency');}
      if(!archetype.mechanicIds.some(function(id){return card.operation.includes(id);})){throw new Error(decisionId+' level '+card.level+' operation must name a route mechanic dependency');}
      if(!card.alternatives.some(function(item){return item.includes('当')||item.includes('若');}))throw new Error(decisionId+' level '+card.level+' alternatives need a conditional trigger');
      var completed=archetype.route.slice(0,card.level);
      var counts={};completed.forEach(function(step){counts[step.classId]=step.classLevel;});
      var step=archetype.route[card.level-1],subclasses=archetype.subclassChoices||{};
      if(step.classId==='rogue'&&step.classLevel===1&&card.level>1){
        [card.required].concat(card.recommended.map(function(item){return item.choice;}),card.alternatives).forEach(function(text){
          var choices=text.matchAll(/新增技能(?:选择|选|仍选|改为)([^；。，（]+)/g);
          Array.from(choices).forEach(function(match){match[1].split('、').forEach(function(skill){if(!ROGUE_SKILLS.includes(skill))throw new Error(decisionId+' multiclass choice is not on the Rogue skill list: '+skill);});});
        });
      }
      assertText(card.factId,decisionId+' factId');
      if(!['tactic','subclass','selection','spell','prepare','skill','style','feat'].includes(card.decisionKind))throw new Error(decisionId+' invalid decision kind');
      card.recommended.forEach(function(item){
        if(item.classId!==step.classId||item.classLevel!==step.classLevel||item.kind!==card.decisionKind)throw new Error(decisionId+' recommendation must match route class level');
        if(/专长：|属性提升：/.test(item.choice)&&!isFeatLevel(step))throw new Error(decisionId+' unavailable feat/ASI at this class level');
        if(/若本级没有选择界面|学派.*级能力|记录.*资源/.test(item.choice))throw new Error(decisionId+' generic recommendation');
        if(item.priority>1)assertText(item.condition,decisionId+' conditional recommendation');
        SPELL_GATES.forEach(function(gate){
          if(!gate.term.test(item.choice))return;
          var magicSecrets=step.classId==='bard'&&step.classLevel>=10;
          if(!magicSecrets&&!hasGate(gate,counts,subclasses))throw new Error(decisionId+' unavailable spell '+gate.term+' at this route level');
          if(/新增法术|新法术|法术：|准备/.test(item.choice)&&!magicSecrets){
            var selecting={};selecting[step.classId]=step.classLevel;
            if(!hasGate(gate,selecting,subclasses))throw new Error(decisionId+' spell selection is illegal for the advancing class: '+gate.term);
          }
        });
      });
      if(step.classLevel===SUBCLASS_LEVEL[step.classId]&&(!subclasses[step.classId]||!card.recommended.every(function(item){return item.choice.includes(subclasses[step.classId]);})))throw new Error(decisionId+' must name the actual subclass at its selection level');
      var actionableText=card.required+' '+card.recommended.map(function(item){return item.choice;}).join(' ')+' '+card.operation;
      Object.keys(subclasses).forEach(function(classId){if(actionableText.includes(subclasses[classId])&&(counts[classId]||0)<SUBCLASS_LEVEL[classId])throw new Error(decisionId+' names subclass before its class-level gate');});
      if(card.decisionKind==='subclass'&&step.classLevel!==SUBCLASS_LEVEL[step.classId])throw new Error(decisionId+' subclass selection at wrong class level');
      GATED_TERMS.forEach(function(gate){
        if(gate.term.test(card.required+' '+card.recommended.map(function(item){return item.choice;}).join(' ')+' '+card.operation)&&!hasGate(gate,counts,subclasses))throw new Error(decisionId+' level '+card.level+' names '+gate.term+' before its class-level gate');
      });
    });
    if(levels.size!==12)throw new Error(decisionId+' cards must cover levels 1-12');
  }
  function validateBuildLabData(){
    assertExactIds(globalThis.BUILD_MECHANICS,MECHANIC_IDS,'BUILD_MECHANICS');
    BUILD_MECHANICS.forEach(function(mechanic){
      ['name','summary','sources','version','checkedAt'].forEach(function(field){if(!(field in mechanic))throw new Error(mechanic.id+' missing '+field);});
      assertText(mechanic.name,mechanic.id+' name');assertText(mechanic.summary,mechanic.id+' summary');assertSources(mechanic.sources,mechanic.id);
      if(mechanic.version!=='Patch 8 + Hotfix'||mechanic.checkedAt!=='2026-09-22')throw new Error(mechanic.id+' has invalid Build Lab version metadata');
    });
    assertExactIds(globalThis.EXPLOIT_POLICIES,EXPLOIT_IDS,'EXPLOIT_POLICIES');
    EXPLOIT_POLICIES.forEach(function(policy){
      ['policy','assessmentStatus','normalRouteAlternative','honourAvailable','honourStatus','honourReason','sources','version','checkedAt'].forEach(function(field){if(!(field in policy))throw new Error(policy.id+' missing '+field);});
      if(policy.policy!=='common')throw new Error(policy.id+' must use common policy');
      assertText(policy.normalRouteAlternative,policy.id+' normal-route alternative');
      if(typeof policy.honourAvailable!=='boolean')throw new Error(policy.id+' must explicitly state Honour availability');
      if(!['verified','unverified','excluded'].includes(policy.assessmentStatus))throw new Error(policy.id+' invalid assessment status');
      if(!['available','unavailable','unverified','not-assessed'].includes(policy.honourStatus)||policy.honourAvailable!==(policy.honourStatus==='available'))throw new Error(policy.id+' Honour status must agree with availability boolean');
      assertText(policy.honourReason,policy.id+' Honour evidence explanation');
      assertSources(policy.sources,policy.id);
      if(policy.version!=='Patch 8 + Hotfix'||policy.checkedAt!=='2026-09-22')throw new Error(policy.id+' has invalid Build Lab version metadata');
    });
    var classes=Array.isArray(globalThis.CLASS_LIBRARY)?new Set(CLASS_LIBRARY.map(function(item){return item.id;})):null;
    if(!classes||!classes.size)throw new Error('CLASS_LIBRARY must load before Build Lab validation');
    var archetypeIds=assertUniqueIds(globalThis.BUILD_ARCHETYPES,'BUILD_ARCHETYPES'),mechanicIds=new Set(MECHANIC_IDS),goalIds=new Set(GOAL_IDS),decisionIds=new Set();
    BUILD_ARCHETYPES.forEach(function(archetype){
      ['primaryClassId','coreLevels','goalIds','mechanicIds','levelDecisionId','contextScores','conflictRules','sources','checkedAt','finalSplit','route','startingAttributes','coreLoop','gearPlan','normalRoute','honourAdjustments','lowStarRemedy','exploitComparisons'].forEach(function(field){if(!(field in archetype))throw new Error(archetype.id+' missing '+field);});
      if(!classes.has(archetype.primaryClassId))throw new Error(archetype.id+' has unknown primary class');
      if(!Array.isArray(archetype.coreLevels)||!archetype.coreLevels.length||archetype.coreLevels.some(function(level){return !Number.isInteger(level)||level<1||level>12;}))throw new Error(archetype.id+' coreLevels must be nonempty character levels');
      if(new Set(archetype.coreLevels).size!==archetype.coreLevels.length)throw new Error(archetype.id+' coreLevels must be unique');
      if(!archetype.coreLevels.includes(1))throw new Error(archetype.id+' coreLevels must include level 1 for its primary class');
      assertReferences(archetype.goalIds,goalIds,archetype.id+' goals');assertReferences(archetype.mechanicIds,mechanicIds,archetype.id+' mechanics');
      assertText(archetype.levelDecisionId,archetype.id+' levelDecisionId');
      if(decisionIds.has(archetype.levelDecisionId))throw new Error(archetype.id+' reuses level decision '+archetype.levelDecisionId);
      decisionIds.add(archetype.levelDecisionId);
      if(!archetype.contextScores||typeof archetype.contextScores!=='object'||Array.isArray(archetype.contextScores))throw new Error(archetype.id+' contextScores must be an object');
      SCORE_CONTEXTS.forEach(function(context){if(!(context in archetype.contextScores))throw new Error(archetype.id+' missing '+context+' score');validateScoreContext(archetype.contextScores[context],archetype.id+' '+context+' score');});
      if(Object.keys(archetype.contextScores).some(function(context){return !SCORE_CONTEXTS.includes(context);})){throw new Error(archetype.id+' has unknown score context');}
      assertTextList(archetype.conflictRules,archetype.id+' conflictRules');assertSources(archetype.sources,archetype.id);
      var finalSplit=parseFinalSplit(archetype.finalSplit,archetype.id+' finalSplit');assertText(archetype.coreLoop,archetype.id+' coreLoop');assertText(archetype.normalRoute,archetype.id+' normalRoute');assertText(archetype.honourAdjustments,archetype.id+' honourAdjustments');assertText(archetype.lowStarRemedy,archetype.id+' low-star remedy');
      if(Object.keys(finalSplit).some(function(classId){return !classes.has(classId);})||!finalSplit[archetype.primaryClassId])throw new Error(archetype.id+' finalSplit must contain known primary class');
      if(!Array.isArray(archetype.route)||archetype.route.length!==12||archetype.route.some(function(step){return !step||!classes.has(step.classId)||!Number.isInteger(step.classLevel)||step.classLevel<1||step.classLevel>12;}))throw new Error(archetype.id+' route must contain 12 valid class levels');
      var routeLevels={};archetype.route.forEach(function(step){(routeLevels[step.classId]||(routeLevels[step.classId]=[])).push(step.classLevel);});
      if(Object.keys(routeLevels).some(function(classId){var levels=routeLevels[classId];return !finalSplit[classId]||levels.length!==finalSplit[classId]||levels.some(function(level,index){return level!==index+1;});})||Object.keys(finalSplit).some(function(classId){return !routeLevels[classId];}))throw new Error(archetype.id+' route must be contiguous and match finalSplit');
      validateStartingAttributes(archetype.startingAttributes,archetype.id);
      if(archetype.lowStarRemedy.includes('六属性改为')){
        var allocation=archetype.lowStarRemedy.split('六属性改为')[1].split(/[（，；。]/)[0];
        validateStartingAttributes(allocation.split('／').map(function(part){var match=/^(力量|敏捷|体质|智力|感知|魅力)\s+(\d+)$/.exec(part);return match?{ability:match[1],value:Number(match[2])}:null;}),archetype.id+' repair allocation');
      }
      if(!archetype.subclassChoices||archetype.subclassChoices[archetype.primaryClassId]!==archetype.subclass)throw new Error(archetype.id+' needs explicit primary and dip subclasses');
      if(!Array.isArray(archetype.exploitComparisons)||archetype.exploitComparisons.length!==EXPLOIT_IDS.length)throw new Error(archetype.id+' needs every common exploit comparison');
      var seenPolicies=new Set(); archetype.exploitComparisons.forEach(function(item){
        if(!item||!EXPLOIT_IDS.includes(item.policyId)||seenPolicies.has(item.policyId)||!['compared','not-applicable'].includes(item.status))throw new Error(archetype.id+' has invalid exploit comparison');
        seenPolicies.add(item.policyId); assertText(item.reason,archetype.id+' exploit comparison reason');
        if(item.status==='compared'){
          var policy=EXPLOIT_POLICIES.find(function(record){return record.id===item.policyId;});
          if(policy.assessmentStatus!=='verified')throw new Error(archetype.id+' enabled comparison requires verified policy');
          assertTextList(policy.procedure,archetype.id+' enabled comparison procedure');assertText(policy.benefit,archetype.id+' enabled comparison benefit');assertTextList(policy.risks,archetype.id+' enabled comparison risks');
          validateScore(item.normalStars,archetype.id+' exploit normal stars');validateScore(item.commonStars,archetype.id+' exploit common stars');
          if(!Array.isArray(item.contexts)||item.contexts.length!==3||new Set(item.contexts.map(function(x){return x.context;})).size!==3)throw new Error(archetype.id+' exploit comparison needs all score contexts');
          item.contexts.forEach(function(x){if(!SCORE_CONTEXTS.includes(x.context))throw new Error(archetype.id+' unknown exploit context');validateScore(x.normalStars,archetype.id+' exploit normal score');validateScore(x.commonStars,archetype.id+' exploit common score');assertText(x.reason,archetype.id+' exploit context reason');if(x.normalStars!==archetype.contextScores[x.context].stars)throw new Error(archetype.id+' exploit normal score must match normal context');});
        }
      });
      if(!archetype.gearPlan||!Array.isArray(archetype.gearPlan.currentAct)||!archetype.gearPlan.currentAct.length)throw new Error(archetype.id+' needs a current-act gear plan');
      archetype.gearPlan.currentAct.forEach(function(item){if(!item||!hasText(item.name)||!Number.isInteger(item.act)||item.act<1||item.act>3||!approvedSource(item.source)||!hasText(item.alternative))throw new Error(archetype.id+' has invalid current-act gear');});
      if(archetype.mechanicIds.includes('wet-lightning')&&(!/造水|潮湿/.test(archetype.coreLoop)||!/闪电/.test(archetype.coreLoop)||!/绝缘|水面|远离|抗性/.test(archetype.conflictRules.join(' '))))throw new Error(archetype.id+' Wet/Lightning safeguards are incomplete');
      if(archetype.mechanicIds.includes('concentration-control')&&!/专注/.test(archetype.conflictRules.join(' ')))throw new Error(archetype.id+' concentration route needs a key concentration slot');
      if(/DRS|额外攻击/.test(archetype.honourAdjustments)&&!/降低|不计|禁用|不能/.test(archetype.honourAdjustments))throw new Error(archetype.id+' Honour DRS/extra-attack adjustment must subtract or block value');
      if(archetype.checkedAt!=='2026-09-22')throw new Error(archetype.id+' must be checked 2026-09-22');
    });
    classes.forEach(function(classId){if(BUILD_ARCHETYPES.filter(function(archetype){return archetype.primaryClassId===classId;}).length<2)throw new Error(classId+' needs at least two Build Lab archetypes');});
    GOAL_IDS.forEach(function(goal){if(!BUILD_ARCHETYPES.some(function(archetype){return archetype.goalIds.includes(goal);}))throw new Error('public goal '+goal+' must have a candidate');});
    var scoreFingerprints=new Set(); BUILD_ARCHETYPES.forEach(function(archetype){SCORE_CONTEXTS.forEach(function(context){var fingerprint=JSON.stringify(archetype.contextScores[context]);if(scoreFingerprints.has(fingerprint))throw new Error(archetype.id+' reuses a shared score assessment');scoreFingerprints.add(fingerprint);});});
    var actualDecisionIds=assertUniqueIds(globalThis.LEVEL_DECISIONS,'LEVEL_DECISIONS');
    LEVEL_DECISIONS.forEach(function(decision){
      ['archetypeId','cards'].forEach(function(field){if(!(field in decision))throw new Error(decision.id+' missing '+field);});
      if(!archetypeIds.has(decision.archetypeId))throw new Error(decision.id+' has unknown archetype');
      var archetype=BUILD_ARCHETYPES.find(function(item){return item.id===decision.archetypeId;});
      if(archetype.levelDecisionId!==decision.id)throw new Error(decision.id+' does not match archetype levelDecisionId');
      if(decision.cards.some(function(card){return Array.isArray(card.recommended)&&card.recommended.some(function(item){return item.choice&&item.choice.includes('酒馆斗殴者');});})&&archetype.startingAttributes.find(function(item){return item.ability==='力量';}).value<16)throw new Error(archetype.id+' requires Strength >=16 for Tavern Brawler without an explicit elixir/respec dependency');
      validateCards(decision.cards,decision.id,archetype);
    });
    if(actualDecisionIds.size!==decisionIds.size||Array.from(decisionIds).some(function(id){return !actualDecisionIds.has(id);}))throw new Error('every archetype must have exactly one level decision');
    return true;
  }
  globalThis.BUILD_LAB_GOAL_IDS=GOAL_IDS;
  globalThis.validateBuildLabData=validateBuildLabData;
}());
