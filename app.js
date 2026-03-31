// ==================== DATA ====================
// Level: A2 (CEFR)

const VOCABULARY = {
  'Seyahat & Ulaşım': [
    { en: 'airport', tr: 'havalimanı', example: 'We arrived at the airport early.' },
    { en: 'passport', tr: 'pasaport', example: 'Don\'t forget your passport!' },
    { en: 'ticket', tr: 'bilet', example: 'I bought a ticket online.' },
    { en: 'luggage', tr: 'bagaj', example: 'My luggage is very heavy.' },
    { en: 'hotel', tr: 'otel', example: 'We stayed in a nice hotel.' },
    { en: 'reservation', tr: 'rezervasyon', example: 'I made a reservation for two nights.' },
    { en: 'departure', tr: 'kalkış', example: 'The departure is at 9 am.' },
    { en: 'arrival', tr: 'varış', example: 'The arrival time is 3 pm.' },
    { en: 'platform', tr: 'peron', example: 'The train leaves from platform 5.' },
    { en: 'delay', tr: 'gecikme', example: 'There is a delay of 20 minutes.' },
    { en: 'destination', tr: 'varış noktası', example: 'What is your final destination?' },
    { en: 'journey', tr: 'yolculuk', example: 'It was a long journey.' },
  ],
  'Yiyecek & İçecek': [
    { en: 'menu', tr: 'menü', example: 'Can I see the menu, please?' },
    { en: 'order', tr: 'sipariş vermek', example: 'Are you ready to order?' },
    { en: 'bill', tr: 'hesap', example: 'Can we have the bill, please?' },
    { en: 'vegetarian', tr: 'vejetaryen', example: 'Do you have vegetarian options?' },
    { en: 'ingredient', tr: 'malzeme', example: 'What ingredients are in this dish?' },
    { en: 'recipe', tr: 'tarif', example: 'She shared her recipe with me.' },
    { en: 'delicious', tr: 'lezzetli', example: 'This cake is delicious!' },
    { en: 'spicy', tr: 'baharatlı', example: 'I don\'t like spicy food.' },
    { en: 'portion', tr: 'porsiyon', example: 'The portions here are very large.' },
    { en: 'dessert', tr: 'tatlı', example: 'I always have dessert after dinner.' },
    { en: 'beverage', tr: 'içecek', example: 'Which beverage would you like?' },
    { en: 'takeaway', tr: 'paket servis', example: 'Let\'s order takeaway tonight.' },
  ],
  'İş & Meslekler': [
    { en: 'engineer', tr: 'mühendis', example: 'He is a software engineer.' },
    { en: 'nurse', tr: 'hemşire', example: 'She works as a nurse.' },
    { en: 'manager', tr: 'yönetici', example: 'I spoke to the manager.' },
    { en: 'colleague', tr: 'iş arkadaşı', example: 'My colleagues are very helpful.' },
    { en: 'salary', tr: 'maaş', example: 'She got a salary increase.' },
    { en: 'interview', tr: 'mülakat', example: 'I have a job interview tomorrow.' },
    { en: 'experience', tr: 'deneyim', example: 'You need two years of experience.' },
    { en: 'application', tr: 'başvuru', example: 'I sent my application yesterday.' },
    { en: 'meeting', tr: 'toplantı', example: 'The meeting starts at 10.' },
    { en: 'deadline', tr: 'son tarih', example: 'The deadline is Friday.' },
    { en: 'promotion', tr: 'terfi', example: 'She got a promotion last month.' },
    { en: 'retire', tr: 'emekli olmak', example: 'He plans to retire at 65.' },
  ],
  'Alışveriş': [
    { en: 'discount', tr: 'indirim', example: 'There is a 30% discount today.' },
    { en: 'receipt', tr: 'fiş/makbuz', example: 'Keep your receipt.' },
    { en: 'refund', tr: 'geri ödeme', example: 'I asked for a refund.' },
    { en: 'exchange', tr: 'değişim', example: 'Can I exchange this for a bigger size?' },
    { en: 'bargain', tr: 'fırsat/pazarlık', example: 'That coat was a real bargain.' },
    { en: 'queue', tr: 'kuyruk', example: 'There is a long queue at the checkout.' },
    { en: 'checkout', tr: 'kasa', example: 'Please pay at the checkout.' },
    { en: 'brand', tr: 'marka', example: 'What brand is this bag?' },
    { en: 'size', tr: 'beden/boyut', example: 'Do you have this in my size?' },
    { en: 'sale', tr: 'indirim/satış', example: 'Everything is on sale this week.' },
    { en: 'purchase', tr: 'satın alma', example: 'I made a big purchase today.' },
    { en: 'cash', tr: 'nakit', example: 'Do you accept cash?' },
  ],
  'Sağlık & Vücut': [
    { en: 'symptom', tr: 'belirti', example: 'What are your symptoms?' },
    { en: 'appointment', tr: 'randevu', example: 'I have a doctor\'s appointment.' },
    { en: 'prescription', tr: 'reçete', example: 'The doctor gave me a prescription.' },
    { en: 'allergy', tr: 'alerji', example: 'I have an allergy to cats.' },
    { en: 'headache', tr: 'baş ağrısı', example: 'I have a terrible headache.' },
    { en: 'fever', tr: 'ateş', example: 'The child has a high fever.' },
    { en: 'injury', tr: 'yaralanma', example: 'He had a knee injury.' },
    { en: 'recovery', tr: 'iyileşme', example: 'She is making a fast recovery.' },
    { en: 'exercise', tr: 'egzersiz yapmak', example: 'You should exercise regularly.' },
    { en: 'healthy', tr: 'sağlıklı', example: 'Eat healthy food every day.' },
    { en: 'pharmacy', tr: 'eczane', example: 'Is there a pharmacy nearby?' },
    { en: 'pain', tr: 'ağrı', example: 'I feel pain in my shoulder.' },
  ],
  'Hava & Çevre': [
    { en: 'temperature', tr: 'sıcaklık', example: 'The temperature is 30 degrees.' },
    { en: 'forecast', tr: 'hava tahmini', example: 'The forecast says it will rain.' },
    { en: 'cloudy', tr: 'bulutlu', example: 'It\'s cloudy and cold today.' },
    { en: 'storm', tr: 'fırtına', example: 'There was a big storm last night.' },
    { en: 'sunshine', tr: 'güneş ışığı', example: 'We enjoyed the sunshine.' },
    { en: 'humid', tr: 'nemli', example: 'It\'s very humid in summer.' },
    { en: 'windy', tr: 'rüzgarlı', example: 'It\'s too windy to go out.' },
    { en: 'drought', tr: 'kuraklık', example: 'The drought affected the crops.' },
    { en: 'flood', tr: 'sel', example: 'The flood destroyed many homes.' },
    { en: 'pollution', tr: 'kirlilik', example: 'Air pollution is a big problem.' },
    { en: 'recycle', tr: 'geri dönüştürmek', example: 'We should recycle more.' },
    { en: 'environment', tr: 'çevre', example: 'We must protect the environment.' },
  ],
  'Aile & İlişkiler': [
    { en: 'relationship', tr: 'ilişki', example: 'They have a good relationship.' },
    { en: 'argument', tr: 'tartışma', example: 'We had an argument yesterday.' },
    { en: 'neighbour', tr: 'komşu', example: 'My neighbour is very friendly.' },
    { en: 'relative', tr: 'akraba', example: 'We visited some relatives.' },
    { en: 'twins', tr: 'ikizler', example: 'She has twin brothers.' },
    { en: 'elderly', tr: 'yaşlı', example: 'We should help elderly people.' },
    { en: 'grown-up', tr: 'yetişkin', example: 'He\'s a grown-up now.' },
    { en: 'anniversary', tr: 'yıldönümü', example: 'It\'s our wedding anniversary.' },
    { en: 'divorce', tr: 'boşanma', example: 'They decided to divorce.' },
    { en: 'engaged', tr: 'nişanlı', example: 'They got engaged last summer.' },
    { en: 'friendship', tr: 'arkadaşlık', example: 'Our friendship is very strong.' },
    { en: 'trust', tr: 'güven', example: 'Trust is important in a family.' },
  ],
};

