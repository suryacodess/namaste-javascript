// Difference between Undefined and not define in javascript?
// Undefined -
// Undefined is a spacial keyword in javascript, which is given by javascript to a
// variable which we are accessing before its initialisation

console.log(x); // We are x in memory creation, thats why here we are getting undefined
var x;
x = 20;
console.log(x);

// Not define -
// Not define is an error in javascript, when we are accessing a variable which is not exist or
// declared then it will throw not define a reference type error
console.log(y);

