import fs = require('fs');
import * as db from '../../db/users.json';

export const addUser = (details: string) => {
    let params = details.split(',');

    let exists: boolean = false;
    let valid: boolean = false;
    let desc: boolean = false;

    Object.entries(db).forEach(([key,value]) => {    
        if(params[0] === value.username) {
            exists = true;
            console.log('Username already exists');
        }
    });
    
    if(!exists) {
        if(params[1].length < 3) {
            valid = false;
            console.log('Passcode is invalid (Too short)');
        }
        else
        {
            valid = true;
        }
    }

    if(params[2]) {
        desc = true;
    }

    if(valid) {
        let newUser: User = {
            name: params[0],
            passcode: params[1],
            description: (desc) ? params[2] : ""
        }
    }
}