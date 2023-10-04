//Challeneg 1
// Create an object type and give it three properties
 type Employee = {
    name: string,
    age : number,
    job: string,
 }

 const employee: Employee ={
    name: 'ichie chinemerem richard',
    age: 23,
    job: 'software engineer',
 }

 //Challeneg 2
 //Access the published property from the object below using the bracket notation and dot notation
 type OnlineCourse={
    name:string,
    platform?:string,
    features: string[],
    "meta-data":{
        published: boolean
    }
 }
 let myCourse: OnlineCourse={
     name: 'Ts',
     platform: "udemy",
     features:["practical","Exercise","modern TS concepts"],
     "meta-data":{
      published:true
     }
 }
//First way
console.log( myCourse["meta-data"]["published"])
//second way
myCourse["meta-data"].published

 //Challeneg 3
 // Fix the error in the code below by modifing the TYPE without bringing any changes to product11 and product22
 
 type Product ={
   name:string,
   publishedStatus?:boolean
 }

 const product11:Product = {name:"TS Bootcamp"}  // solution is to add ? to the type Product={name:string,publishedStatus?:boolean}
 const product22:Product = {name:"TS Bootcamp",publishedStatus:true}

 //Challeneg 4
 //
 type Product232={
   holidaySales: ()=> string
 }

 const product33: Product232={
   holidaySales:()=> "Sale is On"
 }
 product33.holidaySales()