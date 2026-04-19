const TAROT_CARDS = [
  // 大阿尔卡纳 22张
  { id: "major_00", name: "愚者", arcana: "major", number: 0,
    keywords_up: ["新开始","冒险","自由","纯真"], keywords_rev: ["鲁莽","犹豫","风险","迷失"],
    meaning_up: { general: "新的旅程即将开始，以开放的心态迎接未知，充满无限可能。", love: "感情中带来新鲜感与活力，勇于尝试新的关系。", career: "职业上迎来新机遇，勇于跨出舒适区。" },
    meaning_rev: { general: "行事鲁莽，缺乏计划，需要停下来思考。", love: "感情中不够成熟，逃避承诺与责任。", career: "职业决策草率，需谨慎评估风险。" }
  },
  { id: "major_01", name: "魔术师", arcana: "major", number: 1,
    keywords_up: ["意志力","技能","创造","行动"], keywords_rev: ["欺骗","操控","潜力未发挥","混乱"],
    meaning_up: { general: "你拥有实现目标所需的一切工具与能力，是时候付诸行动。", love: "主动出击，展现魅力，感情中掌握主动权。", career: "技能与资源齐备，是开创事业的好时机。" },
    meaning_rev: { general: "能力未被充分发挥，或有欺骗与操控的迹象。", love: "感情中存在欺骗或不真诚的成分。", career: "才能被浪费，或遭遇不诚实的合作者。" }
  },
  { id: "major_02", name: "女祭司", arcana: "major", number: 2,
    keywords_up: ["直觉","神秘","内在智慧","耐心"], keywords_rev: ["秘密","压抑直觉","表面信息","混乱"],
    meaning_up: { general: "倾听内心的声音，答案藏在直觉与潜意识之中。", love: "感情中需要耐心等待，不要急于表白。", career: "依靠直觉与内在智慧做出决策。" },
    meaning_rev: { general: "忽视直觉，被表面信息迷惑，需要向内探索。", love: "感情中有隐藏的秘密或误解。", career: "信息不完整，需要更多调查再做决定。" }
  },
  { id: "major_03", name: "女皇", arcana: "major", number: 3,
    keywords_up: ["丰盛","母性","创造力","自然"], keywords_rev: ["依赖","创意阻塞","过度保护","匮乏"],
    meaning_up: { general: "丰盛与繁荣的能量环绕，创造力旺盛，生活充实。", love: "感情温暖滋养，关系稳定，可能有新生命的讯息。", career: "创意项目蓬勃发展，财务状况良好。" },
    meaning_rev: { general: "创造力受阻，过度依赖他人，需要找回自我价值。", love: "感情中过度依赖或控制，需要建立健康边界。", career: "创意枯竭，财务出现问题。" }
  },
  { id: "major_04", name: "皇帝", arcana: "major", number: 4,
    keywords_up: ["权威","稳定","结构","领导力"], keywords_rev: ["专制","僵化","控制欲","缺乏纪律"],
    meaning_up: { general: "建立秩序与结构，以权威和纪律实现目标。", love: "感情中需要稳定与承诺，建立长久关系。", career: "领导力强，适合管理职位，事业稳固。" },
    meaning_rev: { general: "过于控制或专制，需要学会放手与灵活变通。", love: "感情中控制欲过强，压制对方。", career: "管理方式僵化，或缺乏纪律导致混乱。" }
  },
  { id: "major_05", name: "教皇", arcana: "major", number: 5,
    keywords_up: ["传统","信仰","指导","道德"], keywords_rev: ["叛逆","非传统","质疑权威","个人信仰"],
    meaning_up: { general: "遵循传统智慧，寻求精神指引，尊重既有规范。", love: "传统的感情观，可能涉及婚姻或正式承诺。", career: "遵循行业规范，寻求导师指引。" },
    meaning_rev: { general: "质疑传统，寻找属于自己的道路，打破规则。", love: "不受传统束缚，以自己的方式经营感情。", career: "挑战行业惯例，走非传统路线。" }
  },
  { id: "major_06", name: "恋人", arcana: "major", number: 6,
    keywords_up: ["爱情","选择","和谐","价值观"], keywords_rev: ["失衡","错误选择","价值观冲突","分离"],
    meaning_up: { general: "面临重要选择，需要遵从内心，追求真正的和谐与爱。", love: "深厚的感情连结，灵魂伴侣的相遇，关系和谐。", career: "与工作价值观契合，团队合作愉快。" },
    meaning_rev: { general: "价值观冲突，做出了错误的选择，关系失衡。", love: "感情出现裂痕，价值观不合，可能面临分离。", career: "工作与个人价值观相悖，合作关系紧张。" }
  },
  { id: "major_07", name: "战车", arcana: "major", number: 7,
    keywords_up: ["胜利","意志力","控制","前进"], keywords_rev: ["失控","侵略性","障碍","方向迷失"],
    meaning_up: { general: "以强大的意志力克服障碍，驾驭局势走向胜利。", love: "主动追求，以行动赢得感情，关系向前推进。", career: "克服竞争，以决心和毅力取得成功。" },
    meaning_rev: { general: "失去控制，方向迷失，需要重新找回内在力量。", love: "感情中过于强势或失控，需要调整方向。", career: "遭遇重大阻碍，或行事过于激进。" }
  },
  { id: "major_08", name: "力量", arcana: "major", number: 8,
    keywords_up: ["内在力量","勇气","耐心","慈悲"], keywords_rev: ["软弱","自我怀疑","恐惧","失控"],
    meaning_up: { general: "以温柔与慈悲驾驭内在的野性，真正的力量来自内心。", love: "以耐心和理解经营感情，温柔而坚定。", career: "以内在力量面对挑战，不被压力击倒。" },
    meaning_rev: { general: "内心软弱，被恐惧与自我怀疑所困，需要找回勇气。", love: "感情中缺乏安全感，被恐惧主导。", career: "面对压力时退缩，缺乏自信。" }
  },
  { id: "major_09", name: "隐者", arcana: "major", number: 9,
    keywords_up: ["内省","孤独","智慧","寻求真理"], keywords_rev: ["孤立","拒绝帮助","迷失","封闭"],
    meaning_up: { general: "退入内心，独自寻找智慧与真理，需要安静的反思时间。", love: "感情中需要独处空间，或正在寻找真正的灵魂伴侣。", career: "深入研究，独立工作，寻找职业方向。" },
    meaning_rev: { general: "过度孤立，拒绝外界帮助，陷入迷失与封闭。", love: "因过度封闭而错失感情机会，需要向外敞开心扉。", career: "过于孤立，需要寻求合作与外部支持。" }
  },
  { id: "major_10", name: "命运之轮", arcana: "major", number: 10,
    keywords_up: ["命运","转机","循环","好运"], keywords_rev: ["厄运","抗拒变化","命运不顺","停滞"],
    meaning_up: { general: "命运的轮盘转动，带来转机与好运，顺势而为。", love: "感情迎来转折点，命中注定的相遇或关系升温。", career: "事业迎来好运，抓住机遇乘势而上。" },
    meaning_rev: { general: "运势低迷，抗拒变化只会加重困境，需要接受循环。", love: "感情遭遇挫折，需要耐心等待时机转变。", career: "事业运势不佳，需要调整策略等待时机。" }
  },
  { id: "major_11", name: "正义", arcana: "major", number: 11,
    keywords_up: ["公正","真相","因果","平衡"], keywords_rev: ["不公正","逃避责任","失衡","偏见"],
    meaning_up: { general: "公正与真相终将显现，因果法则运作，做出公平的判断。", love: "感情中需要诚实与公平，双方权利平等。", career: "公平的评价与回报，法律事务顺利。" },
    meaning_rev: { general: "遭遇不公正，或自己逃避责任，需要面对真相。", love: "感情中存在不公平，一方付出过多。", career: "遭遇不公平对待，或法律事务出现问题。" }
  },
  { id: "major_12", name: "倒吊人", arcana: "major", number: 12,
    keywords_up: ["暂停","牺牲","新视角","放手"], keywords_rev: ["拖延","抗拒牺牲","无谓牺牲","停滞"],
    meaning_up: { general: "主动暂停，从不同角度看待问题，放手才能获得新的领悟。", love: "感情中需要暂停思考，或为关系做出牺牲。", career: "暂时搁置计划，换个角度重新审视职业方向。" },
    meaning_rev: { general: "无谓的拖延与牺牲，抗拒改变只会延长困境。", love: "感情中的牺牲没有得到应有的回报。", career: "拖延决策，浪费时间在无意义的等待中。" }
  },
  { id: "major_13", name: "死神", arcana: "major", number: 13,
    keywords_up: ["转变","结束","蜕变","新生"], keywords_rev: ["抗拒改变","停滞","腐朽","无法放手"],
    meaning_up: { general: "一个阶段的结束意味着新生的开始，拥抱转变与蜕变。", love: "感情进入新阶段，旧的模式需要终结，迎接新的开始。", career: "职业转型，旧工作结束，新机遇即将到来。" },
    meaning_rev: { general: "抗拒必要的改变，执着于过去，导致停滞不前。", love: "无法放下过去的感情，阻碍新关系的发展。", career: "抗拒职业转型，困在不适合的工作中。" }
  },
  { id: "major_14", name: "节制", arcana: "major", number: 14,
    keywords_up: ["平衡","耐心","调和","中庸"], keywords_rev: ["失衡","过度","缺乏耐心","不和谐"],
    meaning_up: { general: "以耐心与智慧调和各方力量，找到生命的平衡之道。", love: "感情中保持平衡，以耐心和理解滋养关系。", career: "工作与生活平衡，以稳健的步伐推进目标。" },
    meaning_rev: { general: "生活失衡，过度放纵或极端，需要找回中庸之道。", love: "感情中失衡，一方过度付出或索取。", career: "工作过度或完全懈怠，需要调整节奏。" }
  },
  { id: "major_15", name: "恶魔", arcana: "major", number: 15,
    keywords_up: ["束缚","物质","阴影","执念"], keywords_rev: ["解脱","觉醒","释放","打破枷锁"],
    meaning_up: { general: "被物质欲望或恐惧所束缚，需要认清自己的阴暗面。", love: "感情中存在不健康的依附或控制关系。", career: "被金钱或权力所驱使，陷入不健康的工作模式。" },
    meaning_rev: { general: "从束缚中解脱，觉醒并打破枷锁，重获自由。", love: "从不健康的感情关系中解脱，重新找回自我。", career: "摆脱不健康的工作环境，寻求真正的职业满足。" }
  },
  { id: "major_16", name: "塔", arcana: "major", number: 16,
    keywords_up: ["突变","崩塌","启示","解放"], keywords_rev: ["逃避灾难","延迟崩塌","恐惧变化","内部动荡"],
    meaning_up: { general: "突如其来的变化打破旧有结构，虽然痛苦却带来解放与启示。", love: "感情遭遇突变，旧有关系模式崩塌，需要重建。", career: "职业遭遇突变，旧有计划崩塌，需要重新出发。" },
    meaning_rev: { general: "逃避必要的崩塌，延迟痛苦只会加重后果。", love: "感情中的问题被压抑，内部矛盾积累。", career: "职业危机被掩盖，问题迟早会爆发。" }
  },
  { id: "major_17", name: "星星", arcana: "major", number: 17,
    keywords_up: ["希望","灵感","更新","宁静"], keywords_rev: ["绝望","失去信念","幻灭","迷失方向"],
    meaning_up: { general: "黑暗之后的希望之光，宇宙给予你灵感与更新的能量。", love: "感情充满希望，关系在平静中滋养成长。", career: "职业前景光明，灵感涌现，充满创造力。" },
    meaning_rev: { general: "失去希望与信念，感到幻灭，需要重新找到内心的光。", love: "感情中失去希望，对未来感到迷茫。", career: "职业方向迷失，缺乏动力与灵感。" }
  },
  { id: "major_18", name: "月亮", arcana: "major", number: 18,
    keywords_up: ["幻觉","恐惧","潜意识","迷惑"], keywords_rev: ["真相显现","恐惧消散","清晰","走出迷雾"],
    meaning_up: { general: "潜意识的恐惧与幻觉影响判断，需要穿越迷雾找到真相。", love: "感情中存在误解与不确定，需要更多沟通澄清。", career: "职业方向不明朗，存在欺骗或误导的可能。" },
    meaning_rev: { general: "迷雾散去，真相逐渐清晰，恐惧开始消散。", love: "感情中的误解得到澄清，关系趋于明朗。", career: "职业方向逐渐清晰，欺骗被揭露。" }
  },
  { id: "major_19", name: "太阳", arcana: "major", number: 19,
    keywords_up: ["喜悦","成功","活力","光明"], keywords_rev: ["过度乐观","延迟成功","暂时阴霾","自我中心"],
    meaning_up: { general: "光明与喜悦充满生命，成功与幸福触手可及。", love: "感情充满喜悦与活力，关系幸福美满。", career: "事业蒸蒸日上，成功与认可接踵而来。" },
    meaning_rev: { general: "过度乐观或自我中心，成功暂时受阻，需要调整心态。", love: "感情中过于以自我为中心，忽视对方需求。", career: "成功延迟，需要更加脚踏实地。" }
  },
  { id: "major_20", name: "审判", arcana: "major", number: 20,
    keywords_up: ["觉醒","重生","召唤","宽恕"], keywords_rev: ["自我怀疑","拒绝觉醒","无法原谅","停滞"],
    meaning_up: { general: "内心的觉醒与召唤，是时候放下过去，迎接重生。", love: "感情迎来重要的觉醒时刻，旧伤得到疗愈。", career: "职业迎来重要转折，过去的努力得到认可。" },
    meaning_rev: { general: "拒绝觉醒，无法原谅自己或他人，困在过去中。", love: "无法放下过去的伤痛，阻碍感情发展。", career: "拒绝承认错误，无法从过去的失败中学习。" }
  },
  { id: "major_21", name: "世界", arcana: "major", number: 21,
    keywords_up: ["完成","整合","成就","圆满"], keywords_rev: ["未完成","延迟","缺乏完结","停滞"],
    meaning_up: { general: "一个重要循环圆满完成，整合所有经验，达到圆满境界。", love: "感情达到圆满，关系进入新的完整阶段。", career: "重大目标达成，事业进入圆满阶段。" },
    meaning_rev: { general: "目标尚未完成，需要补足缺失的部分才能达到圆满。", love: "感情关系尚未完整，还有未解决的课题。", career: "项目未能完成，需要找出缺失的环节。" }
  },
  // 权杖牌组 14张
  { id: "wands_01", name: "权杖王牌", arcana: "minor", suit: "wands", number: 1,
    keywords_up: ["灵感","新开始","潜力","创造力"], keywords_rev: ["延迟","创意受阻","缺乏方向","潜力未发挥"],
    meaning_up: { general: "新的创意与激情涌现，充满潜力的新开始。", love: "感情中燃起新的激情与热情。", career: "新项目或创业机会出现，充满创造力。" },
    meaning_rev: { general: "创意受阻，新计划延迟，需要重新点燃热情。", love: "感情中激情减退，需要重新点燃。", career: "项目启动受阻，缺乏方向感。" }
  },
  { id: "wands_02", name: "权杖二", arcana: "minor", suit: "wands", number: 2,
    keywords_up: ["计划","远见","决策","等待"], keywords_rev: ["恐惧未知","缺乏计划","犹豫不决","安于现状"],
    meaning_up: { general: "站在高处展望未来，制定计划，等待时机出发。", love: "感情中考虑长远发展，规划未来。", career: "制定长期职业规划，等待合适时机行动。" },
    meaning_rev: { general: "害怕踏出第一步，缺乏远见，安于现状。", love: "感情中缺乏规划，对未来感到迷茫。", career: "职业规划不足，错失发展机会。" }
  },
  { id: "wands_03", name: "权杖三", arcana: "minor", suit: "wands", number: 3,
    keywords_up: ["扩展","预见","进展","探索"], keywords_rev: ["延迟","挫折","缺乏远见","计划受阻"],
    meaning_up: { general: "计划已经启动，等待成果归来，视野开阔向外扩展。", love: "感情关系向前发展，可能涉及远距离或跨文化。", career: "事业扩展，等待合作或项目成果。" },
    meaning_rev: { general: "计划遭遇延迟或挫折，需要调整策略。", love: "感情发展受阻，远距离关系出现问题。", career: "扩展计划受阻，合作出现问题。" }
  },
  { id: "wands_04", name: "权杖四", arcana: "minor", suit: "wands", number: 4,
    keywords_up: ["庆祝","稳定","家园","和谐"], keywords_rev: ["不稳定","延迟庆祝","家庭矛盾","缺乏根基"],
    meaning_up: { general: "值得庆祝的成就，建立稳定的家园与和谐的环境。", love: "感情稳定，可能涉及同居或婚礼等重要里程碑。", career: "阶段性目标达成，团队和谐，值得庆祝。" },
    meaning_rev: { general: "稳定受到威胁，庆祝被延迟，家庭关系出现矛盾。", love: "感情稳定性受到挑战，家庭关系紧张。", career: "团队不和谐，成果被延迟认可。" }
  },
  { id: "wands_05", name: "权杖五", arcana: "minor", suit: "wands", number: 5,
    keywords_up: ["竞争","冲突","挑战","多元观点"], keywords_rev: ["避免冲突","内部矛盾","无谓争斗","寻求和解"],
    meaning_up: { general: "面临竞争与挑战，不同观点的碰撞，需要在混乱中找到方向。", love: "感情中出现争执与竞争，需要沟通解决。", career: "职场竞争激烈，面临多方挑战。" },
    meaning_rev: { general: "避免必要的冲突，内部矛盾积累，或寻求和解。", love: "感情中压抑矛盾，或开始寻求和解。", career: "职场矛盾被压抑，或竞争趋于缓和。" }
  },
  { id: "wands_06", name: "权杖六", arcana: "minor", suit: "wands", number: 6,
    keywords_up: ["胜利","认可","成功","领导"], keywords_rev: ["延迟成功","缺乏认可","自大","失败"],
    meaning_up: { general: "赢得胜利，获得众人认可，以领导者姿态凯旋。", love: "感情中获得认可，关系得到外界祝福。", career: "职业上取得重要胜利，获得认可与晋升。" },
    meaning_rev: { general: "成功被延迟，缺乏认可，或因自大而失败。", love: "感情关系缺乏外界认可，或因骄傲而受损。", career: "晋升受阻，努力未得到应有的认可。" }
  },
  { id: "wands_07", name: "权杖七", arcana: "minor", suit: "wands", number: 7,
    keywords_up: ["坚守","挑战","防御","勇气"], keywords_rev: ["放弃","不知所措","被压倒","退让"],
    meaning_up: { general: "面对众多挑战仍坚守立场，以勇气捍卫自己的成就。", love: "为感情奋力抗争，捍卫这段关系。", career: "在竞争中坚守自己的位置，不轻易退让。" },
    meaning_rev: { general: "被压力压倒，选择放弃或退让，失去立场。", love: "在感情中失去立场，无力维护关系。", career: "在职场竞争中退缩，放弃自己的位置。" }
  },
  { id: "wands_08", name: "权杖八", arcana: "minor", suit: "wands", number: 8,
    keywords_up: ["速度","行动","消息","进展"], keywords_rev: ["延迟","混乱","消息受阻","仓促行事"],
    meaning_up: { general: "事情快速推进，消息迅速传来，行动的时机已到。", love: "感情快速发展，消息传来，关系迅速升温。", career: "项目快速推进，重要消息即将到来。" },
    meaning_rev: { general: "进展受阻，消息延迟，或因仓促行事而造成混乱。", love: "感情发展受阻，消息延迟，沟通出现问题。", career: "项目延迟，重要消息受阻。" }
  },
  { id: "wands_09", name: "权杖九", arcana: "minor", suit: "wands", number: 9,
    keywords_up: ["坚韧","防御","接近终点","疲惫中坚持"], keywords_rev: ["偏执","放弃","过度防御","精疲力竭"],
    meaning_up: { general: "虽然疲惫，仍坚持到底，终点就在眼前，不要放弃。", love: "感情历经考验，仍坚持维护，接近突破。", career: "工作虽然艰辛，坚持下去即将看到成果。" },
    meaning_rev: { general: "精疲力竭，过度防御，或因偏执而无法前进。", love: "感情中过度防御，无法信任对方。", career: "工作压力过大，接近崩溃边缘。" }
  },
  { id: "wands_10", name: "权杖十", arcana: "minor", suit: "wands", number: 10,
    keywords_up: ["重担","责任","压力","完成"], keywords_rev: ["放下重担","委派","解脱","崩溃"],
    meaning_up: { general: "承担过多责任，压力沉重，但终点就在眼前。", love: "感情中承担过多，关系带来沉重压力。", career: "工作负担过重，需要学会委派任务。" },
    meaning_rev: { general: "终于放下重担，学会委派，或因压力过大而崩溃。", love: "从沉重的感情负担中解脱，或关系崩溃。", career: "工作压力得到释放，或因过载而崩溃。" }
  },
  { id: "wands_11", name: "权杖侍从", arcana: "minor", suit: "wands", number: 11,
    keywords_up: ["热情","探索","消息","冒险精神"], keywords_rev: ["鲁莽","缺乏方向","坏消息","延迟"],
    meaning_up: { general: "充满热情与好奇心，带来新消息，准备踏上冒险旅程。", love: "感情中带来新鲜感，充满热情的追求。", career: "新的职业机会或消息到来，充满探索精神。" },
    meaning_rev: { general: "行事鲁莽，缺乏方向，或带来令人失望的消息。", love: "感情中冲动行事，缺乏稳定性。", career: "职业计划缺乏方向，消息令人失望。" }
  },
  { id: "wands_12", name: "权杖骑士", arcana: "minor", suit: "wands", number: 12,
    keywords_up: ["行动","冒险","冲劲","魅力"], keywords_rev: ["鲁莽","冲动","缺乏耐心","散漫"],
    meaning_up: { general: "充满冲劲与魅力，大胆行动，以热情征服一切。", love: "热情奔放的追求，充满激情的感情。", career: "大胆推进项目，以行动力创造成果。" },
    meaning_rev: { general: "过于冲动鲁莽，缺乏耐心，行事散漫。", love: "感情中过于冲动，缺乏稳定性与承诺。", career: "行事鲁莽，缺乏计划，导致失误。" }
  },
  { id: "wands_13", name: "权杖王后", arcana: "minor", suit: "wands", number: 13,
    keywords_up: ["自信","热情","独立","魅力"], keywords_rev: ["嫉妒","自私","控制欲","不安全感"],
    meaning_up: { general: "充满自信与魅力，以热情和独立精神引领他人。", love: "感情中充满魅力与自信，吸引力十足。", career: "以自信和热情领导团队，事业蓬勃。" },
    meaning_rev: { general: "嫉妒心强，自私或控制欲过强，内心不安全。", love: "感情中嫉妒心强，控制欲过强。", career: "职场中自私行事，与同事关系紧张。" }
  },
  { id: "wands_14", name: "权杖国王", arcana: "minor", suit: "wands", number: 14,
    keywords_up: ["领导力","远见","魅力","企业家精神"], keywords_rev: ["专制","冲动","无法实现愿景","傲慢"],
    meaning_up: { general: "以远见和魅力领导他人，是天生的企业家与领袖。", love: "感情中充满魅力与领导力，是可靠的伴侣。", career: "以远见和领导力推动事业，是成功的领导者。" },
    meaning_rev: { general: "专制傲慢，冲动行事，无法将远见转化为现实。", love: "感情中过于强势，不尊重对方。", career: "领导方式专制，团队关系紧张。" }
  },
  // 圣杯牌组 14张
  { id: "cups_01", name: "圣杯王牌", arcana: "minor", suit: "cups", number: 1,
    keywords_up: ["新感情","直觉","情感开始","爱"], keywords_rev: ["情感受阻","压抑感受","空洞","失落"],
    meaning_up: { general: "情感的新开始，爱与直觉的礼物，心灵向爱敞开。", love: "新恋情的开始，或现有感情进入新阶段。", career: "以热情投入工作，创意灵感涌现。" },
    meaning_rev: { general: "情感受阻，压抑内心感受，感到空洞与失落。", love: "感情机会被错过，或情感表达受阻。", career: "工作缺乏热情，创意枯竭。" }
  },
  { id: "cups_02", name: "圣杯二", arcana: "minor", suit: "cups", number: 2,
    keywords_up: ["伙伴关系","相互吸引","联结","和谐"], keywords_rev: ["失衡","分离","误解","关系破裂"],
    meaning_up: { general: "两人之间的深厚联结，相互吸引，建立和谐的伙伴关系。", love: "深厚的感情联结，灵魂伴侣的相遇，关系和谐。", career: "与合作伙伴建立良好关系，合作愉快。" },
    meaning_rev: { general: "关系失衡，出现误解或分离，联结受到威胁。", love: "感情出现裂痕，误解加深，关系面临考验。", career: "合作关系出现问题，伙伴关系破裂。" }
  },
  { id: "cups_03", name: "圣杯三", arcana: "minor", suit: "cups", number: 3,
    keywords_up: ["庆祝","友谊","社群","喜悦"], keywords_rev: ["过度放纵","八卦","孤立","庆祝过头"],
    meaning_up: { general: "与朋友共同庆祝，享受社群的喜悦与友谊的温暖。", love: "感情得到朋友祝福，社交圈带来喜悦。", career: "团队合作成功，值得庆祝的成就。" },
    meaning_rev: { general: "过度放纵，沉溺于享乐，或社交圈中出现八卦。", love: "第三者介入，或社交圈对感情造成负面影响。", career: "团队内部出现八卦，庆祝过头影响工作。" }
  },
  { id: "cups_04", name: "圣杯四", arcana: "minor", suit: "cups", number: 4,
    keywords_up: ["冥想","无聊","重新评估","内省"], keywords_rev: ["新机会","走出冷漠","重新投入","觉醒"],
    meaning_up: { general: "陷入冷漠与无聊，需要内省重新评估生命中真正重要的事。", love: "对感情感到无聊或不满足，需要重新评估。", career: "对工作感到倦怠，需要重新找到动力。" },
    meaning_rev: { general: "从冷漠中走出，看见新的机会，重新投入生活。", love: "重新对感情燃起热情，看见新的可能性。", career: "重新找到工作动力，新机会出现。" }
  },
  { id: "cups_05", name: "圣杯五", arcana: "minor", suit: "cups", number: 5,
    keywords_up: ["失落","悲伤","遗憾","专注于损失"], keywords_rev: ["接受","走出悲伤","宽恕","向前看"],
    meaning_up: { general: "专注于失去的事物，沉浸在悲伤与遗憾中，忽视仍存在的美好。", love: "感情中的失落与悲伤，专注于已失去的。", career: "职业挫折带来悲伤，难以走出失败阴影。" },
    meaning_rev: { general: "开始接受失去，走出悲伤，将目光转向未来。", love: "从感情伤痛中走出，开始接受并向前看。", career: "从职业挫折中恢复，重新出发。" }
  },
  { id: "cups_06", name: "圣杯六", arcana: "minor", suit: "cups", number: 6,
    keywords_up: ["怀旧","童年","纯真","过去的快乐"], keywords_rev: ["活在过去","无法成长","理想化过去","天真"],
    meaning_up: { general: "美好的回忆与怀旧情怀，童年的纯真带来温暖与治愈。", love: "旧情人重现，或感情中充满纯真与温暖。", career: "回顾过去的成功经验，从中汲取智慧。" },
    meaning_rev: { general: "过度活在过去，无法成长，理想化已逝去的时光。", love: "无法放下过去的感情，阻碍新关系发展。", career: "过度依赖过去的方法，无法适应新环境。" }
  },
  { id: "cups_07", name: "圣杯七", arcana: "minor", suit: "cups", number: 7,
    keywords_up: ["幻想","选择","白日梦","迷惑"], keywords_rev: ["清醒","做出选择","面对现实","意志力"],
    meaning_up: { general: "面对众多选择与幻想，需要从迷雾中找到真正想要的。", love: "感情中充满幻想，难以分辨真实与理想。", career: "面对太多选项，难以做出决定，需要聚焦。" },
    meaning_rev: { general: "从幻想中清醒，做出明确选择，面对现实。", love: "放下对感情的不切实际幻想，面对真实关系。", career: "从众多选项中做出决定，专注执行。" }
  },
  { id: "cups_08", name: "圣杯八", arcana: "minor", suit: "cups", number: 8,
    keywords_up: ["离开","寻求更多","放弃","精神追求"], keywords_rev: ["留下","恐惧改变","漫无目的","逃避"],
    meaning_up: { general: "放下已有的一切，踏上寻找更深层意义的旅程。", love: "离开不再满足的感情，寻求更深的情感连结。", career: "放弃稳定但无意义的工作，追求真正的职业热情。" },
    meaning_rev: { general: "害怕改变而留下，或漫无目的地逃避现实。", love: "害怕孤独而留在不满足的关系中。", career: "害怕改变而留在不适合的工作中。" }
  },
  { id: "cups_09", name: "圣杯九", arcana: "minor", suit: "cups", number: 9,
    keywords_up: ["满足","愿望实现","幸福","感恩"], keywords_rev: ["贪婪","物质主义","不满足","愿望落空"],
    meaning_up: { general: "愿望得以实现，内心满足，享受生命中的丰盛与幸福。", love: "感情满足，愿望实现，关系幸福美满。", career: "职业目标达成，享受成功带来的满足感。" },
    meaning_rev: { general: "贪得无厌，物质主义，或愿望落空带来失望。", love: "感情中过于执着于完美，导致不满足。", career: "职业目标未达成，或成功后感到空虚。" }
  },
  { id: "cups_10", name: "圣杯十", arcana: "minor", suit: "cups", number: 10,
    keywords_up: ["圆满","家庭幸福","和谐","永恒的爱"], keywords_rev: ["家庭矛盾","破碎的梦想","不和谐","失去幸福"],
    meaning_up: { general: "情感的圆满与家庭的幸福，爱与和谐充满生命。", love: "感情达到圆满，家庭幸福，永恒的爱。", career: "工作与生活和谐，团队如家人般融洽。" },
    meaning_rev: { general: "家庭关系出现矛盾，幸福的梦想破碎，和谐受损。", love: "家庭关系紧张，感情幸福受到威胁。", career: "工作环境不和谐，团队关系破裂。" }
  },
  { id: "cups_11", name: "圣杯侍从", arcana: "minor", suit: "cups", number: 11,
    keywords_up: ["直觉","创意消息","情感探索","梦想"], keywords_rev: ["情绪化","不成熟","坏消息","逃避现实"],
    meaning_up: { general: "带来情感上的消息，以直觉和创意探索内心世界。", love: "感情中带来新消息，充满浪漫与幻想。", career: "创意灵感到来，以直觉指引工作方向。" },
    meaning_rev: { general: "情绪化且不成熟，逃避现实，或带来令人失望的消息。", love: "感情中情绪化，不成熟的行为。", career: "工作中情绪化，缺乏实际行动。" }
  },
  { id: "cups_12", name: "圣杯骑士", arcana: "minor", suit: "cups", number: 12,
    keywords_up: ["浪漫","魅力","理想主义","追求"], keywords_rev: ["情绪化","不切实际","善变","欺骗"],
    meaning_up: { general: "以浪漫与魅力追求理想，充满诗意的骑士精神。", love: "浪漫的追求，充满魅力的求爱，感情充满诗意。", career: "以热情和理想主义推进创意项目。" },
    meaning_rev: { general: "情绪化且善变，不切实际，或存在欺骗。", love: "感情中善变不稳定，或存在欺骗。", career: "工作中过于理想化，缺乏实际执行力。" }
  },
  { id: "cups_13", name: "圣杯王后", arcana: "minor", suit: "cups", number: 13,
    keywords_up: ["同理心","直觉","关怀","情感智慧"], keywords_rev: ["情绪化","依赖","不安全感","操控"],
    meaning_up: { general: "以深厚的同理心和直觉关怀他人，情感智慧丰富。", love: "感情中充满关怀与理解，是温柔体贴的伴侣。", career: "以同理心和直觉领导，创造和谐的工作环境。" },
    meaning_rev: { general: "情绪化且依赖，内心不安全，或以情绪操控他人。", love: "感情中过度依赖，情绪化行为影响关系。", career: "工作中情绪化，以情绪操控同事。" }
  },
  { id: "cups_14", name: "圣杯国王", arcana: "minor", suit: "cups", number: 14,
    keywords_up: ["情感成熟","智慧","平衡","慈悲"], keywords_rev: ["情绪压抑","操控","不稳定","冷漠"],
    meaning_up: { general: "以成熟的情感智慧和慈悲心领导，平衡理性与感性。", love: "感情中成熟稳重，是可靠且有智慧的伴侣。", career: "以情感智慧和慈悲心领导团队，赢得信任。" },
    meaning_rev: { general: "压抑情感，以情绪操控他人，或情绪极度不稳定。", love: "感情中情绪压抑或操控，关系不健康。", career: "领导方式冷漠或情绪化，团队士气低落。" }
  },
  // 宝剑牌组 14张
  { id: "swords_01", name: "宝剑王牌", arcana: "minor", suit: "swords", number: 1,
    keywords_up: ["清晰","真相","突破","智慧"], keywords_rev: ["混乱","谎言","残酷","思维受阻"],
    meaning_up: { general: "思维清晰，以真相与智慧突破困境，斩断迷雾。", love: "感情中需要诚实沟通，以清晰的头脑面对真相。", career: "以清晰的思维和果断的行动突破职业瓶颈。" },
    meaning_rev: { general: "思维混乱，被谎言迷惑，或言语造成伤害。", love: "感情中存在谎言或误解，沟通出现问题。", career: "思维受阻，决策混乱，或遭遇不诚实。" }
  },
  { id: "swords_02", name: "宝剑二", arcana: "minor", suit: "swords", number: 2,
    keywords_up: ["僵局","回避","艰难选择","暂时平衡"], keywords_rev: ["信息过载","混乱","做出选择","揭示真相"],
    meaning_up: { general: "面临艰难选择，以回避维持暂时平衡，但决定终须做出。", love: "感情中陷入僵局，回避面对真相。", career: "职业决策陷入僵局，需要更多信息才能前进。" },
    meaning_rev: { general: "信息过载导致混乱，或终于做出了艰难的决定。", love: "感情中的真相被揭示，僵局被打破。", career: "获得足够信息后做出决定，走出僵局。" }
  },
  { id: "swords_03", name: "宝剑三", arcana: "minor", suit: "swords", number: 3,
    keywords_up: ["心碎","悲伤","痛苦","失去"], keywords_rev: ["走出痛苦","宽恕","疗愈","释放悲伤"],
    meaning_up: { general: "心碎与悲伤，痛苦的真相刺穿内心，需要时间疗愈。", love: "感情中的心碎，背叛或分离带来的深切痛苦。", career: "职业上的重大挫折，令人心碎的失败。" },
    meaning_rev: { general: "开始从痛苦中走出，宽恕与疗愈的过程开始。", love: "从心碎中慢慢疗愈，开始宽恕与放下。", career: "从职业挫折中恢复，重新出发。" }
  },
  { id: "swords_04", name: "宝剑四", arcana: "minor", suit: "swords", number: 4,
    keywords_up: ["休息","恢复","冥想","暂时退出"], keywords_rev: ["精疲力竭","无法休息","重新投入","停滞"],
    meaning_up: { general: "需要休息与恢复，暂时退出战场，积蓄力量。", love: "感情中需要暂时的空间与休息，冷静思考。", career: "工作需要暂停休息，避免过度消耗。" },
    meaning_rev: { general: "无法好好休息，精疲力竭，或终于重新投入行动。", love: "感情中无法获得需要的空间，或休息后重新投入。", career: "无法停下来休息，或休息后重新投入工作。" }
  },
  { id: "swords_05", name: "宝剑五", arcana: "minor", suit: "swords", number: 5,
    keywords_up: ["冲突","失败","不光彩的胜利","自私"], keywords_rev: ["和解","走出冲突","后悔","宽恕"],
    meaning_up: { general: "以不光彩的方式赢得胜利，冲突留下伤痕，代价沉重。", love: "感情中的争吵与冲突，有人受伤，关系受损。", career: "职场竞争中的不道德行为，赢了却失去更多。" },
    meaning_rev: { general: "从冲突中走出，寻求和解，或为过去的行为后悔。", love: "感情冲突后寻求和解，双方开始宽恕。", career: "职场冲突趋于平息，寻求和解。" }
  },
  { id: "swords_06", name: "宝剑六", arcana: "minor", suit: "swords", number: 6,
    keywords_up: ["过渡","离开","平静","走向更好"], keywords_rev: ["无法离开","延迟过渡","带着包袱前行","停滞"],
    meaning_up: { general: "离开困境，平静地过渡到更好的地方，前方更平静。", love: "感情中的过渡期，离开不健康的关系走向平静。", career: "离开不适合的工作环境，走向更好的机会。" },
    meaning_rev: { general: "无法离开困境，过渡被延迟，带着旧包袱前行。", love: "无法离开不健康的感情，或过渡期延长。", career: "无法离开不适合的工作，转变受阻。" }
  },
  { id: "swords_07", name: "宝剑七", arcana: "minor", suit: "swords", number: 7,
    keywords_up: ["欺骗","策略","逃避","秘密行动"], keywords_rev: ["被揭穿","良心发现","坦白","放弃欺骗"],
    meaning_up: { general: "以策略和秘密行动达到目的，但欺骗终将付出代价。", love: "感情中存在欺骗或秘密，需要警惕。", career: "职场中的不诚实行为，或以策略绕过规则。" },
    meaning_rev: { general: "欺骗被揭穿，良心发现，或决定坦白真相。", love: "感情中的秘密被揭露，或决定坦诚相对。", career: "职场不诚实行为被发现，或决定改变。" }
  },
  { id: "swords_08", name: "宝剑八", arcana: "minor", suit: "swords", number: 8,
    keywords_up: ["束缚","限制","自我囚禁","无助"], keywords_rev: ["解脱","自我释放","重获力量","走出困境"],
    meaning_up: { general: "被自我设限的思维所困，其实束缚来自内心，可以选择离开。", love: "感情中感到被困，无法自由，多为自我设限。", career: "职业上感到受限，但限制多来自自己的思维。" },
    meaning_rev: { general: "从自我设限中解脱，重新找回力量，走出困境。", love: "从感情的束缚中解脱，重新找回自我。", career: "突破职业限制，重新找回行动力。" }
  },
  { id: "swords_09", name: "宝剑九", arcana: "minor", suit: "swords", number: 9,
    keywords_up: ["焦虑","噩梦","恐惧","绝望"], keywords_rev: ["走出焦虑","寻求帮助","面对恐惧","希望"],
    meaning_up: { general: "深夜的焦虑与恐惧，被噩梦般的想法所困，需要面对内心恐惧。", love: "感情中的焦虑与恐惧，担心失去或被抛弃。", career: "工作压力引发的焦虑，对失败的深切恐惧。" },
    meaning_rev: { general: "开始走出焦虑，寻求帮助，面对恐惧找到希望。", love: "感情焦虑开始缓解，寻求支持与帮助。", career: "工作焦虑减轻，开始面对并解决问题。" }
  },
  { id: "swords_10", name: "宝剑十", arcana: "minor", suit: "swords", number: 10,
    keywords_up: ["终结","背叛","痛苦的结局","触底"], keywords_rev: ["恢复","重生","拒绝失败","走出最低点"],
    meaning_up: { general: "痛苦的终结，触底的时刻，但黎明即将到来。", love: "感情的痛苦终结，背叛或彻底的分离。", career: "职业上的彻底失败，但这是重生的起点。" },
    meaning_rev: { general: "从最低点开始恢复，拒绝被失败定义，走向重生。", love: "从感情的最低点开始恢复，重新出发。", career: "从职业失败中恢复，以新的姿态重新出发。" }
  },
  { id: "swords_11", name: "宝剑侍从", arcana: "minor", suit: "swords", number: 11,
    keywords_up: ["好奇","警觉","消息","思维敏锐"], keywords_rev: ["八卦","谎言","鲁莽的言语","坏消息"],
    meaning_up: { general: "思维敏锐，充满好奇，带来重要消息，保持警觉。", love: "感情中带来新消息，需要保持警觉与清醒。", career: "新的信息到来，以敏锐的思维把握机会。" },
    meaning_rev: { general: "散布八卦，言语鲁莽，或带来令人不安的消息。", love: "感情中出现谎言或八卦，需要谨慎。", career: "工作中言语不当，或消息令人担忧。" }
  },
  { id: "swords_12", name: "宝剑骑士", arcana: "minor", suit: "swords", number: 12,
    keywords_up: ["行动迅速","果断","雄心","直接"], keywords_rev: ["鲁莽","冲动","好斗","缺乏方向"],
    meaning_up: { general: "以迅速果断的行动冲向目标，雄心勃勃，直接有力。", love: "直接表达感情，以行动追求，充满热情。", career: "以果断和速度推进项目，雄心勃勃。" },
    meaning_rev: { general: "过于鲁莽冲动，好斗且缺乏方向，造成不必要的伤害。", love: "感情中过于冲动，言语伤人，缺乏体贴。", career: "行事鲁莽，缺乏计划，造成职业损失。" }
  },
  { id: "swords_13", name: "宝剑王后", arcana: "minor", suit: "swords", number: 13,
    keywords_up: ["独立","清晰","直接","智慧"], keywords_rev: ["冷酷","苦涩","孤立","操控"],
    meaning_up: { general: "以清晰的思维和独立的精神面对真相，智慧而直接。", love: "感情中保持独立，以清晰的头脑面对关系真相。", career: "以独立和清晰的思维做出明智的职业决策。" },
    meaning_rev: { general: "冷酷苦涩，以言语伤人，孤立自己或操控他人。", love: "感情中冷漠苦涩，以言语伤害对方。", career: "工作中冷酷无情，与同事关系疏离。" }
  },
  { id: "swords_14", name: "宝剑国王", arcana: "minor", suit: "swords", number: 14,
    keywords_up: ["权威","智慧","公正","清晰思维"], keywords_rev: ["专制","操控","冷酷","滥用权力"],
    meaning_up: { general: "以权威和智慧做出公正的判断，思维清晰，言出必行。", love: "感情中理性而公正，以智慧处理关系问题。", career: "以权威和智慧领导，做出公正的决策。" },
    meaning_rev: { general: "滥用权力，专制冷酷，以智慧操控他人。", love: "感情中过于冷酷理性，缺乏情感温度。", career: "领导方式专制，滥用权力，团队关系紧张。" }
  },
  // 星币牌组 14张
  { id: "pentacles_01", name: "星币王牌", arcana: "minor", suit: "pentacles", number: 1,
    keywords_up: ["物质新开始","机会","繁荣","财富"], keywords_rev: ["错失机会","财务损失","物质不稳定","贪婪"],
    meaning_up: { general: "物质与财务的新开始，繁荣的机会就在眼前。", love: "感情稳定踏实，可能涉及物质上的共同建设。", career: "新的财务机会或职业开始，前景繁荣。" },
    meaning_rev: { general: "错失财务机会，物质不稳定，或贪婪导致损失。", love: "感情中物质基础不稳，或过于注重物质。", career: "财务机会错失，职业开始不顺利。" }
  },
  { id: "pentacles_02", name: "星币二", arcana: "minor", suit: "pentacles", number: 2,
    keywords_up: ["平衡","适应","灵活","多任务"], keywords_rev: ["失衡","财务混乱","无法应对","压力过大"],
    meaning_up: { general: "灵活应对多项任务，在变化中保持平衡。", love: "在感情与其他生活领域之间保持平衡。", career: "同时处理多项工作，灵活应对变化。" },
    meaning_rev: { general: "失去平衡，财务混乱，无法应对多重压力。", love: "感情与生活其他方面失衡，关系受到忽视。", career: "工作与生活失衡，财务管理混乱。" }
  },
  { id: "pentacles_03", name: "星币三", arcana: "minor", suit: "pentacles", number: 3,
    keywords_up: ["团队合作","技能","学习","成就"], keywords_rev: ["缺乏合作","平庸","学习受阻","不被认可"],
    meaning_up: { general: "以专业技能与团队合作创造卓越成就，努力得到认可。", love: "感情中共同建设，双方为关系付出努力。", career: "团队合作顺畅，专业技能得到认可，事业进步。" },
    meaning_rev: { general: "缺乏合作，技能平庸，努力不被认可。", love: "感情中缺乏共同努力，双方不在同一频道。", career: "团队合作出现问题，专业技能受到质疑。" }
  },
  { id: "pentacles_04", name: "星币四", arcana: "minor", suit: "pentacles", number: 4,
    keywords_up: ["稳定","保守","积累","控制"], keywords_rev: ["吝啬","物质执念","财务损失","放手"],
    meaning_up: { general: "稳健地积累财富，保守地管理资源，建立安全感。", love: "感情中寻求稳定与安全，但可能过于保守。", career: "稳健的财务管理，保守的职业策略。" },
    meaning_rev: { general: "过于吝啬，执着于物质，或终于学会放手。", love: "感情中过于保守，不愿付出或分享。", career: "财务过于保守，错失投资机会，或财务损失。" }
  },
  { id: "pentacles_05", name: "星币五", arcana: "minor", suit: "pentacles", number: 5,
    keywords_up: ["财务困难","贫困","孤立","寻求帮助"], keywords_rev: ["走出困境","财务恢复","接受帮助","重建"],
    meaning_up: { general: "财务困难与物质匮乏，感到孤立无援，需要寻求帮助。", love: "感情中感到孤立，物质困难影响关系。", career: "财务困难，职业陷入低谷，需要寻求支持。" },
    meaning_rev: { general: "从财务困境中走出，接受帮助，开始重建。", love: "感情中的困难开始改善，重新找到支持。", career: "财务状况开始好转，职业逐渐恢复。" }
  },
  { id: "pentacles_06", name: "星币六", arcana: "minor", suit: "pentacles", number: 6,
    keywords_up: ["慷慨","给予","接受","平衡的交换"], keywords_rev: ["不平等","债务","自私","附带条件的给予"],
    meaning_up: { general: "慷慨地给予与接受，财富的平衡流动，善意的循环。", love: "感情中平衡的给予与接受，关系公平和谐。", career: "公平的薪酬与回报，慷慨的合作关系。" },
    meaning_rev: { general: "给予附带条件，关系不平等，或陷入债务困境。", love: "感情中付出不平等，或给予附带条件。", career: "薪酬不公平，或合作关系存在不平等。" }
  },
  { id: "pentacles_07", name: "星币七", arcana: "minor", suit: "pentacles", number: 7,
    keywords_up: ["耐心","评估","长期投资","等待收获"], keywords_rev: ["缺乏耐心","投资失败","重新评估","放弃"],
    meaning_up: { general: "耐心等待长期投资的回报，评估进展，坚持下去。", love: "感情需要时间培养，耐心等待关系成熟。", career: "长期投资正在积累，需要耐心等待回报。" },
    meaning_rev: { general: "缺乏耐心，投资未见回报，需要重新评估策略。", love: "感情发展缓慢令人沮丧，需要重新评估。", career: "长期投资未见成效，需要调整策略。" }
  },
  { id: "pentacles_08", name: "星币八", arcana: "minor", suit: "pentacles", number: 8,
    keywords_up: ["专注","技艺","勤奋","精益求精"], keywords_rev: ["完美主义","缺乏专注","粗制滥造","停滞"],
    meaning_up: { general: "专注于精进技艺，以勤奋和专注达到卓越。", love: "为感情付出努力，精心经营关系。", career: "专注于技能提升，以勤奋创造卓越成果。" },
    meaning_rev: { general: "完美主义阻碍进步，或缺乏专注导致粗制滥造。", love: "感情中过于追求完美，或缺乏用心经营。", career: "工作缺乏专注，或完美主义导致停滞。" }
  },
  { id: "pentacles_09", name: "星币九", arcana: "minor", suit: "pentacles", number: 9,
    keywords_up: ["独立","丰盛","自给自足","成就"], keywords_rev: ["过度依赖","财务损失","虚假繁荣","孤独"],
    meaning_up: { general: "以自己的努力创造丰盛，独立自主，享受成就带来的满足。", love: "感情中保持独立，以完整的自我进入关系。", career: "职业上的丰盛成就，财务独立，享受成果。" },
    meaning_rev: { general: "过度依赖他人，财务出现问题，或繁荣只是表象。", love: "感情中过度依赖，失去自我独立性。", career: "财务状况不如表面稳定，需要重新审视。" }
  },
  { id: "pentacles_10", name: "星币十", arcana: "minor", suit: "pentacles", number: 10,
    keywords_up: ["财富","家族遗产","长期成功","稳定"], keywords_rev: ["家族矛盾","财务损失","不稳定","遗产纠纷"],
    meaning_up: { general: "长期积累的财富与稳定，家族的繁荣与传承。", love: "感情稳定，建立家庭，长久的幸福。", career: "长期事业成功，财务稳定，留下有价值的遗产。" },
    meaning_rev: { general: "家族矛盾，财务损失，长期稳定受到威胁。", love: "家庭关系出现矛盾，长期稳定受到挑战。", career: "长期事业遭遇挫折，财务稳定性受威胁。" }
  },
  { id: "pentacles_11", name: "星币侍从", arcana: "minor", suit: "pentacles", number: 11,
    keywords_up: ["学习","机会","踏实","新项目"], keywords_rev: ["缺乏进展","学习受阻","不切实际","懒惰"],
    meaning_up: { general: "以踏实的态度学习新技能，新的物质机会即将到来。", love: "感情中踏实认真，以行动表达爱意。", career: "新的学习机会或项目开始，踏实进取。" },
    meaning_rev: { general: "学习进展缓慢，缺乏实际行动，或好高骛远。", love: "感情中缺乏实际行动，停留在想象中。", career: "职业发展停滞，缺乏踏实的努力。" }
  },
  { id: "pentacles_12", name: "星币骑士", arcana: "minor", suit: "pentacles", number: 12,
    keywords_up: ["勤奋","可靠","耐心","方法论"], keywords_rev: ["停滞","无聊","完美主义","固执"],
    meaning_up: { general: "以勤奋和可靠的方式稳步推进目标，耐心而有方法。", love: "感情中可靠踏实，以行动证明承诺。", career: "以勤奋和方法论稳步推进职业目标。" },
    meaning_rev: { general: "停滞不前，过于固执或完美主义，缺乏灵活性。", love: "感情中过于固执，缺乏变化与激情。", career: "工作停滞，过于保守，无法适应变化。" }
  },
  { id: "pentacles_13", name: "星币王后", arcana: "minor", suit: "pentacles", number: 13,
    keywords_up: ["务实","丰盛","关怀","财务智慧"], keywords_rev: ["物质主义","嫉妒","不安全感","忽视他人"],
    meaning_up: { general: "以务实和关怀创造丰盛，财务智慧与慷慨并存。", love: "感情中温暖务实，以实际行动关怀伴侣。", career: "以务实和财务智慧管理事业，创造丰盛。" },
    meaning_rev: { general: "过于注重物质，嫉妒心强，或因不安全感而忽视他人。", love: "感情中过于注重物质，或嫉妒心影响关系。", career: "工作中物质主义过强，忽视人际关系。" }
  },
  { id: "pentacles_14", name: "星币国王", arcana: "minor", suit: "pentacles", number: 14,
    keywords_up: ["财富","商业智慧","稳定","成功"], keywords_rev: ["贪婪","物质主义","腐败","固执"],
    meaning_up: { general: "以商业智慧和稳健的管理创造财富，是成功的领导者。", love: "感情中稳定可靠，提供物质与情感的安全感。", career: "以商业智慧和稳健策略创造财务成功。" },
    meaning_rev: { general: "贪婪腐败，过于固执，物质主义遮蔽了真正的价值。", love: "感情中过于注重物质，忽视情感需求。", career: "商业决策腐败或过于贪婪，导致失败。" }
  }
];

// 洗牌算法 Fisher-Yates
function shuffleDeck() {
  const deck = TAROT_CARDS.map((card, i) => ({
    ...card,
    reversed: crypto.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF >= 0.5
  }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
