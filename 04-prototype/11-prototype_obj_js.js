Array.prototype.checkLength = function () { // criou um metodo no prototype do Array
  return this.length;
};

Array.prototype.somaDoisPrimeiros = function () {
  return this[0] + this[1];
};

let a = [1, 2, 3, 4, 5];  // 5
let b = [6, 7, 8];        // 3


console.log(a.checkLength()); // console.log(a.length) => poderia ser utilizado somente o .length, mas ele foi substituido pelo metodo ja criado no prototype do Array  */

console.log(b.length);

console.log(a.somaDoisPrimeiros());

