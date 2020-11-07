import readline = require('readline');
import { handleCommand } from './handleCommand';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Please enter a command');
rl.prompt();

rl.on('line', (content: string) => {
    handleCommand(content)
    rl.prompt();
}).on('close', () => {
    console.log('Bye!');
    process.exit(0);
});