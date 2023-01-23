/*
ARRAY

- é o objeto pai de todos os arrays
- pode instanciar um array com new Array()
- possui metodos e propriedades
*/

let a = new Array(1, 2, 3);

a[3] = 4; // adicionado o 4 ao indice 3 do array

console.log(a.toString()); // exibindo o array em forma de string
console.log(a); // exibindo o array

console.log(Array instanceof Object);