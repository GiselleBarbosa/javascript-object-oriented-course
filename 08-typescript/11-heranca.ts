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

class Emprego extends Pessoa {
  cargo: string;
  salario: number;
  constructor(cargo: string, salario: number, nome: string, idade: number) {
    super(nome, idade);
    this.cargo = cargo;
    this.salario = salario
   
  }
  promocaoDeCargo(){
    return console.log('foi promovido');
  }
}

let giselle = new Pessoa('Giselle', 33);

console.log(giselle);
console.log(giselle.apresentarPessoa());

let marcos = new Emprego('Develper', 2000, 'Marcos Felipe', 24)

console.log(marcos);
console.log(marcos.promocaoDeCargo());