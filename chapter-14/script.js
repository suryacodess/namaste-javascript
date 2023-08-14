// chapter 14 - Callback functions
// Callback functions are those functions which are passed to another functions
// and executed later on
// Callback functions provides asyn programming

function x() {
  return "surya prakash";
}

function names(x) {
  console.log(x);
}
names(x());

setTimeout(() => {
  names("surya prakash srigada");
});
