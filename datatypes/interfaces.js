"use strict";
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};
const beverage = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
//# sourceMappingURL=interfaces.js.map