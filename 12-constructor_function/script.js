function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  this.ligar = function () {
    return `Boa viagem ${ this.marca } ${ this.modelo }!!`;
  };
}

let carro1 = new Carro('Volkswagem', 'Gol');
console.log(carro1.marca, carro1.modelo);
console.log(carro1.ligar());

let carro2 = new Carro('Renault', 'Kwid')
console.log(carro2.marca, carro2.modelo);
console.log(carro2.ligar());

let carro3 = new Carro('Volkswagem', 'Polo')
console.log(carro3.marca, carro3.modelo);
console.log(carro3.ligar());