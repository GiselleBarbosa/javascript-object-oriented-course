/* Exercício 6 - resposta professor 
----------------------------------------------
- crie uma funcao que retorna se o objeto é uma instancia de outro objeto
- deve apresentar no console as mensagens de positivo ou negativo
*/

// compare
function compareObjs(obj1, obj2) {
  // instanceof - recebe 1 obj e uma classe
  if (obj1 instanceof obj2) {
    console.log("O objeto " + obj1.nome + " é uma instância de " + obj2.name);
  } else {
    console.log("O objeto " + obj1.nome + " não é uma instância de " + obj2.name);
  }
}

// objs
function Ninja(nome, shurikens) {
  this.nome = nome;
  this.shurikens = shurikens;
  this.atirarShuriken = function (inimigo) {
    if (shurikens > 0) {
      inimigo.vivo = false;
      console.log("Atirou shuriken, restam " + (shurikens -= 1));
    } else
      console.log("Acabou =(");
  };
}

function Inimigo(nome) {
  this.nome = nome;
  this.vivo = true;
}

let naruto = new Ninja('Naruto', 1);
let orochimaru = new Inimigo('Orochimaru');


naruto.atirarShuriken(orochimaru);

console.log(orochimaru);

compareObjs(naruto, Ninja)
compareObjs(orochimaru, Ninja)
compareObjs(naruto, Inimigo)
