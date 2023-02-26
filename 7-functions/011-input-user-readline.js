import readline from 'readline-sync';

const a = + readline.question(`please enter the purchased amount =`);
let amount = a;

const onlineShopping = function () {
    const billWidgst = () =>{
        return amount + 20;
    } 
    
    function discount (){
        return 5
    }
    const total = billWidgst() - discont()
     return total
}

const bill = onlineShopping(amount);
     const discount = 5 ;
     const gst = 10;

     console.log(`bill details{
        item : ${amount},
        gst = ${gst},
        discount = ${dis_count},
        the final bill = ${bill} /-
     }`)
