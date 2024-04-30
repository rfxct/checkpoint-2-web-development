let receitasDefault = []

const suggestionsContainerElement = document.getElementById('suggestionsContainer')

function carregarInformacoes() {
  const id = new URLSearchParams(location.search).get('id')

  switch (id) {
    case 'tallarico':
      receitasDefault = [
        ["Bife ao Molho de Vinho Tinto", "Um bife suculento grelhado e regado com um molho rico feito com o próprio Vinho Tinto Tallarico, acompanhado de batatas rústicas e legumes grelhados."],
        ["Risoto de Funghi", "Um risoto cremoso preparado com cogumelos porcini e uma generosa quantidade de queijo parmesão, harmonizando perfeitamente com as notas frutadas e terrosas deste vinho."],
        ["Coq au Vin", "Um prato francês clássico de frango cozido em vinho tinto, ervas e vegetais, resultando em um ensopado saboroso e reconfortante, ideal para acompanhar uma noite aconchegante."]
      ]
      break;
    case 'gato-negro':
      receitasDefault = [
        ["Espaguete à Carbonara", "Uma massa italiana clássica preparada com bacon, queijo parmesão, ovos e pimenta preta, proporcionando uma combinação deliciosa com as notas frutadas e levemente picantes deste vinho."],
        ["Pizza de Pepperoni", "Uma pizza caseira coberta com molho de tomate, queijo mozzarella e generosas fatias de pepperoni, realçando os sabores frutados e a acidez do Vinho Tinto Gato Negro."],
        ["Churrasco de Cordeiro", "Costeletas de cordeiro marinadas em ervas mediterrâneas e grelhadas até ficarem suculentas, complementadas pelo sabor frutado e as notas de especiarias deste vinho."]
      ]

      break;
    case 'dom-bosco':
      receitasDefault = [
        ["Ratatouille", "Um prato provençal de legumes assados, como berinjela, abobrinha, pimentão e tomate, temperados com ervas frescas e azeite de oliva, combinando harmoniosamente com as notas suaves e frutadas deste vinho."],
        ["Tagliatelle ao Molho de Tomate Fresco", "Uma massa fresca coberta com um molho de tomate preparado com tomates maduros, alho, manjericão e azeite, destacando a leveza e a delicadeza do Vinho Tinto Dom Bosco Seco."],
        ["Cogumelos Recheados", "Cogumelos Portobello recheados com uma mistura de queijo de cabra, alho-poró e ervas frescas, assados até ficarem dourados e crocantes, acompanhados da suavidade e do corpo deste vinho."]
      ]

      break;
    case 'santa-helena':
      receitasDefault = [
        ["Pato com Laranja", "Peito de pato grelhado e servido com um molho agridoce de laranja e mel, realçando os sabores frutados e a estrutura deste vinho Merlot."],
        ["Lasanha de Berinjela", "Uma lasanha vegetariana preparada com camadas de berinjela grelhada, queijo ricota, molho de tomate e manjericão fresco, combinando com a suavidade e os taninos deste vinho."],
        ["Costelas de Porco Assadas", "Costelas de porco marinadas em uma mistura de alho, alecrim e vinho tinto, assadas até ficarem macias e caramelizadas, acompanhadas da intensidade e da profundidade deste vinho Merlot."]
      ]
      break;
    default:
      tituloDefault = "-"
  }

  for (const [titulo, descricao] of receitasDefault) {
    suggestionsContainerElement.innerHTML += `
    <div class="suggestion">
      <p class="suggestion-title">${titulo}</p>
      <p class="suggestion-content">${descricao}</p>
    </div>
    `
  }
}
