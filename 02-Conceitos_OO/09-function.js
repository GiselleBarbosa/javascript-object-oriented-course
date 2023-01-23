/* 
Functions methods
- o call pode pegar metodos emprestados de objetos
- o apply funciona igual ao call, mas todos os parametros são transformados em arrays
- o método call() invoca uma função com um dado valor this e argumentos passados individualmente. 

- a principal diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um único array de argumentos

*/
let a = {
  nome: 'Giselle',
  dizerNome() {
    return console.log("Propriedade nome contida neste objeto: " + this.nome);
  }
};

let b = {
  nome: 'Tiago'
};

a.dizerNome();
a.dizerNome.call(b) // com o call usa-se o call() e passa o outro objeto como parametro
a.dizerNome.apply(b) 

