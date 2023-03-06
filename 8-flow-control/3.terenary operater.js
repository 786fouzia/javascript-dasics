/*
here is normal if else flow
if(condition)(

)else(

)
*/

import readline from 'readline-sync';

const ticketsavailable = 20;

let message = '';

const userinput = readline.question('no of required tickets? ');
/*
if (userinput <= ticketsavailable){
    message = 'tickets booked'
} else {
    message = 'tickets not booked'
}
*/
//condition ? trueblock : falseblock
message = userinput <= ticketsavailable ? 'tickets are booked' : 'tickets are not booked';

const condition = userinput <= ticketsavailable;
const truemessage = 'tickets are booked';
const falsemessage = 'tickets are not booked';

const anothermessage = condition ? truemessage : falsemessage;

console.log(`message value = ${message}`);
console.log(`another value = ${anothermessage}`)






console.log(message);






