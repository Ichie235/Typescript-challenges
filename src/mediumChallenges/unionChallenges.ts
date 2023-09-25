//Challenge 1
//what will the function invocation result in
function productId():string|number{
  return 112233
}

let id :string|number = productId()

console.log(id)  //112233

//Challenge 2
//what will the function invocation result in
function productId2():string|number{
    return 112233
  }
  //let id2:number = productId() //Type error is thrown

  
//Challenge 3
////what will the function invocation result in
function productId3():number{
    return 112233
  }

let id3:string|number = productId() 
console.log(id3) //112233 