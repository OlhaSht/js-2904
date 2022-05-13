const dog1 = {
  name:'bobik',
  gender: 'boy',
  say: function(){
    return 'guf'
  }
};

console.log(dog1)
const dog2 = {
  name:'guchka',
  gender: 'true',
  say: function(){
    return 'rrr'
  }
} ;
function Dog (name,gender){}





// function Country(name ='USA', population = 330000, area =3000){
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function(){
//     return this.population / this.area;
//   }
// }
// const usa = new Country();
// console.log(usa);
// console.log(usa.getDensity());

/*
function Auto(marka='bmv', maxSpeed=450){
  this.name = marka;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

this.asselerate = function(value){
  this.speed += value;
  return this.speed;
  };

  this.decelerate = function(value){
    this.speed -= value;
    return this.speed;
  };
  
  this.stop = function(){
    return (this.speed=0);
  };
}
const auto = new Auto();
console.log(auto);
console.log(auto.asselerate());
console.log(auto.speed);*/




/*
const logRangeNumber = function (max = 10, min = 1, number = 3) {
  //проверка на вход
  if (max < min) {
    return false;
  }
  //выводить числа из диапозона в обратном порядке
  for (let i = max; i >= min; i--) {
    //логировать кратные числу
    if (i % number === 0) {
      console.log(i);
    }
  }
  return true;
};*/

/*
const trenningMath = function(namber1 =10, namber2= 2, operator  ='+');
 prompt('2*8=', 'your answer');
 while(let i =)
 if (2*8===16){
 return true;
 }
 */


//  let countTry = 0;
//  alert('try = ' + countTry);
//  prompt ();
 
//  if (countTry === ){
//  alert ('How you know?!');
//  return '37';

 
 
 

 /*
 while (countTry < SECRET_NAMBER);
 const userInput = prompt('enter my age', '**');
 countTry++;
 {
 
 return(countTry());
}
 console.log (37);

 */
let countTry = 0;
while (true){
  
  const userInput =  prompt('guess the number');
  const userInputNumber = parseInt(userInput);

  countTry = countTry + 1;
  
  if (userInputNumber === SECRET_NAMBER){
    alert("win. countTry: " + countTry);
    break;
   } else if (userInputNumber < SECRET_NAMBER){
    alert("Secret number is bigger");
  } else if (userInputNumber > SECRET_NAMBER){
    alert("Secret number is less");  
  }
}
