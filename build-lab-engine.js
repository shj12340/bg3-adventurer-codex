'use strict';
(function () {
  var DIMENSIONS = ['pressure', 'survival', 'actionEconomy', 'smoothness', 'resourceEfficiency', 'gearDependence'];
  var RULE_CATEGORIES = [
    { prefix: /^专注槽[：:]/, ids: ['concentration'] },
    { prefix: /^动作与附赠动作[：:]/, ids: ['action', 'bonusAction'] },
    { prefix: /^反应[：:]/, ids: ['reaction'] },
    { prefix: /^装备槽位[：:]/, ids: ['gearSlot'] },
    { prefix: /^章节[：:]/, ids: ['actAvailability'] },
    { prefix: /^难度[：:]/, ids: ['difficulty'] },
    { prefix: /^潮湿／闪电[：:]/, ids: ['action'] }
  ];

  function normalizeBuildLabInput(raw) {
    var value = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
    function own(key) {
      return Object.prototype.hasOwnProperty.call(value, key) ? value[key] : undefined;
    }
    var classIds = CLASS_LIBRARY.map(function (item) { return item.id; });
    var mechanicIds = BUILD_MECHANICS.map(function (item) { return item.id; });
    var requested = Array.isArray(own('mechanicIds')) ? own('mechanicIds') : [];
    return {
      classId: classIds.includes(own('classId')) ? own('classId') : '',
      goalId: BUILD_LAB_GOAL_IDS.includes(own('goalId')) ? own('goalId') : 'control',
      mechanicIds: Array.from(new Set(requested.filter(function (id) { return mechanicIds.includes(id); }))),
      act: [1, 2, 3, 12].includes(own('act')) ? own('act') : 12,
      difficulty: ['balanced', 'tactician', 'honour'].includes(own('difficulty')) ? own('difficulty') : 'tactician',
      exploitPolicy: ['off', 'common'].includes(own('exploitPolicy')) ? own('exploitPolicy') : 'off'
    };
  }

  function stars(value) {
    return Number.isFinite(value) ? Math.max(1, Math.min(5, Math.round(value * 2) / 2)) : 1;
  }

  function findBuildConflicts(archetype, rawInput) {
    var input = normalizeBuildLabInput(rawInput), conflicts = [];
    var ruleIds = ['concentration', 'action', 'bonusAction', 'reaction', 'gearSlot', 'actAvailability', 'difficulty'];
    function add(severity, ruleId, message, source) {
      conflicts.push({ severity: severity, ruleId: ruleId, message: message, source: source });
    }
    (archetype.conflictRules || []).forEach(function (rule) {
      if (typeof rule === 'string') {
        // The approved data has named prose categories, not simultaneous-action
        // declarations. Preserve them as warnings; preferences never imply a block.
        RULE_CATEGORIES.forEach(function (category) {
          if (!category.prefix.test(rule)) return;
          category.ids.forEach(function (ruleId) {
            add('warning', ruleId, rule, archetype.sources[0]);
          });
        });
        return;
      }
      // Explicit rule fixtures use the same four output fields plus an optional
      // when:{acts,difficulties,mechanicIds}. All specified conditions must match.
      // No such blocking declarations are invented for the approved live data.
      if (!rule || !ruleIds.includes(rule.ruleId) || !['blocking', 'warning'].includes(rule.severity) ||
          typeof rule.message !== 'string' || !rule.message.trim() || typeof rule.source !== 'string' || !rule.source.trim()) return;
      var when = rule.when || {};
      if (when.acts && !when.acts.includes(input.act)) return;
      if (when.difficulties && !when.difficulties.includes(input.difficulty)) return;
      if (when.mechanicIds && !when.mechanicIds.every(function (id) { return input.mechanicIds.includes(id); })) return;
      add(rule.severity, rule.ruleId, rule.message, rule.source);
    });
    if (input.difficulty === 'honour' && archetype.honourAdjustments) {
      add('warning', 'difficulty', archetype.honourAdjustments, archetype.sources[0]);
    }
    (archetype.gearPlan.currentAct || []).forEach(function (gear) {
      if (input.act === 12 || gear.act <= input.act) return;
      var available = (gear.alternatives || []).filter(function (item) {
        return item.act <= input.act && item.name && item.source;
      });
      var replacement = available.map(function (item) {
        return item.name + '（' + item.reason + '；来源：' + item.source + '）';
      }).join('；');
      add('warning', 'actAvailability', gear.name + ' 在第 ' + gear.act + ' 章才可取得，当前第 ' + input.act +
        ' 章不计该装备收益。' + gear.alternative + (replacement ? ' 已核实替代：' + replacement : ''), gear.source);
    });
    return conflicts;
  }

  function scoreBuildArchetype(archetype, rawInput) {
    var input = normalizeBuildLabInput(rawInput);
    // Task 2 has no independent Act 2 rating. Never interpolate future gear or
    // level benefits into it; the conservative early assessment stays visible.
    var context = input.act === 3 ? 'endgame' : input.act === 12 ? 'wholeGame' : 'current';
    var selected = archetype.contextScores[context];
    var score = {
      current: stars(selected.stars),
      wholeGame: stars(archetype.contextScores.wholeGame.stars),
      endgame: stars(archetype.contextScores.endgame.stars),
      context: context,
      dimensions: {},
      reasons: []
    };
    DIMENSIONS.forEach(function (dimension) {
      score.dimensions[dimension] = { score: stars(selected[dimension].score), reason: selected[dimension].reason };
      score.reasons.push(selected[dimension].reason);
    });
    if (archetype.scoreBasis) score.reasons.push(archetype.scoreBasis[context]);
    if (input.act === 2) score.reasons.push('第二章没有独立的已核实评分；当前沿用第一章角色 5 级评分，装备请按第二章实际取得情况和已核实替代方案选择。');
    // All approved ratings already use Honour rules. The authored adjustment is
    // explanatory text, not a numeric delta: applying another penalty would
    // double-count it, and non-Honour mechanics must not create invented bonuses.
    if (archetype.honourAdjustments) score.reasons.push(archetype.honourAdjustments);
    score.normal = { current: score.current, wholeGame: score.wholeGame, endgame: score.endgame };
    return score;
  }

  function exploitCards(archetype, input, context) {
    if (input.exploitPolicy !== 'common') return [];
    return archetype.exploitComparisons.flatMap(function (comparison) {
      var policy = EXPLOIT_POLICIES.find(function (item) { return item.id === comparison.policyId && item.policy === 'common'; });
      if (!policy) return [];
      var assessment = comparison.status === 'compared' && (comparison.contexts || []).find(function (item) { return item.context === context; });
      var available = !!assessment && policy.assessmentStatus === 'verified' && (input.difficulty !== 'honour' || policy.honourStatus === 'available');
      var assessmentLabels = {verified:'已核实，可进行有界比较',unverified:'尚未核实，不发布利用星级',excluded:'评估范围外，不计入单角色评分'};
      var honourLabels = {available:'荣誉模式：已核实可用',unavailable:'荣誉模式：已确认不可用',unverified:'荣誉模式：尚未核实', 'not-assessed':'荣誉模式：未评估（范围外）'};
      return [{
        policyId: policy.id,
        status: comparison.status,
        context: context,
        normalStars: assessment ? stars(assessment.normalStars) : null,
        commonStars: assessment ? stars(assessment.commonStars) : null,
        effectiveStars: available ? stars(assessment.commonStars) : null,
        available: available,
        normalRouteAlternative: policy.normalRouteAlternative,
        honourAvailable: policy.honourAvailable,
        assessmentStatus: policy.assessmentStatus,
        assessmentLabel: assessmentLabels[policy.assessmentStatus],
        honourStatus: policy.honourStatus,
        honourLabel: honourLabels[policy.honourStatus],
        honourReason: policy.honourReason,
        procedure: (policy.procedure || []).slice(),
        benefit: policy.benefit || '',
        risks: (policy.risks || []).slice(),
        version: policy.version,
        checkedAt: policy.checkedAt,
        reason: comparison.reason + (assessment ? ' ' + assessment.reason : ''),
        sources: policy.sources.slice()
      }];
    });
  }

  function recommendation(archetype, input) {
    var score = scoreBuildArchetype(archetype, input);
    var conflicts = findBuildConflicts(archetype, input);
    var cards = exploitCards(archetype, input, score.context);
    var decisions = LEVEL_DECISIONS.find(function (item) { return item.id === archetype.levelDecisionId && item.archetypeId === archetype.id; });
    var warnings = conflicts.map(function (item) { return item.message; });
    if (input.act === 2) warnings.push(score.reasons.find(function (reason) { return reason.startsWith('第二章没有独立'); }));
    if (score.current <= 2) warnings.push(archetype.lowStarRemedy);
    var sources = archetype.sources.slice();
    conflicts.forEach(function (item) { sources.push(item.source); });
    archetype.mechanicIds.forEach(function (id) {
      var mechanic = BUILD_MECHANICS.find(function (item) { return item.id === id; });
      if (mechanic) sources = sources.concat(mechanic.sources);
    });
    archetype.gearPlan.currentAct.forEach(function (gear) {
      sources.push(gear.source);
      (gear.alternatives || []).forEach(function (item) { sources.push(item.source); });
    });
    if (decisions) decisions.cards.forEach(function (card) { sources = sources.concat(card.sources); });
    cards.forEach(function (card) { sources = sources.concat(card.sources); });
    return {
      archetype: archetype,
      score: score,
      conflicts: conflicts,
      visibleExploitCards: cards,
      levelDecisions: decisions ? decisions.cards : [],
      warnings: Array.from(new Set(warnings)),
      sources: Array.from(new Set(sources))
    };
  }

  function generateBuildRecommendations(rawInput) {
    var input = normalizeBuildLabInput(rawInput);
    var ranked = BUILD_ARCHETYPES.filter(function (archetype) {
      return (!input.classId || archetype.primaryClassId === input.classId) && archetype.goalIds.includes(input.goalId);
    }).map(function (archetype) {
      return {
        matches: input.mechanicIds.filter(function (id) { return archetype.mechanicIds.includes(id); }).length,
        result: recommendation(archetype, input)
      };
    }).sort(function (a, b) {
      var order = b.matches - a.matches || b.result.score.current - a.result.score.current ||
        b.result.score.wholeGame - a.result.score.wholeGame;
      if (order) return order;
      // Canonical IDs, not locale-dependent names or source array order, break ties.
      return a.result.archetype.id < b.result.archetype.id ? -1 : a.result.archetype.id > b.result.archetype.id ? 1 : 0;
    });
    var results = ranked.filter(function (item) {
      return !item.result.conflicts.some(function (conflict) { return conflict.severity === 'blocking'; });
    }).slice(0, 3).map(function (item) { return item.result; });
    if (!results.length && ranked.length) {
      var fallback = ranked[0].result;
      var reason = '所有符合职业与目标的路线均有阻塞冲突；以下仅用于查看问题和修复方案，解除阻塞前不能按正常路线执行。';
      // One star is an explicit unavailable-plan fallback, not a game-power
      // adjustment. The separately labelled normal ratings remain inspectable.
      ['current', 'wholeGame', 'endgame'].forEach(function (key) { fallback.score[key] = 1; });
      DIMENSIONS.forEach(function (key) {
        fallback.score.dimensions[key] = {
          score: 1,
          reason: reason + ' ' + fallback.score.dimensions[key].reason
        };
      });
      fallback.score.reasons.unshift(reason);
      fallback.warnings = Array.from(new Set([reason].concat(fallback.warnings, fallback.archetype.lowStarRemedy)));
      fallback.visibleExploitCards = [];
      results = [fallback];
    }
    // The data is read-only input; consumers can safely annotate their own result.
    return JSON.parse(JSON.stringify(results));
  }

  globalThis.normalizeBuildLabInput = normalizeBuildLabInput;
  globalThis.findBuildConflicts = findBuildConflicts;
  globalThis.scoreBuildArchetype = scoreBuildArchetype;
  globalThis.generateBuildRecommendations = generateBuildRecommendations;
}());
