var fs = require('fs');
var filename = __dirname + '/../todo.txt';

function showList() {
  var lines, line, done;

  fs.readFile(filename, 'utf-8', function (error, data) {

    if (error == null) {
      data = data.slice(0, data.length - 1);

      lines = data.split(/\n/);

      console.log('To-do items:\n');

      for (var i = 0; i < lines.length; i++) {
        line = lines[i];
        done = line.charAt(0) != ' ';

        console.log('  ' + (i + 1) + ': ' + line.slice(1) + ' (done: ' + done + ')');
      }

    } else if (error.code == 'ENOENT') {
      console.log('The to do list is empty');
    } else {
      console.error('Error reading to do list');
    }

  });
}

module.exports = showList;