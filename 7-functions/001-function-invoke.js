console.log("hello function...");
console.log( 56 * 99 );
console.log(true === false);

var a =10; // number
let b ="10" // string
const c = true; // boolean

console.log( a+ b+ c);


const user ={
firstName: "Fouzia",
lastName : "Sultana",
company : "trangle",
city: "guntur"
}

const friends = ['Uzma','Sheema'];


function createUserDetails(userfirstName,lastName,companyName,cityName) {
const user = {
    firstName:userfirstName,
    lastName :lastName,
    company:companyName,
    city:cityName
}

return user;
}
const salary =10000;
const hike = salary +5000; //15000


const newUser = createUserDetails('fouzia','sultana','sap','hyderabad'); // it will return user object(value)
console.log(newUser);

















