function mathsOperations(a, b ){ //here a,b are two parameters
    console.log(`value of a = ${a}`);
    console.log(`value of b = ${b}`)
    const addition = a+b;
    const subraction =a-b;
    const multiplication =a*b;
    const division =a/b;
    const modulo =a%b;

    console.log(addition);
    console.log(subraction);
    console.log(multiplication);
    console.log(division);
    console.log(modulo);
}
//invoking /calling declared function
console.log("Calling mathsOperations function with no arguments")
mathsOperations();//we are not pass any arguments

console.log("Calling mathsOperations function with one argument");
mathsOperations(78);

console.log("Calling mathsOperations with two arguments")
mathsOperations(100,56);
