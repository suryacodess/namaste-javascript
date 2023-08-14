// Chapter 7 - Scope Chain in Javascript
// Scope chain is directly related to the lexical environment

// what is lexical environment?
// It is nothing but local scope with having access to its parent lexical enviornment (Local memory)

// what is scope?
// Scope is nothing but a block where we can declare variable and functions - {}

var x = 20;

function a() {
  function b() {
    function c() {
      var d = () => {
        console.log("c function", x);
      };
      d();
    }
    c();
  }
  b();
}
a();
