function Carro(modelo, preco) {
  this.modelo = modelo;
  this.preco = preco;
  this.calota = true;
}

Carro.prototype.cor = 'Preto';
Carro.prototype.calota = false;

let fusca = new Carro('VolksWagem', 10000);

console.log(fusca.cor); // preto

fusca.cor = 'Azul';

console.log(fusca.cor); // azul

console.log(fusca.calota); // true // quando coexiste com a da classe, prevalece a da props da classe