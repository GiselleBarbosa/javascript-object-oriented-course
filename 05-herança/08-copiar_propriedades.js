function extend(Filho, Pai) {
  let paiProto = Pai.prototype;
  let filhoProto = Filho.prototype;
  for (let i in paiProto) {
    filhoProto[i] = paiProto[i];
  }
  // filho tem acesso ao obj pai
  filhoProto.uber = paiProto;

}

function Veiculo() { }

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function () {
  return 'O veiculo ligou';
};

function Trem(tipo) {
  this.tipo = tipo;
}

Trem.prototype.vagoes = 50;

function Carro() { }

Carro.prototype.pneus = 4;

// construtor temporario  por funcao extends
extend(Trem, Veiculo);
extend(Carro, Veiculo);

let trembala = new Trem('Trem Bala');
let trem = new Trem('Trem');
let ferrari = new Carro();

Carro.prototype.ligar = function () {
  return 'Vrummmmm';
};


Trem.prototype.ligar = function () {
  return 'Piuiiii';
};
console.log(trem.ligar());
console.log(trembala.ligar());
console.log(ferrari.ligar());
console.log(trem);

Veiculo.prototype.carenagem = 'aço 2'

