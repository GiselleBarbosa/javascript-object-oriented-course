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
var giselle = new Pessoa('Giselle', 33);
console.log(giselle);
console.log(giselle.apresentarPessoa());
