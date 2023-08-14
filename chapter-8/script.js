// Chapter 8 - let, const and temporal dead zone
// what is temporal dead zone?
// the time between let variable memory creation and its initialisation

// NOTE - let and const are hoisted

// console.log(b);
// console.log(a);
// let a = 2;
// const b = 20;

// Let
// Let is a new feature of ecmascript6 used to declare variables
// In let redeclaration is not possible but reinitialisation is possible

let a = 20;
console.log(a);
a = 100;
console.log(a);
a = "surya prakash";
console.log(a);

let b;
b = 200;
console.log(b);

// Const
// In Const, it stores constant value that means we cannot update it
// redeclaration and reinitialisation is not possible in const
// and when we declare a const variable then it is mandatory to initialise it

const x = 20;
console.log(x);
// const y; // syntax error
console.log(y);
