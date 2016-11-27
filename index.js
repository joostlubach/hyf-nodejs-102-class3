import * as commands from './commands';

const args = process.argv.slice(2);

if (args.length === 0) {
  commands.help();
} else {
  switch (args[0]) {
    case 'help':
      commands.help();
      break;

    case 'list':
      commands.list();
      break;

    case 'add':
      const item = args.slice(1).join(' ');
      commands.add(item);
      break;

    case 'done':
      const number = parseInt(args[1], 10);
      commands.done(number);
      break;

    default:
      console.error(`Unknown command: ${args[0]}. Type "node . help" for info.`);
      break;
  }
}