// ============================================================
// SEUS ACHADINHOS MASCULINOS — edite esta lista sempre que quiser
// ============================================================
// Para ADICIONAR um produto: copie um bloco { ... } inteiro,
// cole antes do "];" lá embaixo e mude os dados.
//
// Para REMOVER um produto: apague o bloco { ... } dele inteiro.
//
// Campos:
//   nome      -> nome do produto
//   preco     -> preço (pode ser "R$27,00" ou uma faixa "R$15,50 - R$16,43")
//   link      -> seu link de afiliado da Shopee (o s.shopee.com.br/... )
//   emoji     -> um emoji que combina com o produto (aparece SE não tiver foto)
//   imagem    -> caminho da foto, ex: "imagens/1.jpg" (opcional — veja abaixo)
//   categoria -> nome da categoria pra aparecer nos filtros, ex: "Camisetas",
//                "Calças", "Casacos e Corta-vento", "Kits"
//   destaque  -> true no produto que você quer em destaque no topo (use em
//                SÓ 1 produto por vez)
//
// Fotos automáticas: nomeie o arquivo com o NÚMERO do produto na lista
// (1, 2, 3...) e coloque na pasta imagens/. Ex: o 1º produto da lista
// reconhece sozinho imagens/1.jpg (ou .png/.jpeg/.webp). Não precisa
// preencher o campo "imagem" pra isso — só nomear o arquivo certo.
// ============================================================

