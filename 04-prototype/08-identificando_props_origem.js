function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
  this.calota = true;
}

Carro.prototype.cor = 'Preto'; // prototype
// Carro.prototype.calota = false;

let fusca = new Carro('vw', 10000); // prototype

if (fusca.hasOwnProperty('calota')) {
  console.log("A propriedade 'calota' é do OBJ");
} else if (fusca.constructor.prototype.hasOwnProperty('calota')) {
  console.log("A propriedade é do PROTOTYPE");
} else {
  console.log("A propriedade 'calota não existe");
}

console.log(fusca.cor);


