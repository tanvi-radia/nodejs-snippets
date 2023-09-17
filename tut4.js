// CRUD Operations using FS Module in Synchronous
// Create, Read, Update, Delete

// 1. Create a folder named it Tanvi
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
// 5. Rename the file to mybio.txt
// 6. Now delete both the file and folder.

const fs = require("fs");
// 1.
fs.mkdirSync("Tanvi");
// 2.
fs.writeFileSync("bio.txt", "My bio-data will be written here");
// 3. 
fs.appendFileSync("bio.txt", " Here's My bio-data");
// 4. 
// With
const buf_data = fs.readFileSync("bio.txt");
store_data = buf_data.toString();
console.log(store_data);
// Without (Doubt)
// const data = fs.readFileSync("mybio.txt", "utf-8");
// console.log(data);


// 5. 
fs.renameSync("mybio.txt", "bio.txt");
// 6. 
fs.unlinkSync("bio.txt");
fs.rmdirSync("Tanvi");