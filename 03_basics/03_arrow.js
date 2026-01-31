const user = {
  name: "Smaran",
  email: "Smaran@gmail.com",
  info: function () {
    console.log(`${this.name},Welcome!!`);
    // console.log(this);
  },
};

// user.info();
// user.name = "tata";
// user.info();

// const display = (num1, num2) => {
//   return num1 + num2;
// };

// const display = (num1, num2) => num1 + num2;
const display = (num1, num2) => ({ name: "Smaran" });
console.log(display());
