# Nocturna Man — Achadinhos Masculinos

Esse é um site **separado** do seu site principal (Jess Nocturna). Ele tem seu próprio link, precisa de um repositório novo no GitHub e um site novo no Netlify.

## Como colocar no ar

1. **GitHub:** crie um repositório novo (ex: `nocturna-man`), igual você fez pro primeiro site. Suba todos os arquivos dessa pasta (index.html, style.css, products.js, script.js, imagens/).
2. **Netlify:** como sua conta atual está com o bloqueio de créditos, crie uma **conta nova no Netlify** (com outro e-mail). Faça "Add new site" → "Import an existing project" → conecte esse repositório novo do GitHub.
3. Em poucos minutos o site publica com um link tipo `algumacoisa.netlify.app`.

## Como adicionar mais produtos depois

Me manda os links (igual sempre) avisando que é pra esse site masculino, e eu te devolvo o `products.js` atualizado. Você troca o arquivo no GitHub desse repositório (o do site masculino, não do principal).

## Como adicionar fotos

Mesma lógica do outro site: nomeie a foto com o **número do produto na lista** e coloque na pasta `imagens/`.

| Nº | Produto |
|----|---------|
| 1  | Calça Cargo Jeans Streetwear *(destaque)* |
| 2  | Moletom Gola Redonda |
| 3  | Kit 3 Camisetas Algodão Premium |
| 4  | Corta Vento Rock Saints |
| 5  | Camiseta Oversized Lisa |
| 6  | Kit 4 Camiseta Dia a Dia |
| 7  | Kit 4 Calça Jogger Academia |
| 8  | Calça Sarja Alfaiataria |
| 9  | Kit Bermuda + Camiseta |
| 10 | Kit 3 Camisetas Streetwear |

Salve como `1.jpg` até `10.jpg` (pode ser `.jpg`, `.jpeg`, `.png` ou `.webp`).

## Categorias já configuradas

Esse site já vem com filtros por: **Calças**, **Camisetas**, **Casacos e Corta-vento** e **Kits** — mais específico que o site principal, já que aqui é tudo roupa masculina.

## Como trocar o destaque

No `products.js`, tire `destaque: true` do produto atual e coloque no que você quiser destacar (só 1 por vez).
