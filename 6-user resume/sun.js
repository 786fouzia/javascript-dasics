const readline = require ('readline-sync');

console.log("Sum of Two Numbers");
// convert value to Number
// 1.number(value)
//2.+value



const a = +readline.question('please enter the value of a: ');
const b = Number(readline.question('please enter the value of b: '));
console.log(`value of ${a} is ${typeof a}`);
console.log(`value of ${b} is ${typeof b}`);
const sum = a+b;

console.log(`SUM OF ${a} plus ${b} = ${sum}`);