const GRAMMAR = [
  {
    id: 'comparatives',
    icon: '📊',
    title: 'Comparatives & Superlatives (Karşılaştırma)',
    desc: 'İki şeyi karşılaştırmak için -er/more, en üstünü belirtmek için -est/most kullanılır.',
    questions: [
      { sentence: 'This hotel is ___ (expensive) than the other one.', options: ['more expensive', 'expensiver', 'most expensive', 'the most expensive'], answer: 'more expensive' },
      { sentence: 'She is the ___ (fast) runner in the team.', options: ['faster', 'more fast', 'fastest', 'most fast'], answer: 'fastest' },
      { sentence: 'January is ___ (cold) than March.', options: ['more cold', 'coldest', 'the coldest', 'colder'], answer: 'colder' },
      { sentence: 'This is the ___ (good) film I\'ve ever seen.', options: ['better', 'gooder', 'best', 'most good'], answer: 'best' },
      { sentence: 'Your bag is ___ (heavy) than mine.', options: ['heavier', 'more heavy', 'heaviest', 'most heavy'], answer: 'heavier' },
    ]
  },
  {
    id: 'modals',
    icon: '🔑',
    title: 'Modal Verbs (Modal Fiiller)',
    desc: 'Can, could, should, must, have to — yetenek, tavsiye ve zorunluluk ifade eder.',
    questions: [
      { sentence: 'You ___ wear a seatbelt. It\'s the law.', options: ['should', 'could', 'must', 'might'], answer: 'must' },
      { sentence: 'She ___ speak three languages when she was a child.', options: ['can', 'must', 'could', 'should'], answer: 'could' },
      { sentence: 'You look tired. You ___ go to bed early tonight.', options: ['must', 'should', 'have to', 'could'], answer: 'should' },
      { sentence: 'I ___ find my keys anywhere!', options: ['mustn\'t', 'can\'t', 'shouldn\'t', 'couldn\'t'], answer: 'can\'t' },
      { sentence: 'We ___ (have to) pay extra for luggage.', options: ['must', 'should', 'have to', 'can'], answer: 'have to' },
    ]
  },
  {
    id: 'past-simple-irregular',
    icon: '📜',
    title: 'Past Simple — Düzensiz Fiiller',
    desc: 'Düzensiz fiillerin geçmiş zamanı -ed ile değil, özel formlarla yapılır.',
    questions: [
      { sentence: 'He ___ (take) the train to work yesterday.', options: ['taked', 'took', 'taken', 'takes'], answer: 'took' },
      { sentence: 'We ___ (go) to the beach last weekend.', options: ['goed', 'gone', 'went', 'goes'], answer: 'went' },
      { sentence: 'She ___ (write) a letter to her friend.', options: ['writed', 'written', 'wrote', 'writes'], answer: 'wrote' },
      { sentence: 'They ___ (spend) a lot of money on holiday.', options: ['spended', 'spend', 'spent', 'has spent'], answer: 'spent' },
      { sentence: 'I ___ (forget) to bring my umbrella.', options: ['forgeted', 'forgotten', 'forgot', 'forgets'], answer: 'forgot' },
    ]
  },
  {
    id: 'going-to-vs-will',
    icon: '🚀',
    title: 'Going to vs Will (Gelecek Zaman)',
    desc: '"Going to" planlar için, "will" anlık kararlar ve tahminler için kullanılır.',
    questions: [
      { sentence: 'Look at those clouds! It ___ rain soon.', options: ['will', 'is going to', 'goes to', 'shall'], answer: 'is going to' },
      { sentence: '"The phone is ringing." — "I ___ get it!"', options: ['am going to', 'will', 'shall to', 'going to'], answer: 'will' },
      { sentence: 'We ___ visit Rome next summer. We already have the tickets.', options: ['will', 'are going to', 'go to', 'shall'], answer: 'are going to' },
      { sentence: 'I think she ___ pass the exam. She studied a lot.', options: ['is going to', 'will', 'goes to', 'shall'], answer: 'will' },
      { sentence: 'He ___ become a doctor. It\'s his dream.', options: ['will', 'is going to', 'shall', 'goes to'], answer: 'is going to' },
    ]
  },
  {
    id: 'question-tags',
    icon: '❓',
    title: 'Question Tags (Soru Kuyrukları)',
    desc: '"..., isn\'t it?" gibi yapılar onay istemek için kullanılır.',
    questions: [
      { sentence: 'It\'s a beautiful day, ___?', options: ["isn't it", "is it", "doesn't it", "wasn't it"], answer: "isn't it" },
      { sentence: 'She doesn\'t like coffee, ___?', options: ["does she", "doesn't she", "is she", "isn't she"], answer: "does she" },
      { sentence: 'They went to Paris last year, ___?', options: ["didn't they", "did they", "weren't they", "don't they"], answer: "didn't they" },
      { sentence: 'You can swim, ___?', options: ["can\'t you", "can you", "don't you", "aren't you"], answer: "can't you" },
      { sentence: 'He will be late, ___?', options: ["will he", "won't he", "isn't he", "doesn't he"], answer: "won't he" },
    ]
  },
  {
    id: 'countable-uncountable',
    icon: '🔢',
    title: 'Countable & Uncountable Nouns (Sayılabilir/Sayılamaz)',
    desc: 'Some, any, much, many, a lot of kullanımı.',
    questions: [
      { sentence: 'How ___ money do you have?', options: ['many', 'much', 'few', 'number of'], answer: 'much' },
      { sentence: 'There aren\'t ___ students in the class today.', options: ['much', 'a lot', 'many', 'some'], answer: 'many' },
      { sentence: 'I need ___ help with this exercise.', options: ['many', 'a few', 'some', 'any number of'], answer: 'some' },
      { sentence: 'Is there ___ milk in the fridge?', options: ['many', 'some', 'few', 'any'], answer: 'any' },
      { sentence: 'She has ___ friends in the city.', options: ['much', 'a few', 'a little', 'any'], answer: 'a few' },
    ]
  },
  {
    id: 'present-perfect',
    icon: '🔄',
    title: 'Present Perfect (Geçmiş-Şimdi Bağlantısı)',
    desc: '"Have/has + past participle" — geçmişte başlayıp şimdiyle bağlantılı eylemler.',
    questions: [
      { sentence: 'I ___ (never / eat) sushi before.', options: ["never ate", "have never eaten", "never have eaten", "had never eat"], answer: "have never eaten" },
      { sentence: 'She ___ (already / finish) her homework.', options: ["already finished", "has already finished", "have already finished", "had already finish"], answer: "has already finished" },
      { sentence: '___ you ever ___ (visit) London?', options: ["Did / visit", "Have / visited", "Have / visit", "Did / visited"], answer: "Have / visited" },
      { sentence: 'They ___ (live) here since 2018.', options: ["lived", "are living", "have lived", "has lived"], answer: "have lived" },
      { sentence: 'He ___ (just / arrive) at the station.', options: ["just arrived", "has just arrived", "have just arrived", "just has arrived"], answer: "has just arrived" },
    ]
  },
];

