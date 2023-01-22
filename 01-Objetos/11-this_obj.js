let carro = {
  marca: 'Renault',
  modelo: 'Kwid',
  ligar() {
    return `Boa viagem ${ this.marca } ${ carro.modelo }`;
    /* O this se refere ao proprio objeto, a propria instancia */
  }
};


let carro2 = {
  marca: 'Renault',
  modelo: 'Sandero',
  ligar() {
    return `Boa viagem ${ this.marca } ${ this.modelo }`;
  },
  acelerar: function () {
    for (let i = 1; i <= 3; i++) {
      console.log(this.ligar());
    }
   
  }
};

console.log(carro.ligar());
console.log(" ");

console.log(carro2.ligar());
console.log(" ");

console.log(carro2.acelerar());

