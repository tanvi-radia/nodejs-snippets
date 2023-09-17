// Path Modules: path module provides utilities for working with file and directory paths.
// working with files with validation as .txt, .docs, .pdf, 

// Methods:
const path = require("path");

// path.dirname(path): returns the path of any entered path of file or directory 
console.log(path.dirname("C:/Users/tanvi/Desktop/TANVI/Target/Mern/Mean/Node js/PathModules/tut1.js"));

// path.extname(path): displays ext. name of given path file path
console.log(path.extname("C:/Users/tanvi/Desktop/TANVI/Target/Mern/Mean/Node js/PathModules/tut1.js"));

// path.basename(): displays the name of file
console.log(path.basename("C:/Users/tanvi/Desktop/TANVI/Target/Mern/Mean/Node js/PathModules/tut1.js"));

// path.parse(): method returns an object whose properties represent significant elements of the path.
// dir: 
// root:
// base:
// name:
// ext:
console.log(path.parse("C:/Users/tanvi/Desktop/TANVI/Target/Mern/Mean/Node js/PathModules/tut1.js"));

// To access individual variables
const myPath = path.parse("C:/Users/tanvi/Desktop/TANVI/Target/Mern/Mean/Node js/PathModules/tut1.js");
console.log(myPath.ext);