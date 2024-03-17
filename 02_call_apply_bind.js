// const person1 = {
//   firstName: "Rohit",
//   lastName: "Sharma",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };
// person1.printFullName();

// const person2 = {
//   firstName: "Deeksha",
//   lastName: "Sharma",
// };
// // Function borrowing
// person.printFullName.call(person2);

// We generally keep function outside the object
const printFullName = function (hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      "from" +
      " " +
      hometown +
      " " +
      state
  );
  return (
    this.firstName +
    " " +
    this.lastName +
    " " +
    "from" +
    " " +
    hometown +
    " " +
    state
  );
};

const person1 = {
  firstName: "Rohit",
  lastName: "Sharma",
};
const person2 = {
  firstName: "Deeksha",
  lastName: "Sharma",
};

printFullName.call(person1, "Hamirpur", "Himachal Pradesh");
printFullName.apply(person2, ["Hamirpur", "Himachal Pradesh"]);

const printMyName = printFullName.bind(person1, "Hamirpur", "Himachal Pradesh");

console.log(printMyName());
