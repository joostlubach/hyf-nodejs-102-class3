import fs from 'fs';
import {filename} from '../config';

export default function markAsDone(number) {

  fs.readFile(filename, 'utf-8', (error, data) => {

    if (error == null) {

      const lines = data.split(/\n/);

      const line = lines[number - 1];
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