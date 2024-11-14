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
;
const authorOne = { name: 'maria', avatar: '/img/maria.png' };
;
const newPost = {
    title: 'My first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    createdAt: new Date(),
    author: authorOne
};
// interfaces as function argument types
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
;
createPost(newPost);
// interfaces with arrays
let posts = [];
posts.push(newPost);
console.log(posts);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
;
const firstColor = getRandomColor();
const secondColor = getRandomColor();
console.log(firstColor, secondColor);
const userOne = {
    name: 'Mario',
    score: 75,
};
console.log(userOne);
// type aliases with function
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
;
formatUser(userOne);
formatUser({ name: 'Andres', score: 99 });
// Union types
let someNum;
someNum = 1;
someNum = '1';
let email;
email = null;
email = 'test@gmail.com';
let newId;
newId = '21jojoj1212@#!4';
newId = 12;
// Union type pitfall
function swapIdType(id) {
    // Can only use props and methods common to
    // both number and string types
    // parseInt(id) ---> not allowed
    return id;
}
;
