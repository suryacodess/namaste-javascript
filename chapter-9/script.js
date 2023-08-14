// Chapter 9 - Block Scope and Shadowing
// Block is nothing but curly brase - {}
// Scope is where we declare the variables and functions

{
  // block
}

// Let and Const are block level scope, you cannot access these variables outside its block

var a = 100;
{
  var a = 20; // shadowing the a
  let b = 40;
  const c = 60;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a); // global scrope
// console.log(b); // error - reference error - not defined
// console.log(c); // error - reference error - not defined

let b = 2;
{
  let b = 2000;
  console.log(b);
}

var c = 2;
{
  let c = 4000;
  console.log(c);
}
