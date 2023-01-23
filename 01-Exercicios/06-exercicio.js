/* Exercício 6 
----------------------------------------------
- crie uma funcao que retorna se o objeto é uma instancia de outro objeto
- deve apresentar no console as mensagens de positivo ou negativo
*/

function Obj1(nome) {
  this.nome = 'objeto 1';
}

function Obj2(nome) {
  this.nome = 'Objeto 2';
}

let filho = new Obj2();

function campareObjs(obj1, obj2) {
  if (Obj1 instanceof Obj2) {
    return console.log("é uma instancia");
  } else {
    return console.log("não é uma instancia");
  }
}

comparaInstancia();

console.log(filho);