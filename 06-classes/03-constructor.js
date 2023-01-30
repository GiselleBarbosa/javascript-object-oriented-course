/* classe anonima */

let Pessoa = class {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  nomeDaPessoa() {
    return 'O nome da pessoa é: ' + this.nome;
  }

  set mudarNomeDaPessoa(novoNome) {
    this.nome = "Sra. " + novoNome;
  }
  get receberNomePessoa() {
    return "O nome da pessoa é: " + this.nome;
  }
};

console.log(typeof Pessoa);

let giselle = new Pessoa('Giselle', 33);

console.log(giselle);

console.log(giselle.nomeDaPessoa());

giselle.mudarNomeDaPessoa = 'Giselle';

console.log(giselle.nome);

console.log(giselle.receberNomePessoa);
