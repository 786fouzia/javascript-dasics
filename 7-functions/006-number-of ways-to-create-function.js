//1.function declaration
//hera a and b are parameters
function add (a,b) {return a+b;}

//2.function expression
const subraction = function(a,b){
    return a-b;
}

//3.arrow function (es6 -> echmascript 6) (expression function)
const multiply = (a,b) => {
    return  a*b;
}

//'56' and '99' are values
//or also known as passing arguments to add function
const addition = add(56,99);
console.log(`addition value is ${addition}`);

//parameters (variables defined in function)
//arguments (are actual values pass to functions)

const minus = subraction(100,56);
console.log(`minus of 100 and 56 is ${minus}`);

const twomultiply = multiply(2,99);
console.log(`multiple of 2 and 99 is ${twomultiply}`);

//what happend if we donot pass arguments
const addOne = add()
console.log(`Calling add function without arguments = ${addOne}`)



