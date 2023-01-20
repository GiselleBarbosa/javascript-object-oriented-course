let numero1 = {
  props: 1
};
let numero2 = {
  props: 1
};

console.log(Object.is(numero1, numero2)); // false

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(NaN === NaN)); // false

console.log(Object.is(+0 === -0)); // false
console.log(Object.is(+0, -0)); // false


let numero3 = numero1;

console.log(Object.is(numero1, numero3)); // true
console.log(Object.is(numero1 === numero3)); // false

