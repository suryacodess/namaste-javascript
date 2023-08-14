// Chapter 13 - functions and first class functions?

// functions are nothing but a block of code or collection of statement which is
// executed when its called.
// functions are created using function keyword and called by its name

// - function statement
// - function expression
// - function declaration
// - anonymous function
// - named function expression
// - first class function (first class citizen)

// function statement - a regular function
function a() {
  console.log("function statement");
}
a();

// function  expression - a function is assign to a variable is known as function expression
var b = function () {
  console.log("function expression");
};
b();

// function declaration - function statement and function declaration are same
function c() {
  console.log("function declaration");
}
c();

// difference between function statement and function expression?
// the difference comes in hoisting when we access these functions before its
// initialisation then function expression will throw reference error: not defined
// because it is a variable not a function

// anonymous function - a function without name is a anonymous function
// function {

// }

// Named function expression - a function is assigned to a varible is known as named function expression
var d = function xyz() {
  console.log("named function expression");
};
d();

// first class functions are those function which gives the ability to pass functions as params, values
// and returns a function from another function is known as first class function
function e() {
  return "surya prakash";
}

function names(fn) {
  console.log(fn);
}
names(e());
