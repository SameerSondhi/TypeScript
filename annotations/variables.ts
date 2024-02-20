// TYPE ANNOTATION ---> When we tell TS the type of our variable
let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// Built in objects
let now : Date = new Date();

// Arrays
let colors: string[] = ['red','green','blue']

let numbers: number[] = [1,2,3,4]

let truths : boolean[]= [true, true, false]

//Classes
class Car{}

let automobile: Car = new Car();

// Object Literal
let point: {x: number; y: number} = {
    x:10,
    y:20
}

// Function
const logNumber: (i:number) => void // ANNOTATION
                = (i:number) => { //IMPLEMENTATION
    console.log(i)
}

// When to use annotations
// When a function returns the 'any' type
const json = '{"x":10, "y":20}'
const coordinates: {x: number; y:number} = JSON.parse(json)
console.log(coordinates)

// When we declare a variable on one line, and then initialize it later
let words = ['red', 'green', 'blue']
let foundWord:boolean;

for(let i=0; i<words.length; i++){
    if(words[i]==='green'){
        foundWord = true;
    }
}

//When a variable's type cannot be inferred correctly
let nums = [-10,-1,12]
let numAboveZero: boolean | number = false;

for(let i =0; i<nums.length; i++){
    if(nums[i]>0){
        numAboveZero = numbers[i]
    }
}
