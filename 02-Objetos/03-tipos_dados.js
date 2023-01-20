let maquina = {
  material: 'Aço Inox',
  equipamentos: ['motor','freio', 'esteira', 'cilindro'],
  possuiGarantia: false,
  numeroDeMotores: 1
}
console.log(maquina);
console.log(maquina.material);
console.log('Equipamentos: ', maquina.equipamentos[0]);


for(let i = 0; i < maquina.equipamentos.length; i ++){
  console.log(maquina.equipamentos[i]);
}

if(maquina.possuiGarantia == false){
  console.log('Esta maquina NÃO possui Garantia');
} else {
  console.log('Esta maquina POSSUI Garantia');
}