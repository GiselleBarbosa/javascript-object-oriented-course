class Pessoa {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentarPessoa() {
    return `Esta pessoa se chama ${this.nome} e tem ${this.idade} anos de idade`;
  }
}

let giselle = new Pessoa('Giselle', 33)

console.log(giselle);
console.log(giselle.apresentarPessoa());