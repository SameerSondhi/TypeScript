const carMakers: string[] = ['ford','toyota','chevy']

const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
// carMakers.push(100)

//Help with map or reduce
carMakers.map((car:string):string=>{
    return car
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']

