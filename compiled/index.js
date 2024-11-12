"use strict";
let age = 30;
let firstName = 'Edmar';
let isFictional;
// console.log(age);
age = 21;
firstName = 'James';
isFictional = true;
let planet = 'Earth';
let moons = 1;
let isLarge = false;
planet = 'Mars';
moons = 12;
isLarge = true;
// null & undefined
let something;
let anotherThing;
something = null;
anotherThing = undefined;
// Arrays
let names = ['Edmar', 'James', 'John'];
let ages = [20, 21, 45];
names.push('bowser');
ages.push(12);
// type inference with arrays
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('peaches');
let f = fruits[0];
let things = [1, true, 'hi'];
let t = things[0];
// Object literals
let user = {
    firstName: 'Edmar',
    age: 26,
    id: 2
};
user.firstName = 'James';
user.age = 24;
// type inference with object literals
let person = {
    name: 'Tanggol',
    score: 100
};
person.name = 'Cardo';
person.score = 60;
const score = person.score;
// functions
function addTwoNumbers(a, b) {
    return a + b;
}
;
console.log(addTwoNumbers(1, 2));
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
console.log(subtractTwoNumbers(10, 6));
function addAllNumbers(items) {
    const total = items.reduce((a, b) => a + b, 0);
    console.log(total);
}
;
addAllNumbers([1, 2, 3, 4, 5, 6]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting} ${name}`;
}
;
const result = formatGreeting('Edmar', 'Hello');
console.log(result);
// any type
let newAge;
newAge = 10;
newAge = '10';
let title;
title = true;
title = '10';
// any type in arrays
let anything = ['hi', 1, true, undefined];
anything.push({ id: 1 });
console.log(anything);
// any type in functions
function addTogether(value) {
    return value + value;
}
;
const resultOne = addTogether('edmar');
const resultTwo = addTogether(5);
console.log(resultOne);
console.log(resultTwo);
// tuples
let newPerson = ['John', 21, false];
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
// tuples in function
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
;
const [lat, long] = useCoords();
// named tuples
let tupleUser;
tupleUser = ['gem', 90];
console.log(tupleUser[0]);
