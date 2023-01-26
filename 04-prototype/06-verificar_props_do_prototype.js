function Carro(modelo, preco) {
  this.modelo = modelo;
  this.preco = preco;
  this.calota = true;
}

Carro.prototype.cor = 'Preto';
Carro.prototype.calota = false; // por esta prop ter o mesmo nome, só é usada quando deletada a prop do objeto. 

let fusca = new Carro('VolksWagem', 10000);

console.log(fusca.calota);  // prevalece a classe

delete fusca.calota // feito isso a propriedade do objeto foi deletada, e ele ira buscar o prototype

console.log(fusca.calota);  // propriedade vunda do prototype
