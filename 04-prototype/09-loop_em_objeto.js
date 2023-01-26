function Carro(marca, preco, cor, aro) {
  this.marca = marca;
  this.preco = preco;
  this.calota = true;
  this.cor = cor;
  this.aro = aro;
}

let fusca = new Carro('vw', 10000, 'vermelho', 18);

// >> for in <<  é utilizando para percorrer um objeto e suas propriedades => for (propriedade in objeto) ** enquanto for, é utilizado em []

for (prop in fusca) {
  console.log(prop + ' => ' + fusca[prop]); // acessando um objeto e sua propriedade utilizando obj['prop'] ou obj.prop
}

