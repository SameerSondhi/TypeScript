"use strict";
const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age) {
        this.age = age;
    }
};
const { age } = profile;
const { coords: { lat, lng } } = profile;
//# sourceMappingURL=objects.js.map