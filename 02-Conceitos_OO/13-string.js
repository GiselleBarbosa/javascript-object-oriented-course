/* 
STRINGS
- Podemos criar uma string em objeto com o new
podemos acessar a propriedade length que mostra o numero de caracteres
e é possivel acessar um caracter por seu indice
*/

let stringObject = new String('teste');
let string = 'testando';

console.log(stringObject);
console.log(string);

console.log(stringObject.length);       // mostra o tamanho da string
console.log(string.length);

console.log(stringObject[0]);            // mostra qual caracter esta no indice informado
console.log(string[0]);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string.charAt(0));            // mostra qual caracter esta na posicao indicada na pesquisa
console.log(string.indexOf('e'));         // busca a posição do caracter informado



