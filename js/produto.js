let precoDefault = 0,
  tituloDefault = '',
  descricaoDefault = '',
  imagemDefault = ''

const tituloElement = document.getElementById('product-title'),
  descricaoElement = document.getElementById('product-description'),
  precoElement = document.getElementById('product-price'),
  imagemElement = document.getElementById('product-image')

function carregarInformacoes() {
  const id = new URLSearchParams(location.search).get('id')

  switch (id) {
    case 'tallarico':
      precoDefault = 1243
      tituloDefault = "Vinho Tinto Tallarico"
      descricaoDefault = "Um vinho encorpado e elegante, com aromas de frutas vermelhas e notas de especiarias. Perfeito para acompanhar carnes vermelhas."
      imagemDefault = 'tallarico.png'
      break;
    case 'gato-negro':
      precoDefault = 5199
      tituloDefault = "Vinho Tinto Gato Negro Carmenère "
      descricaoDefault = "Um vinho suave e equilibrado, com aromas de frutas negras e toques de baunilha. Ideal para harmonizar com massas e queijos."
      imagemDefault = 'gato-negro.png'
      break;
    case 'dom-bosco':
      precoDefault = 1290
      tituloDefault = "Vinho Tinto Dom Bosco"
      descricaoDefault = "Um vinho intenso e complexo, com notas de frutas maduras e especiarias. Ótima escolha para acompanhar pratos de carne suína."
      imagemDefault = 'dom-bosco.webp'
      break;
    default:
      precoDefault = 0
      tituloDefault = "Não encontrado"
      descricaoDefault = "-"
  }

  tituloElement.innerText = tituloDefault
  descricaoElement.innerText = descricaoDefault
  precoElement.innerText = `R$ ${(precoDefault * .01).toLocaleString('pt-br')}`
  imagemElement.src = `../images/${imagemDefault}`
  imagemElement.alt = imagemDefault
}
