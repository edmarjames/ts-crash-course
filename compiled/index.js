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
