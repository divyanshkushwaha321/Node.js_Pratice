const { log } = require('console');
const fs = require('fs');
const os = require('os');

fs.writeFileSync("Divyansh.txt", "My name is Divyansh Kushwaha")

// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());


// These are global objects
console.log(process.cwd());  // shows current path
console.log(process.pid);  // show process id

