// to run : node convertToPNG [path/to/file/as/string]

var fs = require('fs');

console.log('to run : node convertToPNG [path/to/file/as/string]');

var file = process.argv[2];

console.log('file selected: ', file);

var imageAsBase64 = fs.readFileSync(file, 'base64');

var name = file.split(".")[0];
var fileName = name + '.txt';
// console.log('imageAsBase64: ', imageAsBase64);

fs.writeFile(fileName, imageAsBase64, 'utf8', function(err) {
    return;
});

console.log('base 64 content created');