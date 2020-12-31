function multiply (a,b){
return a*b
}

const product = multiply(7,4)
const product2 = multiply (6,4)
const product3 = multiply(product,product2)
const product4 =multiply (multiply (3,2),multiply(5,4))
console.log (product,product2,product3,product4)
