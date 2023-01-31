// cria um conjunto/lista apenas com valores numericos
var Carro;
(function (Carro) {
    Carro[Carro["motor"] = 1] = "motor";
    Carro[Carro["portas"] = 4] = "portas";
    Carro[Carro["pneus"] = 4] = "pneus";
    Carro[Carro["pedais"] = 3] = "pedais";
    Carro[Carro["vidracas"] = 6] = "vidracas";
})(Carro || (Carro = {}));
var qtdVidros = Carro.vidracas;
console.log(qtdVidros);
console.log(Carro);
