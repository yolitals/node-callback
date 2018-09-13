var fs = require('fs');

function countWords(sentence) {
    var wordCount = (sentence.split(" ").length);
    var words = wordCount.toString();
    var wordsAtLine = words + ', ';
    //console.log(wordCount)
    fs.appendFile('fileCreated.txt', wordsAtLine, function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
    //return index;
  };
function callback  (err, data) {
    if (err) return console.error(err);
    var textPlain = data.toString()
    console.log(textPlain);
    var arregloTextPlain = textPlain.split('\n')
    arregloTextPlain.forEach(countWords);
    console.log(arregloTextPlain)

    
};

function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest",callback )
};

readFile()