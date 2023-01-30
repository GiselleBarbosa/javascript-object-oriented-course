function Veiculo() { }

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function () {
  return 'Ligou';
};

function Trem(tipo) {
  this.tipo = tipo;
}

Trem.prototype.vagoes = 50;

function Carro() { }

Carro.prototype.pneus = 4;

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();


let trembala = new Trem('Trem Bala');
let trem = new Trem('Trem');
let ferrari = new Carro();

console.log(trem.ligar());
console.log(trembala.ligar());
console.log(ferrari.ligar());