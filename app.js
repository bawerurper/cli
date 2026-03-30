// ==================== DATA ====================

const VOCABULARY = {
  'Günlük Hayat': [
    { en: 'apple', tr: 'elma', example: 'I eat an apple every day.' },
    { en: 'water', tr: 'su', example: 'Please give me some water.' },
    { en: 'house', tr: 'ev', example: 'My house is near the park.' },
    { en: 'car', tr: 'araba', example: 'She drives a red car.' },
    { en: 'book', tr: 'kitap', example: 'I love reading books.' },
    { en: 'phone', tr: 'telefon', example: 'My phone is charging.' },
    { en: 'chair', tr: 'sandalye', example: 'Sit on the chair.' },
    { en: 'table', tr: 'masa', example: 'The book is on the table.' },
    { en: 'door', tr: 'kapı', example: 'Please close the door.' },
    { en: 'window', tr: 'pencere', example: 'Open the window please.' },
  ],
  'Renkler': [
    { en: 'red', tr: 'kırmızı', example: 'The rose is red.' },
    { en: 'blue', tr: 'mavi', example: 'The sky is blue.' },
    { en: 'green', tr: 'yeşil', example: 'The grass is green.' },
    { en: 'yellow', tr: 'sarı', example: 'The sun is yellow.' },
    { en: 'black', tr: 'siyah', example: 'My cat is black.' },
    { en: 'white', tr: 'beyaz', example: 'Snow is white.' },
    { en: 'orange', tr: 'turuncu', example: 'The pumpkin is orange.' },
    { en: 'purple', tr: 'mor', example: 'She likes purple flowers.' },
    { en: 'pink', tr: 'pembe', example: 'The dress is pink.' },
    { en: 'brown', tr: 'kahverengi', example: 'The bear is brown.' },
  ],
  'Sayılar': [
    { en: 'one', tr: 'bir', example: 'I have one brother.' },
    { en: 'two', tr: 'iki', example: 'She has two cats.' },
    { en: 'three', tr: 'üç', example: 'There are three books.' },
    { en: 'four', tr: 'dört', example: 'We have four seasons.' },
    { en: 'five', tr: 'beş', example: 'I work five days a week.' },
    { en: 'ten', tr: 'on', example: 'He is ten years old.' },
    { en: 'twenty', tr: 'yirmi', example: 'She is twenty years old.' },
    { en: 'hundred', tr: 'yüz', example: 'There are a hundred pages.' },
    { en: 'first', tr: 'birinci', example: 'I came first in the race.' },
    { en: 'last', tr: 'son/sonuncu', example: 'This is the last chance.' },
  ],
  'Fiiller': [
    { en: 'run', tr: 'koşmak', example: 'I run every morning.' },
    { en: 'eat', tr: 'yemek', example: 'We eat dinner at 7.' },
    { en: 'sleep', tr: 'uyumak', example: 'I sleep 8 hours a night.' },
    { en: 'work', tr: 'çalışmak', example: 'She works at a hospital.' },
    { en: 'study', tr: 'çalışmak/okumak', example: 'He studies English.' },
    { en: 'speak', tr: 'konuşmak', example: 'Can you speak Turkish?' },
    { en: 'write', tr: 'yazmak', example: 'I write in my diary.' },
    { en: 'read', tr: 'okumak', example: 'She reads books at night.' },
    { en: 'listen', tr: 'dinlemek', example: 'Please listen carefully.' },
    { en: 'learn', tr: 'öğrenmek', example: 'I want to learn French.' },
  ],
  'Duygular': [
    { en: 'happy', tr: 'mutlu', example: 'I am very happy today.' },
    { en: 'sad', tr: 'üzgün', example: 'She looks sad today.' },
    { en: 'angry', tr: 'kızgın', example: 'He is angry about the news.' },
    { en: 'excited', tr: 'heyecanlı', example: 'I am excited for the trip.' },
    { en: 'tired', tr: 'yorgun', example: 'I feel very tired.' },
    { en: 'scared', tr: 'korkmuş', example: 'The child was scared.' },
    { en: 'surprised', tr: 'şaşırmış', example: 'She was surprised by the gift.' },
    { en: 'bored', tr: 'sıkılmış', example: 'I am bored at home.' },
    { en: 'proud', tr: 'gururlu', example: 'I am proud of you.' },
    { en: 'nervous', tr: 'gergin', example: 'He is nervous before the exam.' },
  ],
};

