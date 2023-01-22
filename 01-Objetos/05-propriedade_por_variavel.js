let game = {
  name: 'Final Fantasy X',
  players: 1,
  onlineMode: false,
  "classification": 'Livre',
  'avaliableOnPs5': false
};

const verify = 'classification';

// não consegue pegar o valor da propriedade 'classification'
console.log(game.verify);

// consegue pegar desta forma utilizando []
console.log(game[verify]); //  'Livre'



