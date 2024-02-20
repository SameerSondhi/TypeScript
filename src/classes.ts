class Vehicle {
    // Can use access modifiers to fields as well
    constructor(public color: string){
       
    }

    public drive():void{
        console.log('chugga chugga')
    }

    protected honk(): void{
        console.log('beep beep')
    }
}

// Inheritance
class SportsCar extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }
drive(): void{
    console.log('vroom')
}
startDrivingProcess(): void{
    this.drive();
    this.honk()

}
}

const car1 = new SportsCar(4, 'red');
console.log(car1.color)
car1.startDrivingProcess();

// Public can be accessed anywhere
// Private can only be accessed within the same class but not outside of those classes
// Protected can be accessed within the same class or by other methods in child classes, but not outside of those classes