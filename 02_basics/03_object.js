const sym = Symbol("key");

const user = {
  name: "Uttam kc",
  [sym]: "mykey",
  roll: 12,
  email: "uttamkc@gmail.com",
  password: "12345",
  address: "pyuthan",
};

console.log(user);
// user.email = "chahu@gmail.com";
// console.log(user);

// console.log(user["name"]);
// console.log(user["roll"]);
// console.log(user[sym]);

// Object.freeze(user);
// user.email = "lambu@gmail.com";
// console.log(user);

user.greet = function () {
  console.log(`greet me ${this.name} `);
};
console.log(user);
console.log(user.greet());