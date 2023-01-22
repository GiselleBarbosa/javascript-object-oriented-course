/* Exercício 1
----------------------------------------------

- Crie um objeto com 3 propriedades
- A primeira devera ser uma string
- A segunda um number 
- A terceira um bolean
- Exibir estas propriedades criadas
*/

let person = {
  name: 'Giselle',
  age: 33,
  isMon: true,
  myChildren: ['Yago', 'Marcos'],

  childrenDetail: [
    { name: 'Yago', age: 18 },
    { name: 'Marcos', age: 18 }
  ],

  validAgeSons() {
    if (this.childrenDetail[0].age >= 18) {
      return `Possui filho maior de idade => ${ this.myChildren[0] } tem ${ this.childrenDetail[0].age } anos`;
    }
    if (this.childrenDetail[1].age >= 18) {
      return `Possui filho maior de idade => ${ this.myChildren[1] } tem ${ this.childrenDetail[1].age } anos`;
    }
    else {
      return "Não possui filhos maiores idade";
    }
  }

};

console.log('Objeto: ', person);

console.log("");

console.log('name: ', person.name);
console.log('age: ', person.age);
console.log('isDeveloper:', person.isDeveloper);
console.log('myChildren:', person.myChildren);
console.log('childrenDetail:', person.childrenDetail);

console.log(person.validAgeSons());
