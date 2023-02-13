function greetuser(username ='UNKNOWN') {
    console.log(`welcome ${username}!`);
}

greetuser();
greetuser(`md fouzia sultana`);

const welcomeuser = (username = 'UNKNOWN user') =>{
    return `welcome to my page! ${username}`
}

const welcomemd = welcomeuser('md fouzia');
console.log(welcomemd);