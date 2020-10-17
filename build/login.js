"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var handleCommand_1 = require("./handleCommand");
var db = require('../db/users.json');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter your username: ', function (answer) {
    var isValid = false;
    var user;
    for (var _i = 0, _a = Object.keys(db); _i < _a.length; _i++) {
        var key = _a[_i];
        user = db[key];
        if (answer === user.username) {
            isValid = true;
            break;
        }
    }
    if (isValid) {
        rl.question('Please enter your passcode: ', function (passcode) {
            if (passcode === user.passcode) {
                rl.prompt();
                rl.on('line', function (content) {
                    handleCommand_1.handleCommand(content);
                    rl.prompt();
                }).on('close', function () {
                    console.log('Bye!');
                    process.exit(0);
                });
            }
            else {
                console.log('Incorrect passcode!');
                rl.close();
            }
        });
    }
    else {
        console.log('Incorrect username!');
        process.exit(0);
    }
});
