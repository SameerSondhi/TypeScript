// function add(n1: number, n2:number): number{
//     return n1 + n2
// }

// // Use void instead of undefined
// function printResult(num: number): void{
//     console.log('Result: '+ num)
// }

// printResult(add(5,12))

// let combineValues;

// combineValues = add;

// console.log(combineValues())

function addNums(n1: number, n2:number): number{
    return n1 + n2
}

// Use void instead of undefined
function printResult(num: number): void{
    console.log('Result: '+ num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number)=> void){
    const result = n1 + n2;
    cb(result)
}

printResult(add(5,12))

let combineValues: (a: number, b:number)=> number;

combineValues = add;

console.log(combineValues(8,8))

addAndHandle(10, 20, (result)=> {
    console.log(result)
})