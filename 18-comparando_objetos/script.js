function Ninja(nome, arma) {
  this.nome = nome;
  this.arma = arma;
}

const naruto = new Ninja('Naruto', 'Kunai');
const copia = new Ninja('Naruto', 'Kunai');
const cloneNaturo = naruto

console.log(naruto);
console.log(copia);
console.log(cloneNaturo);

console.log("");

console.log("naruto = copia: ", naruto === copia );
console.log("naruto = cloneNaturo: ",naruto === cloneNaturo );
console.log("copia = cloneNaturo: ",copia === cloneNaturo );