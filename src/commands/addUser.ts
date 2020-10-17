import fs = require('fs');

const db = require('../../db/users.json');

let newUser = {
    'user': '',
    'passcode': ''
}

export function addUser(details: string) {
    let params = details.split(',');

    let exists: boolean = false;
    let valid: boolean = false;

    for(let key of Object.keys(db)) {
        let user = db[key];

        if(params[0] === user.username) {
            exists = true;
            console.log('Username already exists');
            break;
        }

        if(!exists) {
            if(params[1].length < 3) {
                valid = false;
                console.log('Passcode is invalid (Too short)');
            }
        }        
    }

    if(exists && valid) {
        newUser.user = params[0];
        newUser.passcode = params[1];
    }
}