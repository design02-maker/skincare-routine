/* =============================================
   SKINCARE QUIZ — app.js
   Product Designer: Ana
   Versão: 1.0.0
   ============================================= */

/* ─── BANCO DE PRODUTOS ─────────────────────── */
const BANCO_DE_PRODUTOS = [
  {
    id: 101, name: "Centella Cleansing Oil", brand: "SKIN1004",
    passo: "Limpeza", tipo_pele: ["Oleosa","Mista","Normal","Seca"],
    condicoes: ["Acne","Poros"], themeColor: "180,210,190",
    img: "https://www.skin1004.com/cdn/shop/files/skin1004-cleanser-200ml-madagascar-centella-light-cleansing-oil-1204112613_1440x.png?v=1762764548",
    what: "Óleo de limpeza leve que remove maquiagem e sebo sem obstruir poros.",
    how: "Massageie no rosto seco, emulsione com água e enxágue."
  },
  {
    id: 102, name: "Hyaluronic Cleansing Foam", brand: "Isntree",
    passo: "Limpeza", tipo_pele: ["Seca","Normal","Sensível","Todos"],
    condicoes: ["Desidratação","Sensibilidade"], themeColor: "200,225,240",
    img: "https://isntree.com/web/product/big/202302/c4f2e96d99676e1a7b458b9f1d2e53cc.png",
    what: "Espuma cremosa e hidratante que limpa sem repuxar.",
    how: "Faça espuma com água e massageie o rosto úmido."
  },
  {
    id: 201, name: "Pore+ Dark Spot Pads", brand: "Celimax",
    passo: "Tônico", tipo_pele: ["Oleosa","Mista","Normal"],
    condicoes: ["Manchas","Poros","Acne"], themeColor: "255,220,195",
    img: "https://celimaxglobal.com/cdn/shop/products/Celimax_Pore_Dark_Spot_Pad_01_1024x1024.png",
    what: "Almofadas tônicas clareadoras e refinadoras de poros.",
    how: "Passe o lado texturizado e depois o lado liso no rosto limpo."
  },
  {
    id: 202, name: "Centella Toning Toner", brand: "SKIN1004",
    passo: "Tônico", tipo_pele: ["Sensível","Seca","Todos"],
    condicoes: ["Sensibilidade","Desidratação"], themeColor: "190,215,200",
    img: "https://www.skin1004.com/cdn/shop/files/skin1004-toner-210ml-madagascar-centella-toning-toner-1204112571_1440x.png?v=1762764547",
    what: "Tônico calmante com Centella Asiática e PHA para esfoliação leve.",
    how: "Aplique com as mãos ou algodão dando batidinhas."
  },
  {
    id: 301, name: "Poremizing Fresh Ampoule", brand: "SKIN1004",
    passo: "Tratamento", tipo_pele: ["Oleosa","Mista"],
    condicoes: ["Poros","Acne"], themeColor: "210,230,255",
    img: "https://www.skin1004.com/cdn/shop/products/skin1004-ampoule-serum-100ml-poremizing-fresh-ampoule-38642870780150.png?v=1677149786",
    what: "Ampola de sal rosa que minimiza a aparência dos poros.",
    how: "Aplique 3 gotas após o tônico."
  },
  {
    id: 302, name: "Vita C Dark Spot", brand: "Goodal",
    passo: "Tratamento", tipo_pele: ["Todos"],
    condicoes: ["Manchas","Envelhecimento"], themeColor: "255,235,180",
    img: "https://cdn.shopify.com/s/files/1/0249/1218/products/goodal-green-tangerine-vita-c-dark-spot-serum-30ml-1.png",
    what: "Sérum de vitamina C concentrado para clarear e iluminar.",
    how: "Espalhe pelo rosto evitando a área dos olhos."
  },
  {
    id: 303, name: "Peptide 500", brand: "Mizon",
    passo: "Tratamento", tipo_pele: ["Seca","Normal"],
    condicoes: ["Envelhecimento","Desidratação"], themeColor: "220,210,240",
    img: "https://cdn.shopify.com/s/files/1/0249/1218/products/mizon-peptide-500-1.png",
    what: "Soro focado em elasticidade e redução de linhas finas.",
    how: "Aplique na pele focando nas áreas com linhas."
  },
  {
    id: 401, name: "Centella Soothing Cream", brand: "SKIN1004",
    passo: "Hidratação", tipo_pele: ["Oleosa","Mista","Todos"],
    condicoes: ["Acne","Sensibilidade"], themeColor: "175,210,190",
    img: "https://www.skin1004.com/cdn/shop/files/skin1004-75ml-madagascar-centella-soothing-cream-1204112523_1440x.png",
    what: "Creme em gel translúcido que hidrata e acalma instantaneamente.",
    how: "Aplique no rosto como penúltimo passo da rotina."
  },
  {
    id: 402, name: "Hyaluronic Acid Moist", brand: "Isntree",
    passo: "Hidratação", tipo_pele: ["Seca","Normal"],
    condicoes: ["Desidratação","Envelhecimento"], themeColor: "195,220,245",
    img: "https://isntree.com/web/product/big/202302/10b9f5a0c3b06e8b408b04a919f91a0c.png",
    what: "Creme rico para selar a hidratação e recuperar a barreira.",
    how: "Espalhe uniformemente massageando até absorver."
  },
  {
    id: 501, name: "Hyalu-Cica Water-Fit Sun", brand: "SKIN1004",
    passo: "Proteção", tipo_pele: ["Todos"],
    condicoes: ["Desidratação","Manchas","Envelhecimento"], themeColor: "185,215,205",
    img: "https://www.skin1004.com/cdn/shop/files/skin1004-50ml-hyalu-cica-water-fit-sun-serum-uv-1204112543_1440x.png?v=1762764544",
    what: "Protetor solar químico ultra-leve que parece um sérum.",
    how: "Aplique dois dedos do produto por todo rosto e pescoço pela manhã."
  }
];

