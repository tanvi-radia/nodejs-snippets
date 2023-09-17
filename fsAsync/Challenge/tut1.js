// Challenge
// 1. Create a folder named it Tanvi
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
// 5. Rename the file to mybio.txt
// 6. Now delete both the file and folder.

// const console = require("console");
const fs = require("fs");

// 1.
// fs.mkdir("Tanvi",(err) => {
//     console.log("New folder created");
//     console.log(err);
// });

// 2. 
// fs.writeFile("bio.txt","bio.txt file is created",(err)=>{
//     console.log("New file created");
//     console.log(err);
// });

// 3. 
// fs.appendFile("bio.txt","\nYour bio data will be written here...",(err)=>{
//     console.log("New data appended");
//     console.log(err);
// });

// 4. 
// const data = fs.readFile("bio.txt","utf-8",(err,data)=>{
//     console.log(data);
//     console.log(err);
// });

// 5.
// fs.rename("bio.txt","mybio.txt",(err)=>{
//     console.log("file renamed successfully");
//     console.log(err);
// });

// 6.
// fs.unlink("mybio.txt",(err)=>{
//     console.log("file deleted");
//     console.log(err);
// });

// 7.
// fs.rmdir("Tanvi",(err)=>{
//     console.log("directory removed");
//     console.log(err);
// });
