/* 
NUMBERS
- algumas propriedades que são interessantes no number são MAX_VALUE E MIN_VALUE, para saber o maximo e o minimo valor que o javascript atinge em operações matematicas.
- metodos importantes: toFixed() , toPrecision() e toExponential()
- não é preciso invocar antes o Number para utilizar estes metodos
*/

console.log(Number.MAX_VALUE);                  // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);                  // 5e-324
console.log(Number.MAX_SAFE_INTEGER);           // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);           // -9007199254740991
console.log(Number.NaN);                        // 9007199254740991
console.log(Number.NEGATIVE_INFINITY);          // -Infinity
console.log(Number.POSITIVE_INFINITY);          // Infinity

let f1 = 3.14159265358
console.log(f1);
console.log(f1.toFixed(2));                     // fixa a quantidade de casa decimais
console.log(f1.toPrecision(3));                 // arredonda o numero
console.log(f1.toExponential());                