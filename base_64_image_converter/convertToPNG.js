// to run : node convertToPNG [path/to/file/as/string]

var fs = require('fs');

console.log('to run : node convertToPNG [path/to/file/as/string]');

var file = process.argv[2];

console.log('file selected: ', file);

var data = fs.readFileSync(file.toString(), 'utf8');

var cleaned = data.replace(/^data:image\/\w+;base64,/, "");
fs.writeFile("result.png", cleaned, 'base64', function(err) {
    return;
});

console.log('result.png created');