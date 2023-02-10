const readline = require ('readline-sync')

//ask user first and last name from the input question
const firstname= readline.question("what is your first name: ")
const lastname = readline.question ("what is your last name: ")

console.log(`hello ${firstname+lastname}`)