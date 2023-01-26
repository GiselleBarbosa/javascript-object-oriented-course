function Carro(modelo, preco) {
  this.modelo = modelo;
  this.preco = preco;
}

Carro.prototype = {
  rodas: 4,
  portas: 4,
  ligar() {
    return "O carro está ligado";
  }
};

Carro.prototype.aro = 22;

let kwid = new Carro('Renault', 'Kwid', 40000);

console.log(kwid);
console.log(kwid.rodas);
console.log(kwid.ligar());
console.log(kwid.portas);
console.log(kwid.aro);
console.log(Carro);


let ferrari = new Carro("Ferrari", 200000);

Carro.prototype.tetoSolar = true;

Carro.prototype.abrirTetoSolar = function () {
  return "Abriu Teto Solar";
};

console.log(ferrari.tetoSolar);
console.log(ferrari.abrirTetoSolar());





