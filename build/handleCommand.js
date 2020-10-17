"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var printProcessor_1 = require("./commands/printProcessor");
var showHost_1 = require("./commands/showHost");
var addUser_1 = require("./commands/addUser");
function handleCommand(command) {
    var pieces = command.split(" ");
    switch (pieces[0]) {
        case 'Hello':
            console.log('World!');
            break;
        case 'SP':
        case 'showProcessor':
            printProcessor_1.showProcessor();
            break;
        case 'SH':
        case 'showHost':
            showHost_1.showHost();
            break;
        case 'AU':
        case 'addUser':
            addUser_1.addUser(pieces[1]);
            break;
    }
}
exports.handleCommand = handleCommand;
