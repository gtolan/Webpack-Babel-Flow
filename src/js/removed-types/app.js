//      
// import './../src/styles/above-fold-inline.css';

let animal         = "dog";
let array = ["dog","cat","fish"];
var numb         = 0;


let catChoice = array.find(function(anim){ anim === "cat"});
console.log(catChoice)
console.log(animal);
console.log(numb);


class Bicycle {
                  
                  
                 
    constructor(wheels = 2, seats = 1, color = "red"){
        this.wheels = wheels;
        this.seats = seats;
        this.color = color;
    }

    paintBike(color){
        this.color = color;
    }

}

const bike = new Bicycle();
console.log(bike.color);
bike.paintBike("blue");
console.log(bike.color);
