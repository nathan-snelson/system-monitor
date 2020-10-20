import os = require('os');

const machine: string = os.hostname();

export const showHost = () => {
    console.log(`Hostname: ${machine}`);
}