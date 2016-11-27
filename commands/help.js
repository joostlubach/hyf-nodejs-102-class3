import fs from 'fs';

export default function showHelp() {
  fs.readFile(`${__dirname}/../help.txt`, 'utf-8', (error, data) => {
    if (error == null) {
      console.log(data);
    } else {
      console.error('Error reading help');
    }
  });
}