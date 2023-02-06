 //Implicit convertion done automatically by javascript
 100 == '100'; // true (100 == "100"-> "100" ->true)
 // example implicit conversion to number
 "25" +15 //  '2515'
 

//  implicit conversion to number
23 * "2" //46
23 - true //22 // true is converted to 1 
true - null //1
false + undefined  // NaN // UNDEFINED INTO  NaN 

// conversion to boolean explicitly
Boolean("") // false
Boolean(2)  // true