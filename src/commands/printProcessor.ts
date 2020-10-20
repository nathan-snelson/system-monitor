import os = require('os');

const cpu: object = os.cpus();
const machine: string = os.hostname();

export const showProcessor = () => {
    console.log(`CPU Details for ${machine}:`);
    console.log(cpu);
}