/* Exercício 4
----------------------------------------------
- No Objeto que a propriedade shuriken, com uma quantidade de estrelas ninjas
- a cada disparo, subtraia uma.
- O ninja não pode mais jogar shurikens  caso elas tenham acabado
*/
function Ninja(nome, shurikens) {
  this.nome = nome;
  this.shurikens = shurikens;
  this.atirarShuriken = function () {
    if (shurikens > 0) {
      console.log("Atirou shuriken, restam " + (shurikens -= 1));
    } else
      console.log("Acabou =(");
  };
}

let naruto = new Ninja('Naruto', 5);

naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();






