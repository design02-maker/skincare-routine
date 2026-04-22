# 💆 Skincare Quiz — Rotina Personalizada

> Quiz interativo de skincare que analisa o perfil da pele do usuário e gera uma rotina personalizada de produtos K-Beauty.

![Preview do Quiz](preview.png)

---

## ✨ Funcionalidades

- **Quiz adaptativo** com 9 perguntas (single e multi-select)
- **Algoritmo de matching** que cruza tipo de pele + condições + prioridades
- **Swiper vertical** para navegar entre os produtos recomendados
- **Overlay de detalhes** com descrição e modo de uso de cada produto
- **Sacola de rotina** para montar e revisar os produtos selecionados
- **Aura dinâmica** — cor de fundo muda conforme o produto em exibição
- **WCAG 2.2 AA** — Focus Trap, navegação por teclado, contraste e semântica corrigidos
- **Eager/Lazy loading** de imagens para melhor performance (Core Web Vitals)

---

## 🗂 Estrutura do Projeto

```
skincare-quiz/
├── index.html   # Estrutura HTML + estilos (CSS variables / design tokens)
├── app.js       # Toda a lógica JS (banco de dados, análise, render, acessibilidade)
├── preview.png  # Screenshot do projeto
└── README.md    # Esta documentação
```

---

## 🚀 Como Rodar

Não há dependências locais. O projeto usa CDNs públicas.

### Opção 1 — Abrir direto no navegador

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/skincare-quiz.git

# Abra o arquivo
open skincare-quiz/index.html
```

### Opção 2 — Servidor local (recomendado)

```bash
# Com Python
python -m http.server 3000

# Com Node.js (npx)
npx serve .
```

Acesse: `http://localhost:3000`

### Opção 3 — Deploy no GitHub Pages

1. Vá em **Settings → Pages**
2. Em **Branch**, selecione `main` e a pasta `/ (root)`
3. Clique em **Save**
4. Acesse: `https://SEU_USUARIO.github.io/skincare-quiz`

---

## 🧬 Como o Algoritmo Funciona

```
Respostas do Usuário
       ↓
analisarRespostas()   → acumula scores por categoria
       ↓
determinarTipoPele()  → identifica: Oleosa / Seca / Mista / Normal
       ↓
rankearCondicoes()    → top 3 condições (Acne, Manchas, Poros, etc.)
       ↓
buscarRotina()        → filtra BANCO_DE_PRODUTOS por tipo + condição
       ↓
Swiper com 5 passos   → Limpeza → Tônico → Tratamento → Hidratação → Proteção
```

### Expandir o Catálogo

Adicione novos produtos em `app.js` no array `BANCO_DE_PRODUTOS`, seguindo o formato:

```js
{
  id: 999,
  name: "Nome do Produto",
  brand: "Marca",
  passo: "Limpeza",              // Limpeza | Tônico | Tratamento | Hidratação | Proteção
  tipo_pele: ["Oleosa", "Mista"],// Oleosa | Seca | Mista | Normal | Sensível | Todos
  condicoes: ["Acne", "Poros"],  // Acne | Manchas | Sensibilidade | Desidratação | Envelhecimento | Poros
  themeColor: "180,210,190",     // RGB para o efeito de aura
  img: "https://...",            // URL da imagem do produto
  what: "O que é o produto.",
  how: "Como usar o produto."
}
```

### Conectar a uma API real

Em `buscarRotina()`, substitua o filtro local por um `fetch()`:

```js
async function buscarRotina(perfil) {
  const res = await fetch(`/api/routine?skin=${perfil.tipo}&conditions=${perfil.condicoes.join(',')}`);
  return res.json();
}
```

---

## ♿ Acessibilidade (WCAG 2.2 AA)

| Critério | Implementação |
|---|---|
| 1.4.3 Contraste | Cores de texto corrigidas para ≥ 4.5:1 |
| 2.1.1 Teclado | Toda a navegação funciona via Tab/Enter/Escape |
| 2.1.2 Sem armadilha | Focus Trap nos modais com retorno de foco ao fechar |
| 2.4.3 Ordem de foco | Foco movido para o primeiro elemento ao abrir modais |
| 4.1.2 Nome/Função | `aria-label`, `role`, `aria-checked`, `aria-live` implementados |

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura e acessibilidade |
| CSS Custom Properties | Design tokens e theming |
| JavaScript ES2020 | Lógica de quiz e matching |
| [Swiper.js v11](https://swiperjs.com/) | Carrossel vertical de produtos |
| [DM Sans + DM Serif Display](https://fonts.google.com/) | Tipografia premium |

---

## 📁 Próximos Passos

- [ ] Integrar com API de produtos do e-commerce (Mega Eletrônicos)
- [ ] Adicionar animações de transição entre perguntas
- [ ] Implementar persistência de respostas (localStorage)
- [ ] Testes de usabilidade com usuários reais (5–8 participantes)
- [ ] Monitoramento de métricas de conversão pós-lançamento

---

## 👩‍💻 Autora

**Ana** — Product Designer Sênior  
Projeto: Quiz Skincare Routine · Mega Eletrônicos  
Entrega: Design de Alta Fidelidade + Código Funcional
