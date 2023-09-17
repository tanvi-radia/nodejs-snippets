// OS Module: provides operating system-related utility methods and properties.
const os = require("os");

// shows which version is used
console.log(os.arch());

// Check for how much memory is free in the device
const free_mem = os.freemem();
console.log(`${free_mem / 1024 / 1024 / 1024}`);

// Check for total memory
const tot_mem = os.totalmem();
console.log(`${tot_mem / 1024 / 1024 / 1024}`);
console.log(os.hostname());


// Conversion
// B -> KB
// mem/1024

// B -> MB
// mem/1024/1024

// B -> GB
// mem/1024/1024/1024