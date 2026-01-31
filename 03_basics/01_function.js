// function display() {
//   console.log("hell");
// }

// display();

function user(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}

console.log("Sum", user(3, 4));

function calculatePrice(num1, ...value) {
  return value;
}

console.log(calculatePrice(200, 300, 400));

const user1 = {
  name: "smaran",
  address: "tikapur",
  email: "smaran@gmail.com",
};

function display(userValue) {
  console.log(`Hello i am ${userValue.name}`);
}

// display(user1)
display({ name: "ram", age: 12 });

const arry = ["Ram", "Sam", "Hari"];

function displayUser(userValue) {
  console.log(arry[1]);
}

displayUser(arry);

function play(username) {
  if (!username) {
    console.log("user no found");
    
  }

  return `hello ${username}`;
}

console.log(play());
