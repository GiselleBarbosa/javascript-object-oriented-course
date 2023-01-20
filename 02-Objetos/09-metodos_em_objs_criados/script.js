let carro = {
  tipo: 'Sedan'
};

// atribuindo propriedades ao objeto
carro.portas = 4;

console.log(carro);

if(carro.tipo == 'Sedan'){
  carro.portaMalasMaior = true
  console.log("Adicionando Porta Malas");
}

console.log(carro);

carro.acelerar = function(){
  return 'Vrummmmmmmmmm'
}
console.log(carro.acelerar());