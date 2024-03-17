"use strict";
// 1. this in global space
// inside global space this represents the global object

console.log(this); //global object => window, global

// 2. this inside the function
// the value depends on strict / non strict mode

function x() {
  console.log(this);
}
x();

// this in strict mode - (this substitution)
// If the value of the this keyword is undefined or null then
// this keyward will be replaced with global object
// only in non strict mode
window.x();
// this keyward value will depends upon how the function is called 