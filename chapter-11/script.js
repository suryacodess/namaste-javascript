// Most important questions asked in interview

// setTimeout(() => {
//   console.log("set timeout");
// }, 1000);

// console.log("hello");

// setInterval(() => {
//   console.log("set interval");
// }, 1000);

// function x() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// function y() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// y();

function xy() {
  function inner(x) {
    for (var i = x; i < 5; i++) {
      setTimeout(() => {
        console.log(x++);
      }, 1000);
    }
  }
  inner(0);
}
xy();