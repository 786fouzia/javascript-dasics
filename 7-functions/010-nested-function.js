// function shopping(amount) {

//}

// function expression define
const shopping = function (amount){
  // arrow function
  const calculatetax = () => {
    return amount = 30;
  }
//function declaration
function getdiscountamount() {
    return  40
}
const total = calculatetax() - getdiscountamount();
return total;
}
 
// invoking the function 
const billamount = shopping(100); // ?
console.log(`bill amount = ${billamount}`)

// points to note
//1. we cant access value from the function
//2. we can access variable from the function