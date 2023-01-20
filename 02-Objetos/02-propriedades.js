let carro = {
  portas: 2,
  ano: 2022,
  marca: 'Renault',
  modelo: 'Kwid',
  cor: 'Branco'
};

console.log('Marca: ', carro.marca);
console.log('Ano: ', carro.ano);
console.log('Portas: ', carro.portas);
console.log('Cor: ', carro['cor']);

if (carro.portas >= 4) {
  console.log(`O carro ${ carro.marca } / ${ carro.modelo } possui 4 portas`);
}
else {
  console.log(`O carro selecionado possui ${ carro.portas } portas`);
}