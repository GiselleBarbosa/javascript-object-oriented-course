/* Exercício 7 
----------------------------------------------
- crie um objeto que tenha caracteristicas de um caminhão e coloque em propriedades distintas
- com destructuring, coloque essas propriedades em variaveis separadas
*/

let caminhao = {
  rodas: 12,
  eixos: 8,
  marca: "Scania"
};

let { rodas, eixos, marca } = caminhao;

console.log(rodas);
console.log(marca);
console.log(marca);
console.log(caminhao);
