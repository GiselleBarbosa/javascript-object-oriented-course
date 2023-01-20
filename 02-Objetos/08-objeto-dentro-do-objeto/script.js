mascaraHidratacao = {
  marca: 'Forever-Liss',
  modelo: 'Desmaia Cabelo',
  peso: 200,
  etapaTratamento: 'Reconstrução',
  informacaoFiscal: {
    preco: 30,
    desconto: 2,
  },
  acompanhaBrinde: true,
  validaDesconto: function () {
    let preco = mascaraHidratacao.informacaoFiscal.preco;
    let desconto = mascaraHidratacao.informacaoFiscal.desconto;
    let valorPromocional = 0 ;

    if (preco >= 24.99) {
      let valorPromocional = preco - desconto;
      return "Valor promocional: R$ " + valorPromocional;
    }
    else
      "Não foi encontrada oferta para este produto.";
  }
};

console.log(mascaraHidratacao.modelo);
console.log(mascaraHidratacao.etapaTratamento);
console.log(mascaraHidratacao.acompanhaBrinde);
console.log(mascaraHidratacao.informacaoFiscal);
console.log(mascaraHidratacao.validaDesconto());