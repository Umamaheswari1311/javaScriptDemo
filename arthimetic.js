var a=5,b=10;
//Addition
var res= a + b;
console.log(res)
//Subtraction
res=res-5
console.log(res)
//Multiplication
res=res*10
console.log(res)
//Division
res=res/10
console.log(res)
//Modulus(Reminder)
res=res%10
console.log(res)
//Increment
console.log(++res)
//Decrement
console.log(--res)

//Find Max value 
console.log(Math.max(1,22,23423,3243,45567,8988667))
//Find the min value 
console.log(Math.min(1231312,-12321,12331,0))
//RoundOf the value
console.log(Math.round(35.50))
console.log(Math.round(35.49))
//AlwaysNext Round of
console.log(Math.ceil(5.1))
console.log(Math.ceil(5.9))

//omit the fraction 
console.log( Math.floor(7.1))
//Random 
console.log(Math.random(1))
//Random Range
console.log(Math.floor(Math.random()*10+1))

 function getRandomValue(from,to)
 {
     return Math.floor(Math.random()*(to-from)+from)
 }

 var val=['java','javascript','python']
 console.log(val[getRandomValue(0,3)])