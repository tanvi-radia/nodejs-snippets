// Node.js core modules: Same as javascript libraries.
// A set of functions you want to include in your application.
// Node.js has a set of built-in modules which you can use without any further installation.
// Note: After writing every fs command or making any you need to re-run file again and again using node tut3.js as refresh option does'nt exist.

// module: fs (file system)
// 1. Creating a new file
const fs = require("fs");
fs.writeFileSync("read.txt", "Hello, this is Tanvi Radia");

// 2. Making changes in the text written in the same file
fs.writeFileSync("read.txt","Hello, Tithi");

// 3. Append extra data
fs.appendFileSync("read.txt","\nHow are you ?");

// 4. Read data of file
const buf_data = fs.readFileSync("read.txt");    // returns data in binary format
org_data = buf_data.toString();                 // converts binary to string
console.log(org_data);

// 5. Rename a file
fs.renameSync("read.txt","readwrite.txt");



// Note: 4. Node.js includes an additional data type called buffer
// (not available in browser's Javascript)
// Buffer: mainly used to store binary data, reading from a file 