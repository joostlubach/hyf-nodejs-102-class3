import fs from 'fs';
import {filename} from '../config';

export default function showList() {
  fs.readFile(filename, 'utf-8', (error, data) => {

    if (error == null) {
      data = data.slice(0, data.length - 1);

      const lines = data.split(/\n/);

      console.log('To-do items:\n');

      let todoNumber = 1;
      for (let line of lines) {
        const done = line.charAt(0) != ' ';
        console.log(`  ${todoNumber}: ${line.slice(1)} (done: ${done})`);
        todoNumber++;
      }

    } else if (error.code == 'ENOENT') {
      console.log('The to do list is empty');
    } else {
      console.error('Error reading to do list');
    }

  });
}