const QUIZ_QUESTIONS = {
  vocabulary: () => {
    const all = Object.values(VOCABULARY).flat();
    return shuffle(all).slice(0, 10).map(w => ({
      question: `"${w.en}" kelimesinin Türkçesi nedir?`,
      correct: w.tr,
      options: shuffle([w.tr, ...getWrongOptions(all, w.tr, 'tr')]).slice(0, 4)
    }));
  },
  grammar: () => {
    const all = GRAMMAR.flatMap(g => g.questions.map(q => ({
      question: q.sentence,
      correct: q.answer,
      options: q.options
    })));
    return shuffle(all).slice(0, 10);
  },
  mixed: () => {
    const vq = QUIZ_QUESTIONS.vocabulary().slice(0, 5);
    const gq = QUIZ_QUESTIONS.grammar().slice(0, 5);
    return shuffle([...vq, ...gq]);
  }
};

// ==================== STATE ====================
let state = {
  currentSection: 'home',
  vocab: {
    category: Object.keys(VOCABULARY)[0],
    cardIndex: 0,
    flipped: false,
    marks: {} // word -> 'easy'|'medium'|'hard'
  },
  quiz: {
    active: false,
    type: null,
    questions: [],
    current: 0,
    score: 0,
    answers: []
  },
  stats: {
    wordsLearned: 0,
    quizzesCompleted: 0,
    streak: 1,
    quizHistory: []
  }
};

// Load from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem('englishup-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.vocab.marks = parsed.marks || {};
      state.stats = { ...state.stats, ...(parsed.stats || {}) };
    }
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem('englishup-state', JSON.stringify({
      marks: state.vocab.marks,
      stats: state.stats
    }));
  } catch (e) {}
}

// ==================== NAVIGATION ====================
function goTo(section) {
  state.currentSection = section;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(section).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.section === section);
  });
  if (section === 'home') renderHome();
  if (section === 'vocabulary') renderVocabulary();
  if (section === 'grammar') renderGrammarTopics();
  if (section === 'writing') renderWritingTopics();
  if (section === 'speaking') renderSpeakingTopics();
  if (section === 'progress') renderProgress();
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => goTo(btn.dataset.section));
});

// ==================== HOME ====================
function renderHome() {
  const marks = state.vocab.marks;
  const easy = Object.values(marks).filter(m => m === 'easy').length;
  document.getElementById('stat-words').textContent = easy;
  document.getElementById('stat-quizzes').textContent = state.stats.quizzesCompleted;
  document.getElementById('stat-streak').textContent = state.stats.streak;
}

