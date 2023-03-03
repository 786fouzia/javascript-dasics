function reduceCarSpeed() {
    car.currentSpeed = car.currentSpeed - 10;
}


const car = {
    // properties
    name: 'BMW',
    year:2022,
    isRunning: false,
    currentSpeed:0,

    //methods() 

    startEngine: function(){
        car.isRunning = true;
    },
    stopEngine:() => {
        car.isRunning = false;
    },
     increaseSpeed: () => {
        car.currentSpeed = car.currentSpeed + 10
     },
     decreaseSpeed: reduceCarSpeed,

     printdetails: () =>{
        console.log(`
        Car detail info
        -------------------------
         name: ${car.name}
         year: ${car.year}
         isRunning: ${car.isRunning}
         Speed: ${car.currentSpeed}
         `)
     }

}
console.log(`Car details`,car);
car.printdetails();

car.startEngine();
car.printdetails();

car.increaseSpeed();
car.increaseSpeed();
car.increaseSpeed();
car.printdetails();

car.decreaseSpeed();
car.decreaseSpeed();
car.printdetails();