/* ─── BANCO DE PERGUNTAS ────────────────────── */
const perguntas = [
  {
    q: "Com que frequência sua pele apresenta brilho excessivo?",
    multi: false,
    options: [
      { text: "Sempre",             points: { pele_oleosa: 3 } },
      { text: "Às vezes (Zona T)",  points: { pele_mista: 3 } },
      { text: "Raramente",          points: { pele_normal: 2 } },
      { text: "Nunca (Fica opaca)", points: { pele_seca: 3 } }
    ]
  },
  {
    q: "Após lavar o rosto, como sua pele se sente?",
    multi: false,
    options: [
      { text: "Oleosa rapidamente",                  points: { pele_oleosa: 2 } },
      { text: "Repuxada e seca",                     points: { pele_seca: 3, desidratacao: 1 } },
      { text: "Oleosa na zona T, seca no resto",     points: { pele_mista: 2 } },
      { text: "Confortável",                         points: { pele_normal: 2 } }
    ]
  },
  {
    q: "Com que frequência você tem espinhas ou cravos?",
    multi: false,
    options: [
      { text: "Frequentemente",                points: { acne: 3 } },
      { text: "Apenas em períodos específicos", points: { acne: 1 } },
      { text: "Quase nunca",                   points: {} }
    ]
  },
  {
    q: "Você possui manchas escuras ou sardas que te incomodam?",
    multi: false,
    options: [
      { text: "Sim, bastante", points: { manchas: 3 } },
      { text: "Poucas",        points: { manchas: 1 } },
      { text: "Não",           points: {} }
    ]
  },
  {
    q: "Sua pele reage facilmente a produtos novos, ficando vermelha?",
    multi: false,
    options: [
      { text: "Sempre reage", points: { sensibilidade: 3 } },
      { text: "Às vezes",     points: { sensibilidade: 1 } },
      { text: "Quase nunca",  points: {} }
    ]
  },
  {
    q: "Você percebe linhas finas, rugas ou perda de firmeza?",
    multi: false,
    options: [
      { text: "Sim, me incomoda",           points: { envelhecimento: 3 } },
      { text: "Estão começando a aparecer", points: { envelhecimento: 1 } },
      { text: "Ainda não percebo",          points: {} }
    ]
  },
  {
    q: "Como estão os seus poros?",
    multi: false,
    options: [
      { text: "Muito visíveis no rosto todo",   points: { poros: 3 } },
      { text: "Visíveis no nariz e bochechas",  points: { poros: 1 } },
      { text: "Pouco visíveis",                 points: {} }
    ]
  },
  {
    q: "Selecione tudo que te incomoda HOJE na sua pele:",
    multi: true,
    subtitle: "Pode selecionar mais de uma opção",
    options: [
      { text: "Acne e espinhas ativas",                  points: { acne: 3 } },
      { text: "Marcas escuras pós-acne",                 points: { manchas: 2, acne: 1 } },
      { text: "Manchas de sol, idade ou melasma",        points: { manchas: 3 } },
      { text: "Poros dilatados e textura irregular",     points: { poros: 3 } },
      { text: "Excesso de oleosidade e brilho",          points: { pele_oleosa: 2, poros: 1 } },
      { text: "Pele ressecada, repuxando ou descamando", points: { desidratacao: 3, pele_seca: 1 } },
      { text: "Vermelhidão, ardor ou pele sensível",     points: { sensibilidade: 3 } },
      { text: "Linhas finas e rugas",                    points: { envelhecimento: 3 } },
      { text: "Perda de firmeza e flacidez",             points: { envelhecimento: 2 } },
      { text: "Pele opaca, cansada e sem viço",          points: { desidratacao: 1, manchas: 1 } }
    ]
  },
  {
    q: "Qual o seu PRINCIPAL objetivo com a rotina de hoje?",
    multi: true,
    subtitle: "Pode selecionar mais de um",
    options: [
      { text: "Tratar espinhas e oleosidade", special_val: "Acne" },
      { text: "Clarear manchas e iluminar",   special_val: "Manchas" },
      { text: "Anti-idade e firmeza",         special_val: "Envelhecimento" },
      { text: "Hidratar e recuperar a pele",  special_val: "Desidratação" },
      { text: "Acalmar vermelhidão",          special_val: "Sensibilidade" }
    ]
  }
];

