//Challenge 1
//create an enum of product names and display it on the connsole

enum ProductNames{
    product1 = ' tube',
    product2 = 'petriDish',
    product3 = 'conical flask',
    product4 = 'autoclave'
}
console.log(ProductNames)

//Challenge 2
//create an enum of product Id and display it on the console

enum ProductIds{
  tube =2,
  petriDish =34,
  conicalFlask,
  autoclave=98,  
}
console.log(ProductIds)

//Challenge 3
//create a favourite product enum and dispaly to console

enum favouriteProduct{
   Name = ProductNames.product1,
   Id = ProductIds.tube
}
