/* classe anonima */

let Pessoa = class {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  cumprimentaPessoa() {
    return 'Bem vinda ' + this.nome;
  }
};

let giselle = new Pessoa('Giselle', 33);

console.log(giselle);  // Pessoa { nome: 'Giselle', idade: 33 }

console.log(typeof giselle); // object
console.log(typeof Pessoa); // function

console.log(giselle.cumprimentaPessoa());