var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentarPessoa = function () {
        return "Esta pessoa se chama ".concat(this.nome, " e tem ").concat(this.idade, " anos de idade");
    };
    return Pessoa;
}());
var Emprego = /** @class */ (function (_super) {
    __extends(Emprego, _super);
    function Emprego(cargo, salario, nome, idade) {
        var _this = _super.call(this, nome, idade) || this;
        _this.cargo = cargo;
        _this.salario = salario;
        return _this;
    }
    Emprego.prototype.promocaoDeCargo = function () {
        return console.log('foi promovido');
    };
    return Emprego;
}(Pessoa));
var giselle = new Pessoa('Giselle', 33);
console.log(giselle);
console.log(giselle.apresentarPessoa());
var marcos = new Emprego('Develper', 2000, 'Marcos Felipe', 24);
console.log(marcos);
console.log(marcos.promocaoDeCargo());
