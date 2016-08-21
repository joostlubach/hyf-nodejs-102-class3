var fs = require('fs');

var args = process.argv.slice(2);

if (args.length === 0) {
  showHelp();
} else {
  switch (args[0]) {
    case 'help':
      showHelp();
      break;

    case 'list':
      showList();
      break;

    case 'add':
      var item = args.slice(1).join(' ');
      addItem(item);
      break;

    case 'done':
      var number = parseInt(args[1], 10);
      markAsDone(number);
      break;

    default:
      console.error('Unknown command: ' + args[0] + '. Type "node . help" for info.');
      break;
  }
}

function showHelp() {
  fs.readFile(__dirname + '/help.txt', 'utf-8', function (error, data) {
    if (error == null) {
      console.log(data);
    } else {
      console.error('Error reading help');
    }
  });
}

function showList() {
  var lines, line, done;

  fs.readFile(__dirname + '/todo.txt', 'utf-8', function (error, data) {

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

function addItem(item) {
  var line = ' ' + item + '\n';

  fs.appendFile(__dirname + '/todo.txt', line);
}

function markAsDone(number) {

  fs.readFile(__dirname + '/todo.txt', 'utf-8', function (error, data) {

    if (error == null) {

      var lines = data.split(/\n/);

      var line = lines[number - 1];
      lines[number - 1] = '*' + line.slice(1);

      data = lines.join('\n');
      fs.writeFile(__dirname + '/todo.txt', data);

    } else if (error.code == 'ENOENT') {
      console.error('No to-do items yet');
    } else {
      console.error('Error reading to do list');
    }

  });

}


// var path = __dirname + '/test.txt';

// // fs.writeFile(path, 'This is a test');

// fs.readFile(path, 'utf-8', function (error, data) {

//   if (error == null) {
//     console.log(data);
//   } else {
//     console.error('Error reading file', error);
//   }

// });

// addAsync(5, 9, function (result) {
//   console.log(result);
// });
// console.log('after addAsync');