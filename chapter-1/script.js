// Javascript is a scripting programming language, Javascript is most hate and most popular
// and loved language.
// Javascript is a synchronous single threaded language, that means the code is executed line by line only
// and  it has only one main thread

// Everything in Js happens in "Execution Context".
// Execution Context has two components -
// 1. Memory -> Variable Environment
// 2. Code -> Thread of Execution

//console.log("first line");
//console.lo("second line"); // throws error and the program will break here, and wont executed further
//console.log("third line");

console.log("first line");
try {
  console.lo("second line");
} catch (e) {
  console.log(e.message);
}
console.log("third line");
