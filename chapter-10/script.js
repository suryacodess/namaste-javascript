// Chapter 10 - WHat is Closures?
// A function is written inside another function with having access to its lexical environment

function a() {
  function b() {
    console.log("hey");
  }
  return b;
}

var x = a();
x();

function xy() {
  var a = 100;
  function y() {
    console.log(a);
  }
  y();
}
xy();
