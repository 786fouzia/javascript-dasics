// ticket bookings


//import readline from 'readline-sync'
const readline = require ('readline-sync')

const current_available_tickets = 10;

console.log(`Current available tickets are = ${current_available_tickets}`)

const numberticketsrequired = 15;

const canbuytickets = numberticketsrequired <= current_available_tickets;

//1.canbuytickets ->true ->You're tickets are confirmed
//2.canbuytickets ->false ->tickets are not available

let message = '';

if(canbuytickets){
    message = "You're tickets are confirmed"
}else{
    message = `tickets are not available`
}


console.log(message)

