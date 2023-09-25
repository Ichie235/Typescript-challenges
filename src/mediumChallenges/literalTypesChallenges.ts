//Challenge 1
function courseName():string{
    return "TS"
}

//let typescript: "TS" = courseName() // type error is thrown

//Challenge 2
//what will the result of this variable be 
type BookType = "And the Mountains Echoed" | "The kite Runner"| "A Thousand splendid song"

let forBook:BookType = "The kite Runner" 
console.log(forBook) // The kite Runner