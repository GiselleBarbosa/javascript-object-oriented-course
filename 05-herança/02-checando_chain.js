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

console.log(trembala instanceof Trem);   // true
console.log(ferrari instanceof Carro);   // true

console.log(ferrari instanceof Veiculo);  // true
console.log(trembala instanceof Veiculo); // true

console.log(ferrari instanceof Object);   // true
console.log(trembala instanceof Object);  // true

console.log(ferrari instanceof Trem);     // false
console.log(trembala instanceof Carro );  // false