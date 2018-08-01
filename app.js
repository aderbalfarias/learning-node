console.log("fs example");

var fs = require('fs');

fs.appendFile('Files/HelloFile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});