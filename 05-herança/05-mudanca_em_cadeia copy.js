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

// copiando somente o prototype ao inves de instanciar uma classe
Trem.prototype = Veiculo.prototype;
Carro.prototype = Veiculo.prototype;

let trembala = new Trem('Trem Bala');
let trem = new Trem('Trem');
let ferrari = new Carro();


// fazemdp dessa forma, ele ira alterar o metodo original criado anteriormente no Veiculo. 
Carro.prototype.ligar = function(){
  return 'O carro esta ligado...'
}

console.log(trem.ligar());
console.log(trembala.ligar());
console.log(ferrari.ligar());

console.log(trembala.carenagem);