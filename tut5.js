// JSON in node.js: 
// Stands for JavaScript Object Notation.
// Lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page


// Converting an Object to JSON format: 
const bioData = {
    Name: "Tanvi",
    Surname: "Radia",
    Age: 21,
    Branch: "cse",
};

// Imp !!
// // Obj to JSON: JSON.stringyfy()
// const json_data = JSON.stringify(bioData);
// console.log(json_data);

// // JSON to obj: JSON.parse()
// const obj_data = JSON.parse(json_data);
// console.log(obj_data);



// Reading JSON data on terminal or server

const fs = require("fs")
// Obj to JSON
const json_data = JSON.stringify(bioData);

// importing json data to a file
fs.writeFile("data.json",json_data,(err)=>{
    console.log("write done");
    console.log(err);
});

// reading json data from file
fs.readFile("userApi.json","utf-8",(err,data)=>{
    // console.log(data)
    console.log("read done");
    console.log(err);
});