// 1.
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());
// John Doe

// 2.
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const getFullName = person.fullName;

// console.log(getFullName());
// John Doe

// 3.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const getFullName = person.fullName.bind(person);

console.log(getFullName());
