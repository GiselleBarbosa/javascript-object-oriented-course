let obj1 = {};
let obj2 = new Object();

console.log(obj1);
obj1.nome = 'Giselle';

console.log(obj2);
obj2.nome = 'Tiago';

console.log(obj1);
console.log(obj1.valueOf()); // O método valueOf() retorna o valor primitivo do objeto especificado.
console.log(obj1.toString()); // O método toString() retorna uma string representando o objeto.