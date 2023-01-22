/* Exercício 7 
----------------------------------------------
- crie 2 objs que compartilhem nomes de propriedades via object literals;
- Uma variavel deve definir a parte que se repete nas propriedades dos objetos 
*/

let n = 'numero_de_';

let arvore = {
  [n + "frutos"]: 10
};

let carro = {
  [n + "portas"]: 4
};

let pessoa = {
  [n + "pernas"]: 2
};


console.log(arvore);
console.log(carro);
console.log(pessoa);