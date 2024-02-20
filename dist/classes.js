"use strict";
class Vehicle {
    // Can use access modifiers to fields as well
    constructor(color) {
        this.color = color;
    }
    drive() {
        console.log('chugga chugga');
    }
    honk() {
        console.log('beep beep');
    }
}
// Inheritance
class SportsCar extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('vroom');
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const car1 = new SportsCar(4, 'red');
console.log(car1.color);
car1.startDrivingProcess();
// Public can be accessed anywhere
// Private can only be accessed within the same class but not outside of those classes
// Protected can be accessed within the same class or by other methods in child classes, but not outside of those classes
//# sourceMappingURL=classes.js.map