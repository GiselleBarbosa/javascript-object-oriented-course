function Veiculo() { }

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function () {
  return 'O veiculo ligou';
};

function Trem(tipo) {
  this.tipo = tipo;
}

Trem.prototype.vagoes = 50;

function Carro() { }

Carro.prototype.pneus = 4;

// copiando somente o prototype ao inves de instanciar uma classe
Trem.prototype = Veiculo.prototype;


// solucao para evitar o conflito de propriedades metodos - construtor temporario 
let F = function () { };
F.prototype = Veiculo.prototype;
Carro.prototype = new F();


let trembala = new Trem('Trem Bala');
let trem = new Trem('Trem');
let ferrari = new Carro();

// fazemdp dessa forma, ele ira alterar o metodo original criado anteriormente no Veiculo. 
Carro.prototype.ligar = function () {
  return 'O carro ligou...';
};

console.log(trem.ligar());
console.log(trembala.ligar());
console.log(ferrari.ligar());

