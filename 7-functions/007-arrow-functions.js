
const add = (a,b) => {
    return a+b;
}

const sumOf2plus8 =add();
console.log(`Sum of 2 plus 8 is ${sumOf2plus8}`);

const addwithDefault = (a=0, b=0) =>{
    return a+b;
}
const sumOf10Plus80 = addwithDefault();
console.log(`sum of 100 plus 80 is ${sumOf10Plus80}`);

