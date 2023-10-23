// challenge 1
// what will be the result of this variable assignment

/*let vague: number | undefined = null 
Type 'null' is not assignable to type 'number | undefined'. this error is thrown only because "strictNullChecks": true, in tsconfig.json
*/

// challenge 2
// what will be the result of this variable assignment

/*let vague1: boolean | undefined = true? true : undefined 
let vague2 :boolean = vague1 //Type 'boolean | undefined' is not assignable to type 'boolean'.
*/

// challenge 3
// what will be the result of this variable assignment

let vague3: string | undefined = undefined  // undefined

// challenge 4
let vague4: boolean | undefined = true ? true : undefined // true
//let vague4 : boolean | undefined = true? undefined : true //undefined
let vague5: boolean

if(vague4===undefined){
    vague5 = false
}else{
    vague5 = true
}

// challenge 5
//create a function that produce value based on some conditions

function nullCheck(arg: string| undefined): number | undefined{
    if(typeof arg === undefined || isNaN(parseInt(arg!))){
         return undefined
    }else{
        return parseInt(arg!)
    }
}