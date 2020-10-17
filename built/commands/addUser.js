"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../../db/users.json');
var newUser = {
    'user': '',
    'passcode': ''
};
function addUser(details) {
    var params = details.split(',');
    var exists = false;
    var valid = false;
    for (var _i = 0, _a = Object.keys(db); _i < _a.length; _i++) {
        var key = _a[_i];
        var user = db[key];
        if (params[0] === user.username) {
            exists = true;
            console.log('Username already exists');
            break;
        }
        if (!exists) {
            if (params[1].length < 3) {
                valid = false;
                console.log('Passcode is invalid (Too short)');
            }
        }
    }
    if (exists && valid) {
        newUser.user = params[0];
        newUser.passcode = params[1];
    }
}
exports.addUser = addUser;
