let precoDefault = 0,
  tituloDefault = '',
  descricaoDefault = '',
  imagemDefault = '',
  descontoCupom = 0

const tituloElement = document.getElementById('product-title'),
  descricaoElement = document.getElementById('product-description'),
  precoElement = document.getElementById('product-price'),
  imagemElement = document.getElementById('product-image'),
  quantidadeElement = document.getElementById('product-amount'),
  totalElement = document.getElementById('total'),
  sugestaoElement = document.getElementById('product-suggestion')

function carregarInformacoes() {
  const id = new URLSearchParams(location.search).get('id')

  switch (id) {
    case 'tallarico':
      precoDefault = 12.43
      tituloDefault = "Vinho Tinto Tallarico"
      descricaoDefault = "Um vinho encorpado e elegante, com aromas de frutas vermelhas e notas de especiarias. Perfeito para acompanhar carnes vermelhas."
      imagemDefault = 'tallarico.png'
      break;
    case 'gato-negro':
      precoDefault = 51.99
      tituloDefault = "Vinho Tinto Gato Negro Carmenère "
      descricaoDefault = "Um vinho suave e equilibrado, com aromas de frutas negras e toques de baunilha. Ideal para harmonizar com massas e queijos."
      imagemDefault = 'gato-negro.png'
      break;
    case 'dom-bosco':
      precoDefault = 12.90
      tituloDefault = "Vinho Tinto Dom Bosco"
      descricaoDefault = "Um vinho intenso e complexo, com notas de frutas maduras e especiarias. Ótima escolha para acompanhar pratos de carne suína."
      imagemDefault = 'dom-bosco.webp'
      break;
    case 'santa-helena':
      precoDefault = 45.96
      tituloDefault = 'Vinho Santa Helena Merlot 750ml'
      descricaoDefault = 'Um vinho intenso e complexo, com notas de frutas maduras e especiarias. Ótima escolha para acompanhar pratos de carne suína.'
      imagemDefault = 'santa-helena.png'
      break;
    default:
      precoDefault = 0
      tituloDefault = "Não encontrado"
      descricaoDefault = "-"
  }

  tituloElement.innerText = tituloDefault
  descricaoElement.innerText = descricaoDefault
  precoElement.innerText = transformarEmBRL(precoDefault)
  imagemElement.src = `../images/${imagemDefault}`
  imagemElement.alt = imagemDefault
  totalElement.innerText = transformarEmBRL(precoDefault)
  sugestaoElement.href = `sugestoes.html${location.search}`
}

function atualizarValorTotal() {
  const totalValue = precoDefault * parseInt(quantidadeElement.value || 0) * (1 - descontoCupom)
  totalElement.innerText = transformarEmBRL(totalValue)
}

function transformarEmBRL(value) {
  return `R$ ${value.toFixed(2)}`
}

function adicionarAoCarrinho() {
  alert(`${tituloDefault} adicionado ao carrinho com sucesso`)
}

function atualizarValorCupom() {
  const cupomElement = document.getElementById('cupom')

  if (String(cupomElement.value).toUpperCase() === 'FIAP2024') {
    descontoCupom = 0.1
  } else {
    descontoCupom = 0
  }

  atualizarValorTotal()
}