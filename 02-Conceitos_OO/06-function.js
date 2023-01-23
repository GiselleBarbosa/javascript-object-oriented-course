/* 
FUNCTION

- tambem é um objeto 
- podemos criar novas funcoes a partir do new () **apesar de ser utilizado
-  */

let teste = new Function(
  'a',
  'return arguments'
);

console.log(teste('testando Function'));