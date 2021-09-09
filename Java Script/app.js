
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});


class Vehicle {
    constructor(color, model){
        this.color = color,
        this.model = model
    }

    go(){
        console.log("I go");
    }
}

class Car extends Vehicle {
    constructor(color, model, speed){
        super(color, model)
        this.speed = speed;
    }

    speed(){
        console.log("I go Fastly");
    }
}

const veh = new Vehicle("red" , "mazda")

const car = new Car("black", "pride", "190")

console.log(veh.color);
console.log(car.color);