function Carro(modelo, preco) {
  this.modelo = modelo;
  this.preco = preco;
}

Carro.prototype = {  // Para adicionar multiplas propriedades em um objeto, utiliza-se o prototype passando um objeto com as props a serem inseridas na classe* funcao construtora.
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







