var fs = require('fs');
var filename = __dirname + '/../todo.txt';

function addItem(item) {
  var line = ' ' + item + '\n';

  fs.appendFile(filename, line);
}

module.exports = addItem;