const GRAMMAR = [
  {
    id: 'present-simple',
    icon: '⏰',
    title: 'Present Simple (Geniş Zaman)',
    desc: 'Her zaman doğru olan gerçekler ve alışkanlıklar için kullanılır.',
    questions: [
      { sentence: 'She ___ (go) to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 'goes' },
      { sentence: 'They ___ (play) football on Sundays.', options: ['plays', 'playing', 'play', 'played'], answer: 'play' },
      { sentence: 'He ___ (not like) coffee.', options: ["doesn't likes", "don't like", "doesn't like", "not likes"], answer: "doesn't like" },
      { sentence: 'The sun ___ (rise) in the east.', options: ['rise', 'risen', 'rises', 'rising'], answer: 'rises' },
      { sentence: '___ you ___ (speak) English?', options: ['Does / speak', 'Do / speak', 'Do / speaks', 'Are / speak'], answer: 'Do / speak' },
    ]
  },
  {
    id: 'past-simple',
    icon: '📜',
    title: 'Past Simple (Geçmiş Zaman)',
    desc: 'Geçmişte tamamlanmış eylemler için kullanılır.',
    questions: [
      { sentence: 'She ___ (visit) Paris last year.', options: ['visits', 'visiting', 'visited', 'visit'], answer: 'visited' },
      { sentence: 'They ___ (not watch) the movie.', options: ["didn't watched", "didn't watch", "don't watched", "doesn't watch"], answer: "didn't watch" },
      { sentence: 'He ___ (buy) a new car yesterday.', options: ['buyed', 'buy', 'bought', 'buys'], answer: 'bought' },
      { sentence: '___ she ___ (call) you?', options: ['Did / called', 'Does / call', 'Did / call', 'Do / call'], answer: 'Did / call' },
      { sentence: 'I ___ (see) a great film last night.', options: ['seed', 'seen', 'see', 'saw'], answer: 'saw' },
    ]
  },
  {
    id: 'future',
    icon: '🚀',
    title: 'Future Simple (Gelecek Zaman)',
    desc: 'Gelecekte yapılacak eylemler için kullanılır.',
    questions: [
      { sentence: 'I ___ (call) you tomorrow.', options: ['will calls', 'am call', 'will call', 'going call'], answer: 'will call' },
      { sentence: 'She ___ (not come) to the party.', options: ["won't comes", "won't come", "will not comes", "don't come"], answer: "won't come" },
      { sentence: 'They ___ going to ___ (travel) next month.', options: ['are / travel', 'is / travel', 'are / travels', 'am / travel'], answer: 'are / travel' },
      { sentence: '___ you ___ (help) me?', options: ['Will / helps', 'Will / help', 'Do / help', 'Are / help'], answer: 'Will / help' },
      { sentence: 'It ___ (rain) tomorrow according to the forecast.', options: ['rains', 'rained', 'will rain', 'raining'], answer: 'will rain' },
    ]
  },
  {
    id: 'present-continuous',
    icon: '🔄',
    title: 'Present Continuous (Şimdiki Zaman)',
    desc: 'Şu anda gerçekleşmekte olan eylemler için kullanılır.',
    questions: [
      { sentence: 'She ___ (read) a book right now.', options: ['reads', 'is reading', 'read', 'are reading'], answer: 'is reading' },
      { sentence: 'They ___ (not study) at the moment.', options: ["isn't studying", "aren't studying", "don't studying", "not studying"], answer: "aren't studying" },
      { sentence: 'What ___ you ___ (do) now?', options: ['are / doing', 'is / do', 'do / doing', 'are / do'], answer: 'are / doing' },
      { sentence: 'He ___ (listen) to music.', options: ['listen', 'listens', 'is listening', 'are listening'], answer: 'is listening' },
      { sentence: 'I ___ (write) an email to my friend.', options: ['writes', 'wrote', 'am writing', 'write'], answer: 'am writing' },
    ]
  },
  {
    id: 'articles',
    icon: '📝',
    title: 'Articles (A, An, The)',
    desc: 'İngilizce\'de artikellerin doğru kullanımı.',
    questions: [
      { sentence: 'I saw ___ elephant at the zoo.', options: ['a', 'an', 'the', '-'], answer: 'an' },
      { sentence: '___ sun rises in the east.', options: ['A', 'An', 'The', '-'], answer: 'The' },
      { sentence: 'She is ___ doctor.', options: ['a', 'an', 'the', '-'], answer: 'a' },
      { sentence: 'He plays ___ guitar every evening.', options: ['a', 'an', 'the', '-'], answer: 'the' },
      { sentence: 'I have ___ idea!', options: ['a', 'an', 'the', '-'], answer: 'an' },
    ]
  },
  {
    id: 'prepositions',
    icon: '📍',
    title: 'Prepositions (Edatlar)',
    desc: 'In, on, at ve diğer edatların kullanımı.',
    questions: [
      { sentence: 'The meeting is ___ Monday.', options: ['in', 'on', 'at', 'by'], answer: 'on' },
      { sentence: 'She was born ___ 1995.', options: ['on', 'at', 'in', 'by'], answer: 'in' },
      { sentence: 'The cat is sitting ___ the table.', options: ['in', 'on', 'at', 'under'], answer: 'on' },
      { sentence: 'We will meet ___ 5 o\'clock.', options: ['in', 'on', 'at', 'by'], answer: 'at' },
      { sentence: 'The keys are ___ the bag.', options: ['on', 'in', 'at', 'by'], answer: 'in' },
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
