// Path 
const path = require('path');

// Path separator
console.log(path.sep);

// Join paths
const filepath = path.join('\content','subfolder','test.txt');
console.log(filepath);

// Basename
const base = path.basename(filepath);
console.log(base);

// Resolve Absolute
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);