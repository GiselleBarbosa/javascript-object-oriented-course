let carro = {
  tipo: 'Sedan',
  ligar: function(){
   return "Ligou!";
  }
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


// usando delete apagasse propriedades do objeto
delete carro.portas
delete carro.acelerar

console.log(carro);
console.log(carro.ligar());