function add(a,b,c) {
    return a+b+c;
}
console.log(add(1,2,3) );
 
function multiply(x,y,z){
    const total = x * y*z;
    return total > 100;
}

console.log(multiply(1,2,3)); //undefined

function welcome(name){
    return `Welcome ${name}`
}
function execute(param) {
    const value = param();
    return value;
}


console.log(welcome('fouzia'));

execute(() => { } );// here we are passing arrow function as parameter to execute function
execute(welcome); // here we are passing welcome function as parameter to execute function

