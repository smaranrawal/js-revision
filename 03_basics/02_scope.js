function display() {
  const username = "Smaran Rawal";
  function inside() {
    const email = "smms@gmail.com";
    console.log(username);
  }
  inside();
  //   console.log(email);
}

display();

//-----------------hoisting--------------
//process of allocation memory before execution
console.log(a);
var a = 10; //is initialized with undefined

//  console.log(b);
//  let b=20;  let is keep in temporal dead zone

// sort();  //throw error beacuse sort() is in tdz:The time between memory creation and variable declaration where the variable exists but cannot be accessed
// const sort = function () {
//   console.log("hell");
// };

sort1(); // this works fine beacuse its already stored in memory 

function sort1() {
  console.log("ooohhh");
}
