import readline = require('readline');
import { handleCommand } from './handleCommand';
import * as db from '../db/users.json';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your username: ', (answer: string) => {
    let isValid: boolean = false;
    let user: any;

    Object.entries(db).forEach(([key,value]) => {        
        if(answer === value.username) {            
            isValid = true;
            user = value;
        }
    });

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