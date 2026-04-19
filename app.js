const SUIT_SYMBOLS = { wands: '🔥', cups: '💧', swords: '⚔️', pentacles: '⭐', major: '✨' };

const CARD_IMAGES = {
  major_00:'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
  major_01:'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
  major_02:'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
  major_03:'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
  major_04:'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
  major_05:'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
  major_06:'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg',
  major_07:'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
  major_08:'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
  major_09:'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
  major_10:'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
  major_11:'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
  major_12:'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
  major_13:'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
  major_14:'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
  major_15:'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
  major_16:'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
  major_17:'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg',
  major_18:'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
  major_19:'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
  major_20:'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg',
  major_21:'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
  wands_01:'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
  wands_02:'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg',
  wands_03:'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg',
  wands_04:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
  wands_05:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
  wands_06:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
  wands_07:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg',
  wands_08:'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
  wands_09:'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg',
  wands_10:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
  wands_11:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
  wands_12:'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
  wands_13:'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg',
  wands_14:'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
  cups_01:'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg',
  cups_02:'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg',
  cups_03:'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg',
  cups_04:'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
  cups_05:'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg',
  cups_06:'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg',
  cups_07:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg',
  cups_08:'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
  cups_09:'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg',
  cups_10:'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg',
  cups_11:'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg',
  cups_12:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg',
  cups_13:'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg',
  cups_14:'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg',
  swords_01:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg',
  swords_02:'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg',
  swords_03:'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg',
  swords_04:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg',
  swords_05:'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg',
  swords_06:'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg',
  swords_07:'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg',
  swords_08:'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg',
  swords_09:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg',
  swords_10:'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg',
  swords_11:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg',
  swords_12:'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg',
  swords_13:'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg',
  swords_14:'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg',
  pentacles_01:'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
  pentacles_02:'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg',
  pentacles_03:'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg',
  pentacles_04:'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg',
  pentacles_05:'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg',
  pentacles_06:'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg',
  pentacles_07:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg',
  pentacles_08:'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg',
  pentacles_09:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg',
  pentacles_10:'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg',
  pentacles_11:'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg',
  pentacles_12:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
  pentacles_13:'https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg',
  pentacles_14:'https://upload.wikimedia.org/wikipedia/commons/1/1b/Pents14.jpg',
};

const SPREADS = {
  daily: {
    frameworks: [
      { name: '过去·现在·未来', positions: ['过去', '现在', '未来'] },
      { name: '情况·行动·结果', positions: ['情况', '行动', '结果'] },
      { name: '身·心·灵', positions: ['身', '心', '灵'] }
    ]
  },
  love: {
    spreads: [
      { name: '关系牌阵（5张）', count: 5, positions: ['你的能量', '对方能量', '你的感受', '关系现状', '关系走向'] },
      { name: '凯尔特十字（10张）', count: 10, positions: ['关系核心', '阻碍/助力', '远期根源', '近期走向', '过去影响', '即将发生', '你的态度', '外部影响', '期望与恐惧', '最终走向'] }
    ]
  },
  career: {
    spreads: [
      { name: '决策牌阵（5张）', count: 5, positions: ['选项A', '选项B', '核心因素', '主要障碍', '行动建议'] },
      { name: '马蹄形牌阵（7张）', count: 7, positions: ['过去背景', '当前状态', '隐藏因素', '主要障碍', '外部影响', '行动建议', '可能结果'] }
    ]
  }
};

let currentPage = 'home';
let currentSpreadIndex = 0;
let currentFrameworkIndex = 0;
let drawnCards = [];
let flippedSet = new Set();

function initStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${2+Math.random()*4}s;--delay:${Math.random()*4}s;`;
    container.appendChild(star);
  }
}

function showPage(page) {
  currentPage = page;
  document.querySelectorAll('#home, .divination-page').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const target = document.getElementById(page);
  if (target) target.classList.add('active');
  const navLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');
  resetSpread(page);
  // 修复：直接滚到顶部，不用 smooth 避免视觉上仍在旧位置
  window.scrollTo(0, 0);
}

function resetSpread(page) {
  drawnCards = [];
  flippedSet = new Set();
  currentSpreadIndex = 0;
  currentFrameworkIndex = 0;
  const spreadArea = document.querySelector(`#${page} .spread-area`);
  const readingArea = document.querySelector(`#${page} .reading-area`);
  if (spreadArea) spreadArea.classList.remove('visible');
  if (readingArea) { readingArea.classList.remove('visible'); readingArea.innerHTML = ''; }
  const qInput = document.querySelector(`#${page} .question-input`);
  if (qInput) qInput.value = '';
  document.querySelectorAll(`#${page} .spread-btn`).forEach((b, i) => b.classList.toggle('active', i === 0));
  document.querySelectorAll(`#${page} .framework-btn`).forEach((b, i) => b.classList.toggle('active', i === 0));
}

function drawCards(count) {
  return shuffleDeck().slice(0, count);
}

function renderCard(card, index, positionLabel, extraClass) {
  const imgUrl = CARD_IMAGES[card.id] || '';
  const symbol = SUIT_SYMBOLS[card.suit || 'major'];
  const keywords = (card.reversed ? card.keywords_rev : card.keywords_up).slice(0, 2).join('·');
  const faceClass = 'card-face' + (card.reversed ? ' is-reversed' : '');
  const wrapClass = 'tarot-card-wrap' + (extraClass ? ' ' + extraClass : '');
  const cardId = `card-${currentPage}-${index}`;
  const fallbackInner = `<div class="card-name">${card.name}</div><div class="card-symbol">${symbol}</div><div class="card-orientation">${card.reversed?'逆位':'正位'}</div><div class="card-keywords">${keywords}</div>`;
  const faceContent = imgUrl
    ? `<img src="${imgUrl}" alt="${card.name}" class="card-img" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="card-face-fallback" style="display:none">${fallbackInner}</div>`
    : `<div class="card-face-fallback">${fallbackInner}</div>`;
  return `<div class="${wrapClass}">
    <div class="tarot-card" id="${cardId}" onclick="flipCard(${index})">
      <div class="card-inner">
        <div class="card-back"></div>
        <div class="${faceClass}">${faceContent}</div>
      </div>
    </div>
    <div class="card-position-label">${positionLabel}</div>
  </div>`;
}

function flipCard(index) {
  if (flippedSet.has(index)) return;
  const cardEl = document.getElementById(`card-${currentPage}-${index}`);
  if (!cardEl) return;
  cardEl.classList.add('flipped');
  flippedSet.add(index);
  if (flippedSet.size === drawnCards.length) {
    setTimeout(() => showReading(), 600);
  }
}

function flipAll() {
  drawnCards.forEach((_, i) => {
    if (!flippedSet.has(i)) {
      const cardEl = document.getElementById(`card-${currentPage}-${i}`);
      if (cardEl) { cardEl.classList.add('flipped'); flippedSet.add(i); }
    }
  });
  setTimeout(() => showReading(), 700);
}

function getPositions() {
  if (currentPage === 'daily') return SPREADS.daily.frameworks[currentFrameworkIndex].positions;
  if (currentPage === 'love') return SPREADS.love.spreads[currentSpreadIndex].positions;
  if (currentPage === 'career') return SPREADS.career.spreads[currentSpreadIndex].positions;
  return ['宇宙讯息'];
}

