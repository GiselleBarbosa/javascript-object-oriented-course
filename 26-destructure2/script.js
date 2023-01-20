let carro = {
  marca: 'Renault',
  modelo: 'Kwid',
  ano: 2019,
  possuiGarantia: true
};

// variavel externa - (avulsa)
let ano = 0;
console.log(ano);

console.log(ano === carro.ano);

// aqui o destructuring ira utiliza esta variavel que foi iniciada sozinha para receber o valor vindo do objeto. Devido a sintaxe ({ } = objeto )
({ ano } = carro);

console.log(ano);






