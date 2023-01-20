function criarArvore(especie, temFruto) {
  return {
    especie: especie,
    temFruto: temFruto
  };
}

let laranjeira = criarArvore('Laranjeira', true);

console.log(criarArvore);
console.log(laranjeira);
console.log(laranjeira.constructor);

function Heroi(nome, classe) {
  this.nome = nome,
    this.classe = classe;
}

/* class Heroi {
  constructor(nome, classe) {
    this.nome = nome,
      this.classe = classe;
  }
} */

let spider = new Heroi('Spider-Man', 'Herói');
console.log(spider);
console.log(spider.constructor);


let obj = {
  teste: "Teste"
};

console.log(obj);
console.log(obj.constructor);