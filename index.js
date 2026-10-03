// let user = {
//   name: "lalit",
//   age: 25,
// };

// const p = {
//   run: () => {
//     alert("running");
//   },
// };

// user.__proto__ = p;

// console.log(user);

// function User(name = "abcd") {
//   this.name = name;
//   //   this.sayHi = function () {
//   //     console.log(this.name);
//   //   };
// }

// User.prototype.sayHi = function () {
//   console.log(this.name);
// };
// let u1 = new User();
// let u2 = new User("abhi");
// let u3 = new User();
// u1.sayHi();
// u2.sayHi();

let users = ["anil", "sam", "peter"];
let people = ["abhi", "lalit", "ab"];
Array.prototype.getFirst = function () {
  return this[1];
};

console.log(users.getFirst));
console.log(people.getFirst());
