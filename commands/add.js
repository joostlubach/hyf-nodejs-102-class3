import fs from 'fs';
import {filename} from '../config';

export default function addItem(item) {
  const line = ` ${item}\n`;

  fs.appendFile(filename, line);
}