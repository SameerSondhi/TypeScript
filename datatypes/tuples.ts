const drink = {
    color:'brown',
    carbonated:true,
    sugar:40
}

// Type Alias
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]

const sprite: Drink = ['clear', true, 40]

const tea: Drink = ['brown', false, 0]


// A tuple
const carSpecs: [number, number] = [400, 3354]

// Compared to an object

const carStats ={
    horsepower: 400,
    weight: 3354
}