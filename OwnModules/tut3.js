// Creating and exporting multiple modules
const add = (a,b) => {
    console.log(a+b);
}

const sub = (a,b) => {
    console.log(a-b);
}

const mul = (a,b) => {
    console.log(a*b);
}

const name = () => {
    console.log("Tanvi");
}
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

module.exports = { add, sub, mul, name };