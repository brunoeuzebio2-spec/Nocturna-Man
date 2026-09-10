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
];
