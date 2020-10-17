import os = require('os');

const machine: string = os.hostname();

export function showHost() {
    console.log(`Hostname: ${machine}`);
}