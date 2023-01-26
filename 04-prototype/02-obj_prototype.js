function Carro(modelo, preco) {
  this.modelo = modelo;
  this.preco = preco;
}

Carro.prototype.rodas = 4;
Carro.prototype.ligar = function () {
  return "O carro está ligado";
};

let kwid = new Carro('Renault', 'Kwid', 40000);

console.log(kwid);
console.log(kwid.rodas);
console.log(kwid.ligar());











