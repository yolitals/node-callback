var fs = require('fs')
//Read file function
function callback  (err, data) {
    if (err) return console.error(err);
    var textPlain = data.toString()
    console.log(textPlain)
};
function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest",callback )
  
}
readFile()