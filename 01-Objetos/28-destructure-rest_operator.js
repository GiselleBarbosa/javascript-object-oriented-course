let array = [1, 2, 'a', 'b', 'c'];
let [num1, num2, ...letras] = array;

// extraindo dados do array E utilizado REST OPERATOR para inserir todos os valores restantes dentro de um novo array
console.log(num1);
console.log(num2);
console.log(letras);



// utilizando um array maior
let array2 = ['a', 'b', 'c', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, c, ...numeros] = array2;

console.log(a);
console.log(b);
console.log(c);
console.log(numeros);