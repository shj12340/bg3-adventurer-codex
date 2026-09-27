'use strict';
(function(){
  var wiki=function(slug){return 'https://bg3.wiki/wiki/'+slug;};
  var slugs=`Everburn_Blade|Voss'_Silver_Sword|Blazer_of_Benevolence|Infernal_Robe|Ring_of_Evasion|The_Deathstalker_Mantle|The_Whispering_Promise|The_Amulet_of_Lost_Voices|The_Watcher's_Guide|Breastplate_+1|Gloves_of_Power|Shapeshifter's_Boon_Ring|Amulet_of_Silvanus|Lihala's_Lute|Hand_Crossbow_+1|Hunting_Shortbow|Light_Crossbow_+1|Safeguard_Shield|Corellon's_Grace|Dragon's_Grasp|Rain_Dancer|Spellthief|Gloves_of_Missile_Snaring|Hedge_Wanderer_Armour|Ring_of_Flinging|Pale_Oak|Broodmother's_Revenge|Komira's_Locket|Cap_of_Curing|Ring_of_Protection|Nature's_Snare|Key_of_the_Ancients|Hellrider's_Pride|Wapira's_Crown|Ring_of_Colour_Spray|Sorrow|Robe_of_Summer|Silver_Pendant|Fleetfingers|Moondrop_Pendant|The_Oak_Father's_Embrace|Bracers_of_Defence|Steelforged_Sword|Sussur_Dagger|Sussur_Greatsword|Sussur_Sickle|The_Speedy_Lightfeet|Very_Heavy_Greataxe|Warped_Headband_of_Intellect|Haste_Helm|Spurred_Band|Spiderstep_Boots|Poisoner's_Robe|Wood_Woad_Shield|The_Sparkle_Hands|Tarnished_Charm|Staff_of_Crones|The_Ever-Seeing_Eye|Mayrina's_Locket|Gandrel's_Aspiration|Gloves_of_Heroism|Speedy_Reply|Shattered_Flail|Reason's_Grasp|Smuggler's_Ring|Sword_of_Justice|The_Joltshooter|The_Sparky_Points|The_Spellsparkler|Svartlebee's_Woundseeker|Hamarhraft|Harold|Giantbreaker|Rupturing_Blade|Titanstring_Bow|Gloves_of_Hail_of_Thorns|Gloves_of_Thievery|The_Jolty_Vest|Abyss_Beckoners|Githyanki_Greatsword_(Psionic)|Glowing_Shield|Crusher's_Ring|Doom_Hammer|Returning_Pike|Boots_of_Aid_and_Comfort|Gloves_of_Archery|Swiresy_Shoes|Amulet_of_Misty_Step|Spidersilk_Armour|The_Watersparkers|Blooded_Greataxe|Bow_of_Awareness|Gold_Wyrmling_Staff|Heavy_Crossbow_+1|Hunter's_Dagger|Monster_Slayer_Glaive|Amulet_of_Selûne's_Chosen|Springstep_Boots|Faithbreaker|Absolute's_Talisman|Absolute's_Warboard|Gloves_of_the_Growling_Underdog|Assassin's_Touch|Jagged_Spear|Xyanyde|Boots_of_Striding|Loviatar's_Scourge|Ritual_Axe|Ritual_Dagger|Ring_of_Poison_Resistance|Linebreaker_Boots|Beastmaster's_Chain|Worgfang|Club_of_Hill_Giant_Strength|Guiding_Light|Mage's_Friend|Mystra's_Grace|Light_of_Creation|Uncovered_Mysteries|The_Sparkswall|Staff_of_Arcane_Blessing|Skybreaker|Exterminator's_Axe|Explorer's_Ring|Corrosive_Flail|Amulet_of_Restoration|Caustic_Band|Gloves_of_Uninhibited_Kushigo|Herbalist's_Gloves|Ring_of_Jumping|Melf's_First_Staff|The_Baneful|Boots_of_Genial_Striding|Cinder_Shoes|Circlet_of_Blasting|Psychic_Spark|Sunwalker's_Gift|The_Lifebringer|Creation's_Echo|Boots_of_Stormy_Clamour|Pearl_of_Power_Amulet|Ring_of_Mind-Shielding|Ring_of_Salving|The_Shadespell_Circlet|Shadow_of_Menzoberranzan|Champion's_Chain|Envoy's_Amulet|Boots_of_Speed|Slippery_Chain_Shirt|Sickle_of_BOOOAL|Helmet_of_Smiting|Chain_of_Liberation|Luminous_Armour|Mourning_Frost|Bloodguzzler_Garb|Winter's_Clutches|The_Spectator_Eyes|Phalar_Aluve|The_Blast_Pendant|Amulet_of_the_Unworthy|Drow_Studded_Leather_Armour|Shortsword_of_First_Blood|Helmet_of_Autonomy|Dark_Justiciar_Helm|Dark_Justiciar_Mask|Sentient_Amulet_(Rare)|Adamantine_Longsword|Adamantine_Mace|Adamantine_Scimitar|Adamantine_Scale_Mail|Adamantine_Shield|Adamantine_Splint_Armour|Grymskull_Helm|Intransigent_Warhammer|Merregon_Halberd|Firestoker|Dark_Justiciar_Mail|Fetish_of_Callarduran_Smoothhands|Cap_of_Wrath|Armour_of_Uninhibited_Kushigo|Bracing_Band|Ring_of_Absolute_Force|Deep_Delver|The_Protecty_Sparkswall|Sharran_Crossbow|Wondrous_Gloves|The_Real_Sparky_Sparkswall|Sword_of_Screams|Disintegrating_Night_Walkers|Githyanki_Shortsword_(+1)|The_Blood_of_Lathander|Aberration_Hunters'_Amulet|Varsh_Ko'kuu's_Boots|Ring_of_Elemental_Infusion|Hoarfrost_Boots|Gloves_of_Belligerent_Skies|Ring_of_Arcane_Synergy|Strange_Conduit_Ring|Diadem_of_Arcane_Synergy|Necklace_of_Elemental_Augmentation|Defender_Flail|Knife_of_the_Undermountain_King|Larethian's_Wrath|Unseen_Menace|Witchbreaker|Amulet_of_Branding|Daredevil_Gloves|Gloves_of_Dexterity|Vital_Conduit_Boots|The_Skinburster|Circlet_of_Psionic_Revenge|Crossbow_of_Arcane_Force|Soulbreaker_Greatsword|Ceremonial_Battleaxe|Holy_Lance_Helm|Ceremonial_Mace|Ceremonial_Longsword|Ceremonial_Warhammer|Cacophony|Hoppy|Boots_of_Elemental_Momentum|Gloves_of_Baneful_Striking|Gloves_of_Cinder_and_Sizzle|Periapt_of_Wound_Closure|The_Graceful_Cloth`.split('|');

  var included={
    'Everburn_Blade':'everburn-blade','The_Whispering_Promise':'whispering-promise','The_Amulet_of_Lost_Voices':'amulet-lost-voices',"The_Watcher's_Guide":'watchers-guide','Gloves_of_Power':'gloves-power',"Shapeshifter's_Boon_Ring":'shapeshifter-boon','Amulet_of_Silvanus':'amulet-silvanus','Safeguard_Shield':'safeguard-shield',"Corellon's_Grace":'corellons-grace','Rain_Dancer':'rain-dancer','Gloves_of_Missile_Snaring':'missile-snaring','Ring_of_Flinging':'flinging','Pale_Oak':'pale-oak',"Broodmother's_Revenge":'broodmothers-revenge','Cap_of_Curing':'cap-curing','Ring_of_Protection':'ring-protection',"Hellrider's_Pride":'hellrider-pride',"Wapira's_Crown":'wapiras-crown','Sorrow':'sorrow','Bracers_of_Defence':'bracers-defence','Sussur_Dagger':'sussur-dagger','The_Speedy_Lightfeet':'speedy-lightfeet','Warped_Headband_of_Intellect':'warped-intellect','Haste_Helm':'haste-helm','The_Sparkle_Hands':'sparkle-hands','Staff_of_Crones':'staff-crones','Gloves_of_Heroism':'gloves-heroism','Shattered_Flail':'shattered-flail',"Smuggler's_Ring":'smugglers-ring','Sword_of_Justice':'sword-justice','The_Joltshooter':'joltshooter','The_Sparky_Points':'sparky-points','The_Spellsparkler':'spellsparkler','Harold':'harold','Titanstring_Bow':'titanstring',"Crusher's_Ring":'crushers-ring','Doom_Hammer':'doom-hammer','Returning_Pike':'pike','Boots_of_Aid_and_Comfort':'aid-comfort','Gloves_of_Archery':'gloves-archery','Amulet_of_Misty_Step':'amulet-misty-step','Spidersilk_Armour':'spidersilk','The_Watersparkers':'watersparkers','Gloves_of_the_Growling_Underdog':'growling-underdog','Boots_of_Striding':'boots-striding','Club_of_Hill_Giant_Strength':'club-hill-giant','Staff_of_Arcane_Blessing':'staff-arcane-blessing','Amulet_of_Restoration':'amulet-restoration','Caustic_Band':'caustic-band','Gloves_of_Uninhibited_Kushigo':'gloves',"Melf's_First_Staff":'melf-first-staff','The_Baneful':'baneful','Boots_of_Genial_Striding':'boots-genial-striding','Circlet_of_Blasting':'circlet-blasting','Sunwalker\'s_Gift':'sunwalkers-gift','Cinder_Shoes':'cinder-shoes','The_Lifebringer':'lifebringer','Ring_of_Jumping':'ring-jumping','Explorer\'s_Ring':'explorers-ring','Corrosive_Flail':'corrosive-flail','Boots_of_Speed':'boots-speed','Psychic_Spark':'psychic-spark','Boots_of_Stormy_Clamour':'stormy','Pearl_of_Power_Amulet':'pearl-power','Ring_of_Salving':'ring-salving','Luminous_Armour':'luminous','Mourning_Frost':'mourning-frost','Phalar_Aluve':'phalar','Sentient_Amulet_(Rare)':'sentient-amulet','Adamantine_Scale_Mail':'adamantine-scale','Adamantine_Shield':'adamantine-shield','Adamantine_Splint_Armour':'adamantine','Grymskull_Helm':'grymskull-helm','The_Protecty_Sparkswall':'protecty-sparkswall','Disintegrating_Night_Walkers':'night-walkers','The_Blood_of_Lathander':'blood-lathander','Ring_of_Elemental_Infusion':'ring-elemental-infusion','Gloves_of_Belligerent_Skies':'belligerent','Ring_of_Arcane_Synergy':'ring-arcane-synergy','Strange_Conduit_Ring':'strange-conduit','Diadem_of_Arcane_Synergy':'diadem-arcane-synergy','Necklace_of_Elemental_Augmentation':'necklace-elemental','Defender_Flail':'defender-flail','Knife_of_the_Undermountain_King':'undermountain','Unseen_Menace':'unseen-menace','Daredevil_Gloves':'daredevil-gloves','Gloves_of_Dexterity':'dex-gloves','Vital_Conduit_Boots':'vital-conduit','The_Skinburster':'skinburster','Crossbow_of_Arcane_Force':'crossbow-arcane-force','Soulbreaker_Greatsword':'soulbreaker','Holy_Lance_Helm':'holy-lance-helm','Periapt_of_Wound_Closure':'periapt-wound-closure','The_Graceful_Cloth':'cloth'
  };
  Object.assign(included,{
    'Creation\'s_Echo':'creations-echo',
    'Ring_of_Mind-Shielding':'mind-shielding-ring',
    'The_Shadespell_Circlet':'shadespell-circlet',
    'Champion\'s_Chain':'champions-chain',
    'Envoy\'s_Amulet':'envoys-amulet'
  });
  Object.assign(included,{
    'Silver_Pendant':'silver-pendant',
    'Moondrop_Pendant':'moondrop-pendant',
    'The_Oak_Father\'s_Embrace':'oak-fathers-embrace',
    'Dragon\'s_Grasp':'dragons-grasp'
  });
  Object.assign(included,{
    'Hunting_Shortbow':'hunting-shortbow',
    'Nature\'s_Snare':'natures-snare',
    'Ring_of_Colour_Spray':'colour-spray-ring',
    'Fleetfingers':'fleetfingers'
  });
  Object.assign(included,{
    'Spellthief':'spellthief',
    'Hedge_Wanderer_Armour':'hedge-wanderer-armour',
    'Komira\'s_Locket':'komiras-locket',
    'Robe_of_Summer':'robe-summer'
  });
  Object.assign(included,{
    'Key_of_the_Ancients':'key-ancients'
  });
  Object.assign(included,{
    'Breastplate_+1':'breastplate-plus-one',
    'Hand_Crossbow_+1':'hand-crossbow-plus-one'
  });
  Object.assign(included,{
    'Light_Crossbow_+1':'light-crossbow-plus-one',
    'Steelforged_Sword':'steelforged-sword'
  });
  Object.assign(included,{
    'Sussur_Greatsword':'sussur-greatsword',
    'Sussur_Sickle':'sussur-sickle',
    'Very_Heavy_Greataxe':'very-heavy-greataxe',
    'Spurred_Band':'spurred-band'
  });
  Object.assign(included,{
    'Spiderstep_Boots':'spiderstep-boots',
    'Poisoner\'s_Robe':'poisoners-robe',
    'Wood_Woad_Shield':'wood-woad-shield',
    'Tarnished_Charm':'tarnished-charm'
  });
  Object.assign(included,{
    'The_Ever-Seeing_Eye':'ever-seeing-eye',
    'Mayrina\'s_Locket':'mayrinas-locket',
    'Gandrel\'s_Aspiration':'gandrels-aspiration',
    'Speedy_Reply':'speedy-reply'
  });
  Object.assign(included,{
    'Reason\'s_Grasp':'reasons-grasp',
    'Svartlebee\'s_Woundseeker':'svartlebees-woundseeker',
    'Hamarhraft':'hamarhraft',
    'Giantbreaker':'giantbreaker'
  });
  Object.assign(included,{
    'Rupturing_Blade':'rupturing-blade',
    'Gloves_of_Hail_of_Thorns':'hail-thorns-gloves',
    'Gloves_of_Thievery':'gloves-thievery',
    'The_Jolty_Vest':'jolty-vest'
  });
  Object.assign(included,{
    'Abyss_Beckoners':'abyss-beckoners',
    'Githyanki_Greatsword_(Psionic)':'githyanki-greatsword-psionic',
    'Glowing_Shield':'glowing-shield',
    'Swiresy_Shoes':'swiresy-shoes'
  });
  Object.assign(included,{
    'Blooded_Greataxe':'blooded-greataxe',
    'Bow_of_Awareness':'bow-awareness',
    'Gold_Wyrmling_Staff':'gold-wyrmling-staff',
    'Heavy_Crossbow_+1':'heavy-crossbow-plus-one',
    'Hunter\'s_Dagger':'hunters-dagger',
    'Monster_Slayer_Glaive':'monster-slayer-glaive',
    'Amulet_of_Selûne\'s_Chosen':'amulet-selunes-chosen',
    'Springstep_Boots':'springstep-boots'
  });
  Object.assign(included,{
    'Lihala\'s_Lute':'lihalas-lute',
    'Faithbreaker':'faithbreaker',
    'Absolute\'s_Talisman':'absolutes-talisman',
    'Absolute\'s_Warboard':'absolutes-warboard',
    'Assassin\'s_Touch':'assassins-touch',
    'Jagged_Spear':'jagged-spear',
    'Xyanyde':'xyanyde'
  });
  Object.assign(included,{
    'Herbalist\'s_Gloves':'herbalists-gloves',
    'Shadow_of_Menzoberranzan':'shadow-menzoberranzan',
    'Slippery_Chain_Shirt':'slippery-chain-shirt',
    'Winter\'s_Clutches':'winters-clutches'
  });
  Object.assign(included,{
    'Loviatar\'s_Scourge':'loviatar-scourge',
    'Ritual_Axe':'ritual-axe',
    'Ritual_Dagger':'ritual-dagger',
    'Ring_of_Poison_Resistance':'poison-resistance-ring'
  });
  Object.assign(included,{
    'Linebreaker_Boots':'linebreaker-boots',
    'Beastmaster\'s_Chain':'beastmasters-chain',
    'Worgfang':'worgfang',
    'Guiding_Light':'guiding-light'
  });
  Object.assign(included,{
    'The_Sparkswall':'sparkswall',
    'Skybreaker':'skybreaker',
    'Exterminator\'s_Axe':'exterminators-axe',
    'Sickle_of_BOOOAL':'sickle-boooal'
  });
  Object.assign(included,{
    'Uncovered_Mysteries':'uncovered-mysteries',
    'Helmet_of_Smiting':'helmet-smiting',
    'Bloodguzzler_Garb':'bloodguzzler-garb'
  });
  Object.assign(included,{
    'The_Spectator_Eyes':'spectator-eyes',
    'The_Blast_Pendant':'blast-pendant',
    'Amulet_of_the_Unworthy':'amulet-unworthy',
    'Drow_Studded_Leather_Armour':'drow-studded-leather'
  });
  Object.assign(included,{
    'Shortsword_of_First_Blood':'shortsword-first-blood',
    'Helmet_of_Autonomy':'helmet-autonomy',
    'Dark_Justiciar_Helm':'dark-justiciar-helm',
    'Dark_Justiciar_Mask':'dark-justiciar-mask'
  });
  Object.assign(included,{
    'Adamantine_Longsword':'adamantine-longsword',
    'Adamantine_Mace':'adamantine-mace',
    'Adamantine_Scimitar':'adamantine-scimitar',
    'Intransigent_Warhammer':'intransigent-warhammer'
  });
  Object.assign(included,{
    'Merregon_Halberd':'merregon-halberd',
    'Firestoker':'firestoker',
    'Dark_Justiciar_Mail':'dark-justiciar-mail',
    'Fetish_of_Callarduran_Smoothhands':'callarduran-fetish'
  });
  Object.assign(included,{
    'Cap_of_Wrath':'cap-of-wrath',
    'Armour_of_Uninhibited_Kushigo':'armour-uninhibited-kushigo',
    'Bracing_Band':'bracing-band',
    'Ring_of_Absolute_Force':'ring-absolute-force',
    'Deep_Delver':'deep-delver'
  });
  Object.assign(included,{
    'Sharran_Crossbow':'sharran-crossbow',
    'Wondrous_Gloves':'wondrous-gloves',
    'The_Real_Sparky_Sparkswall':'real-sparky-sparkswall',
    'Sword_of_Screams':'sword-screams'
  });
  Object.assign(included,{
    'Githyanki_Shortsword_(+1)':'githyanki-shortsword',
    'Aberration_Hunters\'_Amulet':'aberration-hunters-amulet',
    'Varsh_Ko\'kuu\'s_Boots':'varsh-kokuu-boots',
    'Hoarfrost_Boots':'hoarfrost-boots'
  });
  Object.assign(included,{
    'Mage\'s_Friend':'mages-friend',
    'Mystra\'s_Grace':'mystras-grace',
    'Light_of_Creation':'light-creation',
    'Larethian\'s_Wrath':'larethians-wrath',
    'Witchbreaker':'witchbreaker',
    'Amulet_of_Branding':'amulet-branding',
    'Circlet_of_Psionic_Revenge':'circlet-psionic-revenge',
    'Cacophony':'cacophony',
    'Hoppy':'hoppy',
    'Boots_of_Elemental_Momentum':'boots-elemental-momentum'
  });
  Object.assign(included,{
    'Ceremonial_Battleaxe':'ceremonial-battleaxe',
    'Ceremonial_Mace':'ceremonial-mace',
    'Ceremonial_Longsword':'ceremonial-longsword',
    'Ceremonial_Warhammer':'ceremonial-warhammer',
    'Gloves_of_Baneful_Striking':'gloves-baneful-striking',
    'Gloves_of_Cinder_and_Sizzle':'gloves-cinder-sizzle'
  });
  var ordinary=new Set(['Breastplate_+1','Hand_Crossbow_+1','Light_Crossbow_+1','Heavy_Crossbow_+1','Lihala\'s_Lute','Komira\'s_Locket','Mayrina\'s_Locket','Steelforged_Sword']);
  var alternate=new Set(['Sussur_Greatsword','Sussur_Sickle']);
  var candidates=slugs.map(function(slug){
    if(included[slug])return {slug:slug,status:'included',gearId:included[slug],source:wiki(slug)};
    var reason=ordinary.has(slug)?'普通强化、乐器或任务道具，没有可独立核对的战斗词条，不纳入玩法装备库。':alternate.has(slug)?'与已收录的同一任务或有限材料奖励互斥，保留在候选台账但不重复建立路线装备卡。':'逐项复核后判定为低收益或高度情境化的早期过渡件，没有足够持久的构筑或路线价值。';
    return {slug:slug,status:'excluded',reason:reason,source:wiki(slug)};
  });

  /* id, 中文名, 英文名, regionId, slot, rarity, place, effect, steps, risk, fit, level, source slug */
  var extra=[
    ['everburn-blade','永燃之刃','Everburn Blade','nautiloid-beach-ruins','武器','罕见','螺壳舰舵室','命中额外造成 1d4 火焰伤害，适合第一章早期双手近战。','在连接传送器前击败或缴械扎尔克指挥官并拾取。','舵室有回合倒计时；不要为武器牺牲全队逃生。',['fighter','paladin'],'1–3级','Everburn_Blade'],
    ['amulet-lost-voices','失落之声护符','The Amulet of Lost Voices','nautiloid-beach-ruins','护符','稀有','蔓生遗迹 · 阴暗墓穴','每次长休可施放亡者交谈，提供任务与探索线索。','开启维瑟斯出现房间内的沉重宝箱。','若未完成墓穴探索就离开，会失去早期稳定的亡者交谈工具。',['bard','cleric'],'2–5级','The_Amulet_of_Lost_Voices'],
    ['silver-pendant','白银坠饰','Silver Pendant','nautiloid-beach-ruins','护符','罕见','破碎海滩 · 哈珀前哨','可无限施放神导术，给没有牧师、德鲁伊或其他神导来源的队伍提供通用检定加值。','从翠绿林地西南哈珀前哨的骷髅拾取；需要连续攀爬两段小岩壁和木梯。','路线在高处且容易直接绕过；拿到后应避免与高价值战斗护符长期争夺栏位。',['rogue','fighter','barbarian'],'1–6级','Silver_Pendant'],
    ['moondrop-pendant','月滴坠饰','Moondrop Pendant','emerald-grove','护符','罕见','枭熊洞穴 · 塞伦涅华丽宝箱','生命低于 50% 时不会引发借机攻击，提供残血撤离窗口。','先在塞伦涅雕像后通过察觉找到祈祷纸，再在箱前阅读以解除封印。','效果只在低于 50% 生命时生效；若在低血量后才装备，必须再受到伤害或治疗才会重新检查状态。',['rogue','wizard','sorcerer'],'2–6级','Moondrop_Pendant'],
    ['oak-fathers-embrace','橡树之父的拥抱','The Oak Father\'s Embrace','emerald-grove','护甲','罕见','枭熊洞穴 · 无头骷髅','中甲；亡灵攻击佩戴者会受到 1d6 光耀伤害，而野兽攻击佩戴者会额外造成 1d6 光耀伤害。','在枭熊蛋附近的无头骷髅上拾取。','面对野兽时反而会让自己多受光耀伤害；不是泛用防御甲，且需要中甲熟练。',['druid','ranger','cleric'],'2–5级',"The_Oak_Father's_Embrace"],
    ['dragons-grasp','巨龙之握','Dragon\'s Grasp','emerald-grove','武器','罕见','翠绿林地 · 阿隆','单手投掷手斧；攻击燃烧目标时额外造成 1d4 武器伤害。','林地仍开放时向阿隆购买。','额外伤害只对燃烧目标触发；林地敌对或阿隆离场会关闭稳定购买窗口。',['fighter','barbarian','ranger'],'2–5级',"Dragon's_Grasp"],
    ['hunting-shortbow','狩猎短弓','Hunting Shortbow','emerald-grove','武器','罕见','翠绿林地 · 达蒙','+1 短弓；可每日施放一次猎人印记，对怪兽类敌人的所有攻击具有优势。','林地仍开放时向达蒙购买。','优势只针对怪兽类；猎人印记需要专注，达蒙死亡或离场会关闭购买窗口。',['ranger','fighter','bard'],'2–6级','Hunting_Shortbow'],
    ['natures-snare','自然陷阱','Nature\'s Snare','emerald-grove','武器','罕见','翠绿林地 · 地下通道','命中非植物、非野兽目标时有机会施加束缚。','打开地下通道的陷阱重箱取得。','植物与野兽不会被束缚；第一次豁免 DC 固定为 12，束缚通常最多只能阻止一回合移动。',['druid','ranger','fighter'],'2–6级',"Nature's_Snare"],
    ['colour-spray-ring','七彩喷雾戒指','Ring of Colour Spray','emerald-grove','戒指','罕见','隐秘海湾 · 鹰身女妖巢','每次短休可施放一次 1 环七彩喷雾，适合前期压制低生命敌人。','救下米尔孔并击败鹰身女妖后，搜查海湾南侧鹰身女妖巢。','七彩喷雾按当前生命值总量影响目标，面对高生命敌人很快失去价值；触发海湾事件后长休会导致米尔孔死亡。',['wizard','sorcerer','bard'],'2–4级','Ring_of_Colour_Spray'],
    ['fleetfingers','疾行手套','Fleetfingers','emerald-grove','手套','罕见','森林 · 埋藏箱','战斗中疾走后，每回合可免费跳跃一次，不消耗附赠动作。','在森林 X:80 Y:347 的埋藏箱取得，需要通过 DC 20 察觉；也可在破碎圣所查看明萨拉的作战地图以获得标记。','免费跳跃只在战斗中触发；没有地图标记时高 DC 20 察觉会导致直接漏过。',['rogue','fighter','ranger'],'2–6级','Fleetfingers'],
    ['spellthief','法术窃贼','Spellthief','emerald-grove','武器','罕见','翠绿林地 · 阿隆','长弓；战斗中重击时，每短休恢复一个 1 环法术位。','林地仍开放时向阿隆购买。','仅战斗内重击触发；不能恢复邪术师契约位，且没有已耗 1 环位时会浪费触发。',['ranger','bard','fighter'],'2–6级','Spellthief'],
    ['hedge-wanderer-armour','篱笆漫游者护甲','Hedge Wanderer Armour','emerald-grove','护甲','罕见','翠绿林地 · 阿隆','中甲；自然 +1，敏捷豁免与敏捷属性检定 +1。','林地仍开放时向阿隆购买。','需要中甲熟练；敏捷属性检定的 +1 不会固定显示在面板，林地结局会关闭商人窗口。',['druid','ranger','cleric'],'2–5级','Hedge_Wanderer_Armour'],
    ['komiras-locket','科米拉的坠饰','Komira\'s Locket','emerald-grove','护符','罕见','翠绿林地 · 阿拉贝拉父母','可每回合施放舞光术，适合没有稳定照明或黑暗视觉的探索队。','在“拯救阿拉贝拉”中让她活下来，随后向科米拉与洛克报告。','阿拉贝拉死亡、没救下或不向父母结算会失去奖励；护符栏的战斗价值很低。',['fighter','rogue','barbarian'],'2–5级','Komira\'s_Locket'],
    ['robe-summer','夏日长袍','Robe of Summer','emerald-grove','服装','罕见','翠绿林地 · 隐秘金库','服装提供寒冷抗性。','取得狼之符文开启隐秘金库后，在其中的板条箱内取得。','只提供寒冷抗性，防御力低于护甲；未收集狼之符文会让隐秘金库入口保持关闭。',['wizard','sorcerer','warlock'],'2–6级','Robe_of_Summer'],
    ['key-ancients','远古之钥','Key of the Ancients','emerald-grove','头盔','剧情物品','翠绿林地 · 地下通道','自然 +1；在妮蒂房间的石门前可开启通往地下通道的捷径。','在地下通道救下芬达尔，或在翠绿林地德鲁伊内室从妮蒂取得其对应版本。','属于探索与任务功能头环，战斗词条很弱；若没有救出芬达尔或未取得妮蒂版本，会失去稳定入手途径。',['druid','ranger','cleric'],'2–5级','Key_of_the_Ancients'],
    ['breastplate-plus-one','胸甲 +1','Breastplate +1','emerald-grove','护甲','罕见','翠绿林地 · 达蒙','AC 15 + 敏捷（最多 +2）；承受的穿刺伤害减少 1。','在空洞中达蒙附近的板条箱取得；角色 6–8 级时也可能进入等级化商人库存。','需要中甲熟练；固定箱子容易因只逛商店而漏过，等级化库存不应当作唯一取得来源。',['fighter','cleric','ranger'],'3–7级','Breastplate_+1'],
    ['hand-crossbow-plus-one','手弩 +1','Hand Crossbow +1','emerald-grove','武器','罕见','翠绿林地 · 达蒙','单手轻型远程武器，+1 命中与伤害；两把手弩可以双持。','林地仍开放时向达蒙购买；幽暗地域德里丝与破碎圣所罗亚也可能出售。','需有军用武器熟练或相关职业；副手射击消耗附赠动作，会与跳跃、药水及职业附赠动作竞争。',['rogue','ranger','bard'],'2–8级','Hand_Crossbow_+1'],
    ['light-crossbow-plus-one','轻弩 +1','Light Crossbow +1','emerald-grove','武器','罕见','翠绿林地 · 达蒙','双手简单远程武器，造成 1d8 + 1 穿刺伤害，适合缺少军用武器熟练的早期远程位。','林地仍开放时向达蒙购买；幽暗地域蕈人营地的德里丝也会出售。','双手武器不能配盾；没有额外词条，进入中期后通常由有机制的弓弩替换。',['wizard','cleric','druid'],'2–6级','Light_Crossbow_+1'],
    ['steelforged-sword','锻钢剑','Steelforged Sword','blighted-village-risen-road','武器','罕见','染疫村落 · 铁匠铺','+1 短剑；灵巧、轻型，可使用力量或敏捷进行攻击并可双持。','在染疫村落铁匠铺的桑普森上锁箱中取得。','需开锁或取得钥匙；没有额外魔法词条，是早期双持与敏捷近战的稳定过渡武器。',['rogue','ranger','bard'],'3–6级','Steelforged_Sword'],
    ['sussur-greatsword','轻语巨剑','Sussur Greatsword','blighted-village-risen-road','武器','稀有','染疫村落 · 铁匠铺','+1 巨剑；近战命中后令目标进行 DC 12 体质豁免，失败则沉默。','完成“大师武器”任务：把普通巨剑与幽暗地域轻语树皮在铁匠炉合成。','三种轻语武器只能做一件；沉默只对近战命中生效，投掷不会触发。',['fighter','paladin','barbarian'],'4–8级','Sussur_Greatsword'],
    ['sussur-sickle','轻语镰刀','Sussur Sickle','blighted-village-risen-road','武器','稀有','染疫村落 · 铁匠铺','+1 镰刀；命中后可使目标 DC 12 体质豁免，失败则沉默。','完成“大师武器”任务：把普通镰刀与轻语树皮在铁匠炉合成。','与轻语匕首、轻语巨剑互斥；伤害骰较低，主要价值是单手沉默工具。',['druid','rogue','ranger'],'4–7级','Sussur_Sickle'],
    ['very-heavy-greataxe','超重巨斧','Very Heavy Greataxe','blighted-village-risen-road','武器','罕见','染疫村落 · 风车','+1 巨斧；巨型横扫可命中多个目标并追加 1d6 挥砍，但自己会失衡一回合。','从风车前的菲泽克身上取得。','重量极高；巨型横扫会使自己失衡，适合收割而非无脑开场。',['barbarian','fighter'],'3–6级','Very_Heavy_Greataxe'],
    ['spurred-band','马刺戒指','Spurred Band','blighted-village-risen-road','戒指','罕见','低语深地 · 骷髅背包旁','战斗中回合开始时生命不高于 50%，获得一回合动量。','在低语深地一具骷髅及其旁边背包处拾取。','必须以低于 50% 生命开始回合才触发；动量会被倒地、束缚或减速移除。',['rogue','fighter','barbarian'],'3–6级','Spurred_Band'],
    ['spiderstep-boots','蛛行靴','Spiderstep Boots','blighted-village-risen-road','鞋履','罕见','低语深地 · 蛛化卓尔法师实验室','免疫蛛网束缚，且移动速度不受蛛网地表影响。','在蛛化卓尔法师实验室的沉重宝箱中取得。','只针对蛛网地表与蛛网束缚，离开蜘蛛区域后通常应换回通用战斗鞋。',['rogue','ranger','fighter'],'3–5级','Spiderstep_Boots'],
    ['poisoners-robe','毒师长袍','Poisoner\'s Robe','blighted-village-risen-road','服装','罕见','低语深地 · 相位蜘蛛女王','施放造成毒素伤害的法术时额外造成 1d4 毒素伤害。','击败低语深地巢穴中的相位蜘蛛女王并搜取尸体。','只增强法术造成的毒素伤害，不增强涂毒武器；大量敌人抗毒或免疫毒素。',['wizard','sorcerer','druid'],'3–7级','Poisoner\'s_Robe'],
    ['wood-woad-shield','木树妖盾','Wood Woad Shield','blighted-village-risen-road','盾牌','罕见','阳光湿地 · 腐朽庇护所','提供 +2 AC；每短休可用附赠动作强化下一次攻击，命中后尝试束缚目标。','击败腐朽庇护所的木树妖并搜取。','需要盾牌熟练；技能占用附赠动作，且目标仍可通过豁免避免束缚。',['druid','cleric','paladin'],'3–7级','Wood_Woad_Shield'],
    ['tarnished-charm','失泽护符','Tarnished Charm','blighted-village-risen-road','护符','罕见','河边茶室 · 埃塞尔婶婶','将佩戴者死亡豁免的成功 DC 从 10 降为 DC 5。','击败埃塞尔婶婶后从她身上搜取；若第一章没有拿走，她后续仍可能携带。','只在倒地后的死亡豁免阶段生效，正常站立战斗没有收益；搜尸前不要急着离开。',['fighter','barbarian','paladin'],'3–7级','Tarnished_Charm'],
    ['ever-seeing-eye','全视之眼','The Ever-Seeing Eye','blighted-village-risen-road','护符','罕见','鬼婆巢穴 · 宝藏室','每短休可施放一次防护善恶。','进入河边茶室下方的鬼婆巢穴，在宝藏室取得。','需要专注；只对异界生物、元素、妖精、邪魔、亡灵等目标有优势价值。',['cleric','paladin','wizard'],'4–8级','The_Ever-Seeing_Eye'],
    ['mayrinas-locket','梅丽娜的坠饰','Mayrina\'s Locket','blighted-village-risen-road','护符','剧情物品','河边茶室 · 梅丽娜','剧情纪念品，无战斗词条。','救援梅丽娜后通过对话获得；也可在她死亡时搜取或在战前扒窃。','和平救援后需完成对应对话；仅作剧情收藏，不应占用战斗护符栏。',['all'],'4–6级','Mayrina\'s_Locket'],
    ['gandrels-aspiration','甘德尔的志向','Gandrel\'s Aspiration','blighted-village-risen-road','武器','罕见','阳光湿地 · 甘德尔','+1 重弩；对怪兽攻击有优势，并可用附赠动作使本回合远程攻击驱散亡灵。','从甘德尔身上取得。','取得会影响阿斯代伦相关对话与甘德尔存活；重弩需要军用武器熟练。',['ranger','fighter','rogue'],'3–7级','Gandrel\'s_Aspiration'],
    ['speedy-reply','迅捷回击','Speedy Reply','blighted-village-risen-road','武器','罕见','晋升之路 · 商队特工尸体','灵巧轻型弯刀；命中后获得 2 回合动量。','在豺狼人袭击幸存者洞穴附近的商队特工尸体上拾取。','动量会被倒地、束缚或减速移除；武器本身无强化加值。',['rogue','ranger','bard'],'3–6级','Speedy_Reply'],
    ['reasons-grasp','理性之握','Reason\'s Grasp','blighted-village-risen-road','手套','罕见','晋升之路 · 商队幸存者洞穴','每短休可施放一次专注防护；适合依赖专注法术的前期施法者。','在豺狼人围攻商队幸存者的洞穴内，从上锁箱取得。','只提供短时的专注保护，不替代体质豁免与战位；洞穴战斗会影响搜取节奏。',['wizard','sorcerer','cleric'],'3–7级','Reason\'s_Grasp'],
    ['svartlebees-woundseeker','斯瓦特比的觅伤剑','Svartlebee\'s Woundseeker','blighted-village-risen-road','武器','罕见','沃金休眠地 · 耶瓦','+1 巨剑；攻击已受伤目标时，所有近战武器攻击获得 +1d4 命中。','初次到达沃金休眠地后，尽快从耶瓦身上缴械或取得；离区或快速旅行后她会离开。','加值适用于所有近战武器攻击，不只此剑；错过第一时间会永久失去第一章取得机会。',['fighter','paladin','barbarian'],'4–8级','Svartlebee\'s_Woundseeker'],
    ['hamarhraft','哈玛哈夫特','Hamarhraft','blighted-village-risen-road','武器','罕见','沃金休眠地 · 燃烧旅店顶层','主手持用时，跳跃落地对 3 米内造成 1d4 雷鸣伤害；近战未命中仍造成力量调整值钝击。','在燃烧旅店顶层房间的镀金箱中取得。','先救人再搜箱；跳跃震波会波及附近单位，适合武僧风步连跳机制。',['monk','fighter','barbarian'],'4–8级','Hamarhraft'],
    ['giantbreaker','破巨弩','Giantbreaker','blighted-village-risen-road','武器','稀有','散塔林会地下室 · 布雷姆','+1 重弩；命中令目标踉跄 2 回合。','完成“寻找失踪货物”并保持散塔林会友好后，向布雷姆购买。','踉跄仅由此弩攻击触发；开货箱或让散塔林会敌对会关闭库存。',['fighter','ranger','rogue'],'4–8级','Giantbreaker'],
    ['rupturing-blade','破裂之刃','Rupturing Blade','blighted-village-risen-road','武器','罕见','散塔林会地下室 · 布雷姆','+1 刺剑；每短休可用灼血斩，追加熟练加值与 1d6 火焰伤害，并可能使目标流血、燃烧。','完成“寻找失踪货物”后向布雷姆购买。','使用灼血斩会令自己承受 1d6 挥砍伤害；开货箱或敌对会关闭商店。',['bard','rogue','fighter'],'4–8级','Rupturing_Blade'],
    ['hail-thorns-gloves','荆棘之雨手套','Gloves of Hail of Thorns','blighted-village-risen-road','手套','罕见','散塔林会地下室 · 布雷姆','每短休施放一次荆棘之雨，只消耗动作。','完成“寻找失踪货物”后向布雷姆购买；幽暗地域德里丝也会出售。','范围伤害会误伤站位过近的友军；不提供持续性的攻击或伤害加成。',['ranger','druid','fighter'],'4–7级','Gloves_of_Hail_of_Thorns'],
    ['gloves-thievery','盗窃手套','Gloves of Thievery','blighted-village-risen-road','手套','罕见','散塔林会地下室 · 布雷姆','巧手检定具有优势。','完成“寻找失踪货物”后向布雷姆购买。','是探索与开锁专用手套，战斗前应换回战斗手套；商会敌对会关闭库存。',['rogue','bard','ranger'],'3–10级','Gloves_of_Thievery'],
    ['jolty-vest','震电背心','The Jolty Vest','blighted-village-risen-road','护甲','稀有','散塔林会地下室 · 布雷姆','中甲；挥砍伤害 -1，拥有闪电充能时受伤可使攻击者豁免失败后触电。','完成“寻找失踪货物”后向布雷姆购买。','反震必须先有闪电充能；需要中甲熟练，散塔林会敌对会关闭购买窗口。',['tempest','fighter','ranger'],'4–8级','The_Jolty_Vest'],
    ['abyss-beckoners','深渊召唤者','Abyss Beckoners','blighted-village-risen-road','手套','极稀有','散塔林会地下室 · 牢房','召唤物获得除心灵外全伤害抗性，但每回合开始需感知豁免，否则发狂。','打开散塔林会地下室牢房中的上锁箱取得。','多数召唤物会发狂攻击附近单位；只推荐给免疫或几乎必过豁免的召唤物组合。',['wizard','cleric','druid'],'5–10级','Abyss_Beckoners'],
    ['githyanki-greatsword-psionic','吉斯洋基巨剑（灵能）','Githyanki Greatsword (Psionic)','mountain-pass','武器','罕见','山隘 · 吉斯洋基巡逻队长','+1 巨剑；由吉斯洋基装备时额外造成 1d4 心灵伤害。','击败或缴械山隘巡逻队长萨斯·巴雷萨取得。','额外心灵伤害仅吉斯洋基触发；伪装成吉斯洋基需在装备前完成伪装。',['fighter','paladin','barbarian'],'5–8级','Githyanki_Greatsword_(Psionic)'],
    ['glowing-shield','发光盾','Glowing Shield','goblin-camp','盾牌','罕见','地精营地 · 外围山脊','+2 AC；每短休一次，生命低于 50% 时受伤获得 8 临时生命。','在地精营地外围山脊的上锁箱中取得。','必须低于 50% 生命且已受伤才触发；需要盾牌熟练。',['cleric','paladin','fighter'],'4–7级','Glowing_Shield'],
    ['swiresy-shoes','斯威尔鞋','Swiresy Shoes','goblin-camp','鞋履','稀有','地精营地 · 格拉特','杂技 +1，跳跃距离 +1.5 米。','在地精营地向商人格拉特购买。','主要是探索与位移鞋；格拉特敌对或死亡会关掉购买窗口。',['rogue','monk','fighter'],'4–7级','Swiresy_Shoes'],
    ['watchers-guide','守望者的指引','The Watcher\'s Guide','nautiloid-beach-ruins','武器','罕见','阴暗墓穴 · 陷阱石棺','攻击未命中后，对同一目标的下一次攻击获得克敌机先。','解除石棺房机关后搜取中央石棺。','机关会连续发射火焰；先解除或堵住喷口。',['fighter','paladin'],'2–4级',"The_Watcher's_Guide"],
    ['gloves-power','威能手套','Gloves of Power','emerald-grove','手套','罕见','翠绿林地门口','武器命中可使目标攻击与豁免承受 1d4 减值，并提供巧手加值。','守门战后从扎克鲁格身上拾取。','绝对者烙印会影响部分词条；战后需在尸体离场前搜取。',['rogue','fighter'],'2–5级','Gloves_of_Power'],
    ['amulet-silvanus','西凡纳斯护符','Amulet of Silvanus','emerald-grove','护符','罕见','翠绿林地 · 奥姆熊旁','每次短休可施放次级复原，能处理常见疾病与状态。','移动奥姆附近的扁平石块后拾取。','物品藏在环境互动下，未移动石头很容易漏过。',['cleric','druid'],'2–6级','Amulet_of_Silvanus'],
    ['safeguard-shield','守护之盾','Safeguard Shield','emerald-grove','盾牌','罕见','翠绿林地 · 达蒙','持用时所有豁免检定 +1，是早期通用防御盾。','在难民仍留在林地时向达蒙购买。','推进林地结局会让达蒙离开或死亡，商店窗口有限。',['cleric','paladin'],'2–5级','Safeguard_Shield'],
    ['corellons-grace','柯瑞隆的恩赐','Corellon\'s Grace','emerald-grove','武器','罕见','翠绿林地 · 埃塞尔','空手攻击与伤害 +1；未穿护甲时豁免 +2。','埃塞尔仍在林地交易时购买。','埃塞尔离开林地后早期交易窗口关闭；持杖会占用武器栏。',['open-hand','druid'],'2–4级',"Corellon's_Grace"],
    ['rain-dancer','唤雨者','Rain Dancer','emerald-grove','武器','罕见','翠绿林地 · 阿隆','每次短休可施放造水术，为冰电队建立潮湿条件。','在林地仍开放时向阿隆购买。','林地敌对或商人离场会失去稳定购买窗口。',['tempest','wizard'],'2–6级','Rain_Dancer'],
    ['missile-snaring','捕捉飞弹手套','Gloves of Missile Snaring','emerald-grove','手套','罕见','翠绿林地 · 阿隆','用反应降低一次远程武器攻击的伤害。','在林地商店购买。','需要保留反应；与其他手套位效果互斥。',['wizard','sorcerer'],'2–5级','Gloves_of_Missile_Snaring'],
    ['pale-oak','苍白橡木','Pale Oak','emerald-grove','武器','稀有','翠绿林地 · 卡哈调查','免疫德鲁伊藤蔓纠缠，并可施放信仰守卫藤蔓。','以德鲁伊完成卡哈调查并满足劝返奖励条件。','职业与卡哈存活条件严格，不是所有队伍都能取得。',['druid'],'3–6级','Pale_Oak'],
    ['broodmothers-revenge','巢母的复仇','Broodmother\'s Revenge','emerald-grove','护符','稀有','翠绿林地 · 卡哈','佩戴者受到治疗后，武器短时追加毒素伤害。','从卡哈身上偷取或在其死亡后搜取。','和平劝返卡哈不会自动赠送；取得方式会影响阵营与剧情。',['rogue','fighter'],'3–6级',"Broodmother's_Revenge"],
    ['cap-curing','治愈之帽','Cap of Curing','emerald-grove','头盔','罕见','翠绿林地 · 阿尔菲拉附近','诗人给予诗人激励时，同时恢复目标生命。','撬开阿尔菲拉附近柱后的鎏金箱。','宝箱隐蔽且上锁，离开林地前应按位置检查。',['bard'],'2–5级','Cap_of_Curing'],
    ['ring-protection','防护戒指','Ring of Protection','emerald-grove','戒指','稀有','翠绿林地 · 摩尔','护甲等级与所有豁免检定各 +1。','完成偷取西凡纳斯神像并向摩尔交付。','偷神像会影响林地状态；需先控制仪式与目击风险。',['rogue','paladin'],'3–8级','Ring_of_Protection'],
    ['wapiras-crown','瓦皮拉的皇冠','Wapira\'s Crown','emerald-grove','头盔','稀有','翠绿林地 · 泽夫洛','治疗他人时佩戴者也恢复 1d6 生命。','保卫难民并在结算时接受泽夫洛的金钱奖励。','拒绝金钱奖励会错过皇冠；难民路线失败也无法取得。',['healer','cleric'],'4–7级',"Wapira's_Crown"],
    ['sorrow','悲伤','Sorrow','emerald-grove','武器','稀有','翠绿林地 · 隐秘金库','提供附赠动作的悲伤之鞭，可拉近目标。','取得狼之符文并开启隐秘金库后，从石台拿取。','狼之符文与金库入口容易漏过，且长柄武器占用双手。',['fighter','druid'],'3–6级','Sorrow'],
    ['bracers-defence','防御护腕','Bracers of Defence','blighted-village-risen-road','手套','稀有','染疫村落 · 药剂师地窖','未穿护甲且未持盾时护甲等级 +2。','通过华丽镜子后开启实验室鎏金箱。','穿甲或持盾会让效果失效；不要只看静态面板。',['open-hand','wizard'],'3–8级','Bracers_of_Defence'],
    ['sussur-dagger','轻语匕首','Sussur Dagger','blighted-village-risen-road','武器','稀有','染疫村落 · 铁匠铺','命中可使目标沉默，适合副手打断施法者。','取得轻语树皮并在铁匠炉以匕首完成大师武器。','三种轻语武器只能选一种；选匕首就放弃巨剑与镰刀。',['rogue','bard'],'4–8级','Sussur_Dagger'],
    ['speedy-lightfeet','迅捷轻足','The Speedy Lightfeet','blighted-village-risen-road','鞋履','稀有','染疫村落 · 风车地窖','战斗中疾走会获得闪电充能，并提供运动加值。','开启风车后方地窖内的沉重宝箱。','依赖疾走动作；不使用闪电充能体系时只是过渡件。',['rogue','tempest'],'3–6级','The_Speedy_Lightfeet'],
    ['warped-intellect','扭曲智力头带','Warped Headband of Intellect','blighted-village-risen-road','头盔','稀有','染疫村落 · 食人魔','把佩戴者智力设为 17，便于低智角色处理检定或施法。','击败开明的朗普并从其身上搜取。','雇佣食人魔而不战斗不会立即取得；占用头盔栏。',['wizard','fighter'],'3–7级','Warped_Headband_of_Intellect'],
    ['haste-helm','急速头盔','Haste Helm','blighted-village-risen-road','头盔','罕见','染疫村落中心','战斗开始时获得三回合动量，改善抢位。','开启传送点附近长满苔藓的宝箱。','只提供开场移动力，不等同于急速术。',['fighter','rogue'],'3–6级','Haste_Helm'],
    ['sparkle-hands','火花之手','The Sparkle Hands','blighted-village-risen-road','手套','稀有','阳光湿地 · 枯树桩','徒手命中获得闪电充能，对金属目标更容易命中。','开启腐朽圣所大树桩底部木箱。','需稳定徒手命中；沼泽红帽与陷阱会增加取物风险。',['open-hand','tempest'],'3–7级','The_Sparkle_Hands'],
    ['staff-crones','巫婆法杖','Staff of Crones','blighted-village-risen-road','武器','稀有','鬼婆巢穴 · 酸腐工坊','可施放疾病射线，为毒素法术路线提供早期工具。','击败或绕过鬼婆后，在宝藏室地面拾取。','必须进入工坊收尾；毒素免疫敌人会显著降低价值。',['wizard','sorcerer'],'4–6级','Staff_of_Crones'],
    ['gloves-heroism','英雄手套','Gloves of Heroism','blighted-village-risen-road','手套','稀有','晋升之路收费所地窖','使用誓言引导能力时获得英雄气概，并提高力量豁免。','用两张石椅打开收费所地窖暗室后开箱。','需要圣武士誓言能力；暗室机关需两名角色或重物同时压住。',['paladin'],'3–7级','Gloves_of_Heroism'],
    ['shattered-flail','破碎连枷','Shattered Flail','blighted-village-risen-road','武器','稀有','晋升之路 · 弗林德','命中会治疗持有者，但若停止攻击可能陷入疯狂。','击败弗林德并搜取尸体。','疯狂会危及队友；控制或和平解决弗林德可能影响搜取时点。',['fighter','barbarian'],'4–6级','Shattered_Flail'],
    ['smugglers-ring','走私者之戒','Smuggler\'s Ring','blighted-village-risen-road','戒指','稀有','晋升之路河岸','隐匿与巧手各 +2，但魅力 -1，是探索工具戒。','在断桥下游灌木中的骷髅上拾取。','位置非常隐蔽；对话前应卸下以避免魅力减值。',['rogue','ranger'],'3–12级',"Smuggler's_Ring"],
    ['sword-justice','正义之剑','Sword of Justice','blighted-village-risen-road','武器','稀有','晋升之路收费所','可施放提尔的守护，为双手前排提高防御。','击败安德斯后搜取，或走杀死卡菈克的互斥奖励。','推荐路线会保住卡菈克并与安德斯开战；不要把两边奖励写成可兼得。',['paladin','fighter'],'3–6级','Sword_of_Justice'],
    ['joltshooter','震电弓','The Joltshooter','blighted-village-risen-road','武器','稀有','沃金休眠地 · 弗洛瑞克','造成武器伤害时获得闪电充能。','救出弗洛瑞克后从三件闪电奖励中选择。','与法术火花和电光尖矛互斥，只能正常选一件。',['ranger','bard'],'4–7级','The_Joltshooter'],
    ['sparky-points','电光尖矛','The Sparky Points','blighted-village-risen-road','武器','稀有','沃金休眠地 · 弗洛瑞克','造成武器伤害时获得闪电充能，适合长柄近战。','救出弗洛瑞克后从三件闪电奖励中选择。','与震电弓和法术火花互斥，只能正常选一件。',['fighter','tempest'],'4–7级','The_Sparky_Points'],
    ['harold','哈罗德','Harold','blighted-village-risen-road','武器','稀有','散塔林会藏身处 · 扎瑞斯','命中可使目标受到灾祸减值。','把未开启的商队保险箱交给扎瑞斯并获得奖励。','开箱或让散塔林会敌对会失去稳定奖励。',['ranger','bard'],'4–7级','Harold'],
    ['crushers-ring','粉碎机之戒','Crusher\'s Ring','goblin-camp','戒指','罕见','地精营地 · 粉碎机','移动速度增加 3 米，是通用机动戒指。','从粉碎机身上偷取、羞辱后取走或战斗搜取。','对话分支可能使营地敌对；需按当前阵营选择取得方式。',['open-hand','fighter'],'3–12级',"Crusher's_Ring"],
    ['doom-hammer','末日之锤','Doom Hammer','goblin-camp','武器','罕见','地精营地 · 格拉特','命中会施加寒颤并阻止目标恢复生命。','营地仍中立时向格拉特购买。','营地敌对后商店关闭；双手锤会占用盾牌栏。',['fighter','paladin'],'3–7级','Doom_Hammer'],
    ['gloves-archery','箭术手套','Gloves of Archery','goblin-camp','手套','罕见','地精营地 · 格拉特','获得长短弓熟练，远程武器伤害 +2。','营地仍中立时向格拉特购买。','商人敌对或死亡会错过；与其他输出手套竞争。',['ranger','bard'],'3–8级','Gloves_of_Archery'],
    ['amulet-misty-step','迷踪步护符','Amulet of Misty Step','goblin-camp','护符','稀有','破碎圣所 · 明萨拉房间','每次短休可施放迷踪步，提供关键位移。','开启明萨拉房间内的鎏金箱。','圣所敌对后仍可取，但需先处理守卫与视线。',['wizard','fighter'],'3–8级','Amulet_of_Misty_Step'],
    ['spidersilk','蛛丝护甲','Spidersilk Armour','goblin-camp','护甲','稀有','破碎圣所 · 明萨拉','轻甲提供潜行加值与体质豁免优势，利于维持专注。','击败明萨拉并搜取。','招募明萨拉的路线不会在第一章正常取得其护甲。',['rogue','bard'],'4–8级','Spidersilk_Armour'],
    ['watersparkers','水电火花','The Watersparkers','goblin-camp','鞋履','稀有','破碎圣所 · 明萨拉附近','站在水面开始回合会获得闪电充能，并使水面带电。','开启明萨拉附近的鎏金箱。','带电水面也会伤及队友；使用前准备抗电与站位。',['tempest','wizard'],'4–8级','The_Watersparkers'],
    ['growling-underdog','咆哮恶犬手套','Gloves of the Growling Underdog','goblin-camp','手套','稀有','破碎圣所 · 拉格兹林宝库','被两个以上敌人包围时近战攻击获得优势。','击败拉格兹林或进入其宝库后开启箱子。','效果要求贴近多名敌人，低防角色会承担额外风险。',['fighter','paladin'],'4–8级','Gloves_of_the_Growling_Underdog'],
    ['boots-striding','大步流星靴','Boots of Striding','goblin-camp','鞋履','稀有','破碎圣所 · 明萨拉','施放专注法术后获得动量，专注期间不易被推倒。','击败明萨拉并搜取。','招募路线与第一章搜取互斥；效果依赖专注。',['cleric','paladin'],'4–8级','Boots_of_Striding'],
    ['club-hill-giant','山丘巨人力量短棒','Club of Hill Giant Strength','underdark','武器','稀有','幽暗地域 · 奥术高塔','把持有者力量设为 19，可作为副手属性工具。','在奥术高塔顶层打碎力量凳并拾取断下的棒腿。','来源是可破坏环境物，未检查凳子就会漏过。',['open-hand','giant'],'4–10级','Club_of_Hill_Giant_Strength'],
    ['staff-arcane-blessing','奥术祝福法杖','Staff of Arcane Blessing','underdark','武器','稀有','幽暗地域 · 奥术高塔地下室','祝福术额外提高法术攻击，并可每日施放一次祝福。','佩戴指引之光进入高塔地下室，从桌旁拾取。','地下室入口需要高塔戒指路线；额外效果按法术攻击而非所有伤害结算。',['cleric','wizard'],'4–9级','Staff_of_Arcane_Blessing'],
    ['amulet-restoration','复原护符','Amulet of Restoration','underdark','护符','稀有','蕈人栖息地 · 德里丝 / 清账屋地下 · 私人藏品箱','每次长休可施放治愈真言与群体治愈真言。','第一章向德里丝购买；第三章可进入清账屋地下，在第一段楼梯下方东侧房间的“私人藏品”箱取得。','德里丝死亡或栖息地敌对会关闭第一章交易；第三章路线需要进入清账屋地下室，且两种施法均为每日一次。',['healer','cleric'],'4–8级','Amulet_of_Restoration'],
    ['caustic-band','腐蚀指环','Caustic Band','underdark','戒指','稀有','蕈人栖息地 · 德里丝','武器攻击额外造成 2 点酸蚀伤害。','向德里丝购买。','占用高竞争戒指栏；纯法术与徒手攻击不能稳定受益。',['fighter','ranger'],'4–10级','Caustic_Band'],
    ['melf-first-staff','梅尔夫的第一法杖','Melf\'s First Staff','underdark','武器','稀有','蕈人栖息地 · 布鲁格','法术攻击与法术豁免难度 +1，并可施放梅尔夫酸箭。','向布鲁格购买。','栖息地敌对会关闭商店；双持或盾牌配置需权衡武器栏。',['wizard','sorcerer'],'4–9级',"Melf's_First_Staff"],
    ['baneful','灾祸短剑','The Baneful','underdark','武器','稀有','蕈人栖息地 · 布鲁格','+1 灵巧短剑；绑定为邪术师契约／咒剑武器或奥法骑士绑定武器后，命中可施加灾祸，且绑定收益与附魔可叠加。','在蕈人栖息地向布鲁格购买，并由对应职业能力把它绑定为武器。','未绑定时只是一把 +1 短剑；绑定条件不满足就没有灾祸主轴，且栖息地敌对会关闭交易。',['warlock','fighter'],'4–8级','The_Baneful'],
    ['boots-genial-striding','潇洒行者之靴','Boots of Genial Striding','underdark','鞋履','稀有','蕈人栖息地 · 布鲁格','移动不受困难地形、熔岩、泥地、植物生长、缠绕藤蔓和蛛网减速。','在蕈人栖息地向布鲁格购买。','不能消除深水造成的困难地形；栖息地敌对会关闭交易。',['fighter','ranger','druid'],'4–9级','Boots_of_Genial_Striding'],
    ['circlet-blasting','爆裂头环','Circlet of Blasting','underdark','头盔','稀有','蕈人栖息地 · 布鲁格','每次长休可施放一次 2 环灼热射线，给没有该法术的角色一轮远程火焰爆发。','在蕈人栖息地向布鲁格购买。','仅每长休一次，不能替代火系施法主轴；栖息地敌对会关闭交易。',['wizard','sorcerer','warlock'],'4–7级','Circlet_of_Blasting'],
    ['sunwalkers-gift','日行者的赠礼','Sunwalker\'s Gift','underdark','戒指','罕见','蕈人栖息地 · 布鲁格','给予 12 米黑暗视觉，给没有黑暗视觉的角色提供探索便利。','在蕈人栖息地向布鲁格购买。','不会提供黑暗视觉法术通常附带的照明锥；戒指栏在战斗中常有更高价值竞争，栖息地敌对也会关闭交易。',['fighter','rogue','bard'],'4–7级',"Sunwalker's_Gift"],
    ['cinder-shoes','燃烬之靴','Cinder Shoes','underdark','鞋履','罕见','蕈人栖息地 · 布鲁格','使敌人燃烧时获得两回合热能，可作为火焰／热能体系的早期鞋位。','在蕈人栖息地向布鲁格购买。','栖息地敌对会关闭交易；单次范围施加燃烧也只获得一次热能。',['sorcerer','wizard'],'4–7级','Cinder_Shoes'],
    ['lifebringer','赋命者','The Lifebringer','underdark','头盔','罕见','蕈人栖息地 · 布鲁格','获得闪电充能时同时获得 3 点临时生命，直到失去所有充能。','在蕈人栖息地向布鲁格购买。','栖息地敌对会关闭交易；临时生命与其他来源按较高值结算，不能当作可叠加护盾。',['tempest','open-hand'],'4–8级','The_Lifebringer'],
    ['ring-jumping','跳跃戒指','Ring of Jumping','underdark','戒指','罕见','蕈人栖息地 · 德里丝','每次短休可用附赠动作施放强化跳跃，适合探图与高低差路线。','在蕈人栖息地向德里丝购买。','栖息地敌对会关闭交易；附赠动作施放后，同回合往往无法再跳跃，战斗效率不如常驻输出戒指。',['fighter','ranger'],'4–8级','Ring_of_Jumping'],
    ['explorers-ring','探索者之戒','Explorer\'s Ring','underdark','戒指','罕见','幽暗地域 · 蘑菇猎人洞穴','自然与求生各 +1，是探索检定的随身工具戒。','从爆炸蘑菇区域上方第五处岩台的骷髅拾取；可用强化跳跃或轻羽术到达。','炸蘑菇会连锁爆炸；骷髅不受 Alt 高亮，黑暗中很容易漏拿。',['ranger','druid'],'4–9级',"Explorer's_Ring"],
    ['corrosive-flail','腐蚀连枷','Corrosive Flail','underdark','武器','稀有','蕈人栖息地 · 德里丝','单手 +1 连枷；腐蚀重击会造成额外酸蚀并在目标周围铺设降低 AC 的酸池。','在蕈人栖息地向德里丝购买。','酸池的范围攻击会波及队友与物件；栖息地敌对会关闭交易。',['fighter','paladin'],'4–8级','Corrosive_Flail'],
    ['boots-speed','速度之靴','Boots of Speed','underdark','鞋履','稀有','蕈人栖息地 · 图拉','附赠动作“轻点脚跟”使移动速度翻倍，并让针对你的借机攻击处于劣势。','治好中毒的图拉并答应协助铁手侏儒后，向她领取。','与图拉对话后仅有三次长休的救治窗口；若把靴子交给瑟琳，需再从其身上取回。',['rogue','fighter'],'4–10级','Boots_of_Speed'],
    ['psychic-spark','心灵火花','Psychic Spark','underdark','护符','稀有','蕈人栖息地 · 布鲁格','魔法飞弹额外增加一枚飞弹，并可每日施放一次。','向布鲁格购买。','只明显强化魔法飞弹体系；商店窗口受蕈人阵营影响。',['wizard','sorcerer'],'4–9级','Psychic_Spark'],
    ['pearl-power','法力珍珠护符','Pearl of Power Amulet','underdark','护符','稀有','蕈人栖息地 · 奥梅鲁姆','每次长休恢复一个三级或更低的法术位。','完成奥梅鲁姆寄生虫实验后向其购买。','必须先完成实验并保持奥梅鲁姆友好。',['wizard','cleric'],'4–10级','Pearl_of_Power_Amulet'],
    ['creations-echo','造物回响','Creation\'s Echo','underdark','武器','稀有','蕈人栖息地 · 奥梅鲁姆','对生物造成酸蚀、火焰、闪电、光耀或死灵伤害后，获得对应元素抗性两回合。','完成“帮助奥梅鲁姆调查寄生虫”后向他购买。','元素抗性一次只保留一种，且会覆盖现有的同类药剂效果；未完成寄生虫调查不会开放交易。',['wizard','sorcerer','tempest'],'4–8级',"Creation's_Echo"],
    ['mind-shielding-ring','心灵屏障戒指','Ring of Mind-Shielding','underdark','戒指','稀有','蕈人栖息地 · 奥梅鲁姆','对魅惑状态的豁免具有优势，第一章面对竖琴妖精等魅惑来源很实用。','完成奥梅鲁姆寄生虫实验后，以金币、信息，或通过说服／威吓取得。','需要先完成调查；说服或威吓失败时仍可能要付费，戒指栏也不应长期只为单一敌人类型占用。',['cleric','fighter','paladin'],'4–8级','Ring_of_Mind-Shielding'],
    ['shadespell-circlet','阴影法术头环','The Shadespell Circlet','underdark','头盔','罕见','蕈人栖息地 · 奥梅鲁姆','处于阴影遮蔽时，法术豁免难度 +1，适合能稳定制造或利用暗处的控制施法者。','完成奥梅鲁姆寄生虫实验后向他购买。','必须处于遮蔽才生效；强光与开阔战场会失去收益，且未完成调查不会开放交易。',['wizard','sorcerer','warlock'],'4–8级','The_Shadespell_Circlet'],
    ['champions-chain','冠军之链','Champion\'s Chain','underdark','护符','稀有','蕈人栖息地 · 格拉特','每次长休可使一名盟友的威吓检定 +2，是对话工具而非战斗毕业护符。','击败涅雷后，把他的头交给格拉特领取。','若把涅雷的头交给斯帕，会改得使节护符；两件奖励互斥。',['barbarian','paladin','fighter'],'5–8级',"Champion's_Chain"],
    ['envoys-amulet','使节护符','Envoy\'s Amulet','underdark','护符','稀有','蕈人栖息地 · 斯帕','每次长休可使一名盟友的游说检定 +2，是对话工具而非战斗毕业护符。','击败涅雷后，把他的头交给斯帕领取。','若把涅雷的头交给格拉特，会改得冠军之链；两件奖励互斥。',['bard','cleric','rogue'],'5–8级',"Envoy's_Amulet"],
    ['mourning-frost','悼霜','Mourning Frost','underdark','武器','非常稀有','幽暗地域三处分散组件','提高寒冷伤害并可施加冻寒，是寒冰流核心法杖。','收齐冰晶、冰冷金属与冰冷柄后在背包组合。','三个组件分布在恐怖洞窟、轻语树与蕈人相关路线，漏一件就不能合成。',['wizard','sorcerer'],'4–10级','Mourning_Frost'],
    ['sentient-amulet','有感知的护符','Sentient Amulet','grymforge','护符','稀有','复仇之炉 · 岩浆元素区','可恢复气并触发诅咒僧侣任务，兼具武僧资源与长线任务价值。','从熔岩区精金箱取得。','靠近岩浆元素风险高；后续任务会改变护符状态。',['open-hand','drunken'],'5–10级','Sentient_Amulet_(Rare)'],
    ['adamantine-scale','精金鳞甲','Adamantine Scale Mail','grymforge','护甲','非常稀有','复仇之炉 · 精金熔炉','中甲降低伤害、使攻击者踉跄并免疫暴击。','用鳞甲模具与一块秘银矿石锻造。','两块秘银总共只能做两件，和盾牌、板甲及武器互斥。',['cleric','druid'],'5–10级','Adamantine_Scale_Mail'],
    ['adamantine-shield','精金盾牌','Adamantine Shield','grymforge','盾牌','非常稀有','复仇之炉 · 精金熔炉','使持有者免疫暴击，并在敌人未命中时施加踉跄。','用盾牌模具与一块秘银矿石锻造。','两块秘银总共只能做两件；双手武器角色无法同时持盾。',['cleric','paladin'],'5–12级','Adamantine_Shield'],
    ['grymskull-helm','格林骷髅头盔','Grymskull Helm','grymforge','头盔','非常稀有','复仇之炉 · 格林','免疫暴击、提供火焰抗性，并可施放猎人印记。','击败格林后从其尸体拾取。','必须实际搜取格林；需要中甲熟练。',['fighter','paladin'],'5–10级','Grymskull_Helm'],
    ['protecty-sparkswall','守护火花壁垒','The Protecty Sparkswall','grymforge','服装','稀有','复仇之炉 · 陷阱长廊','法术豁免难度 +1；有闪电充能时护甲与豁免再 +1。','穿过高架陷阱长廊后开启鎏金箱。','陷阱密集且需布甲位；没有闪电充能时只有法术 DC 收益。',['wizard','sorcerer'],'5–10级','The_Protecty_Sparkswall'],
    ['ring-elemental-infusion','元素灌注戒指','Ring of Elemental Infusion','creche-yllk','戒指','罕见','伊雷柯养育间 · 医务室南侧的吉斯洋基奥术战士','用法术或戏法造成酸蚀、寒冷、火焰、闪电或雷鸣伤害后，至下回合结束前的下一次成功武器攻击额外造成 1d4 同元素伤害。','击败或偷取医务室南侧的吉斯洋基奥术战士乌姆拉阿克后取得。','只有下一次成功武器攻击获得加成；多元素伤害会以优先级覆盖，纯施法或纯武器角色收益有限。',['bard','paladin'],'5–9级','Ring_of_Elemental_Infusion'],
    ['ring-arcane-synergy','奥术协同戒指','Ring of Arcane Synergy','creche-yllk','戒指','稀有','伊雷柯养育间入口 · 吉斯法师法拉阿格','戏法造成伤害后获得奥术协同，把施法属性加入武器伤害。','从入口附近的吉斯法师法拉阿格身上偷取，或在其敌对后的战斗中搜取。','必须在戏法与武器攻击间切换，并占用戒指栏；若不愿让养育间入口敌对，应优先用偷窃取得。',['bard','hexblade'],'5–10级','Ring_of_Arcane_Synergy'],
    ['necklace-elemental','元素强化项链','Necklace of Elemental Augmentation','creche-yllk','护符','罕见','伊雷柯养育间 · 审判官室展示柜','元素戏法伤害加入施法属性调整值。','开启审判官室展示柜取得。','只强化原生元素戏法中造成酸蚀、寒冷、火焰或闪电伤害的版本；外加伤害与错误伤害标签不会触发。',['wizard','sorcerer'],'5–10级','Necklace_of_Elemental_Augmentation'],
    ['defender-flail','防御者连枷','Defender Flail','creche-yllk','武器','非常稀有','伊雷柯养育间 · 军需官','持用时护甲等级 +1，并降低部分武器伤害。','养育间仍中立时向军需官购买。','敌对后无法保证交易；单手武器伤害较低。',['cleric','paladin'],'5–10级','Defender_Flail'],
    ['daredevil-gloves','勇莽手套','Daredevil Gloves','creche-yllk','手套','非常稀有','伊雷柯养育间 · 军需官','法术攻击 +1，并可让近距离远程法术攻击按近战施放。','养育间仍中立时向军需官购买。','自动切换模式需按战场开关，且敌对后商店关闭。',['wizard','warlock'],'5–10级','Daredevil_Gloves'],
    ['vital-conduit','生命通道之靴','Vital Conduit Boots','creche-yllk','鞋履','稀有','伊雷柯养育间 · 军需官','施放需要专注的法术时获得 8 点临时生命。','养育间仍中立时向军需官购买。','临时生命不叠加；失去交易窗口后无法补购。',['cleric','wizard'],'5–10级','Vital_Conduit_Boots'],
    ['crossbow-arcane-force','奥术力十字弓','Crossbow of Arcane Force','creche-yllk','武器','稀有','伊雷柯养育间','可用短休资源发动额外力场伤害射击。','从养育间固定敌人或容器取得。','需要十字弓熟练与远程武器栏；离区前核对搜取。',['ranger','fighter'],'5–9级','Crossbow_of_Arcane_Force'],
    ['periapt-wound-closure','伤口闭合护符','Periapt of Wound Closure','mountain-pass','护符','非常稀有','罗斯莫恩修道院小径 · 埃斯特','倒地时自动稳定，受到治疗时按最大值恢复。','在埃斯特仍可交易时购买。','推进蛋委托或让埃斯特敌对会关闭交易；护符栏竞争激烈。',['fighter','barbarian'],'5–12级','Periapt_of_Wound_Closure'],
    ['blooded-greataxe','血斧','Blooded Greataxe','goblin-camp','武器','罕见','破碎圣所 · 罗亚·月光','双手 +1 巨斧；生命不高于 50% 时，使用该武器的攻击额外造成 1d4 挥砍伤害。','在罗亚仍保持中立、可交易时购买。','低血量增伤会把持有者置于被击倒边缘；若让圣所敌对或错过交易窗口，就不能稳定购得。',['barbarian','fighter','paladin'],'3–7级','Blooded_Greataxe'],
    ['bow-awareness','觉察之弓','Bow of Awareness','goblin-camp','武器','罕见','破碎圣所 · 罗亚·月光','+1 短弓；装备时先攻 +1，是不依赖攻击方式的抢先手副武器。','在罗亚仍保持中立、可交易时购买。','先攻加值必须装备才生效；圣所敌对后商人窗口关闭，短弓伤害本身只是过渡。',['ranger','rogue','fighter'],'3–7级','Bow_of_Awareness'],
    ['gold-wyrmling-staff','金龙幼崽法杖','Gold Wyrmling Staff','goblin-camp','武器','稀有','破碎圣所 · 罗亚·月光','+1 法杖；近战命中额外造成 1d4 火焰伤害，并获得可无限施放的火焰箭。','在罗亚仍保持中立、可交易时购买。','火焰箭会受火焰抗性／免疫限制；若圣所敌对或罗亚离场，第一章的购买窗口消失。',['wizard','sorcerer','druid'],'3–7级','Gold_Wyrmling_Staff'],
    ['heavy-crossbow-plus-one','重弩 +1','Heavy Crossbow +1','goblin-camp','武器','罕见','破碎圣所 · 罗亚·月光','双手军用远程武器，造成 1d10 + 1 穿刺伤害，提供稳定的早期单发输出。','在罗亚仍保持中立、可交易时购买。','双手栏不能配盾且需要军用武器熟练；无附加机制，中期通常会被专属弓弩替换。',['fighter','ranger','rogue'],'3–6级','Heavy_Crossbow_+1'],
    ['hunters-dagger','猎人匕首','Hunter\'s Dagger','goblin-camp','武器','罕见','破碎圣所 · 罗亚·月光','+1 匕首；近战命中使目标破裂 3 回合，目标每移动 1.5 米受到 1d4 穿刺伤害。','在罗亚仍保持中立、可交易时购买。','投掷攻击不会施加破裂；敌人不移动时收益很低，且圣所敌对后无法稳定购得。',['rogue','ranger','bard'],'3–7级','Hunter\'s_Dagger'],
    ['monster-slayer-glaive','屠怪长柄刀','Monster Slayer Glaive','goblin-camp','武器','罕见','破碎圣所 · 罗亚·月光','双手长柄刀；对怪兽类目标的攻击额外造成 1d4 伤害。','在罗亚仍保持中立、可交易时购买。','增伤只针对怪兽类，面对大多数人形敌人只是普通长柄刀；圣所敌对后交易关闭。',['fighter','barbarian','paladin'],'3–7级','Monster_Slayer_Glaive'],
    ['amulet-selunes-chosen','塞伦涅眷选护符','Amulet of Selûne\'s Chosen','goblin-camp','护符','罕见','破碎圣所 · 德罗尔·拉格兹林','每次长休可施放“塞伦涅之梦”，治疗友方 1d8 生命，但目标可能陷入睡眠。','击败德罗尔·拉格兹林后，搜查其王座后方的宝藏堆。','治疗后的睡眠会让目标暴露，战斗中通常不如药水可靠；未搜查王座后宝藏堆容易漏掉。',['cleric','bard','paladin'],'3–7级','Amulet_of_Selûne\'s_Chosen'],
    ['springstep-boots','踏春靴','Springstep Boots','goblin-camp','鞋履','罕见','破碎圣所 · 德罗尔·拉格兹林','战斗中疾走后获得 3 回合动量，提升移动距离。','从德罗尔·拉格兹林王座后方的宝藏室／宝箱取得。','必须在战斗内以疾走触发，动量会被倒地、束缚或减速移除；先确认王座后方区域再离开。',['monk','rogue','fighter'],'3–7级','Springstep_Boots'],
    ['lihalas-lute','利哈拉的鲁特琴','Lihala\'s Lute','emerald-grove','乐器','剧情物品','翠绿林地 · 阿尔菲拉','获得演奏（鲁特琴）；帮助阿尔菲拉完成歌曲还会得到乐器熟练。','在林地与阿尔菲拉交谈并同意协助她创作；她会交付鲁特琴，随后完成 DC 10 表演检定。','错过阿尔菲拉对话或让她死亡会失去正常取得；主要是剧情与探索工具，不占常规战斗装备位。',['bard','rogue','all'],'2–12级','Lihala\'s_Lute'],
    ['faithbreaker','破信者','Faithbreaker','goblin-camp','武器','罕见','破碎圣所 · 德罗尔·拉格兹林','+1 战锤；每短休可发动“至上之力”，命中额外造成 1d6 力场伤害并可能击退 5 米。','击败德罗尔·拉格兹林后从其尸体拾取。','至上之力使用动作且可能把敌人击出可控范围；若走和平路线仍想拿到，需谨慎处理首领与营地敌对。',['cleric','paladin','fighter'],'3–8级','Faithbreaker'],
    ['absolutes-talisman','至上真神护符','Absolute\'s Talisman','goblin-camp','护符','罕见','破碎圣所 · 真魂迦特','每长休可对自己施放 2 环援助赢；带有至上真神烙印时，死亡豁免具有优势。','从真魂迦特身上取得。','援助赢效果在卸下护符时会移除；烙印加成只对被烙印佩戴者有效，且取得会影响迦特路线。',['cleric','paladin','fighter'],'3–7级','Absolute\'s_Talisman'],
    ['absolutes-warboard','至上真神战盾','Absolute\'s Warboard','goblin-camp','盾牌','罕见','破碎圣所 · 真魂迦特','+2 AC；每长休可施放英雄气概，带至上真神烙印时豁免 +1。','从真魂迦特身上取得。','需要盾牌熟练；烙印加成限制佩戴者，取得会改变迦特相关路线。',['cleric','paladin','fighter'],'3–7级','Absolute\'s_Warboard'],
    ['assassins-touch','刺客之触','Assassin\'s Touch','goblin-camp','武器','罕见','破碎圣所 · 萨扎奖励','+1 灵巧轻型匕首；攻击睡眠或昏迷目标时额外造成 1d4 死灵伤害。','完成“救出地精萨扎”，将她护送至地精营地后领取奖励。','任务要求萨扎活着抵达营地；只对睡眠／昏迷目标增伤，不能当成常驻输出词条。',['rogue','ranger','bard'],'3–7级','Assassin\'s_Touch'],
    ['jagged-spear','锯齿长矛','Jagged Spear','goblin-camp','武器','罕见','破碎圣所 · 拷问者尖刺','命中受拷打目标时，可能令其体质豁免处于劣势。','在圣所入口东侧、拷问者尖刺附近地面拾取。','没有强化附魔且效果只针对受拷打目标；位置在地面上，若只搜尸体会漏掉。',['fighter','paladin','barbarian'],'3–5级','Jagged_Spear'],
    ['xyanyde','扎尼德','Xyanyde','goblin-camp','武器','罕见','破碎圣所 · 明萨拉','+1 钉头锤；每短休一次，未命中目标时令其被妖火照亮 2 回合。','从明萨拉身上取得。','妖火只在未命中时触发且每短休一次；取得会直接影响明萨拉招募与林地袭击路线。',['cleric','paladin','fighter'],'3–8级','Xyanyde'],
    ['herbalists-gloves','草药师手套','Herbalist\'s Gloves','underdark','手套','罕见','蕈人栖息地 · 德里丝','佩戴者治疗中毒目标时会清除其全部中毒状态组效果。','在蕈人栖息地向德里丝·蕨冠购买。','只有实际进行治疗才会触发；让蕈人栖息地敌对会关闭商人窗口。',['cleric','druid','bard'],'4–8级','Herbalist\'s_Gloves'],
    ['shadow-menzoberranzan','魔索布莱城之影','Shadow of Menzoberranzan','underdark','头盔','稀有','蕈人栖息地 · 秘密区域','每短休可用动作进入隐形，适合脱战、侦察和布置伏击。','完成“击败灰矮人入侵者”后，进入开启的秘密区域，在苍白尸体旁地面拾取。','需轻甲熟练；秘密区域依赖任务结算，若只清战斗而未回蕈人王处结算会漏掉。',['rogue','ranger','warlock'],'4–9级','Shadow_of_Menzoberranzan'],
    ['slippery-chain-shirt','滑溜锁子甲','Slippery Chain Shirt','underdark','护甲','罕见','溃烂洞穴 · 祭坛后方峭壁','中甲 AC 13 + 敏捷（最多 +2）；佩戴者治疗生物后自动脱离，不触发借机攻击。','在布阿尔祭坛后上方、隐藏宝箱内取得。','需中甲熟练；溃烂洞穴存在牺牲同伴分支，先决定路线再拿宝箱。',['cleric','druid','ranger'],'4–8级','Slippery_Chain_Shirt'],
    ['winters-clutches','冬日之握','Winter\'s Clutches','underdark','手套','罕见','蕈人栖息地 · 格拉特','造成寒冷伤害时使目标获得 2 回合寒霜侵蚀。','完成格拉特的“为圆环复仇”后领取；也可在罗斯莫恩小径向埃斯特购买。','格拉特奖励与埃斯特库存互斥；只有造成寒冷伤害的构筑才能稳定触发。',['wizard','sorcerer','druid'],'4–10级','Winter\'s_Clutches'],
    ['loviatar-scourge','洛薇塔的鞭笞','Loviatar\'s Scourge','goblin-camp','武器','罕见','破碎圣所 · 阿布狄拉克','钉头锤；持用者获得死灵伤害抗性，命中时对命中目标周围 2 米所有生物（包括自己）额外造成 1d6 死灵伤害。','从阿布狄拉克处购买或在他死亡后拾取。','范围伤害会完整伤害友军；若通过交易购买，阿布狄拉克需要使用时武器会回到他手中。',['cleric','paladin','fighter'],'3–7级','Loviatar\'s_Scourge'],
    ['ritual-axe','仪式手斧','Ritual Axe','goblin-camp','武器','罕见','破碎圣所 · 阿布狄拉克旁桌面','命中使目标受灾祸，攻击与豁免 -1d4；使用者生命不低于 50% 时会承受 1d6 穿刺自伤。','在阿布狄拉克旁的桌面取得。','灾祸不与同名效果叠加；高血量自伤可能把自己击倒，不能把它当成无代价副手。',['barbarian','fighter','rogue'],'3–6级','Ritual_Axe'],
    ['ritual-dagger','仪式匕首','Ritual Dagger','goblin-camp','武器','罕见','破碎圣所 · 阿布狄拉克周围','命中后使持有者短暂获得祝福；也可用附赠动作自伤 1d4 换取攻击与豁免 +1d4。','从阿布狄拉克身上或附近地面／桌面取得。','祝福不与同类效果叠加；自伤会压低生命，且实测持续到下一回合开始前。',['rogue','ranger','bard'],'3–7级','Ritual_Dagger'],
    ['poison-resistance-ring','抗毒戒指','Ring of Poison Resistance','goblin-camp','戒指','稀有','破碎圣所 · 座狼兽栏前石棺','获得毒素伤害抗性。','在座狼兽栏前、已开启石棺内的骷髅上拾取。','只减免毒素伤害，不免疫中毒状态；石棺位置容易被直奔座狼兽栏的路线跳过。',['fighter','barbarian','rogue'],'3–8级','Ring_of_Poison_Resistance'],
    ['linebreaker-boots','破阵者之靴','Linebreaker Boots','goblin-camp','鞋履','稀有','破碎圣所 · 座狼兽栏','战斗中疾走后获得 3 回合怒意。','击败座狼兽栏的驯兽师苏尔克后拾取。','怒意会随受到伤害降低；先处理兽栏战斗和萨扎路线，避免只搜完宝箱就离开。',['barbarian','fighter','monk'],'3–7级','Linebreaker_Boots'],
    ['beastmasters-chain','兽王项链','Beastmaster\'s Chain','goblin-camp','护符','罕见','破碎圣所 · 座狼兽栏','每长休可施放一次动物交谈。','在座狼兽栏肉桌旁的箱子中取得。','每天一次且护符栏竞争很强；可用药剂或法术替代时不必长期装备。',['ranger','druid','bard'],'3–6级','Beastmaster\'s_Chain'],
    ['worgfang','座狼之牙','Worgfang','goblin-camp','武器','罕见','破碎圣所 · 座狼兽栏','装备时地精攻击持有者具有劣势。','在座狼兽栏其中一间牢房的骨堆上取得。','效果只针对地精且无强化加值；离开地精营地后通常应换成常规武器。',['rogue','ranger','bard'],'3–5级','Worgfang'],
    ['guiding-light','引导之光','Guiding Light','underdark','戒指','剧情物品','幽暗地域 · 奥术高塔','可无限施放光亮术；装备时能显示高塔升降梯隐藏按钮。','在奥术高塔顶层，通过正确诗句与伯纳德对话获得，或击败后拾取。','错误对话会开战；光亮术施放后可卸下戒指，避免长期占用戒指栏。',['wizard','sorcerer','rogue'],'4–8级','Guiding_Light'],
    ['sparkswall','火花壁垒','The Sparkswall','underdark','戒指','罕见','幽暗地域 · 奥术高塔地下层','获得闪电伤害抗性且免疫触电。','装备引导之光开启升降梯隐藏按钮，到地下层上方的镀金箱取得。','需要先取得引导之光；不提供进攻词条，主要用于电荷流派与伯纳德战。',['wizard','sorcerer','fighter'],'4–8级','The_Sparkswall'],
    ['skybreaker','破天者','Skybreaker','underdark','武器','罕见','幽暗地域 · 奥术高塔入口','+1 轻锤；每长休可施放灼热惩击。','从奥术高塔入口前的上锁沉重箱子取得。','该灼热惩击命中时仍消耗 1 环法术位；轻锤伤害骰低，适合作为火焰工具而非主武器。',['paladin','cleric','fighter'],'4–8级','Skybreaker'],
    ['exterminators-axe','灭虫巨斧','Exterminator\'s Axe','underdark','武器','罕见','幽暗地域 · 衰败村落','对植物、蕈人和小型生物额外造成 1d6 火焰伤害。','击败灰矮人首领盖克·科尔后拾取。','额外伤害极具敌人类型限制；灰矮人战斗的选择会影响蕈人圆环任务线。',['barbarian','fighter','paladin'],'4–7级','Exterminator\'s_Axe'],
    ['sickle-boooal','布阿尔镰刀','Sickle of BOOOAL','underdark','武器','稀有','幽暗地域 · 溃烂洞穴','单手轻型镰刀，造成 2d4 挥砍伤害，可作为双持武器。','通过溃烂洞穴的布阿尔祭坛相关路线获得。','与牺牲同伴取得布阿尔祝福等选择存在代价；先决定剧情分支，不要为武器误锁结局。',['rogue','ranger','fighter'],'4–8级','Sickle_of_BOOOAL'],
    ['uncovered-mysteries','揭开的奥秘','Uncovered Mysteries','underdark','护符','稀有','幽暗地域 · 奥术高塔地下层','每长休可施放一次探知思想；装备即可在对话中显示相关选项。','在升降梯出口旁夹层地面的镀金小箱取得。','需要进入高塔地下层；只是对话工具，战斗护符栏位紧张时可临时换上。',['bard','wizard','sorcerer'],'4–9级','Uncovered_Mysteries'],
    ['helmet-smiting','惩击头盔','Helmet of Smiting','underdark','头盔','罕见','幽暗地域 · 塞伦涅前哨','体质豁免 +1；惩击法术施加状态时获得等同魅力调整值的临时生命。','在前哨传送点西南的上锁镀金箱取得。','需中甲熟练；只对会施加状态的惩击法术生效，雷鸣／震荡惩击不触发。',['paladin'],'4–9级','Helmet_of_Smiting'],
    ['bloodguzzler-garb','嗜血者服装','Bloodguzzler Garb','underdark','服装','罕见','幽暗地域 · 掘地虫','被敌人伤害时获得 2 回合怒意，每回合最多触发一次。','击败幽暗地域的掘地虫后从尸体拾取。','AC 仅 10 + 敏捷；怒意需要先受伤，低生命构筑应准备撤离方案。',['barbarian','monk','fighter'],'4–8级','Bloodguzzler_Garb'],
    ['spectator-eyes','眼魔观察者之眼','The Spectator Eyes','underdark','护符','非常稀有','幽暗地域 · 石化战场','每长休可施放恐惧射线与致伤射线。','击败石化战场的眼魔观察者后拾取。','强敌战利品且法术每日一次；先处理石化卓尔与眼魔战斗的开场位置。',['wizard','warlock','sorcerer'],'5–10级','The_Spectator_Eyes'],
    ['blast-pendant','爆破坠饰','The Blast Pendant','underdark','护符','罕见','幽暗地域 · 石化卓尔多恩','消耗闪电充能强化下一次法术或戏法。','从塞伦涅前哨以西的石化卓尔多恩身上取得。','需要闪电充能才能发挥价值；石化卓尔可能在眼魔战中死亡，战后务必搜尸。',['wizard','sorcerer','cleric'],'4–8级','The_Blast_Pendant'],
    ['amulet-unworthy','不配者护符','Amulet of the Unworthy','underdark','护符','罕见','幽暗地域 · 牛头人','获得挥砍伤害抗性，但对钝击伤害易伤。','击败幽暗地域游荡的牛头人后拾取。','钝击易伤是重大代价；只在明确面对挥砍伤害、且能规避钝击的战斗中使用。',['fighter','barbarian','paladin'],'4–7级','Amulet_of_the_Unworthy'],
    ['drow-studded-leather','卓尔镶钉皮甲','Drow Studded Leather Armour','underdark','护甲','稀有','幽暗地域 · 溃烂洞穴入口附近的罗丝信徒藏匿处','轻甲 AC 12 + 敏捷，隐匿 +1。','从溃烂洞穴入口附近、罗丝信徒藏匿处的沉重箱取得。','需要轻甲熟练；仅提供隐匿 +1，防御面可能不如蛛丝甲等专属轻甲。',['rogue','ranger','bard'],'4–8级','Drow_Studded_Leather_Armour'],
    ['shortsword-first-blood','第一滴血短剑','Shortsword of First Blood','underdark','武器','罕见','幽暗地域 · 衰败村落入口','攻击满生命目标时额外造成 1d8 穿刺伤害。','从蕈人栖息地接近衰败村落时，在被处决的深侏儒尸体上拾取。','加成只由这把短剑的攻击触发，且目标必须满血；适合先手首击而非持续输出。',['rogue','ranger','bard'],'4–7级','Shortsword_of_First_Blood'],
    ['helmet-autonomy','自主头盔','Helmet of Autonomy','underdark','头盔','罕见','幽暗地域 · 溃烂洞穴入口','获得感知豁免熟练。','在溃烂洞穴入口处的骷髅上拾取。','需轻甲熟练；只提升感知豁免，遇到高价值战斗头盔后通常作为针对性换装。',['rogue','ranger','warlock'],'4–8级','Helmet_of_Autonomy'],
    ['dark-justiciar-helm','暗夜法官头盔','Dark Justiciar Helm','grymforge','头盔','罕见','幽暗地域 · 废弃避难所','体质豁免 +1；处于阴影遮蔽时额外获得豁免加值。','在远古熔炉传送点东北、重型板甲模具以南的暗夜法官骸骨上拾取。','需中甲熟练；依赖阴影环境，明亮战场收益较低。',['fighter','paladin','cleric'],'5–9级','Dark_Justiciar_Helm'],
    ['dark-justiciar-mask','暗夜法官面具','Dark Justiciar Mask','grymforge','头盔','罕见','幽暗地域 · 废弃避难所','威吓 +1。','在远古熔炉传送点附近的暗夜法官骸骨上拾取。','战斗词条很弱，主要用于威吓对话；不要与更强的头盔竞争常驻栏位。',['paladin','warlock','barbarian'],'5–8级','Dark_Justiciar_Mask'],
    ['adamantine-longsword','精金长剑','Adamantine Longsword','grymforge','武器','稀有','复仇之炉 · 精金熔炉','+1 多用长剑；攻击物体必定暴击，并无视挥砍抗性（不穿透挥砍免疫）。','把长剑模具和一块秘银矿装入精金熔炉，启动锤击流程后拾取成品。','全图只有两块秘银矿；会与盾牌、护甲、钉头锤和弯刀争夺锻造次数，且必须先取到长剑模具。',['fighter','paladin','ranger'],'5–10级','Adamantine_Longsword'],
    ['adamantine-mace','精金钉头锤','Adamantine Mace','grymforge','武器','稀有','复仇之炉 · 精金熔炉','+1 单手钉头锤；攻击物体必定暴击，并无视钝击抗性（不穿透钝击免疫）。武僧 5 级后的徒手攻击也能受持有时的无视抗性收益。','把钉头锤模具和一块秘银矿装入精金熔炉，启动锤击流程后拾取成品。','全图只有两块秘银矿；若为武僧做副手工具仍需占用一次锻造，且武器本身不适合常规徒手连段主手。',['open-hand','fighter','paladin'],'5–10级','Adamantine_Mace'],
    ['adamantine-scimitar','精金弯刀','Adamantine Scimitar','grymforge','武器','稀有','复仇之炉 · 精金熔炉','+1 灵巧、轻型单手弯刀；攻击物体必定暴击，并无视挥砍抗性（不穿透挥砍免疫）。','把弯刀模具和一块秘银矿装入精金熔炉，启动锤击流程后拾取成品。','全图只有两块秘银矿；作为灵巧双持路线的选择会直接放弃同矿的精金护甲或盾牌。',['rogue','ranger','bard'],'5–10级','Adamantine_Scimitar'],
    ['intransigent-warhammer','不屈战锤','Intransigent Warhammer','grymforge','武器','罕见','幽暗地域 → 复仇之炉首航的灰矮人小艇','击杀敌对目标或用此锤打出暴击后，会使附近敌人进行 DC 14 敏捷豁免，失败则倒地；只影响敌人。','从衰败村落首次乘灰矮人小艇前往复仇之炉时，打开船上的防水箱取得。','必须在首次登船时搜查防水箱；抵达复仇之炉后小艇不会作为可回访宝箱保留，倒地效果也只由本锤攻击触发。',['fighter','paladin','barbarian'],'5–8级','Intransigent_Warhammer'],
    ['merregon-halberd','魔裔军团戟','Merregon Halberd','grymforge','武器','罕见','复仇之炉 · 地狱野猪走廊','+1 双手戟，攻击距离 2.5 米；是早期长柄武器的稳定过渡选项。','击败或缴械地狱野猪走廊的魔裔军团士兵后拾取；崩塌岛附近也有散落副本。','走廊内的地狱野猪与魔鬼士兵会造成混战压力；作为第一章过渡武器，后续应与更高词条长柄武器比较。',['fighter','paladin','barbarian'],'5–7级','Merregon_Halberd'],
    ['firestoker','火焰拨弄者','Firestoker','grymforge','武器','罕见','复仇之炉 · 地狱野猪寝室','手弩攻击燃烧目标时额外造成 1d4 武器伤害，适合稳定附加燃烧的副手远程位。','在地狱野猪寝室的华丽箱中取得。','寝室有守卫与敌对风险；额外伤害要求目标已燃烧，未准备火焰来源时只是无附魔手弩。',['rogue','ranger','bard'],'5–8级','Firestoker'],
    ['dark-justiciar-mail','暗夜法官链甲','Dark Justiciar Mail','grymforge','中甲','罕见','复仇之炉 · 远古符文阵北','AC 13 + 敏捷（最高 +2）；处于阴影遮蔽时，被近战命中会对攻击者反伤 1d4 黯蚀。','从远古符文阵北侧的骷髅拾取；远古熔炉南侧骷髅也有一件。','需要中甲熟练，且反伤只在阴影遮蔽并被近战命中时生效；明亮或远程战斗价值会显著降低。',['fighter','paladin','cleric'],'5–8级','Dark_Justiciar_Mail'],
    ['callarduran-fetish','卡拉杜兰·柔手护符','Fetish of Callarduran Smoothhands','grymforge','戒指','稀有','复仇之炉 · 被灰矮人投湖的深侏儒','每次长休可施放一次隐形术，提供侦察、脱战或开战前站位工具。','灰矮人准备把深侏儒尸体投入湖中时，协助搬运并在投入前搜取；也可完成感知后以欺瞒或巧手检定取得。','直接谈话路线需通过感知与欺瞒／巧手检定；错过投湖现场后要先处理灰矮人或从尸体取得。',['rogue','ranger','wizard'],'5–10级','Fetish_of_Callarduran_Smoothhands'],
    ['cap-of-wrath','愤怒之帽','Cap of Wrath','grymforge','头盔','稀有','复仇之炉 · 灰矮人瑟德','战斗中以不高于 50% 生命开始回合时获得怒意。','击败或偷取灰矮人瑟德后搜取。','实测怒意只会持续 1 回合而非描述的 2 回合；低生命触发本身风险高，不适合把残血作为常规输出策略。',['barbarian','fighter','monk'],'5–8级','Cap_of_Wrath'],
    ['armour-uninhibited-kushigo','库希戈不羁护甲','Armour of Uninhibited Kushigo','grymforge','服装','罕见','复仇之炉 · 瑟林中士','稳心防御生效时，敌人攻击落空可消耗反应进行一次徒手反击。','完成“寻找失落的靴子”并把靴子交还瑟林中士后选择此奖励。','与支撑指环是同一任务的互斥二选一；只能由有稳心防御与徒手攻击的武僧稳定发挥。',['open-hand','shadow','drunken'],'5–9级','Armour_of_Uninhibited_Kushigo'],
    ['bracing-band','支撑指环','Bracing Band','grymforge','戒指','罕见','复仇之炉 · 瑟林中士','推撞敌人后直到下回合获得 +1 AC；击退、拉拽和推撞类效果均可触发，且每回合最多一层。','完成“寻找失落的靴子”并把靴子交还瑟林中士后选择此奖励。','与库希戈不羁护甲是同一任务的互斥二选一；需要主动推撞，戒指栏竞争也很高。',['open-hand','fighter','warlock'],'5–9级','Bracing_Band'],
    ['ring-absolute-force','至上真神之力戒指','Ring of Absolute Force','grymforge','戒指','罕见','复仇之炉 · 瑟林中士','每短休可施放一次雷鸣波；佩戴者有至上真神烙印时，雷鸣法术与攻击额外造成 1 点雷鸣伤害。','击败或偷取瑟林中士后取得。','雷鸣增伤需要烙印且角色必须本来就造成雷鸣伤害；荣誉模式下部分法术互动不同，不能把它当作无条件泛用增伤。',['tempest','fighter','warlock'],'5–9级','Ring_of_Absolute_Force'],
    ['deep-delver','深潜者','Deep Delver','grymforge','武器','罕见','复仇之炉 · 灰矮人布里斯瓦','单手战镐命中施加破碎，适合针对脆弱构件或需要降低钝击／穿刺抗性的目标。','击败、偷取或让布里斯瓦在战斗后掉落后取得。','无附魔且需要进入布里斯瓦相关战斗或偷窃路线；破碎的实际收益取决于队伍后续伤害类型。',['fighter','paladin','barbarian'],'5–7级','Deep_Delver'],
    ['sharran-crossbow','莎尔十字弩','Sharran Crossbow','grymforge','武器','罕见','复仇之炉 · 射箭靶后方的上锁箱','+1 轻十字弩，功能上与普通 +1 轻十字弩相同。','在两面射箭靶后方的上锁箱中取得。','拾取后需通过 DC 10 历史检定才会识别其莎尔名称；数值没有独有词条，不要误当成暗夜流派专属装备。',['rogue','ranger','fighter'],'5–6级','Sharran_Crossbow'],
    ['wondrous-gloves','奇妙手套','Wondrous Gloves','grymforge','手套','稀有','复仇之炉 · 竖琴手藏匿处附近','AC +1；拥有吟游激励的角色额外获得 1 次吟游激励。','击败竖琴手藏匿处附近的拟态怪后搜取。','拟态怪会以箱子形态伏击；脱下手套会使已给队友的额外吟游激励次数消失，战斗中不要随意换装。',['bard'],'5–10级','Wondrous_Gloves'],
    ['real-sparky-sparkswall','真正的火花壁垒','The Real Sparky Sparkswall','grymforge','盾牌','罕见','复仇之炉 · 上锁且有陷阱的箱','消耗 3 点闪电充能释放闪电灵光，伤害并电击附近敌人；每长休一次。','开启复仇之炉西北、竖琴手藏匿处附近的上锁且有陷阱的箱。','需要盾牌熟练；未积累 3 点闪电充能无法发动，且陷阱箱应先解除或远程处理。',['tempest','wizard','cleric'],'5–8级','The_Real_Sparky_Sparkswall'],
    ['sword-screams','尖啸之剑','Sword of Screams','grymforge','武器','罕见','复仇之炉 · 尼讷','灵巧单手刺剑，攻击额外造成 1d4 心灵伤害。','击败尼讷后从尸体拾取。','尼讷被坍塌困住的事件会因长休或推进其他区域而结算；若想拿剑，应先处理坍塌并在战后搜尸。',['rogue','bard','ranger'],'5–8级','Sword_of_Screams'],
    ['githyanki-shortsword','吉斯洋基短剑 +1','Githyanki Shortsword (+1)','creche-yllk','武器','罕见','伊雷柯养育间 · 多名吉斯洋基携带','+1 灵巧、轻型单手短剑，可直接用于双持。','在养育间与吉斯洋基战斗后从尸体取得。','没有独特词条，只是 +1 过渡武器；若维持养育间中立或不搜尸，无法稳定取得。',['rogue','ranger','bard'],'5–7级','Githyanki_Shortsword_(+1)'],
    ['aberration-hunters-amulet','异怪猎人护符','Aberration Hunters\' Amulet','creche-yllk','护符','罕见','伊雷柯养育间 · 医务室西侧的斯托努戈斯医生','每短休一次，使自己对异怪的攻击检定获得优势 3 回合；吉斯洋基佩戴时智力豁免有优势。','击败或偷取医务室西侧的斯托努戈斯医生后取得。','异怪攻击你劣势的被动目前存在漏洞而不生效；非吉斯洋基只应把它当作针对异怪的短休主动技能。',['fighter','ranger','rogue'],'5–8级','Aberration_Hunters\'_Amulet'],
    ['varsh-kokuu-boots','瓦什·库库之靴','Varsh Ko\'kuu\'s Boots','creche-yllk','鞋履','罕见','伊雷柯养育间 · 孵化所的瓦什·库库','免受强酸地面影响，并获得强酸伤害抗性。','从孵化所的瓦什·库库处购买、偷取或在战斗后取得。','与偷取吉斯洋基蛋的任务场景相邻；处理蛋的分支和对方敌对状态会影响安全取得路线。',['fighter','barbarian','ranger'],'5–8级','Varsh_Ko\'kuu\'s_Boots'],
    ['hoarfrost-boots','霜冻之靴','Hoarfrost Boots','creche-yllk','鞋履','罕见','伊雷柯养育间 · 审判官室展示柜','穿越冰面不会倒地。','在审判官室的展示柜内取得。','展示柜位于养育间后段；推进关键剧情或敌对后仍应优先搜取，避免在后续传送离开前漏掉。',['wizard','sorcerer','fighter'],'6–10级','Hoarfrost_Boots'],
    ['mages-friend','法师之友','Mage\'s Friend','underdark','戒指','罕见','幽暗地域 · 奥术高塔三层床脚箱','奥秘 +1、宗教 +1，适合探索期间的知识检定换装。','在奥术高塔三层床脚的箱子中取得。','只提高知识技能，战斗中戒指栏价值很低；不要长期占用高价值输出或防御戒指。',['wizard','cleric','bard'],'4–7级','Mage\'s_Friend'],
    ['mystras-grace','密斯特拉的恩典','Mystra\'s Grace','underdark','鞋履','罕见','幽暗地域 · 奥术高塔三层北侧阳台','可无限施放羽落术，方便垂直探索与安全跳跃。','从三层北侧阳台的平凡箱取出；拿出物品或把箱子带入反魔法场可显露真身。','平凡箱会伪装内容物，遗漏箱子就会错过；鞋履栏后期竞争强，通常作为探索换装。',['wizard','rogue','ranger'],'4–8级','Mystra\'s_Grace'],
    ['light-creation','造物之光','Light of Creation','underdark','武器','罕见','幽暗地域 · 奥术高塔顶层伯纳德','+1 长柄武器，额外造成 1d6 闪电伤害、攻击距离 2.5 米。','击败伯纳德后从尸体取得。','每次成功攻击都有概率使持有者震慑；第一章不能可靠消除副作用，除非接受该风险不建议常驻。',['fighter','paladin','barbarian'],'4–7级','Light_of_Creation'],
    ['larethians-wrath','拉瑞斯安之怒','Larethian\'s Wrath','mountain-pass','武器','稀有','罗斯莫恩修道院小径 · 埃丝特女士','+1 灵巧多用长剑；每短休可用剃刀旋风攻击范围内所有敌人。','向埃丝特女士购买。','依赖商店存活与友好关系；剃刀旋风虽不限制目标数，但对未命中目标仍只造成半武器伤害。',['rogue','ranger','bard'],'5–10级','Larethian\'s_Wrath'],
    ['witchbreaker','破巫者','Witchbreaker','mountain-pass','武器','罕见','罗斯莫恩修道院小径 · 埃丝特女士','+1 战斧；对维持专注的目标攻击获得优势，并每短休可用“安静点”尝试沉默目标。','向埃丝特女士购买。','商店路线会受埃丝特女士敌对影响；对专注敌人有价值，非专注战斗只是普通 +1 战斧。',['fighter','paladin','barbarian'],'5–8级','Witchbreaker'],
    ['amulet-branding','烙印护符','Amulet of Branding','mountain-pass','护符','稀有','罗斯莫恩修道院小径 · 埃丝特女士','每长休可用附赠动作施放“标记弱者”，使目标在下一次伤害实例中获得易伤。','向埃丝特女士购买。','每天仅一次且消耗附赠动作；应在爆发回合前使用，不能把它当作持续易伤来源。',['paladin','fighter','rogue'],'5–9级','Amulet_of_Branding'],
    ['circlet-psionic-revenge','灵能复仇头环','Circlet of Psionic Revenge','creche-yllk','头盔','稀有','伊雷柯养育间 · 审判官瓦尔加兹','成功通过豁免时，对迫使你豁免的敌人造成 1d4 心灵伤害；吉斯洋基另获智力、感知、魅力豁免 +1。','击败审判官瓦尔加兹后搜取。','非吉斯洋基没有豁免加值；反伤不算佩戴者造成的伤害，不能触发部分“造成伤害时”装备联动。',['fighter','wizard','sorcerer'],'6–10级','Circlet_of_Psionic_Revenge'],
    ['cacophony','嘈杂','Cacophony','mountain-pass','武器','稀有','罗斯莫恩修道院小径 · 埃丝特女士','+1 法杖，攻击额外造成 1d4 雷鸣伤害，每短休可施放一次雷鸣重击。','向埃丝特女士购买。','雷鸣重击仍占用行动与附赠动作；法杖主手与施法法杖、盾牌路线存在栏位取舍。',['tempest','paladin','fighter'],'5–9级','Cacophony'],
    ['hoppy','欢跳','Hoppy','mountain-pass','武器','罕见','罗斯莫恩修道院小径 · 埃丝特女士','+1 战镐；每短休可用复苏打击，命中敌人同时治疗自己。','向埃丝特女士购买。','治疗量取决于命中，且商店关闭就无法购买；强度主要是过渡自疗，不替代专职治疗。',['fighter','paladin','barbarian'],'5–8级','Hoppy'],
    ['boots-elemental-momentum','元素动量之靴','Boots of Elemental Momentum','mountain-pass','鞋履','罕见','罗斯莫恩修道院小径 · 埃丝特女士','运动 +1；用法术或戏法造成元素伤害后获得 2 回合动量。','向埃丝特女士购买。','需要中甲熟练；动量会在束缚、失能、倒地或减速时移除，不能按满层移动速度估算。',['tempest','wizard','sorcerer'],'5–9级','Boots_of_Elemental_Momentum'],
    ['ceremonial-battleaxe','仪式战斧','Ceremonial Battleaxe','mountain-pass','武器','罕见','罗斯莫恩修道院 · 宿舍','+1 多用战斧；也是黎明大师徽记谜题的祭品。','在受信仰守卫保护的宿舍取得。','拾取会使信仰守卫敌对；放到正确基座才能推进徽记谜题。',['fighter','paladin','barbarian'],'5–7级','Ceremonial_Battleaxe'],
    ['ceremonial-mace','仪式钉头锤','Ceremonial Mace','mountain-pass','武器','罕见','罗斯莫恩修道院 · 火酒仓库','+1 单手钉头锤；用于黎明大师徽记谜题。','从火酒仓库的狗头人掠夺者身上取得。','狗头人和火酒桶可引发战斗或爆炸；解谜前别卖掉或丢弃。',['cleric','paladin','fighter'],'5–7级','Ceremonial_Mace'],
    ['ceremonial-longsword','仪式长剑','Ceremonial Longsword','mountain-pass','武器','罕见','罗斯莫恩修道院 · 黎明大师纪念堂西北基座','+1 多用长剑；用于黎明大师徽记谜题。','从黎明大师纪念堂西北基座拾取。','把武器移走只是解谜流程的一部分；要按对应神祇基座放回正确武器。',['fighter','paladin','ranger'],'5–7级','Ceremonial_Longsword'],
    ['ceremonial-warhammer','仪式战锤','Ceremonial Warhammer','mountain-pass','武器','罕见','罗斯莫恩修道院屋顶 · 巨鹰巢','+1 多用战锤；用于黎明大师徽记谜题。','在屋顶巨鹰巢内取得。','被巨鹰发现拿取会使其敌对；建议潜行、说服或准备战斗。',['fighter','paladin','cleric'],'5–7级','Ceremonial_Warhammer'],
    ['gloves-baneful-striking','祸害打击手套','Gloves of Baneful Striking','mountain-pass','手套','罕见','罗斯莫恩修道院小径 · 埃丝特女士','武器攻击造成伤害后，目标对佩戴者下一次法术豁免承受 -1d4 减值。','向埃丝特女士购买。','效果要先用武器命中、再接下一次法术；并非每个施法回合都稳定触发。',['fighter','paladin','ranger'],'5–9级','Gloves_of_Baneful_Striking'],
    ['gloves-cinder-sizzle','余烬与嘶鸣手套','Gloves of Cinder and Sizzle','mountain-pass','手套','稀有','罗斯莫恩修道院小径 · 埃丝特女士','徒手攻击额外造成 1d4 火焰伤害；每次长休可施放一次 3 环灼热射线。','向埃丝特女士购买。','灼热射线每次长休仅一次；徒手火焰伤害不作用于投掷武器，也不会在荒野形态触发。',['monk','fighter','rogue'],'5–10级','Gloves_of_Cinder_and_Sizzle']
  ];
  globalThis.ACT_ONE_GEAR_BASELINE={source:wiki('List_of_magic_items_in_Act_One'),sourceRevision:420557,checkedAt:'2026-09-20',candidates:candidates,extraGear:extra};

  var bonusSource=wiki('Permanent_bonus_table');
  globalThis.ACT_ONE_PERMANENT_REWARD_BASELINE={source:bonusSource,sourceRevision:421762,checkedAt:'2026-09-20',candidates:[
    {id:'auntie-ethels-hair',name:'鬼婆头皮',nameEn:"Auntie Ethel's Hair",status:'included',effect:'一项自选属性永久 +1，可超过 20。',condition:'把埃塞尔压到低生命并接受她以头皮换命。',missRisk:'与杀死鬼婆的结局互斥；对话必须实际触发并完成。',source:wiki('Auntie_Ethel%27s_Hair')},
    {id:'awakened',name:'觉醒',nameEn:'Awakened',status:'included',effect:'夺心魔能力改为附赠动作。',condition:'主角进入扎伊斯克并连续通过三次豁免，直到装置爆炸。',missRisk:'任一失败会施加永久属性减值；由莱埃泽尔进入时检定更难。',source:wiki('Awakened')},
    {id:'boooals-benediction',name:'布阿尔的祝福',nameEn:"BOOOAL's Benediction",status:'included',effect:'攻击流血目标时获得优势。',condition:'在溃烂洞穴牺牲一名真实同伴。',missRisk:'与保全同伴互斥；杀光洞穴鱼人后效果停止。',source:wiki('BOOOAL%27s_Benediction')},
    {id:'brand-absolute',name:'至上真神烙印',nameEn:'Brand of the Absolute',status:'included',effect:'启用至上真神装备的条件词条并解锁对话。',condition:'同意迦特或沃洛克·格里兹烙印指定角色。',missRisk:'角色扮演与同伴态度有代价；装备词条通常只认被烙印者。',source:wiki('Brand_of_the_Absolute')},
    {id:'scratch-familiar',name:'召唤使魔：挠挠',nameEn:'Find Familiar: Scratch',status:'included',effect:'可召唤挠挠协助探索与寻找隐藏物。',condition:'让挠挠记住气味入营，之后投出它带来的球。',missRisk:'挠挠死亡会永久关闭；球必须保留在队伍物品中。',source:wiki('Find_Familiar:_Scratch')},
    {id:'cheeky-quasit',name:'召唤使魔：淘气夸赛魔',nameEn:'Find Familiar: Cheeky Quasit',status:'included',effect:'永久召唤铲子／篮子／叉子。',condition:'取得独特卷轴，由法师学习或按条件与召唤物对话。',missRisk:'错误对话、职业或施法者选择可能只得到一次性召唤。',source:wiki('Shovel_(familiar)')},
    {id:'instrument-proficiency',name:'乐器熟练',nameEn:'Musical Instrument Proficiency',status:'included',effect:'永久获得演奏多种乐器的熟练。',condition:'协助阿尔菲拉作曲并通过两次表演检定。',missRisk:'吟游诗人已有该熟练，不会得到额外叠加收益。',source:wiki('Musical_Instrument_Proficiency')},
    {id:'loviatars-love',name:'洛维塔之爱',nameEn:"Loviatar's Love",status:'included',effect:'生命低于 30% 时攻击与感知豁免 +2。',condition:'在破碎圣所完整接受阿布狄拉克仪式并表现良好。',missRisk:'角色死亡再复活会永久失去。',source:wiki('Loviatar%27s_Love')},
    {id:'necromancy-thay',name:'塞伊死灵法术知识',nameEn:'Necromancy of Thay',status:'included',effect:'获得禁忌知识与每日亡者交谈。',condition:'嵌入暗紫水晶并让同一角色翻完三页。',missRisk:'书会绑定阅读者；销毁或交给另一角色与自己阅读互斥。',source:wiki('Necromancy_of_Thay')},
    {id:'paid-the-price',name:'付出代价',nameEn:'Paid the Price',status:'included',effect:'威吓 +1，但察觉与攻击鬼婆时劣势并改变眼睛外观。',condition:'接受埃塞尔尝试取出寄生虫。',missRisk:'与沃罗义眼互斥在同一角色眼部，且负面效果永久。',source:wiki('Paid_the_Price')},
    {id:'survival-instinct',name:'生存本能',nameEn:'Survival Instinct',status:'included',effect:'获得独特夺心魔能力，可防止目标被击倒。',condition:'完成奥梅鲁姆调查寄生虫实验。',missRisk:'必须喝下药剂并完成后续对话，不能只到达奥术高塔。',source:wiki('Survival_Instinct')},
    {id:'volos-ersatz-eye',name:'沃罗的义眼',nameEn:"Volo's Ersatz Eye",status:'included',effect:'永久获得识破隐形，并改变右眼外观。',condition:'救出沃罗后在营地同意完成整套手术。',missRisk:'手术不可逆，且与鬼婆眼部交易存在角色层面的互斥。',source:wiki('Volo%27s_Ersatz_Eye')}
  ]};
}());
