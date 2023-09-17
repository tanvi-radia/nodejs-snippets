// Sync vs Async 

// Sync: Firstly, data of file will be printed then only, other requested data will be printed
// const fs = require("fs");
// fs.writeFileSync("read.txt","Hello !!! This is Tanvi");
// const data = fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("New text in Sync");

// // Async: one which takes shorter time will be printed first from data requested
// // Here, data of read file takes more time to read the data than normal console.log() 
// const data = fs.readFile("Read.txt","utf-8",(err,data) => {
//     console.log(data);
//     console.log(err);
// });
// console.log("New text in async");

// Eg
// Async
// const fs = require("fs")
// const data = fs.readFile("myfile.txt","utf-8",(err)=>{
//     console.log("Work done");
//     console.log(err);
// });
// console.log("Async finished")