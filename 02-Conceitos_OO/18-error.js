/*  
ERROR
 - Objeto para tratar de erros
 - Ele deveriva os erros que recebemos
 - É possivel criar erros personalizados
*/

try {
  // 
  throw new Error('Ocorreu um erro');
} catch (e) {
  console.log(e.name + ": " + e.message);
}