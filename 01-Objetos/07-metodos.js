let pessoa = {
  nome: 'Giselle',
  idade: 33,
  falar: function () {
    console.log("Oi, meu é Giselle");
  },
  aniversario() {
    this.idade += 1;
  },
  dizerIdade() {
    console.log("minha idade é: " + this.idade);
  },

  podeDirigir: function () {
    if (this.idade >= 18) {
      console.log(pessoa.nome , "Pode dirigir pois possui ", pessoa.idade);
    } else {
      console.log("Ainda não pode dirigir");
    }
  }
};

console.log(pessoa.aniversario());
console.log(pessoa.idade);
console.log(pessoa.aniversario());
console.log(pessoa.idade);
console.log("Metodo falar()", pessoa.falar());
console.log(pessoa.podeDirigir());



let calculadora = {
  numeros: 0,
  somar: function (a, b) {
    return this.numeros = a + b;
  },
  subtrair: function (a) {
    return this.numeros -= a;
  }
};

console.log(calculadora.somar(2, 4));
console.log(calculadora.numeros);
calculadora.subtrair(3);
console.log(calculadora.numeros);
