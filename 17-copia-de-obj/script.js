let objeto = {
  numero: 1
}

console.log(objeto.numero);

let copia = objeto
//1
console.log(copia.numero);
//1
copia.numero = 5
console.log(objeto);
//{ numero: 5 }

console.log(copia);
//{ numero: 5 }

objeto.numero = 2

console.log(copia.numero);