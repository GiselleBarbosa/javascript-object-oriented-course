let array1 = [0, 1, 2];
let array2 = new Array(3, 4, 5);

console.log(array1); 


console.log("(length):  " + array1.length); // length tamanho do array

array1.push(3) // adiciona ao final do array
console.log(array1) //  [ 0, 1, 2, 3 ]

array1.pop() // remove ultimo elemento do array
console.log(array1) // [ 0, 1, 2 ]


let array3 = { }

// console.log(array3.push(4)); // push != Object - metodo de array não serve para objeto