function getSummary(positions, question) {
  const q = question ? `关于「${question}」，` : '';
  if (currentPage === 'daily') {
    const [c0, c1, c2] = drawnCards;
    const p = positions;
    const m0 = c0.reversed ? c0.meaning_rev.general : c0.meaning_up.general;
    const m1 = c1.reversed ? c1.meaning_rev.general : c1.meaning_up.general;
    const m2 = c2.reversed ? c2.meaning_rev.general : c2.meaning_up.general;
    const k0 = (c0.reversed ? c0.keywords_rev : c0.keywords_up)[0];
    const k1 = (c1.reversed ? c1.keywords_rev : c1.keywords_up)[0];
    const k2 = (c2.reversed ? c2.keywords_rev : c2.keywords_up)[0];
    return `${q}星辰以三张牌为你铺陈今日的能量地图。\n\n${p[0]}之位，${c0.reversed?'逆位':'正位'}的【${c0.name}】带着「${k0}」的气息而来——${m0}\n\n${p[1]}之位，【${c1.name}】以「${k1}」的姿态驻足——${m1}\n\n${p[2]}之位，【${c2.name}】以「${k2}」指引前路——${m2}\n\n三牌交织，宇宙的讯息是：此刻你所经历的一切，皆是灵魂成长的必经之路。以觉知之心走过今日，你将在每一个当下找到属于自己的答案。`;
  }
  if (currentPage === 'love') {
    const core = drawnCards[0];
    const outcome = drawnCards[drawnCards.length - 1];
    const mid = drawnCards[Math.floor(drawnCards.length / 2)];
    const mk = (core.reversed ? core.keywords_rev : core.keywords_up)[0];
    const ok = (outcome.reversed ? outcome.keywords_rev : outcome.keywords_up)[0];
    const mm = mid.reversed ? mid.meaning_rev.love : mid.meaning_up.love;
    return `${q}爱是一面镜子，映照出我们内心最深处的渴望与恐惧。\n\n牌阵的核心，【${core.name}】以「${mk}」的能量揭示了这段关系的本质——${core.reversed ? core.meaning_rev.love : core.meaning_up.love}\n\n关系的流动之中，【${mid.name}】如一道光穿透迷雾：${mm}\n\n而走向之牌【${outcome.name}】以「${ok}」低语着未来的可能——${outcome.reversed ? outcome.meaning_rev.love : outcome.meaning_up.love}\n\n塔罗提醒你：真正的爱，始于对自己的诚实。无论牌面如何，你内心已知晓答案，只需静下来，倾听那个最真实的声音。`;
  }
  if (currentPage === 'career') {
    const core = drawnCards[Math.floor(drawnCards.length / 2)];
    const outcome = drawnCards[drawnCards.length - 1];
    const first = drawnCards[0];
    const fk = (first.reversed ? first.keywords_rev : first.keywords_up)[0];
    const ck = (core.reversed ? core.keywords_rev : core.keywords_up)[0];
    const ok = (outcome.reversed ? outcome.keywords_rev : outcome.keywords_up)[0];
    return `${q}每一段职业旅程，都是灵魂在物质世界中寻找意义的探索。\n\n牌阵的起点，【${first.name}】以「${fk}」描绘了你当下所处的能量场——${first.reversed ? first.meaning_rev.career : first.meaning_up.career}\n\n核心影响牌【${core.name}】以「${ck}」揭示了这一切背后的深层动力：${core.reversed ? core.meaning_rev.career : core.meaning_up.career}\n\n而结果之牌【${outcome.name}】以「${ok}」为你指引方向——${outcome.reversed ? outcome.meaning_rev.career : outcome.meaning_up.career}\n\n星辰的建议：你所拥有的力量远超你的想象。相信自己的直觉，在每一个选择中注入你真实的热情，道路自会在脚下延伸。`;
  }
  if (currentPage === 'cosmic') {
    const card = drawnCards[0];
    const keywords = (card.reversed ? card.keywords_rev : card.keywords_up).join('、');
    const meaning = card.reversed ? card.meaning_rev.general : card.meaning_up.general;
    return `宇宙今日为你送来【${card.name}】，以「${keywords}」为今日的关键词。\n\n${meaning}\n\n这张牌如同一盏灯，照亮你内心某个等待被看见的角落。带着这份觉知走过今天，你会发现，所有的相遇与际遇，都是宇宙精心编排的礼物。`;
  }
  return '';
}

