var fs = require('fs');
var filename = __dirname + '/../todo.txt';

function markAsDone(number) {

  fs.readFile(filename, 'utf-8', function (error, data) {

    if (error == null) {

      var lines = data.split(/\n/);

      var line = lines[number - 1];
      lines[number - 1] = '*' + line.slice(1);

      data = lines.join('\n');
      fs.writeFile(filename, data);

    } else if (error.code == 'ENOENT') {
      console.error('No to-do items yet');
    } else {
      console.error('Error reading to do list');
    }

  });

}

module.exports = markAsDone;