const fs = require('fs');

// Return a buffer object containing complete contents of the file.
// You can also avoid using toString() by passing 'utf8' as the second argument.
// let myBuffer = fs.readFileSync(process.argv[2], 'utf8');
let myBuffer = fs.readFileSync(process.argv[2]);

// Buffer objects can be converted to strings by calling the toString() method on them.
// Get delimiter characters.
let numNewLine = myBuffer.toString().split('\n').length - 1;

console.log(numNewLine);