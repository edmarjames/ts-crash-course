let age: number = 30;
let firstName: string = 'Edmar';
let isFictional: boolean;

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
let something: null;
let anotherThing: undefined;

something = null;
anotherThing = undefined;

// Arrays
let names: string[] = ['Edmar', 'James', 'John'];
let ages: number[] = [20, 21, 45];

names.push('bowser');
ages.push(12);

// type inference with arrays
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('peaches')

let f = fruits[0]

let things = [1, true, 'hi'];

let t = things[0];

// Object literals
let user: {firstName: string, age: number, id: number} = {
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
function addTwoNumbers(a: number, b: number): number {
    return a + b;
};
console.log(addTwoNumbers(1, 2));

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b;
};
console.log(subtractTwoNumbers(10, 6));

function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, b) => a + b, 0);
    console.log(total);
};
addAllNumbers([1, 2, 3, 4, 5, 6]);

// return type inference
function formatGreeting(name: string, greeting: string) {
    return `${greeting} ${name}`;
};

const result = formatGreeting('Edmar', 'Hello');
console.log(result);