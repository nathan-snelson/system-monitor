import { showProcessor } from './commands/printProcessor';
import { showHost } from './commands/showHost';
import { addUser } from './commands/addUser';
import { help } from './commands/help';

export const handleCommand = (command: string) => {
    let pieces = command.split(" ");
    
    switch(pieces[0]) {
        case 'Hello':
            console.log('World!');
            break;
        case 'SP':
        case 'showProcessor':
            showProcessor();
            break;
        case 'SH':
        case 'showHost':
            showHost();
            break;
        case 'AU':
        case 'addUser':
            addUser(pieces[1]);
            break;
        case 'H':
        case 'help':
            help();
            break;
    }
}