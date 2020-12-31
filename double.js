const x = require ( './add.js')
function double (a){
    return a*2
}

function d2 (a){
    return x.add(a,a)
}
console.log(d2(3))
