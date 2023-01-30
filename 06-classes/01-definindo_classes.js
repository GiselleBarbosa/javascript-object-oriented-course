class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

let giselle = new Pessoa('Giselle', 33)

console.log(giselle);  // Pessoa { nome: 'Giselle', idade: 33 }

console.log(typeof giselle); // object
console.log(typeof Pessoa); // function