/* ─── ESTADO GLOBAL ─────────────────────────── */
let currentQ     = 0;
let userAnswers  = {};
let finalRoutine = [];
let cart         = [];
let swiperInstance = null;

/* ─── CAMADA DE ANÁLISE ─────────────────────── */
function analisarRespostas(respostas, questoes) {
  const scores = {
    pele_oleosa: 0, pele_seca: 0, pele_mista: 0, pele_normal: 0,
    acne: 0, manchas: 0, sensibilidade: 0,
    desidratacao: 0, envelhecimento: 0, poros: 0
  };
  const prioridades = [];

  for (const qIndex in respostas) {
    respostas[qIndex].forEach(optIndex => {
      const opt = questoes[qIndex].options[optIndex];
      if (opt.points) {
        Object.entries(opt.points).forEach(([key, val]) => { scores[key] += val; });
      }
      if (opt.special_val) prioridades.push(opt.special_val);
    });
  }
  return { scores, prioridades };
}

function determinarTipoPele(scores) {
  return [
    { id: "Oleosa", s: scores.pele_oleosa },
    { id: "Seca",   s: scores.pele_seca   },
    { id: "Mista",  s: scores.pele_mista  },
    { id: "Normal", s: scores.pele_normal }
  ].sort((a, b) => b.s - a.s)[0].id;
}

function rankearCondicoes(scores, prioridades) {
  const condicoes = [
    { id: "Acne",           s: scores.acne           },
    { id: "Manchas",        s: scores.manchas        },
    { id: "Sensibilidade",  s: scores.sensibilidade  },
    { id: "Desidratação",   s: scores.desidratacao   },
    { id: "Envelhecimento", s: scores.envelhecimento },
    { id: "Poros",          s: scores.poros          }
  ]
    .filter(d => d.s >= 1)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map(d => d.id);

  prioridades.forEach(p => {
    if (!condicoes.includes(p)) condicoes.unshift(p);
  });
  return condicoes;
}

