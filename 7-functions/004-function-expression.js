// expression produce a value 
// statement doesnot produce a value

//expression
56 + 90 // here 50 and 90 are two valueswhich will be converted into single value

89 *100 > 79 + 99;

//  so expression will generate a value which will be assigned to variable
let output = 89 * 100 > 79 + 99;//here this line treated as a statement

console.log("hey! how are you");

// fuction declaration
function dowelcome(username){
    console.log(`welcome ${username}`);

}

dowelcome('sheema');

let add = function(xvalue,yvalue){
    return xvalue + yvalue;
}

let additionofnumbers = add(78,67);
console.log(additionofnumbers);