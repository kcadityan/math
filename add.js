function add (a,b){
return a+b
}

const sum = add(4,7)
const sum2 = add (6,4)
const sum3 = add (sum,sum2)
const sum4 =add (add(4,7),add(6,4))
console.log (sum,sum2,sum3,sum4)

module.exports = { add } 