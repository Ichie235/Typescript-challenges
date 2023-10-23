let number:Array<number> = [1,2,3]

let string:Array<string> = ["hello"]

let nextedArr: Array<Array<number>> = [
    [1,2],
    [1,2,3]
]

function  getArrayItem<T>(item:Array<T>):T{
   return item[2]
}

let number22 = getArrayItem<number>([1,23,3,7])

let string2 = getArrayItem<string>(['hello'])

//Generic Objects

type Cover<E>={
    front: E,
    back:E,
}

const bookCover:Cover<string>={
    front: "book name",
    back:"author biography"
}

const bookCover2:Cover<number>={
    front: 1,
    back: 15
}

type Products<E1,E2>={
    name: E1,
    price:E2,
}
const product: Products<string,number> ={
    name:"javascript",
    price: 787
}

type FuncType<T> = (elements: Array<T>) => number

let getArrayLength:FuncType<number> = (elemnts)=> {
    return elemnts.length
}

let arrLength = getArrayLength([1,2,3,4,4,4,5,5,])