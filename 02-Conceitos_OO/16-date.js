/*
DATE
- Um objeto que lida com datas;
- Podemos criar uma nova data a partir de agora;
- ou apartir de uma data que precisamos
*/

console.log(new Date());
console.log(new Date(2023, 07, 15));
console.log(new Date(1555902000000));



// hoje
let data = new Date();
console.log(data);

console.log(data.setMonth(2)); // data em milisegundos
console.log(new Date(data.setMonth(0)));

console.log(new Date(Date.now()));

console.log(Date.parse(new Date(data.setMonth(0))));// data em milisegundos