/* ─── CAMADA DE MATCHING ────────────────────── */
/**
 * Busca a rotina ideal para o perfil do usuário.
 * Preparado para ser trocado por um fetch() futuramente:
 *   return await fetch(`/api/routine?skin=${perfil.tipo}&conditions=${perfil.condicoes.join(',')}`)
 */
async function buscarRotina(perfil) {
  const ORDEM_PASSOS = ["Limpeza", "Tônico", "Tratamento", "Hidratação", "Proteção"];

  return ORDEM_PASSOS.map(passo => {
    const compativeis = BANCO_DE_PRODUTOS.filter(p =>
      p.passo === passo &&
      (p.tipo_pele.includes(perfil.tipo) || p.tipo_pele.includes("Todos"))
    );
    return (
      compativeis.find(p => p.condicoes.some(c => perfil.condicoes.includes(c)))
      || compativeis[0]
      || null
    );
  }).filter(Boolean);
}

/* ─── QUIZ RENDER ───────────────────────────── */
function renderQuiz() {
  const qData = perguntas[currentQ];
  const total = perguntas.length;
  const pct   = Math.round(((currentQ + 1) / total) * 100);

  document.getElementById('step-count').textContent = currentQ + 1;

  const fill = document.getElementById('progress');
  fill.style.width = `${pct}%`;

  const optionsEl = document.getElementById('q-options');
  optionsEl.setAttribute('role',            qData.multi ? 'group' : 'radiogroup');
  optionsEl.setAttribute('aria-labelledby', 'q-title');

  const bar = document.getElementById('progress-bar');
  bar.setAttribute('aria-valuenow', pct);

  document.getElementById('q-title').textContent    = qData.q;
  document.getElementById('q-subtitle').textContent = qData.subtitle || '';

  const savedAnswers = userAnswers[currentQ] || [];

  optionsEl.innerHTML = qData.options.map((opt, index) => {
    const isSelected = savedAnswers.includes(index);
    const role       = qData.multi ? 'checkbox' : 'radio';
    return `
      <button
        class="option-btn interactive-btn ${isSelected ? 'selected' : ''}"
        onclick="toggleOption(${index})"
        role="${role}"
        aria-checked="${isSelected}"
      >
        ${opt.text}
        <div class="circle-check" aria-hidden="true"></div>
      </button>`;
  }).join('');

  document.getElementById('btn-prev').style.visibility = currentQ === 0 ? 'hidden' : 'visible';

  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = currentQ === total - 1 ? 'Finalizar Análise' : 'Avançar';

  if (savedAnswers.length > 0) {
    btnNext.classList.add('active');
    btnNext.removeAttribute('disabled');
  } else {
    btnNext.classList.remove('active');
    btnNext.setAttribute('disabled', 'true');
  }
}

function toggleOption(index) {
  const isMulti = perguntas[currentQ].multi;
  if (!userAnswers[currentQ]) userAnswers[currentQ] = [];

  if (isMulti) {
    const pos = userAnswers[currentQ].indexOf(index);
    pos > -1
      ? userAnswers[currentQ].splice(pos, 1)
      : userAnswers[currentQ].push(index);
  } else {
    userAnswers[currentQ] = [index];
  }
  renderQuiz();
}

function goNext() {
  if (!userAnswers[currentQ] || userAnswers[currentQ].length === 0) return;
  if (currentQ < perguntas.length - 1) { currentQ++; renderQuiz(); }
  else { iniciarCalculo(); }
}

function goPrev() {
  if (currentQ > 0) { currentQ--; renderQuiz(); }
}