function showReading() {
  const readingArea = document.querySelector(`#${currentPage} .reading-area`);
  if (!readingArea) return;
  const positions = getPositions();
  const question = (document.querySelector(`#${currentPage} .question-input`) || {}).value || '';
  const summary = getSummary(positions, question.trim());

  let html = '<div class="reading-card fade-in"><div class="reading-card-title">牌面解读</div>';
  drawnCards.forEach((card, i) => {
    const meaning = card.reversed ? card.meaning_rev : card.meaning_up;
    const ctx = currentPage === 'love' ? meaning.love : currentPage === 'career' ? meaning.career : meaning.general;
    html += `<div class="card-reading-item">
      <div class="card-reading-name">${SUIT_SYMBOLS[card.suit||'major']} ${card.name} · ${card.reversed?'逆位':'正位'}</div>
      <div class="card-reading-pos">位置：${positions[i] || `第${i+1}张`}</div>
      <div class="reading-text">${ctx}</div>
    </div>`;
  });
  html += '</div>';

  if (summary) {
    html += `<div class="reading-card reading-summary fade-in">
      <div class="reading-card-title">综合解读</div>
      <div class="reading-text">${summary.replace(/\n\n/g,'<br><br>').replace(/\n/g,'<br>')}</div>
    </div>`;
  }

  html += `<div class="ai-placeholder fade-in">
    <div class="ai-placeholder-icon">🔮</div>
    <div class="ai-placeholder-title">AI 深度解读</div>
    <div class="ai-placeholder-text">AI 个性化解读功能即将接入，<br>将结合你的问题与牌面给出深度分析。</div>
  </div>`;

  readingArea.innerHTML = html;
  readingArea.classList.add('visible');
  setTimeout(() => readingArea.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

// spreadClass: CSS class for the container, posClass: function(i) => extra class per card
function startSpread(page, cards, containerId, spreadId, readingId, positions, spreadClass, posClassFn) {
  drawnCards = cards;
  flippedSet = new Set();
  const container = document.getElementById(containerId);
  container.className = spreadClass;
  container.innerHTML = drawnCards.map((c, i) => renderCard(c, i, positions[i], posClassFn ? posClassFn(i) : '')).join('');
  const spreadArea = document.getElementById(spreadId);
  let flipBtn = spreadArea.querySelector('.flip-all-btn');
  if (!flipBtn) {
    flipBtn = document.createElement('button');
    flipBtn.className = 'flip-all-btn';
    flipBtn.onclick = flipAll;
    spreadArea.insertBefore(flipBtn, container);
  }
  flipBtn.textContent = '✦ 一键翻开';
  spreadArea.classList.add('visible');
  const readingArea = document.getElementById(readingId);
  readingArea.classList.remove('visible');
  readingArea.innerHTML = '';
}

function startDaily() {
  const positions = SPREADS.daily.frameworks[currentFrameworkIndex].positions;
  startSpread('daily', drawCards(3), 'daily-cards', 'daily-spread', 'daily-reading', positions, 'spread-daily');
}

function startLove() {
  const spread = SPREADS.love.spreads[currentSpreadIndex];
  const isCeltic = currentSpreadIndex === 1;
  const spreadClass = isCeltic ? 'spread-celtic' : 'spread-love-5';
  startSpread('love', drawCards(spread.count), 'love-cards', 'love-spread', 'love-reading',
    spread.positions, spreadClass, i => 'pos-' + i);
}

function startCareer() {
  const spread = SPREADS.career.spreads[currentSpreadIndex];
  const isHorseshoe = currentSpreadIndex === 1;
  const spreadClass = isHorseshoe ? 'spread-horseshoe' : 'spread-career-5';
  startSpread('career', drawCards(spread.count), 'career-cards', 'career-spread', 'career-reading',
    spread.positions, spreadClass, i => 'pos-' + i);
}

function startCosmic() {
  startSpread('cosmic', drawCards(1), 'cosmic-cards', 'cosmic-spread', 'cosmic-reading', ['宇宙讯息'], 'spread-cosmic');
}

function setFramework(index) {
  currentFrameworkIndex = index;
  document.querySelectorAll('#daily .framework-btn').forEach((b, i) => b.classList.toggle('active', i === index));
  if (drawnCards.length > 0 && currentPage === 'daily') startDaily();
}

function setLoveSpread(index) {
  currentSpreadIndex = index;
  document.querySelectorAll('#love .spread-btn').forEach((b, i) => b.classList.toggle('active', i === index));
}

function setCareerSpread(index) {
  currentSpreadIndex = index;
  document.querySelectorAll('#career .spread-btn').forEach((b, i) => b.classList.toggle('active', i === index));
}

document.addEventListener('DOMContentLoaded', () => {
  initStars();
  showPage('home');
});
