function descreverCarro(marca, aro) {
    if (aro) {
        return "O carro \u00E9 da marca ".concat(marca, " e tem o aro ").concat(aro);
    }
    else {
        return "O carro \u00E9 da marca ".concat(marca);
    }
}
console.log(descreverCarro('Fiesta', 20));
console.log(descreverCarro('Fiesta'));
