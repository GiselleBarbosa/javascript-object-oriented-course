/* Exercício 3
----------------------------------------------

- Crie um objeto Ninja, atraves de constructor function;
- Ele deve possui a propriedade de nome do ninja e o metodo atirarShurikens
*/

function Ninja(nome) {
  this.nome = nome;
  this.atirarShuriken = function () {
    return `O Ninja ${ nome } atirou uma shuriken`;
  };
}

let naruto = new Ninja('Naruto');

console.log(naruto.atirarShuriken());



