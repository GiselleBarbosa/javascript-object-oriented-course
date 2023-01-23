function teste(a){
  return a
}

console.log(teste('opa'));

console.log();

teste2 = new Function(
  'a',
  'return arguments'
)
console.log(teste2('testando')[0]);