// Chapter 2 - How javascript code is executes and call stack?
// NOTE - In JS, Everything happens in Execution Context

// When a Js file is loaded it will create a Execution Context
// and in execution context there are two phases - memory creation and code execution

// console.log(x); // returns "undefined", undefined is a special keyword in js
// this is memory creation in memory creation every variable gets memory allocated in memory component
// with a undefined value
// y(); //returns "undefined", because we are accessing y() before its declaration and in memory phase

// var x = 20;
// function y() {
//   console.log(x);
// }

// console.log(x);
// y();

console.log(square1);
console.log(square2);
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square1 = square(n);
var square2 = square(4);
console.log(square1);
console.log(square2);

// Javascript has this thing known as "Call Stack", which is only used to manage "Execution Context".
// call stack stores GEC at the bottom of the stack