const PRODUTOS = [
  {
    nome: "Calça Cargo Jeans Masculina Streetwear Baggy Wide Leg Oversized — Moda Urbana Skatista Premium",
    preco: "R$67,00 - R$78,00",
    link: "https://s.shopee.com.br/5VVEPCgg9C",
    emoji: "👖",
    categoria: "Calças",
    destaque: true
  },
  {
    nome: "Moletom Gola Redonda Unissex Blusa de Frio — Careca, Casaco Flanelado Sem Estampa, Algodão",
    preco: "R$38,90 - R$52,90",
    link: "https://s.shopee.com.br/6q0bzbybjw",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },
  {
    nome: "Kit 3 Camisetas Algodão Premium — Básicas, Confortáveis e Econômicas",
    preco: "R$59,90",
    link: "https://s.shopee.com.br/8AVza4fvai",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Corta Vento Masculina Impermeável Semi Forrada — Preto, Rock Saints",
    preco: "R$59,89",
    link: "https://s.shopee.com.br/1Vz5dprqFh",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },
  {
    nome: "Camiseta Oversized Casual Básica Lisa Reta",
    preco: "R$48,30 - R$59,90",
    link: "https://s.shopee.com.br/9V1NAXweYi",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Kit 4 Camiseta Dia a Dia 100% Algodão Básica Premium — Várias Cores, Lisa, P ao G3",
    preco: "R$67,90 - R$133,56",
    link: "https://s.shopee.com.br/70K2CCzV8P",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Kit 4 Calça Masculina Jogger Academia Com Stylo Refletivo — Promoção 2K26",
    preco: "R$79,98",
    link: "https://s.shopee.com.br/W6YSGkNkx",
    emoji: "👖",
    categoria: "Calças"
  },
  {
    nome: "Calças Sarja Masculina Alfaiataria Esporte Fino — Bolso Faca, Bolso Embutido",
    preco: "R$54,00 - R$60,00",
    link: "https://s.shopee.com.br/6q0bzv8Wya",
    emoji: "👖",
    categoria: "Calças"
  },
  {
    nome: "Kit Bermuda Short Mole + Camiseta Preta Paris Minimalist — Kit Básico, Algodão Malha Premium",
    preco: "R$41,96",
    link: "https://s.shopee.com.br/7AdSOYBX6I",
    emoji: "🩳",
    categoria: "Kits"
  },
  {
    nome: "Kit 3 Camisetas Básicas Streetwear T-Shirt Premium — Promoção, Algodão, Várias Cores",
    preco: "R$40,86 - R$63,61",
    link: "https://s.shopee.com.br/7AdSOYp87s",
    emoji: "👕",
    categoria: "Camisetas"
  },

  // ---- adicionados depois ----
  {
    nome: "Moletom Canguru Premium Estampado BMW Carro Esportivo — Blusa de Frio Confortável, Inverno",
    preco: "R$45,65 - R$62,25",
    link: "https://s.shopee.com.br/7VGJiT4wkC",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },
  {
    nome: "Kit 2 Blusa Moletom Masculino New York Gola Redonda — Algodão Unissex, Casaco",
    preco: "R$79,89 - R$89,90",
    link: "https://s.shopee.com.br/2qUU9u4ZWf",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },
  {
    nome: "Conjunto de Frio Brasil Masculino Dry Fit Esportivo — Casaco e Calça Jogger, Kit Inverno Seleção",
    preco: "R$59,99 - R$64,99",
    link: "https://s.shopee.com.br/2BEnMgkhuY",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },
  {
    nome: "Moletom Masculino Com Capuz Forrado De Sherpa — Jaqueta de Lã de Inverno, Casaco Zíper, Outono Casual",
    preco: "R$76,50 - R$91,50",
    link: "https://s.shopee.com.br/9057VFy9a4",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },
  {
    nome: "Moletom Canguru Dragão Chinês Com Capuz e Bolso — Casaco Flanelado Unissex, Algodão",
    preco: "R$42,90 - R$49,89",
    link: "https://s.shopee.com.br/1qbwy6C6l7",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },

  // ---- adicionados depois (leva 3) ----
  {
    nome: "Kit de 24 Meia Cano Alto 100% Algodão Soquete Cano Curto — Masculina, Feminina, Unissex, Direto da Fábrica",
    preco: "R$30,55 - R$39,46",
    link: "https://s.shopee.com.br/9057WOw4sJ",
    emoji: "🧦",
    categoria: "Meias"
  },
  {
    nome: "Daily T-shirt Insider",
    preco: "R$59,00 - R$139,00",
    link: "https://s.shopee.com.br/40gRZSHe9D",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Camiseta Máscara Aranha Herói Filme 100% Algodão Penteado — Estampa Grande, Streetwear Unissex Oversize",
    preco: "R$25,80 - R$34,80",
    link: "https://s.shopee.com.br/1gIWnLZUVa",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Camiseta Cristã Salmos 91 100% Algodão — Streetwear Gospel, Camisa Deus Premium, Unissex Oversize",
    preco: "R$25,80 - R$32,80",
    link: "https://s.shopee.com.br/3LQkmQ2LNI",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Camisa Camiseta Oversized Streetwear Anime — One Piece, Naruto, Hokage, Dragon, Kimetsu no Yaiba",
    preco: "R$36,96",
    link: "https://s.shopee.com.br/qjPoHDkXv",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Camiseta Oversized Spartano Musculação — Grande, Algodão, Treino Academia",
    preco: "R$39,95",
    link: "https://s.shopee.com.br/9KhxwFPm2T",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Calça Masculina Jogger Com Elastano — Academia Esportiva, Fitness Slim, Dry Fit, Leve",
    preco: "R$41,89 - R$50,00",
    link: "https://s.shopee.com.br/8fSHA36n14",
    emoji: "👖",
    categoria: "Calças"
  },
  {
    nome: "Calça Jogger Masculina Sarja Jeans 4 Bolsos — Punho Elástico, Cintura Ajustável, Streetwear Premium",
    preco: "R$48,00 - R$118,00",
    link: "https://s.shopee.com.br/3B7Kbws3dM",
    emoji: "👖",
    categoria: "Calças"
  },
  {
    nome: "Calça Baggy Masculina Jeans Boca Larga Balão — Estilo Mandrake, Y2K Streetwear",
    preco: "R$42,22 - R$159,99",
    link: "https://s.shopee.com.br/AKaV98DJCP",
    emoji: "👖",
    categoria: "Calças"
  },
  {
    nome: "Calça Jogger Masculina Linha Premium Sarja — Com Punho, Cintura Ajustável, 4 Bolsos",
    preco: "R$48,00 - R$58,00",
    link: "https://s.shopee.com.br/112q1zQIeg",
    emoji: "👖",
    categoria: "Calças"
  },
  {
    nome: "Kit 3 Calça Masculina Dry Fit Esportiva — Treino, Com Zíper no Bolso",
    preco: "R$59,98",
    link: "https://s.shopee.com.br/1LfgQby5iu",
    emoji: "👖",
    categoria: "Calças"
  },
  {
    nome: "Bermuda Sarja Masculina Premium Slim Fit Com Elastano — Confortável, Casual, Preta/Bege/Gelo/Marrom",
    preco: "R$39,00 - R$137,90",
    link: "https://s.shopee.com.br/AKaV9fqmAS",
    emoji: "🩳",
    categoria: "Bermudas"
  },
  {
    nome: "Camiseta Religiosa 'Ainda Que Eu Ande Pelo Vale' — Camisa Cristã 100% Algodão Unissex",
    preco: "R$37,99 - R$49,99",
    link: "https://s.shopee.com.br/1BMGEqGOw8",
    emoji: "👕",
    categoria: "Camisetas"
  },
  {
    nome: "Corta Vento Masculino Forrado — Academia, Treino, Impermeável",
    preco: "R$38,22",
    link: "https://s.shopee.com.br/9057ZHGdcB",
    emoji: "🧥",
    categoria: "Casacos e Corta-vento"
  },
];
