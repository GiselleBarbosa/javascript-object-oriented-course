let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let carro = {
  rodas,
  portas,
  aro,
  tetoSolar,
  bancosDeCouro: true,

  ligar() {
    return "Veiculo LIGADO!";
  },

  desligar: function () {
    return "DESLIGOU";
  }
};

console.log(carro);
console.log(carro.rodas);

console.log(carro.ligar());
console.log(carro.desligar());

