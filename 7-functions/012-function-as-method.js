// creating simple javascript object

const user = {
    firstname: 'md',
    lastname:'fouzia',
    work:'ui dev',
    city:'guntur',
    wfh:true,
    skills:['html','css'],
    company:{
        name:'sap',
        location:'banglore'
    },
    details:function() {
        console.log(`user details:md fouzia`);
    }

}

console.log(user);
console.log(`data type of variable user is ${typeof user}`);




//how to access object properties(key)
//1.dot notation '.'
//2.brackets notation '[]'

//dot notation '.' object.propertyname

console.log(`user city info :${user.city}`);

//2 way brackets notation '[]' -> object['propertyname']

console.log(`user city info via brackets notation user['city'] =${user['city']}`);

//accessing nested object properties -> '.' or '[]'
const companyLocation = user.company.location;
console.log(`company location by dot notation = ${companyLocation}`);

const companyLog = user['company']['location'];
console.log(`company location by bracket notation = ${companyLog}`);

//this is array form 
const skills = user.skills;
console.log(skills);

user.details()