function showHelp() {
  fs.readFile(__dirname + '/../help.txt', 'utf-8', function (error, data) {
    if (error == null) {
      console.log(data);
    } else {
      console.error('Error reading help');
    }
  });
}

module.exports = showHelp;