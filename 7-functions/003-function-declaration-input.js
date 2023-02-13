//const readline = require ('readline-sync');
import readline from 'readline-sync';
const firstvalue = +readline.question(`Please enter the value of a = `);
const secondvalue = Number(readline.question(`Please enter the value of b = `));

function maths(valueOne,valueTwo) {
 console.log(`value of a is ${valueOne}`);
 console.log(`value of b is ${valueTwo}`);

 const addition = valueOne + valueTwo
    const subraction =valueOne - valueTwo
    const multiplication =valueOne * valueTwo
    const division =valueOne / valueTwo
    const modulo =valueOne % valueTwo
console.log(`Adittion of ${valueOne} and ${valueTwo} is ${addition}`);
console.log(`subraction of ${valueOne} and ${valueTwo} is ${subraction}`);
console.log(`multiplication of${valueOne} and ${valueTwo} is ${multiplication}`);
console.log(`division of${valueOne} and ${valueTwo} is ${division}`);
console.log(`modulo of${valueOne} and ${valueTwo} is ${modulo}` );
}
maths(firstvalue,secondvalue);