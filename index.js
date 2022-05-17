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

//shift
let kit = ['js', 'css', 'html'];
console.log('kit before: ' + kit);

let set = kit.shift();
console.log('kit after: ' + kit);
console.log('set after: ' + set);

//pop
let kit2 = ['js', 'css', 'html'];
console.log('kit2 before:' + kit2);

let set2 = kit2.pop();
console.log('set2 after:' + set2);

//siice
let books = ['1', '2', '3', '4', '5'];
let somBooks = books.slice(0, 3);
console.log(somBooks);

let papers = ['1', '2', '3', '4', '5'];
let anyPapers = papers.slice(3);
console.log(anyPapers);

//splice
let pen = ['1', '2', '3', '4', '5'];
console.log(pen.splice(1,2));
console.log(pen);

let pensil = ['1', '2', '3', '4', '5'];
console.log(pensil.splice(1, 3));

let bee = ['1', '2', '3', '4', '5'];
console.log(bee.splice(3, 0, 'a', 'b', 'c'));
console.log(bee);

let mole = ['1', '2', '3', '4', '5'];
console.log(mole.splice(1, 0, 'a','b',));
console.log(mole);

//sort
let fliets = ['3', '4', '1', '2', '7'];
console.log(fliets.sort());

//=>
const getMax = (n1, n2) => {n1>n2 ? n1 : n2};

const showArgs = (a,b, ...c) => {
  console.log(c)
  c.forEach((item)=>{
    console.log(this)
  }
  )
}
showArgs(1,2,3,4,5);




