/* Exercício 2
----------------------------------------------

- Crie um objeto com a propriedades nome
- Crie um metodo que exibe o nome do objeto pessoa
*/

let pessoa = {
  name: 'Giselle',
  showName() {
    return `O nome da pessoa é ${ this.name }`;
  }
};

console.log(pessoa.showName());