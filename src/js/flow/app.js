// @flow
// import './../src/styles/above-fold-inline.css';

let animal: string = "dog";
let array = ["dog","cat","fish"];
var numb: number = 0;


let catChoice = array.find(function(anim){ anim === "cat"});
console.log(catChoice)
console.log(animal);
console.log(numb);


class Bicycle {
    color: string;
    wheels:number;
    seats:number;
    constructor(wheels = 2, seats = 1, color = "red"){
        this.wheels = wheels;
        this.seats = seats;
        this.color = color;
    }

    paintBike(color){
        this.color = color;
    }

}

class Electric extends Bicycle {
    addMotor: boolean;
    constructor(){
        super(2, 1, "black");
    }

    electrify(addMotor: boolean){
        this.addMotor = addMotor;
        console.log(this.addMotor);
        console.log(this.color);

    }


}

const bike = new Bicycle();
console.log(bike.color);
bike.paintBike("blue");
console.log(bike.color);

const ev = new  Electric();
console.log(ev.color);
ev.electrify(true);
