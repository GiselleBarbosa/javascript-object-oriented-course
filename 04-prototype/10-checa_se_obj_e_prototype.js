let equipamentosDoCarro = { // foi adicionado ao prototype do carro apos o Carro.prototype = equipamentosDoCarro;

  preco: 10000,
  calota: true,
  cor: 'azul',
  aro: 16
}

function Carro(marca) {
  this.marca = marca;
}

Carro.prototype = equipamentosDoCarro; // dara true pois esta adicionando os equipamentos do carro ao prototype

let fusca = new Carro('V');

console.log(fusca.preco);

console.log(equipamentosDoCarro.isPrototypeOf(fusca));  // false 