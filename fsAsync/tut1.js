// CRUD operations
// Asnyc: Taking multiple request at a time
// call back (): passing function as an argument

// 1. Necessary to use in async as it gives a message that new file is created. And if a file already exists then it does not display error msg. (as in sync) but writes the content in the file.
// 2. Callback (): gives an acknowledgement whether operation is successfully done or not.


// Creating a new file
const fs = require("fs");
fs.writeFile("read.txt","Hello !!! This is Tanvi",(err) => {
    console.log("files is created");
    console.log(err);
});

// Append a file
fs.appendFile("read.txt","\nNew file appended",(err) => {
    console.log("File appended successfully");
    console.log(err);
});

// read file
fs.readFile('read.txt',"UTF-8",(err,data)=>{
    console.log(data);
});
// Note: In case if we don't write "UTF-8" we get buffer data.