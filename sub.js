const add_module = require('./add.js');

function sub (a,b){
    return add_module.add (a,b*-1)
}
console.log(sub (5,6))