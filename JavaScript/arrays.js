//exemplosArray

//Criar um Array
let array1 = []
let array2 = new Array();
let array3 = ["maçã","banana","uva"]

console.log('Array 1', array1);
console.log('Array 2', array2);
console.log('Array 3', array3);

//Adicionando elementos ao array
//array3 = "teste" Declarando dessa forma o "teste" vai substituir os valores do array3,a maneira correta de atribuir é com .push

console.log('\nArray após adicionar elementos',array1);
array1.push('el1');
array2.push('el2');
array3.push('el3');

console.log('Array 1', array1);
console.log('Array 2', array2);
console.log('Array 3', array3);

//Acessar elementos de um array
let primeiroElemento = array1[0];
let segundoElemento = array2[0];
let terceiroElemento = array3[3];
console.log('\nPrimeiro elemento:',primeiroElemento);
console.log('Segundo elemento:',segundoElemento);
console.log('Terceito elemento:',terceiroElemento);

//Modificar elementos de um array
array1[0] = "novo elemento"
console.log('\nArray após modificar elementos:',array1);

