let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;
let t = "tipo_de_";

let carro = {
  rodas,
  portas,
  aro,
  tetoSolar,
  bancosDeCouro: true,
[t+"carro"]: "Sedan",
  ligar() {
    return "Veiculo LIGADO!";
  },

  desligar: function () {
    return "DESLIGOU";
  }
};

let barco = {
  [t + "barco"]: "Lancha",
};

let aviao = {
  [t + "aviao"]: "Boing",
};


console.log(carro);
console.log(carro.rodas);

console.log(carro.ligar());
console.log(carro.desligar());

console.log(carro.tipo_de_carro);
console.log(barco.tipo_de_barco);
console.log(aviao.tipo_de_aviao);

