// Chapter 15 - Event Loop & Web Apis
// Event loop is a mechanism which constantly checks the call stack
// and callback queues for execution
// there are two types of queues in the js -
// - Callback queue
// - Microtask queue

// console.log("start");

// setTimeout(() => {
//   console.log("settimeout");
// });

// console.log("end");

// in above code, settimeout is a callback function, which is executed later on
// callback functions are stored inside the callback queues and waits for execution
// here event loops check the call stack if it is empty then it will add
// callback queues function inside the call stack for execution

console.log("start");

setTimeout(() => {
  console.log("settimeout");
}, 2000);

fetch("https://www.google.com")
  .then((res) => {
    console.log("success");
  })
  .catch((err) => console.log(err));

console.log("end");

// In the above code callback functions which comes from promises and mutation observor
// are goes inside the microtask queue which has higher priority then callback queue

// WEB APIS
// console
// storage - session storage, local storage, index db
// timer functions - settimeout, setinterval
// dom tree
// https
// url

// these are not part internal part of javascript
// web apis gives permission to access these apis with or without
// window object
