const num = new Number(100);
console.log(num);

console.log(num.toString().length);

const num2 = 1000000;

console.log(num2.toLocaleString());
console.log(num.toFixed(2));

const num3 = 123.333;

console.log(num3.toPrecision(3));

//--------------------Math

// console.log(Math.floor(4.333));
// console.log(Math.ceil(4.333))
// console.log(Math.round(8.21));

console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *  (max - min + 1)) + min);
