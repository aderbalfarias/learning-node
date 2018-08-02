console.log("fs example");

var fs = require('fs');
const notes = require('./notes.js');

console.log('Result:', notes.add(9, -2));
console.log(notes.addNote);

fs.appendFile('Files/HelloFile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

