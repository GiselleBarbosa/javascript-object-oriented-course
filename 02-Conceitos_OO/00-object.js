/*
OBJECT

- é o pai de todos os objetos no javascript
- possui propriedades e metodos, mesmo o objeto estando vazio
- pode ser criado via new Object ()
*/

let pessoa = {
  nome: 'Giselle',
  idade: 33
};
console.log(pessoa);


let pessoa1 = new Object();
pessoa1.nome = 'Tiago'
pessoa1.idade = 30
console.log(pessoa1);

console.log(pessoa.toString()); // representação do objeto em string
console.log(pessoa.valueOf()); // retorna o proprio objeto


