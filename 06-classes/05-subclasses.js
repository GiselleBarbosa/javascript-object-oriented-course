class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    return console.log('Pessoa falou');
  }
}

class Developer extends Pessoa {
  constructor(nome, idade, espec) {
    super(nome, idade);
    this.profissao = 'Developer';
    this.especializacao = espec;
  }
}

let giselle = new Developer("Giselle", 33, "Front-End");

console.log(giselle);

giselle.falar()