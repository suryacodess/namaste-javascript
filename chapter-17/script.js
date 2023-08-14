// Chapter 17 - Trust issues with setTimeout

console.log("start");
setTimeout(() => {
  console.log("settimeout");
});

setTimeout(() => {
  console.log("settimeout2");
}, 2000);

setTimeout(() => {
  console.log("settimeout2");
}, 2000);

console.log("end");
