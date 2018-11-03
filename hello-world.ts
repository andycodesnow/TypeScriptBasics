import {Person} from './classes';

var a : number;
var b : number;
var unionC : string | number;
var myTupleyArray: [number, boolean, string];

a = 10;
b = 20; 

var c: number = a + b;

unionC = 1;
unionC = 'String';

myTupleyArray = [1, true, 'MyName'];

console.info('Value of c is ' + c);

console.info('Value of unionC is ' + unionC);

console.info('Value of myTupleyArray is ' + myTupleyArray);

function sum(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

function greeting(): string {
    return 'Good Afternoon!';
}

console.info(sum(1, 2, 3));
console.info(sum(1, 10));

var greet = greeting();

var aPerson : Person = new Person("Aniruddh", "Roy");

console.info("My name is " + aPerson.getfirstName() + " " + aPerson.getlastName());

var bPerson : Person = new Person("Kshouni", "Chakrabarti");
console.info("My wife's name is " + bPerson.getfirstName() + " " + bPerson.getlastName());