"use strict";
// let character: string;
// let age: number;
// let isLoggedIn: Boolean;
// // arrays
// let ninjas: string[] = [];
// ninjas.push("shaun");
// // union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push("hello");
// mixed.push(20);
// mixed.push(false);
// let uid: string | number;
// uid = "123";
// uid = 1233;
// // objects
// let ninjaOne: object;
// ninjaOne = { name: "yoshi" };
// let ninjaTwo: {
//   name: string;
//   age: number;
//   beltColour: string;
// };
// ninjaTwo = { name: "mario", age: 20, beltColour: "black" };
// // TypeScript Tutorial #6  Dynamic (any) Types
// let age: any = 25;
// age = true;
// console.log(age);
// age = { name: "luigi" };
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push("mario");
// mixed.push(false);
// console.log(mixed);
// let ninja: { name: any; age: any };
// ninja = { name: "yoshi", age: 25 };
// console.log(ninja);
// ninja = { name: 25, age: "yoshi" };
// console.log(ninja);
// // Typescript Tutorial #7
// console.log("test");
// // Typescript Tutorial #8
// let greet: Function;
// greet = () => {
//   console.log("hello, again");
// };
// const add = (a: number, b: number, c: number | string = 10): void => {
//   console.log(a + b);
//   console.log(c);
// };
// add(5, 10, 20);
// const minus = (a: number, b: number): number => {
//   return a + b;
// };
// let result = minus(10, 7);
// // Typescript Tutorial #9 -Type Aliases
// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum };
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };
// const greetAgain = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };
// // Typescript Tutorial #10 - Function Signatures
// // let greet: Function;
// // example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };
// // example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// };
// // example 3
// let logDetails: (obj: { name: string; age: number }) => void;
// type person = { name: string; age: number };
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// };
// // TypeScript Tutorial #11 - The DOM & Type Casting
