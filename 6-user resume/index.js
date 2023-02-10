const readline = require ('readline-sync');

    
    //"name":"Md Fouzia Sultana",
    /*
    "Label":"Programmer",
    "phone":"+91 9346025850",
    "email":"fouziasultana470@gmail.com",
    "summary":"A summary of Md Fouzia Sultana" ,
       */
      console.log("*****Resume maker*****"); 
     
const name = readline.question('name:  ');
const label =readline.question('designation:');
const phone = readline.question('phone:');
const email = readline.question('email:');
const summary = readline.question('summary:');
const resume ={
    basics:{
        name: name,
        label: label,
        phone:phone,
        email: email,
        summary:summary,

   }
};

console.log("User Details")
console.log(resume)
