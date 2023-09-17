// without destructuring
// const oper = require("./tut3");
// console.log(oper.add(1,2));
// console.log(oper.sub(3,2));
// console.log(oper.mul(2,1));

// with object destructuring
const { add, sub, mul, name } = require("./tut3");
console.log(add(1,2));
console.log(sub(3,2));
console.log(mul(2,1));
console.log(name());