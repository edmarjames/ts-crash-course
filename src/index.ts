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

// any type
let newAge: any;
newAge = 10;
newAge = '10';

let title;
title = true;
title = '10';

// any type in arrays
let anything: any[] = ['hi', 1, true, undefined];
anything.push({id : 1});
console.log(anything);

// any type in functions
function addTogether(value: any): any {
    return value + value;
};

const resultOne = addTogether('edmar');
const resultTwo = addTogether(5);
console.log(resultOne);
console.log(resultTwo);

// tuples
let newPerson: [string, number, boolean] = ['John', 21, false];

let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];

let xy: [number, number];
xy = [94.7, 20.1];

// tuples in function
function useCoords(): [number, number] {
    const lat = 100;
    const long = 50;

    return [lat, long];
};
const [lat, long] = useCoords();

// named tuples
let tupleUser: [name: string, age: number];
tupleUser = ['gem', 90];
console.log(tupleUser[0]);

// interfaces
interface Author {
    name: string,
    avatar: string
};

const authorOne: Author = {name: 'maria', avatar: '/img/maria.png'};

interface Post {
    title: string,
    body: string,
    tags: string[],
    createdAt: Date,
    author: Author
};

const newPost: Post = {
    title: 'My first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    createdAt: new Date(),
    author: authorOne
};

// interfaces as function argument types
function createPost(post: Post): void {
    console.log(`Created post ${post.title} by ${post.author.name}`);
};
createPost(newPost);

// interfaces with arrays
let posts: Post[] = [];
posts.push(newPost);
console.log(posts);

// type aliases
type Rgb = [number, number, number];

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return [r, g, b];
};

const firstColor = getRandomColor();
const secondColor = getRandomColor();
console.log(firstColor, secondColor);

// type aliases with object literal
type User = {
    name: string,
    score: number
};

const userOne: User = {
    name: 'Mario',
    score: 75,
};
console.log(userOne);

// type aliases with function
function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score}`);
};

formatUser(userOne);
formatUser({name: 'Andres', score: 99});

// Union types
let someNum: number | string;
someNum = 1;
someNum = '1';

let email: string | null;
email = null;
email = 'test@gmail.com';

type Id = number | string;
let newId: Id
newId = '21jojoj1212@#!4';
newId = 12;

// Union type pitfall
function swapIdType(id: Id): Id {
    // Can only use props and methods common to
    // both number and string types
    // parseInt(id) ---> not allowed
    return id;
};

// type guards
function swapIdTypeCopy(id: Id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id);
    } else {
        return id.toString();
        // can use number methods and properties
    }
};

const idOne = swapIdTypeCopy('1');
const idTwo = swapIdTypeCopy(1);
console.log(`${typeof(idOne)} -> ${idOne}`);
console.log(`${typeof(idTwo)} -> ${idTwo}`);

// tagged interfaces
interface Stakeholder {
    type: 'stakeholder',
    username: string,
    email: string,
    id: Id
};

interface Person {
    type: 'person',
    firstname: string,
    age: number,
    id: Id
};

function logDetails(value: Stakeholder | Person): void {
    if (value?.type === 'stakeholder') {
        console.log(value.email, value.username);
    };
    if (value?.type === 'person') {
        console.log(value.firstname, value.age);
    };
};

const stakeholderOne: Stakeholder = {
    type: 'stakeholder',
    username: 'Jane',
    email: 'jane@gmail.com',
    id: '2bcdd12'
};

const personOne: Person = {
    type: 'person',
    firstname: 'John',
    age: 23,
    id: 1
};
logDetails(stakeholderOne);
logDetails(personOne);