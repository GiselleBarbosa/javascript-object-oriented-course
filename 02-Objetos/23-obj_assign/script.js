let pessoa = {
  nome: 'Giselle',
  getNome() {
    return `Nome originado do objeto: ${ this.nome }`;
  }
};

let pessoa2 = {
  nome: 'Maria', // o nome sera substituido do herdado
  idade: 33
};

// metodo assign =  copia todos os valores de um objeto para outro, e caso no obj que esteja recebendo a copia já exista a mesma props, ela sera substituida ficando igual ao pai.

// Neste metodo, como paramentros primeiro deve-se informar o alvo que recebera as props e segundo a (fonte/pai) de onde virão as props.

Object.assign(pessoa2, pessoa); // copiando do obj 1 para o 2

console.log(pessoa2.nome); // Giselle
console.log(pessoa2); // substituiu o Maria do Objeto 2 pelo Giselle vindo do 1

pessoa2.getNome();
pessoa2.nome = "Joao" // mudou nome para joao

console.log(pessoa);
console.log(pessoa === pessoa2);


