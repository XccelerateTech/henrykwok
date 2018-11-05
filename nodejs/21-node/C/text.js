var transLetter = require('./alphabet');
var randomNo =  require('./random');

var newText = [''];

function allText(b) {
    for (i = 0; i < b ; i++) {
        newText = newText + transLetter(randomNo());
    } 
}

allText(7);

module.exports = newText;