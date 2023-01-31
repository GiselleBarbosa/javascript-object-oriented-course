function imprimeDados(obj: { nome: string, idade: number; }) {
  return console.log(`Esta pessoa se chama ${obj.nome} e tem ${obj.idade} de idade`);
}

let pessoa1 = { nome: 'Giselle', idade: 33 };

console.log(pessoa1);