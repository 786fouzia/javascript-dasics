import readline from 'readline-sync';
import chalk from 'chalk';

const available_tickets = 10;
const userrequiredtickets = readline.question('how many tickets are required? ')

if(userrequiredtickets <= available_tickets) {
    console.log( chalk.bgGreen(`tickets are confirmed`))
} else{
    console.log( chalk.bgRed(`tickets are not available`))
}