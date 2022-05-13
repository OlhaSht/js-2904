'use strict'
//объединение мыссивов
const array1 = ['1', '2', '3'];
const array2 = ['4', '5', '6'];
const array3 = array1.concat(array2);

console.log(array3);

//revers
const array4 = ['1', '2', '3'];
console.log('array1:', array1);

const reversed = array1.reverse();
console.log('reversed:', reversed);

console.log('array4:', array4);

//push
let fruits = ['orang', 'aple'];
let greens = fruits.push('onion', 'parsley', 'dill');
 
console.log(fruits);
console.log(greens);

//unshift
let nambers = [1, 2, 3];
nambers.unshift(-2,-1,0);

console.log(nambers);