/* ─── ORQUESTRADOR ──────────────────────────── */
async function iniciarCalculo() {
  const quizView = document.getElementById('quiz-view');
  quizView.style.opacity = '0';
  await new Promise(r => setTimeout(r, 500));
  quizView.style.display = 'none';

  const loadingView = document.getElementById('loading-view');
  loadingView.style.display = 'flex';

  const { scores, prioridades } = analisarRespostas(userAnswers, perguntas);
  const tipo      = determinarTipoPele(scores);
  const condicoes = rankearCondicoes(scores, prioridades);

  finalRoutine = await buscarRotina({ tipo, condicoes });

  await new Promise(r => setTimeout(r, 2500));

  loadingView.style.display = 'none';
  const resultView = document.getElementById('result-view');
  resultView.style.display = 'flex';
  renderizarSwiper();
}

/* ─── SWIPER ────────────────────────────────── */
function updateTheme(index) {
  const produto = finalRoutine[index];
  if (!produto) return;
  const aura  = document.getElementById('aura');
  const color = produto.themeColor || '200,200,200';
  aura.style.background =
    `radial-gradient(circle, rgba(${color}, 0.45) 0%, transparent 70%)`;
}

function renderizarSwiper() {
  const wrapper = document.getElementById('wrapper');

  wrapper.innerHTML = finalRoutine.map((p, i) => `
    <div class="swiper-slide">
      <div class="title-group">
        <h2>${p.name}</h2>
        <div class="brand">${p.brand} | ${p.passo}</div>
      </div>
      <div class="img-container">
        <div class="product-img-wrapper">
          <div class="product-img-placeholder" id="placeholder-${i}" aria-hidden="true">
            <span>Carregando</span>
          </div>
          <button
            class="img-btn"
            onclick="openDetails(${i})"
            aria-label="Ver detalhes de ${p.name}"
            style="background:none;border:none;cursor:pointer;width:100%;height:100%;display:flex;align-items:center;justify-content:center;"
          >
            <img
              src="${p.img}"
              id="img-prod-${i}"
              class="product-img"
              alt="${p.name} por ${p.brand}"
              loading="${i === 0 ? 'eager' : 'lazy'}"
            >
          </button>
        </div>
      </div>
      <div class="footer-content">
        <button class="btn-pill" onclick="add(${i})" aria-label="Adicionar ${p.name} à sua rotina">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Adicionar à rotina
        </button>
      </div>
    </div>`).join('');

  finalRoutine.forEach((_, i) => {
    const img         = document.getElementById(`img-prod-${i}`);
    const placeholder = document.getElementById(`placeholder-${i}`);
    if (!img) return;

    const onLoad = () => {
      img.classList.add('loaded');
      placeholder.classList.add('hidden');
      if (swiperInstance && swiperInstance.activeIndex === i) updateTheme(i);
    };

    if (img.complete && img.naturalWidth > 0) {
      onLoad();
    } else {
      img.addEventListener('load', onLoad, { once: true });
      img.addEventListener('error', () => {
        placeholder.innerHTML = '<span style="font-size:10px;color:#aaa;">Imagem indisponível</span>';
      }, { once: true });
    }
  });

  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  swiperInstance = new Swiper('.mySwiper', {
    direction: 'vertical',
    speed: 800,
    threshold: 10,
    on: {
      slideChangeTransitionEnd(swiper) {
        const i = swiper.activeIndex;
        updateTheme(i);
        document.getElementById('step-text').textContent = `${i + 1}º PASSO`;
      }
    }
  });

  updateTheme(0);
  document.getElementById('step-text').textContent = '1º PASSO';
}

/* ─── CARRINHO ──────────────────────────────── */
function add(i) {
  const p = finalRoutine[i];
  if (!p || cart.find(item => item.id === p.id)) return;
  cart.push({ ...p, step: i + 1 });

  const badge = document.getElementById('cart-badge');
  badge.textContent = cart.length;
  badge.style.display = 'flex';
  document.querySelector('.cart-mini')
    .setAttribute('aria-label', `Ver minha rotina — ${cart.length} produto(s)`);
}

/* ─── FOCUS TRAP (WCAG 2.1.2 / 2.4.3) ──────── */
const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let lastFocusedElement = null;

