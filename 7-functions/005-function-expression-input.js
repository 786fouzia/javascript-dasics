//expression function is a value or expression by assigning an anonymousfunction to a variable or parameter,
 
import readline from 'readline-sync';
import chalk from "chalk"

const calculateBill = function(mealAmount,tip,taxRate) {
    const total = mealAmount + taxRate + tip;
    return total;

}

const customermealAmount = readline.question("please enter meal amount: ");
const taxRate = readline.question("what is the Tax Rate? ");
const tipvalue = readline.question("Any tip amount?  ");

const totalBill = calculateBill(+customermealAmount,+taxRate,+tipvalue);

console.log(chalk.bgRed("Total Bill Amount: ")+ chalk.bgGreen(totalBill));