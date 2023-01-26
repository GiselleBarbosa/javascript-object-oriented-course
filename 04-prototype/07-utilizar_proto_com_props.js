function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
  this.calota = true;
}

Carro.prototype.cor = 'Preto';
Carro.prototype.calota = false;

let fusca = new Carro('VolksWagem', 10000);  // este é um prototype


console.log(fusca.hasOwnProperty('marca')); // hasOwnProperty() // verifica se o obj possui a propriedade indicada.
console.log(fusca.constructor.prototype.hasOwnProperty('marca')); // verifica no prototype

Carro.prototype.marca = 'Teste';

console.log(fusca.constructor.prototype.hasOwnProperty('marca')); // verifica no prototype

