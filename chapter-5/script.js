// what is shortest program in the javascript?
// An empty file is the shortest program in the javascript, whenever a javascript file is loaded
// into javascript engine then it will create global execution context and in that a special object is created
// which is window

var x = 1;
console.log(x);
console.log(window.x);
console.log(this.x);

// x is created inside the global scope

function a() {
  var x = 10;
  var y = 20;
  console.log(x); // 10
  console.log(this.x); // 10
  console.log(window.x); // 1
  // here this x is created inside the function a, that means it is local scope
}
a();