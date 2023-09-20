//challenge 1
// print congratulations if a persons age is 21 or older
let age: number = 21;
if (age >= 21) {
  console.log("congratultions");
}

//challenge 2 LOOPS
//based on the array below
let searchHistory: string[] = [
  "how to make money online",
  "benefits of eating garlic",
  "html css tutorial",
  "calisthenics",
];

// for (let searchItem of searchHistory) {
//   console.log(searchItem.split(" "));
//   for (let entry of searchItem) {
//     if (entry === "html" || entry === "css") {
//       console.log("would you like to learn how to create website for free");
//     }
//   }
// }
//OR 
searchHistory.map((entry)=>{
     if(entry==='html'|| entry==='css'){
console.log("would you like to learn how to create website for free")
    }
})
