function Veiculo() {
  this.carenagem = 'aço';
  this.ligar = function () {
    return 'Ligou';
  };
}

function Trem(tipo) {
  this.tipo = tipo;
  this.vagoes = 50;
}

function Carro() {
  this.pneus = 4;
}

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo()

let trembala = new Trem('Trem Bala');
let ferrari = new Carro();


console.log(trembala.tipo);
console.log(ferrari.pneus);

console.log(trembala.ligar());
console.log(ferrari.ligar());
