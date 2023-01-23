/*Number 
- Number tambem é um objeto para tratar os numero, 
- possue metodos como parseInt, parseFloat
- podemos criar um novo objeto com new tambem
-*/

let a = 2;
let b = new Number(3.14);

console.log(a);
console.log(b);
console.log(b.valueOf());
console.log(Number.parseInt(b));

let c = 12.555;

console.log(Number.parseInt(c));
console.log(parseInt(c));

let d = '12.2345'

console.log(Number.parseInt(d)); // transformou em numero e passou para inteiro
console.log(Number.parseFloat(d)); // transformou em numero e passou para inteiro
console.log(typeof d);




