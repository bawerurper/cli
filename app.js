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
      question: q.sentence.replace('___', '___'),
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
  tabs.innerHTML = Object.keys(VOCABULARY).map(cat =>
    `<button class="cat-tab ${cat === state.vocab.category ? 'active' : ''}" onclick="selectCategory('${cat}')">${cat}</button>`
  ).join('');
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
  if (level === 'easy') {
    state.stats.wordsLearned = Object.values(state.vocab.marks).filter(m => m === 'easy').length;
  }
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
  ).join('');

  content.innerHTML += `<button class="check-btn" onclick="checkGrammar('${id}')">Cevapları Kontrol Et</button>
    <div class="grammar-result" id="grammar-result"></div>`;
}

function checkGrammar(id) {
  const topic = GRAMMAR.find(g => g.id === id);
  let correct = 0;
  topic.questions.forEach((q, i) => {
    const sel = document.getElementById(`sel-${i}`);
    const fb = document.getElementById(`fb-${i}`);
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
