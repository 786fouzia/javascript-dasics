// global scope
const fullname = 'md fouzia sultana';
//define a function
function printDetails() {
    // function scope
    const city  = 'guntur';


console.log({
  name : fullname,
  city :city
})
}

//invoking function
printDetails();
console.log(`fullname = ${fullname}`);
console.log(`city = ${city}`);