function trapFocus(overlayEl) {
  const focusable = Array.from(overlayEl.querySelectorAll(FOCUSABLE));
  if (!focusable.length) return;

  focusable[0].focus();

  overlayEl._trapHandler = function(e) {
    if (e.key !== 'Tab') return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  };

  overlayEl._escHandler = function(e) {
    if (e.key === 'Escape') {
      if (overlayEl.id === 'detail-overlay') closeDetails();
      if (overlayEl.id === 'bag-overlay')    closeBag();
    }
  };

  overlayEl.addEventListener('keydown', overlayEl._trapHandler);
  document.addEventListener('keydown',  overlayEl._escHandler);
}

function releaseFocus(overlayEl) {
  if (overlayEl._trapHandler) {
    overlayEl.removeEventListener('keydown', overlayEl._trapHandler);
    delete overlayEl._trapHandler;
  }
  if (overlayEl._escHandler) {
    document.removeEventListener('keydown', overlayEl._escHandler);
    delete overlayEl._escHandler;
  }
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

/* ─── OVERLAYS ──────────────────────────────── */
function openDetails(i) {
  const p = finalRoutine[i];
  if (!p) return;
  lastFocusedElement = document.activeElement;
  document.getElementById('d-title').textContent = p.name;
  document.getElementById('d-what').textContent  = p.what;
  document.getElementById('d-how').textContent   = p.how;
  document.getElementById('btn-add-detail').onclick = () => { add(i); closeDetails(); };
  const overlay = document.getElementById('detail-overlay');
  overlay.classList.add('active');
  setTimeout(() => trapFocus(overlay), 50);
}

function closeDetails() {
  const overlay = document.getElementById('detail-overlay');
  overlay.classList.remove('active');
  releaseFocus(overlay);
}

function openBag() {
  lastFocusedElement = document.activeElement;
  const list = document.getElementById('bag-list');

  if (cart.length === 0) {
    list.innerHTML = '<div style="text-align:center; padding-top:50px; color:#999;">Sua rotina está vazia</div>';
  } else {
    list.innerHTML = cart.map(item => `
      <div class="bag-item">
        <div class="bag-item-num" aria-hidden="true">${item.step}</div>
        <div style="flex:1;">
          <h5 style="font-size:14px;">${item.name}</h5>
          <div style="font-size:11px; color:#888">${item.passo}</div>
        </div>
        <button
          data-remove-id="${item.id}"
          style="background:none; border:none; color:#CCC; cursor:pointer; font-size:16px; padding:4px 8px;"
          aria-label="Remover ${item.name} da rotina"
        >✕</button>
      </div>`).join('');

    list.querySelectorAll('[data-remove-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        removeItem(Number(btn.dataset.removeId), btn);
      });
    });
  }

  const overlay = document.getElementById('bag-overlay');
  overlay.classList.add('active');
  setTimeout(() => trapFocus(overlay), 50);
}

function closeBag() {
  const overlay = document.getElementById('bag-overlay');
  overlay.classList.remove('active');
  releaseFocus(overlay);
}

function removeItem(id, triggerBtn) {
  cart = cart.filter(i => i.id !== id);

  const badge = document.getElementById('cart-badge');
  badge.textContent = cart.length;
  if (cart.length === 0) {
    badge.style.display = 'none';
    document.querySelector('.cart-mini').setAttribute('aria-label', 'Ver minha rotina');
  } else {
    document.querySelector('.cart-mini')
      .setAttribute('aria-label', `Ver minha rotina — ${cart.length} produto(s)`);
  }

  const itemEl = triggerBtn?.closest('.bag-item');
  if (itemEl) {
    const items    = Array.from(document.querySelectorAll('[data-remove-id]'));
    const idx      = items.indexOf(triggerBtn);
    const nextFocus = items[idx + 1] || items[idx - 1];
    itemEl.remove();
    if (nextFocus) nextFocus.focus();
    else document.querySelector('#bag-overlay .btn-close')?.focus();
  }

  if (cart.length === 0) {
    document.getElementById('bag-list').innerHTML =
      '<div style="text-align:center; padding-top:50px; color:#999;">Sua rotina está vazia</div>';
  }
}

/* ─── INIT ──────────────────────────────────── */
window.onload = renderQuiz;