// ==================== VOCABULARY ====================
function renderVocabulary() {
  const tabs = document.getElementById('cat-tabs');
  tabs.innerHTML = Object.keys(VOCABULARY).map(cat => {
    const safeAttr = cat.replace(/&/g, '&amp;').replace(/'/g, '&#39;');
    return `<button class="cat-tab ${cat === state.vocab.category ? 'active' : ''}" onclick="selectCategory('${safeAttr}')">${cat}</button>`;
  }).join('');
  renderCard();
  renderWordList();
}

function selectCategory(cat) {
  state.vocab.category = cat;
  state.vocab.cardIndex = 0;
  state.vocab.flipped = false;
  renderVocabulary();
}

function renderCard() {
  const words = VOCABULARY[state.vocab.category];
  const w = words[state.vocab.cardIndex];
  const card = document.getElementById('flashcard');
  card.className = 'flashcard' + (state.vocab.flipped ? ' flipped' : '');
  document.getElementById('card-en').textContent = w.en;
  document.getElementById('card-tr').textContent = w.tr;
  document.getElementById('card-example').textContent = w.example;
  document.getElementById('card-counter').textContent = `${state.vocab.cardIndex + 1} / ${words.length}`;
}

function flipCard() {
  state.vocab.flipped = !state.vocab.flipped;
  document.getElementById('flashcard').classList.toggle('flipped', state.vocab.flipped);
}

function nextCard() {
  const words = VOCABULARY[state.vocab.category];
  state.vocab.cardIndex = (state.vocab.cardIndex + 1) % words.length;
  state.vocab.flipped = false;
  renderCard();
}

function prevCard() {
  const words = VOCABULARY[state.vocab.category];
  state.vocab.cardIndex = (state.vocab.cardIndex - 1 + words.length) % words.length;
  state.vocab.flipped = false;
  renderCard();
}

function markCard(level) {
  const words = VOCABULARY[state.vocab.category];
  const w = words[state.vocab.cardIndex];
  state.vocab.marks[w.en] = level;
  state.stats.wordsLearned = Object.values(state.vocab.marks).filter(m => m === 'easy').length;
  saveState();
  renderWordList();
  nextCard();
}

function renderWordList() {
  const words = VOCABULARY[state.vocab.category];
  const list = document.getElementById('word-list');
  list.innerHTML = words.map(w => {
    const mark = state.vocab.marks[w.en];
    let cls = '';
    if (mark === 'easy') cls = 'learned';
    else if (mark === 'medium') cls = 'medium-lvl';
    else if (mark === 'hard') cls = 'hard-lvl';
    return `<div class="word-item ${cls}">
      <div class="en">${w.en}</div>
      <div class="tr">${w.tr}</div>
    </div>`;
  }).join('');
}

// ==================== GRAMMAR ====================
function renderGrammarTopics() {
  const container = document.getElementById('grammar-topics');
  container.style.display = 'grid';
  document.getElementById('grammar-exercise').style.display = 'none';
  container.innerHTML = GRAMMAR.map(g =>
    `<div class="grammar-topic-card" onclick="openGrammar('${g.id}')">
      <div class="topic-icon">${g.icon}</div>
      <h3>${g.title}</h3>
      <p>${g.desc}</p>
    </div>`
  ).join('');
}

function openGrammar(id) {
  const topic = GRAMMAR.find(g => g.id === id);
  document.getElementById('grammar-topics').style.display = 'none';
  const ex = document.getElementById('grammar-exercise');
  ex.style.display = 'block';
  document.getElementById('exercise-title').textContent = topic.icon + ' ' + topic.title;
  document.getElementById('exercise-desc').textContent = topic.desc;

  const content = document.getElementById('exercise-content');
  content.innerHTML = topic.questions.map((q, i) =>
    `<div class="exercise-item" id="ex-${i}">
      <p>${q.sentence}</p>
      <select id="sel-${i}">
        <option value="">-- Seç --</option>
        ${q.options.map(o => `<option value="${o}">${o}</option>`).join('')}
      </select>
      <div class="answer-feedback" id="fb-${i}"></div>
    </div>`
  ).join('') + `<button class="check-btn" id="check-btn-${id}" onclick="checkGrammar('${id}')">Cevapları Kontrol Et</button>
    <div class="grammar-result" id="grammar-result"></div>`;
}

function checkGrammar(id) {
  const topic = GRAMMAR.find(g => g.id === id);
  let correct = 0;
  topic.questions.forEach((q, i) => {
    const sel = document.getElementById(`sel-${i}`);
    const fb = document.getElementById(`fb-${i}`);
    sel.disabled = true;
    fb.style.display = 'block';
    if (sel.value === q.answer) {
      correct++;
      fb.textContent = '✓ Doğru!';
      fb.className = 'answer-feedback correct';
    } else {
      fb.textContent = `✗ Yanlış. Doğru cevap: "${q.answer}"`;
      fb.className = 'answer-feedback wrong';
    }
  });
  const checkBtn = document.getElementById(`check-btn-${id}`);
  if (checkBtn) checkBtn.disabled = true;
  const result = document.getElementById('grammar-result');
  result.style.display = 'block';
  const pct = Math.round((correct / topic.questions.length) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
  result.textContent = `${emoji} ${correct}/${topic.questions.length} doğru (${pct}%) — ${pct >= 80 ? 'Harika!' : pct >= 60 ? 'İyi iş!' : 'Biraz daha çalış!'}`;
}

function backToTopics() {
  renderGrammarTopics();
}

// ==================== QUIZ ====================
function startQuiz(type) {
  state.quiz.type = type;
  state.quiz.questions = QUIZ_QUESTIONS[type]();
  state.quiz.current = 0;
  state.quiz.score = 0;
  state.quiz.answers = [];

  document.getElementById('quiz-menu').style.display = 'none';
  document.getElementById('quiz-game').style.display = 'block';
  document.getElementById('quiz-result').style.display = 'none';

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = state.quiz.questions[state.quiz.current];
  const total = state.quiz.questions.length;
  const pct = (state.quiz.current / total) * 100;

  document.getElementById('quiz-progress-bar').style.width = pct + '%';
  document.getElementById('quiz-question-num').textContent = `Soru ${state.quiz.current + 1}/${total}`;
  document.getElementById('quiz-score-display').textContent = `Puan: ${state.quiz.score}`;
  document.getElementById('quiz-question').textContent = q.question;

  const opts = document.getElementById('quiz-options');
  opts.innerHTML = q.options.map(opt =>
    `<button class="quiz-option" onclick="answerQuiz(this, '${escapeAttr(opt)}', '${escapeAttr(q.correct)}')">${opt}</button>`
  ).join('');
}

function answerQuiz(btn, selected, correct) {
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach(b => { b.disabled = true; });

  const isCorrect = selected === correct;
  btn.classList.add(isCorrect ? 'correct' : 'wrong');

  if (!isCorrect) {
    buttons.forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
  }

  state.quiz.answers.push({ correct: isCorrect });
  if (isCorrect) state.quiz.score += 10;

  setTimeout(() => {
    state.quiz.current++;
    if (state.quiz.current >= state.quiz.questions.length) {
      showQuizResult();
    } else {
      renderQuizQuestion();
    }
  }, 900);
}

function showQuizResult() {
  document.getElementById('quiz-game').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';

  const total = state.quiz.questions.length;
  const correct = state.quiz.answers.filter(a => a.correct).length;
  const pct = Math.round((correct / total) * 100);

  state.stats.quizzesCompleted++;
  state.stats.quizHistory.unshift({
    type: { vocabulary: 'Kelime', grammar: 'Gramer', mixed: 'Karma' }[state.quiz.type],
    score: pct,
    date: new Date().toLocaleDateString('tr-TR')
  });
  if (state.stats.quizHistory.length > 10) state.stats.quizHistory.pop();
  saveState();

  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚';
  const msg = pct >= 90 ? 'Mükemmel! İngilizce çok iyi!' : pct >= 70 ? 'Harika iş! Devam et!' : pct >= 50 ? 'Fena değil, biraz daha çalış!' : 'Üzülme, pratik yaparsan iyileşeceksin!';

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-score').textContent = `%${pct} — ${state.quiz.score} puan`;
  document.getElementById('result-msg').textContent = msg;
  document.getElementById('result-details').innerHTML = `
    <div class="result-detail-item">
      <span class="result-detail-num" style="color:var(--success)">${correct}</span>
      <span class="result-detail-label">Doğru</span>
    </div>
    <div class="result-detail-item">
      <span class="result-detail-num" style="color:var(--danger)">${total - correct}</span>
      <span class="result-detail-label">Yanlış</span>
    </div>
    <div class="result-detail-item">
      <span class="result-detail-num" style="color:var(--primary)">${state.quiz.score}</span>
      <span class="result-detail-label">Puan</span>
    </div>
  `;
}

function resetQuiz() {
  document.getElementById('quiz-game').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-menu').style.display = 'block';
}

// ==================== PROGRESS ====================
function renderProgress() {
  const marks = state.vocab.marks;
  const total = Object.values(VOCABULARY).flat().length;
  const easy = Object.values(marks).filter(m => m === 'easy').length;
  const medium = Object.values(marks).filter(m => m === 'medium').length;
  const hard = Object.values(marks).filter(m => m === 'hard').length;

  document.getElementById('count-easy').textContent = easy;
  document.getElementById('count-medium').textContent = medium;
  document.getElementById('count-hard').textContent = hard;

  document.getElementById('bar-easy').style.width = total ? (easy / total * 100) + '%' : '0%';
  document.getElementById('bar-medium').style.width = total ? (medium / total * 100) + '%' : '0%';
  document.getElementById('bar-hard').style.width = total ? (hard / total * 100) + '%' : '0%';

  const historyEl = document.getElementById('quiz-history');
  if (state.stats.quizHistory.length === 0) {
    historyEl.innerHTML = '<p class="no-history">Henüz quiz tamamlanmadı.</p>';
  } else {
    historyEl.innerHTML = state.stats.quizHistory.map(h =>
      `<div class="quiz-history-item">
        <span>${h.type} — ${h.date}</span>
        <span class="quiz-score-badge">%${h.score}</span>
      </div>`
    ).join('');
  }

  const goals = [
    { icon: '📚', label: '10 kelime öğren', done: easy >= 10 },
    { icon: '🎯', label: '5 quiz tamamla', done: state.stats.quizzesCompleted >= 5 },
    { icon: '✏️', label: 'Tüm gramer konularını çöz', done: false },
    { icon: '🏆', label: 'Quizden 100 puan al', done: state.stats.quizHistory.some(h => h.score === 100) },
    { icon: '⭐', label: '50 kelime öğren', done: easy >= 50 },
  ];

  document.getElementById('goals-list').innerHTML = goals.map(g =>
    `<div class="goal-item">
      <span class="goal-icon">${g.icon}</span>
      <span>${g.label}</span>
      <span class="goal-check">${g.done ? '✅' : '⭕'}</span>
    </div>`
  ).join('');
}

// ==================== WRITING ====================
const WRITING = [
  {
    id: 'error-correction',
    icon: '🔍',
    title: 'Hata Düzeltme',
    desc: 'Her cümlede bir yanlış kelime veya yapı var. Doğrusunu seç.',
    questions: [
      { sentence: 'She don\'t like coffee in the morning.', options: ['don\'t', 'doesn\'t', 'isn\'t', 'aren\'t'], answer: 'doesn\'t', context: 'She ___ like coffee in the morning.' },
      { sentence: 'They was very tired after the trip.', options: ['was', 'were', 'are', 'be'], answer: 'were', context: 'They ___ very tired after the trip.' },
      { sentence: 'I have seen him yesterday.', options: ['have seen', 'saw', 'see', 'seen'], answer: 'saw', context: 'I ___ him yesterday.' },
      { sentence: 'He can to swim very well.', options: ['can to swim', 'can swim', 'could to swim', 'cans swim'], answer: 'can swim', context: 'He ___ very well.' },
      { sentence: 'She is more tall than her sister.', options: ['more tall', 'taller', 'tallest', 'most tall'], answer: 'taller', context: 'She is ___ than her sister.' },
      { sentence: 'I didn\'t went to the party last night.', options: ['didn\'t went', 'didn\'t go', 'don\'t go', 'wasn\'t go'], answer: 'didn\'t go', context: 'I ___ to the party last night.' },
    ]
  },
  {
    id: 'fill-blank',
    icon: '✍️',
    title: 'Boşluk Doldurma',
    desc: 'Metindeki boşlukları doğru kelimelerle tamamla.',
    questions: [
      { sentence: 'I usually ___ breakfast at 7 am.', options: ['have', 'has', 'having', 'had'], answer: 'have' },
      { sentence: 'She ___ been to London three times.', options: ['has', 'have', 'had', 'is'], answer: 'has' },
      { sentence: 'If I ___ more time, I would study harder.', options: ['have', 'had', 'has', 'having'], answer: 'had' },
      { sentence: 'The letter ___ written by my manager.', options: ['is', 'was', 'were', 'be'], answer: 'was' },
      { sentence: 'He told me ___ he was feeling better.', options: ['what', 'that', 'which', 'who'], answer: 'that' },
      { sentence: 'You should eat ___ sugar — it\'s bad for you.', options: ['too many', 'too much', 'enough', 'very'], answer: 'too much' },
    ]
  },
  {
    id: 'email-writing',
    icon: '📧',
    title: 'E-posta Yazma',
    desc: 'Bir e-postanın boşluklarını doğru ifadelerle tamamla.',
    questions: [
      { sentence: 'Dear Sir/Madam, ___ writing to apply for the position.', options: ['I am', 'I be', 'I were', 'Am I'], answer: 'I am' },
      { sentence: '___ your advertisement in the newspaper.', options: ['I saw', 'I see', 'I have see', 'Saw I'], answer: 'I saw' },
      { sentence: 'I would ___ to arrange a meeting.', options: ['like', 'likes', 'liked', 'liking'], answer: 'like' },
      { sentence: 'Please ___ me know if this is convenient.', options: ['let', 'leave', 'make', 'do'], answer: 'let' },
      { sentence: 'I look ___ to hearing from you.', options: ['forward', 'ahead', 'front', 'after'], answer: 'forward' },
      { sentence: '___ regards, John Smith.', options: ['Kind', 'Good', 'Best', 'Nice'], answer: 'Kind' },
    ]
  },
  {
    id: 'sentence-reorder',
    icon: '🔀',
    title: 'Cümle Düzenleme',
    desc: 'Verilen kelime grubundan doğru cümleyi seç.',
    questions: [
      { sentence: 'Hangi sıralama doğru? (every / goes / she / morning / jogging)', options: ['She goes jogging every morning.', 'Every she goes morning jogging.', 'Jogging goes she every morning.', 'She morning goes every jogging.'], answer: 'She goes jogging every morning.' },
      { sentence: 'Hangi sıralama doğru? (been / has / she / to / never / Paris)', options: ['She has never been to Paris.', 'Never she has been to Paris.', 'She never has been Paris to.', 'Has she never to Paris been.'], answer: 'She has never been to Paris.' },
      { sentence: 'Hangi sıralama doğru? (I / be / will / tomorrow / late)', options: ['I will be late tomorrow.', 'I late will be tomorrow.', 'Will I be tomorrow late.', 'Tomorrow I late will be.'], answer: 'I will be late tomorrow.' },
      { sentence: 'Hangi sıralama doğru? (the / was / built / bridge / 1990 / in)', options: ['The bridge was built in 1990.', 'In 1990 the built was bridge.', 'The built bridge was in 1990.', 'Was the bridge built 1990 in.'], answer: 'The bridge was built in 1990.' },
      { sentence: 'Hangi sıralama doğru? (if / had / a car / I / drive / would / I)', options: ['If I had a car, I would drive.', 'I would drive if had I a car.', 'Had I a car if I would drive.', 'If I would have a car, I drive.'], answer: 'If I had a car, I would drive.' },
    ]
  },
  {
    id: 'paragraph',
    icon: '📄',
    title: 'Paragraf Tamamlama',
    desc: 'Bağlaç ve geçiş ifadelerini doğru yere koy.',
    questions: [
      { sentence: 'I wanted to go to the gym. ___, I was too tired.', options: ['However', 'Therefore', 'Moreover', 'Because'], answer: 'However' },
      { sentence: 'She studied hard. ___, she passed the exam.', options: ['As a result', 'However', 'Although', 'Unless'], answer: 'As a result' },
      { sentence: 'I love cooking. ___, I enjoy baking cakes.', options: ['In addition', 'Despite', 'Although', 'Therefore'], answer: 'In addition' },
      { sentence: '___ it was raining, we went for a walk.', options: ['Although', 'Because', 'Therefore', 'Moreover'], answer: 'Although' },
      { sentence: 'The hotel was expensive. ___, the service was excellent.', options: ['Nevertheless', 'Because', 'So', 'Since'], answer: 'Nevertheless' },
    ]
  },
];

function renderWritingTopics() {
  const container = document.getElementById('writing-topics');
  container.style.display = 'grid';
  document.getElementById('writing-exercise').style.display = 'none';
  container.innerHTML = WRITING.map(w =>
    `<div class="grammar-topic-card" onclick="openWriting('${w.id}')">
      <div class="topic-icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>`
  ).join('');
}

function openWriting(id) {
  const topic = WRITING.find(w => w.id === id);
  document.getElementById('writing-topics').style.display = 'none';
  const ex = document.getElementById('writing-exercise');
  ex.style.display = 'block';
  document.getElementById('writing-ex-title').textContent = topic.icon + ' ' + topic.title;
  document.getElementById('writing-ex-desc').textContent = topic.desc;

  const content = document.getElementById('writing-ex-content');
  content.innerHTML = topic.questions.map((q, i) =>
    `<div class="exercise-item" id="wex-${i}">
      <p>${q.context || q.sentence}</p>
      <select id="wsel-${i}">
        <option value="">-- Seç --</option>
        ${q.options.map(o => `<option value="${o}">${o}</option>`).join('')}
      </select>
      <div class="answer-feedback" id="wfb-${i}"></div>
    </div>`
  ).join('') + `<button class="check-btn" id="wcheck-${id}" onclick="checkWriting('${id}')">Cevapları Kontrol Et</button>
    <div class="grammar-result" id="writing-result"></div>`;
}

function checkWriting(id) {
  const topic = WRITING.find(w => w.id === id);
  let correct = 0;
  topic.questions.forEach((q, i) => {
    const sel = document.getElementById(`wsel-${i}`);
    const fb = document.getElementById(`wfb-${i}`);
    sel.disabled = true;
    fb.style.display = 'block';
    if (sel.value === q.answer) {
      correct++;
      fb.textContent = '✓ Doğru!';
      fb.className = 'answer-feedback correct';
    } else {
      fb.textContent = `✗ Yanlış. Doğru cevap: "${q.answer}"`;
      fb.className = 'answer-feedback wrong';
    }
  });
  const btn = document.getElementById(`wcheck-${id}`);
  if (btn) btn.disabled = true;
  const result = document.getElementById('writing-result');
  result.style.display = 'block';
  const pct = Math.round((correct / topic.questions.length) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
  result.textContent = `${emoji} ${correct}/${topic.questions.length} doğru (${pct}%) — ${pct >= 80 ? 'Harika!' : pct >= 60 ? 'İyi iş!' : 'Biraz daha çalış!'}`;
}

function backToWritingTopics() { renderWritingTopics(); }

// ==================== SPEAKING ====================
const SPEAKING = [
  {
    id: 'restaurant',
    icon: '🍽️',
    title: 'Restoranda',
    desc: 'Restoranda geçen bir İngilizce diyalogu oku ve pratik yap.',
    type: 'dialogue',
    lines: [
      { speaker: 'Waiter', text: 'Good evening! Do you have a reservation?' },
      { speaker: 'Customer', text: 'Yes, I have a reservation for two under Smith.' },
      { speaker: 'Waiter', text: 'Perfect. Please follow me to your table.' },
      { speaker: 'Customer', text: 'Could we see the menu, please?' },
      { speaker: 'Waiter', text: 'Of course! Here you are. Can I get you something to drink first?' },
      { speaker: 'Customer', text: 'Yes, I\'ll have a glass of water, please.' },
      { speaker: 'Waiter', text: 'Are you ready to order?' },
      { speaker: 'Customer', text: 'I\'d like the grilled chicken, please.' },
      { speaker: 'Waiter', text: 'Excellent choice! And for dessert?' },
      { speaker: 'Customer', text: 'Could we have the bill, please?' },
    ],
    phrases: ['Do you have a reservation?', 'I\'d like...', 'Could we have the bill?', 'Are you ready to order?']
  },
  {
    id: 'doctor',
    icon: '🏥',
    title: 'Doktorda',
    desc: 'Doktor randevusunda kullanılan İngilizce ifadeler.',
    type: 'dialogue',
    lines: [
      { speaker: 'Doctor', text: 'Good morning! What seems to be the problem?' },
      { speaker: 'Patient', text: 'I\'ve had a terrible headache for two days.' },
      { speaker: 'Doctor', text: 'I see. Do you have any other symptoms?' },
      { speaker: 'Patient', text: 'Yes, I also have a fever and I feel very tired.' },
      { speaker: 'Doctor', text: 'How long have you felt like this?' },
      { speaker: 'Patient', text: 'Since Monday. I also have a sore throat.' },
      { speaker: 'Doctor', text: 'Let me take your temperature. Open your mouth please.' },
      { speaker: 'Patient', text: 'Is it serious, doctor?' },
      { speaker: 'Doctor', text: 'No, it\'s just a flu. I\'ll prescribe some medication.' },
      { speaker: 'Patient', text: 'Thank you. How many times a day should I take it?' },
    ],
    phrases: ['What seems to be the problem?', 'I\'ve had a headache.', 'Any other symptoms?', 'I\'ll prescribe...']
  },
  {
    id: 'hotel',
    icon: '🏨',
    title: 'Otelde',
    desc: 'Otele giriş ve çıkış için gerekli İngilizce ifadeler.',
    type: 'dialogue',
    lines: [
      { speaker: 'Receptionist', text: 'Good afternoon! Welcome to Grand Hotel.' },
      { speaker: 'Guest', text: 'Hello, I have a reservation. My name is Taylor.' },
      { speaker: 'Receptionist', text: 'Let me check that for you. Yes, a double room for three nights?' },
      { speaker: 'Guest', text: 'That\'s correct. Is breakfast included?' },
      { speaker: 'Receptionist', text: 'Yes, breakfast is served from 7 to 10 am.' },
      { speaker: 'Guest', text: 'What time is check-out?' },
      { speaker: 'Receptionist', text: 'Check-out is at 11 am. Here is your key card.' },
      { speaker: 'Guest', text: 'Is there a gym in the hotel?' },
      { speaker: 'Receptionist', text: 'Yes, the gym is on the 3rd floor and is open 24 hours.' },
      { speaker: 'Guest', text: 'Great, thank you very much!' },
    ],
    phrases: ['I have a reservation.', 'Is breakfast included?', 'What time is check-out?', 'Here is your key card.']
  },
  {
    id: 'shopping',
    icon: '🛍️',
    title: 'Alışverişte',
    desc: 'Mağazada alışveriş yaparken kullanılan ifadeler.',
    type: 'dialogue',
    lines: [
      { speaker: 'Assistant', text: 'Hi there! Can I help you?' },
      { speaker: 'Customer', text: 'Yes, I\'m looking for a jacket.' },
      { speaker: 'Assistant', text: 'What size are you?' },
      { speaker: 'Customer', text: 'I\'m a medium. Do you have this in blue?' },
      { speaker: 'Assistant', text: 'Let me check in the back. Yes, we have it in blue!' },
      { speaker: 'Customer', text: 'Can I try it on?' },
      { speaker: 'Assistant', text: 'Of course! The fitting room is over there.' },
      { speaker: 'Customer', text: 'I\'ll take it. How much is it?' },
      { speaker: 'Assistant', text: 'It\'s £45. We also have a 20% discount today.' },
      { speaker: 'Customer', text: 'That\'s great! Can I pay by card?' },
    ],
    phrases: ['Can I help you?', 'I\'m looking for...', 'Can I try it on?', 'How much is it?']
  },
  {
    id: 'directions',
    icon: '🗺️',
    title: 'Yön Tarifi',
    desc: 'Yol tarif etme ve sormak için İngilizce ifadeler.',
    type: 'dialogue',
    lines: [
      { speaker: 'Person A', text: 'Excuse me, could you help me?' },
      { speaker: 'Person B', text: 'Of course, what do you need?' },
      { speaker: 'Person A', text: 'I\'m looking for the train station. Am I going the right way?' },
      { speaker: 'Person B', text: 'No, you\'re going in the wrong direction.' },
      { speaker: 'Person A', text: 'Oh no! How do I get there from here?' },
      { speaker: 'Person B', text: 'Turn left at the traffic lights, then go straight ahead.' },
      { speaker: 'Person A', text: 'Is it far from here?' },
      { speaker: 'Person B', text: 'No, it\'s about a 10-minute walk.' },
      { speaker: 'Person A', text: 'And is there a bus I can take?' },
      { speaker: 'Person B', text: 'Yes, take the number 5 bus. It stops right outside.' },
    ],
    phrases: ['Could you help me?', 'Turn left/right.', 'Go straight ahead.', 'How far is it?']
  },
  {
    id: 'job-interview',
    icon: '💼',
    title: 'İş Görüşmesi',
    desc: 'İş görüşmesinde kullanılan temel İngilizce ifadeler.',
    type: 'dialogue',
    lines: [
      { speaker: 'Interviewer', text: 'Good morning! Please, have a seat.' },
      { speaker: 'Candidate', text: 'Good morning. Thank you for seeing me.' },
      { speaker: 'Interviewer', text: 'So, tell me a little about yourself.' },
      { speaker: 'Candidate', text: 'I have 3 years of experience in marketing and I\'m a team player.' },
      { speaker: 'Interviewer', text: 'Why do you want to work for our company?' },
      { speaker: 'Candidate', text: 'I admire your company\'s values and I believe I can contribute.' },
      { speaker: 'Interviewer', text: 'What are your strengths?' },
      { speaker: 'Candidate', text: 'I\'m very organised and I work well under pressure.' },
      { speaker: 'Interviewer', text: 'Do you have any questions for us?' },
      { speaker: 'Candidate', text: 'Yes, what are the opportunities for career development?' },
    ],
    phrases: ['Tell me about yourself.', 'I have experience in...', 'Why do you want to work here?', 'What are your strengths?']
  },
  {
    id: 'pronunciation',
    icon: '🔊',
    title: 'Telaffuz Rehberi',
    desc: 'Türk öğrencilerin zorlandığı İngilizce sesler ve örnekler.',
    type: 'pronunciation',
    sounds: [
      { sound: 'th (sesli)', ipa: '/ð/', words: ['the', 'this', 'that', 'there', 'they'], tip: 'Dilinizi üst dişlerinize hafifçe değdirin, ses çıkarın.' },
      { sound: 'th (sessiz)', ipa: '/θ/', words: ['think', 'three', 'thank', 'Thursday', 'tooth'], tip: 'Dilinizi üst dişlerinize değdirin, nefes verin.' },
      { sound: 'w', ipa: '/w/', words: ['water', 'work', 'week', 'window', 'world'], tip: 'Dudaklarınızı yuvarlayın, "v" değil "u" gibi başlayın.' },
      { sound: 'v', ipa: '/v/', words: ['visit', 'very', 'village', 'voice', 'over'], tip: 'Üst dişlerinizi alt dudağınıza değdirin.' },
      { sound: 'r', ipa: '/r/', words: ['red', 'right', 'road', 'round', 'river'], tip: 'Türkçe "r"den farklı — dilinizi yukarı kaldırmayın.' },
      { sound: 'ı (kısa)', ipa: '/ɪ/', words: ['sit', 'big', 'trip', 'quick', 'list'], tip: 'Kısa "i" sesi — ağzı çok açmadan söyleyin.' },
    ]
  },
  {
    id: 'making-plans',
    icon: '📅',
    title: 'Plan Yapma',
    desc: 'Arkadaşlarla plan yaparken kullanılan İngilizce ifadeler.',
    type: 'dialogue',
    lines: [
      { speaker: 'Alex', text: 'Hey! Are you free this weekend?' },
      { speaker: 'Sam', text: 'I think so. What did you have in mind?' },
      { speaker: 'Alex', text: 'I was thinking we could go to the cinema.' },
      { speaker: 'Sam', text: 'That sounds great! What\'s on?' },
      { speaker: 'Alex', text: 'There\'s a new action film. It starts at 7 pm.' },
      { speaker: 'Sam', text: 'Perfect. Shall we meet outside the cinema at 6:45?' },
      { speaker: 'Alex', text: 'Sure! Don\'t forget to book the tickets online.' },
      { speaker: 'Sam', text: 'Good idea. I\'ll do it now. How many tickets do we need?' },
      { speaker: 'Alex', text: 'Just two. Do you want to get dinner before the film?' },
      { speaker: 'Sam', text: 'Absolutely! Let\'s meet at 6 then.' },
    ],
    phrases: ['Are you free?', 'What did you have in mind?', 'That sounds great!', 'Shall we meet at...?']
  },
];

function renderSpeakingTopics() {
  const container = document.getElementById('speaking-topics');
  container.style.display = 'grid';
  document.getElementById('speaking-exercise').style.display = 'none';
  container.innerHTML = SPEAKING.map(s =>
    `<div class="grammar-topic-card" onclick="openSpeaking('${s.id}')">
      <div class="topic-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`
  ).join('');
}

function openSpeaking(id) {
  const topic = SPEAKING.find(s => s.id === id);
  document.getElementById('speaking-topics').style.display = 'none';
  const ex = document.getElementById('speaking-exercise');
  ex.style.display = 'block';
  document.getElementById('speaking-ex-title').textContent = topic.icon + ' ' + topic.title;
  document.getElementById('speaking-ex-desc').textContent = topic.desc;

  const content = document.getElementById('speaking-ex-content');

  if (topic.type === 'pronunciation') {
    content.innerHTML = topic.sounds.map(s =>
      `<div class="pronunciation-card">
        <div class="pron-header">
          <span class="pron-sound">${s.sound}</span>
          <span class="pron-ipa">${s.ipa}</span>
        </div>
        <div class="pron-words">${s.words.map(w => `<span class="pron-word">${w}</span>`).join('')}</div>
        <p class="pron-tip">💡 ${s.tip}</p>
      </div>`
    ).join('');
    return;
  }

  content.innerHTML = `
    <div class="dialogue-hint">💡 Her satırı sesli okuyun. "B Rolü"nü gizleyerek pratik yapabilirsiniz.</div>
    <button class="btn-secondary" style="margin-bottom:1rem;" onclick="toggleSpeakerB('${id}')">👁 B Rolünü Gizle/Göster</button>
    <div class="dialogue-container" id="dialogue-${id}">
      ${topic.lines.map((l, i) =>
        `<div class="dialogue-line ${i % 2 === 0 ? 'line-a' : 'line-b'}">
          <span class="dialogue-speaker">${l.speaker}</span>
          <span class="dialogue-text">${l.text}</span>
        </div>`
      ).join('')}
    </div>
    <div class="key-phrases">
      <h4>🔑 Anahtar İfadeler</h4>
      <div class="phrases-list">
        ${topic.phrases.map(p => `<span class="phrase-tag">"${p}"</span>`).join('')}
      </div>
    </div>`;
}

function toggleSpeakerB(id) {
  const container = document.getElementById(`dialogue-${id}`);
  container.querySelectorAll('.line-b').forEach(el => el.classList.toggle('hidden-line'));
}

function backToSpeakingTopics() { renderSpeakingTopics(); }

// ==================== UTILS ====================
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getWrongOptions(all, correctTr, field) {
  return shuffle(all.filter(w => w[field] !== correctTr)).slice(0, 3).map(w => w[field]);
}

function escapeAttr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ==================== INIT ====================
loadState();
renderHome();
renderVocabulary();
renderGrammarTopics();
