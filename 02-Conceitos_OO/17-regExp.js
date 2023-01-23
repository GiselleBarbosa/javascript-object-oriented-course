/* 
RegEx - EXPRESSOES REGULARES
- Objetos para tratar expressoes regulares
- podemos utilizar metodos como test e exec
*/

let nome = new RegExp(/se/);

console.log(nome.test("giselle"));        // true 
console.log(nome.test("opa"));            // false 
console.log(nome.test("passeio"));        // false 
