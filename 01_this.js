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

// this inside non strict mode - (this substitution)
// If the value of the this keyword is undefined or null then
// this keyward will be replaced with global object
// only in non strict mode

window.x();
// this keyward value will depends upon how the function is called

// 3. This inside a object's method
const student = {
  name: "Rohit",
  printName: function () {
    console.log(this.name);
  },
};

// student.printName(); //obj

// call, apply, bind

const student2 = {
  name: "Deeksha",
};

// student.printName.call(student2);

// 4. this inside arrow functions
// retains the this value of the enclosing lexical context
const obj = {
  print: () => {
    console.log(this);
  },
};

// obj.print();

// 5. this inside nested arrow function

const obj2 = {
  a: 44,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
// Here enclosing lexical context of y is function x
// so it will behave as this of function x
obj2.x();

// 6. This inside DOM elements => reference to HTML element
