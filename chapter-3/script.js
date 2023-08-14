// Chapter 3 - Hoisting in Javascript
// Hoisting is a side effect of execution context
// Hoisting is a behavious or phenomenon in which we can access the varibles and functions
// before its initialisation.

console.log(x); // retuns "undefined" because we are accessing x in its memory phase
y(); // prints hoisting in console, because in memory phase y will will store actuall copy of the function
console.log(y); // returns the function statement
// z(); //throws error because z is not a regular function, it is an arrow function
console.log(z); // retutns "undefined" because z is a varible and in memory phase varibles are initialised with a undefined value

var x = 20;
function y() {
  console.log("hoisting!");
}

var z = () => {
  console.log("arrow function!");
};
