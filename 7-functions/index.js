//const chalk = require("chalk");
import chalk from 'chalk';


console.log("hi");
console.log("hey!");

console.log(chalk.blue("hello"));

console.log( chalk.bgRed("javascript functions"));


    

function myownfunction() {
    console.log("one");
    console.log("two");
    console.log("three");
}

myownfunction();

var numberOne = 50;
var numberTwo =99;
var output = numberOne + numberTwo;
console.log(output);

function addition(inputOne,inputTwo) {
    console.log("calling addition function....");
    console.log(chalk.bgBlue(inputOne));
    console.log(chalk.bgRed(inputTwo));

    const output = inputOne + inputTwo;
    console.log(chalk.bgGreen(output))
}
addition(12,97);
addition(50,8765);
addition();
