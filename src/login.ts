import readline = require('readline');
import { handleCommand } from './handleCommand';

const db = require('../db/users.json');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your username: ', (answer: string) => {
    let isValid: boolean = false;
    let user;

    for(let key of Object.keys(db)) {
        user = db[key];
        
        if(answer === user.username) {
            isValid = true;
            break;
        }
    }

    if(isValid) {
        rl.question('Please enter your passcode: ', (passcode: string) => {
            if(passcode === user.passcode) {
                rl.prompt();

                rl.on('line', (content: string) => {
                    handleCommand(content)
                    rl.prompt();
                }).on('close', () => {
                    console.log('Bye!');
                    process.exit(0);
                })
            }
            else {
                console.log('Incorrect passcode!');
                rl.close();
            }
        })
    }
    else {
        console.log('Incorrect username!')
        process.exit(0);
    }
});