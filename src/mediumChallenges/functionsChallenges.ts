 //Challenge 1
 // create a function that returns the multiplication of two arbitray number and returns a type error when a string is passed

 function multiplyValues(a:number,b:number):number{
    return a * b
 }
let value0 = multiplyValues(2,3)
console.log(value0)
//  let value1 = multiplyValues(2,'3')

//Challenge 2
//simulate a type error for the returned value of a function that has an arbitrary type

function myName2(firstName:string,lastName:string):string{
      return firstName + lastName
}
//console.log(myName2(4,5))

//Challenge 3
// create an arrow function that returns the addition of boolean and a number

// let addition = (num:number,bool:boolean):number=> return num + bool

//Challenge 4
// create a function that makes words pluralized
let pluralize = function(str:string):string{
    return str +  's'
}

//Challenge 5
//write a function that adds 1 to a number or subtracts 1 from a number based on boolean evaluation
let decideOperation = (num:number,bool:boolean):number=>{
//   if(bool===true){
//    return num + 1
//   }
//   return num - 1
 //OR 
 return bool ?  num + 1 : num - 1
}
console.log(decideOperation(10,true))

//Challenge 6
//create a function that takes in an array of numbers

function myArr(arr:number[]):number[]{
       return arr
}
console.log(myArr([1,2,3,4,5,6]))