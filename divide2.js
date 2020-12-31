function divide (a,b){
    if ( b === 0) {
        return "divide by zero" 
    }
    else {
        return a/b
    }

}

const quotient = divide(7,0)
const quotient2 = divide (6,4)
const quotient3 = divide(quotient,quotient2)
const quotient4 =divide (divide(3,2),divide(5,4))
console.log (quotient,quotient2,quotient3,quotient4)
