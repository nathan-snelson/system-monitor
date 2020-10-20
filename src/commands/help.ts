export const help = () => {
    console.log('Currently supported commands:');

    console.log('   SP');
    console.log('   showProcessor');
    console.log('   - display information about the processor.\n');

    console.log('   SH');
    console.log('   showHost');
    console.log('   - display the hostname of the machine\n');

    console.log('   AU');
    console.log('   addUser <params>');
    console.log('   - add a user to the database');
    console.log('   <params> are name, passcode and optional description\n');
}