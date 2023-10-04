//Challenge 1
// what will the function invocation result in
function multiply(n:number):number{
    return n * n
}
const result: (n:number)=> number = multiply

result(11) // 121

//Challenge 2
function addition(n:number):number{
    return n+n
}
//const result2: (n:number)=> string = addition  // Type 'number' is not assignable to type 'string'.

//Challenge 3
// create a function that can accept a number,string and boolean but returns a string
function myString(arg:string|number|boolean):string{
    return arg.toString()
} 


//Challenge 4
// create a function that returns opposite of  boolean value
function boolInverted(arg:boolean):boolean{
    return !arg
}

//Challenge 5
//creates a function that either adds 1 to numnber or subtract 1 from a numeber or do nothing based on
function doSomething(num:number,operation: 'add'|'subtract'|'do nothing'):number{
    if(operation==='add'){
        return num + 1
    }else if(operation==='subtract'){
        return num - 1
    }else{
        return num
    }
}

//Challenge 6
// what will the function invocation result in
function someFunc(){

}

// const nyNumb: number = someFunc() //Type 'void' is not assignable to type 'number'.

//Challenge 7
// what will the function invocation result in
function callAnotherFunction(func:(price:number,course:string)=>string){
    return func(10.99,"TS")
}
let caller = callAnotherFunction((price,course)=>` The ${course} has a price of ${price}`)
console.log(caller)
