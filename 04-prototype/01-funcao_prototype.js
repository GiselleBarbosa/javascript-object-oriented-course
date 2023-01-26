function returnTeste() {
  return console.log('teste');

}

returnTeste();
console.log(returnTeste.prototype);
console.log(typeof returnTeste.prototype);

returnTeste.prototype.teste = 1;

console.log(returnTeste.prototype);
