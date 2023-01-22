/* Exercício 4
----------------------------------------------
- crie um obj inimigo, com as propriedades nome e vivo (boolean iniciado como true) 
- o metodo atirarShuriken do exercicio passado deve matar o inimigo setando a propriedade do inimigo como false
*/

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


naruto.atirarShuriken(orochimaru)

console.log(orochimaru);
