'use strict';
// PDF ideas are adapted into original routes; mechanics are checked against Patch 8 wiki rules.
(function(){
  const wiki='https://bg3.wiki/wiki/';
  function route(id,name,classId,subclass,split,levels,rotation,gear,risks,pages){
    return {id,name,classId,subclass,split,tier:'强力',difficulty:'中等',version:'Patch 8 + Hotfix',checkedAt:'2026-09-19',sources:pages.map(page=>wiki+page),levels:levelPlan(levels),rotation,gearPlan:{core:gear,strong:[],replacements:[]},risks};
  }
  BUILD_LIBRARY.push(
    route('bard-swords-thief-fighter','剑刃诗人 · 双弩快手','bard','剑刃学院','剑刃诗人 6 / 盗贼 4 / 战士 2',[
      ['诗人 1','治愈真言、妖火术；敏捷与魅力兼顾。'],['诗人 2','休憩曲；补羽落术或长行术。'],['诗人 3','剑刃学院，选双武器战斗风格与远程华舞。'],['诗人 4','神射手；命中不足时关掉全力一击。'],['诗人 5','激励短休恢复；选催眠图纹。'],['诗人 6','额外攻击，形成双弩主轴。'],['游荡者 1','取得技能专精。'],['游荡者 2','灵巧动作改善站位。'],['游荡者 3','盗贼额外附赠动作，可再射一发副手弩。'],['游荡者 4','敏捷属性提升+2。'],['战士 1','箭术战斗风格补命中。'],['战士 2','动作如潮补关键回合爆发。']
    ],['华舞与额外攻击先压制关键目标。','有神秘恶棍之戒时，附赠动作可改施惑控法术；副手射击与施法争用附赠动作。'],['arcane-acuity','mystic-scoundrel'],['诗人仅到6级，没有10级魔法奥秘。','双弩、神射手与控场的命中需求不同，按敌人护甲切换。'],['College_of_Swords','Fast_Hands']),
    route('fighter-eldritch-war-cleric','魔能骑士 · 战争祭司','fighter','魔能骑士','魔能骑士战士 11 / 战争牧师 1',[
      ['战士 1','重甲与防御战斗风格；力量主属性。'],['战士 2','动作如潮。'],['战士 3','魔能骑士；选护盾术和魔法飞弹。'],['战士 4','巨武器大师专长。'],['战士 5','额外攻击。'],['战士 6','力量属性提升+2。'],['战士 7','取得战争魔法；与完整攻击动作按战况取舍。'],['战士 8','警觉专长或补力量。'],['战士 9','不屈。'],['战士 10','魔能骑士法术强化。'],['战士 11','第二次额外攻击，每个普通攻击动作共三击。'],['牧师 1','战争领域：有限次数战争祭司附赠攻击；选祝福术。']
    ],['常态三击，必要时用动作如潮再取得一个完整攻击动作。','战争祭司次数有限，留给能击杀或打断的回合。'],['giantslayer'],['战争祭司并非无限附赠攻击。','战士法术使用智力，牧师法术使用感知；护盾术不依赖攻击属性。'],['Eldritch_Knight','War_Domain']),
    route('monk-open-hand-surge','散打宗 · 动作如潮','monk','散打宗','散打宗武僧 6 / 盗贼 4 / 战士 2',[
      ['武僧 1','徒手与敏捷防御，预留感知。'],['武僧 2','疾风连击。'],['武僧 3','散打宗击倒、推离或踉跄。'],['武僧 4','酒馆殴斗者专长，+1力量或体质。'],['武僧 5','额外攻击与震慑拳。'],['武僧 6','显化附伤与气功能。'],['游荡者 1','技能专精。'],['游荡者 2','灵巧动作。'],['游荡者 3','盗贼多一个附赠动作，增加连击机会。'],['游荡者 4','警觉专长或感知属性提升+2。'],['战士 1','战斗风格不增强徒手攻击；可选防御但需穿甲，会妨碍武僧能力，故选箭术作远程备用。'],['战士 2','动作如潮；需要时额外打出一轮攻击。']
    ],['近身后以震慑与击倒建立安全窗口。','盗贼附赠动作支撑额外疾风连击；动作如潮留给关键回合。'],['soul-catching'],['与武僧9/盗贼3相比会失去气共鸣及武僧7–9级能力。','力量药剂属于可选机制利用，不应当成基础构筑必需品。'],['Way_of_the_Open_Hand','Fast_Hands']),
    route('paladin-vengeance-sorcerer','复仇圣武士 · 术士斩击','paladin','复仇之誓','复仇圣武士 6 / 风暴术士 6',[
      ['圣武士 1','重甲与复仇之誓；力量和魅力为主。'],['圣武士 2','至圣斩，建议开启命中后询问。'],['圣武士 3','敌意誓言用于关键目标。'],['圣武士 4','巨武器大师专长；低命中可先力量+2。'],['圣武士 5','额外攻击、迷踪步。'],['圣武士 6','保护灵光，魅力直接提高队伍豁免。'],['术士 1','选风暴术法，拿护盾术。'],['术士 2','魔法塑能与术法点。'],['术士 3','快速施法；选镜影术或定身术。'],['术士 4','魅力属性提升+2。'],['术士 5','选加速术，需专注。'],['术士 6','风暴之心与额外法术；高阶法术位可用于至圣斩升环。']
    ],['先维持灵光和位置，再用武器命中触发至圣斩。','快速施法与附赠动作能力竞争；加速术专注失败风险高。'],['giantslayer','adamantine'],['混职获得高环法术位不等于学会对应高环术士法术。','誓言选择可能造成破誓；荣誉模式加速术不复制完整额外攻击。'],['Oath_of_Vengeance','Storm_Sorcery']),
    route('sorcerer-tempest-storm','风暴术士 · 雷鸣领域','sorcerer','风暴术法','风暴术士 10 / 风暴牧师 2',[
      ['术士 1','以术士开局取得体质豁免熟练；拿护盾术。'],['术士 2','魔法塑能。'],['术士 3','快速施法，选迷踪步。'],['术士 4','魅力属性提升+2。'],['术士 5','选闪电束与反制法术。'],['牧师 1','风暴领域给重甲熟练；准备造水术。'],['牧师 2','引导神力·毁灭之怒，最大化一次闪电或雷鸣伤害。'],['术士 6','风暴之心及额外法术。'],['术士 7','四环法术，按敌方抗性选择。'],['术士 8','魅力属性提升+2或警觉。'],['术士 9','五环术士法术。'],['术士 10','补魔法塑能与已知法术。']
    ],['先让目标潮湿，再用闪电束/连锁闪电卷轴打爆发。','毁灭之怒资源短休刷新；雨水与友军站位都要确认。'],['spellsparkler','markoheshkir'],['牧师法术使用感知，术士法术使用魅力；造水术不需攻击或豁免。','术士仅10级，不会学会术士11级解锁的六环法术；六环法术位不等于已知法术。'],['Tempest_Domain','Storm_Sorcery']),
    route('warlock-hexblade-paladin','魔刃 · 复仇誓约','warlock','魔刃宗主','魔刃邪术师 5 / 复仇圣武士 5 / 战士 2',[
      ['邪术师 1','魔刃宗主，用魅力进行绑定武器攻击；选阿加西斯之铠。'],['邪术师 2','痛苦魔能爆；副祈唤按远程或黑暗需求。'],['邪术师 3','选刃之契约，确保绑定武器。'],['邪术师 4','魅力属性提升+2。'],['邪术师 5','深化契约取得契约额外攻击；选饥饿之寒或反制法术。'],['圣武士 1','誓言与有限辅助；兼职不会授予圣武士初始重甲熟练。'],['圣武士 2','至圣斩与防御战斗风格。'],['圣武士 3','复仇之誓的敌意誓言。'],['圣武士 4','巨武器大师或魅力属性提升+2。'],['圣武士 5','圣武士额外攻击；荣誉模式不与深化契约叠加。'],['战士 1','战斗风格；兼职战士也不会补重甲熟练。'],['战士 2','动作如潮提供独立额外攻击动作。']
    ],['平时以魅力武器和魔能爆切换射程。','命中后用契约法术位至圣斩；短休补充邪术师法术位。'],['phalar'],['荣誉模式下刃之契约额外攻击与圣武士额外攻击不叠加；非荣誉模式规则不同。','必须绑定正确武器；圣武士和战士兼职都不给初始重甲熟练。'],['The_Hexblade','Deepened_Pact']),
    route('wizard-evocation-fighter','塑能法师 · 动作如潮','wizard','塑能学派','塑能法师 10 / 战士 2',[
      ['法师 1','智力主属性，选魔法飞弹、护盾术。'],['法师 2','塑能学派，范围塑能免伤友军。'],['法师 3','镜影术或迷踪步。'],['法师 4','智力属性提升+2。'],['法师 5','火球术、反制法术。'],['法师 6','塑能学派能力成长。'],['法师 7','四环控制与伤害法术。'],['法师 8','智力属性提升+2或警觉。'],['法师 9','五环法术，准备锥形寒气或支配人类。'],['法师 10','强化塑能：魔法飞弹每枚飞弹受智力加伤。'],['战士 1','防御或箭术战斗风格；兼职只给中甲与盾牌，不给重甲。'],['战士 2','动作如潮，在关键回合再施放一个动作法术。']
    ],['中低血目标优先用多段魔法飞弹稳定收割。','敌群则用安全范围塑能；动作如潮留给需立即清场的战斗。'],['markoheshkir'],['法师仅10级、战士2级，最高只能取得五环法术位；不能自然学到六环法术。','战士兼职不给重甲，且穿甲装备可能与法袍增益互斥。'],['School_of_Evocation','Action_Surge'])
  );
  const spellSets={barbarian:[],fighter:[],monk:[],rogue:[],bard:['治愈真言','妖火术','催眠图纹'],cleric:['祝福术','治愈真言','守护之灵'],druid:['长行术','造水术','月华之光'],paladin:['祝福术','命令术','迷踪步（仅适用誓言）'],ranger:['猎人印记','长行术','荆棘丛生'],sorcerer:['护盾术','反制法术','加速术'],warlock:['阿加西斯之铠','魔能爆','饥饿之寒'],wizard:['护盾术','魔法飞弹','反制法术']};
  const weaponSets={barbarian:['前期回归长矛','第三章尼鲁纳（三叉戟，投掷路线）'],bard:['双持手弩或泰坦弦弓（远程）','灵巧单手武器（近战）'],cleric:['法杖与盾牌，武器不是主要输出'],druid:['法杖；月亮德鲁伊以变形攻击为主'],fighter:['博德安巨人屠杀者（重武器）','双手弩或长弓（射手）'],monk:['徒手攻击（主武器）','短棍或法杖过渡'],paladin:['博德安巨人屠杀者','盾牌+单手武器（守护路线）'],ranger:['长弓／贡特·迈尔','双手弩'],rogue:['山底之王的刀','致命一击长弓'],sorcerer:['法术火花','玛科赫什基（终盘）'],warlock:['法拉·阿鲁维','法杖（魔能爆路线）'],wizard:['法术火花','玛科赫什基（终盘）']};
  const high=new Set(['monk-open-hand-thief','monk-open-hand-surge','barbarian-berserker-throw','barbarian-giant-throw','bard-swords-archer-control','bard-swords-thief-fighter','ranger-gloom-assassin','sorcerer-tempest-storm']);
  const low=new Set(['monk-drunken-master','rogue-swashbuckler-duelist']);
  BUILD_LIBRARY.forEach(build=>{
    build.strengthStars=high.has(build.id)?5:low.has(build.id)?2:build.tier==='强力'?4:build.tier==='趣味／主题'?3:3;
    build.strengthWhy=build.strengthStars===5?'关键等级收益集中、行动经济或爆发效率突出；仍依赖装备与战斗条件，荣誉模式规则另见风险。':build.strengthStars===4?'核心循环稳定且有明确优势；强度低于顶尖组合，须留意资源和敌方抗性。':build.strengthStars===2?'主题玩法鲜明，但触发条件与输出上限较受限制，按一般战斗效率评分。':'功能完整、易于发挥，但爆发或行动经济不如高强度组合。';
    build.recommendedWeapons=weaponSets[build.classId].slice();
    build.recommendedSpells=spellSets[build.classId].slice();
  });
  const overrides={
    'fighter-eldritch-war-cleric':['护盾术','魔法飞弹','祝福术'],
    'monk-open-hand-surge':[],
    'sorcerer-tempest-storm':['护盾术','闪电束','反制法术','造水术（牧师）'],
    'wizard-evocation-fighter':['魔法飞弹','护盾术','火球术','反制法术'],
    'warlock-hexblade-paladin':['阿加西斯之铠','饥饿之寒','祝福术','命令术'],
    'bard-swords-thief-fighter':['治愈真言','妖火术','催眠图纹'],
    'paladin-vengeance-sorcerer':['祝福术','迷踪步','护盾术','加速术']
  };
  BUILD_LIBRARY.forEach(build=>{if(overrides[build.id])build.recommendedSpells=overrides[build.id];});
  const specificWeapons={
    'barbarian-wildheart-melee':['双手巨剑／巨斧','博德安巨人屠杀者'],
    'bard-swords-archer-control':['泰坦弦弓','双持手弩（改走附赠动作输出时）'],
    'bard-swords-melee':['山底之王的刀','双持灵巧短剑'],
    'bard-swords-thief-fighter':['双持手弩；副手武器同样需要取得','泰坦弦弓（转单弓玩法）'],
    'bard-glamour-support':['法杖或法拉·阿鲁维，主要价值来自控制和辅助'],
    'fighter-battlemaster-archer':['泰坦弦弓','贡特·迈尔'],
    'fighter-arcane-archer':['泰坦弦弓','贡特·迈尔'],
    'fighter-eldritch-war-cleric':['博德安巨人屠杀者','任意高命中双手重武器过渡'],
    'monk-open-hand-surge':['徒手攻击（主要伤害来源）','短棍过渡'],
    'paladin-vengeance-sorcerer':['博德安巨人屠杀者','任意高命中双手重武器过渡'],
    'ranger-gloom-assassin':['泰坦弦弓','贡特·迈尔'],
    'ranger-hunter-volley':['贡特·迈尔','泰坦弦弓'],
    'ranger-swarmkeeper-control':['长弓或双持手弩，按装备选择'],
    'rogue-thief-dual-wield':['山底之王的刀','副手灵巧短剑'],
    'rogue-swashbuckler-duelist':['山底之王的刀','灵巧单手武器'],
    'sorcerer-tempest-storm':['法术火花','玛科赫什基'],
    'warlock-hexblade-melee':['法拉·阿鲁维','绑定后的双手重武器'],
    'warlock-hexblade-paladin':['法拉·阿鲁维','绑定后的双手重武器'],
    'wizard-bladesinging':['山底之王的刀','其他灵巧单手武器；剑舞时不持盾'],
    'wizard-evocation-fighter':['法术火花','玛科赫什基']
  };
  const specificReasons={
    'bard-swords-thief-fighter':'剑刃6的额外攻击、盗贼3的额外附赠动作与战士2的动作如潮形成高行动经济；双弩命中与装备投入较高。',
    'fighter-eldritch-war-cleric':'战士11的三击与动作如潮非常稳定，战争牧师1补有限次数附赠攻击；相比纯战士12少一个专长。',
    'monk-open-hand-surge':'散打6的附伤、盗贼3的额外附赠动作和战士2的动作如潮形成强爆发，但失去武僧9的气共鸣。',
    'paladin-vengeance-sorcerer':'圣武士6的保护灵光和术士法术位强化斩击与防护；频繁长休及专注管理限制持续战斗。',
    'sorcerer-tempest-storm':'潮湿使闪电伤害显著增加，风暴牧师2可最大化一次伤害；展开步骤较多，水面与站位易影响队伍。',
    'warlock-hexblade-paladin':'魅力武器、短休法术位至圣斩和动作如潮有爆发；荣誉模式额外攻击不叠加，故不按三击给分。',
    'wizard-evocation-fighter':'塑能10强化魔法飞弹，战士2补动作如潮；失去法师11级自然学习六环法术的便利。'
  };
  BUILD_LIBRARY.forEach(build=>{if(specificWeapons[build.id])build.recommendedWeapons=specificWeapons[build.id];if(specificReasons[build.id])build.strengthWhy=specificReasons[build.id];});
})();
